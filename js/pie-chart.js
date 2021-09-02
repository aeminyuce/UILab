/*
 UI Pie Chart JS
 Requires UI JS, Tooltip JS
*/

ui.pieChart = {};

(function () {

    'use strict';
    /*globals window, document, ui, setTimeout */

    var loadCharts;

    function chartsResizer() {

        var chart, elems;

        chart = ui.find('.pie-chart');
        if (chart.length < 1) { return; }

        ui.each(chart, function () {

            elems = ui.find('ul', this)[0];
            elems.style.height = elems.offsetWidth + 'px';

        });

    }

    ui.pieChart.Start = function () {

        loadCharts = function () {

            var chart, elems, deg, textDeg, loadFnc, arr, fill, percent, html, title, msgHolder, msg;

            chart = ui.find('.pie-chart');
            if (chart.length < 1) { return; }

            arr = [];

            loadFnc = function (parent, that, i) {

                percent = that.getAttribute('data-ui-percent');

                if (percent === null && percent === '') {
                    percent = 0;
                }

                fill = that.getAttribute('data-ui-fill');

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

                msgHolder = ui.find('div', parent)[0];
                if (msgHolder === undefined) {

                    parent.insertAdjacentHTML('beforeEnd', '<div></div>');
                    msgHolder = ui.find('div', parent)[0];

                }

                msgHolder.insertAdjacentHTML('beforeEnd', html);

                title = that.getAttribute('data-ui-title');
                if (title !== null && title !== '') { // add tooltip for data-ui-title attributes

                    msg = ui.find('span', msgHolder)[i];
                    msg = ui.find('i', msg)[0];

                    msg.setAttribute('data-ui-tooltip', '');
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

            ui.each(chart, function () {

                var that = this;

                elems = ui.find('li', that);
                ui.find('ul', this)[0].style.height = that.offsetWidth + 'px';

                ui.each(elems, function (i) {
                    loadFnc(that, this, i);
                });

                if (ui.hasClass(document, 'no-effects')) {
                    ui.addClass(that, 'open open-ease');

                } else {

                    ui.addClass(that, 'open');

                    setTimeout(function () {
                        ui.addClass(that, 'open-ease');
                    }, ui.globals.slow5x); // wait for animation complete

                }

            });

        };

        loadCharts();
        chartsResizer();

        // Event Listeners
        ui.on(document, 'mouseenter mouseleave touchend', '.pie-chart > div span i', function (e) {

            var i, chart, elems, msg;

            chart = ui.closest(this, '.pie-chart')[0];
            elems = ui.find('li', chart);

            if (e.type === 'mouseleave') {

                ui.each(elems, function () {
                    this.style.removeProperty('opacity');
                });

            } else {

                msg = ui.find('div', chart)[0];
                msg = ui.find('span', msg);

                i = Array.prototype.slice.call(msg).indexOf(this.parentElement);

                ui.each(elems, function () {
                    this.style.opacity = '.25';
                });

                elems[i].style.removeProperty('opacity');

            }

        });

    };

    // Loaders
    ui.onload(ui.pieChart.Start);

    ui.on(window, 'resize', chartsResizer);
    ui.on(document, ui.globals.eventDomChange, chartsResizer);

    // ajax callback loader
    ui.on(document, ui.globals.eventAjaxCallback, function () {
        if (ui.ajax.classNames.indexOf('pie-chart') > -1) { loadCharts(); }
    });

}());
