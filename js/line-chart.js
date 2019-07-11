/*
 Line Chart JS
 Line Chart JS requires Selector Js, Events JS
*/

var lineChart = {};

(function () {

    'use strict';
    /*globals document, selector, events, ajax */

    var loadCharts;

    lineChart.Start = function () {

        loadCharts = function () {

            var chart, lines, maxY, i, j, l, m, x, y, c, dx, html, polyline, dots, links, points, pointsX, total, info, max, uniq, uniqDigits, uniqMax, yuniq, yuniqDigits, yuniqMax;

            chart = selector('.line-chart');
            if (chart.length === 0) { return; }

            events.each(chart, function (k) {

                lines = selector('.line', this);
                if (lines.length === 0) { return; }

                maxY = 0;
                m = [];

                events.each(lines, function () {

                    y = this.getAttribute('data-y');
                    if (y !== null && y !== '') { m.push(y); }

                });

                events.each(lines, function (z) {

                    x = [];
                    y = m[z].split(',');

                    polyline = selector('polyline', this)[0];
                    if (polyline.length === 0) { return; }

                    x = chart[k].getAttribute('data-x');

                    if (x !== null && x !== '') {
                        x = x.split(',');

                    } else { return; }

                    uniq = m.filter(function (item, pos) {
                        return m.indexOf(item) === pos;
                    });

                    uniq = uniq.sort(function (a, b) {
                        return b - a;
                    });

                    uniqDigits = uniq[0];
                    uniqMax = uniqDigits.split(',')[0];

                    if (uniqDigits[1] < 5) {

                        uniqMax += 5;
                        l = (uniqDigits.length - 1);

                    } else {

                        uniqMax = parseInt(uniqMax, 10) + 1;
                        l = uniqDigits.length;

                    }

                    for (i = 1; i < l; i += 1) {
                        uniqMax += 0;
                    }

                    uniqMax = parseInt(uniqMax, 10);

                    yuniq = y.filter(function (item, pos) {
                        return y.indexOf(item) === pos;
                    });

                    yuniq = yuniq.sort(function (a, b) {
                        return b - a;
                    });

                    yuniqDigits = yuniq[0];
                    yuniqMax =  Math.ceil(yuniqDigits / 5) * 5;

                    if (maxY < yuniqMax) {
                        maxY = yuniqMax;
                    }

                    dots = selector('.dots', this)[0];
                    links = dots.getAttribute('data-links');

                    if (links !== null && links !== '') {
                        links = links.split(',');

                    } else { return; }

                    total = 0;
                    dx = this.offsetWidth / (x.length - 1);

                    points = [];
                    pointsX = [];

                    // create x coordinate parameters
                    if (z === 0) {

                        html = '<div class="dx">';

                        for (i = 0; i < x.length; i += 1) {
                            html += '<span style="width: ' + dx + 'px; margin-left: ' + -(dx / 2) + 'px; left: ' + (i * dx) + 'px;">' + x[i] + '</span>';
                        }

                        html += '</div>';
                        chart[k].insertAdjacentHTML('afterBegin', html);

                    }

                    // create y coordinate parameters
                    if (z === 0) {

                        html = '<div class="dy">';

                        for (i = 0; i < 6; i += 1) {
                            html += '<span style="bottom: ' + ((i * (this.offsetHeight / 5)) - 8) + 'px;">' + parseInt((maxY / 5) * i, 10) + '</span>';
                        }

                        html += '</div>';
                        chart[k].insertAdjacentHTML('afterBegin', html);

                    }

                    // create dot links
                    html = '';
                    for (i = 0; i < y.length; i += 1) {

                        pointsX.push(i * dx);
                        if (y[i] === '') { y[i] = 0; }

                        html += '<a data-title="' + y[i] + '" class="' + polyline.getAttribute('class') + '" href="' + links[i] + '" style="left: ' + (i * dx) + 'px;"></a>';
                        total += parseInt(y[i], 10);

                    }

                    dots.insertAdjacentHTML('beforeEnd', html);

                    // set dot links' vertical positions
                    for (i = 0; i < y.length; i += 1) {

                        for (j = 0; j < x.length; j += 1) {

                            if (y.length > 0 && (y[i] === yuniq[j])) {

                                max = uniqMax;
                                c = (this.offsetHeight * y[i]) / max;

                                points.push(pointsX[i] + ',' + c);
                                selector('a', dots)[i].style.bottom = (c - 6) + 'px';

                                break;

                            }

                        }

                    }

                    // create dots' total info
                    info = selector('.info div', chart[k]);
                    info = selector('b', info[z])[0];

                    info.textContent = total;

                    // set polyline points
                    polyline.setAttribute('points', points);

                });

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
