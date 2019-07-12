/*
 Line Chart JS
 Line Chart JS requires Selector Js, Events JS
*/

var lineChart = {

    rows: 5, // set default chart rows
    rowsHeight: 45 // set default height of single row in pixels

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

    // convert datas as unique and desc
    function makeUniqueDesc(data) {

        var arr = data.filter(function (item, pos) {
            return data.indexOf(item) === pos;
        });

        arr = arr.sort(function (a, b) {
            return b - a;
        });

        return arr;

    }

    lineChart.Start = function () {

        // chart loader
        loadCharts = function () {

            var chart, size, rows, rowsHeight, lines, i, j, x, y, yMax, yUnique, yUniqueLength, posX, posY, html, color, dotsHolder, dots, dotsX, links, total, name, info;

            chart = selector('.line-chart');
            if (chart.length === 0) { return; }

            // load charts
            events.each(chart, function (current) {

                lines = selector('.line', this);
                if (lines.length === 0) { return; }

                // set height of chart
                size = this.getAttribute('data-size');
                this.removeAttribute('data-size');

                rows = lineChart.rows;
                rowsHeight = lineChart.rowsHeight;

                if (size !== null && size !== '') {

                    size = size.split(',');
                    if (!isNaN(size[0]) && !isNaN(size[1])) {

                        rows = size[0];
                        rowsHeight = size[1];

                    }

                }

                this.style.height = rows * rowsHeight + 'px';

                // read all x parameters
                x = this.getAttribute('data-x');

                if (x !== null && x !== '') {
                    x = x.split(',');

                } else { return; }

                // read all y parameters
                y = [];
                events.each(lines, function () {

                    var data = this.getAttribute('data-y');
                    if (data !== null && data !== '') { y.push(data.split(',')); }

                });

                // get maximum value of y
                yMax = y.toString().split(',');
                yMax = makeUniqueDesc(yMax)[0]; // convert data as unique and desc

                // start chart info html
                info = '<ul>';

                // check all lines
                events.each(lines, function (k) {

                    // get unique y parameters for this line
                    yUnique = makeUniqueDesc(y[k]); // convert data as unique and desc

                    if (yUnique[1] < 5) {

                        yMax += 5;
                        yUniqueLength = (yUnique.length - 1);

                    } else {

                        yMax = parseInt(yMax, 10) + 1;
                        yUniqueLength = yUnique.length;

                    }

                    for (i = 1; i < yUniqueLength; i += 1) {
                        yMax += 0;
                    }

                    // set random color for this line
                    color = randomColor(3);

                    // create x coordinate parameters
                    posX = this.offsetWidth / (x.length - 1);
                    if (k === 0) {

                        html = '<div class="posx">';

                        for (i = 0; i < x.length; i += 1) {
                            html += '<span style="width: ' + posX + 'px; margin-left: ' + -(posX / 2) + 'px; left: ' + i * posX + 'px;">' + x[i] + '</span>';
                        }

                        html += '</div>';
                        chart[current].insertAdjacentHTML('beforeEnd', html);

                    }

                    // create y coordinate parameters
                    if (k === 0) {

                        html = '<div class="posy">';

                        for (i = 0; i <= rows; i += 1) {
                            html += '<span style="bottom: ' + ((i * (this.offsetHeight / rows)) - 8) + 'px;">' + parseInt((yMax / rows) * i, 10) + '</span>';
                        }

                        html += '</div>';
                        chart[current].insertAdjacentHTML('beforeEnd', html);

                    }

                    // create dot links
                    html = '';
                    total = 0;

                    dots = [];
                    dotsX = [];

                    dotsHolder = selector('.dots-holder', this)[0];
                    links = dotsHolder.getAttribute('data-links');

                    if (links !== null && links !== '') {
                        links = links.split(',');

                    } else { return; }

                    for (i = 0; i < y[k].length; i += 1) {

                        dotsX.push(i * posX);
                        if (y[k][i] === '') { y[k][i] = 0; }

                        html += '<a data-title="' + y[k][i] + '" href="' + links[i] + '" style="color: ' + color + '; left: ' + i * posX + 'px;"></a>';
                        total += parseInt(y[k][i], 10);

                    }

                    dotsHolder.insertAdjacentHTML('beforeEnd', html);

                    // set dot links' vertical positions
                    for (i = 0; i < y[k].length; i += 1) {

                        for (j = 0; j < x.length; j += 1) {

                            if (y[k].length > 0 && (y[k][i] === yUnique[j])) {

                                posY = (this.offsetHeight * y[k][i]) / yMax;

                                dots.push(dotsX[i] + ',' + posY);
                                selector('a', dotsHolder)[i].style.bottom = (posY - 6) + 'px';

                                break;

                            }

                        }

                    }

                    // create polyline
                    html = '<svg>' +
                            '<polyline points="' + dots + '" stroke="' + color + '" />' +
                        '</svg>';

                    this.insertAdjacentHTML('beforeEnd', html);

                    // create lines' total numbers
                    info += '<li><span style="background: ' + color + '"></span>';
                    name = this.getAttribute('data-name');

                    if (name !== null && name !== '') {
                        info += name + ': <b>' + total;

                    } else {
                        info += '<b>' + total;
                    }

                    info += '</b></li>';

                });

                // create chart info
                info += '</ul>';
                this.insertAdjacentHTML('beforeEnd', info);

            });

        };

        loadCharts();

        // Events


    };

    // Loaders
    events.onload(lineChart.Start);

    // ajax callback loader: requires Ajax JS
    events.on(document, 'ajaxCallbacks', function () {
        if (ajax.classNames.indexOf('line-chart') > -1) { loadCharts(); }
    });

}());
