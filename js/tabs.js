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
        events.on(document, 'click', '.btn-tabs .btn-tab', function (e) {

            e.preventDefault();
            var parent, tabs, index, contents, classes, toggle;

            parent = events.closest(this, '.btn-tabs')[0];
            tabs = selector('.btn-tab', parent);

            index = Array.prototype.slice.call(tabs).indexOf(this);
            contents = selector('.tab-content', parent);

            toggle = false;
            classes = parent.getAttribute('data-classes');

            if (events.hasClass(this, 'btn-toggle')) { toggle = true; }

            if (events.hasClass(this, 'active')) {

                if (toggle) {

                    if (classes) {
                        events.toggleClass(tabs[index], classes);
                    }

                    events.removeClass(tabs[index], 'active');
                    events.removeClass(contents[index], 'open-ease');

                    setTimeout(function () {
                        events.removeClass(contents[index], 'open');
                    }, 300);

                }

            } else {

                if (classes) {

                    events.removeClass(tabs, classes);
                    events.addClass(tabs[index], classes);

                }

                events.removeClass(tabs, 'active');
                events.addClass(tabs[index], 'active');

                events.removeClass(contents, 'open-ease');

                setTimeout(function () {

                    events.removeClass(contents, 'open');
                    events.addClass(contents[index], 'open');

                    setTimeout(function () {
                        events.addClass(contents[index], 'open-ease');
                    }, 150);
                    
                }, 150);
                
            }

        });

    };

    // Loaders
    events.onload(tabs.Start);

}());
