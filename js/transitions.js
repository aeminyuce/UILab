/*
 Transitions JS
 Transitions JS requires Events JS, Useragents JS
*/

var transitions = {

    effects: true,
    pauseScroll: false, // close transitions and animations on window resizing
    pauseResize: true, // close transitions and animations on window scrolling
    preload: true, // wait page preload to start effects
    ie: true,
    android: true,
    androidOld: false

};

(function () {

    'use strict';
    /*globals window, document, events, useragents, setTimeout, clearTimeout */

    var pauseTransitions;

    function transitionsFnc() {

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

    function pauseTransitionsFnc(eName) {

        if (transitions.effects) {

            if ((eName === 'scroll' && transitions.pauseScroll) || (eName === 'resize' && transitions.pauseResize)) {

                clearTimeout(pauseTransitions);

                events.addClass(document, 'no-transitions-all');
                events.addClass('.animate-control', 'animate-stop-all');

                pauseTransitions = setTimeout(function () {

                    events.removeClass(document, 'no-transitions-all');
                    events.removeClass('.animate-control', 'animate-stop-all');

                }, 300);

            }

        }

    }

    // Loaders
    events.onload(transitionsFnc);

    events.on(window, 'resize', function () {
        pauseTransitionsFnc('resize');
    });

    events.on(window, 'scroll', function () {
        pauseTransitionsFnc('scroll');
    });

}());
