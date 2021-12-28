/* dashboard */

(() => {

    // toggle menu
    var testStorage;

    function dashboardMenuToggler(onload) {

        var menu, menuInner, toggleClasses, state;

        menu = ui.find('.dashboard-menu')[0];
        menuInner = ui.find('.dashboard-menu > div')[0];

        toggleClasses = function () { // toggle classnames

            ui.toggleClass(menu, 'ui-hidden ui-visible-lg');
            ui.toggleClass('header', 'dashboard-menu-opened');

            ui.toggleClass('.ui-sidebar-show-l', 'ui-hidden-lg');
            ui.toggleClass('.dashboard-menu-show', 'ui-hidden');

        };

        if (ui.hasClass(menu, 'ui-hidden')) { // show

            state = 'opened';
            toggleClasses(); // toggle classnames

            setTimeout(() => {

                menu.style.width = '250px';
                menuInner.style.transform = 'translateX(0)';

                    setTimeout(() => {

                        menu.style.removeProperty('width');
                        menu.style.removeProperty('transform');

                    }, 0);

            }, 0);

        } else { // hide

            state = 'closed';

            menu.style.width = '0';
            menuInner.style.transform = 'translateX(-100%)';

            // toggle classnames
            if (onload) {
                setTimeout(toggleClasses, ui.globals.slow);

            } else { toggleClasses(); }

        }

        setTimeout(() => {
            ui.trigger(document, ui.globals.eventDomChange); // set custom event
        }, ui.globals.slow);

        // set menu state
        if (testStorage && sessionStorage !== undefined) {
            sessionStorage.setItem('dashboard-left-menu', state);
        }

    }
    ui.on(document, 'click', '.dashboard-menu-show,.dashboard-menu-hide', dashboardMenuToggler);

    // loader
    ui.onload(
        function () { // check stored menu position

            testStorage = true;

            // test for storage is supported?
            try {
                sessionStorage.setItem('dashboard-left-menu-test', 0);

            } catch (e) {
                testStorage = false;
            }

            if (testStorage && sessionStorage !== undefined) {

                var state = sessionStorage.getItem('dashboard-left-menu');
                if (state !== null && state === 'closed') { dashboardMenuToggler(true); }

            }

        });

})();