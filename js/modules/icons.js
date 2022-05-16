/* icons */

import { ui } from './../core/globals.js';
export default () => ui;

ui.icons = {

    // outer classnames
    nameIcon: 'ui-icon',

    // tags
    tagIcon: 'use',

    // values
    iconSrc: '../dist/icons.svg'

};

ui.icons.Start = () => {

    // svg icon reference replacement for IE
    if (!ui.userAgents.ie) { return; }

    let iconsList = ui.find(ui.icons.tagIcon);

    const page = ui.find('body')[0];
    const sprites = ui.find('body > svg'); // check svg sprites loaded before

    Array.prototype.forEach.call(iconsList,

        (el, i) => {

            const href = el.getAttribute('href');
            const newHref = href.split('#')[1];

            if (newHref !== undefined) { // pass replaced before

                el.removeAttribute('href');
                el.setAttribute('href');

                el.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#' + newHref);

            }

            if (sprites.length === 0 && (i + 1) === iconsList.length) { // get all svg icons and parse html

                ui.ajax({

                    url : ui.icons.iconSrc,
                    callback: (status, response) => {

                        if (status === 'success') {

                            page.insertAdjacentHTML('afterbegin', response);
                            ui.find('body > svg')[0].style.display = 'none';

                            // empty variables
                            iconsList = '';

                        }

                    }

                });

            }

        }

    );

};

// loaders
ui.onload(ui.icons.Start);

// ajax callback loader
ui.on(document,
    ui.globals.eventAjaxCallback,

    () => {

        if (ui.ajax.classNames.indexOf(ui.formSpinner.nameIcon) > -1) {
            ui.icons.Start();
        }

    });