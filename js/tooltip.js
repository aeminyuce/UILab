/*
 UI Tooltip JS
 Requires UI JS
*/

ui.tooltip = {

    // targets
    target: 'tooltip',

    // main classnames
    nameActive: 'tooltip-active',
    nameContent: 'tooltip-content',

    // helper classnames
    nameOpen: 'open',
    nameOpenEase: 'open-ease',
    nameClose: 'close',

    // styling classnames
    stylesTarget: 'round ease-tooltip',
    stylesArrow: '',

    // custom events
    eventClose: 'ui:tooltipClose',

    // data attributes

};

(function () {

    'use strict';
    /*globals window, document, ui, setTimeout, clearTimeout */

    var
        removeTimer,
        removeTimer2x,
        pageTouchmoveTimer,
        touchControl,
        isScrolling;

    function removeFnc() {

        var that = ui.find('.' + ui.tooltip.target)[0];

        clearTimeout(removeTimer);

        removeTimer = setTimeout(function () {
            ui.removeClass(that, ui.tooltip.nameOpenEase);

            removeTimer2x = setTimeout(function () {

                ui.removeClass(that, ui.tooltip.nameOpen);
                that.parentNode.removeChild(that);

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
                        '<div class="' + ui.tooltip.nameContent + '">' + title + '</div>' +
                        '<span>' +
                            '<i class="' + ui.tooltip.stylesArrow + '"></i>' +
                        '</span>' +
                    '</div>';

            ui.find('body')[0].insertAdjacentHTML('afterbegin', html);
            win = ui.find('.' + ui.tooltip.target);

        }

        // show
        ui.addClass(win, ui.tooltip.nameOpen);
        setTimeout(function () {

            // check screen limits
            winRect = win[0].getBoundingClientRect();

            // detect defined position
            arr = ['t', 'b', 'r', 'l', 'tr', 'tl', 'br', 'bl'];

            pos = source.getAttribute('data-ui-tooltip');
            if (arr.indexOf(pos) < 0) {
                pos = 't';
            }

            // calculate positioning
            calc = [];

            calc.ver = 0;
            calc.hor = 0;

            calc.reCall = false;

            calc.Fnc = function () {

                if (pos === 't' || pos === 'b') { // top || bottom
                    calc.hor = (sourceRect.width - winRect.width) / 2;
                }

                if (pos === 't' || pos === 'tr' || pos === 'tl') { // top
                    calc.ver = -sourceRect.height + (sourceRect.height - winRect.height) - 15;

                } else if (pos === 'b' || pos === 'br' || pos === 'bl') { // bottom
                    calc.ver = sourceRect.height + 15;

                } else if (pos === 'r') { // right

                    calc.ver = (sourceRect.height / 2) - (winRect.height / 2);
                    calc.hor = sourceRect.width + 15;

                } else if (pos === 'l') { // left

                    calc.ver = (sourceRect.height / 2) - (winRect.height / 2);
                    calc.hor = -sourceRect.width + (sourceRect.width - winRect.width) - 15;

                }

                if (pos === 'tr' || pos === 'br') { // top right || bottom right
                    calc.hor = (sourceRect.width / 2) - 15;

                } else if (pos === 'tl' || pos === 'bl') { // top left || bottom left
                    calc.hor = -(sourceRect.width / 2) + (sourceRect.width - winRect.width) + 15;
                }

            };
            calc.Fnc();

            // check screen limits
            posRecall = '';

            if (sourceRect.top - window.pageYOffset + calc.ver < -window.pageYOffset) { // top
                posRecall += 'b';

            } else if (sourceRect.top + window.pageYOffset + winRect.height + calc.ver > window.innerHeight + window.pageYOffset) { // bottom
                posRecall += 't';
            }

            if (sourceRect.left + window.pageXOffset + calc.hor + winRect.width > window.innerWidth + window.pageXOffset) { // right
                posRecall += 'l';

            } else if (sourceRect.left - window.pageXOffset + calc.hor < 0) { // left
                posRecall += 'r';
            }

            if (posRecall !== '') { calc.reCall = true; }
            if (calc.reCall) {

                pos = posRecall;
                calc.Fnc();

            }

            win[0].style.top = (sourceRect.top + window.pageYOffset + calc.ver) + 'px';
            win[0].style.left = (sourceRect.left + window.pageXOffset + calc.hor) + 'px';

            win[0].setAttribute('data-ui-pos', pos);
            ui.addClass(win, ui.tooltip.nameOpenEase);

        }, 10);

    }

    function tooltipFnc(that, type) {

        var title, dataTitle;

        title = that.getAttribute('title'); // don't change to that.title
        if (type === ui.tooltip.nameOpen && title !== null && title !== '') {

            createFnc(that, title);

            that.setAttribute('data-ui-title', title);
            that.removeAttribute('title');

            ui.addClass(that, ui.tooltip.nameActive);

        } else {

            dataTitle = that.getAttribute('data-ui-title');
            if (dataTitle !== null && dataTitle !== '') {

                if (type === ui.tooltip.nameClose) {

                    removeFnc(that);

                    that.removeAttribute('data-ui-title');
                    that.setAttribute('title', dataTitle);

                    ui.removeClass(that, ui.tooltip.nameActive);

                }

            }

        }

    }

    ui.tooltip.Start = function () {

        // Event Listeners
        ui.on(document,
            'mouseenter mouseleave',

            '[data-ui-tooltip]:not([data-ui-only="mobile"])',

            function (e) {

                if (ui.userAgents.desktop) {

                    var type;

                    if (e.type === 'mouseenter') {
                        type = ui.tooltip.nameOpen;

                    } else {
                        type = ui.tooltip.nameClose;
                    }

                    tooltipFnc(this, type);

                }

            });

        ui.on(document,
            'touchstart touchmove touchend',

            '[data-ui-tooltip]:not([data-ui-only="desktop"])',

            function (e) {

                var that = this;

                if (e.type === 'touchstart') {
                    touchControl = ui.hasClass(that, ui.tooltip.nameActive);
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

                    if (ui.userAgents.mobile && ui.userAgents.ios) {

                        if (!touchControl) {
                            e.preventDefault();
                        }

                    } else {

                        if (!touchControl && e.cancelable && e.defaultPrevented) { // touchstart or touchmove with preventDefault we need this. Because, now Chrome and Android browsers preventDefault automatically.
                            e.preventDefault();
                        }

                    }

                    clearTimeout(pageTouchmoveTimer);
                    pageTouchmoveTimer = setTimeout(function () {

                        tooltipFnc(that, ui.tooltip.nameOpen);
                        ui.on(document,
                            'touchend.' + ui.tooltip.eventClose,

                            function () {

                                tooltipFnc(that, ui.tooltip.nameClose);
                                ui.off(document, 'touchend.' + ui.tooltip.eventClose);

                            });

                    }, ui.globals.fast / 2);

                }

            });

    };

    // Loaders
    ui.onload(ui.tooltip.Start);

}());
