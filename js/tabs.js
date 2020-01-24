/*
 Tabs JS
 Tabs JS requires Selector Js, Events JS
*/

var tabs = {};

(function () {

    'use strict';
    /*globals document, selector, events, setTimeout */

    tabs.Start = function () {

        // Events
        events.on(document, 'click', '.tabs .tab', function (e) {

            e.preventDefault();
            var parent, tabs, index, id, content, classes, toggle, prevTab;

            parent = events.closest(this, '.tabs')[0];
            tabs = selector('.tab', parent);

            index = Array.prototype.slice.call(tabs).indexOf(this);

            id = this.getAttribute('data-content');
            if (id !== null & id !== '') {
                content = selector('#' + id, parent);

            } else {
                content = selector('.tab-content', parent)[index];
            }

            toggle = false;
            classes = parent.getAttribute('data-classes');

            if (events.hasClass(this, 'btn-toggle')) { toggle = true; }

            if (events.hasClass(this, 'active')) {

                if (toggle) {

                    if (classes) {
                        events.toggleClass(tabs[index], classes);
                    }

                    events.removeClass(tabs[index], 'active');
                    events.removeClass(content, 'open-ease');

                    setTimeout(function () {
                        events.removeClass(content, 'open');
                    }, 0);

                }

            } else {

                if (classes) {

                    events.removeClass(tabs, classes);
                    events.addClass(tabs[index], classes);

                }

                events.removeClass(tabs, 'active');
                events.addClass(tabs[index], 'active');

                prevTab = selector('.tab-content.open', parent)[0]; // check previosuly opened tab
                if (prevTab !== undefined) {

                    events.removeClass(prevTab, 'open-ease');

                    setTimeout(function () {
                        events.removeClass(prevTab, 'open');
                    }, 0);

                }

                setTimeout(function () {

                    events.addClass(content, 'open');

                    setTimeout(function () {
                        events.addClass(content, 'open-ease');
                    }, 50);

                }, 0);

            }

        });

    };

    // Loaders
    events.onload(tabs.Start);

}());
