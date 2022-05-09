/* business */

// settings
ui.topButton.stylesTarget = 'ui-circle ui-ease-layout';

// layout
(() => {

    // set cookie
    const setCookie = function (name, value) { // set theme state

        const days = 365;
        const date = new Date();

        date.setTime(date.getTime() + days * (24 * 60 * 60 * 1000));

        document.cookie = name + '=' + value + ';' + "expires=" + date.toUTCString();

    };

    // header time
    const headerTime = () => {

        const headerTime = ui.find('.header-time')[0];

        if (headerTime !== undefined) {
            headerTime.innerHTML = '<b>Per,</b> <span class="ui-font-light">10 Mart</span> <b>13:15</b>';
        }

    }

    // left panel menu
    const leftPanelMenu = () => {

        const leftPanelHolder = ui.find('.ui-col-panel-l');
        const leftPanel = ui.find('.panel-l');

        const leftPanelToggleIconLeft = 'angle-left';
        const leftPanelToggleIconRight = 'angle-right';

        const leftPanelToggleBtn = ui.find('.panel-l-toggle')[0];
        const leftPanelToggleIcon = ui.find('.panel-l-toggle .ui-icon')[0];

        const leftPanelMinTabs = ui.find('.panel-l-min .ui-tab');
        const leftPanelContents = ui.find('.panel-l-contents > .ui-tab-content');

        const nameShowMenu = 'show-menu';
        const nameToggleMenu = 'toggle-menu';

        const nameBtnVisible = 'ui-btn-visible';

        const cookieName = 'leftPanelToggle';
        const eventCloseLeftPanel = 'closeLeftPanel';

        let getScrollPos = 0;
        let lastOpenedTab = 0;

        // check left panel status
        let leftPanelToggleStatus = 'show'; // default

        const state = decodeURIComponent(document.cookie).split('; ');
        for (let i = 0; i < state.length; i++ ) {

            const cookies = state[i].split('=');

            let cookie = cookies[0];
            cookie = cookie.replace(/^\s+|\s+$/g, ''); // remove first and last spaces

            if (cookie === cookieName) {
                leftPanelToggleStatus = cookies[1];
            }

        }

        // open last opened tab
        const openLastOpenedTab = () => {

            ui.addClass(leftPanelMinTabs[lastOpenedTab], ui.tab.nameActive + ' ' + nameBtnVisible);
            ui.addClass(leftPanelContents[lastOpenedTab], ui.tab.nameOpen + ' ' + ui.tab.nameOpenEase);

        }

        // clear last opened tab
        const clearLastOpenedTab = () => {

            ui.removeClass(leftPanelMinTabs, ui.tab.nameActive + ' ' + nameBtnVisible);
            ui.removeClass(leftPanelContents, ui.tab.nameOpen + ' ' + ui.tab.nameOpenEase);

        }

        // resizer
        const resizer = () => {

            // clear last opened tab
            if (window.innerWidth < ui.globals.xl) {
                clearLastOpenedTab();
            }

            if (window.innerWidth < ui.globals.xl && window.innerWidth > ui.globals.md) { // activate menu

                // change tabs to toggle
                ui.addClass(leftPanelMinTabs, ui.tab.nameToggle);

            } else { // deactivate menu

                // change tabs from toggle
                ui.removeClass(leftPanelMinTabs, ui.tab.nameToggle);

                // open last opened tab
                if (window.innerWidth >= ui.globals.xl) {

                    if (leftPanelToggleStatus === 'show') {
                        openLastOpenedTab();

                    } else {

                        clearLastOpenedTab();

                        if (!ui.hasClass(leftPanelHolder, nameToggleMenu)) {


                            // toggle classname
                            ui.addClass(leftPanelHolder, nameToggleMenu);

                            // change icon
                            leftPanelToggleIcon.innerHTML = '<use href="' + ui.globals.iconSrc + '#' + leftPanelToggleIconRight + '"></use>';

                        }

                    }

                } else {
                    openLastOpenedTab();
                }

            }

            // remove left panel close event
            ui.off(document, 'mouseup.' + eventCloseLeftPanel);

        }

        resizer();
        ui.on(window,
            'resize',

            () => {

                if (window.innerWidth === getScrollPos) { return; } // only horizontal resizing

                resizer();
                ui.removeClass(leftPanel, nameShowMenu);

                getScrollPos = window.innerWidth;

            });

        // clicking show menu & toggle menu
        ui.on(document,
            'click',

            leftPanelMinTabs,

            function () {

                // save last opened tab
                lastOpenedTab = Array.prototype.slice.call(leftPanelMinTabs).indexOf(this);

                // show menu
                if (window.innerWidth < ui.globals.xl && window.innerWidth > ui.globals.md) {

                    setTimeout(() => {
                        ui.addClass(leftPanel, nameShowMenu);
                    }, ui.globals.ease);

                }

                // toggle menu
                if (window.innerWidth >= ui.globals.xl) {

                    setTimeout(() => {

                        // remove classname
                        ui.removeClass(leftPanelHolder, nameToggleMenu);

                    }, ui.globals.ease);

                    if (leftPanelToggleStatus === 'hide') {

                        // left panel close event
                        ui.on(document,
                            'mouseup.' + eventCloseLeftPanel,

                            function (e) {

                                if (e.button !== 2) { // inherited right clicks

                                    if (ui.closest(e.target, leftPanelToggleBtn).length === 1) { // control clicking toggle button

                                        // remove left panel close event
                                        ui.off(document, 'mouseup.' + eventCloseLeftPanel);

                                    } else if (ui.closest(e.target, leftPanelHolder[0]).length === 1) { return; } // disable when clicking inside of left panel

                                    clearLastOpenedTab();

                                    // toggle classname
                                    ui.addClass(leftPanelHolder, nameToggleMenu);

                                    // change icon
                                    leftPanelToggleIcon.innerHTML = '<use href="' + ui.globals.iconSrc + '#' + leftPanelToggleIconRight + '"></use>';

                                    // remove left panel close event
                                    ui.off(document, 'mouseup.' + eventCloseLeftPanel);

                                }

                            });

                    } else {

                        setTimeout(() => {

                            // change icon
                            leftPanelToggleIcon.innerHTML = '<use href="' + ui.globals.iconSrc + '#' + leftPanelToggleIconLeft + '"></use>';

                        }, ui.globals.ease);

                    }

                }

            });

        // hide menu
        ui.on(document,
            ui.tab.eventToggleTabsClosed,

            () => {

                setTimeout(() => {
                    ui.removeClass(leftPanel, nameShowMenu);
                }, ui.globals.ease);

            });

        // toggle menu
        ui.on(document,
            'click',

            leftPanelToggleBtn,

            function () {

                let iconName = '';

                setTimeout(() => {

                    // clear last opened tab
                    clearLastOpenedTab();

                    if (ui.hasClass(leftPanelHolder, nameToggleMenu)) { // show

                        iconName = leftPanelToggleIconLeft;

                        // set cookie
                        leftPanelToggleStatus = 'show';
                        setCookie(cookieName, 'show');

                        // open last opened tab
                        openLastOpenedTab();

                    } else { // hide

                        iconName = leftPanelToggleIconRight;

                        // set cookie
                        leftPanelToggleStatus = 'hide';
                        setCookie(cookieName, 'hide');

                    }

                    // toggle classname
                    ui.toggleClass(leftPanelHolder, nameToggleMenu);

                    // change icon
                    leftPanelToggleIcon.innerHTML = '<use href="' + ui.globals.iconSrc + '#' + iconName + '"></use>';


                }, ui.globals.ease);

            });

    }

    // loaders
    ui.onload(() => {

        headerTime();
        leftPanelMenu();

    });

})();