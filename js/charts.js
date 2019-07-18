/*
 Charts JS
 Charts JS requires Selector Js, Events JS, Tooltip JS
*/

var charts = {

    rows: 5, // set number of rows
    rowsHeight: 50, // set height of single row (px)

    top: 12, // set top space (px)
    right: 20, // set right space (px)
    bottom: 20, // set bottom space (px)
    left: 50, // set left space (px)

    gridstroke: 1, // set grid stroke width
    linestroke: 2, // set line chart stroke width
    circlesize: 6 // set circle size

};

(function () {

    'use strict';
    /*globals document, selector, events, ajax */

    var loadCharts;

    // generate random color
    function randomColor(brightness) { // Six levels of brightness from 0 to 5, 0 being the darkest

        var mix, rgb, mixedrgb;

        mix = [brightness * 51, brightness * 51, brightness * 51]; // 51 => 255 / 5
        rgb = [Math.random() * 256, Math.random() * 256, Math.random() * 256];

        mixedrgb = [rgb[0] + mix[0], rgb[1] + mix[1], rgb[2] + mix[2]].map(function (x) { return Math.round(x / 2.0); });

        return "rgb(" + mixedrgb.join(',') + ")";

    }

    charts.Start = function () {

        // chart loader
        loadCharts = function () {

            var i, j, chart, parts, data, x, y, yMax, yMaxDiff, link, size, rows, rowsHeight, posX, posY, html, circles, total, name;

            chart = selector('.charts');
            if (chart.length === 0) { return; }

            // load charts
            events.each(chart, function () {

                parts = selector('.part', this);
                if (parts.length === 0) { return; }

                data = [];
                data.name = [];
                data.color = [];

                // calculate height of chart
                size = this.getAttribute('data-size');
                this.removeAttribute('data-size');

                rows = charts.rows;
                rowsHeight = charts.rowsHeight;

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

                events.each(parts, function (i) {

                    data[i] = [];

                    data[i].y = [];
                    data[i].links = [];

                    events.each(selector('li', this), function () {

                        y = this.getAttribute('data-y');
                        if (y !== null && y !== '') { data[i].y.push(y); } else { return; }

                        link = this.getAttribute('data-link');
                        if (link !== null && link !== '') { data[i].links.push(link); } else { data[i].links.push(''); }

                    });

                    if (data.x.length === data[i].y.length) {
                        yMax.push(data[i].y); // push y datas to calculate the maximum value of all datas

                    } else {
                        data.pass = true; // x and y datas are not equal
                    }

                });

                if (data.pass) { return; }

                // get maximum value of all y datas
                yMax = yMax.toString().split(',');

                yMax = yMax.filter(function (item, pos) { // convert array as unique
                    return yMax.indexOf(item) === pos;
                });

                yMax = yMax.sort(function (a, b) { // convert array as desc
                    return b - a;
                });

                yMax = parseInt(yMax, 10);
                yMaxDiff = yMax;

                yMax = Math.ceil(yMax / rows) * rows; // convert yMax to divide with rows
                yMaxDiff = yMax - yMaxDiff; // difference with divisible yMax

                // start html
                html = '<svg>';
                circles = '';

                // create grids
                posX = (data.width - (charts.right + charts.left)) / (x.length - 1);
                html += '<g class="x">';

                for (i = 0; i < x.length; i += 1) {

                    html += '<text x="' + (charts.left + (i * posX)) + '" y="' + (data.height - charts.bottom + 20) + '">' + x[i] + '</text>' +
                            '<line x1="' + (charts.left + (i * posX)) + '" x2="' + (charts.left + (i * posX)) + '" y1="' + charts.top + '" ';

                    if (i === 0) { // root of x grid
                        html += 'y2="' + Math.ceil(data.height - (charts.bottom + (charts.gridstroke / 2))) + '" class="root" stroke-width="' + charts.gridstroke + '"';

                    } else {
                        html += 'y2="' + (data.height - charts.bottom) + '" stroke-dasharray="4"';
                    }

                    html += '></line>';

                }

                html += '</g>' +
                    '<g class="y">';

                for (i = 0; i <= rows; i += 1) {

                    posY = parseInt((i * (data.height - (charts.top + charts.bottom)) / rows) + charts.top, 10);

                    html += '<text x="' + (charts.left - 10) + '" y="' + (posY + 4) + '">' + parseInt(yMax / rows, 10) * (rows - i) + '</text>' +
                            '<line x2="' + (data.width - charts.right + 1) + '" y1="' + posY + '" y2="' + posY + '" ';

                    if (i >= rows) { // root of y grid
                        html += 'x1="' + Math.ceil(charts.left - (charts.gridstroke / 2)) + '" class="root" stroke-width="' + charts.gridstroke + '"';

                    } else {
                        html += 'x1="' + Math.floor(charts.left + charts.gridstroke) + '" stroke-dasharray="4"';
                    }

                    html += '></line>';

                }

                html += '</g><g>';

                // create svg contents
                events.each(parts, function (j) {

                    y = data[j].y;

                    // set random color for this part
                    data.color.push(randomColor(3));

                    // create paths and circles
                    html += '<path d="';

                    for (i = 0; i < y.length; i += 1) {

                        posY = data.height - (((data.height - (charts.top + charts.bottom)) * y[i]) / yMax) - charts.bottom;

                        if (parseInt(y[i], 10) >= yMax - yMaxDiff) { // apply difference to maximum numbers
                            posY += yMaxDiff;
                        }

                        // create paths
                        if (i === 0) {
                            html += 'M' + ((i * posX) + charts.left) + ' ' + posY + ' '; // start path with M (move to)

                        } else {
                            html += 'L ' + ((i * posX) + charts.left) + ' ' + posY + ' '; // repeat points with L (line to)
                        }

                        /*
                        // create path curves
                        if (i === 0) {
                            html += 'M' + ((i * posX) + charts.left) + ' ' + posY + ' '; // start path with M (move to)

                        } else if (i === 1) {
                            html += 'Q 0 0, ' + ((i * posX) + charts.left) + ' ' + posY + ' '; // start quadratic bezier curves with Q (control point, end point)

                        } else {
                            html += 'T ' + ((i * posX) + charts.left) + ' ' + posY + ' '; // repeat last quadratic bezier curves with T (end point)
                        }
                        */

                        // create circles
                        circles += '<circle cx="' + ((i * posX) + charts.left) + '" cy="' + posY + '" r="' + charts.circlesize + '" stroke="' + data.color[j] + '" stroke-width="' + charts.linestroke + '" data-tooltip title="' + y[i] + '"';

                        if (data[j].links[i] !== '') { // check links
                            circles += ' onclick="location.href = \'' + data[j].links[i] + '\';"';
                        }

                        circles += '/>';

                    }

                    html += '" fill="transparent" stroke="' + data.color[j] + '" stroke-width="' + charts.linestroke + '" />';

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
                total = 0;
                html += '<ul class="info">';

                for (i = 0; i < parts.length; i += 1) {

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

                // parse html
                this.innerHTML = '';
                this.insertAdjacentHTML('beforeEnd', html);

                // set height of chart
                selector('svg', this)[0].style.height = (data.height + 20) + 'px';

                // empty variables
                data = [];
                html = '';

            });

        };

        loadCharts();

    };

    // Loaders
    events.onload(charts.Start);

    // ajax callback loader: requires Ajax JS
    events.on(document, 'ajaxCallbacks', function () {
        if (ajax.classNames.indexOf('charts') > -1) { loadCharts(); }
    });

}());
