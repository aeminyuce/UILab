var ui = {
  globals: {
    xl: 1680,
    lg: 1400,
    md: 959,
    sm: 767,
    xs: 480,
    fast: 100,
    ease: 150,
    slow: 400,
    slow2x: 800,
    slow3x: 1200,
    slow4x: 1600,
    slow5x: 2000,
    nonClosestElems: ['mouseenter', 'mouseleave', 'mouseout', 'mouseover'],
    passiveEvents: ['touchstart', 'touchmove'],
    svgElems: ['svg', 'path', 'g', 'circle', 'rect', 'polygon', 'ellipse', 'text'],
    iconSrc: '../dist/icons.svg',
    inlineSvg: false,
    inlineSvgViewBox: '0 0 264 264',
    dataPrefix: 'data-ui-',
    dataClasses: 'data-ui-classes',
    eventAjaxCallback: 'ui:ajaxCallback',
    eventDomChange: 'ui:domChange'
  }
};
ui.find = function (item, outer) {
  if (item instanceof Object) {
    if (NodeList.prototype.isPrototypeOf(item)) {
      return item;
    }
    var objName = Object.prototype.toString.call(item);
    if (objName === '[object HTMLDocument]' || objName === '[object Document]') {
      if (ui.find.document === undefined) {
        ui.find.document = document.querySelectorAll('html');
      }
      return ui.find.document;
    }
    if (objName === '[object Window]') {
      return window;
    }
    if (objName === '[object Array]') {
      return item;
    }
    return [item];
  }
  if (outer !== undefined) {
    var outerEl;
    var foundEl = [];
    if (outer instanceof Object) {
      outerEl = outer;
    } else {
      outerEl = document.querySelectorAll(outer);
    }
    if (outerEl.length !== undefined && Array.prototype.slice.call(outerEl).length === 1) {
      for (var i = 0; i < outerEl.length; i++) {
        var outerElIndex = outerEl[i].querySelectorAll(item);
        if (outerEl.length === 1) {
          foundEl = outerElIndex[0];
          if (foundEl === undefined) {
            foundEl = outerEl.querySelectorAll(item);
          }
        } else {
          foundEl = foundEl.concat(outerElIndex);
        }
      }
    } else {
      foundEl = outerEl.querySelectorAll(item);
    }
    return foundEl;
  }
  return document.querySelectorAll(item);
};
ui.on = function (self, e, that, callback) {
  var set = function set(e) {
    if (typeof t === 'string' && e === undefined) {
      return;
    }
    var callFnc, isWindowEvent;
    var delegate = false;
    var passiveEvent = false;
    var customEvent = false;
    var eName = e.split('.')[0];
    if (ui.globals.passiveEvents.indexOf(eName) > -1) {
      passiveEvent = true;
    }
    if (callback !== undefined) {
      callFnc = function callFnc(event) {
        Array.prototype.forEach.call(ui.find(that), function (el) {
          if (ui.globals.nonClosestElems.indexOf(eName) > -1) {
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
      var ua = navigator.userAgent.toLowerCase();
      if (self instanceof Object && !NodeList.prototype.isPrototypeOf(self) && typeof e === 'string') {
        isWindowEvent = Object.prototype.toString.call(self) === '[object Window]';
        if (isWindowEvent) {
          if (ua.indexOf("MSIE ") > 0 || !!document.documentMode || ua.indexOf('edge') > -1) {
            setTimeout(function () {
              nodelist.addEventListener(e, that, true);
            }, ui.globals.ease);
          }
        }
        var objName = Object.prototype.toString.call(self);
        if (objName === '[object HTMLDocument]' || objName === '[object Document]') {
          customEvent = true;
        }
      }
    }
    var handlerFnc = function handlerFnc(pt, pe) {
      if (callFnc === undefined) {
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
      ui.handlers[pt][pe].push(callFnc);
      if (typeof pe !== 'function' && callFnc !== undefined) {
        if (delegate || isWindowEvent || customEvent) {
          if (ui.handlers[pt][pe].length === 1) {
            pt.addEventListener(pe.split('.')[0], function (ev) {
              for (var i = 0; i < ui.handlers[pt][pe].length; i++) {
                ui.handlers[pt][pe][i](ev);
              }
            }, passiveEvent ? {
              passive: true
            } : true);
          }
        } else {
          pt.addEventListener(pe.split('.')[0], callFnc, passiveEvent ? {
            passive: true
          } : true);
        }
      } else {
        return;
      }
    };
    var nodelist = ui.find(self);
    if (isWindowEvent) {
      handlerFnc(nodelist, e);
    } else {
      Array.prototype.forEach.call(nodelist, function (el) {
        handlerFnc(el, e);
      });
    }
  };
  var arr = e.split(' ');
  for (var j = 0; j < arr.length; j++) {
    set(arr[j]);
  }
};
ui.off = function (that, e) {
  var callFnc = function callFnc(e) {
    var passiveEvent = false;
    var eName = e.split('.')[0];
    if (ui.globals.passiveEvents.indexOf(eName) > -1) {
      passiveEvent = true;
    }
    var handlerFnc = function handlerFnc(pt, pe) {
      if (ui.handlers[pt] !== undefined) {
        if (ui.handlers[pt][pe] !== undefined) {
          for (var i = 0; i < ui.handlers[pt][pe].length; i++) {
            pt.removeEventListener(pe.split('.')[0], ui.handlers[pt][pe][i], passiveEvent ? {
              passive: true
            } : true);
            ui.handlers[pt][pe].splice(ui.handlers[pt][pe][i], 1);
          }
        }
      }
    };
    var nodeList = ui.find(that);
    if (nodeList.length === 0) {
      handlerFnc(nodeList, e);
    } else {
      Array.prototype.forEach.call(nodeList, function (el) {
        handlerFnc(el, e);
      });
    }
  };
  var arr = e.split(' ');
  for (var j = 0; j < arr.length; j++) {
    callFnc(arr[j]);
  }
};
ui.onload = function (callback) {
  var handlerFnc = function handlerFnc(pt, pe) {
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
      if (ui.handlers[pt][pe].length === 1) {
        pt.addEventListener(pe.split('.')[0], function (ev) {
          for (var i = 0; i < ui.handlers[pt][pe].length; i++) {
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
};
ui.trigger = function (that, e) {
  var event;
  var callFnc = function callFnc(e) {
    try {
      event = new Event(e);
    } catch (err) {
      event = document.createEvent('HTMLEvents');
      event.initEvent(e, true, false);
    }
    Array.prototype.forEach.call(ui.find(that), function (el) {
      el.dispatchEvent(event);
    });
  };
  var arr = e.split(' ');
  for (var i = 0; i < arr.length; i++) {
    callFnc(arr[i]);
  }
};
ui.hasClass = function (that, name) {
  var re;
  var nodeList = ui.find(that);
  for (var i = 0; i < nodeList.length; i++) {
    if (ui.globals.svgElems.indexOf(nodeList[i].tagName.toLowerCase()) !== -1) {
      re = new RegExp('(^| )' + name + '( |$)', 'gi').test(nodeList[i].className.baseVal);
    } else {
      re = new RegExp('(^| )' + name + '( |$)', 'gi').test(nodeList[i].className);
    }
  }
  return re;
};
ui.addClass = function (that, name) {
  var arr;
  var re = new RegExp('^\\s+|\\s+$');
  name = name.split(' ');
  Array.prototype.forEach.call(ui.find(that), function (el) {
    for (var i = 0; i < name.length; i++) {
      if (ui.globals.svgElems.indexOf(el.tagName.toLowerCase()) !== -1) {
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
ui.removeClass = function (that, name) {
  var rex = new RegExp('^\\s+|\\s+$');
  name = name.split(' ');
  Array.prototype.forEach.call(ui.find(that), function (el) {
    for (var i = 0; i < name.length; i++) {
      var re = new RegExp('(\\s|^)' + name[i] + '(\\s|$)');
      if (ui.globals.svgElems.indexOf(el.tagName.toLowerCase()) !== -1) {
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
ui.toggleClass = function (that, name) {
  var arr, newArr, index, isSvgElements;
  var re = new RegExp('^\\s+|\\s+$');
  name = name.split(' ');
  Array.prototype.forEach.call(ui.find(that), function (el) {
    isSvgElements = ui.globals.svgElems.indexOf(el.tagName.toLowerCase()) !== -1;
    if (isSvgElements) {
      arr = el.className.baseVal.split(' ');
    } else {
      arr = el.className.split(' ');
    }
    for (var i = 0; i < name.length; i++) {
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
ui.each = function (t, callback) {
  var l = ui.find(t),
    i;
  for (i = 0; i < l.length; i++) {
    callback.call(l[i], i);
  }
};
ui.closest = function (that, outer) {
  var outerEl, parentEl;
  if (outer instanceof Object) {
    outerEl = [outer];
  } else {
    outerEl = ui.find(outer);
  }
  var elems = [];
  Array.prototype.forEach.call(ui.find(that), function (el) {
    parentEl = el.parentNode;
    while (parentEl) {
      for (var i = 0; i < outerEl.length; i++) {
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
ui.ajax = function (props) {
  if (props.url === undefined) {
    return;
  }
  if (props.type === undefined || props.type === '') {
    props.type = 'GET';
  }
  if (ui.ajax.requests === undefined) {
    ui.ajax.requests = [];
  }
  var i = ui.ajax.requests.length;
  ui.ajax.requests[i] = new XMLHttpRequest();
  ui.ajax.requests[i].open(props.type, props.url, true);
  if (props.beforesend !== undefined) {
    props.beforesend(ui.ajax.requests[i]);
  }
  ui.ajax.requests[i].setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  if (!props.cache) {
    ui.ajax.requests[i].setRequestHeader('cache-control', 'no-cache');
  }
  if (props.data !== '' && props.data !== undefined) {
    ui.ajax.requests[i].send(props.data);
  } else {
    ui.ajax.requests[i].send();
  }
  ui.ajax.requests[i].onload = function () {
    if (ui.ajax.requests[i].readyState === 4 && ui.ajax.requests[i].status === 200) {
      ui.ajax.classNames = '';
      props.callback('success', ui.ajax.requests[i].responseText, ui.ajax.requests[i]);
      var re = ui.globals.dataPrefix + '+\\w+=\\"+[\\w\\s\\d\\-\\_\\=]+\\"[ \\s\\>]';
      re = new RegExp(re, 'g');
      ui.ajax.data = ui.ajax.requests[i].responseText.match(re);
      if (ui.ajax.data === null) {
        ui.ajax.data = '';
      } else {
        ui.ajax.data = ui.ajax.data.toString();
      }
      ui.ajax.classNames += ui.ajax.requests[i].responseText.match(/\sclass=\"+[\w\s\d\-\_\=]+\"[\s\>]/g);
      if (ui.ajax.classNames === 'null') {
        ui.ajax.classNames = '';
      }
      var rex = ui.globals.dataClasses + '=\\"+[\\w\\s\\d\\-\\_\\=]+\\"[\\s\\>]';
      rex = new RegExp(rex, 'g');
      ui.ajax.classNames += ui.ajax.requests[i].responseText.match(rex);
      if (ui.ajax.classNames !== 'null') {
        ui.ajax.classNames = ui.ajax.classNames.match(/"+[\w\s\d\-\_\=]+"/g);
        ui.ajax.classNames = ui.ajax.classNames.toString().replace(/\"/g, '').replace(/,/g, ' ').split(' ');
        ui.ajax.classNames = ui.ajax.classNames.filter(function (value, index, self) {
          return self.indexOf(value) === index;
        });
        ui.trigger(document, ui.globals.eventAjaxCallback);
      }
      ui.ajax.requests[i] = undefined;
      ui.ajax.classNames = '';
      ui.ajax.data = '';
    } else {
      props.callback('error', '', ui.ajax.requests[i]);
    }
  };
  ui.ajax.requests[i].onerror = function () {
    props.callback('error', '', ui.ajax.requests[i]);
  };
};
ui.userAgents = {
  target: document,
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
  userLang: '',
  desktop: false,
  ie: false,
  edge: false,
  edg: false,
  mobile: false,
  ios: false,
  android: false,
  androidOld: false,
  nativeBrowser: false
};
ui.onload(function () {
  var classes = [];
  var ua = navigator.userAgent.toLowerCase();
  ui.userAgents.userLang = (navigator.language || navigator.userLanguage).split('-')[0];
  var out = function out(name) {
    var index = classes.indexOf(name);
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
    ui.globals.iconSrc = '';
    classes.push(ui.userAgents.nameIE);
    out(ui.userAgents.nameChrome);
    if (ua.indexOf('edge') > -1 || ua.indexOf('edg') > -1) {
      ui.userAgents.edge = true;
      out(ui.userAgents.nameIE);
      classes.push(ui.userAgents.nameEdge);
    }
  } else if (ua.indexOf('edg') > -1) {
    ui.userAgents.edg = true;
    classes.push(ui.userAgents.nameChromiumEdge);
  }
  if (navigator.userAgentData !== undefined) {
    var _navigator$userAgentD, _navigator$userAgentD2;
    if (((_navigator$userAgentD = navigator.userAgentData) === null || _navigator$userAgentD === void 0 ? void 0 : _navigator$userAgentD.platform.indexOf("Win")) !== -1) {
      classes.push(ui.userAgents.nameWindows);
    }
    if (((_navigator$userAgentD2 = navigator.userAgentData) === null || _navigator$userAgentD2 === void 0 ? void 0 : _navigator$userAgentD2.platform.indexOf("Mac")) !== -1) {
      classes.push(ui.userAgents.nameMac);
    }
  } else {
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
      if (ui.userAgents.nativeBrowser || parseFloat(ua.match(/android\s([0-9\.]*)/)[1]) < parseFloat('4.4')) {
        ui.userAgents.androidOld = true;
      }
      ui.userAgents.android = true;
      ui.userAgents.ios = false;
    }
  }
  var allClasses = '';
  for (var i = 0; i < classes.length; i++) {
    allClasses += classes[i];
    if (i + 1 !== classes.length) {
      allClasses += ' ';
    }
  }
  ui.addClass(ui.userAgents.target, allClasses);
});
ui.darkMode = {
  target: document,
  nameToggle: 'ui-darkmode-toggle',
  valueDark: 'dark',
  valueLight: 'light',
  cookieDays: 365,
  cookieName: 'ui-darkMode',
  dataMod: 'data-ui-mode'
};
ui.onload(function () {
  if (ui.userAgents.ie) {
    return;
  }
  var mode = ui.darkMode.valueLight;
  var darkColorScheme = window.matchMedia('(prefers-color-scheme: dark)');
  if (window.matchMedia) {
    if (darkColorScheme.matches) mode = ui.darkMode.valueDark;
  }
  var state = decodeURIComponent(document.cookie).split('; ');
  setTimeout(function () {
    for (var i = 0; i < state.length; i++) {
      var cookies = state[i].split('=');
      var cookie = cookies[0];
      cookie = cookie.replace(/^\s+|\s+$/g, '');
      if (cookie === ui.darkMode.cookieName) mode = cookies[1];
    }
    doc.setAttribute(ui.darkMode.dataMod, mode);
  }, 0);
  var doc = ui.find(ui.darkMode.target)[0];
  var setState = function setState(mode) {
    var date = new Date();
    date.setTime(date.getTime() + ui.darkMode.cookieDays * (24 * 60 * 60 * 1000));
    document.cookie = ui.darkMode.cookieName + '=' + mode + ';' + "expires=" + date.toUTCString() + ';domain=' + window.location.host + ';path=/';
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
    e.preventDefault();
    var current = doc.getAttribute(ui.darkMode.dataMod);
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
    }, 0);
  });
});
ui.effects = {
  target: document,
  namePause: 'ui-effects-paused',
  nameNoEffects: 'ui-no-effects',
  pauseAll: false,
  pauseScroll: false,
  pauseResize: false,
  preload: true,
  reduceMotion: true,
  ie: true,
  android: true,
  androidOld: false
};
(function () {
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
    if (ui.userAgents.ie && !ui.userAgents.edge && !ui.effects.ie) {
      ui.effects.pauseAll = true;
    }
    if (ui.userAgents.mobile && ui.userAgents.android && !ui.effects.android) {
      ui.effects.pauseAll = true;
    }
    if (ui.userAgents.mobile && ui.userAgents.androidOld && !ui.effects.androidOld) {
      ui.effects.pauseAll = true;
    }
    var reduceTimers = function reduceTimers() {
      ui.globals.fast = 11;
      ui.globals.ease = 12;
      ui.globals.slow = 13;
      ui.globals.slow2x = 14;
      ui.globals.slow3x = 15;
      ui.globals.slow4x = 16;
      ui.globals.slow5x = 17;
    };
    if (ui.effects.reduceMotion) {
      var detectMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (!detectMotion || detectMotion.matches) {
        ui.addClass(ui.effects.target, ui.effects.nameNoEffects);
        reduceTimers();
      }
    }
    if (ui.effects.pauseAll) {
      ui.addClass(ui.effects.target, ui.effects.nameNoEffects);
      reduceTimers();
    } else {
      if (ui.effects.preload) {
        ui.addClass(ui.effects.target, ui.effects.namePause);
        setTimeout(function () {
          ui.removeClass(ui.effects.target, ui.effects.namePause);
        }, ui.globals.ease * 2);
      }
    }
  });
})();
ui.grid = {
  targetColsPrefix: 'ui-col-',
  targetOrdersPrefix: 'ui-order-',
  nameFirstSuffix: '-first',
  nameLastSuffix: '-last',
  dataOrdered: 'data-ui-ordered'
};
ui.grid.Start = function () {
  if (ui.find('[class*="' + ui.grid.targetColsPrefix + '"][class*="' + ui.grid.targetOrdersPrefix + '"]').length > 0) {
    var move = function move(classType, size) {
      if (size) {
        Array.prototype.forEach.call(ui.find('[class*="' + ui.grid.targetOrdersPrefix + classType + '-"]'), function (el) {
          var parent = el.parentElement;
          var siblings = parent.children;
          var index = Array.prototype.slice.call(el.parentElement.children).indexOf(el);
          if (ui.hasClass(el, ui.grid.targetOrdersPrefix + classType + ui.grid.nameFirstSuffix) && index !== 0) {
            el.setAttribute(ui.grid.dataOrdered, index);
            parent.insertBefore(el, parent.firstChild);
          }
          if (ui.hasClass(el, ui.grid.targetOrdersPrefix + classType + ui.grid.nameLastSuffix) && index !== siblings.length - 1) {
            el.setAttribute(ui.grid.dataOrdered, index);
            parent.appendChild(el);
          }
        });
      } else {
        Array.prototype.forEach.call(ui.find('[class*="' + ui.grid.targetOrdersPrefix + classType + '-"][' + ui.grid.dataOrdered + ']'), function (el) {
          var order = parseInt(el.getAttribute(ui.grid.dataOrdered));
          var parent = el.parentElement;
          var siblings = parent.children;
          if (ui.hasClass(el, ui.grid.targetOrdersPrefix + classType + ui.grid.nameFirstSuffix)) {
            var refEl = siblings[order + 1];
            if (refEl === undefined) {
              refEl = null;
            }
            el.removeAttribute(ui.grid.dataOrdered);
            parent.insertBefore(el, refEl);
          } else {
            el.removeAttribute(ui.grid.dataOrdered);
            parent.insertBefore(el, siblings[order]);
          }
        });
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
ui.onload(ui.grid.Start);
ui.on(window, 'resize', ui.grid.Start);
ui.on(document, ui.globals.eventDomChange, ui.grid.Start);
ui.on(document, ui.globals.eventAjaxCallback, function () {
  if (ui.ajax.classNames.indexOf(ui.grid.targetOrdersPrefix) > -1) {
    ui.grid.Start();
  }
});
ui.dropdown = {
  target: 'ui-dropdown',
  nameMenu: 'ui-dropdown-menu',
  nameHover: 'ui-menu-hover',
  nameMenuTop: 'ui-menu-t',
  nameMenuLeft: 'ui-menu-l',
  nameMenuCenter: 'ui-menu-c',
  nameMenuPosRight: 'ui-menu-pos-r',
  nameMenuPosLeft: 'ui-menu-pos-l',
  nameNav: 'ui-nav',
  nameNavFullHor: 'ui-nav-full-h',
  nameOpen: 'ui-open',
  nameOpenEase: 'ui-open-ease',
  nameSelected: 'ui-selected',
  nameBtn: 'ui-btn',
  nameSidebar: 'ui-sidebar',
  tagMenuItems: 'li',
  tagValue: 'span',
  tagValueItems: 'label',
  scrollbarSize: 20,
  menuTopMargin: 1,
  eventClose: 'ui:dropdownClose'
};
(function () {
  var dropdownHoverTimer, dropdownOpenTimer, dropdownLeaveTimer, dropdownCloseTimer, listStyles, selectOpened, selectInContent, getScrollPos;
  function dropdownClose(innerParent) {
    if (selectOpened) {
      return;
    }
    var that;
    if (innerParent === undefined) {
      that = ui.find('.' + ui.dropdown.target + '.' + ui.dropdown.nameOpen);
    } else {
      that = ui.find('.' + ui.dropdown.target + '.' + ui.dropdown.nameOpen, innerParent);
    }
    ui.removeClass(that, ui.dropdown.nameOpenEase);
    clearTimeout(dropdownLeaveTimer);
    dropdownLeaveTimer = setTimeout(function () {
      Array.prototype.forEach.call(that, function (el) {
        clearTimeout(dropdownCloseTimer);
        var list = ui.find('.' + ui.dropdown.nameMenu, el)[0];
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
      var inner = false;
      var hasInner = false;
      var parent = that.parentNode;
      clearTimeout(dropdownOpenTimer);
      dropdownOpenTimer = setTimeout(function () {
        var innerParent = ui.closest(parent, '.' + ui.dropdown.target)[0];
        if ((ui.hasClass(parent, ui.dropdown.nameMenuPosRight) || ui.hasClass(parent, ui.dropdown.nameMenuPosLeft)) && innerParent !== undefined) {
          inner = true;
          dropdownClose(innerParent);
        } else {
          dropdownClose();
        }
        if (ui.find('.' + ui.dropdown.nameMenuPosRight, parent).length > 0 || ui.find('.' + ui.dropdown.nameMenuPosLeft, parent).length > 0) {
          hasInner = true;
        }
        clearTimeout(dropdownOpenTimer);
        ui.addClass(parent, ui.dropdown.nameOpen);
        dropdownOpenTimer = setTimeout(function () {
          ui.addClass(parent, ui.dropdown.nameOpenEase);
        }, dropdownHoverTimer / 6);
        var offset = parent.getBoundingClientRect();
        var list = ui.find('.' + ui.dropdown.nameMenu, parent)[0];
        if (hasInner) {
          list.style.overflow = 'visible';
        }
        if (ui.closest(that, '.' + ui.dropdown.nameSidebar)[0] === undefined && !ui.hasClass(parent, ui.dropdown.nameNavFullHor)) {
          listStyles = list.style.length;
          if (window.innerWidth > ui.globals.sm) {
            if (ui.hasClass(parent, ui.dropdown.nameMenuLeft) || !ui.hasClass(parent, ui.dropdown.nameMenuPosLeft) && offset.left + list.offsetWidth + ui.dropdown.scrollbarSize > window.innerWidth) {
              if (offset.left - (list.offsetWidth - parent.offsetWidth) >= 0) {
                list.style.right = 0;
                list.style.left = 'inherit';
                list.style.transformOrigin = 'top right';
              }
            } else if (ui.hasClass(parent, ui.dropdown.nameMenuCenter)) {
              var alignSize = Math.abs(list.offsetWidth - parent.offsetWidth) / 2;
              if (offset.left - alignSize > 0 && alignSize > 0) {
                list.style.marginLeft = -alignSize + 'px';
              }
            }
          } else {
            list.style.marginLeft = -(offset.left - ui.dropdown.scrollbarSize / 2) + 'px';
            list.style.width = window.innerWidth - ui.dropdown.scrollbarSize + 'px';
          }
        }
        var setMaxH = function setMaxH(pos) {
          if (pos === 'default') {
            list.style.maxHeight = window.innerHeight - (offset.top + that.offsetHeight + ui.dropdown.scrollbarSize + ui.dropdown.menuTopMargin) + 'px';
          } else if (pos === 'top') {
            list.style.maxHeight = window.innerHeight - (ui.dropdown.scrollbarSize + ui.dropdown.menuTopMargin) + 'px';
          } else if (pos === 'pos') {
            list.style.maxHeight = window.innerHeight - (offset.top + ui.dropdown.scrollbarSize) + 'px';
          }
        };
        if (ui.hasClass(parent, ui.dropdown.nameMenuPosRight)) {
          if (window.innerWidth > ui.globals.sm) {
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
            setMaxH('default');
            list.style.top = 'inherit';
            list.style.left = 'inherit';
            list.style.marginTop = ui.dropdown.menuTopMargin + 'px';
          }
        } else if (ui.hasClass(parent, ui.dropdown.nameMenuPosLeft)) {
          if (window.innerWidth > ui.globals.sm) {
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
            setMaxH('default');
            list.style.top = 'inherit';
            list.style.right = 'inherit';
            list.style.marginTop = ui.dropdown.menuTopMargin + 'px';
          }
        } else if (offset.top + parseInt(that.offsetHeight + list.offsetHeight) >= window.innerHeight) {
          if (offset.top - parseInt(that.offsetHeight + list.offsetHeight) + that.offsetHeight > 0) {
            if (!ui.hasClass(parent, ui.dropdown.nameNavFullHor)) {
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
            var content = ui.closest(ev.target, '.' + ui.dropdown.nameMenu)[0];
            if (content !== undefined) {
              if (ui.closest(content, '.' + ui.dropdown.target)[0] !== undefined) {
                return;
              }
            }
            if (ui.closest(ev.target, '.' + ui.dropdown.target + '.' + ui.dropdown.nameNavFullHor)[0] !== undefined && ev.target.className.split(' ').indexOf(ui.dropdown.nameMenu) === 0) {
              return;
            }
            if (ev.button !== 2) {
              dropdownClose();
              ui.off(document, 'click.' + ui.dropdown.eventClose);
            }
          });
        }, 0);
      }
    }
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
    });
    ui.on(document, 'click', '.' + ui.dropdown.target + ' ' + ui.dropdown.tagMenuItems + ' > ' + ui.dropdown.tagValueItems, function () {
      var parent = ui.closest(this, '.' + ui.dropdown.target)[0];
      var target = ui.find('.' + ui.dropdown.nameBtn + ' > ' + ui.dropdown.tagValue, parent)[0];
      target.innerHTML = '';
      target.insertAdjacentHTML('beforeend', this.innerHTML);
      var input = ui.find('input', target)[0];
      if (input !== undefined) {
        input.parentNode.removeChild(input);
      }
      ui.removeClass(ui.find('.' + ui.dropdown.nameSelected, parent), ui.dropdown.nameSelected);
      ui.addClass(this.parentNode, ui.dropdown.nameSelected);
    });
    ui.on(document, 'mouseleave', '.' + ui.dropdown.target + '.' + ui.dropdown.nameHover, function () {
      var _this = this;
      clearTimeout(dropdownLeaveTimer);
      clearTimeout(dropdownOpenTimer);
      dropdownLeaveTimer = setTimeout(function () {
        var innerParent = ui.closest(_this, '.' + ui.dropdown.target)[0];
        if ((ui.hasClass(_this, ui.dropdown.nameMenuPosRight) || ui.hasClass(_this, ui.dropdown.nameMenuPosLeft)) && innerParent !== undefined) {
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
    });
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
  };
  ui.onload(ui.dropdown.Start);
  ui.on(window, 'resize', function () {
    if (window.innerWidth === getScrollPos) {
      return;
    }
    dropdownClose();
    getScrollPos = window.innerWidth;
  });
})();
ui.tab = {
  targetParent: 'ui-tab-holder',
  targetTab: 'ui-tab',
  nameContent: 'ui-tab-content',
  nameToggle: 'ui-tab-toggle',
  nameAccordion: 'ui-tab-accordion',
  nameOpen: 'ui-open',
  nameOpenEase: 'ui-open-ease',
  nameActive: 'ui-active',
  dataID: 'data-ui-id',
  dataClasses: 'data-ui-classes',
  eventCloseToggleTabs: 'ui:closeToggleTabs',
  eventToggleTabsClosed: 'ui:toggleTabsClosed'
};
ui.tab.Start = function () {
  ui.on(document, 'click', '.' + ui.tab.targetParent + ' .' + ui.tab.targetTab, function (e) {
    e.preventDefault();
    var parent, tabs, index, innerTabs, outerTabs, id, content, lastOpened, innerContent, outerContent, currentContent, currentHeight, classes, accordion, toggle;
    outerTabs = [];
    outerContent = [];
    parent = ui.closest(this, '.' + ui.tab.targetParent)[0];
    tabs = ui.find('.' + ui.tab.targetTab, parent);
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
    content = ui.find('.' + ui.tab.nameContent, parent);
    innerContent = ui.find('.' + ui.tab.targetParent + ' .' + ui.tab.targetParent + ' .' + ui.tab.nameContent, parent);
    innerContent = Array.prototype.slice.call(innerContent);
    ui.each(content, function () {
      if (innerContent.indexOf(this) === -1) {
        outerContent.push(this);
      }
    });
    if (outerContent.length !== 0) {
      content = outerContent;
    }
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
        setTimeout(function () {
          if (accordion) {
            currentContent.style.height = '0';
          }
          setTimeout(function () {
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
        ui.each(content, function () {
          if (this !== currentContent) {
            if (ui.hasClass(this, ui.tab.nameOpen)) {
              lastOpened = this;
            }
          }
        });
        if (lastOpened) {
          if (accordion) {
            lastOpened.style.height = lastOpened.offsetHeight + 'px';
            lastOpened.style.overflow = 'hidden';
          }
          setTimeout(function () {
            if (accordion) {
              lastOpened.style.height = '0';
            }
            setTimeout(function () {
              ui.removeClass(lastOpened, ui.tab.nameOpen);
              if (accordion) {
                lastOpened.style.removeProperty('height');
                lastOpened.style.removeProperty('overflow');
              }
            }, accordion ? ui.globals.ease * 2 : ui.globals.fast / 2);
            ui.removeClass(lastOpened, ui.tab.nameOpenEase);
          }, 0);
        }
        setTimeout(function () {
          ui.addClass(currentContent, ui.tab.nameOpen);
          if (accordion) {
            currentHeight = currentContent.offsetHeight;
            currentContent.style.height = '0';
            currentContent.style.overflow = 'hidden';
          }
          setTimeout(function () {
            ui.addClass(currentContent, ui.tab.nameOpenEase);
            currentContent.style.height = currentHeight + 'px';
            ui.trigger(document, ui.globals.eventDomChange);
            if (accordion) {
              setTimeout(function () {
                currentContent.style.removeProperty('height');
                currentContent.style.removeProperty('overflow');
              }, accordion ? ui.globals.ease * 2 : ui.globals.fast / 2);
            }
          }, accordion ? ui.globals.fast / 2 : ui.globals.fast / 2);
        }, 0);
        ui.on(document, 'mousedown.' + ui.tab.eventCloseToggleTabs, function (ev) {
          if (ev.button !== 2) {
            var holderEl = ui.closest(ev.target, '.' + ui.tab.targetParent)[0];
            if (holderEl === parent) {
              return;
            }
            if (ui.closest(holderEl, '.' + ui.tab.targetParent)[0] !== undefined) {
              return;
            }
            if (ui.find('.' + ui.tab.nameToggle + '.' + ui.tab.nameActive, parent).length === 0) {
              return;
            }
            if (accordion) {
              currentContent.style.height = currentContent.offsetHeight + 'px';
              currentContent.style.overflow = 'hidden';
            }
            setTimeout(function () {
              if (accordion) {
                currentContent.style.height = '0';
              }
              setTimeout(function () {
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
            ui.trigger(document, ui.tab.eventToggleTabsClosed);
            ui.off(document, 'mousedown.' + ui.tab.eventCloseToggleTabs);
          }
        });
      } else {
        ui.removeClass(content, ui.tab.nameOpenEase);
        setTimeout(function () {
          ui.removeClass(content, ui.tab.nameOpen);
          ui.addClass(currentContent, ui.tab.nameOpen);
          setTimeout(function () {
            ui.addClass(currentContent, ui.tab.nameOpenEase);
            ui.trigger(document, ui.globals.eventDomChange);
          }, ui.globals.fast / 2);
        }, 0);
      }
    }
  });
};
ui.onload(ui.tab.Start);
ui.topButton = {
  target: 'ui-top-button',
  nameOpen: 'ui-open',
  nameOpenEase: 'ui-open-ease',
  stylesTarget: 'ui-round ui-ease-layout',
  stylesIcon: 'ui-icon ui-ease-layout',
  icon: 'arrow-to-top',
  titleText: 'Back to top!'
};
(function () {
  var togglerFnc = function togglerFnc() {
    var html = '<button class="' + ui.topButton.target + ' ' + ui.topButton.stylesTarget + ' ' + ui.topButton.nameOpen + '" title="' + ui.topButton.titleText + '">';
    if (ui.globals.inlineSvg) {
      html += '<svg class="' + ui.topButton.stylesIcon + '" viewBox="' + ui.globals.inlineSvgViewBox + '">' + ui.topButton.icon;
    } else {
      html += '<svg class="' + ui.topButton.stylesIcon + '"><use href="' + ui.globals.iconSrc + '#' + ui.topButton.icon + '"/>';
    }
    html += '</svg>' + '</button>';
    var topBtn;
    if (ui.find('body')[0].offsetHeight > window.innerHeight * 2 && window.innerWidth > ui.globals.sm) {
      setTimeout(function () {
        if (window.pageYOffset > window.innerHeight / 3) {
          topBtn = ui.find('.' + ui.topButton.target)[0];
          if (topBtn === undefined) {
            ui.find('body')[0].insertAdjacentHTML('beforeend', html);
            topBtn = ui.find('.' + ui.topButton.target)[0];
            setTimeout(function () {
              ui.addClass(topBtn, ui.topButton.nameOpenEase);
            }, ui.globals.slow);
          }
        } else {
          topBtn = ui.find('.' + ui.topButton.target)[0];
          if (topBtn !== undefined) {
            ui.removeClass(topBtn, ui.topButton.nameOpenEase);
            setTimeout(function () {
              if (topBtn.parentNode !== null) {
                topBtn.parentNode.removeChild(topBtn);
              }
            }, ui.globals.slow);
          }
        }
      }, 0);
    }
  };
  ui.topButton.Start = function () {
    if (ui.userAgents.desktop) {
      togglerFnc();
      ui.on(document, 'click', '.' + ui.topButton.target, function () {
        window.scrollTo(0, 0);
      });
    }
  };
  ui.onload(ui.topButton.Start);
  ui.on(window, 'resize scroll', togglerFnc);
  ui.on(document, ui.globals.eventDomChange, togglerFnc);
})();
ui.autocomplete = {
  target: 'ui-autocomplete',
  nameMenuTop: 'ui-autocomplete-t',
  nameOpen: 'ui-open',
  nameOpenEase: 'ui-open-ease',
  nameLoaded: 'ui-loaded',
  nameSelected: 'ui-selected',
  nameRound: 'ui-round',
  nameInput: 'ui-input',
  stylesList: 'ui-shadow-lg ui-ease-autocomplete',
  tagHighlight: 'b',
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
  dataSrc: 'data-ui-src',
  dataVal: 'data-ui-val'
};
ui.autocomplete.Start = function () {
  var formEventListeners,
    autocompleteRequests = [];
  var customLowerCase = function customLowerCase(string) {
    var keys = Object.keys(ui.autocomplete.customLetters);
    var chars = '(([';
    for (var i = 0; i < keys.length; i++) {
      chars += keys[i];
    }
    chars += ']))';
    var re = new RegExp(chars, 'g');
    string = string.replace(/["'\[\]\{\}()]/g, '').replace(re, function (l) {
      return ui.autocomplete.customLetters[l];
    });
    return string.toLowerCase();
  };
  formEventListeners = ui.find('.' + ui.autocomplete.nameInput + '.' + ui.autocomplete.target + ' > [type="text"]');
  ui.on(document, 'keyup', formEventListeners, function (e) {
    var timerShowLines;
    var parent = this.parentNode;
    var list = ui.find('ul', parent);
    if (list[0] === undefined) {
      return;
    }
    if (e.keyCode === 38 || e.keyCode === 40) {
      var listItems = ui.find('li', list[0]);
      if (listItems.length > 0) {
        var navIndex;
        var navSelected = ui.find('li.' + ui.autocomplete.nameSelected, list[0]);
        if (navSelected.length > 0) {
          navIndex = Array.prototype.slice.call(listItems).indexOf(navSelected[0]);
          if (e.keyCode === 40) {
            navIndex += 1;
            if (navIndex >= listItems.length) {
              navIndex = 0;
            }
          } else if (e.keyCode === 38) {
            navIndex -= 1;
            if (navIndex < 0) {
              navIndex = 0;
            }
          }
        } else {
          if (e.keyCode === 40) {
            navIndex = 0;
          } else if (e.keyCode === 38) {
            navIndex = listItems.length - 1;
          }
        }
        ui.removeClass(navSelected, ui.autocomplete.nameSelected);
        ui.addClass(listItems[navIndex], ui.autocomplete.nameSelected);
        this.value = listItems[navIndex].textContent;
      }
    } else if (e.keyCode === 13 || e.keyCode === 27 || e.keyCode === undefined) {
      if (list.length >= 1) {
        ui.removeClass(parent, ui.autocomplete.nameOpenEase);
        setTimeout(function () {
          ui.removeClass(parent, ui.autocomplete.nameOpen);
          list[0].innerHTML = '';
        }, ui.globals.ease);
      }
    } else if (e.keyCode !== 16 && e.keyCode !== 17 && e.keyCode !== 18) {
      var val = this.value;
      val = customLowerCase(val);
      val = val.replace(/\s+$/g, '');
      if (val !== '') {
        var getVal = parent.getAttribute(ui.autocomplete.dataVal);
        if (getVal !== null && getVal !== '') {
          var src = parent.getAttribute(ui.autocomplete.dataSrc);
          if (src !== null && src !== '') {
            ui.ajax({
              url: src + '?' + ui.autocomplete.queryParameter + '=' + val,
              beforesend: function beforesend(xhr) {
                Array.prototype.forEach.call(autocompleteRequests, function (item, n) {
                  item.abort();
                  autocompleteRequests.splice(n, 1);
                });
                autocompleteRequests.push(xhr);
              },
              callback: function callback(status, response) {
                if (status === 'success') {
                  response = JSON.parse(response);
                  if (response.length !== 'undefined') {
                    var k = 0;
                    ui.addClass(parent, ui.autocomplete.nameOpen);
                    setTimeout(function () {
                      ui.addClass(parent, ui.autocomplete.nameOpenEase);
                    }, 0);
                    ui.removeClass(parent, ui.autocomplete.nameMenuTop);
                    list[0].innerHTML = '';
                    Array.prototype.forEach.call(response, function (item) {
                      var key = item[getVal];
                      var txt = '';
                      if (key !== null) {
                        if (typeof key === 'boolean') {
                          return;
                        }
                        var modified = key;
                        if (typeof key === 'number') {
                          modified = modified.toString().match(val, 'g');
                        } else {
                          modified = customLowerCase(modified);
                          modified = modified.match(val, 'g');
                        }
                        if (modified !== null) {
                          clearTimeout(timerShowLines);
                          timerShowLines = setTimeout(function () {
                            var offset = parent.getBoundingClientRect();
                            var tHeight = parent.offsetHeight;
                            var dHeight = list[0].offsetHeight;
                            if (offset.top + parseInt(tHeight + dHeight) >= window.innerHeight) {
                              if (offset.top - parseInt(tHeight + dHeight) + tHeight > 0) {
                                ui.addClass(parent, ui.autocomplete.nameMenuTop);
                              } else {
                                list[0].style.height = dHeight - (offset.top + parseInt(tHeight + dHeight) - window.innerHeight) - ui.autocomplete.scrollbarSize + 'px';
                              }
                            }
                          }, 10);
                          k += 1;
                          if (k > 5) {
                            return;
                          }
                          if (typeof key === 'number') {
                            for (var i = 0; i < key.toString().length; i++) {
                              if (i === key.toString().indexOf(modified)) {
                                txt += '<' + ui.autocomplete.tagHighlight + '>';
                              }
                              if (i === key.toString().indexOf(modified) + val.length) {
                                txt += '</' + ui.autocomplete.tagHighlight + '>';
                              }
                              txt += key.toString().charAt(i);
                            }
                          } else {
                            for (var j = 0; j < key.length; j++) {
                              if (j === customLowerCase(key).indexOf(modified)) {
                                txt += '<' + ui.autocomplete.tagHighlight + '>';
                              }
                              if (j === customLowerCase(key).indexOf(modified) + val.length) {
                                txt += '</' + ui.autocomplete.tagHighlight + '>';
                              }
                              txt += key.charAt(j);
                            }
                          }
                          list[0].insertAdjacentHTML('beforeend', '<li>' + txt + '</li>');
                        }
                      }
                    });
                  }
                  response = '';
                }
              }
            });
          }
        } else {
          return;
        }
      } else {
        ui.removeClass(parent, ui.autocomplete.nameOpenEase);
        setTimeout(function () {
          ui.removeClass(list, ui.autocomplete.nameOpen);
          list[0].innerHTML = '';
        }, ui.globals.ease);
      }
    }
  });
  ui.on(document, 'keydown', formEventListeners, function (e) {
    if (e.keyCode === 13) {
      var parent = this.parentNode;
      var list = ui.find('li.' + ui.autocomplete.nameSelected, parent);
      if (list.length > 0) {
        e.preventDefault();
        e.stopPropagation();
        ui.removeClass(parent, ui.autocomplete.nameOpenEase);
        setTimeout(function () {
          ui.removeClass(parent, ui.autocomplete.nameOpen);
        }, ui.globals.ease);
      }
    }
  });
  ui.on(document, 'focus', formEventListeners, function () {
    var parent = this.parentNode;
    var styles = ui.autocomplete.stylesList;
    this.setAttribute('autocomplete', 'off');
    ui.addClass(parent, ui.autocomplete.nameOpen);
    ui.removeClass(parent, ui.autocomplete.nameMenuTop);
    if (ui.hasClass(parent, ui.autocomplete.nameRound)) {
      styles += ' ' + ui.autocomplete.nameRound;
    }
    parent.insertAdjacentHTML('beforeend', '<ul class="' + styles + '"></ul>');
  });
  ui.on(document, 'blur', formEventListeners, function () {
    var parent = this.parentNode;
    var list = ui.find('ul', parent);
    ui.removeClass(parent, ui.autocomplete.nameOpenEase);
    setTimeout(function () {
      ui.removeClass(parent, ui.autocomplete.nameOpen);
      if (list.length > 0) {
        parent.removeChild(list[0]);
      }
    }, ui.globals.ease);
  });
  ui.on(document, 'mousedown', '.' + ui.autocomplete.nameInput + '.' + ui.autocomplete.target + '.' + ui.autocomplete.nameOpen + ' li', function () {
    var parent = ui.closest(this, '.' + ui.autocomplete.target);
    var target = ui.find('[type="text"]', parent);
    target.value = this.textContent;
    ui.trigger(target, 'keyup');
  });
};
ui.onload(ui.autocomplete.Start);
ui.currencySpinner = {
  target: 'ui-currency-spinner',
  nameUp: 'ui-currency-up',
  nameDown: 'ui-currency-down',
  nameInput: 'ui-input',
  decimals: false
};
(function () {
  var cacheCurrencySpinner;
  ui.currencySpinner.Start = function () {
    var convert = function convert(s) {
      var regDecimal = new RegExp(/(\,+\d+)/g);
      var regClear = new RegExp(/(\s)|(\.)|(\,)/g);
      if (ui.currencySpinner.decimals) {
        var number = s.replace(regDecimal, '');
        var decimal = s.match(regDecimal);
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
      var parent = ui.closest(that, '.' + ui.currencySpinner.target);
      var input = ui.find('[type="text"]', parent);
      var nav = [];
      nav.up = ui.hasClass(that, ui.currencySpinner.nameUp);
      nav.down = ui.hasClass(that, ui.currencySpinner.nameDown);
      var val = convert(input.value);
      if (nav.up || nav.down) {
        var step = convert(input.getAttribute('step'));
        var min = convert(input.getAttribute('min'));
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
    }
    ui.on(document, 'click', '.' + ui.currencySpinner.nameUp + ',.' + ui.currencySpinner.nameDown, function (e) {
      e.preventDefault();
      currencyChange(this);
    });
    ui.on(document, 'keypress', '.' + ui.currencySpinner.target + ' input[type="text"]', function (e) {
      var char, ignoreList;
      var isRefresh = false;
      if (e.which) {
        char = e.which;
      } else {
        char = e.keyCode;
        if (char === 116) {
          isRefresh = true;
        }
      }
      ignoreList = [8, 9, 35, 36, 37, 39];
      if (ui.currencySpinner.decimals) {
        ignoreList.push(44);
      }
      if (ignoreList.indexOf(char) === -1 && !isRefresh && (char < 48 || char > 57)) {
        e.preventDefault();
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
        var input = ui.find('.' + ui.currencySpinner.target + ' .' + ui.currencySpinner.nameInput + ' input')[0];
        var min = convert(input.getAttribute('min'));
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
  };
  ui.onload(ui.currencySpinner.Start);
})();
ui.dualMultiSelect = {
  target: 'ui-dual-multi-select',
  nameSelectMulti: 'ui-select-multi',
  dataIndex: 'data-ui-index'
};
(function () {
  var resetOptions, movetoSource;
  ui.dualMultiSelect.Start = function () {
    resetOptions = function resetOptions(selects, isSubmit) {
      Array.prototype.forEach.call(ui.find('option', selects[0]), function (item) {
        if (ui.userAgents.mobile) {
          item.selected = true;
        } else {
          item.selected = false;
        }
      });
      Array.prototype.forEach.call(ui.find('option', selects[1]), function (item) {
        if (ui.userAgents.mobile || isSubmit !== undefined) {
          item.selected = true;
        } else {
          item.selected = false;
        }
      });
    };
    ui.dualMultiSelect.Init = function () {
      Array.prototype.forEach.call(ui.find('.' + ui.dualMultiSelect.target), function (el) {
        var arr = [];
        var arrStart = [];
        var selects = ui.find('.' + ui.dualMultiSelect.nameSelectMulti + ' select[multiple]', el);
        var name = selects[0].name;
        selects[0].removeAttribute('name');
        selects[1].name = name;
        var options = ui.find('option', selects[0]);
        Array.prototype.forEach.call(options, function (item) {
          var index = item.getAttribute(ui.dualMultiSelect.dataIndex);
          if (index !== null && index !== '' && !isNaN(index)) {
            arr.push(index);
            arrStart.push(index);
          } else {
            arr.push('');
          }
        });
        arrStart = arrStart.sort();
        var userArr = arrStart;
        arrStart = Number(arrStart[arrStart.length - 1]);
        if (isNaN(arrStart)) {
          arrStart = 0;
          for (var i = 0; i < options.length; i++) {
            arrStart += 1;
            arr[i] = arrStart.toString();
          }
        } else {
          for (var j = 1; j <= options.length; j++) {
            if (arr[j] === '') {
              arrStart += 1;
              arr[j] = arrStart.toString();
            }
          }
        }
        Array.prototype.forEach.call(options, function (item, i) {
          item.setAttribute(ui.dualMultiSelect.dataIndex, arr[i]);
          if (userArr.length > 0) {
            var index = Number(arr.indexOf(userArr[i]));
            if (index > -1) {
              selects[1].appendChild(options[index]);
            }
          } else {
            var selected = item.getAttribute('selected');
            if (selected !== null) {
              selects[1].appendChild(item);
            }
          }
        });
        resetOptions(selects);
      });
    };
    ui.dualMultiSelect.Init();
    movetoSource = function movetoSource(that, selects) {
      var i = Number(that.getAttribute(ui.dualMultiSelect.dataIndex));
      var sourceList = ui.find('option', selects[0]);
      if (sourceList.length === 0) {
        selects[0].appendChild(that);
      } else if (sourceList.length === 1) {
        var firstIndex = Number(sourceList[0].getAttribute(ui.dualMultiSelect.dataIndex));
        if (i > firstIndex) {
          selects[0].appendChild(that);
        } else {
          selects[0].insertBefore(that, sourceList[0]);
        }
      } else {
        var arr = [];
        var inserted = false;
        for (var j = 0; j < sourceList.length; j++) {
          var otherIndex = Number(sourceList[j].getAttribute(ui.dualMultiSelect.dataIndex));
          arr.push(otherIndex);
          if (otherIndex - 1 >= i) {
            inserted = true;
            selects[0].insertBefore(that, sourceList[j]);
            break;
          }
        }
        if (!inserted) {
          if (i > arr.sort()[arr.length - 1]) {
            selects[0].appendChild(that);
          }
        }
      }
    };
    ui.on(document, 'change', '.' + ui.dualMultiSelect.target + ' .' + ui.dualMultiSelect.nameSelectMulti + ' select[multiple]', function (e) {
      if (!e.isTrusted) {
        return;
      }
      var that;
      var options = Array.prototype.slice.call(e.target);
      for (var i = 0; options.length; i++) {
        if (options[i].selected) {
          that = options[i];
          break;
        }
      }
      var selects = ui.closest(that, '.' + ui.dualMultiSelect.target)[0];
      var multi = ui.find('.' + ui.dualMultiSelect.nameSelectMulti + ' select[multiple]', selects);
      var parent = ui.closest(that, '.' + ui.dualMultiSelect.nameSelectMulti + ' select[multiple]')[0];
      var dir = Array.prototype.slice.call(multi).indexOf(parent);
      if (dir === 0) {
        multi[1].appendChild(that);
      } else {
        movetoSource(that, multi);
      }
      resetOptions(multi);
    });
    ui.on(document, 'reset', 'form', function () {
      setTimeout(function () {
        Array.prototype.forEach.call(ui.find('.' + ui.dualMultiSelect.target), function (el) {
          var index;
          var selected;
          var selects = ui.find('.' + ui.dualMultiSelect.nameSelectMulti + ' select[multiple]', el);
          Array.prototype.forEach.call(ui.find('option', selects[1]), function (item) {
            selected = item.getAttribute('selected');
            index = Number(item.getAttribute(ui.dualMultiSelect.dataIndex)) - 1;
            if (selected === null) {
              movetoSource(item, selects);
            }
          });
          var targetList = ui.find('option', selects[1]);
          Array.prototype.forEach.call(ui.find('option', selects[0]), function (item) {
            selected = item.getAttribute('selected');
            if (selected !== null) {
              if (targetList.length === 0) {
                selects[1].appendChild(item);
              } else {
                selects[1].insertBefore(item, targetList[index]);
              }
            }
          });
          resetOptions(selects);
        });
      }, 0);
    });
    ui.on(document, 'submit', 'form', function (e) {
      Array.prototype.forEach.call(e.target, function (item) {
        if (item.tagName === 'SELECT' && item.multiple) {
          var selects = ui.closest(item, '.' + ui.dualMultiSelect.target)[0];
          var multi = ui.find('.' + ui.dualMultiSelect.nameSelectMulti + ' select[multiple]', selects);
          if (multi !== undefined) {
            resetOptions(multi, true);
          }
        }
      });
    });
  };
  ui.onload(ui.dualMultiSelect.Start);
  ui.on(document, ui.globals.eventAjaxCallback, function () {
    if (ui.ajax.classNames.indexOf(ui.dualMultiSelect.target) > 0) {
      ui.dualMultiSelect.Init();
    }
  });
})();
ui.forms = {
  targetText: 'ui-input',
  targetSelect: 'ui-select',
  targetSelectMulti: 'ui-select-multi',
  targetTextarea: 'ui-textarea',
  targetFile: 'ui-file',
  targetIndeterminate: 'ui-indeterminate',
  nameFocus: 'ui-form-focus',
  nameHolder: 'ui-form-holder',
  nameHolderFocus: 'ui-form-holder-focus',
  nameHasClear: 'ui-form-has-clear',
  nameClear: 'ui-form-clear',
  nameShowPass: 'ui-pass-toggle',
  nameNumber: 'ui-number',
  nameWord: 'ui-word',
  nameFormIcon: 'ui-form-icon',
  nameRequired: 'ui-required',
  nameRequiredMsg: 'ui-required-msg',
  nameRequiredMsgShow: 'ui-show',
  nameError: 'ui-form-error',
  nameOpen: 'ui-open',
  nameOpenEase: 'ui-open-ease',
  nameIcon: 'ui-icon',
  tagFileInfo: 'i'
};
(function () {
  var clearForms;
  ui.forms.Start = function () {
    function formFocus(that, type) {
      var classes = [ui.forms.targetText, ui.forms.targetSelect, ui.forms.targetSelectMulti, ui.forms.targetTextarea];
      var holder = ui.closest(that, '.' + ui.forms.nameHolder);
      if (holder.length === 1) {
        ui.removeClass('.' + ui.forms.nameHolderFocus, ui.forms.nameHolderFocus);
        if (type === 'add') {
          ui.addClass(holder, ui.forms.nameHolderFocus);
        }
      } else {
        ui.removeClass('.' + ui.forms.nameFocus, ui.forms.nameFocus);
      }
      for (var i = 0; i < classes.length; i++) {
        var parent = ui.closest(that, '.' + classes[i]);
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
    clearForms = function clearForms(that) {
      if (that.readOnly) return;
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
    ui.forms.Init = function () {
      Array.prototype.forEach.call(ui.find('.' + ui.forms.targetText + '.' + ui.forms.nameHasClear + ' input'), function (el) {
        setTimeout(function () {
          clearForms(el);
        }, 0);
      });
    };
    ui.forms.Init();
    ui.on(document, 'focus', '.' + ui.forms.targetText + ' input,' + '.' + ui.forms.targetSelect + ' select,' + '.' + ui.forms.targetSelectMulti + ' select,' + '.' + ui.forms.targetTextarea + ' textarea', function () {
      formFocus(this, 'add');
    });
    ui.on(document, 'blur', 'input,select,textarea', function () {
      formFocus(this, 'remove');
    });
    ui.on(document, 'change', '.' + ui.forms.targetFile + ' input', function () {
      var info = ui.find(ui.forms.tagFileInfo, this.parentElement)[0];
      if (info !== undefined) {
        info.innerHTML = this.value;
      }
    });
    ui.on(document, 'click', 'input[type="checkbox"].' + ui.forms.targetIndeterminate, function () {
      if (this.readOnly) {
        this.checked = this.readOnly = false;
      } else if (!this.checked) {
        this.readOnly = this.indeterminate = true;
      }
    });
    ui.on(document, 'click touchend', '.' + ui.forms.nameShowPass, function () {
      var that = ui.find('input', this.parentElement)[0];
      if (that.getAttribute('type') === 'password') {
        that.setAttribute('type', 'text');
      } else {
        that.setAttribute('type', 'password');
      }
    });
    ui.on(document, 'input', '.' + ui.forms.targetText + ' > .' + ui.forms.nameNumber + ',' + '.' + ui.forms.targetText + ' > .' + ui.forms.nameWord, function () {
      var newValues = '';
      var re = null;
      if (ui.hasClass(this, ui.forms.nameNumber)) {
        re = '[0-9]*';
      } else if (ui.hasClass(this, ui.forms.nameWord)) {
        re = '^[a-zA-Z\s]*';
      } else this.value = newValues;
      re = new RegExp(re, 'g');
      var getValues = this.value.match(re);
      if (getValues) {
        Array.prototype.forEach.call(getValues, function (item) {
          return newValues += item;
        });
        this.value = newValues;
      }
    });
    if (ui.userAgents.mobile) {
      ui.on(document, 'mousedown', '[class*="' + ui.forms.nameFormIcon + '"] > button.' + ui.forms.nameIcon + ',' + '[class*="' + ui.forms.nameFormIcon + '"] > input.' + ui.forms.nameIcon, function (e) {
        e.stopPropagation();
        ui.trigger(this, 'click');
      });
      ui.on(document, 'click', '.' + ui.forms.targetText + ' > [type="submit"]', function () {
        var form = ui.closest(this, '.' + ui.forms.targetText)[0];
        ui.trigger(form, 'submit');
      });
    }
    ui.on(document, 'reset', 'form', function (e) {
      var forms = Array.prototype.slice.call(e.target);
      var errors = ui.find('.' + ui.forms.nameError, this);
      var reqMessages = ui.find('.' + ui.forms.nameRequiredMsg, this);
      setTimeout(function () {
        Array.prototype.forEach.call(forms, function (el) {
          if (!ui.hasClass(el, ui.forms.nameRequired)) {
            ui.trigger(el, 'keydown keyup');
          }
        });
        ui.removeClass(errors, ui.forms.nameError);
        ui.removeClass(reqMessages, ui.forms.nameRequiredMsgShow);
      }, 0);
    });
    ui.on(document, 'change keyup', '.' + ui.forms.targetText + '.' + ui.forms.nameHasClear + ' input', function () {
      clearForms(this);
    });
    ui.on(document, 'click', '.' + ui.forms.targetText + '.' + ui.forms.nameHasClear + ' .' + ui.forms.nameClear, function () {
      var form = ui.find('input', this.parentElement)[0];
      form.value = '';
      if (!ui.hasClass(form, ui.forms.nameRequired)) {
        ui.trigger(form, 'change keydown keyup');
      }
    });
  };
  ui.onload(ui.forms.Start);
  ui.on(document, ui.globals.eventAjaxCallback, function () {
    if (ui.ajax.classNames.indexOf(ui.forms.nameClear) > 0) {
      ui.forms.Init();
    }
  });
})();
ui.formSpinner = {
  target: 'ui-form-spinner',
  nameUp: 'ui-spinner-up',
  nameDown: 'ui-spinner-down'
};
ui.formSpinner.Start = function () {
  ui.on(document, 'click', '.' + ui.formSpinner.nameUp + ',.' + ui.formSpinner.nameDown, function () {
    var parent = ui.closest(this, '.' + ui.formSpinner.target);
    var input = ui.find('[type="text"]', parent);
    var val = Number(input.value);
    var max = input.getAttribute('max');
    var min = input.getAttribute('min');
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
  ui.formSpinner.Init = function () {
    Array.prototype.forEach.call(ui.find('.' + ui.formSpinner.target), function (el) {
      var that = ui.find('[type="text"]', el)[0];
      that.value = that.getAttribute('value');
    });
  };
  ui.formSpinner.Init();
};
ui.onload(ui.formSpinner.Start);
ui.on(document, ui.globals.eventAjaxCallback, function () {
  if (ui.ajax.classNames.indexOf(ui.formSpinner.target) > -1) {
    ui.formSpinner.Init();
  }
});
ui.requiredForms = {
  target: 'ui-required',
  targetAccept: 'ui-required-holder',
  nameMsg: 'ui-required-msg',
  nameTypePrefix: 'ui-',
  nameSuccess: 'ui-success',
  nameShow: 'ui-show',
  nameHolder: 'ui-form-holder',
  nameInput: 'ui-input',
  nameSelect: 'ui-select',
  nameTextarea: 'ui-textarea',
  nameFile: 'ui-file',
  nameIndeterminate: 'ui-indeterminate',
  nameError: 'ui-form-error',
  scrollingTopSpacing: 20,
  rexMail: '([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}(;|$))',
  eventShowErr: 'ui:requiredShowErr'
};
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
    checkForms = function checkForms(el) {
      var showAlertTimer;
      showErr = function showErr() {
        clearTimeout(showAlertTimer);
        showAlertTimer = setTimeout(function () {
          ui.trigger(document, ui.requiredForms.eventShowErr);
        }, ui.globals.ease);
        if (el.type === 'radio') {
          radios = ui.find('[type="radio"][name="' + that.name + '"]');
          ui.removeClass(radios, ui.requiredForms.nameSuccess);
        } else ui.removeClass(el, ui.requiredForms.nameSuccess);
        ui.addClass(p, ui.requiredForms.nameError);
        if (showMsg) ui.addClass(next, ui.requiredForms.nameShow);
      };
      if (type !== ui.requiredForms.targetAccept) {
        val = el.value.toLowerCase();
        val = val.replace(/^\s+|\s+$/g, '');
        if (val === '') {
          showErr();
        }
      } else {
        if (el.type === 'radio') {
          radiosCheck = 0;
          radios = ui.find('[type="radio"][name="' + el.name + '"]');
          for (i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
              radiosCheck += 1;
            }
          }
          if (radiosCheck === 0) {
            showErr();
          }
        } else {
          if (!el.checked) {
            if (ui.hasClass(el, ui.requiredForms.nameIndeterminate) && el.indeterminate) {
              return;
            }
            showErr();
          }
        }
      }
      if (type !== ui.requiredForms.nameSelect) {
        min = el.getAttribute('minlength');
        if (min !== null && min !== '' && !isNaN(min)) {
          if (val.length < min) {
            showErr();
          }
        }
      }
      if (type !== ui.requiredForms.nameSelect) {
        min = el.getAttribute('min');
        if (min !== null && min !== '' && !isNaN(min)) {
          if (!isNaN(val)) {
            if (Number(val) < Number(min)) {
              showErr();
            }
          } else {
            showErr();
          }
        }
        max = el.getAttribute('max');
        if (max !== null && max !== '' && !isNaN(max)) {
          if (!isNaN(val)) {
            if (Number(val) > Number(max)) {
              showErr();
            }
          } else {
            showErr();
          }
        }
      }
      if (type === ui.requiredForms.nameTypePrefix + 'email') {
        reMail = new RegExp(ui.requiredForms.rexMail);
        if (val.match(reMail) === null) {
          showErr();
        }
      }
    };
    checkHolder = ui.closest(that, '.' + ui.requiredForms.nameHolder)[0];
    if (checkHolder === undefined) {
      parentType = type;
      if (type !== ui.requiredForms.nameSelect && type !== ui.requiredForms.nameTextarea && type !== ui.requiredForms.targetAccept && type !== ui.requiredForms.nameFile) {
        parentType = ui.requiredForms.nameInput;
      }
      p = ui.closest(that, '.' + parentType)[0];
      hideErr();
      checkForms(that);
    } else {
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
  }
  ui.on(document, 'submit', 'form', function (e) {
    var i, elems, formElems, success, getIndex, getRect, scrollIndex, scrollPos;
    formElems = [];
    elems = e.target.elements;
    for (i = 0; i < elems.length; i++) {
      if (ui.hasClass(elems[i], ui.requiredForms.target) && !elems[i].disabled) {
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
      if (ui.modal !== undefined) {
        if (ui.hasClass(document, ui.modal.nameModalOpened)) {
          return;
        }
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
};
ui.onload(ui.requiredForms.Start);
ui.textareaCounter = {
  target: 'ui-textarea',
  nameToggle: 'ui-textarea-toggle',
  nameChange: 'ui-changed',
  dataCounter: 'data-ui-counter',
  dataChange: 'data-ui-changed'
};
ui.textareaCounter.Start = function () {
  function counter(el) {
    var p, v, total, length;
    p = el.parentElement;
    v = el.value;
    total = p.getAttribute(ui.textareaCounter.dataCounter);
    length = total - v.length;
    if (length <= 0) {
      length = 0;
      p.setAttribute(ui.textareaCounter.dataChange, '0');
      el.value = v.substring(0, total);
    }
    ui.addClass(p, ui.textareaCounter.nameChange);
    p.setAttribute(ui.textareaCounter.dataChange, length);
    return false;
  }
  ui.textareaCounter.Init = function () {
    ui.each('.' + ui.textareaCounter.target + '[' + ui.textareaCounter.dataCounter + ']:not(.' + ui.textareaCounter.nameToggle + '):not(.' + ui.textareaCounter.nameChange + ')', function () {
      counter(ui.find('textarea', this)[0]);
    });
  };
  ui.textareaCounter.Init();
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
};
ui.onload(ui.textareaCounter.Start);
ui.on(document, ui.globals.eventAjaxCallback, function () {
  if (ui.ajax.data.indexOf(ui.textareaCounter.dataCounter) > 0) {
    ui.textareaCounter.Init();
  }
});
ui.icons = {
  nameIcon: 'ui-icon',
  tagIcon: 'use',
  iconSrc: '../dist/icons.svg'
};
ui.icons.Start = function () {
  if (!ui.userAgents.ie) {
    return;
  }
  var iconsList = ui.find(ui.icons.tagIcon);
  var page = ui.find('body')[0];
  var sprites = ui.find('body > svg');
  Array.prototype.forEach.call(iconsList, function (el, i) {
    var href = el.getAttribute('href');
    var newHref = href.split('#')[1];
    if (newHref !== undefined) {
      el.removeAttribute('href');
      el.setAttribute('href');
      el.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#' + newHref);
    }
    if (sprites.length === 0 && i + 1 === iconsList.length) {
      ui.ajax({
        url: ui.icons.iconSrc,
        callback: function callback(status, response) {
          if (status === 'success') {
            page.insertAdjacentHTML('afterbegin', response);
            ui.find('body > svg')[0].style.display = 'none';
            iconsList = '';
          }
        }
      });
    }
  });
};
ui.onload(ui.icons.Start);
ui.on(document, ui.globals.eventAjaxCallback, function () {
  if (ui.ajax.classNames.indexOf(ui.formSpinner.nameIcon) > -1) {
    ui.icons.Start();
  }
});
ui.card = {
  targetClose: 'ui-card-close',
  stylesClosing: 'ui-card-close-wait ui-ease-layout'
};
ui.card.Start = function () {
  ui.on(document, 'click', '.' + ui.card.targetClose, function () {
    var parentEl = this.parentElement;
    ui.addClass(parentEl, ui.card.stylesClosing);
    setTimeout(function () {
      parentEl.parentNode.removeChild(parentEl);
    }, ui.globals.ease * 2);
  });
};
ui.onload(ui.card.Start);
ui.headerSticky = {
  target: 'ui-header-sticky',
  nameSticky: 'ui-sticky',
  nameXS: 'ui-sticky-xs',
  nameSM: 'ui-sticky-sm',
  nameMD: 'ui-sticky-md',
  nameLG: 'ui-sticky-lg',
  nameXL: 'ui-sticky-xl',
  dataClasses: 'data-ui-classes',
  dataSpace: 'data-ui-space'
};
(function () {
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
    }
    var topSpace = Number(header.getAttribute(ui.headerSticky.dataSpace));
    if (window.pageYOffset > header.getBoundingClientRect().top) {
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
      body.style.paddingTop = header.offsetHeight + topSpace + 'px';
      ui.addClass(header, ui.headerSticky.nameSticky);
      if (classes !== null && classes !== '') ui.addClass(header, classes);
    } else {
      stickyClear();
    }
  };
  ui.headerSticky.Start = function () {
    header = ui.find('.' + ui.headerSticky.target)[0];
    if (header === undefined) {
      return;
    }
    body = ui.find('body')[0];
    size = '';
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
  ui.onload(ui.headerSticky.Start);
  ui.on(window, 'scroll', stickyLoad);
  ui.on(document, ui.globals.eventDomChange, stickyLoad);
})();
ui.alerts = {
  targetDialog: 'ui-alerts-dialog',
  targetMsg: 'ui-alerts-msg',
  targetBg: 'ui-alerts-bg',
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
  nameOpen: 'ui-open',
  nameOpenEase: 'ui-open-ease',
  nameShow: 'ui-show',
  nameShowEase: 'ui-show-ease',
  nameIcon: 'ui-icon',
  stylesDialog: 'ui-round ui-shadow-lg ui-ease-layout ui-ease-in-out',
  stylesCloseDialog: 'ui-ease-layout',
  stylesDialogBtnHolder: 'ui-ease-1st-btn',
  stylesMsg: 'ui-round ui-shadow-lg ui-ease-layout ui-ease-in-out',
  stylesMsgTheme: '',
  stylesBg: 'ui-ease-layout',
  closeIcon: 'remove',
  dialogMessages: false,
  successBtnValue: 'success',
  errorBtnValue: 'error',
  messageTimer: 6000,
  posDefault: 'c',
  posCenter: 'c',
  posTopRight: 'tr',
  posTopLeft: 'tl',
  posBottomRight: 'br',
  posBottomLeft: 'bl',
  themeSuccess: 'success',
  themeWarning: 'warning',
  themeDanger: 'danger',
  msgDialogSuccess: 'OK',
  eventCloseDialog: 'ui:closeAlertsDialog'
};
(function () {
  var pageYPos,
    cancelCloseDialog,
    messageQueue = [];
  ui.alerts.Start = function () {
    ui.alerts.closeDialog = function () {
      var dialog = ui.find('.' + ui.alerts.targetDialog)[0];
      ui.removeClass(dialog, ui.alerts.nameShowEase);
      setTimeout(function () {
        dialog.parentNode.removeChild(dialog);
        var bg = ui.find('.' + ui.alerts.targetBg);
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
      if (props === undefined) {
        return;
      }
      if (props.msg === undefined) {
        return;
      }
      var dialog = ui.find('.' + ui.alerts.targetDialog)[0];
      if (dialog !== undefined) {
        return;
      }
      if (ui.userAgents.mobile) {
        pageYPos = window.pageYOffset;
      }
      var closeBtn = '';
      cancelCloseDialog = false;
      var buttons = '';
      if (props.custom !== undefined) {
        for (var key in props.custom) {
          var val = props.custom[key];
          if (val !== '') {
            buttons += '<button class="' + ui.alerts.nameDialogCustom + '" value="' + key + '">' + val + '</button>';
          }
        }
      }
      var success;
      if (props.success === undefined) {
        success = ui.alerts.msgDialogSuccess;
      } else {
        success = props.success;
      }
      buttons += '<button class="' + ui.alerts.nameDialogSuccess + '" value="' + ui.alerts.successBtnValue + '">' + success + '</button>';
      if (props.error !== undefined) {
        buttons += '<button class="' + ui.alerts.nameDialogError + '" value="' + ui.alerts.errorBtnValue + '">' + props.error + '</button>';
        cancelCloseDialog = true;
        closeBtn = '<button class="' + ui.alerts.nameCloseDialog + ' ' + ui.alerts.stylesCloseDialog + '">';
        if (ui.globals.inlineSvg) {
          closeBtn += '<svg class="' + ui.alerts.nameIcon + '" viewBox="' + ui.globals.inlineSvgViewBox + '">' + ui.alerts.closeIcon;
        } else {
          closeBtn += '<svg class="' + ui.alerts.nameIcon + '"><use href="' + ui.globals.iconSrc + '#' + ui.alerts.closeIcon + '"/>';
        }
        closeBtn += '</svg>' + '</button>';
      }
      var bgOld = ui.find('.' + ui.alerts.targetBg)[0];
      var html = '<div class="' + ui.alerts.targetDialog + ' ' + ui.alerts.stylesDialog + '">' + closeBtn + '<div class="' + ui.alerts.nameDialogMsg + '">' + props.msg + '</div>' + '<div class="' + ui.alerts.nameDialogBtnHolder + ' ' + ui.alerts.stylesDialogBtnHolder + '">' + buttons + '</div>' + '</div>';
      if (bgOld === undefined) {
        html += '<div class="' + ui.alerts.targetBg + ' ' + ui.alerts.stylesBg + '">' + '</div>';
      }
      ui.find('body')[0].insertAdjacentHTML('beforeend', html);
      ui.addClass(document, ui.alerts.nameDialogOpened);
      var bgNew = ui.find('.' + ui.alerts.targetBg);
      ui.addClass(bgNew, ui.alerts.nameOpen);
      setTimeout(function () {
        ui.addClass(bgNew, ui.alerts.nameOpenEase);
        setTimeout(function () {
          dialog = ui.find('.' + ui.alerts.targetDialog);
          ui.addClass(dialog, ui.alerts.nameShow);
          ui.find('.' + ui.alerts.nameDialogSuccess)[0].focus();
          setTimeout(function () {
            ui.addClass(dialog, ui.alerts.nameShowEase);
          }, 10);
          ui.on('.' + ui.alerts.nameDialogBtnHolder + ' button', 'click', function () {
            var _this2 = this;
            var theme = '';
            if (ui.hasClass(this, ui.alerts.nameDialogSuccess)) {
              theme = ui.alerts.themeSuccess;
            } else if (ui.hasClass(this, ui.alerts.nameDialogError)) {
              theme = ui.alerts.themeDanger;
            }
            var msgTimer;
            if (ui.alerts.dialogMessages) {
              msgTimer = ui.globals.ease;
            } else {
              msgTimer = 0;
            }
            ui.alerts.closeDialog();
            var msg = this.textContent;
            setTimeout(function () {
              if (ui.alerts.dialogMessages) {
                ui.alerts.message({
                  msg: msg,
                  theme: theme
                });
              }
              if (props.callback !== undefined) {
                setTimeout(function () {
                  props.callback.call(_this2, _this2.value);
                }, ui.globals.ease * 2);
              }
            }, msgTimer);
          });
          if (cancelCloseDialog) {
            var userCloseDialog = function userCloseDialog() {
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
              }
            });
          }
        }, ui.globals.ease);
      }, 10);
      return false;
    };
    ui.alerts.closeMessage = function (win) {
      ui.removeClass(win, ui.alerts.nameShowEase);
      setTimeout(function () {
        ui.removeClass(win, ui.alerts.nameShow);
        if (win.parentNode !== null) {
          win.parentNode.removeChild(win);
        }
      }, ui.globals.ease);
    };
    ui.alerts.message = function (props) {
      if (props === undefined) {
        return;
      }
      if (props.msg === undefined) {
        return;
      }
      var arrPos = [ui.alerts.posCenter, ui.alerts.posTopRight, ui.alerts.posTopLeft, ui.alerts.posBottomRight, ui.alerts.posBottomLeft];
      if (arrPos.indexOf(props.pos) < 0) {
        props.pos = ui.alerts.posDefault;
      }
      var msgStyles = '';
      var arrTheme = [ui.alerts.themeSuccess, ui.alerts.themeWarning, ui.alerts.themeDanger];
      if (arrTheme.indexOf(props.theme) > -1) {
        msgStyles += ui.alerts.nameMsgThemePrefix + props.theme + ' ';
      } else if (ui.alerts.stylesMsgTheme !== '') {
        msgStyles += ui.alerts.stylesMsgTheme + ' ';
      }
      var holder = ui.find('.' + ui.alerts.nameMsgHolder)[0];
      var html = '';
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
      }
      var message = ui.find('.' + ui.alerts.targetMsg + ':last-child');
      ui.addClass(message, ui.alerts.nameShow);
      setTimeout(function () {
        ui.addClass(message, ui.alerts.nameShowEase);
        if (holder !== undefined) {
          var prev = ui.find('.' + ui.alerts.targetMsg + '.' + ui.alerts.namePosPrefix + props.pos);
          Array.prototype.forEach.call(prev, function (el, j, arr) {
            var slide = 0;
            for (var i = j + 1; i < arr.length; i++) {
              slide += prev[i].offsetHeight + 10;
            }
            if (props.pos === ui.alerts.posBottomRight || props.pos === ui.alerts.posBottomLeft) {
              slide = -1 * slide;
            }
            if (ui.hasClass(el, 'ui-' + ui.alerts.posCenter)) {
              prev[j].style.transform = 'translate(-50%,' + slide + 'px)';
            } else prev[j].style.transform = 'translateY(' + slide + 'px)';
          });
        }
        messageQueue.push(message);
        setTimeout(function () {
          if (messageQueue[0] === undefined) {
            return;
          }
          ui.alerts.closeMessage(messageQueue[0][0]);
          messageQueue.shift();
        }, ui.alerts.messageTimer);
      }, 10);
    };
    ui.on(document, 'click', '.' + ui.alerts.targetMsg, function () {
      var _this3 = this;
      Array.prototype.forEach.call(messageQueue, function (el, i) {
        if (el[0] === _this3) {
          messageQueue.splice(i, 1);
        }
      });
      ui.alerts.closeMessage(this);
    });
  };
  ui.onload(ui.alerts.Start);
})();
ui.calendar = {
  target: 'ui-calendar',
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
  nameOpen: 'ui-open',
  nameOpenEase: 'ui-open-ease',
  nameActive: 'ui-active',
  nameSelected: 'ui-selected',
  nameIcon: 'ui-icon',
  nameHover: 'ui-hover',
  nameRound: 'ui-round',
  stylesCalendar: 'ui-ease-calendar',
  stylesTitle: 'ui-ease-bg',
  stylesContainer: 'ui-ease-layout ui-ease-slow ui-ease-in-out',
  stylesPanel: 'ui-ease-layout ui-ease-slow ui-ease-in-out',
  stylesToday: 'ui-theme-sub ui-fill-dark-100',
  stylesPickerDay: 'ui-theme-red ui-fill-dark-100',
  stylesDetailScroll: 'ui-scrollbar-faded',
  prevIcon: 'arrow-left',
  nextIcon: 'arrow-right',
  backIcon: 'angle-left',
  pickerSep: '/',
  days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  dateFormat: 1,
  startDayofWeek: 1,
  setPrev: 'prev',
  setNext: 'next',
  fillWeekends: true,
  calendarPadding: 5,
  scrollbarSize: 15,
  dataDate: 'data-ui-date',
  dataSrc: 'data-ui-src',
  dataDay: 'data-ui-day',
  dataD: 'data-ui-d',
  eventClose: 'ui:pickerClose',
  eventChange: 'ui:pickerChange'
};
ui.calendar.Start = function () {
  function getAttr(that, date, newDate) {
    var attr = that.getAttribute(ui.calendar.dataDate);
    if (attr !== null && attr !== '') {
      attr = attr.split(',');
      if (attr.length === 1) {
        if (!isNaN(Number(attr[0])) && attr[0].length <= 2) {
          if (attr[0] === '0') {
            attr[0] = 1;
          }
          date.setMonth(attr[0] - 1);
        }
      } else if (attr.length === 2) {
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
  var pickerVal = function pickerVal(that) {
    if (that.value !== '') {
      var val = that.value.split(ui.calendar.pickerSep);
      if (val.length === 3 && val[0].length <= 2 && val[1].length <= 2 && val[2].length === 4) {
        if (!isNaN(val[0]) && !isNaN(val[1]) && !isNaN(val[2])) {
          if (ui.calendar.dateFormat === 1) {
            return Number(val[2]) + ',' + Number(val[0] - 1) + ',' + Number(val[1]);
          }
          return Number(val[2]) + ',' + Number(val[1] - 1) + ',' + Number(val[0]);
        }
      }
      return '';
    }
  };
  function createFnc(that, newDate, picker) {
    var date = new Date();
    date.setDate(1);
    var pickerDay = '';
    if (newDate !== undefined) {
      if (newDate === ui.calendar.setPrev || newDate === ui.calendar.setNext) {
        if (picker) {
          pickerDay = pickerVal(picker);
        }
        getAttr(that, date, newDate);
      } else {
        newDate = newDate.split(',');
        date.setFullYear(newDate[0]);
        date.setMonth(newDate[1]);
        if (newDate[2] !== undefined) {
          pickerDay = Number(newDate[0]) + ',' + Number(newDate[1]) + ',' + Number(newDate[2]);
        }
      }
    } else {
      getAttr(that, date);
    }
    that.setAttribute(ui.calendar.dataDate, date.getFullYear() + ',' + (date.getMonth() + 1));
    var html = '';
    var container = ui.find('.' + ui.calendar.nameContainer, that)[0];
    if (container === undefined) {
      html += '<div class="' + ui.calendar.nameContainer + ' ' + ui.calendar.stylesContainer + '">';
    }
    html += '<table';
    if (ui.calendar.fillWeekends) {
      html += ' class="' + ui.calendar.nameWeekend + '"';
    }
    html += '>' + '<caption>' + '<button type="button" tabindex="-1" class="' + ui.calendar.namePrev + '">';
    if (ui.globals.inlineSvg) {
      html += '<svg class="' + ui.calendar.nameIcon + '" viewBox="' + ui.globals.inlineSvgViewBox + '">' + ui.calendar.prevIcon;
    } else {
      html += '<svg class="' + ui.calendar.nameIcon + '"><use href="' + ui.globals.iconSrc + '#' + ui.calendar.prevIcon + '"/>';
    }
    html += '</svg>' + '</button>' + '<span class="' + ui.calendar.nameTitle + ' ' + ui.calendar.stylesTitle + '">' + '<button type="button" tabindex="-1" class="' + ui.calendar.nameMonth + '">' + ui.calendar.months[date.getMonth()] + '</button>' + '<button type="button" tabindex="-1" class="' + ui.calendar.nameYear + '">' + date.getFullYear() + '</button>' + '</span>' + '<button type="button" tabindex="-1" class="' + ui.calendar.nameNext + '">';
    if (ui.globals.inlineSvg) {
      html += '<svg class="' + ui.calendar.nameIcon + '" viewBox="' + ui.globals.inlineSvgViewBox + '">' + ui.calendar.nextIcon;
    } else {
      html += '<svg class="' + ui.calendar.nameIcon + '"><use href="' + ui.globals.iconSrc + '#' + ui.calendar.nextIcon + '"/>';
    }
    html += '</svg>' + '</button>' + '</caption>' + '<thead>';
    if (ui.calendar.startDayofWeek === 0) {
      html += '<th>' + ui.calendar.days[ui.calendar.days.length - 1] + '</th>';
    }
    Array.prototype.forEach.call(ui.calendar.days, function (item) {
      html += '<th>' + item + '</th>';
    });
    html += '</thead>' + '<tbody>';
    var sysDays;
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    if (ui.calendar.startDayofWeek === 0) {
      sysDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      firstDay = sysDays.indexOf(sysDays[firstDay.getDay()]);
    } else {
      sysDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
      firstDay = sysDays.indexOf(sysDays[firstDay.getDay() - 1]);
    }
    if (firstDay < 1) {
      firstDay = 7;
    }
    var prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    var days = prevLastDay - (firstDay - 1);
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    var activeDay = false;
    var today = new Date().getFullYear() + ' ' + new Date().getMonth() + ' ' + new Date().getDate();
    for (var i = 0; i < 6; i++) {
      html += '<tr>';
      for (var j = 0; j < 7; j++) {
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
            var todayStyles = '';
            if (ui.calendar.stylesToday !== '') {
              todayStyles = ui.calendar.stylesToday + ' ' + ui.calendar.nameHover;
            }
            html += '<td class="' + ui.calendar.nameToday + '">' + '<button class="' + todayStyles + '" type="button" tabindex="-1">' + days + '</button>' + '</td>';
          } else {
            if (pickerDay !== '') {
              if (date.getFullYear() + ',' + date.getMonth() + ',' + days === pickerDay) {
                var pickerDayStyles = '';
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
    }
    var src = that.getAttribute(ui.calendar.dataSrc);
    if (src !== null && src !== '') {
      var details = '';
      ui.ajax({
        url: src,
        callback: function callback(status, response) {
          if (status === 'success') {
            response = JSON.parse(response);
            if (response.length === 'undefined') {
              return;
            }
            Array.prototype.forEach.call(response, function (item) {
              if (item === null) {
                return;
              }
              if (Number(item.year) === date.getFullYear()) {
                if (Number(item.month) === date.getMonth() + 1) {
                  var dday = ui.find('[' + ui.calendar.dataDay + '="' + item.day + '"]', that);
                  ui.addClass(dday, ui.calendar.nameToggleDetails);
                  details += '<li ' + ui.calendar.dataD + '="' + item.day + '">' + '<strong>' + item.day + '</strong>' + '<b>' + item.dayName + '</b><br>';
                  for (var key in item.details) {
                    details += '<span>' + '<i>' + key + '</i> ' + item.details[key] + '</span>';
                  }
                  details += '</li>';
                }
              }
            });
            container = ui.find('.' + ui.calendar.nameContainer, that)[0];
            if (ui.hasClass(that, ui.calendar.nameShowDetails)) {
              setTimeout(function () {
                ui.addClass(ui.find('.' + ui.calendar.nameDetails, container), ui.calendar.nameOpen);
              }, 10);
            }
            if (details !== '') {
              var detailsTemp;
              detailsTemp = '<div class="' + ui.calendar.nameDetails + '">' + '<button class="' + ui.calendar.nameToggleDetails + '" type="button" tabindex="-1">';
              if (ui.globals.inlineSvg) {
                detailsTemp += '<svg class="' + ui.calendar.nameIcon + '" viewBox="' + ui.globals.inlineSvgViewBox + '">' + ui.calendar.backIcon;
              } else {
                detailsTemp += '<svg class="' + ui.calendar.nameIcon + '"><use href="' + ui.globals.iconSrc + '#' + ui.calendar.backIcon + '"/>';
              }
              detailsTemp += '</svg>' + '</button>' + '<ul class="' + ui.calendar.stylesDetailScroll + '">' + details + '</ul>' + '</div>';
              ui.addClass(container, ui.calendar.nameHasDetails);
              details = detailsTemp;
              detailsTemp = '';
            } else {
              details = '<div class="' + ui.calendar.nameDetails + ' ' + ui.calendar.nameEmptyDetails + '">' + '<button class="' + ui.calendar.nameToggleDetails + '" type="button" tabindex="-1">';
              if (ui.globals.inlineSvg) {
                details += '<svg class="' + ui.calendar.nameIcon + '" viewBox="' + ui.globals.inlineSvgViewBox + '">' + ui.calendar.backIcon;
              } else {
                details += '<svg class="' + ui.calendar.nameIcon + '"><use href="' + ui.globals.iconSrc + '#' + ui.calendar.backIcon + '"/>';
              }
              details += '</svg>' + '</button>' + '<ul>' + '<li>' + '<strong></strong>' + '<b></b><br>' + '<span></span>' + '<span></span>' + '<span></span>' + '</li>' + '</ul>' + '</div>';
              ui.removeClass(container, ui.calendar.nameHasDetails);
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
  ui.calendar.Init = function () {
    var calendars = ui.find('.' + ui.calendar.target + ':not(.' + ui.calendar.nameActive + ')');
    if (calendars.length > 0) {
      Array.prototype.forEach.call(calendars, function (el) {
        createFnc(el);
      });
    }
  };
  ui.calendar.Init();
  ui.on(document, 'click', '.' + ui.calendar.namePrev + ',.' + ui.calendar.nameNext, function () {
    var that = ui.closest(this, '.' + ui.calendar.target)[0];
    var picker = ui.closest(that, '.' + ui.calendar.namePicker)[0];
    var form;
    if (ui.hasClass(this, ui.calendar.nameNext)) {
      if (picker === undefined) {
        createFnc(that, ui.calendar.setNext);
      } else {
        form = ui.find('[type="text"]', picker)[0];
        createFnc(that, ui.calendar.setNext, form);
      }
    } else {
      if (picker === undefined) {
        createFnc(that, ui.calendar.setPrev);
      } else {
        form = ui.find('[type="text"]', picker)[0];
        createFnc(that, ui.calendar.setPrev, form);
      }
    }
  });
  ui.on(document, 'click', '.' + ui.calendar.nameMonth + ',.' + ui.calendar.nameYear, function () {
    var panelType;
    var date = new Date();
    var that = ui.closest(this, '.' + ui.calendar.target)[0];
    getAttr(that, date);
    var html = '<div class="' + ui.calendar.namePanel + ' ' + ui.calendar.stylesPanel + '">' + '<ul>';
    if (ui.hasClass(this, ui.calendar.nameYear)) {
      panelType = 'year';
      var year = date.getFullYear();
      var years = 1920 + (new Date().getFullYear() - 1920) + 100;
      for (var i = 1920; i <= years; i++) {
        html += '<li>' + '<button type="button" tabindex="-1" ';
        if (year === i) {
          html += 'class="' + ui.calendar.namePanelCall + ' ' + ui.calendar.nameSelected + '" ';
        } else {
          html += 'class="' + ui.calendar.namePanelCall + '" ';
        }
        html += 'name="' + i + '">' + i + '</button>' + '</li>';
      }
    } else {
      panelType = 'month';
      var month = ui.calendar.months[date.getMonth()];
      Array.prototype.forEach.call(ui.calendar.months, function (item, i) {
        html += '<li>' + '<button type="button" tabindex="-1" ';
        if (month === item) {
          html += 'class="' + ui.calendar.namePanelCall + ' ' + ui.calendar.nameSelected + '" ';
        } else {
          html += 'class="' + ui.calendar.namePanelCall + '" ';
        }
        html += 'name="' + i + '">' + item + '</button>' + '</li>';
      });
    }
    html += '</ul>' + '</div>';
    that.insertAdjacentHTML('afterbegin', html);
    html = '';
    setTimeout(function () {
      ui.addClass(that, ui.calendar.nameShowPanel);
      if (panelType === 'year') {
        var getList = ui.find('.' + ui.calendar.target + ' .' + ui.calendar.namePanel + ' .' + ui.calendar.namePanelCall, that);
        var getSelected = ui.find('.' + ui.calendar.target + ' .' + ui.calendar.namePanel + ' .' + ui.calendar.namePanelCall + '.' + ui.calendar.nameSelected, that)[0];
        var getIndex = Math.floor(Array.prototype.slice.call(getList).indexOf(getSelected) / 12);
        ui.find('.' + ui.calendar.namePanel, that)[0].scrollTop = getIndex * (that.offsetHeight - ui.calendar.calendarPadding * 2);
        getList = '';
      }
    }, 10);
  });
  ui.on(document, 'click', '.' + ui.calendar.target + ' .' + ui.calendar.namePanel + ' .' + ui.calendar.namePanelCall, function () {
    var date = new Date();
    var that = ui.closest(this, '.' + ui.calendar.target)[0];
    getAttr(that, date);
    ui.removeClass(that, ui.calendar.nameShowPanel);
    if (!ui.hasClass(this, ui.calendar.nameSelected)) {
      if (this.name.length === 4) {
        createFnc(that, this.name + ',' + date.getMonth());
      } else {
        createFnc(that, date.getFullYear() + ',' + this.name);
      }
    }
    setTimeout(function () {
      that.removeChild(ui.find('.' + ui.calendar.namePanel, that)[0]);
    }, ui.globals.slow);
  });
  function pickerCloseFnc(type, target) {
    ui.removeClass(document, ui.calendar.namePickerOpened);
    var allPickers = ui.find('.' + ui.calendar.namePicker + ' .' + ui.calendar.target);
    function removePicker(form, picker) {
      form.removeChild(picker);
      ui.removeClass(form, ui.calendar.namePickerLeft + ' ' + ui.calendar.namePickerTop);
    }
    if (type === 'continuous') {
      Array.prototype.forEach.call(allPickers, function (item, i) {
        ui.removeClass(item, ui.calendar.nameOpenEase);
        setTimeout(function () {
          var that = ui.find('.' + ui.calendar.namePicker + ' .' + ui.calendar.target)[i];
          if (that === undefined) {
            return;
          }
          var form = that.parentElement;
          removePicker(form, that);
        }, ui.globals.ease);
      });
    } else {
      Array.prototype.forEach.call(allPickers, function (item) {
        var form = item.parentElement;
        ui.removeClass(item, ui.calendar.nameOpenEase);
        setTimeout(function () {
          removePicker(form, item);
        }, ui.globals.ease);
      });
    }
    ui.off('body', 'mousedown.' + ui.calendar.eventClose);
    ui.off(target, 'keydown.' + ui.calendar.eventClose + ' keyup.' + ui.calendar.eventChange);
  }
  ui.on(document, 'focus', '.' + ui.calendar.namePicker + ' > [type="text"]', function () {
    var _this4 = this;
    var form = this.parentElement;
    if (ui.find('.' + ui.calendar.target, form).length > 0) {
      return;
    }
    ui.addClass(document, ui.calendar.namePickerOpened);
    ui.off('body', 'mousedown.' + ui.calendar.eventClose);
    ui.off(this, 'keydown.' + ui.calendar.eventClose + ' keyup.' + ui.calendar.eventChange);
    var html = '<div class="' + ui.calendar.target;
    if (ui.hasClass(form, ui.calendar.nameRound)) {
      html += ' ' + ui.calendar.nameRound;
    }
    html += ' ' + ui.calendar.stylesCalendar + '">' + '</div>';
    form.insertAdjacentHTML('beforeend', html);
    var picker = ui.find('.' + ui.calendar.target, form)[0];
    var inputDate = pickerVal(this);
    if (inputDate === '') {
      createFnc(picker);
    } else {
      createFnc(picker, inputDate);
    }
    var offset = form.getBoundingClientRect();
    var formHeight = form.offsetHeight;
    var pickerWidth = picker.offsetWidth;
    var pickerHeight = picker.offsetHeight;
    if (offset.left + pickerWidth + ui.calendar.scrollbarSize > window.innerWidth) {
      if (offset.left - (pickerWidth - form.offsetWidth) - ui.calendar.scrollbarSize > 0) {
        ui.addClass(form, ui.calendar.namePickerLeft);
      }
    }
    if (offset.top + parseInt(formHeight + pickerHeight) >= window.innerHeight) {
      if (offset.top - parseInt(formHeight + pickerHeight) + formHeight > 0) {
        ui.addClass(form, ui.calendar.namePickerTop);
      }
    }
    setTimeout(function () {
      ui.addClass(picker, ui.calendar.nameOpenEase);
    }, 10);
    ui.on(document, 'mousedown.' + ui.calendar.eventClose, function (ev) {
      if (ui.closest(ev.target, form)[0] !== undefined) {
        return;
      }
      if (ev.button !== 2) {
        pickerCloseFnc('default', _this4);
      }
    });
    ui.on(this, 'keydown.' + ui.calendar.eventClose, function (ev) {
      if (ev.keyCode === 9 || ev.keyCode === 13 || ev.keyCode === 27) {
        pickerCloseFnc('continuous', this);
      }
    });
    ui.on(this, 'keyup.' + ui.calendar.eventChange, function () {
      inputDate = pickerVal(this);
      if (inputDate === '') {
        createFnc(picker);
      } else {
        createFnc(picker, inputDate);
      }
    });
  });
  ui.on(document, 'click', '.' + ui.calendar.namePicker + ' .' + ui.calendar.target + ' tbody td button', function () {
    var date = new Date();
    var picker = ui.closest(this, '.' + ui.calendar.namePicker)[0];
    var that = ui.find('.' + ui.calendar.target, picker)[0];
    var form = ui.find('[type="text"]', picker)[0];
    getAttr(that, date);
    date.setDate(this.textContent);
    var day = date.getDate().toString();
    if (day.length === 1) {
      day = '0' + day;
    }
    var month = date.getMonth();
    month += 1;
    month = month.toString();
    if (month.length === 1) {
      month = '0' + month;
    }
    if (ui.calendar.dateFormat === 1) {
      form.value = month + ui.calendar.pickerSep + day + ui.calendar.pickerSep + date.getFullYear();
    } else {
      form.value = day + ui.calendar.pickerSep + month + ui.calendar.pickerSep + date.getFullYear();
    }
    pickerCloseFnc('default', form);
  });
  ui.on(document, 'click', '.' + ui.calendar.target + ' .' + ui.calendar.nameToggleDetails, function () {
    var that = ui.closest(this, '.' + ui.calendar.target)[0];
    var details = ui.find('.' + ui.calendar.nameDetails, that)[0];
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
      var scroll = 0;
      var day = this.getAttribute(ui.calendar.dataDay);
      var list = ui.find('.' + ui.calendar.nameDetails + ' li', that);
      for (var i = 0; i < list.length; i++) {
        if (list[i].getAttribute(ui.calendar.dataD) === day) {
          break;
        }
        scroll += list[i].offsetHeight + ui.calendar.calendarPadding;
      }
      ui.find('ul', details)[0].scrollTop = scroll;
    }
  });
};
ui.onload(ui.calendar.Start);
ui.on(document, ui.globals.eventAjaxCallback, function () {
  if (ui.ajax.classNames.indexOf(ui.calendar.target) > -1) {
    ui.calendar.Init();
  }
});
ui.carousel = {
  target: 'ui-carousel',
  targetGallery: 'ui-carousel-gallery',
  targetSlider: 'ui-carousel-slider',
  targetNav: 'ui-carousel-nav',
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
  nameShow: 'ui-show',
  nameFaded: 'ui-faded',
  nameActive: 'ui-active',
  nameResized: 'ui-resized',
  nameFiltered: 'ui-filtered',
  nameNavSelected: 'ui-selected',
  nameGallerySelected: 'ui-selected',
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
  stylesDots: 'ui-ease-all ui-ease-slow',
  tagDots: 'i',
  halfSize: 0.5,
  defaultSlideTimer: 8000,
  touchMoveToleranceX: 15,
  touchMoveToleranceY: 25,
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
  eventTouchEnd: 'ui:carouselTouchEnd',
  eventTouchCancel: 'ui:carouselTouchCancel'
};
(function () {
  var getCols,
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
  getCols = function getCols(i) {
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
  };
  function carouselAnimate(content, wait, type) {
    var time = content.getAttribute(ui.carousel.dataAnimate);
    if (time !== null) {
      if (time === '') {
        time = ui.globals.ease;
      }
      var i = 0;
      var elems = ui.find('.' + ui.carousel.nameAnimate, content);
      if (elems.length === 0) {
        return;
      }
      if (ui.closest(content, '.' + ui.carousel.nameResized)[0] !== undefined) {
        return;
      }
      if (type === 'static') {
        ui.removeClass(elems, ui.carousel.nameShow);
      }
      setTimeout(function () {
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
    var col = getCols(i);
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
    var contents = ui.find('.' + ui.carousel.nameContent, that);
    if (contents.length === 0) {
      return;
    }
    var nav = ui.find('.' + ui.carousel.targetNav, that)[0];
    if (nav === undefined) {
      return;
    }
    var col = getCols(i);
    if (contents.length <= col) {
      nav.style.display = 'none';
    } else {
      nav.style.display = '';
    }
    var halfSized = ui.hasClass(that, ui.carousel.nameHalfSize);
    var slider = ui.find('.' + ui.carousel.targetSlider, that);
    var size = col;
    if (halfSized && col > 1 && col !== contents.length) {
      size -= ui.carousel.halfSize;
    }
    size = Math.round(that.offsetWidth / size);
    Array.prototype.forEach.call(contents, function (item) {
      item.style.width = size + 'px';
    });
    size = size * contents.length;
    slider[0].style.width = size + 'px';
    if (contents.length / col === 1) {
      counts[i] = 0;
    } else if (col !== 1 && counts[i] > col) {
      counts[i] = col;
    }
    that.setAttribute(ui.carousel.dataContent, counts[i] + 1);
    slider[0].style.transform = 'translateX(-' + counts[i] * contents[0].offsetWidth + 'px)';
    var navDots = ui.find('.' + ui.carousel.targetNav + ' .' + ui.carousel.nameDots, that);
    var navDotsEl = ui.find('.' + ui.carousel.targetNav + ' .' + ui.carousel.nameDots + ' i', that);
    ui.removeClass(navDotsEl, ui.carousel.nameNavSelected);
    ui.addClass(navDotsEl[counts[i]], ui.carousel.nameNavSelected);
    filterDots(navDots, navDotsEl, counts[i], i);
    Array.prototype.forEach.call(contents, function (item, l) {
      if (l + 1 > col) {
        return;
      }
      carouselAnimate(item, ui.globals.ease * 2, type);
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
    var nav = ui.find('.' + ui.carousel.targetNav, that)[0];
    if (nav === undefined) {
      return;
    }
    var slider = ui.find('.' + ui.carousel.targetSlider, that);
    var contents = ui.find('.' + ui.carousel.nameContent, slider[0]);
    if (contents.length === 0) {
      return;
    }
    var i = Number(that.getAttribute(ui.carousel.dataID));
    if (i === null) {
      return;
    }
    var navDots = ui.find('.' + ui.carousel.targetNav + ' .' + ui.carousel.nameDots, that);
    var navDotsEl = ui.find('.' + ui.carousel.targetNav + ' .' + ui.carousel.nameDots + ' i', that);
    var col = getCols(i);
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
    filterDots(navDots, navDotsEl, counts[i], i);
    var slide = counts[i] * contents[0].offsetWidth;
    var halfSized = ui.hasClass(that, ui.carousel.nameHalfSize);
    if (halfSized && counts[i] === contents.length - col) {
      slide += contents[0].offsetWidth * ui.carousel.halfSize;
    }
    slider[0].style.transform = 'translateX(-' + slide + 'px)';
    getSlideSpeed(slider, contentsEase[i], i);
    if (contents.length > 1 && contents.length !== col) {
      Array.prototype.forEach.call(contents, function (item) {
        carouselAnimate(item, contentsEase[i], 'static');
      });
    }
  }
  carouselResizer = function carouselResizer(e) {
    if (touchStarted) {
      return;
    }
    if (e === 'resize' || e.type === 'resize') {
      Array.prototype.forEach.call(ui.find('.' + ui.carousel.target), function (el) {
        var i = Number(el.getAttribute(ui.carousel.dataID));
        if (i === null) {
          return;
        }
        ui.addClass(el, ui.carousel.nameResized);
        carouselModifier(i, el, 'resize');
        var slider = ui.find('.' + ui.carousel.targetSlider, el)[0];
        ui.addClass(el, ui.carousel.nameNoEffects);
        ui.addClass(slider, ui.carousel.nameNoEffects);
      });
    }
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      var that = ui.find('.' + ui.carousel.target);
      Array.prototype.forEach.call(that, function (el) {
        var i = Number(el.getAttribute(ui.carousel.dataID));
        if (i === null) {
          return;
        }
        ui.removeClass(el, ui.carousel.nameResized);
        if (autoTimer[i] !== null && autoTimer[i] !== undefined) {
          clearInterval(autoSlider[i]);
          autoSlider[i] = setInterval(function () {
            carouselNav(that[i], 'next');
          }, autoTimer[i]);
        }
        var slider = ui.find('.' + ui.carousel.targetSlider, el)[0];
        ui.removeClass(el, ui.carousel.nameNoEffects);
        ui.removeClass(slider, ui.carousel.nameNoEffects);
      });
    }, ui.globals.ease);
  };
  ui.carousel.Init = function () {
    var carousels = ui.find('.' + ui.carousel.target + ':not(.' + ui.carousel.nameActive + ')');
    if (carousels.length > 0) {
      Array.prototype.forEach.call(carousels, function (el) {
        el.setAttribute(ui.carousel.dataID, idCount);
        var j = idCount;
        idCount += 1;
        cols[j] = el.getAttribute(ui.carousel.dataCols);
        colsXL[j] = el.getAttribute(ui.carousel.dataColsXL);
        colsLG[j] = el.getAttribute(ui.carousel.dataColsLG);
        colsMD[j] = el.getAttribute(ui.carousel.dataColsMD);
        colsSM[j] = el.getAttribute(ui.carousel.dataColsSM);
        colsXS[j] = el.getAttribute(ui.carousel.dataColsXS);
        if (cols[j] === null) {
          cols[j] = 1;
        } else {
          cols[j] = Number(cols[j]);
          if (!cols[j] || cols[j] === '0' || cols[j] === '') {
            cols[j] = 1;
          }
        }
        if (colsXL[j] === null) {
          colsXL[j] = cols[j];
        } else {
          colsXL[j] = Number(colsXL[j]);
          if (!colsXL[j] || colsXL[j] === '0' || colsXL[j] === '') {
            colsXL[j] = cols[j];
          }
        }
        if (colsLG[j] === null) {
          colsLG[j] = cols[j];
        } else {
          colsLG[j] = Number(colsLG[j]);
          if (!colsLG[j] || colsLG[j] === '0' || colsLG[j] === '') {
            colsLG[j] = cols[j];
          }
        }
        if (colsMD[j] === null) {
          colsMD[j] = cols[j];
        } else {
          colsMD[j] = Number(colsMD[j]);
          if (!colsMD[j] || colsMD[j] === '0' || colsMD[j] === '') {
            colsMD[j] = cols[j];
          }
        }
        if (colsSM[j] === null) {
          colsSM[j] = cols[j];
        } else {
          colsSM[j] = Number(colsSM[j]);
          if (!colsSM[j] || colsSM[j] === '0' || colsSM[j] === '') {
            colsSM[j] = cols[j];
          }
        }
        if (colsXS[j] === null) {
          colsXS[j] = cols[j];
        } else {
          colsXS[j] = Number(colsXS[j]);
          if (!colsXS[j] || colsXS[j] === '0' || colsXS[j] === '') {
            colsXS[j] = cols[j];
          }
        }
        counts[j] = 0;
        var contents = ui.find('.' + ui.carousel.nameContent, el);
        if (contents.length === 0) {
          return;
        }
        var nav = ui.find('.' + ui.carousel.targetNav, el)[0];
        var navDots = ui.find('.' + ui.carousel.nameDots, nav)[0];
        if (nav === undefined || navDots === undefined) {
          return;
        }
        ui.addClass(el, ui.carousel.nameActive);
        carouselModifier(j, el, 'static');
        var col = getCols(j);
        if (contents.length <= col) {
          nav.style.display = 'none';
        } else {
          nav.style.display = '';
        }
        var navDotsHtml = '';
        navDots.innerHTML = '';
        Array.prototype.forEach.call(contents, function () {
          navDotsHtml += '<' + ui.carousel.tagDots + ' ' + 'class="' + ui.carousel.stylesDots + '">' + '</' + ui.carousel.tagDots + '>';
        });
        navDots.insertAdjacentHTML('beforeend', navDotsHtml);
        var navDotsEl = ui.find('.' + ui.carousel.nameDots + ' i', nav);
        counts[j] = 0;
        el.setAttribute(ui.carousel.dataContent, counts[j] + 1);
        ui.removeClass(navDotsEl, ui.carousel.nameNavSelected);
        ui.addClass(navDotsEl[counts[j]], ui.carousel.nameNavSelected);
        filterDots(navDots, navDotsEl, counts[j], j);
        autoTimer[j] = el.getAttribute(ui.carousel.dataSlide);
        if (autoTimer[j] !== null) {
          if (autoTimer[j] === '') {
            autoTimer[j] = ui.carousel.defaultSlideTimer;
          }
          var that = el;
          autoSlider[j] = setInterval(function () {
            carouselNav(that, 'next');
          }, autoTimer[j]);
        }
      });
      Array.prototype.forEach.call(ui.find('.' + ui.carousel.targetGallery + ' .' + ui.carousel.nameGalleryThumbs), function (el) {
        var images = ui.find('.' + ui.carousel.namePhoto, el);
        if (images.length <= 1) {
          el.style.display = 'none';
        }
      });
    }
  };
  ui.carousel.Start = function () {
    ui.carousel.Init();
    ui.on(document, 'click', '.' + ui.carousel.namePrev + ',.' + ui.carousel.nameNext, function () {
      var direction;
      if (ui.hasClass(this, ui.carousel.nameNext)) {
        direction = 'next';
      } else {
        direction = 'prev';
      }
      var that = ui.closest(this, '.' + ui.carousel.target)[0];
      var i = Number(that.getAttribute(ui.carousel.dataID));
      if (i === null) {
        return;
      }
      carouselNav(that, direction);
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
        Array.prototype.forEach.call(callCarousels, function (el) {
          carouselStop(el);
        });
      } else {
        Array.prototype.forEach.call(callCarousels, function (el) {
          carouselStart(el);
        });
      }
    });
    ui.on(document, 'scroll', '.' + ui.carousel.target + ' .' + ui.carousel.nameScroll + ',' + '.' + ui.carousel.target + ' .' + ui.carousel.nameScrollV + ',' + '.' + ui.carousel.target + ' .' + ui.carousel.nameScrollH, function (e) {
      e.preventDefault();
      e.stopPropagation();
      isScrolling = true;
      clearTimeout(isScrollingTimer);
      isScrollingTimer = setTimeout(function () {
        isScrolling = false;
      }, ui.globals.ease);
    });
    ui.on(document, 'touchstart', '.' + ui.carousel.target, function (e) {
      if (isScrolling) {
        return;
      }
      var touchMove = false;
      touchStarted = true;
      var startx = e.targetTouches[0].pageX;
      var starty = e.targetTouches[0].pageY;
      var slider = ui.find('.' + ui.carousel.targetSlider, this)[0];
      var contents = ui.find('.' + ui.carousel.nameContent, this);
      var navDotsEl = ui.find('.' + ui.carousel.targetNav + ' .' + ui.carousel.nameDots + ' i', this);
      var halfSized = ui.hasClass(this, ui.carousel.nameHalfSize);
      var i = Number(this.getAttribute(ui.carousel.dataID));
      if (i === null) {
        return;
      }
      var col = getCols(i);
      var startMove = window.getComputedStyle(slider).getPropertyValue('transform');
      startMove = startMove.replace('matrix', '').replace(/[\,\(\)\s]/g, ' ').replace(/\s\s/g, '|');
      startMove = startMove.split('|')[4];
      var currentx, currenty, move, touchEndTimer;
      var that = this;
      ui.off(document, 'touchmove');
      ui.on(document, 'touchmove', function (e) {
        if (ui.hasClass(document, ui.photoGallery.namePreviewOpened)) {
          return;
        }
        if (isScrolling) {
          return;
        }
        currentx = e.targetTouches[0].pageX;
        currenty = e.targetTouches[0].pageY;
        if (Math.abs(startx - currentx) > ui.carousel.touchMoveToleranceX && Math.abs(starty - currenty) < ui.carousel.touchMoveToleranceY) {
          touchMove = true;
          ui.addClass(that, ui.carousel.nameNoEffects);
          ui.addClass(slider, ui.carousel.nameNoEffects);
          clearTimeout(touchEndTimer);
          var sliderMax = -((contents.length - col) * contents[0].offsetWidth);
          if (halfSized) {
            sliderMax -= contents[0].offsetWidth * ui.carousel.halfSize;
          }
          move = startMove - (startx - currentx);
          if (move > 0) {
            move = 0;
          } else if (move < sliderMax) {
            move = sliderMax;
          }
          slider.style.transform = 'translateX(' + move + 'px)';
          if (autoTimer[i] !== null) {
            clearInterval(autoSlider[i]);
          }
          ui.addClass(document, ui.carousel.nameTouchMove);
        }
      });
      ui.off(document, 'touchend.' + ui.carousel.eventTouchEnd + ' touchcancel.' + ui.carousel.eventTouchCancel);
      ui.on(document, 'touchend.' + ui.carousel.eventTouchEnd + ' touchcancel.' + ui.carousel.eventTouchCancel, function () {
        if (touchMove) {
          ui.removeClass(that, ui.carousel.nameNoEffects);
          ui.removeClass(slider, ui.carousel.nameNoEffects);
          setTimeout(function () {
            var navDots = ui.find('.' + ui.carousel.targetNav + ' .' + ui.carousel.nameDots, that[i])[0];
            var beforeCount = counts[i];
            counts[i] = Math.abs(move) / contents[0].offsetWidth;
            if (currentx > startx) {
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
            filterDots(navDots, navDotsEl, counts[i], i);
            clearTimeout(touchEndTimer);
            touchEndTimer = setTimeout(function () {
              getSlideSpeed(slider, contentsEase[i], i);
              if (autoTimer[i] !== null) {
                clearInterval(autoSlider[i]);
                autoSlider[i] = setInterval(function () {
                  carouselNav(that, 'next');
                }, autoTimer[i]);
              }
              Array.prototype.forEach.call(contents, function (item) {
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
    ui.on(document, 'click', '.' + ui.carousel.targetGallery + ' .' + ui.carousel.nameGalleryThumbs + ' .' + ui.carousel.namePhoto, function () {
      var parent = ui.closest(this, '.' + ui.carousel.targetGallery);
      var detail = ui.find('.' + ui.carousel.nameGalleryDetail, parent[0]);
      var target = ui.find('img', detail);
      var thumbs = ui.find('.' + ui.carousel.nameGalleryThumbs + ' .' + ui.carousel.namePhoto, parent[0]);
      var index = Array.prototype.slice.call(thumbs).indexOf(this);
      target.setAttribute(ui.carousel.dataCount, index);
      ui.addClass(detail, ui.carousel.nameGalleryDetailLoader);
      var newImg = new Image();
      newImg.src = this.getAttribute(ui.carousel.dataHref);
      newImg.onload = function () {
        target.src = newImg.src;
        ui.removeClass(detail, ui.carousel.nameGalleryDetailLoader);
      };
      ui.removeClass(thumbs, ui.carousel.nameGallerySelected);
      ui.addClass(this, ui.carousel.nameGallerySelected);
    });
  };
  ui.onload(ui.carousel.Start);
  ui.on(window, 'resize', carouselResizer);
  ui.on(document, ui.globals.eventDomChange, function () {
    carouselResizer('resize');
  });
  ui.on(document, ui.globals.eventAjaxCallback, function () {
    if (ui.ajax.classNames.indexOf(ui.carousel.target) > -1) {
      ui.carousel.Init();
    }
  });
})();
ui.countdown = {
  target: 'ui-countdown',
  nameDay: 'ui-countdown-day',
  nameHour: 'ui-countdown-hour',
  nameMinute: 'ui-countdown-min',
  nameSecond: 'ui-countdown-sec'
};
(function () {
  var countdownTimer;
  ui.countdown.Start = function () {
    var countdown = ui.find('.' + ui.countdown.target);
    if (ui.countdown.length === 0) {
      return;
    }
    var arr = [];
    Array.prototype.forEach.call(countdown, function (el, i) {
      var date = new Date();
      var day = ui.find('.' + ui.countdown.nameDay, el)[0];
      if (day !== undefined) {
        date.setDate(date.getDate() + Number(day.textContent));
      }
      var hour = ui.find('.' + ui.countdown.nameHour, el)[0];
      if (hour !== undefined) {
        date.setHours(date.getHours() + Number(hour.textContent));
      }
      var minute = ui.find('.' + ui.countdown.nameMinute, el)[0];
      if (minute !== undefined) {
        date.setMinutes(date.getMinutes() + Number(minute.textContent));
      }
      var sec = ui.find('.' + ui.countdown.nameSecond, el)[0];
      if (sec !== undefined) {
        date.setSeconds(date.getSeconds() + Number(sec.textContent));
      }
      arr[i] = date.getTime();
    });
    var calc = function calc(ms) {
      var days = Math.floor(ms / (24 * 60 * 60 * 1000));
      if (days < 0) {
        days = 0;
      }
      var daysMs = ms % (24 * 60 * 60 * 1000);
      var hours = Math.floor(daysMs / (60 * 60 * 1000));
      if (hours < 0) {
        hours = 0;
      }
      var hoursMs = ms % (60 * 60 * 1000);
      var minutes = Math.floor(hoursMs / (60 * 1000));
      if (minutes < 0) {
        minutes = 0;
      }
      var minutesMs = ms % (60 * 1000);
      var sec = Math.floor(minutesMs / 1000) + 1;
      if (sec < 0) {
        sec = 0;
      }
      return days + ':' + hours + ':' + minutes + ':' + sec;
    };
    clearInterval(countdownTimer);
    countdownTimer = setInterval(function () {
      Array.prototype.forEach.call(countdown, function (el, i) {
        var dateLeft = calc(arr[i] - new Date());
        dateLeft = dateLeft.split(':');
        var day = ui.find('.' + ui.countdown.nameDay, el)[0];
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
        var hour = ui.find('.' + ui.countdown.nameHour, el)[0];
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
        var minute = ui.find('.' + ui.countdown.nameMinute, el)[0];
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
        var sec = ui.find('.' + ui.countdown.nameSecond, el)[0];
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
    }, 1000);
  };
  ui.onload(ui.countdown.Start);
  ui.on(document, ui.globals.eventAjaxCallback, function () {
    if (ui.ajax.classNames.indexOf(ui.countdown.target) > -1) {
      ui.countdown.Start();
    }
  });
})();
ui.datatable = {
  target: 'ui-datatable',
  targetLoaded: 'ui-datatable-loaded',
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
  nameActive: 'ui-active',
  nameEven: 'ui-even',
  nameShow: 'ui-showed',
  nameFiltered: 'ui-filtered',
  nameChecked: 'ui-checked',
  nameAsc: 'ui-asc',
  nameDesc: 'ui-desc',
  nameIcon: 'ui-icon',
  nameBtnActive: 'ui-btn-active',
  nameBtnPassive: 'ui-btn-passive',
  namePrev: 'ui-paging-prev',
  nameNext: 'ui-paging-next',
  sortIcon: 'sort',
  ascIcon: 'sort-up',
  descIcon: 'sort-down',
  ascNumberIcon: 'sort-number-up',
  descNumberIcon: 'sort-number-down',
  prevIcon: 'angle-left',
  nextIcon: 'angle-right',
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
  storageTest: 'ui-gridList-test',
  storageVals: 'ui-gridList-vals-',
  storageShow: 'ui-gridList-show-',
  storagePaging: 'ui-gridList-paging-',
  dataDefault: 'data-ui-default',
  dataActive: 'data-ui-active',
  dataID: 'data-ui-id',
  dataSort: 'data-ui-sort',
  dataType: 'data-ui-type',
  dataVal: 'data-ui-val',
  dataIndex: 'data-ui-index'
};
(function () {
  var testStorage = true,
    startListID = 0,
    loadedVals = [],
    showCount = [],
    pagingCount = [],
    temp = document.createDocumentFragment();
  try {
    sessionStorage.setItem(ui.datatable.storageTest, 0);
  } catch (e) {
    testStorage = false;
  }
  var customLowerCase = function customLowerCase(string) {
    var keys = Object.keys(ui.datatable.customLetters);
    var chars = '(([';
    for (var i = 0; i < keys.length; i++) {
      chars += keys[i];
    }
    chars += ']))';
    var re = new RegExp(chars, 'g');
    string = string.replace(/["'\[\]\{\}()]/g, '').replace(re, function (l) {
      return ui.datatable.customLetters[l];
    });
    return string.toLowerCase();
  };
  function createPaging(paging, id, listLength) {
    var total, min, max;
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
    var defaultClass = paging[0].getAttribute(ui.datatable.dataDefault);
    if (defaultClass === null) {
      defaultClass = '';
    }
    var activeClass = paging[0].getAttribute(ui.datatable.dataActive);
    if (activeClass === null) {
      activeClass = '';
    }
    var classes = ui.datatable.namePrev + ' ' + defaultClass;
    if (pagingCount[id] === 1) {
      classes += ' ' + ui.datatable.nameBtnPassive;
    }
    var re = new RegExp('\\s+\\s');
    var rex = new RegExp('\\s+$');
    classes = classes.replace(re, ' ').replace(rex, '');
    var html = '<button class="' + classes + '">' + '<svg class="' + ui.datatable.nameIcon + '"><use href="' + ui.globals.iconSrc + '#' + ui.datatable.prevIcon + '"/></svg>' + '</button>\n';
    for (var i = min; i <= max; i++) {
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
    html += '<button class="' + classes + '">' + '<svg class="' + ui.datatable.nameIcon + '"><use href="' + ui.globals.iconSrc + '#' + ui.datatable.nextIcon + '"/></svg>' + '</button>\n';
    paging[0].innerHTML = '';
    paging[0].insertAdjacentHTML('beforeend', html);
    if (testStorage && sessionStorage !== undefined) {
      sessionStorage.setItem(ui.datatable.storagePaging + id, pagingCount[id]);
    }
    classes = '';
    html = '';
  }
  function loadGrid(that, id) {
    var list;
    if (ui.hasClass(that, ui.datatable.nameListFiltered)) {
      list = ui.find('.' + ui.datatable.nameListContent + '.' + ui.datatable.nameFiltered, that);
    } else {
      list = ui.find('.' + ui.datatable.nameListContent, that);
    }
    var paging = ui.find('.' + ui.datatable.namePaging, that);
    if (paging.length > 0) {
      if (pagingCount[id] === undefined || pagingCount[id] === 0) {
        pagingCount[id] = 1;
        createPaging(paging, id, list.length);
      } else {
        createPaging(paging, id, list.length);
      }
    } else {
      pagingCount[id] = 0;
      ui.addClass(that, ui.datatable.nameListShowAll);
    }
    var gridTotal = ui.find('.' + ui.datatable.nameTotal, that);
    if (gridTotal.length > 0) {
      gridTotal[0].textContent = list.length;
    }
    var isEven = false;
    var gridStriped = ui.hasClass(that, ui.datatable.nameListStriped);
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
      for (var i = (pagingCount[id] - 1) * showCount[id]; i < pagingCount[id] * showCount[id]; i++) {
        evenList(list[i]);
      }
    } else {
      Array.prototype.forEach.call(list, function (item) {
        evenList(item);
      });
    }
    list = '';
  }
  ui.on(document, 'click', '.' + ui.datatable.target + ' .' + ui.datatable.namePaging + ' button', function () {
    var that = ui.closest(this, '.' + ui.datatable.target)[0];
    var id = that.getAttribute(ui.datatable.dataID);
    if (ui.hasClass(this, ui.datatable.nameNext)) {
      pagingCount[id] += 1;
    } else if (ui.hasClass(this, ui.datatable.namePrev)) {
      pagingCount[id] -= 1;
    } else {
      pagingCount[id] = Number(this.textContent);
    }
    loadGrid(that, id);
  });
  ui.on(document, 'change', '.' + ui.datatable.target + ' select.' + ui.datatable.nameListShow, function () {
    var that = ui.closest(this, '.' + ui.datatable.target)[0];
    var id = that.getAttribute(ui.datatable.dataID);
    if (isNaN(Number(this.value))) {
      showCount[id] = 0;
      pagingCount[id] = 1;
      ui.addClass(that, ui.datatable.nameListShowAll);
    } else {
      showCount[id] = this.value;
      ui.removeClass(that, ui.datatable.nameListShowAll);
    }
    if (testStorage && sessionStorage !== undefined) {
      sessionStorage.setItem(ui.datatable.storageShow + id, showCount[id]);
    }
    loadGrid(that, id);
  });
  ui.on(document, 'mousedown', '.' + ui.datatable.target + ' [' + ui.datatable.dataSort + ']', function () {
    var that = ui.closest(this, '.' + ui.datatable.target)[0];
    var id = that.getAttribute(ui.datatable.dataID);
    var buttons = ui.find('[' + ui.datatable.dataSort + ']', that);
    ui.removeClass(buttons, ui.datatable.nameActive);
    ui.addClass(this, ui.datatable.nameActive);
    Array.prototype.forEach.call(buttons, function (el) {
      if (!ui.hasClass(el, ui.datatable.nameActive)) {
        ui.removeClass(el, ui.datatable.nameAsc + ' ' + ui.datatable.nameDesc);
        if (ui.globals.inlineSvg) {
          ui.find('.' + ui.datatable.nameIcon, el)[0] = ui.datatable.sortIcon;
        } else {
          ui.find('.' + ui.datatable.nameIcon + ' use', el)[0].setAttribute('href', ui.globals.iconSrc + '#' + ui.datatable.sortIcon);
        }
      }
    });
    var sortType = this.getAttribute(ui.datatable.dataType);
    if (sortType === null) {
      sortType = '';
    }
    var isAsc = ui.hasClass(this, ui.datatable.nameAsc);
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
    var gridContainer = ui.find('.' + ui.datatable.nameContainer, that)[0];
    Array.prototype.forEach.call(ui.find('.' + ui.datatable.nameListContent, gridContainer), function (el) {
      temp.appendChild(el);
    });
    var arr = [];
    var arrSorted = [];
    var sortIndex = this.getAttribute(ui.datatable.dataSort);
    if (sortIndex === null || sortIndex === '' || sortIndex === '0') {
      sortIndex = 0;
    } else {
      sortIndex = Number(sortIndex) - 1;
    }
    var list = ui.find('.' + ui.datatable.nameListContent, temp);
    Array.prototype.forEach.call(list, function (el) {
      var val = el.getAttribute(ui.datatable.dataVal);
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
    for (var i = 0; i < list.length; i++) {
      temp.appendChild(list[arr.indexOf(arrSorted[i])]);
      arr[arr.indexOf(arrSorted[i])] = '';
    }
    gridContainer.appendChild(temp);
    pagingCount[id] = 1;
    loadGrid(that, id);
    arr = [];
    arrSorted = [];
    buttons = '';
    list = '';
  });
  function gridFilter(that, firstLoading) {
    var contentArr, contentVal;
    var vals = [];
    var indexes = [];
    var id = that.getAttribute(ui.datatable.dataID);
    Array.prototype.forEach.call(ui.find('.' + ui.datatable.nameFilter, that), function (el, i) {
      if (firstLoading) {
        vals = loadedVals[id].split(',');
        if (el.type === 'checkbox' || el.type === 'radio') {
          if (vals[i] !== '') {
            el.checked = true;
          }
        } else if (el.tagName === 'SELECT') {
          Array.prototype.forEach.call(el.options, function (item) {
            if (customLowerCase(item.innerText) === vals[i]) {
              var index = Array.prototype.slice.call(el.options).indexOf(item);
              el.selectedIndex = index;
            }
          });
        } else {
          el.value = vals[i];
        }
      } else {
        var val = '';
        if (el.type === 'checkbox' || el.type === 'radio') {
          if (el.checked) {
            val = el.value;
          }
        } else {
          val = el.value;
        }
        val = val.replace(/^\s+|\s+$/g, '');
        var sortType = el.getAttribute(ui.datatable.dataType);
        if (sortType === null) {
          sortType = '';
        }
        if (sortType === ui.datatable.sortTypeNumber) {
          vals.push(val);
        } else {
          vals.push(customLowerCase(val));
        }
      }
      var sortIndex = el.getAttribute(ui.datatable.dataIndex);
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
    });
    var list;
    if (vals.length > 0) {
      var activeFilters = vals.filter(function (filterVal) {
        return filterVal !== '';
      });
      var gridContainer = ui.find('.' + ui.datatable.nameContainer, that)[0];
      Array.prototype.forEach.call(ui.find('.' + ui.datatable.nameListContent, gridContainer), function (el) {
        temp.appendChild(el);
      });
      var checkAll = ui.find('.' + ui.datatable.nameCheckAll, that);
      if (checkAll.length > 0) {
        Array.prototype.forEach.call(checkAll, function (item) {
          item.checked = false;
        });
      }
      list = ui.find('.' + ui.datatable.nameListContent, temp);
      Array.prototype.forEach.call(list, function (el) {
        if (ui.hasClass(el, ui.datatable.nameChecked)) {
          ui.removeClass(el, ui.datatable.nameChecked);
          ui.find('.' + ui.datatable.nameCheck, el)[0].checked = false;
        }
      });
      if (activeFilters.length > 0) {
        ui.addClass(that, ui.datatable.nameListFiltered);
        Array.prototype.forEach.call(list, function (el) {
          var passed = [];
          contentVal = el.getAttribute(ui.datatable.dataVal);
          if (contentVal !== null && contentVal !== '') {
            contentVal = customLowerCase(contentVal);
            contentArr = contentVal.split(ui.datatable.valueSplit);
            Array.prototype.forEach.call(vals, function (item, j) {
              if (item !== '') {
                if (indexes[j] === '') {
                  if (contentVal.replace(/\|/g, ' ').match(item) !== null) {
                    passed.push('pass');
                  }
                } else {
                  if (contentArr[indexes[j]] === item) {
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
      if (testStorage && sessionStorage !== undefined) {
        sessionStorage.setItem(ui.datatable.storageVals + id, vals.toString());
      }
      gridContainer.appendChild(temp);
    }
    loadGrid(that, id);
    vals = [];
    indexes = [];
    contentArr = [];
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
  });
  ui.on(document, 'change', '.' + ui.datatable.target + ' .' + ui.datatable.nameCheckAll, function () {
    var checkFnc = function checkFnc(el) {
      if (!ui.hasClass(el, ui.datatable.nameChecked)) {
        var form = ui.find('.' + ui.datatable.nameCheck, el)[0];
        if (form !== undefined) {
          ui.addClass(el, ui.datatable.nameChecked);
          form.checked = true;
        }
      }
    };
    var uncheckFnc = function uncheckFnc(el) {
      if (ui.hasClass(el, ui.datatable.nameChecked)) {
        var form = ui.find('.' + ui.datatable.nameCheck, el)[0];
        if (form !== undefined) {
          ui.removeClass(el, ui.datatable.nameChecked);
          form.checked = false;
        }
      }
    };
    var that = ui.closest(this, '.' + ui.datatable.target)[0];
    var checked = this.checked;
    Array.prototype.forEach.call(ui.find('.' + ui.datatable.nameListContent, that), function (el) {
      if (checked) {
        if (ui.hasClass(that, ui.datatable.nameListFiltered)) {
          if (ui.hasClass(el, ui.datatable.nameFiltered)) {
            checkFnc(el);
          } else {
            uncheckFnc(el);
          }
        } else {
          checkFnc(el);
        }
      } else {
        uncheckFnc(el);
      }
    });
  });
  ui.on(document, 'change', '.' + ui.datatable.target + ' .' + ui.datatable.nameCheck, function () {
    var that = ui.closest(that, '.' + ui.datatable.target)[0];
    var list = ui.closest(this, '.' + ui.datatable.nameListContent)[0];
    if (this.checked) {
      ui.addClass(list, ui.datatable.nameChecked);
    } else {
      ui.removeClass(list, ui.datatable.nameChecked);
      var checkAll = ui.find('.' + ui.datatable.nameCheckAll, that)[0];
      if (ui.find('.' + ui.datatable.nameCheckAll, that)[0] !== undefined) {
        checkAll.checked = false;
      }
    }
  });
  ui.datatable.Start = function () {
    Array.prototype.forEach.call(ui.find('.' + ui.datatable.target + ':not(.' + ui.datatable.targetLoaded + ')'), function (el) {
      startListID += 1;
      var id = ui.datatable.listIdNaming + startListID;
      el.setAttribute(ui.datatable.dataID, id);
      if (testStorage && sessionStorage !== undefined) {
        loadedVals[id] = sessionStorage.getItem(ui.datatable.storageVals + id);
        showCount[id] = Number(sessionStorage.getItem(ui.datatable.storageShow + id));
        pagingCount[id] = Number(sessionStorage.getItem(ui.datatable.storagePaging + id));
      }
      var gridShow = ui.find('select.' + ui.datatable.nameListShow, el)[0];
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
        Array.prototype.forEach.call(gridShow.options, function (item) {
          if (Number(customLowerCase(item.innerText)) === showCount[id]) {
            var index = Array.prototype.slice.call(gridShow.options).indexOf(item);
            gridShow.selectedIndex = index;
          }
        });
      }
      if (loadedVals[id] !== undefined && loadedVals[id] !== null) {
        if (loadedVals[id].length > 0) {
          gridFilter(el, true);
        }
      }
      ui.addClass(el, ui.datatable.targetLoaded);
      loadGrid(el, id);
    });
  };
  ui.on(window, 'beforeunload', function () {
    if (testStorage && sessionStorage !== undefined) {
      if (window.performance) {
        if (performance.navigation.type !== 1) {
          Array.prototype.forEach.call(ui.find('.' + ui.datatable.target), function (item) {
            var id = item.getAttribute(ui.datatable.dataID);
            sessionStorage.setItem(ui.datatable.storageVals + id, '');
            sessionStorage.setItem(ui.datatable.storageShow + id, 0);
            sessionStorage.setItem(ui.datatable.storagePaging + id, 0);
          });
        }
      }
    }
  });
  ui.onload(ui.datatable.Start);
  ui.on(document, ui.globals.eventAjaxCallback, function () {
    if (ui.ajax.classNames.indexOf(ui.datatable.target) > -1) {
      ui.datatable.Start();
    }
  });
})();
ui.photoGallery = {
  targetGallery: 'ui-gallery',
  targetPreview: 'ui-gallery-preview',
  targetPhotos: 'ui-photo',
  targetPhotoVer: 'ui-photo-v',
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
  nameOpen: 'ui-open',
  nameOpenEase: 'ui-open-ease',
  namePause: 'ui-pause',
  namePauseEase: 'ui-pause-ease',
  stylesCloseIcon: 'ui-btn ui-btn-lg ui-btn-square ui-btn-ghost ui-circle ui-ease-btn',
  stylesPreview: 'ui-ease-layout',
  stylesPreviewBtn: 'ui-circle ui-ease-btn',
  nameIcon: 'ui-icon',
  tagGalleryInfo: 'span',
  closeIcon: 'remove',
  prevIcon: 'angle-left',
  nextIcon: 'angle-right',
  loaderIcon: 'loader-line',
  errorIcon: 'ban',
  imgVerRatio: 1.33,
  imgZoomSize: 2,
  dataTarget: 'data-ui-target',
  dataCount: 'data-ui-count',
  dataHref: 'data-ui-href',
  eventGalleryTouch: 'ui:photogallery',
  eventPreviewClose: 'ui:previewClose',
  eventPreviewNav: 'ui:previewNav'
};
(function () {
  var imgZoomMove = false,
    pageTouchmove = false,
    pageTouchmoveTimer;
  ui.photoGallery.Start = function () {
    var galleryCounter, imgCounter, imgWidth;
    var gallery = ui.find('.' + ui.photoGallery.targetGallery);
    function checkImages() {
      var img = ui.find('a.' + ui.photoGallery.targetPhotos + ' img', gallery[galleryCounter]);
      var imgLength = img.length - 1;
      if (imgLength < 0) {
        return;
      }
      function imgLoader() {
        var newImg = new Image();
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
            if (galleryCounter < gallery.length - 1) {
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
      var parent = ui.closest(that, '.' + ui.photoGallery.targetGallery)[0];
      if (parent === undefined) {
        parent = ui.closest(that, '.' + ui.photoGallery.nameGalleryPassive)[0];
      }
      var images;
      if (call === undefined) {
        images = ui.find('a.' + ui.photoGallery.targetPhotos, parent);
      } else {
        images = ui.find('.' + ui.photoGallery.targetPhotos, parent);
      }
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
      var pageYPos;
      if (ui.userAgents.mobile) {
        pageYPos = window.pageYOffset;
      }
      var loadedImages = [];
      var loadedTitles = [];
      Array.prototype.forEach.call(images, function (el) {
        var href = el.getAttribute('href');
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
      var previousOpened = ui.find('.' + ui.photoGallery.targetPreview);
      if (previousOpened.length > 0) {
        Array.prototype.forEach.call(previousOpened, function (el) {
          el.parentNode.removeChild(el);
        });
      }
      var index = Array.prototype.slice.call(images).indexOf(that);
      var html = '<div class="' + ui.photoGallery.targetPreview + ' ' + ui.photoGallery.stylesPreview + '">' + '<div class="' + ui.photoGallery.namePreviewBg + '"></div>' + '<button class="' + ui.photoGallery.namePreviewClose + ' ' + ui.photoGallery.stylesCloseIcon + '">';
      if (ui.globals.inlineSvg) {
        html += '<svg class="' + ui.photoGallery.nameIcon + '" viewBox="' + ui.globals.inlineSvgViewBox + '">' + ui.photoGallery.closeIcon;
      } else {
        html += '<svg class="' + ui.photoGallery.nameIcon + '"><use href="' + ui.globals.iconSrc + '#' + ui.photoGallery.closeIcon + '"/>';
      }
      html += '</svg>' + '</button>' + '<button type="button" class="' + ui.photoGallery.namePreviewPrev + ' ' + ui.photoGallery.stylesPreviewBtn + '">';
      if (ui.globals.inlineSvg) {
        html += '<svg class="' + ui.photoGallery.nameIcon + '" viewBox="' + ui.globals.inlineSvgViewBox + '">' + ui.photoGallery.prevIcon;
      } else {
        html += '<svg class="' + ui.photoGallery.nameIcon + '"><use href="' + ui.globals.iconSrc + '#' + ui.photoGallery.prevIcon + '"/>';
      }
      html += '</svg>' + '</button>' + '<button type="button" class="' + ui.photoGallery.namePreviewNext + ' ' + ui.photoGallery.stylesPreviewBtn + '">';
      if (ui.globals.inlineSvg) {
        html += '<svg class="' + ui.photoGallery.nameIcon + '" viewBox="' + ui.globals.inlineSvgViewBox + '">' + ui.photoGallery.nextIcon;
      } else {
        html += '<svg class="' + ui.photoGallery.nameIcon + '"><use href="' + ui.globals.iconSrc + '#' + ui.photoGallery.nextIcon + '"/>';
      }
      html += '</svg>' + '</button>';
      if (ui.globals.inlineSvg) {
        html += '<svg class="' + ui.photoGallery.namePreviewLoader + ' ' + ui.photoGallery.nameIcon + '" viewBox="' + ui.globals.inlineSvgViewBox + '">' + ui.photoGallery.loaderIcon;
      } else {
        html += '<svg class="' + ui.photoGallery.namePreviewLoader + ' ' + ui.photoGallery.nameIcon + '"><use href="' + ui.globals.iconSrc + '#' + ui.photoGallery.loaderIcon + '"/>';
      }
      html += '</svg>' + '<span class="' + ui.photoGallery.namePreviewInfo + ' ' + ui.photoGallery.stylesPreview + '"></span>' + '<img class="' + ui.photoGallery.stylesPreview + '">' + '</div>';
      ui.find('body')[0].insertAdjacentHTML('beforeend', html);
      var preview = ui.find('.' + ui.photoGallery.targetPreview);
      var newImg = new Image();
      newImg.src = loadedImages[index];
      var img = ui.find('img', preview);
      img.src = newImg.src;
      var imgHeight;
      var loader = ui.find('.' + ui.photoGallery.namePreviewLoader, preview);
      var showImage = function showImage() {
        if (img.naturalWidth / img.naturalHeight < 1.33) {
          ui.addClass(img, ui.photoGallery.targetPhotoVer);
        }
        imgWidth = img.width;
        imgHeight = img.height;
        ui.addClass(loader, ui.photoGallery.namePause);
        loader.style.display = 'none';
        ui.addClass(img, ui.photoGallery.nameOpen);
        setTimeout(function () {
          ui.addClass(img, ui.photoGallery.nameOpenEase);
        }, ui.globals.ease + 10);
      };
      var notLoadedImage = function notLoadedImage() {
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
        if (index < 1) {
          ui.find('.' + ui.photoGallery.namePreviewPrev)[0].style.display = 'none';
        } else {
          ui.find('.' + ui.photoGallery.namePreviewPrev)[0].style.display = 'block';
        }
        if (index >= loadedImages.length - 1) {
          ui.find('.' + ui.photoGallery.namePreviewNext)[0].style.display = 'none';
        } else {
          ui.find('.' + ui.photoGallery.namePreviewNext)[0].style.display = 'block';
        }
        var info = ui.find('.' + ui.photoGallery.namePreviewInfo)[0];
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
      toggleGalleryTools();
      ui.addClass(document, ui.photoGallery.namePreviewOpened);
      ui.addClass(preview, ui.photoGallery.nameOpen);
      setTimeout(function () {
        ui.addClass(preview, ui.photoGallery.nameOpenEase);
      }, 10);
      function closeGallery() {
        imgZoomMove = false;
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
        }
      });
      ui.on('.' + ui.photoGallery.namePreviewClose, 'click', closeGallery);
      ui.on('.' + ui.photoGallery.namePreviewBg, 'click', closeGallery);
      var imgPosX, imgPosY, imgZoom;
      function navigateGallery(that, direction) {
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
        }
        ui.removeClass(img, ui.photoGallery.nameOpenEase);
        loader.style.display = 'block';
        ui.removeClass(loader, ui.photoGallery.namePause);
        if (ui.globals.inlineSvg) {
          loader.innerHTML = ui.photoGallery.loaderIcon;
        } else {
          ui.find('use', loader)[0].setAttribute('href', ui.globals.iconSrc + '#' + ui.photoGallery.loaderIcon);
        }
        toggleGalleryTools();
        setTimeout(function () {
          ui.removeClass(img, ui.photoGallery.nameOpen);
          ui.removeClass(img, ui.photoGallery.targetPhotoVer);
          newImg.src = loadedImages[index];
          img.src = newImg.src;
          newImg.onload = showImage;
          newImg.onerror = notLoadedImage;
          imgPosX = '-50';
          imgPosY = '-50';
          imgZoom = 1;
          ui.removeClass(that, ui.photoGallery.namePreviewZoom);
          img.style.transform = 'translate(' + imgPosX + '%,' + imgPosY + '%) scale(' + imgZoom + ')';
        }, ui.globals.ease);
      }
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
      imgPosX = '-50';
      imgPosY = '-50';
      imgZoom = 1;
      ui.on(img, 'touchend click', function (e) {
        var touchesLength;
        if (e.type === 'click') {
          touchesLength = 1;
        } else {
          touchesLength = e.changedTouches.length;
        }
        if (touchesLength === 1) {
          var lastTouchEnd = 0;
          var now = new Date().getTime();
          if (imgZoomMove) {
            return;
          }
          if (e.type === 'touchend' && now - lastTouchEnd <= 200 && now - lastTouchEnd > 0 || e.type === 'click') {
            e.preventDefault();
            if (ui.hasClass(this, ui.photoGallery.namePreviewZoom)) {
              imgPosX = '-50';
              imgPosY = '-50';
              imgZoom = 1;
              ui.removeClass(this, ui.photoGallery.namePreviewZoom);
            } else {
              var getX, getY;
              var rect = img.getBoundingClientRect();
              imgZoom = ui.photoGallery.imgZoomSize;
              if (e.type === 'click') {
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
          }
          lastTouchEnd = now;
        }
      });
      ui.on(img, 'mousedown touchstart', function (e) {
        if (!ui.hasClass(this, ui.photoGallery.namePreviewZoom)) {
          return;
        }
        imgZoomMove = false;
        var sx, sy, getX, getY;
        if (e.type === 'mousedown') {
          e.preventDefault();
          sx = e.clientX;
          sy = e.clientY;
        } else {
          sx = e.changedTouches[0].pageX;
          sy = e.changedTouches[0].pageY;
        }
        var matrix = window.getComputedStyle(img).getPropertyValue('transform');
        matrix = matrix.replace('matrix', '').replace(/[\,\(\)\s]/g, ' ').replace(/\s\s/g, '|');
        matrix = matrix.split('|');
        ui.on(img, 'mousemove touchmove', function (e) {
          if (imgZoom > 1 && (imgWidth * imgZoom > window.innerWidth || imgHeight * imgZoom > window.innerHeight)) {
            if (e.type === 'mousemove') {
              getX = e.clientX;
              getY = e.clientY;
            } else {
              getX = e.changedTouches[0].pageX;
              getY = e.changedTouches[0].pageY;
            }
            imgZoomMove = true;
            ui.addClass(img, ui.photoGallery.namePauseEase);
            imgPosX = parseFloat((getX - sx) / imgWidth) * 100 + parseFloat(matrix[4] / imgWidth * 100);
            imgPosY = parseFloat((getY - sy) / imgHeight) * 100 + parseFloat(matrix[5] / imgHeight * 100);
            img.style.transform = 'translate(' + imgPosX + '%,' + imgPosY + '%) scale(' + imgZoom + ')';
          }
        });
        ui.on(img, 'mouseup mouseleave touchend touchcancel', function () {
          if (imgZoom > 1 && (imgWidth * imgZoom > window.innerWidth || imgHeight * imgZoom > window.innerHeight)) {
            var horLimit = (imgWidth * imgZoom - window.innerWidth) / (imgWidth * imgZoom) * 100;
            var verLimit = (imgHeight * imgZoom - window.innerHeight) / (imgHeight * imgZoom) * 100;
            if (imgPosY < -verLimit - 100) {
              imgPosY = -verLimit - 100;
            }
            if (imgPosX < -horLimit - 100) {
              imgPosX = -horLimit - 100;
            }
            if (imgPosX > horLimit) {
              imgPosX = horLimit;
            }
            if (imgPosY > verLimit) {
              imgPosY = verLimit;
            }
            img.style.transform = 'translate(' + imgPosX + '%,' + imgPosY + '%) scale(' + imgZoom + ')';
          }
          ui.off(img, 'mousemove mouseup mouseleave touchmove touchend touchcancel');
          ui.removeClass(img, ui.photoGallery.namePauseEase);
        });
      });
    }
    ui.on(document, 'touchmove.' + ui.photoGallery.eventGalleryTouch + ' touchend', '.' + ui.photoGallery.targetGallery + ' a.' + ui.photoGallery.targetPhotos, function (e) {
      var _this5 = this;
      if (e.type === 'touchmove') {
        pageTouchmove = true;
      }
      if (e.type === 'touchend') {
        clearTimeout(pageTouchmoveTimer);
        pageTouchmoveTimer = setTimeout(function () {
          if (!pageTouchmove) {
            galleryFnc(e, _this5);
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
      var target = this.getAttribute(ui.photoGallery.dataTarget);
      var count = this.getAttribute(ui.photoGallery.dataCount);
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
  };
  ui.onload(ui.photoGallery.Start);
})();
ui.imgUpload = {
  target: 'ui-imgupload',
  targetImages: 'ui-imgupload-src',
  targetNames: 'ui-imgupload-name',
  targetInfos: 'ui-imgupload-info',
  targetTags: 'ui-imgupload-tag',
  nameList: 'ui-imgupload-list',
  nameDrop: 'ui-imgupload-drop',
  nameLoading: 'ui-imgupload-loading',
  nameUploading: 'ui-imgupload-uploading',
  nameOpen: 'ui-open',
  nameOpenEase: 'ui-open-ease',
  tagList: 'li',
  tagNames: 'span',
  tagInfos: 'i',
  ratio: '4:3',
  resize: true,
  resizeWidth: 1024,
  resizeHeight: 768,
  fill: false,
  fillColor: 'hsl(0, 0%, 100%)',
  fit: true,
  newID: 1000000,
  types: ['jpg', 'jpeg', 'png', 'gif'],
  msgConfirm: 'Yes',
  msgNotConfirm: 'No',
  msgImgError: 'is not found!',
  msgBeforeUpload: 'Do you want to upload your files?',
  msgError: 'Your files not saved! Please, check your connection and try again.',
  dataSrc: 'data-ui-src',
  dataID: 'data-ui-id',
  dataTag: 'data-ui-tag',
  formDataID: 'id',
  formDataTag: 'tag',
  formDataImg: 'img',
  eventUploader: 'ui:imageUploader'
};
ui.imgUpload.Start = function () {
  var savedImgs;
  var loadFiles = function loadFiles(uploader, files) {
    if (files.length > 0) {
      var allowed = [];
      for (var i = 0; i < files.length; i++) {
        var ext = files[i].name.split('.')[1].toLowerCase();
        if (ext !== null) {
          ext = ext.toString();
          if (ui.imgUpload.types.indexOf(ext) > -1) {
            allowed.push(files[i]);
          }
        }
      }
      if (allowed.length === 0) {
        return;
      }
      var readers = [];
      var img = [];
      var imgLoaded = [];
      var w = [];
      var h = [];
      var html = '';
      var loaded = 0;
      var c = document.createElement("canvas");
      var ctx = c.getContext("2d");
      ui.addClass(uploader, ui.imgUpload.nameLoading);
      var loadImages = function loadImages(j, tag) {
        w[j] = img[j].width;
        h[j] = img[j].height;
        var r = ui.imgUpload.ratio.split(':');
        if (r.length !== 2) {
          r = '';
        }
        if (ui.imgUpload.resize && !savedImgs) {
          if (w[j] > h[j]) {
            h[j] = h[j] / w[j] * ui.imgUpload.resizeWidth;
            w[j] = ui.imgUpload.resizeWidth;
            if (h[j] > ui.imgUpload.resizeHeight) {
              w[j] = w[j] / h[j] * ui.imgUpload.resizeHeight;
              h[j] = ui.imgUpload.resizeHeight;
            }
          } else {
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
                c.width = w[j];
                c.height = r[1] / r[0] * w[j];
              } else {
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
          if (ui.imgUpload.resize) {
            c.width = ui.imgUpload.resizeWidth;
            c.height = ui.imgUpload.resizeHeight;
          } else {
            if (w[j] > h[j]) {
              c.width = r[0] / r[1] * h[j];
              c.height = h[j];
            } else {
              c.width = w[j];
              c.height = r[1] / r[0] * w[j];
            }
          }
          ctx.drawImage(img[j], 0, 0, c.width, c.height);
        } else {
          if (ui.imgUpload.fill && !savedImgs) {
            ctx.fillStyle = ui.imgUpload.fillColor;
            ctx.fillRect(0, 0, c.width, c.height);
            ctx.drawImage(img[j], (c.width - w[j]) / 2, (c.height - h[j]) / 2, w[j], h[j]);
          } else {
            ctx.drawImage(img[j], 0, 0, w[j], h[j]);
          }
        }
        var data = c.toDataURL("image/jpeg");
        var size = data.split(',')[1].length;
        size = 4 * Math.ceil(size / 3) * 0.5624896334383812 / 1000;
        size = size.toFixed(0);
        imgLoaded[j] = [];
        imgLoaded[j].name = allowed[j].name;
        imgLoaded[j].data = data;
        imgLoaded[j].size = size;
        imgLoaded[j].tag = tag;
        if (savedImgs) {
          imgLoaded[j].id = allowed[j].id;
        } else {
          ui.imgUpload.newID += 1;
          imgLoaded[j].id = ui.imgUpload.newID;
        }
      };
      var loadImagesThen = function loadImagesThen() {
        loaded += 1;
        if (loaded === allowed.length) {
          setTimeout(function () {
            Array.prototype.forEach.call(imgLoaded, function (img) {
              if (img !== undefined) {
                html += '<' + ui.imgUpload.tagList + ' class="' + ui.imgUpload.nameOpenEase + '">' + '<span class="' + ui.imgUpload.targetImages + '">' + '<img id="' + img.id + '" src="' + img.data + '" draggable="false">' + '</span>' + '<' + ui.imgUpload.tagNames + ' class="' + ui.imgUpload.targetNames + '">' + img.name + '</' + ui.imgUpload.tagNames + '>' + '<' + ui.imgUpload.tagInfos + ' class="' + ui.imgUpload.targetInfos + '">' + img.size + 'kb' + '</' + ui.imgUpload.tagInfos + '>';
                if (img.tag !== '') {
                  html += '<span class="' + ui.imgUpload.targetTags + '">' + img.tag + '</span>';
                }
                html += '</' + ui.imgUpload.tagList + '>';
              }
            });
            var list = ui.find('.' + ui.imgUpload.nameList + ' ul', uploader)[0];
            list.insertAdjacentHTML('afterbegin', html);
          }, 0);
          var listCont = ui.find('.' + ui.imgUpload.nameList, uploader)[0];
          ui.addClass(listCont, ui.imgUpload.nameOpen);
          var showTimer;
          if (savedImgs) {
            showTimer = ui.globals.slow;
          } else {
            showTimer = ui.globals.ease;
          }
          setTimeout(function () {
            Array.prototype.forEach.call(ui.find('.' + ui.imgUpload.nameList + ' ' + ui.imgUpload.tagList + '.' + ui.imgUpload.nameOpenEase, listCont), function (newImg, i) {
              setTimeout(function () {
                ui.removeClass(newImg, ui.imgUpload.nameOpenEase);
              }, ui.globals.fast / 2 * i);
            });
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
      Array.prototype.forEach.call(allowed, function (el, i) {
        if (savedImgs) {
          img[i] = new Image();
          img[i].src = el.name;
          img[i].onload = function () {
            loadImages(i, el.tag);
            loadImagesThen();
          };
          img[i].onerror = function () {
            if (ui.alerts === undefined) {
              alert(ui.imgUpload.msgImgError);
            } else {
              ui.alerts.message({
                msg: el.name + ' ' + ui.imgUpload.msgImgError,
                theme: ui.alerts.themeDanger
              });
            }
            loadImagesThen();
          };
        } else {
          readers[i] = new FileReader();
          readers[i].readAsDataURL(el);
          readers[i].onload = function () {
            img[i] = new Image();
            img[i].src = this.result;
            img[i].onload = function () {
              loadImages(i, '');
            };
          };
          readers[i].onloadend = loadImagesThen;
        }
      });
    }
  };
  Array.prototype.forEach.call(ui.find('.' + ui.imgUpload.target), function (el) {
    var i = -1;
    var imported = [];
    Array.prototype.forEach.call(ui.find('.' + ui.imgUpload.nameList + ' li', el), function (item) {
      var img = item.getAttribute(ui.imgUpload.dataSrc);
      if (img !== null && img !== '') {
        var id = item.getAttribute(ui.imgUpload.dataID);
        if (id !== null && id !== '') {
          i += 1;
          imported[i] = [];
          imported[i].name = img;
          imported[i].id = id;
          imported[i].tag = '';
          var tag = item.getAttribute(ui.imgUpload.dataTag);
          if (tag !== null) {
            imported[i].tag = tag;
          }
        }
      }
      item.parentNode.removeChild(item);
    });
    savedImgs = true;
    loadFiles(el, imported);
    imported = [];
  });
  ui.on(document, 'dragenter', '.' + ui.imgUpload.target, function (e) {
    var _this6 = this;
    e.preventDefault();
    e.stopPropagation();
    ui.addClass(this, ui.imgUpload.nameDrop);
    ui.on('body', 'dragover.' + ui.imgUpload.eventUploader, function (ev) {
      ev.preventDefault();
      ev.stopPropagation();
      var uploader = ui.closest(ev.target, '.' + ui.imgUpload.target)[0];
      if (uploader === undefined) {
        ui.removeClass(_this6, ui.imgUpload.nameDrop);
      } else {
        ui.addClass(_this6, ui.imgUpload.nameDrop);
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
    type = type || '';
    sliceSize = sliceSize || 512;
    var byteCharacters = atob(base);
    var byteArrays = [];
    for (var j = 0; j < byteCharacters.length; j += sliceSize) {
      var slice = byteCharacters.slice(j, j + sliceSize);
      var byteNumbers = new Array(slice.length);
      for (var i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      var byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
    var blob = new Blob(byteArrays, {
      type: type
    });
    return blob;
  }
  ui.on(document, 'submit', '.' + ui.imgUpload.target + ' form', function (e) {
    var _this7 = this;
    e.preventDefault();
    var uploaderFnc = function uploaderFnc() {
      var formData = new FormData();
      var uploader = ui.closest(_this7, '.' + ui.imgUpload.target)[0];
      Array.prototype.forEach.call(ui.find('.' + ui.imgUpload.nameList + ' ' + ui.imgUpload.tagList, uploader), function (el, i) {
        var file = ui.find('.' + ui.imgUpload.targetImages + ' img', el)[0];
        formData.append(ui.imgUpload.formDataID + '[' + i + ']', file.id);
        var tag = ui.find('.' + ui.imgUpload.targetTags, el)[0];
        if (tag !== undefined) {
          tag = tag.textContent;
        } else {
          tag = '';
        }
        formData.append(ui.imgUpload.formDataTag + '[' + i + ']', tag);
        var img = file.src.split(";");
        var imgType = img[0].split(":")[1];
        img = img[1].split(",")[1];
        img = toBlob(img, imgType);
        formData.append(ui.imgUpload.formDataImg + '[' + i + ']', img);
      });
      ui.addClass(uploader, ui.imgUpload.nameUploading);
      ui.ajax({
        type: 'POST',
        url: _this7.action,
        data: formData,
        callback: function callback(status, response) {
          ui.removeClass(uploader, ui.imgUpload.nameUploading);
          if (status === 'success') {
            response = JSON.parse(response);
            if (ui.alerts === undefined) {
              alert(response.message);
            } else {
              if (response.success) {
                ui.alerts.message({
                  msg: response.message,
                  theme: ui.alerts.themeSuccess
                });
              } else {
                ui.alerts.message({
                  msg: response.message,
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
      var confirmed = confirm(ui.imgUpload.msgBeforeUpload);
      if (confirmed) {
        uploaderFnc();
      }
    } else {
      ui.alerts.dialog({
        msg: ui.imgUpload.msgBeforeUpload,
        error: ui.imgUpload.msgNotConfirm,
        callback: function callback(val) {
          if (val === ui.alerts.successBtnValue) {
            uploaderFnc();
          }
        }
      });
    }
  });
  ui.on(document, 'click', '.' + ui.imgUpload.nameLoading + ',.' + ui.imgUpload.nameUploading, function (e) {
    e.preventDefault();
    e.stopPropagation();
  });
};
ui.onload(ui.imgUpload.Start);
ui.loadingMask = {
  target: 'ui-loading-mask',
  nameSticky: 'ui-loading-mask-sticky',
  nameLoader: 'ui-loading-mask-loader',
  nameOpen: 'ui-open',
  nameOpenEase: 'ui-open-ease',
  stylesLoader: 'ui-ease-layout',
  stylesIcon: 'ui-animate-spin',
  staticIconTop: 220,
  loadingSize: 0.32,
  loadingBox: '0 0 264 264',
  loadingPath: '<path d="M1 132a11 11 0 0 1 11-11 11 11 0 0 1 11 11 109.123 109.123 0 0 0 109 109 11 11 0 0 1 11 11 11 11 0 0 1-11 11C59.766 263 1 204.233 1 132Zm240 0A109.122 109.122 0 0 0 132 23a11 11 0 0 1-11-11 11 11 0 0 1 11-11c72.233 0 131 58.768 131 131a11 11 0 0 1-11 11 11 11 0 0 1-11-11Z"/>'
};
(function () {
  var maskItems = [],
    maskHolders = [];
  ui.loadingMask.Start = function () {
    ui.loadingMask.toggle = function (that) {
      var l, i, j, sticky, status, html;
      l = ui.find(that);
      function effectTimers(type) {
        function emptyVars(j, l) {
          if (j === l.length - 1) {
            maskItems = [];
            maskHolders = [];
          }
        }
        if (type === 'hide') {
          setTimeout(function () {
            if (maskHolders.length > 0) {
              for (j = 0; j < l.length; j++) {
                if (maskItems[j] !== undefined) {
                  if (ui.closest(maskHolders[j], maskItems[j]).length) {
                    maskItems[j].removeChild(maskHolders[j]);
                    ui.removeClass(maskItems[j], ui.loadingMask.target + ' ' + ui.loadingMask.nameSticky);
                  }
                  emptyVars(j, l);
                }
              }
            }
          }, ui.globals.ease * 2);
        } else {
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
          status = 'hide';
          maskHolders[i] = ui.find('.' + ui.loadingMask.nameLoader, l[i])[0];
          ui.removeClass(maskHolders[i], ui.loadingMask.nameOpenEase);
          setTimeout(function () {
            return ui.removeClass(maskHolders[i], ui.loadingMask.nameOpen);
          }, ui.globals.ease);
          maskItems[i] = l[i];
        } else {
          status = 'show';
          html = '<span class="' + ui.loadingMask.nameLoader + ' ' + ui.loadingMask.stylesLoader + '">';
          if (l[i].offsetHeight > window.innerHeight) {
            html += '<span style="top: ' + ui.loadingMask.staticIconTop + 'px;">';
          } else html += '<span>';
          html += '<svg ' + 'xmlns="http://www.w3.org/2000/svg"' + 'viewBox="' + ui.loadingMask.loadingBox + '"' + 'class="' + ui.loadingMask.stylesIcon + '" ' + 'style="height: ' + l[i].offsetHeight * ui.loadingMask.loadingSize + 'px;">' + ui.loadingMask.loadingPath + '</svg>' + '</span>' + '</span>';
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
        if (i === l.length - 1) effectTimers(status);
      }
    };
    ui.on(document, 'click', '.' + ui.loadingMask.target, function (e) {
      e.preventDefault();
      e.stopPropagation();
    });
  };
  ui.onload(ui.loadingMask.Start);
})();
ui.modal = {
  target: 'ui-modal',
  targetWin: 'ui-modal-win',
  targetBg: 'ui-modal-bg',
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
  nameOpen: 'ui-open',
  nameOpenEase: 'ui-open-ease',
  nameShow: 'ui-show',
  nameShowEase: 'ui-show-ease',
  nameActive: 'ui-active',
  nameIcon: 'ui-icon',
  stylesContent: 'ui-shadow-lg ui-ease-layout',
  stylesCloseBtn: 'ui-ease-btn',
  stylesModalBg: 'ui-ease-layout',
  closeIcon: 'remove',
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
  dataCustomW: 'data-ui-customW',
  dataCustomH: 'data-ui-customH',
  dataOpenSize: 'data-ui-openSize'
};
(function () {
  var pageYPos, modalResizer;
  modalResizer = function modalResizer() {
    var win, type, container, bg, openSize, userDefined, customW, customH, minHeight;
    win = ui.find('.' + ui.modal.targetWin + '.' + ui.modal.nameShow + ' .' + ui.modal.nameContent + ':not(.' + ui.modal.nameFullscreen + ')')[0];
    if (win !== undefined) {
      bg = ui.find('.' + ui.modal.targetBg)[0];
      openSize = win.getAttribute(ui.modal.dataOpenSize);
      if (openSize !== null) {
        type = 'md';
        userDefined = ui.globals.md + 1;
        openSize = Number(openSize);
        if (window.innerWidth < openSize) {
          win.style.width = window.innerWidth - ui.modal.winMargin * 2 + 'px';
        } else {
          if (ui.hasClass(win, ui.modal.nameLG)) {
            type = 'lg';
            userDefined = ui.globals.lg;
          } else if (ui.hasClass(win, ui.modal.nameSM)) {
            type = 'sm';
            userDefined = ui.globals.md;
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
  };
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
            win[0].parentNode.removeChild(win[0]);
          } else {
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
        ui.trigger(document, ui.globals.eventDomChange);
      }, ui.globals.ease);
    };
    ui.modal.open = function (props) {
      var closeBtn, nonClosable, typeArr, type, created, temp, getSize, size, customSize, sizeArr, forms, bg, html, win, content;
      if (props === undefined) {
        return;
      }
      if (props.source === undefined) {
        return;
      }
      ui.modal.close();
      if (ui.userAgents.mobile) {
        pageYPos = window.pageYOffset;
      }
      nonClosable = false;
      if (props.closable !== undefined) {
        if (!props.closable) {
          nonClosable = true;
        }
      }
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
      }
      function checkHeaderFooter() {
        if (ui.find('.' + ui.modal.nameHeader, content)[0] !== undefined) {
          ui.addClass(content, ui.modal.nameHasHeader);
        }
        if (ui.find('.' + ui.modal.nameFooter, content)[0] !== undefined) {
          ui.addClass(content, ui.modal.nameHasFooter);
        }
      }
      function showModal() {
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
          customSize = props.size.split('x');
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
        }
        if (nonClosable) {
          ui.removeClass(win, ui.modal.nameClosable);
        } else {
          ui.addClass(win, ui.modal.nameClosable);
        }
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
            closeBtn += '</svg>' + '</button>';
            content.insertAdjacentHTML('afterbegin', closeBtn);
          }
        }
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
              content.style.width = content.offsetWidth + 'px';
              content.setAttribute(ui.modal.dataOpenSize, content.offsetWidth);
              content.style.height = content.offsetHeight + 'px';
            }
            setTimeout(function () {
              ui.addClass(win, ui.modal.nameShowEase);
              ui.removeClass(win, ui.modal.nameActive);
              modalResizer();
              setTimeout(function () {
                ui.trigger(document, ui.globals.eventDomChange);
              }, ui.globals.ease);
              if (props.callback !== undefined) {
                setTimeout(function () {
                  props.callback.call(content);
                }, ui.globals.ease * 2);
              }
            }, 10);
          }, ui.globals.ease);
        }, 10);
      }
      if (props.type === undefined) {
        props.source = ui.find(props.source);
        if (props.source[0] === undefined) {
          return;
        }
        created = ui.closest(props.source, '.' + ui.modal.targetWin);
        if (created.length > 0) {
          ui.addClass(created, ui.modal.nameActive);
          win = ui.find('.' + ui.modal.targetWin + '.' + ui.modal.nameActive)[0];
          content = ui.find('.' + ui.modal.nameContent, win)[0];
          showModal();
          forms = ui.find('form', content);
          ui.each(forms, function () {
            this.reset();
          });
        } else {
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
        typeArr = [ui.modal.typeAjax, ui.modal.typeIframe];
        if (typeArr.indexOf(props.type) > -1) {
          type = props.type;
        }
        if (type === ui.modal.typeIframe) {
          temp = '<iframe ' + 'class="' + ui.modal.nameIframe + ' ' + ui.modal.nameRemovable + '" ' + 'src="' + props.source + '" ' + 'frameborder="0" ' + 'allowfullscreen' + '>' + '</iframe>';
          createModal();
          content.insertAdjacentHTML('beforeend', temp);
          showModal();
        } else if (type === ui.modal.typeAjax) {
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
    };
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
      }
    });
  };
  ui.onload(ui.modal.Start);
  ui.on(window, 'resize', modalResizer);
})();
ui.photoslide = {
  target: 'ui-photoslide',
  nameNav: 'ui-photoslide-nav',
  namePrev: 'ui-photoslide-prev',
  nameNext: 'ui-photoslide-next',
  nameShow: 'ui-show',
  nameSelected: 'ui-selected',
  nameLoaded: 'ui-loaded',
  nameBtn: 'ui-btn',
  tagNavDot: 'i',
  rexFiles: '(\.png|\.gif|\.jeg|\.jpg|\.svg)$',
  dataSrc: 'data-ui-src'
};
(function () {
  var count, dataSrcLists, loadedImages;
  ui.photoslide.Init = function () {
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
      images[i].removeAttribute(ui.photoslide.dataSrc);
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
  ui.photoslide.Start = function () {
    count = [];
    dataSrcLists = [];
    loadedImages = [];
    ui.photoslide.Init();
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
  };
  ui.onload(ui.photoslide.Start);
  ui.on(document, ui.globals.eventAjaxCallback, function () {
    if (ui.ajax.classNames.indexOf(ui.photoslide.target) > -1) {
      ui.photoslide.Init();
    }
  });
})();
ui.sidebar = {
  target: 'ui-sidebar',
  targetBg: 'ui-sidebar-bg',
  nameOpened: 'ui-sidebar-opened',
  nameClose: 'ui-sidebar-close',
  nameContent: 'ui-sidebar-content',
  nameTargetPrefix: 'ui-sbid-',
  nameShowPrefix: 'ui-sidebar-',
  nameShowMenuPrefix: 'ui-sidebar-show-',
  nameAddContentPrefix: 'ui-sidebar-add-',
  nameLeftSuffix: 'l',
  nameRightSuffix: 'r',
  nameOpen: 'ui-open',
  nameOpenEase: 'ui-open-ease',
  stylesBg: 'ui-ease-slow ui-ease-layout',
  tagDataTarget: 'i',
  dataID: 'data-ui-sbid',
  dataImport: 'data-ui-import',
  eventMenuOpen: 'ui:sidebarOpen'
};
(function () {
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
          ui.trigger(document, ui.sidebar.eventMenuOpen + ' ' + ui.globals.eventDomChange);
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
  };
  ui.onload(ui.sidebar.Start);
  ui.on(window, 'resize', function () {
    if (window.innerWidth === getScrollPos) {
      return;
    }
    var panel = ui.find('.' + ui.sidebar.target + '.' + ui.sidebar.nameOpen);
    if (panel.length > 0) {
      ui.sidebar.close(panel);
    }
    getScrollPos = window.innerWidth;
  });
})();
ui.tooltip = {
  target: 'ui-tooltip',
  nameTooltipOpened: 'ui-tooltip-opened',
  nameActive: 'ui-tooltip-active',
  nameContent: 'ui-tooltip-content',
  nameOpen: 'ui-open',
  nameOpenEase: 'ui-open-ease',
  stylesTarget: 'ui-round ui-ease-tooltip',
  stylesArrow: '',
  scrollbarSize: 15,
  t: 't',
  b: 'b',
  r: 'r',
  l: 'l',
  tr: 'tr',
  tl: 'tl',
  br: 'br',
  bl: 'bl',
  dataTooltip: 'data-ui-tooltip',
  dataTitle: 'data-ui-title',
  dataPos: 'data-ui-pos',
  dataDesktop: 'data-ui-only="desktop"',
  dataMobile: 'data-ui-only="mobile"',
  eventClose: 'ui:tooltipClose',
  eventClosed: 'ui:tooltipClosed'
};
(function () {
  var removeTimer, removeTimer2x, pageTouchmoveTimer, tooltipOpenedTimer, touchControl, isScrolling;
  ui.tooltip.Close = function () {
    var that = ui.find('.' + ui.tooltip.target)[0];
    if (that === undefined) {
      return;
    }
    clearTimeout(removeTimer);
    removeTimer = setTimeout(function () {
      ui.removeClass(that, ui.tooltip.nameOpenEase);
      removeTimer2x = setTimeout(function () {
        ui.removeClass(that, ui.tooltip.nameOpen);
        var parent = that.parentNode;
        if (parent !== null) {
          parent.removeChild(that);
        }
      }, ui.globals.ease);
    }, ui.globals.ease);
  };
  function createFnc(source, title) {
    var win, winRect, html, sourceRect, arr, pos, posRecall, calc;
    win = ui.find('.' + ui.tooltip.target);
    sourceRect = source.getBoundingClientRect();
    clearTimeout(removeTimer);
    clearTimeout(removeTimer2x);
    if (win.length > 0) {
      ui.find('.' + ui.tooltip.nameContent, win[0])[0].innerHTML = title;
    } else {
      html = '<div class="' + ui.tooltip.target + ' ' + ui.tooltip.stylesTarget + '">' + '<div class="' + ui.tooltip.nameContent + '">' + title + '</div>' + '<span>' + '<i class="' + ui.tooltip.stylesArrow + '"></i>' + '</span>' + '</div>';
      ui.find('body')[0].insertAdjacentHTML('afterbegin', html);
      win = ui.find('.' + ui.tooltip.target);
    }
    ui.addClass(win, ui.tooltip.nameOpen);
    setTimeout(function () {
      winRect = win[0].getBoundingClientRect();
      arr = [ui.tooltip.t, ui.tooltip.b, ui.tooltip.r, ui.tooltip.l, ui.tooltip.tr, ui.tooltip.tl, ui.tooltip.br, ui.tooltip.bl];
      pos = source.getAttribute(ui.tooltip.dataTooltip);
      if (arr.indexOf(pos) < 0) {
        pos = ui.tooltip.t;
      }
      calc = [];
      calc.ver = 0;
      calc.hor = 0;
      calc.reCall = false;
      calc.Fnc = function () {
        if (pos === ui.tooltip.t || pos === ui.tooltip.b) {
          calc.hor = (sourceRect.width - winRect.width) / 2;
        }
        if (pos === ui.tooltip.t || pos === ui.tooltip.tr || pos === ui.tooltip.tl) {
          calc.ver = -sourceRect.height + (sourceRect.height - winRect.height) - ui.tooltip.scrollbarSize;
        } else if (pos === ui.tooltip.b || pos === ui.tooltip.br || pos === ui.tooltip.bl) {
          calc.ver = sourceRect.height + ui.tooltip.scrollbarSize;
        } else if (pos === ui.tooltip.r) {
          calc.ver = sourceRect.height / 2 - winRect.height / 2;
          calc.hor = sourceRect.width + ui.tooltip.scrollbarSize;
        } else if (pos === ui.tooltip.l) {
          calc.ver = sourceRect.height / 2 - winRect.height / 2;
          calc.hor = -sourceRect.width + (sourceRect.width - winRect.width) - ui.tooltip.scrollbarSize;
        }
        if (pos === ui.tooltip.tr || pos === ui.tooltip.br) {
          calc.hor = sourceRect.width / 2 - ui.tooltip.scrollbarSize;
        } else if (pos === ui.tooltip.tl || pos === ui.tooltip.bl) {
          calc.hor = -(sourceRect.width / 2) + (sourceRect.width - winRect.width) + ui.tooltip.scrollbarSize;
        }
      };
      calc.Fnc();
      posRecall = '';
      if (sourceRect.top - window.pageYOffset + calc.ver < -window.pageYOffset) {
        posRecall += ui.tooltip.b;
      } else if (sourceRect.top + window.pageYOffset + winRect.height + calc.ver > window.innerHeight + window.pageYOffset) {
        posRecall += ui.tooltip.t;
      }
      if (sourceRect.left + window.pageXOffset + calc.hor + winRect.width > window.innerWidth + window.pageXOffset) {
        posRecall += ui.tooltip.l;
      } else if (sourceRect.left - window.pageXOffset + calc.hor < 0) {
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
    var attr = 'title';
    if (ui.globals.svgElems.indexOf(that.tagName.toLowerCase()) !== -1) {
      attr = 'name';
    }
    title = that.getAttribute(attr);
    if (type === 'show' && title !== null && title !== '') {
      clearTimeout(tooltipOpenedTimer);
      ui.addClass(document, ui.tooltip.nameTooltipOpened);
      createFnc(that, title);
      that.setAttribute(ui.tooltip.dataTitle, title);
      that.removeAttribute(attr);
      ui.addClass(that, ui.tooltip.nameActive);
    } else {
      dataTitle = that.getAttribute(ui.tooltip.dataTitle);
      if (dataTitle !== null && dataTitle !== '') {
        if (type === 'close' || type === 'hide') {
          ui.tooltip.Close(that);
          ui.removeClass(that, ui.tooltip.nameActive);
          clearTimeout(tooltipOpenedTimer);
          tooltipOpenedTimer = setTimeout(function () {
            ui.removeClass(document, ui.tooltip.nameTooltipOpened);
          }, ui.globals.ease);
        }
        if (type === 'close') {
          that.removeAttribute(ui.tooltip.dataTitle);
          that.setAttribute(attr, dataTitle);
        }
      }
    }
  }
  ui.tooltip.Start = function () {
    ui.on(document, 'mouseenter mouseleave mousedown', '[' + ui.tooltip.dataTooltip + ']:not([' + ui.tooltip.dataMobile + '])', function (e) {
      if (ui.userAgents.desktop) {
        var type;
        if (e.type === 'mouseenter') {
          type = 'show';
        } else if (e.type === 'mousedown') {
          type = 'hide';
        } else {
          type = 'close';
          ui.trigger(document, ui.tooltip.eventClosed);
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
        if (!touchControl) {
          e.preventDefault();
        }
        clearTimeout(pageTouchmoveTimer);
        pageTouchmoveTimer = setTimeout(function () {
          tooltipFnc(that, 'show');
          ui.on(document, 'touchend.' + ui.tooltip.eventClose, function () {
            tooltipFnc(that, 'close');
            ui.off(document, 'touchend.' + ui.tooltip.eventClose);
            ui.trigger(document, ui.tooltip.eventClosed);
          });
        }, ui.globals.fast / 2);
      }
    });
    ui.on(document, 'click', '.' + ui.tooltip.target, function () {
      ui.tooltip.Close(this);
    });
  };
  ui.onload(ui.tooltip.Start);
})();
ui.weather = {
  target: 'ui-weather',
  nameGraphs: 'ui-graphs',
  nameNight: 'ui-night',
  nameClear: 'ui-clear',
  nameWday: 'ui-w-dayname',
  nameWdate: 'ui-w-date',
  nameWclock: 'ui-w-clock',
  nameAnimatePrefix: 'ui-',
  nameLoaded: 'ui-loaded',
  animateClear: 'clear',
  animateStars: 'stars',
  animateShootingStar: 'shooting-star',
  animateCloud: 'cloud',
  animateCloudHeavy: 'cloud-heavy',
  animateFog: 'fog',
  days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  graphPath: '../public/img/weather/',
  fileType: 'png',
  dataGraphs: 'data-ui-graphs',
  dataDay: 'data-ui-day'
};
(function () {
  var dateLoaded,
    clockLoaded,
    re = new RegExp('\\s+\\s'),
    rex = new RegExp('^\\s|\\s+$');
  ui.weather.Start = function () {
    var date, dateText, dateHtml, clockText, clockHtml, minute, hour, day, month, that, graphs, animations, sun, sunPos, sunrise, sunset;
    animations = [];
    ui.weather.Init = function () {
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
                  animations.push(ui.weather.animateStars);
                } else if (data[i] === ui.weather.animateStars) {
                  animations.push(ui.weather.animateClear);
                }
                if (data.length === 1 && (data[i] === ui.weather.animateCloud || data[i] === ui.weather.animateFog)) {
                  animations.push(ui.weather.animateClear);
                  animations.push(ui.weather.animateStars);
                }
                if (data[i] === ui.weather.animateCloudHeavy) {
                  animations.push(ui.weather.animateStars);
                }
                if (data.length === 1 && (data[i] === ui.weather.animateClear || data[i] === ui.weather.animateStars)) {
                  animations.push(ui.weather.animateShootingStar);
                }
                animations.push(data[i]);
              }
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
    ui.weather.Init();
    function dateFnc() {
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
      dateLoaded = dateText;
      hour = date.getHours().toString();
      if (hour.length === 1) {
        hour = '0' + hour;
      }
      minute = date.getMinutes().toString();
      if (minute.length === 1) {
        minute = '0' + minute;
      }
      clockHtml = '<span>' + hour + '</span><span>' + minute + '</span>';
      clockText = hour + ':' + minute;
      if (clockLoaded !== clockText) {
        ui.each('.' + ui.weather.nameWclock, function () {
          this.innerHTML = clockHtml;
        });
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
          }
          if (sunrise[1].length === 1) {
            sunrise[1] = '0' + sunrise[1];
          }
          sunset = sunPos[1].split(':');
          if (sunset.length !== 2) {
            return;
          }
          if (sunset[0].length === 1) {
            sunset[0] = '0' + sunset[0];
          }
          if (sunset[1].length === 1) {
            sunset[1] = '0' + sunset[1];
          }
          sun = ui.find('.' + ui.weather.nameClear, this)[0];
          that = ui.closest(this, '.' + ui.weather.target)[0];
          if (hour === sunrise[0] && minute < sunrise[1] || hour < sunrise[0] || hour === sunset[0] && minute > sunset[1] || hour > sunset[0]) {
            ui.addClass(that, ui.weather.nameNight);
            if (sun !== undefined) {
              sun.style.removeProperty('left');
            }
          } else {
            ui.removeClass(that, ui.weather.nameNight);
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
  ui.onload(ui.weather.Start);
  ui.on(document, ui.globals.eventAjaxCallback, function () {
    if (ui.ajax.classNames.indexOf(ui.weather.target) > -1) {
      ui.weather.Init();
    }
  });
})();
ui.donutChart = {
  target: 'ui-donut-chart',
  targetBg: 'ui-donut-chart-bg',
  nameLoaded: 'ui-loaded',
  nameSelected: 'ui-selected',
  tagMsg: 'strong',
  dataPercent: 'data-ui-percent',
  dataTitle: 'data-ui-title',
  dataMsg: 'data-ui-msg'
};
ui.donutChart.Start = function () {
  ui.donutChart.Init = function () {
    var chart = ui.find('.' + ui.donutChart.target);
    if (chart.length > 0) {
      var arrPercent = [];
      var arrAngle = [];
      Array.prototype.forEach.call(chart, function (el) {
        var circles = ui.find('circle:not(.' + ui.donutChart.targetBg + ')', el);
        if (circles.length > 1) {
          ui.addClass(el, 'multiple');
        }
        Array.prototype.forEach.call(circles, function (item, j) {
          var percent = item.getAttribute(ui.donutChart.dataPercent);
          arrPercent.push(percent);
          var dasharray = Math.round(percent * 4.4);
          if (dasharray < 0) {
            dasharray = 0;
          }
          item.setAttribute('stroke-dasharray', dasharray + ', 440');
          if (j > 0) {
            var angle = Math.floor(arrAngle[j - 1] + arrPercent[j - 1] * 3.6);
            arrAngle.push(angle);
            item.setAttribute('transform', 'rotate(' + angle + ' 80 80)');
          } else {
            arrAngle.push(0);
          }
          if (ui.userAgents.ie) {
            el.style.height = el.offsetWidth + 'px';
          }
          ui.addClass(item, ui.donutChart.nameLoaded);
        });
        arrPercent = [];
        arrAngle = [];
      });
    }
  };
  ui.donutChart.Init();
  ui.on(document, 'mouseenter mouseleave touchend', '.' + ui.donutChart.target + ' circle[' + ui.donutChart.dataTitle + ']', function (e) {
    var _this8 = this;
    var chart = ui.closest(this, '.' + ui.donutChart.target)[0];
    var msg = ui.find(ui.donutChart.tagMsg, chart)[0];
    var circle = ui.find('circle', chart);
    setTimeout(function () {
      ui.removeClass(circle, ui.donutChart.nameSelected);
    }, 0);
    if (e.type === 'mouseleave') {
      msg.innerHTML = msg.getAttribute(ui.donutChart.dataMsg);
    } else {
      if (msg === undefined) {
        chart.insertAdjacentHTML('beforeEnd', '<' + ui.donutChart.tagMsg + '></' + ui.donutChart.tagMsg + '>');
        msg = ui.find(ui.donutChart.tagMsg, chart)[0];
      }
      var msgTitle = msg.getAttribute(ui.donutChart.dataMsg);
      if (msgTitle === null) {
        msg.setAttribute(ui.donutChart.dataMsg, msg.innerHTML);
      }
      var title = this.getAttribute(ui.donutChart.dataTitle);
      setTimeout(function () {
        if (title !== null && title !== '') {
          msg.innerHTML = title;
        }
        ui.addClass(_this8, ui.donutChart.nameSelected);
      }, 0);
    }
  });
};
ui.onload(ui.donutChart.Start);
ui.on(document, ui.globals.eventDomChange, ui.donutChart.Start);
ui.on(document, ui.globals.eventAjaxCallback, function () {
  if (ui.ajax.classNames.indexOf(ui.donutChart.target) > -1) {
    ui.donutChart.Init();
  }
});
ui.lineChart = {
  target: 'ui-line-chart-holder',
  nameLines: 'ui-line-chart',
  nameGridRoot: 'ui-line-root-grid',
  nameGridX: 'ui-line-x-grid',
  nameGridY: 'ui-line-y-grid',
  nameInfo: 'ui-line-chart-info',
  nameTypePrefix: 'ui-',
  nameLoaded: 'ui-loaded',
  nameNotLoaded: 'ui-no-loaded',
  nameResized: 'ui-resized',
  idGradient: 'ui-gradient',
  tagLines: 'li',
  tagInfoColor: 'span',
  tagInfoStat: 'b',
  colors: ['hsl(30, 100%, 63%)', 'hsl(347, 100%, 69%)', 'hsl(260, 100%, 70%)', 'hsl(180, 48%, 52%)', 'hsl(42, 100%, 67%)', 'hsl(13, 26%, 41%)', 'hsl(65, 49%, 54%)', 'hsl(0, 0%, 42%)', 'hsl(225, 43%, 57%)'],
  includeZero: true,
  showGrid: true,
  showGridText: true,
  showInfo: true,
  showInfoStats: true,
  noRepeatadCircles: false,
  showGridTextSpace: 7,
  showInfoSpace: 7,
  rows: 5,
  rowsHeight: 50,
  curveSize: 1,
  gridStroke: 1,
  gridStrokeArray: 4,
  lineStroke: 2,
  circleSize: 4,
  top: 6,
  right: 12,
  bottom: 15,
  left: 40,
  dotted: 'dotted',
  dashed: 'dashed',
  curved: 'curved',
  filled: 'filled',
  dataX: 'data-ui-x',
  dataY: 'data-ui-y',
  dataPrefix: 'data-ui-prefix',
  dataSuffix: 'data-ui-suffix',
  dataSize: 'data-ui-size',
  dataLink: 'data-ui-url',
  dataType: 'data-ui-type',
  dataName: 'data-ui-name',
  dataStep: 'data-ui-step',
  dataNoCircles: 'data-ui-no-circles'
};
ui.lineChart.Start = function () {
  var charts, lines, data, x, y, yMax, yMin, link, size, rows, rowsHeight, col, posX, posY, html, type, pathStart, paths, circles, total, name;
  ui.lineChart.Init = function (method, resizer) {
    if (method === ui.lineChart.nameLoaded) {
      charts = ui.find('.' + ui.lineChart.target + '.' + ui.lineChart.nameLoaded);
    } else if (method === ui.globals.eventDomChange) {
      charts = ui.find('.' + ui.lineChart.target + ':not(.' + ui.lineChart.nameLoaded + '):not(.' + ui.lineChart.nameResized + ')');
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
      if (resizer !== undefined && resizer) {
        ui.addClass(this, ui.lineChart.nameLoaded + ' ' + ui.lineChart.nameResized);
      } else {
        ui.addClass(this, ui.lineChart.nameLoaded);
      }
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
      x = this.getAttribute(ui.lineChart.dataX);
      if (x !== null && x !== '') {
        data.x = x.split(',');
      } else {
        return;
      }
      x = data.x;
      yMax = [];
      Array.prototype.forEach.call(lines, function (el, i) {
        data[i] = [];
        data[i].y = [];
        data[i].links = [];
        Array.prototype.forEach.call(ui.find(ui.lineChart.tagLines, el), function (item) {
          y = item.getAttribute(ui.lineChart.dataY);
          data[i].y.push(y);
          link = item.getAttribute(ui.lineChart.dataLink);
          if (link !== null && link !== '') {
            data[i].links.push(link);
          } else data[i].links.push('');
        });
        yMax.push(data[i].y);
      });
      if (ui.lineChart.includeZero) yMax.push(0);
      yMax = yMax.toString().split(',');
      yMax = yMax.filter(function (item, pos) {
        return item !== '' && yMax.indexOf(item) === pos;
      });
      yMax = yMax.sort(function (a, b) {
        return b - a;
      });
      yMin = yMax[yMax.length - 1];
      if (yMin.indexOf('.') === 0) yMin = Math.floor(yMin);
      yMin = parseInt(yMin);
      if (parseInt(yMax[1]) > 0) {
        yMax = Math.ceil((parseInt(yMax[0]) - yMin) / rows) * rows + yMin;
        yMax++;
      } else yMax = Math.ceil((parseInt(yMax[0]) - yMin) / rows) * rows + yMin;
      data.svgHeight = data.height;
      if (ui.lineChart.showInfo) data.svgHeight += ui.lineChart.showInfoSpace;
      if (ui.lineChart.showGridText) data.svgHeight += ui.lineChart.showGridTextSpace;
      html = '<svg style="width: ' + data.width + 'px; height: ' + data.svgHeight + 'px;">';
      data.step = this.getAttribute(ui.lineChart.dataStep);
      if (data.step !== null && data.step !== '' && data.step !== '0') {
        if (isNaN(data.step)) {
          data.step = false;
        } else {
          data.stepArr = [];
          for (var m = 0; m < Math.ceil(x.length / data.step); m++) {
            data.stepArr.push(m * data.step);
          }
        }
      } else {
        data.step = false;
      }
      col = data.width - (ui.lineChart.right + ui.lineChart.left);
      var rowLength = x.length - 1;
      if (rowLength === 0) rowLength = 1;
      col = col / rowLength;
      html += '<g class="' + ui.lineChart.nameGridX + '">';
      for (var k = 0; k < x.length; k++) {
        posX = k * col + ui.lineChart.left;
        if (ui.lineChart.showGridText) {
          if (data.step) {
            if (data.stepArr.indexOf(k) > -1) {
              html += '<text ' + 'x="' + posX + '" ' + 'y="' + (data.height - ui.lineChart.bottom + 20) + '">' + x[k] + '</text>';
            }
          } else {
            html += '<text ' + 'x="' + posX + '" ' + 'y="' + (data.height - ui.lineChart.bottom + 20) + '">' + x[k] + '</text>';
          }
        }
        if (ui.lineChart.showGrid) {
          html += '<line ' + 'x1="' + posX + '" ' + 'x2="' + posX + '" ' + 'y1="' + ui.lineChart.top + '" ';
          if (k === 0) {
            html += 'y2="' + Math.ceil(data.height - (ui.lineChart.bottom + ui.lineChart.gridStroke / 2)) + '" ' + 'class="' + ui.lineChart.nameGridRoot + '" ' + 'stroke-width="' + ui.lineChart.gridStroke + '"';
          } else {
            html += 'y2="' + (data.height - ui.lineChart.bottom) + '" ' + 'stroke-dasharray="' + ui.lineChart.gridStrokeArray + '"';
          }
          html += '></line>';
        }
      }
      html += '</g>' + '<g class="' + ui.lineChart.nameGridY + '">';
      var prefix = this.getAttribute(ui.lineChart.dataPrefix);
      if (prefix === null || size === '') prefix = '';
      var suffix = this.getAttribute(ui.lineChart.dataSuffix);
      if (suffix === null || size === '') suffix = '';
      for (var l = 0; l <= rows; l++) {
        posY = parseInt(l * (data.height - (ui.lineChart.top + ui.lineChart.bottom)) / rows + ui.lineChart.top);
        if (ui.lineChart.showGridText) {
          var val = parseInt((yMax - yMin) / rows * (rows - l) + yMin);
          if (val > 50) val = parseInt(val / 10) * 10;
          if (val < 0) val--;
          html += '<text ' + 'x="' + (ui.lineChart.left - 10) + '" ' + 'y="' + (posY + 4) + '">' + prefix + val + suffix + '</text>';
        }
        if (ui.lineChart.showGrid) {
          html += '<line ' + 'x2="' + (data.width - ui.lineChart.right + 1) + '" ' + 'y1="' + posY + '" ' + 'y2="' + posY + '" ';
          if (l >= rows) {
            html += 'x1="' + Math.ceil(ui.lineChart.left - ui.lineChart.gridStroke / 2) + '" ' + 'class="' + ui.lineChart.nameGridRoot + '" ' + 'stroke-width="' + ui.lineChart.gridStroke + '"';
          } else {
            html += 'x1="' + Math.floor(ui.lineChart.left + ui.lineChart.gridStroke) + '" ' + 'stroke-dasharray="' + ui.lineChart.gridStrokeArray + '"';
          }
          html += '></line>';
        }
      }
      html += '</g>';
      circles = '';
      pathStart = [];
      html += '<g>';
      Array.prototype.forEach.call(lines, function (el, j) {
        paths = '';
        y = data[j].y;
        if (j > ui.lineChart.colors.length - 1) {
          data.color.push(ui.lineChart.colors[j - ui.lineChart.colors.length]);
        } else {
          data.color.push(ui.lineChart.colors[j]);
        }
        var noCircles = el.getAttribute(ui.lineChart.dataNoCircles);
        if (noCircles === null || noCircles === '') noCircles = false;else noCircles = true;
        type = el.getAttribute(ui.lineChart.dataType);
        if (type === null || type === undefined) {
          type = '';
        }
        var createCircles = function createCircles(n) {
          if (noCircles) return;
          circles += '<circle ' + 'cx="' + posX + '" ' + 'cy="' + posY + '" ' + 'r="' + ui.lineChart.circleSize + '" ' + 'fill="' + data.color[j] + '" ' + 'stroke="' + data.color[j] + '" ' + 'stroke-width="0" ';
          if (data[j].links[n] !== '') {
            circles += 'onclick="location.href = \'' + data[j].links[n] + '\';"';
          }
          if (ui.tooltip === undefined) {
            circles += '/>' + '<title>' + (y[n] ? y[n] : 0) + '</title>';
          } else {
            circles += ui.tooltip.dataTooltip + ' ' + 'name="' + (y[n] ? y[n] : 0) + '" ' + '/>';
          }
        };
        if (y.length === 0) {
          posX = col + ui.lineChart.left;
          var range = yMax - yMin;
          if (range === 0) range = 1;
          posY = data.height - (data.height + (data.height - (ui.lineChart.top + ui.lineChart.bottom)) * yMax / range - ui.lineChart.top);
          if (posY === ui.lineChart.top) posY = data.svgHeight - ui.lineChart.bottom - 14;else posY += ui.lineChart.top;
          pathStart.x = posX;
          pathStart.y = posY;
          createCircles(0);
        }
        for (var n = 0; n < y.length; n++) {
          posX = n * col + ui.lineChart.left;
          var _range = yMax - yMin;
          if (_range === 0) _range = 1;
          posY = data.height - (data.height + (data.height - (ui.lineChart.top + ui.lineChart.bottom)) * (y[n] - yMax) / _range - ui.lineChart.top);
          if (posY === ui.lineChart.top) posY = data.svgHeight - ui.lineChart.bottom - 14;else posY += ui.lineChart.top;
          if (n === 0) {
            pathStart.x = posX;
            pathStart.y = posY;
          }
          if (type.indexOf(ui.lineChart.curved) > -1) {
            data.percent = parseInt(ui.lineChart.curveSize * (n * col) / 100);
            if (n === 1) {
              paths += ' C ' + (col + data.percent) + ' ' + (posY - data.percent) + ',' + ' ' + (col + data.percent) + ' ' + posY + ',' + ' ' + posX + ' ' + posY;
            } else if (n > 0) {
              paths += ' S ' + (n * col - data.percent) + ' ' + posY + ',' + ' ' + posX + ' ' + posY;
            }
          } else {
            if (n > 0) {
              paths += ' L ' + posX + ' ' + posY;
            }
          }
          if (ui.lineChart.noRepeatadCircles) {
            if (n === 0 || n === y.length - 1) createCircles(n);
            if (y[n - 1] !== undefined && y[n - 1] !== y[n]) createCircles(n);
            if (y[n + 1] !== undefined && y[n + 1] !== y[n]) createCircles(n);
          } else createCircles(n);
        }
        if (type.indexOf(ui.lineChart.dashed) > -1) {
          html += '<path class="' + ui.lineChart.nameTypePrefix + ui.lineChart.dashed + '" ';
        } else if (type.indexOf(ui.lineChart.dotted) > -1) {
          html += '<path class="' + ui.lineChart.nameTypePrefix + ui.lineChart.dotted + '" ';
        } else html += '<path ';
        html += 'd="M ' + pathStart.x + ' ' + pathStart.y + paths + '" ' + 'stroke="' + data.color[j] + '" ' + 'stroke-width="' + ui.lineChart.lineStroke + '" ' + '/>';
        if (type.indexOf(ui.lineChart.filled) > -1) {
          data.id = new Date().getTime();
          data.id = data.id.toString();
          data.id = data.id.substring(data.id.length - 4, data.id.length) + j;
          html += '<linearGradient id="' + ui.lineChart.idGradient + data.id + '" x1="0" y1="0" x2="0" y2="100%">' + '<stop offset="0" stop-color="' + data.color[j] + '"></stop>' + '<stop offset="100%" stop-color="' + data.color[j] + '" stop-opacity="0.0"></stop>' + '</linearGradient>' + '<path d="M ' + (pathStart.x + ui.lineChart.gridStroke / 2) + ' ' + pathStart.y + paths + ' V ' + (data.height - ui.lineChart.bottom - ui.lineChart.gridStroke / 2) + ' H ' + (ui.lineChart.gridStroke / 2 + ui.lineChart.left) + ' Z" ' + 'stroke="0" ' + 'fill="url(#' + ui.lineChart.idGradient + data.id + ')" ' + 'stroke-width="' + ui.lineChart.lineStroke + '" ' + 'class="' + ui.lineChart.nameTypePrefix + ui.lineChart.filled + '" ' + '/>';
        }
        name = el.getAttribute(ui.lineChart.dataName);
        if (name !== null && name !== '') {
          data.name.push(name);
        } else data.name.push('');
      });
      html += circles + '</g></svg>';
      if (data.width === 0) {
        ui.removeClass(this, ui.lineChart.nameLoaded + ' ' + ui.lineChart.nameResized);
      }
      if (ui.lineChart.showInfo) {
        html += '<ul class="' + ui.lineChart.nameInfo + '">';
        for (var p = 0; p < lines.length; p++) {
          total = 0;
          for (var n = 0; n < data[p].y.length; n++) {
            total += parseInt(data[p].y[n]);
          }
          if (data.name[p] !== '') {
            html += '<li>' + '<' + ui.lineChart.tagInfoColor + ' style="background: ' + data.color[p] + '">' + '</' + ui.lineChart.tagInfoColor + '>' + data.name[p];
            if (ui.lineChart.showInfoStats) {
              html += ': <' + ui.lineChart.tagInfoStat + '>' + total + '</' + ui.lineChart.tagInfoStat + '>';
            }
            html += '</li>';
          }
        }
        html += '</ul>';
      }
      var svg = ui.find('svg', this)[0];
      if (svg) this.removeChild(svg);
      var info = ui.find('.' + ui.lineChart.nameInfo, this)[0];
      if (info) this.removeChild(info);
      this.insertAdjacentHTML('beforeEnd', html);
      data = [];
      html = '';
    });
  };
  ui.lineChart.Init(ui.lineChart.nameNotLoaded);
};
ui.onload(ui.lineChart.Start);
ui.on(window, 'resize', function () {
  ui.lineChart.Init(ui.lineChart.nameLoaded, true);
});
ui.on(document, ui.globals.eventDomChange, function () {
  ui.lineChart.Init(ui.globals.eventDomChange);
});
ui.on(document, ui.globals.eventAjaxCallback, function () {
  if (ui.ajax.classNames.indexOf(ui.lineChart.target) > -1) {
    ui.lineChart.Init(ui.lineChart.nameNotLoaded);
  }
});
ui.pieChart = {
  target: 'ui-pie-chart',
  namePieLeft: 'ui-pie-l',
  namePieRight: 'ui-pie-r',
  nameOpen: 'ui-open',
  nameOpenEase: 'ui-open-ease',
  nameNoEffects: 'ui-no-effects',
  tagDatasHolder: 'ul',
  tagData: 'li',
  tagPiesHolder: 'span',
  tagPie: 'b',
  tagMsgHolder: 'div',
  tagMsg: 'span',
  tagTitle: 'i',
  dataPercent: 'data-ui-percent',
  dataFill: 'data-ui-fill',
  dataTitle: 'data-ui-title',
  dataCustom: 'data-ui-custom'
};
(function () {
  var chartsResizer;
  chartsResizer = function chartsResizer() {
    var chart, elems;
    chart = ui.find('.' + ui.pieChart.target);
    if (chart.length < 1) {
      return;
    }
    ui.each(chart, function () {
      elems = ui.find(ui.pieChart.tagDatasHolder, this)[0];
      elems.style.height = elems.offsetWidth + 'px';
    });
  };
  ui.pieChart.Start = function () {
    ui.pieChart.Init = function () {
      var chart, elems, deg, textDeg, loadFnc, arr, fill, percent, html, title, customTitle, msgHolder;
      chart = ui.find('.' + ui.pieChart.target);
      if (chart.length < 1) {
        return;
      }
      arr = [];
      loadFnc = function loadFnc(parent, that, i) {
        var prevPercents = ui.find(ui.pieChart.tagPiesHolder, that);
        if (prevPercents.length > 0) {
          for (var _i = 0; _i < prevPercents.length; _i++) {
            that.removeChild(prevPercents[_i]);
          }
        }
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
        title = that.getAttribute(ui.pieChart.dataTitle);
        html = '<' + ui.pieChart.tagMsg + ' style="-ms-transform: rotate(' + textDeg + 'deg) translateY(-50%); transform: rotate(' + textDeg + 'deg) translateY(-50%);">' + '<' + ui.pieChart.tagTitle + ' style="-ms-transform: rotate(' + -textDeg + 'deg); transform: rotate(' + -textDeg + 'deg);"';
        if (title !== null && title !== '') {
          html += ' title="' + title + '"';
          if (ui.tooltip !== undefined) {
            html += ' ' + ui.tooltip.dataTooltip;
          }
        }
        customTitle = that.getAttribute(ui.pieChart.dataCustom);
        if (customTitle !== null && customTitle !== '') {
          html += '>' + customTitle;
        } else {
          html += '>' + percent + '%';
        }
        html += '</' + ui.pieChart.tagTitle + '>' + '</' + ui.pieChart.tagMsg + '>';
        msgHolder = ui.find(ui.pieChart.tagMsgHolder, parent)[0];
        if (msgHolder === undefined) {
          parent.insertAdjacentHTML('beforeEnd', '<' + ui.pieChart.tagMsgHolder + '></' + ui.pieChart.tagMsgHolder + '>');
          msgHolder = ui.find(ui.pieChart.tagMsgHolder, parent)[0];
        }
        msgHolder.insertAdjacentHTML('beforeEnd', html);
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
        var prevMsg = ui.find(ui.pieChart.tagMsgHolder, that)[0];
        if (prevMsg !== undefined) {
          var msgs = ui.find(ui.pieChart.tagMsg, prevMsg);
          for (var j = 0; j < msgs.length; j++) {
            prevMsg.removeChild(msgs[j]);
          }
        }
        ui.each(elems, function (i) {
          loadFnc(that, this, i);
        });
        if (ui.hasClass(document, ui.pieChart.nameNoEffects)) {
          ui.addClass(that, ui.pieChart.nameOpen + ' ' + ui.pieChart.nameOpenEase);
        } else {
          ui.addClass(that, ui.pieChart.nameOpen);
          setTimeout(function () {
            ui.addClass(that, ui.pieChart.nameOpenEase);
          }, ui.globals.slow5x);
        }
      });
    };
    ui.pieChart.Init();
    chartsResizer();
  };
  ui.onload(ui.pieChart.Start);
  ui.on(window, 'resize', chartsResizer);
  ui.on(document, ui.globals.eventDomChange, chartsResizer);
  ui.on(document, ui.globals.eventAjaxCallback, function () {
    if (ui.ajax.classNames.indexOf(ui.pieChart.target) > -1) {
      ui.pieChart.Init();
    }
  });
})();
ui.map = {
  target: 'ui-map',
  nameActive: 'ui-active',
  tagTarget: 'path',
  opacityMax: '0.95',
  opacityMin: '0.45',
  dataSize: 'data-ui-size',
  dataHref: 'data-ui-href'
};
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
  });
  ui.on(ui.map.tagTarget, 'click', function () {
    var href = this.getAttribute(ui.map.dataHref);
    if (href !== null) {
      window.location = href;
    }
  });
};
ui.onload(ui.map.Start);
