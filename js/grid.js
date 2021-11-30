/*
 UI Grid JS
 Requires UI JS
*/

ui.grid = {

    // targets
    targetCols: 'ui-col-',
    targetOrders: 'ui-order-',

    // helper classnames
    nameFirstPrefix: '-first',
    nameLastPrefix: '-last',

    // data attributes
    dataOrdered: 'data-ui-ordered'

};

(function () {

    'use strict';
    /*globals window, document, ui */

    ui.grid.Start = function () {

        var fnc, o, p, siblings, i;

        if (ui.find('[class*="' + ui.grid.targetCols + '"][class*="' + ui.grid.targetOrders + '"]').length > 0) {

            fnc = function (classType, size) {

                if (size) {

                    ui.each('[class*="' + ui.grid.targetOrders + classType + '-"]', function () {

                        p = this.parentElement;
                        siblings = p.children;

                        i = Array.prototype.slice.call(this.parentElement.children).indexOf(this);

                        if (ui.hasClass(this, ui.grid.targetOrders + classType + ui.grid.nameFirstPrefix) && i !== 0) {

                            this.setAttribute(ui.grid.dataOrdered, i);
                            p.insertBefore(this, p.firstChild);

                        }

                        if (ui.hasClass(this, ui.grid.targetOrders + classType + ui.grid.nameLastPrefix) && i !== (siblings.length - 1)) {

                            this.setAttribute(ui.grid.dataOrdered, i);
                            p.appendChild(this);

                        }

                    });

                } else {

                    ui.each('[class*="' + ui.grid.targetOrders + classType + '-"][' + ui.grid.dataOrdered + ']', function () {

                        o = parseInt(this.getAttribute(ui.grid.dataOrdered));

                        p = this.parentElement;
                        siblings = p.children;

                        if (ui.hasClass(this, ui.grid.targetOrders + classType + ui.grid.nameFirstPrefix)) {

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

    // Loaders
    ui.onload(ui.grid.Start);

    ui.on(window, 'resize', ui.grid.Start);
    ui.on(document, ui.globals.eventDomChange, ui.grid.Start);

    // ajax callback loader
    ui.on(document,
        ui.globals.eventAjaxCallback,

        function () {

            if (ui.ajax.classNames.indexOf(ui.grid.targetOrders) > -1) {
                ui.grid.Start();
            }

        });

}());
