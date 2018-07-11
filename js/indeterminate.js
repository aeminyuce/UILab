/*
 Indeterminate JS
 Indeterminate JS requires Events JS
*/

/*globals document, events */
function indeterminateFnc() {

    'use strict';

    events.on(document, 'click', 'input[type="checkbox"].indeterminate', function () {

        if (this.readOnly) {
            this.checked = this.readOnly = false;

        } else if (!this.checked) {
            this.readOnly = this.indeterminate = true;
        }

    });

}

/*!loader */
events.onload(function () {

    'use strict';
    indeterminateFnc();

});
