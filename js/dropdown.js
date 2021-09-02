/*
 UI Dropdown JS
 Requires UI JS
*/

ui.dropdown = {

    // targets
    target: 'dropdown',

    // classnames
    nameOpen: 'open',
    nameOpenEase: 'open-ease',
    nameHover: 'open-hover',

    nameNav: 'nav',
    nameNavFullHor: 'nav-full-h',

    nameMenuTop: 'menu-t',
    nameMenuLeft: 'menu-l',
    nameMenuCenter: 'menu-c',

    nameContent: 'content',
    nameContentItems: 'li',

    nameValueToggle: 'value-toggle',
    nameValueToggleItems: 'label',
    nameValueToggleSelected: 'selected',

    nameBtn: 'btn',
    nameMobileMenu: 'mobile-menu',
    nameNoScrolling: 'no-scroll',

    // values
    scrollbarSize: 20,
    menuTopMargin: 1,

    // custom events
    eventDropdownClose: 'ui:dropdownClose'

};

(function () {

    'use strict';
    /*globals window, document, ui, setTimeout, clearTimeout */

    var
        dropdownHoverTimer,
        dropdownOpenTimer,

        dropdownLeaveTimer,
        dropdownCloseTimer,

        listStyles,
        selectOpened,
        selectInContent;

    function dropdownClose() {

        if (selectOpened) { return; }

        var that, list;

        that = ui.find('.' + ui.dropdown.target + '.' + ui.dropdown.nameOpen);
        ui.removeClass(that, ui.dropdown.nameOpenEase);

        clearTimeout(dropdownLeaveTimer);
        dropdownLeaveTimer = setTimeout(function () {

            ui.each(that, function () {

                clearTimeout(dropdownCloseTimer);
                list = ui.find('.' + ui.dropdown.nameContent, this)[0];

                dropdownCloseTimer = setTimeout(function () {

                    if (listStyles === 0) {
                        list.removeAttribute('style');

                    } else {

                        list.style.removeProperty('max-height');
                        list.style.removeProperty('right');
                        list.style.removeProperty('margin-left');
                        list.style.removeProperty('transform-origin');

                    }

                    ui.removeClass(that, ui.dropdown.nameMenuTop + ' ' + ui.dropdown.nameOpen);

                }, ui.globals.ease);

            });

        }, 0);

    }

    ui.dropdown.Start = function () {

        function dropdownOpen(e, that) {

            e.preventDefault();
            e.stopPropagation();

            var list, alignSize, parent, offset, setMaxH;

            parent = that.parentNode;

            clearTimeout(dropdownOpenTimer);
            dropdownOpenTimer = setTimeout(function () {

                dropdownClose();

                clearTimeout(dropdownOpenTimer);
                ui.addClass(parent, ui.dropdown.nameOpen);

                dropdownOpenTimer = setTimeout(function () {
                    ui.addClass(parent, ui.dropdown.nameOpenEase);
                }, dropdownHoverTimer / 6);

                offset = parent.getBoundingClientRect();
                list = ui.find('.' + ui.dropdown.nameContent, parent)[0];

                if (ui.closest(that, '.' + ui.dropdown.nameMobileMenu)[0] === undefined && !ui.hasClass(parent, ui.dropdown.nameNavFullHor)) { // diable all positionings on mobile menus and full horizontal navigations

                    listStyles = list.style.length;

                    if (window.innerWidth > ui.globals.sm) { // menu horizontal positioning: active

                        if (ui.hasClass(parent, ui.dropdown.nameMenuLeft) || (offset.left + list.offsetWidth + ui.dropdown.scrollbarSize) > window.innerWidth) {

                            if (offset.left - (list.offsetWidth - parent.offsetWidth) >= 0) {

                                list.style.right = 0;
                                list.style.left = 'inherit';

                                list.style.transformOrigin = 'top right';

                            }

                        } else if (ui.hasClass(parent, ui.dropdown.nameMenuCenter)) {

                            alignSize = Math.abs(list.offsetWidth - parent.offsetWidth) / 2;

                            if ((offset.left - alignSize > 0) && (alignSize > 0)) {
                                list.style.marginLeft = -alignSize + 'px';
                            }

                        }

                    } else { // menu horizontal positioning: passive

                        list.style.marginLeft = -(offset.left - (ui.dropdown.scrollbarSize / 2)) + 'px';
                        list.style.width = (window.innerWidth - ui.dropdown.scrollbarSize) + 'px';

                    }

                }

                setMaxH = function (pos) { // set max-height of list

                    if (ui.hasClass(list, ui.dropdown.nameNoScrolling)) {
                        return;
                    }

                    if (pos === 'top') {
                        list.style.maxHeight = window.innerHeight - (ui.dropdown.scrollbarSize + ui.dropdown.menuTopMargin) + 'px';

                    } else {
                        list.style.maxHeight = window.innerHeight - (offset.top + that.offsetHeight + ui.dropdown.scrollbarSize + ui.dropdown.menuTopMargin) + 'px';
                    }

                };

                if (offset.top + parseInt(that.offsetHeight + list.offsetHeight) >= window.innerHeight) { // menu vertical positioning

                    if (offset.top - parseInt(that.offsetHeight + list.offsetHeight) + that.offsetHeight > 0) {

                        if (!ui.hasClass(parent, ui.dropdown.nameNavFullHor)) { // disable top menu with full horizontal navigations

                            ui.addClass(parent, ui.dropdown.nameMenuTop);
                            list.style.removeProperty('transform-origin');

                        }

                        setMaxH('top');

                    } else { setMaxH('default'); }

                } else { setMaxH('default'); }

            }, dropdownHoverTimer);

            if (e.type === 'click') {

                setTimeout(function () {

                    ui.on(document, 'click.' + ui.dropdown.eventDropdownClose, function (ev) {

                        var content = ui.closest(ev.target, '.' + ui.dropdown.nameContent)[0];

                        // prevent for non listing contents
                        if (content !== undefined) {

                            if (ui.closest(content, '.' + ui.dropdown.target)[0] !== undefined) { // check other content class names
                                return;
                            }

                        }

                        if (ui.closest(ev.target, '.' + ui.dropdown.target + '.' + ui.dropdown.nameNavFullHor)[0] !== undefined && ev.target.className.split(' ').indexOf(ui.dropdown.nameContent) === 0) { // check full horizontal navigations
                            return;
                        }

                        if (ev.button !== 2) { // inherited right clicks

                            dropdownClose();
                            ui.off(document, 'click.' + ui.dropdown.eventDropdownClose);

                        }

                    });

                }, 0);

            }

        }

        // Event Listeners
        // open
        ui.on(document,
            'click',

            '.' + ui.userAgents.nameDesktop + ' .' + ui.dropdown.target + ':not(.' + ui.dropdown.nameHover + '):not(.' + ui.dropdown.nameOpenEase + ') > .' + ui.dropdown.nameBtn + ',' +
            '.' + ui.userAgents.nameMobile + ' .' + ui.dropdown.target + ':not(.' + ui.dropdown.nameOpenEase + ') > .' + ui.dropdown.nameBtn,

            function (e) {

                dropdownHoverTimer = 0;
                dropdownOpen(e, this);

            });

        ui.on(document,
            'mouseenter',

            '.' + ui.userAgents.nameDesktop + ' .' + ui.dropdown.target + '.' + ui.dropdown.nameHover + ':not(.' + ui.dropdown.nameOpenEase + ') > .' + ui.dropdown.nameBtn,

            function (e) {

                clearTimeout(dropdownLeaveTimer);
                dropdownHoverTimer = ui.globals.ease * 2;

                dropdownOpen(e, this);

            });

        ui.on(document,
            'mouseenter',

            '.' + ui.userAgents.nameDesktop + ' .' + ui.dropdown.target + '.' + ui.dropdown.nameHover + '.' + ui.dropdown.nameOpen + ' > .' + ui.dropdown.nameBtn + ',' +
            '.' + ui.userAgents.nameDesktop + ' .' + ui.dropdown.target + '.' + ui.dropdown.nameHover + '.' + ui.dropdown.nameOpenEase + ' .' + ui.dropdown.nameContent,

            function () {

                dropdownHoverTimer = ui.globals.ease * 2;
                clearTimeout(dropdownLeaveTimer);

            });

        // form toggle
        ui.on(document,
            'click',

            '.' + ui.dropdown.target + ' ' + ui.dropdown.nameContentItems + ' > ' + ui.dropdown.nameValueToggleItems,

            function () {

                var p, target, input;

                p = ui.closest(this, '.' + ui.dropdown.target)[0];

                target = ui.find('.' + ui.dropdown.nameBtn + ' > .' + ui.dropdown.nameValueToggle, p)[0];
                target.innerHTML = '';
                target.insertAdjacentHTML('beforeend', this.innerHTML);

                input = ui.find('input', target)[0];
                if (input !== undefined) {
                    input.parentNode.removeChild(input);
                }

                ui.removeClass(ui.find('.' + ui.dropdown.nameValueToggleSelected, p), ui.dropdown.nameValueToggleSelected);
                ui.addClass(this.parentNode, ui.dropdown.nameValueToggleSelected);

            });

        // close
        ui.on(document,
            'mouseleave',

            '.' + ui.dropdown.target + '.' + ui.dropdown.nameHover,

            function () {

                clearTimeout(dropdownLeaveTimer);
                clearTimeout(dropdownOpenTimer);

                dropdownLeaveTimer = setTimeout(function () {
                    dropdownClose();
                }, ui.globals.ease * 2);

            });

        ui.on(document,
            'mouseup',
            '.' + ui.dropdown.target + ':not(.' + ui.dropdown.nameNav + ') ' + ui.dropdown.nameContentItems,

            function () {

                clearTimeout(dropdownLeaveTimer);
                clearTimeout(dropdownOpenTimer);

                dropdownClose();

            });

        // select dropdown fix
        selectOpened = false;
        selectInContent = ui.find('.' + ui.dropdown.target + ' .' + ui.dropdown.nameContent + ' select');

        ui.on(document,
            'focus',
            selectInContent,

            function () { selectOpened = true; });

        ui.on(document,
            'blur',
            selectInContent,

            function () { selectOpened = false; });

        ui.on(document,
            'keyup',
            selectInContent,

            function (e) {

                if (e.keyCode == 27) {
                    selectOpened = false;
                }

            });

    };

    // Loaders
    ui.onload(ui.dropdown.Start);
    ui.on(window, 'resize', dropdownClose);

}());
