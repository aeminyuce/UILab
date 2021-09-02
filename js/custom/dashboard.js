/*globals document, ui, setTimeout, sessionStorage */

// Toggle Sidebar
var testStorage;

function toggler(onload) {

    var sidebar, sidebarInner, toggleClasses, state;

    sidebar = ui.find('.sidebar')[0];
    sidebarInner = ui.find('.sidebar > div')[0];

    toggleClasses = function () { // toggle classnames

        ui.toggleClass(sidebar, 'hidden visible-lg');
        ui.toggleClass('header', 'sidebar-opened');

        ui.toggleClass('.show-mobile-menu-l', 'hidden-lg');
        ui.toggleClass('.sidebar-show', 'hidden');

    };

    if (ui.hasClass(sidebar, 'hidden')) { // show

        state = 'opened';
        toggleClasses(); // toggle classnames

        setTimeout(function () {

            sidebar.style.width = '250px';
            sidebarInner.style.transform = 'translateX(0)';

                setTimeout(function () {

                    sidebar.style.removeProperty('width');
                    sidebar.style.removeProperty('transform');

                }, 0);

        }, 0);

    } else { // hide

        state = 'closed';

        sidebar.style.width = '0';
        sidebarInner.style.transform = 'translateX(-100%)';

        // toggle classnames
        if (onload) {
            setTimeout(toggleClasses, ui.globals.slow);

        } else { toggleClasses(); }

    }

    setTimeout(function () {
        ui.trigger(document, ui.globals.eventDomChange); // set custom event
    }, ui.globals.slow);

    // set sidebar state
    if (testStorage && sessionStorage !== undefined) {
        sessionStorage.setItem('ui-dashboard-left-sidebar', state);
    }

}

ui.on(document, 'click', '.sidebar-show,.sidebar-hide', toggler);

ui.onload(function () { // check stored sidebar position

    testStorage = true;

    // test for storage is supported?
    try {
        sessionStorage.setItem('ui-dashboard-left-sidebar-test', 0);

    } catch (e) {
        testStorage = false;
    }

    if (testStorage && sessionStorage !== undefined) {

        var state = sessionStorage.getItem('ui-dashboard-left-sidebar');
        if (state !== null && state === 'closed') { toggler(true); }

    }

});