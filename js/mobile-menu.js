/*
 Mobile Menu JS
 Mobile Menu JS requires Selector Js, Events JS
*/

var mobileMenu = {};

(function () {

    'use strict';
    /*globals window, document, selector, events, setTimeout */

    mobileMenu.close = function (panel) {

        var i, id, el, contents, bg;

        bg = selector('.mobile-menu-bg')[0];

        events.removeClass(panel, 'open-ease');
        events.removeClass(bg, 'open-ease');
        events.removeClass(document, 'mobile-menu-opened');

        setTimeout(function () {

            events.removeClass(panel, 'open');
            events.removeClass(bg, 'open');

        }, 400);

        contents = selector('[data-mm]');

        for (i = 0; i < contents.length; i++) {

            id = '.mm-' + contents[i].getAttribute('data-mm');
            el = selector(id)[0];

            contents[i].removeAttribute('data-mm');

            el.appendChild(contents[i]);
            el.parentNode.insertBefore(el.firstChild, el);

            el.parentNode.removeChild(el);

        }

        events.off('.close-mobile-menu', 'click');

    };

    mobileMenu.Start = function () {

        // Events
        events.on(document, 'click', '[class*="show-mobile-menu-"]', function () {

            var html, importers, moveFnc, id, i, j, index, indexArr, position, bg, panel, filtered, content;

            html = [];
            position = 'l'; // right

            if (events.hasClass(this, 'show-mobile-menu-r')) {
                position = 'r'; // left
            }

            moveFnc = function (that, j) {

                id = new Date().getTime();
                id = id.toString();
                id = id.substring(id.length - 4, id.length) + j;

                that.insertAdjacentHTML('beforebegin', '<div class="mm-' + id + '" style="display: none;"></div>');
                that.setAttribute('data-mm', id);

                html[j] = document.createDocumentFragment();
                html[j].appendChild(that);

            };

            importers = selector('.add-mobile-menu-' + position);

            if (importers.length === 1) {
                moveFnc(importers[0], 0);

            } else if (importers.length > 1) {

                indexArr = [];
                for (i = 0; i < importers.length; i++) {

                    index = importers[i].getAttribute('data-import');

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

            panel = selector('.mobile-menu.show-' + position);
            content = selector('.mobile-menu-content', panel);

            filtered = html.filter(function (el) {
                return el != null;
            });

            for (j = 0; j < filtered.length; j++) {
                content.appendChild(filtered[j]);
            }

            bg = selector('.mobile-menu-bg')[0];
            if (bg === undefined) {

                selector('body')[0].insertAdjacentHTML('beforeend', '<div class="mobile-menu-bg ease-slow ease-layout"></div>');
                bg = selector('.mobile-menu-bg')[0];

            }

            events.addClass(document, 'mobile-menu-opened');

            events.addClass(panel, 'open');
            events.addClass(bg, 'open');

            setTimeout(function () {

                events.addClass(panel, 'open-ease');
                events.addClass(bg, 'open-ease');

                setTimeout(function () {
                    events.trigger(document, 'mobilemenu:open domChange'); // set custom event
                }, 400);

            }, 10);

            events.on('.close-mobile-menu', 'click', function () {
                mobileMenu.close(panel);
            });

        });

        events.on(document, 'click', '.mobile-menu-bg', function () {

            var panel = selector('.mobile-menu.open');
            mobileMenu.close(panel);

        });

    };

    // Loaders
    events.onload(mobileMenu.Start);
    events.on(window, 'resize', function () {

        var panel = selector('.mobile-menu.open');

        if (panel.length > 0) {
            mobileMenu.close(panel);
        }

    });

}());