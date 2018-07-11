/*
 Transitions JS
 Transitions JS requires Events JS, Useragents JS
*/

/*globals window, document, events, useragents, setTimeout, clearTimeout */
var transitions = {

    effects: true,
    preload: false, // wait page preload to start effects
    ie: true,
    android: true,
    androidOld: false

};

function transitionsFnc() {

    'use strict';

    if (useragents.ie9) { transitions.effects = false; }

    if (useragents.ie && !useragents.edge && !transitions.ie) {
        transitions.effects = false;
    }
    if (useragents.mobile && useragents.android && !transitions.android) {
        transitions.effects = false;
    }
    if (useragents.mobile && useragents.androidOld && !transitions.androidOld) {
        transitions.effects = false;
    }

    if (transitions.effects) {

        // wait page preload to start effects
        if (transitions.preload) {

            events.addClass(document, 'no-transitions-all');
            setTimeout(function () {
                events.removeClass(document, 'no-transitions-all');
            }, 300);

        }

    } else { events.addClass(document, 'no-transitions-all'); }

}

function pauseTransitionsFnc() { // close transitions on window resizing

    'use strict';

    clearTimeout(window.stopTransitionsOnResizing);
    events.addClass(document, 'no-transitions-all');

    window.stopTransitionsOnResizing = setTimeout(function () {
        events.removeClass(document, 'no-transitions-all');
    }, 150);

}

/*!loader */
events.onload(function () {

    'use strict';
    transitionsFnc();

});

/*!resize loader*/
events.on(window, 'resize', function () {

    'use strict';
    pauseTransitionsFnc();

});
