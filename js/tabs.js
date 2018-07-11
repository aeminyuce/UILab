/*
 Tabs JS
 Tabs JS requires Events JS
*/

/*globals document, selector, events */
var tabsFnc = function () {

    'use strict';

    events.on(document, 'click', '.btn-tabs .btn-tab', function () {

        var parent, tabs, index, contents, classes;

        if (!events.hasClass(this, 'active')) {

            parent = events.closest(this, '.btn-tabs')[0];
            tabs = selector('.btn-tab', parent);

            index = Array.prototype.slice.call(tabs).indexOf(this);
            contents = selector('.tab-content', parent);

            classes = parent.getAttribute('data-classes');
            if (classes) {

                events.removeClass(tabs, classes);
                events.addClass(tabs[index], classes);

            }

            events.removeClass(tabs, 'active');
            events.addClass(tabs[index], 'active');

            events.removeClass(contents, 'open');
            events.addClass(contents[index], 'open');

        }

    });

};

/*!loader */
events.onload(function () {

    'use strict';
    tabsFnc();

});
