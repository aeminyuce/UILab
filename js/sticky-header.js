/*
 UI Sticky Header JS
 Requires UI JS
*/

ui.stickyHeader = {

    // targets
    target: 'header',

    // main classnames
    nameHeader: 'sticky-header',
    nameStatic: 'sticky-static',

    nameSticky: 'sticky',
    nameXS: 'sticky-xs',
    nameSM: 'sticky-sm',
    nameMD: 'sticky-md',
    nameLG: 'sticky-lg',
    nameXL: 'sticky-xl',

    // data attributes
    dataClasses: 'data-ui-classes'

};

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

        if (ui.hasClass(document, ui.stickyHeader.nameHeader)) { // checked class name for avoiding lots of removing class when scrolling

            if (!stickyStatic) {
                ui.find('body')[0].style.paddingTop = '0';
            }

            ui.removeClass(document, ui.stickyHeader.nameHeader);
            ui.removeClass(header, ui.stickyHeader.nameSticky);

            if (classes !== null && classes !== '') {
                ui.removeClass(header, classes);
            }
        }

    };

    stickyLoader = function () {

        if (header === undefined) { return; } // firefox
        if (window.pageYOffset > header.offsetTop) {

            if (size !== '') {

                if (window.innerWidth > ui.globals.xs && size === ui.stickyHeader.nameXS) { clearSticky(); return; }
                if (window.innerWidth > ui.globals.sm && size === ui.stickyHeader.nameSM) { clearSticky(); return; }
                if (window.innerWidth > ui.globals.md && size === ui.stickyHeader.nameMD) { clearSticky(); return; }

                if (window.innerWidth < ui.globals.lg && size === ui.stickyHeader.nameLG) { clearSticky(); return; }
                if (window.innerWidth < ui.globals.xl && size === ui.stickyHeader.nameXL) { clearSticky(); return; }

            }

            if (!stickyStatic) {
                ui.find('body')[0].style.paddingTop = header.offsetHeight + 'px';
            }

            ui.addClass(document, ui.stickyHeader.nameHeader);
            ui.addClass(header, ui.stickyHeader.nameSticky);

            if (classes !== null && classes !== '') {
                ui.addClass(header, classes);
            }

        } else { clearSticky(); }

    };

    ui.stickyHeader.Start = function () {

        header = ui.find(ui.stickyHeader.target);
        if (header.length === 0) { return; }

        size = '';
        header = header[0];

        classList = header.getAttribute('class');
        classList = classList.split(' ');

        if (classList.indexOf(ui.stickyHeader.nameXS) > -1) {
            size = ui.stickyHeader.nameXS;

        } else if (classList.indexOf(ui.stickyHeader.nameSM) > -1) {
            size = ui.stickyHeader.nameSM;

        } else if (classList.indexOf(ui.stickyHeader.nameMD) > -1) {
            size = ui.stickyHeader.nameMD;

        } else if (classList.indexOf(ui.stickyHeader.nameLG) > -1) {
            size = ui.stickyHeader.nameLG;

        } else if (classList.indexOf(ui.stickyHeader.nameXL) > -1) {
            size = ui.stickyHeader.nameXL;
        }

        classes = header.getAttribute(ui.stickyHeader.dataClasses);
        stickyStatic = ui.hasClass(header, ui.stickyHeader.nameStatic);

        stickyLoader();

    };

    // Loaders
    ui.onload(ui.stickyHeader.Start);

    ui.on(window, 'resize scroll', stickyLoader);
    ui.on(document, ui.globals.eventDomChange, stickyLoader);

}());
