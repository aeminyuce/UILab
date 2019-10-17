/*
 Line Charts JS
 Line Charts JS requires Selector Js, Events JS, Tooltip JS
*/

var lineCharts = {

    rows: 5, // set number of rows
    rowsHeight: 50, // set height of single row (px)

    // set chart colors
    colors: ['#36a2eb', '#ff9f40', '#ff6384', '#9966ff', '#4bc0c0', '#ffcd56', '#84594d', '#bbc451', '#6a6a6a', '#647bc1'],

    top: 6, // set top space (px)
    right: 8, // set right space (px)
    bottom: 15, // set bottom space (px)
    left: 35, // set left space (px)

    showBgGrid: true, // set showing bg grid
    showGridText: true, // set showing grid numbers
    showInfo: true, // set showing info

    curveSize: 14, // set curve size (percent)

    gridStroke: 1, // set grid stroke width
    lineStroke: 2, // set line chart stroke width
    circleSize: 4 // set circle size

};

(function () {

    'use strict';
    /*globals window, document, selector, events, ajax */

    var loadCharts,
        chartsResizer;

    // resize charts
    chartsResizer = function () {

        var charts = selector('.line-charts.loaded');
        if (charts.length === 0) { return; }

        loadCharts(charts, true);

    };

    // load charts
    lineCharts.Start = function () {

        var i, j, charts, lines, data, x, y, yMax, yMin, link, size, rows, rowsHeight, col, posX, posY, html, type, pathStart, paths, circles, total, name;

        loadCharts = function (that, resizer) {

            if (that !== undefined) {
                charts = that;

            } else {
                charts = selector('.line-charts:not(.loaded)');
            }

            if (charts.length === 0) { return; }

            events.each(charts, function () {

                lines = selector('.line', this);
                if (lines.length === 0) { return; }

                data = [];

                data.name = [];
                data.color = [];
                data.backup = [];

                if (resizer !== undefined && resizer) {
                    events.addClass(this, 'loaded resized');

                } else {
                    events.addClass(this, 'loaded');
                }

                // calculate height of chart
                size = this.getAttribute('data-size');

                rows = lineCharts.rows;
                rowsHeight = lineCharts.rowsHeight;

                if (size !== null && size !== '') {

                    size = size.split(',');
                    if (!isNaN(size[0]) && !isNaN(size[1])) {

                        rows = parseInt(size[0], 10);
                        rowsHeight = size[1];

                    }

                }

                data.width = this.offsetWidth;
                data.height = rows * rowsHeight;

                // read all x parameters
                x = this.getAttribute('data-x');
                if (x !== null && x !== '') { data.x = x.split(','); } else { return; }

                x = data.x;

                // read all y parameters
                yMax = [];
                data.pass = false;

                events.each(lines, function (i) {

                    data[i] = [];

                    data[i].y = [];
                    data[i].links = [];

                    data.backup += this.outerHTML;

                    events.each(selector('li', this), function () {

                        y = this.getAttribute('data-y');
                        if (y !== null && y !== '') { data[i].y.push(y); } else { return; }

                        link = this.getAttribute('data-link');
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

                yMin = parseInt(yMax[yMax.length - 1], 10);
                yMax = Math.ceil((parseInt(yMax[0], 10) - yMin) / rows) * rows + yMin; // convert yMax to divide with rows

                // start html
                html = '<svg>';

                // create grids
                col = (data.width - (lineCharts.right + lineCharts.left)) / (x.length - 1);
                html += '<g class="x">';

                for (i = 0; i < x.length; i += 1) {

                    posX = (i * col) + lineCharts.left;

                    if (lineCharts.showGridText) {
                        html += '<text x="' + posX + '" y="' + (data.height - lineCharts.bottom + 20) + '">' + x[i] + '</text>';
                    }

                    if (i === 0 || lineCharts.showBgGrid) {
                        html += '<line x1="' + posX + '" x2="' + posX + '" y1="' + lineCharts.top + '" ';
                    }

                    if (i === 0) { // root of x grid
                        html += 'y2="' + Math.ceil(data.height - (lineCharts.bottom + (lineCharts.gridStroke / 2))) + '" class="root" stroke-width="' + lineCharts.gridStroke + '"';

                    } else {
                        html += 'y2="' + (data.height - lineCharts.bottom) + '" stroke-dasharray="4"';
                    }

                    html += '></line>';

                }

                html += '</g>' +
                    '<g class="y">';

                for (i = 0; i <= rows; i += 1) {

                    posY = parseInt((i * (data.height - (lineCharts.top + lineCharts.bottom)) / rows) + lineCharts.top, 10);

                    if (lineCharts.showGridText) {
                        html += '<text x="' + (lineCharts.left - 10) + '" y="' + (posY + 4) + '">' + (parseInt((yMax - yMin) / rows, 10) * (rows - i) + yMin) + '</text>';
                    }

                    if (i === rows || lineCharts.showBgGrid) {
                        html += '<line x2="' + (data.width - lineCharts.right + 1) + '" y1="' + posY + '" y2="' + posY + '" ';
                    }

                    if (i >= rows) { // root of y grid
                        html += 'x1="' + Math.ceil(lineCharts.left - (lineCharts.gridStroke / 2)) + '" class="root" stroke-width="' + lineCharts.gridStroke + '"';

                    } else {
                        html += 'x1="' + Math.floor(lineCharts.left + lineCharts.gridStroke) + '" stroke-dasharray="4"';
                    }

                    html += '></line>';

                }

                html += '</g>';

                // create svg contents
                circles = '';
                pathStart = [];

                html += '<g style="transform: translateX(' + lineCharts.left + 'px)">';

                events.each(lines, function (j) {

                    paths = '';
                    y = data[j].y;

                    // set color
                    if (j > lineCharts.colors.length - 1) {
                        data.color.push(lineCharts.colors[j - lineCharts.colors.length]);

                    } else {
                        data.color.push(lineCharts.colors[j]);
                    }

                    // create paths and circles
                    for (i = 0; i < y.length; i += 1) {

                        posX = i * col;
                        posY = data.height - (data.height + (((data.height - (lineCharts.top + lineCharts.bottom)) * (y[i] - yMax)) / (yMax - yMin)) - lineCharts.top);

                        // get line type
                        type = this.getAttribute('data-type');
                        if (type === null) { type = ''; }

                        // create lines
                        if (i === 0) { // start point

                            pathStart.x = posX;
                            pathStart.y = posY;

                        }

                        if (type.indexOf('curved') > -1) { // curved

                            data.percent = parseInt((lineCharts.curveSize * (i * col)) / 100);

                            if (i === 1) { // start curves

                                paths += ' C ' + ((i * col) - data.percent) + ' ' + (posY + data.percent / 2) + ',' +
                                    ' ' + ((i * col) - data.percent) + ' ' + posY + ',' +
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
                        circles += '<circle cx="' + posX + '" cy="' + posY + '" r="' + lineCharts.circleSize + '" fill="' + data.color[j] + '" stroke="' + data.color[j] + '" stroke-width="0" data-tooltip title="' + y[i] + '"';

                        if (lineCharts.lineStroke === 0) {
                            circles += ' fill="' + data.color[j] + '"';
                        }

                        if (data[j].links[i] !== '') { // check links
                            circles += ' onclick="location.href = \'' + data[j].links[i] + '\';"';
                        }
                        circles += '/>';

                    }

                    // create paths
                    html += '<path d="M ' + pathStart.x + ' ' + pathStart.y +
                        paths +
                        '" stroke="' + data.color[j] + '" stroke-width="' + lineCharts.lineStroke + '" />';

                    if (type.indexOf('filled') > -1) { // add filled paths

                        html += '<path d="M ' + (pathStart.x  + (lineCharts.gridStroke / 2)) + ' ' + pathStart.y +
                            paths +
                            ' V ' + (data.height - lineCharts.bottom - (lineCharts.gridStroke / 2)) +
                            ' H ' + (lineCharts.gridStroke / 2) + ' Z ' +

                            '" stroke="0" fill="' + data.color[j] + '" stroke-width="' + lineCharts.lineStroke + '" class="filled" />';

                    }

                    // get data names
                    name = this.getAttribute('data-name');

                    if (name !== null && name !== '') {
                        data.name.push(name);

                    } else {
                        data.name.push('');
                    }

                });

                // close svg tag
                html += circles + '</g></svg>';

                // create info
                if (lineCharts.showInfo) {

                    total = 0;
                    html += '<ul class="info">';

                    for (i = 0; i < lines.length; i += 1) {

                        for (j = 0; j < data[i].y.length; j += 1) {
                            total += parseInt(data[i].y[j], 10);
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

                // set height of chart
                if (lineCharts.showInfo || lineCharts.showGridText) {
                    data.height += 15;
                }

                selector('svg', this)[0].style.height = data.height + 'px';

                // empty variables
                data = [];
                html = '';

            });

        };

        loadCharts();

    };

    // Loaders
    events.onload(lineCharts.Start);
    events.on(window, 'resize', chartsResizer);

    // ajax callback loader: requires Ajax JS
    events.on(document, 'ajaxCallbacks', function () {
        if (ajax.classNames.indexOf('line-charts') > -1) { loadCharts(); }
    });

}());
