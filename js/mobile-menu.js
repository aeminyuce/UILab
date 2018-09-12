/*
 Mobile Menu JS
 Mobile Menu JS requires Events JS
*/

/*globals window, document, selector, events, setTimeout */
function mobileMenuFnc() {

    'use strict';

    events.on(

        '[class*="show-mobile-menu-"],.close-mobile-menu',
        'click',

        function () {

            var panel, importers, i, html = '', position = 'left', classname = 'open', easeClassname = 'open-ease';

            panel = selector('.mobile-menu');
            if (!events.hasClass(panel, classname)) { // open

                if (events.hasClass(this, 'show-mobile-menu-right')) {
                    position = 'right';
                }

                importers = selector('.add-mobile-menu[data-import]').length;
                if (importers > 1) {

                    for (i = 1; i < (importers + 1); i += 1) {
                        html += events.clone('.add-mobile-menu[data-import="' + i + '"]');
                    }

                } else { html = events.clone('.add-mobile-menu'); }

                window.mobileMenuPageYPosition = window.pageYOffset;
                events.addClass(panel, classname + ' show-' + position);

                setTimeout(function () {

                    events.addClass(panel, easeClassname);

                    events.on(document, 'mobilemenu:open');
                    events.trigger(document, 'mobilemenu:open'); // set custom event

                    setTimeout(function () {
                        events.addClass(document, 'mobile-menu-opened');
                    }, 150);

                }, 10);

            } else { // close

                events.removeClass(panel, easeClassname);
                events.removeClass(document, 'mobile-menu-opened');

                window.scrollTo(0, window.mobileMenuPageYPosition);

                setTimeout(function () {

                    events.removeClass(panel, classname);
                    events.removeClass(panel, classname + ' show-' + position);

                }, 150);

            }

            selector('.mobile-menu-content')[0].innerHTML = html;

        }

    );

}

/*!loader */
events.onload(function () {

    'use strict';
    mobileMenuFnc();

});
