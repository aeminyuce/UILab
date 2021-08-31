/*
 UI Tabs JS
 Requires UI JS
*/

ui.tabs = {};

(function () {

    'use strict';
    /*globals document, ui, setTimeout */

    ui.tabs.Start = function () {

        // Event Listeners
        ui.on(document, 'click', '.tabs .tab', function (e) {

            e.preventDefault();

            var parent, tabs, index, innerTabs, outerTabs, id, content, innerContent, outerContent, currentContent, classes, toggle;

            outerTabs = [];
            outerContent = [];

            parent = ui.closest(this, '.tabs')[0];
            tabs = ui.find('.tab', parent);

            // check inner tabs
            innerTabs = ui.find('.tabs .tabs .tab', parent);
            innerTabs = Array.prototype.slice.call(innerTabs);

            ui.each(tabs, function () {

                if (innerTabs.indexOf(this) === -1) {
                    outerTabs.push(this);
                }

            });

            if (outerTabs.length !== 0) { tabs = outerTabs; }
            index = Array.prototype.slice.call(tabs).indexOf(this);

            content = ui.find('.tab-content', parent);

            // check inner contents
            innerContent = ui.find('.tabs .tabs .tab-content', parent);
            innerContent = Array.prototype.slice.call(innerContent);

            ui.each(content, function () {

                if (innerContent.indexOf(this) === -1) {
                    outerContent.push(this);
                }

            });

            if (outerContent.length !== 0) { content = outerContent; }

            // check ids
            id = this.getAttribute('data-ui-id');
            if (id !== null & id !== '') {
                currentContent = ui.find('#' + id, parent);

            } else {
                currentContent = content[index];
            }

            toggle = false;
            classes = parent.getAttribute('data-ui-classes');

            if (ui.hasClass(this, 'btn-toggle')) { toggle = true; }

            if (ui.hasClass(this, 'active')) {

                if (toggle) {

                    if (classes) {
                        ui.toggleClass(tabs[index], classes);
                    }

                    ui.removeClass(tabs[index], 'active');
                    ui.removeClass(currentContent, 'open-ease');

                    setTimeout(function () {
                        ui.removeClass(currentContent, 'open');
                    }, 0);

                }

            } else {

                if (classes) {

                    ui.removeClass(tabs, classes);
                    ui.addClass(tabs[index], classes);

                }

                ui.removeClass(tabs, 'active');
                ui.addClass(tabs[index], 'active');

                ui.removeClass(content, 'open-ease');
                setTimeout(function () {

                    ui.removeClass(content, 'open');
                    ui.addClass(currentContent, 'open');

                    setTimeout(function () {

                        ui.addClass(currentContent, 'open-ease');
                        ui.trigger(document, 'ui:domChange'); // set custom event

                    }, ui.globals.fast / 2);

                }, 0);

                if (toggle) {

                    // close opened toggle tabs when outside the tabs
                    ui.on(document, 'mouseup.ui:closeToggleTabs', function (ev) {

                        if (typeof ev.target.className === 'object') { return; } // detect SVG elements

                        if (ev.button !== 2) { // inherited right clicks

                            if (ev.target.className.split(' ').indexOf('btn-toggle') !== -1 && ui.closest(ev.target, '.tabs')[0] === parent) { // controlling same toggled tab buttons
                                return;
                            }

                            if (ev.target.className.split(' ').indexOf('tab-content') === -1 && ui.closest(ev.target, '.tab-content')[0] === undefined) { // controlling inside of the opened tab content

                                if (classes) {
                                    ui.removeClass(tabs, classes);
                                }

                                ui.removeClass(tabs, 'active');
                                ui.removeClass(content, 'open-ease');

                                setTimeout(function () {
                                    ui.removeClass(content, 'open');
                                }, 0);

                                ui.trigger(document, 'ui:toggleTabsClosed'); // set custom event
                                ui.off(document, 'mouseup.ui:closeToggleTabs');

                            }

                        }

                    });

                }

            }

        });

    };

    // Loaders
    ui.onload(ui.tabs.Start);

}());
