/* business */

// theme
const baseColor = 'hsl(331, 71%, 58%)';
const subColor = 'hsl(189, 95%, 40%)';

// settings
ui.topButton.stylesTarget = 'ui-circle ui-ease-layout';

ui.lineChart.rowsHeight = 80;
ui.lineChart.top = 10;
ui.lineChart.showGrid = false;
ui.lineChart.gridStroke = 0;
ui.lineChart.colors = [baseColor, subColor];

// layout
(() => {

    // set cookie
    const setCookie = function (name, value) { // set theme state

        const days = 365;
        const date = new Date();

        date.setTime(date.getTime() + days * (24 * 60 * 60 * 1000));

        document.cookie = name + '=' + value + ';' + "expires=" + date.toUTCString() + ';domain=' + window.location.host + ';path=/';

    };

    // header time
    const headerTime = () => {

        const headerTime = ui.find('.business-header-time')[0];

        if (headerTime !== undefined) {
            headerTime.innerHTML = '<b>Thu,</b> <span class="ui-font-light">March 10</span> <b>13:15</b>';
        }

    }

    // left panel menu
    const leftPanelMenu = () => {

        const leftPanelHolder = '.ui-col-business-panel-l';
        const leftPanel = '.business-panel-l';
        const leftPanelToggleBtn = '.business-panel-l-toggle';
        const leftPanelMinTabs = '.business-panel-l-min .ui-tab';
        const leftPanelContents = '.business-panel-l-contents > .ui-tab-content';

        const nameShowMenu = 'business-show-menu';
        const nameToggleMenu = 'business-toggle-menu';
        const nameBtnVisible = 'ui-btn-visible';
        const nameIcon = 'ui-icon';
        const nameMirrorIcon = 'ui-icon-mirror-h';

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

            if (cookie === cookieName) leftPanelToggleStatus = cookies[1];

        }

        // open last opened tab
        const openLastOpenedTab = () => {

            ui.addClass(ui.find(leftPanelMinTabs)[lastOpenedTab], ui.tab.nameActive + ' ' + nameBtnVisible);
            ui.addClass(ui.find(leftPanelContents)[lastOpenedTab], ui.tab.nameOpen + ' ' + ui.tab.nameOpenEase);

        }

        // clear last opened tab
        const clearLastOpenedTab = () => {

            ui.removeClass(leftPanelMinTabs, ui.tab.nameActive + ' ' + nameBtnVisible);
            ui.removeClass(leftPanelContents, ui.tab.nameOpen + ' ' + ui.tab.nameOpenEase);

        }

        // resizer
        const resizer = () => {

            // clear last opened tab
            if (window.innerWidth < ui.globals.xl) clearLastOpenedTab();

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

                            // mirror icon
                            ui.addClass(leftPanelToggleBtn + ' .' + nameIcon, nameMirrorIcon);


                        }

                    }

                } else openLastOpenedTab();

            }

            // remove left panel close event
            ui.off(document, 'mouseup.' + eventCloseLeftPanel);

        }

        resizer();
        ui.on(window,
            'resize',

            () => {

                if (window.innerWidth === getScrollPos) return; // only horizontal resizing

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
                lastOpenedTab = Array.prototype.slice.call(ui.find(leftPanelMinTabs)).indexOf(this);

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

                                    } else if (ui.closest(e.target, leftPanelHolder).length === 1) return; // disable when clicking inside of left panel

                                    clearLastOpenedTab();

                                    // toggle classname
                                    ui.addClass(leftPanelHolder, nameToggleMenu);

                                    // mirror icon
                                    ui.addClass(leftPanelToggleBtn + ' .' + nameIcon, nameMirrorIcon);

                                    // remove left panel close event
                                    ui.off(document, 'mouseup.' + eventCloseLeftPanel);

                                }

                            });

                    } else {

                        setTimeout(() => {

                            // mirror icon
                            ui.removeClass(leftPanelToggleBtn + ' .' + nameIcon, nameMirrorIcon);

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

                setTimeout(() => {

                    // clear last opened tab
                    clearLastOpenedTab();

                    if (ui.hasClass(leftPanelHolder, nameToggleMenu)) { // show

                        // mirror icon
                        ui.removeClass(leftPanelToggleBtn + ' .' + nameIcon, nameMirrorIcon);

                        // set cookie
                        leftPanelToggleStatus = 'show';
                        setCookie(cookieName, 'show');

                        // open last opened tab
                        openLastOpenedTab();

                    } else { // hide

                        // mirror icon
                        ui.addClass(leftPanelToggleBtn + ' .' + nameIcon, nameMirrorIcon);

                        // set cookie
                        leftPanelToggleStatus = 'hide';
                        setCookie(cookieName, 'hide');

                    }

                    // toggle classname
                    ui.toggleClass(leftPanelHolder, nameToggleMenu);

                    if (ui.lineChart !== undefined) {
                        ui.lineChart.Init(ui.lineChart.nameLoaded, true); // resize loaded charts
                    }

                    ui.trigger(document, ui.globals.eventDomChange); // set custom event

                }, ui.globals.ease);

            });

    }

    // loaders
    ui.onload(() => {

        headerTime();
        leftPanelMenu();

    });

})();