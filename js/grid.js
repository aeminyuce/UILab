/*
 UI Grid JS
 Requires UI JS
*/

ui.grid = {};

(function () {

    'use strict';
    /*globals window, document, ui */

    ui.grid.Start = function () {

        var fnc, o, p, siblings, i;

        if (ui.find('[class*="col-"][class*="order-"]').length > 0) {

            fnc = function (classType, size) {

                if (size) {

                    ui.each('[class*="order-' + classType + '-"]', function () {

                        p = this.parentElement;
                        siblings = p.children;

                        i = Array.prototype.slice.call(this.parentElement.children).indexOf(this);

                        if (ui.hasClass(this, 'order-' + classType + '-first') && i !== 0) {

                            this.setAttribute('data-ui-ordered-from', i);
                            p.insertBefore(this, p.firstChild);

                        }

                        if (ui.hasClass(this, 'order-' + classType + '-last') && i !== (siblings.length - 1)) {

                            this.setAttribute('data-ui-ordered-from', i);
                            p.appendChild(this);

                        }

                    });

                } else {

                    ui.each('[class*="order-' + classType + '-"][data-ui-ordered-from]', function () {

                        o = parseInt(this.getAttribute('data-ui-ordered-from'), 10);

                        p = this.parentElement;
                        siblings = p.children;

                        if (ui.hasClass(this, 'order-' + classType + '-first')) {

                            this.removeAttribute('data-ui-ordered-from');
                            p.insertBefore(this, siblings[o + 1]);

                        } else {

                            this.removeAttribute('data-ui-ordered-from');
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
    ui.on(document, 'ui:domChange', ui.grid.Start);

    // ajax callback loader
    ui.on(document, ui.globals.eventAjaxCallback, function () {
        if (ui.ajax.classNames.indexOf('order-') > -1) { ui.grid.Start(); }
    });

}());
