/*
 Tooltip JS
 Tooltip JS requires Events JS
*/

var tooltip = {

    theme: '', // use swatches
    border: '', // ex: 'bordered','dual-bordered', 'large-bordered' etc.
    classes: 'rounded' // class names for tooltip content
};

(function () {

    'use strict';
    /*globals window, document, selector, events, setTimeout, clearTimeout, screen, navigator */

    var
        removeTimer,
        removeTimer2x,
        pageTouchmove,
        pageTouchmoveTimer,
        touchControl;

    function removeFnc() {

        var that = selector('.tooltip')[0];

        clearTimeout(removeTimer);

        removeTimer = setTimeout(function () {
            events.removeClass(that, 'open-ease');

            removeTimer2x = setTimeout(function () {

                events.removeClass(that, 'open');
                that.parentNode.removeChild(that);

            }, 150);

        }, 150);

    }

    function createFnc(source, title) {

        var win, winRect, re, rex, html, sourceRect, arr, pos, posRecall, calc, winStyles, arrowStyles;

        win = selector('.tooltip');
        sourceRect = source.getBoundingClientRect();

        // clear remove timers
        clearTimeout(removeTimer);
        clearTimeout(removeTimer2x);

        // create
        if (win.length > 0) {
            selector('.tooltip-content', win[0])[0].innerHTML = title;

        } else {

            re = new RegExp('\\s+\\s');
            rex = new RegExp('^\\s|\\s+$');

            winStyles = tooltip.classes + ' ' + tooltip.border + ' ' + tooltip.theme;
            winStyles = winStyles.replace(re, ' ').replace(rex, '');

            arrowStyles = tooltip.border + ' ' + tooltip.theme;
            arrowStyles = arrowStyles.replace(re, ' ').replace(rex, '');

            html = events.parser('<div class="tooltip ' + winStyles + ' ease-tooltip">' +
                    '<div class="tooltip-content">' + title + '</div>' +
                    '<span>' +
                        '<i class="bg ' + arrowStyles + '"></i>' +
                        '<i class="' + tooltip.theme + '"></i>' +
                    '</span>' +
                '</div>');

            selector('body')[0].insertAdjacentHTML('afterbegin', html);
            win = selector('.tooltip');

        }

        // show
        events.addClass(win, 'open');
        setTimeout(function () {

            // check screen limits
            winRect = win[0].getBoundingClientRect();

            // detect defined position
            arr = ['t', 'b', 'r', 'l', 'tr', 'tl', 'br', 'bl'];

            pos = source.getAttribute('data-tooltip');
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

            } else if (sourceRect.top + window.pageYOffset + winRect.height + calc.ver > screen.height + window.pageYOffset) { // bottom
                posRecall += 't';
            }

            if (sourceRect.left + window.pageXOffset + calc.hor + winRect.width > screen.width + window.pageXOffset) { // right
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

            win[0].setAttribute('data-pos', pos);
            events.addClass(win, 'open-ease');

        }, 10);

    }

    function tooltipFnc(that, type) {

        var title, dataTitle;

        title = that.getAttribute('title'); // don't change to that.title
        if (type === 'open' && title !== null && title !== '') {

            createFnc(that, title);

            that.setAttribute('data-title', title);
            that.removeAttribute('title');

            events.addClass(that, 'tooltip-active');

        } else {

            dataTitle = that.getAttribute('data-title');
            if (dataTitle !== null && dataTitle !== '') {

                if (type === 'close') {

                    removeFnc(that);

                    that.removeAttribute('data-title');
                    that.setAttribute('title', dataTitle);

                    events.removeClass(that, 'tooltip-active');

                }

            }

        }

    }

    tooltip.Start = function () {

        // Events
        events.on(document, 'mouseenter mouseleave', '[data-tooltip]:not([data-only="mobile"])', function (e) {

            var ua, type;

            ua = navigator.userAgent.toLowerCase();
            if (ua.indexOf('mobile') > -1 && ua.indexOf('apple') > -1) { return; }

            if (e.type === 'mouseenter') {
                type = 'open';

            } else {
                type = 'close';
            }

            tooltipFnc(this, type);

        });

        events.on(document, 'touchstart touchmove touchend', '[data-tooltip]:not([data-only="desktop"])', function (e) {

            var that = this;

            if (e.type === 'touchstart') {

                pageTouchmove = false;
                touchControl = events.hasClass(that, 'tooltip-active');

            } else if (e.type === 'touchmove') {
                pageTouchmove = true;
            }

            if (e.type === 'touchend' && pageTouchmove === false) {

                if (!touchControl) { e.preventDefault(); }

                clearTimeout(pageTouchmoveTimer);
                pageTouchmoveTimer = setTimeout(function () {

                    tooltipFnc(that, 'open');
                    events.on(document, 'touchend.tooltipClose', function () {

                        tooltipFnc(that, 'close');
                        events.off(document, 'touchend.tooltipClose');

                    });

                }, 50);

            }

        });

    };

    // Loaders
    events.onload(tooltip.Start);

}());
