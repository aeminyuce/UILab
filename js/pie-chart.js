/*
 Pie Chart JS
 Pie Chart JS requires Events JS
*/

var pieChart = {};

(function () {

    'use strict';
    /*globals window, document, selector, events, setTimeout, ajax */

    var loadCharts;

    function chartsResizer() {

        var chart = selector('.pie-chart');
        if (chart.length < 1) { return; }

        events.each(chart, function () {
            this.style.height = this.offsetWidth + 'px';
        });

    }

    pieChart.Start = function () {

        loadCharts = function () {

            var chart, elems, i, deg, loadFnc, arr, fill, percent, html;

            chart = selector('.pie-chart');
            if (chart.length < 1) { return; }

            arr = [];

            loadFnc = function (that) {

                percent = that.getAttribute('data-percent');

                if (percent === null && percent === '') {
                    percent = 0;
                }


                fill = that.getAttribute('data-fill');

                if (fill !== null && fill !== '') {
                    that.style.color = fill;
                }

                deg = (percent * 360) / 100;
                if (deg > 180) {

                    html = '<span class="l"><b style="-ms-transform: rotate(' + (deg - 180) + 'deg); transform: rotate(' + (deg - 180) + 'deg);"></b></span>' +
                        '<span class="r"><b></b></span>';

                } else {
                    html = '<span class="r"><b style="-ms-transform: rotate(' + deg + 'deg); transform: rotate(' + deg + 'deg);"></b></span>';
                }

                that.insertAdjacentHTML('beforeEnd', html);

                if (elems.length > 0) {

                    i = Array.prototype.slice.call(elems).indexOf(that);
                    if (i > 0) {

                        that.style.transform = 'rotate(' + arr[i - 1] + 'deg)';
                        that.style.msTransform = 'rotate(' + arr[i - 1] + 'deg)';

                        arr[i] = arr[i - 1] + deg;

                    } else { arr[i] = deg; }

                }

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

        loadCharts();
        chartsResizer();

    };

    // Loaders
    events.onload(pieChart.Start);
    events.on(window, 'resize', chartsResizer);

    // ajax callback loader: requires Ajax JS
    events.on(document, 'ajaxCallbacks', function () {
        if (ajax.classNames.indexOf('pie-chart') > -1) { loadCharts(); }
    });

}());
