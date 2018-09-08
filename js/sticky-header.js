/*
 Sticky Header JS
 Sticky Header JS requires Events JS
*/

/*globals window, document, events, selector, navigator, setTimeout */
function stickyHeader() {

    'use strict';

    var ua, windowTarget;

    ua = navigator.userAgent.toLowerCase();

    if (ua.indexOf('edge') > -1 || (ua.indexOf('mobile') > -1 && ua.indexOf('apple') > -1)) {
        windowTarget = document.body; // edge and ios devices returns document.documentElement = 0

    } else {
        windowTarget = document.documentElement;
    }

    if (windowTarget.scrollTop > 0) {
        events.addClass(document, 'sticky-header');

    } else {
        events.removeClass(document, 'sticky-header');
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
