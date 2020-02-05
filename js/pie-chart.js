/*
 Pie Chart JS
 Pie Chart JS requires Selector Js, Events JS, Tooltip JS
*/

var pieChart = {};

(function () {

    'use strict';
    /*globals window, document, selector, events, setTimeout, ajax */

    var loadCharts;

    function chartsResizer() {

        var chart, elems;

        chart = selector('.pie-chart');
        if (chart.length < 1) { return; }

        events.each(chart, function () {

            elems = selector('ul', this)[0];
            elems.style.height = elems.offsetWidth + 'px';

        });

    }

    pieChart.Start = function () {

        loadCharts = function () {

            var chart, elems, deg, textDeg, loadFnc, arr, fill, percent, html, title, msgHolder, msg;

            chart = selector('.pie-chart');
            if (chart.length < 1) { return; }

            arr = [];

            loadFnc = function (parent, that, i) {

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

                if (arr[i - 1] === undefined) {
                    arr[i - 1] = 0;
                }

                textDeg = arr[i - 1] - 90 + (deg / 2);

                html = '<span style="-ms-transform: rotate(' + textDeg + 'deg) translateY(-50%); transform: rotate(' + textDeg + 'deg) translateY(-50%);">' +
                        '<i style="-ms-transform: rotate(' + -textDeg + 'deg); transform: rotate(' + -textDeg + 'deg);">' + percent + '%</i>' +
                    '</span>';

                msgHolder = selector('div', parent)[0];
                if (msgHolder === undefined) {

                    parent.insertAdjacentHTML('beforeEnd', '<div></div>');
                    msgHolder = selector('div', parent)[0];

                }

                msgHolder.insertAdjacentHTML('beforeEnd', html);

                title = that.getAttribute('data-title');
                if (title !== null && title !== '') { // add tooltip for data-title attributes

                    msg = selector('span', msgHolder)[i];
                    msg = selector('i', msg)[0];

                    msg.setAttribute('data-tooltip', '');
                    msg.setAttribute('title', title);

                }

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
                selector('ul', this)[0].style.height = that.offsetWidth + 'px';

                events.each(elems, function (i) {
                    loadFnc(that, this, i);
                });

                if (events.hasClass(document, 'no-transitions-all animate-stop-all')) {
                    events.addClass(that, 'open open-ease');

                } else {

                    setTimeout(function () { // wait for page preload

                        events.addClass(that, 'open');
                        setTimeout(function () { events.addClass(that, 'open-ease'); }, 2000); // wait for animation complete

                    }, 400);

                }

            });

        };

        loadCharts();
        chartsResizer();

        // Events
        events.on(document, 'mouseenter mouseleave touchend', '.pie-chart > div span i', function (e) {

            var i, chart, elems, msg;

            chart = events.closest(this, '.pie-chart')[0];
            elems = selector('li', chart);

            if (e.type === 'mouseleave') {

                events.each(elems, function () {
                    this.style.removeProperty('opacity');
                });

            } else {

                msg = selector('div', chart)[0];
                msg = selector('span', msg);

                i = Array.prototype.slice.call(msg).indexOf(this.parentElement);

                events.each(elems, function () {
                    this.style.opacity = '.25';
                });

                elems[i].style.removeProperty('opacity');

            }

        });

    };

    // Loaders
    events.onload(pieChart.Start);

    events.on(window, 'resize', chartsResizer);
    events.on(document, 'domChange', chartsResizer);

    // ajax callback loader: requires Ajax JS
    events.on(document, 'ajaxCallbacks', function () {
        if (ajax.classNames.indexOf('pie-chart') > -1) { loadCharts(); }
    });

}());
