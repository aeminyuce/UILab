"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
 UI Core JS
*/

/*globals window, document, Event, navigator, NodeList, setTimeout, clearTimeout, XMLHttpRequest */
var ui = {
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
    // svg elements
    svgElems: ['svg', 'path', 'g', 'circle', 'rect', 'polygon', 'ellipse', 'text'],
    // data attributes
    dataPrefix: 'data-ui-',
    dataClasses: 'data-ui-classes',
    // custom events
    eventAjaxCallback: 'ui:ajaxCallback',
    eventDomChange: 'ui:domChange'
  },
  onload: function onload(callback) {
    'use strict';

    var handlerFnc, i;

    handlerFnc = function handlerFnc(pt, pe) {
      if (ui.handlers === undefined) {
        ui.handlers = {};
      }

      if (ui.handlers[pt] === undefined) {
        ui.handlers[pt] = {};
      }

      if (ui.handlers[pt][pe] === undefined) {
        ui.handlers[pt][pe] = [];
      }

      ui.handlers[pt][pe].push(callback);

      if (typeof pe !== 'function' && callback !== undefined) {
        // merge repeated event listeners
        if (ui.handlers[pt][pe].length === 1) {
          pt.addEventListener(pe.split('.')[0], function (ev) {
            // split for event naming
            for (i = 0; i < ui.handlers[pt][pe].length; i++) {
              ui.handlers[pt][pe][i](ev);
            }
          }, true);
        }
      } else {
        return;
      }
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
  on: function on(t, e, that, callback) {
    'use strict';

    var arr, f, fnc, handlerFnc, targetEl, objName, isWindowEvent, l, customEvent, isMSIE, eName, delegate, i, j, k, m;

    fnc = function fnc(e) {
      if (typeof t === 'string' && e === undefined) {
        return;
      }

      delegate = false;
      customEvent = false;

      if (callback !== undefined) {
        // delegate
        f = function f(event) {
          eName = e.split('.')[0]; // split for event naming

          targetEl = ui.find(that); // catches future updated DOM!

          for (j = 0; j < targetEl.length; j++) {
            if (ui.globals.nonClosestElems.indexOf(eName) > -1) {
              // control non-closest event listeners
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
        f = that; // filter ui.on(object, event, function) event listeners

        if (_typeof(t) === 'object' && !NodeList.prototype.isPrototypeOf(t) && typeof e === 'string') {
          // detect window event listeners
          isWindowEvent = Object.prototype.toString.call(t) === '[object Window]';

          if (isWindowEvent) {
            // disable ie duplicate window event firing on ready
            isMSIE =
            /*@cc_on!@*/
            false;

            if (isMSIE || !!document.documentMode || navigator.userAgent.toLowerCase().indexOf('edge') > -1) {
              setTimeout(function () {
                l.addEventListener(e, that, true);
              }, ui.globals.ease);
            }
          } // detect custom event listeners


          objName = Object.prototype.toString.call(t);

          if (objName === '[object HTMLDocument]' || objName === '[object Document]') {
            customEvent = true;
          }
        }
      }

      handlerFnc = function handlerFnc(pt, pe) {
        if (f === undefined) {
          return;
        }

        if (ui.handlers === undefined) {
          ui.handlers = {};
        }

        if (ui.handlers[pt] === undefined) {
          ui.handlers[pt] = {};
        }

        if (ui.handlers[pt][pe] === undefined) {
          ui.handlers[pt][pe] = [];
        }

        ui.handlers[pt][pe].push(f);

        if (typeof pe !== 'function' && f !== undefined) {
          if (delegate || isWindowEvent || customEvent) {
            // merge repeated event listeners
            if (ui.handlers[pt][pe].length === 1) {
              pt.addEventListener(pe.split('.')[0], function (ev) {
                // split for event naming
                for (m = 0; m < ui.handlers[pt][pe].length; m++) {
                  ui.handlers[pt][pe][m](ev);
                }
              }, true);
            }
          } else {
            pt.addEventListener(pe.split('.')[0], f, true); // split for event naming
          }
        } else {
          return;
        }
      };

      l = ui.find(t);

      if (isWindowEvent) {
        handlerFnc(l, e);
      } else {
        for (i = 0; i < l.length; i++) {
          handlerFnc(l[i], e);
        }
      }
    }; // for multiple event listeners ex: 'click touchend'


    arr = e.split(' ');

    for (k = 0; k < arr.length; k++) {
      fnc(arr[k]);
    }
  },
  off: function off(t, e) {
    'use strict';

    var arr, fnc, handlerFnc, l, i, j, k;

    fnc = function fnc(e) {
      handlerFnc = function handlerFnc(pt, pe) {
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

      if (l.length === 0) {
        // detect window event listeners
        handlerFnc(l, e);
      } else {
        for (i = 0; i < l.length; i++) {
          handlerFnc(l[i], e);
        }
      }
    }; // for multiple event listeners ex: 'click touchend'


    arr = e.split(' ');

    for (k = 0; k < arr.length; k++) {
      fnc(arr[k]);
    }
  },
  trigger: function trigger(t, e) {
    'use strict';

    var arr, fnc, event, l, i, j;

    fnc = function fnc(e) {
      try {
        event = new Event(e);
      } catch (err) {
        // ie
        event = document.createEvent('HTMLEvents');
        event.initEvent(e, true, false);
      }

      l = ui.find(t);

      for (i = 0; i < l.length; i++) {
        l[i].dispatchEvent(event);
      }
    }; // for multiple event listeners ex: 'click touchend'


    arr = e.split(' ');

    for (j = 0; j < arr.length; j++) {
      fnc(arr[j]);
    }
  },
  hasClass: function hasClass(t, name) {
    'use strict';

    var re,
        l = ui.find(t),
        i;

    for (i = 0; i < l.length; i++) {
      if (ui.globals.svgElems.indexOf(l[i].tagName.toLowerCase()) !== -1) {
        // check SVG and own elements
        re = new RegExp('(^| )' + name + '( |$)', 'gi').test(l[i].className.baseVal);
      } else {
        re = new RegExp('(^| )' + name + '( |$)', 'gi').test(l[i].className);
      }
    }

    return re;
  },
  addClass: function addClass(t, name) {
    'use strict';

    var arr,
        l = ui.find(t),
        i,
        j,
        re = new RegExp('^\\s+|\\s+$');
    name = name.split(' ');

    for (i = 0; i < l.length; i++) {
      for (j = 0; j < name.length; j++) {
        if (ui.globals.svgElems.indexOf(l[i].tagName.toLowerCase()) !== -1) {
          // check SVG and own elements
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
  removeClass: function removeClass(t, name) {
    'use strict';

    var l = ui.find(t),
        i,
        j,
        rex = new RegExp('^\\s+|\\s+$'),
        re;
    name = name.split(' ');

    for (i = 0; i < l.length; i++) {
      for (j = 0; j < name.length; j++) {
        re = new RegExp('(\\s|^)' + name[j] + '(\\s|$)');

        if (ui.globals.svgElems.indexOf(l[i].tagName.toLowerCase()) !== -1) {
          // check SVG and own elements
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
  toggleClass: function toggleClass(t, name) {
    'use strict';

    var isSvgElements,
        arr,
        newArr,
        index,
        l = ui.find(t),
        i,
        j,
        re = new RegExp('^\\s+|\\s+$');
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

        if (index >= 0) {
          newArr.splice(index, 1);
        } else {
          newArr.push(name[j]);
        }

        if (isSvgElements) {
          l[i].className.baseVal = arr.join(' ');
        } else {
          newArr = newArr.join(' ').replace(re, '');

          if (newArr.length === 0) {
            l[i].removeAttribute('class');
          } else {
            l[i].className = newArr;
          }
        }
      }
    }
  },
  show: function show(t) {
    'use strict';

    var l = ui.find(t),
        i;

    for (i = 0; i < l.length; i++) {
      l[i].style.display = 'block';
    }
  },
  hide: function hide(t) {
    'use strict';

    var l = ui.find(t),
        i;

    for (i = 0; i < l.length; i++) {
      l[i].style.display = 'none';
    }
  },
  each: function each(t, callback) {
    'use strict';

    var l = ui.find(t),
        i;

    for (i = 0; i < l.length; i++) {
      callback.call(l[i], i);
    }
  },
  closest: function closest(t, outer) {
    'use strict';

    var l, o, i, j, p;

    if (_typeof(outer) !== 'object') {
      o = ui.find(outer);
    } else {
      o = [outer];
    }

    l = ui.find(t);

    for (i = 0; i < l.length; i++) {
      p = l[i].parentNode;

      while (p) {
        for (j = 0; j < o.length; j++) {
          if (p === o[j]) {
            return ui.find(p);
          }
        }

        p = p.parentNode;
      }
    }

    return [];
  },
  find: function find(item, outer) {
    'use strict';

    var i,
        objName,
        call,
        outerEl,
        outerElIndex,
        foundEl = [];

    if (_typeof(item) === 'object') {
      if (NodeList.prototype.isPrototypeOf(item)) {
        return item;
      } // if item property has ui.find(item) nodelist


      objName = Object.prototype.toString.call(item);

      if (objName === '[object HTMLDocument]' || objName === '[object Document]') {
        // detect document
        if (ui.find.document === undefined) {
          ui.find.document = document.querySelectorAll('html');
        }

        call = ui.find.document;
        return call;
      }

      if (objName === '[object Window]') {
        return window;
      } // window object


      if (objName === '[object Array]') {
        return item;
      } // array object


      return [item]; // "this" object, [] converting object for event loops
    }

    if (outer !== undefined) {
      // find items in outer elements
      if (_typeof(outer) !== 'object') {
        outerEl = document.querySelectorAll(outer); // convert to array
      } else {
        outerEl = outer;
      } // discard "this" object && form object (form element not returns "this", it returns all form elements)


      if (outerEl.length !== undefined && Array.prototype.slice.call(outerEl).length === 1) {
        for (i = 0; i < outerEl.length; i++) {
          outerElIndex = outerEl[i].querySelectorAll(item);

          if (outerEl.length === 1) {
            foundEl = outerElIndex[0];

            if (foundEl === undefined) {
              // when founded item length is 1, foundEl returned undefined (select option elements)
              foundEl = outerEl.querySelectorAll(item);
            }
          } else {
            foundEl = foundEl.concat(outerElIndex); // merge arrays
          }
        }
      } else {
        // "this" object
        foundEl = outerEl.querySelectorAll(item);
      }

      return foundEl;
    }

    return document.querySelectorAll(item);
  },
  ajax: function ajax(props) {
    /*
    props list:
        props.type
        props.url
        props.data
        props.callback
    */
    'use strict';

    if (props.url === undefined) {
      return;
    }

    if (props.type === undefined || props.type === '') {
      props.type = 'GET'; // send strings
    }

    if (ui.ajax.requests === undefined) {
      ui.ajax.requests = [];
    }

    var i, re, rex;
    i = ui.ajax.requests.length;
    re = '';
    ui.ajax.requests[i] = new XMLHttpRequest();
    ui.ajax.requests[i].open(props.type, props.url, true); // beforesend

    if (props.beforesend !== undefined) {
      props.beforesend(ui.ajax.requests[i]);
    } // headers


    ui.ajax.requests[i].setRequestHeader('X-Requested-With', 'XMLHttpRequest'); // set ajax request header

    if (!props.cache) {
      // no cache header
      ui.ajax.requests[i].setRequestHeader('cache-control', 'no-cache');
    } // check params in url


    if (props.data !== '' && props.data !== undefined) {
      ui.ajax.requests[i].send(props.data);
    } else {
      ui.ajax.requests[i].send();
    } // xhr loading


    ui.ajax.requests[i].onload = function () {
      if (ui.ajax.requests[i].readyState === 4 && ui.ajax.requests[i].status === 200) {
        ui.ajax.classNames = '';
        props.callback('success', ui.ajax.requests[i].responseText, ui.ajax.requests[i]); // get data attributes

        re = ui.globals.dataPrefix + '+\\w+=\\"+[\\w\\s\\d\\-\\_\\=]+\\"[ \\s\\>]';
        re = new RegExp(re, 'g');
        ui.ajax.data = ui.ajax.requests[i].responseText.match(re);

        if (ui.ajax.data === null) {
          ui.ajax.data = '';
        } else {
          ui.ajax.data = ui.ajax.data.toString();
        } // get list of classnames


        ui.ajax.classNames += ui.ajax.requests[i].responseText.match(/\sclass=\"+[\w\s\d\-\_\=]+\"[\s\>]/g);

        if (ui.ajax.classNames === 'null') {
          // not match: returns string null!
          ui.ajax.classNames = '';
        } // get list of data classnames


        rex = ui.globals.dataClasses + '=\\"+[\\w\\s\\d\\-\\_\\=]+\\"[\\s\\>]';
        rex = new RegExp(rex, 'g');
        ui.ajax.classNames += ui.ajax.requests[i].responseText.match(rex);

        if (ui.ajax.classNames !== 'null') {
          // not match: returns string null!
          ui.ajax.classNames = ui.ajax.classNames.match(/"+[\w\s\d\-\_\=]+"/g);
          ui.ajax.classNames = ui.ajax.classNames.toString().replace(/\"/g, '').replace(/,/g, ' ').split(' ');
          ui.ajax.classNames = ui.ajax.classNames.filter(function (value, index, self) {
            return self.indexOf(value) === index;
          }); // ajax callbacks

          ui.trigger(document, ui.globals.eventAjaxCallback); // set custom event
        } // empty variables


        ui.ajax.requests[i] = undefined;
        ui.ajax.classNames = '';
        ui.ajax.data = '';
      } else {
        // error
        props.callback('error', '', ui.ajax.requests[i]);
      }
    }; // error


    ui.ajax.requests[i].onerror = function () {
      props.callback('error', '', ui.ajax.requests[i]);
    };
  }
}; // user agents

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

    isMSIE =
    /*@cc_on!@*/
    false;

    if (isMSIE || !!document.documentMode || ua.indexOf('edge') > -1) {
      ui.userAgents.ie = true;
      ui.addClass(ui.userAgents.target, ui.userAgents.nameIE);
      ui.removeClass(ui.userAgents.target, ui.userAgents.nameChrome);

      if (ua.indexOf('edge') > -1 || ua.indexOf('edg') > -1) {
        ui.userAgents.edge = true;
        ui.removeClass(ui.userAgents.target, ui.userAgents.nameIE);
        ui.addClass(ui.userAgents.target, ui.userAgents.nameEdge);
      }
    } else if (ua.indexOf('edg') > -1) {
      // detect new Chromium Edge
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

        if (ui.userAgents.nativeBrowser || parseFloat(ua.match(/android\s([0-9\.]*)/)[1]) < parseFloat('4.4')) {
          // Jelly Bean and before with stock browser is androidOld
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
})(); // dark mode


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
    if (ui.userAgents.ie) {
      return;
    } // change event listener for darkColorScheme not supported on IE!


    var i, mode, doc, darkColorScheme, state, cookies, cookieName, setState;
    mode = ui.darkMode.valueLight;
    doc = ui.find(ui.darkMode.target)[0];
    darkColorScheme = window.matchMedia('(prefers-color-scheme: dark)'); // set current theme color

    if (window.matchMedia) {
      if (darkColorScheme.matches) {
        mode = ui.darkMode.valueDark;
      }
    } // check stored theme color


    state = decodeURIComponent(document.cookie).split('; ');

    for (i = 0; i < state.length; i++) {
      cookies = state[i].split('=');
      cookieName = cookies[0];
      cookieName = cookieName.replace(/^\s+|\s+$/g, ''); // remove first and last spaces

      if (cookieName === 'ui-darkMode') {
        mode = cookies[1];
      }
    }

    doc.setAttribute(ui.darkMode.dataMod, mode); // Event Listeners

    setState = function setState(mode) {
      // set theme state
      var d = new Date();
      d.setTime(d.getTime() + ui.darkMode.cookieDays * (24 * 60 * 60 * 1000));
      document.cookie = ui.darkMode.cookieName + '=' + mode + ';' + "expires=" + d.toUTCString();
    };

    ui.on(darkColorScheme, 'change', function () {
      if (darkColorScheme.matches) {
        mode = ui.darkMode.valueDark;
      } else {
        mode = ui.darkMode.valueLight;
      }

      doc.setAttribute(ui.darkMode.dataMod, mode);
      setState(mode);
    });
    ui.on(document, 'click', '.' + ui.darkMode.nameToggle, function (e) {
      e.preventDefault(); // toggle theme color

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
})(); // effects


ui.effects = {
  // targets
  target: document,
  // main classnames
  namePause: 'ui-effects-paused',
  nameNoEffects: 'ui-no-effects',
  // pause effects
  pauseAll: false,
  pauseScroll: false,
  // pause effects when scrolling
  pauseResize: false,
  // pause effects when resizing
  preload: true,
  // wait page preload to start effects
  reduceMotion: true,
  // detecting device reduce motions
  // show effects
  ie: true,
  android: true,
  androidOld: false
};

(function () {
  'use strict';

  var pauseTransitionsTimer;
  ui.on(window, 'resize scroll', function (e) {
    if (!ui.effects.pauseAll) {
      if (e.type === 'scroll' && ui.effects.pauseScroll || e.type === 'resize' && ui.effects.pauseResize) {
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

    reduceTimers = function reduceTimers() {
      // reduce effect timers
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
})();
"use strict";

/*
 UI Alerts JS
 Requires UI Core JS
*/
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
  dialogMessages: false,
  // shows automatically clicked buttons text
  successBtnValue: 'success',
  errorBtnValue: 'error',
  messageTimer: 6000,
  // wait for atomatically close messages
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

(function () {
  'use strict';
  /*globals window, document, ui, setTimeout */

  var pageYPos,
      cancelCloseDialog,
      messageQueue = [];

  ui.alerts.Start = function () {
    // dialogues
    ui.alerts.closeDialog = function () {
      var bg, dialog;
      dialog = ui.find('.' + ui.alerts.targetDialog)[0];
      ui.removeClass(dialog, ui.alerts.nameShowEase);
      setTimeout(function () {
        dialog.parentNode.removeChild(dialog);
        bg = ui.find('.' + ui.alerts.targetBg);
        ui.removeClass(bg, ui.alerts.nameOpenEase);
        ui.removeClass(document, ui.alerts.nameDialogOpened);

        if (ui.userAgents.mobile) {
          window.scrollTo(0, pageYPos);
        }

        setTimeout(function () {
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
      var closeBtn, bg, success, buttons, i, keys, val, html, dialog, userCloseDialog;

      if (props === undefined) {
        return;
      }

      if (props.msg === undefined) {
        return;
      }

      dialog = ui.find('.' + ui.alerts.targetDialog)[0];

      if (dialog !== undefined) {
        return;
      } // prevent multiple dialogues


      if (ui.userAgents.mobile) {
        pageYPos = window.pageYOffset; // get current scroll-y position
      }

      closeBtn = '';
      cancelCloseDialog = false; // create buttons

      buttons = '';

      if (props.custom !== undefined) {
        keys = Object.keys(props.custom);

        for (i = 0; i < keys.length; i++) {
          val = props.custom[keys[i]];

          if (val !== '') {
            buttons += '<button class="' + ui.alerts.nameDialogCustom + '" value="' + keys[i] + '">' + val + '</button>';
          }
        }
      }

      if (props.success === undefined) {
        success = ui.alerts.msgDialogSuccess;
      } else {
        success = props.success;
      }

      buttons += '<button class="' + ui.alerts.nameDialogSuccess + '" value="' + ui.alerts.successBtnValue + '">' + success + '</button>';

      if (props.error !== undefined) {
        buttons += '<button class="' + ui.alerts.nameDialogError + '" value="' + ui.alerts.errorBtnValue + '">' + props.error + '</button>'; // create close icon

        cancelCloseDialog = true;
        closeBtn = '<button class="' + ui.alerts.nameCloseDialog + ' ' + ui.alerts.stylesCloseDialog + '">' + '<svg class="' + ui.alerts.nameIcon + '"><use href="#' + ui.alerts.closeIcon + '"/></svg>' + '</button>';
      } // create dialog


      bg = ui.find('.' + ui.alerts.targetBg)[0];
      html = '<div class="' + ui.alerts.targetDialog + ' ' + ui.alerts.stylesDialog + '">' + closeBtn + '<div class="' + ui.alerts.nameDialogMsg + '">' + props.msg + '</div>' + '<div class="' + ui.alerts.nameDialogBtnHolder + ' ' + ui.alerts.stylesDialogBtnHolder + '">' + buttons + '</div>' + '</div>';

      if (bg === undefined) {
        html += '<div class="' + ui.alerts.targetBg + ' ' + ui.alerts.stylesBg + '">' + '</div>';
      }

      ui.find('body')[0].insertAdjacentHTML('beforeend', html);
      ui.addClass(document, ui.alerts.nameDialogOpened); // show dialog

      bg = ui.find('.' + ui.alerts.targetBg);
      ui.addClass(bg, ui.alerts.nameOpen);
      setTimeout(function () {
        ui.addClass(bg, ui.alerts.nameOpenEase);
        setTimeout(function () {
          dialog = ui.find('.' + ui.alerts.targetDialog);
          ui.addClass(dialog, ui.alerts.nameShow);
          ui.find('.' + ui.alerts.nameDialogSuccess)[0].focus(); // fosuc success button

          setTimeout(function () {
            ui.addClass(dialog, ui.alerts.nameShowEase);
          }, 10); // Event Listeners

          ui.on('.' + ui.alerts.nameDialogBtnHolder + ' button', 'click', function () {
            var that, msg, msgTimer, theme;
            that = this;
            msg = this.textContent;
            theme = '';

            if (ui.hasClass(this, ui.alerts.nameDialogSuccess)) {
              theme = ui.alerts.themeSuccess;
            } else if (ui.hasClass(this, ui.alerts.nameDialogError)) {
              theme = ui.alerts.themeDanger;
            }

            if (ui.alerts.dialogMessages) {
              msgTimer = ui.globals.ease;
            } else {
              msgTimer = 0;
            }

            ui.alerts.closeDialog();
            setTimeout(function () {
              // show message
              if (ui.alerts.dialogMessages) {
                ui.alerts.message({
                  msg: msg,
                  theme: theme
                });
              } // callback


              if (props.callback !== undefined) {
                setTimeout(function () {
                  // wait for closing dialog and showing messages
                  props.callback.call(that, that.value);
                }, ui.globals.ease * 2);
              }
            }, msgTimer);
          });

          if (cancelCloseDialog) {
            // attach close event listeners if props.error defined
            userCloseDialog = function userCloseDialog() {
              var errorBtn = ui.find('.' + ui.alerts.targetDialog + ' .' + ui.alerts.nameDialogError)[0];
              ui.alerts.closeDialog();

              if (ui.alerts.dialogMessages && errorBtn !== undefined) {
                setTimeout(function () {
                  ui.alerts.message({
                    msg: errorBtn.textContent,
                    theme: ui.alerts.themeDanger
                  });
                }, ui.globals.ease);
              }
            };

            ui.on('.' + ui.alerts.nameCloseDialog + ',.' + ui.alerts.targetBg, 'click.' + ui.alerts.eventCloseDialog, userCloseDialog);
            ui.on('body', 'keydown.' + ui.alerts.eventCloseDialog, function (e) {
              if (e.keyCode === 27) {
                userCloseDialog();
              } // esc

            });
          }
        }, ui.globals.ease);
      }, 10);
      return false;
    }; // messages


    ui.alerts.closeMessage = function (win) {
      ui.removeClass(win, ui.alerts.nameShowEase);
      setTimeout(function () {
        ui.removeClass(win, ui.alerts.nameShow);
        win.parentNode.removeChild(win);
      }, ui.globals.ease);
    };

    ui.alerts.message = function (props) {
      /*
      props list:
          props.msg
          props.pos
          props.theme
      */
      var arr, html, holder, message, msgStyles, prev, i, j, slide;

      if (props === undefined) {
        return;
      }

      if (props.msg === undefined) {
        return;
      } // detect position


      arr = [ui.alerts.posTopRight, ui.alerts.posTopLeft, ui.alerts.posBottomRight, ui.alerts.posBottomLeft];

      if (arr.indexOf(props.pos) < 0) {
        props.pos = ui.alerts.posBottomRight;
      } // detect theme


      msgStyles = '';
      arr = [ui.alerts.themeSuccess, ui.alerts.themeWarning, ui.alerts.themeDanger];

      if (arr.indexOf(props.theme) > -1) {
        msgStyles += ui.alerts.nameMsgThemePrefix + props.theme + ' ';
      } else if (ui.alerts.stylesMsgTheme !== '') {
        msgStyles += ui.alerts.stylesMsgTheme + ' ';
      } // create mssage


      holder = ui.find('.' + ui.alerts.nameMsgHolder)[0];
      html = '';

      if (holder === undefined) {
        html += '<div class="' + ui.alerts.nameMsgHolder + '">';
      }

      msgStyles += ui.alerts.stylesMsg;
      html += '<div class="' + ui.alerts.targetMsg + ' ' + ui.alerts.namePosPrefix + props.pos + ' ' + msgStyles + '">' + props.msg + '</div>';

      if (holder === undefined) {
        html += '</div>';
        ui.find('body')[0].insertAdjacentHTML('beforeend', html);
      } else {
        holder = ui.find('.' + ui.alerts.nameMsgHolder)[0];
        holder.insertAdjacentHTML('beforeend', html);
      } // show message


      message = ui.find('.' + ui.alerts.targetMsg + ':last-child');
      ui.addClass(message, ui.alerts.nameShow);
      setTimeout(function () {
        ui.addClass(message, ui.alerts.nameShowEase); // move same position elements

        if (holder !== undefined) {
          prev = ui.find('.' + ui.alerts.targetMsg + '.' + ui.alerts.namePosPrefix + props.pos);

          for (j = 0; j < prev.length; j++) {
            slide = 0;

            for (i = j + 1; i < prev.length; i++) {
              slide += Number(prev[i].offsetHeight + 10);
            }

            if (props.pos === ui.alerts.posBottomRight || props.pos === ui.alerts.posBottomLeft) {
              slide = -1 * slide;
            }

            prev[j].style.transform = 'translateY(' + slide + 'px)';
          }
        } // auto close messages


        messageQueue.push(message);
        setTimeout(function () {
          // for manually closing messages by user
          if (messageQueue[0] === undefined) {
            return;
          }

          ui.alerts.closeMessage(messageQueue[0][0]);
          messageQueue.shift();
        }, ui.alerts.messageTimer);
      }, 10);
    }; // Event Listeners


    ui.on(document, 'click', '.' + ui.alerts.targetMsg, function () {
      var i;

      for (i = 0; i < messageQueue.length; i++) {
        if (messageQueue[i][0] === this) {
          messageQueue.splice(i, 1);
        }
      }

      ui.alerts.closeMessage(this);
    });
  }; // Loaders


  ui.onload(ui.alerts.Start);
})();
"use strict";

/*
 UI Autocomplete JS
 Requires UI Core JS
*/
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
  stylesList: 'ui-shadow-lg ui-ease-autocomplete',
  // tags
  tagHighlight: 'b',
  // values
  scrollbarSize: 15,
  queryParameter: 'val',
  customLetters: {
    "İ": "i",
    "I": "ı",
    "Ş": "ş",
    "Ğ": "ğ",
    "Ü": "ü",
    "Ö": "ö",
    "Ç": "ç"
  },
  // data attributes
  dataSrc: 'data-ui-src',
  dataVal: 'data-ui-val'
};

(function () {
  'use strict';
  /*globals window, document, ui, clearTimeout, setTimeout */

  ui.autocomplete.Start = function () {
    var customLowerCase,
        formEventListeners,
        autocompleteRequests = []; // custom lowercase

    (function () {
      var k, re, chars, keys;
      keys = Object.keys(ui.autocomplete.customLetters); // returns array

      chars = '(([';

      for (k = 0; k < keys.length; k++) {
        chars += keys[k];
      }

      chars += ']))';
      re = new RegExp(chars, 'g');

      customLowerCase = function customLowerCase(string) {
        string = string.replace(/["'\[\]\{\}()]/g, '').replace(re, function (l) {
          return ui.autocomplete.customLetters[l];
        });
        return string.toLowerCase();
      };
    })(); // Event Listeners


    formEventListeners = ui.find('.' + ui.autocomplete.nameInput + '.' + ui.autocomplete.target + ' > [type="text"]');
    ui.on(document, 'keyup', formEventListeners, function (e) {
      var i, j, k, n, p, list, listItems, navSelected, navIndex, v, key, checkData, createDropdown, timerShowLines, offset, tHeight, dHeight, m, txt, getVal, src;
      p = this.parentNode;
      list = ui.find('ul', p);

      if (list[0] === undefined) {
        return;
      } // clear forms has triggering keyup event


      if (e.keyCode === 38 || e.keyCode === 40) {
        // navigate the list
        listItems = ui.find('li', list[0]);

        if (listItems.length > 0) {
          navSelected = ui.find('li.' + ui.autocomplete.nameSelected, list[0]);

          if (navSelected.length > 0) {
            navIndex = Array.prototype.slice.call(listItems).indexOf(navSelected[0]);

            if (e.keyCode === 40) {
              // arrow down
              navIndex += 1;

              if (navIndex >= listItems.length) {
                navIndex = 0;
              }
            } else if (e.keyCode === 38) {
              // arrow up
              navIndex -= 1;

              if (navIndex < 0) {
                navIndex = 0;
              }
            }
          } else {
            if (e.keyCode === 40) {
              // arrow down
              navIndex = 0;
            } else if (e.keyCode === 38) {
              // arrow up
              navIndex = listItems.length - 1;
            }
          }

          ui.removeClass(navSelected, ui.autocomplete.nameSelected);
          ui.addClass(listItems[navIndex], ui.autocomplete.nameSelected);
          this.value = listItems[navIndex].textContent;
        }
      } else if (e.keyCode === 13 || e.keyCode === 27 || e.keyCode === undefined) {
        // undefined: detect keyup trigger event when clicking!
        if (list.length >= 1) {
          ui.removeClass(p, ui.autocomplete.nameOpenEase);
          setTimeout(function () {
            ui.removeClass(p, ui.autocomplete.nameOpen);
            list[0].innerHTML = '';
          }, ui.globals.ease);
        }
      } else if (e.keyCode !== 16 && e.keyCode !== 17 && e.keyCode !== 18) {
        v = this.value;
        v = customLowerCase(v);
        v = v.replace(/\s+$/g, ''); // remove the last space

        if (v !== '') {
          checkData = function checkData(response) {
            response = JSON.parse(response);

            if (response.length !== 'undefined') {
              createDropdown = function createDropdown() {
                // create dropdown
                clearTimeout(timerShowLines);
                timerShowLines = setTimeout(function () {
                  offset = p.getBoundingClientRect();
                  tHeight = p.offsetHeight;
                  dHeight = list[0].offsetHeight;

                  if (offset.top + parseInt(tHeight + dHeight) >= window.innerHeight) {
                    if (offset.top - parseInt(tHeight + dHeight) + tHeight > 0) {
                      ui.addClass(p, ui.autocomplete.nameMenuTop);
                    } else {
                      list[0].style.height = dHeight - (offset.top + parseInt(tHeight + dHeight) - window.innerHeight) - ui.autocomplete.scrollbarSize + 'px';
                    }
                  }
                }, 10);
              };

              k = 0;
              ui.addClass(p, ui.autocomplete.nameOpen);
              setTimeout(function () {
                ui.addClass(p, ui.autocomplete.nameOpenEase);
              }, 0);
              ui.removeClass(p, ui.autocomplete.nameMenuTop);
              list[0].innerHTML = '';

              for (i = 0; i < response.length; i++) {
                key = response[i][getVal];
                txt = '';

                if (key !== null) {
                  if (typeof key === 'boolean') {
                    return;
                  } // booleans not supported!


                  m = key;

                  if (typeof key === 'number') {
                    m = m.toString().match(v, 'g');
                  } else {
                    m = customLowerCase(m);
                    m = m.match(v, 'g');
                  }

                  if (m !== null) {
                    createDropdown(); // show max. number of lines: 5

                    k += 1;

                    if (k > 5) {
                      return;
                    } // create lines


                    if (typeof key === 'number') {
                      for (j = 0; j < key.toString().length; j++) {
                        if (j === key.toString().indexOf(m)) {
                          txt += '<' + ui.autocomplete.tagHighlight + '>';
                        }

                        if (j === key.toString().indexOf(m) + v.length) {
                          txt += '</' + ui.autocomplete.tagHighlight + '>';
                        }

                        txt += key.toString().charAt(j);
                      }
                    } else {
                      for (j = 0; j < key.length; j++) {
                        if (j === customLowerCase(key).indexOf(m)) {
                          txt += '<' + ui.autocomplete.tagHighlight + '>';
                        }

                        if (j === customLowerCase(key).indexOf(m) + v.length) {
                          txt += '</' + ui.autocomplete.tagHighlight + '>';
                        }

                        txt += key.charAt(j);
                      }
                    }

                    list[0].insertAdjacentHTML('beforeend', '<li>' + txt + '</li>');
                  }
                }
              }
            }

            response = '';
          };

          getVal = p.getAttribute(ui.autocomplete.dataVal);

          if (getVal !== null && getVal !== '') {
            src = p.getAttribute(ui.autocomplete.dataSrc);

            if (src !== null && src !== '') {
              // get json data with ajax
              ui.ajax({
                url: src + '?' + ui.autocomplete.queryParameter + '=' + v,
                beforesend: function beforesend(xhr) {
                  // abort still processing previous autocomplete requests
                  for (n = 0; n < autocompleteRequests.length; n++) {
                    autocompleteRequests[n].abort();
                    autocompleteRequests.splice(n, 1);
                  }

                  autocompleteRequests.push(xhr);
                },
                callback: function callback(status, response) {
                  if (status === 'success') {
                    checkData(response);
                  }
                }
              });
            }
          } else {
            return;
          }
        } else {
          ui.removeClass(p, ui.autocomplete.nameOpenEase);
          setTimeout(function () {
            ui.removeClass(list, ui.autocomplete.nameOpen);
            list[0].innerHTML = '';
          }, ui.globals.ease);
        }
      }
    });
    ui.on(document, 'keydown', formEventListeners, function (e) {
      // prevent form submitting when selecting from list with enter
      if (e.keyCode === 13) {
        var p, list;
        p = this.parentNode;
        list = ui.find('li.' + ui.autocomplete.nameSelected, p);

        if (list.length > 0) {
          e.preventDefault();
          e.stopPropagation();
          ui.removeClass(p, ui.autocomplete.nameOpenEase);
          setTimeout(function () {
            ui.removeClass(p, ui.autocomplete.nameOpen);
          }, ui.globals.ease);
        }
      }
    });
    ui.on(document, 'focus', formEventListeners, function () {
      var p, styles;
      p = this.parentNode;
      this.setAttribute('autocomplete', 'off');
      ui.addClass(p, ui.autocomplete.nameOpen);
      ui.removeClass(p, ui.autocomplete.nameMenuTop);
      styles = ui.autocomplete.stylesList;

      if (ui.hasClass(p, ui.autocomplete.nameRound)) {
        styles += ' ' + ui.autocomplete.nameRound;
      }

      p.insertAdjacentHTML('beforeend', '<ul class="' + styles + '"></ul>');
    });
    ui.on(document, 'blur', formEventListeners, function () {
      var p, list;
      p = this.parentNode;
      list = ui.find('ul', p);
      ui.removeClass(p, ui.autocomplete.nameOpenEase);
      setTimeout(function () {
        ui.removeClass(p, ui.autocomplete.nameOpen);

        if (list.length > 0) {
          p.removeChild(list[0]);
        }
      }, ui.globals.ease);
    });
    ui.on(document, 'mousedown', '.' + ui.autocomplete.nameInput + '.' + ui.autocomplete.target + '.' + ui.autocomplete.nameOpen + ' li', function () {
      // trigger defined event listeners after autocomplete selected
      var p, target;
      p = ui.closest(this, '.' + ui.autocomplete.target);
      target = ui.find('[type="text"]', p);
      target.value = this.textContent;
      ui.trigger(target, 'keyup');
    });
  }; // Loaders


  ui.onload(ui.autocomplete.Start);
})();
"use strict";

/*
 UI Calendar JS
 Requires UI Core JS
*/
ui.calendar = {
  // targets
  target: 'ui-calendar',
  // main classnames
  nameContainer: 'ui-calendar-container',
  nameTitle: 'ui-calendar-title',
  nameDetails: 'ui-calendar-details',
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
  prevIcon: 'arrow-left',
  // header's previous button
  nextIcon: 'arrow-right',
  // header's next button
  backIcon: 'angle-left',
  // detail's back button
  // values
  pickerSep: '/',
  days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  dateFormat: 1,
  // 0: dd mm yyyy, 1: mm dd yyyy
  startDayofWeek: 1,
  // 0: Sunday, 1: Monday
  setPrev: 'prev',
  setNext: 'next',
  fillWeekends: true,
  // true: fills dark color to weekends' background
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

(function () {
  'use strict';
  /*globals window, document, ui, setTimeout */

  var checkCalendars; // first loading

  ui.calendar.Start = function () {
    // get calendar's date
    function getAttr(that, date, newDate) {
      var attr = that.getAttribute(ui.calendar.dataDate);

      if (attr !== null && attr !== '') {
        attr = attr.split(',');

        if (attr.length === 1) {
          // set only month
          if (!isNaN(Number(attr[0])) && attr[0].length <= 2) {
            if (attr[0] === '0') {
              attr[0] = 1;
            }

            date.setMonth(attr[0] - 1);
          }
        } else if (attr.length === 2) {
          // set year and month
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
    } // get picker value


    function pickerVal(that) {
      if (that.value !== '') {
        var val = that.value.split(ui.calendar.pickerSep);

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
    } // create calendar table


    function createFnc(that, newDate, picker) {
      var date, today, pickerDay, container, html, i, j, todayStyles, pickerDayStyles, sysDays, activeDay, days, prevLastDay, firstDay, lastDay, src, keys, dday, details;
      date = new Date();
      date.setDate(1); // for the prev and next implementations

      pickerDay = ''; // set new date

      if (newDate !== undefined) {
        if (newDate === ui.calendar.setPrev || newDate === ui.calendar.setNext) {
          if (picker) {
            // called from picker
            pickerDay = pickerVal(picker); // check value
          }

          getAttr(that, date, newDate); // get date
        } else {
          newDate = newDate.split(',');
          date.setFullYear(newDate[0]);
          date.setMonth(newDate[1]);

          if (newDate[2] !== undefined) {
            // defined a new day from picker
            pickerDay = Number(newDate[0]) + ',' + Number(newDate[1]) + ',' + Number(newDate[2]);
          }
        }
      } else {
        getAttr(that, date); // get date
      } // set new date


      that.setAttribute(ui.calendar.dataDate, date.getFullYear() + ',' + (date.getMonth() + 1)); // create table

      html = '';
      container = ui.find('.' + ui.calendar.nameContainer, that)[0];

      if (container === undefined) {
        html += '<div class="' + ui.calendar.nameContainer + ' ' + ui.calendar.stylesContainer + '">';
      }

      html += '<table';

      if (ui.calendar.fillWeekends) {
        html += ' class="' + ui.calendar.nameWeekend + '"';
      }

      html += '>' + '<caption>' + '<button type="button" tabindex="-1" class="' + ui.calendar.namePrev + '">' + '<svg class="' + ui.calendar.nameIcon + '"><use href="#' + ui.calendar.prevIcon + '"/></svg>' + '</button>' + '<span class="' + ui.calendar.nameTitle + ' ' + ui.calendar.stylesTitle + '">' + '<button type="button" tabindex="-1" class="' + ui.calendar.nameMonth + '">' + ui.calendar.months[date.getMonth()] + '</button>' + '<button type="button" tabindex="-1" class="' + ui.calendar.nameYear + '">' + date.getFullYear() + '</button>' + '</span>' + '<button type="button" tabindex="-1" class="' + ui.calendar.nameNext + '">' + '<svg class="' + ui.calendar.nameIcon + '"><use href="#' + ui.calendar.nextIcon + '"/></svg>' + '</button>' + '</caption>' + '<thead>';

      if (ui.calendar.startDayofWeek === 0) {
        // Sunday
        html += '<th>' + ui.calendar.days[ui.calendar.days.length - 1] + '</th>';

        for (i = 0; i < ui.calendar.days.length - 1; i++) {
          html += '<th>' + ui.calendar.days[i] + '</th>';
        }
      } else {
        // Monday
        for (i = 0; i < ui.calendar.days.length; i++) {
          html += '<th>' + ui.calendar.days[i] + '</th>';
        }
      }

      html += '</thead>' + '<tbody>';
      firstDay = new Date(date.getFullYear(), date.getMonth(), 1);

      if (ui.calendar.startDayofWeek === 0) {
        // Sunday
        sysDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']; // don't update to your language

        firstDay = sysDays.indexOf(sysDays[firstDay.getDay()]);
      } else {
        // Monday
        sysDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']; // don't update to your language

        firstDay = sysDays.indexOf(sysDays[firstDay.getDay() - 1]);
      }

      if (firstDay < 1) {
        firstDay = 7;
      }

      prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
      days = prevLastDay - (firstDay - 1);
      lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
      activeDay = false;
      today = new Date().getFullYear() + ' ' + new Date().getMonth() + ' ' + new Date().getDate();

      for (i = 0; i < 6; i++) {
        html += '<tr>';

        for (j = 0; j < 7; j++) {
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
            if (date.getFullYear() + ' ' + date.getMonth() + ' ' + days === today) {
              // today
              todayStyles = '';

              if (ui.calendar.stylesToday !== '') {
                todayStyles = ui.calendar.stylesToday + ' ' + ui.calendar.nameHover;
              }

              html += '<td class="' + ui.calendar.nameToday + '">' + '<button class="' + todayStyles + '" type="button" tabindex="-1">' + days + '</button>' + '</td>';
            } else {
              // other days
              if (pickerDay !== '') {
                // defined a new day from picker
                if (date.getFullYear() + ',' + date.getMonth() + ',' + days === pickerDay) {
                  pickerDayStyles = '';

                  if (ui.calendar.pickerDayStyles !== '') {
                    pickerDayStyles = ui.calendar.stylesPickerDay + ' ' + ui.calendar.nameHover;
                  }

                  html += '<td ' + ui.calendar.dataDay + '="' + days + '" class="' + ui.calendar.namePickerDay + '">' + '<button class="' + pickerDayStyles + '" type="button" tabindex="-1">' + days + '</button>' + '</td>';
                } else {
                  html += '<td ' + ui.calendar.dataDay + '="' + days + '">' + '<button type="button" tabindex="-1">' + days + '</button>' + '</td>';
                }
              } else {
                html += '<td ' + ui.calendar.dataDay + '="' + days + '">' + '<button type="button" tabindex="-1">' + days + '</button>' + '</td>';
              }
            }
          } else {
            // passive days
            html += '<td class="' + ui.calendar.namePassiveDay + '">' + '<span>' + days + '</span>' + '</td>';
          }

          days += 1;
        }

        html += '</tr>';
      }

      html += '</tbody>' + '</table>';

      if (container === undefined) {
        html += '</div>';
        that.insertAdjacentHTML('afterbegin', html);
      } else {
        container.innerHTML = '';
        container.insertAdjacentHTML('afterbegin', html);
      } // check details


      src = that.getAttribute(ui.calendar.dataSrc);

      if (src !== null && src !== '') {
        details = ''; // get json data with ajax

        ui.ajax({
          url: src,
          callback: function callback(status, response) {
            if (status === 'success') {
              response = JSON.parse(response);

              if (response.length === 'undefined') {
                return;
              }

              for (i = 0; i < response.length; i++) {
                if (response[i] === null) {
                  return;
                }

                if (Number(response[i].year) === date.getFullYear()) {
                  if (Number(response[i].month) === date.getMonth() + 1) {
                    // select detailed days
                    dday = ui.find('[' + ui.calendar.dataDay + '="' + response[i].day + '"]', that);
                    ui.addClass(dday, ui.calendar.nameToggleDetails); // create details html

                    details += '<li ' + ui.calendar.dataD + '="' + response[i].day + '">' + '<strong>' + response[i].day + '</strong>' + '<b>' + response[i].dayName + '</b><br>';
                    keys = Object.keys(response[i].details);

                    for (j = 0; j < keys.length; j++) {
                      details += '<span>' + '<i>' + keys[j] + '</i> ' + response[i].details[keys[j]] + '</span>';
                    }

                    details += '</li>';
                  }
                }
              }

              container = ui.find('.' + ui.calendar.nameContainer, that)[0];

              if (ui.hasClass(that, ui.calendar.nameShowDetails)) {
                setTimeout(function () {
                  ui.addClass(ui.find('.' + ui.calendar.nameDetails, container), ui.calendar.nameOpen);
                }, 10);
              }

              if (details !== '') {
                details = '<div class="' + ui.calendar.nameDetails + '">' + '<button class="' + ui.calendar.nameToggleDetails + '" type="button" tabindex="-1">' + '<svg class="' + ui.calendar.nameIcon + '"><use href="#' + ui.calendar.backIcon + '"/></svg>' + '</button>' + '<ul class="' + ui.calendar.stylesDetailScroll + '">' + details + '</ul>' + '</div>';
                ui.addClass(container, ui.calendar.nameHasDetails); // enable buttons click event
              } else {
                details = '<div class="' + ui.calendar.nameDetails + ' ' + ui.calendar.nameEmptyDetails + '">' + '<button class="' + ui.calendar.nameToggleDetails + '" type="button" tabindex="-1">' + '<svg class="' + ui.calendar.nameIcon + '"><use href="#' + ui.calendar.backIcon + '"/></svg>' + '</button>' + '<ul>' + '<li>' + '<strong></strong>' + '<b></b><br>' + '<span></span>' + '<span></span>' + '<span></span>' + '</li>' + '</ul>' + '</div>';
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
    } // ckeck not loaded calendars


    checkCalendars = function checkCalendars() {
      var calendars = ui.find('.' + ui.calendar.target + ':not(.' + ui.calendar.nameActive + ')');

      if (calendars.length > 0) {
        ui.each(calendars, function () {
          createFnc(this);
        });
      }
    };

    checkCalendars(); // Event Listeners
    // calendar navigation

    ui.on(document, 'click', '.' + ui.calendar.namePrev + ',.' + ui.calendar.nameNext, function () {
      var that, picker, form;
      that = ui.closest(this, '.' + ui.calendar.target)[0];
      picker = ui.closest(that, '.' + ui.calendar.namePicker)[0]; // check called from picker

      if (ui.hasClass(this, ui.calendar.nameNext)) {
        if (picker === undefined) {
          createFnc(that, ui.calendar.setNext);
        } else {
          // picker
          form = ui.find('[type="text"]', picker)[0];
          createFnc(that, ui.calendar.setNext, form);
        }
      } else {
        if (picker === undefined) {
          createFnc(that, ui.calendar.setPrev);
        } else {
          // picker
          form = ui.find('[type="text"]', picker)[0];
          createFnc(that, ui.calendar.setPrev, form);
        }
      }
    }); // change month and year with panel

    ui.on(document, 'click', '.' + ui.calendar.nameMonth + ',.' + ui.calendar.nameYear, function () {
      var that, date, year, years, month, html, i, panelType, getList, getSelected, getIndex;
      date = new Date();
      that = ui.closest(this, '.' + ui.calendar.target)[0];
      getAttr(that, date); // create panel

      html = '<div class="' + ui.calendar.namePanel + ' ' + ui.calendar.stylesPanel + '">' + '<ul>';

      if (ui.hasClass(this, ui.calendar.nameYear)) {
        // years
        panelType = 'year';
        year = date.getFullYear();
        years = 1920 + (new Date().getFullYear() - 1920) + 100;

        for (i = 1920; i <= years; i++) {
          html += '<li>' + '<button type="button" tabindex="-1" ';

          if (year === i) {
            html += 'class="' + ui.calendar.namePanelCall + ' ' + ui.calendar.nameSelected + '" ';
          } else {
            html += 'class="' + ui.calendar.namePanelCall + '" ';
          }

          html += 'name="' + i + '">' + i + '</button>' + '</li>';
        }
      } else {
        // months
        panelType = 'month';
        month = ui.calendar.months[date.getMonth()];

        for (i = 0; i < ui.calendar.months.length; i++) {
          html += '<li>' + '<button type="button" tabindex="-1" ';

          if (month === ui.calendar.months[i]) {
            html += 'class="' + ui.calendar.namePanelCall + ' ' + ui.calendar.nameSelected + '" ';
          } else {
            html += 'class="' + ui.calendar.namePanelCall + '" ';
          }

          html += 'name="' + i + '">' + ui.calendar.months[i] + '</button>' + '</li>';
        }
      }

      html += '</ul>' + '</div>'; // show panel

      that.insertAdjacentHTML('afterbegin', html);
      html = ''; // animate panel

      setTimeout(function () {
        ui.addClass(that, ui.calendar.nameShowPanel); // scroll to active year

        if (panelType === 'year') {
          getList = ui.find('.' + ui.calendar.target + ' .' + ui.calendar.namePanel + ' .' + ui.calendar.namePanelCall, that);
          getSelected = ui.find('.' + ui.calendar.target + ' .' + ui.calendar.namePanel + ' .' + ui.calendar.namePanelCall + '.' + ui.calendar.nameSelected, that)[0];
          getIndex = Math.floor(Array.prototype.slice.call(getList).indexOf(getSelected) / 12);
          ui.find('.' + ui.calendar.namePanel, that)[0].scrollTop = getIndex * (that.offsetHeight - ui.calendar.calendarPadding * 2); // IE, EDGE: scrollTo() not supported for div element

          getList = '';
        }
      }, 10);
    }); // close panel

    ui.on(document, 'click', '.' + ui.calendar.target + ' .' + ui.calendar.namePanel + ' .' + ui.calendar.namePanelCall, function () {
      var that, date;
      date = new Date();
      that = ui.closest(this, '.' + ui.calendar.target)[0];
      getAttr(that, date);
      ui.removeClass(that, ui.calendar.nameShowPanel);

      if (!ui.hasClass(this, ui.calendar.nameSelected)) {
        // check user selected different date
        if (this.name.length === 4) {
          // selected year
          createFnc(that, this.name + ',' + date.getMonth());
        } else {
          // selected month
          createFnc(that, date.getFullYear() + ',' + this.name);
        }
      }

      setTimeout(function () {
        that.removeChild(ui.find('.' + ui.calendar.namePanel, that)[0]);
      }, ui.globals.slow);
    }); // close picker

    function pickerCloseFnc(type, target) {
      var allPickers = ui.find('.' + ui.calendar.namePicker + ' .' + ui.calendar.target);

      function removePicker(form, picker) {
        form.removeChild(picker);
        ui.removeClass(form, ui.calendar.namePickerLeft + ' ' + ui.calendar.namePickerTop);
      }

      if (type === 'continuous') {
        // when the user holds the tab button continuously
        ui.each(allPickers, function (i) {
          ui.removeClass(this, ui.calendar.nameOpenEase);
          setTimeout(function () {
            var that, form;
            that = ui.find('.' + ui.calendar.namePicker + ' .' + ui.calendar.target)[i];

            if (that === undefined) {
              return;
            }

            form = that.parentElement;
            removePicker(form, that);
          }, ui.globals.ease);
        });
      } else {
        ui.each(allPickers, function () {
          var that, form;
          that = this;
          form = that.parentElement;
          ui.removeClass(that, ui.calendar.nameOpenEase);
          setTimeout(function () {
            removePicker(form, that);
          }, ui.globals.ease);
        });
      } // remove event listeners


      ui.off('body', 'mousedown.' + ui.calendar.eventClose);
      ui.off(target, 'keydown.' + ui.calendar.eventClose + ' keyup.' + ui.calendar.eventChange);
    } // show picker


    ui.on(document, 'focus', '.' + ui.calendar.namePicker + ' > [type="text"]', function () {
      var that, form, offset, html, picker, inputDate, formHeight, pickerWidth, pickerHeight;
      that = this; // check duplicate

      form = that.parentElement;

      if (ui.find('.' + ui.calendar.target, form).length > 0) {
        return;
      } // remove event listeners


      ui.off('body', 'mousedown.' + ui.calendar.eventClose);
      ui.off(that, 'keydown.' + ui.calendar.eventClose + ' keyup.' + ui.calendar.eventChange); // create picker

      html = '<div class="' + ui.calendar.target;

      if (ui.hasClass(form, ui.calendar.nameRound)) {
        html += ' ' + ui.calendar.nameRound;
      }

      html += ' ' + ui.calendar.stylesCalendar + '">' + '</div>';
      form.insertAdjacentHTML('beforeend', html);
      picker = ui.find('.' + ui.calendar.target, form)[0]; // check value

      inputDate = pickerVal(that);

      if (inputDate === '') {
        createFnc(picker);
      } else {
        createFnc(picker, inputDate);
      } // check picker position


      offset = form.getBoundingClientRect();
      formHeight = form.offsetHeight;
      pickerWidth = picker.offsetWidth;
      pickerHeight = picker.offsetHeight;

      if (offset.left + pickerWidth + ui.calendar.scrollbarSize > window.innerWidth) {
        if (offset.left - (pickerWidth - form.offsetWidth) - ui.calendar.scrollbarSize > 0) {
          ui.addClass(form, ui.calendar.namePickerLeft);
        }
      }

      if (offset.top + parseInt(formHeight + pickerHeight) >= window.innerHeight) {
        if (offset.top - parseInt(formHeight + pickerHeight) + formHeight > 0) {
          ui.addClass(form, ui.calendar.namePickerTop);
        }
      } // show picker


      setTimeout(function () {
        ui.addClass(picker, ui.calendar.nameOpenEase);
      }, 10); // close event listeners

      ui.on('body', 'mousedown.' + ui.calendar.eventClose, function (ev) {
        // prevent for picker elements
        if (ui.closest(ev.target, form)[0] !== undefined) {
          return;
        }

        if (ev.button !== 2) {
          // inherited right clicks
          pickerCloseFnc('default', that);
        }
      });
      ui.on(that, 'keydown.' + ui.calendar.eventClose, function (ev) {
        if (ev.keyCode === 9 || ev.keyCode === 13 || ev.keyCode === 27) {
          // Tab || Enter || Esc
          pickerCloseFnc('continuous', that);
        }
      }); // change event

      ui.on(that, 'keyup.' + ui.calendar.eventChange, function () {
        inputDate = pickerVal(this); // check value

        if (inputDate === '') {
          createFnc(picker);
        } else {
          createFnc(picker, inputDate);
        }
      });
    }); // picker buttons

    ui.on(document, 'click', '.' + ui.calendar.namePicker + ' .' + ui.calendar.target + ' tbody td button', function () {
      var date, day, month, picker, that, form;
      date = new Date();
      picker = ui.closest(this, '.' + ui.calendar.namePicker)[0];
      that = ui.find('.' + ui.calendar.target, picker)[0];
      form = ui.find('[type="text"]', picker)[0];
      getAttr(that, date); // get date

      date.setDate(this.textContent); // set new day
      // set values to input form

      day = date.getDate().toString();

      if (day.length === 1) {
        day = '0' + day;
      }

      month = date.getMonth();
      month += 1;
      month = month.toString();

      if (month.length === 1) {
        month = '0' + month;
      }

      if (ui.calendar.dateFormat === 1) {
        form.value = month + ui.calendar.pickerSep + day + ui.calendar.pickerSep + date.getFullYear(); // mm dd yyyy
      } else {
        form.value = day + ui.calendar.pickerSep + month + ui.calendar.pickerSep + date.getFullYear(); // dd mm yyyy
      } // close picker


      pickerCloseFnc('default', form);
    }); // toggle details

    ui.on(document, 'click', '.' + ui.calendar.target + ' .' + ui.calendar.nameToggleDetails, function () {
      var that, details, day, i, list, scroll;
      that = ui.closest(this, '.' + ui.calendar.target)[0];
      details = ui.find('.' + ui.calendar.nameDetails, that)[0];

      if (ui.hasClass(that, ui.calendar.nameShowDetails)) {
        ui.removeClass(that, ui.calendar.nameShowDetails);
        setTimeout(function () {
          ui.removeClass(details, ui.calendar.nameOpen);
        }, ui.globals.ease * 2);
      } else {
        ui.addClass(details, ui.calendar.nameOpen);
        setTimeout(function () {
          ui.addClass(that, ui.calendar.nameShowDetails);
        }, 10);
        scroll = 0;
        day = this.getAttribute(ui.calendar.dataDay);
        list = ui.find('.' + ui.calendar.nameDetails + ' li', that);

        for (i = 0; i < list.length; i++) {
          if (list[i].getAttribute(ui.calendar.dataD) === day) {
            break;
          }

          scroll += list[i].offsetHeight + ui.calendar.calendarPadding;
        }

        ui.find('ul', details)[0].scrollTop = scroll; // IE, EDGE: scrollTo() not supported for div element
      }
    });
  }; // Loaders


  ui.onload(ui.calendar.Start); // ajax callback loader

  ui.on(document, ui.globals.eventAjaxCallback, function () {
    if (ui.ajax.classNames.indexOf(ui.calendar.target) > -1) {
      checkCalendars();
    }
  });
})();
"use strict";

/*
 UI Card JS
 Requires UI Core JS
*/
ui.card = {
  // targets
  targetClose: 'ui-card-close',
  // styling classnames
  stylesClosing: 'ui-card-close-wait ui-ease-layout'
};

(function () {
  'use strict';
  /*globals document, ui, setTimeout */

  ui.card.Start = function () {
    // Event Listeners
    ui.on(document, 'click', '.' + ui.card.targetClose, function () {
      var parentEl = this.parentElement;
      ui.addClass(parentEl, ui.card.stylesClosing);
      setTimeout(function () {
        parentEl.parentNode.removeChild(parentEl);
      }, ui.globals.ease * 2);
    });
  }; // Loaders


  ui.onload(ui.card.Start);
})();
"use strict";

/*
 UI Carousel JS
 Requires UI Core JS
*/
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
  // styling classnames
  stylesDots: 'ui-ease-all ui-ease-slow',
  // tags
  tagDots: 'i',
  // values
  halfSize: 0.5,
  // set percent of default half size
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

(function () {
  'use strict';
  /*globals window, document, ui, Image, setTimeout, clearTimeout, setInterval, clearInterval */

  var idCount = 0,
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

  function getCols(i) {
    var col;

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
  }

  function carouselAnimate(content, wait, type) {
    var time, elems, i;
    time = content.getAttribute(ui.carousel.dataAnimate);

    if (time !== null) {
      if (time === '') {
        time = ui.globals.ease;
      }

      i = 0;
      elems = ui.find('.' + ui.carousel.nameAnimate, content);

      if (elems.length === 0) {
        return;
      }

      if (ui.closest(content, '.' + ui.carousel.nameResized)[0] !== undefined) {
        // detect carousel is resizing
        return;
      }

      if (type === 'static') {
        ui.removeClass(elems, ui.carousel.nameShow);
      }

      setTimeout(function () {
        // wait for dom loading or slider ease time
        function show() {
          setTimeout(function () {
            ui.addClass(elems[i], ui.carousel.nameShow);
            i += 1;

            if (i < elems.length) {
              show();
            }
          }, time);
        }

        show();
      }, wait);
    }
  }

  function filterDots(navDots, navDotsEl, count, i) {
    ui.removeClass(navDots, ui.carousel.nameFiltered);
    ui.removeClass(navDotsEl, ui.carousel.nameShow + ' ' + ui.carousel.nameFaded);
    var col = getCols(i); // get responsive cols

    ui.addClass(navDots, ui.carousel.nameFiltered);

    if (count - 1 > -1) {
      ui.addClass(navDotsEl[count - 1], ui.carousel.nameShow);

      if (count - 2 > -1) {
        ui.addClass(navDotsEl[count - 2], ui.carousel.nameFaded);
      }
    }

    if (count + col < navDotsEl.length) {
      ui.addClass(navDotsEl[count + 1], ui.carousel.nameShow);

      if (count + col + 1 < navDotsEl.length) {
        ui.addClass(navDotsEl[count + 2], ui.carousel.nameFaded);
      }
    }
  }

  function carouselModifier(i, that, type) {
    var j, slider, contents, nav, col, halfSized, size, navDots, navDotsEl;
    contents = ui.find('.' + ui.carousel.nameContent, that);

    if (contents.length === 0) {
      return;
    }

    nav = ui.find('.' + ui.carousel.targetNav, that)[0];

    if (nav === undefined) {
      return;
    }

    col = getCols(i); // get responsive cols

    if (contents.length <= col) {
      // toggle nav
      nav.style.display = 'none';
    } else {
      nav.style.display = '';
    }

    halfSized = ui.hasClass(that, ui.carousel.nameHalfSize);
    slider = ui.find('.' + ui.carousel.targetSlider, that);
    size = col;

    if (halfSized && col > 1 && col !== contents.length) {
      size -= ui.carousel.halfSize;
    }

    size = Math.round(that.offsetWidth / size);

    for (j = 0; j < contents.length; j++) {
      contents[j].style.width = size + 'px';
    }

    size = size * contents.length;
    slider[0].style.width = size + 'px';

    if (contents.length / col === 1) {
      // check nav is active
      counts[i] = 0;
    } else if (col !== 1 && counts[i] > col) {
      // check current count larger than current col size
      counts[i] = col;
    }

    that.setAttribute(ui.carousel.dataContent, counts[i] + 1);
    slider[0].style.transform = 'translateX(-' + counts[i] * contents[0].offsetWidth + 'px)';
    navDots = ui.find('.' + ui.carousel.targetNav + ' .' + ui.carousel.nameDots, that);
    navDotsEl = ui.find('.' + ui.carousel.targetNav + ' .' + ui.carousel.nameDots + ' i', that);
    ui.removeClass(navDotsEl, ui.carousel.nameNavSelected);
    ui.addClass(navDotsEl[counts[i]], ui.carousel.nameNavSelected);
    filterDots(navDots, navDotsEl, counts[i], i); // filter dots when dots number exceeds

    ui.each(contents, function (l) {
      // detect carousel animates
      if (l + 1 > col) {
        return;
      }

      carouselAnimate(this, ui.globals.ease * 2, type);
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
    var col, slider, nav, contents, i, navDots, navDotsEl, slide, halfSized;
    nav = ui.find('.' + ui.carousel.targetNav, that)[0];

    if (nav === undefined) {
      return;
    }

    slider = ui.find('.' + ui.carousel.targetSlider, that);
    contents = ui.find('.' + ui.carousel.nameContent, slider[0]);

    if (contents.length === 0) {
      return;
    }

    i = Number(that.getAttribute(ui.carousel.dataID));

    if (i === null) {
      return;
    }

    navDots = ui.find('.' + ui.carousel.targetNav + ' .' + ui.carousel.nameDots, that);
    navDotsEl = ui.find('.' + ui.carousel.targetNav + ' .' + ui.carousel.nameDots + ' i', that);
    col = getCols(i); // get responsive cols

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

    that.setAttribute(ui.carousel.dataContent, counts[i] + 1);
    ui.removeClass(navDotsEl, ui.carousel.nameNavSelected);
    ui.addClass(navDotsEl[counts[i]], ui.carousel.nameNavSelected);
    filterDots(navDots, navDotsEl, counts[i], i); // filter dots when dots number exceeds

    slide = counts[i] * contents[0].offsetWidth;
    halfSized = ui.hasClass(that, ui.carousel.nameHalfSize);

    if (halfSized && counts[i] === contents.length - col) {
      slide += contents[0].offsetWidth * ui.carousel.halfSize;
    }

    slider[0].style.transform = 'translateX(-' + slide + 'px)';
    getSlideSpeed(slider, contentsEase[i], i); // get carousel slide speed
    // detect carousel animates

    if (contents.length > 1 && contents.length !== col) {
      // stop reloading animates when content length is not enough
      ui.each(contents, function () {
        carouselAnimate(this, contentsEase[i], 'static');
      });
    }
  }

  function carouselResizer(e) {
    var that, slider;

    if (touchStarted) {
      return;
    }

    if (e === 'resize' || e.type === 'resize') {
      that = ui.find('.' + ui.carousel.target);
      ui.each(that, function () {
        var i = Number(this.getAttribute(ui.carousel.dataID));

        if (i === null) {
          return;
        }

        ui.addClass(this, ui.carousel.nameResized);
        carouselModifier(i, this, 'resize');
        slider = ui.find('.' + ui.carousel.targetSlider, this)[0];
        this.style.transitionDuration = '0s';
        slider.style.transitionDuration = '0s';
      });
    }

    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      // wait auto slider until resize completed
      that = ui.find('.' + ui.carousel.target);
      ui.each(that, function () {
        var i = Number(this.getAttribute(ui.carousel.dataID));

        if (i === null) {
          return;
        }

        ui.removeClass(this, ui.carousel.nameResized);

        if (autoTimer[i] !== null && autoTimer[i] !== undefined) {
          clearInterval(autoSlider[i]);
          autoSlider[i] = setInterval(function () {
            carouselNav(that[i], 'next');
          }, autoTimer[i]);
        }

        slider = ui.find('.' + ui.carousel.targetSlider, this)[0];
        this.style.transitionDuration = '';
        slider.style.transitionDuration = '';
      });
    }, ui.globals.ease);
  }

  function carouselLoader() {
    var carousels = ui.find('.' + ui.carousel.target + ':not(.' + ui.carousel.nameActive + ')');

    if (carousels.length > 0) {
      // load carousels
      ui.each(carousels, function () {
        var j, k, that, contents, col, nav, navDots, navDotsHtml, navDotsEl;
        that = this; // id

        that.setAttribute(ui.carousel.dataID, idCount);
        j = idCount;
        idCount += 1; // cols

        cols[j] = that.getAttribute(ui.carousel.dataCols);
        colsXL[j] = that.getAttribute(ui.carousel.dataColsXL);
        colsLG[j] = that.getAttribute(ui.carousel.dataColsLG);
        colsMD[j] = that.getAttribute(ui.carousel.dataColsMD);
        colsSM[j] = that.getAttribute(ui.carousel.dataColsSM);
        colsXS[j] = that.getAttribute(ui.carousel.dataColsXS); // col

        if (cols[j] === null) {
          cols[j] = 1;
        } else {
          cols[j] = Number(cols[j]);

          if (!cols[j] || cols[j] === '0' || cols[j] === '') {
            cols[j] = 1;
          }
        } // xl


        if (colsXL[j] === null) {
          colsXL[j] = cols[j];
        } else {
          colsXL[j] = Number(colsXL[j]);

          if (!colsXL[j] || colsXL[j] === '0' || colsXL[j] === '') {
            colsXL[j] = cols[j];
          }
        } // lg


        if (colsLG[j] === null) {
          colsLG[j] = cols[j];
        } else {
          colsLG[j] = Number(colsLG[j]);

          if (!colsLG[j] || colsLG[j] === '0' || colsLG[j] === '') {
            colsLG[j] = cols[j];
          }
        } // md


        if (colsMD[j] === null) {
          colsMD[j] = cols[j];
        } else {
          colsMD[j] = Number(colsMD[j]);

          if (!colsMD[j] || colsMD[j] === '0' || colsMD[j] === '') {
            colsMD[j] = cols[j];
          }
        } // sm


        if (colsSM[j] === null) {
          colsSM[j] = cols[j];
        } else {
          colsSM[j] = Number(colsSM[j]);

          if (!colsSM[j] || colsSM[j] === '0' || colsSM[j] === '') {
            colsSM[j] = cols[j];
          }
        } // xs


        if (colsXS[j] === null) {
          colsXS[j] = cols[j];
        } else {
          colsXS[j] = Number(colsXS[j]);

          if (!colsXS[j] || colsXS[j] === '0' || colsXS[j] === '') {
            colsXS[j] = cols[j];
          }
        }

        counts[j] = 0;
        contents = ui.find('.' + ui.carousel.nameContent, that);

        if (contents.length === 0) {
          return;
        }

        nav = ui.find('.' + ui.carousel.targetNav, that)[0];
        navDots = ui.find('.' + ui.carousel.nameDots, nav)[0];

        if (nav === undefined || navDots === undefined) {
          return;
        }

        ui.addClass(that, ui.carousel.nameActive);
        carouselModifier(j, that, 'static'); // create nav

        col = getCols(j); // get responsive cols

        if (contents.length <= col) {
          // toggle nav
          nav.style.display = 'none';
        } else {
          nav.style.display = '';
        }

        navDotsHtml = '';
        navDots.innerHTML = '';

        for (k = 0; k < contents.length; k++) {
          navDotsHtml += '<' + ui.carousel.tagDots + ' ' + 'class="' + ui.carousel.stylesDots + '">' + '</' + ui.carousel.tagDots + '>';
        }

        navDots.insertAdjacentHTML('beforeend', navDotsHtml);
        navDotsEl = ui.find('.' + ui.carousel.nameDots + ' i', nav);
        counts[j] = 0;
        that.setAttribute(ui.carousel.dataContent, counts[j] + 1);
        ui.removeClass(navDotsEl, ui.carousel.nameNavSelected);
        ui.addClass(navDotsEl[counts[j]], ui.carousel.nameNavSelected);
        filterDots(navDots, navDotsEl, counts[j], j); // filter dots when dots number exceeds
        // auto slider

        autoTimer[j] = that.getAttribute(ui.carousel.dataSlide);

        if (autoTimer[j] !== null) {
          if (autoTimer[j] === '') {
            autoTimer[j] = ui.carousel.defaultSlideTimer;
          }

          autoSlider[j] = setInterval(function () {
            carouselNav(that, 'next');
          }, autoTimer[j]);
        }
      }); // carousel gallery loader

      ui.each('.' + ui.carousel.targetGallery + ' .' + ui.carousel.nameGalleryThumbs, function () {
        var images = ui.find('.' + ui.carousel.namePhoto, this);

        if (images.length <= 1) {
          this.style.display = 'none'; // hide thumbs when image length is 1 or 0
        }
      });
    }
  }

  ui.carousel.Start = function () {
    carouselLoader(); // Event Listeners

    ui.on(document, 'click', '.' + ui.carousel.namePrev + ',.' + ui.carousel.nameNext, function () {
      var i, that, direction;

      if (ui.hasClass(this, ui.carousel.nameNext)) {
        direction = 'next';
      } else {
        direction = 'prev';
      }

      that = ui.closest(this, '.' + ui.carousel.target)[0];
      i = Number(that.getAttribute(ui.carousel.dataID));

      if (i === null) {
        return;
      }

      carouselNav(that, direction); // wait auto slider when navigating

      if (autoTimer[i] !== null) {
        clearInterval(autoSlider[i]);
      }
    });

    function carouselStart(that) {
      var i = Number(that.getAttribute(ui.carousel.dataID));

      if (i === null) {
        return;
      }

      clearInterval(autoSlider[i]);
      autoSlider[i] = setInterval(function () {
        carouselNav(that, 'next');
      }, autoTimer[i]);
    }

    function carouselStop(that) {
      var i = Number(that.getAttribute(ui.carousel.dataID));

      if (i === null) {
        return;
      }

      clearInterval(autoSlider[i]);
    }

    ui.on(document, 'mouseenter', '.' + ui.carousel.target + '[' + ui.carousel.dataSlide + ']', function () {
      carouselStop(this);
    });
    ui.on(document, 'mouseleave', '.' + ui.carousel.target + '[' + ui.carousel.dataSlide + ']', function () {
      carouselStart(this);
    });
    ui.on(window, 'visibilitychange', function () {
      var callCarousels = ui.find('.' + ui.carousel.target + '[' + ui.carousel.dataSlide + ']');

      if (document.hidden) {
        // stop all carousels when browser windows is not active
        ui.each(callCarousels, function () {
          carouselStop(this);
        });
      } else {
        ui.each(callCarousels, function () {
          carouselStart(this);
        });
      }
    }); // prevent touch event listeners when inline scrolling

    ui.on(document, 'scroll', '.' + ui.carousel.target + ' .' + ui.carousel.nameScroll + ',' + '.' + ui.carousel.target + ' .' + ui.carousel.nameScrollV + ',' + '.' + ui.carousel.target + ' .' + ui.carousel.nameScrollH, function (e) {
      e.preventDefault();
      e.stopPropagation();
      isScrolling = true;
      clearTimeout(isScrollingTimer);
      isScrollingTimer = setTimeout(function () {
        isScrolling = false;
      }, ui.globals.ease);
    }); // touchmove event listeners

    ui.on(document, 'touchstart', '.' + ui.carousel.target, function (e) {
      var i, startx, starty, currentx, currenty, startMove, touchMove, move, that, slider, sliderMax, col, navDotsEl, halfSized, touchEndTimer, contents;

      if (isScrolling) {
        return;
      }

      touchMove = false;
      touchStarted = true;
      startx = e.targetTouches[0].pageX;
      starty = e.targetTouches[0].pageY;
      that = this;
      slider = ui.find('.' + ui.carousel.targetSlider, that)[0];
      contents = ui.find('.' + ui.carousel.nameContent, that);
      navDotsEl = ui.find('.' + ui.carousel.targetNav + ' .' + ui.carousel.nameDots + ' i', that);
      halfSized = ui.hasClass(that, ui.carousel.nameHalfSize);
      i = Number(that.getAttribute(ui.carousel.dataID));

      if (i === null) {
        return;
      }

      col = getCols(i); // get responsive cols

      startMove = window.getComputedStyle(slider).getPropertyValue('transform'); // matrix(xZoom, 0, 0, yZoom, xPos, yPos)

      startMove = startMove.replace('matrix', '').replace(/[\,\(\)\s]/g, ' ').replace(/\s\s/g, '|'); // select only numbers

      startMove = startMove.split('|')[4];
      ui.off(document, 'touchmove');
      ui.on(document, 'touchmove', function (e) {
        if (ui.hasClass(document, ui.photoGallery.namePreviewOpened)) {
          return;
        } // stop if photo gallery is opened


        if (isScrolling) {
          return;
        }

        if (e.cancelable && e.defaultPrevented) {
          // touchstart or touchmove with preventDefault we need this. Because, now Chrome and Android browsers preventDefault automatically.
          e.preventDefault();
        }

        currentx = e.targetTouches[0].pageX;
        currenty = e.targetTouches[0].pageY;

        if (Math.abs(startx - currentx) > ui.carousel.touchMoveToleranceX && Math.abs(starty - currenty) < ui.carousel.touchMoveToleranceY) {
          touchMove = true;
          that.style.transitionDuration = '0s';
          slider.style.transitionDuration = '0s';
          clearTimeout(touchEndTimer);
          sliderMax = -((contents.length - col) * contents[0].offsetWidth);

          if (halfSized) {
            sliderMax -= contents[0].offsetWidth * ui.carousel.halfSize;
          }

          move = startMove - (startx - currentx);

          if (move > 0) {
            move = 0;
          } else if (move < sliderMax) {
            move = sliderMax;
          }

          slider.style.transform = 'translateX(' + move + 'px)'; // wait auto slider when touchmove

          if (autoTimer[i] !== null) {
            clearInterval(autoSlider[i]);
          }

          ui.addClass(document, ui.carousel.nameTouchMove);
        }
      });
      ui.off(document, 'touchend.' + ui.carousel.eventTouchEnd + ' touchcancel.' + ui.carousel.eventTouchCancel);
      ui.on(document, 'touchend.' + ui.carousel.eventTouchEnd + ' touchcancel.' + ui.carousel.eventTouchCancel, function () {
        if (touchMove) {
          that.style.transitionDuration = '';
          slider.style.transitionDuration = '';
          setTimeout(function () {
            var beforeCount, navDots;
            navDots = ui.find('.' + ui.carousel.targetNav + ' .' + ui.carousel.nameDots, that[i])[0];
            beforeCount = counts[i];
            counts[i] = Math.abs(move) / contents[0].offsetWidth;

            if (currentx > startx) {
              // slide to right
              if (counts[i].toFixed(2).split('.')[1] > ui.carousel.touchMoveToleranceX) {
                counts[i] = Math.floor(counts[i]);
              } else {
                if (beforeCount <= 0) {
                  counts[i] = 0;
                } else {
                  counts[i] = beforeCount - 1;
                }
              }
            } else {
              // slide to left
              if (counts[i].toFixed(2).split('.')[1] > ui.carousel.touchMoveToleranceX) {
                counts[i] = Math.ceil(counts[i]);
              } else {
                if (beforeCount >= contents.length - 1) {
                  beforeCount = contents.length - 1;
                } else {
                  counts[i] = beforeCount + 1;
                }
              }
            }

            move = -Math.ceil(counts[i] * contents[0].offsetWidth);

            if (halfSized && counts[i] === contents.length - col) {
              move -= contents[0].offsetWidth * ui.carousel.halfSize;
            }

            slider.style.transform = 'translateX(' + move + 'px)';
            that.setAttribute(ui.carousel.dataContent, counts[i] + 1);
            ui.removeClass(navDotsEl, ui.carousel.nameNavSelected);
            ui.addClass(navDotsEl[counts[i]], ui.carousel.nameNavSelected);
            filterDots(navDots, navDotsEl, counts[i], i); // filter dots when dots number exceeds

            clearTimeout(touchEndTimer);
            touchEndTimer = setTimeout(function () {
              getSlideSpeed(slider, contentsEase[i], i); // get carousel slide speed
              // wait auto slider until touchmove ends

              if (autoTimer[i] !== null) {
                clearInterval(autoSlider[i]);
                autoSlider[i] = setInterval(function () {
                  carouselNav(that, 'next');
                }, autoTimer[i]);
              } // detect carousel animates


              ui.each(contents, function () {
                carouselAnimate(this, contentsEase[i], 'touch');
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
    }); // carousel gallery thumbs

    ui.on(document, 'click', '.' + ui.carousel.targetGallery + ' .' + ui.carousel.nameGalleryThumbs + ' .' + ui.carousel.namePhoto, function () {
      var parent, detail, target, thumbs, index, newImg;
      parent = ui.closest(this, '.' + ui.carousel.targetGallery);
      detail = ui.find('.' + ui.carousel.nameGalleryDetail, parent[0]);
      target = ui.find('img', detail);
      thumbs = ui.find('.' + ui.carousel.nameGalleryThumbs + ' .' + ui.carousel.namePhoto, parent[0]);
      index = Array.prototype.slice.call(thumbs).indexOf(this);
      target.setAttribute(ui.carousel.dataCount, index);
      ui.addClass(detail, ui.carousel.nameGalleryDetailLoader);
      newImg = new Image();
      newImg.src = this.getAttribute(ui.carousel.dataHref);

      newImg.onload = function () {
        target.src = newImg.src;
        ui.removeClass(detail, ui.carousel.nameGalleryDetailLoader);
      };

      ui.removeClass(thumbs, ui.carousel.nameGallerySelected);
      ui.addClass(this, ui.carousel.nameGallerySelected);
    });
  }; // Loaders


  ui.onload(ui.carousel.Start);
  ui.on(window, 'resize', carouselResizer);
  ui.on(document, ui.globals.eventDomChange, function () {
    carouselResizer('resize');
  }); // ajax callback loader

  ui.on(document, ui.globals.eventAjaxCallback, function () {
    if (ui.ajax.classNames.indexOf(ui.carousel.target) > -1) {
      carouselLoader();
    }
  });
})();
"use strict";

/*
 UI Countdown JS
 Requires UI Core JS
*/
ui.countdown = {
  // targets
  target: 'ui-countdown',
  // main classnames
  nameDay: 'ui-countdown-day',
  nameHour: 'ui-countdown-hour',
  nameMinute: 'ui-countdown-min',
  nameSecond: 'ui-countdown-sec'
};

(function () {
  'use strict';
  /*globals document, ui, setInterval, clearInterval */

  var countdownTimer;

  ui.countdown.Start = function () {
    var countdown, arr, calc;
    countdown = ui.find('.' + ui.countdown.target);

    if (ui.countdown.length === 0) {
      return;
    }

    arr = [];
    ui.each(countdown, function (i) {
      var date, day, hour, minute, sec;
      date = new Date();
      day = ui.find('.' + ui.countdown.nameDay, this)[0];
      hour = ui.find('.' + ui.countdown.nameHour, this)[0];
      minute = ui.find('.' + ui.countdown.nameMinute, this)[0];
      sec = ui.find('.' + ui.countdown.nameSecond, this)[0];

      if (day !== undefined) {
        date.setDate(date.getDate() + Number(day.textContent));
      }

      if (hour !== undefined) {
        date.setHours(date.getHours() + Number(hour.textContent));
      }

      if (minute !== undefined) {
        date.setMinutes(date.getMinutes() + Number(minute.textContent));
      }

      if (sec !== undefined) {
        date.setSeconds(date.getSeconds() + Number(sec.textContent));
      }

      arr[i] = date.getTime();
    });

    calc = function calc(ms) {
      var days, daysMs, hours, hoursMs, minutes, minutesMs, sec;
      days = Math.floor(ms / (24 * 60 * 60 * 1000));
      daysMs = ms % (24 * 60 * 60 * 1000);
      hours = Math.floor(daysMs / (60 * 60 * 1000));
      hoursMs = ms % (60 * 60 * 1000);
      minutes = Math.floor(hoursMs / (60 * 1000));
      minutesMs = ms % (60 * 1000);
      sec = Math.floor(minutesMs / 1000) + 1;

      if (days < 0) {
        days = 0;
      }

      if (hours < 0) {
        hours = 0;
      }

      if (minutes < 0) {
        minutes = 0;
      }

      if (sec < 0) {
        sec = 0;
      }

      return days + ':' + hours + ':' + minutes + ':' + sec;
    };

    function drawFnc() {
      ui.each(countdown, function (i) {
        var dateLeft, day, hour, minute, sec;
        dateLeft = calc(arr[i] - new Date());
        day = ui.find('.' + ui.countdown.nameDay, this)[0];
        hour = ui.find('.' + ui.countdown.nameHour, this)[0];
        minute = ui.find('.' + ui.countdown.nameMinute, this)[0];
        sec = ui.find('.' + ui.countdown.nameSecond, this)[0];
        dateLeft = dateLeft.split(':');

        if (day !== undefined) {
          if (dateLeft[0] === '0') {
            day.textContent = '00';
          } else {
            if (dateLeft[0].length === 1) {
              day.textContent = '0' + dateLeft[0];
            } else {
              day.textContent = dateLeft[0];
            }
          }
        }

        if (hour !== undefined) {
          if (dateLeft[1] === '0') {
            hour.textContent = '00';
          } else {
            if (dateLeft[1].length === 1) {
              hour.textContent = '0' + dateLeft[1];
            } else {
              hour.textContent = dateLeft[1];
            }
          }
        }

        if (minute !== undefined) {
          if (dateLeft[2] === '0') {
            minute.textContent = '00';
          } else {
            if (dateLeft[2].length === 1) {
              minute.textContent = '0' + dateLeft[2];
            } else {
              minute.textContent = dateLeft[2];
            }
          }
        }

        if (sec !== undefined) {
          if (dateLeft[3] === '0') {
            sec.textContent = '00';
          } else {
            if (dateLeft[3].length === 1) {
              sec.textContent = '0' + dateLeft[3];
            } else {
              sec.textContent = dateLeft[3];
            }
          }
        }
      });
    }

    clearInterval(countdownTimer);
    countdownTimer = setInterval(drawFnc, 1000);
  }; // Loaders


  ui.onload(ui.countdown.Start); // ajax callback loader

  ui.on(document, ui.globals.eventAjaxCallback, function () {
    if (ui.ajax.classNames.indexOf(ui.countdown.target) > -1) {
      ui.countdown.Start();
    }
  });
})();
"use strict";

/*
 UI Currency Spinner JS
 Requires UI Core JS
*/
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

(function () {
  'use strict';
  /*globals document, ui */

  var cacheCurrencySpinner;

  ui.currencySpinner.Start = function () {
    function convert(s) {
      var regDecimal, regClear, number, decimal;
      regDecimal = new RegExp(/(\,+\d+)/g);
      regClear = new RegExp(/(\s)|(\.)|(\,)/g);

      if (ui.currencySpinner.decimals) {
        number = s.replace(regDecimal, '');
        decimal = s.match(regDecimal);

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
    }

    function locales(l) {
      return l.toLocaleString();
    }

    function currencyChange(that) {
      var p, input, val, min, step, nav;
      nav = [];
      p = ui.closest(that, '.' + ui.currencySpinner.target);
      input = ui.find('[type="text"]', p);
      val = convert(input.value);
      nav.up = ui.hasClass(that, ui.currencySpinner.nameUp);
      nav.down = ui.hasClass(that, ui.currencySpinner.nameDown);

      if (nav.up || nav.down) {
        step = convert(input.getAttribute('step'));
        min = convert(input.getAttribute('min'));

        if (nav.up) {
          if (ui.currencySpinner.decimals) {
            val[0] += step[0];
            val[1] += step[1];
          } else {
            val += step;
          }
        } else {
          if (ui.currencySpinner.decimals) {
            val[0] -= step[0];
            val[1] -= step[1];

            if (val[0] <= min[0]) {
              val[0] = min[0];
            }

            if (val[1] <= min[1]) {
              val[1] = min[1];
            }
          } else {
            val -= step;

            if (val <= min) {
              val = min;
            }
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
    } // Event Listeners


    ui.on(document, 'click', '.' + ui.currencySpinner.nameUp + ',.' + ui.currencySpinner.nameDown, function (e) {
      e.preventDefault();
      currencyChange(this);
    });
    ui.on(document, 'keypress', '.' + ui.currencySpinner.target + ' input[type="text"]', function (e) {
      var c,
          isRefresh = false;

      if (e.which) {
        c = e.which;
      } else {
        c = e.keyCode;

        if (c === 116) {
          isRefresh = true;
        }
      }

      if (ui.currencySpinner.decimals) {
        if (c !== 8 && c !== 9 && c !== 35 && c !== 36 && c !== 37 && c !== 39 && c !== 44 && !isRefresh && (c < 48 || c > 57)) {
          e.preventDefault();
        }
      } else {
        if (c !== 8 && c !== 9 && c !== 35 && c !== 36 && c !== 37 && c !== 39 && !isRefresh && (c < 48 || c > 57)) {
          e.preventDefault();
        }
      }
    });
    ui.on(document, 'focus', '.' + ui.currencySpinner.target + ' input[type="text"]', function () {
      cacheCurrencySpinner = this.value;
    });
    ui.on(document, 'keyup blur', '.' + ui.currencySpinner.target + ' input[type="text"]', function (e) {
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
        var input, min;
        input = ui.find('.' + ui.currencySpinner.target + ' .' + ui.currencySpinner.nameInput + ' input')[0];
        min = convert(input.getAttribute('min'));

        if (convert(input.value) < min) {
          input.value = locales(min);
        }
      }
    });
    ui.on(document, 'keydown', ui.closest('.' + ui.currencySpinner.target, 'form'), function (e) {
      if (e.keyCode === 13) {
        e.preventDefault();
        ui.trigger('.' + ui.currencySpinner.target + ' .' + ui.currencySpinner.nameInput + ' input', 'blur');
      } else {
        return;
      }
    });
  }; // Loaders


  ui.onload(ui.currencySpinner.Start);
})();
"use strict";

/*
 UI Datatable JS
 Requires UI Core JS
*/
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
  sortIcon: 'sort-fill',
  ascIcon: 'sort-up-fill',
  descIcon: 'sort-down-fill',
  prevIcon: 'angle-left',
  nextIcon: 'angle-right',
  // values
  valueSplit: '|',
  customLetters: {
    "İ": "i",
    "I": "ı",
    "Ş": "ş",
    "Ğ": "ğ",
    "Ü": "ü",
    "Ö": "ö",
    "Ç": "ç"
  },
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

(function () {
  'use strict';
  /*globals window, document, ui, sessionStorage, performance */

  var testStorage = true,
      startListID = 0,
      loadedVals = [],
      showCount = [],
      pagingCount = [],
      customLowerCase,
      temp = document.createDocumentFragment(); // test for storage is supported?

  try {
    sessionStorage.setItem(ui.datatable.storageTest, 0);
  } catch (e) {
    testStorage = false;
  } // custom lowercase


  (function () {
    var k, re, chars, keys;
    keys = Object.keys(ui.datatable.customLetters); // returns array

    chars = '(([';

    for (k = 0; k < keys.length; k++) {
      chars += keys[k];
    }

    chars += ']))';
    re = new RegExp(chars, 'g');

    customLowerCase = function customLowerCase(string) {
      string = string.replace(/["'\[\]\{\}()]/g, '').replace(re, function (l) {
        return ui.datatable.customLetters[l];
      });
      return string.toLowerCase();
    };
  })(); // create paging


  function createPaging(paging, id, listLength) {
    var defaultClass, activeClass, classes, re, rex, html, total, i, min, max;
    re = new RegExp('\\s+\\s');
    rex = new RegExp('\\s+$');
    defaultClass = paging[0].getAttribute(ui.datatable.dataDefault);

    if (defaultClass === null) {
      defaultClass = '';
    }

    activeClass = paging[0].getAttribute(ui.datatable.dataActive);

    if (activeClass === null) {
      activeClass = '';
    }

    if (showCount[id] === undefined || showCount[id] === 0) {
      total = 1;
    } else {
      total = Math.ceil(listLength / showCount[id]);

      if (total < 1) {
        total = 1;
      }
    }

    if (pagingCount[id] < 1) {
      pagingCount[id] = 1;
    }

    if (pagingCount[id] > total) {
      pagingCount[id] = total;
    }

    if (pagingCount[id] === total) {
      min = pagingCount[id] - 2;
    } else {
      min = pagingCount[id] - 1;
    }

    if (min < 1) {
      min = 1;
    }

    if (pagingCount[id] === 1) {
      max = pagingCount[id] + 2;
    } else {
      max = pagingCount[id] + 1;
    }

    if (max > total) {
      max = total;
    }

    classes = ui.datatable.namePrev + ' ' + defaultClass;

    if (pagingCount[id] === 1) {
      classes += ' ' + ui.datatable.nameBtnPassive;
    }

    classes = classes.replace(re, ' ').replace(rex, '');
    html = '<button class="' + classes + '">' + '<svg class="' + ui.datatable.nameIcon + '"><use href="#' + ui.datatable.prevIcon + '"/></svg>' + '</button>\n';

    for (i = min; i <= max; i++) {
      if (i === pagingCount[id]) {
        classes = ui.datatable.nameBtnActive + ' ' + defaultClass + ' ' + activeClass;
        classes = classes.replace(re, ' ').replace(rex, '');
        html += '<button class="' + classes + '">' + pagingCount[id] + '</button>\n';
      } else {
        html += '<button class="' + defaultClass + '">' + i + '</button>\n';
      }
    }

    classes = ui.datatable.nameNext + ' ' + defaultClass;

    if (pagingCount[id] === total) {
      classes += ' ' + ui.datatable.nameBtnPassive;
    }

    classes = classes.replace(re, ' ').replace(rex, '');
    html += '<button class="' + classes + '">' + '<svg class="' + ui.datatable.nameIcon + '"><use href="#' + ui.datatable.nextIcon + '"/></svg>' + '</button>\n';
    paging[0].innerHTML = '';
    paging[0].insertAdjacentHTML('beforeend', html); // set paging to storage

    if (testStorage && sessionStorage !== undefined) {
      sessionStorage.setItem(ui.datatable.storagePaging + id, pagingCount[id]);
    } // empty variables


    classes = '';
    html = '';
  } // loader


  function loadGrid(that, id) {
    var i, list, paging, gridTotal, isEven, gridStriped;

    if (ui.hasClass(that, ui.datatable.nameListFiltered)) {
      list = ui.find('.' + ui.datatable.nameListContent + '.' + ui.datatable.nameFiltered, that);
    } else {
      list = ui.find('.' + ui.datatable.nameListContent, that);
    } // paging


    paging = ui.find('.' + ui.datatable.namePaging, that);

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
    } // total grids


    gridTotal = ui.find('.' + ui.datatable.nameTotal, that);

    if (gridTotal.length > 0) {
      gridTotal[0].textContent = list.length;
    } // define even elements and visible grids


    isEven = false;
    gridStriped = ui.hasClass(that, ui.datatable.nameListStriped);
    ui.removeClass(ui.find('.' + ui.datatable.nameListContent + '.' + ui.datatable.nameShow, that), ui.datatable.nameShow);

    function evenList(t) {
      if (gridStriped) {
        if (isEven) {
          ui.addClass(t, ui.datatable.nameEven);
          isEven = false;
        } else {
          ui.removeClass(t, ui.datatable.nameEven);
          isEven = true;
        }
      }

      ui.addClass(t, ui.datatable.nameShow);
    }

    if (showCount[id] > 0 && pagingCount[id] > 0) {
      for (i = (pagingCount[id] - 1) * showCount[id]; i < pagingCount[id] * showCount[id]; i++) {
        evenList(list[i]);
      }
    } else {
      for (i = 0; i < list.length; i++) {
        evenList(list[i]);
      }
    } // empty variables


    list = '';
  } // Event Listeners
  // paging


  ui.on(document, 'click', '.' + ui.datatable.target + ' .' + ui.datatable.namePaging + ' button', function () {
    var that, id;
    that = ui.closest(this, '.' + ui.datatable.target)[0];
    id = that.getAttribute(ui.datatable.dataID);

    if (ui.hasClass(this, ui.datatable.nameNext)) {
      pagingCount[id] += 1;
    } else if (ui.hasClass(this, ui.datatable.namePrev)) {
      pagingCount[id] -= 1;
    } else {
      pagingCount[id] = Number(this.textContent);
    }

    loadGrid(that, id);
  }); // show

  ui.on(document, 'change', '.' + ui.datatable.target + ' select.' + ui.datatable.nameListShow, function () {
    var that, id;
    that = ui.closest(this, '.' + ui.datatable.target)[0];
    id = that.getAttribute(ui.datatable.dataID);

    if (isNaN(Number(this.value))) {
      showCount[id] = 0;
      pagingCount[id] = 1;
      ui.addClass(that, ui.datatable.nameListShowAll);
    } else {
      showCount[id] = this.value;
      ui.removeClass(that, ui.datatable.nameListShowAll);
    } // set show count to storage


    if (testStorage && sessionStorage !== undefined) {
      sessionStorage.setItem(ui.datatable.storageShow + id, showCount[id]);
    }

    loadGrid(that, id);
  }); // sort

  ui.on(document, 'mousedown', '.' + ui.datatable.target + ' [' + ui.datatable.dataSort + ']', function () {
    var that, id, buttons, isAsc, gridContainer, list, sortIndex, sortType, arr, arrSorted;
    that = ui.closest(this, '.' + ui.datatable.target)[0];
    id = that.getAttribute(ui.datatable.dataID); // modify buttons

    buttons = ui.find('[' + ui.datatable.dataSort + ']', that);
    ui.removeClass(buttons, ui.datatable.nameActive);
    ui.addClass(this, ui.datatable.nameActive);
    ui.each(buttons, function () {
      if (!ui.hasClass(this, ui.datatable.nameActive)) {
        ui.removeClass(this, ui.datatable.nameAsc + ' ' + ui.datatable.nameDesc);
        ui.find('.' + ui.datatable.nameIcon + ' use', this)[0].setAttribute('href', '#' + ui.datatable.sortIcon);
      }
    });
    isAsc = ui.hasClass(this, ui.datatable.nameAsc);

    if (isAsc) {
      ui.removeClass(this, ui.datatable.nameAsc);
      ui.addClass(this, ui.datatable.nameDesc);
      ui.find('.' + ui.datatable.nameIcon + ' use', this)[0].setAttribute('href', '#' + ui.datatable.descIcon);
    } else {
      ui.removeClass(this, ui.datatable.nameDesc);
      ui.addClass(this, ui.datatable.nameAsc);
      ui.find('.' + ui.datatable.nameIcon + ' use', this)[0].setAttribute('href', '#' + ui.datatable.ascIcon);
    } // sort


    gridContainer = ui.find('.' + ui.datatable.nameContainer, that)[0];
    list = ui.find('.' + ui.datatable.nameListContent, gridContainer);
    ui.each(list, function () {
      temp.appendChild(this);
    });
    arr = [];
    arrSorted = [];
    sortIndex = this.getAttribute(ui.datatable.dataSort);

    if (sortIndex === null || sortIndex === '' || sortIndex === '0') {
      sortIndex = 0;
    } else {
      sortIndex = Number(sortIndex) - 1;
    }

    sortType = this.getAttribute(ui.datatable.dataType);

    if (sortType === null) {
      sortType = '';
    }

    list = ui.find('.' + ui.datatable.nameListContent, temp);
    ui.each(list, function () {
      var val = this.getAttribute(ui.datatable.dataVal);

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
        arrSorted.sort(function (a, b) {
          return b - a;
        });
      } else {
        arrSorted.sort().reverse();
      }
    } else {
      if (sortType === ui.datatable.sortTypeNumber) {
        arrSorted.sort(function (a, b) {
          return a - b;
        });
      } else {
        arrSorted.sort();
      }
    }

    ui.each(list, function (i) {
      temp.appendChild(list[arr.indexOf(arrSorted[i])]);
      arr[arr.indexOf(arrSorted[i])] = '';
    }); // load sorted grids

    gridContainer.appendChild(temp);
    pagingCount[id] = 1;
    loadGrid(that, id); // empty variables

    arr = [];
    arrSorted = [];
    buttons = '';
    list = '';
  }); // filter

  function gridFilter(that, firstLoading) {
    var id, filters, val, vals, index, sortType, sortIndex, indexes, list, gridContainer, j, contentVal, contentArr, activeFilters, passed, checkAll;
    id = that.getAttribute(ui.datatable.dataID);
    vals = [];
    indexes = []; // read all filter values

    filters = ui.find('.' + ui.datatable.nameFilter, that);
    ui.each(filters, function (i) {
      if (firstLoading) {
        vals = loadedVals[id].split(',');

        if (this.type === 'checkbox' || this.type === 'radio') {
          if (vals[i] !== '') {
            this.checked = true;
          }
        } else if (this.tagName === 'SELECT') {
          for (j = 0; j < this.options.length; j++) {
            if (customLowerCase(this.options[j].innerText) === vals[i]) {
              index = Array.prototype.slice.call(this.options).indexOf(this.options[j]);
              this.selectedIndex = index;
            }
          }
        } else {
          this.value = vals[i];
        }
      } else {
        val = '';

        if (this.type === 'checkbox' || this.type === 'radio') {
          if (this.checked) {
            val = this.value;
          }
        } else {
          val = this.value;
        }

        val = val.replace(/^\s+|\s+$/g, ''); // remove first and last spaces

        sortType = this.getAttribute(ui.datatable.dataType);

        if (sortType === null) {
          sortType = '';
        }

        if (sortType === ui.datatable.sortTypeNumber) {
          vals.push(val);
        } else {
          vals.push(customLowerCase(val));
        }
      }

      sortIndex = this.getAttribute(ui.datatable.dataIndex);

      if (sortIndex !== null) {
        if (sortIndex === '' || sortIndex === '0') {
          sortIndex = 0;
        } else {
          sortIndex = Number(sortIndex) - 1;
        }

        indexes.push(sortIndex);
      } else {
        indexes.push('');
      }
    }); // filter

    if (vals.length > 0) {
      activeFilters = vals.filter(function (filterVal) {
        return filterVal !== '';
      });
      gridContainer = ui.find('.' + ui.datatable.nameContainer, that)[0];
      list = ui.find('.' + ui.datatable.nameListContent, gridContainer);
      ui.each(list, function () {
        temp.appendChild(this);
      });
      list = ui.find('.' + ui.datatable.nameListContent, temp); // remove checked

      checkAll = ui.find('.' + ui.datatable.nameCheckAll, that);

      if (checkAll.length > 0) {
        ui.each(checkAll, function () {
          this.checked = false;
        });
      }

      ui.each(list, function () {
        if (ui.hasClass(this, ui.datatable.nameChecked)) {
          ui.removeClass(this, ui.datatable.nameChecked);
          ui.find('.' + ui.datatable.nameCheck, this)[0].checked = false;
        }
      });

      if (activeFilters.length > 0) {
        ui.addClass(that, ui.datatable.nameListFiltered);
        ui.each(list, function () {
          passed = [];
          contentVal = this.getAttribute(ui.datatable.dataVal);

          if (contentVal !== null && contentVal !== '') {
            contentVal = customLowerCase(contentVal);
            contentArr = contentVal.split(ui.datatable.valueSplit);

            for (j = 0; j < vals.length; j++) {
              if (vals[j] !== '') {
                if (indexes[j] === '') {
                  if (contentVal.replace(/\|/g, ' ').match(vals[j]) !== null) {
                    // contain
                    passed.push('pass');
                  }
                } else {
                  if (contentArr[indexes[j]] === vals[j]) {
                    // equal
                    passed.push('pass');
                  }
                }
              }
            }
          }

          if (activeFilters.length === passed.length) {
            ui.addClass(this, ui.datatable.nameFiltered);
          } else {
            ui.removeClass(this, ui.datatable.nameFiltered);
          }
        });
      } else {
        ui.removeClass(that, ui.datatable.nameListFiltered);
        ui.removeClass(list, ui.datatable.nameFiltered);
      } // set filters to storage


      if (testStorage && sessionStorage !== undefined) {
        sessionStorage.setItem(ui.datatable.storageVals + id, vals.toString());
      } // load filtered grids


      gridContainer.appendChild(temp);
    } // load filtered grids


    loadGrid(that, id); // empty variables

    vals = [];
    indexes = [];
    contentArr = [];
    filters = '';
    list = '';
    contentVal = '';
  }

  ui.on(document, 'keyup', '.' + ui.datatable.target + ' .' + ui.datatable.nameFilter + '[type="text"]', function () {
    var that = ui.closest(this, '.' + ui.datatable.target)[0];
    gridFilter(that, false);
  });
  ui.on(document, 'change', '.' + ui.datatable.target + ' .' + ui.datatable.nameFilter + ':not([type="text"])', function () {
    var that = ui.closest(this, '.' + ui.datatable.target)[0];
    gridFilter(that, false);
  }); // check

  ui.on(document, 'change', '.' + ui.datatable.target + ' .' + ui.datatable.nameCheckAll, function () {
    var that, list, form, checked, checkFnc, uncheckFnc;
    that = ui.closest(this, '.' + ui.datatable.target)[0];
    list = ui.find('.' + ui.datatable.nameListContent, that);
    checked = this.checked;

    checkFnc = function checkFnc(t) {
      if (!ui.hasClass(t, ui.datatable.nameChecked)) {
        form = ui.find('.' + ui.datatable.nameCheck, t)[0];

        if (form !== undefined) {
          ui.addClass(t, ui.datatable.nameChecked);
          form.checked = true;
        }
      }
    };

    uncheckFnc = function uncheckFnc(t) {
      if (ui.hasClass(t, ui.datatable.nameChecked)) {
        form = ui.find('.' + ui.datatable.nameCheck, t)[0];

        if (form !== undefined) {
          ui.removeClass(t, ui.datatable.nameChecked);
          form.checked = false;
        }
      }
    };

    ui.each(list, function () {
      if (checked) {
        if (ui.hasClass(that, ui.datatable.nameListFiltered)) {
          if (ui.hasClass(this, ui.datatable.nameFiltered)) {
            checkFnc(this);
          } else {
            uncheckFnc(this);
          }
        } else {
          checkFnc(this);
        }
      } else {
        uncheckFnc(this);
      }
    });
  });
  ui.on(document, 'change', '.' + ui.datatable.target + ' .' + ui.datatable.nameCheck, function () {
    var that, list, checkAll;
    that = ui.closest(that, '.' + ui.datatable.target)[0];
    list = ui.closest(this, '.' + ui.datatable.nameListContent)[0];

    if (this.checked) {
      ui.addClass(list, ui.datatable.nameChecked);
    } else {
      ui.removeClass(list, ui.datatable.nameChecked);
      checkAll = ui.find('.' + ui.datatable.nameCheckAll, that)[0];

      if (ui.find('.' + ui.datatable.nameCheckAll, that)[0] !== undefined) {
        checkAll.checked = false;
      }
    }
  }); // first loading

  ui.datatable.Start = function () {
    ui.each('.' + ui.datatable.target + ':not(.' + ui.datatable.targetLoaded + ')', function () {
      var id, gridShow, index, i; // define id

      startListID += 1;
      id = ui.datatable.listIdNaming + startListID;
      this.setAttribute(ui.datatable.dataID, id); // check stored variables

      if (testStorage && sessionStorage !== undefined) {
        loadedVals[id] = sessionStorage.getItem(ui.datatable.storageVals + id);
        showCount[id] = Number(sessionStorage.getItem(ui.datatable.storageShow + id));
        pagingCount[id] = Number(sessionStorage.getItem(ui.datatable.storagePaging + id));
      } // calculate show


      gridShow = ui.find('select.' + ui.datatable.nameListShow, this)[0];

      if (showCount[id] === 0) {
        if (gridShow !== undefined) {
          if (showCount[id] === undefined || showCount[id] === 0) {
            if (isNaN(Number(gridShow.value))) {
              showCount[id] = 0;
              pagingCount[id] = 1;
              ui.addClass(this, ui.datatable.nameListShowAll);
            } else {
              showCount[id] = gridShow.value;
            }
          }
        }
      } else {
        for (i = 0; i < gridShow.options.length; i++) {
          if (Number(customLowerCase(gridShow.options[i].innerText)) === showCount[id]) {
            index = Array.prototype.slice.call(gridShow.options).indexOf(gridShow.options[i]);
            gridShow.selectedIndex = index;
          }
        }
      } // load values


      if (loadedVals[id] !== undefined && loadedVals[id] !== null) {
        if (loadedVals[id].length > 0) {
          gridFilter(this, true);
        }
      } // load grids


      ui.addClass(this, ui.datatable.targetLoaded);
      loadGrid(this, id);
    });
  }; // clear stored variables when page refreshing


  ui.on(window, 'beforeunload', function () {
    if (testStorage && sessionStorage !== undefined) {
      if (window.performance) {
        if (performance.navigation.type !== 1) {
          // The Navigation Timing API: if === 1 means page refreshed
          var gridLists, id;
          gridLists = ui.find('.' + ui.datatable.target);
          ui.each(gridLists, function () {
            id = this.getAttribute(ui.datatable.dataID);
            sessionStorage.setItem(ui.datatable.storageVals + id, '');
            sessionStorage.setItem(ui.datatable.storageShow + id, 0);
            sessionStorage.setItem(ui.datatable.storagePaging + id, 0);
          });
        }
      }
    }
  }); // Loaders

  ui.onload(ui.datatable.Start); // ajax callback loader

  ui.on(document, ui.globals.eventAjaxCallback, function () {
    if (ui.ajax.classNames.indexOf(ui.datatable.target) > -1) {
      ui.datatable.Start();
    }
  });
})();
"use strict";

/*
 UI Donut Chart JS
 Requires UI Core JS
*/
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

(function () {
  'use strict';
  /*globals document, ui, setTimeout */

  var loadCharts;

  ui.donutChart.Start = function () {
    loadCharts = function loadCharts() {
      var chart, circles, percent, dasharray, angle, arrPercent, arrAngle;
      arrPercent = [];
      arrAngle = [];
      chart = ui.find('.' + ui.donutChart.target);

      if (chart.length > 0) {
        ui.each(chart, function (i) {
          circles = ui.find('circle:not(.' + ui.donutChart.targetBg + ')', this);

          if (circles.length > 1) {
            ui.addClass(this, 'multiple');
          }

          ui.each(circles, function (index) {
            var that = this;
            percent = that.getAttribute(ui.donutChart.dataPercent);
            arrPercent.push(percent);
            dasharray = Math.round(percent * 4.4);

            if (dasharray < 0) {
              dasharray = 0;
            }

            that.setAttribute('stroke-dasharray', dasharray + ', 440');

            if (index > 0) {
              angle = Math.floor(arrAngle[index - 1] + arrPercent[index - 1] * 3.6);
              arrAngle.push(angle);
              that.setAttribute('transform', 'rotate(' + angle + ' 80 80)'); // rotate(angle, cx, cy); All IE browsers not supported CSS only transforms
            } else {
              arrAngle.push(0);
            }

            if (ui.userAgents.ie) {
              chart[i].style.height = chart[i].offsetWidth + 'px'; // transformed circle has highest height on IE
            }

            ui.addClass(that, ui.donutChart.nameLoaded);
          });
          arrPercent = [];
          arrAngle = [];
        });
      }
    };

    loadCharts(); // Event Listeners

    ui.on(document, 'mouseenter mouseleave touchend', '.' + ui.donutChart.target + ' circle[' + ui.donutChart.dataTitle + ']', function (e) {
      var that, circle, chart, msg, msgTitle, title;
      that = this;
      chart = ui.closest(that, '.' + ui.donutChart.target)[0];
      msg = ui.find(ui.donutChart.tagMsg, chart)[0];
      circle = ui.find('circle', chart);
      setTimeout(function () {
        ui.removeClass(circle, ui.donutChart.nameSelected);
      }, 0);

      if (e.type === 'mouseleave') {
        msg.innerHTML = msg.getAttribute(ui.donutChart.dataMsg);
      } else {
        // show titles
        if (msg === undefined) {
          chart.insertAdjacentHTML('beforeEnd', '<' + ui.donutChart.tagMsg + '></' + ui.donutChart.tagMsg + '>');
          msg = ui.find(ui.donutChart.tagMsg, chart)[0];
        }

        msgTitle = msg.getAttribute(ui.donutChart.dataMsg);

        if (msgTitle === null) {
          msg.setAttribute(ui.donutChart.dataMsg, msg.innerHTML);
        }

        title = that.getAttribute(ui.donutChart.dataTitle);
        setTimeout(function () {
          if (title !== null && title !== '') {
            msg.innerHTML = title;
          }

          ui.addClass(that, ui.donutChart.nameSelected);
        }, 0);
      }
    });
  }; // Loaders


  ui.onload(ui.donutChart.Start);
  ui.on(document, ui.globals.eventDomChange, ui.donutChart.Start); // ajax callback loader

  ui.on(document, ui.globals.eventAjaxCallback, function () {
    if (ui.ajax.classNames.indexOf(ui.donutChart.target) > -1) {
      loadCharts();
    }
  });
})();
"use strict";

/*
 UI Dropdown JS
 Requires UI Core JS
*/
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

(function () {
  'use strict';
  /*globals window, document, ui, setTimeout, clearTimeout */

  var dropdownHoverTimer, dropdownOpenTimer, dropdownLeaveTimer, dropdownCloseTimer, listStyles, selectOpened, selectInContent, getScrollPos;

  function dropdownClose(innerParent) {
    if (selectOpened) {
      return;
    }

    var that, list;

    if (innerParent === undefined) {
      that = ui.find('.' + ui.dropdown.target + '.' + ui.dropdown.nameOpen);
    } else {
      that = ui.find('.' + ui.dropdown.target + '.' + ui.dropdown.nameOpen, innerParent);
    }

    ui.removeClass(that, ui.dropdown.nameOpenEase);
    clearTimeout(dropdownLeaveTimer);
    dropdownLeaveTimer = setTimeout(function () {
      ui.each(that, function () {
        clearTimeout(dropdownCloseTimer);
        list = ui.find('.' + ui.dropdown.nameMenu, this)[0];
        dropdownCloseTimer = setTimeout(function () {
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

  ui.dropdown.Start = function () {
    function dropdownOpen(e, that) {
      e.preventDefault();
      e.stopPropagation();
      var list, alignSize, parent, offset, setMaxH, hasInner, inner, innerParent;
      inner = false;
      hasInner = false;
      parent = that.parentNode;
      clearTimeout(dropdownOpenTimer);
      dropdownOpenTimer = setTimeout(function () {
        innerParent = ui.closest(parent, '.' + ui.dropdown.target)[0];

        if ((ui.hasClass(parent, ui.dropdown.nameMenuPosRight) || ui.hasClass(parent, ui.dropdown.nameMenuPosLeft)) && innerParent !== undefined) {
          // detecting inner dropdown positions
          inner = true;
          dropdownClose(innerParent);
        } else {
          dropdownClose();
        }

        if (ui.find('.' + ui.dropdown.nameMenuPosRight, parent).length > 0 || ui.find('.' + ui.dropdown.nameMenuPosLeft, parent).length > 0) {
          // detecting dropdown has inner dropdown positions
          hasInner = true;
        }

        clearTimeout(dropdownOpenTimer);
        ui.addClass(parent, ui.dropdown.nameOpen);
        dropdownOpenTimer = setTimeout(function () {
          ui.addClass(parent, ui.dropdown.nameOpenEase);
        }, dropdownHoverTimer / 6);
        offset = parent.getBoundingClientRect();
        list = ui.find('.' + ui.dropdown.nameMenu, parent)[0];

        if (hasInner) {
          list.style.overflow = 'visible';
        }

        if (ui.closest(that, '.' + ui.dropdown.nameSidebar)[0] === undefined && !ui.hasClass(parent, ui.dropdown.nameNavFullHor)) {
          // diable all positionings on sidebars and full horizontal navigations
          listStyles = list.style.length;

          if (window.innerWidth > ui.globals.sm) {
            // menu horizontal positioning: active
            if (ui.hasClass(parent, ui.dropdown.nameMenuLeft) || offset.left + list.offsetWidth + ui.dropdown.scrollbarSize > window.innerWidth) {
              if (offset.left - (list.offsetWidth - parent.offsetWidth) >= 0) {
                list.style.right = 0;
                list.style.left = 'inherit';
                list.style.transformOrigin = 'top right';
              }
            } else if (ui.hasClass(parent, ui.dropdown.nameMenuCenter)) {
              alignSize = Math.abs(list.offsetWidth - parent.offsetWidth) / 2;

              if (offset.left - alignSize > 0 && alignSize > 0) {
                list.style.marginLeft = -alignSize + 'px';
              }
            }
          } else {
            // menu horizontal positioning: passive
            list.style.marginLeft = -(offset.left - ui.dropdown.scrollbarSize / 2) + 'px';
            list.style.width = window.innerWidth - ui.dropdown.scrollbarSize + 'px';
          }
        }

        setMaxH = function setMaxH(pos) {
          // set max-height of list
          if (pos === 'default') {
            list.style.maxHeight = window.innerHeight - (offset.top + that.offsetHeight + ui.dropdown.scrollbarSize + ui.dropdown.menuTopMargin) + 'px';
          } else if (pos === 'top') {
            list.style.maxHeight = window.innerHeight - (ui.dropdown.scrollbarSize + ui.dropdown.menuTopMargin) + 'px';
          } else if (pos === 'pos') {
            list.style.maxHeight = window.innerHeight - (offset.top + ui.dropdown.scrollbarSize) + 'px';
          }
        };

        if (ui.hasClass(parent, ui.dropdown.nameMenuPosRight)) {
          // right position menu
          if (window.innerWidth > ui.globals.sm) {
            // right positioning: active
            if (list.offsetWidth > window.innerWidth - offset.left - (list.offsetWidth + ui.dropdown.scrollbarSize)) {
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
          } else {
            // right positioning: passive
            setMaxH('default');
            list.style.top = 'inherit';
            list.style.left = 'inherit';
            list.style.marginTop = ui.dropdown.menuTopMargin + 'px';
          }
        } else if (ui.hasClass(parent, ui.dropdown.nameMenuPosLeft)) {
          // left position menu
          if (window.innerWidth > ui.globals.sm) {
            // left positioning: active
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
          } else {
            // left positioning: passive
            setMaxH('default');
            list.style.top = 'inherit';
            list.style.right = 'inherit';
            list.style.marginTop = ui.dropdown.menuTopMargin + 'px';
          }
        } else if (offset.top + parseInt(that.offsetHeight + list.offsetHeight) >= window.innerHeight) {
          // menu vertical positioning
          if (offset.top - parseInt(that.offsetHeight + list.offsetHeight) + that.offsetHeight > 0) {
            if (!ui.hasClass(parent, ui.dropdown.nameNavFullHor)) {
              // add top menu without full horizontal navigations
              ui.addClass(parent, ui.dropdown.nameMenuTop);
              list.style.removeProperty('transform-origin');
            }

            setMaxH('top');
          } else {
            setMaxH('default');
          }
        } else {
          setMaxH('default');
        }
      }, dropdownHoverTimer);

      if (e.type === 'click') {
        setTimeout(function () {
          ui.on(document, 'click.' + ui.dropdown.eventClose, function (ev) {
            var content = ui.closest(ev.target, '.' + ui.dropdown.nameMenu)[0]; // prevent for non listing contents

            if (content !== undefined) {
              if (ui.closest(content, '.' + ui.dropdown.target)[0] !== undefined) {
                // check other content classnames
                return;
              }
            }

            if (ui.closest(ev.target, '.' + ui.dropdown.target + '.' + ui.dropdown.nameNavFullHor)[0] !== undefined && ev.target.className.split(' ').indexOf(ui.dropdown.nameMenu) === 0) {
              // check full horizontal navigations
              return;
            }

            if (ev.button !== 2) {
              // inherited right clicks
              dropdownClose();
              ui.off(document, 'click.' + ui.dropdown.eventClose);
            }
          });
        }, 0);
      }
    } // Event Listeners
    // open


    ui.on(document, 'click', '.' + ui.userAgents.nameDesktop + ' .' + ui.dropdown.target + ':not(.' + ui.dropdown.nameHover + '):not(.' + ui.dropdown.nameOpenEase + ') > .' + ui.dropdown.nameBtn + ',' + '.' + ui.userAgents.nameMobile + ' .' + ui.dropdown.target + ':not(.' + ui.dropdown.nameOpenEase + ') > .' + ui.dropdown.nameBtn, function (e) {
      dropdownHoverTimer = 0;
      dropdownOpen(e, this);
    });
    ui.on(document, 'mouseenter', '.' + ui.userAgents.nameDesktop + ' .' + ui.dropdown.target + '.' + ui.dropdown.nameHover + ':not(.' + ui.dropdown.nameOpenEase + ') > .' + ui.dropdown.nameBtn, function (e) {
      clearTimeout(dropdownLeaveTimer);
      dropdownHoverTimer = ui.globals.ease * 2;
      dropdownOpen(e, this);
    });
    ui.on(document, 'mouseenter', '.' + ui.userAgents.nameDesktop + ' .' + ui.dropdown.target + '.' + ui.dropdown.nameHover + '.' + ui.dropdown.nameOpen + ' > .' + ui.dropdown.nameBtn + ',' + '.' + ui.userAgents.nameDesktop + ' .' + ui.dropdown.target + '.' + ui.dropdown.nameHover + '.' + ui.dropdown.nameOpenEase + ' .' + ui.dropdown.nameMenu, function () {
      dropdownHoverTimer = ui.globals.ease * 2;
      clearTimeout(dropdownLeaveTimer);
    }); // form toggle

    ui.on(document, 'click', '.' + ui.dropdown.target + ' ' + ui.dropdown.tagMenuItems + ' > ' + ui.dropdown.tagValueItems, function () {
      var p, target, input;
      p = ui.closest(this, '.' + ui.dropdown.target)[0];
      target = ui.find('.' + ui.dropdown.nameBtn + ' > ' + ui.dropdown.tagValue, p)[0];
      target.innerHTML = '';
      target.insertAdjacentHTML('beforeend', this.innerHTML);
      input = ui.find('input', target)[0];

      if (input !== undefined) {
        input.parentNode.removeChild(input);
      }

      ui.removeClass(ui.find('.' + ui.dropdown.nameSelected, p), ui.dropdown.nameSelected);
      ui.addClass(this.parentNode, ui.dropdown.nameSelected);
    }); // close

    ui.on(document, 'mouseleave', '.' + ui.dropdown.target + '.' + ui.dropdown.nameHover, function () {
      clearTimeout(dropdownLeaveTimer);
      clearTimeout(dropdownOpenTimer);
      var that, innerParent;
      innerParent = ui.closest(this, '.' + ui.dropdown.target)[0];
      that = this;
      dropdownLeaveTimer = setTimeout(function () {
        innerParent = ui.closest(that, '.' + ui.dropdown.target)[0];

        if ((ui.hasClass(that, ui.dropdown.nameMenuPosRight) || ui.hasClass(that, ui.dropdown.nameMenuPosLeft)) && innerParent !== undefined) {
          // detecting inner dropdown positions
          dropdownClose(innerParent);
        } else {
          dropdownClose();
        }
      }, ui.globals.ease * 2);
    });
    ui.on(document, 'mouseup', '.' + ui.dropdown.target + ':not(.' + ui.dropdown.nameNav + ') ' + ui.dropdown.tagMenuItems, function () {
      clearTimeout(dropdownLeaveTimer);
      clearTimeout(dropdownOpenTimer);
      dropdownClose();
    }); // select dropdown fix

    selectOpened = false;
    selectInContent = ui.find('.' + ui.dropdown.target + ' .' + ui.dropdown.nameMenu + ' select');
    ui.on(document, 'focus', selectInContent, function () {
      selectOpened = true;
    });
    ui.on(document, 'blur', selectInContent, function () {
      selectOpened = false;
    });
    ui.on(document, 'keyup', selectInContent, function (e) {
      if (e.keyCode == 27) {
        selectOpened = false;
      }
    });
  }; // Loaders


  ui.onload(ui.dropdown.Start);
  ui.on(window, 'resize', function () {
    if (window.innerWidth === getScrollPos) {
      return;
    } // close only horizontal resizing


    dropdownClose();
    getScrollPos = window.innerWidth;
  });
})();
"use strict";

/*
 UI Dual Multi Select JS
 Requires UI Core JS
*/
ui.dualMultiSelect = {
  // targets
  target: 'ui-dual-multi-select',
  // outer classnames
  nameSelectMulti: 'ui-select-multi',
  // data attributes
  dataIndex: 'data-ui-index'
};

(function () {
  'use strict';
  /*globals document, ui, setTimeout */

  var resetOptions, loadSelects, movetoSource;

  ui.dualMultiSelect.Start = function () {
    resetOptions = function resetOptions(selects, isSubmit) {
      // reset options
      var sourceList, targetList;
      sourceList = ui.find('option', selects[0]);
      targetList = ui.find('option', selects[1]);
      ui.each(sourceList, function () {
        if (ui.userAgents.mobile) {
          this.selected = true;
        } else {
          this.selected = false;
        }
      });
      ui.each(targetList, function () {
        if (ui.userAgents.mobile || isSubmit !== undefined) {
          this.selected = true;
        } else {
          this.selected = false;
        }
      });
    };

    loadSelects = function loadSelects() {
      var i, holder, selects, name, arr, userArr, arrStart, index, options, selected;
      holder = ui.find('.' + ui.dualMultiSelect.target);
      ui.each(holder, function () {
        arr = [];
        arrStart = [];
        selects = ui.find('.' + ui.dualMultiSelect.nameSelectMulti + ' select[multiple]', this); // move name attribute from source to target select

        name = selects[0].name;
        selects[0].removeAttribute('name');
        selects[1].name = name; // get user defined idexes

        options = ui.find('option', selects[0]);
        ui.each(options, function () {
          index = this.getAttribute(ui.dualMultiSelect.dataIndex);

          if (index !== null && index !== '' && !isNaN(index)) {
            arr.push(index);
            arrStart.push(index);
          } else {
            arr.push('');
          }
        }); // create new indexes for not defined options

        arrStart = arrStart.sort();
        userArr = arrStart;
        arrStart = Number(arrStart[arrStart.length - 1]);

        if (isNaN(arrStart)) {
          arrStart = 0;

          for (i = 0; i < options.length; i++) {
            arrStart += 1;
            arr[i] = arrStart.toString();
          }
        } else {
          for (i = 1; i <= options.length; i++) {
            if (arr[i] === '') {
              arrStart += 1;
              arr[i] = arrStart.toString();
            }
          }
        } // set all indexes to options


        ui.each(options, function (j) {
          this.setAttribute(ui.dualMultiSelect.dataIndex, arr[j]);

          if (userArr.length > 0) {
            // move user defined options from source to target by index
            index = Number(arr.indexOf(userArr[j]));

            if (index > -1) {
              selects[1].appendChild(options[index]);
            }
          } else {
            // move options selected with attribute from source to target
            selected = this.getAttribute('selected');

            if (selected !== null) {
              selects[1].appendChild(this);
            }
          }
        });
        resetOptions(selects); // reset options
      });
    };

    loadSelects();

    movetoSource = function movetoSource(that, selects) {
      var i, j, sourceList, index, arr, inserted;
      i = Number(that.getAttribute(ui.dualMultiSelect.dataIndex));
      sourceList = ui.find('option', selects[0]);

      if (sourceList.length === 0) {
        // first moving to empty list
        selects[0].appendChild(that);
      } else if (sourceList.length === 1) {
        // only one option in list
        index = Number(sourceList[0].getAttribute(ui.dualMultiSelect.dataIndex));

        if (i > index) {
          selects[0].appendChild(that);
        } else {
          selects[0].insertBefore(that, sourceList[0]);
        }
      } else {
        arr = [];
        inserted = false; // move to index

        for (j = 0; j < sourceList.length; j++) {
          index = Number(sourceList[j].getAttribute(ui.dualMultiSelect.dataIndex));
          arr.push(index);

          if (index - 1 >= i) {
            inserted = true;
            selects[0].insertBefore(that, sourceList[j]);
            break;
          }
        } // move biggest index to end of the list


        if (!inserted) {
          if (i > arr.sort()[arr.length - 1]) {
            selects[0].appendChild(that);
          }
        }
      }
    }; // Event Listeners


    ui.on(document, 'change', '.' + ui.dualMultiSelect.target + ' .' + ui.dualMultiSelect.nameSelectMulti + ' select[multiple]', function (e) {
      if (!e.isTrusted) {
        return;
      } // prevent trigger change event listeners


      var i, that, options, selects, parent, dir;
      options = Array.prototype.slice.call(e.target); // get option list

      for (i = 0; options.length; i++) {
        if (options[i].selected) {
          // get selected option
          that = options[i];
          break;
        }
      }

      selects = ui.closest(that, '.' + ui.dualMultiSelect.target)[0];
      selects = ui.find('.' + ui.dualMultiSelect.nameSelectMulti + ' select[multiple]', selects);
      parent = ui.closest(that, '.' + ui.dualMultiSelect.nameSelectMulti + ' select[multiple]')[0];
      dir = Array.prototype.slice.call(selects).indexOf(parent);

      if (dir === 0) {
        // move from source to target select
        selects[1].appendChild(that);
      } else {
        // move from target to source select
        movetoSource(that, selects);
      }

      resetOptions(selects); // reset options
    });
    ui.on(document, 'reset', 'form', function () {
      var i, holder, selects, sourceList, targetList, selected;
      setTimeout(function () {
        // wait for form reset started on DOM
        holder = ui.find('.' + ui.dualMultiSelect.target);
        ui.each(holder, function () {
          selects = ui.find('.' + ui.dualMultiSelect.nameSelectMulti + ' select[multiple]', this);
          targetList = ui.find('option', selects[1]);
          ui.each(targetList, function () {
            selected = this.getAttribute('selected');
            i = Number(this.getAttribute(ui.dualMultiSelect.dataIndex)) - 1;

            if (selected === null) {
              // move options to source that not selected with attribute
              movetoSource(this, selects);
            }
          });
          targetList = ui.find('option', selects[1]); // reload modified list

          sourceList = ui.find('option', selects[0]);
          ui.each(sourceList, function () {
            selected = this.getAttribute('selected');

            if (selected !== null) {
              // move options to target that selected with attribute
              if (targetList.length === 0) {
                selects[1].appendChild(this);
              } else {
                selects[1].insertBefore(this, targetList[i]);
              }
            }
          });
          resetOptions(selects); // reset options
        });
      }, 0);
    });
    ui.on(document, 'submit', 'form', function (e) {
      var elems, selects;
      elems = Array.prototype.slice.call(e.target); // get submitted element list

      ui.each(elems, function () {
        if (this.tagName === 'SELECT' && this.multiple) {
          // get multiple selects
          selects = ui.closest(this, '.' + ui.dualMultiSelect.target)[0];
          selects = ui.find('.' + ui.dualMultiSelect.nameSelectMulti + ' select[multiple]', selects);

          if (selects !== undefined) {
            resetOptions(selects, true); // reset options, set target list to selected before submit
          }
        }
      });
    });
  }; // Loaders


  ui.onload(ui.dualMultiSelect.Start); // ajax callback loader

  ui.on(document, ui.globals.eventAjaxCallback, function () {
    if (ui.ajax.classNames.indexOf(ui.dualMultiSelect.target) > 0) {
      loadSelects();
    }
  });
})();
"use strict";

/*
 UI Form Spinner JS
 Requires UI Core JS
*/
ui.formSpinner = {
  // targets
  target: 'ui-form-spinner',
  // main classnames
  nameUp: 'ui-spinner-up',
  nameDown: 'ui-spinner-down'
};

(function () {
  'use strict';
  /*globals document, ui */

  var checkSpinnerForms;

  ui.formSpinner.Start = function () {
    // Event Listeners
    ui.on(document, 'click', '.' + ui.formSpinner.nameUp + ',.' + ui.formSpinner.nameDown, function () {
      var p, input, val, max, min;
      p = ui.closest(this, '.' + ui.formSpinner.target), input = ui.find('[type="text"]', p);
      val = Number(input.value);
      max = input.getAttribute('max');
      min = input.getAttribute('min');

      if (ui.hasClass(this, ui.formSpinner.nameUp)) {
        val += 1;

        if (val >= max) {
          val = max;
        }
      } else {
        val -= 1;

        if (val <= min) {
          val = min;
        }
      }

      input.value = val;
    });

    checkSpinnerForms = function checkSpinnerForms() {
      ui.each('.' + ui.formSpinner.target, function () {
        var t = ui.find('[type="text"]', this)[0];
        t.value = t.getAttribute('value');
      });
    };

    checkSpinnerForms();
  }; // Loaders


  ui.onload(ui.formSpinner.Start); // ajax callback loader

  ui.on(document, ui.globals.eventAjaxCallback, function () {
    if (ui.ajax.classNames.indexOf(ui.formSpinner.target) > -1) {
      checkSpinnerForms();
    }
  });
})();
"use strict";

/*
 UI Forms JS
 Requires UI Core JS
*/
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

(function () {
  'use strict';
  /*globals document, ui, setTimeout */

  var clearForms, loadClearForms;

  ui.forms.Start = function () {
    function formFocus(t, type) {
      var i, parent, classes, holder;
      classes = [ui.forms.targetText, ui.forms.targetSelect, ui.forms.targetSelectMulti, ui.forms.targetTextarea];
      holder = ui.closest(t, '.' + ui.forms.nameHolder);

      if (holder.length === 1) {
        ui.removeClass('.' + ui.forms.nameHolderFocus, ui.forms.nameHolderFocus);

        if (type === 'add') {
          ui.addClass(holder, ui.forms.nameHolderFocus);
        }
      } else {
        ui.removeClass('.' + ui.forms.nameFocus, ui.forms.nameFocus);
      }

      for (i = 0; i < classes.length; i++) {
        parent = ui.closest(t, '.' + classes[i]);

        if (parent.length === 1) {
          if (type === 'add') {
            ui.addClass(parent, ui.forms.nameFocus);
          } else {
            ui.removeClass(parent, ui.forms.nameFocus);
          }

          break;
        }
      }
    } // clear with form icons


    clearForms = function clearForms(that) {
      var btn = ui.find('.' + ui.forms.nameClear, that.parentElement)[0];

      if (that.value !== '') {
        ui.addClass(btn, ui.forms.nameOpen);
        setTimeout(function () {
          ui.addClass(btn, ui.forms.nameOpenEase);
        }, 10);
      } else {
        ui.removeClass(btn, ui.forms.nameOpenEase);
        setTimeout(function () {
          ui.removeClass(btn, ui.forms.nameOpen);
        }, ui.globals.ease);
      }
    };

    loadClearForms = function loadClearForms() {
      ui.each('.' + ui.forms.targetText + '.' + ui.forms.nameHasClear + ' input', function () {
        var that = this;
        setTimeout(function () {
          clearForms(that);
        }, 0);
      });
    };

    loadClearForms(); // Event Listeners

    ui.on(document, 'focus', '.' + ui.forms.targetText + ' input,' + '.' + ui.forms.targetSelect + ' select,' + '.' + ui.forms.targetSelectMulti + ' select,' + '.' + ui.forms.targetTextarea + ' textarea', function () {
      formFocus(this, 'add');
    });
    ui.on(document, 'blur', 'input,select,textarea', function () {
      formFocus(this, 'remove');
    }); // file inputs

    ui.on(document, 'change', '.' + ui.forms.targetFile + ' input', function () {
      var info = ui.find(ui.forms.tagFileInfo, this.parentElement)[0];

      if (info !== undefined) {
        info.innerHTML = this.value;
      }
    }); // indeterminate

    ui.on(document, 'click', 'input[type="checkbox"].' + ui.forms.targetIndeterminate, function () {
      if (this.readOnly) {
        this.checked = this.readOnly = false;
      } else if (!this.checked) {
        this.readOnly = this.indeterminate = true;
      }
    }); // toggle password

    ui.on(document, 'click touchend', '.' + ui.forms.nameShowPass, function () {
      var that = this.parentElement;
      that = ui.find('input', that)[0];

      if (that.getAttribute('type') === 'password') {
        that.setAttribute('type', 'text');
      } else {
        that.setAttribute('type', 'password');
      }
    }); // number

    ui.on(document, 'keypress', '.' + ui.forms.targetText + ' > .' + ui.forms.nameNumber, function (e) {
      var c,
          isRefresh = false;

      if (e.which) {
        c = e.which;
      } else {
        c = e.keyCode;

        if (c === 116) {
          isRefresh = true;
        }
      }

      if (c !== 8 && c !== 9 && c !== 35 && c !== 36 && c !== 37 && c !== 39 && c !== 46 && !isRefresh && (c < 48 || c > 57)) {
        e.preventDefault();
      }
    });
    ui.on(document, 'paste', '.' + ui.forms.targetText + ' > .' + ui.forms.nameNumber, function () {
      var i, re, that, getValues, newValues, maxLength;
      that = this;
      maxLength = that.getAttribute('maxlength');
      that.removeAttribute('maxlength');
      setTimeout(function () {
        newValues = '';
        getValues = that.value.match(new RegExp(/[0-9]/, 'g'));

        if (getValues !== null) {
          for (i = 0; i < getValues.length; i++) {
            newValues += getValues[i];
          }
        } else {
          that.value = newValues;
          return false;
        }

        if (maxLength !== null) {
          re = '[0-9]{1,' + maxLength + '}';
          re = new RegExp(re, 'g');
          that.value = newValues.match(re)[0];
          that.setAttribute('maxlength', maxLength);
        } else {
          that.value = newValues;
        }
      }, 0);
    }); // form icons

    if (ui.userAgents.mobile) {
      // fix: buttons not clicked on form focus at mobile devices
      ui.on(document, 'mousedown', '[class*="' + ui.forms.nameFormIcon + '"] > button.' + ui.forms.nameIcon + ',' + '[class*="' + ui.forms.nameFormIcon + '"] > input.' + ui.forms.nameIcon, function (e) {
        e.stopPropagation();
        ui.trigger(this, 'click');
      }); // submit with form icons (ios fix)

      ui.on(document, 'click', '.' + ui.forms.targetText + ' > [type="submit"]', function () {
        var form = ui.closest(this, '.' + ui.forms.targetText)[0];
        ui.trigger(form, 'submit');
      });
    } // trigger custom event listeners when form resetting


    ui.on(document, 'reset', 'form', function (e) {
      var forms, errors, reqMessages;
      forms = Array.prototype.slice.call(e.target);
      errors = ui.find('.' + ui.forms.nameError, this);
      reqMessages = ui.find('.' + ui.forms.nameRequiredMsg, this);
      setTimeout(function () {
        // wait for form reset started on DOM
        ui.each(forms, function () {
          // trigger defined event listeners after form clear
          //ui.trigger(this, 'change');
          if (!ui.hasClass(this, ui.forms.nameRequired)) {
            // discard required forms
            ui.trigger(this, 'keydown keyup');
          }
        }); // remove errors

        ui.removeClass(errors, ui.forms.nameError); // remove error messages

        ui.removeClass(reqMessages, ui.forms.nameRequiredMsgShow);
      }, 0);
    }); // clear with form icons

    ui.on(document, 'change keyup', '.' + ui.forms.targetText + '.' + ui.forms.nameHasClear + ' input', function () {
      clearForms(this);
    });
    ui.on(document, 'click', '.' + ui.forms.targetText + '.' + ui.forms.nameHasClear + ' .' + ui.forms.nameClear, function () {
      var form = ui.find('input', this.parentElement)[0];
      form.value = '';

      if (!ui.hasClass(form, ui.forms.nameRequired)) {
        // discard required forms
        // trigger defined event listeners after form clear
        ui.trigger(form, 'change keydown keyup');
      }
    });
  }; // Loaders


  ui.onload(ui.forms.Start); // ajax callback loader

  ui.on(document, ui.globals.eventAjaxCallback, function () {
    if (ui.ajax.classNames.indexOf(ui.forms.nameClear) > 0) {
      loadClearForms();
    }
  });
})();
"use strict";

/*
 UI Photo Gallery JS
 Requires UI Core JS
*/
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
  imgVerRatio: '1.33',
  imgZoomMin: '1',
  imgZoomMax: '6',
  // data attributes
  dataTarget: 'data-ui-target',
  dataCount: 'data-ui-count',
  dataHref: 'data-ui-href',
  // custom events
  eventGalleryTouch: 'ui:photogallery',
  eventPreviewClose: 'ui:previewClose',
  eventPreviewNav: 'ui:previewNav'
};

(function () {
  'use strict';
  /*globals window, document, ui, Image, setTimeout, clearTimeout */

  var imgTouchmove,
      pageTouchmove = false,
      pageTouchmoveTimer;

  ui.photoGallery.Start = function () {
    var gallery,
        galleryCounter,
        imgCounter,
        pageYPos,
        _checkImages,
        imgWidth,
        imgHeight,
        loadedImages = [],
        loadedTitles = [];

    gallery = ui.find('.' + ui.photoGallery.targetGallery);

    if (gallery.length > 0) {
      galleryCounter = 0;
      imgCounter = 0; // control vertical images

      _checkImages = function checkImages() {
        var img, newImg, imgLength, _imgFnc;

        img = ui.find('a.' + ui.photoGallery.targetPhotos + ' img', gallery[galleryCounter]);
        imgLength = img.length - 1;

        if (imgLength < 0) {
          return;
        }

        _imgFnc = function imgFnc() {
          newImg = new Image();
          newImg.src = img[imgCounter].src;
          img[imgCounter].src = newImg.src;

          newImg.onload = function () {
            if (this.naturalWidth / this.naturalHeight < ui.photoGallery.imgVerRatio) {
              ui.addClass(img[imgCounter], ui.photoGallery.targetPhotoVer);
            }

            if (imgCounter < imgLength) {
              imgCounter += 1;

              _imgFnc();
            } else if (imgCounter === imgLength) {
              imgCounter = 0;

              if (galleryCounter < gallery.length - 1) {
                galleryCounter += 1;

                _checkImages();
              }
            }
          };
        };

        _imgFnc();
      };

      _checkImages();
    }

    function galleryFnc(e, that, call) {
      var i, parent, images, preview, html, index, loader, newImg, img, imgPosX, imgPosY, info, imgZoom, lastTouchEnd, waitPinchZoom;
      parent = ui.closest(that, '.' + ui.photoGallery.targetGallery)[0];

      if (parent === undefined) {
        parent = ui.closest(that, '.' + ui.photoGallery.nameGalleryPassive)[0];
      }

      if (call === undefined) {
        images = ui.find('a.' + ui.photoGallery.targetPhotos, parent);
      } else {
        images = ui.find('.' + ui.photoGallery.targetPhotos, parent);
      } // mobile and touch screens: show data titles first


      if (e.type === 'touchend') {
        if (ui.hasClass(that, ui.photoGallery.nameGalleryInfo)) {
          if (!ui.hasClass(that, ui.photoGallery.nameGalleryTouch)) {
            ui.removeClass(images, ui.photoGallery.nameGalleryTouch);
            ui.addClass(that, ui.photoGallery.nameGalleryTouch);
            return;
          }

          ui.removeClass(images, ui.photoGallery.nameGalleryTouch);
        } else {
          ui.removeClass(images, ui.photoGallery.nameGalleryTouch);
        }
      }

      if (ui.userAgents.mobile) {
        pageYPos = window.pageYOffset; // get current y scroll position
      } // get images and titles


      ui.each(images, function () {
        var href = this.getAttribute('href');

        if (href !== null) {
          loadedImages.push(href);
        } else {
          loadedImages.push(this.getAttribute(ui.photoGallery.dataHref));
        }

        if (ui.hasClass(this, ui.photoGallery.nameGalleryInfo)) {
          loadedTitles.push(ui.find(ui.photoGallery.tagGalleryInfo, this)[0].innerHTML);
        } else {
          loadedTitles.push(null);
        }
      }); // detect previously opened galleries

      preview = ui.find('.' + ui.photoGallery.targetPreview);

      if (preview.length > 0) {
        for (i = 0; i < preview.length; i++) {
          preview[i].parentNode.removeChild(preview[i]);
        }
      } // create gallery


      index = Array.prototype.slice.call(images).indexOf(that);
      html = '<div class="' + ui.photoGallery.targetPreview + ' ' + ui.photoGallery.stylesPreview + '">' + '<div class="' + ui.photoGallery.namePreviewBg + '"></div>' + '<button class="' + ui.photoGallery.namePreviewClose + ' ' + ui.photoGallery.stylesCloseIcon + '">' + '<svg class="' + ui.photoGallery.nameIcon + '"><use href="#' + ui.photoGallery.closeIcon + '"/></svg>' + '</button>' + '<button type="button" class="' + ui.photoGallery.namePreviewPrev + ' ' + ui.photoGallery.stylesPreviewBtn + '">' + '<svg class="' + ui.photoGallery.nameIcon + '"><use href="#' + ui.photoGallery.prevIcon + '"/></svg>' + '</button>' + '<button type="button" class="' + ui.photoGallery.namePreviewNext + ' ' + ui.photoGallery.stylesPreviewBtn + '">' + '<svg class="' + ui.photoGallery.nameIcon + '"><use href="#' + ui.photoGallery.nextIcon + '"/></svg>' + '</button>' + '<svg class="' + ui.photoGallery.namePreviewLoader + ' ' + ui.photoGallery.nameIcon + '">' + '<use href="#' + ui.photoGallery.loaderIcon + '"/>' + '</svg>' + '<span class="' + ui.photoGallery.namePreviewInfo + ' ' + ui.photoGallery.stylesPreview + '"></span>' + '<img class="' + ui.photoGallery.stylesPreview + '">' + '</div>';
      ui.find('body')[0].insertAdjacentHTML('beforeend', html);
      preview = ui.find('.' + ui.photoGallery.targetPreview); // create and load image

      newImg = new Image();
      newImg.src = loadedImages[index];
      img = ui.find('img', preview);
      img.src = newImg.src;
      loader = ui.find('.' + ui.photoGallery.namePreviewLoader, preview);

      function showImage() {
        if (img.naturalWidth / img.naturalHeight < 1.33) {
          ui.addClass(img, ui.photoGallery.targetPhotoVer);
        }

        imgWidth = img.width;
        imgHeight = img.height;
        ui.addClass(loader, ui.photoGallery.namePause);
        ui.hide(loader);
        ui.addClass(img, ui.photoGallery.nameOpen);
        setTimeout(function () {
          ui.addClass(img, ui.photoGallery.nameOpenEase);
        }, ui.globals.ease + 10);
      }

      function notLoadedImage() {
        ui.addClass(loader, ui.photoGallery.namePause);
        ui.find('use', loader)[0].setAttribute('href', '#' + ui.photoGallery.errorIcon);
      }

      newImg.onload = showImage;
      newImg.onerror = notLoadedImage;

      function toggleGalleryTools() {
        // show/hide nav buttons
        if (index < 1) {
          ui.hide('.' + ui.photoGallery.namePreviewPrev);
        } else {
          ui.show('.' + ui.photoGallery.namePreviewPrev);
        }

        if (index >= loadedImages.length - 1) {
          ui.hide('.' + ui.photoGallery.namePreviewNext);
        } else {
          ui.show('.' + ui.photoGallery.namePreviewNext);
        } // show/hide info window


        info = ui.find('.' + ui.photoGallery.namePreviewInfo)[0];
        ui.removeClass(info, ui.photoGallery.nameOpen);
        setTimeout(function () {
          if (loadedTitles[index] === null) {
            info.innerHTML = '';
          } else {
            ui.addClass(info, ui.photoGallery.nameOpen);
            info.innerHTML = loadedTitles[index];
          }
        }, ui.globals.slow);
      }

      toggleGalleryTools(); // show gallery

      ui.addClass(document, ui.photoGallery.namePreviewOpened);
      ui.addClass(preview, ui.photoGallery.nameOpen);
      setTimeout(function () {
        ui.addClass(preview, ui.photoGallery.nameOpenEase);
      }, 10); // close gallery

      function closeGallery() {
        ui.removeClass(preview, ui.photoGallery.nameOpenEase);
        ui.removeClass(document, ui.photoGallery.namePreviewOpened);

        if (ui.userAgents.mobile) {
          window.scrollTo(0, pageYPos);
        }

        loadedImages = [];
        loadedTitles = [];
        setTimeout(function () {
          ui.removeClass(preview, ui.photoGallery.nameOpen);
          preview[0].parentNode.removeChild(preview[0]);
        }, ui.globals.ease);
        ui.off('body', 'keydown.' + ui.photoGallery.eventPreviewClose + ' keydown.' + ui.photoGalleryeventPreviewNav);
      }

      ui.on('body', 'keydown.' + ui.photoGallery.eventPreviewClose, function (e) {
        if (e.keyCode === 27) {
          closeGallery();
        } // esc

      });
      ui.on('.' + ui.photoGallery.namePreviewClose, 'click', closeGallery);
      ui.on('.' + ui.photoGallery.namePreviewBg, 'click', closeGallery); // gallery nav

      function navigateGallery(that, direction) {
        // control prev/next
        if (direction === 'next') {
          index += 1;

          if (index > loadedImages.length - 1) {
            index = loadedImages.length - 1;
            return;
          }
        } else {
          index -= 1;

          if (index < 0) {
            index = 0;
            return;
          }
        } // hide current image and load new one


        ui.removeClass(img, ui.photoGallery.nameOpenEase);
        ui.show(loader);
        ui.removeClass(loader, ui.photoGallery.namePause);
        ui.find('use', loader)[0].setAttribute('href', '#' + ui.photoGallery.loaderIcon);
        toggleGalleryTools();
        setTimeout(function () {
          ui.removeClass(img, ui.photoGallery.nameOpen);
          ui.removeClass(img, ui.photoGallery.targetPhotoVer);
          newImg.src = loadedImages[index];
          img.src = newImg.src;
          newImg.onload = showImage;
          newImg.onerror = notLoadedImage; // reset touch setting

          imgPosX = '-50';
          imgPosY = '-50';
          imgZoom = 1;
          ui.removeClass(that, ui.photoGallery.namePreviewZoom);
          img.style.transform = 'translate(' + imgPosX + '%,' + imgPosY + '%) scale(' + imgZoom + ')';
        }, ui.globals.ease);
      } // Event Listeners


      ui.on('.' + ui.photoGallery.targetPreview + ' .' + ui.photoGallery.namePreviewPrev + ',.' + ui.photoGallery.targetPreview + ' .' + ui.photoGallery.namePreviewNext, 'click', function () {
        if (ui.hasClass(this, ui.photoGallery.namePreviewNext)) {
          navigateGallery(this, 'next');
        } else {
          navigateGallery(this, 'prev');
        }
      });
      ui.on('body', 'keydown.' + ui.photoGalleryeventPreviewNav, function (e) {
        if (e.keyCode === 39) {
          navigateGallery(this, 'next');
        } else if (e.keyCode === 37) {
          navigateGallery(this, 'prev');
        }
      });

      function imgLimits() {
        var horLimit, verLimit;
        horLimit = (imgWidth * imgZoom - window.innerWidth) / (imgWidth * imgZoom) * 100;
        verLimit = (imgHeight * imgZoom - window.innerHeight) / (imgHeight * imgZoom) * 100;

        if (imgPosX < -horLimit - 100) {
          imgPosX = -horLimit - 100;
        } // left


        if (imgPosX > horLimit) {
          imgPosX = horLimit;
        } // right


        if (imgPosY < -verLimit - 100) {
          imgPosY = -verLimit - 100;
        } // top


        if (imgPosY > verLimit) {
          imgPosY = verLimit;
        } // bottom


        img.style.transform = 'translate(' + imgPosX + '%,' + imgPosY + '%) scale(' + imgZoom + ')';
      } // touch event listeners: double tap to zoom


      imgPosX = '-50';
      imgPosY = '-50';
      imgZoom = 1;
      ui.on(img, 'touchend dblclick', function (e) {
        var touchesLength, now, getX, getY, rect;

        if (waitPinchZoom) {
          return;
        }

        if (e.type === 'dblclick') {
          // added double click to zoom for desktop
          touchesLength = 1;
        } else {
          touchesLength = e.changedTouches.length;
        }

        if (touchesLength === 1) {
          // control number of touches
          now = new Date().getTime();

          if (e.type === 'touchend' && now - lastTouchEnd <= 200 && now - lastTouchEnd > 0 || e.type === 'dblclick') {
            e.preventDefault();
            rect = img.getBoundingClientRect(); // get img DOM rect

            if (ui.hasClass(this, ui.photoGallery.namePreviewZoom)) {
              imgPosX = '-50';
              imgPosY = '-50';
              imgZoom = 1;
              ui.removeClass(this, ui.photoGallery.namePreviewZoom);
            } else {
              imgZoom = 2;

              if (e.type === 'dblclick') {
                getX = e.clientX;
                getY = e.clientY;
              } else {
                getX = e.changedTouches[0].pageX;
                getY = e.changedTouches[0].pageY;
              }

              imgPosX = -50 + parseFloat((rect.width / 2 - (getX - rect.x)) / rect.width) * 100 / 2 * imgZoom;
              imgPosY = -50 + parseFloat((rect.height / 2 - (getY - rect.y)) / rect.height) * 100 / 2 * imgZoom;
              ui.addClass(this, ui.photoGallery.namePreviewZoom);
            }

            img.style.transform = 'translate(' + imgPosX + '%,' + imgPosY + '%) scale(' + imgZoom + ')';
          } else if (imgTouchmove) {
            if (imgZoom > 1 && (imgWidth * imgZoom > window.innerWidth || imgHeight * imgZoom > window.innerHeight)) {
              // control image exceeds window size
              imgTouchmove = false;
              imgLimits();
            }

            ui.off(preview, 'touchmove');
            ui.removeClass(img, ui.photoGallery.namePauseEase);
          }

          lastTouchEnd = now;
        }
      }); // touch event listeners: pinch to zoom

      ui.on(preview, 'touchstart', function (e) {
        if (e.target.src === undefined) {
          return;
        }

        e.preventDefault();
        var sx, sy, x, y, pinchStart, pinch, matrix, newScale, msx, msy;
        waitPinchZoom = false;
        matrix = window.getComputedStyle(img).getPropertyValue('transform'); // matrix(xZoom, 0, 0, yZoom, xPos, yPos)

        matrix = matrix.replace('matrix', '').replace(/[\,\(\)\s]/g, ' ').replace(/\s\s/g, '|'); // select only numbers

        matrix = matrix.split('|'); // touch move image positioning

        msx = e.targetTouches[0].pageX;
        msy = e.targetTouches[0].pageY;

        if (e.targetTouches.length > 1) {
          // control number of touches
          sx = msx - e.targetTouches[1].pageX;
          sy = msy - e.targetTouches[1].pageY;
          pinchStart = Math.sqrt(sx * sx + sy * sy); // the pythagorean distance between two points
        }

        ui.on(this, 'touchmove', function (e) {
          if (imgZoom > 1 && (imgWidth * imgZoom > window.innerWidth || imgHeight * imgZoom > window.innerHeight)) {
            // control image exceeds window size
            ui.addClass(img, ui.photoGallery.namePauseEase);
            imgTouchmove = true;
            waitPinchZoom = true;
            imgPosX = parseFloat((e.targetTouches[0].pageX - msx) / imgWidth) * 100 + parseFloat(matrix[4] / imgWidth * 100);
            imgPosY = parseFloat((e.targetTouches[0].pageY - msy) / imgHeight) * 100 + parseFloat(matrix[5] / imgHeight * 100);
          }

          if (e.targetTouches.length > 1) {
            // control number of touches
            x = e.targetTouches[0].pageX - e.targetTouches[1].pageX;
            y = e.targetTouches[0].pageY - e.targetTouches[1].pageY;
            pinch = Math.sqrt(x * x + y * y); // the pythagorean distance between two points

            newScale = (pinch - pinchStart) / pinch * (imgWidth / imgHeight * 2);
            imgZoom = parseFloat(matrix[3]) + parseFloat(newScale);

            if (imgZoom <= ui.photoGallery.imgZoomMin) {
              imgPosX = '-50';
              imgPosY = '-50';
              imgZoom = ui.photoGallery.imgZoomMin;
              ui.removeClass(img, ui.photoGallery.namePreviewZoom);
            } else {
              ui.addClass(img, ui.photoGallery.namePreviewZoom);
            }

            if (imgZoom > ui.photoGallery.imgZoomMax) {
              imgZoom = ui.photoGallery.imgZoomMax;
            }
          }

          img.style.transform = 'translate(' + imgPosX + '%,' + imgPosY + '%) scale(' + imgZoom + ')';
        });
      }); // mousemove for zoomed image on desktop

      ui.on(document, 'mousedown', '.' + ui.photoGallery.targetPreview + ' img.' + ui.photoGallery.namePreviewZoom, function (e) {
        if (e.target.src === null || ui.userAgents.mobile) {
          return;
        }

        e.preventDefault();
        var msx, msy, matrix;
        msx = e.clientX;
        msy = e.clientY;
        matrix = window.getComputedStyle(img).getPropertyValue('transform'); // matrix(xZoom, 0, 0, yZoom, xPos, yPos)

        matrix = matrix.replace('matrix', '').replace(/[\,\(\)\s]/g, ' ').replace(/\s\s/g, '|'); // select only numbers

        matrix = matrix.split('|');
        ui.on(img, 'mousemove', function (e) {
          if (imgZoom > 1 && (imgWidth * imgZoom > window.innerWidth || imgHeight * imgZoom > window.innerHeight)) {
            // control image exceeds window size
            ui.addClass(img, ui.photoGallery.namePauseEase);
            imgPosX = parseFloat((e.clientX - msx) / imgWidth) * 100 + parseFloat(matrix[4] / imgWidth * 100);
            imgPosY = parseFloat((e.clientY - msy) / imgHeight) * 100 + parseFloat(matrix[5] / imgHeight * 100);
            img.style.transform = 'translate(' + imgPosX + '%,' + imgPosY + '%) scale(' + imgZoom + ')';
          }
        });
        ui.on(img, 'mouseup mouseleave', function () {
          if (ui.userAgents.desktop) {
            if (imgZoom > 1 && (imgWidth * imgZoom > window.innerWidth || imgHeight * imgZoom > window.innerHeight)) {
              // control image exceeds window size
              imgLimits();
            }

            ui.off(img, 'mousemove mouseup mouseleave');
            ui.removeClass(img, ui.photoGallery.namePauseEase);
          }
        });
      });
    } // Event Listeners


    ui.on(document, 'touchmove.' + ui.photoGallery.eventGalleryTouch + ' touchend', '.' + ui.photoGallery.targetGallery + ' a.' + ui.photoGallery.targetPhotos, function (e) {
      if (e.cancelable && e.defaultPrevented) {
        // touchstart or touchmove with preventDefault we need this. Because, now Chrome and Android browsers preventDefault automatically.
        e.preventDefault();
      }

      if (e.type === 'touchmove') {
        pageTouchmove = true;
      }

      var that = this;

      if (e.type === 'touchend') {
        clearTimeout(pageTouchmoveTimer);
        pageTouchmoveTimer = setTimeout(function () {
          if (pageTouchmove === false) {
            if (ui.hasClass(this, ui.photoGallery.nameGalleryInfo)) {
              if (ui.userAgents.mobile && ui.hasClass(this, ui.photoGallery.nameGalleryTouch)) {
                galleryFnc(e, that);
              } else {
                return;
              }
            } else {
              galleryFnc(e, that);
            }
          }

          pageTouchmove = false;
        }, ui.globals.fast / 2);
      }
    });
    ui.on(document, 'click', '.' + ui.photoGallery.targetGallery + ' a.' + ui.photoGallery.targetPhotos, function (e) {
      e.preventDefault();

      if (ui.userAgents.desktop) {
        galleryFnc(e, this);
      }
    });
    ui.on(document, 'click', '.' + ui.photoGallery.nameGalleryCall, function (e) {
      e.preventDefault();
      var target, count;
      target = this.getAttribute(ui.photoGallery.dataTarget);
      count = this.getAttribute(ui.photoGallery.dataCount);

      if (target === null) {
        return;
      }

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
  }; // Loaders


  ui.onload(ui.photoGallery.Start);
})();
"use strict";

/*
 UI Grid JS
 Requires UI Core JS
*/
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

(function () {
  'use strict';
  /*globals window, document, ui */

  ui.grid.Start = function () {
    var fnc, o, p, siblings, i;

    if (ui.find('[class*="' + ui.grid.targetColsPrefix + '"][class*="' + ui.grid.targetOrdersPrefix + '"]').length > 0) {
      fnc = function fnc(classType, size) {
        if (size) {
          ui.each('[class*="' + ui.grid.targetOrdersPrefix + classType + '-"]', function () {
            p = this.parentElement;
            siblings = p.children;
            i = Array.prototype.slice.call(this.parentElement.children).indexOf(this);

            if (ui.hasClass(this, ui.grid.targetOrdersPrefix + classType + ui.grid.nameFirstSuffix) && i !== 0) {
              this.setAttribute(ui.grid.dataOrdered, i);
              p.insertBefore(this, p.firstChild);
            }

            if (ui.hasClass(this, ui.grid.targetOrdersPrefix + classType + ui.grid.nameLastSuffix) && i !== siblings.length - 1) {
              this.setAttribute(ui.grid.dataOrdered, i);
              p.appendChild(this);
            }
          });
        } else {
          ui.each('[class*="' + ui.grid.targetOrdersPrefix + classType + '-"][' + ui.grid.dataOrdered + ']', function () {
            o = parseInt(this.getAttribute(ui.grid.dataOrdered));
            p = this.parentElement;
            siblings = p.children;

            if (ui.hasClass(this, ui.grid.targetOrdersPrefix + classType + ui.grid.nameFirstSuffix)) {
              this.removeAttribute(ui.grid.dataOrdered);
              p.insertBefore(this, siblings[o + 1]);
            } else {
              this.removeAttribute(ui.grid.dataOrdered);
              p.insertBefore(this, siblings[o]);
            }
          });
        }
      };

      fnc('xs', window.innerWidth < ui.globals.xs + 1);
      fnc('sm', window.innerWidth < ui.globals.sm + 1);
      fnc('md', window.innerWidth < ui.globals.md + 1);
      fnc('default', window.innerWidth < ui.globals.lg);
      fnc('lg', window.innerWidth > ui.globals.lg - 1);
      fnc('xl', window.innerWidth > ui.globals.xl - 1);
    }
  }; // Loaders


  ui.onload(ui.grid.Start);
  ui.on(window, 'resize', ui.grid.Start);
  ui.on(document, ui.globals.eventDomChange, ui.grid.Start); // ajax callback loader

  ui.on(document, ui.globals.eventAjaxCallback, function () {
    if (ui.ajax.classNames.indexOf(ui.grid.targetOrdersPrefix) > -1) {
      ui.grid.Start();
    }
  });
})();
"use strict";

/*
 UI Header Sticky JS
 Requires UI Core JS
*/
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

(function () {
  'use strict';
  /*globals window, document, ui */

  var stickyLoad, stickyClear, classList, classes, size, header, body;

  stickyClear = function stickyClear() {
    if (ui.hasClass(header, ui.headerSticky.nameSticky)) {
      body.style.paddingTop = '0';
      ui.removeClass(header, ui.headerSticky.nameSticky);

      if (classes !== null && classes !== '') {
        ui.removeClass(header, classes);
      }
    }
  };

  stickyLoad = function stickyLoad() {
    if (header === undefined) {
      return;
    } // firefox


    if (window.pageYOffset > header.offsetTop) {
      if (size !== '') {
        if (window.innerWidth > ui.globals.xs && size === ui.headerSticky.nameXS) {
          stickyClear();
          return;
        }

        if (window.innerWidth > ui.globals.sm && size === ui.headerSticky.nameSM) {
          stickyClear();
          return;
        }

        if (window.innerWidth > ui.globals.md && size === ui.headerSticky.nameMD) {
          stickyClear();
          return;
        }

        if (window.innerWidth < ui.globals.lg && size === ui.headerSticky.nameLG) {
          stickyClear();
          return;
        }

        if (window.innerWidth < ui.globals.xl && size === ui.headerSticky.nameXL) {
          stickyClear();
          return;
        }
      }

      body.style.paddingTop = header.offsetHeight + 'px';
      ui.addClass(header, ui.headerSticky.nameSticky);

      if (classes !== null && classes !== '') {
        ui.addClass(header, classes);
      }
    } else {
      stickyClear();
    }
  };

  ui.headerSticky.Start = function () {
    header = ui.find('.' + ui.headerSticky.target);

    if (header.length === 0) {
      return;
    }

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
  }; // Loaders


  ui.onload(ui.headerSticky.Start);
  ui.on(window, 'scroll', stickyLoad);
  ui.on(document, ui.globals.eventDomChange, stickyLoad);
})();
"use strict";

/*
 UI Imgupload JS
 Requires UI Core JS
*/
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
  ratio: '4:3',
  // activated when resize: false
  resize: true,
  // resize images
  resizeWidth: 1024,
  // resize width
  resizeHeight: 768,
  // resize height
  fill: false,
  // fill blank areas
  fillColor: 'hsl(0, 0%, 100%)',
  // fill color
  fit: true,
  // crop to fit images
  newID: 1000000,
  // start new ids from
  types: ['jpg', 'jpeg', 'png', 'gif'],
  // add your allowed file types
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

(function () {
  'use strict';
  /*globals document, ui, setTimeout, Image, FileReader, FormData, atob, Uint8Array, Blob, confirm, alert */

  ui.imgUpload.Start = function () {
    var uploaders, savedImgs;

    function loadFiles(uploader, files) {
      var i, ext, c, ctx, data, img, imgLoaded, w, h, r, size, allowed, showTimer, readers, listCont, list, loaded, loadImages, loadImagesAfter, html, newItem;

      if (files.length > 0) {
        // check allowed file types
        allowed = [];

        for (i = 0; i < files.length; i++) {
          ext = files[i].name.split('.')[1].toLowerCase();

          if (ext !== null) {
            ext = ext.toString();

            if (ui.imgUpload.types.indexOf(ext) > -1) {
              allowed.push(files[i]);
            }
          }
        }

        if (allowed.length === 0) {
          return;
        } // stop when all file types not allowed
        // load images


        readers = [];
        img = [];
        imgLoaded = [];
        w = [];
        h = [];
        html = '';
        loaded = 0;
        c = document.createElement("canvas");
        ctx = c.getContext("2d");
        ui.addClass(uploader, ui.imgUpload.nameLoading);
        listCont = ui.find('.' + ui.imgUpload.nameList, uploader)[0];
        list = ui.find('.' + ui.imgUpload.nameList + ' ul', uploader)[0];

        loadImages = function loadImages(j, tag) {
          // get width and height
          w[j] = img[j].width;
          h[j] = img[j].height; // get ratio

          r = ui.imgUpload.ratio.split(':');

          if (r.length !== 2) {
            r = '';
          }

          if (ui.imgUpload.resize && !savedImgs) {
            // resize images
            if (w[j] > h[j]) {
              // horizontal image
              h[j] = h[j] / w[j] * ui.imgUpload.resizeWidth;
              w[j] = ui.imgUpload.resizeWidth;

              if (h[j] > ui.imgUpload.resizeHeight) {
                w[j] = w[j] / h[j] * ui.imgUpload.resizeHeight;
                h[j] = ui.imgUpload.resizeHeight;
              }
            } else {
              // vertical image
              w[j] = w[j] / h[j] * ui.imgUpload.resizeHeight;
              h[j] = ui.imgUpload.resizeHeight;

              if (w[j] > ui.imgUpload.resizeWidth) {
                h[j] = h[j] / w[j] * ui.imgUpload.resizeWidth;
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
                if (w[j] > h[j]) {
                  // horizontal image
                  c.width = w[j];
                  c.height = r[1] / r[0] * w[j];
                } else {
                  // vertical image
                  c.width = r[0] / r[1] * h[j];
                  c.height = h[j];
                }
              }
            } else {
              c.width = w[j];
              c.height = h[j];
            }
          }

          if (ui.imgUpload.fit && !savedImgs) {
            // crop to fit images
            if (ui.imgUpload.resize) {
              c.width = ui.imgUpload.resizeWidth;
              c.height = ui.imgUpload.resizeHeight;
            } else {
              if (w[j] > h[j]) {
                // horizontal image
                c.width = r[0] / r[1] * h[j];
                c.height = h[j];
              } else {
                // vertical image
                c.width = w[j];
                c.height = r[1] / r[0] * w[j];
              }
            }

            ctx.drawImage(img[j], 0, 0, c.width, c.height);
          } else {
            if (ui.imgUpload.fill && !savedImgs) {
              // fill blank areas
              ctx.fillStyle = ui.imgUpload.fillColor;
              ctx.fillRect(0, 0, c.width, c.height);
              ctx.drawImage(img[j], (c.width - w[j]) / 2, (c.height - h[j]) / 2, w[j], h[j]);
            } else {
              ctx.drawImage(img[j], 0, 0, w[j], h[j]);
            }
          }

          data = c.toDataURL("image/jpeg"); // calculate new image file size from new base64

          size = data.split(',')[1].length;
          size = 4 * Math.ceil(size / 3) * 0.5624896334383812 / 1000;
          size = size.toFixed(0);
          imgLoaded[j] = [];
          imgLoaded[j].name = allowed[j].name;
          imgLoaded[j].data = data;
          imgLoaded[j].size = size;
          imgLoaded[j].tag = tag;

          if (savedImgs) {
            // get saved image's id
            imgLoaded[j].id = allowed[j].id;
          } else {
            // define a new id
            ui.imgUpload.newID += 1;
            imgLoaded[j].id = ui.imgUpload.newID;
          }
        };

        loadImagesAfter = function loadImagesAfter() {
          loaded += 1;

          if (loaded === allowed.length) {
            setTimeout(function () {
              ui.each(imgLoaded, function (k) {
                if (imgLoaded[k] !== undefined) {
                  // return when image loading failed
                  html += '<' + ui.imgUpload.tagList + ' class="' + ui.imgUpload.nameOpenEase + '">' + '<span class="' + ui.imgUpload.targetImages + '">' + '<img id="' + imgLoaded[k].id + '" src="' + imgLoaded[k].data + '" draggable="false">' + '</span>' + '<' + ui.imgUpload.tagNames + ' class="' + ui.imgUpload.targetNames + '">' + imgLoaded[k].name + '</' + ui.imgUpload.tagNames + '>' + '<' + ui.imgUpload.tagInfos + ' class="' + ui.imgUpload.targetInfos + '">' + imgLoaded[k].size + 'kb' + '</' + ui.imgUpload.tagInfos + '>';

                  if (imgLoaded[k].tag !== '') {
                    // add tags
                    html += '<span class="' + ui.imgUpload.targetTags + '">' + imgLoaded[k].tag + '</span>';
                  }

                  html += '</' + ui.imgUpload.tagList + '>';
                }
              });
              list.insertAdjacentHTML('afterbegin', html);
            }, 0);
            ui.addClass(listCont, ui.imgUpload.nameOpen);

            if (savedImgs) {
              showTimer = ui.globals.slow;
            } else {
              showTimer = ui.globals.ease;
            }

            setTimeout(function () {
              newItem = ui.find('.' + ui.imgUpload.nameList + ' ' + ui.imgUpload.tagList + '.' + ui.imgUpload.nameOpenEase, listCont);
              ui.each(newItem, function (k) {
                setTimeout(function () {
                  ui.removeClass(newItem[k], ui.imgUpload.nameOpenEase);
                }, ui.globals.fast / 2 * k);
              }); // empty variables

              allowed = [];
              readers = [];
              img = [];
              imgLoaded = [];
              w = [];
              h = [];
              html = '';
            }, showTimer);
            setTimeout(function () {
              ui.removeClass(uploader, ui.imgUpload.nameLoading);
            }, showTimer);
          }
        };

        ui.each(allowed, function (i) {
          if (savedImgs) {
            // array: get images saved before
            img[i] = new Image();
            img[i].src = allowed[i].name;

            img[i].onload = function () {
              loadImages(i, allowed[i].tag);
              loadImagesAfter(); // end of images
            };

            img[i].onerror = function () {
              if (ui.alerts === undefined) {
                alert(ui.imgUpload.msgImgError);
              } else {
                ui.alerts.message({
                  msg: allowed[i].name + ' ' + ui.imgUpload.msgImgError,
                  theme: ui.alerts.themeDanger
                });
              }

              loadImagesAfter(); // end of images
            };
          } else {
            // FileList object: get images from user selected
            readers[i] = new FileReader(); // filereader API

            readers[i].readAsDataURL(allowed[i]);

            readers[i].onload = function () {
              img[i] = new Image();
              img[i].src = this.result;

              img[i].onload = function () {
                loadImages(i, '');
              };
            };

            readers[i].onloadend = loadImagesAfter; // end of images
          }
        });
      }
    } // load saved before images


    uploaders = ui.find('.' + ui.imgUpload.target);
    ui.each(uploaders, function () {
      var i, list, imported, img, id, tag;
      i = -1;
      imported = [];
      list = ui.find('.' + ui.imgUpload.nameList + ' li', this);
      ui.each(list, function () {
        img = this.getAttribute(ui.imgUpload.dataSrc);

        if (img !== null && img !== '') {
          id = this.getAttribute(ui.imgUpload.dataID);

          if (id !== null && id !== '') {
            i += 1;
            imported[i] = [];
            imported[i].name = img;
            imported[i].id = id;
            imported[i].tag = '';
            tag = this.getAttribute(ui.imgUpload.dataTag);

            if (tag !== null) {
              imported[i].tag = tag;
            }
          }
        }

        this.parentNode.removeChild(this);
      });
      savedImgs = true;
      loadFiles(this, imported); // empty variables

      imported = [];
    }); // Event Listeners

    ui.on(document, 'dragenter', '.' + ui.imgUpload.target, function (e) {
      e.preventDefault();
      e.stopPropagation();
      var that, uploader;
      ui.addClass(this, ui.imgUpload.nameDrop);
      that = this;
      ui.on('body', 'dragover.' + ui.imgUpload.eventUploader, function (ev) {
        ev.preventDefault();
        ev.stopPropagation();
        uploader = ui.closest(ev.target, '.' + ui.imgUpload.target)[0];

        if (uploader === undefined) {
          ui.removeClass(that, ui.imgUpload.nameDrop);
        } else {
          ui.addClass(that, ui.imgUpload.nameDrop);
        }
      });
    });
    ui.on('body', 'drop', function (e) {
      e.preventDefault();
      e.stopPropagation();
      var uploader = ui.closest(e.target, '.' + ui.imgUpload.target)[0];

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
    ui.on(document, 'change', '.' + ui.imgUpload.target + ' input[type="file"]', function () {
      var uploader = ui.closest(this, '.' + ui.imgUpload.target)[0];
      savedImgs = false;
      loadFiles(uploader, this.files);
    });

    function toBlob(base, type, sliceSize) {
      // convert base64 images to blob
      var i, j, byteCharacters, byteArray, byteArrays, slice, byteNumbers, blob;
      type = type || '';
      sliceSize = sliceSize || 512;
      byteCharacters = atob(base);
      byteArrays = [];

      for (j = 0; j < byteCharacters.length; j += sliceSize) {
        slice = byteCharacters.slice(j, j + sliceSize);
        byteNumbers = new Array(slice.length);

        for (i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i);
        }

        byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
      }

      blob = new Blob(byteArrays, {
        type: type
      });
      return blob;
    }

    ui.on(document, 'submit', '.' + ui.imgUpload.target + ' form', function (e) {
      e.preventDefault();
      var fnc, that, formData, uploader, list, file, tag, img, imgType, confirmed;
      that = this;

      fnc = function fnc() {
        formData = new FormData(); // formdata API

        uploader = ui.closest(that, '.' + ui.imgUpload.target)[0];
        list = ui.find('.' + ui.imgUpload.nameList + ' ' + ui.imgUpload.tagList, uploader);
        ui.each(list, function (i) {
          file = ui.find('.' + ui.imgUpload.targetImages + ' img', this)[0];
          formData.append(ui.imgUpload.formDataID + '[' + i + ']', file.id); // add id

          tag = ui.find('.' + ui.imgUpload.targetTags, this)[0];

          if (tag !== undefined) {
            tag = tag.textContent;
          } else {
            tag = '';
          }

          formData.append(ui.imgUpload.formDataTag + '[' + i + ']', tag); // add image tag

          img = file.src.split(";");
          imgType = img[0].split(":")[1]; // get image type

          img = img[1].split(",")[1];
          img = toBlob(img, imgType); // convert to blob to using server's file protocol

          formData.append(ui.imgUpload.formDataImg + '[' + i + ']', img); // add image file
        });
        ui.addClass(uploader, ui.imgUpload.nameUploading);
        ui.ajax({
          type: 'POST',
          url: that.action,
          data: formData,
          callback: function callback(status, response) {
            ui.removeClass(uploader, ui.imgUpload.nameUploading);

            if (status === 'success') {
              // check ajax connection
              response = JSON.parse(response);

              if (ui.alerts === undefined) {
                alert(response.message); // show server message
              } else {
                if (response.success === true) {
                  // check server connection
                  ui.alerts.message({
                    msg: response.message,
                    // show server message
                    theme: ui.alerts.themeSuccess
                  });
                } else {
                  ui.alerts.message({
                    msg: response.message,
                    // show server message
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
        confirmed = confirm(ui.imgUpload.msgBeforeUpload);

        if (confirmed) {
          fnc();
        }
      } else {
        ui.alerts.dialog({
          msg: ui.imgUpload.msgBeforeUpload,
          callback: function callback(val) {
            if (val === ui.alerts.successBtnValue) {
              fnc();
            }
          }
        });
      }
    });
    ui.on(document, 'click', '.' + ui.imgUpload.nameLoading + ',.' + ui.imgUpload.nameUploading, function (e) {
      // prevent clicks when loading and uploading
      e.preventDefault();
      e.stopPropagation();
    });
  }; // Loaders


  ui.onload(ui.imgUpload.Start);
})();
"use strict";

/*
 UI Line Chart JS
 Requires UI Core JS
*/
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
  colors: ['hsl(30, 100%, 63%)', 'hsl(347, 100%, 69%)', 'hsl(260, 100%, 70%)', 'hsl(180, 48%, 52%)', 'hsl(42, 100%, 67%)', 'hsl(13, 26%, 41%)', 'hsl(65, 49%, 54%)', 'hsl(0, 0%, 42%)', 'hsl(225, 43%, 57%)'],
  showGrid: true,
  showGridText: true,
  showInfo: true,
  rows: 5,
  rowsHeight: 50,
  curveSize: 10,
  gridStroke: 1,
  gridStrokeArray: 4,
  lineStroke: 2,
  circleSize: 4,
  top: 6,
  right: 8,
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

(function () {
  'use strict';
  /*globals window, document, ui */

  var loadCharts; // load charts

  ui.lineChart.Start = function () {
    var i, j, k, charts, lines, data, x, y, yMax, yMin, link, size, rows, rowsHeight, col, posX, posY, html, type, pathStart, paths, circles, total, name;

    loadCharts = function loadCharts(method, resizer) {
      if (method === ui.lineChart.nameLoaded) {
        charts = ui.find('.' + ui.lineChart.target + '.' + ui.lineChart.nameLoaded);
      } else if (method === ui.globals.eventDomChange) {
        charts = ui.find('.' + ui.lineChart.target + ':not(.' + ui.lineChart.nameLoaded + '):not(.' + ui.lineChart.nameResized + ')');
        ui.removeClass('.' + ui.lineChart.target, ui.lineChart.nameResized);
      } else {
        charts = ui.find('.' + ui.lineChart.target + ':not(.' + ui.lineChart.nameLoaded + ')');
      }

      if (charts.length === 0) {
        return;
      }

      ui.each(charts, function () {
        lines = ui.find('.' + ui.lineChart.nameLines, this);

        if (lines.length === 0) {
          return;
        }

        data = [];
        data.name = [];
        data.color = [];
        data.backup = [];

        if (resizer !== undefined && resizer) {
          ui.addClass(this, ui.lineChart.nameLoaded + ' ' + ui.lineChart.nameResized);
        } else {
          ui.addClass(this, ui.lineChart.nameLoaded);
        } // calculate height of chart


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
        data.height = rows * rowsHeight; // read all x parameters

        x = this.getAttribute(ui.lineChart.dataX);

        if (x !== null && x !== '') {
          data.x = x.split(',');
        } else {
          return;
        }

        x = data.x; // read all y parameters

        yMax = [];
        data.pass = false;
        ui.each(lines, function (i) {
          data[i] = [];
          data[i].y = [];
          data[i].links = [];
          data.backup += this.outerHTML;
          ui.each(ui.find(ui.lineChart.tagLines, this), function () {
            y = this.getAttribute(ui.lineChart.dataY);

            if (y !== null && y !== '') {
              data[i].y.push(y);
            } else {
              return;
            }

            link = this.getAttribute(ui.lineChart.dataLink);

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

        if (data.pass) {
          return;
        } // get min and max values of all y datas


        yMax = yMax.toString().split(',');
        yMax = yMax.filter(function (item, pos) {
          // convert array as unique
          return yMax.indexOf(item) === pos;
        });
        yMax = yMax.sort(function (a, b) {
          // convert array as desc
          return b - a;
        });
        yMin = parseInt(yMax[yMax.length - 1]);
        yMax = Math.ceil((parseInt(yMax[0]) - yMin) / rows) * rows + yMin; // convert yMax to divide with rows
        // start html

        data.svgHeight = data.height;

        if (ui.lineChart.showInfo || ui.lineChart.showGridText) {
          data.svgHeight += 15;
        }

        html = '<svg style="width: ' + data.width + 'px; height: ' + data.svgHeight + 'px;">'; // check column stepping

        data.step = this.getAttribute(ui.lineChart.dataStep);

        if (data.step !== null && data.step !== '' && data.step !== '0') {
          if (isNaN(data.step)) {
            data.step = false;
          } else {
            data.stepArr = [];

            for (k = 0; k < Math.ceil(x.length / data.step); k++) {
              data.stepArr.push(k * data.step);
            }
          }
        } else {
          data.step = false;
        } // create grids


        col = (data.width - (ui.lineChart.right + ui.lineChart.left)) / (x.length - 1);
        html += '<g class="' + ui.lineChart.nameGridX + '">';

        for (i = 0; i < x.length; i++) {
          posX = i * col + ui.lineChart.left;

          if (ui.lineChart.showGridText) {
            if (data.step) {
              if (data.stepArr.indexOf(i) > -1) {
                html += '<text ' + 'x="' + posX + '" ' + 'y="' + (data.height - ui.lineChart.bottom + 20) + '">' + x[i] + '</text>';
              }
            } else {
              html += '<text ' + 'x="' + posX + '" ' + 'y="' + (data.height - ui.lineChart.bottom + 20) + '">' + x[i] + '</text>';
            }
          }

          if (i === 0 || ui.lineChart.showGrid) {
            html += '<line ' + 'x1="' + posX + '" ' + 'x2="' + posX + '" ' + 'y1="' + ui.lineChart.top + '" ';
          }

          if (i === 0) {
            // root of x grid
            html += 'y2="' + Math.ceil(data.height - (ui.lineChart.bottom + ui.lineChart.gridStroke / 2)) + '" ' + 'class="' + ui.lineChart.nameGridRoot + '" ' + 'stroke-width="' + ui.lineChart.gridStroke + '"';
          } else {
            html += 'y2="' + (data.height - ui.lineChart.bottom) + '" ' + 'stroke-dasharray="' + ui.lineChart.gridStrokeArray + '"';
          }

          html += '></line>';
        }

        html += '</g>' + '<g class="' + ui.lineChart.nameGridY + '">';

        for (i = 0; i <= rows; i++) {
          posY = parseInt(i * (data.height - (ui.lineChart.top + ui.lineChart.bottom)) / rows + ui.lineChart.top);

          if (ui.lineChart.showGridText) {
            html += '<text ' + 'x="' + (ui.lineChart.left - 10) + '" ' + 'y="' + (posY + 4) + '">' + (parseInt((yMax - yMin) / rows) * (rows - i) + yMin) + '</text>';
          }

          if (i === rows || ui.lineChart.showGrid) {
            html += '<line ' + 'x2="' + (data.width - ui.lineChart.right + 1) + '" ' + 'y1="' + posY + '" ' + 'y2="' + posY + '" ';
          }

          if (i >= rows) {
            // root of y grid
            html += 'x1="' + Math.ceil(ui.lineChart.left - ui.lineChart.gridStroke / 2) + '" ' + 'class="' + ui.lineChart.nameGridRoot + '" ' + 'stroke-width="' + ui.lineChart.gridStroke + '"';
          } else {
            html += 'x1="' + Math.floor(ui.lineChart.left + ui.lineChart.gridStroke) + '" ' + 'stroke-dasharray="' + ui.lineChart.gridStrokeArray + '"';
          }

          html += '></line>';
        }

        html += '</g>'; // create svg contents

        circles = '';
        pathStart = [];
        html += '<g>';
        ui.each(lines, function (j) {
          paths = '';
          y = data[j].y; // set color

          if (j > ui.lineChart.colors.length - 1) {
            data.color.push(ui.lineChart.colors[j - ui.lineChart.colors.length]);
          } else {
            data.color.push(ui.lineChart.colors[j]);
          } // create paths and circles


          for (i = 0; i < y.length; i++) {
            posX = i * col + ui.lineChart.left;
            posY = data.height - (data.height + (data.height - (ui.lineChart.top + ui.lineChart.bottom)) * (y[i] - yMax) / (yMax - yMin) - ui.lineChart.top); // get line type

            type = this.getAttribute(ui.lineChart.dataType);

            if (type === null) {
              type = '';
            } // create lines


            if (i === 0) {
              // start point
              pathStart.x = posX;
              pathStart.y = posY;
            }

            if (type.indexOf(ui.lineChart.curved) > -1) {
              // curved
              data.percent = parseInt(ui.lineChart.curveSize * (i * col) / 100);

              if (i === 1) {
                // start curves
                paths += ' C ' + (col + data.percent) + ' ' + (posY - data.percent) + ',' + ' ' + (col + data.percent) + ' ' + posY + ',' + ' ' + posX + ' ' + posY;
              } else if (i > 0) {
                // other curves
                paths += ' S ' + (i * col - data.percent) + ' ' + posY + ',' + ' ' + posX + ' ' + posY;
              }
            } else {
              // default
              if (i > 0) {
                // other points
                paths += ' L ' + posX + ' ' + posY;
              }
            } // create circles


            circles += '<circle ' + 'cx="' + posX + '" ' + 'cy="' + posY + '" ' + 'r="' + ui.lineChart.circleSize + '" ' + 'fill="' + data.color[j] + '" ' + 'stroke="' + data.color[j] + '" ' + 'stroke-width="0" ';

            if (data[j].links[i] !== '') {
              // check links
              circles += 'onclick="location.href = \'' + data[j].links[i] + '\';"';
            }

            if (ui.tooltip === undefined) {
              // Optional!
              circles += '/>' + '<title>' + y[i] + '</title>';
            } else {
              circles += ui.tooltip.dataTooltip + ' ' + 'title="' + y[i] + '" ' + '/>';
            }

            '</circle>';
          } // create paths


          if (type.indexOf(ui.lineChart.dashed) > -1) {
            // dashed
            html += '<path class="' + ui.lineChart.nameTypePrefix + ui.lineChart.dashed + '" ';
          } else if (type.indexOf(ui.lineChart.dotted) > -1) {
            // dotted
            html += '<path class="' + ui.lineChart.nameTypePrefix + ui.lineChart.dotted + '" ';
          } else {
            html += '<path ';
          }

          html += 'd="M ' + pathStart.x + ' ' + pathStart.y + paths + '" ' + 'stroke="' + data.color[j] + '" ' + 'stroke-width="' + ui.lineChart.lineStroke + '" ' + '/>';

          if (type.indexOf(ui.lineChart.filled) > -1) {
            // add filled paths
            data.id = new Date().getTime();
            data.id = data.id.toString();
            data.id = data.id.substring(data.id.length - 4, data.id.length) + j;
            html += '<linearGradient id="' + ui.lineChart.idGradient + data.id + '" x1="0" y1="0" x2="0" y2="100%">' + '<stop offset="0" stop-color="' + data.color[j] + '"></stop>' + '<stop offset="100%" stop-color="' + data.color[j] + '" stop-opacity="0.0"></stop>' + '</linearGradient>' + '<path d="M ' + (pathStart.x + ui.lineChart.gridStroke / 2) + ' ' + pathStart.y + paths + ' V ' + (data.height - ui.lineChart.bottom - ui.lineChart.gridStroke / 2) + ' H ' + (ui.lineChart.gridStroke / 2 + ui.lineChart.left) + ' Z" ' + 'stroke="0" ' + 'fill="url(#' + ui.lineChart.idGradient + data.id + ')" ' + 'stroke-width="' + ui.lineChart.lineStroke + '" ' + 'class="' + ui.lineChart.nameTypePrefix + ui.lineChart.filled + '" ' + '/>';
          } // get data names


          name = this.getAttribute(ui.lineChart.dataName);

          if (name !== null && name !== '') {
            data.name.push(name);
          } else {
            data.name.push('');
          }
        }); // close svg tag

        html += circles + '</g></svg>';

        if (data.width === 0) {
          ui.removeClass(this, ui.lineChart.nameLoaded + ' ' + ui.lineChart.nameResized);
        } // create info


        if (ui.lineChart.showInfo) {
          html += '<ul class="' + ui.lineChart.nameInfo + '">';

          for (i = 0; i < lines.length; i++) {
            total = 0;

            for (j = 0; j < data[i].y.length; j++) {
              total += parseInt(data[i].y[j]);
            }

            html += '<li>' + '<' + ui.lineChart.tagInfoColor + ' style="background: ' + data.color[i] + '">' + '</' + ui.lineChart.tagInfoColor + '>';

            if (data.name[i] === '') {
              html += '<' + ui.lineChart.tagInfoStat + '>' + total;
            } else {
              html += data.name[i] + ': <b>' + total;
            }

            html += '</' + ui.lineChart.tagInfoStat + '></li>';
          }

          html += '</ul>';
        } // parse html


        this.innerHTML = data.backup;
        this.insertAdjacentHTML('beforeEnd', html); // empty variables

        data = [];
        html = '';
      });
    };

    loadCharts(ui.lineChart.nameNotLoaded); // show not loaded charts
  }; // Loaders


  ui.onload(ui.lineChart.Start);
  ui.on(window, 'resize', function () {
    loadCharts(ui.lineChart.nameLoaded, true); // resize loaded charts
  });
  ui.on(document, ui.globals.eventDomChange, function () {
    loadCharts(ui.globals.eventDomChange); // resize loaded charts
  }); // ajax callback loader

  ui.on(document, ui.globals.eventAjaxCallback, function () {
    if (ui.ajax.classNames.indexOf(ui.lineChart.target) > -1) {
      loadCharts(ui.lineChart.nameNotLoaded); // show not loaded charts
    }
  });
})();
"use strict";

/*
 UI Loading Mask JS
 Requires UI Core JS
*/
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
  // values
  loadingBox: '-128 -12 288 288',
  loadingPath: '<path d="M12 12a120 120 0 01120 120"/>'
};

(function () {
  'use strict';
  /*globals ui, window, document, setTimeout */

  var maskItems = [],
      maskHolders = [];

  ui.loadingMask.Start = function () {
    ui.loadingMask.toggle = function (that) {
      var l, i, j, sticky, status, html;
      l = ui.find(that);

      function effectTimers(type) {
        // wait for effects
        function emptyVars(j, l) {
          // empty variables
          if (j === l.length - 1) {
            maskItems = [];
            maskHolders = [];
          }
        }

        if (type === 'hide') {
          setTimeout(function () {
            for (j = 0; j < l.length; j++) {
              maskItems[j].removeChild(maskHolders[j]);
              ui.removeClass(maskItems[j], ui.loadingMask.target + ' ' + ui.loadingMask.nameSticky);
              emptyVars(j, l);
            }
          }, ui.globals.ease);
        } else {
          // show
          setTimeout(function () {
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
          ui.removeClass(maskHolders[i], ui.loadingMask.nameOpenEase);
          maskItems[i] = l[i];
        } else {
          // show loading
          status = 'show';
          html = '<span class="' + ui.loadingMask.nameLoader + ' ' + ui.loadingMask.stylesLoader + '">' + '<span>' + '<svg viewBox="' + ui.loadingMask.loadingBox + '" style="height: ' + l[i].offsetHeight / 2 + 'px;">' + ui.loadingMask.loadingPath + '</svg>' + '</span>' + '</span>';
          l[i].insertAdjacentHTML('afterbegin', html);
          ui.addClass(l[i], ui.loadingMask.target);

          if (l[i].offsetWidth >= window.innerWidth - 15) {
            sticky = true;
          } else {
            sticky = false;
          }

          if (sticky) {
            ui.addClass(l[i], ui.loadingMask.nameSticky);
          }

          maskHolders[i] = ui.find('.' + ui.loadingMask.nameLoader, l[i])[0];
          ui.addClass(maskHolders[i], ui.loadingMask.nameOpen);
        }

        if (i === l.length - 1) {
          effectTimers(status);
        }
      }
    }; // Event Listeners


    ui.on(document, 'click', '.' + ui.loadingMask.target, function (e) {
      e.preventDefault();
      e.stopPropagation();
    });
  }; // Loaders


  ui.onload(ui.loadingMask.Start);
})();
"use strict";

/*
 UI Map JS
 Requires UI Core JS
*/
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

(function () {
  'use strict';
  /*globals window, ui */

  ui.map.Start = function () {
    var map, arr, data, items, opacity;
    map = ui.find('.' + ui.map.target);

    if (map.length === 0) {
      return;
    }

    arr = [];
    ui.each(map, function (i) {
      arr[i] = [];
      items = ui.find(ui.map.tagTarget + '[' + ui.map.dataSize + ']', this);
      ui.each(items, function () {
        data = this.getAttribute(ui.map.dataSize);

        if (data > 0) {
          arr[i].push(data);
        }
      });
      arr[i] = arr[i].sort(function (a, b) {
        return b - a;
      });
      ui.each(items, function () {
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
    }); // Event Listeners

    ui.on(ui.map.tagTarget, 'click', function () {
      var href = this.getAttribute(ui.map.dataHref);

      if (href !== null) {
        window.location = href;
      }
    });
  }; // Loaders


  ui.onload(ui.map.Start);
})();
"use strict";

/*
 UI Modal JS
 Requires UI Core JS
*/
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

(function () {
  'use strict';
  /*globals window, document, ui, setTimeout */

  var pageYPos;

  function modalResizer() {
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
          win.style.width = window.innerWidth - ui.modal.winMargin * 2 + 'px';
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
            win.style.width = window.innerWidth - ui.modal.winMargin * 2 + 'px';
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
          win.style.height = window.innerHeight - ui.modal.winMargin * 2 + 'px';
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
            win.style.width = window.innerWidth - ui.modal.winMargin * 2 + 'px';
            win.style.height = (window.innerWidth - ui.modal.winMargin * 2) / (customW / customH) + 'px';
          }
        }
      }

      win.style.top = Math.floor((bg.offsetHeight - win.offsetHeight) / 2) + 'px';
      win.style.left = Math.floor((bg.offsetWidth - win.offsetWidth) / 2) + 'px';
    }
  }

  ui.modal.Start = function () {
    ui.modal.close = function () {
      var win, bg, removeModal;
      win = ui.find('.' + ui.modal.targetWin + '.' + ui.modal.nameShow);

      if (win.length === 0) {
        return;
      }

      ui.each(win, function () {
        ui.removeClass(this, ui.modal.nameShowEase);
      });
      setTimeout(function () {
        ui.each(win, function () {
          removeModal = ui.find('.' + ui.modal.nameRemovable, win[0]).length;

          if (removeModal > 0) {
            // remove modal window
            win[0].parentNode.removeChild(win[0]);
          } else {
            // hide modal window
            ui.removeClass(this, ui.modal.nameShow);
          }
        });
        bg = ui.find('.' + ui.modal.targetBg);
        ui.removeClass(bg, ui.modal.nameOpenEase);
        ui.removeClass(document, ui.modal.nameModalOpened);

        if (ui.userAgents.mobile) {
          window.scrollTo(0, pageYPos);
        }

        setTimeout(function () {
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

      if (props === undefined) {
        return;
      }

      if (props.source === undefined) {
        return;
      }

      ui.modal.close(); // hide opened modal windows and prevent multiple modal windows

      if (ui.userAgents.mobile) {
        pageYPos = window.pageYOffset; // get current scroll-y position
      } // check closable


      nonClosable = false;

      if (props.closable !== undefined) {
        if (!props.closable) {
          nonClosable = true;
        }
      } // create modal


      function createModal() {
        bg = ui.find('.' + ui.modal.targetBg)[0];
        html = '<div class="' + ui.modal.targetWin;

        if (props.bg !== undefined && props.bg === 'false') {
          html += ' ' + ui.modal.nameWinNoBG;
        }

        html += ' ' + ui.modal.nameActive + '">' + '<div class="' + ui.modal.nameContent + ' ' + ui.modal.stylesContent + '"></div>' + '</div>';

        if (bg === undefined) {
          html += '<div class="' + ui.modal.targetBg + ' ' + ui.modal.stylesModalBg + '"></div>';
        }

        ui.find('body')[0].insertAdjacentHTML('beforeend', html);
        win = ui.find('.' + ui.modal.targetWin + '.' + ui.modal.nameActive)[0];
        content = ui.find('.' + ui.modal.nameContent, win)[0];
      } // check header and footer availability


      function checkHeaderFooter() {
        if (ui.find('.' + ui.modal.nameHeader, content)[0] !== undefined) {
          ui.addClass(content, ui.modal.nameHasHeader);
        }

        if (ui.find('.' + ui.modal.nameFooter, content)[0] !== undefined) {
          ui.addClass(content, ui.modal.nameHasFooter);
        }
      } // complete modal


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
          getSize = function getSize() {
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
            } else {
              getSize();
            }
          } else {
            getSize();
          }
        } // set closable


        if (nonClosable) {
          ui.removeClass(win, ui.modal.nameClosable);
        } else {
          ui.addClass(win, ui.modal.nameClosable);
        } // add/remove close button


        closeBtn = ui.find('.' + ui.modal.nameModalClose, win)[0];

        if (nonClosable) {
          if (closeBtn !== undefined) {
            closeBtn.parentNode.removeChild(closeBtn);
          }
        } else {
          if (closeBtn === undefined) {
            closeBtn = '<button class="' + ui.modal.nameModalClose + ' ' + ui.modal.stylesCloseBtn + '">' + '<svg class="' + ui.modal.nameIcon + '"><use href="#' + ui.modal.closeIcon + '"/></svg>' + '</button>';
            content.insertAdjacentHTML('afterbegin', closeBtn);
          }
        } // showing modal


        ui.addClass(document, ui.modal.nameModalOpened);
        bg = ui.find('.' + ui.modal.targetBg);
        ui.addClass(bg, ui.modal.nameOpen);
        setTimeout(function () {
          ui.addClass(bg, ui.modal.nameOpenEase);
          setTimeout(function () {
            ui.addClass(win, ui.modal.nameShow);
            content.style.top = Math.floor((bg[0].offsetHeight - content.offsetHeight) / 2) + 'px';
            content.style.left = Math.floor((bg[0].offsetWidth - content.offsetWidth) / 2) + 'px';

            if (size !== undefined && size !== ui.modal.nameFullscreen) {
              // inherit fixed size && fullscreen
              content.style.width = content.offsetWidth + 'px';
              content.setAttribute(ui.modal.dataOpenSize, content.offsetWidth);
              content.style.height = content.offsetHeight + 'px';
            }

            setTimeout(function () {
              ui.addClass(win, ui.modal.nameShowEase);
              ui.removeClass(win, ui.modal.nameActive);
              modalResizer();
              setTimeout(function () {
                // wait for modal dom is ready
                ui.trigger(document, ui.globals.eventDomChange); // set custom event
              }, ui.globals.ease); // callback

              if (props.callback !== undefined) {
                setTimeout(function () {
                  // wait for modal dom is ready
                  props.callback.call(content);
                }, ui.globals.ease * 2);
              }
            }, 10);
          }, ui.globals.ease);
        }, 10);
      } // get source


      if (props.type === undefined) {
        // inner sources
        // check the modal created before
        props.source = ui.find(props.source);

        if (props.source[0] === undefined) {
          return;
        }

        created = ui.closest(props.source, '.' + ui.modal.targetWin);

        if (created.length > 0) {
          // modal created before
          ui.addClass(created, ui.modal.nameActive);
          win = ui.find('.' + ui.modal.targetWin + '.' + ui.modal.nameActive)[0];
          content = ui.find('.' + ui.modal.nameContent, win)[0];
          showModal(); // reset forms

          forms = ui.find('form', content);
          ui.each(forms, function () {
            this.reset();
          });
        } else {
          // create modal
          // move source
          temp = document.createDocumentFragment();
          ui.each(props.source, function (i) {
            temp.appendChild(props.source[i]);
          });
          createModal();
          content.appendChild(temp);
          checkHeaderFooter();
          showModal();
        }
      } else {
        // other source types
        typeArr = [ui.modal.typeAjax, ui.modal.typeIframe];

        if (typeArr.indexOf(props.type) > -1) {
          type = props.type;
        }

        if (type === ui.modal.typeIframe) {
          // iframe sources
          temp = '<iframe ' + 'class="' + ui.modal.nameIframe + ' ' + ui.modal.nameRemovable + '" ' + 'src="' + props.source + '" ' + 'frameborder="0" ' + 'allowfullscreen' + '>' + '</iframe>';
          createModal();
          content.insertAdjacentHTML('beforeend', temp);
          showModal();
        } else if (type === ui.modal.typeAjax) {
          // ajax sources
          ui.ajax({
            url: props.source,
            callback: function callback(status, response) {
              if (status === 'success') {
                temp = '<div class="' + ui.modal.target + ' ' + ui.modal.nameRemovable + '">' + response + '</div>';
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
    }; // Event Listeners


    function userClose() {
      var p = ui.find('.' + ui.modal.targetWin + '.' + ui.modal.nameShow + '.' + ui.modal.nameClosable)[0];

      if (p !== undefined) {
        ui.modal.close();
      }
    }

    ui.on(document, 'click', '.' + ui.modal.nameModalClose, ui.modal.close);
    ui.on(document, 'click', '.' + ui.modal.targetBg, userClose);
    ui.on(document, 'keydown', function (e) {
      if (e.keyCode === 27) {
        userClose();
      } // esc

    });
  }; // Loaders


  ui.onload(ui.modal.Start);
  ui.on(window, 'resize', modalResizer);
})();
"use strict";

/*
 UI Photoslide JS
 Requires UI Core JS
*/
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
  rexFiles: '(\.png|\.gif|\.jeg|\.jpg|\.svg)$',
  // .webp and .tiff not supported!
  // data attributes
  dataSrc: 'data-ui-src'
};

(function () {
  'use strict';

  var count, dataSrcLists, loadedImages;
  /*globals document, ui, Image */

  function photoSliderLoader() {
    var slider, j, images, dataSrc, nav, navDots, re;
    images = ui.find('.' + ui.photoslide.target + ' img');
    ui.each(images, function (i) {
      if (dataSrcLists[i] !== undefined) {
        return;
      }

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

      if (!dataSrcLists[i][0].match(re)) {
        return;
      }

      images[i].removeAttribute(ui.photoslide.dataSrc); // create nav

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
  }

  ui.photoslide.Start = function () {
    // empty arrays when reloading
    count = [];
    dataSrcLists = [];
    loadedImages = [];
    photoSliderLoader(); // Event Listeners

    ui.on(document, 'click', '.' + ui.photoslide.target + ' .' + ui.photoslide.nameBtn, function (e) {
      e.preventDefault();
      var slider, i, img, total, dots;
      slider = ui.closest(this, '.' + ui.photoslide.target)[0];

      if (slider === undefined) {
        return;
      }

      img = ui.find('img', slider)[0];
      i = Array.prototype.slice.call(ui.find('.' + ui.photoslide.target)).indexOf(slider);

      if (count[i] === undefined) {
        count[i] = 0;
      }

      total = dataSrcLists[i].length - 1;

      if (ui.hasClass(this, ui.photoslide.namePrev)) {
        if (count[i] <= 0) {
          count[i] = 0;
          return;
        }

        count[i] -= 1;
      } else if (ui.hasClass(this, ui.photoslide.nameNext)) {
        if (count[i] >= total) {
          count[i] = total;
          return;
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

        loadedImages[i][count[i]].onload = function () {
          img.src = loadedImages[i][count[i]].src;
          ui.addClass(slider, ui.photoslide.nameLoaded);
        };

        img.onerror = function () {
          ui.removeClass(slider, ui.photoslide.nameLoaded);
        };
      } else {
        img.src = loadedImages[i][count[i]].src;
        ui.addClass(slider, ui.photoslide.nameLoaded);
      }
    });
  }; // Loaders


  ui.onload(ui.photoslide.Start); // ajax callback loader

  ui.on(document, ui.globals.eventAjaxCallback, function () {
    if (ui.ajax.classNames.indexOf(ui.photoslide.target) > -1) {
      photoSliderLoader();
    }
  });
})();
"use strict";

/*
 UI Pie Chart JS
 Requires UI Core JS
*/
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
  // values
  opacityShowTitle: '.25',
  // data attributes
  dataPercent: 'data-ui-percent',
  dataFill: 'data-ui-fill',
  dataTitle: 'data-ui-title'
};

(function () {
  'use strict';
  /*globals window, document, ui, setTimeout */

  var loadCharts;

  function chartsResizer() {
    var chart, elems;
    chart = ui.find('.' + ui.pieChart.target);

    if (chart.length < 1) {
      return;
    }

    ui.each(chart, function () {
      elems = ui.find(ui.pieChart.tagDatasHolder, this)[0];
      elems.style.height = elems.offsetWidth + 'px';
    });
  }

  ui.pieChart.Start = function () {
    loadCharts = function loadCharts() {
      var chart, elems, deg, textDeg, loadFnc, arr, fill, percent, html, title, msgHolder, msg;
      chart = ui.find('.' + ui.pieChart.target);

      if (chart.length < 1) {
        return;
      }

      arr = [];

      loadFnc = function loadFnc(parent, that, i) {
        percent = that.getAttribute(ui.pieChart.dataPercent);

        if (percent === null && percent === '') {
          percent = 0;
        }

        fill = that.getAttribute(ui.pieChart.dataFill);

        if (fill !== null && fill !== '') {
          that.style.color = fill;
        }

        deg = percent * 360 / 100;

        if (deg > 180) {
          html = '<' + ui.pieChart.tagPiesHolder + ' class="' + ui.pieChart.namePieLeft + '">' + '<' + ui.pieChart.tagPie + ' style="-ms-transform: rotate(' + (deg - 180) + 'deg); transform: rotate(' + (deg - 180) + 'deg);">' + '</' + ui.pieChart.tagPie + '>' + '</' + ui.pieChart.tagPiesHolder + '>' + '<' + ui.pieChart.tagPiesHolder + ' class="' + ui.pieChart.namePieRight + '">' + '<' + ui.pieChart.tagPie + '>' + '</' + ui.pieChart.tagPie + '>' + '</' + ui.pieChart.tagPiesHolder + '>';
        } else {
          html = '<' + ui.pieChart.tagPiesHolder + ' class="' + ui.pieChart.namePieRight + '">' + '<' + ui.pieChart.tagPie + ' style="-ms-transform: rotate(' + deg + 'deg); transform: rotate(' + deg + 'deg);">' + '</' + ui.pieChart.tagPie + '>' + '</' + ui.pieChart.tagPiesHolder + '>';
        }

        that.insertAdjacentHTML('beforeEnd', html);

        if (arr[i - 1] === undefined) {
          arr[i - 1] = 0;
        }

        textDeg = arr[i - 1] - 90 + deg / 2;
        html = '<' + ui.pieChart.tagMsg + ' style="-ms-transform: rotate(' + textDeg + 'deg) translateY(-50%); transform: rotate(' + textDeg + 'deg) translateY(-50%);">' + '<' + ui.pieChart.tagTitle + ' style="-ms-transform: rotate(' + -textDeg + 'deg); transform: rotate(' + -textDeg + 'deg);">' + percent + '%' + '</' + ui.pieChart.tagTitle + '>' + '</' + ui.pieChart.tagMsg + '>';
        msgHolder = ui.find(ui.pieChart.tagMsgHolder, parent)[0];

        if (msgHolder === undefined) {
          parent.insertAdjacentHTML('beforeEnd', '<' + ui.pieChart.tagMsgHolder + '></' + ui.pieChart.tagMsgHolder + '>');
          msgHolder = ui.find(ui.pieChart.tagMsgHolder, parent)[0];
        }

        msgHolder.insertAdjacentHTML('beforeEnd', html);
        title = that.getAttribute(ui.pieChart.dataTitle);

        if (title !== null && title !== '') {
          // add titles for dataTitle attributes
          msg = ui.find(ui.pieChart.tagMsg, msgHolder)[i];
          msg = ui.find(ui.pieChart.tagTitle, msg)[0];
          msg.setAttribute('title', title);

          if (ui.tooltip !== undefined) {
            // Optional!
            msg.setAttribute(ui.tooltip.dataTooltip, '');
          }
        }

        if (elems.length > 0) {
          i = Array.prototype.slice.call(elems).indexOf(that);

          if (i > 0) {
            that.style.transform = 'rotate(' + arr[i - 1] + 'deg)';
            that.style.msTransform = 'rotate(' + arr[i - 1] + 'deg)';
            arr[i] = arr[i - 1] + deg;
          } else {
            arr[i] = deg;
          }
        }
      };

      ui.each(chart, function () {
        var that = this;
        elems = ui.find(ui.pieChart.tagData, that);
        ui.find(ui.pieChart.tagDatasHolder, this)[0].style.height = that.offsetWidth + 'px';
        ui.each(elems, function (i) {
          loadFnc(that, this, i);
        });

        if (ui.hasClass(document, ui.pieChart.nameNoEffects)) {
          ui.addClass(that, ui.pieChart.nameOpen + ' ' + ui.pieChart.nameOpenEase);
        } else {
          ui.addClass(that, ui.pieChart.nameOpen);
          setTimeout(function () {
            ui.addClass(that, ui.pieChart.nameOpenEase);
          }, ui.globals.slow5x); // wait for animations complete
        }
      });
    };

    loadCharts();
    chartsResizer(); // Event Listeners

    ui.on(document, 'mouseenter mouseleave touchend', '.' + ui.pieChart.target + ' > ' + ui.pieChart.tagMsgHolder + ' ' + ui.pieChart.tagMsg + ' ' + ui.pieChart.tagTitle, function (e) {
      var i, chart, elems, msg;
      chart = ui.closest(this, '.' + ui.pieChart.target)[0];
      elems = ui.find(ui.pieChart.tagData, chart);

      if (e.type === 'mouseleave') {
        ui.each(elems, function () {
          this.style.removeProperty('opacity');
        });
      } else {
        msg = ui.find(ui.pieChart.tagMsgHolder, chart)[0];
        msg = ui.find(ui.pieChart.tagMsg, msg);
        i = Array.prototype.slice.call(msg).indexOf(this.parentElement);
        ui.each(elems, function () {
          this.style.opacity = ui.pieChart.opacityShowTitle;
        });
        elems[i].style.removeProperty('opacity');
      }
    });
  }; // Loaders


  ui.onload(ui.pieChart.Start);
  ui.on(window, 'resize', chartsResizer);
  ui.on(document, ui.globals.eventDomChange, chartsResizer); // ajax callback loader

  ui.on(document, ui.globals.eventAjaxCallback, function () {
    if (ui.ajax.classNames.indexOf(ui.pieChart.target) > -1) {
      loadCharts();
    }
  });
})();
"use strict";

/*
 UI Required Forms JS
 Requires UI Core JS
*/
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

(function () {
  'use strict';
  /*globals window, document, ui */

  ui.requiredForms.Start = function () {
    function required(that, type) {
      var p, parentType, checkHolder, checkForms, holderForms, next, showMsg, hideErr, showErr, min, max, val, reMail, radios, radiosCheck, i;

      hideErr = function hideErr() {
        showMsg = false;
        next = p.nextElementSibling;

        if (ui.hasClass(next, ui.requiredForms.nameMsg)) {
          showMsg = true;
        }

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

      checkForms = function checkForms(t) {
        // show error
        showErr = function showErr() {
          if (t.type === 'radio') {
            radios = ui.find('[type="radio"][name="' + that.name + '"]');
            ui.removeClass(radios, ui.requiredForms.nameSuccess);
          } else {
            ui.removeClass(t, ui.requiredForms.nameSuccess);
          }

          ui.addClass(p, ui.requiredForms.nameError);

          if (showMsg) {
            ui.addClass(next, ui.requiredForms.nameShow);
          }
        }; // check value


        if (type !== ui.requiredForms.targetAccept) {
          val = t.value.toLowerCase();
          val = val.replace(/^\s+|\s+$/g, ''); // remove first and last spaces

          if (val === '') {
            showErr();
          }
        } else {
          if (t.type === 'radio') {
            radiosCheck = 0;
            radios = ui.find('[type="radio"][name="' + t.name + '"]');

            for (i = 0; i < radios.length; i++) {
              if (radios[i].checked) {
                radiosCheck += 1;
              }
            }

            if (radiosCheck === 0) {
              showErr();
            }
          } else {
            if (!t.checked) {
              if (ui.hasClass(t, ui.requiredForms.nameIndeterminate) && t.indeterminate) {
                return;
              }

              showErr();
            }
          }
        } // check min


        if (type !== ui.requiredForms.nameSelect) {
          min = t.getAttribute('minlength');

          if (min !== null && min !== '' && !isNaN(min)) {
            if (val.length < min) {
              showErr();
            }
          }
        } // check min and max numbers


        if (type !== ui.requiredForms.nameSelect) {
          min = t.getAttribute('minnumber');

          if (min !== null && min !== '' && !isNaN(min)) {
            if (!isNaN(val)) {
              if (Number(val) < Number(min)) {
                showErr();
              }
            } else {
              showErr();
            }
          }

          max = t.getAttribute('maxnumber');

          if (max !== null && max !== '' && !isNaN(max)) {
            if (!isNaN(val)) {
              if (Number(val) > Number(max)) {
                showErr();
              }
            } else {
              showErr();
            }
          }
        } // check emails


        if (type === ui.requiredForms.nameTypePrefix + 'email') {
          reMail = new RegExp(ui.requiredForms.rexMail);

          if (val.match(reMail) === null) {
            showErr();
          }
        }
      };

      checkHolder = ui.closest(that, '.' + ui.requiredForms.nameHolder)[0];

      if (checkHolder === undefined) {
        // default forms
        parentType = type;

        if (type !== ui.requiredForms.nameSelect && type !== ui.requiredForms.nameTextarea && type !== ui.requiredForms.targetAccept && type !== ui.requiredForms.nameFile) {
          parentType = ui.requiredForms.nameInput;
        }

        p = ui.closest(that, '.' + parentType)[0];
        hideErr();
        checkForms(that);
      } else {
        // form holders
        p = checkHolder;
        holderForms = ui.find('.' + ui.requiredForms.nameInput + ' input.' + ui.requiredForms.target + ',' + '.' + ui.requiredForms.nameSelect + ' select.' + ui.requiredForms.target, p);
        hideErr();
        ui.each(holderForms, function () {
          if (this.tagName === 'SELECT') {
            type = ui.requiredForms.nameSelect;
          } else {
            type = this.getAttribute('type');

            if (type === null || type === '') {
              return;
            }

            if (type === 'text') {
              type = ui.requiredForms.nameInput;
            } else {
              type = ui.requiredForms.nameTypePrefix + type;
            }
          }

          checkForms(this);
        });
      }
    } // Event Listeners


    ui.on(document, 'submit', 'form', function (e) {
      var i, elems, formElems, success, getIndex, getRect, scrollIndex, scrollPos;
      formElems = [];
      elems = e.target.elements; // get submitted element list

      for (i = 0; i < elems.length; i++) {
        // filter required elements
        if (ui.hasClass(elems[i], ui.requiredForms.target) && !elems[i].disabled) {
          // extract disabled elements
          formElems.push(elems[i]);
        }
      }

      if (formElems.length === 0) {
        return;
      }

      success = 0;
      getIndex = 0;

      if (formElems.length !== success) {
        ui.each(formElems, function () {
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

        if (ui.hasClass(document, ui.modal.nameModalOpened)) {
          // stop scrolling when modal opened
          return;
        }

        scrollPos = window.pageYOffset;
        getRect = formElems[scrollIndex].getBoundingClientRect();
        scrollIndex = getRect.top - getRect.height * 2 + scrollPos - ui.requiredForms.scrollingTopSpacing;
        window.scrollTo(0, scrollIndex);
      } else {
        return;
      }
    });
    ui.on(document, 'keyup', '.' + ui.requiredForms.nameInput + ' input.' + ui.requiredForms.target, function () {
      required(this, ui.requiredForms.nameTypePrefix + this.type);
    });
    ui.on(document, 'change', '.' + ui.requiredForms.nameSelect + ' select.' + ui.requiredForms.target, function () {
      required(this, ui.requiredForms.nameSelect);
    });
    ui.on(document, 'keyup', '.' + ui.requiredForms.nameTextarea + ' textarea.' + ui.requiredForms.target, function () {
      required(this, ui.requiredForms.nameTextarea);
    });
    ui.on(document, 'change', '.' + ui.requiredForms.targetAccept + ' input.' + ui.requiredForms.target, function () {
      required(this, ui.requiredForms.targetAccept);
    });
    ui.on(document, 'change', '.' + ui.requiredForms.nameFile + ' input.' + ui.requiredForms.target, function () {
      required(this, ui.requiredForms.nameFile);
    });
  }; // Loaders


  ui.onload(ui.requiredForms.Start);
})();
"use strict";

/*
 UI Sidebar JS
 Requires UI Core JS
*/
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

(function () {
  'use strict';
  /*globals window, document, ui, setTimeout */

  var getScrollPos;

  ui.sidebar.close = function (panel) {
    var i, id, el, contents, bg;
    bg = ui.find('.' + ui.sidebar.targetBg)[0];
    ui.removeClass(panel, ui.sidebar.nameOpenEase);
    ui.removeClass(bg, ui.sidebar.nameOpenEase);
    ui.removeClass(document, ui.sidebar.nameOpened);
    setTimeout(function () {
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

  ui.sidebar.Start = function () {
    // Event Listeners
    ui.on(document, 'click', '[class*="' + ui.sidebar.nameShowMenuPrefix + '"]', function () {
      var html, importers, moveFnc, id, i, j, index, indexArr, position, bg, panel, filtered, content;
      html = [];
      position = ui.sidebar.nameLeftSuffix;

      if (ui.hasClass(this, ui.sidebar.nameShowMenuPrefix + ui.sidebar.nameRightSuffix)) {
        position = ui.sidebar.nameRightSuffix;
      }

      moveFnc = function moveFnc(that, j) {
        id = new Date().getTime();
        id = id.toString();
        id = id.substring(id.length - 4, id.length) + j;
        that.insertAdjacentHTML('beforebegin', '<' + ui.sidebar.tagDataTarget + ' class="' + ui.sidebar.nameTargetPrefix + id + '" style="display: none;">' + '</' + ui.sidebar.tagDataTarget + '>');
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
      } else {
        return;
      }

      panel = ui.find('.' + ui.sidebar.target + '.' + ui.sidebar.nameShowPrefix + position);
      content = ui.find('.' + ui.sidebar.nameContent, panel);
      filtered = html.filter(function (el) {
        return el != null;
      });

      for (j = 0; j < filtered.length; j++) {
        content.appendChild(filtered[j]);
      }

      bg = ui.find('.' + ui.sidebar.targetBg)[0];

      if (bg === undefined) {
        ui.find('body')[0].insertAdjacentHTML('beforeend', '<div class="' + ui.sidebar.targetBg + ' ' + ui.sidebar.stylesBg + '"></div>');
        bg = ui.find('.' + ui.sidebar.targetBg)[0];
      }

      ui.addClass(document, ui.sidebar.nameOpened);
      ui.addClass(panel, ui.sidebar.nameOpen);
      ui.addClass(bg, ui.sidebar.nameOpen);
      setTimeout(function () {
        ui.addClass(panel, ui.sidebar.nameOpenEase);
        ui.addClass(bg, ui.sidebar.nameOpenEase);
        setTimeout(function () {
          ui.trigger(document, ui.sidebar.eventMenuOpen + ' ' + ui.globals.eventDomChange); // set custom event
        }, ui.globals.slow);
      }, 10);
      ui.on('.' + ui.sidebar.nameClose, 'click', function () {
        ui.sidebar.close(panel);
      });
    });
    ui.on(document, 'click', '.' + ui.sidebar.targetBg, function () {
      var panel = ui.find('.' + ui.sidebar.target + '.' + ui.sidebar.nameOpen);
      ui.sidebar.close(panel);
    });
  }; // Loaders


  ui.onload(ui.sidebar.Start);
  ui.on(window, 'resize', function () {
    if (window.innerWidth === getScrollPos) {
      return;
    } // close only horizontal resizing


    var panel = ui.find('.' + ui.sidebar.target + '.' + ui.sidebar.nameOpen);

    if (panel.length > 0) {
      ui.sidebar.close(panel);
    }

    getScrollPos = window.innerWidth;
  });
})();
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
 UI Tab JS
 Requires UI Core JS
*/
ui.tab = {
  // targets
  targetParent: 'ui-tab-holder',
  targetTab: 'ui-tab',
  // main classnames
  nameContent: 'ui-tab-content',
  nameToggle: 'ui-tab-toggle',
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

(function () {
  'use strict';
  /*globals document, ui, setTimeout */

  ui.tab.Start = function () {
    // Event Listeners
    ui.on(document, 'click', '.' + ui.tab.targetParent + ' .' + ui.tab.targetTab, function (e) {
      e.preventDefault();
      var parent, tabs, index, innerTabs, outerTabs, id, content, lastOpened, innerContent, outerContent, currentContent, currentHeight, classes, toggle;
      outerTabs = [];
      outerContent = [];
      parent = ui.closest(this, '.' + ui.tab.targetParent)[0];
      tabs = ui.find('.' + ui.tab.targetTab, parent); // check inner tabs

      innerTabs = ui.find('.' + ui.tab.targetParent + ' .' + ui.tab.targetParent + ' .' + ui.tab.targetTab, parent);
      innerTabs = Array.prototype.slice.call(innerTabs);
      ui.each(tabs, function () {
        if (innerTabs.indexOf(this) === -1) {
          outerTabs.push(this);
        }
      });

      if (outerTabs.length !== 0) {
        tabs = outerTabs;
      }

      index = Array.prototype.slice.call(tabs).indexOf(this);
      content = ui.find('.' + ui.tab.nameContent, parent); // check inner contents

      innerContent = ui.find('.' + ui.tab.targetParent + ' .' + ui.tab.targetParent + ' .' + ui.tab.nameContent, parent);
      innerContent = Array.prototype.slice.call(innerContent);
      ui.each(content, function () {
        if (innerContent.indexOf(this) === -1) {
          outerContent.push(this);
        }
      });

      if (outerContent.length !== 0) {
        content = outerContent;
      } // check ids


      id = this.getAttribute(ui.tab.dataID);

      if (id !== null & id !== '') {
        currentContent = ui.find('#' + id, parent)[0];
      } else {
        currentContent = content[index];
      }

      toggle = false;
      classes = parent.getAttribute(ui.tab.dataClasses);

      if (ui.hasClass(this, ui.tab.nameToggle)) {
        toggle = true;
      }

      if (ui.hasClass(this, ui.tab.nameActive)) {
        if (toggle) {
          currentContent.style.height = currentContent.offsetHeight + 'px';
          currentContent.style.overflow = 'hidden';
          setTimeout(function () {
            currentContent.style.height = '0';
            setTimeout(function () {
              if (classes) {
                ui.toggleClass(tabs[index], classes);
              }

              ui.removeClass(tabs[index], ui.tab.nameActive);
              ui.removeClass(currentContent, ui.tab.nameOpenEase);
              currentContent.style.removeProperty('height');
              currentContent.style.removeProperty('overflow');
              ui.removeClass(currentContent, ui.tab.nameOpen);
            }, ui.globals.ease * 2);
          }, 0);
        }
      } else {
        if (classes) {
          ui.removeClass(tabs, classes);
          ui.addClass(tabs[index], classes);
        }

        ui.removeClass(tabs, ui.tab.nameActive);
        ui.addClass(tabs[index], ui.tab.nameActive);

        if (toggle) {
          lastOpened = '';
          ui.each(content, function () {
            if (this !== currentContent) {
              if (ui.hasClass(this, ui.tab.nameOpen)) {
                lastOpened = this; // find last opened content
              }
            }
          });

          if (lastOpened) {
            // hide last opened content
            lastOpened.style.height = lastOpened.offsetHeight + 'px';
            lastOpened.style.overflow = 'hidden';
            setTimeout(function () {
              lastOpened.style.height = '0';
              setTimeout(function () {
                ui.removeClass(lastOpened, ui.tab.nameOpenEase);
                lastOpened.style.removeProperty('height');
                lastOpened.style.removeProperty('overflow');
                ui.removeClass(lastOpened, ui.tab.nameOpen);
              }, ui.globals.ease * 2);
            }, 0);
          }

          setTimeout(function () {
            // open current clicked content
            ui.addClass(currentContent, ui.tab.nameOpen);
            currentHeight = currentContent.offsetHeight;
            currentContent.style.height = '0';
            currentContent.style.overflow = 'hidden';
            setTimeout(function () {
              ui.addClass(currentContent, ui.tab.nameOpenEase);
              currentContent.style.height = currentHeight + 'px';
              ui.trigger(document, ui.globals.eventDomChange); // set custom event

              setTimeout(function () {
                currentContent.style.removeProperty('height');
                currentContent.style.removeProperty('overflow');
              }, ui.globals.ease * 2);
            }, ui.globals.fast / 2);
          }, 0); // close opened toggle tabs when outside the tabs

          ui.on(document, 'mouseup.' + ui.tab.eventCloseToggleTabs, function (ev) {
            if (_typeof(ev.target.className) === 'object') {
              return;
            } // fix: when clicking on SVG icons inside the toggle tab


            if (ev.button !== 2) {
              // inherited right clicks
              if (ev.target.className.split(' ').indexOf(ui.tab.nameToggle) !== -1 && ui.closest(ev.target, '.' + ui.tab.targetParent)[0] === parent) {
                // controlling same toggled tab buttons
                return;
              }

              if (ev.target.className.split(' ').indexOf(ui.tab.nameContent) === -1 && ui.closest(ev.target, '.' + ui.tab.nameContent)[0] === undefined) {
                // controlling inside of the opened tab content
                currentContent.style.height = currentContent.offsetHeight + 'px';
                currentContent.style.overflow = 'hidden';
                setTimeout(function () {
                  currentContent.style.height = '0';
                  setTimeout(function () {
                    if (classes) {
                      ui.removeClass(tabs, classes);
                    }

                    ui.removeClass(tabs, ui.tab.nameActive);
                    ui.removeClass(content, ui.tab.nameOpenEase);
                    currentContent.style.removeProperty('height');
                    currentContent.style.removeProperty('overflow');
                    ui.removeClass(content, ui.tab.nameOpen);
                  }, ui.globals.ease * 2);
                }, 0);
                ui.trigger(document, ui.tab.eventToggleTabsClosed); // set custom event

                ui.off(document, 'mouseup.' + ui.tab.eventCloseToggleTabs);
              }
            }
          });
        } else {
          ui.removeClass(content, ui.tab.nameOpenEase);
          setTimeout(function () {
            ui.removeClass(content, ui.tab.nameOpen);
            ui.addClass(currentContent, ui.tab.nameOpen);
            setTimeout(function () {
              ui.addClass(currentContent, ui.tab.nameOpenEase);
              ui.trigger(document, ui.globals.eventDomChange); // set custom event
            }, ui.globals.fast / 2);
          }, 0);
        }
      }
    });
  }; // Loaders


  ui.onload(ui.tab.Start);
})();
"use strict";

/*
 UI Textarea Counter JS
 Requires UI Core JS
*/
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

(function () {
  'use strict';
  /*globals document, ui, setTimeout */

  var loadCounters;

  ui.textareaCounter.Start = function () {
    function counter(t) {
      var p, v, total, length;
      p = t.parentElement;
      v = t.value;
      total = p.getAttribute(ui.textareaCounter.dataCounter);
      length = total - v.length;

      if (length <= 0) {
        length = 0;
        p.setAttribute(ui.textareaCounter.dataChange, '0');
        t.value = v.substring(0, total);
      }

      ui.addClass(p, ui.textareaCounter.nameChange);
      p.setAttribute(ui.textareaCounter.dataChange, length);
      return false;
    }

    loadCounters = function loadCounters() {
      ui.each('.' + ui.textareaCounter.target + '[' + ui.textareaCounter.dataCounter + ']:not(.' + ui.textareaCounter.nameToggle + '):not(.' + ui.textareaCounter.nameChange + ')', function () {
        counter(ui.find('textarea', this)[0]);
      });
    };

    loadCounters(); // Event Listeners

    ui.on(document, 'keydown keyup keypress change', '.' + ui.textareaCounter.target + '[' + ui.textareaCounter.dataCounter + '] textarea', function (e) {
      if (e.type === 'keydown' && e.ctrlKey) {
        var that = this;
        setTimeout(function () {
          counter(that);
        }, 0);
      } else {
        counter(this);
      }
    });
    ui.on(document, 'reset', 'form', function () {
      var i, that;
      that = ui.find('.' + ui.textareaCounter.target + '[' + ui.textareaCounter.dataCounter + '] textarea');

      if (that.length === 0) {
        return;
      }

      setTimeout(function () {
        for (i = 0; i < that.length; i++) {
          counter(that[i]);
        }
      }, 0);
    });
  }; // Loaders


  ui.onload(ui.textareaCounter.Start); // ajax callback loader

  ui.on(document, ui.globals.eventAjaxCallback, function () {
    if (ui.ajax.data.indexOf(ui.textareaCounter.dataCounter) > 0) {
      loadCounters();
    }
  });
})();
"use strict";

/*
 UI Tooltip JS
 Requires UI Core JS
*/
ui.tooltip = {
  // targets
  target: 'ui-tooltip',
  // main classnames
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

(function () {
  'use strict';
  /*globals window, document, ui, setTimeout, clearTimeout */

  var removeTimer, removeTimer2x, pageTouchmoveTimer, touchControl, isScrolling;

  function removeFnc() {
    var that = ui.find('.' + ui.tooltip.target)[0];
    clearTimeout(removeTimer);
    removeTimer = setTimeout(function () {
      ui.removeClass(that, ui.tooltip.nameOpenEase);
      removeTimer2x = setTimeout(function () {
        ui.removeClass(that, ui.tooltip.nameOpen);
        that.parentNode.removeChild(that);
      }, ui.globals.ease);
    }, ui.globals.ease);
  }

  function createFnc(source, title) {
    var win, winRect, html, sourceRect, arr, pos, posRecall, calc;
    win = ui.find('.' + ui.tooltip.target);
    sourceRect = source.getBoundingClientRect(); // clear remove timers

    clearTimeout(removeTimer);
    clearTimeout(removeTimer2x); // create

    if (win.length > 0) {
      ui.find('.' + ui.tooltip.nameContent, win[0])[0].innerHTML = title;
    } else {
      html = '<div class="' + ui.tooltip.target + ' ' + ui.tooltip.stylesTarget + '">' + '<div class="' + ui.tooltip.nameContent + '">' + title + '</div>' + '<span>' + '<i class="' + ui.tooltip.stylesArrow + '"></i>' + '</span>' + '</div>';
      ui.find('body')[0].insertAdjacentHTML('afterbegin', html);
      win = ui.find('.' + ui.tooltip.target);
    } // show


    ui.addClass(win, ui.tooltip.nameOpen);
    setTimeout(function () {
      // check screen limits
      winRect = win[0].getBoundingClientRect(); // detect defined position

      arr = [ui.tooltip.t, ui.tooltip.b, ui.tooltip.r, ui.tooltip.l, ui.tooltip.tr, ui.tooltip.tl, ui.tooltip.br, ui.tooltip.bl];
      pos = source.getAttribute(ui.tooltip.dataTooltip);

      if (arr.indexOf(pos) < 0) {
        pos = ui.tooltip.t;
      } // calculate positioning


      calc = [];
      calc.ver = 0;
      calc.hor = 0;
      calc.reCall = false;

      calc.Fnc = function () {
        if (pos === ui.tooltip.t || pos === ui.tooltip.b) {
          // top || bottom
          calc.hor = (sourceRect.width - winRect.width) / 2;
        }

        if (pos === ui.tooltip.t || pos === ui.tooltip.tr || pos === ui.tooltip.tl) {
          // top
          calc.ver = -sourceRect.height + (sourceRect.height - winRect.height) - ui.tooltip.scrollbarSize;
        } else if (pos === ui.tooltip.b || pos === ui.tooltip.br || pos === ui.tooltip.bl) {
          // bottom
          calc.ver = sourceRect.height + ui.tooltip.scrollbarSize;
        } else if (pos === ui.tooltip.r) {
          // right
          calc.ver = sourceRect.height / 2 - winRect.height / 2;
          calc.hor = sourceRect.width + ui.tooltip.scrollbarSize;
        } else if (pos === ui.tooltip.l) {
          // left
          calc.ver = sourceRect.height / 2 - winRect.height / 2;
          calc.hor = -sourceRect.width + (sourceRect.width - winRect.width) - ui.tooltip.scrollbarSize;
        }

        if (pos === ui.tooltip.tr || pos === ui.tooltip.br) {
          // top right || bottom right
          calc.hor = sourceRect.width / 2 - ui.tooltip.scrollbarSize;
        } else if (pos === ui.tooltip.tl || pos === ui.tooltip.bl) {
          // top left || bottom left
          calc.hor = -(sourceRect.width / 2) + (sourceRect.width - winRect.width) + ui.tooltip.scrollbarSize;
        }
      };

      calc.Fnc(); // check screen limits

      posRecall = '';

      if (sourceRect.top - window.pageYOffset + calc.ver < -window.pageYOffset) {
        // top
        posRecall += ui.tooltip.b;
      } else if (sourceRect.top + window.pageYOffset + winRect.height + calc.ver > window.innerHeight + window.pageYOffset) {
        // bottom
        posRecall += ui.tooltip.t;
      }

      if (sourceRect.left + window.pageXOffset + calc.hor + winRect.width > window.innerWidth + window.pageXOffset) {
        // right
        posRecall += ui.tooltip.l;
      } else if (sourceRect.left - window.pageXOffset + calc.hor < 0) {
        // left
        posRecall += ui.tooltip.r;
      }

      if (posRecall !== '') {
        calc.reCall = true;
      }

      if (calc.reCall) {
        pos = posRecall;
        calc.Fnc();
      }

      win[0].style.top = sourceRect.top + window.pageYOffset + calc.ver + 'px';
      win[0].style.left = sourceRect.left + window.pageXOffset + calc.hor + 'px';
      win[0].setAttribute(ui.tooltip.dataPos, pos);
      ui.addClass(win, ui.tooltip.nameOpenEase);
    }, 10);
  }

  function tooltipFnc(that, type) {
    var title, dataTitle;
    title = that.getAttribute('title');

    if (type === ui.tooltip.nameOpen && title !== null && title !== '') {
      createFnc(that, title);
      that.setAttribute(ui.tooltip.dataTitle, title);
      that.removeAttribute('title');
      ui.addClass(that, ui.tooltip.nameActive);
    } else {
      dataTitle = that.getAttribute(ui.tooltip.dataTitle);

      if (dataTitle !== null && dataTitle !== '') {
        if (type === 'close') {
          removeFnc(that);
          that.removeAttribute(ui.tooltip.dataTitle);
          that.setAttribute('title', dataTitle);
          ui.removeClass(that, ui.tooltip.nameActive);
        }
      }
    }
  }

  ui.tooltip.Start = function () {
    // Event Listeners
    ui.on(document, 'mouseenter mouseleave', '[' + ui.tooltip.dataTooltip + ']:not([' + ui.tooltip.dataMobile + '])', function (e) {
      if (ui.userAgents.desktop) {
        var type;

        if (e.type === 'mouseenter') {
          type = ui.tooltip.nameOpen;
        } else {
          type = 'close';
        }

        tooltipFnc(this, type);
      }
    });
    ui.on(document, 'touchstart touchmove touchend', '[' + ui.tooltip.dataTooltip + ']:not([' + ui.tooltip.dataDesktop + '])', function (e) {
      var that = this;

      if (e.type === 'touchstart') {
        touchControl = ui.hasClass(that, ui.tooltip.nameActive);
      }

      ui.off(that, 'touchmove.' + ui.tooltip.eventClose);
      ui.on(that, 'touchmove.' + ui.tooltip.eventClose, function () {
        isScrolling = true;
      });

      if (e.type === 'touchend') {
        if (isScrolling) {
          isScrolling = false;
          return;
        }

        if (ui.userAgents.mobile && ui.userAgents.ios) {
          if (!touchControl) {
            e.preventDefault();
          }
        } else {
          if (!touchControl && e.cancelable && e.defaultPrevented) {
            // touchstart or touchmove with preventDefault we need this. Because, now Chrome and Android browsers preventDefault automatically.
            e.preventDefault();
          }
        }

        clearTimeout(pageTouchmoveTimer);
        pageTouchmoveTimer = setTimeout(function () {
          tooltipFnc(that, ui.tooltip.nameOpen);
          ui.on(document, 'touchend.' + ui.tooltip.eventClose, function () {
            tooltipFnc(that, 'close');
            ui.off(document, 'touchend.' + ui.tooltip.eventClose);
          });
        }, ui.globals.fast / 2);
      }
    });
  }; // Loaders


  ui.onload(ui.tooltip.Start);
})();
"use strict";

/*
 UI Top Button JS
 Requires UI Core JS
*/
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
  titleText: 'Back to top!'
};

(function () {
  'use strict';
  /*globals window, document, ui, setTimeout */

  function togglerFnc() {
    var topBtn = ui.find('.' + ui.topButton.target);

    if (ui.find('body')[0].offsetHeight > window.innerHeight * 2 && window.innerWidth > ui.globals.sm) {
      setTimeout(function () {
        if (window.pageYOffset > window.innerHeight / 3) {
          if (!ui.hasClass(topBtn, ui.topButton.nameOpen)) {
            ui.addClass(topBtn, ui.topButton.nameOpen);
            setTimeout(function () {
              ui.addClass(topBtn, ui.topButton.nameOpenEase);
            }, ui.globals.slow);
          }
        } else {
          if (ui.hasClass(topBtn, ui.topButton.nameOpen)) {
            ui.removeClass(topBtn, ui.topButton.nameOpenEase);
            setTimeout(function () {
              ui.removeClass(topBtn, ui.topButton.nameOpen);
            }, ui.globals.slow);
          }
        }
      }, 0);
    }
  }

  ui.topButton.Start = function () {
    if (ui.userAgents.desktop) {
      var html = '<button class="' + ui.topButton.target + ' ' + ui.topButton.stylesTarget + '" title="' + ui.topButton.titleText + '">' + '<svg class="' + ui.topButton.stylesIcon + '"><use href="#' + ui.topButton.icon + '"/></svg>' + '</button>';
      ui.find('body')[0].insertAdjacentHTML('beforeend', html);
      togglerFnc(); // Event Listeners

      ui.on('.' + ui.topButton.target, 'click', function () {
        window.scrollTo(0, 0);
      });
    }
  }; // Loaders


  ui.onload(ui.topButton.Start);
  ui.on(window, 'resize scroll', togglerFnc);
  ui.on(document, ui.globals.eventDomChange, togglerFnc);
})();
"use strict";

/*
 UI Weather JS
 Requires UI Core JS
*/
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
  graphPath: 'img/weather/',
  // animation graphics folder
  fileType: 'png',
  // data attributes
  dataGraphs: 'data-ui-graphs',
  dataDay: 'data-ui-day'
};

(function () {
  'use strict';
  /*globals document, ui, setInterval */

  var dateLoaded,
      clockLoaded,
      loadGraphs,
      re = new RegExp('\\s+\\s'),
      rex = new RegExp('^\\s|\\s+$');

  ui.weather.Start = function () {
    var date, dateText, dateHtml, clockText, clockHtml, minute, hour, day, month, that, graphs, animations, sun, sunPos, sunrise, sunset;
    animations = []; // load animation graphics

    loadGraphs = function loadGraphs() {
      var i, html;
      graphs = ui.find('.' + ui.weather.target + ' .' + ui.weather.nameGraphs + ':not(.' + ui.weather.nameLoaded + ')');
      ui.each(graphs, function () {
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
                if (data[i] === ui.weather.animateClear) {
                  // convert sun to stars
                  animations.push(ui.weather.animateStars);
                } else if (data[i] === ui.weather.animateStars) {
                  // convert stars to sun
                  animations.push(ui.weather.animateClear);
                }

                if (data.length === 1 && (data[i] === ui.weather.animateCloud || data[i] === ui.weather.animateFog)) {
                  // add sun and stars for cloudy and foggy weather
                  animations.push(ui.weather.animateClear);
                  animations.push(ui.weather.animateStars);
                }

                if (data[i] === ui.weather.animateCloudHeavy) {
                  // add stars for mostly cloudy weather
                  animations.push(ui.weather.animateStars);
                }

                if (data.length === 1 && (data[i] === ui.weather.animateClear || data[i] === ui.weather.animateStars)) {
                  // add shooting star if weather is clear
                  animations.push(ui.weather.animateShootingStar);
                }

                animations.push(data[i]); // add other animations
              } // create animations


              for (i = 0; i < animations.length; i++) {
                html += '<div ' + 'class="' + ui.weather.nameAnimatePrefix + animations[i] + '" ' + 'style="background-image: url(' + ui.weather.graphPath + animations[i] + '.' + ui.weather.fileType + ');">' + '</div>';
              }

              this.insertAdjacentHTML('beforeend', html);
              html = '';
            }
          }
        }
      });
    };

    loadGraphs(); // check date, clock and night

    function dateFnc() {
      // date
      date = new Date();
      day = date.getDay();

      if (day === 0) {
        day = 6;
      } else {
        day -= 1;
      }

      dateText = ui.weather.days[day];
      day = day.toString();

      if (day.length === 1) {
        day = '0' + day;
      }

      month = date.getMonth();
      month = ui.weather.months[month];
      dateHtml = '<span class="' + ui.weather.nameWday + '">' + dateText + '</span>, ' + month + ' ' + date.getDate() + ', ' + date.getFullYear();
      dateText = dateText + ', ' + month + ' ' + day + ', ' + date.getFullYear();

      if (dateLoaded !== dateText) {
        ui.each('.' + ui.weather.nameWdate, function () {
          this.innerHTML = dateHtml;
        });
      }

      dateLoaded = dateText; // clock

      hour = date.getHours().toString();

      if (hour.length === 1) {
        hour = '0' + hour;
      } // convert two digits


      minute = date.getMinutes().toString();

      if (minute.length === 1) {
        minute = '0' + minute;
      }

      clockHtml = '<span>' + hour + '</span><span>' + minute + '</span>';
      clockText = hour + ':' + minute;

      if (clockLoaded !== clockText) {
        ui.each('.' + ui.weather.nameWclock, function () {
          this.innerHTML = clockHtml;
        }); // check sunrise and sunset

        graphs = ui.find('.' + ui.weather.target + ' .' + ui.weather.nameGraphs + '[' + ui.weather.dataDay + ']');
        ui.each(graphs, function () {
          sunPos = this.getAttribute(ui.weather.dataDay);

          if (sunPos === null || sunPos === '') {
            return;
          }

          sunPos = sunPos.split(',');

          if (sunPos.length !== 2) {
            return;
          }

          sunrise = sunPos[0].split(':');

          if (sunrise.length !== 2) {
            return;
          }

          if (sunrise[0].length === 1) {
            sunrise[0] = '0' + sunrise[0];
          } // sunrise hour


          if (sunrise[1].length === 1) {
            sunrise[1] = '0' + sunrise[1];
          } // sunrise minute


          sunset = sunPos[1].split(':');

          if (sunset.length !== 2) {
            return;
          }

          if (sunset[0].length === 1) {
            sunset[0] = '0' + sunset[0];
          } // sunset hour


          if (sunset[1].length === 1) {
            sunset[1] = '0' + sunset[1];
          } // sunset minute
          // convert day or night


          sun = ui.find('.' + ui.weather.nameClear, this)[0];
          that = ui.closest(this, '.' + ui.weather.target)[0];

          if (hour === sunrise[0] && minute < sunrise[1] || hour < sunrise[0] || hour === sunset[0] && minute > sunset[1] || hour > sunset[0]) {
            // night
            ui.addClass(that, ui.weather.nameNight); // sun positioning

            if (sun !== undefined) {
              sun.style.removeProperty('left');
            }
          } else {
            // day
            ui.removeClass(that, ui.weather.nameNight); // sun positioning

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
  }; // Loaders


  ui.onload(ui.weather.Start); // ajax callback loader

  ui.on(document, ui.globals.eventAjaxCallback, function () {
    if (ui.ajax.classNames.indexOf(ui.weather.target) > -1) {
      loadGraphs();
    }
  });
})();
