/*
 Donut Chart JS
 Donut Chart JS requires Events JS
*/

var donutChart = {};

(function () {

    'use strict';
    /*globals document, selector, events, setTimeout, ajax */

    var loadCharts;

    donutChart.Start = function () {

        loadCharts = function () {

            var chart, circles, percent, dashoffset, angle, arrPercent, arrAngle;

            arrPercent = [];
            arrAngle = [];

            chart = selector('.donut-chart');
            if (chart.length > 0) {

                events.each(chart, function () {

                    circles = selector('circle:not(.bg)', this);

                    if (circles.length > 1) {
                        events.addClass(this, 'multiple');
                    }

                    events.each(circles, function (index) {

                        var that = this;

                        percent = that.getAttribute('data-percent');
                        arrPercent.push(percent);

                        dashoffset = Math.floor(440 - (percent * 4.4));
                        if (dashoffset < 0) { dashoffset = 0; }

                        that.setAttribute('stroke-dashoffset', dashoffset);
                        if (index > 0) {

                            angle = Math.floor(arrAngle[index - 1] + ((arrPercent[index - 1]) * 3.6));
                            arrAngle.push(angle);

                            /*
                                In svg elements CSS only transforms NOT cross browser! All IE browsers not supported!

                                How to make transform-origin: 50% 50%?
                                rotate supported inside this: // rotate(angle, centerWidth, centerHeight)

                                Ex:
                                <rect x='65' y='65' width='150' height='80' transform='rotate(45 140 105)' />

                                angle: 45
                                centerWidth: 140 = 65 + 150/2
                                centerHeight: 105 = 65 +  80/2

                            */

                            that.setAttribute('transform', 'rotate(' + angle + ' 80 80)');

                        } else { arrAngle.push(0); }

                        if (events.hasClass(document, 'no-transitions-all animate-stop-all')) {

                            events.addClass(that, 'loaded');
                            setTimeout(function () {
                                that.style.transitionDuration = '.15s';
                            }, 2000);

                        } else { // wait for page preload

                            setTimeout(function () {

                                events.addClass(that, 'loaded');
                                setTimeout(function () {
                                    that.style.transitionDuration = '.15s';
                                }, 2000);

                            }, 300);

                        }

                    });

                    arrPercent = [];
                    arrAngle = [];

                });

            }

        };
        loadCharts();

        // Events
        events.on(document, 'mouseenter touchend', '.donut-chart circle[data-title]', function () {

            var that, svg, circle, chart, msg, title;

            that = this;
            chart = events.closest(that, '.donut-chart')[0];

            if (events.hasClass(chart, 'multiple')) { // bring to front hovered circle element. z-index not working with SVG elements!

                svg = that.parentNode;
                svg.insertBefore(that, svg.lastChild);

            }

            // show titles
            circle = selector('circle', chart);

            setTimeout(function () {

                events.removeClass(circle, 'selected');
                events.addClass(that, 'selected');

            }, 0);

            msg = selector('strong', chart)[0];
            if (msg === undefined) {

                chart.insertAdjacentHTML('beforeEnd', '<strong></strong>');
                msg = selector('strong', chart)[0];

            }

            title = that.getAttribute('data-title');

            if (title !== null && title !== '') {
                msg.textContent = title;
            }

        });

    };

    // Loaders
    events.onload(donutChart.Start);

    // ajax callback loader: requires Ajax JS
    events.on(document, 'ajaxCallbacks', function () {
        if (ajax.classNames.indexOf('donut-chart') > -1) { loadCharts(); }
    });

}());
