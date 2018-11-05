/*
 Indeterminate JS
 Indeterminate JS requires Events JS
*/

(function () {

    'use strict';
    /*globals document, events */

    function indeterminateFnc() {

        // Events
        events.on(document, 'click', 'input[type="checkbox"].indeterminate', function () {

            if (this.readOnly) {
                this.checked = this.readOnly = false;

            } else if (!this.checked) {
                this.readOnly = this.indeterminate = true;
            }

        });

    }

    /*!loader */
    events.onload(indeterminateFnc);

}());
