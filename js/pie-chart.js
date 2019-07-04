/*
 Pie Chart JS
 Pie Chart JS requires Events JS
*/

var pieChart = {};

(function () {

    'use strict';
    /*globals window, document, selector, events, setTimeout, ajax */

    pieChart.Start = function () {

        var chart, elems, i, id, deg, loadFnc, head, styles, css, arr, fill, percent, html;

        chart = selector('.pie-chart');
        if (chart.length < 1) { return; }

        arr = [];
        styles = selector('#pieChartStyles')[0];

        if (styles === undefined) {

            head = document.getElementsByTagName('head')[0];

            styles = document.createElement('style');
            styles.id = 'pieChartStyles';

            head.appendChild(styles);
            styles = selector('#pieChartStyles')[0];

        } else { styles.innerHTML = ''; }

        loadFnc = function (that) {

            percent = that.getAttribute('data-percent');

            if (percent === null && percent === '') {
                percent = 0;
            }

            deg = (percent * 360) / 100;

            id = Math.random().toString().split('.')[1];
            id = id.substring(id.length - 4, id.length);

            id = 'pieId' + id;
            that.id = id;

            css = '';

            fill = that.getAttribute('data-fill');

            if (fill !== null && fill !== '') {
                css += '#' + id + ' { color: ' + fill + '}\n';
            }

            if (deg > 180) {

                html = '<span class="l"></span>' +
                    '<span class="r"></span>';

                css += '#' + id + ' .l:before { -ms-transform: rotate(' + (deg - 180) + 'deg); transform: rotate(' + (deg - 180) + 'deg); }\n' +
                    '#' + id + ' .r:before { -ms-transform: rotate(180deg); transform: rotate(180deg); }';

            } else {

                html = '<span class="r"></span>';
                css += '#' + id + ' .r:before { -ms-transform: rotate(' + deg + 'deg); transform: rotate(' + deg + 'deg); }';

            }

            that.insertAdjacentHTML('beforeEnd', html);

            if (elems.length > 0) {

                i = Array.prototype.slice.call(elems).indexOf(that);
                if (i > 0) {

                    css += '#' + id + ' { -ms-transform: rotate(' + arr[i - 1] + 'deg); transform: rotate(' + arr[i - 1] + 'deg); }';
                    arr[i] = arr[i - 1] + deg;

                } else { arr[i] = deg; }

            }

            styles.insertAdjacentHTML('beforeEnd', css);

        };

        events.each(chart, function () {

            var that = this;

            elems = selector('li', that);
            this.style.height = that.offsetWidth + 'px';

            events.each(elems, function () {
                loadFnc(this);
            });

            if (events.hasClass(document, 'no-transitions-all animate-stop-all')) {
                events.addClass(that, 'loaded');

            } else { // wait for page preload

                setTimeout(function () { // wait for page preload
                    events.addClass(that, 'loaded');
                }, 300);

            }

        });

    };

    function pieChartResizer() {

        var chart = selector('.pie-chart');
        if (chart.length < 1) { return; }

        events.each(chart, function () {
            this.style.height = this.offsetWidth + 'px';
        });

    }

    // Loaders
    events.onload(pieChart.Start);
    events.on(window, 'resize', pieChartResizer);

    // ajax callback loader: requires Ajax JS
    events.on(document, 'ajaxCallbacks', function () {
        if (ajax.classNames.indexOf('pie-chart') > -1) { pieChart.Start(); }
    });

}());
