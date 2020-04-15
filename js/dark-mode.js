/*
 Dark Mode JS
 Dark Mode JS requires Selector Js, Events JS
*/

var darkMode = {};

(function () {

    'use strict';
    /*globals window, document, selector, events, sessionStorage */

    var testStorage = true;

    // test for storage is supported?
    try {
        sessionStorage.setItem('darkModeSateTest', 0);

    } catch (e) {
        testStorage = false;
    }

    darkMode.Start = function () {

        var mode, doc, darkColorScheme, state;

        mode = 'light';
        doc = selector(document)[0];

        darkColorScheme = window.matchMedia('(prefers-color-scheme: dark)');

        // set current theme color
        if (window.matchMedia) {

            if(darkColorScheme.matches) {
                mode = 'dark';
            }

        }

        // check stored theme color
        if (testStorage && sessionStorage !== undefined) {

            state = sessionStorage.getItem('dark-mode-color')
            if (state !== null && state !== null) {
                mode = state;
            }
        }

        doc.setAttribute('data-theme', mode);

        // Events
        function setState(mode) { // set theme state

            if (testStorage && sessionStorage !== undefined) {
                sessionStorage.setItem('dark-mode-color', mode);
            }

        }

        events.on(darkColorScheme, 'change', function () {

            if(darkColorScheme.matches) { mode = 'dark'; } else { mode= 'light'; }
            doc.setAttribute('data-theme', mode);

            setState(mode);

        });

        events.on(document, 'click', '.btn-toggle-color', function (e) {

            e.preventDefault();

            // toggle theme color
            var current = doc.getAttribute('data-theme');

            if (current !== null && current !== '') {
                if (current === 'dark') { mode = 'light'; } else { mode = 'dark'; }
            }

            doc.setAttribute('data-theme', mode);
            setState(mode);

        });

    }

    // Loaders
    events.onload(darkMode.Start);

}());
