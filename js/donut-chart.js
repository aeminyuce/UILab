/*
 Donut Chart JS
 Donut Chart JS requires Selector Js, Events JS, User Agents JS
*/

var donutChart = {};

(function () {

    'use strict';
    /*globals document, selector, events, setTimeout, ajax, useragents */

    var loadCharts;

    donutChart.Start = function () {

        loadCharts = function () {

            var chart, circles, percent, dasharray, angle, arrPercent, arrAngle;

            arrPercent = [];
            arrAngle = [];

            chart = selector('.donut-chart');
            if (chart.length > 0) {

                events.each(chart, function (i) {

                    circles = selector('circle:not(.bg)', this);

                    if (circles.length > 1) {
                        events.addClass(this, 'multiple');
                    }

                    events.each(circles, function (index) {

                        var that = this;

                        percent = that.getAttribute('data-percent');
                        arrPercent.push(percent);

                        dasharray = Math.round(percent * 4.4);
                        if (dasharray < 0) { dasharray = 0; }

                        that.setAttribute('stroke-dasharray', dasharray + ',440');
                        if (index > 0) {

                            angle = Math.floor(arrAngle[index - 1] + ((arrPercent[index - 1]) * 3.6));
                            arrAngle.push(angle);

                            that.setAttribute('transform', 'rotate(' + angle + ' 80 80)'); // rotate(angle, cx, cy); All IE browsers not supported CSS only transforms

                        } else { arrAngle.push(0); }

                        if (useragents.ie) {
                            chart[i].style.height = chart[i].offsetWidth + 'px'; // transformed circle has highest height on IE
                        }

                        events.addClass(that, 'loaded');

                    });

                    arrPercent = [];
                    arrAngle = [];

                });

            }

        };
        loadCharts();

        // Events
        events.on(document, 'mouseenter mouseleave touchend', '.donut-chart circle[data-title]', function (e) {

            var that, circle, chart, msg, msgTitle, title;

            that = this;
            chart = events.closest(that, '.donut-chart')[0];

            msg = selector('strong', chart)[0];
            circle = selector('circle', chart);

            setTimeout(function () {
                events.removeClass(circle, 'selected');
            }, 0);

            if (e.type === 'mouseleave') {
                msg.innerHTML = msg.getAttribute('data-msg');

            } else {

                // show titles
                if (msg === undefined) {

                    chart.insertAdjacentHTML('beforeEnd', '<strong></strong>');
                    msg = selector('strong', chart)[0];

                }

                msgTitle = msg.getAttribute('data-msg');

                if (msgTitle === null) {
                    msg.setAttribute('data-msg', msg.innerHTML);
                }

                title = that.getAttribute('data-title');
                setTimeout(function () {

                    if (title !== null && title !== '') {
                        msg.innerHTML = title;
                    }

                    events.addClass(that, 'selected');

                }, 0);

            }

        });

    };

    // Loaders
    events.onload(donutChart.Start);
    events.on(document, 'domChange', donutChart.Start);

    // ajax callback loader: requires Ajax JS
    events.on(document, 'ajaxCallbacks', function () {
        if (ajax.classNames.indexOf('donut-chart') > -1) { loadCharts(); }
    });

}());
