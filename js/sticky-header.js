/*
 Sticky Header JS
 Sticky Header JS requires Events JS
*/

var stickyHeader = {};

(function () {

    'use strict';

    /*globals window, document, events, selector */
    stickyHeader.Start = function () {

        var header, stickyStatic;
        header = selector('header');

        if (header.length > 0) {

            stickyStatic = events.hasClass(header, 'sticky-static');

            if (window.pageYOffset > header[0].offsetTop) {

                if (!stickyStatic) {
                    selector('body')[0].style.paddingTop = header[0].offsetHeight + 'px';
                }

                events.addClass(document, 'sticky-header');
                events.addClass(header, 'sticky');

            } else {

                if (!stickyStatic) {
                    selector('body')[0].style.paddingTop = '0';
                }

                events.removeClass(document, 'sticky-header');
                events.removeClass(header, 'sticky');

            }

        }

    };

    // Loaders
    events.onload(stickyHeader.Start);

    events.on(window, 'scroll', stickyHeader.Start);
    events.on(window, 'resize', stickyHeader.Start); // for custom header animations

}());
