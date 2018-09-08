/*
 Sticky Header JS
 Sticky Header JS requires Events JS
*/

/*globals window, document, events, selector, navigator, setTimeout */
function stickyHeader() {

    'use strict';

    var ua, header, windowTarget;

    ua = navigator.userAgent.toLowerCase();
    header = selector('header');

    if (ua.indexOf('edge') > -1 || (ua.indexOf('mobile') > -1 && ua.indexOf('apple') > -1)) {
        windowTarget = document.body; // edge and ios devices returns document.documentElement = 0

    } else {
        windowTarget = document.documentElement;
    }

    if (windowTarget.scrollTop > 50) {

        events.addClass(document, 'sticky-header-active');
        events.addClass(header, 'sticky ease-sticky');

        setTimeout(function () {
            events.addClass(header, 'sticky-ease');
        }, 0);

    } else {

        events.removeClass(document, 'sticky-header-active');
        events.removeClass(header, 'sticky-ease sticky ease-sticky');

    }

}

/*!loader */
events.onload(function () {

    'use strict';
    stickyHeader();

});

/*!scroll loader*/
events.on(window, 'scroll', function () {

    'use strict';
    stickyHeader();

});
