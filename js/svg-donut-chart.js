/*
 SVG Donut Chart JS
 SVG Donut Chart JS requires Events JS
*/

(function () {

    'use strict';
    /*globals document, selector, events, ajax */

    function donutChart() {

        var chart, percent, angle, arrPercent, arrAngle;

        arrPercent = [];
        arrAngle = [];

        chart = selector('.donut-chart');
        if (chart.length > 0) {

            events.each(chart, function () {

                events.each(selector('circle', this), function (index) {

                    percent = this.getAttribute('data-percent');
                    arrPercent.push(percent);

                    this.setAttribute('stroke-dashoffset', Math.floor(440 - (percent * 4.4)));

                    if (index > 0) {

                        angle = Math.floor(arrAngle[index - 1] + ((arrPercent[index - 1]) * 3.6));
                        arrAngle.push(angle);

                        this.setAttribute('style', '-ms-transform: rotate(' + angle + 'deg); transform: rotate(' + angle + 'deg);');

                    } else { arrAngle.push(0); }

                });

                arrPercent = [];
                arrAngle = [];

            });

        }

    }

    // Loaders
    events.onload(donutChart);

    // ajax callback loader: requires Ajax JS
    events.on(document, 'ajaxCallbacks', function () {
        if (ajax.ajaxClassNames.indexOf('donut-chart') > -1) { donutChart(); }
    });

}());
