var baseColor = 'hsl(331, 71%, 58%)';
var subColor = 'hsl(189, 95%, 40%)';
ui.topButton.stylesTarget = 'ui-circle ui-ease-layout';
ui.lineChart.rowsHeight = 80;
ui.lineChart.top = 10;
ui.lineChart.showGrid = false;
ui.lineChart.gridStroke = 0;
ui.lineChart.colors = [baseColor, subColor];
(function () {
  var setCookie = function setCookie(name, value) {
    var days = 365;
    var date = new Date();
    date.setTime(date.getTime() + days * (24 * 60 * 60 * 1000));
    document.cookie = name + '=' + value + ';' + "expires=" + date.toUTCString() + ';domain=' + window.location.host + ';path=/';
  };
  var headerTime = function headerTime() {
    var headerTime = ui.find('.business-header-time')[0];
    if (headerTime !== undefined) {
      headerTime.innerHTML = '<b>Thu,</b> <span class="ui-font-light">March 10</span> <b>13:15</b>';
    }
  };
  var leftPanelMenu = function leftPanelMenu() {
    var leftPanelHolder = '.ui-col-business-panel-l';
    var leftPanel = '.business-panel-l';
    var leftPanelToggleBtn = '.business-panel-l-toggle';
    var leftPanelMinTabs = '.business-panel-l-min .ui-tab';
    var leftPanelContents = '.business-panel-l-contents > .ui-tab-content';
    var nameShowMenu = 'business-show-menu';
    var nameToggleMenu = 'business-toggle-menu';
    var nameBtnVisible = 'ui-btn-visible';
    var nameIcon = 'ui-icon';
    var nameMirrorIcon = 'ui-icon-mirror-h';
    var cookieName = 'leftPanelToggle';
    var eventCloseLeftPanel = 'closeLeftPanel';
    var getScrollPos = 0;
    var lastOpenedTab = 0;
    var leftPanelToggleStatus = 'show';
    var state = decodeURIComponent(document.cookie).split('; ');
    for (var i = 0; i < state.length; i++) {
      var cookies = state[i].split('=');
      var cookie = cookies[0];
      cookie = cookie.replace(/^\s+|\s+$/g, '');
      if (cookie === cookieName) {
        leftPanelToggleStatus = cookies[1];
      }
    }
    var openLastOpenedTab = function openLastOpenedTab() {
      ui.addClass(ui.find(leftPanelMinTabs)[lastOpenedTab], ui.tab.nameActive + ' ' + nameBtnVisible);
      ui.addClass(ui.find(leftPanelContents)[lastOpenedTab], ui.tab.nameOpen + ' ' + ui.tab.nameOpenEase);
    };
    var clearLastOpenedTab = function clearLastOpenedTab() {
      ui.removeClass(leftPanelMinTabs, ui.tab.nameActive + ' ' + nameBtnVisible);
      ui.removeClass(leftPanelContents, ui.tab.nameOpen + ' ' + ui.tab.nameOpenEase);
    };
    var resizer = function resizer() {
      if (window.innerWidth < ui.globals.xl) {
        clearLastOpenedTab();
      }
      if (window.innerWidth < ui.globals.xl && window.innerWidth > ui.globals.md) {
        ui.addClass(leftPanelMinTabs, ui.tab.nameToggle);
      } else {
        ui.removeClass(leftPanelMinTabs, ui.tab.nameToggle);
        if (window.innerWidth >= ui.globals.xl) {
          if (leftPanelToggleStatus === 'show') {
            openLastOpenedTab();
          } else {
            clearLastOpenedTab();
            if (!ui.hasClass(leftPanelHolder, nameToggleMenu)) {
              ui.addClass(leftPanelHolder, nameToggleMenu);
              ui.addClass(leftPanelToggleBtn + ' .' + nameIcon, nameMirrorIcon);
            }
          }
        } else {
          openLastOpenedTab();
        }
      }
      ui.off(document, 'mouseup.' + eventCloseLeftPanel);
    };
    resizer();
    ui.on(window, 'resize', function () {
      if (window.innerWidth === getScrollPos) {
        return;
      }
      resizer();
      ui.removeClass(leftPanel, nameShowMenu);
      getScrollPos = window.innerWidth;
    });
    ui.on(document, 'click', leftPanelMinTabs, function () {
      lastOpenedTab = Array.prototype.slice.call(ui.find(leftPanelMinTabs)).indexOf(this);
      if (window.innerWidth < ui.globals.xl && window.innerWidth > ui.globals.md) {
        setTimeout(function () {
          ui.addClass(leftPanel, nameShowMenu);
        }, ui.globals.ease);
      }
      if (window.innerWidth >= ui.globals.xl) {
        setTimeout(function () {
          ui.removeClass(leftPanelHolder, nameToggleMenu);
        }, ui.globals.ease);
        if (leftPanelToggleStatus === 'hide') {
          ui.on(document, 'mouseup.' + eventCloseLeftPanel, function (e) {
            if (e.button !== 2) {
              if (ui.closest(e.target, leftPanelToggleBtn).length === 1) {
                ui.off(document, 'mouseup.' + eventCloseLeftPanel);
              } else if (ui.closest(e.target, leftPanelHolder).length === 1) {
                return;
              }
              clearLastOpenedTab();
              ui.addClass(leftPanelHolder, nameToggleMenu);
              ui.addClass(leftPanelToggleBtn + ' .' + nameIcon, nameMirrorIcon);
              ui.off(document, 'mouseup.' + eventCloseLeftPanel);
            }
          });
        } else {
          setTimeout(function () {
            ui.removeClass(leftPanelToggleBtn + ' .' + nameIcon, nameMirrorIcon);
          }, ui.globals.ease);
        }
      }
    });
    ui.on(document, ui.tab.eventToggleTabsClosed, function () {
      setTimeout(function () {
        ui.removeClass(leftPanel, nameShowMenu);
      }, ui.globals.ease);
    });
    ui.on(document, 'click', leftPanelToggleBtn, function () {
      setTimeout(function () {
        clearLastOpenedTab();
        if (ui.hasClass(leftPanelHolder, nameToggleMenu)) {
          ui.removeClass(leftPanelToggleBtn + ' .' + nameIcon, nameMirrorIcon);
          leftPanelToggleStatus = 'show';
          setCookie(cookieName, 'show');
          openLastOpenedTab();
        } else {
          ui.addClass(leftPanelToggleBtn + ' .' + nameIcon, nameMirrorIcon);
          leftPanelToggleStatus = 'hide';
          setCookie(cookieName, 'hide');
        }
        ui.toggleClass(leftPanelHolder, nameToggleMenu);
        if (ui.lineChart !== undefined) {
          ui.lineChart.Init(ui.lineChart.nameLoaded, true);
        }
        ui.trigger(document, ui.globals.eventDomChange);
      }, ui.globals.ease);
    });
  };
  ui.onload(function () {
    headerTime();
    leftPanelMenu();
  });
})();
