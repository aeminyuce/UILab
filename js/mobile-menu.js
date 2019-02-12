/*
 Mobile Menu JS
 Mobile Menu JS requires Events JS
*/

var mobileMenu = {

    visibleLeft: 'md', // 'xs', 'sm', 'md'
    visibleRight: 'md' // 'xs', 'sm', 'md'

};

(function () {

    'use strict';
    /*globals window, document, selector, events, setTimeout, screen */

    var
        temp,
        pageYPosition,
        panelOpened = '',
        visibleArr = [];

    function closeMobileMenu(panel) {

        var i, id, el, contents, bg;

        bg = selector('.mobile-menu-bg')[0];

        events.removeClass(panel, 'open-ease');
        events.removeClass(bg, 'open-ease');
        events.removeClass(document, 'mobile-menu-opened mobile-menu-opened-before');

        window.scrollTo(0, pageYPosition);

        setTimeout(function () {

            events.removeClass(panel, 'open');
            events.removeClass(bg, 'open');

        }, 400);

        contents = selector('[data-mm]');

        for (i = 0; i < contents.length; i += 1) {

            id = '.mm-' + contents[i].getAttribute('data-mm');
            el = selector(id)[0];

            contents[i].removeAttribute('data-mm');

            el.appendChild(contents[i]);
            el.parentNode.insertBefore(el.firstChild, el);

        }

        events.off('.close-mobile-menu', 'click');
        panelOpened = '';

    }

    //visibleArr = [{'xs': 481}, {'sm': 768}, {'md': 960}];
    visibleArr = ['xs', 'sm', 'md'];

    function checkScreen() {

        if (panelOpened === '') { return; }

        var screenLimits, max, panel;

        screenLimits = function () {

            if (mobileMenu.visibleLeft === 'md') {
                max = 960;

            } else if (mobileMenu.visibleLeft === 'sm') {
                max = 768;

            } else if (mobileMenu.visibleLeft === 'xs') {
                max = 481;
            }

        };

        if (panelOpened === 'left') {

            if (visibleArr.indexOf(mobileMenu.visibleLeft) > -1) {

                screenLimits();
                panel = selector('.mobile-menu.show-left');

                if (screen.width >= max) { closeMobileMenu(panel); }

            }

        } else {

            if (visibleArr.indexOf(mobileMenu.visibleRight) > -1) {

                screenLimits();
                panel = selector('.mobile-menu.show-right');

                if (screen.width >= max) { closeMobileMenu(panel); }

            }

        }

    }

    mobileMenu.Start = function () {

        // Events
        events.on(document, 'click', '[class*="show-mobile-menu-"]', function () {

            var importers, moveFnc, id, wrapper, i, index, indexArr, indexSort, position, bg, panel;

            position = 'left';
            temp = document.createDocumentFragment();

            if (events.hasClass(this, 'show-mobile-menu-right')) {
                position = 'right';
            }

            moveFnc = function (that, j) {

                wrapper = document.createDocumentFragment();

                id = new Date().getTime();
                id = id.toString();
                id = id.substring(id.length - 4, id.length) + j;

                that.insertAdjacentHTML('beforebegin', '<div class="mm-' + id + '" style="display: none;"></div>');

                that.setAttribute('data-mm', id);
                wrapper.appendChild(that);

                temp.appendChild(wrapper);

            };

            indexSort = function (a, b) {
                return a - b;
            };

            importers = selector('.add-mobile-menu-' + position);
            if (importers.length === 1) {
                moveFnc(importers[0], 0);

            } else if (importers.length > 1) {

                indexArr = [];
                for (i = 0; i < importers.length; i += 1) {

                    index = importers[i].getAttribute('data-import');

                    if (index !== null && index !== '') {
                        indexArr.push(index);

                    } else { return; }

                }

                indexArr.sort(indexSort);

                for (i = 0; i < importers.length; i += 1) {
                    moveFnc(selector('[data-import="' + indexArr[i] + '"]')[0], i);
                }

            } else { return; }

            panelOpened = position;
            pageYPosition = window.pageYOffset;

            panel = selector('.mobile-menu.show-' + position);
            selector('.mobile-menu-content', panel).appendChild(temp);

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
                events.addClass(document, 'mobile-menu-opened-before');

                events.on(document, 'mobilemenu:open');
                events.trigger(document, 'mobilemenu:open'); // set custom event

                setTimeout(function () {
                    events.addClass(document, 'mobile-menu-opened');
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
    events.on(window, 'scroll', checkScreen);

}());
