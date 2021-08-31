/*
 UI Tooltip JS
 Requires UI JS
*/

ui.tooltip = {

    theme: '', // use themes
    border: '', // ex: 'border', 'border-dual', 'border-lg' etc.
    classes: 'round' // class names for tooltip content
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

        var that = ui.find('.tooltip')[0];

        clearTimeout(removeTimer);

        removeTimer = setTimeout(function () {
            ui.removeClass(that, 'open-ease');

            removeTimer2x = setTimeout(function () {

                ui.removeClass(that, 'open');
                that.parentNode.removeChild(that);

            }, ui.globals.ease);

        }, ui.globals.ease);

    }

    function createFnc(source, title) {

        var win, winRect, re, rex, html, sourceRect, arr, pos, posRecall, calc, winStyles, arrowStyles;

        win = ui.find('.tooltip');
        sourceRect = source.getBoundingClientRect();

        // clear remove timers
        clearTimeout(removeTimer);
        clearTimeout(removeTimer2x);

        // create
        if (win.length > 0) {
            ui.find('.tooltip-content', win[0])[0].innerHTML = title;

        } else {

            re = new RegExp('\\s+\\s');
            rex = new RegExp('^\\s|\\s+$');

            winStyles = ui.tooltip.classes + ' ' + ui.tooltip.border + ' ' + ui.tooltip.theme;
            winStyles = winStyles.replace(re, ' ').replace(rex, '');

            arrowStyles = ui.tooltip.border + ' ' + ui.tooltip.theme;
            arrowStyles = arrowStyles.replace(re, ' ').replace(rex, '');

            html = '<div class="tooltip ' + winStyles + ' ease-tooltip">' +
                    '<div class="tooltip-content">' + title + '</div>' +
                    '<span>' +
                        '<i class="bg ' + arrowStyles + '"></i>' +
                        '<i class="' + ui.tooltip.theme + '"></i>' +
                    '</span>' +
                '</div>';

            ui.find('body')[0].insertAdjacentHTML('afterbegin', html);
            win = ui.find('.tooltip');

        }

        // show
        ui.addClass(win, 'open');
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
            ui.addClass(win, 'open-ease');

        }, 10);

    }

    function tooltipFnc(that, type) {

        var title, dataTitle;

        title = that.getAttribute('title'); // don't change to that.title
        if (type === 'open' && title !== null && title !== '') {

            createFnc(that, title);

            that.setAttribute('data-ui-title', title);
            that.removeAttribute('title');

            ui.addClass(that, 'tooltip-active');

        } else {

            dataTitle = that.getAttribute('data-ui-title');
            if (dataTitle !== null && dataTitle !== '') {

                if (type === 'close') {

                    removeFnc(that);

                    that.removeAttribute('data-ui-title');
                    that.setAttribute('title', dataTitle);

                    ui.removeClass(that, 'tooltip-active');

                }

            }

        }

    }

    ui.tooltip.Start = function () {

        // Event Listeners
        ui.on(document, 'mouseenter mouseleave', '[data-ui-tooltip]:not([data-ui-only="mobile"])', function (e) {

            if (ui.userAgents.desktop) {

                var type;

                if (e.type === 'mouseenter') {
                    type = 'open';

                } else {
                    type = 'close';
                }

                tooltipFnc(this, type);

            }

        });

        ui.on(document, 'touchstart touchmove touchend', '[data-ui-tooltip]:not([data-ui-only="desktop"])', function (e) {

            var that = this;

            if (e.type === 'touchstart') {
                touchControl = ui.hasClass(that, 'tooltip-active');
            }

            ui.off(that, 'touchmove.ui:tooltipClose');

            ui.on(that, 'touchmove.ui:tooltipClose', function () {
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

                    tooltipFnc(that, 'open');
                    ui.on(document, 'touchend.ui:tooltipClose', function () {

                        tooltipFnc(that, 'close');
                        ui.off(document, 'touchend.ui:tooltipClose');

                    });

                }, ui.globals.fast / 2);

            }

        });

    };

    // Loaders
    ui.onload(ui.tooltip.Start);

}());
