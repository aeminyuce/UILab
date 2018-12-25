/*
 Mobile Menu JS
 Mobile Menu JS requires Events JS
*/

var mobileMenu = {};

(function () {

    'use strict';
    /*globals window, document, selector, events, setTimeout */

    var storePageYPosition;

    mobileMenu.Start = function () {

        function closeMobileMenu(panel) {

            events.removeClass(panel, 'open-ease');
            events.removeClass(document, 'mobile-menu-opened mobile-menu-opened-before');

            window.scrollTo(0, storePageYPosition);

            setTimeout(function () {
                events.removeClass(panel, 'open');
            }, 150);

            events.off('.close-mobile-menu', 'click');

        }

        // Events
        events.on(document, 'click', '[class*="show-mobile-menu-"]', function () {

            var panel, importers, i, html, position;

            html = '';
            position = 'left';

            if (events.hasClass(this, 'show-mobile-menu-right')) {
                position = 'right';
            }

            panel = selector('.mobile-menu.show-' + position);
            importers = selector('.add-mobile-menu-' + position + '[data-import]').length;

            if (importers > 1) {

                for (i = 1; i < (importers + 1); i += 1) {
                    html += events.clone('.add-mobile-menu-' + position + '[data-import="' + i + '"]');
                }

            } else { html = events.clone('.add-mobile-menu-' + position); }

            storePageYPosition = window.pageYOffset;
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

            selector('.mobile-menu-content', panel).innerHTML = html;
            events.on('.close-mobile-menu', 'click', function () { closeMobileMenu(panel); });

            html = '';

        });

    };

    // Loaders
    events.onload(mobileMenu.Start);

}());
