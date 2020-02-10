/*
 Effects JS
 Effects JS requires Selector Js, Events JS, User Agents JS
*/

var effects = {

    // pause effects
    pauseAll: false,
    pauseScroll: false, // pause effects when scrolling
    pauseResize: true, // pause effects when resizing
    preload: true, // wait page preload to start effects

    // show effects
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
            events.addClass(document, 'no-effects');

        } else {

            // wait page preload to start transitions
            if (effects.preload) {

                events.addClass(document, 'pause-effects');
                setTimeout(function () {
                    events.removeClass(document, 'pause-effects');
                }, 300);

            }

        }

    };

    function pauseTransitionsFnc(eName) {

        if (!effects.pauseAll) {

            if ((eName === 'scroll' && effects.pauseScroll) || (eName === 'resize' && effects.pauseResize)) {

                clearTimeout(pauseTransitions);
                events.addClass(document, 'pause-effects');

                pauseTransitions = setTimeout(function () {
                    events.removeClass(document, 'pause-effects');
                }, 300);

            }

        }

    }

    // Loaders
    events.onload(effects.Start);
    events.on(window, 'resize scroll', function (e) { pauseTransitionsFnc(e.type); });

}());
