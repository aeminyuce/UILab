/*
 Effects JS
 Effects JS requires Selector Js, Events JS, User Agents JS
*/

var effects = {

    pauseAll: false,
    pauseScroll: false, // pasuse effects when scrolling
    pauseResize: false, // pasuse effects when resizing
    preload: true, // wait page preload to start effects
    ie: true,
    android: true,
    androidOld: false

};

(function () {

    'use strict';
    /*globals window, document, events, useragents, setTimeout, clearTimeout */

    var pauseTransitions;

    effects.Start = function () {

        if (useragents.ie && !useragents.edge && !effects.ie) {
            effects.pauseAll = true;
        }
        if (useragents.mobile && useragents.android && !effects.android) {
            effects.pauseAll = true;
        }
        if (useragents.mobile && useragents.androidOld && !effects.androidOld) {
            effects.pauseAll = true;
        }

        if (effects.pauseAll) {
            events.addClass(document, 'no-transitions-all animate-stop-all');

        } else {

            // wait page preload to start transitions
            if (effects.preload) {

                events.addClass(document, 'no-transitions-all');
                setTimeout(function () {
                    events.removeClass(document, 'no-transitions-all');
                }, 300);

            }

        }

    };

    function pauseTransitionsFnc(eName) {

        if (!effects.pauseAll) {

            if ((eName === 'scroll' && effects.pauseScroll) || (eName === 'resize' && effects.pauseResize)) {

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
    events.onload(effects.Start);

    events.on(window, 'resize', function () {
        pauseTransitionsFnc('resize');
    });

    events.on(window, 'scroll', function () {
        pauseTransitionsFnc('scroll');
    });

}());