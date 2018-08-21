/*
 Events JS
 Events JS requires Selector JS
*/

/*globals window, document, selector, Event, navigator, NodeList, setTimeout, DOMParser */
var events = {

    onload: function (callback) {

        'use strict';

        if (document.attachEvent) {

            if (document.readyState === 'complete') {
                callback();
            } else {
                document.addEventListener('DOMContentLoaded', callback);
            }

        } else {

            if (document.readyState !== 'loading') {
                callback();
            } else {
                document.addEventListener('DOMContentLoaded', callback);
            }

        }

    },
    on: function (t, e, that, callback) {

        'use strict';
        var arr, f, fnc, handlerFnc, targetEl, isWindow, l, isMSIE, ie, i = 0, j = 0, k = 0;

        fnc = function (e) {

            if (typeof t === 'string' && e === undefined) {
                return;
            }

            if (callback !== undefined) { // delegate

                f = function (event) {

                    targetEl = selector(that); // catches future updated DOM!
                    for (j = 0; j < targetEl.length; j += 1) {

                        if (event.target === targetEl[j] || events.closest(event.target, targetEl[j]).length === 1) {
                            callback.call(targetEl[j], event, event.toElement);
                        }

                    }

                };

            } else {

                f = that;

                if (typeof t === 'object' && !NodeList.prototype.isPrototypeOf(t) && typeof e === 'string') { // custom events

                    isWindow = Object.prototype.toString.call(t) === '[object Window]'; // detect window events
                    if (isWindow) { l = selector(t); } else { l = selector(t)[0]; }

                    // detecting IE
                    isMSIE = /*@cc_on!@*/false;
                    ie = false;

                    if (isMSIE || !!document.documentMode || navigator.userAgent.toLowerCase().indexOf('edge') > -1) { ie = true; }

                    if (isWindow && ie) { // disable ie window event firing on ready
                        setTimeout(function () { l.addEventListener(e, that, true); }, 150);

                    } else { l.addEventListener(e, that, true); }

                }

            }

            handlerFnc = function (pt, pe) {

                if (window.eventHandlers === undefined) { window.eventHandlers = {}; }
                if (window.eventHandlers[pt] === undefined) { window.eventHandlers[pt] = {}; }
                if (window.eventHandlers[pt][pe] === undefined) { window.eventHandlers[pt][pe] = []; }

                window.eventHandlers[pt][pe].push(f);

                if (typeof pe !== 'function' && f !== undefined) {
                    pt.addEventListener(pe.split('.')[0], f, true); // split for event naming

                } else { return; }

            };

            l = selector(t);

            if (isWindow) { handlerFnc(l, e); } else {
                for (i = 0; i < l.length; i += 1) { handlerFnc(l[i], e); }
            }

        };

        // for multiple events ex: 'click touchend'
        arr = e.split(' ');

        for (k = 0; k < arr.length; k += 1) {
            fnc(arr[k]);
        }

    },
    off: function (t, e) {

        'use strict';
        var arr, events, fnc, handlerFnc, l, i = 0, j = 0, k = 0;

        fnc = function (e) {

            handlerFnc = function (pt, pe) {

                if (window.eventHandlers[pt] !== undefined) {

                    events = window.eventHandlers[pt][pe];
                    if (events !== undefined) {
                        for (j = 0; j < events.length; j += 1) { pt.removeEventListener(pe.split('.')[0], events[j], true); } // split for event naming
                    }

                }

            };

            l = selector(t);

            if (l.length === 0) { // detect window events
                handlerFnc(l, e);

            } else { for (i = 0; i < l.length; i += 1) { handlerFnc(l[i], e); } }

        };

        // for multiple events ex: 'click touchend'
        arr = e.split(' ');

        for (k = 0; k < arr.length; k += 1) {
            fnc(arr[k]);
        }

    },
    trigger: function (t, e) {

        'use strict';
        var arr, fnc, event, l, i = 0, j = 0;

        fnc = function (e) {

            try {
                event = new Event(e);

            } catch (err) { // ie
                event = document.createEvent('HTMLEvents');
                event.initEvent(e, true, false);
            }

            l = selector(t);
            for (i = 0; i < l.length; i += 1) { l[i].dispatchEvent(event); }

        };

        // for multiple events ex: 'click touchend'
        arr = e.split(' ');

        for (j = 0; j < arr.length; j += 1) {
            fnc(arr[j]);
        }

    },
    hasClass: function (t, name) {

        'use strict';
        var re, l = selector(t), i = 0;

        for (i = 0; i < l.length; i += 1) {
            re =  new RegExp('(^| )' + name + '( |$)', 'gi').test(l[i].className);
        }
        return re;

    },
    addClass: function (t, name) {

        'use strict';

        var arr, l = selector(t), i = 0,
            re = new RegExp('^\\s+|\\s+$');

        for (i = 0; i < l.length; i += 1) {

            arr = l[i].className.split(' ');
            if (arr.indexOf(name) === -1) {
                l[i].className += ' ' + name;
                l[i].className.replace(re, '');
            }

        }

    },
    toggleClass: function (t, name) {

        'use strict';
        var arr, index, l = selector(t), i = 0, j = 0;
        name = name.split(' ');

        for (i = 0; i < l.length; i += 1) {

            arr = l[i].className.split(' ');
            for (j = 0; j < name.length; j += 1) {

                index = arr.indexOf(name[j]);
                if (index >= 0) { arr.splice(index, 1); } else { arr.push(name[j]); }
                l[i].className = arr.join(' ');

            }
        }

    },
    removeClass: function (t, name) {

        'use strict';

        var l = selector(t), i = 0, j = 0, rex = new RegExp('^\\s+|\\s+$'), re;
        name = name.split(' ');

        for (i = 0; i < l.length; i += 1) {
            for (j = 0; j < name.length; j += 1) {

                re = new RegExp('(\\s|^)' + name[j] + '(\\s|$)');
                l[i].className = l[i].className.replace(re, ' ').replace(rex, '');

            }
        }

    },
    show: function (t) {

        'use strict';
        var l = selector(t), i = 0;
        for (i = 0; i < l.length; i += 1) { l[i].style.display = 'block'; }

    },
    hide: function (t) {

        'use strict';
        var l = selector(t), i = 0;
        for (i = 0; i < l.length; i += 1) { l[i].style.display = 'none'; }

    },
    each: function (t, callback) {

        'use strict';
        var l = selector(t), i = 0;
        for (i = 0; i < l.length; i += 1) { callback.call(l[i], i); }

    },
    closest: function (t, outer) {

        'use strict';
        var l, o, i = 0, j = 0, p;

        if (typeof outer !== 'object') { o = selector(outer); } else { o = [outer]; }
        l = selector(t);

        for (i = 0; i < l.length; i += 1) {
            p = l[i].parentNode;
            while (p) {
                for (j = 0; j < o.length; j += 1) { if (p === o[j]) { return selector(p); } }
                p = p.parentNode;
            }
        }

        return [];

    },
    width: function (t, value) {

        'use strict';
        var l = selector(t), i = 0;
        for (i = 0; i < l.length; i += 1) { l[i].style.width = value; }

    },
    height: function (t, value) {

        'use strict';
        var l = selector(t), i = 0;
        for (i = 0; i < l.length; i += 1) { l[i].style.height = value; }

    },
    parser: function (value) {

        'use strict';
        var parser, html;

        if (navigator.userAgent.toLowerCase().indexOf('msie 9') > -1) {

            html = document.implementation.createHTMLDocument('');
            html.body.innerHTML = value;

            return html.body.innerHTML;

        }

        parser = new DOMParser();

        html = parser.parseFromString(value, 'text/html');
        html = html.querySelector('body').innerHTML;

        return html;

    },
    clone: function (t) {

        'use strict';
        var l = selector(t)[0], html;

        if (l !== undefined) {

            html = events.parser(selector(t)[0].innerHTML);
            return html;

        }

    }

};
