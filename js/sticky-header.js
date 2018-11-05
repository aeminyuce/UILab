/*
 Sticky Header JS
 Sticky Header JS requires Events JS
*/

(function () {

    'use strict';

    /*globals window, events, selector */
    function stickyHeader() {

        var header, stickyStatic;

        header = selector('header');
        stickyStatic = events.hasClass(header, 'sticky-static');

        if (window.pageYOffset > header[0].offsetTop) {

            if (!stickyStatic) {
                selector('body')[0].style.paddingTop = header[0].offsetHeight + 'px';
            }
            events.addClass(header, 'sticky');

        } else {

            if (!stickyStatic) {
                selector('body')[0].style.paddingTop = '0';
            }
            events.removeClass(header, 'sticky');

        }

    }

    // Loaders
    events.onload(stickyHeader);
    events.on(window, 'scroll', stickyHeader);

}());
