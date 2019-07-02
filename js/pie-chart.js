/*
 Pie Chart JS
 Pie Chart JS requires Events JS
*/

var pieChart = {};

(function () {

    'use strict';
    /*globals document, selector, events, ajax */

    pieChart.Start = function () {

        var chart, elems, i, id, deg, styles, css, arr, fill, percent, html;

        chart = selector('.pie-chart:not(.loaded)');
        if (chart.length < 1) { return; }

        arr = [];

        selector('head')[0].insertAdjacentHTML('beforeEnd', '<style id="pieChartStyles"></style>');
        styles = selector('#pieChartStyles')[0];

        events.each(chart, function () {

            events.addClass(this, 'loaded');

            elems = selector('li', this);
            events.each(elems, function () {

                percent = this.getAttribute('data-percent');
                if (percent === null && percent === '') {
                    percent = 0;
                }

                deg = (percent * 360) / 100;
                deg = deg.toString().split('.');

                if (deg.length > 1) {

                    deg[1] = deg[1].substring(deg[1].length - 4, deg[1].length);
                    deg = deg[0] + '.' + deg[1];

                }

                id = Math.random().toString().split('.')[1];
                id = id.substring(id.length - 4, id.length);

                id = 'pieId' + id;
                this.id = id;

                css = '';

                fill = this.getAttribute('data-fill');
                if (fill !== null && fill !== '') {
                    css += '#' + id + ' { color: ' + fill + '}\n';
                }

                if (deg > 180) {

                    html = '<span class="l ease-pie"></span>' +
                        '<span class="r ease-pie"></span>';

                    css += '#' + id + ' .l:before { -ms-transform: rotate(' + (deg - 180) + 'deg); transform: rotate(' + (deg - 180) + 'deg); }\n' +
                        '#' + id + ' .r:before { -ms-transform: rotate(180deg); transform: rotate(180deg); }';

                } else {

                    html = '<span class="r ease-pie"></span>';
                    css += '#' + id + ' .r:before { -ms-transform: rotate(' + deg + 'deg); transform: rotate(' + deg + 'deg); }';

                }

                this.insertAdjacentHTML('beforeEnd', html);

                if (elems.length > 0) {

                    i = Array.prototype.slice.call(elems).indexOf(this);
                    if (i > 0) {

                        styles = '#' + id + ' { -ms-transform: rotate(' + arr[i - 1] + 'deg); transform: rotate(' + arr[i - 1] + 'deg); }';
                        arr[i] = arr[i - 1] + deg;

                    } else { arr[i] = deg; }

                }

                styles.insertAdjacentHTML('beforeEnd', css);

            });

        });

    };

    // Loaders
    events.onload(pieChart.Start);

    // ajax callback loader: requires Ajax JS
    events.on(document, 'ajaxCallbacks', function () {
        if (ajax.classNames.indexOf('pie-chart') > -1) { pieChart.Start(); }
    });

}());
