/* donut chart */

import { ui } from './../core/globals.js';
export default () => ui;

ui.donutChart = {

    // targets
    target: 'ui-donut-chart',
    targetBg: 'ui-donut-chart-bg',

    // tags
    tagMsg: 'strong',

    // data attributes
    dataPercent: 'data-ui-percent',
    dataTitle: 'data-ui-title',
    dataMsg: 'data-ui-msg'

};

ui.donutChart.Start = () => {

    ui.donutChart.Init = () => {

        const chart = ui.find('.' + ui.donutChart.target);
        if (chart.length > 0) {

            let arrPercent = [];
            let arrAngle = [];

            Array.prototype.forEach.call(chart,

                el => {

                    const circles = ui.find('circle:not(.' + ui.donutChart.targetBg + ')', el);

                    if (circles.length > 1) {
                        ui.addClass(el, 'multiple');
                    }

                    Array.prototype.forEach.call(circles,

                        (item, j) => {

                            const percent = item.getAttribute(ui.donutChart.dataPercent);
                            arrPercent.push(percent);

                            let dasharray = Math.round(percent * 4.4);
                            if (dasharray < 0) dasharray = 0;

                            item.setAttribute('stroke-dasharray', dasharray + ', 440');
                            if (j > 0) {

                                const angle = Math.floor(arrAngle[j - 1] + ((arrPercent[j - 1]) * 3.6));
                                arrAngle.push(angle);

                                item.setAttribute('transform', 'rotate(' + angle + ' 80 80)'); // rotate(angle, cx, cy); All IE browsers not supported CSS only transforms

                            } else arrAngle.push(0);

                            if (ui.userAgents.ie) el.style.height = el.offsetWidth + 'px'; // transformed circle has highest height on IE

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

            const chart = ui.closest(this, '.' + ui.donutChart.target)[0];

            let msg = ui.find(ui.donutChart.tagMsg, chart)[0];
            const circle = ui.find('circle', chart);

            setTimeout(() => {
                ui.removeClass(circle, ui.globals.nameSelected);
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

                const msgTitle = msg.getAttribute(ui.donutChart.dataMsg);
                if (msgTitle === null) msg.setAttribute(ui.donutChart.dataMsg, msg.innerHTML);

                const title = this.getAttribute(ui.donutChart.dataTitle);

                setTimeout(() => {

                    if (title !== null && title !== '') msg.innerHTML = title;
                    ui.addClass(this, ui.globals.nameSelected);

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

    () => {
        if (ui.ajax.classNames.indexOf(ui.donutChart.target) > -1) ui.donutChart.Init();
    });