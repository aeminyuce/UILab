/*
 Sticky Header JS
 Sticky Header JS requires Events JS
*/

/*globals window, events, selector */
function stickyHeader() {

    'use strict';

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

/*!loader */
events.onload(function () {

    'use strict';
    stickyHeader();

});

/*!scroll loader */
events.on(window, 'scroll', function () {

    'use strict';
    stickyHeader();

});
