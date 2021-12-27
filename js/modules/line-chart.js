/* line chart */

import { ui } from './../core/globals.js';
export default () => ui;

ui.lineChart = {

    // targets
    target: 'ui-line-chart-holder',

    // main classnames
    nameLines: 'ui-line-chart',

    nameGridRoot: 'ui-line-root-grid',
    nameGridX: 'ui-line-x-grid',
    nameGridY: 'ui-line-y-grid',

    nameInfo: 'ui-line-chart-info',

    nameTypePrefix: 'ui-',

    // helper classnames
    nameLoaded: 'ui-loaded',
    nameNotLoaded: 'ui-no-loaded',

    nameResized: 'ui-resized',

    // ids
    idGradient: 'ui-gradient',

    // tags
    tagLines: 'li',

    tagInfoColor: 'span',
    tagInfoStat: 'b',

    // values
    colors: [
        'hsl(30, 100%, 63%)',
        'hsl(347, 100%, 69%)',
        'hsl(260, 100%, 70%)',
        'hsl(180, 48%, 52%)',
        'hsl(42, 100%, 67%)',
        'hsl(13, 26%, 41%)',
        'hsl(65, 49%, 54%)',
        'hsl(0, 0%, 42%)',
        'hsl(225, 43%, 57%)'
    ],

    showGrid: true,
    showGridText: true,
    showInfo: true,

    rows: 5,
    rowsHeight: 50,

    curveSize: 10,

    gridStroke: 1,
    gridStrokeArray: 4,

    lineStroke: 2,
    circleSize: 4,

    top: 6,
    right: 8,
    bottom: 15,
    left: 35,

    dotted: 'dotted',
    dashed: 'dashed',
    curved: 'curved',
    filled: 'filled',

    // data attributes
    dataX: 'data-ui-x',
    dataY: 'data-ui-y',

    dataSize: 'data-ui-size',
    dataLink: 'data-ui-url',
    dataType: 'data-ui-type',
    dataName: 'data-ui-name',
    dataStep: 'data-ui-step'

};

