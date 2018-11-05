/*
 File Input JS
 File Input JS requires Events JS
*/

(function () {

    'use strict';
    /*globals document, selector, events */

    function fileInputFnc() {

        events.on(document, 'change', '.file input', function () {
            selector('span', this.parentElement)[0].innerHTML = this.value;
        });

    }

    // Loaders
    events.onload(fileInputFnc);

}());
