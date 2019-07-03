/*
 Donut Chart JS
 Donut Chart JS requires Events JS
*/

var donutChart = {};

(function () {

    'use strict';
    /*globals document, selector, events, ajax */

    donutChart.Start = function () {

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

                    percent = this.getAttribute('data-percent');
                    arrPercent.push(percent);

                    dashoffset = Math.floor(440 - (percent * 4.4));
                    if (dashoffset < 0) { dashoffset = 0; }

                    this.setAttribute('stroke-dashoffset', dashoffset);

                    if (index === 0) {
                        events.addClass(this, 'active');
                    }

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

                        this.setAttribute('transform', 'rotate(' + angle + ' 80 80)');

                    } else { arrAngle.push(0); }

                    events.addClass(this, 'loaded');

                });

                arrPercent = [];
                arrAngle = [];

            });

        }

    };

    // Loaders
    events.onload(donutChart.Start);

    // ajax callback loader: requires Ajax JS
    events.on(document, 'ajaxCallbacks', function () {
        if (ajax.classNames.indexOf('donut-chart') > -1) { donutChart.Start(); }
    });

}());
