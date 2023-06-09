/* grid */

import { ui } from './../core/globals.js';
export default () => ui;

ui.grid = {

    // targets
    targetColsPrefix: 'ui-col-',
    targetOrdersPrefix: 'ui-order-',

    // main classnames
    nameFirstSuffix: '-first',
    nameLastSuffix: '-last',

    // data attributes
    dataOrdered: 'data-ui-ordered'

};

ui.grid.Start = () => {

    if (ui.find('[class*="' + ui.grid.targetColsPrefix + '"][class*="' + ui.grid.targetOrdersPrefix + '"]').length > 0) {

        const move = (classType, size) => {

            if (size) {

                Array.prototype.forEach.call(ui.find('[class*="' + ui.grid.targetOrdersPrefix + classType + '-"]'),

                    el => {

                        const parent = el.parentElement;
                        const siblings = parent.children;

                        const index = Array.prototype.slice.call(el.parentElement.children).indexOf(el);

                        if (ui.hasClass(el, ui.grid.targetOrdersPrefix + classType + ui.grid.nameFirstSuffix) && index !== 0) {

                            el.setAttribute(ui.grid.dataOrdered, index);
                            parent.insertBefore(el, parent.firstChild);

                        }

                        if (ui.hasClass(el, ui.grid.targetOrdersPrefix + classType + ui.grid.nameLastSuffix) && index !== (siblings.length - 1)) {

                            el.setAttribute(ui.grid.dataOrdered, index);
                            parent.appendChild(el);

                        }

                    }

                );

            } else {

                Array.prototype.forEach.call(ui.find('[class*="' + ui.grid.targetOrdersPrefix + classType + '-"][' + ui.grid.dataOrdered + ']'),

                    el => {

                        const order = parseInt(el.getAttribute(ui.grid.dataOrdered));

                        const parent = el.parentElement;
                        const siblings = parent.children;

                        if (ui.hasClass(el, ui.grid.targetOrdersPrefix + classType + ui.grid.nameFirstSuffix)) {

                            let refEl = siblings[order + 1];
                            if (refEl === undefined) refEl = null; // IE requires as 2nd argument a valid node or null

                            el.removeAttribute(ui.grid.dataOrdered);
                            parent.insertBefore(el, refEl);

                        } else {

                            el.removeAttribute(ui.grid.dataOrdered);
                            parent.insertBefore(el, siblings[order]);

                        }

                    }

                );

            }

        };

        move('xs', window.innerWidth < ui.globals.xs + 1);
        move('sm', window.innerWidth < ui.globals.sm + 1);
        move('md', window.innerWidth < ui.globals.md + 1);

        move('default', window.innerWidth < ui.globals.lg);

        move('lg', window.innerWidth > ui.globals.lg - 1);
        move('xl', window.innerWidth > ui.globals.xl - 1);

    }

};

// loaders
ui.onload(ui.grid.Start);

ui.on(window, 'resize', ui.grid.Start);
ui.on(document, ui.globals.eventDomChange, ui.grid.Start);

// ajax callback loader
ui.on(document,
    ui.globals.eventAjaxCallback,

    () => {
        if (ui.ajax.classNames.indexOf(ui.grid.targetOrdersPrefix) > -1) ui.grid.Start();
    });