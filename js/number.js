/*
 Number JS
 Number JS requires Events JS
*/

/*globals document, events */
function numberFnc() {

    'use strict';

    events.on(document, 'keypress', '.text > .number', function (e) {

        var c, isRefresh = false;

        if (e.which) { c = e.which; } else {
            c = e.keyCode;
            if (c === 116) { isRefresh = true; }
        }

        if (c !== 8 && c !== 9 && c !== 35 && c !== 36 && c !== 37 && c !== 39 && c !== 46 && !isRefresh && (c < 48 || c > 57)) {
            e.preventDefault();
        }

    });

}

/*!loader */
events.onload(function () {

    'use strict';
    numberFnc();

});
