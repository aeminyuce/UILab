/* on */

import { ui } from './globals.js';
export default () => ui;

ui.on = function (t, e, that, callback) {

    const set = function (e) {

        if (typeof t === 'string' && e === undefined) { return; }

        let callFnc;
        let isWindowEvent;

        let delegate = false;
        let customEvent = false;

        if (callback !== undefined) { // delegate

            callFnc = function (event) {

                const eName = e.split('.')[0]; // split for event naming
                const targetEl = ui.find(that); // catches future updated DOM!

                targetEl.forEach(el => {

                    if (ui.globals.nonClosestElems.indexOf(eName) > -1) { // control non-closest event listeners

                        if (event.target === el) {
                            callback.call(el, event, event.toElement);
                        }

                    } else {

                        if (event.target === el || ui.closest(event.target, el).length === 1) {
                            callback.call(el, event, event.toElement);
                        }

                    }

                });

            };

            delegate = true;

        } else {

            callFnc = that;
            const ua = navigator.userAgent.toLowerCase();

            // filter ui.on(object, event, fn) event listeners
            if (t instanceof Object && !NodeList.prototype.isPrototypeOf(t) && typeof e === 'string') {

                // detect window event listeners
                isWindowEvent = Object.prototype.toString.call(t) === '[object Window]';
                if (isWindowEvent) {

                    // disable ie duplicate window event firing on ready
                    if (ua.indexOf("MSIE ") > 0 || !!document.documentMode || ua.indexOf('edge') > -1) {

                        setTimeout(() => {
                            l.addEventListener(e, that, true);
                        }, ui.globals.ease);

                    }

                }

                // detect custom event listeners
                const objName = Object.prototype.toString.call(t);

                if (objName === '[object HTMLDocument]' || objName === '[object Document]') {
                    customEvent = true;
                }

            }

        }

        const handlerFnc = function (pt, pe) {

            if (callFnc === undefined) { return; }

            if (ui.handlers === undefined) { ui.handlers = {}; }
            if (ui.handlers[pt] === undefined) { ui.handlers[pt] = {}; }
            if (ui.handlers[pt][pe] === undefined) { ui.handlers[pt][pe] = []; }

            ui.handlers[pt][pe].push(callFnc);

            if (typeof pe !== 'function' && callFnc !== undefined) {

                if (delegate || isWindowEvent || customEvent) {

                    // merge repeated event listeners
                    if (ui.handlers[pt][pe].length === 1) {

                        pt.addEventListener(pe.split('.')[0], function (ev) { // split for event naming
                            ui.handlers[pt][pe].forEach(fnc => { fnc(ev); });
                        }, true);

                    }

                } else {
                    pt.addEventListener(pe.split('.')[0], callFnc, true); // split for event naming
                }

            } else { return; }

        };

        const l = ui.find(t);

        if (isWindowEvent) {
            handlerFnc(l, e);

        } else {
            l.forEach(el => { handlerFnc(el, e); });
        }

    };

    // for multiple event listeners ex: 'click touchend'
    const arr = e.split(' ');
    arr.forEach(eventName => { set(eventName); });

}