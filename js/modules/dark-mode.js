// dark mode
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

(() => {

    ui.onload(function () {

        if (ui.userAgents.ie) { return; } // change event listener for darkColorScheme not supported on IE!

        var i, mode, doc, darkColorScheme, state, cookies, cookieName, setState;

        mode = ui.darkMode.valueLight;
        doc = ui.find(ui.darkMode.target)[0];

        darkColorScheme = window.matchMedia('(prefers-color-scheme: dark)');

        // set current theme color
        if (window.matchMedia) {

            if(darkColorScheme.matches) {
                mode = ui.darkMode.valueDark;
            }

        }

        // check stored theme color
        state = decodeURIComponent(document.cookie).split('; ');
        for (i = 0; i < state.length; i++ ) {

            cookies = state[i].split('=');

            cookieName = cookies[0];
            cookieName = cookieName.replace(/^\s+|\s+$/g, ''); // remove first and last spaces

            if (cookieName === 'ui-darkMode') {
                mode = cookies[1];
            }

        }

        doc.setAttribute(ui.darkMode.dataMod, mode);

        // Event Listeners
        setState = function (mode) { // set theme state

            var d = new Date();

            d.setTime(d.getTime() + ui.darkMode.cookieDays * (24 * 60 * 60 * 1000));
            document.cookie = ui.darkMode.cookieName + '=' + mode + ';' + "expires=" + d.toUTCString();

        };

        ui.on(darkColorScheme,
            'change',

            function () {

                if(darkColorScheme.matches) { mode = ui.darkMode.valueDark; } else { mode= ui.darkMode.valueLight; }
                doc.setAttribute(ui.darkMode.dataMod, mode);

                setState(mode);

            });

        ui.on(document,
            'click',

            '.' + ui.darkMode.nameToggle,

            function (e) {

                e.preventDefault();

                // toggle theme color
                var current = doc.getAttribute(ui.darkMode.dataMod);
                ui.addClass(ui.effects.target, ui.effects.nameNoEffects);

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

                    setTimeout(function () {
                        ui.removeClass(ui.effects.target, ui.effects.nameNoEffects);
                    }, 10);

                }, 0);

            });

    });

})();