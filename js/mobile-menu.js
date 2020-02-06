/*
 Mobile Menu JS
 Mobile Menu JS requires Selector Js, Events JS
*/

var mobileMenu = {

    visibleLeft: 'md', // 'xs', 'sm', 'md', 'lg'
    visibleRight: 'md' // 'xs', 'sm', 'md', 'lg'

};

(function () {

    'use strict';
    /*globals window, document, selector, events, setTimeout, useragents */

    var
        pageYPos,
        panelOpened = '',
        visibleArr = [];

    function closeMobileMenu(panel) {

        var i, id, el, contents, bg;

        bg = selector('.mobile-menu-bg')[0];

        events.removeClass(panel, 'open-ease');
        events.removeClass(bg, 'open-ease');
        events.removeClass(document, 'mobile-menu-opened');

        if (useragents.mobile) {
            window.scrollTo(0, pageYPos);
        }

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
        panelOpened = '';

    }

    //visibleArr = [{'xs': 481}, {'sm': 768}, {'md': 960}, {'lg': 1200}];
    visibleArr = ['xs', 'sm', 'md', 'lg'];

    function checkScreen() {

        if (panelOpened === '') { return; }

        var screenLimits, max, panel;

        screenLimits = function (size) {

            if (size === 'lg') {
                return 1200;

            } else if (size === 'md') {
                return 960;

            } else if (size === 'sm') {
                return 768;

            } else if (size === 'xs') {
                return 481;
            }

        };

        if (panelOpened === 'l') {

            if (visibleArr.indexOf(mobileMenu.visibleLeft) > -1) {

                panel = selector('.mobile-menu.show-l');

                max = screenLimits(mobileMenu.visibleLeft);
                if (window.innerWidth >= max) { closeMobileMenu(panel); }

            }

        } else {

            if (visibleArr.indexOf(mobileMenu.visibleRight) > -1) {

                panel = selector('.mobile-menu.show-r');

                max = screenLimits(mobileMenu.visibleRight);
                if (window.innerWidth >= max) { closeMobileMenu(panel); }

            }

        }

    }

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

            panelOpened = position;

            if (useragents.mobile) {
                pageYPos = window.pageYOffset; // get current scroll-y position
            }

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

            events.addClass(panel, 'open');
            events.addClass(bg, 'open');

            setTimeout(function () {

                events.addClass(panel, 'open-ease');
                events.addClass(bg, 'open-ease');

                setTimeout(function () {

                    events.addClass(document, 'mobile-menu-opened');
                    events.trigger(document, 'mobilemenu:open domChange'); // set custom event

                }, 400);

            }, 10);

            events.on('.close-mobile-menu', 'click', function () {
                closeMobileMenu(panel);
            });

        });

        events.on(document, 'click', '.mobile-menu-bg', function () {

            var panel = selector('.mobile-menu.open');
            closeMobileMenu(panel);

        });

    };

    // Loaders
    events.onload(mobileMenu.Start);
    events.on(window, 'resize', checkScreen);

}());
