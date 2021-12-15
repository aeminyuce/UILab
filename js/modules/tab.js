/* tab */

import { ui } from './../core/globals.js';
export default () => ui;

ui.tab = {

    // targets
    targetParent: 'ui-tab-holder',
    targetTab: 'ui-tab',

    // main classnames
    nameContent: 'ui-tab-content',
    nameToggle: 'ui-tab-toggle',

    // helper classnames
    nameOpen: 'ui-open',
    nameOpenEase: 'ui-open-ease',

    nameActive: 'ui-active',

    // data attributes
    dataID: 'data-ui-id',
    dataClasses: 'data-ui-classes',

    // custom events
    eventCloseToggleTabs: 'ui:closeToggleTabs',
    eventToggleTabsClosed: 'ui:toggleTabsClosed'

};

(() => {

    ui.tab.Start = function () {

        // Event Listeners
        ui.on(document,
            'click',

            '.' + ui.tab.targetParent + ' .' + ui.tab.targetTab,

            function (e) {

                e.preventDefault();

                var parent, tabs, index, innerTabs, outerTabs, id, content, lastOpened, innerContent, outerContent, currentContent, currentHeight, classes, toggle;

                outerTabs = [];
                outerContent = [];

                parent = ui.closest(this, '.' + ui.tab.targetParent)[0];
                tabs = ui.find('.' + ui.tab.targetTab, parent);

                // check inner tabs
                innerTabs = ui.find('.' + ui.tab.targetParent + ' .' + ui.tab.targetParent + ' .' + ui.tab.targetTab, parent);
                innerTabs = Array.prototype.slice.call(innerTabs);

                ui.each(tabs,

                    function () {

                        if (innerTabs.indexOf(this) === -1) {
                            outerTabs.push(this);
                        }

                    });

                if (outerTabs.length !== 0) { tabs = outerTabs; }
                index = Array.prototype.slice.call(tabs).indexOf(this);

                content = ui.find('.' + ui.tab.nameContent, parent);

                // check inner contents
                innerContent = ui.find('.' + ui.tab.targetParent + ' .' + ui.tab.targetParent + ' .' + ui.tab.nameContent, parent);
                innerContent = Array.prototype.slice.call(innerContent);

                ui.each(content,

                    function () {

                        if (innerContent.indexOf(this) === -1) {
                            outerContent.push(this);
                        }

                    });

                if (outerContent.length !== 0) { content = outerContent; }

                // check ids
                id = this.getAttribute(ui.tab.dataID);

                if (id !== null & id !== '') {
                    currentContent = ui.find('#' + id, parent)[0];

                } else {
                    currentContent = content[index];
                }

                toggle = false;
                classes = parent.getAttribute(ui.tab.dataClasses);

                if (ui.hasClass(this, ui.tab.nameToggle)) {
                    toggle = true;
                }

                if (ui.hasClass(this, ui.tab.nameActive)) {

                    if (toggle) {

                        currentContent.style.height = currentContent.offsetHeight + 'px';
                        currentContent.style.overflow = 'hidden';

                        setTimeout(function () {

                            currentContent.style.height = '0';
                            setTimeout(function () {

                                if (classes) {
                                    ui.toggleClass(tabs[index], classes);
                                }

                                ui.removeClass(tabs[index], ui.tab.nameActive);
                                ui.removeClass(currentContent, ui.tab.nameOpenEase);

                                currentContent.style.removeProperty('height');
                                currentContent.style.removeProperty('overflow');

                                ui.removeClass(currentContent, ui.tab.nameOpen);

                            }, ui.globals.ease * 2);

                        }, 0);

                    }

                } else {

                    if (classes) {

                        ui.removeClass(tabs, classes);
                        ui.addClass(tabs[index], classes);

                    }

                    ui.removeClass(tabs, ui.tab.nameActive);
                    ui.addClass(tabs[index], ui.tab.nameActive);

                    if (toggle) {

                        lastOpened = '';

                        ui.each(content,

                            function () {

                                if (this !== currentContent) {

                                    if (ui.hasClass(this, ui.tab.nameOpen)) {
                                        lastOpened = this; // find last opened content
                                    }

                                }

                            });

                            if (lastOpened) { // hide last opened content

                                lastOpened.style.height = lastOpened.offsetHeight + 'px';
                                lastOpened.style.overflow = 'hidden';

                                setTimeout(function () {

                                    lastOpened.style.height = '0';
                                    setTimeout(function () {

                                        ui.removeClass(lastOpened, ui.tab.nameOpenEase);

                                        lastOpened.style.removeProperty('height');
                                        lastOpened.style.removeProperty('overflow');

                                        ui.removeClass(lastOpened, ui.tab.nameOpen);

                                    }, ui.globals.ease * 2);

                                }, 0);

                            }

                        setTimeout(function () { // open current clicked content

                            ui.addClass(currentContent, ui.tab.nameOpen);

                            currentHeight = currentContent.offsetHeight;

                            currentContent.style.height = '0';
                            currentContent.style.overflow = 'hidden';

                            setTimeout(function () {

                                ui.addClass(currentContent, ui.tab.nameOpenEase);
                                currentContent.style.height = currentHeight + 'px';

                                ui.trigger(document, ui.globals.eventDomChange); // set custom event

                                setTimeout(function () {

                                    currentContent.style.removeProperty('height');
                                    currentContent.style.removeProperty('overflow');

                                }, ui.globals.ease * 2);

                            }, ui.globals.fast / 2);

                        }, 0);

                        // close opened toggle tabs when outside the tabs
                        ui.on(document,
                            'mouseup.' + ui.tab.eventCloseToggleTabs,

                            function (ev) {

                                if (ev.target.className instanceof Object) { return; } // fix: when clicking on SVG icons inside the toggle tab

                                if (ev.button !== 2) { // inherited right clicks

                                    if (ev.target.className.split(' ').indexOf(ui.tab.nameToggle) !== -1 && ui.closest(ev.target, '.' + ui.tab.targetParent)[0] === parent) { // controlling same toggled tab buttons
                                        return;
                                    }

                                    if (ev.target.className.split(' ').indexOf(ui.tab.nameContent) === -1 && ui.closest(ev.target, '.' + ui.tab.nameContent)[0] === undefined) { // controlling inside of the opened tab content

                                        currentContent.style.height = currentContent.offsetHeight + 'px';
                                        currentContent.style.overflow = 'hidden';

                                        setTimeout(function () {

                                            currentContent.style.height = '0';
                                            setTimeout(function () {

                                                if (classes) {
                                                    ui.removeClass(tabs, classes);
                                                }

                                                ui.removeClass(tabs, ui.tab.nameActive);
                                                ui.removeClass(content, ui.tab.nameOpenEase);

                                                currentContent.style.removeProperty('height');
                                                currentContent.style.removeProperty('overflow');

                                                ui.removeClass(content, ui.tab.nameOpen);

                                            }, ui.globals.ease * 2);

                                        }, 0);

                                        ui.trigger(document, ui.tab.eventToggleTabsClosed); // set custom event
                                        ui.off(document, 'mouseup.' + ui.tab.eventCloseToggleTabs);

                                    }

                                }

                            });

                    } else {

                        ui.removeClass(content, ui.tab.nameOpenEase);
                        setTimeout(function () {

                            ui.removeClass(content, ui.tab.nameOpen);
                            ui.addClass(currentContent, ui.tab.nameOpen);

                            setTimeout(function () {

                                ui.addClass(currentContent, ui.tab.nameOpenEase);
                                ui.trigger(document, ui.globals.eventDomChange); // set custom event

                            }, ui.globals.fast / 2);

                        }, 0);

                    }

                }

            });

    };

    // loaders
    ui.onload(ui.tab.Start);

})();
