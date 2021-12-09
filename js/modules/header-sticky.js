/*
 UI Header Sticky JS
 Requires UI Core JS
*/

ui.headerSticky = {

    // targets
    target: 'ui-header-sticky',

    // main classnames
    nameSticky: 'ui-sticky',
    nameXS: 'ui-sticky-xs',
    nameSM: 'ui-sticky-sm',
    nameMD: 'ui-sticky-md',
    nameLG: 'ui-sticky-lg',
    nameXL: 'ui-sticky-xl',

    // data attributes
    dataClasses: 'data-ui-classes'

};

(function () {

    var
        stickyLoad,
        stickyClear,

        classList,
        classes,

        size,

        header,
        body;

    stickyClear = function () {

        if (ui.hasClass(header, ui.headerSticky.nameSticky)) {

            body.style.paddingTop = '0';
            ui.removeClass(header, ui.headerSticky.nameSticky);

            if (classes !== null && classes !== '') {
                ui.removeClass(header, classes);
            }
        }

    };

    stickyLoad = function () {

        if (header === undefined) { return; } // firefox
        if (window.pageYOffset > header.offsetTop) {

            if (size !== '') {

                if (window.innerWidth > ui.globals.xs && size === ui.headerSticky.nameXS) { stickyClear(); return; }
                if (window.innerWidth > ui.globals.sm && size === ui.headerSticky.nameSM) { stickyClear(); return; }
                if (window.innerWidth > ui.globals.md && size === ui.headerSticky.nameMD) { stickyClear(); return; }

                if (window.innerWidth < ui.globals.lg && size === ui.headerSticky.nameLG) { stickyClear(); return; }
                if (window.innerWidth < ui.globals.xl && size === ui.headerSticky.nameXL) { stickyClear(); return; }

            }

            body.style.paddingTop = header.offsetHeight + 'px';
            ui.addClass(header, ui.headerSticky.nameSticky);

            if (classes !== null && classes !== '') {
                ui.addClass(header, classes);
            }

        } else { stickyClear(); }

    };

    ui.headerSticky.Start = function () {

        header = ui.find('.' + ui.headerSticky.target);
        if (header.length === 0) { return; }

        body = ui.find('body')[0];

        size = '';
        header = header[0];

        classList = header.getAttribute('class');
        classList = classList.split(' ');

        if (classList.indexOf(ui.headerSticky.nameXS) > -1) {
            size = ui.headerSticky.nameXS;

        } else if (classList.indexOf(ui.headerSticky.nameSM) > -1) {
            size = ui.headerSticky.nameSM;

        } else if (classList.indexOf(ui.headerSticky.nameMD) > -1) {
            size = ui.headerSticky.nameMD;

        } else if (classList.indexOf(ui.headerSticky.nameLG) > -1) {
            size = ui.headerSticky.nameLG;

        } else if (classList.indexOf(ui.headerSticky.nameXL) > -1) {
            size = ui.headerSticky.nameXL;
        }

        classes = header.getAttribute(ui.headerSticky.dataClasses);
        stickyLoad();

    };

    // Loaders
    ui.onload(ui.headerSticky.Start);

    ui.on(window, 'scroll', stickyLoad);
    ui.on(document, ui.globals.eventDomChange, stickyLoad);

}());