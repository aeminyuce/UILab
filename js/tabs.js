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

            var parent, tabs, index, innerTabs, outerTabs, id, content, innerContent, outerContent, currentContent, classes, toggle;

            outerTabs = [];
            outerContent = [];

            parent = events.closest(this, '.tabs')[0];
            tabs = selector('.tab', parent);

            // check inner tabs
            innerTabs = selector('.tabs .tabs .tab', parent);
            innerTabs = Array.prototype.slice.call(innerTabs);

            events.each(tabs, function () {

                if (innerTabs.indexOf(this) === -1) {
                    outerTabs.push(this);
                }

            });

            if (outerTabs.length !== 0) { tabs = outerTabs; }
            index = Array.prototype.slice.call(tabs).indexOf(this);

            content = selector('.tab-content', parent);

            // check inner contents
            innerContent = selector('.tabs .tabs .tab-content', parent);
            innerContent = Array.prototype.slice.call(innerContent);

            events.each(content, function () {

                if (innerContent.indexOf(this) === -1) {
                    outerContent.push(this);
                }

            });

            if (outerContent.length !== 0) { content = outerContent; }

            // check ids
            id = this.getAttribute('data-id');
            if (id !== null & id !== '') {
                currentContent = selector('#' + id, parent);

            } else {
                currentContent = content[index];
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
                    events.removeClass(currentContent, 'open-ease');

                    setTimeout(function () {
                        events.removeClass(currentContent, 'open');
                    }, 0);

                }

            } else {

                if (classes) {

                    events.removeClass(tabs, classes);
                    events.addClass(tabs[index], classes);

                }

                events.removeClass(tabs, 'active');
                events.addClass(tabs[index], 'active');

                events.removeClass(content, 'open-ease');
                setTimeout(function () {

                    events.removeClass(content, 'open');
                    events.addClass(currentContent, 'open');

                    setTimeout(function () {

                        events.addClass(currentContent, 'open-ease');
                        events.trigger(document, 'domChange'); // set custom event

                    }, 50);

                }, 0);

                if (toggle) {

                    // close opened toggle tabs when outside the tabs
                    events.on(document, 'mouseup.tabToggleClose', function (ev) {

                        if (typeof ev.target.className === 'object') { return; } // detect SVG elements

                        if (ev.button !== 2) { // inherited right clicks

                            if (ev.target.className.split(' ').indexOf('btn-toggle') !== -1 && events.closest(ev.target, '.tabs')[0] === parent) { // controlling same toggled tab buttons
                                return;
                            }

                            if (ev.target.className.split(' ').indexOf('tab-content') === -1 && events.closest(ev.target, '.tab-content')[0] === undefined) { // controlling inside of the opened tab content

                                if (classes) {
                                    events.removeClass(tabs, classes);
                                }

                                events.removeClass(tabs, 'active');
                                events.removeClass(content, 'open-ease');

                                setTimeout(function () {
                                    events.removeClass(content, 'open');
                                }, 0);

                                events.trigger(document, 'tabs:outerToggleClose'); // set custom event
                                events.off(document, 'mouseup.tabToggleClose');

                            }

                        }

                    });

                }

            }

        });

    };

    // Loaders
    events.onload(tabs.Start);

}());
