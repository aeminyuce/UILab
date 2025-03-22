/* tooltip */

import { ui } from './../core/globals.js';
export default () => ui;

ui.tooltip = {

    // targets
    target: 'ui-tooltip',

    // main classnames
    nameTooltipOpened: 'ui-tooltip-opened',
    nameActive: 'ui-tooltip-active',
    nameContent: 'ui-tooltip-content',

    // styling classnames
    stylesTarget: 'ui-round ui-ease-tooltip',
    stylesArrow: '',

    // values
    scrollbarSize: 15,

    t: 't',
    b: 'b',
    r: 'r',
    l: 'l',

    tr: 'tr',
    tl: 'tl',
    br: 'br',
    bl: 'bl',

    // data attributes
    dataTooltip: 'data-ui-tooltip',
    dataTitle: 'data-ui-title',
    dataPos: 'data-ui-pos',

    dataDesktop: 'data-ui-only="desktop"',
    dataMobile: 'data-ui-only="mobile"',

    // custom events
    eventClose: 'ui:tooltipClose',
    eventClosed: 'ui:tooltipClosed'

};

(() => {

    var
        removeTimer,
        removeTimer2x,
        pageTouchmoveTimer,
        tooltipOpenedTimer,

        touchControl,
        isScrolling;

    ui.tooltip.Close = () => {

        var that = ui.find('.' + ui.tooltip.target)[0];
        if (that === undefined) return;

        clearTimeout(removeTimer);

        removeTimer = setTimeout(() => {

            ui.removeClass(that, ui.globals.nameOpenEase);

            removeTimer2x = setTimeout(() => {

                ui.removeClass(that, ui.globals.nameOpen);
                that.remove();

            }, ui.globals.ease);

        }, ui.globals.ease);

    }

    function createFnc(source, title) {

        var win, winRect, html, sourceRect, arr, pos, posRecall, calc;

        win = ui.find('.' + ui.tooltip.target);
        sourceRect = source.getBoundingClientRect();

        // clear remove timers
        clearTimeout(removeTimer);
        clearTimeout(removeTimer2x);

        // create
        if (win.length > 0) {
            ui.find('.' + ui.tooltip.nameContent, win[0])[0].innerHTML = title;

        } else {

            html = '<div class="' + ui.tooltip.target + ' ' + ui.tooltip.stylesTarget + '">' +

                        '<div class="' + ui.tooltip.nameContent + '">' +
                            title +
                        '</div>' +
                        '<span>' +
                            '<i class="' + ui.tooltip.stylesArrow + '"></i>' +
                        '</span>' +

                    '</div>';

            ui.find('body')[0].insertAdjacentHTML('afterbegin', html);
            win = ui.find('.' + ui.tooltip.target);

        }

        // show
        ui.addClass(win, ui.globals.nameOpen);

        setTimeout(() => {

            // check screen limits
            winRect = win[0].getBoundingClientRect();

            // detect defined position
            arr = [ui.tooltip.t, ui.tooltip.b, ui.tooltip.r, ui.tooltip.l, ui.tooltip.tr, ui.tooltip.tl, ui.tooltip.br, ui.tooltip.bl];

            pos = source.getAttribute(ui.tooltip.dataTooltip);
            if (arr.indexOf(pos) < 0) {
                pos = ui.tooltip.t;
            }

            // calculate positioning
            calc = [];

            calc.ver = 0;
            calc.hor = 0;

            calc.reCall = false;

            calc.Fnc = function () {

                if (pos === ui.tooltip.t || pos === ui.tooltip.b) { // top || bottom
                    calc.hor = (sourceRect.width - winRect.width) / 2;
                }

                if (pos === ui.tooltip.t || pos === ui.tooltip.tr || pos === ui.tooltip.tl) { // top
                    calc.ver = -sourceRect.height + (sourceRect.height - winRect.height) - ui.tooltip.scrollbarSize;

                } else if (pos === ui.tooltip.b || pos === ui.tooltip.br || pos === ui.tooltip.bl) { // bottom
                    calc.ver = sourceRect.height + ui.tooltip.scrollbarSize;

                } else if (pos === ui.tooltip.r) { // right

                    calc.ver = (sourceRect.height / 2) - (winRect.height / 2);
                    calc.hor = sourceRect.width + ui.tooltip.scrollbarSize;

                } else if (pos === ui.tooltip.l) { // left

                    calc.ver = (sourceRect.height / 2) - (winRect.height / 2);
                    calc.hor = -sourceRect.width + (sourceRect.width - winRect.width) - ui.tooltip.scrollbarSize;

                }

                if (pos === ui.tooltip.tr || pos === ui.tooltip.br) { // top right || bottom right
                    calc.hor = (sourceRect.width / 2) - ui.tooltip.scrollbarSize;

                } else if (pos === ui.tooltip.tl || pos === ui.tooltip.bl) { // top left || bottom left
                    calc.hor = -(sourceRect.width / 2) + (sourceRect.width - winRect.width) + ui.tooltip.scrollbarSize;
                }

            };
            calc.Fnc();

            // check screen limits
            posRecall = '';

            if (sourceRect.top - window.pageYOffset + calc.ver < -window.pageYOffset) { // top
                posRecall += ui.tooltip.b;

            } else if (sourceRect.top + window.pageYOffset + winRect.height + calc.ver > window.innerHeight + window.pageYOffset) { // bottom
                posRecall += ui.tooltip.t;
            }

            if (sourceRect.left + window.pageXOffset + calc.hor + winRect.width > window.innerWidth + window.pageXOffset) { // right
                posRecall += ui.tooltip.l;

            } else if (sourceRect.left - window.pageXOffset + calc.hor < 0) { // left
                posRecall += ui.tooltip.r;
            }

            if (posRecall !== '') { calc.reCall = true; }
            if (calc.reCall) {

                pos = posRecall;
                calc.Fnc();

            }

            win[0].style.top = (sourceRect.top + window.pageYOffset + calc.ver) + 'px';
            win[0].style.left = (sourceRect.left + window.pageXOffset + calc.hor) + 'px';

            win[0].setAttribute(ui.tooltip.dataPos, pos);
            ui.addClass(win, ui.globals.nameOpenEase);

        }, 10);

    }

    function tooltipFnc(that, type) {

        var title, dataTitle;

        let attr = 'title';

        if (ui.globals.svgElems.indexOf(that.tagName.toLowerCase()) !== -1) { // check SVG and own elements
            attr = 'name';
        }

        title = that.getAttribute(attr);

        if (type === 'show' && title !== null && title !== '') {

            clearTimeout(tooltipOpenedTimer);
            ui.addClass(document, ui.tooltip.nameTooltipOpened);

            createFnc(that, title);

            that.setAttribute(ui.tooltip.dataTitle, title);
            that.removeAttribute(attr);

            ui.addClass(that, ui.globals.nameActive);

        } else {

            dataTitle = that.getAttribute(ui.tooltip.dataTitle);
            if (dataTitle !== null && dataTitle !== '') {

                if (type === 'close' || type === 'hide') {

                    ui.tooltip.Close(that);

                    ui.removeClass(that, ui.globals.nameActive);
                    clearTimeout(tooltipOpenedTimer);

                    tooltipOpenedTimer = setTimeout(() => {
                        ui.removeClass(document, ui.tooltip.nameTooltipOpened);
                    }, ui.globals.ease);

                }

                if (type === 'close') {

                    that.removeAttribute(ui.tooltip.dataTitle);
                    that.setAttribute(attr, dataTitle);

                }

            }

        }

    }

    ui.tooltip.Start = () => {

        // Event Listeners
        ui.on(document,
            'mouseenter mouseleave mousedown',

            '[' + ui.tooltip.dataTooltip + ']:not([' + ui.tooltip.dataMobile + '])',

            function (e) {

                if (ui.userAgents.desktop) {

                    var type;

                    if (e.type === 'mouseenter') {
                        type = 'show';

                    } else if (e.type === 'mousedown') {
                        type = 'hide';

                    } else {

                        type = 'close';
                        ui.trigger(document, ui.tooltip.eventClosed); // set custom event

                    }

                    tooltipFnc(this, type);

                }

            });

        ui.on(document,
            'touchstart touchmove touchend',

            '[' + ui.tooltip.dataTooltip + ']:not([' + ui.tooltip.dataDesktop + '])',

            function (e) {

                var that = this;

                if (e.type === 'touchstart') {
                    touchControl = ui.hasClass(that, ui.globals.nameActive);
                }

                ui.off(that, 'touchmove.' + ui.tooltip.eventClose);

                ui.on(that,
                    'touchmove.' + ui.tooltip.eventClose,

                    function () {
                        isScrolling = true;
                    });

                if (e.type === 'touchend') {

                    if (isScrolling) {

                        isScrolling = false;
                        return;

                    }

                    if (!touchControl) {
                        e.preventDefault();
                    }

                    clearTimeout(pageTouchmoveTimer);

                    pageTouchmoveTimer = setTimeout(() => {

                        tooltipFnc(that, 'show');
                        ui.on(document,
                            'touchend.' + ui.tooltip.eventClose,

                            function () {

                                tooltipFnc(that, 'close');
                                ui.off(document, 'touchend.' + ui.tooltip.eventClose);

                                ui.trigger(document, ui.tooltip.eventClosed); // set custom event

                            });

                    }, ui.globals.fast / 2);

                }

            });

        ui.on(document,
            'click',

            '.' + ui.tooltip.target,

            function () {
                ui.tooltip.Close(this);
            });

    };

    // loaders
    ui.onload(ui.tooltip.Start);

})();
