/*
 UI Mobile Menu JS
 Requires UI JS
*/

ui.mobileMenu = {

    // targets
    target: 'mobile-menu',
    targetBg: 'mobile-menu-bg',

    // main classnames
    nameOpened: 'mobile-menu-opened',
    nameClose: 'close-mobile-menu',

    // helper classnames
    nameOpen: 'open',
    nameOpenEase: 'open-ease',

    // data attributes
    dataMM: 'data-ui-mm',
    dataImport: 'data-ui-import',

    // custom events
    eventMenuOpen: 'ui:mobileMenuOpen'

};

(function () {

    'use strict';
    /*globals window, document, ui, setTimeout */

    ui.mobileMenu.close = function (panel) {

        var i, id, el, contents, bg;

        bg = ui.find('.' + ui.mobileMenu.targetBg)[0];

        ui.removeClass(panel, ui.mobileMenu.nameOpenEase);
        ui.removeClass(bg, ui.mobileMenu.nameOpenEase);

        ui.removeClass(document, ui.mobileMenu.nameOpened);

        setTimeout(function () {

            ui.removeClass(panel, ui.mobileMenu.nameOpen);
            ui.removeClass(bg, ui.mobileMenu.nameOpen);

        }, ui.globals.slow);

        contents = ui.find('[' + ui.mobileMenu.dataMM + ']');

        for (i = 0; i < contents.length; i++) {

            id = '.mm-' + contents[i].getAttribute(ui.mobileMenu.dataMM);
            el = ui.find(id)[0];

            contents[i].removeAttribute(ui.mobileMenu.dataMM);

            el.appendChild(contents[i]);
            el.parentNode.insertBefore(el.firstChild, el);

            el.parentNode.removeChild(el);

        }

        ui.off('.' + ui.mobileMenu.nameClose, 'click');

    };

    ui.mobileMenu.Start = function () {

        // Event Listeners
        ui.on(document,
            'click',

            '[class*="show-mobile-menu-"]',

            function () {

                var html, importers, moveFnc, id, i, j, index, indexArr, position, bg, panel, filtered, content;

                html = [];
                position = 'l'; // right

                if (ui.hasClass(this, 'show-mobile-menu-r')) {
                    position = 'r'; // left
                }

                moveFnc = function (that, j) {

                    id = new Date().getTime();
                    id = id.toString();
                    id = id.substring(id.length - 4, id.length) + j;

                    that.insertAdjacentHTML('beforebegin', '<div class="mm-' + id + '" style="display: none;"></div>');
                    that.setAttribute(ui.mobileMenu.dataMM, id);

                    html[j] = document.createDocumentFragment();
                    html[j].appendChild(that);

                };

                importers = ui.find('.add-mobile-menu-' + position);

                if (importers.length === 1) {
                    moveFnc(importers[0], 0);

                } else if (importers.length > 1) {

                    indexArr = [];
                    for (i = 0; i < importers.length; i++) {

                        index = importers[i].getAttribute(ui.mobileMenu.dataImport);

                        if (index !== null && index !== '') {
                            indexArr.push(Number(index));

                        } else {
                            indexArr.push(i);
                        }

                    }

                    for (i = 0; i < importers.length; i++) {
                        moveFnc(importers[i], indexArr[i]);
                    }

                } else { return; }

                panel = ui.find('.' + ui.mobileMenu.target + '.show-' + position);
                content = ui.find('.mobile-menu-content', panel);

                filtered = html.filter(function (el) {
                    return el != null;
                });

                for (j = 0; j < filtered.length; j++) {
                    content.appendChild(filtered[j]);
                }

                bg = ui.find('.' + ui.mobileMenu.targetBg)[0];
                if (bg === undefined) {

                    ui.find('body')[0].insertAdjacentHTML('beforeend', '<div class="mobile-menu-bg ease-slow ease-layout"></div>');
                    bg = ui.find('.' + ui.mobileMenu.targetBg)[0];

                }

                ui.addClass(document, ui.mobileMenu.nameOpened);

                ui.addClass(panel, ui.mobileMenu.nameOpen);
                ui.addClass(bg, ui.mobileMenu.nameOpen);

                setTimeout(function () {

                    ui.addClass(panel, ui.mobileMenu.nameOpenEase);
                    ui.addClass(bg, ui.mobileMenu.nameOpenEase);

                    setTimeout(function () {
                        ui.trigger(document, ui.mobileMenu.eventMenuOpen + ' ' + ui.globals.eventDomChange); // set custom event
                    }, ui.globals.slow);

                }, 10);

                ui.on('.' + ui.mobileMenu.nameClose,
                    'click',

                    function () {
                        ui.mobileMenu.close(panel);
                    });

            });

        ui.on(document,
            'click',

            '.' + ui.mobileMenu.targetBg,

            function () {

                var panel = ui.find('.' + ui.mobileMenu.target + '.' + ui.mobileMenu.nameOpen);
                ui.mobileMenu.close(panel);

            });

    };

    // Loaders
    ui.onload(ui.mobileMenu.Start);
    ui.on(window,
        'resize',

        function () {

            var panel = ui.find('.' + ui.mobileMenu.target + '.' + ui.mobileMenu.nameOpen);

            if (panel.length > 0) {
                ui.mobileMenu.close(panel);
            }

        });

}());