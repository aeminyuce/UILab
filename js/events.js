/*
 Events JS
 Events JS requires Selector JS
*/

/*globals document, selector, Event, navigator, NodeList, setTimeout, DOMParser */
var events = {

    onload: function (callback) {

        'use strict';

        var handlerFnc, i;

        handlerFnc = function (pt, pe) {

            if (events.handlers === undefined) { events.handlers = {}; }
            if (events.handlers[pt] === undefined) { events.handlers[pt] = {}; }
            if (events.handlers[pt][pe] === undefined) { events.handlers[pt][pe] = []; }

            events.handlers[pt][pe].push(callback);

            if (typeof pe !== 'function' && callback !== undefined) {

                // merge repeated events
                if (events.handlers[pt][pe].length === 1) {
                    pt.addEventListener(pe.split('.')[0], function (ev) { // split for event naming

                        for (i = 0; i < events.handlers[pt][pe].length; i += 1) {
                            events.handlers[pt][pe][i](ev);
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
        var arr, f, fnc, handlerFnc, targetEl, objName, isWindowEvent, l, customEvent, isMSIE, eName, delegate,
            i = 0, j = 0, k = 0, m = 0;

        fnc = function (e) {

            if (typeof t === 'string' && e === undefined) { return; }

            delegate = false;
            customEvent = false;

            if (callback !== undefined) { // delegate

                f = function (event) {

                    eName = e.split('.')[0]; // split for event naming
                    targetEl = selector(that); // catches future updated DOM!

                    for (j = 0; j < targetEl.length; j += 1) {

                        if (eName === 'mouseenter' || eName === 'mouseleave' || eName === 'mouseover' || eName === 'mouseout') { // control non-closest events

                            if (event.target === targetEl[j]) {
                                callback.call(targetEl[j], event, event.toElement);
                            }

                        } else {

                            if (event.target === targetEl[j] || events.closest(event.target, targetEl[j]).length === 1) {
                                callback.call(targetEl[j], event, event.toElement);
                            }

                        }

                    }

                };

                delegate = true;

            } else {

                f = that;


                // filter events.on(object, event, function) events
                if (typeof t === 'object' && !NodeList.prototype.isPrototypeOf(t) && typeof e === 'string') {

                    // detect window events
                    isWindowEvent = Object.prototype.toString.call(t) === '[object Window]';
                    if (isWindowEvent) {

                        // disable ie duplicate window event firing on ready
                        isMSIE = /*@cc_on!@*/false;

                        if (isMSIE || !!document.documentMode || navigator.userAgent.toLowerCase().indexOf('edge') > -1) {

                            setTimeout(function () {
                                l.addEventListener(e, that, true);
                            }, 150);

                        }

                    }

                    // detect custom events
                    objName = Object.prototype.toString.call(t);

                    if (objName === '[object HTMLDocument]' || objName === '[object Document]') {
                        customEvent = true;
                    }

                }

            }

            handlerFnc = function (pt, pe) {

                if (events.handlers === undefined) { events.handlers = {}; }
                if (events.handlers[pt] === undefined) { events.handlers[pt] = {}; }
                if (events.handlers[pt][pe] === undefined) { events.handlers[pt][pe] = []; }

                events.handlers[pt][pe].push(f);

                if (typeof pe !== 'function' && f !== undefined) {

                    if (delegate || isWindowEvent || customEvent) {

                        // merge repeated events
                        if (events.handlers[pt][pe].length === 1) {
                            pt.addEventListener(pe.split('.')[0], function (ev) { // split for event naming

                                for (m = 0; m < events.handlers[pt][pe].length; m += 1) {
                                    events.handlers[pt][pe][m](ev);
                                }

                            }, true);
                        }

                    } else {
                        pt.addEventListener(pe.split('.')[0], f, true); // split for event naming
                    }

                } else { return; }

            };

            l = selector(t);

            if (isWindowEvent) {
                handlerFnc(l, e);

            } else {

                for (i = 0; i < l.length; i += 1) {
                    handlerFnc(l[i], e);
                }

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
        var arr, fnc, handlerFnc, l, i = 0, j = 0, k = 0;

        fnc = function (e) {

            handlerFnc = function (pt, pe) {

                if (events.handlers[pt] !== undefined) {
                    if (events.handlers[pt][pe] !== undefined) {

                        for (j = 0; j < events.handlers[pt][pe].length; j += 1) {

                            pt.removeEventListener(pe.split('.')[0], events.handlers[pt][pe][j], true); // split for event naming
                            events.handlers[pt][pe].splice(events.handlers[pt][pe][j], 1); // remove event from eventHandlers array

                        }

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

        var svg, re, l = selector(t), i = 0;
        svg = ['svg', 'path', 'g', 'circle', 'rect', 'polygon', 'ellipse', 'text'];

        for (i = 0; i < l.length; i += 1) {

            if (svg.indexOf(l[i].tagName.toLowerCase()) !== -1) { // check SVG and own elements
                re =  new RegExp('(^| )' + name + '( |$)', 'gi').test(l[i].className.baseVal);

            } else {
                re =  new RegExp('(^| )' + name + '( |$)', 'gi').test(l[i].className);
            }

        }
        return re;

    },
    addClass: function (t, name) {

        'use strict';

        var svg, arr, l = selector(t), i = 0, j = 0, re = new RegExp('^\\s+|\\s+$');

        name = name.split(' ');
        svg = ['svg', 'path', 'g', 'circle', 'rect', 'polygon', 'ellipse', 'text'];

        for (i = 0; i < l.length; i += 1) {
            for (j = 0; j < name.length; j += 1) {

                if (svg.indexOf(l[i].tagName.toLowerCase()) !== -1) { // check SVG and own elements

                    arr = l[i].className.baseVal.split(' ');
                    if (arr.indexOf(name[j]) === -1) {

                        l[i].className.baseVal += ' ' + name[j];
                        l[i].className.baseVal.replace(re, '');

                    }

                } else {

                    arr = l[i].className.split(' ');
                    if (arr.indexOf(name[j]) === -1) {

                        l[i].className += ' ' + name[j];
                        l[i].className.replace(re, '');

                    }

                }

            }
        }

    },
    removeClass: function (t, name) {

        'use strict';

        var svg, l = selector(t), i = 0, j = 0, rex = new RegExp('^\\s+|\\s+$'), re;

        name = name.split(' ');
        svg = ['svg', 'path', 'g', 'circle', 'rect', 'polygon', 'ellipse', 'text'];

        for (i = 0; i < l.length; i += 1) {
            for (j = 0; j < name.length; j += 1) {

                re = new RegExp('(\\s|^)' + name[j] + '(\\s|$)');

                if (svg.indexOf(l[i].tagName.toLowerCase()) !== -1) { // check SVG and own elements
                    l[i].className.baseVal = l[i].className.baseVal.replace(re, ' ').replace(rex, '');

                } else {
                    l[i].className = l[i].className.replace(re, ' ').replace(rex, '');
                }

            }
        }

    },
    toggleClass: function (t, name) {

        'use strict';
        var svg, isSvgElements, arr, index, l = selector(t), i = 0, j = 0;

        name = name.split(' ');
        svg = ['svg', 'path', 'g', 'circle', 'rect', 'polygon', 'ellipse', 'text'];

        for (i = 0; i < l.length; i += 1) {

            isSvgElements = svg.indexOf(l[i].tagName.toLowerCase()) !== -1; // check SVG and own elements

            if (isSvgElements) {
                arr = l[i].className.baseVal.split(' ');

            } else {
                arr = l[i].className.split(' ');
            }

            for (j = 0; j < name.length; j += 1) {

                index = arr.indexOf(name[j]);
                if (index >= 0) { arr.splice(index, 1); } else { arr.push(name[j]); }

                if (isSvgElements) {
                    l[i].className.baseVal = arr.join(' ');

                } else {
                    l[i].className = arr.join(' ');
                }

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
    parser: function (text) {

        'use strict';
        var parser, html;

        if (navigator.userAgent.toLowerCase().indexOf('msie 9') > -1) {

            html = document.implementation.createHTMLDocument('');
            html.body.innerHTML = text;

            return html.body.innerHTML;

        }

        parser = new DOMParser();

        html = parser.parseFromString(text, 'text/html');
        html = html.querySelector('body').innerHTML;

        return html;

    }

};
