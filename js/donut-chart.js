/*
 UI Donut Chart JS
 Requires UI JS
*/

ui.donutChart = {};

(function () {

    'use strict';
    /*globals document, ui, setTimeout */

    var loadCharts;

    ui.donutChart.Start = function () {

        loadCharts = function () {

            var chart, circles, percent, dasharray, angle, arrPercent, arrAngle;

            arrPercent = [];
            arrAngle = [];

            chart = ui.find('.donut-chart');
            if (chart.length > 0) {

                ui.each(chart, function (i) {

                    circles = ui.find('circle:not(.bg)', this);

                    if (circles.length > 1) {
                        ui.addClass(this, 'multiple');
                    }

                    ui.each(circles, function (index) {

                        var that = this;

                        percent = that.getAttribute('data-ui-percent');
                        arrPercent.push(percent);

                        dasharray = Math.round(percent * 4.4);
                        if (dasharray < 0) { dasharray = 0; }

                        that.setAttribute('stroke-dasharray', dasharray + ',440');
                        if (index > 0) {

                            angle = Math.floor(arrAngle[index - 1] + ((arrPercent[index - 1]) * 3.6));
                            arrAngle.push(angle);

                            that.setAttribute('transform', 'rotate(' + angle + ' 80 80)'); // rotate(angle, cx, cy); All IE browsers not supported CSS only transforms

                        } else { arrAngle.push(0); }

                        if (ui.userAgents.ie) {
                            chart[i].style.height = chart[i].offsetWidth + 'px'; // transformed circle has highest height on IE
                        }

                        ui.addClass(that, 'loaded');

                    });

                    arrPercent = [];
                    arrAngle = [];

                });

            }

        };
        loadCharts();

        // Event Listeners
        ui.on(document, 'mouseenter mouseleave touchend', '.donut-chart circle[data-ui-title]', function (e) {

            var that, circle, chart, msg, msgTitle, title;

            that = this;
            chart = ui.closest(that, '.donut-chart')[0];

            msg = ui.find('strong', chart)[0];
            circle = ui.find('circle', chart);

            setTimeout(function () {
                ui.removeClass(circle, 'selected');
            }, 0);

            if (e.type === 'mouseleave') {
                msg.innerHTML = msg.getAttribute('data-ui-msg');

            } else {

                // show titles
                if (msg === undefined) {

                    chart.insertAdjacentHTML(
                        'beforeEnd',
                        '<strong></strong>'
                    );

                    msg = ui.find('strong', chart)[0];

                }

                msgTitle = msg.getAttribute('data-ui-msg');

                if (msgTitle === null) {
                    msg.setAttribute('data-ui-msg', msg.innerHTML);
                }

                title = that.getAttribute('data-ui-title');
                setTimeout(function () {

                    if (title !== null && title !== '') {
                        msg.innerHTML = title;
                    }

                    ui.addClass(that, 'selected');

                }, 0);

            }

        });

    };

    // Loaders
    ui.onload(ui.donutChart.Start);
    ui.on(document, ui.globals.eventDomChange, ui.donutChart.Start);

    // ajax callback loader
    ui.on(document,
        ui.globals.eventAjaxCallback,

        function () {

            if (ui.ajax.classNames.indexOf('donut-chart') > -1) {
                loadCharts();
            }

        });

}());