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

(() => {

    ui.grid.Start = () => {

        var fnc, o, p, siblings, i;

        if (ui.find('[class*="' + ui.grid.targetColsPrefix + '"][class*="' + ui.grid.targetOrdersPrefix + '"]').length > 0) {

            fnc = function (classType, size) {

                if (size) {

                    ui.each('[class*="' + ui.grid.targetOrdersPrefix + classType + '-"]', function () {

                        p = this.parentElement;
                        siblings = p.children;

                        i = Array.prototype.slice.call(this.parentElement.children).indexOf(this);

                        if (ui.hasClass(this, ui.grid.targetOrdersPrefix + classType + ui.grid.nameFirstSuffix) && i !== 0) {

                            this.setAttribute(ui.grid.dataOrdered, i);
                            p.insertBefore(this, p.firstChild);

                        }

                        if (ui.hasClass(this, ui.grid.targetOrdersPrefix + classType + ui.grid.nameLastSuffix) && i !== (siblings.length - 1)) {

                            this.setAttribute(ui.grid.dataOrdered, i);
                            p.appendChild(this);

                        }

                    });

                } else {

                    ui.each('[class*="' + ui.grid.targetOrdersPrefix + classType + '-"][' + ui.grid.dataOrdered + ']', function () {

                        o = parseInt(this.getAttribute(ui.grid.dataOrdered));

                        p = this.parentElement;
                        siblings = p.children;

                        if (ui.hasClass(this, ui.grid.targetOrdersPrefix + classType + ui.grid.nameFirstSuffix)) {

                            this.removeAttribute(ui.grid.dataOrdered);
                            p.insertBefore(this, siblings[o + 1]);

                        } else {

                            this.removeAttribute(ui.grid.dataOrdered);
                            p.insertBefore(this, siblings[o]);

                        }

                    });

                }

            };

            fnc('xs', window.innerWidth < ui.globals.xs + 1);
            fnc('sm', window.innerWidth < ui.globals.sm + 1);
            fnc('md', window.innerWidth < ui.globals.md + 1);

            fnc('default', window.innerWidth < ui.globals.lg);

            fnc('lg', window.innerWidth > ui.globals.lg - 1);
            fnc('xl', window.innerWidth > ui.globals.xl - 1);

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

            if (ui.ajax.classNames.indexOf(ui.grid.targetOrdersPrefix) > -1) {
                ui.grid.Start();
            }

        });

})();
