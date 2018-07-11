/*
 File Input JS
 File Input JS requires Events JS
*/

/*globals document, selector, events */
var fileInputFnc = function () {

    'use strict';

    events.on(document, 'change', '.file input', function () {
        selector('span', this.parentElement)[0].innerHTML = this.value;
    });

};

/*!loader */
events.onload(function () {

    'use strict';
    fileInputFnc();

});
