/*
 Transitions JS
 Transitions JS requires Events JS, Useragents JS
*/

/*globals window, document, events, useragents, setTimeout, clearTimeout */
var transitions = {

    effects: true,
    pause: false, // close transitions and animations on window resizing and window scrolling
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

        // wait page preload to start transitions
        if (transitions.preload) {

            events.addClass(document, 'no-transitions-all');
            setTimeout(function () {
                events.removeClass(document, 'no-transitions-all');
            }, 300);

        }

    } else { events.addClass(document, 'no-transitions-all animate-stop-all'); }

}

function pauseTransitionsFnc() {

    'use strict';

    if (transitions.effects && transitions.pause) {

        clearTimeout(window.pauseTransitions);

        events.addClass(document, 'no-transitions-all');
        events.addClass('.animate-control', 'animate-stop-all');

        window.pauseTransitions = setTimeout(function () {

            events.removeClass(document, 'no-transitions-all');
            events.removeClass('.animate-control', 'animate-stop-all');

        }, 300);

    }

}

/*!loader */
events.onload(function () {

    'use strict';
    transitionsFnc();

});

/*!resize loader */
events.on(window, 'resize', function () {

    'use strict';
    pauseTransitionsFnc();

});

/*!scroll loader */
events.on(window, 'scroll', function () {

    'use strict';
    pauseTransitionsFnc();

});
