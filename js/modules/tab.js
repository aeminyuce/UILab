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
    nameAccordion: 'ui-tab-accordion',

    nameActive: 'ui-active',

    // data attributes
    dataID: 'data-ui-id',
    dataClasses: 'data-ui-classes',

    // custom events
    eventCloseToggleTabs: 'ui:closeToggleTabs',
    eventToggleTabsClosed: 'ui:toggleTabsClosed'

};

ui.tab.Start = () => {

    // Event Listeners
    ui.on(document,
        'click',

        '.' + ui.tab.targetParent + ' .' + ui.tab.targetTab,

        function (e) {

            e.preventDefault();

            var parent, tabs, index, innerTabs, outerTabs, id, content, lastOpened, innerContent, outerContent, currentContent, currentHeight, classes, accordion, toggle;

            outerTabs = [];
            outerContent = [];

            parent = ui.closest(this, '.' + ui.tab.targetParent)[0];
            tabs = ui.find('.' + ui.tab.targetTab, parent);

            // check inner tabs
            innerTabs = ui.find('.' + ui.tab.targetParent + ' .' + ui.tab.targetParent + ' .' + ui.tab.targetTab, parent);
            innerTabs = Array.prototype.slice.call(innerTabs);

            Array.prototype.forEach.call(tabs,

                el => {
                    if (innerTabs.indexOf(el) === -1) outerTabs.push(el);
                });

            if (outerTabs.length !== 0) { tabs = outerTabs; }
            index = Array.prototype.slice.call(tabs).indexOf(this);

            content = ui.find('.' + ui.tab.nameContent, parent);

            // check inner contents
            innerContent = ui.find('.' + ui.tab.targetParent + ' .' + ui.tab.targetParent + ' .' + ui.tab.nameContent, parent);
            innerContent = Array.prototype.slice.call(innerContent);

            Array.prototype.forEach.call(content,

                el => {
                    if (innerContent.indexOf(el) === -1) outerContent.push(el);
                });

            if (outerContent.length !== 0) { content = outerContent; }

            // check ids
            id = this.getAttribute(ui.tab.dataID);

            if (id !== null & id !== '') {
                currentContent = ui.find('#' + id, parent)[0];

            } else {
                currentContent = content[index];
            }

            classes = parent.getAttribute(ui.tab.dataClasses);

            accordion = false;
            toggle = false;

            if (ui.hasClass(parent, ui.tab.nameAccordion)) {
                accordion = true;
            }

            if (ui.hasClass(this, ui.globals.nameToggle)) {
                toggle = true;
            }

            if (ui.hasClass(this, ui.globals.nameActive)) {

                if (toggle || accordion) {

                    if (accordion) {

                        currentContent.style.height = currentContent.offsetHeight + 'px';
                        currentContent.style.overflow = 'hidden';

                    }

                    setTimeout(() => {

                        if (accordion) {
                            currentContent.style.height = '0';
                        }

                        setTimeout(() => {

                            ui.removeClass(currentContent, ui.globals.nameOpen);

                            if (accordion) {

                                currentContent.style.removeProperty('height');
                                currentContent.style.removeProperty('overflow');

                            }

                        }, accordion ? ui.globals.ease * 2 : ui.globals.fast / 2);

                        if (classes) {
                            ui.toggleClass(tabs[index], classes);
                        }

                        ui.removeClass(tabs[index], ui.globals.nameActive);
                        ui.removeClass(currentContent, ui.globals.nameOpenEase);

                    }, 0);

                }

            } else {

                if (classes) {

                    ui.removeClass(tabs, classes);
                    ui.addClass(tabs[index], classes);

                }

                ui.removeClass(tabs, ui.globals.nameActive);
                ui.addClass(tabs[index], ui.globals.nameActive);

                if (toggle || accordion) {

                    lastOpened = '';

                    Array.prototype.forEach.call(content,

                        el => {

                            if (el !== currentContent) {

                                if (ui.hasClass(el, ui.globals.nameOpen)) {
                                    lastOpened = el; // find last opened content
                                }

                            }

                        });

                        if (lastOpened) { // hide last opened content

                            if (accordion) {

                                lastOpened.style.height = lastOpened.offsetHeight + 'px';
                                lastOpened.style.overflow = 'hidden';

                            }

                            setTimeout(() => {

                                if (accordion) lastOpened.style.height = '0';

                                setTimeout(() => {

                                    ui.removeClass(lastOpened, ui.globals.nameOpen);

                                    if (accordion) {

                                        lastOpened.style.removeProperty('height');
                                        lastOpened.style.removeProperty('overflow');

                                    }

                                }, accordion ? ui.globals.ease * 2 : ui.globals.fast / 2);

                                ui.removeClass(lastOpened, ui.globals.nameOpenEase);

                            }, 0);

                        }

                    setTimeout(() => { // open current clicked content

                        ui.addClass(currentContent, ui.globals.nameOpen);

                        if (accordion) {

                            currentHeight = currentContent.offsetHeight;

                            currentContent.style.height = '0';
                            currentContent.style.overflow = 'hidden';

                        }

                        setTimeout(() => {

                            ui.addClass(currentContent, ui.globals.nameOpenEase);
                            currentContent.style.height = currentHeight + 'px';

                            ui.trigger(document, ui.globals.eventDomChange); // set custom event

                            if (accordion) {

                                setTimeout(() => {

                                    currentContent.style.removeProperty('height');
                                    currentContent.style.removeProperty('overflow');

                                }, accordion ? ui.globals.ease * 2 : ui.globals.fast / 2);

                            }

                        }, accordion ? ui.globals.fast / 2 : ui.globals.fast / 2);

                    }, 0);

                    // close opened toggle tabs when outside the tabs
                    ui.on(document,
                        'mousedown.' + ui.tab.eventCloseToggleTabs,

                        function (ev) {

                            if (ev.button !== 2) { // inherited right clicks

                                var holderEl = ui.closest(ev.target, '.' + ui.tab.targetParent)[0];

                                // controlling same toggled tab buttons
                                if (holderEl === parent) return;
                                if (ui.closest(holderEl, '.' + ui.tab.targetParent)[0] !== undefined) return; // inner tabs

                                // controlling active toggle tabs length
                                if (ui.find('.' + ui.globals.nameToggle + '.' + ui.globals.nameActive, parent).length === 0) return;

                                if (accordion) {

                                    currentContent.style.height = currentContent.offsetHeight + 'px';
                                    currentContent.style.overflow = 'hidden';

                                }

                                setTimeout(() => {

                                    if (accordion) {
                                        currentContent.style.height = '0';
                                    }

                                    setTimeout(() => {

                                        ui.removeClass(content, ui.globals.nameOpen);

                                        if (accordion) {

                                            currentContent.style.removeProperty('height');
                                            currentContent.style.removeProperty('overflow');

                                        }

                                    }, accordion ? ui.globals.ease * 2 : ui.globals.fast / 2);

                                    if (classes) {
                                        ui.removeClass(tabs, classes);
                                    }

                                    ui.removeClass(tabs, ui.globals.nameActive);
                                    ui.removeClass(content, ui.globals.nameOpenEase);

                                }, 0);

                                ui.trigger(document, ui.tab.eventToggleTabsClosed); // set custom event
                                ui.off(document, 'mousedown.' + ui.tab.eventCloseToggleTabs);

                            }

                        });

                } else {

                    ui.removeClass(content, ui.globals.nameOpenEase);

                    setTimeout(() => {

                        ui.removeClass(content, ui.globals.nameOpen);
                        ui.addClass(currentContent, ui.globals.nameOpen);

                        setTimeout(() => {

                            ui.addClass(currentContent, ui.globals.nameOpenEase);
                            ui.trigger(document, ui.globals.eventDomChange); // set custom event

                        }, ui.globals.fast / 2);

                    }, 0);

                }

            }

        });

};

// loaders
ui.onload(ui.tab.Start);