(() => {

    // load charts
    ui.lineChart.Start = function () {

        var i, j, k, charts, lines, data, x, y, yMax, yMin, link, size, rows, rowsHeight, col, posX, posY, html, type, pathStart, paths, circles, total, name;

        ui.lineChart.Init = function (method, resizer) {

            if (method === ui.lineChart.nameLoaded) {
                charts = ui.find('.' + ui.lineChart.target + '.' + ui.lineChart.nameLoaded);

            } else if (method === ui.globals.eventDomChange) {

                charts = ui.find('.' + ui.lineChart.target + ':not(.' + ui.lineChart.nameLoaded + '):not(.' + ui.lineChart.nameResized + ')');
                ui.removeClass('.' + ui.lineChart.target, ui.lineChart.nameResized);

            } else {
                charts = ui.find('.' + ui.lineChart.target + ':not(.' + ui.lineChart.nameLoaded + ')');
            }

            if (charts.length === 0) { return; }

            ui.each(charts,

                function () {

                    lines = ui.find('.' + ui.lineChart.nameLines, this);
                    if (lines.length === 0) { return; }

                    data = [];

                    data.name = [];
                    data.color = [];
                    data.backup = [];

                    if (resizer !== undefined && resizer) {
                        ui.addClass(this, ui.lineChart.nameLoaded + ' ' + ui.lineChart.nameResized);

                    } else {
                        ui.addClass(this, ui.lineChart.nameLoaded);
                    }

                    // calculate height of chart
                    size = this.getAttribute(ui.lineChart.dataSize);

                    rows = ui.lineChart.rows;
                    rowsHeight = ui.lineChart.rowsHeight;

                    if (size !== null && size !== '') {

                        size = size.split(',');
                        if (!isNaN(size[0]) && !isNaN(size[1])) {

                            rows = parseInt(size[0]);
                            rowsHeight = size[1];

                        }

                    }

                    data.width = this.offsetWidth;
                    data.height = rows * rowsHeight;

                    // read all x parameters
                    x = this.getAttribute(ui.lineChart.dataX);

                    if (x !== null && x !== '') {
                        data.x = x.split(',');

                    } else { return; }

                    x = data.x;

                    // read all y parameters
                    yMax = [];
                    data.pass = false;

                    ui.each(lines,

                        function (i) {

                            data[i] = [];

                            data[i].y = [];
                            data[i].links = [];

                            data.backup += this.outerHTML;

                            ui.each(ui.find(ui.lineChart.tagLines, this),

                                function () {

                                    y = this.getAttribute(ui.lineChart.dataY);

                                    if (y !== null && y !== '') {
                                        data[i].y.push(y);

                                    } else { return; }

                                    link = this.getAttribute(ui.lineChart.dataLink);

                                    if (link !== null && link !== '') {
                                        data[i].links.push(link);

                                    } else {
                                        data[i].links.push('');
                                    }

                                });

                            if (data.x.length === data[i].y.length) {
                                yMax.push(data[i].y); // push y datas to calculate the max value of all datas

                            } else {
                                data.pass = true; // x and y datas are not equal
                            }

                        });

                    if (data.pass) { return; }

                    // get min and max values of all y datas
                    yMax = yMax.toString().split(',');

                    yMax = yMax.filter((item, pos) => yMax.indexOf(item) === pos); // convert array as unique
                    yMax = yMax.sort((a, b) => b - a); // convert array as desc

                    yMin = parseInt(yMax[yMax.length - 1]);
                    yMax = Math.ceil((parseInt(yMax[0]) - yMin) / rows) * rows + yMin; // convert yMax to divide with rows

                    // start html
                    data.svgHeight = data.height;

                    if (ui.lineChart.showInfo || ui.lineChart.showGridText) {
                        data.svgHeight += 15;
                    }

                    html = '<svg style="width: ' + data.width + 'px; height: ' + data.svgHeight + 'px;">';

                    // check column stepping
                    data.step = this.getAttribute(ui.lineChart.dataStep);
                    if (data.step !== null && data.step !== '' && data.step !== '0') {

                        if (isNaN(data.step)) {
                            data.step = false;

                        } else {

                            data.stepArr = [];

                            for (k = 0; k < Math.ceil(x.length / data.step); k++) {
                                data.stepArr.push(k * data.step);
                            }

                        }

                    } else { data.step = false; }

                    // create grids
                    col = (data.width - (ui.lineChart.right + ui.lineChart.left)) / (x.length - 1);
                    html += '<g class="' + ui.lineChart.nameGridX + '">';

                    for (i = 0; i < x.length; i++) {

                        posX = (i * col) + ui.lineChart.left;

                        if (ui.lineChart.showGridText) {

                            if (data.step) {

                                if (data.stepArr.indexOf(i) > -1) {
                                    html += '<text ' +
                                                'x="' + posX + '" ' +
                                                'y="' + (data.height - ui.lineChart.bottom + 20) +
                                            '">' +
                                                x[i] +
                                            '</text>';
                                }

                            } else {
                                html += '<text ' +
                                            'x="' + posX + '" ' +
                                            'y="' + (data.height - ui.lineChart.bottom + 20) +
                                        '">' +
                                            x[i] +
                                        '</text>';
                            }

                        }

                        if (i === 0 || ui.lineChart.showGrid) {
                            html += '<line ' +
                                        'x1="' + posX + '" ' +
                                        'x2="' + posX + '" ' +
                                        'y1="' + ui.lineChart.top + '" ';
                        }

                        if (i === 0) { // root of x grid
                            html += 'y2="' + Math.ceil(data.height - (ui.lineChart.bottom + (ui.lineChart.gridStroke / 2))) +'" ' +
                                    'class="' + ui.lineChart.nameGridRoot + '" ' +
                                    'stroke-width="' + ui.lineChart.gridStroke + '"';

                        } else {
                            html += 'y2="' + (data.height - ui.lineChart.bottom) + '" ' +
                                    'stroke-dasharray="' + ui.lineChart.gridStrokeArray + '"';
                        }

                        html += '></line>';

                    }

                    html += '</g>' +
                        '<g class="' + ui.lineChart.nameGridY + '">';

                    for (i = 0; i <= rows; i++) {

                        posY = parseInt((i * (data.height - (ui.lineChart.top + ui.lineChart.bottom)) / rows) + ui.lineChart.top);

                        if (ui.lineChart.showGridText) {
                            html += '<text ' +
                                        'x="' + (ui.lineChart.left - 10) + '" ' +
                                        'y="' + (posY + 4) +
                                    '">' +
                                        (parseInt((yMax - yMin) / rows) * (rows - i) + yMin) +
                                    '</text>';
                        }

                        if (i === rows || ui.lineChart.showGrid) {
                            html += '<line ' +
                                        'x2="' + (data.width - ui.lineChart.right + 1) + '" ' +
                                        'y1="' + posY + '" ' +
                                        'y2="' + posY + '" ';
                        }

                        if (i >= rows) { // root of y grid
                            html += 'x1="' + Math.ceil(ui.lineChart.left - (ui.lineChart.gridStroke / 2)) + '" ' +
                                    'class="' + ui.lineChart.nameGridRoot + '" ' +
                                    'stroke-width="' + ui.lineChart.gridStroke + '"';

                        } else {
                            html += 'x1="' + Math.floor(ui.lineChart.left + ui.lineChart.gridStroke) + '" ' +
                                    'stroke-dasharray="' + ui.lineChart.gridStrokeArray + '"';
                        }

                        html += '></line>';

                    }

                    html += '</g>';

                    // create svg contents
                    circles = '';
                    pathStart = [];

                    html += '<g>';

                    ui.each(lines,

                        function (j) {

                            paths = '';
                            y = data[j].y;

                            // set color
                            if (j > ui.lineChart.colors.length - 1) {
                                data.color.push(ui.lineChart.colors[j - ui.lineChart.colors.length]);

                            } else {
                                data.color.push(ui.lineChart.colors[j]);
                            }

                            // create paths and circles
                            for (i = 0; i < y.length; i++) {

                                posX = (i * col) + ui.lineChart.left;
                                posY = data.height - (data.height + (((data.height - (ui.lineChart.top + ui.lineChart.bottom)) * (y[i] - yMax)) / (yMax - yMin)) - ui.lineChart.top);

                                // get line type
                                type = this.getAttribute(ui.lineChart.dataType);
                                if (type === null) { type = ''; }

                                // create lines
                                if (i === 0) { // start point

                                    pathStart.x = posX;
                                    pathStart.y = posY;

                                }

                                if (type.indexOf(ui.lineChart.curved) > -1) { // curved

                                    data.percent = parseInt((ui.lineChart.curveSize * (i * col)) / 100);

                                    if (i === 1) { // start curves

                                        paths += ' C ' + (col + data.percent) + ' ' + (posY - data.percent) + ',' +
                                            ' ' + (col + data.percent) + ' ' + posY + ',' +
                                            ' ' + posX + ' ' + posY;

                                    } else if (i > 0) { // other curves

                                        paths += ' S ' + ((i * col) - data.percent) + ' ' + posY + ',' +
                                            ' ' + posX + ' ' + posY;

                                    }

                                } else { // default

                                    if (i > 0) { // other points
                                        paths += ' L ' + posX + ' ' + posY;
                                    }

                                }

                                // create circles
                                circles += '<circle ' +
                                                'cx="' + posX + '" ' +
                                                'cy="' + posY + '" ' +
                                                'r="' + ui.lineChart.circleSize + '" ' +
                                                'fill="' + data.color[j] + '" ' +
                                                'stroke="' + data.color[j] + '" ' +
                                                'stroke-width="0" ';

                                if (data[j].links[i] !== '') { // check links
                                    circles += 'onclick="location.href = \'' + data[j].links[i] + '\';"';
                                }

                                if (ui.tooltip === undefined) { // Optional!

                                    circles += '/>' +
                                                '<title>' + y[i] + '</title>';

                                } else {

                                    circles += ui.tooltip.dataTooltip + ' ' +
                                                'title="' + y[i] + '" ' +
                                            '/>';

                                }

                                '</circle>';

                            }

                            // create paths
                            if (type.indexOf(ui.lineChart.dashed) > -1) { // dashed
                                html += '<path class="' + ui.lineChart.nameTypePrefix + ui.lineChart.dashed + '" ';

                            } else if (type.indexOf(ui.lineChart.dotted) > -1) { // dotted
                                html += '<path class="' + ui.lineChart.nameTypePrefix + ui.lineChart.dotted + '" ';

                            } else {
                                html += '<path ';
                            }

                            html += 'd="M ' + pathStart.x + ' ' + pathStart.y +
                                    paths + '" ' +
                                    'stroke="' + data.color[j] + '" ' +
                                    'stroke-width="' + ui.lineChart.lineStroke + '" ' +
                                '/>';

                            if (type.indexOf(ui.lineChart.filled) > -1) { // add filled paths

                                data.id = new Date().getTime();
                                data.id = data.id.toString();
                                data.id = data.id.substring(data.id.length - 4, data.id.length) + j;

                                html += '<linearGradient id="' + ui.lineChart.idGradient + data.id + '" x1="0" y1="0" x2="0" y2="100%">' +
                                            '<stop offset="0" stop-color="' + data.color[j] + '"></stop>' +
                                            '<stop offset="100%" stop-color="' + data.color[j] + '" stop-opacity="0.0"></stop>' +
                                        '</linearGradient>' +

                                        '<path d="M ' + (pathStart.x + (ui.lineChart.gridStroke / 2)) + ' ' + pathStart.y +

                                            paths +

                                            ' V ' + (data.height - ui.lineChart.bottom - (ui.lineChart.gridStroke / 2)) +
                                            ' H ' + ((ui.lineChart.gridStroke / 2) + ui.lineChart.left) + ' Z" ' +

                                            'stroke="0" ' +
                                            'fill="url(#' + ui.lineChart.idGradient + data.id + ')" ' +
                                            'stroke-width="' + ui.lineChart.lineStroke + '" ' +
                                            'class="' + ui.lineChart.nameTypePrefix + ui.lineChart.filled + '" ' +

                                        '/>';

                            }

                            // get data names
                            name = this.getAttribute(ui.lineChart.dataName);

                            if (name !== null && name !== '') {
                                data.name.push(name);

                            } else {
                                data.name.push('');
                            }

                        });

                    // close svg tag
                    html += circles + '</g></svg>';

                    if (data.width === 0) {
                        ui.removeClass(this, ui.lineChart.nameLoaded + ' ' + ui.lineChart.nameResized);
                    }

                    // create info
                    if (ui.lineChart.showInfo) {

                        html += '<ul class="' + ui.lineChart.nameInfo + '">';

                        for (i = 0; i < lines.length; i++) {

                            total = 0;

                            for (j = 0; j < data[i].y.length; j++) {
                                total += parseInt(data[i].y[j]);
                            }

                            html += '<li>' +
                                '<' + ui.lineChart.tagInfoColor +' style="background: ' + data.color[i] + '">' +
                                '</' + ui.lineChart.tagInfoColor + '>';

                            if (data.name[i] === '') {
                                html += '<' + ui.lineChart.tagInfoStat + '>' + total;

                            } else {
                                html += data.name[i] + ': <b>' + total;
                            }

                            html += '</' + ui.lineChart.tagInfoStat + '></li>';

                        }

                        html += '</ul>';

                    }

                    // parse html
                    this.innerHTML = data.backup;
                    this.insertAdjacentHTML('beforeEnd', html);

                    // empty variables
                    data = [];
                    html = '';

                });

        };

        ui.lineChart.Init(ui.lineChart.nameNotLoaded); // show not loaded charts

    };

    // loaders
    ui.onload(ui.lineChart.Start);

    ui.on(window,
        'resize',

        function () {
            ui.lineChart.Init(ui.lineChart.nameLoaded, true); // resize loaded charts
        });

    ui.on(document,
        ui.globals.eventDomChange,

        function () {
            ui.lineChart.Init(ui.globals.eventDomChange); // resize loaded charts
        });

    // ajax callback loader
    ui.on(document,
        ui.globals.eventAjaxCallback,

        function () {

            if (ui.ajax.classNames.indexOf(ui.lineChart.target) > -1) {
                ui.lineChart.Init(ui.lineChart.nameNotLoaded); // show not loaded charts
            }

        });

})();
