/* globals */

const ui = {
    globals: {

        // responsive breakpoints
        xl: 1680,
        lg: 1400,
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

        // passive event listeners
        passiveEvents: ['touchstart', 'touchmove'],

        // svg elements
        svgElems: ['svg', 'path', 'g', 'circle', 'rect', 'polygon', 'ellipse', 'text'],

        // icons
        iconSrc: '../dist/icons.svg', // IE not support SVG external reference!

        inlineSvg: false,
        inlineSvgViewBox: '0 0 264 264',

        // data attributes
        dataPrefix: 'data-ui-',
        dataClasses: 'data-ui-classes',

        // custom events
        eventAjaxCallback: 'ui:ajaxCallback',
        eventDomChange: 'ui:domChange'

    }
};

/* find */

ui.find = (item, outer) => {

    if (item instanceof Object) {

        if (NodeList.prototype.isPrototypeOf(item)) { return item; } // if item property has ui.find(item) nodelist

        const objName = Object.prototype.toString.call(item);
        if (objName === '[object HTMLDocument]' || objName === '[object Document]') { // detect document

            if (ui.find.document === undefined) {
                ui.find.document = document.querySelectorAll('html');
            }

            return ui.find.document;

        }

        if (objName === '[object Window]') { return window; } // window object
        if (objName === '[object Array]') { return item; } // array object

        return [item]; // "this" object, [] converting object for event loops

    }

    if (outer !== undefined) { // find items in outer elements

        let outerEl;
        let foundEl = [];

        if (outer instanceof Object) {
            outerEl = outer;

        } else {
            outerEl = document.querySelectorAll(outer); // convert to array
        }

        // discard "this" object && form object (form element not returns "this", it returns all form elements)
        if (outerEl.length !== undefined && Array.prototype.slice.call(outerEl).length === 1) {

            for (let i = 0; i < outerEl.length; i++) {

                const outerElIndex = outerEl[i].querySelectorAll(item);
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

};

/* on */

ui.on = function (self, e, that, callback) {

    const set = function (e) {

        if (typeof t === 'string' && e === undefined) { return; }

        let callFnc, isWindowEvent;

        let delegate = false;
        let passiveEvent = false;
        let customEvent = false;

        const eName = e.split('.')[0]; // split for event naming

        if (ui.globals.passiveEvents.indexOf(eName) > -1) { // control passive event listeners
            passiveEvent = true;
        }

        if (callback !== undefined) { // delegate

            callFnc = (event) => {

                Array.prototype.forEach.call(ui.find(that),

                    el => { // catches future updated DOM!

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
            if (self instanceof Object && !NodeList.prototype.isPrototypeOf(self) && typeof e === 'string') {

                // detect window event listeners
                isWindowEvent = Object.prototype.toString.call(self) === '[object Window]';
                if (isWindowEvent) {

                    // disable ie duplicate window event firing on ready
                    if (ua.indexOf("MSIE ") > 0 || !!document.documentMode || ua.indexOf('edge') > -1) {

                        setTimeout(() => {
                            nodelist.addEventListener(e, that, true); // true: using capture phase
                        }, ui.globals.ease);

                    }

                }

                // detect custom event listeners
                const objName = Object.prototype.toString.call(self);

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

                            for (let i = 0; i < ui.handlers[pt][pe].length; i++) {
                                ui.handlers[pt][pe][i](ev);
                            }

                        }, passiveEvent ? { passive: true } : true);

                    }

                } else {
                    pt.addEventListener(pe.split('.')[0], callFnc, passiveEvent ? { passive: true } : true); // split for event naming
                }

            } else { return; }

        };

        const nodelist = ui.find(self);

        if (isWindowEvent) {
            handlerFnc(nodelist, e);

        } else {
            Array.prototype.forEach.call(nodelist, el => { handlerFnc(el, e); });
        }

    };

    // for multiple event listeners ex: 'click touchend'
    const arr = e.split(' ');

    for (let j = 0; j < arr.length; j++) {
        set(arr[j]);
    }

};

/* off */

ui.off = function (that, e) {

    const callFnc = (e) => {

        let passiveEvent = false;
        const eName = e.split('.')[0]; // split for event naming

        if (ui.globals.passiveEvents.indexOf(eName) > -1) { // control passive event listeners
            passiveEvent = true;
        }

        const handlerFnc = function (pt, pe) {

            if (ui.handlers[pt] !== undefined) {
                if (ui.handlers[pt][pe] !== undefined) {

                    for (let i = 0; i < ui.handlers[pt][pe].length; i++) {

                        pt.removeEventListener(pe.split('.')[0], ui.handlers[pt][pe][i], passiveEvent ? { passive: true } : true); // split for event naming

                        ui.handlers[pt][pe].splice(ui.handlers[pt][pe][i], 1); // remove event from eventHandlers array

                    }

                }
            }

        };

        const nodeList = ui.find(that);

        if (nodeList.length === 0) { // detect window event listeners
            handlerFnc(nodeList, e);

        } else {
            Array.prototype.forEach.call(nodeList, el => { handlerFnc(el, e); });
        }

    };

    // for multiple event listeners ex: 'click touchend'
    const arr = e.split(' ');

    for (let j = 0; j < arr.length; j++) {
        callFnc(arr[j]);
    }

};

/* onload */

ui.onload = (callback) => {

    const handlerFnc = function (pt, pe) {

        if (ui.handlers === undefined) { ui.handlers = {}; }
        if (ui.handlers[pt] === undefined) { ui.handlers[pt] = {}; }
        if (ui.handlers[pt][pe] === undefined) { ui.handlers[pt][pe] = []; }

        ui.handlers[pt][pe].push(callback);

        if (typeof pe !== 'function' && callback !== undefined) {

            // merge repeated event listeners
            if (ui.handlers[pt][pe].length === 1) {

                pt.addEventListener(pe.split('.')[0], function (ev) { // split for event naming

                    for (let i = 0; i < ui.handlers[pt][pe].length; i++) {
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

};

/* trigger */

ui.trigger = function (that, e) {

    let event;

    const callFnc = (e) => {

        try {
            event = new Event(e);

        } catch (err) { // ie

            event = document.createEvent('HTMLEvents');
            event.initEvent(e, true, false);

        }

        Array.prototype.forEach.call(ui.find(that), el => { el.dispatchEvent(event); });

    };

    // for multiple event listeners ex: 'click touchend'
    const arr = e.split(' ');

    for (let i = 0; i < arr.length; i++) {
        callFnc(arr[i]);
    }

};

/* hasclass */

ui.hasClass = (that, name) => {

    let re;
    const nodeList = ui.find(that);

    for (let i = 0; i < nodeList.length; i++) {

        if (ui.globals.svgElems.indexOf(nodeList[i].tagName.toLowerCase()) !== -1) { // check SVG and own elements
            re = new RegExp('(^| )' + name + '( |$)', 'gi').test(nodeList[i].className.baseVal);

        } else {
            re =new RegExp('(^| )' + name + '( |$)', 'gi').test(nodeList[i].className);
        }

    }

    return re;

};

/* addclass */

ui.addClass = function (that, name) {

    let arr;
    const re = new RegExp('^\\s+|\\s+$');

    name = name.split(' ');

    Array.prototype.forEach.call(ui.find(that),

        el => {

            for (let i = 0; i < name.length; i++) {

                if (ui.globals.svgElems.indexOf(el.tagName.toLowerCase()) !== -1) { // check SVG and own elements

                    arr = el.className.baseVal.split(' ');
                    if (arr.indexOf(name[i]) === -1) {

                        el.className.baseVal += ' ' + name[i];
                        el.className.baseVal = el.className.baseVal.replace(re, '');

                    }

                } else {

                    arr = el.className.split(' ');
                    if (arr.indexOf(name[i]) === -1) {

                        el.className += ' ' + name[i];
                        el.className = el.className.replace(re, '');

                    }

                }

            }

        });

};

/* removeclass */

ui.removeClass = function (that, name) {

    const rex = new RegExp('^\\s+|\\s+$');
    name = name.split(' ');

    Array.prototype.forEach.call(ui.find(that),

        el => {

            for (let i = 0; i < name.length; i++) {

                const re = new RegExp('(\\s|^)' + name[i] + '(\\s|$)');

                if (ui.globals.svgElems.indexOf(el.tagName.toLowerCase()) !== -1) { // check SVG and own elements

                    el.className.baseVal = el.className.baseVal.replace(re, ' ').replace(rex, '');

                    if (el.className.baseVal === '') {
                        el.removeAttribute('class');
                    }

                } else {

                    el.className = el.className.replace(re, ' ').replace(rex, '');

                    if (el.className === '') {
                        el.removeAttribute('class');
                    }

                }

            }

        });

};

/* toggleclass */

ui.toggleClass = function (that, name) {

    let arr, newArr, index, isSvgElements;

    const re = new RegExp('^\\s+|\\s+$');
    name = name.split(' ');

    Array.prototype.forEach.call(ui.find(that),

        el => {

            isSvgElements = ui.globals.svgElems.indexOf(el.tagName.toLowerCase()) !== -1; // check SVG and own elements

            if (isSvgElements) {
                arr = el.className.baseVal.split(' ');

            } else {
                arr = el.className.split(' ');
            }

            for (let i = 0; i < name.length; i++) {

                newArr = arr;
                index = newArr.indexOf(name[i]);

                if (index >= 0) {
                    newArr.splice(index, 1);

                } else {
                    newArr.push(name[i]);
                }

                if (isSvgElements) {
                    el.className.baseVal = arr.join(' ');

                } else {

                    newArr = newArr.join(' ').replace(re, '');

                    if (newArr.length === 0) {
                        el.removeAttribute('class');

                    } else {
                        el.className = newArr;
                    }

                }

            }

        });

};

/* each */

ui.each = function (t, callback) {

    var l = ui.find(t), i;
    for (i = 0; i < l.length; i++) { callback.call(l[i], i); }

};

/* closest */

ui.closest = function (that, outer) {

    let outerEl, parentEl;

    if (outer instanceof Object) {
        outerEl = [outer];

    } else {
        outerEl = ui.find(outer);
    }

    let elems = [];

    Array.prototype.forEach.call(ui.find(that),

        el => {

            parentEl = el.parentNode;
            while (parentEl) {

                for (let i = 0; i < outerEl.length; i++) {

                    if (parentEl === outerEl[i]) {

                        elems = ui.find(parentEl);
                        return;

                    }

                }

                parentEl = parentEl.parentNode;

            }

        });

    return elems;

};

/* ajax */

ui.ajax = function (props) {

    /*
    props list:
        props.type
        props.url
        props.data
        props.callback
    */

    if (props.url === undefined) { return; }

    if (props.type === undefined || props.type === '') {
        props.type = 'GET'; // send strings
    }

    if (ui.ajax.requests === undefined) { ui.ajax.requests = []; }

    const i = ui.ajax.requests.length;

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
    ui.ajax.requests[i].onload = () => {

        if (ui.ajax.requests[i].readyState === 4 && ui.ajax.requests[i].status === 200) {

            ui.ajax.classNames = '';
            props.callback('success', ui.ajax.requests[i].responseText, ui.ajax.requests[i]);

            // get data attributes
            let re = ui.globals.dataPrefix + '+\\w+=\\"+[\\w\\s\\d\\-\\_\\=]+\\"[ \\s\\>]';
            re = new RegExp(re, 'g');

            ui.ajax.data = ui.ajax.requests[i].responseText.match(re);

            if (ui.ajax.data === null) {
                ui.ajax.data = '';

            } else {
                ui.ajax.data = ui.ajax.data.toString();
            }

            // get list of classnames
            ui.ajax.classNames += ui.ajax.requests[i].responseText.match(/\sclass=\"+[\w\s\d\-\_\=]+\"[\s\>]/g);

            if (ui.ajax.classNames === 'null') { // not match: returns string null!
                 ui.ajax.classNames = '';
            }

            // get list of data classnames
            let rex = ui.globals.dataClasses + '=\\"+[\\w\\s\\d\\-\\_\\=]+\\"[\\s\\>]';
            rex = new RegExp(rex, 'g');

            ui.ajax.classNames += ui.ajax.requests[i].responseText.match(rex);
            if (ui.ajax.classNames !== 'null') { // not match: returns string null!

                ui.ajax.classNames = ui.ajax.classNames.match(/"+[\w\s\d\-\_\=]+"/g);
                ui.ajax.classNames = ui.ajax.classNames.toString().replace(/\"/g, '').replace(/,/g, ' ').split(' ');

                ui.ajax.classNames = ui.ajax.classNames.filter((value, index, self) => self.indexOf(value) === index);

                // ajax callbacks
                ui.trigger(document, ui.globals.eventAjaxCallback); // set custom event

            }

            // empty variables
            ui.ajax.requests[i] = undefined;

            ui.ajax.classNames = '';
            ui.ajax.data = '';

        } else { // error
            props.callback('error', '', ui.ajax.requests[i]);
        }

    };

    // error
    ui.ajax.requests[i].onerror = () => {
        props.callback('error', '', ui.ajax.requests[i]);
    };

};

/* user agents */

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

ui.onload(() => {

    const classes = [];
    const ua = navigator.userAgent.toLowerCase();

    ui.userAgents.userLang = (navigator.language || navigator.userLanguage).split('-')[0];

    const out = (name) => {

        const index = classes.indexOf(name);

        if (index !== -1) {
            classes.splice(index, 1);
        }

    };

    if (ua.indexOf('firefox') > -1) {
        classes.push(ui.userAgents.nameFirefox);
    }

    if (ua.indexOf('safari') > -1) {
        classes.push(ui.userAgents.nameSafari);
    }

    if (ua.indexOf('chrome') > -1) {

        classes.push(ui.userAgents.nameChrome);
        out(ui.userAgents.nameSafari);

    }

    if (ua.indexOf('opera') > -1 || ua.indexOf('opr') > -1) {

        classes.push(ui.userAgents.nameOpera);

        out(ui.userAgents.nameSafari);
        out(ui.userAgents.nameChrome);

    }

    if (ua.indexOf("MSIE ") > 0 || !!document.documentMode || ua.indexOf('edge') > -1) {

        ui.userAgents.ie = true;
        ui.globals.iconSrc = ''; // IE not support SVG external reference!

        classes.push(ui.userAgents.nameIE);
        out(ui.userAgents.nameChrome);

        if (ua.indexOf('edge') > -1 || ua.indexOf('edg') > -1) {

            ui.userAgents.edge = true;

            out(ui.userAgents.nameIE);
            classes.push(ui.userAgents.nameEdge);

        }

    } else if (ua.indexOf('edg') > -1) { // detect new Chromium Edge

        ui.userAgents.edg = true;
        classes.push(ui.userAgents.nameChromiumEdge);

    }

    if (navigator.userAgentData !== undefined) { // new usage

        if (navigator.userAgentData?.platform.indexOf("Win") !== -1) {
            classes.push(ui.userAgents.nameWindows);
        }

        if (navigator.userAgentData?.platform.indexOf("Mac") !== -1) {
            classes.push(ui.userAgents.nameMac);
        }

    } else { // audit usage

        if (navigator.appVersion.indexOf('Win') !== -1) {
            classes.push(ui.userAgents.nameWindows);
        }

        if (navigator.appVersion.indexOf('Mac') !== -1) {
            classes.push(ui.userAgents.nameMac);
        }

    }

    if (ua.indexOf('mobile') === -1) {

        out(ui.userAgents.nameIos);
        classes.push(ui.userAgents.nameDesktop);

        ui.userAgents.desktop = true;

    } else {

        classes.push(ui.userAgents.nameMobile);
        ui.userAgents.mobile = true;

        if (ua.match("iphone|ipad|ipod") !== null) {

            classes.push(ui.userAgents.nameIos);
            out(ui.userAgents.nameMac);

            ui.userAgents.ios = true;

        }

        if (ua.indexOf('android') > -1) {

            if (ua.indexOf('mozilla/5.0') > -1 && ua.indexOf('applewebkit') > -1 && ua.indexOf('version/') > -1) {

                out(ui.userAgents.nameChrome);
                out(ui.userAgents.nameSafari);

                classes.push(ui.userAgents.nameAndroidBrowser);

                ui.userAgents.nativeBrowser = true;

            }

            classes.push(ui.userAgents.nameAndroid);
            out(ui.userAgents.nameIos);

            if (ui.userAgents.nativeBrowser || parseFloat(ua.match(/android\s([0-9\.]*)/)[1]) < parseFloat('4.4')) { // Jelly Bean and before with stock browser is androidOld
                ui.userAgents.androidOld = true;
            }

            ui.userAgents.android = true;
            ui.userAgents.ios = false;

        }

    }

    let allClasses = '';

    for (let i = 0; i < classes.length; i++) {

        allClasses += classes[i];

        if (i + 1 !== classes.length) {
            allClasses += ' ';
        }
    }

    ui.addClass(ui.userAgents.target, allClasses);

});

/* dark mode */

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

ui.onload(() => {

    if (ui.userAgents.ie) { return; } // change event listener for darkColorScheme not supported on IE!

    // set current theme color
    let mode = ui.darkMode.valueLight;
    const darkColorScheme = window.matchMedia('(prefers-color-scheme: dark)');

    if (window.matchMedia) {

        if(darkColorScheme.matches) {
            mode = ui.darkMode.valueDark;
        }

    }

    // check stored theme color
    const state = decodeURIComponent(document.cookie).split('; ');
    for (let i = 0; i < state.length; i++ ) {

        const cookies = state[i].split('=');

        let cookie = cookies[0];
        cookie = cookie.replace(/^\s+|\s+$/g, ''); // remove first and last spaces

        if (cookie === ui.darkMode.cookieName) {
            mode = cookies[1];
        }

    }

    // Event Listeners
    const doc = ui.find(ui.darkMode.target)[0];
    doc.setAttribute(ui.darkMode.dataMod, mode);

    const setState = function (mode) { // set theme state

        const date = new Date();
        date.setTime(date.getTime() + ui.darkMode.cookieDays * (24 * 60 * 60 * 1000));

        document.cookie = ui.darkMode.cookieName + '=' + mode + ';' + "expires=" + date.toUTCString();

    };

    ui.on(darkColorScheme,
        'change',

        function () {

            if(darkColorScheme.matches) {
                mode = ui.darkMode.valueDark;

            } else {
                mode= ui.darkMode.valueLight;
            }

            doc.setAttribute(ui.darkMode.dataMod, mode);
            setState(mode);

        });

    ui.on(document,
        'click',

        '.' + ui.darkMode.nameToggle,

        function (e) {

            e.preventDefault();

            // toggle theme color

            const current = doc.getAttribute(ui.darkMode.dataMod);
            setTimeout(() => {

                if (current !== null && current !== '') {

                    if (current === ui.darkMode.valueDark) {
                        mode = ui.darkMode.valueLight;

                    } else {
                        mode = ui.darkMode.valueDark;
                    }

                }

                doc.setAttribute(ui.darkMode.dataMod, mode);
                setState(mode);

            }, 0);

        });

});

/* effects */

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
                    ui.addClass(ui.effects.target, ui.effects.namePause);

                    pauseTransitionsTimer = setTimeout(() => {
                        ui.removeClass(ui.effects.target, ui.effects.namePause);
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

        };

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

                ui.addClass(ui.effects.target, ui.effects.namePause);

                setTimeout(() => {
                    ui.removeClass(ui.effects.target, ui.effects.namePause);
                }, ui.globals.ease * 2);

            }

        }

    });

})();

/* grid */

ui.grid = {

    // targets
    targetColsPrefix: 'ui-col-',
    targetOrdersPrefix: 'ui-order-',

    // main classnames
    nameFirstSuffix: '-first',
    nameLastSuffix: '-last',

    // data attributes
    dataOrdered: 'data-ui-ordered'

};

ui.grid.Start = () => {

    if (ui.find('[class*="' + ui.grid.targetColsPrefix + '"][class*="' + ui.grid.targetOrdersPrefix + '"]').length > 0) {

        const move = (classType, size) => {

            if (size) {

                Array.prototype.forEach.call(ui.find('[class*="' + ui.grid.targetOrdersPrefix + classType + '-"]'),

                    el => {

                        const parent = el.parentElement;
                        const siblings = parent.children;

                        const index = Array.prototype.slice.call(el.parentElement.children).indexOf(el);

                        if (ui.hasClass(el, ui.grid.targetOrdersPrefix + classType + ui.grid.nameFirstSuffix) && index !== 0) {

                            el.setAttribute(ui.grid.dataOrdered, index);
                            parent.insertBefore(el, parent.firstChild);

                        }

                        if (ui.hasClass(el, ui.grid.targetOrdersPrefix + classType + ui.grid.nameLastSuffix) && index !== (siblings.length - 1)) {

                            el.setAttribute(ui.grid.dataOrdered, index);
                            parent.appendChild(el);

                        }

                    }

                );

            } else {

                Array.prototype.forEach.call(ui.find('[class*="' + ui.grid.targetOrdersPrefix + classType + '-"][' + ui.grid.dataOrdered + ']'),

                    el => {

                        const order = parseInt(el.getAttribute(ui.grid.dataOrdered));

                        const parent = el.parentElement;
                        const siblings = parent.children;

                        if (ui.hasClass(el, ui.grid.targetOrdersPrefix + classType + ui.grid.nameFirstSuffix)) {

                            let refEl = siblings[order + 1];

                            if (refEl === undefined) {
                                refEl = null; // IE requires as 2nd argument a valid node or null
                            }

                            el.removeAttribute(ui.grid.dataOrdered);
                            parent.insertBefore(el, refEl);

                        } else {

                            el.removeAttribute(ui.grid.dataOrdered);
                            parent.insertBefore(el, siblings[order]);

                        }

                    }

                );

            }

        };

        move('xs', window.innerWidth < ui.globals.xs + 1);
        move('sm', window.innerWidth < ui.globals.sm + 1);
        move('md', window.innerWidth < ui.globals.md + 1);

        move('default', window.innerWidth < ui.globals.lg);

        move('lg', window.innerWidth > ui.globals.lg - 1);
        move('xl', window.innerWidth > ui.globals.xl - 1);

    }

};

// loaders
ui.onload(ui.grid.Start);

ui.on(window, 'resize', ui.grid.Start);
ui.on(document, ui.globals.eventDomChange, ui.grid.Start);

// ajax callback loader
ui.on(document,
    ui.globals.eventAjaxCallback,

    () => {

        if (ui.ajax.classNames.indexOf(ui.grid.targetOrdersPrefix) > -1) {
            ui.grid.Start();
        }

    });

/* dropdown */

ui.dropdown = {

    // targets
    target: 'ui-dropdown',

    // main classnames
    nameMenu: 'ui-dropdown-menu',

    nameHover: 'ui-menu-hover',
    nameMenuTop: 'ui-menu-t',
    nameMenuLeft: 'ui-menu-l',
    nameMenuCenter: 'ui-menu-c',

    nameMenuPosRight: 'ui-menu-pos-r',
    nameMenuPosLeft: 'ui-menu-pos-l',

    nameNav: 'ui-nav',
    nameNavFullHor: 'ui-nav-full-h',

    // helper classnames
    nameOpen: 'ui-open',
    nameOpenEase: 'ui-open-ease',

    nameSelected: 'ui-selected',

    // outer classnames
    nameBtn: 'ui-btn',
    nameSidebar: 'ui-sidebar',

    // tags
    tagMenuItems: 'li',

    tagValue: 'span',
    tagValueItems: 'label',

    // values
    scrollbarSize: 20,
    menuTopMargin: 1,

    // custom events
    eventClose: 'ui:dropdownClose'

};

(() => {

    let
        dropdownHoverTimer,
        dropdownOpenTimer,

        dropdownLeaveTimer,
        dropdownCloseTimer,

        listStyles,
        selectOpened,
        selectInContent,

        getScrollPos;

    function dropdownClose(innerParent) {

        if (selectOpened) { return; }

        let that;

        if (innerParent === undefined) {
            that = ui.find('.' + ui.dropdown.target + '.' + ui.dropdown.nameOpen);

        } else {
            that = ui.find('.' + ui.dropdown.target + '.' + ui.dropdown.nameOpen, innerParent);
        }

        ui.removeClass(that, ui.dropdown.nameOpenEase);

        clearTimeout(dropdownLeaveTimer);
        dropdownLeaveTimer = setTimeout(() => {

            Array.prototype.forEach.call(that,

                el => {

                    clearTimeout(dropdownCloseTimer);
                    const list = ui.find('.' + ui.dropdown.nameMenu, el)[0];

                    dropdownCloseTimer = setTimeout(() => {

                        if (listStyles === 0) {
                            list.removeAttribute('style');

                        } else {

                            list.style.removeProperty('max-height');

                            list.style.removeProperty('position');
                            list.style.removeProperty('right');
                            list.style.removeProperty('left');

                            list.style.removeProperty('margin-left');
                            list.style.removeProperty('margin-top');

                            list.style.removeProperty('overflow');

                            list.style.removeProperty('transform-origin');
                            list.style.removeProperty('box-shadow');

                        }

                        ui.removeClass(that, ui.dropdown.nameMenuTop + ' ' + ui.dropdown.nameOpen);

                    }, ui.globals.ease);

                });

        }, 0);

    }

    ui.dropdown.Start = () => {

        function dropdownOpen(e, that) {

            e.preventDefault();
            e.stopPropagation();

            let inner = false;
            let hasInner = false;

            const parent = that.parentNode;

            clearTimeout(dropdownOpenTimer);
            dropdownOpenTimer = setTimeout(() => {

                const innerParent = ui.closest(parent, '.' + ui.dropdown.target)[0];

                if ((ui.hasClass(parent, ui.dropdown.nameMenuPosRight) || ui.hasClass(parent, ui.dropdown.nameMenuPosLeft)) && innerParent !== undefined) {

                    // detecting inner dropdown positions
                    inner = true;
                    dropdownClose(innerParent);

                } else { dropdownClose(); }

                if (ui.find('.' + ui.dropdown.nameMenuPosRight, parent).length > 0 || ui.find('.' + ui.dropdown.nameMenuPosLeft, parent).length > 0) {

                    // detecting dropdown has inner dropdown positions
                    hasInner = true;
                }

                clearTimeout(dropdownOpenTimer);
                ui.addClass(parent, ui.dropdown.nameOpen);

                dropdownOpenTimer = setTimeout(() => {
                    ui.addClass(parent, ui.dropdown.nameOpenEase);
                }, dropdownHoverTimer / 6);

                const offset = parent.getBoundingClientRect();
                const list = ui.find('.' + ui.dropdown.nameMenu, parent)[0];

                if (hasInner) {
                    list.style.overflow = 'visible';
                }

                if (ui.closest(that, '.' + ui.dropdown.nameSidebar)[0] === undefined && !ui.hasClass(parent, ui.dropdown.nameNavFullHor)) { // diable all positionings on sidebars and full horizontal navigations

                    listStyles = list.style.length;

                    if (window.innerWidth > ui.globals.sm) { // menu horizontal positioning: active

                        if (ui.hasClass(parent, ui.dropdown.nameMenuLeft) || (!ui.hasClass(parent, ui.dropdown.nameMenuPosLeft) && (offset.left + list.offsetWidth + ui.dropdown.scrollbarSize) > window.innerWidth)) {

                            if (offset.left - (list.offsetWidth - parent.offsetWidth) >= 0) {

                                list.style.right = 0;
                                list.style.left = 'inherit';

                                list.style.transformOrigin = 'top right';

                            }

                        } else if (ui.hasClass(parent, ui.dropdown.nameMenuCenter)) {

                            const alignSize = Math.abs(list.offsetWidth - parent.offsetWidth) / 2;

                            if ((offset.left - alignSize > 0) && (alignSize > 0)) {
                                list.style.marginLeft = -alignSize + 'px';
                            }

                        }

                    } else { // menu horizontal positioning: passive

                        list.style.marginLeft = -(offset.left - (ui.dropdown.scrollbarSize / 2)) + 'px';
                        list.style.width = (window.innerWidth - ui.dropdown.scrollbarSize) + 'px';

                    }

                }

                const setMaxH = function (pos) { // set max-height of list

                    if (pos === 'default') {
                        list.style.maxHeight = window.innerHeight - (offset.top + that.offsetHeight + ui.dropdown.scrollbarSize + ui.dropdown.menuTopMargin) + 'px';

                    } else if (pos === 'top') {
                        list.style.maxHeight = window.innerHeight - (ui.dropdown.scrollbarSize + ui.dropdown.menuTopMargin) + 'px';

                    } else if (pos === 'pos') {
                        list.style.maxHeight = window.innerHeight - (offset.top + ui.dropdown.scrollbarSize) + 'px';
                    }

                };

                if (ui.hasClass(parent, ui.dropdown.nameMenuPosRight)) { // right position menu

                    if (window.innerWidth > ui.globals.sm) { // right positioning: active

                        if (list.offsetWidth > (window.innerWidth - offset.left) - (list.offsetWidth + ui.dropdown.scrollbarSize)) {

                            list.style.top = 'inherit';
                            list.style.left = 'inherit';

                            list.style.marginTop = ui.dropdown.menuTopMargin + 'px';
                            list.style.transformOrigin = 'top left';

                            if (inner) {

                                list.style.position = 'static';
                                list.style.boxShadow = 'none';

                            }

                        }

                        setMaxH('pos');

                    } else { // right positioning: passive

                        setMaxH('default');

                        list.style.top = 'inherit';
                        list.style.left = 'inherit';

                        list.style.marginTop = ui.dropdown.menuTopMargin + 'px';

                    }

                } else if (ui.hasClass(parent, ui.dropdown.nameMenuPosLeft)) { // left position menu

                    if (window.innerWidth > ui.globals.sm) { // left positioning: active

                        if (offset.left - list.offsetWidth < ui.dropdown.scrollbarSize) {

                            list.style.top = 'inherit';
                            list.style.right = 'inherit';

                            list.style.marginTop = ui.dropdown.menuTopMargin + 'px';
                            list.style.transformOrigin = 'top right';

                            if (inner) {

                                list.style.position = 'static';
                                list.style.boxShadow = 'none';

                            }

                        }

                        setMaxH('pos');

                    } else { // left positioning: passive

                        setMaxH('default');

                        list.style.top = 'inherit';
                        list.style.right = 'inherit';

                        list.style.marginTop = ui.dropdown.menuTopMargin + 'px';

                    }

                } else if (offset.top + parseInt(that.offsetHeight + list.offsetHeight) >= window.innerHeight) { // menu vertical positioning

                    if (offset.top - parseInt(that.offsetHeight + list.offsetHeight) + that.offsetHeight > 0) {

                        if (!ui.hasClass(parent, ui.dropdown.nameNavFullHor)) { // add top menu without full horizontal navigations

                            ui.addClass(parent, ui.dropdown.nameMenuTop);
                            list.style.removeProperty('transform-origin');

                        }

                        setMaxH('top');

                    } else { setMaxH('default'); }

                } else { setMaxH('default'); }

            }, dropdownHoverTimer);

            if (e.type === 'click') {

                setTimeout(() => {

                    ui.on(document,
                        'click.' + ui.dropdown.eventClose,

                        function (ev) {

                            const content = ui.closest(ev.target, '.' + ui.dropdown.nameMenu)[0];

                            // prevent for non listing contents
                            if (content !== undefined) {

                                if (ui.closest(content, '.' + ui.dropdown.target)[0] !== undefined) { // check other content classnames
                                    return;
                                }

                            }

                            if (ui.closest(ev.target, '.' + ui.dropdown.target + '.' + ui.dropdown.nameNavFullHor)[0] !== undefined && ev.target.className.split(' ').indexOf(ui.dropdown.nameMenu) === 0) { // check full horizontal navigations
                                return;
                            }

                            if (ev.button !== 2) { // inherited right clicks

                                dropdownClose();
                                ui.off(document, 'click.' + ui.dropdown.eventClose);

                            }

                        });

                }, 0);

            }

        }

        // Event Listeners
        // open
        ui.on(document,
            'click',

            '.' + ui.userAgents.nameDesktop + ' .' + ui.dropdown.target + ':not(.' + ui.dropdown.nameHover + '):not(.' + ui.dropdown.nameOpenEase + ') > .' + ui.dropdown.nameBtn + ',' +
            '.' + ui.userAgents.nameMobile + ' .' + ui.dropdown.target + ':not(.' + ui.dropdown.nameOpenEase + ') > .' + ui.dropdown.nameBtn,

            function (e) {

                dropdownHoverTimer = 0;
                dropdownOpen(e, this);

            });

        ui.on(document,
            'mouseenter',

            '.' + ui.userAgents.nameDesktop + ' .' + ui.dropdown.target + '.' + ui.dropdown.nameHover + ':not(.' + ui.dropdown.nameOpenEase + ') > .' + ui.dropdown.nameBtn,

            function (e) {

                clearTimeout(dropdownLeaveTimer);
                dropdownHoverTimer = ui.globals.ease * 2;

                dropdownOpen(e, this);

            });

        ui.on(document,
            'mouseenter',

            '.' + ui.userAgents.nameDesktop + ' .' + ui.dropdown.target + '.' + ui.dropdown.nameHover + '.' + ui.dropdown.nameOpen + ' > .' + ui.dropdown.nameBtn + ',' +
            '.' + ui.userAgents.nameDesktop + ' .' + ui.dropdown.target + '.' + ui.dropdown.nameHover + '.' + ui.dropdown.nameOpenEase + ' .' + ui.dropdown.nameMenu,

            function () {

                dropdownHoverTimer = ui.globals.ease * 2;
                clearTimeout(dropdownLeaveTimer);

            });

        // form toggle
        ui.on(document,
            'click',

            '.' + ui.dropdown.target + ' ' + ui.dropdown.tagMenuItems + ' > ' + ui.dropdown.tagValueItems,

            function () {

                const parent = ui.closest(this, '.' + ui.dropdown.target)[0];
                const target = ui.find('.' + ui.dropdown.nameBtn + ' > ' + ui.dropdown.tagValue, parent)[0];

                target.innerHTML = '';
                target.insertAdjacentHTML('beforeend', this.innerHTML);

                const input = ui.find('input', target)[0];

                if (input !== undefined) {
                    input.parentNode.removeChild(input);
                }

                ui.removeClass(ui.find('.' + ui.dropdown.nameSelected, parent), ui.dropdown.nameSelected);
                ui.addClass(this.parentNode, ui.dropdown.nameSelected);

            });

        // close
        ui.on(document,
            'mouseleave',

            '.' + ui.dropdown.target + '.' + ui.dropdown.nameHover,

            function () {

                clearTimeout(dropdownLeaveTimer);
                clearTimeout(dropdownOpenTimer);

                dropdownLeaveTimer = setTimeout(() => {

                    const innerParent = ui.closest(this, '.' + ui.dropdown.target)[0];

                    if ((ui.hasClass(this, ui.dropdown.nameMenuPosRight) || ui.hasClass(this, ui.dropdown.nameMenuPosLeft)) && innerParent !== undefined) {
                        dropdownClose(innerParent); // detecting inner dropdown positions

                    } else { dropdownClose(); }

                }, ui.globals.ease * 2);

            });

        ui.on(document,
            'mouseup',

            '.' + ui.dropdown.target + ':not(.' + ui.dropdown.nameNav + ') ' + ui.dropdown.tagMenuItems,

            function () {

                clearTimeout(dropdownLeaveTimer);
                clearTimeout(dropdownOpenTimer);

                dropdownClose();

            });

        // select dropdown fix
        selectOpened = false;
        selectInContent = ui.find('.' + ui.dropdown.target + ' .' + ui.dropdown.nameMenu + ' select');

        ui.on(document,
            'focus',

            selectInContent,

            function () { selectOpened = true; });

        ui.on(document,
            'blur',

            selectInContent,

            function () { selectOpened = false; });

        ui.on(document,
            'keyup',

            selectInContent,

            function (e) {

                if (e.keyCode == 27) {
                    selectOpened = false;
                }

            });

    };

    // loaders
    ui.onload(ui.dropdown.Start);

    ui.on(window,
        'resize',

        () => {

            if (window.innerWidth === getScrollPos) { return; } // close only horizontal resizing

            dropdownClose();
            getScrollPos = window.innerWidth;

        });

})();

/* tab */

ui.tab = {

    // targets
    targetParent: 'ui-tab-holder',
    targetTab: 'ui-tab',

    // main classnames
    nameContent: 'ui-tab-content',
    nameToggle: 'ui-tab-toggle',
    nameAccordion: 'ui-tab-accordion',

    // helper classnames
    nameOpen: 'ui-open',
    nameOpenEase: 'ui-open-ease',

    nameActive: 'ui-active',

    // data attributes
    dataID: 'data-ui-id',
    dataClasses: 'data-ui-classes',

    // custom events
    eventCloseToggleTabs: 'ui:closeToggleTabs',
    eventToggleTabsClosed: 'ui:toggleTabsClosed'

};

ui.tab.Start = () => {

    // Event Listeners
    ui.on(document,
        'click',

        '.' + ui.tab.targetParent + ' .' + ui.tab.targetTab,

        function (e) {

            e.preventDefault();

            var parent, tabs, index, innerTabs, outerTabs, id, content, lastOpened, innerContent, outerContent, currentContent, currentHeight, classes, accordion, toggle;

            outerTabs = [];
            outerContent = [];

            parent = ui.closest(this, '.' + ui.tab.targetParent)[0];
            tabs = ui.find('.' + ui.tab.targetTab, parent);

            // check inner tabs
            innerTabs = ui.find('.' + ui.tab.targetParent + ' .' + ui.tab.targetParent + ' .' + ui.tab.targetTab, parent);
            innerTabs = Array.prototype.slice.call(innerTabs);

            ui.each(tabs,

                function () {

                    if (innerTabs.indexOf(this) === -1) {
                        outerTabs.push(this);
                    }

                });

            if (outerTabs.length !== 0) { tabs = outerTabs; }
            index = Array.prototype.slice.call(tabs).indexOf(this);

            content = ui.find('.' + ui.tab.nameContent, parent);

            // check inner contents
            innerContent = ui.find('.' + ui.tab.targetParent + ' .' + ui.tab.targetParent + ' .' + ui.tab.nameContent, parent);
            innerContent = Array.prototype.slice.call(innerContent);

            ui.each(content,

                function () {

                    if (innerContent.indexOf(this) === -1) {
                        outerContent.push(this);
                    }

                });

            if (outerContent.length !== 0) { content = outerContent; }

            // check ids
            id = this.getAttribute(ui.tab.dataID);

            if (id !== null & id !== '') {
                currentContent = ui.find('#' + id, parent)[0];

            } else {
                currentContent = content[index];
            }

            classes = parent.getAttribute(ui.tab.dataClasses);

            accordion = false;
            toggle = false;

            if (ui.hasClass(parent, ui.tab.nameAccordion)) {
                accordion = true;
            }

            if (ui.hasClass(this, ui.tab.nameToggle)) {
                toggle = true;
            }

            if (ui.hasClass(this, ui.tab.nameActive)) {

                if (toggle || accordion) {

                    if (accordion) {

                        currentContent.style.height = currentContent.offsetHeight + 'px';
                        currentContent.style.overflow = 'hidden';

                    }

                    setTimeout(() => {

                        if (accordion) {
                            currentContent.style.height = '0';
                        }

                        setTimeout(() => {

                            ui.removeClass(currentContent, ui.tab.nameOpen);

                            if (accordion) {

                                currentContent.style.removeProperty('height');
                                currentContent.style.removeProperty('overflow');

                            }

                        }, accordion ? ui.globals.ease * 2 : ui.globals.fast / 2);

                        if (classes) {
                            ui.toggleClass(tabs[index], classes);
                        }

                        ui.removeClass(tabs[index], ui.tab.nameActive);
                        ui.removeClass(currentContent, ui.tab.nameOpenEase);

                    }, 0);

                }

            } else {

                if (classes) {

                    ui.removeClass(tabs, classes);
                    ui.addClass(tabs[index], classes);

                }

                ui.removeClass(tabs, ui.tab.nameActive);
                ui.addClass(tabs[index], ui.tab.nameActive);

                if (toggle || accordion) {

                    lastOpened = '';

                    ui.each(content,

                        function () {

                            if (this !== currentContent) {

                                if (ui.hasClass(this, ui.tab.nameOpen)) {
                                    lastOpened = this; // find last opened content
                                }

                            }

                        });

                        if (lastOpened) { // hide last opened content

                            if (accordion) {

                                lastOpened.style.height = lastOpened.offsetHeight + 'px';
                                lastOpened.style.overflow = 'hidden';

                            }

                            setTimeout(() => {

                                if (accordion) {
                                    lastOpened.style.height = '0';
                                }

                                setTimeout(() => {

                                    ui.removeClass(lastOpened, ui.tab.nameOpen);

                                    if (accordion) {

                                        lastOpened.style.removeProperty('height');
                                        lastOpened.style.removeProperty('overflow');

                                    }

                                }, accordion ? ui.globals.ease * 2 : ui.globals.fast / 2);

                                ui.removeClass(lastOpened, ui.tab.nameOpenEase);

                            }, 0);

                        }

                    setTimeout(() => { // open current clicked content

                        ui.addClass(currentContent, ui.tab.nameOpen);

                        if (accordion) {

                            currentHeight = currentContent.offsetHeight;

                            currentContent.style.height = '0';
                            currentContent.style.overflow = 'hidden';

                        }

                        setTimeout(() => {

                            ui.addClass(currentContent, ui.tab.nameOpenEase);
                            currentContent.style.height = currentHeight + 'px';

                            ui.trigger(document, ui.globals.eventDomChange); // set custom event

                            if (accordion) {

                                setTimeout(() => {

                                    currentContent.style.removeProperty('height');
                                    currentContent.style.removeProperty('overflow');

                                }, accordion ? ui.globals.ease * 2 : ui.globals.fast / 2);

                            }

                        }, accordion ? ui.globals.fast / 2 : ui.globals.fast / 2);

                    }, 0);

                    // close opened toggle tabs when outside the tabs
                    ui.on(document,
                        'mousedown.' + ui.tab.eventCloseToggleTabs,

                        function (ev) {

                            if (ev.button !== 2) { // inherited right clicks

                                var holderEl = ui.closest(ev.target, '.' + ui.tab.targetParent)[0];

                                // controlling same toggled tab buttons
                                if (holderEl === parent) { return; }
                                if (ui.closest(holderEl, '.' + ui.tab.targetParent)[0] !== undefined) { return; } // inner tabs

                                // controlling active toggle tabs length
                                if (ui.find('.' + ui.tab.nameToggle + '.' + ui.tab.nameActive, parent).length === 0) { return; }

                                if (accordion) {

                                    currentContent.style.height = currentContent.offsetHeight + 'px';
                                    currentContent.style.overflow = 'hidden';

                                }

                                setTimeout(() => {

                                    if (accordion) {
                                        currentContent.style.height = '0';
                                    }

                                    setTimeout(() => {

                                        ui.removeClass(content, ui.tab.nameOpen);

                                        if (accordion) {

                                            currentContent.style.removeProperty('height');
                                            currentContent.style.removeProperty('overflow');

                                        }

                                    }, accordion ? ui.globals.ease * 2 : ui.globals.fast / 2);

                                    if (classes) {
                                        ui.removeClass(tabs, classes);
                                    }

                                    ui.removeClass(tabs, ui.tab.nameActive);
                                    ui.removeClass(content, ui.tab.nameOpenEase);

                                }, 0);

                                ui.trigger(document, ui.tab.eventToggleTabsClosed); // set custom event
                                ui.off(document, 'mousedown.' + ui.tab.eventCloseToggleTabs);

                            }

                        });

                } else {

                    ui.removeClass(content, ui.tab.nameOpenEase);
                    setTimeout(() => {

                        ui.removeClass(content, ui.tab.nameOpen);
                        ui.addClass(currentContent, ui.tab.nameOpen);

                        setTimeout(() => {

                            ui.addClass(currentContent, ui.tab.nameOpenEase);
                            ui.trigger(document, ui.globals.eventDomChange); // set custom event

                        }, ui.globals.fast / 2);

                    }, 0);

                }

            }

        });

};

// loaders
ui.onload(ui.tab.Start);

/* top button */

ui.topButton = {

    // targets
    target: 'ui-top-button',

    // helper classnames
    nameOpen: 'ui-open',
    nameOpenEase: 'ui-open-ease',

    // styling classnames
    stylesTarget: 'ui-round ui-ease-layout',
    stylesIcon: 'ui-icon ui-ease-layout',

    // icons
    icon: 'arrow-to-top',

    // custom texts
    titleText : 'Back to top!'

};

(() => {

    var togglerFnc = () => {

        var html = '<button class="' + ui.topButton.target + ' ' + ui.topButton.stylesTarget + ' ' + ui.topButton.nameOpen + '" title="' + ui.topButton.titleText + '">';

        if (ui.globals.inlineSvg) {
            html += '<svg class="' + ui.topButton.stylesIcon + '" viewBox="' + ui.globals.inlineSvgViewBox + '">' + ui.topButton.icon;

        } else {
            html += '<svg class="' + ui.topButton.stylesIcon + '"><use href="' + ui.globals.iconSrc + '#' + ui.topButton.icon + '"/>';
        }

        html += '</svg>' +

            '</button>';

        var topBtn;

        if (ui.find('body')[0].offsetHeight > (window.innerHeight * 2) && window.innerWidth > ui.globals.sm) {

            setTimeout(() => {

                if (window.pageYOffset > (window.innerHeight / 3)) {

                    topBtn = ui.find('.' + ui.topButton.target)[0];
                    if (topBtn === undefined) {

                        ui.find('body')[0].insertAdjacentHTML('beforeend', html);
                        topBtn = ui.find('.' + ui.topButton.target)[0];

                        setTimeout(() => {
                            ui.addClass(topBtn, ui.topButton.nameOpenEase);
                        }, ui.globals.slow);

                    }

                } else {

                    topBtn = ui.find('.' + ui.topButton.target)[0];
                    if (topBtn !== undefined) {

                        ui.removeClass(topBtn, ui.topButton.nameOpenEase);

                        setTimeout(() => {

                            if (topBtn.parentNode !== null) {
                                topBtn.parentNode.removeChild(topBtn);
                            }

                        }, ui.globals.slow);

                    }

                }

            }, 0);

        }

    };

    ui.topButton.Start = () => {

        if (ui.userAgents.desktop) {

            togglerFnc();

            // Event Listeners
            ui.on(document,
                'click',

                '.' + ui.topButton.target,

                function () {
                    window.scrollTo(0, 0);
                });

        }

    };

    // loaders
    ui.onload(ui.topButton.Start);

    ui.on(window, 'resize scroll', togglerFnc);
    ui.on(document, ui.globals.eventDomChange, togglerFnc);

})();

/* autocomplete */

ui.autocomplete = {

    // targets
    target: 'ui-autocomplete',

    // main classnames
    nameMenuTop: 'ui-autocomplete-t',

    // helper classnames
    nameOpen: 'ui-open',
    nameOpenEase: 'ui-open-ease',

    nameLoaded: 'ui-loaded',
    nameSelected: 'ui-selected',

    // outer classnames
    nameRound: 'ui-round',
    nameInput: 'ui-input',

    // styling classnames
    stylesList : 'ui-shadow-lg ui-ease-autocomplete',

    // tags
    tagHighlight: 'b',

    // values
    scrollbarSize: 15,

    queryParameter: 'val',
    customLetters: {"İ": "i", "I": "ı", "Ş": "ş", "Ğ": "ğ", "Ü": "ü", "Ö": "ö", "Ç": "ç"},

    // data attributes
    dataSrc: 'data-ui-src',
    dataVal: 'data-ui-val'

};

ui.autocomplete.Start = () => {

    let
        formEventListeners,
        autocompleteRequests = [];

    const customLowerCase = function (string) { // custom lowercase

        const keys = Object.keys(ui.autocomplete.customLetters); // returns array

        let chars = '(([';
        for (let i = 0; i < keys.length; i++) { chars += keys[i]; }
        chars += ']))';

        const re = new RegExp(chars, 'g');

        string = string.replace(/["'\[\]\{\}()]/g, '').replace(re, (l) => ui.autocomplete.customLetters[l]);
        return string.toLowerCase();

    };

    // Event Listeners
    formEventListeners = ui.find('.' + ui.autocomplete.nameInput + '.' + ui.autocomplete.target + ' > [type="text"]');

    ui.on(document,
        'keyup',

        formEventListeners,

        function (e) {

            let timerShowLines;
            const parent = this.parentNode;

            const list = ui.find('ul', parent);
            if (list[0] === undefined) { return; } // clear forms has triggering keyup event

            if (e.keyCode === 38 || e.keyCode === 40) {

                // navigate the list
                const listItems = ui.find('li', list[0]);
                if (listItems.length > 0) {

                    let navIndex;
                    const navSelected = ui.find('li.' + ui.autocomplete.nameSelected, list[0]);

                    if (navSelected.length > 0) {

                        navIndex = Array.prototype.slice.call(listItems).indexOf(navSelected[0]);

                        if (e.keyCode === 40) { // arrow down

                            navIndex += 1;
                            if (navIndex >= listItems.length) { navIndex = 0; }

                        } else if (e.keyCode === 38) { // arrow up

                            navIndex -= 1;
                            if (navIndex < 0) { navIndex = 0; }

                        }

                    } else {

                        if (e.keyCode === 40) { // arrow down
                            navIndex = 0;

                        } else if (e.keyCode === 38) { // arrow up
                            navIndex = listItems.length - 1;
                        }

                    }

                    ui.removeClass(navSelected, ui.autocomplete.nameSelected);
                    ui.addClass(listItems[navIndex], ui.autocomplete.nameSelected);

                    this.value = listItems[navIndex].textContent;

                }

            } else if (e.keyCode === 13 || e.keyCode === 27 || e.keyCode === undefined) { // undefined: detect keyup trigger event when clicking!

                if (list.length >= 1) {

                    ui.removeClass(parent, ui.autocomplete.nameOpenEase);
                    setTimeout(() => {

                        ui.removeClass(parent, ui.autocomplete.nameOpen);
                        list[0].innerHTML = '';

                    }, ui.globals.ease);

                }

            } else if (e.keyCode !== 16 && e.keyCode !== 17 && e.keyCode !== 18) {

                let val = this.value;

                val = customLowerCase(val);
                val = val.replace(/\s+$/g, ''); // remove the last space

                if (val !== '') {

                    const getVal = parent.getAttribute(ui.autocomplete.dataVal);
                    if (getVal !== null && getVal !== '') {

                        const src = parent.getAttribute(ui.autocomplete.dataSrc);
                        if (src !== null && src !== '') {

                            // get json data with ajax
                            ui.ajax({

                                url : src + '?' + ui.autocomplete.queryParameter + '=' + val,
                                beforesend: (xhr) => {

                                    // abort still processing previous autocomplete requests
                                    Array.prototype.forEach.call(autocompleteRequests,

                                        (item, n) => {

                                            item.abort();
                                            autocompleteRequests.splice(n, 1);

                                        });

                                    autocompleteRequests.push(xhr);

                                },
                                callback: (status, response) => {

                                    if (status === 'success') {

                                        response = JSON.parse(response);
                                        if (response.length !== 'undefined') {

                                            let k = 0;

                                            ui.addClass(parent, ui.autocomplete.nameOpen);

                                            setTimeout(() => {
                                                ui.addClass(parent, ui.autocomplete.nameOpenEase);
                                            }, 0);

                                            ui.removeClass(parent, ui.autocomplete.nameMenuTop);
                                            list[0].innerHTML = '';

                                            Array.prototype.forEach.call(response,

                                                item => {

                                                    const key = item[getVal];
                                                    let txt = '';

                                                    if (key !== null) {

                                                        if (typeof key === 'boolean') { return; } // booleans not supported!
                                                        let modified = key;

                                                        if (typeof key === 'number') {
                                                            modified = modified.toString().match(val, 'g');

                                                        } else {

                                                            modified = customLowerCase(modified);
                                                            modified = modified.match(val, 'g');

                                                        }

                                                        if (modified !== null) {

                                                            clearTimeout(timerShowLines);
                                                            timerShowLines = setTimeout(() => { // create dropdown

                                                                const offset = parent.getBoundingClientRect();

                                                                const tHeight = parent.offsetHeight;
                                                                const dHeight = list[0].offsetHeight;

                                                                if (offset.top + parseInt(tHeight + dHeight) >= window.innerHeight) {

                                                                    if (offset.top - parseInt(tHeight + dHeight) + tHeight > 0) {
                                                                        ui.addClass(parent, ui.autocomplete.nameMenuTop);

                                                                    } else {
                                                                        list[0].style.height = (dHeight - (offset.top + parseInt(tHeight + dHeight) - window.innerHeight) - ui.autocomplete.scrollbarSize) + 'px';
                                                                    }

                                                                }

                                                            }, 10);

                                                            // show max. number of lines: 5
                                                            k += 1;
                                                            if (k > 5) { return; }

                                                            // create lines
                                                            if (typeof key === 'number') {

                                                                for (let i = 0; i < key.toString().length; i++) {

                                                                    if (i === key.toString().indexOf(modified)) { txt += '<' + ui.autocomplete.tagHighlight + '>'; }
                                                                    if (i === (key.toString().indexOf(modified) + val.length)) { txt += '</' + ui.autocomplete.tagHighlight + '>'; }

                                                                    txt += key.toString().charAt(i);

                                                                }

                                                            } else {

                                                                for (let j = 0; j < key.length; j++) {

                                                                    if (j === customLowerCase(key).indexOf(modified)) { txt += '<' + ui.autocomplete.tagHighlight + '>'; }
                                                                    if (j === (customLowerCase(key).indexOf(modified) + val.length)) { txt += '</' + ui.autocomplete.tagHighlight + '>'; }

                                                                    txt += key.charAt(j);

                                                                }

                                                            }

                                                            list[0].insertAdjacentHTML(
                                                                'beforeend',
                                                                '<li>' + txt + '</li>'
                                                            );

                                                        }

                                                    }

                                                });

                                        }

                                        response = '';

                                    }

                                }
                            });

                        }


                    } else { return; }

                } else {

                    ui.removeClass(parent, ui.autocomplete.nameOpenEase);

                    setTimeout(() => {

                        ui.removeClass(list, ui.autocomplete.nameOpen);
                        list[0].innerHTML = '';

                    }, ui.globals.ease);

                }

            }

        });

    ui.on(document,
        'keydown',

        formEventListeners,

        function (e) { // prevent form submitting when selecting from list with enter

            if (e.keyCode === 13) {

                const parent = this.parentNode;
                const list = ui.find('li.' + ui.autocomplete.nameSelected, parent);

                if (list.length > 0) {

                    e.preventDefault();
                    e.stopPropagation();

                    ui.removeClass(parent, ui.autocomplete.nameOpenEase);

                    setTimeout(() => {
                        ui.removeClass(parent, ui.autocomplete.nameOpen);
                    }, ui.globals.ease);

                }

            }

        });

    ui.on(document,
        'focus',

        formEventListeners,

        function () {

            const parent = this.parentNode;
            let styles = ui.autocomplete.stylesList;

            this.setAttribute('autocomplete', 'off');

            ui.addClass(parent, ui.autocomplete.nameOpen);
            ui.removeClass(parent, ui.autocomplete.nameMenuTop);

            if (ui.hasClass(parent, ui.autocomplete.nameRound)) {
                styles += ' ' + ui.autocomplete.nameRound;
            }

            parent.insertAdjacentHTML(
                'beforeend',
                '<ul class="' + styles + '"></ul>'
            );

        });

    ui.on(document,
        'blur',

        formEventListeners,

        function () {

            const parent = this.parentNode;
            const list = ui.find('ul', parent);

            ui.removeClass(parent, ui.autocomplete.nameOpenEase);
            setTimeout(() => {

                ui.removeClass(parent, ui.autocomplete.nameOpen);

                if (list.length > 0) {
                    parent.removeChild(list[0]);
                }

            }, ui.globals.ease);

        });

    ui.on(document,
        'mousedown',

        '.' + ui.autocomplete.nameInput + '.' + ui.autocomplete.target + '.' + ui.autocomplete.nameOpen + ' li',

        function () { // trigger defined event listeners after autocomplete selected

            const parent = ui.closest(this, '.' + ui.autocomplete.target);
            const target = ui.find('[type="text"]', parent);

            target.value = this.textContent;
            ui.trigger(target, 'keyup');

        });

};

// loaders
ui.onload(ui.autocomplete.Start);

/* currency spinner */

ui.currencySpinner = {

    // targets
    target: 'ui-currency-spinner',

    // main classnames
    nameUp: 'ui-currency-up',
    nameDown: 'ui-currency-down',

    // outer classnames
    nameInput: 'ui-input',

    // values
    decimals: false
};

(() => {

    let cacheCurrencySpinner;

    ui.currencySpinner.Start = () => {

        const convert = (s) => {

            const regDecimal = new RegExp(/(\,+\d+)/g);
            const regClear = new RegExp(/(\s)|(\.)|(\,)/g);

            if (ui.currencySpinner.decimals) {

                let number = s.replace(regDecimal, '');
                let decimal = s.match(regDecimal);

                if (decimal === null) {
                    decimal = '0';

                } else {
                    decimal = decimal[0];
                }

                number = Number(number.replace(regClear, ''));
                decimal = Number(decimal.replace(regClear, ''));

                s = [];

                s.push(number);
                s.push(decimal);

            } else {
                s = Number(s.replace(/(\s)|(\.)|(\,+\d+)|(\,)/g, ''));
            }

            return s;

        };

        function locales(l) {
            return l.toLocaleString();
        }

        function currencyChange(that) {

            const parent = ui.closest(that, '.' + ui.currencySpinner.target);
            const input = ui.find('[type="text"]', parent);

            const nav = [];

            nav.up = ui.hasClass(that, ui.currencySpinner.nameUp);
            nav.down = ui.hasClass(that, ui.currencySpinner.nameDown);

            let val = convert(input.value);

            if (nav.up || nav.down) {

                let step = convert(input.getAttribute('step'));
                let min = convert(input.getAttribute('min'));

                if (nav.up) {

                    if (ui.currencySpinner.decimals) {

                        val[0] += step[0];
                        val[1] += step[1];

                    } else { val += step; }

                } else {

                    if (ui.currencySpinner.decimals) {

                        val[0] -= step[0];
                        val[1] -= step[1];

                        if (val[0] <= min[0]) { val[0] = min[0]; }
                        if (val[1] <= min[1]) { val[1] = min[1]; }

                    } else {

                        val -= step;
                        if (val <= min) { val = min; }

                    }

                }

                if (ui.currencySpinner.decimals) {

                    step[0] = locales(step[0]);
                    min[0] = locales(min[0]);

                } else {

                    step = locales(step);
                    min = locales(min);

                }

            }

            if (ui.currencySpinner.decimals) {

                val[0] = locales(val[0]);
                input.value = val[0] + ',' + val[1];

            } else {

                val = locales(val);
                input.value = val;

            }

        }

        // Event Listeners
        ui.on(document,
            'click',

            '.' + ui.currencySpinner.nameUp + ',.' + ui.currencySpinner.nameDown,

            function (e) {

                e.preventDefault();
                currencyChange(this);

            });

        ui.on(document,
            'keypress',

            '.' + ui.currencySpinner.target + ' input[type="text"]',

            function (e) {

                let char, ignoreList;
                let isRefresh = false;

                if (e.which) {
                    char = e.which;

                } else {

                    char = e.keyCode;

                    if (char === 116) { // f5
                        isRefresh = true;
                    }

                }

                ignoreList = [8, 9, 35, 36, 37, 39]; // backspace, tab, end, home, arrow left, arrow right

                if (ui.currencySpinner.decimals) {
                    ignoreList.push(44); // print screen
                }

                if (ignoreList.indexOf(char) === -1 && !isRefresh && (char < 48 || char > 57)) { // 48-57: 0-9
                    e.preventDefault();
                }

            });

        ui.on(document,
            'focus',

            '.' + ui.currencySpinner.target + ' input[type="text"]',

            function () {
                cacheCurrencySpinner = this.value;
            });

        ui.on(document,
            'keyup blur',

            '.' + ui.currencySpinner.target + ' input[type="text"]',

            function (e) {

                if (e.keyCode === 27) {

                    this.value = cacheCurrencySpinner;
                    ui.trigger(this, 'blur');

                    return;

                }

                if (ui.currencySpinner.decimals) {

                    if (e.type === 'blur') {
                        currencyChange(this);
                    }

                } else {
                    currencyChange(this);
                }

                if (e.type === 'blur') {

                    const input = ui.find('.' + ui.currencySpinner.target + ' .' + ui.currencySpinner.nameInput + ' input')[0];
                    const min = convert(input.getAttribute('min'));

                    if (convert(input.value) < min) {
                        input.value = locales(min);
                    }

                }

            });

        ui.on(document,
            'keydown',

            ui.closest('.' + ui.currencySpinner.target, 'form'),

            function (e) {

                if (e.keyCode === 13) {

                    e.preventDefault();
                    ui.trigger('.' + ui.currencySpinner.target + ' .' + ui.currencySpinner.nameInput + ' input', 'blur');

                } else { return; }

            });

    };

    // loaders
    ui.onload(ui.currencySpinner.Start);

})();

/* dual multi select */

ui.dualMultiSelect = {

    // targets
    target: 'ui-dual-multi-select',

    // outer classnames
    nameSelectMulti: 'ui-select-multi',

    // data attributes
    dataIndex: 'data-ui-index'

};

(() => {

    let
        resetOptions,
        movetoSource;

    ui.dualMultiSelect.Start = () => {

        resetOptions = function (selects, isSubmit) { // reset options

            Array.prototype.forEach.call(ui.find('option', selects[0]),

                item => {

                    if (ui.userAgents.mobile) {
                        item.selected = true;

                    } else {
                        item.selected = false;
                    }

                });

            Array.prototype.forEach.call(ui.find('option', selects[1]),

                item => {

                    if (ui.userAgents.mobile || isSubmit !== undefined) {
                        item.selected = true;

                    } else {
                        item.selected = false;
                    }

                });

        };

        ui.dualMultiSelect.Init = () => {

            Array.prototype.forEach.call(ui.find('.' + ui.dualMultiSelect.target),

                el => {

                    let arr = [];
                    let arrStart = [];

                    const selects = ui.find('.' + ui.dualMultiSelect.nameSelectMulti + ' select[multiple]', el);

                    // move name attribute from source to target select
                    const name = selects[0].name;

                    selects[0].removeAttribute('name');
                    selects[1].name = name;

                    // get user defined idexes
                    const options = ui.find('option', selects[0]);

                    Array.prototype.forEach.call(options,

                        item => {

                            const index = item.getAttribute(ui.dualMultiSelect.dataIndex);

                            if (index !== null && index !== '' && !isNaN(index)) {

                                arr.push(index);
                                arrStart.push(index);

                            } else { arr.push(''); }

                        });

                    // create new indexes for not defined options
                    arrStart = arrStart.sort();

                    const userArr = arrStart;

                    arrStart = Number(arrStart[arrStart.length - 1]);
                    if (isNaN(arrStart)) {

                        arrStart = 0;
                        for (let i = 0; i < options.length; i++) {

                            arrStart += 1;
                            arr[i] = arrStart.toString();

                        }

                    } else {

                        for (let j = 1; j <= options.length; j++) {

                            if (arr[j] === '') {

                                arrStart += 1;
                                arr[j] = arrStart.toString();

                            }

                        }

                    }

                    // set all indexes to options
                    Array.prototype.forEach.call(options,

                        (item, i) => {

                            item.setAttribute(ui.dualMultiSelect.dataIndex, arr[i]);

                            if (userArr.length > 0) { // move user defined options from source to target by index

                                const index = Number(arr.indexOf(userArr[i]));

                                if (index > -1) {
                                    selects[1].appendChild(options[index]);
                                }

                            } else { // move options selected with attribute from source to target

                                const selected = item.getAttribute('selected');

                                if (selected !== null) {
                                    selects[1].appendChild(item);
                                }

                            }

                        });

                    resetOptions(selects); // reset options

                });

        };
        ui.dualMultiSelect.Init();

        movetoSource = function (that, selects) {

            const i = Number(that.getAttribute(ui.dualMultiSelect.dataIndex));
            const sourceList = ui.find('option', selects[0]);

            if (sourceList.length === 0) {

                // first moving to empty list
                selects[0].appendChild(that);

            } else if (sourceList.length === 1) {

                // only one option in list
                const firstIndex = Number(sourceList[0].getAttribute(ui.dualMultiSelect.dataIndex));

                if (i > firstIndex) {
                    selects[0].appendChild(that);

                } else {
                    selects[0].insertBefore(that, sourceList[0]);
                }

            } else {

                const arr = [];
                let inserted = false;

                // move to index
                for (let j = 0; j < sourceList.length; j++) {

                    const otherIndex = Number(sourceList[j].getAttribute(ui.dualMultiSelect.dataIndex));
                    arr.push(otherIndex);

                    if (otherIndex - 1 >= i) {

                        inserted = true;
                        selects[0].insertBefore(that, sourceList[j]);

                        break;

                    }

                }

                // move biggest index to end of the list
                if (!inserted) {

                    if (i > arr.sort()[arr.length - 1]) {
                        selects[0].appendChild(that);
                    }

                }

            }

        };

        // Event Listeners
        ui.on(document,
            'change',

            '.' + ui.dualMultiSelect.target + ' .' + ui.dualMultiSelect.nameSelectMulti + ' select[multiple]',

            function (e) {

                if (!e.isTrusted) { return; } // prevent trigger change event listeners

                let that;
                const options = Array.prototype.slice.call(e.target); // get option list

                for (let i = 0; options.length; i++) {

                    if (options[i].selected) { // get selected option

                        that = options[i];
                        break;

                    }

                }

                const selects = ui.closest(that, '.' + ui.dualMultiSelect.target)[0];
                const multi = ui.find('.' + ui.dualMultiSelect.nameSelectMulti + ' select[multiple]', selects);

                const parent = ui.closest(that, '.' + ui.dualMultiSelect.nameSelectMulti + ' select[multiple]')[0];
                const dir = Array.prototype.slice.call(multi).indexOf(parent);

                if (dir === 0) { // move from source to target select
                    multi[1].appendChild(that);

                } else { // move from target to source select
                    movetoSource(that, multi);
                }

                resetOptions(multi); // reset options

            });

        ui.on(document,
            'reset',

            'form',

            function () {

                setTimeout(() => { // wait for form reset started on DOM

                    Array.prototype.forEach.call(ui.find('.' + ui.dualMultiSelect.target),

                        el => {

                            let index;
                            let selected;

                            const selects = ui.find('.' + ui.dualMultiSelect.nameSelectMulti + ' select[multiple]', el);

                            Array.prototype.forEach.call(ui.find('option', selects[1]),

                                item => {

                                    selected = item.getAttribute('selected');
                                    index = Number(item.getAttribute(ui.dualMultiSelect.dataIndex)) - 1;

                                    if (selected === null) { // move options to source that not selected with attribute
                                        movetoSource(item, selects);
                                    }

                                });

                            const targetList = ui.find('option', selects[1]); // reload modified list

                            Array.prototype.forEach.call(ui.find('option', selects[0]),

                                item => {

                                    selected = item.getAttribute('selected');
                                    if (selected !== null) { // move options to target that selected with attribute

                                        if (targetList.length === 0) {
                                            selects[1].appendChild(item);

                                        } else {
                                            selects[1].insertBefore(item, targetList[index]);
                                        }
                                    }

                                });

                            resetOptions(selects); // reset options

                        });

                }, 0);

            });

        ui.on(document,
            'submit',

            'form',

            function (e) {

                Array.prototype.forEach.call(e.target,

                    item => { // get submitted element list

                        if (item.tagName === 'SELECT' && item.multiple) { // get multiple selects

                            const selects = ui.closest(item, '.' + ui.dualMultiSelect.target)[0];
                            const multi = ui.find('.' + ui.dualMultiSelect.nameSelectMulti + ' select[multiple]', selects);

                            if (multi !== undefined) {
                                resetOptions(multi, true); // reset options, set target list to selected before submit
                            }

                        }

                    });

            });

    };

    // loaders
    ui.onload(ui.dualMultiSelect.Start);

    // ajax callback loader
    ui.on(document,
        ui.globals.eventAjaxCallback,

        () => {

            if (ui.ajax.classNames.indexOf(ui.dualMultiSelect.target) > 0) {
                ui.dualMultiSelect.Init();
            }

        });

})();

/* forms */

ui.forms = {

    // targets
    targetText: 'ui-input',
    targetSelect: 'ui-select',
    targetSelectMulti: 'ui-select-multi',
    targetTextarea: 'ui-textarea',
    targetFile: 'ui-file',
    targetIndeterminate: 'ui-indeterminate',

    // main classnames
    nameFocus: 'ui-form-focus',

    nameHolder: 'ui-form-holder',
    nameHolderFocus: 'ui-form-holder-focus',

    nameHasClear: 'ui-form-has-clear',
    nameClear: 'ui-form-clear',

    nameShowPass: 'ui-pass-toggle',
    nameNumber: 'ui-number',

    nameFormIcon: 'ui-form-icon',

    nameRequired: 'ui-required',
    nameRequiredMsg: 'ui-required-msg',
    nameRequiredMsgShow: 'ui-show',

    nameError: 'ui-form-error',

    // helper classnames
    nameOpen: 'ui-open',
    nameOpenEase: 'ui-open-ease',

    // outer classnames
    nameIcon: 'ui-icon',

    // tags
    tagFileInfo: 'i'

};

(() => {

    let clearForms;

    ui.forms.Start = () => {

        function formFocus(that, type) {

            const classes = [
                ui.forms.targetText,
                ui.forms.targetSelect,
                ui.forms.targetSelectMulti,
                ui.forms.targetTextarea
            ];

            const holder = ui.closest(that, '.' + ui.forms.nameHolder);

            if (holder.length === 1) {

                ui.removeClass('.' + ui.forms.nameHolderFocus, ui.forms.nameHolderFocus);

                if (type === 'add') {
                    ui.addClass(holder, ui.forms.nameHolderFocus);
                }

            } else {
                ui.removeClass('.' + ui.forms.nameFocus, ui.forms.nameFocus);
            }

            for (let i = 0; i < classes.length; i++) {

                const parent = ui.closest(that, '.' + classes[i]);
                if (parent.length === 1) {

                    if (type === 'add') {
                        ui.addClass(parent, ui.forms.nameFocus);

                    } else {
                        ui.removeClass(parent, ui.forms.nameFocus);
                    }

                    break;
                }

            }

        }

        // clear with form icons
        clearForms = function (that) {

            const btn = ui.find('.' + ui.forms.nameClear, that.parentElement)[0];

            if (that.value !== '') {

                ui.addClass(btn, ui.forms.nameOpen);

                setTimeout(() => {
                    ui.addClass(btn, ui.forms.nameOpenEase);
                }, 10);

            } else {

                ui.removeClass(btn, ui.forms.nameOpenEase);

                setTimeout(() => {
                    ui.removeClass(btn, ui.forms.nameOpen);
                }, ui.globals.ease);

            }

        };

        ui.forms.Init = () => {

            Array.prototype.forEach.call(ui.find('.' + ui.forms.targetText + '.' + ui.forms.nameHasClear + ' input'),

                el => {
                    setTimeout(() => { clearForms(el); }, 0);
                });

        };
        ui.forms.Init();

        // Event Listeners
        ui.on(document,
            'focus',

            '.' + ui.forms.targetText + ' input,' +
            '.' + ui.forms.targetSelect + ' select,' +
            '.' + ui.forms.targetSelectMulti + ' select,' +
            '.' + ui.forms.targetTextarea + ' textarea',

            function () {
                formFocus(this, 'add');
            });

        ui.on(document,

              'blur',
              'input,select,textarea',

            function () {
                formFocus(this, 'remove');
            });

        // file inputs
        ui.on(document,
            'change',

            '.' + ui.forms.targetFile + ' input',

            function () {

                const info = ui.find(ui.forms.tagFileInfo, this.parentElement)[0];

                if (info !== undefined) {
                    info.innerHTML = this.value;
                }

            });

        // indeterminate
        ui.on(document,
            'click',

            'input[type="checkbox"].' + ui.forms.targetIndeterminate,

            function () {

                if (this.readOnly) {
                    this.checked = this.readOnly = false;

                } else if (!this.checked) {
                    this.readOnly = this.indeterminate = true;
                }

            });

        // toggle password
        ui.on(document,
            'click touchend',

            '.' + ui.forms.nameShowPass,

            function () {

                const that = ui.find('input', this.parentElement)[0];

                if (that.getAttribute('type') === 'password') {
                    that.setAttribute('type', 'text');

                } else {
                    that.setAttribute('type', 'password');
                }

            });

        // number
        ui.on(document,
            'paste keydown',

            '.' + ui.forms.targetText + ' > .' + ui.forms.nameNumber,

            function () {

                const maxLength = this.getAttribute('maxlength');
                this.removeAttribute('maxlength');

                setTimeout(() => {

                    let newValues = '';
                    const getValues = this.value.match(new RegExp(/[0-9]/, 'g'));

                    if (getValues !== null) {

                        Array.prototype.forEach.call(getValues,

                            item => {
                                newValues += item;
                            });

                    } else {

                        this.value = newValues;
                        return false;

                    }

                    if (maxLength !== null) {

                        let re = '[0-9]{1,' + maxLength + '}';
                        re = new RegExp(re, 'g');

                        this.value = newValues.match(re)[0];
                        this.setAttribute('maxlength', maxLength);

                    } else {
                        this.value = newValues;
                    }

                }, 0);

            });

        // form icons
        if (ui.userAgents.mobile) { // fix: buttons not clicked on form focus at mobile devices

            ui.on(document,
                'mousedown',

                '[class*="' + ui.forms.nameFormIcon + '"] > button.' + ui.forms.nameIcon + ',' +
                '[class*="' + ui.forms.nameFormIcon + '"] > input.' + ui.forms.nameIcon,

                function (e) {

                    e.stopPropagation();
                    ui.trigger(this, 'click');

                });

            // submit with form icons (ios fix)
            ui.on(document,
                'click',

                '.' + ui.forms.targetText + ' > [type="submit"]',

                function () {

                    const form = ui.closest(this, '.' + ui.forms.targetText)[0];
                    ui.trigger(form, 'submit');

                });

        }

        // trigger custom event listeners when form resetting
        ui.on(document,
            'reset',

            'form',

            function (e) {

                const forms = Array.prototype.slice.call(e.target);

                const errors = ui.find('.' + ui.forms.nameError, this);
                const reqMessages = ui.find('.' + ui.forms.nameRequiredMsg, this);

                setTimeout(() => { // wait for form reset started on DOM

                    Array.prototype.forEach.call(forms,

                        el => {

                            // trigger defined event listeners after form clear
                            if (!ui.hasClass(el, ui.forms.nameRequired)) { // discard required forms
                                ui.trigger(el, 'keydown keyup');
                            }

                        });

                    // remove errors
                    ui.removeClass(errors, ui.forms.nameError);

                    // remove error messages
                    ui.removeClass(reqMessages, ui.forms.nameRequiredMsgShow);

                }, 0);

            });

        // clear with form icons
        ui.on(document,
            'change keyup',

            '.' + ui.forms.targetText + '.' + ui.forms.nameHasClear + ' input',

            function () {
                clearForms(this);
            });

        ui.on(document,
            'click',

            '.' + ui.forms.targetText + '.' + ui.forms.nameHasClear + ' .' + ui.forms.nameClear,

            function () {

                const form = ui.find('input', this.parentElement)[0];
                form.value = '';

                if (!ui.hasClass(form, ui.forms.nameRequired)) { // discard required forms

                    // trigger defined event listeners after form clear
                    ui.trigger(form, 'change keydown keyup');

                }

            });

    };

    // loaders
    ui.onload(ui.forms.Start);

    // ajax callback loader
    ui.on(document,
        ui.globals.eventAjaxCallback,

        () => {

            if (ui.ajax.classNames.indexOf(ui.forms.nameClear) > 0) {
                ui.forms.Init();
            }

        });

})();

/* form spinner */

ui.formSpinner = {

    // targets
    target: 'ui-form-spinner',

    // main classnames
    nameUp: 'ui-spinner-up',
    nameDown: 'ui-spinner-down'

};

ui.formSpinner.Start = () => {

    // Event Listeners
    ui.on(document,
        'click',

        '.' + ui.formSpinner.nameUp + ',.' + ui.formSpinner.nameDown,

        function () {

            const parent = ui.closest(this, '.' + ui.formSpinner.target);
            const input = ui.find('[type="text"]', parent);

            let val = Number(input.value);
            let max = input.getAttribute('max');
            let min = input.getAttribute('min');

            if (ui.hasClass(this, ui.formSpinner.nameUp)) {

                val += 1;
                if (val >= max) { val = max; }

            } else {

                val -= 1;
                if (val <= min) { val = min; }

            }

            input.value = val;

        });

    ui.formSpinner.Init = () => {

        Array.prototype.forEach.call(ui.find('.' + ui.formSpinner.target),

            el => {

                const that = ui.find('[type="text"]', el)[0];
                that.value = that.getAttribute('value');

            });

    };
    ui.formSpinner.Init();

};

// loaders
ui.onload(ui.formSpinner.Start);

// ajax callback loader
ui.on(document,
    ui.globals.eventAjaxCallback,

    () => {

        if (ui.ajax.classNames.indexOf(ui.formSpinner.target) > -1) {
            ui.formSpinner.Init();
        }

    });

/* required forms */

ui.requiredForms = {

    // targets
    target: 'ui-required',

    // main classnames
    targetAccept: 'ui-required-holder',
    nameMsg: 'ui-required-msg',

    nameTypePrefix: 'ui-',

    // helper classnames
    nameSuccess: 'ui-success',
    nameShow: 'ui-show',

    // outer classnames
    nameHolder: 'ui-form-holder',

    nameInput: 'ui-input',
    nameSelect: 'ui-select',
    nameTextarea: 'ui-textarea',
    nameFile: 'ui-file',
    nameIndeterminate: 'ui-indeterminate',

    nameError: 'ui-form-error',

    // values
    scrollingTopSpacing: 20,
    rexMail: '^[a-z0-9][a-z0-9-_\\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\\.[a-z0-9]{2,10}(?:\\.[a-z]{2,10})?$'

};

ui.requiredForms.Start = () => {

    function required(that, type) {

        var p, parentType, checkHolder, checkForms, holderForms, next, showMsg, hideErr, showErr, min, max, val, reMail, radios, radiosCheck, i;

        hideErr = function () {

            showMsg = false;
            next = p.nextElementSibling;

            if (ui.hasClass(next, ui.requiredForms.nameMsg)) { showMsg = true; }

            if (that.type === 'radio') {

                radios = ui.find('[type="radio"][name="' + that.name + '"]');
                ui.addClass(radios, ui.requiredForms.nameSuccess);

            } else {
                ui.addClass(that, ui.requiredForms.nameSuccess);
            }

            ui.removeClass(p, ui.requiredForms.nameError);

            if (showMsg) {
                ui.removeClass(next, ui.requiredForms.nameShow);
            }

        };

        checkForms = function (el) {

            // show error
            showErr = function () {

                if (el.type === 'radio') {

                    radios = ui.find('[type="radio"][name="' + that.name + '"]');
                    ui.removeClass(radios, ui.requiredForms.nameSuccess);

                } else {
                    ui.removeClass(el, ui.requiredForms.nameSuccess);
                }

                ui.addClass(p, ui.requiredForms.nameError);

                if (showMsg) {
                    ui.addClass(next, ui.requiredForms.nameShow);
                }

            };

            // check value
            if (type !== ui.requiredForms.targetAccept) {

                val = el.value.toLowerCase();
                val = val.replace(/^\s+|\s+$/g, ''); // remove first and last spaces

                if (val === '') { showErr(); }

            } else {

                if (el.type === 'radio') {

                    radiosCheck = 0;
                    radios = ui.find('[type="radio"][name="' + el.name + '"]');

                    for (i = 0; i < radios.length; i++) {
                        if (radios[i].checked) { radiosCheck += 1; }
                    }

                    if (radiosCheck === 0) { showErr(); }

                } else {

                    if (!el.checked) {

                        if (ui.hasClass(el, ui.requiredForms.nameIndeterminate) && el.indeterminate) {
                            return;
                        }
                        showErr();

                    }

                }

            }

            // check min
            if (type !== ui.requiredForms.nameSelect) {

                min = el.getAttribute('minlength');

                if (min !== null && min !== '' && !isNaN(min)) {
                    if (val.length < min) { showErr(); }
                }

            }

            // check min and max numbers
            if (type !== ui.requiredForms.nameSelect) {

                min = el.getAttribute('min');
                if (min !== null && min !== '' && !isNaN(min)) {

                    if (!isNaN(val)) {
                        if (Number(val) < Number(min)) { showErr(); }
                    } else { showErr(); }

                }

                max = el.getAttribute('max');
                if (max !== null && max !== '' && !isNaN(max)) {

                    if (!isNaN(val)) {
                        if (Number(val) > Number(max)) { showErr(); }
                    } else { showErr(); }

                }

            }

            // check emails
            if (type === ui.requiredForms.nameTypePrefix + 'email') {

                reMail = new RegExp(ui.requiredForms.rexMail);
                if (val.match(reMail) === null) { showErr(); }

            }

        };

        checkHolder = ui.closest(that, '.' + ui.requiredForms.nameHolder)[0];
        if (checkHolder === undefined) { // default forms

            parentType = type;

            if (type !== ui.requiredForms.nameSelect && type !== ui.requiredForms.nameTextarea && type !== ui.requiredForms.targetAccept && type !== ui.requiredForms.nameFile) {
                parentType = ui.requiredForms.nameInput;
            }

            p = ui.closest(that, '.' + parentType)[0];

            hideErr();
            checkForms(that);

        } else { // form holders

            p = checkHolder;

            holderForms = ui.find('.' + ui.requiredForms.nameInput + ' input.' + ui.requiredForms.target + ',' + '.' + ui.requiredForms.nameSelect + ' select.' + ui.requiredForms.target, p);
            hideErr();

            ui.each(holderForms,

                function () {

                    if (this.tagName === 'SELECT') {
                        type = ui.requiredForms.nameSelect;

                    } else {

                        type = this.getAttribute('type');
                        if (type === null || type === '') { return; }

                        if (type === 'text') {
                            type = ui.requiredForms.nameInput;

                        } else {
                            type = ui.requiredForms.nameTypePrefix + type;
                        }

                    }

                    checkForms(this);

                });

        }

    }

    // Event Listeners
    ui.on(document,
        'submit',

        'form',

        function (e) {

            var i, elems, formElems, success, getIndex, getRect, scrollIndex, scrollPos;

            formElems = [];
            elems = e.target.elements; // get submitted element list

            for (i = 0; i < elems.length; i++) { // filter required elements

                if (ui.hasClass(elems[i], ui.requiredForms.target) && !elems[i].disabled) { // extract disabled elements
                    formElems.push(elems[i]);
                }

            }

            if (formElems.length === 0) { return; }

            success = 0;
            getIndex = 0;

            if (formElems.length !== success) {

                ui.each(formElems,

                    function () {
                        ui.trigger(this, 'keyup change');
                    });

            }

            for (i = 0; i < formElems.length; i++) {

                if (ui.hasClass(formElems[i], ui.requiredForms.nameSuccess)) {
                    success += 1;

                } else {

                    if (getIndex === 0) {

                        getIndex = 1;
                        scrollIndex = i;

                    }

                }

            }

            if (formElems.length !== success) {

                e.preventDefault();
                e.stopPropagation();

                if (ui.modal !== undefined) { // stop scrolling when modal opened

                    if (ui.hasClass(document, ui.modal.nameModalOpened)) {
                        return;
                    }

                }

                scrollPos = window.pageYOffset;

                getRect = formElems[scrollIndex].getBoundingClientRect();
                scrollIndex = getRect.top - (getRect.height * 2) + scrollPos - ui.requiredForms.scrollingTopSpacing;

                window.scrollTo(0, scrollIndex);

            } else { return; }

        });

    ui.on(document,
        'keyup',

        '.' + ui.requiredForms.nameInput + ' input.' + ui.requiredForms.target,

        function () {
            required(this, ui.requiredForms.nameTypePrefix + this.type);
        });

    ui.on(document,
        'change',

        '.' + ui.requiredForms.nameSelect + ' select.' + ui.requiredForms.target,

        function () {
            required(this, ui.requiredForms.nameSelect);
        });

    ui.on(document,
        'keyup',

        '.' + ui.requiredForms.nameTextarea + ' textarea.' + ui.requiredForms.target,

        function () {
            required(this, ui.requiredForms.nameTextarea);
        });

    ui.on(document,
        'change',

        '.' + ui.requiredForms.targetAccept + ' input.' + ui.requiredForms.target,

        function () {
            required(this, ui.requiredForms.targetAccept);
        });

    ui.on(document,
        'change',

        '.' + ui.requiredForms.nameFile + ' input.' + ui.requiredForms.target,

        function () {
            required(this, ui.requiredForms.nameFile);
        });

};

// loaders
ui.onload(ui.requiredForms.Start);

/* textarea counter */

ui.textareaCounter = {

    // targets
    target: 'ui-textarea',

    // main classnames
    nameToggle: 'ui-textarea-toggle',

    // helper classnames
    nameChange: 'ui-changed',

    // data attributes
    dataCounter: 'data-ui-counter',
    dataChange: 'data-ui-changed'

};

ui.textareaCounter.Start = () => {

    function counter(el) {

        var p, v, total, length;

        p = el.parentElement;
        v = el.value;

        total = p.getAttribute(ui.textareaCounter.dataCounter);
        length = (total - v.length);

        if (length <= 0) {

            length = 0;

            p.setAttribute(ui.textareaCounter.dataChange, '0');
            el.value = v.substring(0, total);

        }

        ui.addClass(p, ui.textareaCounter.nameChange);
        p.setAttribute(ui.textareaCounter.dataChange, length);

        return false;

    }

    ui.textareaCounter.Init = () => {

        ui.each('.' + ui.textareaCounter.target + '[' + ui.textareaCounter.dataCounter + ']:not(.' + ui.textareaCounter.nameToggle + '):not(.' + ui.textareaCounter.nameChange + ')',

            function () {
                counter(ui.find('textarea', this)[0]);
            });

    };
    ui.textareaCounter.Init();

    // Event Listeners
    ui.on(document,
        'keydown keyup keypress change',

        '.' + ui.textareaCounter.target + '[' + ui.textareaCounter.dataCounter + '] textarea',

        function (e) {

            if (e.type === 'keydown' && e.ctrlKey) {

                var that = this;
                setTimeout(() => { counter(that); }, 0);

            } else { counter(this); }

        });

    ui.on(document,
        'reset',

        'form',

        function () {

            var i, that;

            that = ui.find('.' + ui.textareaCounter.target + '[' + ui.textareaCounter.dataCounter + '] textarea');
            if (that.length === 0) { return; }

            setTimeout(() => {

                for (i = 0; i < that.length; i++) {
                    counter(that[i]);
                }

            }, 0);

        });

};

// loaders
ui.onload(ui.textareaCounter.Start);

// ajax callback loader
ui.on(document,
    ui.globals.eventAjaxCallback,

    () => {

        if (ui.ajax.data.indexOf(ui.textareaCounter.dataCounter) > 0) {
            ui.textareaCounter.Init();
        }

    });

/* icons */

ui.icons = {

    // outer classnames
    nameIcon: 'ui-icon',

    // tags
    tagIcon: 'use',

    // values
    iconSrc: '../dist/icons.svg'

};

ui.icons.Start = () => {

    // svg icon reference replacement for IE
    if (!ui.userAgents.ie) { return; }

    let iconsList = ui.find(ui.icons.tagIcon);

    const page = ui.find('body')[0];
    const sprites = ui.find('body > svg'); // check svg sprites loaded before

    Array.prototype.forEach.call(iconsList,

        (el, i) => {

            const href = el.getAttribute('href');
            const newHref = href.split('#')[1];

            if (newHref !== undefined) { // pass replaced before

                el.removeAttribute('href');
                el.setAttribute('href');

                el.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#' + newHref);

            }

            if (sprites.length === 0 && (i + 1) === iconsList.length) { // get all svg icons and parse html

                ui.ajax({

                    url : ui.icons.iconSrc,
                    callback: (status, response) => {

                        if (status === 'success') {

                            page.insertAdjacentHTML('afterbegin', response);
                            ui.find('body > svg')[0].style.display = 'none';

                            // empty variables
                            iconsList = '';

                        }

                    }

                });

            }

        }

    );

};

// loaders
ui.onload(ui.icons.Start);

// ajax callback loader
ui.on(document,
    ui.globals.eventAjaxCallback,

    () => {

        if (ui.ajax.classNames.indexOf(ui.formSpinner.nameIcon) > -1) {
            ui.icons.Start();
        }

    });

/* card */

ui.card = {

    // targets
    targetClose: 'ui-card-close',

    // styling classnames
    stylesClosing: 'ui-card-close-wait ui-ease-layout'

};

ui.card.Start = () => {

    // Event Listeners
    ui.on(document,
        'click',

        '.' + ui.card.targetClose,

        function () {

            const parentEl = this.parentElement;
            ui.addClass(parentEl, ui.card.stylesClosing);

            setTimeout(() => {
                parentEl.parentNode.removeChild(parentEl);
            }, ui.globals.ease * 2);

        });

};

// loaders
ui.onload(ui.card.Start);

/* header sticky */

ui.headerSticky = {

    // targets
    target: 'ui-header-sticky',

    // main classnames
    nameSticky: 'ui-sticky',
    nameXS: 'ui-sticky-xs',
    nameSM: 'ui-sticky-sm',
    nameMD: 'ui-sticky-md',
    nameLG: 'ui-sticky-lg',
    nameXL: 'ui-sticky-xl',

    // data attributes
    dataClasses: 'data-ui-classes'

};

(() => {

    let
        stickyLoad,
        stickyClear,

        classList,
        classes,

        size,

        header,
        body;

    stickyClear = function () {

        if (ui.hasClass(header, ui.headerSticky.nameSticky)) {

            body.style.paddingTop = '0';
            ui.removeClass(header, ui.headerSticky.nameSticky);

            if (classes !== null && classes !== '') {
                ui.removeClass(header, classes);
            }
        }

    };

    stickyLoad = () => {

        if (header === undefined) { return; } // firefox
        if (window.pageYOffset > header.offsetTop) {

            if (size !== '') {

                if (window.innerWidth > ui.globals.xs && size === ui.headerSticky.nameXS) { stickyClear(); return; }
                if (window.innerWidth > ui.globals.sm && size === ui.headerSticky.nameSM) { stickyClear(); return; }
                if (window.innerWidth > ui.globals.md && size === ui.headerSticky.nameMD) { stickyClear(); return; }

                if (window.innerWidth < ui.globals.lg && size === ui.headerSticky.nameLG) { stickyClear(); return; }
                if (window.innerWidth < ui.globals.xl && size === ui.headerSticky.nameXL) { stickyClear(); return; }

            }

            body.style.paddingTop = header.offsetHeight + 'px';
            ui.addClass(header, ui.headerSticky.nameSticky);

            if (classes !== null && classes !== '') {
                ui.addClass(header, classes);
            }

        } else { stickyClear(); }

    };

    ui.headerSticky.Start = () => {

        header = ui.find('.' + ui.headerSticky.target);
        if (header.length === 0) { return; }

        body = ui.find('body')[0];

        size = '';
        header = header[0];

        classList = header.getAttribute('class');
        classList = classList.split(' ');

        if (classList.indexOf(ui.headerSticky.nameXS) > -1) {
            size = ui.headerSticky.nameXS;

        } else if (classList.indexOf(ui.headerSticky.nameSM) > -1) {
            size = ui.headerSticky.nameSM;

        } else if (classList.indexOf(ui.headerSticky.nameMD) > -1) {
            size = ui.headerSticky.nameMD;

        } else if (classList.indexOf(ui.headerSticky.nameLG) > -1) {
            size = ui.headerSticky.nameLG;

        } else if (classList.indexOf(ui.headerSticky.nameXL) > -1) {
            size = ui.headerSticky.nameXL;
        }

        classes = header.getAttribute(ui.headerSticky.dataClasses);
        stickyLoad();

    };

    // loaders
    ui.onload(ui.headerSticky.Start);

    ui.on(window, 'scroll', stickyLoad);
    ui.on(document, ui.globals.eventDomChange, stickyLoad);

})();

/* alerts */

ui.alerts = {

    // targets
    targetDialog: 'ui-alerts-dialog',
    targetMsg: 'ui-alerts-msg',
    targetBg: 'ui-alerts-bg',

    // main classnames
    nameDialogOpened: 'ui-alerts-opened',
    nameDialogMsg: 'ui-dialog-msg',
    nameCloseDialog: 'ui-dialog-close',

    nameDialogBtnHolder: 'ui-dialog-buttons',
    nameDialogCustom: 'ui-dialog-custom',
    nameDialogSuccess: 'ui-dialog-success',
    nameDialogError: 'ui-dialog-error',

    nameMsgHolder: 'ui-alerts-msg-holder',
    nameMsgThemePrefix: 'ui-msg-',

    namePosPrefix: 'ui-',

    // helper classnames
    nameOpen: 'ui-open',
    nameOpenEase: 'ui-open-ease',

    nameShow: 'ui-show',
    nameShowEase: 'ui-show-ease',

    // outer classnames
    nameIcon: 'ui-icon',

    // styling classnames
    stylesDialog: 'ui-round ui-shadow-lg ui-ease-layout ui-ease-in-out',
    stylesCloseDialog: 'ui-ease-layout',
    stylesDialogBtnHolder: 'ui-ease-1st-btn',

    stylesMsg: 'ui-round ui-shadow-lg ui-ease-layout ui-ease-in-out',
    stylesMsgTheme: '',

    stylesBg: 'ui-ease-layout',

    // icons
    closeIcon: 'remove',

    // values
    dialogMessages: false, // shows automatically clicked buttons text
    successBtnValue: 'success',
    errorBtnValue: 'error',

    messageTimer: 4000, // wait for atomatically close messages

    posDefault: 'br',

    posTopRight: 'tr',
    posTopLeft: 'tl',
    posBottomRight: 'br',
    posBottomLeft: 'bl',

    themeSuccess: 'success',
    themeWarning: 'warning',
    themeDanger: 'danger',

    // messages
    msgDialogSuccess: 'OK',

    // custom events
    eventCloseDialog: 'ui:closeAlertsDialog'

};

(() => {

    let
        pageYPos,
        cancelCloseDialog,

        messageQueue = [];

    ui.alerts.Start = () => {

        // dialogues
        ui.alerts.closeDialog = function () {

            const dialog = ui.find('.' + ui.alerts.targetDialog)[0];
            ui.removeClass(dialog, ui.alerts.nameShowEase);

            setTimeout(() => {

                dialog.parentNode.removeChild(dialog);

                const bg = ui.find('.' + ui.alerts.targetBg);
                ui.removeClass(bg, ui.alerts.nameOpenEase);

                ui.removeClass(document, ui.alerts.nameDialogOpened);

                if (ui.userAgents.mobile) {
                    window.scrollTo(0, pageYPos);
                }

                setTimeout(() => {
                    ui.removeClass(bg, ui.alerts.nameOpen);
                }, ui.globals.ease);

            }, ui.globals.ease);

            ui.off('.' + ui.alerts.nameDialogBtnHolder + ' button', 'click');

            if (cancelCloseDialog) {

                ui.off('body', 'keydown.' + ui.alerts.eventCloseDialog);
                ui.off('.' + ui.alerts.nameCloseDialog + ',.' + ui.alerts.targetBg, 'click.' + ui.alerts.eventCloseDialog);

            }

        };

        ui.alerts.dialog = function (props) {

            /*
            props list:
                props.msg
                props.error
                props.custom
                props.callback
            */

            if (props === undefined) { return; }
            if (props.msg === undefined) { return; }

            let dialog = ui.find('.' + ui.alerts.targetDialog)[0];
            if (dialog !== undefined) { return; } // prevent multiple dialogues

            if (ui.userAgents.mobile) {
                pageYPos = window.pageYOffset; // get current scroll-y position
            }

            let closeBtn = '';
            cancelCloseDialog = false;

            // create buttons
            let buttons = '';

            if (props.custom !== undefined) {

                for (let key in props.custom) {

                    const val = props.custom[key];

                    if (val !== '') {

                        buttons += '<button class="' + ui.alerts.nameDialogCustom + '" value="' + key + '">' +
                                        val +
                                    '</button>';

                    }

                }

            }

            let success;

            if (props.success === undefined) {
                success = ui.alerts.msgDialogSuccess;

            } else {
                success = props.success;
            }

            buttons += '<button class="' + ui.alerts.nameDialogSuccess + '" value="' + ui.alerts.successBtnValue + '">' +
                            success +
                        '</button>';

            if (props.error !== undefined) {

                buttons += '<button class="' + ui.alerts.nameDialogError + '" value="' + ui.alerts.errorBtnValue + '">' +
                                props.error +
                            '</button>';

                // create close icon
                cancelCloseDialog = true;

                closeBtn = '<button class="' + ui.alerts.nameCloseDialog + ' ' + ui.alerts.stylesCloseDialog + '">';

                if (ui.globals.inlineSvg) {
                    closeBtn += '<svg class="' + ui.alerts.nameIcon + '" viewBox="' + ui.globals.inlineSvgViewBox + '">' + ui.alerts.closeIcon;

                } else {
                    closeBtn += '<svg class="' + ui.alerts.nameIcon + '"><use href="' + ui.globals.iconSrc + '#' + ui.alerts.closeIcon + '"/>';
                }

                closeBtn += '</svg>' +
                        '</button>';
            }

            // create dialog
            const bgOld = ui.find('.' + ui.alerts.targetBg)[0];

            let html = '<div class="' + ui.alerts.targetDialog + ' ' + ui.alerts.stylesDialog + '">' +

                        closeBtn +

                        '<div class="' + ui.alerts.nameDialogMsg + '">' +
                            props.msg +
                        '</div>' +
                        '<div class="' + ui.alerts.nameDialogBtnHolder + ' ' + ui.alerts.stylesDialogBtnHolder + '">' +
                            buttons +
                        '</div>' +

                    '</div>';

            if (bgOld === undefined) {

                html += '<div class="' + ui.alerts.targetBg + ' ' + ui.alerts.stylesBg + '">' +
                        '</div>';

            }

            ui.find('body')[0].insertAdjacentHTML('beforeend', html);
            ui.addClass(document, ui.alerts.nameDialogOpened);

            const bgNew = ui.find('.' + ui.alerts.targetBg);

            // show dialog
            ui.addClass(bgNew, ui.alerts.nameOpen);

            setTimeout(() => {

                ui.addClass(bgNew, ui.alerts.nameOpenEase);
                setTimeout(() => {

                    dialog = ui.find('.' + ui.alerts.targetDialog);
                    ui.addClass(dialog, ui.alerts.nameShow);

                    ui.find('.' + ui.alerts.nameDialogSuccess)[0].focus(); // fosuc success button

                    setTimeout(() => {
                        ui.addClass(dialog, ui.alerts.nameShowEase);
                    }, 10);

                    // Event Listeners
                    ui.on('.' + ui.alerts.nameDialogBtnHolder + ' button',
                        'click',

                        function () {

                            let theme = '';

                            if (ui.hasClass(this, ui.alerts.nameDialogSuccess)) {
                                theme = ui.alerts.themeSuccess;

                            } else if (ui.hasClass(this, ui.alerts.nameDialogError)) {
                                theme = ui.alerts.themeDanger;
                            }

                            let msgTimer;

                            if (ui.alerts.dialogMessages) {
                                msgTimer = ui.globals.ease;

                            } else {
                                msgTimer = 0;
                            }

                            ui.alerts.closeDialog();
                            const msg = this.textContent;

                            setTimeout(() => {

                                // show message
                                if (ui.alerts.dialogMessages) {

                                    ui.alerts.message({
                                        msg: msg,
                                        theme: theme
                                    });

                                }

                                // callback
                                if (props.callback !== undefined) {

                                    setTimeout(() => { // wait for closing dialog and showing messages
                                        props.callback.call(this, this.value);
                                    }, ui.globals.ease * 2);

                                }

                            }, msgTimer);

                        });

                    if (cancelCloseDialog) { // attach close event listeners if props.error defined

                        const userCloseDialog = function () {

                            const errorBtn = ui.find('.' + ui.alerts.targetDialog + ' .' + ui.alerts.nameDialogError)[0];
                            ui.alerts.closeDialog();

                            if (ui.alerts.dialogMessages && errorBtn !== undefined) {

                                setTimeout(() => {

                                    ui.alerts.message({
                                        msg: errorBtn.textContent,
                                        theme: ui.alerts.themeDanger
                                    });

                                }, ui.globals.ease);

                            }

                        };

                        ui.on('.' + ui.alerts.nameCloseDialog + ',.' + ui.alerts.targetBg,
                            'click.' + ui.alerts.eventCloseDialog,

                            userCloseDialog

                            );

                        ui.on('body',
                            'keydown.' + ui.alerts.eventCloseDialog,

                            function (e) {
                                if (e.keyCode === 27) { userCloseDialog(); } // esc
                            });

                    }

                }, ui.globals.ease);

            }, 10);

            return false;

        };

        // messages
        ui.alerts.closeMessage = function (win) {

            ui.removeClass(win, ui.alerts.nameShowEase);
            setTimeout(() => {

                ui.removeClass(win, ui.alerts.nameShow);

                if (win.parentNode !== null) {
                    win.parentNode.removeChild(win);
                }

            }, ui.globals.ease);

        };

        ui.alerts.message = function (props) {

            /*
            props list:
                props.msg
                props.pos
                props.theme
            */

            if (props === undefined) { return; }
            if (props.msg === undefined) { return; }

            // detect position
            const arrPos = [ui.alerts.posTopRight, ui.alerts.posTopLeft, ui.alerts.posBottomRight, ui.alerts.posBottomLeft];

            if (arrPos.indexOf(props.pos) < 0) {
                props.pos = ui.alerts.posDefault;
            }

            // detect theme
            let msgStyles = '';
            const arrTheme = [ui.alerts.themeSuccess, ui.alerts.themeWarning, ui.alerts.themeDanger];

            if (arrTheme.indexOf(props.theme) > -1) {
                msgStyles += ui.alerts.nameMsgThemePrefix + props.theme + ' ';

            } else if (ui.alerts.stylesMsgTheme !== '') {
                msgStyles += ui.alerts.stylesMsgTheme + ' ';
            }

            // create message
            let holder = ui.find('.' + ui.alerts.nameMsgHolder)[0];
            let html = '';

            if (holder === undefined) {
                html += '<div class="' + ui.alerts.nameMsgHolder + '">';
            }

            msgStyles += ui.alerts.stylesMsg;

            html += '<div class="' + ui.alerts.targetMsg + ' ' + ui.alerts.namePosPrefix + props.pos + ' ' + msgStyles + '">' +
                        props.msg +
                    '</div>';

            if (holder === undefined) {

                html += '</div>';
                ui.find('body')[0].insertAdjacentHTML('beforeend', html);

            } else {

                holder = ui.find('.' + ui.alerts.nameMsgHolder)[0];
                holder.insertAdjacentHTML('beforeend', html);

            }

            // show message
            const message = ui.find('.' + ui.alerts.targetMsg + ':last-child');
            ui.addClass(message, ui.alerts.nameShow);

            setTimeout(() => {

                ui.addClass(message, ui.alerts.nameShowEase);

                // move same position elements
                if (holder !== undefined) {

                    const prev = ui.find('.' + ui.alerts.targetMsg + '.' + ui.alerts.namePosPrefix + props.pos);
                    Array.prototype.forEach.call(prev,

                        (el, j, arr) => {

                            let slide = 0;

                            for (let i = (j + 1); i < arr.length; i++) {
                                slide += (prev[i].offsetHeight + 10);
                            }

                            if (props.pos === ui.alerts.posBottomRight || props.pos === ui.alerts.posBottomLeft) {
                                slide = -1 * slide;
                            }

                            prev[j].style.transform = 'translateY(' + slide + 'px)';

                        });

                }

                // auto close messages
                messageQueue.push(message);

                setTimeout(() => { // for manually closing messages by user

                    if (messageQueue[0] === undefined) { return; }

                    ui.alerts.closeMessage(messageQueue[0][0]);
                    messageQueue.shift();

                }, ui.alerts.messageTimer);

            }, 10);

        };

        // Event Listeners
        ui.on(document,
            'click',

            '.' + ui.alerts.targetMsg,

            function () {

                Array.prototype.forEach.call(messageQueue,

                    (el, i) => {

                        if (el[0] === this) {
                            messageQueue.splice(i, 1);
                        }

                    });

                ui.alerts.closeMessage(this);

            });

    };

    // loaders
    ui.onload(ui.alerts.Start);

})();

/* calendar */

ui.calendar = {

    // targets
    target: 'ui-calendar',

    // main classnames
    nameContainer: 'ui-calendar-container',
    nameTitle: 'ui-calendar-title',
    nameDetails: 'ui-calendar-details',

    namePickerOpened: 'ui-calendar-picker-opened',
    namePicker: 'ui-calendar-picker',
    namePickerTop: 'ui-calendar-picker-t',
    namePickerLeft: 'ui-calendar-picker-l',

    namePanel: 'ui-calendar-panel',
    nameShowPanel: 'ui-calendar-show-panel',
    namePanelCall: 'ui-calendar-panel-call',

    nameMonth: 'ui-calendar-month',
    nameYear: 'ui-calendar-year',

    namePrev: 'ui-calendar-prev',
    nameNext: 'ui-calendar-next',

    nameToday: 'ui-calendar-today',
    namePickerDay: 'ui-calendar-pickerday',
    namePassiveDay: 'ui-calendar-days-passive',

    nameWeekend: 'ui-calendar-fill-weekends',

    nameToggleDetails: 'ui-calendar-toggle-details',
    nameShowDetails: 'ui-calendar-show-details',
    nameHasDetails: 'ui-calendar-has-details',
    nameEmptyDetails: 'ui-calendar-details-empty',

    // helper classnames
    nameOpen: 'ui-open',
    nameOpenEase: 'ui-open-ease',

    nameActive: 'ui-active',
    nameSelected: 'ui-selected',

    // outer classnames
    nameIcon: 'ui-icon',
    nameHover: 'ui-hover',
    nameRound: 'ui-round',

    // styling classnames
    stylesCalendar: 'ui-ease-calendar',
    stylesTitle: 'ui-ease-bg',

    stylesContainer: 'ui-ease-layout ui-ease-slow ui-ease-in-out',
    stylesPanel: 'ui-ease-layout ui-ease-slow ui-ease-in-out',

    stylesToday: 'ui-theme-sub ui-fill-dark-100',
    stylesPickerDay: 'ui-theme-red ui-fill-dark-100',

    stylesDetailScroll: 'ui-scrollbar-faded',

    // icons
    prevIcon: 'arrow-left', // header's previous button
    nextIcon: 'arrow-right', // header's next button
    backIcon: 'angle-left', // detail's back button

    // values
    pickerSep: '/',

    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],

    dateFormat: 1, // 0: dd mm yyyy, 1: mm dd yyyy
    startDayofWeek: 1, // 0: Sunday, 1: Monday

    setPrev: 'prev',
    setNext: 'next',

    fillWeekends: true, // true: fills dark color to weekends' background

    calendarPadding: 5,
    scrollbarSize: 15,

    // data attributes
    dataDate: 'data-ui-date',
    dataSrc: 'data-ui-src',

    dataDay: 'data-ui-day',
    dataD: 'data-ui-d',

    // custom events
    eventClose: 'ui:pickerClose',
    eventChange: 'ui:pickerChange'

};

// first loading
ui.calendar.Start = () => {

    // get calendar's date
    function getAttr(that, date, newDate) {

        let attr = that.getAttribute(ui.calendar.dataDate);
        if (attr !== null && attr !== '') {

            attr = attr.split(',');
            if (attr.length === 1) { // set only month

                if (!isNaN(Number(attr[0])) && attr[0].length <= 2) {

                    if (attr[0] === '0') {
                        attr[0] = 1;
                    }

                    date.setMonth(attr[0] - 1);

                }

            } else if (attr.length === 2) { // set year and month

                if (!isNaN(Number(attr[0])) && attr[0].length === 4) {
                    if (!isNaN(Number(attr[1])) && attr[1].length <= 2) {

                        date.setFullYear(attr[0]);

                        if (attr[1] === '0') {
                            attr[1] = 1;
                        }

                        date.setMonth(attr[1] - 1);

                    }
                }

            }

            if (newDate === undefined) {
                attr = attr.toString();

            } else {
                attr = newDate.toString();
            }

            if (attr === ui.calendar.setPrev) {
                date.setMonth(date.getMonth() - 1);

            } else if (attr === ui.calendar.setNext) {
                date.setMonth(date.getMonth() + 1);
            }

        }

    }

    // get picker value
    const pickerVal = (that) => {

        if (that.value !== '') {

            const val = that.value.split(ui.calendar.pickerSep);

            if (val.length === 3 && val[0].length <= 2 && val[1].length <= 2 && val[2].length === 4) {

                if (!isNaN(val[0]) && !isNaN(val[1]) && !isNaN(val[2])) {

                    if (ui.calendar.dateFormat === 1) {
                        return Number(val[2]) + ',' + Number(val[0] - 1) + ',' + Number(val[1]); // mm dd yyyy
                    }

                    return Number(val[2]) + ',' + Number(val[1] - 1) + ',' + Number(val[0]); // dd mm yyyy

                }

            }

            return '';

        }

    };

    // create calendar table
    function createFnc(that, newDate, picker) {

        const date = new Date();
        date.setDate(1); // for the prev and next implementations

        let pickerDay = '';

        // set new date
        if (newDate !== undefined) {

            if (newDate === ui.calendar.setPrev || newDate === ui.calendar.setNext) {

                if (picker) { // called from picker
                    pickerDay = pickerVal(picker); // check value
                }

                getAttr(that, date, newDate); // get date

            } else {

                newDate = newDate.split(',');

                date.setFullYear(newDate[0]);
                date.setMonth(newDate[1]);

                if (newDate[2] !== undefined) { // defined a new day from picker
                    pickerDay = Number(newDate[0]) + ',' + Number(newDate[1]) + ',' + Number(newDate[2]);
                }

            }

        } else {
            getAttr(that, date); // get date
        }

        // set new date
        that.setAttribute(ui.calendar.dataDate, date.getFullYear() + ',' + (date.getMonth() + 1));

        // create table
        let html = '';
        let container = ui.find('.' + ui.calendar.nameContainer, that)[0];

        if (container === undefined) {
            html += '<div class="' + ui.calendar.nameContainer + ' ' + ui.calendar.stylesContainer + '">';
        }

        html += '<table';

        if (ui.calendar.fillWeekends) {
            html += ' class="' + ui.calendar.nameWeekend + '"';
        }

        html += '>' +
        '<caption>' +

            '<button type="button" tabindex="-1" class="' + ui.calendar.namePrev + '">';

        if (ui.globals.inlineSvg) {
            html += '<svg class="' + ui.calendar.nameIcon + '" viewBox="' + ui.globals.inlineSvgViewBox + '">' + ui.calendar.prevIcon;

        } else {
            html += '<svg class="' + ui.calendar.nameIcon + '"><use href="' + ui.globals.iconSrc + '#' + ui.calendar.prevIcon + '"/>';
        }

        html += '</svg>' +

            '</button>' +

            '<span class="' + ui.calendar.nameTitle + ' ' + ui.calendar.stylesTitle + '">' +
                '<button type="button" tabindex="-1" class="' + ui.calendar.nameMonth + '">' + ui.calendar.months[date.getMonth()] + '</button>' +
                '<button type="button" tabindex="-1" class="' + ui.calendar.nameYear + '">' + date.getFullYear() + '</button>' +
            '</span>' +

            '<button type="button" tabindex="-1" class="' + ui.calendar.nameNext + '">';

        if (ui.globals.inlineSvg) {
            html += '<svg class="' + ui.calendar.nameIcon + '" viewBox="' + ui.globals.inlineSvgViewBox + '">' + ui.calendar.nextIcon;

        } else {
            html += '<svg class="' + ui.calendar.nameIcon + '"><use href="' + ui.globals.iconSrc + '#' + ui.calendar.nextIcon + '"/>';
        }

        html += '</svg>' +

            '</button>' +

        '</caption>' +
        '<thead>';

        if (ui.calendar.startDayofWeek === 0) { // Sunday
            html += '<th>' + ui.calendar.days[ui.calendar.days.length - 1] + '</th>';
        }

        Array.prototype.forEach.call(ui.calendar.days,

            item => {
                html += '<th>' + item + '</th>';
            });

        html += '</thead>' +
                '<tbody>';

        let sysDays;
        let firstDay = new Date(date.getFullYear(), date.getMonth(), 1);

        if (ui.calendar.startDayofWeek === 0) { // Sunday

            sysDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']; // don't update to your language
            firstDay = sysDays.indexOf(sysDays[firstDay.getDay()]);

        } else { // Monday

            sysDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']; // don't update to your language
            firstDay = sysDays.indexOf(sysDays[firstDay.getDay() - 1]);

        }

        if (firstDay < 1) { firstDay = 7; }

        let prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
        let days = prevLastDay - (firstDay - 1);

        const lastDay = new Date(date.getFullYear(), (date.getMonth() + 1), 0).getDate();

        let activeDay = false;
        const today = new Date().getFullYear() + ' ' + new Date().getMonth() + ' ' + new Date().getDate();

        for (let i = 0; i < 6; i++) {

            html += '<tr>';

            for (let j = 0; j < 7; j++) {

                if (days > prevLastDay) {

                    days = 1;
                    prevLastDay = lastDay;

                    if (i < 2) {
                        activeDay = true;

                    } else {
                        activeDay = false;
                    }

                }

                if (activeDay) {

                    if (date.getFullYear() + ' ' + date.getMonth() + ' ' + days === today) { // today

                        let todayStyles = '';

                        if (ui.calendar.stylesToday !== '') {
                            todayStyles = ui.calendar.stylesToday + ' ' + ui.calendar.nameHover;
                        }

                        html += '<td class="' + ui.calendar.nameToday + '">' +
                                    '<button class="' + todayStyles + '" type="button" tabindex="-1">' + days + '</button>' +
                                '</td>';

                    } else { // other days

                        if (pickerDay !== '') { // defined a new day from picker

                            if (date.getFullYear() + ',' + date.getMonth() + ',' + days === pickerDay) {

                                let pickerDayStyles = '';

                                if (ui.calendar.pickerDayStyles !== '') {
                                    pickerDayStyles = ui.calendar.stylesPickerDay + ' ' + ui.calendar.nameHover;
                                }

                                html += '<td ' + ui.calendar.dataDay + '="' + days + '" class="' + ui.calendar.namePickerDay + '">' +
                                            '<button class="' + pickerDayStyles + '" type="button" tabindex="-1">' + days + '</button>' +
                                        '</td>';

                            } else {

                                html += '<td ' + ui.calendar.dataDay + '="' + days + '">' +
                                            '<button type="button" tabindex="-1">' + days + '</button>' +
                                        '</td>';
                            }

                        } else {

                            html += '<td ' + ui.calendar.dataDay + '="' + days + '">' +
                                        '<button type="button" tabindex="-1">' + days + '</button>' +
                                    '</td>';

                        }

                    }

                } else { // passive days
                    html += '<td class="' + ui.calendar.namePassiveDay + '">' +
                                '<span>' + days + '</span>' +
                            '</td>';
                }

                days += 1;

            }

            html += '</tr>';

        }

        html += '</tbody>' +
            '</table>';

        if (container === undefined) {

            html += '</div>';
            that.insertAdjacentHTML('afterbegin', html);

        } else {

            container.innerHTML = '';
            container.insertAdjacentHTML('afterbegin', html);

        }

        // check details
        const src = that.getAttribute(ui.calendar.dataSrc);
        if (src !== null && src !== '') {

            let details = '';

            // get json data with ajax
            ui.ajax({

                url : src,
                callback: (status, response) => {

                    if (status === 'success') {

                        response = JSON.parse(response);
                        if (response.length === 'undefined') { return; }

                        Array.prototype.forEach.call(response,

                            item => {

                                if (item === null) { return; }

                                if (Number(item.year) === date.getFullYear()) {
                                    if (Number(item.month) === date.getMonth() + 1) {

                                        // select detailed days
                                        const dday = ui.find('[' + ui.calendar.dataDay + '="' + item.day + '"]', that);
                                        ui.addClass(dday, ui.calendar.nameToggleDetails);

                                        // create details html
                                        details += '<li ' + ui.calendar.dataD + '="' + item.day + '">' +
                                                        '<strong>' + item.day + '</strong>' +
                                                        '<b>' + item.dayName + '</b><br>';

                                        for (let key in item.details) {

                                            details += '<span>' +
                                                            '<i>' + key + '</i> ' +
                                                            item.details[key] +
                                                        '</span>';

                                        }

                                        details += '</li>';

                                    }
                                }

                            });

                        container = ui.find('.' + ui.calendar.nameContainer, that)[0];

                        if (ui.hasClass(that, ui.calendar.nameShowDetails)) {

                            setTimeout(() => {
                                ui.addClass(ui.find('.' + ui.calendar.nameDetails, container), ui.calendar.nameOpen);
                            }, 10);

                        }

                        if (details !== '') {

                            let detailsTemp;

                            detailsTemp = '<div class="' + ui.calendar.nameDetails + '">' +
                                            '<button class="' + ui.calendar.nameToggleDetails + '" type="button" tabindex="-1">';

                            if (ui.globals.inlineSvg) {
                                detailsTemp += '<svg class="' + ui.calendar.nameIcon + '" viewBox="' + ui.globals.inlineSvgViewBox + '">' + ui.calendar.backIcon;

                            } else {
                                detailsTemp += '<svg class="' + ui.calendar.nameIcon + '"><use href="' + ui.globals.iconSrc + '#' + ui.calendar.backIcon + '"/>';
                            }

                            detailsTemp += '</svg>' +

                                        '</button>' +
                                        '<ul class="' + ui.calendar.stylesDetailScroll + '">' + details + '</ul>' +
                                    '</div>';

                            ui.addClass(container, ui.calendar.nameHasDetails); // enable buttons click event

                            details = detailsTemp;
                            detailsTemp = '';

                        } else {

                            details = '<div class="' + ui.calendar.nameDetails + ' ' + ui.calendar.nameEmptyDetails + '">' +
                                            '<button class="' + ui.calendar.nameToggleDetails + '" type="button" tabindex="-1">';

                            if (ui.globals.inlineSvg) {
                                details += '<svg class="' + ui.calendar.nameIcon + '" viewBox="' + ui.globals.inlineSvgViewBox + '">' + ui.calendar.backIcon;

                            } else {
                                details += '<svg class="' + ui.calendar.nameIcon + '"><use href="' + ui.globals.iconSrc + '#' + ui.calendar.backIcon + '"/>';
                            }

                            details += '</svg>' +

                                            '</button>' +
                                            '<ul>' +
                                                '<li>' +
                                                    '<strong></strong>' +
                                                    '<b></b><br>' +
                                                    '<span></span>' +
                                                    '<span></span>' +
                                                    '<span></span>' +
                                                '</li>' +
                                            '</ul>' +
                                        '</div>';

                            ui.removeClass(container, ui.calendar.nameHasDetails); // disable buttons click event

                        }

                        container.insertAdjacentHTML('afterbegin', details);
                        details = '';

                    }

                }

            });

        }

        html = '';
        ui.addClass(that, ui.calendar.nameActive);

    }

    // ckeck not loaded calendars
    ui.calendar.Init = () => {

        const calendars = ui.find('.' + ui.calendar.target + ':not(.' + ui.calendar.nameActive + ')');

        if (calendars.length > 0) {
            Array.prototype.forEach.call(calendars, el => { createFnc(el); });
        }

    };
    ui.calendar.Init();

    // Event Listeners
    // calendar navigation
    ui.on(document,
        'click',

        '.' + ui.calendar.namePrev + ',.' + ui.calendar.nameNext,

        function () {

            const that = ui.closest(this, '.' + ui.calendar.target)[0];
            const picker = ui.closest(that, '.' + ui.calendar.namePicker)[0]; // check called from picker

            let form;

            if (ui.hasClass(this, ui.calendar.nameNext)) {

                if (picker === undefined) {
                    createFnc(that, ui.calendar.setNext);

                } else { // picker

                    form = ui.find('[type="text"]', picker)[0];
                    createFnc(that, ui.calendar.setNext, form);

                }

            } else {

                if (picker === undefined) {
                    createFnc(that, ui.calendar.setPrev);

                } else { // picker

                    form = ui.find('[type="text"]', picker)[0];
                    createFnc(that, ui.calendar.setPrev, form);

                }

            }

        });

    // change month and year with panel
    ui.on(document,
        'click',

        '.' + ui.calendar.nameMonth + ',.' + ui.calendar.nameYear,

        function () {

            let panelType;

            const date = new Date();
            const that = ui.closest(this, '.' + ui.calendar.target)[0];

            getAttr(that, date);

            // create panel
            let html = '<div class="' + ui.calendar.namePanel + ' ' + ui.calendar.stylesPanel + '">' +
                        '<ul>';

            if (ui.hasClass(this, ui.calendar.nameYear)) { // years

                panelType = 'year';

                const year = date.getFullYear();
                const years = 1920 + (new Date().getFullYear() - 1920) + 100;

                for (let i = 1920; i <= years; i++) {

                    html += '<li>' +
                                '<button type="button" tabindex="-1" ';

                    if (year === i) {
                        html += 'class="' + ui.calendar.namePanelCall + ' ' + ui.calendar.nameSelected + '" ';

                    } else {
                        html += 'class="' + ui.calendar.namePanelCall + '" ';
                    }

                    html += 'name="' + i + '">' + i + '</button>' +
                        '</li>';

                }

            } else { // months

                panelType = 'month';
                const month = ui.calendar.months[date.getMonth()];

                Array.prototype.forEach.call(ui.calendar.months,

                    (item, i) => {

                        html += '<li>' +
                                    '<button type="button" tabindex="-1" ';

                        if (month === item) {
                            html += 'class="' + ui.calendar.namePanelCall + ' ' + ui.calendar.nameSelected + '" ';

                        } else {
                            html += 'class="' + ui.calendar.namePanelCall + '" ';
                        }

                        html += 'name="' + i + '">' + item + '</button>' +
                            '</li>';

                    });

            }

            html += '</ul>' +
                '</div>';

            // show panel
            that.insertAdjacentHTML('afterbegin', html);
            html = '';

            // animate panel
            setTimeout(() => {

                ui.addClass(that, ui.calendar.nameShowPanel);

                // scroll to active year
                if (panelType === 'year') {

                    let getList = ui.find('.' + ui.calendar.target + ' .' + ui.calendar.namePanel + ' .' + ui.calendar.namePanelCall, that);
                    const getSelected = ui.find('.' + ui.calendar.target + ' .' + ui.calendar.namePanel + ' .' + ui.calendar.namePanelCall + '.' + ui.calendar.nameSelected, that)[0];

                    const getIndex = Math.floor(Array.prototype.slice.call(getList).indexOf(getSelected) / 12);
                    ui.find('.' + ui.calendar.namePanel, that)[0].scrollTop = (getIndex * (that.offsetHeight - (ui.calendar.calendarPadding * 2))); // IE, EDGE: scrollTo() not supported for div element

                    getList = '';

                }

            }, 10);

        });

    // close panel
    ui.on(document,
        'click',

        '.' + ui.calendar.target + ' .' + ui.calendar.namePanel + ' .' + ui.calendar.namePanelCall,

        function () {

            const date = new Date();
            const that = ui.closest(this, '.' + ui.calendar.target)[0];

            getAttr(that, date);
            ui.removeClass(that, ui.calendar.nameShowPanel);

            if (!ui.hasClass(this, ui.calendar.nameSelected)) { // check user selected different date

                if (this.name.length === 4) { // selected year
                    createFnc(that, this.name + ',' + date.getMonth());

                } else { // selected month
                    createFnc(that, date.getFullYear() + ',' + this.name);
                }
            }

            setTimeout(() => {
                that.removeChild(ui.find('.' + ui.calendar.namePanel, that)[0]);
            }, ui.globals.slow);

        });

    // close picker
    function pickerCloseFnc(type, target) {

        ui.removeClass(document, ui.calendar.namePickerOpened);
        const allPickers = ui.find('.' + ui.calendar.namePicker + ' .' + ui.calendar.target);

        function removePicker(form, picker) {

            form.removeChild(picker);
            ui.removeClass(form, ui.calendar.namePickerLeft + ' ' + ui.calendar.namePickerTop);

        }

        if (type === 'continuous') { // when the user holds the tab button continuously

            Array.prototype.forEach.call(allPickers,

                (item, i) => {

                    ui.removeClass(item, ui.calendar.nameOpenEase);

                    setTimeout(() => {

                        const that = ui.find('.' + ui.calendar.namePicker + ' .' + ui.calendar.target)[i];
                        if (that === undefined) { return; }

                        const form = that.parentElement;
                        removePicker(form, that);

                    }, ui.globals.ease);

                });

        } else {

            Array.prototype.forEach.call(allPickers,

                item => {

                    const form = item.parentElement;

                    ui.removeClass(item, ui.calendar.nameOpenEase);

                    setTimeout(() => {
                        removePicker(form, item);
                    }, ui.globals.ease);

                });

        }

        // remove event listeners
        ui.off('body', 'mousedown.' + ui.calendar.eventClose);
        ui.off(target, 'keydown.' + ui.calendar.eventClose + ' keyup.' + ui.calendar.eventChange);

    }

    // show picker
    ui.on(document,
        'focus',

        '.' + ui.calendar.namePicker + ' > [type="text"]',

        function () {

            // check duplicate
            const form = this.parentElement;
            if (ui.find('.' + ui.calendar.target, form).length > 0) { return; }

            ui.addClass(document, ui.calendar.namePickerOpened);

            // remove event listeners
            ui.off('body', 'mousedown.' + ui.calendar.eventClose);
            ui.off(this, 'keydown.' + ui.calendar.eventClose + ' keyup.' + ui.calendar.eventChange);

            // create picker
            let html = '<div class="' + ui.calendar.target;

            if (ui.hasClass(form, ui.calendar.nameRound)) {
                html += ' ' + ui.calendar.nameRound;
            }

            html += ' ' + ui.calendar.stylesCalendar + '">' +
                '</div>';

            form.insertAdjacentHTML('beforeend', html);

            const picker = ui.find('.' + ui.calendar.target, form)[0];

            // check value
            let inputDate = pickerVal(this);

            if (inputDate === '') {
                createFnc(picker);

            } else {
                createFnc(picker, inputDate);
            }

            // check picker position
            const offset = form.getBoundingClientRect();

            const formHeight = form.offsetHeight;
            const pickerWidth = picker.offsetWidth;
            const pickerHeight = picker.offsetHeight;

            if (offset.left + pickerWidth + ui.calendar.scrollbarSize > window.innerWidth) {

                if ((offset.left - (pickerWidth - form.offsetWidth) - ui.calendar.scrollbarSize) > 0) {
                    ui.addClass(form, ui.calendar.namePickerLeft);
                }

            }

            if (offset.top + parseInt(formHeight + pickerHeight) >= window.innerHeight) {

                if (offset.top - parseInt(formHeight + pickerHeight) + formHeight > 0) {
                    ui.addClass(form, ui.calendar.namePickerTop);
                }

            }

            // show picker
            setTimeout(() => {
                ui.addClass(picker, ui.calendar.nameOpenEase);
            }, 10);

            // close event listeners
            ui.on(document,
                'mousedown.' + ui.calendar.eventClose,

                (ev) => {

                    // prevent for picker elements
                    if (ui.closest(ev.target, form)[0] !== undefined) {
                        return;
                    }

                    if (ev.button !== 2) { // inherited right clicks
                        pickerCloseFnc('default', this);
                    }

                });

            ui.on(this,
                'keydown.' + ui.calendar.eventClose,

                function (ev) {

                    if (ev.keyCode === 9 || ev.keyCode === 13 || ev.keyCode === 27) { // Tab || Enter || Esc
                        pickerCloseFnc('continuous', this);
                    }

                });

            // change event
            ui.on(this,
                'keyup.' + ui.calendar.eventChange,

                function () {

                    inputDate = pickerVal(this); // check value

                    if (inputDate === '') {
                        createFnc(picker);

                    } else {
                        createFnc(picker, inputDate);
                    }

                });

        });

    // picker buttons
    ui.on(document,
        'click',

        '.' + ui.calendar.namePicker + ' .' + ui.calendar.target + ' tbody td button',

        function () {

            const date = new Date();
            const picker = ui.closest(this, '.' + ui.calendar.namePicker)[0];

            const that = ui.find('.' + ui.calendar.target, picker)[0];
            const form = ui.find('[type="text"]', picker)[0];

            getAttr(that, date); // get date
            date.setDate(this.textContent); // set new day

            // set values to input form
            let day = date.getDate().toString();

            if (day.length === 1) {
                day = '0' + day;
            }

            let month = date.getMonth();
            month += 1;

            month = month.toString();
            if (month.length === 1) { month = '0' + month; }

            if (ui.calendar.dateFormat === 1) {
                form.value = month + ui.calendar.pickerSep + day + ui.calendar.pickerSep + date.getFullYear(); // mm dd yyyy

            } else {
                form.value = day + ui.calendar.pickerSep + month + ui.calendar.pickerSep + date.getFullYear(); // dd mm yyyy
            }

            // close picker
            pickerCloseFnc('default', form);

        });

    // toggle details
    ui.on(document,
        'click',

        '.' + ui.calendar.target + ' .' + ui.calendar.nameToggleDetails,

        function () {

            const that = ui.closest(this, '.' + ui.calendar.target)[0];
            const details = ui.find('.' + ui.calendar.nameDetails, that)[0];

            if (ui.hasClass(that, ui.calendar.nameShowDetails)) {

                ui.removeClass(that, ui.calendar.nameShowDetails);

                setTimeout(() => {
                    ui.removeClass(details, ui.calendar.nameOpen);
                }, ui.globals.ease * 2);

            } else {

                ui.addClass(details, ui.calendar.nameOpen);

                setTimeout(() => {
                    ui.addClass(that, ui.calendar.nameShowDetails);
                }, 10);

                let scroll = 0;

                const day = this.getAttribute(ui.calendar.dataDay);
                const list = ui.find('.' + ui.calendar.nameDetails + ' li', that);

                for (let i = 0; i < list.length; i++) {

                    if (list[i].getAttribute(ui.calendar.dataD) === day) { break; }
                    scroll += list[i].offsetHeight + ui.calendar.calendarPadding;

                }

                ui.find('ul', details)[0].scrollTop = scroll; // IE, EDGE: scrollTo() not supported for div element

            }

        });

};

// loaders
ui.onload(ui.calendar.Start);

// ajax callback loader
ui.on(document,
    ui.globals.eventAjaxCallback,

    () => {

        if (ui.ajax.classNames.indexOf(ui.calendar.target) > -1) {
            ui.calendar.Init();
        }

    });

/* carousel */

ui.carousel = {

    // targets
    target: 'ui-carousel',

    targetGallery: 'ui-carousel-gallery',
    targetSlider: 'ui-carousel-slider',
    targetNav: 'ui-carousel-nav',

    // main classnames
    nameTouchMove: 'ui-carousel-touchmove',
    nameHalfSize: 'ui-carousel-half',

    nameAnimate: 'ui-carousel-animate',
    nameContent: 'ui-carousel-content',

    namePrev: 'ui-carousel-prev',
    nameNext: 'ui-carousel-next',
    nameDots: 'ui-carousel-dots',

    nameGalleryDetail: 'ui-carousel-gallery-detail',
    nameGalleryDetailLoader: 'ui-carousel-gallery-detail-loader',

    nameGalleryThumbs: 'ui-carousel-gallery-thumbs',

    // helper classnames
    nameShow: 'ui-show',
    nameFaded: 'ui-faded',
    nameActive: 'ui-active',

    nameResized: 'ui-resized',

    nameFiltered: 'ui-filtered',
    nameNavSelected: 'ui-selected',
    nameGallerySelected: 'ui-selected',

    // outer classnames
    namePhoto: 'ui-photo',

    nameScroll: 'ui-scroll',
    nameScrollV: 'ui-scroll-v',
    nameScrollH: 'ui-scroll-h',

    nameEaseFast: 'ui-ease-fast',
    nameEaseSlow: 'ui-ease-slow',
    nameEaseSlow2x: 'ui-ease-slow-2x',
    nameEaseSlow3x: 'ui-ease-slow-3x',
    nameEaseSlow4x: 'ui-ease-slow-4x',
    nameEaseSlow5x: 'ui-ease-slow-5x',

    nameNoEffects: 'ui-no-effects',

    // styling classnames
    stylesDots: 'ui-ease-all ui-ease-slow',

    // tags
    tagDots: 'i',

    // values
    halfSize: 0.5, // set percent of default half size
    defaultSlideTimer: 8000,

    touchMoveToleranceX: 15,
    touchMoveToleranceY: 25,

    // data attributes
    dataCols: 'data-ui-col',
    dataColsXL: 'data-ui-col-xl',
    dataColsLG: 'data-ui-col-lg',
    dataColsMD: 'data-ui-col-md',
    dataColsSM: 'data-ui-col-sm',
    dataColsXS: 'data-ui-col-xs',

    dataID: 'data-ui-id',

    dataAnimate: 'data-ui-animate',
    dataContent: 'data-ui-content',
    dataCount: 'data-ui-count',
    dataSlide: 'data-ui-slide',
    dataHref: 'data-ui-href',

    // custom events
    eventTouchEnd: 'ui:carouselTouchEnd',
    eventTouchCancel: 'ui:carouselTouchCancel'

};

(() => {

    let
        getCols,
        carouselResizer,
        idCount = 0,

        cols = [],

        colsXL = [],
        colsLG = [],
        colsMD = [],
        colsSM = [],
        colsXS = [],

        counts = [],
        contentsEase = [],

        autoSlider = [],
        autoTimer = [],

        resizeTimer,

        isScrollingTimer,
        isScrolling = false,

        touchStarted = false;

    getCols = (i) => {

        let col;

        if (window.innerWidth >= ui.globals.xl) {
            col = colsXL[i];

        } else if (window.innerWidth < ui.globals.xl && window.innerWidth >= ui.globals.lg) {
            col = colsLG[i];

        } else if (window.innerWidth <= ui.globals.md && window.innerWidth > ui.globals.sm) {
            col = colsMD[i];

        } else if (window.innerWidth <= ui.globals.sm && window.innerWidth > ui.globals.xs) {
            col = colsSM[i];

        } else if (window.innerWidth <= ui.globals.xs) {
            col = colsXS[i];

        } else {
            col = cols[i];
        }

        return col;

    };

    function carouselAnimate(content, wait, type) {

        let time = content.getAttribute(ui.carousel.dataAnimate);
        if (time !== null) {

            if (time === '') {
                time = ui.globals.ease;
            }

            let i = 0;
            const elems = ui.find('.' + ui.carousel.nameAnimate, content);

            if (elems.length === 0) { return; }

            if (ui.closest(content, '.' + ui.carousel.nameResized)[0] !== undefined) { // detect carousel is resizing
                return;
            }

            if (type === 'static') {
                ui.removeClass(elems, ui.carousel.nameShow);
            }

            setTimeout(() => { // wait for dom loading or slider ease time

                function show() {

                    setTimeout(() => {

                        ui.addClass(elems[i], ui.carousel.nameShow);
                        i += 1;

                        if (i < elems.length) { show(); }

                    }, time);

                }
                show();

            }, wait);

        }

    }

    function filterDots(navDots, navDotsEl, count, i) {

        ui.removeClass(navDots, ui.carousel.nameFiltered);
        ui.removeClass(navDotsEl, ui.carousel.nameShow + ' ' + ui.carousel.nameFaded);

        const col = getCols(i); // get responsive cols

        ui.addClass(navDots, ui.carousel.nameFiltered);

        if ((count - 1) > -1) {

            ui.addClass(navDotsEl[count - 1], ui.carousel.nameShow);

            if ((count - 2) > -1) {
                ui.addClass(navDotsEl[count - 2], ui.carousel.nameFaded);
            }

        }

        if ((count + col) < navDotsEl.length) {

            ui.addClass(navDotsEl[count + 1], ui.carousel.nameShow);

            if ((count + col + 1) < navDotsEl.length) {
                ui.addClass(navDotsEl[count + 2], ui.carousel.nameFaded);
            }

        }

    }

    function carouselModifier(i, that, type) {

        const contents = ui.find('.' + ui.carousel.nameContent, that);
        if (contents.length === 0) { return; }

        const nav = ui.find('.' + ui.carousel.targetNav, that)[0];
        if (nav === undefined) { return; }

        const col = getCols(i); // get responsive cols

        if (contents.length <= col) { // toggle nav
            nav.style.display = 'none';

        } else { nav.style.display = ''; }

        const halfSized = ui.hasClass(that, ui.carousel.nameHalfSize);
        const slider = ui.find('.' + ui.carousel.targetSlider, that);

        let size = col;

        if (halfSized && col > 1 && col !== contents.length) {
            size -= ui.carousel.halfSize;
        }

        size = Math.round(that.offsetWidth / size);

        Array.prototype.forEach.call(contents,

            item => {
                item.style.width = size + 'px';
            });

        size = size * contents.length;
        slider[0].style.width = size + 'px';

        if (contents.length / col === 1) { // check nav is active
            counts[i] = 0;

        } else if (col !== 1 && counts[i] > col) { // check current count larger than current col size
            counts[i] = col;
        }

        that.setAttribute(ui.carousel.dataContent, (counts[i] + 1));
        slider[0].style.transform = 'translateX(-' + (counts[i] * contents[0].offsetWidth) + 'px)';

        const navDots = ui.find('.' + ui.carousel.targetNav + ' .' + ui.carousel.nameDots, that);
        const navDotsEl = ui.find('.' + ui.carousel.targetNav + ' .' + ui.carousel.nameDots + ' i', that);

        ui.removeClass(navDotsEl, ui.carousel.nameNavSelected);
        ui.addClass(navDotsEl[counts[i]], ui.carousel.nameNavSelected);

        filterDots(navDots, navDotsEl, counts[i], i); // filter dots when dots number exceeds

        Array.prototype.forEach.call(contents,

            (item, l) => { // detect carousel animates

                if (l + 1 > col) { return; }
                carouselAnimate(item, (ui.globals.ease * 2), type);

            });

    }

    function getSlideSpeed(slider, ease, i) {

        ease = ui.globals.ease;

        if (ui.hasClass(slider, ui.carousel.nameEaseFast)) {
            ease = ui.globals.fast;

        } else if (ui.hasClass(slider, ui.carousel.nameEaseSlow)) {
            ease = ui.globals.slow;

        } else if (ui.hasClass(slider, ui.carousel.nameEaseSlow2x)) {
            ease = ui.globals.slow2x;

        } else if (ui.hasClass(slider, ui.carousel.nameEaseSlow3x)) {
            ease = ui.globals.slow3x;

        } else if (ui.hasClass(slider, ui.carousel.nameEaseSlow4x)) {
            ease = ui.globals.slow4x;

        } else if (ui.hasClass(slider, ui.carousel.nameEaseSlow5x)) {
            ease = ui.globals.slow5x;
        }

        contentsEase[i] = ease;

    }

    function carouselNav(that, direction) {

        const nav = ui.find('.' + ui.carousel.targetNav, that)[0];
        if (nav === undefined) { return; }

        const slider = ui.find('.' + ui.carousel.targetSlider, that);
        const contents = ui.find('.' + ui.carousel.nameContent, slider[0]);

        if (contents.length === 0) { return; }

        const i = Number(that.getAttribute(ui.carousel.dataID));
        if (i === null) { return; }

        const navDots = ui.find('.' + ui.carousel.targetNav + ' .' + ui.carousel.nameDots, that);
        const navDotsEl = ui.find('.' + ui.carousel.targetNav + ' .' + ui.carousel.nameDots + ' i', that);

        const col = getCols(i); // get responsive cols

        if (direction === 'next') {

            counts[i] += 1;

            if (counts[i] > contents.length - col) {
                counts[i] = 0;
            }

        } else if (direction === 'prev') {

            counts[i] -= 1;

            if (counts[i] < 0) {
                counts[i] = 0;
            }

        }

        that.setAttribute(ui.carousel.dataContent, (counts[i] + 1));

        ui.removeClass(navDotsEl, ui.carousel.nameNavSelected);
        ui.addClass(navDotsEl[counts[i]], ui.carousel.nameNavSelected);

        filterDots(navDots, navDotsEl, counts[i], i); // filter dots when dots number exceeds
        let slide = counts[i] * contents[0].offsetWidth;

        const halfSized = ui.hasClass(that, ui.carousel.nameHalfSize);

        if (halfSized && (counts[i] === contents.length - col)) {
            slide += contents[0].offsetWidth * ui.carousel.halfSize;
        }

        slider[0].style.transform = 'translateX(-' + slide + 'px)';
        getSlideSpeed(slider, contentsEase[i], i); // get carousel slide speed

        if (contents.length > 1 && contents.length !== col) { // stop reloading animates when content length is not enough

            Array.prototype.forEach.call(contents, item => { // detect carousel animates
                carouselAnimate(item, contentsEase[i], 'static');
            });

        }

    }

    carouselResizer = (e) => {

        if (touchStarted) { return; }

        if (e === 'resize' || e.type === 'resize') {

            Array.prototype.forEach.call(ui.find('.' + ui.carousel.target),

                el => {

                        const i = Number(el.getAttribute(ui.carousel.dataID));
                        if (i === null) { return; }

                        ui.addClass(el, ui.carousel.nameResized);
                        carouselModifier(i, el, 'resize');

                        const slider = ui.find('.' + ui.carousel.targetSlider, el)[0];

                        ui.addClass(el, ui.carousel.nameNoEffects);
                        ui.addClass(slider, ui.carousel.nameNoEffects);

                    });

                }

        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => { // wait auto slider until resize completed

            const that = ui.find('.' + ui.carousel.target);
            Array.prototype.forEach.call(that,

                el => {

                    const i = Number(el.getAttribute(ui.carousel.dataID));
                    if (i === null) { return; }

                    ui.removeClass(el, ui.carousel.nameResized);

                    if (autoTimer[i] !== null && autoTimer[i] !== undefined) {

                        clearInterval(autoSlider[i]);

                        autoSlider[i] = setInterval(() => {
                            carouselNav(that[i], 'next');
                        }, autoTimer[i]);

                    }

                    const slider = ui.find('.' + ui.carousel.targetSlider, el)[0];

                    ui.removeClass(el, ui.carousel.nameNoEffects);
                    ui.removeClass(slider, ui.carousel.nameNoEffects);

                });

        }, ui.globals.ease);

    };

    ui.carousel.Init = () => {

        const carousels = ui.find('.' + ui.carousel.target + ':not(.' + ui.carousel.nameActive + ')');
        if (carousels.length > 0) {

            // load carousels
            Array.prototype.forEach.call(carousels,

                el => {

                    // id
                    el.setAttribute(ui.carousel.dataID, idCount);

                    const j = idCount;
                    idCount += 1;

                    // cols
                    cols[j] = el.getAttribute(ui.carousel.dataCols);

                    colsXL[j] = el.getAttribute(ui.carousel.dataColsXL);
                    colsLG[j] = el.getAttribute(ui.carousel.dataColsLG);
                    colsMD[j] = el.getAttribute(ui.carousel.dataColsMD);
                    colsSM[j] = el.getAttribute(ui.carousel.dataColsSM);
                    colsXS[j] = el.getAttribute(ui.carousel.dataColsXS);

                    // col
                    if (cols[j] === null) {
                        cols[j] = 1;

                    } else {

                        cols[j] = Number(cols[j]);

                        if (!cols[j] || cols[j] === '0' || cols[j] === '') {
                            cols[j] = 1;
                        }

                    }

                    // xl
                    if (colsXL[j] === null) {
                        colsXL[j] = cols[j];

                    } else {

                        colsXL[j] = Number(colsXL[j]);

                        if (!colsXL[j] || colsXL[j] === '0' || colsXL[j] === '') {
                            colsXL[j] = cols[j];
                        }

                    }

                    // lg
                    if (colsLG[j] === null) {
                        colsLG[j] = cols[j];

                    } else {

                        colsLG[j] = Number(colsLG[j]);

                        if (!colsLG[j] || colsLG[j] === '0' || colsLG[j] === '') {
                            colsLG[j] = cols[j];
                        }

                    }

                    // md
                    if (colsMD[j] === null) {
                        colsMD[j] = cols[j];

                    } else {

                        colsMD[j] = Number(colsMD[j]);

                        if (!colsMD[j] || colsMD[j] === '0' || colsMD[j] === '') {
                            colsMD[j] = cols[j];
                        }

                    }

                    // sm
                    if (colsSM[j] === null) {
                        colsSM[j] = cols[j];

                    } else {

                        colsSM[j] = Number(colsSM[j]);

                        if (!colsSM[j] || colsSM[j] === '0' || colsSM[j] === '') {
                            colsSM[j] = cols[j];
                        }

                    }

                    // xs
                    if (colsXS[j] === null) {
                        colsXS[j] = cols[j];

                    } else {

                        colsXS[j] = Number(colsXS[j]);

                        if (!colsXS[j] || colsXS[j] === '0' || colsXS[j] === '') {
                            colsXS[j] = cols[j];
                        }

                    }

                    counts[j] = 0;

                    const contents = ui.find('.' + ui.carousel.nameContent, el);
                    if (contents.length === 0) { return; }

                    const nav = ui.find('.' + ui.carousel.targetNav, el)[0];
                    const navDots = ui.find('.' + ui.carousel.nameDots, nav)[0];

                    if (nav === undefined || navDots === undefined) { return; }

                    ui.addClass(el, ui.carousel.nameActive);
                    carouselModifier(j, el, 'static');

                    // create nav
                    const col = getCols(j); // get responsive cols

                    if (contents.length <= col) { // toggle nav
                        nav.style.display = 'none';

                    } else { nav.style.display = ''; }

                    let navDotsHtml = '';
                    navDots.innerHTML = '';

                    Array.prototype.forEach.call(contents,

                        () => {

                            navDotsHtml += '<' + ui.carousel.tagDots + ' ' +
                                                'class="' + ui.carousel.stylesDots + '">' +
                                        '</' + ui.carousel.tagDots + '>';

                        });

                    navDots.insertAdjacentHTML('beforeend', navDotsHtml);
                    const navDotsEl = ui.find('.' + ui.carousel.nameDots + ' i', nav);

                    counts[j] = 0;
                    el.setAttribute(ui.carousel.dataContent, (counts[j] + 1));

                    ui.removeClass(navDotsEl, ui.carousel.nameNavSelected);
                    ui.addClass(navDotsEl[counts[j]], ui.carousel.nameNavSelected);

                    filterDots(navDots, navDotsEl, counts[j], j); // filter dots when dots number exceeds

                    // auto slider
                    autoTimer[j] = el.getAttribute(ui.carousel.dataSlide);

                    if (autoTimer[j] !== null) {

                        if (autoTimer[j] === '') {
                            autoTimer[j] = ui.carousel.defaultSlideTimer;
                        }

                        const that = el;

                        autoSlider[j] = setInterval(() => {
                            carouselNav(that, 'next');
                        }, autoTimer[j]);

                    }

                });

            // carousel gallery loader
            Array.prototype.forEach.call(ui.find('.' + ui.carousel.targetGallery + ' .' + ui.carousel.nameGalleryThumbs),

                el => {

                    const images = ui.find('.' + ui.carousel.namePhoto, el);

                    if (images.length <= 1) {
                        el.style.display = 'none'; // hide thumbs when image length is 1 or 0
                    }

                });

        }

    };

    ui.carousel.Start = () => {

        ui.carousel.Init();

        // Event Listeners
        ui.on(document,
            'click',

            '.' + ui.carousel.namePrev + ',.' + ui.carousel.nameNext,

            function () {

                let direction;

                if (ui.hasClass(this, ui.carousel.nameNext)) {
                    direction = 'next';

                } else {
                    direction = 'prev';
                }

                const that = ui.closest(this, '.' + ui.carousel.target)[0];
                const i = Number(that.getAttribute(ui.carousel.dataID));

                if (i === null) { return; }

                carouselNav(that, direction);

                // wait auto slider when navigating
                if (autoTimer[i] !== null) {
                    clearInterval(autoSlider[i]);
                }

            });

        function carouselStart(that) {

            const i = Number(that.getAttribute(ui.carousel.dataID));
            if (i === null) { return; }

            clearInterval(autoSlider[i]);

            autoSlider[i] = setInterval(() => {
                carouselNav(that, 'next');
            }, autoTimer[i]);

        }

        function carouselStop(that) {

            const i = Number(that.getAttribute(ui.carousel.dataID));
            if (i === null) { return; }

            clearInterval(autoSlider[i]);

        }

        ui.on(document,
            'mouseenter',

            '.' + ui.carousel.target + '[' + ui.carousel.dataSlide + ']',

            function () {
                carouselStop(this);
            });

        ui.on(document,
            'mouseleave', '.' + ui.carousel.target + '[' + ui.carousel.dataSlide + ']',

            function () {
                carouselStart(this);
            });

        ui.on(window,
            'visibilitychange',

            () => {

                const callCarousels = ui.find('.' + ui.carousel.target + '[' + ui.carousel.dataSlide + ']');

                if (document.hidden) { // stop all carousels when browser windows is not active
                    Array.prototype.forEach.call(callCarousels, el => { carouselStop(el); });

                } else {
                    Array.prototype.forEach.call(callCarousels, el => { carouselStart(el); });
                }

            });

        // prevent touch event listeners when inline scrolling
        ui.on(document,
             'scroll',

             '.' + ui.carousel.target + ' .' + ui.carousel.nameScroll + ',' +
             '.' + ui.carousel.target + ' .' + ui.carousel.nameScrollV + ',' +
             '.' + ui.carousel.target + ' .' + ui.carousel.nameScrollH,

            (e) => {

                e.preventDefault();
                e.stopPropagation();

                isScrolling = true;
                clearTimeout(isScrollingTimer);

                isScrollingTimer = setTimeout(() => {
                    isScrolling = false;
                }, ui.globals.ease);

            });

        // touchmove event listeners
        ui.on(document,
            'touchstart',

            '.' + ui.carousel.target,

            function (e) {

                if (isScrolling) { return; }

                let touchMove = false;
                touchStarted = true;

                const startx = e.targetTouches[0].pageX;
                const starty = e.targetTouches[0].pageY;

                const slider = ui.find('.' + ui.carousel.targetSlider, this)[0];

                const contents = ui.find('.' + ui.carousel.nameContent, this);
                const navDotsEl = ui.find('.' + ui.carousel.targetNav + ' .' + ui.carousel.nameDots + ' i', this);

                const halfSized = ui.hasClass(this, ui.carousel.nameHalfSize);

                const i = Number(this.getAttribute(ui.carousel.dataID));
                if (i === null) { return; }

                const col = getCols(i); // get responsive cols

                let startMove = window.getComputedStyle(slider).getPropertyValue('transform'); // matrix(xZoom, 0, 0, yZoom, xPos, yPos)
                startMove = startMove.replace('matrix', '').replace(/[\,\(\)\s]/g, ' ').replace(/\s\s/g, '|'); // select only numbers

                startMove = startMove.split('|')[4];

                let currentx, currenty, move, touchEndTimer;
                const that = this;

                ui.off(document, 'touchmove');

                ui.on(document,
                    'touchmove',

                    function (e) {

                        if (ui.hasClass(document, ui.photoGallery.namePreviewOpened)) { return; } // stop if photo gallery is opened
                        if (isScrolling) { return; }

                        currentx = e.targetTouches[0].pageX;
                        currenty = e.targetTouches[0].pageY;

                        if (Math.abs(startx - currentx) > ui.carousel.touchMoveToleranceX && Math.abs(starty - currenty) < ui.carousel.touchMoveToleranceY) {

                            touchMove = true;

                            ui.addClass(that, ui.carousel.nameNoEffects);
                            ui.addClass(slider, ui.carousel.nameNoEffects);

                            clearTimeout(touchEndTimer);
                            let sliderMax = -((contents.length - col) * contents[0].offsetWidth);

                            if (halfSized) {
                                sliderMax -= contents[0].offsetWidth * ui.carousel.halfSize;
                            }

                            move = (startMove - (startx - currentx));

                            if (move > 0) {
                                move = 0;

                            } else if (move < sliderMax) {
                                move = sliderMax;
                            }

                            slider.style.transform = 'translateX(' + move + 'px)';

                            // wait auto slider when touchmove
                            if (autoTimer[i] !== null) {
                                clearInterval(autoSlider[i]);
                            }

                            ui.addClass(document, ui.carousel.nameTouchMove);

                        }

                    });

                ui.off(document, 'touchend.' + ui.carousel.eventTouchEnd + ' touchcancel.' + ui.carousel.eventTouchCancel);

                ui.on(document,
                    'touchend.' + ui.carousel.eventTouchEnd + ' touchcancel.' + ui.carousel.eventTouchCancel,

                    function () {

                        if (touchMove) {

                            ui.removeClass(that, ui.carousel.nameNoEffects);
                            ui.removeClass(slider, ui.carousel.nameNoEffects);

                            setTimeout(() => {

                                const navDots = ui.find('.' + ui.carousel.targetNav + ' .' + ui.carousel.nameDots, that[i])[0];
                                let beforeCount = counts[i];

                                counts[i] = Math.abs(move) / contents[0].offsetWidth;

                                if (currentx > startx) { // slide to right

                                    if (counts[i].toFixed(2).split('.')[1] > ui.carousel.touchMoveToleranceX) {
                                        counts[i] = Math.floor(counts[i]);

                                    } else {

                                        if (beforeCount <= 0) {
                                            counts[i] = 0;

                                        } else {
                                            counts[i] = beforeCount - 1;
                                        }

                                    }

                                } else { // slide to left

                                    if (counts[i].toFixed(2).split('.')[1] > ui.carousel.touchMoveToleranceX) {
                                        counts[i] = Math.ceil(counts[i]);

                                    } else {

                                        if (beforeCount >= (contents.length - 1)) {
                                            beforeCount = (contents.length - 1);

                                        } else {
                                            counts[i] = beforeCount + 1;
                                        }

                                    }

                                }

                                move = -Math.ceil(counts[i] * contents[0].offsetWidth);

                                if (halfSized && (counts[i] === contents.length - col)) {
                                    move -= contents[0].offsetWidth * ui.carousel.halfSize;
                                }

                                slider.style.transform = 'translateX(' + move + 'px)';
                                that.setAttribute(ui.carousel.dataContent, (counts[i] + 1));

                                ui.removeClass(navDotsEl, ui.carousel.nameNavSelected);
                                ui.addClass(navDotsEl[counts[i]], ui.carousel.nameNavSelected);

                                filterDots(navDots, navDotsEl, counts[i], i); // filter dots when dots number exceeds

                                clearTimeout(touchEndTimer);
                                touchEndTimer = setTimeout(() => {

                                    getSlideSpeed(slider, contentsEase[i], i); // get carousel slide speed

                                    // wait auto slider until touchmove ends
                                    if (autoTimer[i] !== null) {

                                        clearInterval(autoSlider[i]);

                                        autoSlider[i] = setInterval(() => {
                                            carouselNav(that, 'next');
                                        }, autoTimer[i]);

                                    }

                                    Array.prototype.forEach.call(contents,

                                        item => { // detect carousel animates
                                            carouselAnimate(item, contentsEase[i], 'touch');
                                        });

                                    ui.removeClass(document, ui.carousel.nameTouchMove);
                                    touchStarted = false;

                                }, ui.globals.fast);

                            }, 0);

                        }

                        touchMove = false;

                        ui.off(that, 'touchmove');
                        ui.off(document, 'touchend.' + ui.carousel.eventTouchEnd + ' touchcancel.' + ui.carousel.eventTouchCancel);

                    });

            });

        // carousel gallery thumbs
        ui.on(document,
            'click',

            '.' + ui.carousel.targetGallery + ' .' + ui.carousel.nameGalleryThumbs + ' .' + ui.carousel.namePhoto,

            function () {

                const parent = ui.closest(this, '.' + ui.carousel.targetGallery);

                const detail = ui.find('.' + ui.carousel.nameGalleryDetail, parent[0]);
                const target = ui.find('img', detail);

                const thumbs = ui.find('.' + ui.carousel.nameGalleryThumbs + ' .' + ui.carousel.namePhoto, parent[0]);

                const index = Array.prototype.slice.call(thumbs).indexOf(this);
                target.setAttribute(ui.carousel.dataCount, index);

                ui.addClass(detail, ui.carousel.nameGalleryDetailLoader);

                const newImg = new Image();
                newImg.src = this.getAttribute(ui.carousel.dataHref);

                newImg.onload = () => {

                    target.src = newImg.src;
                    ui.removeClass(detail, ui.carousel.nameGalleryDetailLoader);

                };

                ui.removeClass(thumbs, ui.carousel.nameGallerySelected);
                ui.addClass(this, ui.carousel.nameGallerySelected);

            });

    };

    // loaders
    ui.onload(ui.carousel.Start);

    ui.on(window, 'resize', carouselResizer);
    ui.on(document, ui.globals.eventDomChange, () => { carouselResizer('resize'); });

    // ajax callback loader
    ui.on(document,
        ui.globals.eventAjaxCallback,

        () => {

            if (ui.ajax.classNames.indexOf(ui.carousel.target) > -1) {
                ui.carousel.Init();
            }

        });

})();

/* countdown */

ui.countdown = {

    // targets
    target: 'ui-countdown',

    // main classnames
    nameDay: 'ui-countdown-day',
    nameHour: 'ui-countdown-hour',
    nameMinute: 'ui-countdown-min',
    nameSecond: 'ui-countdown-sec'
};

(() => {

    let countdownTimer;

    ui.countdown.Start = () => {

        const countdown = ui.find('.' + ui.countdown.target);
        if (ui.countdown.length === 0) { return; }

        const arr = [];

        Array.prototype.forEach.call(countdown,

            (el, i) => {

                const date = new Date();
                const day = ui.find('.' + ui.countdown.nameDay, el)[0];

                if (day !== undefined) {
                    date.setDate(date.getDate() + Number(day.textContent));
                }

                const hour = ui.find('.' + ui.countdown.nameHour, el)[0];

                if (hour !== undefined) {
                    date.setHours(date.getHours() + Number(hour.textContent));
                }

                const minute = ui.find('.' + ui.countdown.nameMinute, el)[0];

                if (minute !== undefined) {
                    date.setMinutes(date.getMinutes() + Number(minute.textContent));
                }

                const sec = ui.find('.' + ui.countdown.nameSecond, el)[0];

                if (sec !== undefined) {
                    date.setSeconds(date.getSeconds() + Number(sec.textContent));
                }

                arr[i] = date.getTime();

            });

        const calc = (ms) => {

            let days = Math.floor(ms / (24 * 60 * 60 * 1000));
            if (days < 0) { days = 0; }

            const daysMs = ms % (24 * 60 * 60 * 1000);

            let hours = Math.floor(daysMs / (60 * 60 * 1000));
            if (hours < 0) { hours = 0; }

            const hoursMs = ms % (60 * 60 * 1000);

            let minutes = Math.floor(hoursMs / (60 * 1000));
            if (minutes < 0) { minutes = 0; }

            const minutesMs = ms % (60 * 1000);

            let sec = Math.floor(minutesMs / 1000) + 1;
            if (sec < 0) { sec = 0; }

            return days + ':' + hours + ':' + minutes + ':' + sec;

        };

        clearInterval(countdownTimer);
        countdownTimer = setInterval(() => {

            Array.prototype.forEach.call(countdown,

                (el, i) => {

                    let dateLeft = calc(arr[i] - new Date());
                    dateLeft = dateLeft.split(':');

                    const day = ui.find('.' + ui.countdown.nameDay, el)[0];
                    if (day !== undefined) {

                        if (dateLeft[0] === '0') { day.textContent = '00'; } else {

                            if (dateLeft[0].length === 1) {
                                day.textContent = '0' + dateLeft[0];

                            } else {
                                day.textContent = dateLeft[0];
                            }

                        }

                    }

                    const hour = ui.find('.' + ui.countdown.nameHour, el)[0];
                    if (hour !== undefined) {

                        if (dateLeft[1] === '0') { hour.textContent = '00'; } else {

                            if (dateLeft[1].length === 1) {
                                hour.textContent = '0' + dateLeft[1];

                            } else {
                                hour.textContent = dateLeft[1];
                            }

                        }

                    }

                    const minute = ui.find('.' + ui.countdown.nameMinute, el)[0];
                    if (minute !== undefined) {

                        if (dateLeft[2] === '0') { minute.textContent = '00'; } else {

                            if (dateLeft[2].length === 1) {
                                minute.textContent = '0' + dateLeft[2];

                            } else {
                                minute.textContent = dateLeft[2];
                            }

                        }

                    }

                    const sec = ui.find('.' + ui.countdown.nameSecond, el)[0];
                    if (sec !== undefined) {

                        if (dateLeft[3] === '0') { sec.textContent = '00'; } else {

                            if (dateLeft[3].length === 1) {
                                sec.textContent = '0' + dateLeft[3];

                            } else {
                                sec.textContent = dateLeft[3];
                            }

                        }

                    }

                });

        }, 1000);

    };

    // loaders
    ui.onload(ui.countdown.Start);

    // ajax callback loader
    ui.on(document,
        ui.globals.eventAjaxCallback,

        () => {

            if (ui.ajax.classNames.indexOf(ui.countdown.target) > -1) {
                ui.countdown.Start();
            }

        });

})();

/* datatable */

ui.datatable = {

    // targets
    target: 'ui-datatable',
    targetLoaded: 'ui-datatable-loaded',

    // main classnames
    nameContainer: 'ui-datatable-container',

    nameListContent: 'ui-datatable-content',
    nameListStriped: 'ui-datatable-striped',
    nameListShowAll: 'ui-datatable-showed-all',
    nameListFiltered: 'ui-datatable-filtered',

    nameFilter: 'ui-datatable-filter',
    nameListShow: 'ui-datatable-show',

    nameCheckAll: 'ui-datatable-check-all',
    nameCheck: 'ui-datatable-check',

    nameTotal: 'ui-datatable-total',
    namePaging: 'ui-datatable-paging',

    // helper classnames
    nameActive: 'ui-active',
    nameEven: 'ui-even',

    nameShow: 'ui-showed',
    nameFiltered: 'ui-filtered',
    nameChecked: 'ui-checked',

    nameAsc: 'ui-asc',
    nameDesc: 'ui-desc',

    // outer classnames
    nameIcon: 'ui-icon',

    nameBtnActive: 'ui-btn-active',
    nameBtnPassive: 'ui-btn-passive',

    namePrev: 'ui-paging-prev',
    nameNext: 'ui-paging-next',

    // icons
    sortIcon : 'sort',
    ascIcon : 'sort-up',
    descIcon : 'sort-down',
    ascNumberIcon : 'sort-number-up',
    descNumberIcon : 'sort-number-down',

    prevIcon : 'angle-left',
    nextIcon : 'angle-right',

    // values
    valueSplit : '|',
    customLetters : { "İ": "i", "I": "ı", "Ş": "ş", "Ğ": "ğ", "Ü": "ü", "Ö": "ö", "Ç": "ç" },

    sortTypeNumber: 'number',
    listIdNaming: 'ui-gridList-',

    // storages
    storageTest: 'ui-gridList-test',
    storageVals: 'ui-gridList-vals-',
    storageShow: 'ui-gridList-show-',
    storagePaging: 'ui-gridList-paging-',

    // data attributes
    dataDefault: 'data-ui-default',
    dataActive: 'data-ui-active',
    dataID: 'data-ui-id',
    dataSort: 'data-ui-sort',
    dataType: 'data-ui-type',
    dataVal: 'data-ui-val',
    dataIndex: 'data-ui-index'

};

(() => {

    let
        testStorage = true,
        startListID = 0,

        loadedVals = [],
        showCount = [],
        pagingCount = [],

        temp = document.createDocumentFragment();

    // test for storage is supported?
    try {
        sessionStorage.setItem(ui.datatable.storageTest, 0);

    } catch (e) {
        testStorage = false;
    }

    const customLowerCase = (string) => { // custom lowercase

        const keys = Object.keys(ui.datatable.customLetters); // returns array

        let chars = '(([';
        for (let i = 0; i < keys.length; i++) { chars += keys[i]; }
        chars += ']))';

        const re = new RegExp(chars, 'g');

        string = string.replace(/["'\[\]\{\}()]/g, '').replace(re, function (l) {
            return ui.datatable.customLetters[l];
        });

        return string.toLowerCase();

    };

    // create paging
    function createPaging(paging, id, listLength) {

        let total, min, max;

        if (showCount[id] === undefined || showCount[id] === 0) {
            total = 1;

        } else {

            total = Math.ceil(listLength / showCount[id]);
            if (total < 1) { total = 1; }

        }

        if (pagingCount[id] < 1) { pagingCount[id] = 1; }

        if (pagingCount[id] > total) {
            pagingCount[id] = total;
        }

        if (pagingCount[id] === total) {
            min = pagingCount[id] - 2;

        } else {
            min = pagingCount[id] - 1;
        }

        if (min < 1) { min = 1; }

        if (pagingCount[id] === 1) {
            max = pagingCount[id] + 2;

        } else {
            max = pagingCount[id] + 1;
        }

        if (max > total) { max = total; }

        let defaultClass = paging[0].getAttribute(ui.datatable.dataDefault);

        if (defaultClass === null) {
            defaultClass = '';
        }

        let activeClass = paging[0].getAttribute(ui.datatable.dataActive);

        if (activeClass === null) {
            activeClass = '';
        }

        let classes = ui.datatable.namePrev + ' ' + defaultClass;

        if (pagingCount[id] === 1) {
            classes += ' ' + ui.datatable.nameBtnPassive;
        }

        const re = new RegExp('\\s+\\s');
        const rex = new RegExp('\\s+$');

        classes = classes.replace(re, ' ').replace(rex, '');

        let html = '<button class="' + classes + '">' +
                '<svg class="' + ui.datatable.nameIcon + '"><use href="' + ui.globals.iconSrc + '#' + ui.datatable.prevIcon + '"/></svg>' +
            '</button>\n';

        for (let i = min; i <= max; i++) {

            if (i === pagingCount[id]) {

                classes = ui.datatable.nameBtnActive + ' ' + defaultClass + ' ' + activeClass;
                classes = classes.replace(re, ' ').replace(rex, '');

                html += '<button class="' + classes + '">' + pagingCount[id] + '</button>\n';

            } else {
                html += '<button class="' + defaultClass + '">' + i + '</button>\n';
            }

        }

        classes = ui.datatable.nameNext + ' ' + defaultClass;
        if (pagingCount[id] === total) { classes += ' ' + ui.datatable.nameBtnPassive; }

        classes = classes.replace(re, ' ').replace(rex, '');
        html += '<button class="' + classes + '">' +
                '<svg class="' + ui.datatable.nameIcon + '"><use href="' + ui.globals.iconSrc + '#' + ui.datatable.nextIcon + '"/></svg>' +
            '</button>\n';

        paging[0].innerHTML = '';
        paging[0].insertAdjacentHTML('beforeend', html);

        // set paging to storage
        if (testStorage && sessionStorage !== undefined) {
            sessionStorage.setItem(ui.datatable.storagePaging + id, pagingCount[id]);
        }

        // empty variables
        classes = '';
        html = '';

    }

    // loader
    function loadGrid(that, id) {

        let list;

        if (ui.hasClass(that, ui.datatable.nameListFiltered)) {
            list = ui.find('.' + ui.datatable.nameListContent + '.' + ui.datatable.nameFiltered, that);

        } else {
            list = ui.find('.' + ui.datatable.nameListContent, that);
        }

        // paging
        const paging = ui.find('.' + ui.datatable.namePaging, that);

        if (paging.length > 0) {

            if (pagingCount[id] === undefined || pagingCount[id] === 0) {

                pagingCount[id] = 1; // paging available
                createPaging(paging, id, list.length); // create paging buttons

            } else {
                createPaging(paging, id, list.length); // update paging buttons
            }

        } else {

            pagingCount[id] = 0; // paging not available
            ui.addClass(that, ui.datatable.nameListShowAll);

        }

        // total grids
        const gridTotal = ui.find('.' + ui.datatable.nameTotal, that);

        if (gridTotal.length > 0) {
            gridTotal[0].textContent = list.length;
        }

        // define even elements and visible grids
        let isEven = false;
        const gridStriped = ui.hasClass(that, ui.datatable.nameListStriped);

        ui.removeClass(ui.find('.' + ui.datatable.nameListContent + '.' + ui.datatable.nameShow, that), ui.datatable.nameShow);

        function evenList(el) {

            if (gridStriped) {

                if (isEven) {

                    ui.addClass(el, ui.datatable.nameEven);
                    isEven = false;

                } else {

                    ui.removeClass(el, ui.datatable.nameEven);
                    isEven = true;

                }

            }

            ui.addClass(el, ui.datatable.nameShow);

        }

        if (showCount[id] > 0 && pagingCount[id] > 0) {

            for (let i = (pagingCount[id] - 1) * showCount[id]; i < pagingCount[id] * showCount[id]; i++) {
                evenList(list[i]);
            }

        } else {
            Array.prototype.forEach.call(list, item => { evenList(item); });
        }

        // empty variables
        list = '';

    }

    // Event Listeners
    // paging
    ui.on(document,
        'click',

        '.' + ui.datatable.target + ' .' + ui.datatable.namePaging + ' button',

        function () {

            const that = ui.closest(this, '.' + ui.datatable.target)[0];
            const id = that.getAttribute(ui.datatable.dataID);

            if (ui.hasClass(this, ui.datatable.nameNext)) {
                pagingCount[id] += 1;

            } else if (ui.hasClass(this, ui.datatable.namePrev)) {
                pagingCount[id] -= 1;

            } else {
                pagingCount[id] = Number(this.textContent);
            }

            loadGrid(that, id);

        });

    // show
    ui.on(document,
        'change',

        '.' + ui.datatable.target + ' select.' + ui.datatable.nameListShow,

        function () {

            const that = ui.closest(this, '.' + ui.datatable.target)[0];
            const id = that.getAttribute(ui.datatable.dataID);

            if (isNaN(Number(this.value))) {

                showCount[id] = 0;
                pagingCount[id] = 1;

                ui.addClass(that, ui.datatable.nameListShowAll);

            } else {

                showCount[id] = this.value;
                ui.removeClass(that, ui.datatable.nameListShowAll);

            }

            // set show count to storage
            if (testStorage && sessionStorage !== undefined) {
                sessionStorage.setItem(ui.datatable.storageShow + id, showCount[id]);
            }

            loadGrid(that, id);

        });

    // sort
    ui.on(document,
        'mousedown',

        '.' + ui.datatable.target + ' [' + ui.datatable.dataSort + ']',

        function () {

            const that = ui.closest(this, '.' + ui.datatable.target)[0];
            const id = that.getAttribute(ui.datatable.dataID);

            // modify buttons
            let buttons = ui.find('[' + ui.datatable.dataSort + ']', that);

            ui.removeClass(buttons, ui.datatable.nameActive);
            ui.addClass(this, ui.datatable.nameActive);

            Array.prototype.forEach.call(buttons,

                el => {

                    if (!ui.hasClass(el, ui.datatable.nameActive)) {

                        ui.removeClass(el, ui.datatable.nameAsc + ' ' + ui.datatable.nameDesc);

                        if (ui.globals.inlineSvg) {
                            ui.find('.' + ui.datatable.nameIcon, el)[0] = ui.datatable.sortIcon;

                        } else {
                            ui.find('.' + ui.datatable.nameIcon + ' use', el)[0].setAttribute('href', ui.globals.iconSrc + '#' + ui.datatable.sortIcon);
                        }

                    }

                });

            let sortType = this.getAttribute(ui.datatable.dataType);
            if (sortType === null) { sortType = ''; }

            const isAsc = ui.hasClass(this, ui.datatable.nameAsc);

            if (isAsc) {

                ui.removeClass(this, ui.datatable.nameAsc);
                ui.addClass(this, ui.datatable.nameDesc);

                if (sortType === ui.datatable.sortTypeNumber) {

                    if (ui.globals.inlineSvg) {
                        ui.find('.' + ui.datatable.nameIcon, this)[0] = ui.datatable.descNumberIcon;

                    } else {
                        ui.find('.' + ui.datatable.nameIcon + ' use', this)[0].setAttribute('href', ui.globals.iconSrc + '#' + ui.datatable.descNumberIcon);
                    }

                } else {

                    if (ui.globals.inlineSvg) {
                        ui.find('.' + ui.datatable.nameIcon, this)[0] = ui.datatable.descIcon;

                    } else {
                        ui.find('.' + ui.datatable.nameIcon + ' use', this)[0].setAttribute('href', ui.globals.iconSrc + '#' + ui.datatable.descIcon);
                    }

                }

            } else {

                ui.removeClass(this, ui.datatable.nameDesc);
                ui.addClass(this, ui.datatable.nameAsc);

                if (sortType === ui.datatable.sortTypeNumber) {

                    if (ui.globals.inlineSvg) {
                        ui.find('.' + ui.datatable.nameIcon, this)[0] = ui.datatable.ascNumberIcon;

                    } else {
                        ui.find('.' + ui.datatable.nameIcon + ' use', this)[0].setAttribute('href', ui.globals.iconSrc + '#' + ui.datatable.ascNumberIcon);
                    }

                } else {

                    if (ui.globals.inlineSvg) {
                        ui.find('.' + ui.datatable.nameIcon, this)[0] = ui.datatable.ascIcon;

                    } else {
                        ui.find('.' + ui.datatable.nameIcon + ' use', this)[0].setAttribute('href', ui.globals.iconSrc + '#' + ui.datatable.ascIcon);
                    }

                }


            }

            // sort
            const gridContainer = ui.find('.' + ui.datatable.nameContainer, that)[0];

            Array.prototype.forEach.call(ui.find('.' + ui.datatable.nameListContent, gridContainer),

                el => {
                    temp.appendChild(el);
                });

            let arr = [];
            let arrSorted = [];

            let sortIndex = this.getAttribute(ui.datatable.dataSort);

            if (sortIndex === null || sortIndex === '' || sortIndex === '0') {
                sortIndex = 0;

            } else {
                sortIndex = Number(sortIndex) - 1;
            }

            let list = ui.find('.' + ui.datatable.nameListContent, temp);
            Array.prototype.forEach.call(list,

                el => {

                    let val = el.getAttribute(ui.datatable.dataVal);
                    if (val !== null && val !== '') {

                        val = val.split(ui.datatable.valueSplit)[sortIndex];

                        if (sortType !== ui.datatable.sortTypeNumber) {
                            val = customLowerCase(val);
                        }

                        arr.push(val);
                        arrSorted.push(val);

                    }

                });

            if (isAsc) {

                if (sortType === ui.datatable.sortTypeNumber) {
                    arrSorted.sort((a, b) => b - a);

                } else {
                    arrSorted.sort().reverse();
                }

            } else {

                if (sortType === ui.datatable.sortTypeNumber) {
                    arrSorted.sort((a, b) => a - b);

                } else {
                    arrSorted.sort();
                }

            }

            for (let i = 0; i < list.length; i++) {

                temp.appendChild(list[arr.indexOf(arrSorted[i])]);
                arr[arr.indexOf(arrSorted[i])] = '';

            }

            // load sorted grids
            gridContainer.appendChild(temp);
            pagingCount[id] = 1;

            loadGrid(that, id);

            // empty variables
            arr = [];
            arrSorted = [];

            buttons = '';
            list = '';

        });

    // filter
    function gridFilter(that, firstLoading) {

        let contentArr, contentVal;

        let vals = [];
        let indexes = [];

        const id = that.getAttribute(ui.datatable.dataID);

        // read all filter values
        Array.prototype.forEach.call(ui.find('.' + ui.datatable.nameFilter, that),

            (el, i) => {

                if (firstLoading) {

                    vals = loadedVals[id].split(',');

                    if (el.type === 'checkbox' || el.type === 'radio') {

                        if (vals[i] !== '') {
                            el.checked = true;
                        }

                    } else if (el.tagName === 'SELECT') {

                        Array.prototype.forEach.call(el.options,

                            item => {

                                if (customLowerCase(item.innerText) === vals[i]) {

                                    const index = Array.prototype.slice.call(el.options).indexOf(item);
                                    el.selectedIndex = index;

                                }

                            });

                    } else { el.value = vals[i]; }

                } else {

                    let val = '';

                    if (el.type === 'checkbox' || el.type === 'radio') {

                        if (el.checked) {
                            val = el.value;
                        }

                    } else { val = el.value; }

                    val = val.replace(/^\s+|\s+$/g, ''); // remove first and last spaces

                    let sortType = el.getAttribute(ui.datatable.dataType);

                    if (sortType === null) {
                        sortType = '';
                    }

                    if (sortType === ui.datatable.sortTypeNumber) {
                        vals.push(val);

                    } else {
                        vals.push(customLowerCase(val));
                    }

                }

                let sortIndex = el.getAttribute(ui.datatable.dataIndex);
                if (sortIndex !== null) {

                    if (sortIndex === '' || sortIndex === '0') {
                        sortIndex = 0;

                    } else {
                        sortIndex = Number(sortIndex) - 1;
                    }

                    indexes.push(sortIndex);

                } else { indexes.push(''); }

            });

        // filter
        let list;
        if (vals.length > 0) {

            const activeFilters = vals.filter((filterVal) => filterVal !== '');
            const gridContainer = ui.find('.' + ui.datatable.nameContainer, that)[0];

            Array.prototype.forEach.call(ui.find('.' + ui.datatable.nameListContent, gridContainer),

                el => {
                    temp.appendChild(el);
                });

            // remove checked
            const checkAll = ui.find('.' + ui.datatable.nameCheckAll, that);

            if (checkAll.length > 0) {
                Array.prototype.forEach.call(checkAll, item => { item.checked = false; });
            }

            list = ui.find('.' + ui.datatable.nameListContent, temp);
            Array.prototype.forEach.call(list,

                el => {

                    if (ui.hasClass(el, ui.datatable.nameChecked)) {

                        ui.removeClass(el, ui.datatable.nameChecked);
                        ui.find('.' + ui.datatable.nameCheck, el)[0].checked = false;

                    }

                });

            if (activeFilters.length > 0) {

                ui.addClass(that, ui.datatable.nameListFiltered);

                Array.prototype.forEach.call(list,

                    el => {

                        let passed = [];

                        contentVal = el.getAttribute(ui.datatable.dataVal);

                        if (contentVal !== null && contentVal !== '') {

                            contentVal = customLowerCase(contentVal);
                            contentArr = contentVal.split(ui.datatable.valueSplit);

                            Array.prototype.forEach.call(vals,

                                (item, j) => {

                                    if (item !== '') {

                                        if (indexes[j] === '') {

                                            if (contentVal.replace(/\|/g, ' ').match(item) !== null) { // contain
                                                passed.push('pass');
                                            }

                                        } else {

                                            if (contentArr[indexes[j]] === item) { // equal
                                                passed.push('pass');
                                            }

                                        }

                                    }

                                });

                        }

                        if (activeFilters.length === passed.length) {
                            ui.addClass(el, ui.datatable.nameFiltered);

                        } else {
                            ui.removeClass(el, ui.datatable.nameFiltered);
                        }

                    });

            } else {

                ui.removeClass(that, ui.datatable.nameListFiltered);
                ui.removeClass(list, ui.datatable.nameFiltered);

            }

            // set filters to storage
            if (testStorage && sessionStorage !== undefined) {
                sessionStorage.setItem(ui.datatable.storageVals + id, vals.toString());
            }

            // load filtered grids
            gridContainer.appendChild(temp);

        }

        // load filtered grids
        loadGrid(that, id);

        // empty variables
        vals = [];
        indexes = [];
        contentArr = [];

        list = '';
        contentVal = '';

    }

    ui.on(document,
        'keyup',

        '.' + ui.datatable.target + ' .' + ui.datatable.nameFilter + '[type="text"]',

        function () {

            const that = ui.closest(this, '.' + ui.datatable.target)[0];
            gridFilter(that, false);

        });

    ui.on(document,
        'change',

        '.' + ui.datatable.target + ' .' + ui.datatable.nameFilter + ':not([type="text"])',

        function () {

            const that = ui.closest(this, '.' + ui.datatable.target)[0];
            gridFilter(that, false);

        });

    // check
    ui.on(document,
        'change',

        '.' + ui.datatable.target + ' .' + ui.datatable.nameCheckAll,

        function () {

            const checkFnc = (el) => {

                if (!ui.hasClass(el, ui.datatable.nameChecked)) {

                    const form = ui.find('.' + ui.datatable.nameCheck, el)[0];
                    if (form !== undefined) {

                        ui.addClass(el, ui.datatable.nameChecked);
                        form.checked = true;

                    }

                }

            };

            const uncheckFnc = (el) => {

                if (ui.hasClass(el, ui.datatable.nameChecked)) {

                    const form = ui.find('.' + ui.datatable.nameCheck, el)[0];
                    if (form !== undefined) {

                        ui.removeClass(el, ui.datatable.nameChecked);
                        form.checked = false;

                    }

                }

            };

            const that = ui.closest(this, '.' + ui.datatable.target)[0];
            const checked = this.checked;

            Array.prototype.forEach.call(ui.find('.' + ui.datatable.nameListContent, that),

                el => {

                    if (checked) {

                        if (ui.hasClass(that, ui.datatable.nameListFiltered)) {

                            if (ui.hasClass(el, ui.datatable.nameFiltered)) {
                                checkFnc(el);

                            } else { uncheckFnc(el); }

                        } else { checkFnc(el); }

                    } else { uncheckFnc(el); }

                });

        });

    ui.on(document,
        'change',

        '.' + ui.datatable.target + ' .' + ui.datatable.nameCheck,

        function () {

            const that = ui.closest(that, '.' + ui.datatable.target)[0];
            const list = ui.closest(this, '.' + ui.datatable.nameListContent)[0];

            if (this.checked) {
                ui.addClass(list, ui.datatable.nameChecked);

            } else {

                ui.removeClass(list, ui.datatable.nameChecked);

                const checkAll = ui.find('.' + ui.datatable.nameCheckAll, that)[0];

                if (ui.find('.' + ui.datatable.nameCheckAll, that)[0] !== undefined) {
                    checkAll.checked = false;
                }

            }

        });

    // first loading
    ui.datatable.Start = () => {

        Array.prototype.forEach.call(ui.find('.' + ui.datatable.target + ':not(.' + ui.datatable.targetLoaded + ')'),

            el => {

                // define id
                startListID += 1;

                const id = ui.datatable.listIdNaming + startListID;
                el.setAttribute(ui.datatable.dataID, id);

                // check stored variables
                if (testStorage && sessionStorage !== undefined) {

                    loadedVals[id] = sessionStorage.getItem(ui.datatable.storageVals + id);
                    showCount[id] = Number(sessionStorage.getItem(ui.datatable.storageShow + id));
                    pagingCount[id] = Number(sessionStorage.getItem(ui.datatable.storagePaging + id));

                }

                // calculate show
                const gridShow = ui.find('select.' + ui.datatable.nameListShow, el)[0];
                if (showCount[id] === 0) {

                    if (gridShow !== undefined) {

                        if (showCount[id] === undefined || showCount[id] === 0) {

                            if (isNaN(Number(gridShow.value))) {

                                showCount[id] = 0;
                                pagingCount[id] = 1;

                                ui.addClass(el, ui.datatable.nameListShowAll);

                            } else {
                                showCount[id] = gridShow.value;
                            }

                        }

                    }

                } else {

                    Array.prototype.forEach.call(gridShow.options,

                        item => {

                            if (Number(customLowerCase(item.innerText)) === showCount[id]) {

                                const index = Array.prototype.slice.call(gridShow.options).indexOf(item);
                                gridShow.selectedIndex = index;

                            }

                        });

                }

                // load values
                if (loadedVals[id] !== undefined && loadedVals[id] !== null) {

                    if (loadedVals[id].length > 0) {
                        gridFilter(el, true);
                    }

                }

                // load grids
                ui.addClass(el, ui.datatable.targetLoaded);
                loadGrid(el, id);

            });

    };

    // clear stored variables when page refreshing
    ui.on(window,
        'beforeunload',

        () => {

            if (testStorage && sessionStorage !== undefined) {

                if (window.performance) {

                    if (performance.navigation.type !== 1) { // The Navigation Timing API: if === 1 means page refreshed

                        Array.prototype.forEach.call(ui.find('.' + ui.datatable.target),

                            item => {

                                const id = item.getAttribute(ui.datatable.dataID);

                                sessionStorage.setItem(ui.datatable.storageVals + id, '');
                                sessionStorage.setItem(ui.datatable.storageShow + id, 0);
                                sessionStorage.setItem(ui.datatable.storagePaging + id, 0);

                            });

                    }

                }

            }

        });

    // loaders
    ui.onload(ui.datatable.Start);

    // ajax callback loader
    ui.on(document,
        ui.globals.eventAjaxCallback,

        () => {

            if (ui.ajax.classNames.indexOf(ui.datatable.target) > -1) {
                ui.datatable.Start();
            }

        });

})();

/* gallery */

ui.photoGallery = {

    // targets
    targetGallery: 'ui-gallery',
    targetPreview: 'ui-gallery-preview',

    targetPhotos: 'ui-photo',
    targetPhotoVer: 'ui-photo-v',

    // main classnames
    nameGalleryPassive: 'ui-gallery-passive',
    nameGalleryCall: 'ui-gallery-call',

    nameGalleryInfo: 'ui-gallery-has-info',
    nameGalleryTouch: 'ui-gallery-touch',

    namePreviewOpened: 'ui-gallery-preview-opened',
    namePreviewClose: 'ui-gallery-preview-close',

    namePreviewBg: 'ui-gallery-preview-bg',

    namePreviewLoader: 'ui-gallery-preview-loader',
    namePreviewInfo: 'ui-gallery-preview-info',
    namePreviewZoom: 'ui-gallery-preview-zoom',

    namePreviewPrev: 'ui-gallery-preview-prev',
    namePreviewNext: 'ui-gallery-preview-next',

    // helper classnames
    nameOpen: 'ui-open',
    nameOpenEase: 'ui-open-ease',

    namePause: 'ui-pause',
    namePauseEase: 'ui-pause-ease',

    // styling classnames
    stylesCloseIcon: 'ui-btn ui-btn-lg ui-btn-square ui-btn-ghost ui-circle ui-ease-btn',

    stylesPreview: 'ui-ease-layout',
    stylesPreviewBtn: 'ui-circle ui-ease-btn',

    // outer classnames
    nameIcon: 'ui-icon',

    // tags
    tagGalleryInfo: 'span',

    // icons
    closeIcon: 'remove',
    prevIcon: 'angle-left',
    nextIcon: 'angle-right',
    loaderIcon: 'loader-line',
    errorIcon: 'ban',

    // values
    imgVerRatio: 1.33,
    imgZoomSize: 2,

    // data attributes
    dataTarget: 'data-ui-target',
    dataCount: 'data-ui-count',
    dataHref: 'data-ui-href',

    // custom events
    eventGalleryTouch: 'ui:photogallery',

    eventPreviewClose: 'ui:previewClose',
    eventPreviewNav: 'ui:previewNav'

};

(() => {

    let
        imgZoomMove = false,

        pageTouchmove = false,
        pageTouchmoveTimer;

    ui.photoGallery.Start = () => {

        let galleryCounter, imgCounter, imgWidth;
        const gallery = ui.find('.' + ui.photoGallery.targetGallery);

        function checkImages () { // control vertical images

            const img = ui.find('a.' + ui.photoGallery.targetPhotos +' img', gallery[galleryCounter]);

            const imgLength = img.length - 1;
            if (imgLength < 0) { return; }

            function imgLoader() {

                const newImg = new Image();
                newImg.src = img[imgCounter].src;

                img[imgCounter].src = newImg.src;

                newImg.onload = function () {

                    if (this.naturalWidth / this.naturalHeight < ui.photoGallery.imgVerRatio) {
                        ui.addClass(img[imgCounter], ui.photoGallery.targetPhotoVer);
                    }

                    if (imgCounter < imgLength) {

                        imgCounter += 1;
                        imgLoader();

                    } else if (imgCounter === imgLength) {

                        imgCounter = 0;
                        if (galleryCounter < (gallery.length - 1)) {

                            galleryCounter += 1;
                            checkImages();

                        }
                    }

                };

            }

            imgLoader();

        }

        if (gallery.length > 0) {

            galleryCounter = 0;
            imgCounter = 0;

            checkImages();

        }

        function galleryFnc(e, that, call) {

            let parent = ui.closest(that, '.' + ui.photoGallery.targetGallery)[0];

            if (parent === undefined) {
                parent = ui.closest(that, '.' + ui.photoGallery.nameGalleryPassive)[0];
            }

            let images;

            if (call === undefined) {
                images = ui.find('a.' + ui.photoGallery.targetPhotos, parent);

            } else {
                images = ui.find('.' + ui.photoGallery.targetPhotos, parent);
            }

            // mobile and touch screens: show data titles first
            if (e.type === 'touchend') {

                if (ui.hasClass(that, ui.photoGallery.nameGalleryInfo)) {

                    if (!ui.hasClass(that, ui.photoGallery.nameGalleryTouch)) {

                        ui.removeClass(images, ui.photoGallery.nameGalleryTouch);
                        ui.addClass(that, ui.photoGallery.nameGalleryTouch);

                        return;

                    }

                    ui.removeClass(images, ui.photoGallery.nameGalleryTouch);

                } else { ui.removeClass(images, ui.photoGallery.nameGalleryTouch); }

            }

            let pageYPos;

            if (ui.userAgents.mobile) {
                pageYPos = window.pageYOffset; // get current y scroll position
            }

            // get images and titles
            let loadedImages = [];
            let loadedTitles = [];

            Array.prototype.forEach.call(images,

                el => {

                    const href = el.getAttribute('href');

                    if (href !== null) {
                        loadedImages.push(href);

                    } else {
                        loadedImages.push(el.getAttribute(ui.photoGallery.dataHref));
                    }

                    if (ui.hasClass(el, ui.photoGallery.nameGalleryInfo)) {
                        loadedTitles.push(ui.find(ui.photoGallery.tagGalleryInfo, el)[0].innerHTML);

                    } else {
                        loadedTitles.push(null);
                    }

                });

            // detect previously opened galleries
            const previousOpened = ui.find('.' + ui.photoGallery.targetPreview);
            if (previousOpened.length > 0) {

                Array.prototype.forEach.call(previousOpened,

                    el => {
                        el.parentNode.removeChild(el);
                    });

            }

            // create gallery
            let index = Array.prototype.slice.call(images).indexOf(that);

            let html = '<div class="' + ui.photoGallery.targetPreview + ' ' + ui.photoGallery.stylesPreview + '">' +
                        '<div class="' + ui.photoGallery.namePreviewBg + '"></div>' +

                            '<button class="' + ui.photoGallery.namePreviewClose + ' ' + ui.photoGallery.stylesCloseIcon +'">';

            if (ui.globals.inlineSvg) {
                html += '<svg class="' + ui.photoGallery.nameIcon + '" viewBox="' + ui.globals.inlineSvgViewBox + '">' + ui.photoGallery.closeIcon;

            } else {
                html += '<svg class="' + ui.photoGallery.nameIcon + '"><use href="' + ui.globals.iconSrc + '#' + ui.photoGallery.closeIcon + '"/>';
            }

            html += '</svg>' +

                            '</button>' +
                            '<button type="button" class="' + ui.photoGallery.namePreviewPrev + ' ' + ui.photoGallery.stylesPreviewBtn + '">';

            if (ui.globals.inlineSvg) {
                html += '<svg class="' + ui.photoGallery.nameIcon + '" viewBox="' + ui.globals.inlineSvgViewBox + '">' + ui.photoGallery.prevIcon;

            } else {
                html += '<svg class="' + ui.photoGallery.nameIcon + '"><use href="' + ui.globals.iconSrc + '#' + ui.photoGallery.prevIcon + '"/>';
            }

            html += '</svg>' +

                            '</button>' +
                            '<button type="button" class="' + ui.photoGallery.namePreviewNext + ' ' + ui.photoGallery.stylesPreviewBtn + '">';

            if (ui.globals.inlineSvg) {
                html += '<svg class="' + ui.photoGallery.nameIcon + '" viewBox="' + ui.globals.inlineSvgViewBox + '">' + ui.photoGallery.nextIcon;

            } else {
                html += '<svg class="' + ui.photoGallery.nameIcon + '"><use href="' + ui.globals.iconSrc + '#' + ui.photoGallery.nextIcon + '"/>';
            }

            html += '</svg>' +

                            '</button>';

            if (ui.globals.inlineSvg) {
                html += '<svg class="' + ui.photoGallery.namePreviewLoader + ' ' + ui.photoGallery.nameIcon + '" viewBox="' + ui.globals.inlineSvgViewBox + '">' + ui.photoGallery.loaderIcon;

            } else {
                html += '<svg class="' + ui.photoGallery.namePreviewLoader + ' ' + ui.photoGallery.nameIcon + '"><use href="' + ui.globals.iconSrc + '#' + ui.photoGallery.loaderIcon + '"/>';
            }

            html += '</svg>' +
                            '<span class="' + ui.photoGallery.namePreviewInfo + ' ' + ui.photoGallery.stylesPreview + '"></span>' +

                            '<img class="' + ui.photoGallery.stylesPreview + '">' +
                        '</div>';

            ui.find('body')[0].insertAdjacentHTML('beforeend', html);
            const preview = ui.find('.' + ui.photoGallery.targetPreview);

            // create and load image
            const newImg = new Image();
            newImg.src = loadedImages[index];

            const img = ui.find('img', preview);
            img.src = newImg.src;

            let imgHeight;
            const loader = ui.find('.' + ui.photoGallery.namePreviewLoader, preview);

            const showImage = () => {

                if (img.naturalWidth / img.naturalHeight < 1.33) {
                    ui.addClass(img, ui.photoGallery.targetPhotoVer);
                }

                imgWidth = img.width;
                imgHeight = img.height;

                ui.addClass(loader, ui.photoGallery.namePause);
                loader.style.display = 'none';

                ui.addClass(img, ui.photoGallery.nameOpen);

                setTimeout(() => {
                    ui.addClass(img, ui.photoGallery.nameOpenEase);
                }, ui.globals.ease + 10);

            };

            const notLoadedImage = () => {

                ui.addClass(loader, ui.photoGallery.namePause);

                if (ui.globals.inlineSvg) {
                    loader.innerHTML = ui.photoGallery.errorIcon;

                } else {
                    ui.find('use', loader)[0].setAttribute('href', ui.globals.iconSrc + '#' + ui.photoGallery.errorIcon);
                }

            };

            newImg.onload = showImage;
            newImg.onerror = notLoadedImage;

            function toggleGalleryTools() {

                // show/hide nav buttons
                if (index < 1) {
                    ui.find('.' + ui.photoGallery.namePreviewPrev)[0].style.display = 'none';

                } else {
                    ui.find('.' + ui.photoGallery.namePreviewPrev)[0].style.display = 'block';
                }

                if (index >= (loadedImages.length - 1)) {
                    ui.find('.' + ui.photoGallery.namePreviewNext)[0].style.display = 'none';

                } else {
                    ui.find('.' + ui.photoGallery.namePreviewNext)[0].style.display = 'block';
                }

                // show/hide info window
                const info = ui.find('.' + ui.photoGallery.namePreviewInfo)[0];
                ui.removeClass(info, ui.photoGallery.nameOpen);

                setTimeout(() => {

                    if (loadedTitles[index] === null) {
                        info.innerHTML = '';

                    } else {

                        ui.addClass(info, ui.photoGallery.nameOpen);
                        info.innerHTML = loadedTitles[index];

                    }

                }, ui.globals.slow);

            }

            toggleGalleryTools();

            // show gallery
            ui.addClass(document, ui.photoGallery.namePreviewOpened);
            ui.addClass(preview, ui.photoGallery.nameOpen);

            setTimeout(() => {
                ui.addClass(preview, ui.photoGallery.nameOpenEase);
            }, 10);

            // close gallery
            function closeGallery() {

                imgZoomMove = false;

                ui.removeClass(preview, ui.photoGallery.nameOpenEase);
                ui.removeClass(document, ui.photoGallery.namePreviewOpened);

                if (ui.userAgents.mobile) {
                    window.scrollTo(0, pageYPos);
                }

                loadedImages = [];
                loadedTitles = [];

                setTimeout(() => {

                    ui.removeClass(preview, ui.photoGallery.nameOpen);
                    preview[0].parentNode.removeChild(preview[0]);

                }, ui.globals.ease);

                ui.off('body', 'keydown.' + ui.photoGallery.eventPreviewClose + ' keydown.' + ui.photoGalleryeventPreviewNav);

            }

            ui.on('body',
                'keydown.' + ui.photoGallery.eventPreviewClose,

                function (e) {
                    if (e.keyCode === 27) { closeGallery(); } // esc
                });

            ui.on('.' + ui.photoGallery.namePreviewClose, 'click', closeGallery);
            ui.on('.' + ui.photoGallery.namePreviewBg, 'click', closeGallery);

            // gallery nav
            let imgPosX, imgPosY, imgZoom;

            function navigateGallery(that, direction) {

                // control prev/next
                if (direction === 'next') {

                    index += 1;
                    if (index > (loadedImages.length - 1)) {

                        index = (loadedImages.length - 1);
                        return;

                    }

                } else {

                    index -= 1;
                    if (index < 0) {

                        index = 0;
                        return;

                    }

                }

                // hide current image and load new one
                ui.removeClass(img, ui.photoGallery.nameOpenEase);
                loader.style.display = 'block';

                ui.removeClass(loader, ui.photoGallery.namePause);

                if (ui.globals.inlineSvg) {
                    loader.innerHTML = ui.photoGallery.loaderIcon;

                } else {
                    ui.find('use', loader)[0].setAttribute('href', ui.globals.iconSrc + '#' + ui.photoGallery.loaderIcon);
                }

                toggleGalleryTools();

                setTimeout(() => {

                    ui.removeClass(img, ui.photoGallery.nameOpen);
                    ui.removeClass(img, ui.photoGallery.targetPhotoVer);

                    newImg.src = loadedImages[index];
                    img.src = newImg.src;

                    newImg.onload = showImage;
                    newImg.onerror = notLoadedImage;

                    // reset touch setting
                    imgPosX = '-50';
                    imgPosY = '-50';

                    imgZoom = 1; // default

                    ui.removeClass(that, ui.photoGallery.namePreviewZoom);
                    img.style.transform = 'translate(' + imgPosX + '%,' + imgPosY + '%) scale(' + imgZoom + ')';

                }, ui.globals.ease);

            }

            // Event Listeners after Gallery Loaded
            ui.on('.' + ui.photoGallery.targetPreview + ' .' + ui.photoGallery.namePreviewPrev + ',.' + ui.photoGallery.targetPreview + ' .' + ui.photoGallery.namePreviewNext,
                'click',

                function () {

                    if (ui.hasClass(this, ui.photoGallery.namePreviewNext)) {
                        navigateGallery(this, 'next');

                    } else {
                        navigateGallery(this, 'prev');
                    }

                });

            ui.on('body',
                'keydown.' + ui.photoGalleryeventPreviewNav,

                function (e) {

                    if (e.keyCode === 39) {
                        navigateGallery(this, 'next');

                    } else if (e.keyCode === 37) {
                        navigateGallery(this, 'prev');
                    }

                });

            imgPosX = '-50';
            imgPosY = '-50';

            imgZoom = 1; // default

            // tap/click to zoom
            ui.on(img,
                'touchend click',

                function (e) {

                    let touchesLength;

                    if (e.type === 'click') { // added click to zoom for desktop
                        touchesLength = 1;

                    } else {
                        touchesLength = e.changedTouches.length;
                    }

                    if (touchesLength === 1) { // control number of touches

                        let lastTouchEnd = 0;
                        const now = new Date().getTime();

                        if (imgZoomMove) { return; }

                        if ((e.type === 'touchend' && ((now - lastTouchEnd) <= 200 && (now - lastTouchEnd) > 0)) || e.type === 'click') {

                            e.preventDefault();

                            if (ui.hasClass(this, ui.photoGallery.namePreviewZoom)) {

                                imgPosX = '-50';
                                imgPosY = '-50';

                                imgZoom = 1; // default
                                ui.removeClass(this, ui.photoGallery.namePreviewZoom);

                            } else {

                                let getX, getY;
                                const rect = img.getBoundingClientRect(); // get img DOM rect

                                imgZoom = ui.photoGallery.imgZoomSize;

                                if (e.type === 'click') {

                                    getX = e.clientX;
                                    getY = e.clientY;

                                } else {

                                    getX = e.changedTouches[0].pageX;
                                    getY = e.changedTouches[0].pageY;

                                }

                                imgPosX = -50 + ((parseFloat(((rect.width / 2) - (getX - rect.x)) / rect.width) * 100) / 2) * imgZoom;
                                imgPosY = -50 + ((parseFloat(((rect.height / 2) - (getY - rect.y)) / rect.height) * 100) / 2) * imgZoom;

                                ui.addClass(this, ui.photoGallery.namePreviewZoom);

                            }

                            img.style.transform = 'translate(' + imgPosX + '%,' + imgPosY + '%) scale(' + imgZoom + ')';

                        }

                        lastTouchEnd = now;

                    }

                });

            // move for zoomed image
            ui.on(img,
                'mousedown touchstart',

                function (e) {

                    if (!ui.hasClass(this, ui.photoGallery.namePreviewZoom)) { return; }

                    imgZoomMove = false;

                    let sx, sy, getX, getY;

                    if (e.type === 'mousedown') {

                        e.preventDefault();

                        sx = e.clientX;
                        sy = e.clientY;

                    } else {

                        sx = e.changedTouches[0].pageX;
                        sy = e.changedTouches[0].pageY;

                    }

                    let matrix = window.getComputedStyle(img).getPropertyValue('transform'); // matrix(xZoom, 0, 0, yZoom, xPos, yPos)

                    matrix = matrix.replace('matrix', '').replace(/[\,\(\)\s]/g, ' ').replace(/\s\s/g, '|'); // select only numbers
                    matrix = matrix.split('|');

                    ui.on(img,
                        'mousemove touchmove',

                        function (e) {

                            if (imgZoom > 1 && (((imgWidth * imgZoom) > window.innerWidth) || (imgHeight * imgZoom) > window.innerHeight)) { // image limits

                                if (e.type === 'mousemove') {

                                    getX = e.clientX;
                                    getY = e.clientY;

                                } else {

                                    getX = e.changedTouches[0].pageX;
                                    getY = e.changedTouches[0].pageY;

                                }

                                imgZoomMove = true;
                                ui.addClass(img, ui.photoGallery.namePauseEase);

                                imgPosX = parseFloat((getX - sx) / imgWidth) * 100 + parseFloat((matrix[4] / imgWidth) * 100);
                                imgPosY = parseFloat((getY - sy) / imgHeight) * 100 + parseFloat((matrix[5] / imgHeight) * 100);

                                img.style.transform = 'translate(' + imgPosX + '%,' + imgPosY + '%) scale(' + imgZoom + ')';

                            }

                        });

                    ui.on(img,
                        'mouseup mouseleave touchend touchcancel',

                        function () {

                            if (imgZoom > 1 && (((imgWidth * imgZoom) > window.innerWidth) || (imgHeight * imgZoom) > window.innerHeight)) { // image limits

                                const horLimit = (((imgWidth * imgZoom) - window.innerWidth) / (imgWidth * imgZoom)) * 100;
                                const verLimit = (((imgHeight * imgZoom) - window.innerHeight) / (imgHeight * imgZoom)) * 100;

                                if (imgPosY < -verLimit - 100) { imgPosY = -verLimit - 100; } // top
                                if (imgPosX < -horLimit - 100) { imgPosX = -horLimit - 100; } // left

                                if (imgPosX > horLimit) { imgPosX = horLimit; } // right
                                if (imgPosY > verLimit) { imgPosY = verLimit; } // bottom

                                img.style.transform = 'translate(' + imgPosX + '%,' + imgPosY + '%) scale(' + imgZoom + ')';

                            }

                            ui.off(img, 'mousemove mouseup mouseleave touchmove touchend touchcancel');
                            ui.removeClass(img, ui.photoGallery.namePauseEase);

                        });

                });

        }

        // Event Listeners
        ui.on(document,
            'touchmove.' + ui.photoGallery.eventGalleryTouch + ' touchend',

            '.' + ui.photoGallery.targetGallery + ' a.' + ui.photoGallery.targetPhotos,

            function (e) {

                if (e.type === 'touchmove') { pageTouchmove = true; }

                if (e.type === 'touchend') {

                    clearTimeout(pageTouchmoveTimer);
                    pageTouchmoveTimer = setTimeout(() => {

                        if (!pageTouchmove) {
                            galleryFnc(e, this);
                        }

                        pageTouchmove = false;

                    }, ui.globals.fast / 2);

                }

            });

        ui.on(document,
            'click',

            '.' + ui.photoGallery.targetGallery + ' a.' + ui.photoGallery.targetPhotos,

            function (e) {

                e.preventDefault();

                if (ui.userAgents.desktop) {
                    galleryFnc(e, this);
                }

            });

        ui.on(document,
            'click',

            '.' + ui.photoGallery.nameGalleryCall,

            function (e) {

                e.preventDefault();

                const target = this.getAttribute(ui.photoGallery.dataTarget);
                let count = this.getAttribute(ui.photoGallery.dataCount);

                if (target === null) { return; }

                if (count === null) {
                    count = 0;

                } else {

                    count = Number(count);

                    if (!count || count === '') {
                        count = 0;
                    }

                }

                galleryFnc(e, ui.find(target + ' .' + ui.photoGallery.targetPhotos)[count], 'call');

            });

    };

    // loaders
    ui.onload(ui.photoGallery.Start);

})();

/* imgupload */

ui.imgUpload = {

    // targets
    target: 'ui-imgupload',

    targetImages: 'ui-imgupload-src',
    targetNames: 'ui-imgupload-name',
    targetInfos: 'ui-imgupload-info',
    targetTags: 'ui-imgupload-tag',

    // main classnames
    nameList: 'ui-imgupload-list',
    nameDrop: 'ui-imgupload-drop',

    nameLoading: 'ui-imgupload-loading',
    nameUploading: 'ui-imgupload-uploading',

    // helper classnames
    nameOpen: 'ui-open',
    nameOpenEase: 'ui-open-ease',

    // tags
    tagList: 'li',

    tagNames: 'span',
    tagInfos: 'i',

    // values
    ratio: '4:3', // activated when resize: false

    resize: true, // resize images
    resizeWidth: 1024, // resize width
    resizeHeight: 768, // resize height

    fill: false, // fill blank areas
    fillColor: 'hsl(0, 0%, 100%)', // fill color

    fit: true, // crop to fit images

    newID: 1000000, // start new ids from
    types: ['jpg', 'jpeg', 'png', 'gif'], // add your allowed file types

    // messages
    msgConfirm: 'Yes',
    msgNotConfirm: 'No',

    msgImgError: 'is not found!',

    msgBeforeUpload: 'Do you want to upload your files?',
    msgError: 'Your files not saved! Please, check your connection and try again.',

    // data attributes
    dataSrc: 'data-ui-src',
    dataID: 'data-ui-id',
    dataTag: 'data-ui-tag',

    // formData API names
    formDataID: 'id',
    formDataTag: 'tag',
    formDataImg: 'img',

    // custom events
    eventUploader: 'ui:imageUploader'

};

ui.imgUpload.Start = () => {

    let savedImgs;

    const loadFiles = (uploader, files) => {

        if (files.length > 0) {

            // check allowed file types
            let allowed = [];

            for (let i = 0; i < files.length; i++) {

                let ext = files[i].name.split('.')[1].toLowerCase();
                if (ext !== null) {

                    ext = ext.toString();

                    if (ui.imgUpload.types.indexOf(ext) > -1) {
                        allowed.push(files[i]);
                    }

                }

            }

            if (allowed.length === 0) { return; } // stop when all file types not allowed

            // load images
            let readers = [];

            let img = [];
            let imgLoaded = [];

            let w = [];
            let h = [];

            let html = '';
            let loaded = 0;

            const c = document.createElement("canvas");
            const ctx = c.getContext("2d");

            ui.addClass(uploader, ui.imgUpload.nameLoading);

            const loadImages = (j, tag) => {

                // get width and height
                w[j] = img[j].width;
                h[j] = img[j].height;

                // get ratio
                let r = ui.imgUpload.ratio.split(':');
                if (r.length !== 2) { r = ''; }

                if (ui.imgUpload.resize && !savedImgs) { // resize images

                    if (w[j] > h[j]) { // horizontal image

                        h[j] = (h[j] / w[j]) * ui.imgUpload.resizeWidth;
                        w[j] = ui.imgUpload.resizeWidth;

                        if (h[j] > ui.imgUpload.resizeHeight) {

                            w[j] = (w[j] / h[j]) * ui.imgUpload.resizeHeight;
                            h[j] = ui.imgUpload.resizeHeight;

                        }

                    } else { // vertical image

                        w[j] = (w[j] / h[j]) * ui.imgUpload.resizeHeight;
                        h[j] = ui.imgUpload.resizeHeight;

                        if (w[j] > ui.imgUpload.resizeWidth) {

                            h[j] = (h[j] / w[j]) * ui.imgUpload.resizeWidth;
                            w[j] = ui.imgUpload.resizeWidth;

                        }

                    }

                    if (ui.imgUpload.fill && !savedImgs) {

                        c.width = ui.imgUpload.resizeWidth;
                        c.height = ui.imgUpload.resizeHeight;

                    } else {

                        c.width = w[j];
                        c.height = h[j];

                    }

                } else {

                    if (!ui.imgUpload.fit && ui.imgUpload.fill && !savedImgs) {

                        if (r !== '') {

                            if (w[j] > h[j]) { // horizontal image

                                c.width = w[j];
                                c.height = (r[1] / r[0]) * w[j];

                            } else { // vertical image

                                c.width = (r[0] / r[1]) * h[j];
                                c.height = h[j];

                            }

                        }

                    } else {

                        c.width = w[j];
                        c.height = h[j];

                    }

                }

                if (ui.imgUpload.fit && !savedImgs) { // crop to fit images

                    if (ui.imgUpload.resize) {

                        c.width = ui.imgUpload.resizeWidth;
                        c.height = ui.imgUpload.resizeHeight;

                    } else {

                        if (w[j] > h[j]) { // horizontal image

                            c.width = (r[0] / r[1]) * h[j];
                            c.height = h[j];

                        } else { // vertical image

                            c.width = w[j];
                            c.height = (r[1] / r[0]) * w[j];

                        }

                    }

                    ctx.drawImage(img[j], 0, 0, c.width, c.height);

                } else {

                    if (ui.imgUpload.fill && !savedImgs) { // fill blank areas

                        ctx.fillStyle = ui.imgUpload.fillColor;
                        ctx.fillRect(0, 0, c.width, c.height);

                        ctx.drawImage(img[j], (c.width - w[j]) / 2, (c.height - h[j]) / 2, w[j], h[j]);

                    } else {
                        ctx.drawImage(img[j], 0, 0, w[j], h[j]);
                    }

                }

                const data = c.toDataURL("image/jpeg");

                // calculate new image file size from new base64
                let size = data.split(',')[1].length;
                size = (4 * Math.ceil(size / 3) * 0.5624896334383812) / 1000;

                size = size.toFixed(0);

                imgLoaded[j] = [];

                imgLoaded[j].name = allowed[j].name;
                imgLoaded[j].data = data;
                imgLoaded[j].size = size;
                imgLoaded[j].tag = tag;

                if (savedImgs) { // get saved image's id
                    imgLoaded[j].id = allowed[j].id;

                } else { // define a new id

                    ui.imgUpload.newID += 1;
                    imgLoaded[j].id = ui.imgUpload.newID;

                }

            };

            const loadImagesThen = () => {

                loaded += 1;
                if (loaded === allowed.length) {

                    setTimeout(() => {

                        Array.prototype.forEach.call(imgLoaded,

                            (img) => {

                                if (img !== undefined) { // return when image loading failed

                                    html += '<' + ui.imgUpload.tagList + ' class="' + ui.imgUpload.nameOpenEase + '">' +

                                                '<span class="' + ui.imgUpload.targetImages + '">' +
                                                    '<img id="' + img.id + '" src="' + img.data + '" draggable="false">' +
                                                '</span>' +

                                                '<' + ui.imgUpload.tagNames + ' class="' + ui.imgUpload.targetNames + '">' +
                                                    img.name +
                                                '</' + ui.imgUpload.tagNames +'>' +

                                                '<' + ui.imgUpload.tagInfos + ' class="' + ui.imgUpload.targetInfos + '">' +
                                                    img.size + 'kb' +
                                                '</' + ui.imgUpload.tagInfos + '>';

                                    if (img.tag !== '') { // add tags

                                        html += '<span class="' + ui.imgUpload.targetTags + '">' +
                                                    img.tag +
                                                '</span>';

                                    }

                                    html += '</' + ui.imgUpload.tagList + '>';

                                }

                            });

                        const list = ui.find('.' + ui.imgUpload.nameList + ' ul', uploader)[0];
                        list.insertAdjacentHTML('afterbegin', html);

                    }, 0);

                    const listCont = ui.find('.' + ui.imgUpload.nameList, uploader)[0];
                    ui.addClass(listCont, ui.imgUpload.nameOpen);

                    let showTimer;

                    if (savedImgs) {
                        showTimer = ui.globals.slow;

                    } else {
                        showTimer = ui.globals.ease;
                    }

                    setTimeout(() => {

                        Array.prototype.forEach.call(ui.find('.' + ui.imgUpload.nameList + ' ' + ui.imgUpload.tagList + '.' + ui.imgUpload.nameOpenEase, listCont),
                            (newImg, i) => {

                                setTimeout(() => {
                                    ui.removeClass(newImg, ui.imgUpload.nameOpenEase);
                                }, (ui.globals.fast / 2) * i);

                            });


                        // empty variables
                        allowed = [];
                        readers = [];

                        img = [];
                        imgLoaded = [];

                        w = [];
                        h = [];

                        html = '';

                    }, showTimer);

                    setTimeout(() => {
                        ui.removeClass(uploader, ui.imgUpload.nameLoading);
                    }, showTimer);

                }

            };

            Array.prototype.forEach.call(allowed,
                (el, i) => {

                    if (savedImgs) { // array: get images saved before

                        img[i] = new Image();
                        img[i].src = el.name;

                        img[i].onload = () => {

                            loadImages(i, el.tag);
                            loadImagesThen(); // end of images

                        };

                        img[i].onerror = () => {

                            if (ui.alerts === undefined) {
                                alert(ui.imgUpload.msgImgError);

                            } else {

                                ui.alerts.message({
                                    msg: el.name + ' ' + ui.imgUpload.msgImgError,
                                    theme: ui.alerts.themeDanger
                                });

                            }

                            loadImagesThen(); // end of images

                        };

                    } else { // FileList object: get images from user selected

                        readers[i] = new FileReader(); // filereader API
                        readers[i].readAsDataURL(el);

                        readers[i].onload = function () {

                            img[i] = new Image();
                            img[i].src = this.result;

                            img[i].onload = () => { loadImages(i, ''); };

                        };

                        readers[i].onloadend = loadImagesThen; // end of images

                    }

                });

        }

    };

    // load saved before images
    Array.prototype.forEach.call(ui.find('.' + ui.imgUpload.target),

        (el) => {

            let i = -1;
            let imported = [];

            Array.prototype.forEach.call(ui.find('.' + ui.imgUpload.nameList + ' li', el),

                (item) => {

                    const img = item.getAttribute(ui.imgUpload.dataSrc);
                    if (img !== null && img !== '') {

                        const id = item.getAttribute(ui.imgUpload.dataID);
                        if (id !== null && id !== '') {

                            i += 1;
                            imported[i] = [];

                            imported[i].name = img;
                            imported[i].id = id;
                            imported[i].tag = '';

                            const tag = item.getAttribute(ui.imgUpload.dataTag);
                            if (tag !== null) { imported[i].tag = tag; }

                        }

                    }

                    item.parentNode.removeChild(item);

                });

            savedImgs = true;
            loadFiles(el, imported);

            // empty variables
            imported = [];

        });

    // Event Listeners
    ui.on(document,
        'dragenter',

        '.' + ui.imgUpload.target,

        function (e) {

            e.preventDefault();
            e.stopPropagation();

            ui.addClass(this, ui.imgUpload.nameDrop);

            ui.on('body',
                'dragover.' + ui.imgUpload.eventUploader,

                (ev) => {

                    ev.preventDefault();
                    ev.stopPropagation();

                    const uploader = ui.closest(ev.target, '.' + ui.imgUpload.target)[0];

                    if (uploader === undefined) {
                        ui.removeClass(this, ui.imgUpload.nameDrop);

                    } else {
                        ui.addClass(this, ui.imgUpload.nameDrop);
                    }

                });

        });

    ui.on('body',
        'drop',

        function (e) {

            e.preventDefault();
            e.stopPropagation();

            const uploader = ui.closest(e.target, '.' + ui.imgUpload.target)[0];

            if (uploader === undefined) {
                ui.removeClass(uploader, ui.imgUpload.nameDrop);

            } else {

                ui.addClass(uploader, ui.imgUpload.nameDrop);

                savedImgs = false;
                loadFiles(uploader, e.dataTransfer.files);

                ui.removeClass(uploader, ui.imgUpload.nameDrop);
                ui.off(document, 'dragover.' + ui.imgUpload.eventUploader);

            }

        });

    ui.on(document,
        'change',

        '.' + ui.imgUpload.target + ' input[type="file"]',

        function () {

            const uploader = ui.closest(this, '.' + ui.imgUpload.target)[0];

            savedImgs = false;
            loadFiles(uploader, this.files);

        });

    function toBlob(base, type, sliceSize) { // convert base64 images to blob

        type = type || '';
        sliceSize = sliceSize || 512;

        const byteCharacters = atob(base);
        const byteArrays = [];

        for (let j = 0; j < byteCharacters.length; j += sliceSize) {

            const slice = byteCharacters.slice(j, j + sliceSize);
            const byteNumbers = new Array(slice.length);

            for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }

            const byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }

        const blob = new Blob(byteArrays, {type: type});
        return blob;

    }

    ui.on(document,
        'submit',

        '.' + ui.imgUpload.target + ' form',

        function (e) {

            e.preventDefault();

            const uploaderFnc = () => {

                const formData = new FormData(); // formdata API
                const uploader = ui.closest(this, '.' + ui.imgUpload.target)[0];

                Array.prototype.forEach.call(ui.find('.' + ui.imgUpload.nameList + ' ' + ui.imgUpload.tagList, uploader),

                    (el, i) => {

                        const file = ui.find('.' + ui.imgUpload.targetImages + ' img', el)[0];
                        formData.append(ui.imgUpload.formDataID + '[' + i + ']', file.id); // add id

                        let tag = ui.find('.' + ui.imgUpload.targetTags, el)[0];

                        if (tag !== undefined) {
                            tag = tag.textContent;

                        } else { tag = ''; }

                        formData.append(ui.imgUpload.formDataTag + '[' + i + ']', tag); // add image tag

                        let img = file.src.split(";");
                        const imgType = img[0].split(":")[1]; // get image type

                        img = img[1].split(",")[1];
                        img = toBlob(img, imgType); // convert to blob to using server's file protocol

                        formData.append(ui.imgUpload.formDataImg + '[' + i + ']', img); // add image file

                    });


                ui.addClass(uploader, ui.imgUpload.nameUploading);

                ui.ajax({

                    type: 'POST',
                    url : this.action,
                    data: formData,

                    callback: (status, response) => {

                        ui.removeClass(uploader, ui.imgUpload.nameUploading);
                        if (status === 'success') { // check ajax connection

                            response = JSON.parse(response);

                            if (ui.alerts === undefined) {
                                alert(response.message); // show server message

                            } else {

                                if (response.success) { // check server connection

                                    ui.alerts.message({
                                        msg: response.message, // show server message
                                        theme: ui.alerts.themeSuccess
                                    });

                                } else {

                                    ui.alerts.message({
                                        msg: response.message, // show server message
                                        theme: ui.alerts.themeDanger
                                    });

                                }

                            }

                        } else {

                            if (ui.alerts === undefined) {
                                alert(ui.imgUpload.msgError);

                            } else {

                                ui.alerts.message({
                                    msg: ui.imgUpload.msgError,
                                    theme: ui.alerts.themeWarning
                                });

                            }

                        }

                    }

                });

            };

            if (ui.alerts === undefined) {

                const confirmed = confirm(ui.imgUpload.msgBeforeUpload);
                if (confirmed) { uploaderFnc(); }

            } else {

                ui.alerts.dialog({

                    msg: ui.imgUpload.msgBeforeUpload,
                    error: ui.imgUpload.msgNotConfirm,

                    callback: function (val) {
                        if (val === ui.alerts.successBtnValue) { uploaderFnc(); }
                    }

                });

            }

        });

    ui.on(document,
        'click',

        '.' + ui.imgUpload.nameLoading + ',.' + ui.imgUpload.nameUploading,

        function (e) { // prevent clicks when loading and uploading

            e.preventDefault();
            e.stopPropagation();

        });

};

// loaders
ui.onload(ui.imgUpload.Start);

/* loading mask */

ui.loadingMask = {

    // targets
    target: 'ui-loading-mask',

    // main classnames
    nameSticky: 'ui-loading-mask-sticky',
    nameLoader: 'ui-loading-mask-loader',

    // helper classnames
    nameOpen: 'ui-open',
    nameOpenEase: 'ui-open-ease',

    // styling classnames
    stylesLoader: 'ui-ease-layout',
    stylesIcon: 'ui-animate-spin',

    // values
    loadingSize: 0.32,

    loadingBox: '-128 -12 288 288',
    loadingPath: '<path d="M12 12a120 120 0 01120 120"/>'

};

(() => {

    var
        maskItems = [],
        maskHolders = [];

    ui.loadingMask.Start = () => {

        ui.loadingMask.toggle = function (that) {

            var l, i, j, sticky, status, html;

            l = ui.find(that);

            function effectTimers(type) { // wait for effects

                function emptyVars(j, l) {

                    // empty variables
                    if (j === (l.length - 1)) {

                        maskItems = [];
                        maskHolders = [];

                    }

                }

                if (type === 'hide') {

                    setTimeout(() => {

                        if (maskHolders.length > 0) {

                            for (j = 0; j < l.length; j++) {

                                maskItems[j].removeChild(maskHolders[j]);
                                ui.removeClass(maskItems[j], ui.loadingMask.target + ' ' + ui.loadingMask.nameSticky);

                                emptyVars(j, l);

                            }

                        }

                    }, ui.globals.ease);

                } else { // show

                    setTimeout(() => {

                        for (j = 0; j < l.length; j++) {

                            ui.addClass(maskHolders[j], ui.loadingMask.nameOpenEase);
                            emptyVars(j, l);

                        }

                    }, 0);

                }

            }

            for (i = 0; i < l.length; i++) {

                if (ui.hasClass(l[i], ui.loadingMask.target)) {

                    // hide loading
                    status = 'hide';

                    maskHolders[i] = ui.find('.' + ui.loadingMask.nameLoader, l[i])[0];

                    ui.removeClass(maskHolders[i], ui.loadingMask.nameOpen);
                    ui.removeClass(maskHolders[i], ui.loadingMask.nameOpenEase);

                    maskItems[i] = l[i];

                } else {

                    // show loading
                    status = 'show';

                    html = '<span class="' + ui.loadingMask.nameLoader + ' ' + ui.loadingMask.stylesLoader + '">' +
                                '<span>' +
                                    '<svg viewBox="' + ui.loadingMask.loadingBox + '" class="' + ui.loadingMask.stylesIcon + '" style="height: ' + (l[i].offsetHeight * ui.loadingMask.loadingSize) + 'px;">' +
                                        ui.loadingMask.loadingPath +
                                    '</svg>' +
                                '</span>' +
                            '</span>';

                    l[i].insertAdjacentHTML('afterbegin', html);

                    ui.addClass(l[i], ui.loadingMask.target);

                    if (l[i].offsetWidth >= (window.innerWidth - 15)) {
                        sticky = true;

                    } else { sticky = false; }

                    if (sticky) {
                        ui.addClass(l[i], ui.loadingMask.nameSticky);
                    }

                    maskHolders[i] = ui.find('.' + ui.loadingMask.nameLoader, l[i])[0];
                    ui.addClass(maskHolders[i], ui.loadingMask.nameOpen);

                }

                if (i === (l.length - 1)) {
                    effectTimers(status);
                }

            }

        };

        // Event Listeners
        ui.on(document,
            'click',

            '.' + ui.loadingMask.target,

            function (e) {

                e.preventDefault();
                e.stopPropagation();

        });

    };

    // loaders
    ui.onload(ui.loadingMask.Start);

})();

/* modal */

ui.modal = {

    // targets
    target: 'ui-modal',
    targetWin: 'ui-modal-win',
    targetBg: 'ui-modal-bg',

    // main classnames
    nameModalOpened: 'ui-modal-opened',
    nameWinNoBG: 'ui-modal-no-bg',

    nameContent: 'ui-modal-content',
    nameHasHeader: 'ui-modal-has-header',
    nameHasFooter: 'ui-modal-has-footer',

    nameHeader: 'ui-modal-header',
    nameContainer: 'ui-modal-container',
    nameFooter: 'ui-modal-footer',

    nameClosable: 'ui-modal-closable',
    nameRemovable: 'ui-modal-removable',
    nameIframe: 'ui-modal-iframe',

    nameModalClose: 'ui-modal-close',

    nameSizePrefix: 'ui-modal-',
    nameLG: 'ui-modal-lg',
    nameMD: 'ui-modal-md',
    nameSM: 'ui-modal-sm',

    nameInline: 'ui-modal-inline',
    nameFullscreen: 'ui-modal-fullscreen',

    // helper classnames
    nameOpen: 'ui-open',
    nameOpenEase: 'ui-open-ease',

    nameShow: 'ui-show',
    nameShowEase: 'ui-show-ease',

    nameActive: 'ui-active',

    // outer classnames
    nameIcon: 'ui-icon',

    // styling classnames
    stylesContent: 'ui-shadow-lg ui-ease-layout',
    stylesCloseBtn: 'ui-ease-btn',
    stylesModalBg: 'ui-ease-layout',

    // icons
    closeIcon: 'remove',

    // values
    winMargin: 15,

    sizeLG: 'lg',
    sizeMD: 'md',
    sizeSM: 'sm',

    sizeInline: 'inline',
    sizeFullscreen: 'fullscreen',

    typeAjax: 'ajax',
    typeIframe: 'iframe',

    heightMax: '92%',
    heightMinLG: '300',
    heightMinMD: '240',
    heightMinSM: '120',

    // data attributes
    dataCustomW: 'data-ui-customW',
    dataCustomH: 'data-ui-customH',
    dataOpenSize: 'data-ui-openSize'

};

(() => {

    var pageYPos, modalResizer;

    modalResizer = () => {

        var win, type, container, bg, openSize, userDefined, customW, customH, minHeight;

        win = ui.find('.' + ui.modal.targetWin + '.' + ui.modal.nameShow + ' .' + ui.modal.nameContent + ':not(.' + ui.modal.nameFullscreen + ')')[0];
        if (win !== undefined) {

            bg = ui.find('.' + ui.modal.targetBg)[0];

            openSize = win.getAttribute(ui.modal.dataOpenSize);
            if (openSize !== null) {

                type = 'md';
                userDefined = ui.globals.md + 1; // md, inline

                openSize = Number(openSize);

                if (window.innerWidth < openSize) {
                    win.style.width = (window.innerWidth - (ui.modal.winMargin * 2)) + 'px';

                } else {

                    if (ui.hasClass(win, ui.modal.nameLG)) {

                        type = 'lg';
                        userDefined = ui.globals.lg; // lg

                    } else if (ui.hasClass(win, ui.modal.nameSM)) {

                        type = 'sm';
                        userDefined = ui.globals.md; // sm
                    }

                    if (window.innerWidth > userDefined) {
                        win.style.width = userDefined + 'px';

                    } else {
                        win.style.width = (window.innerWidth - (ui.modal.winMargin * 2)) + 'px';
                    }
                }

                minHeight = ui.modal.heightMinMD;

                if (type === 'lg') {
                    minHeight = ui.modal.heightMinLG;

                } else if (type === 'sm') {
                    minHeight = ui.modal.heightMinSM;
                }

                container = ui.find('.' + ui.modal.nameContainer, win)[0];
                win.style.removeProperty('height');

                if (container.offsetHeight < minHeight) {
                    win.style.height = (window.innerHeight - (ui.modal.winMargin * 2)) + 'px';

                } else {
                    win.style.height = win.offsetHeight + 'px';
                }

            }

            customW = win.getAttribute(ui.modal.dataCustomW);
            if (customW !== null) {

                customH = win.getAttribute(ui.modal.dataCustomH);
                if (customH !== null) {

                    customW = Number(customW);
                    customH = Number(customH);

                    if (window.innerWidth > customW) {

                        win.style.width = customW + 'px';
                        win.style.height = customH + 'px';

                    } else {

                        win.style.width = (window.innerWidth - (ui.modal.winMargin * 2)) + 'px';
                        win.style.height = (window.innerWidth - (ui.modal.winMargin * 2)) / (customW / customH) + 'px';

                    }

                }
            }

            win.style.top = Math.floor((bg.offsetHeight - win.offsetHeight) / 2) + 'px';
            win.style.left = Math.floor((bg.offsetWidth - win.offsetWidth) / 2) + 'px';

        }

    };

    ui.modal.Start = () => {

        ui.modal.close = function () {

            var win, bg, removeModal;

            win = ui.find('.' + ui.modal.targetWin + '.' + ui.modal.nameShow);
            if (win.length === 0) { return; }

            ui.each(win,

                function () {
                    ui.removeClass(this, ui.modal.nameShowEase);
                });

            setTimeout(() => {

                ui.each(win,

                    function () {

                        removeModal = ui.find('.' + ui.modal.nameRemovable, win[0]).length;

                        if (removeModal > 0) { // remove modal window
                            win[0].parentNode.removeChild(win[0]);

                        } else { // hide modal window
                            ui.removeClass(this, ui.modal.nameShow);
                        }

                    });

                bg = ui.find('.' + ui.modal.targetBg);
                ui.removeClass(bg, ui.modal.nameOpenEase);

                ui.removeClass(document, ui.modal.nameModalOpened);

                if (ui.userAgents.mobile) {
                    window.scrollTo(0, pageYPos);
                }

                setTimeout(() => {
                    ui.removeClass(bg, ui.modal.nameOpen);
                }, ui.globals.ease);

                ui.trigger(document, ui.globals.eventDomChange); // set custom event

            }, ui.globals.ease);

        };

        ui.modal.open = function (props) {

            /*
            props list:
                props.source
                props.size
                props.type
                props.bg
                props.closable
                props.callback
            */

            var closeBtn, nonClosable, typeArr, type, created, temp, getSize, size, customSize, sizeArr, forms, bg, html, win, content;

            if (props === undefined) { return; }
            if (props.source === undefined) { return; }

            ui.modal.close(); // hide opened modal windows and prevent multiple modal windows

            if (ui.userAgents.mobile) {
                pageYPos = window.pageYOffset; // get current scroll-y position
            }

            // check closable
            nonClosable = false;

            if (props.closable !== undefined) {
                if (!props.closable) { nonClosable = true; }
            }

            // create modal
            function createModal() {

                bg = ui.find('.' + ui.modal.targetBg)[0];
                html = '<div class="' + ui.modal.targetWin;

                if (props.bg !== undefined && props.bg === 'false') {
                    html += ' ' + ui.modal.nameWinNoBG;
                }

                html += ' ' + ui.modal.nameActive + '">' +
                            '<div class="' + ui.modal.nameContent + ' ' + ui.modal.stylesContent + '"></div>' +
                        '</div>';

                if (bg === undefined) {
                    html += '<div class="' + ui.modal.targetBg + ' ' + ui.modal.stylesModalBg + '"></div>';
                }

                ui.find('body')[0].insertAdjacentHTML('beforeend', html);

                win = ui.find('.' + ui.modal.targetWin + '.' + ui.modal.nameActive)[0];
                content = ui.find('.' + ui.modal.nameContent, win)[0];

            }

            // check header and footer availability
            function checkHeaderFooter() {

                if (ui.find('.' + ui.modal.nameHeader, content)[0] !== undefined) {
                    ui.addClass(content, ui.modal.nameHasHeader);
                }

                if (ui.find('.' + ui.modal.nameFooter, content)[0] !== undefined) {
                    ui.addClass(content, ui.modal.nameHasFooter);
                }

            }

            // complete modal
            function showModal() {

                // set modal size
                ui.removeClass(content, ui.modal.nameLG + ' ' + ui.modal.nameMD + ' ' + ui.modal.nameSM + ' ' + ui.modal.nameFullscreen + ' ' + ui.modal.nameInline);

                content.style.removeProperty('top');
                content.style.removeProperty('left');

                content.style.removeProperty('width');
                content.style.removeProperty('height');

                content.removeAttribute(ui.modal.dataOpenSize);

                content.removeAttribute(ui.modal.dataCustomW);
                content.removeAttribute(ui.modal.dataCustomH);

                if (props.size === undefined) {

                    size = ui.modal.nameMD;
                    ui.addClass(content, size);

                } else {

                    getSize = function () {

                        size = ui.modal.nameMD;
                        sizeArr = [ui.modal.sizeLG, ui.modal.sizeMD, ui.modal.sizeSM, ui.modal.sizeFullscreen, ui.modal.sizeInline];

                        if (sizeArr.indexOf(props.size) > -1) {
                            size = ui.modal.nameSizePrefix + props.size;
                        }

                        ui.addClass(content, size);

                    };

                    customSize = props.size.split('x'); // check custom size
                    if (customSize.length === 2) {

                        if (customSize[0].match(/^[0-9]+$/) !== null && customSize[1].match(/^[0-9]+$/) !== null) {

                            content.style.width = customSize[0] + 'px';
                            content.style.height = customSize[1] + 'px';

                            content.setAttribute(ui.modal.dataCustomW, customSize[0]);
                            content.setAttribute(ui.modal.dataCustomH, customSize[1]);

                        } else { getSize(); }

                    } else { getSize(); }

                }

                // set closable
                if (nonClosable) {
                    ui.removeClass(win, ui.modal.nameClosable);

                } else {
                    ui.addClass(win, ui.modal.nameClosable);
                }

                // add/remove close button
                closeBtn = ui.find('.' + ui.modal.nameModalClose, win)[0];

                if (nonClosable) {

                    if (closeBtn !== undefined) {
                        closeBtn.parentNode.removeChild(closeBtn);
                    }

                } else {

                    if (closeBtn === undefined) {

                        closeBtn = '<button class="' + ui.modal.nameModalClose + ' ' + ui.modal.stylesCloseBtn + '">';

                        if (ui.globals.inlineSvg) {
                            closeBtn += '<svg class="' + ui.modal.nameIcon + '" viewBox="' + ui.globals.inlineSvgViewBox + '">' + ui.modal.closeIcon;

                        } else {
                            closeBtn += '<svg class="' + ui.modal.nameIcon + '"><use href="' + ui.globals.iconSrc + '#' + ui.modal.closeIcon + '"/>';
                        }

                        closeBtn += '</svg>' +

                                '</button>';

                        content.insertAdjacentHTML('afterbegin', closeBtn);

                    }

                }

                // showing modal
                ui.addClass(document, ui.modal.nameModalOpened);

                bg = ui.find('.' + ui.modal.targetBg);
                ui.addClass(bg, ui.modal.nameOpen);

                setTimeout(() => {

                    ui.addClass(bg, ui.modal.nameOpenEase);
                    setTimeout(() => {

                        ui.addClass(win, ui.modal.nameShow);

                        content.style.top = Math.floor((bg[0].offsetHeight - content.offsetHeight) / 2) + 'px';
                        content.style.left = Math.floor((bg[0].offsetWidth - content.offsetWidth) / 2) + 'px';

                        if (size !== undefined && size !== ui.modal.nameFullscreen) { // inherit fixed size && fullscreen

                            content.style.width = content.offsetWidth + 'px';
                            content.setAttribute(ui.modal.dataOpenSize, content.offsetWidth);
                            content.style.height = content.offsetHeight + 'px';

                        }

                        setTimeout(() => {

                            ui.addClass(win, ui.modal.nameShowEase);
                            ui.removeClass(win, ui.modal.nameActive);

                            modalResizer();

                            setTimeout(() => { // wait for modal dom is ready
                                ui.trigger(document, ui.globals.eventDomChange); // set custom event
                            }, ui.globals.ease);

                            // callback
                            if (props.callback !== undefined) {

                                setTimeout(() => { // wait for modal dom is ready
                                    props.callback.call(content);
                                }, ui.globals.ease * 2);

                            }

                        }, 10);

                    }, ui.globals.ease);

                }, 10);

            }

            // get source
            if (props.type === undefined) { // inner sources

                // check the modal created before
                props.source = ui.find(props.source);
                if (props.source[0] === undefined) { return; }

                created = ui.closest(props.source, '.' + ui.modal.targetWin);
                if (created.length > 0) { // modal created before

                    ui.addClass(created, ui.modal.nameActive);
                    win = ui.find('.' + ui.modal.targetWin + '.' + ui.modal.nameActive)[0];

                    content = ui.find('.' + ui.modal.nameContent, win)[0];
                    showModal();

                    // reset forms
                    forms = ui.find('form', content);
                    ui.each(forms,

                        function () {
                            this.reset();
                        });

                } else { // create modal

                    // move source
                    temp = document.createDocumentFragment();

                    ui.each(props.source,

                        function (i) {
                            temp.appendChild(props.source[i]);
                        });

                    createModal();
                    content.appendChild(temp);

                    checkHeaderFooter();
                    showModal();

                }

            } else { // other source types

                typeArr = [ui.modal.typeAjax, ui.modal.typeIframe];

                if (typeArr.indexOf(props.type) > -1) {
                    type = props.type;
                }

                if (type === ui.modal.typeIframe) { // iframe sources

                    temp = '<iframe '+
                                'class="' + ui.modal.nameIframe + ' ' + ui.modal.nameRemovable + '" '+
                                'src="' + props.source + '" ' +
                                'frameborder="0" ' +
                                'allowfullscreen' +
                            '>' +
                            '</iframe>';

                    createModal();
                    content.insertAdjacentHTML('beforeend', temp);

                    showModal();

                } else if (type === ui.modal.typeAjax) { // ajax sources

                    ui.ajax({

                        url : props.source,
                        callback: (status, response) => {

                            if (status === 'success') {

                                temp = '<div class="' + ui.modal.target + ' ' + ui.modal.nameRemovable + '">' +
                                            response +
                                        '</div>';

                                createModal();
                                content.insertAdjacentHTML('beforeend', temp);

                                checkHeaderFooter();
                                showModal();

                            }

                        }

                    });

                }

            }

            return false;

        };

        // Event Listeners
        function userClose() {

            var p = ui.find('.' + ui.modal.targetWin + '.' + ui.modal.nameShow + '.' + ui.modal.nameClosable)[0];
            if (p !== undefined) { ui.modal.close(); }

        }

        ui.on(document, 'click', '.' + ui.modal.nameModalClose, ui.modal.close);
        ui.on(document, 'click', '.' + ui.modal.targetBg, userClose);

        ui.on(document, 'keydown', function (e) {
            if (e.keyCode === 27) { userClose(); } // esc
        });

    };

    // loaders
    ui.onload(ui.modal.Start);
    ui.on(window, 'resize', modalResizer);

})();

/* photoslide */

ui.photoslide = {

    // targets
    target: 'ui-photoslide',

    // main classnames
    nameNav: 'ui-photoslide-nav',

    namePrev: 'ui-photoslide-prev',
    nameNext: 'ui-photoslide-next',

    // helper classNames
    nameShow: 'ui-show',
    nameSelected: 'ui-selected',

    nameLoaded: 'ui-loaded',

    // outer classnames
    nameBtn: 'ui-btn',

    // tags
    tagNavDot: 'i',

    // values
    rexFiles: '(\.png|\.gif|\.jeg|\.jpg|\.svg)$', // .webp and .tiff not supported!

    // data attributes
    dataSrc: 'data-ui-src'

};

(() => {

    var
        count,
        dataSrcLists,
        loadedImages;

    ui.photoslide.Init = () => {

        var slider, j, images, dataSrc, nav, navDots, re;

        images = ui.find('.' + ui.photoslide.target + ' img');
        ui.each(images,

            function (i) {

                if (dataSrcLists[i] !== undefined) { return; }
                dataSrc = images[i].getAttribute(ui.photoslide.dataSrc);

                slider = ui.closest(this, '.' + ui.photoslide.target)[0];
                ui.addClass(slider, ui.photoslide.nameLoaded);

                if (dataSrc !== null && dataSrc !== '') {

                    loadedImages[i] = [];
                    dataSrcLists[i] = dataSrc.replace(/[\s]/g, '').split(',');

                } else {

                    dataSrcLists[i] = '';
                    return;

                }

                re = new RegExp(ui.photoslide.rexFiles);
                if (!dataSrcLists[i][0].match(re)) { return; }

                images[i].removeAttribute(ui.photoslide.dataSrc);

                // create nav
                nav = ui.find('.' + ui.photoslide.nameNav, slider)[0];
                if (dataSrcLists[i].length > 1) {

                    ui.addClass(ui.find('.' + ui.photoslide.nameBtn, slider), ui.photoslide.nameShow);
                    ui.addClass(nav, ui.photoslide.nameShow);

                    if (nav.innerHTML === '') {

                        navDots = '';

                        for (j = 0; j < dataSrcLists[i].length; j++) {

                            if (j === 0) {
                                navDots += '<' + ui.photoslide.tagNavDot + ' class="' + ui.photoslide.nameSelected + '"></' + ui.photoslide.tagNavDot + '>';

                            } else {
                                navDots += '<' + ui.photoslide.tagNavDot + '></' + ui.photoslide.tagNavDot + '>';
                            }

                        }

                        nav.insertAdjacentHTML('beforeend', navDots);

                    }

                }

            });

    };

    ui.photoslide.Start = () => {

        // empty arrays when reloading
        count = [];
        dataSrcLists = [];
        loadedImages = [];

        ui.photoslide.Init();

        // Event Listeners
        ui.on(document,

            'click', '.' + ui.photoslide.target + ' .' + ui.photoslide.nameBtn,

            function (e) {

                e.preventDefault();
                var slider, i, img, total, dots;

                slider = ui.closest(this, '.' + ui.photoslide.target)[0];
                if (slider === undefined) { return; }

                img = ui.find('img', slider)[0];

                i = Array.prototype.slice.call(ui.find('.' + ui.photoslide.target)).indexOf(slider);
                if (count[i] === undefined) { count[i] = 0; }

                total = (dataSrcLists[i].length - 1);

                if (ui.hasClass(this, ui.photoslide.namePrev)) {

                    if (count[i] <= 0) {
                        count[i] = 0; return;
                    }

                    count[i] -= 1;

                } else if (ui.hasClass(this, ui.photoslide.nameNext)) {

                    if (count[i] >= total) {
                        count[i] = total; return;
                    }

                    count[i] += 1;

                }

                dots = ui.find('.' + ui.photoslide.nameNav + ' i', slider);

                ui.removeClass(dots, ui.photoslide.nameSelected);
                ui.addClass(dots[count[i]], ui.photoslide.nameSelected);

                ui.removeClass(slider, ui.photoslide.nameLoaded);

                if (loadedImages[i][count[i]] === undefined) {

                    loadedImages[i][count[i]] = new Image();
                    loadedImages[i][count[i]].src = dataSrcLists[i][count[i]];

                    loadedImages[i][count[i]].onload = () => {

                        img.src = loadedImages[i][count[i]].src;
                        ui.addClass(slider, ui.photoslide.nameLoaded);

                    };

                    img.onerror = () => {
                        ui.removeClass(slider, ui.photoslide.nameLoaded);
                    };


                } else {

                    img.src = loadedImages[i][count[i]].src;
                    ui.addClass(slider, ui.photoslide.nameLoaded);

                }

            });

    };

    // loaders
    ui.onload(ui.photoslide.Start);

    // ajax callback loader
    ui.on(document,
        ui.globals.eventAjaxCallback,

        () => {

            if (ui.ajax.classNames.indexOf(ui.photoslide.target) > -1) {
                ui.photoslide.Init();
            }

        });

})();

/* sidebar */

ui.sidebar = {

    // targets
    target: 'ui-sidebar',
    targetBg: 'ui-sidebar-bg',

    // main classnames
    nameOpened: 'ui-sidebar-opened',
    nameClose: 'ui-sidebar-close',
    nameContent: 'ui-sidebar-content',

    nameTargetPrefix: 'ui-sbid-',
    nameShowPrefix: 'ui-sidebar-',
    nameShowMenuPrefix: 'ui-sidebar-show-',
    nameAddContentPrefix: 'ui-sidebar-add-',

    nameLeftSuffix: 'l',
    nameRightSuffix: 'r',

    // helper classnames
    nameOpen: 'ui-open',
    nameOpenEase: 'ui-open-ease',

    // styling classnames
    stylesBg: 'ui-ease-slow ui-ease-layout',

    // tags
    tagDataTarget: 'i',

    // data attributes
    dataID: 'data-ui-sbid',
    dataImport: 'data-ui-import',

    // custom events
    eventMenuOpen: 'ui:sidebarOpen'

};

(() => {

    var getScrollPos;

    ui.sidebar.close = function (panel) {

        var i, id, el, contents, bg;

        bg = ui.find('.' + ui.sidebar.targetBg)[0];

        ui.removeClass(panel, ui.sidebar.nameOpenEase);
        ui.removeClass(bg, ui.sidebar.nameOpenEase);

        ui.removeClass(document, ui.sidebar.nameOpened);

        setTimeout(() => {

            ui.removeClass(panel, ui.sidebar.nameOpen);
            ui.removeClass(bg, ui.sidebar.nameOpen);

        }, ui.globals.slow);

        contents = ui.find('[' + ui.sidebar.dataID + ']');

        for (i = 0; i < contents.length; i++) {

            id = '.' + ui.sidebar.nameTargetPrefix + contents[i].getAttribute(ui.sidebar.dataID);
            el = ui.find(id)[0];

            contents[i].removeAttribute(ui.sidebar.dataID);

            el.appendChild(contents[i]);
            el.parentNode.insertBefore(el.firstChild, el);

            el.parentNode.removeChild(el);

        }

        ui.off('.' + ui.sidebar.nameClose, 'click');

    };

    ui.sidebar.Start = () => {

        // Event Listeners
        ui.on(document,
            'click',

            '[class*="' + ui.sidebar.nameShowMenuPrefix + '"]',

            function () {

                var html, importers, moveFnc, id, i, j, index, indexArr, position, bg, panel, filtered, content;

                html = [];
                position = ui.sidebar.nameLeftSuffix;

                if (ui.hasClass(this, ui.sidebar.nameShowMenuPrefix + ui.sidebar.nameRightSuffix)) {
                    position = ui.sidebar.nameRightSuffix;
                }

                moveFnc = function (that, j) {

                    id = new Date().getTime();
                    id = id.toString();
                    id = id.substring(id.length - 4, id.length) + j;

                    that.insertAdjacentHTML(
                        'beforebegin',

                        '<' + ui.sidebar.tagDataTarget + ' class="' + ui.sidebar.nameTargetPrefix + id + '" style="display: none;">' +
                        '</' + ui.sidebar.tagDataTarget + '>'
                    );

                    that.setAttribute(ui.sidebar.dataID, id);

                    html[j] = document.createDocumentFragment();
                    html[j].appendChild(that);

                };

                importers = ui.find('.' + ui.sidebar.nameAddContentPrefix + position);

                if (importers.length === 1) {
                    moveFnc(importers[0], 0);

                } else if (importers.length > 1) {

                    indexArr = [];

                    for (i = 0; i < importers.length; i++) {

                        index = importers[i].getAttribute(ui.sidebar.dataImport);

                        if (index !== null && index !== '') {
                            indexArr.push(Number(index));

                        } else {
                            indexArr.push(i);
                        }

                    }

                    for (i = 0; i < importers.length; i++) {
                        moveFnc(importers[i], indexArr[i]);
                    }

                } else { return; }

                panel = ui.find('.' + ui.sidebar.target + '.' + ui.sidebar.nameShowPrefix + position);
                content = ui.find('.' + ui.sidebar.nameContent, panel);

                filtered = html.filter((el) => el != null);

                for (j = 0; j < filtered.length; j++) {
                    content.appendChild(filtered[j]);
                }

                bg = ui.find('.' + ui.sidebar.targetBg)[0];
                if (bg === undefined) {

                    ui.find('body')[0].insertAdjacentHTML(
                        'beforeend',
                        '<div class="' + ui.sidebar.targetBg + ' ' + ui.sidebar.stylesBg + '"></div>'
                    );

                    bg = ui.find('.' + ui.sidebar.targetBg)[0];

                }

                ui.addClass(document, ui.sidebar.nameOpened);

                ui.addClass(panel, ui.sidebar.nameOpen);
                ui.addClass(bg, ui.sidebar.nameOpen);

                setTimeout(() => {

                    ui.addClass(panel, ui.sidebar.nameOpenEase);
                    ui.addClass(bg, ui.sidebar.nameOpenEase);

                    setTimeout(() => {
                        ui.trigger(document, ui.sidebar.eventMenuOpen + ' ' + ui.globals.eventDomChange); // set custom event
                    }, ui.globals.slow);

                }, 10);

                ui.on('.' + ui.sidebar.nameClose,
                    'click',

                    function () {
                        ui.sidebar.close(panel);
                    });

            });

        ui.on(document,
            'click',

            '.' + ui.sidebar.targetBg,

            function () {

                var panel = ui.find('.' + ui.sidebar.target + '.' + ui.sidebar.nameOpen);
                ui.sidebar.close(panel);

            });

    };

    // loaders
    ui.onload(ui.sidebar.Start);

    ui.on(window,
        'resize',

        () => {

            if (window.innerWidth === getScrollPos) { return; } // close only horizontal resizing

            var panel = ui.find('.' + ui.sidebar.target + '.' + ui.sidebar.nameOpen);

            if (panel.length > 0) {
                ui.sidebar.close(panel);
            }

            getScrollPos = window.innerWidth;

        });

})();

/* tooltip */

ui.tooltip = {

    // targets
    target: 'ui-tooltip',

    // main classnames
    nameTooltipOpened: 'ui-tooltip-opened',
    nameActive: 'ui-tooltip-active',
    nameContent: 'ui-tooltip-content',

    // helper classnames
    nameOpen: 'ui-open',
    nameOpenEase: 'ui-open-ease',

    // styling classnames
    stylesTarget: 'ui-round ui-ease-tooltip',
    stylesArrow: '',

    // values
    scrollbarSize: 15,

    t: 't',
    b: 'b',
    r: 'r',
    l: 'l',

    tr: 'tr',
    tl: 'tl',
    br: 'br',
    bl: 'bl',

    // data attributes
    dataTooltip: 'data-ui-tooltip',
    dataTitle: 'data-ui-title',
    dataPos: 'data-ui-pos',

    dataDesktop: 'data-ui-only="desktop"',
    dataMobile: 'data-ui-only="mobile"',

    // custom events
    eventClose: 'ui:tooltipClose'

};

(() => {

    var
        removeTimer,
        removeTimer2x,
        pageTouchmoveTimer,
        tooltipOpenedTimer,

        touchControl,
        isScrolling;

    function removeFnc() {

        var that = ui.find('.' + ui.tooltip.target)[0];
        if (that === undefined) { return; }

        clearTimeout(removeTimer);

        removeTimer = setTimeout(() => {
            ui.removeClass(that, ui.tooltip.nameOpenEase);

            removeTimer2x = setTimeout(() => {

                ui.removeClass(that, ui.tooltip.nameOpen);

                var parent = that.parentNode;

                if (parent !== null) {
                    parent.removeChild(that);
                }

            }, ui.globals.ease);

        }, ui.globals.ease);

    }

    function createFnc(source, title) {

        var win, winRect, html, sourceRect, arr, pos, posRecall, calc;

        win = ui.find('.' + ui.tooltip.target);
        sourceRect = source.getBoundingClientRect();

        // clear remove timers
        clearTimeout(removeTimer);
        clearTimeout(removeTimer2x);

        // create
        if (win.length > 0) {
            ui.find('.' + ui.tooltip.nameContent, win[0])[0].innerHTML = title;

        } else {

            html = '<div class="' + ui.tooltip.target + ' ' + ui.tooltip.stylesTarget + '">' +

                        '<div class="' + ui.tooltip.nameContent + '">' +
                            title +
                        '</div>' +
                        '<span>' +
                            '<i class="' + ui.tooltip.stylesArrow + '"></i>' +
                        '</span>' +

                    '</div>';

            ui.find('body')[0].insertAdjacentHTML('afterbegin', html);
            win = ui.find('.' + ui.tooltip.target);

        }

        // show
        ui.addClass(win, ui.tooltip.nameOpen);
        setTimeout(() => {

            // check screen limits
            winRect = win[0].getBoundingClientRect();

            // detect defined position
            arr = [ui.tooltip.t, ui.tooltip.b, ui.tooltip.r, ui.tooltip.l, ui.tooltip.tr, ui.tooltip.tl, ui.tooltip.br, ui.tooltip.bl];

            pos = source.getAttribute(ui.tooltip.dataTooltip);
            if (arr.indexOf(pos) < 0) {
                pos = ui.tooltip.t;
            }

            // calculate positioning
            calc = [];

            calc.ver = 0;
            calc.hor = 0;

            calc.reCall = false;

            calc.Fnc = function () {

                if (pos === ui.tooltip.t || pos === ui.tooltip.b) { // top || bottom
                    calc.hor = (sourceRect.width - winRect.width) / 2;
                }

                if (pos === ui.tooltip.t || pos === ui.tooltip.tr || pos === ui.tooltip.tl) { // top
                    calc.ver = -sourceRect.height + (sourceRect.height - winRect.height) - ui.tooltip.scrollbarSize;

                } else if (pos === ui.tooltip.b || pos === ui.tooltip.br || pos === ui.tooltip.bl) { // bottom
                    calc.ver = sourceRect.height + ui.tooltip.scrollbarSize;

                } else if (pos === ui.tooltip.r) { // right

                    calc.ver = (sourceRect.height / 2) - (winRect.height / 2);
                    calc.hor = sourceRect.width + ui.tooltip.scrollbarSize;

                } else if (pos === ui.tooltip.l) { // left

                    calc.ver = (sourceRect.height / 2) - (winRect.height / 2);
                    calc.hor = -sourceRect.width + (sourceRect.width - winRect.width) - ui.tooltip.scrollbarSize;

                }

                if (pos === ui.tooltip.tr || pos === ui.tooltip.br) { // top right || bottom right
                    calc.hor = (sourceRect.width / 2) - ui.tooltip.scrollbarSize;

                } else if (pos === ui.tooltip.tl || pos === ui.tooltip.bl) { // top left || bottom left
                    calc.hor = -(sourceRect.width / 2) + (sourceRect.width - winRect.width) + ui.tooltip.scrollbarSize;
                }

            };
            calc.Fnc();

            // check screen limits
            posRecall = '';

            if (sourceRect.top - window.pageYOffset + calc.ver < -window.pageYOffset) { // top
                posRecall += ui.tooltip.b;

            } else if (sourceRect.top + window.pageYOffset + winRect.height + calc.ver > window.innerHeight + window.pageYOffset) { // bottom
                posRecall += ui.tooltip.t;
            }

            if (sourceRect.left + window.pageXOffset + calc.hor + winRect.width > window.innerWidth + window.pageXOffset) { // right
                posRecall += ui.tooltip.l;

            } else if (sourceRect.left - window.pageXOffset + calc.hor < 0) { // left
                posRecall += ui.tooltip.r;
            }

            if (posRecall !== '') { calc.reCall = true; }
            if (calc.reCall) {

                pos = posRecall;
                calc.Fnc();

            }

            win[0].style.top = (sourceRect.top + window.pageYOffset + calc.ver) + 'px';
            win[0].style.left = (sourceRect.left + window.pageXOffset + calc.hor) + 'px';

            win[0].setAttribute(ui.tooltip.dataPos, pos);
            ui.addClass(win, ui.tooltip.nameOpenEase);

        }, 10);

    }

    function tooltipFnc(that, type) {

        var title, dataTitle;

        title = that.getAttribute('title');
        if (type === "show" && title !== null && title !== '') {

            clearTimeout(tooltipOpenedTimer);
            ui.addClass(document, ui.tooltip.nameTooltipOpened);

            createFnc(that, title);

            that.setAttribute(ui.tooltip.dataTitle, title);
            that.removeAttribute('title');

            ui.addClass(that, ui.tooltip.nameActive);

        } else {

            dataTitle = that.getAttribute(ui.tooltip.dataTitle);
            if (dataTitle !== null && dataTitle !== '') {

                if (type === 'close' || type === 'hide') {

                    removeFnc();

                    ui.removeClass(that, ui.tooltip.nameActive);
                    clearTimeout(tooltipOpenedTimer);

                    tooltipOpenedTimer = setTimeout(() => {
                        ui.removeClass(document, ui.tooltip.nameTooltipOpened);
                    }, ui.globals.ease);

                }

                if (type === 'close') {

                    that.removeAttribute(ui.tooltip.dataTitle);
                    that.setAttribute('title', dataTitle);

                }

            }

        }

    }

    ui.tooltip.Start = () => {

        // Event Listeners
        ui.on(document,
            'mouseenter mouseleave mousedown',

            '[' + ui.tooltip.dataTooltip + ']:not([' + ui.tooltip.dataMobile + '])',

            function (e) {

                if (ui.userAgents.desktop) {

                    var type;

                    if (e.type === 'mouseenter') {
                        type = "show";

                    } else if (e.type === 'mousedown') {
                        type = "hide";

                    } else { type = 'close'; }

                    tooltipFnc(this, type);

                }

            });

        ui.on(document,
            'touchstart touchmove touchend',

            '[' + ui.tooltip.dataTooltip + ']:not([' + ui.tooltip.dataDesktop + '])',

            function (e) {

                var that = this;

                if (e.type === 'touchstart') {
                    touchControl = ui.hasClass(that, ui.tooltip.nameActive);
                }

                ui.off(that, 'touchmove.' + ui.tooltip.eventClose);

                ui.on(that,
                    'touchmove.' + ui.tooltip.eventClose,

                    function () {
                        isScrolling = true;
                    });

                if (e.type === 'touchend') {

                    if (isScrolling) {

                        isScrolling = false;
                        return;

                    }

                    if (!touchControl) {
                        e.preventDefault();
                    }

                    clearTimeout(pageTouchmoveTimer);
                    pageTouchmoveTimer = setTimeout(() => {

                        tooltipFnc(that, "show");
                        ui.on(document,
                            'touchend.' + ui.tooltip.eventClose,

                            function () {

                                tooltipFnc(that, 'close');
                                ui.off(document, 'touchend.' + ui.tooltip.eventClose);

                            });

                    }, ui.globals.fast / 2);

                }

            });

    };

    // loaders
    ui.onload(ui.tooltip.Start);

})();

/* weather */

ui.weather = {

    // targets
    target: 'ui-weather',

    // main classnames
    nameGraphs: 'ui-graphs',
    nameNight: 'ui-night',
    nameClear: 'ui-clear',

    nameWday: 'ui-w-dayname',
    nameWdate: 'ui-w-date',
    nameWclock: 'ui-w-clock',

    nameAnimatePrefix: 'ui-',

    // helper classnames
    nameLoaded: 'ui-loaded',

    // animations
    animateClear: 'clear',
    animateStars: 'stars',
    animateShootingStar: 'shooting-star',
    animateCloud: 'cloud',
    animateCloudHeavy: 'cloud-heavy',
    animateFog: 'fog',

    // values
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],

    graphPath: '../public/img/weather/', // animation graphics folder
    fileType: 'png',

    // data attributes
    dataGraphs: 'data-ui-graphs',
    dataDay: 'data-ui-day'

};

(() => {

    var
        dateLoaded,
        clockLoaded,

        re = new RegExp('\\s+\\s'),
        rex = new RegExp('^\\s|\\s+$');

    ui.weather.Start = () => {

        var date, dateText, dateHtml, clockText, clockHtml, minute, hour, day, month, that, graphs, animations, sun, sunPos, sunrise, sunset;

        animations = [];

        // load animation graphics
        ui.weather.Init = () => {

            var i, html;

            graphs = ui.find('.' + ui.weather.target + ' .' + ui.weather.nameGraphs + ':not(.' + ui.weather.nameLoaded + ')');
            ui.each(graphs,

                function () {

                    var data = this.getAttribute(ui.weather.dataGraphs);
                    if (data !== null && data !== '') {

                        data = data.replace(re, ' ').replace(rex, '');
                        if (data !== '') {

                            data = data.split(' ');
                            if (data.length > 0) {

                                html = '';
                                animations = [];

                                ui.addClass(this, ui.weather.nameLoaded);

                                for (i = 0; i < data.length; i++) {

                                    if (data[i] === ui.weather.animateClear) { // convert sun to stars
                                        animations.push(ui.weather.animateStars);

                                    } else if (data[i] === ui.weather.animateStars) { // convert stars to sun
                                        animations.push(ui.weather.animateClear);
                                    }

                                    if (data.length === 1 && (data[i] === ui.weather.animateCloud || data[i] === ui.weather.animateFog)) { // add sun and stars for cloudy and foggy weather

                                        animations.push(ui.weather.animateClear);
                                        animations.push(ui.weather.animateStars);

                                    }

                                    if (data[i] === ui.weather.animateCloudHeavy) { // add stars for mostly cloudy weather
                                        animations.push(ui.weather.animateStars);
                                    }

                                    if (data.length === 1 && (data[i] === ui.weather.animateClear || data[i] === ui.weather.animateStars)) { // add shooting star if weather is clear
                                        animations.push(ui.weather.animateShootingStar);
                                    }

                                    animations.push(data[i]); // add other animations

                                }

                                // create animations
                                for (i = 0; i < animations.length; i++) {
                                    html += '<div ' +
                                                'class="' + ui.weather.nameAnimatePrefix + animations[i] + '" ' +
                                                'style="background-image: url(' + ui.weather.graphPath + animations[i] + '.' + ui.weather.fileType + ');">' +
                                            '</div>';
                                }

                                this.insertAdjacentHTML('beforeend', html);
                                html = '';

                            }

                        }

                    }

                });

        };
        ui.weather.Init();

        // check date, clock and night
        function dateFnc() {

            // date
            date = new Date();

            day = date.getDay();
            if (day === 0) { day = 6; } else { day -= 1; }

            dateText = ui.weather.days[day];

            day = day.toString();
            if (day.length === 1) { day = '0' + day; }

            month = date.getMonth();
            month = ui.weather.months[month];

            dateHtml = '<span class="' + ui.weather.nameWday + '">' + dateText + '</span>, ' + month + ' ' + date.getDate() + ', ' + date.getFullYear();
            dateText = dateText + ', ' + month + ' ' + day + ', ' + date.getFullYear();

            if (dateLoaded !== dateText) {

                ui.each('.' + ui.weather.nameWdate,

                    function () {
                        this.innerHTML = dateHtml;
                    });

            }

            dateLoaded = dateText;

            // clock
            hour = date.getHours().toString();
            if (hour.length === 1) { hour = '0' + hour; } // convert two digits

            minute = date.getMinutes().toString();
            if (minute.length === 1) { minute = '0' + minute; }

            clockHtml = '<span>' + hour + '</span><span>' + minute + '</span>';
            clockText = hour + ':' + minute;

            if (clockLoaded !== clockText) {

                ui.each('.' + ui.weather.nameWclock,

                    function () {
                        this.innerHTML = clockHtml;
                    });

                // check sunrise and sunset
                graphs = ui.find('.' + ui.weather.target + ' .' + ui.weather.nameGraphs + '[' + ui.weather.dataDay + ']');
                ui.each(graphs,

                    function () {

                        sunPos = this.getAttribute(ui.weather.dataDay);
                        if (sunPos === null || sunPos === '') { return; }

                        sunPos = sunPos.split(',');
                        if (sunPos.length !== 2) { return; }

                        sunrise = sunPos[0].split(':');
                        if (sunrise.length !== 2) { return; }

                        if (sunrise[0].length === 1) { sunrise[0] = '0' + sunrise[0]; } // sunrise hour
                        if (sunrise[1].length === 1) { sunrise[1] = '0' + sunrise[1]; } // sunrise minute

                        sunset = sunPos[1].split(':');
                        if (sunset.length !== 2) { return; }

                        if (sunset[0].length === 1) { sunset[0] = '0' + sunset[0]; } // sunset hour
                        if (sunset[1].length === 1) { sunset[1] = '0' + sunset[1]; } // sunset minute

                        // convert day or night
                        sun = ui.find('.' + ui.weather.nameClear, this)[0];
                        that = ui.closest(this, '.' + ui.weather.target)[0];

                        if (((hour === sunrise[0] && minute < sunrise[1]) || hour < sunrise[0]) || ((hour === sunset[0] && minute > sunset[1]) || hour > sunset[0])) { // night

                            ui.addClass(that, ui.weather.nameNight);

                            // sun positioning
                            if (sun !== undefined) {
                                sun.style.removeProperty('left');
                            }

                        } else { // day

                            ui.removeClass(that, ui.weather.nameNight);

                            // sun positioning
                            if (sun !== undefined) {
                                sun.style.left = parseInt(hour - sunrise[0]) * 100 / (sunset[0] - sunrise[0]) + '%';
                            }

                        }

                    });

            }

            clockLoaded = clockText;

        }

        dateFnc();
        setInterval(dateFnc, 1000);

    };

    // loaders
    ui.onload(ui.weather.Start);

    // ajax callback loader
    ui.on(document,
        ui.globals.eventAjaxCallback,

        () => {

            if (ui.ajax.classNames.indexOf(ui.weather.target) > -1) {
                ui.weather.Init();
            }

        });

})();

/* donut chart */

ui.donutChart = {

    // targets
    target: 'ui-donut-chart',
    targetBg: 'ui-donut-chart-bg',

    // helper classnames
    nameLoaded: 'ui-loaded',
    nameSelected: 'ui-selected',

    // tags
    tagMsg: 'strong',

    // data attributes
    dataPercent: 'data-ui-percent',
    dataTitle: 'data-ui-title',
    dataMsg: 'data-ui-msg'

};

ui.donutChart.Start = () => {

    ui.donutChart.Init = () => {

        const chart = ui.find('.' + ui.donutChart.target);
        if (chart.length > 0) {

            let arrPercent = [];
            let arrAngle = [];

            Array.prototype.forEach.call(chart,

                el => {

                    const circles = ui.find('circle:not(.' + ui.donutChart.targetBg + ')', el);

                    if (circles.length > 1) {
                        ui.addClass(el, 'multiple');
                    }

                    Array.prototype.forEach.call(circles,

                        (item, j) => {

                            const percent = item.getAttribute(ui.donutChart.dataPercent);
                            arrPercent.push(percent);

                            let dasharray = Math.round(percent * 4.4);
                            if (dasharray < 0) { dasharray = 0; }

                            item.setAttribute('stroke-dasharray', dasharray + ', 440');
                            if (j > 0) {

                                const angle = Math.floor(arrAngle[j - 1] + ((arrPercent[j - 1]) * 3.6));
                                arrAngle.push(angle);

                                item.setAttribute('transform', 'rotate(' + angle + ' 80 80)'); // rotate(angle, cx, cy); All IE browsers not supported CSS only transforms

                            } else { arrAngle.push(0); }

                            if (ui.userAgents.ie) {
                                el.style.height = el.offsetWidth + 'px'; // transformed circle has highest height on IE
                            }

                            ui.addClass(item, ui.donutChart.nameLoaded);

                        });

                    arrPercent = [];
                    arrAngle = [];

                });

        }

    };
    ui.donutChart.Init();

    // Event Listeners
    ui.on(document,
        'mouseenter mouseleave touchend',

        '.' + ui.donutChart.target + ' circle[' + ui.donutChart.dataTitle + ']',

        function (e) {

            const chart = ui.closest(this, '.' + ui.donutChart.target)[0];

            let msg = ui.find(ui.donutChart.tagMsg, chart)[0];
            const circle = ui.find('circle', chart);

            setTimeout(() => {
                ui.removeClass(circle, ui.donutChart.nameSelected);
            }, 0);

            if (e.type === 'mouseleave') {
                msg.innerHTML = msg.getAttribute(ui.donutChart.dataMsg);

            } else {

                // show titles
                if (msg === undefined) {

                    chart.insertAdjacentHTML(
                        'beforeEnd',
                        '<' + ui.donutChart.tagMsg + '></' + ui.donutChart.tagMsg + '>'
                    );

                    msg = ui.find(ui.donutChart.tagMsg, chart)[0];

                }

                const msgTitle = msg.getAttribute(ui.donutChart.dataMsg);

                if (msgTitle === null) {
                    msg.setAttribute(ui.donutChart.dataMsg, msg.innerHTML);
                }

                const title = this.getAttribute(ui.donutChart.dataTitle);

                setTimeout(() => {

                    if (title !== null && title !== '') {
                        msg.innerHTML = title;
                    }

                    ui.addClass(this, ui.donutChart.nameSelected);

                }, 0);

            }

        });

};

// loaders
ui.onload(ui.donutChart.Start);
ui.on(document, ui.globals.eventDomChange, ui.donutChart.Start);

// ajax callback loader
ui.on(document,
    ui.globals.eventAjaxCallback,

    () => {

        if (ui.ajax.classNames.indexOf(ui.donutChart.target) > -1) {
            ui.donutChart.Init();
        }

    });

/* line chart */

ui.lineChart = {

    // targets
    target: 'ui-line-chart-holder',

    // main classnames
    nameLines: 'ui-line-chart',

    nameGridRoot: 'ui-line-root-grid',
    nameGridX: 'ui-line-x-grid',
    nameGridY: 'ui-line-y-grid',

    nameInfo: 'ui-line-chart-info',

    nameTypePrefix: 'ui-',

    // helper classnames
    nameLoaded: 'ui-loaded',
    nameNotLoaded: 'ui-no-loaded',

    nameResized: 'ui-resized',

    // ids
    idGradient: 'ui-gradient',

    // tags
    tagLines: 'li',

    tagInfoColor: 'span',
    tagInfoStat: 'b',

    // values
    colors: [
        'hsl(30, 100%, 63%)',
        'hsl(347, 100%, 69%)',
        'hsl(260, 100%, 70%)',
        'hsl(180, 48%, 52%)',
        'hsl(42, 100%, 67%)',
        'hsl(13, 26%, 41%)',
        'hsl(65, 49%, 54%)',
        'hsl(0, 0%, 42%)',
        'hsl(225, 43%, 57%)'
    ],

    showGrid: true,
    showGridText: true,
    showInfo: true,

    rows: 5,
    rowsHeight: 50,

    curveSize: 1,

    gridStroke: 1,
    gridStrokeArray: 4,

    lineStroke: 2,
    circleSize: 4,

    top: 6,
    right: 16,
    bottom: 15,
    left: 35,

    dotted: 'dotted',
    dashed: 'dashed',
    curved: 'curved',
    filled: 'filled',

    // data attributes
    dataX: 'data-ui-x',
    dataY: 'data-ui-y',

    dataSize: 'data-ui-size',
    dataLink: 'data-ui-url',
    dataType: 'data-ui-type',
    dataName: 'data-ui-name',
    dataStep: 'data-ui-step'

};

// load charts
ui.lineChart.Start = () => {

    var charts, lines, data, x, y, yMax, yMin, link, size, rows, rowsHeight, col, posX, posY, html, type, pathStart, paths, circles, total, name;

    ui.lineChart.Init = function (method, resizer) {

        if (method === ui.lineChart.nameLoaded) {
            charts = ui.find('.' + ui.lineChart.target + '.' + ui.lineChart.nameLoaded);

        } else if (method === ui.globals.eventDomChange) {
            charts = ui.find('.' + ui.lineChart.target + ':not(.' + ui.lineChart.nameLoaded + '):not(.' + ui.lineChart.nameResized + ')');

        } else {
            charts = ui.find('.' + ui.lineChart.target + ':not(.' + ui.lineChart.nameLoaded + ')');
        }

        if (charts.length === 0) { return; }

        ui.each(charts,

            function () {

                lines = ui.find('.' + ui.lineChart.nameLines, this);
                if (lines.length === 0) { return; }

                data = [];

                data.name = [];
                data.color = [];
                data.backup = [];

                if (resizer !== undefined && resizer) {
                    ui.addClass(this, ui.lineChart.nameLoaded + ' ' + ui.lineChart.nameResized);

                } else {
                    ui.addClass(this, ui.lineChart.nameLoaded);
                }

                // calculate height of chart
                size = this.getAttribute(ui.lineChart.dataSize);

                rows = ui.lineChart.rows;
                rowsHeight = ui.lineChart.rowsHeight;

                if (size !== null && size !== '') {

                    size = size.split(',');
                    if (!isNaN(size[0]) && !isNaN(size[1])) {

                        rows = parseInt(size[0]);
                        rowsHeight = size[1];

                    }

                }

                data.width = this.offsetWidth;
                data.height = rows * rowsHeight;

                // read all x parameters
                x = this.getAttribute(ui.lineChart.dataX);

                if (x !== null && x !== '') {
                    data.x = x.split(',');

                } else { return; }

                x = data.x;

                // read all y parameters
                yMax = [];
                data.pass = false;

                Array.prototype.forEach.call(lines,

                    (el, i) => {

                        data[i] = [];

                        data[i].y = [];
                        data[i].links = [];

                        data.backup += el.outerHTML;

                        Array.prototype.forEach.call(ui.find(ui.lineChart.tagLines, el),

                            (item) => {

                                y = item.getAttribute(ui.lineChart.dataY);

                                if (y !== null && y !== '') {
                                    data[i].y.push(y);

                                } else { return; }

                                link = item.getAttribute(ui.lineChart.dataLink);

                                if (link !== null && link !== '') {
                                    data[i].links.push(link);

                                } else {
                                    data[i].links.push('');
                                }

                            });

                        if (data.x.length === data[i].y.length) {
                            yMax.push(data[i].y); // push y datas to calculate the max value of all datas

                        } else {
                            data.pass = true; // x and y datas are not equal
                        }

                    });

                if (data.pass) { return; }

                // get min and max values of all y datas
                yMax = yMax.toString().split(',');

                yMax = yMax.filter((item, pos) => yMax.indexOf(item) === pos); // convert array as unique
                yMax = yMax.sort((a, b) => b - a); // convert array as desc

                yMin = parseInt(yMax[yMax.length - 1]);
                yMax = Math.ceil((parseInt(yMax[0]) - yMin) / rows) * rows + yMin; // convert yMax to divide with rows

                // start html
                data.svgHeight = data.height;

                if (ui.lineChart.showInfo || ui.lineChart.showGridText) {
                    data.svgHeight += 15;
                }

                html = '<svg style="width: ' + data.width + 'px; height: ' + data.svgHeight + 'px;">';

                // check column stepping
                data.step = this.getAttribute(ui.lineChart.dataStep);
                if (data.step !== null && data.step !== '' && data.step !== '0') {

                    if (isNaN(data.step)) {
                        data.step = false;

                    } else {

                        data.stepArr = [];

                        for (let m = 0; m < Math.ceil(x.length / data.step); m++) {
                            data.stepArr.push(m * data.step);
                        }

                    }

                } else { data.step = false; }

                // create grids
                col = (data.width - (ui.lineChart.right + ui.lineChart.left)) / (x.length - 1);
                html += '<g class="' + ui.lineChart.nameGridX + '">';

                for (let k = 0; k < x.length; k++) {

                    posX = (k * col) + ui.lineChart.left;

                    if (ui.lineChart.showGridText) {

                        if (data.step) {

                            if (data.stepArr.indexOf(k) > -1) {

                                html += '<text ' +
                                            'x="' + posX + '" ' +
                                            'y="' + (data.height - ui.lineChart.bottom + 20) +
                                        '">' +
                                            x[k] +
                                        '</text>';
                            }

                        } else {

                            html += '<text ' +
                                        'x="' + posX + '" ' +
                                        'y="' + (data.height - ui.lineChart.bottom + 20) +
                                    '">' +
                                        x[k] +
                                    '</text>';
                        }

                    }

                    if (k === 0 || ui.lineChart.showGrid) {

                        html += '<line ' +
                                    'x1="' + posX + '" ' +
                                    'x2="' + posX + '" ' +
                                    'y1="' + ui.lineChart.top + '" ';
                    }

                    if (k === 0) { // root of x grid

                        html += 'y2="' + Math.ceil(data.height - (ui.lineChart.bottom + (ui.lineChart.gridStroke / 2))) +'" ' +
                                'class="' + ui.lineChart.nameGridRoot + '" ' +
                                'stroke-width="' + ui.lineChart.gridStroke + '"';

                    } else {

                        html += 'y2="' + (data.height - ui.lineChart.bottom) + '" ' +
                                'stroke-dasharray="' + ui.lineChart.gridStrokeArray + '"';

                    }

                    html += '></line>';

                }

                html += '</g>' +
                    '<g class="' + ui.lineChart.nameGridY + '">';

                for (let l = 0; l <= rows; l++) {

                    posY = parseInt((l * (data.height - (ui.lineChart.top + ui.lineChart.bottom)) / rows) + ui.lineChart.top);

                    if (ui.lineChart.showGridText) {

                        html += '<text ' +
                                    'x="' + (ui.lineChart.left - 10) + '" ' +
                                    'y="' + (posY + 4) +
                                '">' +
                                    (parseInt((yMax - yMin) / rows) * (rows - l) + yMin) +
                                '</text>';
                    }

                    if (l === rows || ui.lineChart.showGrid) {

                        html += '<line ' +
                                    'x2="' + (data.width - ui.lineChart.right + 1) + '" ' +
                                    'y1="' + posY + '" ' +
                                    'y2="' + posY + '" ';
                    }

                    if (l >= rows) { // root of y grid

                        html += 'x1="' + Math.ceil(ui.lineChart.left - (ui.lineChart.gridStroke / 2)) + '" ' +
                                'class="' + ui.lineChart.nameGridRoot + '" ' +
                                'stroke-width="' + ui.lineChart.gridStroke + '"';

                    } else {
                        html += 'x1="' + Math.floor(ui.lineChart.left + ui.lineChart.gridStroke) + '" ' +
                                'stroke-dasharray="' + ui.lineChart.gridStrokeArray + '"';

                    }

                    html += '></line>';

                }

                html += '</g>';

                // create svg contents
                circles = '';
                pathStart = [];

                html += '<g>';

                Array.prototype.forEach.call(lines,

                    (el, j) => {

                        paths = '';
                        y = data[j].y;

                        // set color
                        if (j > ui.lineChart.colors.length - 1) {
                            data.color.push(ui.lineChart.colors[j - ui.lineChart.colors.length]);

                        } else {
                            data.color.push(ui.lineChart.colors[j]);
                        }

                        // create paths and circles
                        for (let n = 0; n < y.length; n++) {

                            posX = (n * col) + ui.lineChart.left;
                            posY = data.height - (data.height + (((data.height - (ui.lineChart.top + ui.lineChart.bottom)) * (y[n] - yMax)) / (yMax - yMin)) - ui.lineChart.top);

                            // get line type
                            type = el.getAttribute(ui.lineChart.dataType);
                            if (type === null) { type = ''; }

                            // create lines
                            if (n === 0) { // start point

                                pathStart.x = posX;
                                pathStart.y = posY;

                            }

                            if (type.indexOf(ui.lineChart.curved) > -1) { // curved

                                data.percent = parseInt((ui.lineChart.curveSize * (n * col)) / 100);

                                if (n === 1) { // start curves

                                    paths += ' C ' + (col + data.percent) + ' ' + (posY - data.percent) + ',' +
                                        ' ' + (col + data.percent) + ' ' + posY + ',' +
                                        ' ' + posX + ' ' + posY;

                                } else if (n > 0) { // other curves

                                    paths += ' S ' + ((n * col) - data.percent) + ' ' + posY + ',' +
                                        ' ' + posX + ' ' + posY;

                                }

                            } else { // default

                                if (n > 0) { // other points
                                    paths += ' L ' + posX + ' ' + posY;
                                }

                            }

                            // create circles
                            circles += '<circle ' +
                                            'cx="' + posX + '" ' +
                                            'cy="' + posY + '" ' +
                                            'r="' + ui.lineChart.circleSize + '" ' +
                                            'fill="' + data.color[j] + '" ' +
                                            'stroke="' + data.color[j] + '" ' +
                                            'stroke-width="0" ';

                            if (data[j].links[n] !== '') { // check links
                                circles += 'onclick="location.href = \'' + data[j].links[n] + '\';"';
                            }

                            if (ui.tooltip === undefined) { // Optional!

                                circles += '/>' +
                                            '<title>' + y[n] + '</title>';

                            } else {

                                circles += ui.tooltip.dataTooltip + ' ' +
                                            'title="' + y[n] + '" ' +
                                        '/>';

                            }

                        }

                        // create paths
                        if (type.indexOf(ui.lineChart.dashed) > -1) { // dashed
                            html += '<path class="' + ui.lineChart.nameTypePrefix + ui.lineChart.dashed + '" ';

                        } else if (type.indexOf(ui.lineChart.dotted) > -1) { // dotted
                            html += '<path class="' + ui.lineChart.nameTypePrefix + ui.lineChart.dotted + '" ';

                        } else {
                            html += '<path ';
                        }

                        html += 'd="M ' + pathStart.x + ' ' + pathStart.y +
                                paths + '" ' +
                                'stroke="' + data.color[j] + '" ' +
                                'stroke-width="' + ui.lineChart.lineStroke + '" ' +
                            '/>';

                        if (type.indexOf(ui.lineChart.filled) > -1) { // add filled paths

                            data.id = new Date().getTime();
                            data.id = data.id.toString();
                            data.id = data.id.substring(data.id.length - 4, data.id.length) + j;

                            html += '<linearGradient id="' + ui.lineChart.idGradient + data.id + '" x1="0" y1="0" x2="0" y2="100%">' +
                                        '<stop offset="0" stop-color="' + data.color[j] + '"></stop>' +
                                        '<stop offset="100%" stop-color="' + data.color[j] + '" stop-opacity="0.0"></stop>' +
                                    '</linearGradient>' +

                                    '<path d="M ' + (pathStart.x + (ui.lineChart.gridStroke / 2)) + ' ' + pathStart.y +

                                        paths +

                                        ' V ' + (data.height - ui.lineChart.bottom - (ui.lineChart.gridStroke / 2)) +
                                        ' H ' + ((ui.lineChart.gridStroke / 2) + ui.lineChart.left) + ' Z" ' +

                                        'stroke="0" ' +
                                        'fill="url(#' + ui.lineChart.idGradient + data.id + ')" ' +
                                        'stroke-width="' + ui.lineChart.lineStroke + '" ' +
                                        'class="' + ui.lineChart.nameTypePrefix + ui.lineChart.filled + '" ' +

                                    '/>';

                        }

                        // get data names
                        name = el.getAttribute(ui.lineChart.dataName);

                        if (name !== null && name !== '') {
                            data.name.push(name);

                        } else {
                            data.name.push('');
                        }

                    });

                // close svg tag
                html += circles + '</g></svg>';

                if (data.width === 0) {
                    ui.removeClass(this, ui.lineChart.nameLoaded + ' ' + ui.lineChart.nameResized);
                }

                // create info
                if (ui.lineChart.showInfo) {

                    html += '<ul class="' + ui.lineChart.nameInfo + '">';

                    for (let p = 0; p < lines.length; p++) {

                        total = 0;

                        for (let n = 0; n < data[p].y.length; n++) {
                            total += parseInt(data[p].y[n]);
                        }

                        html += '<li>' +
                            '<' + ui.lineChart.tagInfoColor +' style="background: ' + data.color[p] + '">' +
                            '</' + ui.lineChart.tagInfoColor + '>';

                        if (data.name[p] === '') {
                            html += '<' + ui.lineChart.tagInfoStat + '>' + total;

                        } else {
                            html += data.name[p] + ': <b>' + total;
                        }

                        html += '</' + ui.lineChart.tagInfoStat + '></li>';

                    }

                    html += '</ul>';

                }

                // parse html
                this.innerHTML = data.backup;
                this.insertAdjacentHTML('beforeEnd', html);

                // empty variables
                data = [];
                html = '';

            });

    };

    ui.lineChart.Init(ui.lineChart.nameNotLoaded); // show not loaded charts

};

// loaders
ui.onload(ui.lineChart.Start);

ui.on(window,
    'resize',

    () => {
        ui.lineChart.Init(ui.lineChart.nameLoaded, true); // resize loaded charts
    });

ui.on(document,
    ui.globals.eventDomChange,

    () => {
        ui.lineChart.Init(ui.globals.eventDomChange); // resize loaded charts
    });

// ajax callback loader
ui.on(document,
    ui.globals.eventAjaxCallback,

    () => {

        if (ui.ajax.classNames.indexOf(ui.lineChart.target) > -1) {
            ui.lineChart.Init(ui.lineChart.nameNotLoaded); // show not loaded charts
        }

    });

/* pie chart */

ui.pieChart = {

    // targets
    target: 'ui-pie-chart',

    // main classnames
    namePieLeft: 'ui-pie-l',
    namePieRight: 'ui-pie-r',

    // helper classnames
    nameOpen: 'ui-open',
    nameOpenEase: 'ui-open-ease',

    // outer classnames
    nameNoEffects: 'ui-no-effects',

    // tags
    tagDatasHolder: 'ul',
    tagData: 'li',

    tagPiesHolder: 'span',
    tagPie: 'b',

    tagMsgHolder: 'div',
    tagMsg: 'span',
    tagTitle: 'i',

    // data attributes
    dataPercent: 'data-ui-percent',
    dataFill: 'data-ui-fill',
    dataTitle: 'data-ui-title',
    dataCustom: 'data-ui-custom'

};

(() => {

    var chartsResizer;

    chartsResizer = () => {

        var chart, elems;

        chart = ui.find('.' + ui.pieChart.target);
        if (chart.length < 1) { return; }

        ui.each(chart,

            function () {

                elems = ui.find(ui.pieChart.tagDatasHolder, this)[0];
                elems.style.height = elems.offsetWidth + 'px';

            });

    };

    ui.pieChart.Start = () => {

        ui.pieChart.Init = () => {

            var chart, elems, deg, textDeg, loadFnc, arr, fill, percent, html, title, customTitle, msgHolder;

            chart = ui.find('.' + ui.pieChart.target);
            if (chart.length < 1) { return; }

            arr = [];

            loadFnc = function (parent, that, i) {

                percent = that.getAttribute(ui.pieChart.dataPercent);

                if (percent === null && percent === '') {
                    percent = 0;
                }

                fill = that.getAttribute(ui.pieChart.dataFill);

                if (fill !== null && fill !== '') {
                    that.style.color = fill;
                }

                deg = (percent * 360) / 100;
                if (deg > 180) {

                    html = '<' + ui.pieChart.tagPiesHolder + ' class="' + ui.pieChart.namePieLeft + '">' +

                                '<' + ui.pieChart.tagPie + ' style="-ms-transform: rotate(' + (deg - 180) + 'deg); transform: rotate(' + (deg - 180) + 'deg);">' +
                                '</' + ui.pieChart.tagPie + '>' +

                            '</' + ui.pieChart.tagPiesHolder + '>' +
                            '<' + ui.pieChart.tagPiesHolder + ' class="' + ui.pieChart.namePieRight + '">' +

                                '<' + ui.pieChart.tagPie + '>' +
                                '</' + ui.pieChart.tagPie + '>' +

                            '</' + ui.pieChart.tagPiesHolder + '>';

                } else {
                    html = '<' + ui.pieChart.tagPiesHolder + ' class="' + ui.pieChart.namePieRight + '">' +

                                '<' + ui.pieChart.tagPie + ' style="-ms-transform: rotate(' + deg + 'deg); transform: rotate(' + deg + 'deg);">' +
                                '</' + ui.pieChart.tagPie + '>' +

                            '</' + ui.pieChart.tagPiesHolder + '>';
                }

                that.insertAdjacentHTML('beforeEnd', html);

                if (arr[i - 1] === undefined) {
                    arr[i - 1] = 0;
                }

                textDeg = arr[i - 1] - 90 + (deg / 2);
                title = that.getAttribute(ui.pieChart.dataTitle);

                html = '<' + ui.pieChart.tagMsg + ' style="-ms-transform: rotate(' + textDeg + 'deg) translateY(-50%); transform: rotate(' + textDeg + 'deg) translateY(-50%);">' +

                            '<' + ui.pieChart.tagTitle + ' style="-ms-transform: rotate(' + -textDeg + 'deg); transform: rotate(' + -textDeg + 'deg);"';

                if (title !== null && title !== '') { // add titles for dataTitle attributes

                    html += ' title="' + title + '"';

                    if (ui.tooltip !== undefined) { // Optional!
                        html += ' ' + ui.tooltip.dataTooltip;
                    }

                }

                customTitle = that.getAttribute(ui.pieChart.dataCustom);

                if (customTitle !== null && customTitle !== '') { // show custom titles optional!
                    html += '>' + customTitle;

                } else {
                    html += '>' + percent + '%';
                }

                html += '</' + ui.pieChart.tagTitle + '>' +
                    '</' + ui.pieChart.tagMsg + '>';

                msgHolder = ui.find(ui.pieChart.tagMsgHolder, parent)[0];
                if (msgHolder === undefined) {

                    parent.insertAdjacentHTML(
                        'beforeEnd',
                        '<' + ui.pieChart.tagMsgHolder + '></' + ui.pieChart.tagMsgHolder + '>'
                    );

                    msgHolder = ui.find(ui.pieChart.tagMsgHolder, parent)[0];

                }

                msgHolder.insertAdjacentHTML('beforeEnd', html);

                if (elems.length > 0) {

                    i = Array.prototype.slice.call(elems).indexOf(that);
                    if (i > 0) {

                        that.style.transform = 'rotate(' + arr[i - 1] + 'deg)';
                        that.style.msTransform = 'rotate(' + arr[i - 1] + 'deg)';

                        arr[i] = arr[i - 1] + deg;

                    } else { arr[i] = deg; }

                }

            };

            ui.each(chart,

                function () {

                    var that = this;

                    elems = ui.find(ui.pieChart.tagData, that);
                    ui.find(ui.pieChart.tagDatasHolder, this)[0].style.height = that.offsetWidth + 'px';

                    ui.each(elems,

                        function (i) {
                            loadFnc(that, this, i);
                        });

                    if (ui.hasClass(document, ui.pieChart.nameNoEffects)) {
                        ui.addClass(that, ui.pieChart.nameOpen + ' ' + ui.pieChart.nameOpenEase);

                    } else {

                        ui.addClass(that, ui.pieChart.nameOpen);

                        setTimeout(() => {
                            ui.addClass(that, ui.pieChart.nameOpenEase);
                        }, ui.globals.slow5x); // wait for animations complete

                    }

                });

        };

        ui.pieChart.Init();
        chartsResizer();

    };

    // loaders
    ui.onload(ui.pieChart.Start);

    ui.on(window, 'resize', chartsResizer);
    ui.on(document, ui.globals.eventDomChange, chartsResizer);

    // ajax callback loader
    ui.on(document,
        ui.globals.eventAjaxCallback,

        () => {

            if (ui.ajax.classNames.indexOf(ui.pieChart.target) > -1) {
                ui.pieChart.Init();
            }

        });

})();

/* map */

ui.map = {

    // targets
    target: 'ui-map',

    // helper classnames
    nameActive: 'ui-active',

    // tags
    tagTarget: 'path',

    // values
    opacityMax: '0.75',
    opacityMin: '0.25',

    // data attributes
    dataSize: 'data-ui-size',
    dataHref: 'data-ui-href'

};

ui.map.Start = () => {

    var map, arr, data, items, opacity;

    map = ui.find('.' + ui.map.target);
    if (map.length === 0) { return; }

    arr = [];

    ui.each(map,

        function (i) {

            arr[i] = [];
            items = ui.find(ui.map.tagTarget + '[' + ui.map.dataSize + ']', this);

            ui.each(items,

                function () {

                    data = this.getAttribute(ui.map.dataSize);
                    if (data > 0) { arr[i].push(data); }

                });

            arr[i] = arr[i].sort((a, b) => b - a);

            ui.each(items,

                function () {

                    data = this.getAttribute(ui.map.dataSize);
                    if (data > 0) {

                        ui.addClass(this, ui.map.nameActive);

                        opacity = Math.sqrt(data) / Math.sqrt(arr[i][0]);
                        opacity = opacity.toFixed(2);

                        if (opacity > ui.map.opacityMax) {
                            opacity = ui.map.opacityMax;
                        }

                        if (opacity < ui.map.opacityMin) {
                            opacity = ui.map.opacityMin;
                        }

                        this.setAttribute('style', 'opacity: ' + opacity + ';');

                    }

                });

            arr[i] = [];

        });

    // Event Listeners
    ui.on(ui.map.tagTarget,
        'click',

        function () {

            var href = this.getAttribute(ui.map.dataHref);

            if (href !== null) {
                window.location = href;
            }

        });

};

// loaders
ui.onload(ui.map.Start);
