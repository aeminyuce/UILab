/*
 Tabs JS
 Tabs JS requires Selector Js, Events JS
*/

var tabs = {};

(function () {

    'use strict';
    /*globals document, selector, events */

    tabs.Start = function () {

        // Events
        events.on(document, 'click', '.btn-tabs .btn-tab', function (e) {

            e.preventDefault();
            var parent, tabs, index, contents, classes, toggle;

            parent = events.closest(this, '.btn-tabs')[0];
            tabs = selector('.btn-tab', parent);

            index = Array.prototype.slice.call(tabs).indexOf(this);
            contents = selector('.tab-content', parent);

            toggle = false;
            if (events.hasClass(this, 'btn-toggle')) { toggle = true; }

            classes = parent.getAttribute('data-classes');

            if (events.hasClass(this, 'active')) {

                if (toggle) {

                    if (classes) {
                        events.toggleClass(tabs[index], classes);
                    }

                    events.toggleClass(tabs[index], 'active');
                    events.toggleClass(contents[index], 'open');

                }

            } else {

                if (classes) {

                    events.removeClass(tabs, classes);
                    events.addClass(tabs[index], classes);

                }

                events.removeClass(tabs, 'active');
                events.removeClass(contents, 'open');

                events.addClass(tabs[index], 'active');
                events.addClass(contents[index], 'open');

            }

        });

    };

    // Loaders
    events.onload(tabs.Start);

}());
