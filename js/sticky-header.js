/*
 Sticky Header JS
 Sticky Header JS requires Events JS
*/

/*globals window, document, events, selector, navigator */
function stickyHeader() {

    'use strict';

    var ua, header;

    ua = navigator.userAgent.toLowerCase();
    header = selector('header');

    if (ua.indexOf('edge') > -1 || (ua.indexOf('mobile') > -1 && ua.indexOf('apple') > -1)) {
        window.topButtonScrollTarget = document.body; // edge and ios devices returns document.documentElement = 0

    } else {
        window.topButtonScrollTarget = document.documentElement;
    }

    if (window.topButtonScrollTarget.scrollTop > 50) {
        events.addClass(header, 'sticky');

    } else {
        events.removeClass(header, 'sticky');
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
