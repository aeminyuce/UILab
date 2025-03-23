/* dark mode */

import { ui } from './../core/globals.js';
export default () => ui;

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

ui.onload(() => {

    if (ui.userAgents.ie) return; // change event listener for darkColorScheme not supported on IE!

    let autoSwitcher = true;

    // set current theme color
    let mode = ui.darkMode.valueLight;

    const darkColorScheme = window.matchMedia('(prefers-color-scheme: dark)');

    if (window.matchMedia) {
        if (darkColorScheme.matches) mode = ui.darkMode.valueDark;
    }

    // check stored theme color
    const state = decodeURIComponent(document.cookie).split('; ');

    setTimeout(() => {

        for (let i = 0; i < state.length; i++ ) {

            const cookies = state[i].split('=');

            let cookie = cookies[0];
            cookie = cookie.replace(/^\s+|\s+$/g, ''); // remove first and last spaces

            if (cookie === ui.darkMode.cookieName) {

                mode = cookies[1];
                autoSwitcher = false;

            }

        }

        doc.setAttribute(ui.darkMode.dataMod, mode);

    }, 0); // wait cookie

    // Event Listeners
    const doc = ui.find(ui.darkMode.target)[0];

    const setState = function (mode) { // set theme state

        const date = new Date();
        date.setTime(date.getTime() + ui.darkMode.cookieDays * (24 * 60 * 60 * 1000));

        document.cookie = `${ui.darkMode.cookieName}=${mode}; expires=${date.toUTCString()}; domain=${window.location.hostname}; path=/`;

    };

    ui.on(darkColorScheme,
        'change',

        function () {

            if (autoSwitcher) {

                mode = darkColorScheme.matches ? ui.darkMode.valueDark : ui.darkMode.valueLight;

                doc.setAttribute(ui.darkMode.dataMod, mode);
                setState(mode);

            }

        });

    ui.on(document,
        'click',

        `.${ui.darkMode.nameToggle}`,

        function (e) {

            e.preventDefault();

            // toggle theme color
            const current = doc.getAttribute(ui.darkMode.dataMod);

            setTimeout(() => {

                if (current !== null && current !== '') {
                    mode = (current === ui.darkMode.valueDark) ? ui.darkMode.valueLight : ui.darkMode.valueDark;
                }

                doc.setAttribute(ui.darkMode.dataMod, mode);
                setState(mode);

            }, 0);

            autoSwitcher = false;

        });

});
