/*
 UI JS
*/

/*globals window, document, Event, navigator, NodeList, setTimeout, clearTimeout, XMLHttpRequest */
var ui = {

    globals: {

        // responsive breakpoints
        xl: 1680,
        lg: 1200,
        md: 959,
        sm: 767,
        xs: 480,

        // effect timers
        fast: 100,
        ease: 150,
        slow: 400,
        slow2x: 800,
        slow3x: 1200,
        slow4x: 1600,
        slow5x: 2000,

        // non-closest event listeners
        nonClosestElems: ['mouseenter', 'mouseleave', 'mouseout', 'mouseover'],

        // svg elements
        svgElems: ['svg', 'path', 'g', 'circle', 'rect', 'polygon', 'ellipse', 'text'],

        // custom events
        eventAjaxCallback: 'ui:ajaxCallbacks',
        eventDomChange: 'ui:domChange'

    },
    onload: function (callback) {

        'use strict';

        var handlerFnc, i;

        handlerFnc = function (pt, pe) {

            if (ui.handlers === undefined) { ui.handlers = {}; }
            if (ui.handlers[pt] === undefined) { ui.handlers[pt] = {}; }
            if (ui.handlers[pt][pe] === undefined) { ui.handlers[pt][pe] = []; }

            ui.handlers[pt][pe].push(callback);

            if (typeof pe !== 'function' && callback !== undefined) {

                // merge repeated event listeners
                if (ui.handlers[pt][pe].length === 1) {
                    pt.addEventListener(pe.split('.')[0], function (ev) { // split for event naming

                        for (i = 0; i < ui.handlers[pt][pe].length; i++) {
                            ui.handlers[pt][pe][i](ev);
                        }

                    }, true);
                }

            } else { return; }

        };

        if (document.attachEvent) {

            if (document.readyState === 'complete') {
                callback();

            } else {
                handlerFnc(document, 'DOMContentLoaded');
            }

        } else {

            if (document.readyState !== 'loading') {
                callback();

            } else {
                handlerFnc(document, 'DOMContentLoaded');
            }

        }

    },
    on: function (t, e, that, callback) {

        'use strict';

        var arr, f, fnc, handlerFnc, targetEl, objName, isWindowEvent, l, customEvent, isMSIE, eName, delegate, i, j, k, m;

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

                // filter ui.on(object, event, function) event listeners
                if (typeof t === 'object' && !NodeList.prototype.isPrototypeOf(t) && typeof e === 'string') {

                    // detect window event listeners
                    isWindowEvent = Object.prototype.toString.call(t) === '[object Window]';
                    if (isWindowEvent) {

                        // disable ie duplicate window event firing on ready
                        isMSIE = /*@cc_on!@*/false;

                        if (isMSIE || !!document.documentMode || navigator.userAgent.toLowerCase().indexOf('edge') > -1) {

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

    },
    off: function (t, e) {

        'use strict';

        var arr, fnc, handlerFnc, l, i, j, k;

        fnc = function (e) {

            handlerFnc = function (pt, pe) {

                if (ui.handlers[pt] !== undefined) {
                    if (ui.handlers[pt][pe] !== undefined) {

                        for (j = 0; j < ui.handlers[pt][pe].length; j++) {

                            pt.removeEventListener(pe.split('.')[0], ui.handlers[pt][pe][j], true); // split for event naming
                            ui.handlers[pt][pe].splice(ui.handlers[pt][pe][j], 1); // remove event from eventHandlers array

                        }

                    }
                }

            };

            l = ui.find(t);

            if (l.length === 0) { // detect window event listeners
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

    },
    trigger: function (t, e) {

        'use strict';

        var arr, fnc, event, l, i, j;

        fnc = function (e) {

            try {
                event = new Event(e);

            } catch (err) { // ie

                event = document.createEvent('HTMLEvents');
                event.initEvent(e, true, false);

            }

            l = ui.find(t);
            for (i = 0; i < l.length; i++) { l[i].dispatchEvent(event); }

        };

        // for multiple event listeners ex: 'click touchend'
        arr = e.split(' ');

        for (j = 0; j < arr.length; j++) {
            fnc(arr[j]);
        }

    },
    hasClass: function (t, name) {

        'use strict';

        var re, l = ui.find(t), i;

        for (i = 0; i < l.length; i++) {

            if (ui.globals.svgElems.indexOf(l[i].tagName.toLowerCase()) !== -1) { // check SVG and own elements
                re =  new RegExp('(^| )' + name + '( |$)', 'gi').test(l[i].className.baseVal);

            } else {
                re =  new RegExp('(^| )' + name + '( |$)', 'gi').test(l[i].className);
            }

        }
        return re;

    },
    addClass: function (t, name) {

        'use strict';

        var arr, l = ui.find(t), i, j, re = new RegExp('^\\s+|\\s+$');

        name = name.split(' ');

        for (i = 0; i < l.length; i++) {
            for (j = 0; j < name.length; j++) {

                if (ui.globals.svgElems.indexOf(l[i].tagName.toLowerCase()) !== -1) { // check SVG and own elements

                    arr = l[i].className.baseVal.split(' ');
                    if (arr.indexOf(name[j]) === -1) {

                        l[i].className.baseVal += ' ' + name[j];
                        l[i].className.baseVal = l[i].className.baseVal.replace(re, '');

                    }

                } else {

                    arr = l[i].className.split(' ');
                    if (arr.indexOf(name[j]) === -1) {

                        l[i].className += ' ' + name[j];
                        l[i].className = l[i].className.replace(re, '');

                    }

                }

            }
        }

    },
    removeClass: function (t, name) {

        'use strict';

        var l = ui.find(t), i, j, rex = new RegExp('^\\s+|\\s+$'), re;

        name = name.split(' ');

        for (i = 0; i < l.length; i++) {
            for (j = 0; j < name.length; j++) {

                re = new RegExp('(\\s|^)' + name[j] + '(\\s|$)');

                if (ui.globals.svgElems.indexOf(l[i].tagName.toLowerCase()) !== -1) { // check SVG and own elements
                    l[i].className.baseVal = l[i].className.baseVal.replace(re, ' ').replace(rex, '');

                } else {

                    l[i].className = l[i].className.replace(re, ' ').replace(rex, '');

                    if (l[i].className === '') {
                        l[i].removeAttribute('class');
                    }

                }

            }
        }

    },
    toggleClass: function (t, name) {

        'use strict';

        var isSvgElements, arr, newArr, index, l = ui.find(t), i, j, re = new RegExp('^\\s+|\\s+$');

        name = name.split(' ');

        for (i = 0; i < l.length; i++) {

            isSvgElements = ui.globals.svgElems.indexOf(l[i].tagName.toLowerCase()) !== -1; // check SVG and own elements

            if (isSvgElements) {
                arr = l[i].className.baseVal.split(' ');

            } else {
                arr = l[i].className.split(' ');
            }

            for (j = 0; j < name.length; j++) {

                newArr = arr;
                index = newArr.indexOf(name[j]);

                if (index >= 0) { newArr.splice(index, 1); } else { newArr.push(name[j]); }

                if (isSvgElements) {
                    l[i].className.baseVal = arr.join(' ');

                } else {

                    newArr = newArr.join(' ').replace(re, '');

                    if (newArr.length === 0) {
                        l[i].removeAttribute('class');

                    } else { l[i].className = newArr; }

                }

            }
        }

    },
    show: function (t) {

        'use strict';

        var l = ui.find(t), i;
        for (i = 0; i < l.length; i++) { l[i].style.display = 'block'; }

    },
    hide: function (t) {

        'use strict';

        var l = ui.find(t), i;
        for (i = 0; i < l.length; i++) { l[i].style.display = 'none'; }

    },
    each: function (t, callback) {

        'use strict';

        var l = ui.find(t), i;
        for (i = 0; i < l.length; i++) { callback.call(l[i], i); }

    },
    closest: function (t, outer) {

        'use strict';

        var l, o, i, j, p;

        if (typeof outer !== 'object') { o = ui.find(outer); } else { o = [outer]; }
        l = ui.find(t);

        for (i = 0; i < l.length; i++) {
            p = l[i].parentNode;
            while (p) {

                for (j = 0; j < o.length; j++) { if (p === o[j]) { return ui.find(p); } }
                p = p.parentNode;

            }
        }

        return [];

    },
    find: function (item, outer) {

        'use strict';

        var i, objName, call, outerEl, outerElIndex, foundEl = [];

        if (typeof item === 'object') {

            if (NodeList.prototype.isPrototypeOf(item)) { return item; } // if item property has ui.find(item) nodelist

            objName = Object.prototype.toString.call(item);
            if (objName === '[object HTMLDocument]' || objName === '[object Document]') { // detect document

                if (ui.find.document === undefined) {
                    ui.find.document = document.querySelectorAll('html');
                }

                call = ui.find.document;
                return call;

            }

            if (objName === '[object Window]') {  return window; } // window object
            if (objName === '[object Array]') {  return item; } // array object

            return [item]; // "this" object, [] converting object for event loops

        }

        if (outer !== undefined) { // find items in outer elements

            if (typeof outer !== 'object') {
                outerEl = document.querySelectorAll(outer); // convert to array

            } else { outerEl = outer; }

            // discard "this" object && form object (form element not returns "this", it returns all form elements)
            if (outerEl.length !== undefined && Array.prototype.slice.call(outerEl).length === 1) {

                for (i = 0; i < outerEl.length; i++) {

                    outerElIndex = outerEl[i].querySelectorAll(item);
                    if (outerEl.length === 1) {

                        foundEl = outerElIndex[0];

                        if (foundEl === undefined) { // when founded item length is 1, foundEl returned undefined (select option elements)
                            foundEl = outerEl.querySelectorAll(item);
                        }

                    } else {
                        foundEl = foundEl.concat(outerElIndex); // merge arrays
                    }

                }

            } else { // "this" object
                foundEl = outerEl.querySelectorAll(item);
            }

            return foundEl;

        }

        return document.querySelectorAll(item);

    },
    ajax: function (props) {

        /*
        props list:
            props.type
            props.url
            props.data
            props.callback
        */

        'use strict';

        if (props.url === undefined) { return; }

        if (props.type === undefined || props.type === '') {
            props.type = 'GET'; // send strings
        }

        if (ui.ajax.requests === undefined) { ui.ajax.requests = []; }
        var i = ui.ajax.requests.length;

        ui.ajax.requests[i] = new XMLHttpRequest();
        ui.ajax.requests[i].open(props.type, props.url, true);

        // beforesend
        if (props.beforesend !== undefined) {
            props.beforesend(ui.ajax.requests[i]);
        }

        // headers
        ui.ajax.requests[i].setRequestHeader('X-Requested-With', 'XMLHttpRequest'); // set ajax request header

        if (!props.cache) { // no cache header
            ui.ajax.requests[i].setRequestHeader('cache-control', 'no-cache');
        }

        // check params in url
        if (props.data !== '' && props.data !== undefined) {
            ui.ajax.requests[i].send(props.data);

        } else { ui.ajax.requests[i].send(); }

        // xhr loading
        ui.ajax.requests[i].onload = function () {

            if (ui.ajax.requests[i].readyState === 4 && ui.ajax.requests[i].status === 200) {

                props.callback('success', ui.ajax.requests[i].responseText, ui.ajax.requests[i]);

                // get list of real classnames
                ui.ajax.classNames = ui.ajax.requests[i].responseText.match(/\sclass=\"+[\w\s\d\-\_\=]+\"[\s\>]/g);
                if (ui.ajax.classNames !== null) {

                    ui.ajax.classNames = ui.ajax.classNames.toString().match(/"+[\w\s\d\-\_\=]+"/g);
                    ui.ajax.classNames = ui.ajax.classNames.toString().replace(/\"/g, '').replace(/,/g, ' ').split(' ');

                    ui.ajax.classNames = ui.ajax.classNames.filter(function (value, index, self) {
                        return self.indexOf(value) === index;
                    });

                    // ajax callbacks
                    ui.ajax.text = ui.ajax.requests[i].responseText;
                    ui.trigger(document, ui.globals.eventAjaxCallback); // set custom event

                }

            } else { // error
                props.callback('error', '', ui.ajax.requests[i]);
            }

        };

        // error
        ui.ajax.requests[i].onerror = function () {
            props.callback('error', '', ui.ajax.requests[i]);
        };

    }

};

// user agents
ui.userAgents = {

    // targets
    target: document,

    // main classnames
    nameDesktop: 'ui-desktop',

    nameWindows: 'ui-windows',
    nameChromiumEdge: 'ui-edg',
    nameEdge: 'ui-edge',
    nameIE: 'ui-ie',
    nameChrome: 'ui-chrome',
    nameFirefox: 'ui-firefox',
    nameOpera: 'ui-opera',

    nameMac: 'ui-mac',
    nameSafari: 'ui-safari',

    nameMobile: 'ui-mobile',
    nameIos: 'ui-ios',
    nameAndroid: 'ui-android',
    nameAndroidBrowser: 'ui-android-browser',

    // variables
    userLang: '',

    desktop: false,
    ie: false,
    edge: false,
    edg: false,

    mobile: false,
    ios: false,
    android: false,
    androidOld: false,
    nativeBrowser: false // It returns true on Jelly Bean and older versions and old native browser web view apps together.

};

(function () {

    'use strict';

    ui.onload(function () {

        var ua, isMSIE;

        ua = navigator.userAgent.toLowerCase();
        ui.userAgents.userLang = (navigator.language || navigator.userLanguage).split('-')[0];

        if (ua.indexOf('firefox') > -1) {
            ui.addClass(ui.userAgents.target, ui.userAgents.nameFirefox);
        }

        if (ua.indexOf('safari') > -1) {
            ui.addClass(ui.userAgents.target, ui.userAgents.nameSafari);
        }

        if (ua.indexOf('chrome') > -1) {

            ui.addClass(ui.userAgents.target, ui.userAgents.nameChrome);
            ui.removeClass(ui.userAgents.target, ui.userAgents.nameSafari);

        }

        if (ua.indexOf('opera') > -1 || ua.indexOf('opr') > -1) {

            ui.addClass(ui.userAgents.target, ui.userAgents.nameOpera);
            ui.removeClass(ui.userAgents.target, ui.userAgents.nameSafari);
            ui.removeClass(ui.userAgents.target, ui.userAgents.nameChrome);

        }

        isMSIE = /*@cc_on!@*/false;
        if (isMSIE || !!document.documentMode || ua.indexOf('edge') > -1) {

            ui.userAgents.ie = true;

            ui.addClass(ui.userAgents.target, ui.userAgents.nameIE);
            ui.removeClass(ui.userAgents.target, ui.userAgents.nameChrome);

            if (ua.indexOf('edge') > -1 || ua.indexOf('edg') > -1) {

                ui.userAgents.edge = true;

                ui.removeClass(ui.userAgents.target, ui.userAgents.nameIE);
                ui.addClass(ui.userAgents.target, ui.userAgents.nameEdge);

            }

        } else if (ua.indexOf('edg') > -1) { // detect new Chromium Edge

            ui.userAgents.edg = true;
            ui.addClass(ui.userAgents.target, ui.userAgents.nameChromiumEdge);

        }

        if (navigator.appVersion.indexOf('Win') !== -1) {
            ui.addClass(ui.userAgents.target, ui.userAgents.nameWindows);
        }

        if (navigator.appVersion.indexOf('Mac') !== -1) {
            ui.addClass(ui.userAgents.target, ui.userAgents.nameMac);
        }

        if (ua.indexOf('mobile') > -1) {

            ui.addClass(ui.userAgents.target, ui.userAgents.nameMobile);
            ui.userAgents.mobile = true;

            if (ua.indexOf('apple') > -1) {

                ui.addClass(ui.userAgents.target, ui.userAgents.nameIos);
                ui.removeClass(ui.userAgents.target, ui.userAgents.nameMac);

                ui.userAgents.ios = true;

            }

            if (ua.indexOf('android') > -1) {

                if (ua.indexOf('mozilla/5.0') > -1 && ua.indexOf('applewebkit') > -1 && ua.indexOf('version/') > -1) {

                    ui.removeClass(ui.userAgents.target, ui.userAgents.nameChrome);
                    ui.removeClass(ui.userAgents.target, ui.userAgents.nameSafari);
                    ui.addClass(ui.userAgents.target, ui.userAgents.nameAndroidBrowser);

                    ui.userAgents.nativeBrowser = true;

                }

                ui.addClass(ui.userAgents.target, ui.userAgents.nameAndroid);
                ui.removeClass(ui.userAgents.target, ui.userAgents.nameIos);

                if (ui.userAgents.nativeBrowser || parseFloat(ua.match(/android\s([0-9\.]*)/)[1]) < parseFloat('4.4')) { // Jelly Bean and before with stock browser is androidOld
                    ui.userAgents.androidOld = true;
                }

                ui.userAgents.android = true;
                ui.userAgents.ios = false;

            }

        } else {

            ui.removeClass(ui.userAgents.target, ui.userAgents.nameIos);
            ui.addClass(ui.userAgents.target, ui.userAgents.nameDesktop);

            ui.userAgents.desktop = true;

        }

    });

}());

// dark mode
ui.darkMode = {

    // targets
    target: document,

    // main classnames
    nameToggle: 'ui-darkmode-toggle',

    // values
    valueDark: 'dark',
    valueLight: 'light',

    cookieDays: 365,
    cookieName: 'ui-darkMode',

    // data attributes
    dataMod: 'data-ui-mode'

};

(function () {

    'use strict';

    ui.onload(function () {

        if (ui.userAgents.ie) { return; } // change event listener for darkColorScheme not supported on IE!

        var i, mode, doc, darkColorScheme, state, cookies, cookieName;

        mode = ui.darkMode.valueLight;
        doc = ui.find(ui.darkMode.target)[0];

        darkColorScheme = window.matchMedia('(prefers-color-scheme: dark)');

        // set current theme color
        if (window.matchMedia) {

            if(darkColorScheme.matches) {
                mode = ui.darkMode.valueDark;
            }

        }

        // check stored theme color
        state = decodeURIComponent(document.cookie).split('; ');
        for (i = 0; i < state.length; i++ ) {

            cookies = state[i].split('=');

            cookieName = cookies[0];
            cookieName = cookieName.replace(/^\s+|\s+$/g, ''); // remove first and last spaces

            if (cookieName === 'ui-darkMode') {
                mode = cookies[1];
            }

        }

        doc.setAttribute(ui.darkMode.dataMod, mode);

        // Event Listeners
        function setState(mode) { // set theme state

            var d = new Date();

            d.setTime(d.getTime() + ui.darkMode.cookieDays * (24 * 60 * 60 * 1000));
            document.cookie = ui.darkMode.cookieName + '=' + mode + ';' + "expires=" + d.toUTCString();

        }

        ui.on(darkColorScheme,
            'change',

            function () {

                if(darkColorScheme.matches) { mode = ui.darkMode.valueDark; } else { mode= ui.darkMode.valueLight; }
                doc.setAttribute(ui.darkMode.dataMod, mode);

                setState(mode);

            });

        ui.on(document,
            'click',

            '.' + ui.darkMode.nameToggle,

            function (e) {

                e.preventDefault();

                // toggle theme color
                var current = doc.getAttribute(ui.darkMode.dataMod);
                ui.addClass(ui.effects.target, ui.effects.nameNoEffects);

                setTimeout(function () {

                    if (current !== null && current !== '') {

                        if (current === ui.darkMode.valueDark) {
                            mode = ui.darkMode.valueLight;

                        } else {
                            mode = ui.darkMode.valueDark;
                        }

                    }

                    doc.setAttribute(ui.darkMode.dataMod, mode);
                    setState(mode);

                    setTimeout(function () {
                        ui.removeClass(ui.effects.target, ui.effects.nameNoEffects);
                    }, 10);

                }, 0);

            });

    });

}());

// effects
ui.effects = {

    // targets
    target: document,

    // main classnames
    namePause: 'ui-pause-effects',
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

(function () {

    'use strict';

    var pauseTransitionsTimer;

    ui.on(window,
        'resize scroll',

        function (e) {

            if (!ui.effects.pauseAll) {

                if ((e.type === 'scroll' && ui.effects.pauseScroll) || (e.type === 'resize' && ui.effects.pauseResize)) {

                    clearTimeout(pauseTransitionsTimer);
                    ui.addClass(ui.effects.target, ui.effects.namePause);

                    pauseTransitionsTimer = setTimeout(function () {
                        ui.removeClass(ui.effects.target, ui.effects.namePause);
                    }, ui.globals.ease * 2);

                }

            }

    });

    ui.onload(function () {

        var detectMotion, reduceTimers;

        if (ui.userAgents.ie && !ui.userAgents.edge && !ui.effects.ie) {
            ui.effects.pauseAll = true;
        }
        if (ui.userAgents.mobile && ui.userAgents.android && !ui.effects.android) {
            ui.effects.pauseAll = true;
        }
        if (ui.userAgents.mobile && ui.userAgents.androidOld && !ui.effects.androidOld) {
            ui.effects.pauseAll = true;
        }

        reduceTimers = function () { // reduce effect timers

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

            detectMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
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

                ui.addClass(ui.effects.target, ui.effects.namePause);

                setTimeout(function () {
                    ui.removeClass(ui.effects.target, ui.effects.namePause);
                }, ui.globals.ease * 2);

            }

        }

    });

}());