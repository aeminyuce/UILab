/*
 UI Line Charts JS
 Requires UI JS, Tooltip JS
*/

ui.lineCharts = {

    rows: 5, // set number of rows
    rowsHeight: 50, // set height of single row (px)

    // set chart colors
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
    top: 6, // set top space (px)
    right: 8, // set right space (px)
    bottom: 15, // set bottom space (px)
    left: 35, // set left space (px)

    showBgGrid: true, // set showing bg grid
    showGridText: true, // set showing grid numbers
    showInfo: true, // set showing info

    curveSize: 10, // set curve size (percent)

    gridStroke: 1, // set grid stroke width
    lineStroke: 2, // set line chart stroke width
    circleSize: 4 // set circle size

};

(function () {

    'use strict';
    /*globals window, document, ui */

    var loadCharts;

    // load charts
    ui.lineCharts.Start = function () {

        var i, j, k, charts, lines, data, x, y, yMax, yMin, link, size, rows, rowsHeight, col, posX, posY, html, type, pathStart, paths, circles, total, name;

        loadCharts = function (method, resizer) {

            if (method === 'loaded') {
                charts = ui.find('.line-charts.loaded');

            } else if (method === ui.globals.eventDomChange) {

                charts = ui.find('.line-charts:not(.loaded):not(.resized)');
                ui.removeClass('.line-charts', 'resized');

            } else {
                charts = ui.find('.line-charts:not(.loaded)');
            }

            if (charts.length === 0) { return; }

            ui.each(charts, function () {

                lines = ui.find('.line', this);
                if (lines.length === 0) { return; }

                data = [];

                data.name = [];
                data.color = [];
                data.backup = [];

                if (resizer !== undefined && resizer) {
                    ui.addClass(this, 'loaded resized');

                } else {
                    ui.addClass(this, 'loaded');
                }

                // calculate height of chart
                size = this.getAttribute('data-ui-size');

                rows = ui.lineCharts.rows;
                rowsHeight = ui.lineCharts.rowsHeight;

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
                x = this.getAttribute('data-ui-x');
                if (x !== null && x !== '') { data.x = x.split(','); } else { return; }

                x = data.x;

                // read all y parameters
                yMax = [];
                data.pass = false;

                ui.each(lines, function (i) {

                    data[i] = [];

                    data[i].y = [];
                    data[i].links = [];

                    data.backup += this.outerHTML;

                    ui.each(ui.find('li', this), function () {

                        y = this.getAttribute('data-ui-y');
                        if (y !== null && y !== '') { data[i].y.push(y); } else { return; }

                        link = this.getAttribute('data-ui-link');
                        if (link !== null && link !== '') { data[i].links.push(link); } else { data[i].links.push(''); }

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

                yMax = yMax.filter(function (item, pos) { // convert array as unique
                    return yMax.indexOf(item) === pos;
                });

                yMax = yMax.sort(function (a, b) { // convert array as desc
                    return b - a;
                });

                yMin = parseInt(yMax[yMax.length - 1]);
                yMax = Math.ceil((parseInt(yMax[0]) - yMin) / rows) * rows + yMin; // convert yMax to divide with rows

                // start html
                data.svgHeight = data.height;

                if (ui.lineCharts.showInfo || ui.lineCharts.showGridText) {
                    data.svgHeight += 15;
                }

                html = '<svg style="width: ' + data.width + 'px; height: ' + data.svgHeight + 'px;">';

                // check column stepping
                data.step = this.getAttribute('data-ui-step');
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
                col = (data.width - (ui.lineCharts.right + ui.lineCharts.left)) / (x.length - 1);
                html += '<g class="x">';

                for (i = 0; i < x.length; i++) {

                    posX = (i * col) + ui.lineCharts.left;

                    if (ui.lineCharts.showGridText) {

                        if (data.step) {

                            if (data.stepArr.indexOf(i) > -1) {
                                html += '<text x="' + posX + '" y="' + (data.height - ui.lineCharts.bottom + 20) + '">' + x[i] + '</text>';
                            }

                        } else {
                            html += '<text x="' + posX + '" y="' + (data.height - ui.lineCharts.bottom + 20) + '">' + x[i] + '</text>';
                        }

                    }

                    if (i === 0 || ui.lineCharts.showBgGrid) {
                        html += '<line x1="' + posX + '" x2="' + posX + '" y1="' + ui.lineCharts.top + '" ';
                    }

                    if (i === 0) { // root of x grid
                        html += 'y2="' + Math.ceil(data.height - (ui.lineCharts.bottom + (ui.lineCharts.gridStroke / 2))) + '" class="root" stroke-width="' + ui.lineCharts.gridStroke + '"';

                    } else {
                        html += 'y2="' + (data.height - ui.lineCharts.bottom) + '" stroke-dasharray="4"';
                    }

                    html += '></line>';

                }

                html += '</g>' +
                    '<g class="y">';

                for (i = 0; i <= rows; i++) {

                    posY = parseInt((i * (data.height - (ui.lineCharts.top + ui.lineCharts.bottom)) / rows) + ui.lineCharts.top);

                    if (ui.lineCharts.showGridText) {
                        html += '<text x="' + (ui.lineCharts.left - 10) + '" y="' + (posY + 4) + '">' + (parseInt((yMax - yMin) / rows) * (rows - i) + yMin) + '</text>';
                    }

                    if (i === rows || ui.lineCharts.showBgGrid) {
                        html += '<line x2="' + (data.width - ui.lineCharts.right + 1) + '" y1="' + posY + '" y2="' + posY + '" ';
                    }

                    if (i >= rows) { // root of y grid
                        html += 'x1="' + Math.ceil(ui.lineCharts.left - (ui.lineCharts.gridStroke / 2)) + '" class="root" stroke-width="' + ui.lineCharts.gridStroke + '"';

                    } else {
                        html += 'x1="' + Math.floor(ui.lineCharts.left + ui.lineCharts.gridStroke) + '" stroke-dasharray="4"';
                    }

                    html += '></line>';

                }

                html += '</g>';

                // create svg contents
                circles = '';
                pathStart = [];

                html += '<g>';

                ui.each(lines, function (j) {

                    paths = '';
                    y = data[j].y;

                    // set color
                    if (j > ui.lineCharts.colors.length - 1) {
                        data.color.push(ui.lineCharts.colors[j - ui.lineCharts.colors.length]);

                    } else {
                        data.color.push(ui.lineCharts.colors[j]);
                    }

                    // create paths and circles
                    for (i = 0; i < y.length; i++) {

                        posX = (i * col) + ui.lineCharts.left;
                        posY = data.height - (data.height + (((data.height - (ui.lineCharts.top + ui.lineCharts.bottom)) * (y[i] - yMax)) / (yMax - yMin)) - ui.lineCharts.top);

                        // get line type
                        type = this.getAttribute('data-ui-type');
                        if (type === null) { type = ''; }

                        // create lines
                        if (i === 0) { // start point

                            pathStart.x = posX;
                            pathStart.y = posY;

                        }

                        if (type.indexOf('curved') > -1) { // curved

                            data.percent = parseInt((ui.lineCharts.curveSize * (i * col)) / 100);

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
                        circles += '<circle cx="' + posX + '" cy="' + posY + '" r="' + ui.lineCharts.circleSize + '" fill="' + data.color[j] + '" stroke="' + data.color[j] + '" stroke-width="0" data-ui-tooltip title="' + y[i] + '"';

                        if (ui.lineCharts.lineStroke === 0) {
                            circles += ' fill="' + data.color[j] + '"';
                        }

                        if (data[j].links[i] !== '') { // check links
                            circles += ' onclick="location.href = \'' + data[j].links[i] + '\';"';
                        }
                        circles += '/>';

                    }

                    // create paths
                    if (type.indexOf('dashed') > -1) { // dashed
                        html += '<path class="dashed" ';

                    } else if (type.indexOf('dotted') > -1) { // dotted
                        html += '<path class="dotted" ';

                    } else {
                        html += '<path ';
                    }

                    html += 'd="M ' + pathStart.x + ' ' + pathStart.y +
                        paths +
                        '" stroke="' + data.color[j] + '" stroke-width="' + ui.lineCharts.lineStroke + '" />';

                    if (type.indexOf('filled') > -1) { // add filled paths

                        data.id = new Date().getTime();
                        data.id = data.id.toString();
                        data.id = data.id.substring(data.id.length - 4, data.id.length) + j;

                        html += '<linearGradient id="gradientId' + data.id + '" x1="0" y1="0" x2="0" y2="100%">' +
                                '<stop offset="0" stop-color="' + data.color[j] + '"></stop>' +
                                '<stop offset="100%" stop-color="' + data.color[j] + '" stop-opacity="0.0"></stop>' +
                            '</linearGradient>' +
                            '<path d="M ' + (pathStart.x + (ui.lineCharts.gridStroke / 2)) + ' ' + pathStart.y +
                                paths +
                                ' V ' + (data.height - ui.lineCharts.bottom - (ui.lineCharts.gridStroke / 2)) +
                                ' H ' + ((ui.lineCharts.gridStroke / 2) + ui.lineCharts.left) + ' Z ' +

                                '" stroke="0" fill="url(#gradientId' + data.id + ')" stroke-width="' + ui.lineCharts.lineStroke + '" class="filled" />';

                    }

                    // get data names
                    name = this.getAttribute('data-ui-name');

                    if (name !== null && name !== '') {
                        data.name.push(name);

                    } else {
                        data.name.push('');
                    }

                });

                // close svg tag
                html += circles + '</g></svg>';
                if (data.width === 0) {
                    ui.removeClass(this, 'loaded resized');
                }

                // create info
                if (ui.lineCharts.showInfo) {

                    html += '<ul class="info">';

                    for (i = 0; i < lines.length; i++) {

                        total = 0;

                        for (j = 0; j < data[i].y.length; j++) {
                            total += parseInt(data[i].y[j]);
                        }

                        html += '<li><span style="background: ' + data.color[i] + '"></span>';

                        if (data.name[i] === '') {
                            html += '<b>' + total;

                        } else {
                            html += data.name[i] + ': <b>' + total;
                        }

                        html += '</b></li>';

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

        loadCharts('not-loaded'); // show not loaded charts

    };

    // Loaders
    ui.onload(ui.lineCharts.Start);

    ui.on(window, 'resize', function () { loadCharts('loaded', true); }); // resize loaded charts
    ui.on(document, ui.globals.eventDomChange, function () { loadCharts(ui.globals.eventDomChange); }); // resize loaded charts

    // ajax callback loader
    ui.on(document, ui.globals.eventAjaxCallback, function () {
        if (ui.ajax.classNames.indexOf('line-charts') > -1) { loadCharts('not-loaded'); } // show not loaded charts
    });

}());
