/* header sticky */

import { ui } from './../core/globals.js';
export default () => ui;

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
    dataClasses: 'data-ui-classes',
    dataSpace: 'data-ui-space'

};

(() => {

    let
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

    stickyLoad = () => {

        if (header === undefined) return;

        const topSpace = Number(header.getAttribute(ui.headerSticky.dataSpace));

        if (window.pageYOffset > header.getBoundingClientRect().top) {

            if (size !== '') {

                if (window.innerWidth > ui.globals.xs && size === ui.headerSticky.nameXS) { stickyClear(); return; }
                if (window.innerWidth > ui.globals.sm && size === ui.headerSticky.nameSM) { stickyClear(); return; }
                if (window.innerWidth > ui.globals.md && size === ui.headerSticky.nameMD) { stickyClear(); return; }

                if (window.innerWidth < ui.globals.lg && size === ui.headerSticky.nameLG) { stickyClear(); return; }
                if (window.innerWidth < ui.globals.xl && size === ui.headerSticky.nameXL) { stickyClear(); return; }

            }

            body.style.paddingTop = header.offsetHeight + topSpace + 'px';
            ui.addClass(header, ui.headerSticky.nameSticky);

            if (classes !== null && classes !== '') ui.addClass(header, classes);

        } else stickyClear();

    };

    ui.headerSticky.Start = () => {

        header = ui.find('.' + ui.headerSticky.target)[0];
        if (header === undefined) return;

        body = ui.find('body')[0];

        size = '';

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

    // loaders
    ui.onload(ui.headerSticky.Start);

    ui.on(window, 'scroll', stickyLoad);
    ui.on(document, ui.globals.eventDomChange, stickyLoad);

})();
