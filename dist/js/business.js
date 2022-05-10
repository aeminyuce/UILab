ui.topButton.stylesTarget = 'ui-circle ui-ease-layout';

(function () {
  var setCookie = function setCookie(name, value) {
    var days = 365;
    var date = new Date();
    date.setTime(date.getTime() + days * (24 * 60 * 60 * 1000));
    document.cookie = name + '=' + value + ';' + "expires=" + date.toUTCString();
  };

  var headerTime = function headerTime() {
    var headerTime = ui.find('.header-time')[0];

    if (headerTime !== undefined) {
      headerTime.innerHTML = '<b>Per,</b> <span class="ui-font-light">10 Mart</span> <b>13:15</b>';
    }
  };

  var leftPanelMenu = function leftPanelMenu() {
    var leftPanelHolder = ui.find('.ui-col-panel-l');
    var leftPanel = ui.find('.panel-l');
    var leftPanelToggleIconLeft = 'angle-left';
    var leftPanelToggleIconRight = 'angle-right';
    var leftPanelToggleBtn = ui.find('.panel-l-toggle')[0];
    var leftPanelToggleIcon = ui.find('.panel-l-toggle .ui-icon')[0];
    var leftPanelMinTabs = ui.find('.panel-l-min .ui-tab');
    var leftPanelContents = ui.find('.panel-l-contents > .ui-tab-content');
    var nameShowMenu = 'show-menu';
    var nameToggleMenu = 'toggle-menu';
    var nameBtnVisible = 'ui-btn-visible';
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
      ui.addClass(leftPanelMinTabs[lastOpenedTab], ui.tab.nameActive + ' ' + nameBtnVisible);
      ui.addClass(leftPanelContents[lastOpenedTab], ui.tab.nameOpen + ' ' + ui.tab.nameOpenEase);
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
              leftPanelToggleIcon.innerHTML = '<use href="' + ui.globals.iconSrc + '#' + leftPanelToggleIconRight + '"></use>';
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
      lastOpenedTab = Array.prototype.slice.call(leftPanelMinTabs).indexOf(this);

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
              } else if (ui.closest(e.target, leftPanelHolder[0]).length === 1) {
                return;
              }

              clearLastOpenedTab();
              ui.addClass(leftPanelHolder, nameToggleMenu);
              leftPanelToggleIcon.innerHTML = '<use href="' + ui.globals.iconSrc + '#' + leftPanelToggleIconRight + '"></use>';
              ui.off(document, 'mouseup.' + eventCloseLeftPanel);
            }
          });
        } else {
          setTimeout(function () {
            leftPanelToggleIcon.innerHTML = '<use href="' + ui.globals.iconSrc + '#' + leftPanelToggleIconLeft + '"></use>';
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
      var iconName = '';
      setTimeout(function () {
        clearLastOpenedTab();

        if (ui.hasClass(leftPanelHolder, nameToggleMenu)) {
          iconName = leftPanelToggleIconLeft;
          leftPanelToggleStatus = 'show';
          setCookie(cookieName, 'show');
          openLastOpenedTab();
        } else {
          iconName = leftPanelToggleIconRight;
          leftPanelToggleStatus = 'hide';
          setCookie(cookieName, 'hide');
        }

        ui.toggleClass(leftPanelHolder, nameToggleMenu);
        leftPanelToggleIcon.innerHTML = '<use href="' + ui.globals.iconSrc + '#' + iconName + '"></use>';
        ui.lineChart.Init(ui.lineChart.nameLoaded, true);
      }, ui.globals.ease);
    });
  };

  ui.onload(function () {
    headerTime();
    leftPanelMenu();
  });
})();
