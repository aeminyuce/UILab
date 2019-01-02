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

        var i, id, el, contents;

        events.removeClass(panel, 'open-ease');
        events.removeClass(document, 'mobile-menu-opened mobile-menu-opened-before');

        window.scrollTo(0, pageYPosition);

        setTimeout(function () {
            events.removeClass(panel, 'open');
        }, 150);

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

            var importers, moveFnc, id, wrapper, index, i, position, panel;

            position = 'left';
            temp = document.createDocumentFragment();

            if (events.hasClass(this, 'show-mobile-menu-right')) {
                position = 'right';
            }

            moveFnc = function (j) {

                wrapper = document.createDocumentFragment();
                id = new Date().getTime();

                importers[j].insertAdjacentHTML('beforebegin', '<div class="mm-' + id + '" style="display: none;"></div>');

                importers[j].setAttribute('data-mm', id);
                wrapper.appendChild(importers[j]);

                temp.appendChild(wrapper);

            };

            importers = selector('.add-mobile-menu-' + position);
            if (importers.length === 1) {
                moveFnc(0);

            } else if (importers.length > 1) {

                for (i = 0; i < importers.length; i += 1) {

                    index = importers[i].getAttribute('data-import');

                    if (index !== null && index !== '') {
                        moveFnc(i);

                    } else { return; }

                }

            } else { return; }

            panelOpened = position;
            pageYPosition = window.pageYOffset;

            panel = selector('.mobile-menu.show-' + position);
            selector('.mobile-menu-content', panel).appendChild(temp);

            events.addClass(panel, 'open');

            setTimeout(function () {

                events.addClass(panel, 'open-ease');
                events.addClass(document, 'mobile-menu-opened-before');

                events.on(document, 'mobilemenu:open');
                events.trigger(document, 'mobilemenu:open'); // set custom event

                setTimeout(function () {
                    events.addClass(document, 'mobile-menu-opened');
                }, 150);

            }, 10);

            events.on('.close-mobile-menu', 'click', function () {
                closeMobileMenu(panel);
            });

        });

    };

    // Loaders
    events.onload(mobileMenu.Start);
    events.on(window, 'resize', checkScreen);
    events.on(window, 'scroll', checkScreen);

}());
