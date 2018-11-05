/*
 Toggle Textarea JS
 Toggle Textarea JS requires Events JS
*/

(function () {

    'use strict';
    /*globals document, events */

    function toggleTextareaFnc() {

        // Events
        events.on(document, 'focus', '.textarea.focus-multi textarea', function () {

            var p = this.parentElement;

            events.addClass(p, 'toggle-textarea');
            events.removeClass(p, 'focus-multi');

        });

        events.on(document, 'blur', '.textarea.toggle-textarea textarea', function () {

            var p = this.parentElement;

            events.addClass(p, 'focus-multi');
            events.removeClass(p, 'toggle-textarea');

        });

    }

    // Loaders
    events.onload(toggleTextareaFnc);

}());
