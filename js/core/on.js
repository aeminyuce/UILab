/* on */

import { ui } from './globals.js';
export default () => ui;

ui.on = function (t, e, that, callback) {

    var arr, f, fnc, handlerFnc, targetEl, objName, isWindowEvent, l, customEvent, eName, delegate, ua, i, j, k, m;

    fnc = function (e) {

        if (typeof t === 'string' && e === undefined) { return; }

        delegate = false;
        customEvent = false;

        if (callback !== undefined) { // delegate

            f = function (event) {

                eName = e.split('.')[0]; // split for event naming
                targetEl = ui.find(that); // catches future updated DOM!

                for (j = 0; j < targetEl.length; j++) {

                    if (ui.globals.nonClosestElems.indexOf(eName) > -1) { // control non-closest event listeners

                        if (event.target === targetEl[j]) {
                            callback.call(targetEl[j], event, event.toElement);
                        }

                    } else {

                        if (event.target === targetEl[j] || ui.closest(event.target, targetEl[j]).length === 1) {
                            callback.call(targetEl[j], event, event.toElement);
                        }

                    }

                }

            };

            delegate = true;

        } else {

            f = that;
            ua = navigator.userAgent.toLowerCase();

            // filter ui.on(object, event, fn) event listeners
            if (t instanceof Object && !NodeList.prototype.isPrototypeOf(t) && typeof e === 'string') {

                // detect window event listeners
                isWindowEvent = Object.prototype.toString.call(t) === '[object Window]';
                if (isWindowEvent) {

                    // disable ie duplicate window event firing on ready
                    if (ua.indexOf("MSIE ") > 0 || !!document.documentMode || ua.indexOf('edge') > -1) {

                        setTimeout(function () {
                            l.addEventListener(e, that, true);
                        }, ui.globals.ease);

                    }

                }

                // detect custom event listeners
                objName = Object.prototype.toString.call(t);

                if (objName === '[object HTMLDocument]' || objName === '[object Document]') {
                    customEvent = true;
                }

            }

        }

        handlerFnc = function (pt, pe) {

            if (f === undefined) { return; }

            if (ui.handlers === undefined) { ui.handlers = {}; }
            if (ui.handlers[pt] === undefined) { ui.handlers[pt] = {}; }
            if (ui.handlers[pt][pe] === undefined) { ui.handlers[pt][pe] = []; }

            ui.handlers[pt][pe].push(f);

            if (typeof pe !== 'function' && f !== undefined) {

                if (delegate || isWindowEvent || customEvent) {

                    // merge repeated event listeners
                    if (ui.handlers[pt][pe].length === 1) {
                        pt.addEventListener(pe.split('.')[0], function (ev) { // split for event naming

                            for (m = 0; m < ui.handlers[pt][pe].length; m++) {
                                ui.handlers[pt][pe][m](ev);
                            }

                        }, true);
                    }

                } else {
                    pt.addEventListener(pe.split('.')[0], f, true); // split for event naming
                }

            } else { return; }

        };

        l = ui.find(t);

        if (isWindowEvent) {
            handlerFnc(l, e);

        } else {

            for (i = 0; i < l.length; i++) {
                handlerFnc(l[i], e);
            }

        }

    };

    // for multiple event listeners ex: 'click touchend'
    arr = e.split(' ');

    for (k = 0; k < arr.length; k++) {
        fnc(arr[k]);
    }

}