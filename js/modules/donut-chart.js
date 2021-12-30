/* donut chart */

import { ui } from './../core/globals.js';
export default () => ui;

ui.donutChart = {

    // targets
    target: 'ui-donut-chart',
    targetBg: 'ui-donut-chart-bg',

    // helper classnames
    nameLoaded: 'ui-loaded',
    nameSelected: 'ui-selected',

    // tags
    tagMsg: 'strong',

    // data attributes
    dataPercent: 'data-ui-percent',
    dataTitle: 'data-ui-title',
    dataMsg: 'data-ui-msg'

};

(() => {

    ui.donutChart.Start = () => {

        ui.donutChart.Init = () => {

            var chart, circles, percent, dasharray, angle, arrPercent, arrAngle;

            arrPercent = [];
            arrAngle = [];

            chart = ui.find('.' + ui.donutChart.target);
            if (chart.length > 0) {

                ui.each(chart,

                    function (i) {

                        circles = ui.find('circle:not(.' + ui.donutChart.targetBg + ')', this);

                        if (circles.length > 1) {
                            ui.addClass(this, 'multiple');
                        }

                        ui.each(circles,

                            function (index) {

                                var that = this;

                                percent = that.getAttribute(ui.donutChart.dataPercent);
                                arrPercent.push(percent);

                                dasharray = Math.round(percent * 4.4);
                                if (dasharray < 0) { dasharray = 0; }

                                that.setAttribute('stroke-dasharray', dasharray + ', 440');
                                if (index > 0) {

                                    angle = Math.floor(arrAngle[index - 1] + ((arrPercent[index - 1]) * 3.6));
                                    arrAngle.push(angle);

                                    that.setAttribute('transform', 'rotate(' + angle + ' 80 80)'); // rotate(angle, cx, cy); All IE browsers not supported CSS only transforms

                                } else { arrAngle.push(0); }

                                if (ui.userAgents.ie) {
                                    chart[i].style.height = chart[i].offsetWidth + 'px'; // transformed circle has highest height on IE
                                }

                                ui.addClass(that, ui.donutChart.nameLoaded);

                            });

                        arrPercent = [];
                        arrAngle = [];

                    });

            }

        };
        ui.donutChart.Init();

        // Event Listeners
        ui.on(document,
            'mouseenter mouseleave touchend',

            '.' + ui.donutChart.target + ' circle[' + ui.donutChart.dataTitle + ']',

            function (e) {

                var that, circle, chart, msg, msgTitle, title;

                that = this;
                chart = ui.closest(that, '.' + ui.donutChart.target)[0];

                msg = ui.find(ui.donutChart.tagMsg, chart)[0];
                circle = ui.find('circle', chart);

                setTimeout(() => {
                    ui.removeClass(circle, ui.donutChart.nameSelected);
                }, 0);

                if (e.type === 'mouseleave') {
                    msg.innerHTML = msg.getAttribute(ui.donutChart.dataMsg);

                } else {

                    // show titles
                    if (msg === undefined) {

                        chart.insertAdjacentHTML(
                            'beforeEnd',
                            '<' + ui.donutChart.tagMsg + '></' + ui.donutChart.tagMsg + '>'
                        );

                        msg = ui.find(ui.donutChart.tagMsg, chart)[0];

                    }

                    msgTitle = msg.getAttribute(ui.donutChart.dataMsg);

                    if (msgTitle === null) {
                        msg.setAttribute(ui.donutChart.dataMsg, msg.innerHTML);
                    }

                    title = that.getAttribute(ui.donutChart.dataTitle);
                    setTimeout(() => {

                        if (title !== null && title !== '') {
                            msg.innerHTML = title;
                        }

                        ui.addClass(that, ui.donutChart.nameSelected);

                    }, 0);

                }

            });

    };

    // loaders
    ui.onload(ui.donutChart.Start);
    ui.on(document, ui.globals.eventDomChange, ui.donutChart.Start);

    // ajax callback loader
    ui.on(document,
        ui.globals.eventAjaxCallback,

        function () {

            if (ui.ajax.classNames.indexOf(ui.donutChart.target) > -1) {
                ui.donutChart.Init();
            }

        });

})();