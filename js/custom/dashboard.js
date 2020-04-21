/*globals document, selector, events, setTimeout, sessionStorage */

// Toggle Sidebar
var testStorage;

function toggler(onload) {

    var sidebar, sidebarInner, toggleClasses, state;

    sidebar = selector('.sidebar')[0];
    sidebarInner = selector('.sidebar > div')[0];

    toggleClasses = function () { // toggle classnames

        events.toggleClass(sidebar, 'hidden visible-lg');
        events.toggleClass('header', 'sidebar-opened');

        events.toggleClass('.show-mobile-menu-l', 'hidden-lg');
        events.toggleClass('.sidebar-show', 'hidden');

    };

    if (events.hasClass(sidebar, 'hidden')) { // show

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
            setTimeout(toggleClasses, 400);

        } else { toggleClasses(); }

    }

    setTimeout(function () {
        events.trigger(document, 'domChange'); // set custom event
    }, 400);

    // set sidebar state
    if (testStorage && sessionStorage !== undefined) {
        sessionStorage.setItem('dashboard-left-sidebar', state);
    }

}

events.on(document, 'click', '.sidebar-show,.sidebar-hide', toggler);

events.onload(function () { // check stored sidebar position

    testStorage = true;

    // test for storage is supported?
    try {
        sessionStorage.setItem('dataListTest', 0);

    } catch (e) {
        testStorage = false;
    }

    if (testStorage && sessionStorage !== undefined) {

        var state = sessionStorage.getItem('dashboard-left-sidebar');
        if (state !== null && state === 'closed') { toggler(true); }

    }

});