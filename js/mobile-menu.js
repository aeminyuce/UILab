/*
 UI Mobile Menu JS
 Requires UI JS
*/

ui.mobileMenu = {};

(function () {

    'use strict';
    /*globals window, document, ui, setTimeout */

    ui.mobileMenu.close = function (panel) {

        var i, id, el, contents, bg;

        bg = ui.find('.mobile-menu-bg')[0];

        ui.removeClass(panel, 'open-ease');
        ui.removeClass(bg, 'open-ease');
        ui.removeClass(document, 'mobile-menu-opened');

        setTimeout(function () {

            ui.removeClass(panel, 'open');
            ui.removeClass(bg, 'open');

        }, ui.globals.slow);

        contents = ui.find('[data-ui-mm]');

        for (i = 0; i < contents.length; i++) {

            id = '.mm-' + contents[i].getAttribute('data-ui-mm');
            el = ui.find(id)[0];

            contents[i].removeAttribute('data-ui-mm');

            el.appendChild(contents[i]);
            el.parentNode.insertBefore(el.firstChild, el);

            el.parentNode.removeChild(el);

        }

        ui.off('.close-mobile-menu', 'click');

    };

    ui.mobileMenu.Start = function () {

        // Event Listeners
        ui.on(document, 'click', '[class*="show-mobile-menu-"]', function () {

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
                that.setAttribute('data-ui-mm', id);

                html[j] = document.createDocumentFragment();
                html[j].appendChild(that);

            };

            importers = ui.find('.add-mobile-menu-' + position);

            if (importers.length === 1) {
                moveFnc(importers[0], 0);

            } else if (importers.length > 1) {

                indexArr = [];
                for (i = 0; i < importers.length; i++) {

                    index = importers[i].getAttribute('data-ui-import');

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

            panel = ui.find('.mobile-menu.show-' + position);
            content = ui.find('.mobile-menu-content', panel);

            filtered = html.filter(function (el) {
                return el != null;
            });

            for (j = 0; j < filtered.length; j++) {
                content.appendChild(filtered[j]);
            }

            bg = ui.find('.mobile-menu-bg')[0];
            if (bg === undefined) {

                ui.find('body')[0].insertAdjacentHTML('beforeend', '<div class="mobile-menu-bg ease-slow ease-layout"></div>');
                bg = ui.find('.mobile-menu-bg')[0];

            }

            ui.addClass(document, 'mobile-menu-opened');

            ui.addClass(panel, 'open');
            ui.addClass(bg, 'open');

            setTimeout(function () {

                ui.addClass(panel, 'open-ease');
                ui.addClass(bg, 'open-ease');

                setTimeout(function () {
                    ui.trigger(document, 'mobilemenu:open ui:domChange'); // set custom event
                }, ui.globals.slow);

            }, 10);

            ui.on('.close-mobile-menu', 'click', function () {
                ui.mobileMenu.close(panel);
            });

        });

        ui.on(document, 'click', '.mobile-menu-bg', function () {

            var panel = ui.find('.mobile-menu.open');
            ui.mobileMenu.close(panel);

        });

    };

    // Loaders
    ui.onload(ui.mobileMenu.Start);
    ui.on(window, 'resize', function () {

        var panel = ui.find('.mobile-menu.open');

        if (panel.length > 0) {
            ui.mobileMenu.close(panel);
        }

    });

}());