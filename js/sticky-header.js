/*
 Sticky Header JS
 Sticky Header JS requires Selector Js, Events JS
*/

var stickyHeader = {};

(function () {

    'use strict';

    /*globals window, document, events, selector */
    stickyHeader.Start = function () {

        var header, screenW, clearStatic, stickyStatic;

        header = selector('header');
        if (header.length > 0) {

            header = header[0];
            screenW = window.innerWidth;

            stickyStatic = events.hasClass(header, 'sticky-static');
            clearStatic = function () {

                if (!stickyStatic) {
                    selector('body')[0].style.paddingTop = '0';
                }

                events.removeClass(document, 'sticky-header');
                events.removeClass(header, 'sticky');

            };

            if (window.pageYOffset > header.offsetTop) {

                if (events.hasClass(header, 'sticky-xs') && screenW > 480) { clearStatic(); return; }
                if (events.hasClass(header, 'sticky-sm') && screenW > 767) { clearStatic(); return; }
                if (events.hasClass(header, 'sticky-md') && screenW > 959) { clearStatic(); return; }

                if (events.hasClass(header, 'sticky-lg') && screenW < 1200) { clearStatic(); return; }
                if (events.hasClass(header, 'sticky-xl') && screenW < 1680) { clearStatic(); return; }
                
                if (!stickyStatic) {
                    selector('body')[0].style.paddingTop = header.offsetHeight + 'px';
                }

                events.addClass(document, 'sticky-header');
                events.addClass(header, 'sticky');

            } else { clearStatic(); }

        }

    };

    // Loaders
    events.onload(stickyHeader.Start);

    events.on(window, 'scroll', stickyHeader.Start);
    events.on(window, 'resize', stickyHeader.Start); // for custom header animations

}());
