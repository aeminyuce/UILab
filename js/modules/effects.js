/* effects */

import { ui } from './../core/globals.js';
export default () => ui;

ui.effects = {

    // targets
    target: document,

    // main classnames
    namePause: 'ui-effects-paused',
    nameNoEffects: 'ui-no-effects',

    // pause effects
    pauseAll: false,
    pauseScroll: false, // pause effects when scrolling
    pauseResize: false, // pause effects when resizing

    preload: true, // wait page preload to start effects
    reduceMotion: true, // detecting device reduce motions

    // show effects
    ie: true,
    android: true,
    androidOld: false

};

(() => {

    let pauseTransitionsTimer;

    ui.on(window,
        'resize scroll',

        (e) => {

            if (!ui.effects.pauseAll) {

                if ((e.type === 'scroll' && ui.effects.pauseScroll) || (e.type === 'resize' && ui.effects.pauseResize)) {

                    clearTimeout(pauseTransitionsTimer);
                    ui.addClass(ui.effects.target, ui.globals.namePause);

                    pauseTransitionsTimer = setTimeout(() => {
                        ui.removeClass(ui.effects.target, ui.globals.namePause);
                    }, ui.globals.ease * 2);

                }

            }

    });

    ui.onload(() => {

        if (ui.userAgents.ie && !ui.userAgents.edge && !ui.effects.ie) {
            ui.effects.pauseAll = true;
        }
        if (ui.userAgents.mobile && ui.userAgents.android && !ui.effects.android) {
            ui.effects.pauseAll = true;
        }
        if (ui.userAgents.mobile && ui.userAgents.androidOld && !ui.effects.androidOld) {
            ui.effects.pauseAll = true;
        }

        const reduceTimers = () => { // reduce effect timers

            // they must be bigger than 10!
            ui.globals.fast = 11;
            ui.globals.ease = 12;
            ui.globals.slow = 13;
            ui.globals.slow2x = 14;
            ui.globals.slow3x = 15;
            ui.globals.slow4x = 16;
            ui.globals.slow5x = 17;

        }

        if (ui.effects.reduceMotion) {

            const detectMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
            if (!detectMotion || detectMotion.matches) {

                ui.addClass(ui.effects.target, ui.effects.nameNoEffects);
                reduceTimers();

            }
        }

        if (ui.effects.pauseAll) {

            ui.addClass(ui.effects.target, ui.effects.nameNoEffects);
            reduceTimers();

        } else {

            // wait page preload to start transitions
            if (ui.effects.preload) {

                ui.addClass(ui.effects.target, ui.globals.namePause);

                setTimeout(() => {
                    ui.removeClass(ui.effects.target, ui.globals.namePause);
                }, ui.globals.ease * 2);

            }

        }

    });

})();