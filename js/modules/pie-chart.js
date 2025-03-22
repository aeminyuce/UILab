/* pie chart */

import { ui } from './../core/globals.js';
export default () => ui;

ui.pieChart = {

    // targets
    target: 'ui-pie-chart',

    // main classnames
    namePieLeft: 'ui-pie-l',
    namePieRight: 'ui-pie-r',

    // outer classnames
    nameNoEffects: 'ui-no-effects',

    // tags
    tagDatasHolder: 'ul',
    tagData: 'li',

    tagPiesHolder: 'span',
    tagPie: 'b',

    tagMsgHolder: 'div',
    tagMsg: 'span',
    tagTitle: 'i',

    // data attributes
    dataPercent: 'data-ui-percent',
    dataFill: 'data-ui-fill',
    dataTitle: 'data-ui-title',
    dataCustom: 'data-ui-custom'

};

(() => {

    var chartsResizer;

    chartsResizer = () => {

        var chart, elems;

        chart = ui.find('.' + ui.pieChart.target);
        if (chart.length < 1) return;

        Array.prototype.forEach.call(chart,

            el => {

                elems = ui.find(ui.pieChart.tagDatasHolder, el)[0];
                elems.style.height = elems.offsetWidth + 'px';

            });

    }

    ui.pieChart.Start = () => {

        ui.pieChart.Init = () => {

            var chart, elems, deg, textDeg, loadFnc, arr, fill, percent, html, title, customTitle, msgHolder;

            chart = ui.find('.' + ui.pieChart.target);
            if (chart.length < 1) return;

            arr = [];

            loadFnc = function (parent, that, i) {

                const prevPercents = ui.find(ui.pieChart.tagPiesHolder, that);
                if (prevPercents.length > 0) { // remove previous loaded pies

                    for (let k = 0; k < prevPercents.length; k++) {
                        that.removeChild(prevPercents[k]);

                    }
                }

                percent = that.getAttribute(ui.pieChart.dataPercent);
                if (percent === null && percent === '') percent = 0;

                fill = that.getAttribute(ui.pieChart.dataFill);

                if (fill !== null && fill !== '') {
                    that.style.color = fill;
                }

                deg = (percent * 360) / 100;
                if (deg > 180) {

                    html = '<' + ui.pieChart.tagPiesHolder + ' class="' + ui.pieChart.namePieLeft + '">' +

                                '<' + ui.pieChart.tagPie + ' style="-ms-transform: rotate(' + (deg - 180) + 'deg); transform: rotate(' + (deg - 180) + 'deg);">' +
                                '</' + ui.pieChart.tagPie + '>' +

                            '</' + ui.pieChart.tagPiesHolder + '>' +
                            '<' + ui.pieChart.tagPiesHolder + ' class="' + ui.pieChart.namePieRight + '">' +

                                '<' + ui.pieChart.tagPie + '>' +
                                '</' + ui.pieChart.tagPie + '>' +

                            '</' + ui.pieChart.tagPiesHolder + '>';

                } else {

                    html = '<' + ui.pieChart.tagPiesHolder + ' class="' + ui.pieChart.namePieRight + '">' +

                                '<' + ui.pieChart.tagPie + ' style="-ms-transform: rotate(' + deg + 'deg); transform: rotate(' + deg + 'deg);">' +
                                '</' + ui.pieChart.tagPie + '>' +

                            '</' + ui.pieChart.tagPiesHolder + '>';

                }

                that.insertAdjacentHTML('beforeEnd', html);

                if (arr[i - 1] === undefined) arr[i - 1] = 0;

                textDeg = arr[i - 1] - 90 + (deg / 2);
                title = that.getAttribute(ui.pieChart.dataTitle);

                html = '<' + ui.pieChart.tagMsg + ' style="-ms-transform: rotate(' + textDeg + 'deg) translateY(-50%); transform: rotate(' + textDeg + 'deg) translateY(-50%);">' +

                            '<' + ui.pieChart.tagTitle + ' style="-ms-transform: rotate(' + -textDeg + 'deg); transform: rotate(' + -textDeg + 'deg);"';

                if (title !== null && title !== '') { // add titles for dataTitle attributes

                    html += ' title="' + title + '"';
                    if (ui.tooltip !== undefined) html += ' ' + ui.tooltip.dataTooltip; // Optional!

                }

                customTitle = that.getAttribute(ui.pieChart.dataCustom);

                if (customTitle !== null && customTitle !== '') html += '>' + customTitle; // show custom titles optional!
                else html += '>' + percent + '%';

                html += '</' + ui.pieChart.tagTitle + '>' +
                    '</' + ui.pieChart.tagMsg + '>';

                msgHolder = ui.find(ui.pieChart.tagMsgHolder, parent)[0];

                if (msgHolder === undefined) {

                    parent.insertAdjacentHTML(
                        'beforeEnd',
                        '<' + ui.pieChart.tagMsgHolder + '></' + ui.pieChart.tagMsgHolder + '>'
                    );

                    msgHolder = ui.find(ui.pieChart.tagMsgHolder, parent)[0];

                }

                msgHolder.insertAdjacentHTML('beforeEnd', html);

                if (elems.length > 0) {

                    i = Array.prototype.slice.call(elems).indexOf(that);

                    if (i > 0) {

                        that.style.transform = 'rotate(' + arr[i - 1] + 'deg)';
                        that.style.msTransform = 'rotate(' + arr[i - 1] + 'deg)';

                        arr[i] = arr[i - 1] + deg;

                    } else arr[i] = deg;

                }

            };

            Array.prototype.forEach.call(chart,

                el => {

                    elems = ui.find(ui.pieChart.tagData, el);
                    ui.find(ui.pieChart.tagDatasHolder, el)[0].style.height = el.offsetWidth + 'px';

                    const prevMsg = ui.find(ui.pieChart.tagMsgHolder, el)[0];

                    if (prevMsg !== undefined) { // remove previous loaded messages

                        const msgs = ui.find(ui.pieChart.tagMsg, prevMsg);

                        for (let j = 0; j < msgs.length; j++) {
                            prevMsg.removeChild(msgs[j]);
                        }
                    }

                    Array.prototype.forEach.call(elems,

                        (item, i) => {
                            loadFnc(el, item, i);
                        });

                    if (ui.hasClass(document, ui.pieChart.nameNoEffects)) {
                        ui.addClass(el, ui.globals.nameOpen + ' ' + ui.globals.nameOpenEase);

                    } else {

                        ui.addClass(el, ui.globals.nameOpen);

                        setTimeout(() => {
                            ui.addClass(el, ui.globals.nameOpenEase);

                        }, ui.globals.slow5x); // wait for animations complete

                    }

                });

        };

        ui.pieChart.Init();
        chartsResizer();

    };

    // loaders
    ui.onload(ui.pieChart.Start);

    ui.on(window, 'resize', chartsResizer);
    ui.on(document, ui.globals.eventDomChange, chartsResizer);

    // ajax callback loader
    ui.on(document,
        ui.globals.eventAjaxCallback,

        () => {
            if (ui.ajax.classNames.indexOf(ui.pieChart.target) > -1) ui.pieChart.Init();
        });

})();
