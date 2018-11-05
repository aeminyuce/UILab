/*
 Toggle Password JS
 Toggle Password JS requires Events JS
*/

(function () {

    'use strict';
    /*globals document, selector, events */

    function togglePasswordFnc() {

        // Events
        events.on(document, 'click touchend', '.toggle-password', function () {

            var t, p, id = this.getAttribute('data-id');

            if (id === null) {

                p = events.closest(this, '.text');
                if (p.length === 1) {
                    t = selector('input', p);
                }

            } else { t = selector('#' + id)[0]; }

            if (t.getAttribute('type') === 'password') {
                t.setAttribute('type', 'text');

            } else {
                t.setAttribute('type', 'password');
            }

        });

    }

    // Loaders
    events.onload(togglePasswordFnc);

}());
