/*
 UI Sticky Header JS
 Requires UI JS
*/

ui.stickyHeader = {};

(function () {

    'use strict';
    /*globals window, document, ui */

    var
        stickyLoader,
        clearSticky,
        header,
        stickyStatic,
        classList,
        classes,
        size;

    clearSticky = function () {

        if (ui.hasClass(document, 'sticky-header')) { // checked class name for avoiding lots of removing class when scrolling

            if (!stickyStatic) {
                ui.find('body')[0].style.paddingTop = '0';
            }

            ui.removeClass(document, 'sticky-header');
            ui.removeClass(header, 'sticky');

            if (classes !== null && classes !== '') {
                ui.removeClass(header, classes);
            }
        }

    };

    stickyLoader = function () {

        if (header === undefined) { return; } // firefox
        if (window.pageYOffset > header.offsetTop) {

            if (size !== '') {

                if (window.innerWidth > ui.globals.xs && size === 'sticky-xs') { clearSticky(); return; }
                if (window.innerWidth > ui.globals.sm && size === 'sticky-sm') { clearSticky(); return; }
                if (window.innerWidth > ui.globals.md && size === 'sticky-md') { clearSticky(); return; }

                if (window.innerWidth < ui.globals.lg && size === 'sticky-lg') { clearSticky(); return; }
                if (window.innerWidth < ui.globals.xl && size === 'sticky-xl') { clearSticky(); return; }

            }

            if (!stickyStatic) {
                ui.find('body')[0].style.paddingTop = header.offsetHeight + 'px';
            }

            ui.addClass(document, 'sticky-header');
            ui.addClass(header, 'sticky');

            if (classes !== null && classes !== '') {
                ui.addClass(header, classes);
            }

        } else { clearSticky(); }

    };

    ui.stickyHeader.Start = function () {

        header = ui.find('header');
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

        classes = header.getAttribute('data-ui-classes');
        stickyStatic = ui.hasClass(header, 'sticky-static');

        stickyLoader();

    };

    // Loaders
    ui.onload(ui.stickyHeader.Start);

    ui.on(window, 'resize scroll', stickyLoader);
    ui.on(document, ui.globals.eventDomChange, stickyLoader);

}());
