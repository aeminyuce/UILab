(function () {
  var testStorage;

  function dashboardMenuToggler(onload) {
    var menu = ui.find('.dashboard-menu')[0];
    var menuInner = ui.find('.dashboard-menu > div')[0];

    var toggleClasses = function toggleClasses() {
      ui.toggleClass(menu, 'ui-hidden ui-visible-lg');
      ui.toggleClass('header', 'dashboard-menu-opened');
      ui.toggleClass('.ui-sidebar-show-l', 'ui-hidden-lg');
      ui.toggleClass('.dashboard-menu-show', 'ui-hidden');
    };

    var state;

    if (ui.hasClass(menu, 'ui-hidden')) {
      state = 'opened';
      toggleClasses();
      setTimeout(function () {
        menu.style.width = '250px';
        menuInner.style.transform = 'translateX(0)';
        setTimeout(function () {
          menu.style.removeProperty('width');
          menu.style.removeProperty('transform');
        }, 0);
      }, 0);
    } else {
      state = 'closed';
      menu.style.width = '0';
      menuInner.style.transform = 'translateX(-100%)';

      if (onload) {
        setTimeout(toggleClasses, ui.globals.slow);
      } else {
        toggleClasses();
      }
    }

    setTimeout(function () {
      ui.trigger(document, ui.globals.eventDomChange);
    }, ui.globals.slow);

    if (testStorage && sessionStorage !== undefined) {
      sessionStorage.setItem('dashboard-left-menu', state);
    }
  }

  ui.on(document, 'click', '.dashboard-menu-show,.dashboard-menu-hide', dashboardMenuToggler);
  ui.onload(function () {
    testStorage = true;

    try {
      sessionStorage.setItem('dashboard-left-menu-test', 0);
    } catch (e) {
      testStorage = false;
    }

    if (testStorage && sessionStorage !== undefined) {
      var state = sessionStorage.getItem('dashboard-left-menu');

      if (state !== null && state === 'closed') {
        dashboardMenuToggler(true);
      }
    }
  });
})();
