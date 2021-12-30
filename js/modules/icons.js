/* icons */

import { ui } from './../core/globals.js';
export default () => ui;

ui.icons = {

    // targets
    target: 'use',

    // outer classnames
    nameIcon: 'ui-icon',

    // values
    iconSrc: '../dist/icons.svg'

};

(() => {

    ui.icons.Start = () => {

        // svg icon reference replacement for IE
        if (!ui.userAgents.ie) { return; }

        var iconsList, href, newHref, page, sprites;

        page = ui.find('body')[0];
        iconsList = ui.find(ui.icons.target);

        sprites = ui.find('body > svg'); // check svg spites loaded before

        ui.each(iconsList,

            function (i) {

                href = this.getAttribute('href');
                newHref = href.split('#')[1];

                if (newHref !== undefined) { // pass replaced before

                    this.removeAttribute('href');
                    this.setAttribute('href');

                    this.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#' + newHref);

                }

                if (sprites.length === 0 && (i + 1) === iconsList.length) { // get all svg icons and parse html

                    ui.ajax({

                        url : ui.icons.iconSrc,
                        callback: function (status, response) {

                            if (status === 'success') {

                                page.insertAdjacentHTML('afterbegin', response);

                                // empty variables
                                iconsList = '';

                            }

                        }

                    });

                }

             });

    };

    // loaders
    ui.onload(ui.icons.Start);

    // ajax callback loader
    ui.on(document,
        ui.globals.eventAjaxCallback,

        function () {

            if (ui.ajax.classNames.indexOf(ui.formSpinner.nameIcon) > -1) {
                ui.icons.Start();
            }

        });

})();
