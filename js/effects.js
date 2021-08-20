/*
 UI Effects JS
 Requires UI JS
*/

ui.effects = {

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
    /*globals window, document, ui, setTimeout, clearTimeout */

    var pauseTransitions;

    function pauseTransitionsFnc(eName) {

        if (!ui.effects.pauseAll) {

            if ((eName === 'scroll' && ui.effects.pauseScroll) || (eName === 'resize' && ui.effects.pauseResize)) {

                clearTimeout(pauseTransitions);
                ui.addClass(document, 'pause-effects');

                pauseTransitions = setTimeout(function () {
                    ui.removeClass(document, 'pause-effects');
                }, ui.globals.ease * 2);

            }

        }

    }

    ui.effects.Start = function () {

        if (ui.userAgents.ie && !ui.userAgents.edge && !ui.effects.ie) {
            ui.effects.pauseAll = true;
        }
        if (ui.userAgents.mobile && ui.userAgents.android && !ui.effects.android) {
            ui.effects.pauseAll = true;
        }
        if (ui.userAgents.mobile && ui.userAgents.androidOld && !ui.effects.androidOld) {
            ui.effects.pauseAll = true;
        }

        if (ui.effects.pauseAll) {
            ui.addClass(document, 'no-effects');

        } else {

            // wait page preload to start transitions
            if (ui.effects.preload) {

                ui.addClass(document, 'pause-effects');
                setTimeout(function () {
                    ui.removeClass(document, 'pause-effects');
                }, ui.globals.ease * 2);

            }

        }

    };

    // Loaders
    ui.onload(ui.effects.Start);
    ui.on(window, 'resize scroll', function (e) { pauseTransitionsFnc(e.type); });

}());
