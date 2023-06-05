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

    includeZero: true,

    showGrid: true,
    showGridText: true,
    showInfo: true,
    showInfoStats: true,

    showGridTextSpace: 7,
    showInfoSpace: 7,

    rows: 5,
    rowsHeight: 50,

    curveSize: 1,

    gridStroke: 1,
    gridStrokeArray: 4,

    lineStroke: 2,
    circleSize: 4,

    top: 6,
    right: 24,
    bottom: 15,
    left: 54,

    dotted: 'dotted',
    dashed: 'dashed',
    curved: 'curved',
    filled: 'filled',

    // data attributes
    dataX: 'data-ui-x',
    dataY: 'data-ui-y',

    dataPrefix: 'data-ui-prefix',
    dataSuffix: 'data-ui-suffix',

    dataSize: 'data-ui-size',
    dataLink: 'data-ui-url',
    dataType: 'data-ui-type',
    dataName: 'data-ui-name',
    dataStep: 'data-ui-step',

    dataNoCircles: 'data-ui-no-circles',
    dataRepeats: 'data-ui-repeats',

};

// load charts
ui.lineChart.Start = () => {

    var charts, lines, data, x, y, yMax, yMin, link, size, rows, rowsHeight, col, posX, posY, html, type, pathStart, circles, total, name;

    ui.lineChart.Init = function (method, resizer) {

        if (method === ui.lineChart.nameLoaded) {
            charts = ui.find('.' + ui.lineChart.target + '.' + ui.lineChart.nameLoaded);

        } else if (method === ui.globals.eventDomChange) {
            charts = ui.find('.' + ui.lineChart.target + ':not(.' + ui.lineChart.nameLoaded + '):not(.' + ui.lineChart.nameResized + ')');

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

                Array.prototype.forEach.call(lines,

                    (el, i) => {

                        data[i] = [];

                        data[i].y = [];
                        data[i].links = [];

                        Array.prototype.forEach.call(ui.find(ui.lineChart.tagLines, el),

                            (item) => {

                                y = item.getAttribute(ui.lineChart.dataY);
                                data[i].y.push(y);

                                link = item.getAttribute(ui.lineChart.dataLink);

                                if (link !== null && link !== '') {
                                    data[i].links.push(link);

                                } else data[i].links.push('');

                            });

                        yMax.push(data[i].y); // push y datas to calculate the max value of all datas

                    });

                // include zero
                if (ui.lineChart.includeZero) yMax.push(0);

                // get min and max values of all y datas
                yMax = yMax.toString().split(',');

                yMax = yMax.filter((item, pos) => { // convert array as unique (ignore empty items!)
                    return (item !== '' && yMax.indexOf(item) === pos)
                });

                yMax = yMax.sort((a, b) => b - a); // convert array as desc

                yMin = yMax[yMax.length - 1];
                if (yMin.indexOf('.') === 0) yMin = Math.floor(yMin); // convert only decimal data. ex: .00
                yMin = parseInt(yMin);

                // convert yMax to divide with rows
                if (parseInt(yMax[1]) > 0) { // decimals

                    yMax = Math.ceil((parseInt(yMax[0]) - yMin) / rows) * rows + yMin;
                    yMax++;

                } else yMax = Math.ceil((parseInt(yMax[0]) - yMin) / rows) * rows + yMin;

                // start html
                data.svgHeight = data.height;

                if (ui.lineChart.showInfo) data.svgHeight += ui.lineChart.showInfoSpace;
                if (ui.lineChart.showGridText) data.svgHeight += ui.lineChart.showGridTextSpace;

                html = '<svg style="width: ' + data.width + 'px; height: ' + data.svgHeight + 'px;">';

                // check column stepping
                data.step = this.getAttribute(ui.lineChart.dataStep);
                if (data.step !== null && data.step !== '' && data.step !== '0') {

                    if (isNaN(data.step)) {
                        data.step = false;

                    } else {

                        data.stepArr = [];

                        for (let m = 0; m < Math.ceil(x.length / data.step); m++) {
                            data.stepArr.push(m * data.step);
                        }

                    }

                } else { data.step = false; }

                // create grids
                col = (data.width - (ui.lineChart.right + ui.lineChart.left));

                let rowLength = x.length - 1;
                if (rowLength === 0) rowLength = 1; // ignore infinity

                col = col / rowLength;

                html += '<g class="' + ui.lineChart.nameGridX + '">';

                for (let k = 0; k < x.length; k++) {

                    posX = (k * col) + ui.lineChart.left;

                    if (ui.lineChart.showGridText) {

                        if (data.step) {

                            if (data.stepArr.indexOf(k) > -1) {

                                html += '<text ' +
                                            'x="' + posX + '" ' +
                                            'y="' + (data.height - ui.lineChart.bottom + 20) +
                                        '">' +
                                            x[k] +
                                        '</text>';
                            }

                        } else {

                            html += '<text ' +
                                        'x="' + posX + '" ' +
                                        'y="' + (data.height - ui.lineChart.bottom + 20) +
                                    '">' +
                                        x[k] +
                                    '</text>';
                        }

                    }

                    if (ui.lineChart.showGrid) {

                        html += '<line ' +
                                    'x1="' + posX + '" ' +
                                    'x2="' + posX + '" ' +
                                    'y1="' + ui.lineChart.top + '" ';

                        if (k === 0) { // root of x grid

                            html += 'y2="' + Math.ceil(data.height - (ui.lineChart.bottom + (ui.lineChart.gridStroke / 2))) +'" ' +
                                    'class="' + ui.lineChart.nameGridRoot + '" ' +
                                    'stroke-width="' + ui.lineChart.gridStroke + '"';

                        } else {

                            html += 'y2="' + (data.height - ui.lineChart.bottom) + '" ' +
                                    'stroke-dasharray="' + ui.lineChart.gridStrokeArray + '"';

                        }

                        html += '></line>';

                    }

                }

                html += '</g>' +
                    '<g class="' + ui.lineChart.nameGridY + '">';

                let prefix = this.getAttribute(ui.lineChart.dataPrefix);
                if (prefix === null || size === '') prefix = '';

                let suffix = this.getAttribute(ui.lineChart.dataSuffix);
                if (suffix === null || size === '') suffix = '';

                for (let l = 0; l <= rows; l++) {

                    posY = parseInt((l * (data.height - (ui.lineChart.top + ui.lineChart.bottom)) / rows) + ui.lineChart.top);

                    if (ui.lineChart.showGridText) {

                        let val = parseInt(((yMax - yMin) / rows) * (rows - l) + yMin);

                        if (val > 50) val = parseInt(val / 10) * 10;
                        if (val < 0) val--;

                        html += '<text ' +
                                    'x="' + (ui.lineChart.left - 10) + '" ' +
                                    'y="' + (posY + 4) +
                                '">' +
                                    prefix + val + suffix +
                                '</text>';
                    }

                    if (ui.lineChart.showGrid) {

                        html += '<line ' +
                                    'x2="' + (data.width - ui.lineChart.right + 1) + '" ' +
                                    'y1="' + posY + '" ' +
                                    'y2="' + posY + '" ';

                        if (l >= rows) { // root of y grid

                            html += 'x1="' + Math.ceil(ui.lineChart.left - (ui.lineChart.gridStroke / 2)) + '" ' +
                                    'class="' + ui.lineChart.nameGridRoot + '" ' +
                                    'stroke-width="' + ui.lineChart.gridStroke + '"';

                        } else {

                            html += 'x1="' + Math.floor(ui.lineChart.left + ui.lineChart.gridStroke) + '" ' +
                                    'stroke-dasharray="' + ui.lineChart.gridStrokeArray + '"';

                        }

                        html += '></line>';

                    }

                }

                html += '</g>';

                // create svg contents
                circles = '';
                pathStart = [];

                html += '<g>';

                Array.prototype.forEach.call(lines,

                    (el, j) => {

                        let paths = '';

                        y = data[j].y;

                        // set color
                        if (j > ui.lineChart.colors.length - 1) {
                            data.color.push(ui.lineChart.colors[j - ui.lineChart.colors.length]);

                        } else {
                            data.color.push(ui.lineChart.colors[j]);
                        }

                        // create paths and circles
                        let noCircles = el.getAttribute(ui.lineChart.dataNoCircles);
                        if (noCircles === null || noCircles === '') noCircles = false; else noCircles = true;

                        // repeated values
                        let repeats = el.getAttribute(ui.lineChart.dataRepeats);
                        if (repeats === null || noCircles === '') repeats = false;

                        // get line type
                        type = el.getAttribute(ui.lineChart.dataType);
                        if (type === null || type === undefined) { type = ''; }

                        const createCircles = (n) => {

                            if (noCircles) return;

                            circles += '<circle ' +
                                            'cx="' + posX + '" ' +
                                            'cy="' + posY + '" ' +
                                            'r="' + ui.lineChart.circleSize + '" ' +
                                            'fill="' + data.color[j] + '" ' +
                                            'stroke="' + data.color[j] + '" ' +
                                            'stroke-width="0" ';

                            if (data[j].links[n] !== '') { // check links
                                circles += 'onclick="location.href = \'' + data[j].links[n] + '\';"';
                            }

                            if (ui.tooltip === undefined) {

                                circles += '/>' +
                                            '<title>' + (y[n] ? y[n] : 0) + '</title>';

                            } else { // Optional!

                                circles += ui.tooltip.dataTooltip + ' ' +
                                        'name="' + (y[n] ? y[n] : 0) + '" ' +
                                    '/>';

                            }

                            '</circle>';

                        }

                        const removeReTypedCurves = (data) => {
                            return data.replace(/M L |M C |M S +[\d\s\.]+\, /g, 'M ');
                        }

                        const createPaths = (pathsData, fromStart) => {

                            if (type.indexOf(ui.lineChart.dashed) > -1) { // dashed
                                html += '<path class="' + ui.lineChart.nameTypePrefix + ui.lineChart.dashed + '" ';

                            } else if (type.indexOf(ui.lineChart.dotted) > -1) { // dotted
                                html += '<path class="' + ui.lineChart.nameTypePrefix + ui.lineChart.dotted + '" ';

                            } else html += '<path '; // default

                            html += 'd="M';
                            if (fromStart) html += ' ' + pathStart.x + ' ' + pathStart.y;

                            html += pathsData + '" ' +
                                    'stroke="' + data.color[j] + '" ' +
                                    'stroke-width="' + ui.lineChart.lineStroke + '" ' +
                                '/>';

                            html = removeReTypedCurves(html);

                        }

                        const createFilledPaths = (id, pathsData, fromStart, cutted) => {

                            if (type.indexOf(ui.lineChart.filled) > -1) {

                                html += '<linearGradient id="' + ui.lineChart.idGradient + id + '" x1="0" y1="0" x2="0" y2="100%">' +
                                            '<stop offset="0" stop-color="' + data.color[j] + '"></stop>' +
                                            '<stop offset="100%" stop-color="' + data.color[j] + '" stop-opacity="0.0"></stop>' +
                                        '</linearGradient>';

                                html += '<path d="M';
                                if (fromStart) html += ' ' + (pathStart.x + (ui.lineChart.gridStroke / 2)) + ' ' + pathStart.y;

                                const cuttedStart = cutted ? cutted : (ui.lineChart.gridStroke / 2) + ui.lineChart.left

                                html += pathsData +

                                        ' V ' + (data.height - ui.lineChart.bottom - (ui.lineChart.gridStroke / 2)) +
                                        ' H ' + cuttedStart + ' Z" ' +

                                        'stroke="0" ' +
                                        'fill="url(#' + ui.lineChart.idGradient + id + ')" ' +
                                        'stroke-width="' + ui.lineChart.lineStroke + '" ' +
                                        'class="' + ui.lineChart.nameTypePrefix + ui.lineChart.filled + '" ' +

                                    '/>';

                                html = removeReTypedCurves(html);

                            }

                        }

                        if (y.length === 0) {

                            posX = col + ui.lineChart.left;

                            let range = yMax - yMin; // ignore infinity
                            if (range === 0) range = 1;

                            posY = data.height - (data.height + (((data.height - (ui.lineChart.top + ui.lineChart.bottom)) * yMax) / range) - ui.lineChart.top);

                            if (posY === ui.lineChart.top) posY = (data.svgHeight - ui.lineChart.bottom - 14); // repeated zero datas
                            else posY += ui.lineChart.top;

                            pathStart.x = posX;
                            pathStart.y = posY;

                            createCircles(0);

                        }

                        // check all y data repeated
                        let allRepeated = false;

                        if (repeats === 'hide') {

                            let repeatedlength = 0;

                            for (let r = 0; r < y.length; r++) {
                                if (y[0] === y[r]) repeatedlength += 1;
                            }

                            if (repeatedlength === y.length) allRepeated = true;

                        }

                        // random id
                        let randomId = new Date().getTime().toString();
                        randomId = randomId.substring(randomId.length - 4, randomId.length) + j;

                        // create lines, circles and paths
                        let pathCut = null;

                        for (let n = 0; n < y.length; n++) {

                            posX = (n * col) + ui.lineChart.left;

                            let range = yMax - yMin; // ignore infinity
                            if (range === 0) range = 1;

                            posY = data.height - (data.height + (((data.height - (ui.lineChart.top + ui.lineChart.bottom)) * (y[n] - yMax)) / range) - ui.lineChart.top);

                            if (posY === ui.lineChart.top) posY = (data.svgHeight - ui.lineChart.bottom - 14); // repeated zero datas
                            else posY += ui.lineChart.top;

                            // create lines
                            if (n === 0) { // start point

                                pathStart.x = posX;
                                pathStart.y = posY;

                            }

                            let curve = '';

                            if (type.indexOf(ui.lineChart.curved) > -1) { // curved

                                data.percent = parseInt((ui.lineChart.curveSize * (n * col)) / 100);

                                if (n === 1) { // start curves

                                    curve = ' C ' + (col + data.percent) + ' ' + (posY - data.percent) + ',' +
                                            ' ' + (col + data.percent) + ' ' + posY + ',' +
                                            ' ' + posX + ' ' + posY;

                                } else if (n > 0) { // other curves

                                    curve = ' S ' + ((n * col) - data.percent) + ' ' + posY + ',' +
                                            ' ' + posX + ' ' + posY;

                                }

                            } else if (n > 0) curve = ' L ' + posX + ' ' + posY; // default

                            // create circles and paths
                            if (repeats === 'hide') {

                                if (

                                    (allRepeated && (n === 0 || n === y.length - 1)) ||
                                    (y[n - 1] !== undefined && y[n - 1] !== y[n]) || (y[n + 1] !== undefined && y[n + 1] !== y[n])

                                ) {

                                    // not repeated circles and paths
                                    paths += n === 0 ? ' ' + pathStart.x + ' ' + pathStart.y + curve : curve;
                                    createCircles(n);

                                } else if (paths !== '') {

                                    pathCut = ((n + 1) * col) + ui.lineChart.left;

                                    // repeated circles and paths
                                    if (n === 0) {

                                        createPaths(paths, true);
                                        createFilledPaths((randomId + j + n), paths, true);

                                    } else {

                                        createPaths(paths, false);
                                        createFilledPaths((randomId + j + n), paths, false);

                                    }

                                    if (!allRepeated) paths = '';

                                }

                            } else {

                                paths += curve;
                                createCircles(n);

                            }

                        }

                        // create paths
                        if (paths !== '') {

                            const cutted = (repeats === 'hide' && !allRepeated) ? pathCut : null;

                            createPaths(paths, repeats === 'hide' ? false : true);
                            createFilledPaths((randomId + j), paths, repeats === 'hide' ? false : true, cutted);

                        }

                        // get data names
                        name = el.getAttribute(ui.lineChart.dataName);

                        if (name !== null && name !== '') {
                            data.name.push(name);

                        } else data.name.push('');

                    });

                // close svg tag
                html += circles + '</g></svg>';

                if (data.width === 0) {
                    ui.removeClass(this, ui.lineChart.nameLoaded + ' ' + ui.lineChart.nameResized);
                }

                // create info
                if (ui.lineChart.showInfo) {

                    html += '<ul class="' + ui.lineChart.nameInfo + '">';

                    for (let p = 0; p < lines.length; p++) {

                        total = 0;

                        for (let n = 0; n < data[p].y.length; n++) {
                            total += parseInt(data[p].y[n]);
                        }

                        if (data.name[p] !== '') {

                            html += '<li>' +
                                        '<' + ui.lineChart.tagInfoColor +' style="background: ' +
                                            data.color[p] + '">' +
                                        '</' + ui.lineChart.tagInfoColor + '>' +
                                        data.name[p];

                            if (ui.lineChart.showInfoStats) {

                                html += ': <' + ui.lineChart.tagInfoStat + '>' +
                                            total +
                                    '</' + ui.lineChart.tagInfoStat + '>';

                            }

                            html += '</li>';

                        }

                    }

                    html += '</ul>';

                }

                // parse html
                const svg = ui.find('svg', this)[0];
                if (svg) this.removeChild(svg);

                const info = ui.find('.' + ui.lineChart.nameInfo, this)[0];
                if (info) this.removeChild(info);

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

    () => {
        ui.lineChart.Init(ui.lineChart.nameLoaded, true); // resize loaded charts
    });

ui.on(document,
    ui.globals.eventDomChange,

    () => {
        ui.lineChart.Init(ui.globals.eventDomChange); // resize loaded charts
    });

// ajax callback loader
ui.on(document,
    ui.globals.eventAjaxCallback,

    () => {

        if (ui.ajax.classNames.indexOf(ui.lineChart.target) > -1) {
            ui.lineChart.Init(ui.lineChart.nameNotLoaded); // show not loaded charts
        }

    });