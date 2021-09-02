/*
 UI Effects JS
 Requires UI JS
*/

ui.effects = {

    target: document,

    // pause effects
    pauseAll: true,
    pauseScroll: false, // pause effects when scrolling
    pauseResize: true, // pause effects when resizing
    preload: true, // wait page preload to start effects

    // show effects
    ie: true,
    android: true,
    androidOld: false,

    // classes
    namePause: 'pause-effects',
    nameNoEffects: 'no-effects'

};

(function () {

    'use strict';
    /*globals window, document, ui, setTimeout, clearTimeout */

    var pauseTransitions;

    function pauseTransitionsFnc(eName) {

        if (!ui.effects.pauseAll) {

            if ((eName === 'scroll' && ui.effects.pauseScroll) || (eName === 'resize' && ui.effects.pauseResize)) {

                clearTimeout(pauseTransitions);
                ui.addClass(ui.effects.target, ui.effects.namePause);

                pauseTransitions = setTimeout(function () {
                    ui.removeClass(ui.effects.target, ui.effects.namePause);
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
            ui.addClass(ui.effects.target, ui.effects.nameNoEffects);

        } else {

            // wait page preload to start transitions
            if (ui.effects.preload) {

                ui.addClass(ui.effects.target, ui.effects.namePause);

                setTimeout(function () {
                    ui.removeClass(ui.effects.target, ui.effects.namePause);
                }, ui.globals.ease * 2);

            }

        }

    };

    // Loaders
    ui.onload(ui.effects.Start);
    ui.on(window, 'resize scroll', function (e) { pauseTransitionsFnc(e.type); });

}());
