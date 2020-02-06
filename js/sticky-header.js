/*
 Sticky Header JS
 Sticky Header JS requires Selector Js, Events JS
*/

var stickyHeader = {};

(function () {

    'use strict';
    /*globals window, document, events, selector */

    var
        stickyLoader,
        clearSticky,
        header,
        stickyStatic,
        classList,
        classes,
        size;

    clearSticky = function () {

        if (events.hasClass(document, 'sticky-header')) { // checked class name for avoiding lots of removing class when scrolling

            if (!stickyStatic) {
                selector('body')[0].style.paddingTop = '0';
            }

            events.removeClass(document, 'sticky-header');
            events.removeClass(header, 'sticky');

            if (classes !== null && classes !== '') {
                events.removeClass(header, classes);
            }
        }

    };

    stickyLoader = function () {

        if (header === undefined) { return; } // firefox
        if (window.pageYOffset > header.offsetTop) {

            if (size !== '') {

                if (window.innerWidth > 480 && size === 'sticky-xs') { clearSticky(); return; }
                if (window.innerWidth > 767 && size === 'sticky-sm') { clearSticky(); return; }
                if (window.innerWidth > 959 && size === 'sticky-md') { clearSticky(); return; }

                if (window.innerWidth < 1200 && size === 'sticky-lg') { clearSticky(); return; }
                if (window.innerWidth < 1680 && size === 'sticky-xl') { clearSticky(); return; }

            }

            if (!stickyStatic) {
                selector('body')[0].style.paddingTop = header.offsetHeight + 'px';
            }

            events.addClass(document, 'sticky-header');
            events.addClass(header, 'sticky');

            if (classes !== null && classes !== '') {
                events.addClass(header, classes);
            }

        } else { clearSticky(); }

    };

    stickyHeader.Start = function () {

        header = selector('header');
        if (header.length === 0) { return; }

        size = '';
        header = header[0];

        classList = header.getAttribute('class');
        classList = classList.split(' ');

        if (classList.indexOf('sticky-xs') > -1) {
            size = 'sticky-xs';

        } else if (classList.indexOf('sticky-sm') > -1) {
            size = 'sticky-sm';

        } else if (classList.indexOf('sticky-md') > -1) {
            size = 'sticky-md';

        } else if (classList.indexOf('sticky-lg') > -1) {
            size = 'sticky-lg';

        } else if (classList.indexOf('sticky-xl') > -1) {
            size = 'sticky-xl';
        }

        classes = header.getAttribute('data-classes');
        stickyStatic = events.hasClass(header, 'sticky-static');

        stickyLoader();

    };

    // Loaders
    events.onload(stickyHeader.Start);

    events.on(window, 'scroll', stickyLoader);

    events.on(window, 'resize', stickyLoader); // for custom header animations
    events.on(document, 'domChange', stickyLoader);

}());
