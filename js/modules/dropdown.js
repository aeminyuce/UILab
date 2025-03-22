/* dropdown */

import { ui } from './../core/globals.js';
export default () => ui;

ui.dropdown = {

    // targets
    target: 'ui-dropdown',

    // main classnames
    nameMenu: 'ui-dropdown-menu',

    nameHover: 'ui-menu-hover',
    nameMenuTop: 'ui-menu-t',
    nameMenuLeft: 'ui-menu-l',
    nameMenuCenter: 'ui-menu-c',

    nameMenuPosRight: 'ui-menu-pos-r',
    nameMenuPosLeft: 'ui-menu-pos-l',

    nameNav: 'ui-nav',
    nameNavFullHor: 'ui-nav-full-h',

    // outer classnames
    nameBtn: 'ui-btn',
    nameSidebar: 'ui-sidebar',

    // tags
    tagMenuItems: 'li',

    tagValue: 'span',
    tagValueItems: 'label',

    // values
    scrollbarSize: 20,
    menuTopMargin: 1,

    // custom events
    eventClose: 'ui:dropdownClose'

};

(() => {

    let
        dropdownHoverTimer,
        dropdownOpenTimer,

        dropdownLeaveTimer,
        dropdownCloseTimer,

        listStyles,
        selectOpened,
        selectInContent,

        getScrollPos;

    function dropdownClose(innerParent) {

        if (selectOpened) return;

        let that;

        if (innerParent === undefined) that = ui.find('.' + ui.dropdown.target + '.' + ui.globals.nameOpen);
        else that = ui.find('.' + ui.dropdown.target + '.' + ui.globals.nameOpen, innerParent);

        ui.removeClass(that, ui.globals.nameOpenEase);

        clearTimeout(dropdownLeaveTimer);
        dropdownLeaveTimer = setTimeout(() => {

            Array.prototype.forEach.call(that,

                el => {

                    clearTimeout(dropdownCloseTimer);
                    const list = ui.find('.' + ui.dropdown.nameMenu, el)[0];

                    dropdownCloseTimer = setTimeout(() => {

                        if (listStyles === 0) {
                            list.removeAttribute('style');

                        } else {

                            list.style.removeProperty('max-height');

                            list.style.removeProperty('position');
                            list.style.removeProperty('right');
                            list.style.removeProperty('left');

                            list.style.removeProperty('margin-left');
                            list.style.removeProperty('margin-top');

                            list.style.removeProperty('overflow');

                            list.style.removeProperty('transform-origin');
                            list.style.removeProperty('box-shadow');

                        }

                        ui.removeClass(that, ui.dropdown.nameMenuTop + ' ' + ui.globals.nameOpen);

                    }, ui.globals.ease);

                });

        }, 0);

    }

    ui.dropdown.Start = () => {

        function dropdownOpen(e, that) {

            e.preventDefault();
            e.stopPropagation();

            let inner = false;
            let hasInner = false;

            const parent = that.parentNode;

            clearTimeout(dropdownOpenTimer);
            dropdownOpenTimer = setTimeout(() => {

                const innerParent = ui.closest(parent, '.' + ui.dropdown.target)[0];

                if ((ui.hasClass(parent, ui.dropdown.nameMenuPosRight) || ui.hasClass(parent, ui.dropdown.nameMenuPosLeft)) && innerParent !== undefined) {

                    // detecting inner dropdown positions
                    inner = true;
                    dropdownClose(innerParent);

                } else dropdownClose();

                if (ui.find('.' + ui.dropdown.nameMenuPosRight, parent).length > 0 || ui.find('.' + ui.dropdown.nameMenuPosLeft, parent).length > 0) {

                    // detecting dropdown has inner dropdown positions
                    hasInner = true;

                }

                clearTimeout(dropdownOpenTimer);
                ui.addClass(parent, ui.globals.nameOpen);

                dropdownOpenTimer = setTimeout(() => {
                    ui.addClass(parent, ui.globals.nameOpenEase);
                }, dropdownHoverTimer / 6);

                const offset = parent.getBoundingClientRect();
                const list = ui.find('.' + ui.dropdown.nameMenu, parent)[0];

                if (hasInner) {
                    list.style.overflow = 'visible';
                }

                if (ui.closest(that, '.' + ui.dropdown.nameSidebar)[0] === undefined && !ui.hasClass(parent, ui.dropdown.nameNavFullHor)) { // diable all positionings on sidebars and full horizontal navigations

                    listStyles = list.style.length;

                    if (window.innerWidth > ui.globals.sm) { // menu horizontal positioning: active

                        if (ui.hasClass(parent, ui.dropdown.nameMenuLeft) || (!ui.hasClass(parent, ui.dropdown.nameMenuPosLeft) && (offset.left + list.offsetWidth + ui.dropdown.scrollbarSize) > window.innerWidth)) {

                            if (offset.left - (list.offsetWidth - parent.offsetWidth) >= 0) {

                                list.style.right = 0;
                                list.style.left = 'inherit';

                                list.style.transformOrigin = 'top right';

                            }

                        } else if (ui.hasClass(parent, ui.dropdown.nameMenuCenter)) {

                            const alignSize = Math.abs(list.offsetWidth - parent.offsetWidth) / 2;

                            if ((offset.left - alignSize > 0) && (alignSize > 0)) {
                                list.style.marginLeft = -alignSize + 'px';
                            }

                        }

                    } else { // menu horizontal positioning: passive

                        list.style.marginLeft = -(offset.left - (ui.dropdown.scrollbarSize / 2)) + 'px';
                        list.style.width = (window.innerWidth - ui.dropdown.scrollbarSize) + 'px';

                    }

                }

                const setMaxH = function (pos) { // set max-height of list

                    if (pos === 'default') {
                        list.style.maxHeight = window.innerHeight - (offset.top + that.offsetHeight + ui.dropdown.scrollbarSize + ui.dropdown.menuTopMargin) + 'px';

                    } else if (pos === 'top') {
                        list.style.maxHeight = window.innerHeight - (ui.dropdown.scrollbarSize + ui.dropdown.menuTopMargin) + 'px';

                    } else if (pos === 'pos') {
                        list.style.maxHeight = window.innerHeight - (offset.top + ui.dropdown.scrollbarSize) + 'px';
                    }

                };

                if (ui.hasClass(parent, ui.dropdown.nameMenuPosRight)) { // right position menu

                    if (window.innerWidth > ui.globals.sm) { // right positioning: active

                        if (list.offsetWidth > (window.innerWidth - offset.left) - (list.offsetWidth + ui.dropdown.scrollbarSize)) {

                            list.style.top = 'inherit';
                            list.style.left = 'inherit';

                            list.style.marginTop = ui.dropdown.menuTopMargin + 'px';
                            list.style.transformOrigin = 'top left';

                            if (inner) {

                                list.style.position = 'static';
                                list.style.boxShadow = 'none';

                            }

                        }

                        setMaxH('pos');

                    } else { // right positioning: passive

                        setMaxH('default');

                        list.style.top = 'inherit';
                        list.style.left = 'inherit';

                        list.style.marginTop = ui.dropdown.menuTopMargin + 'px';

                    }

                } else if (ui.hasClass(parent, ui.dropdown.nameMenuPosLeft)) { // left position menu

                    if (window.innerWidth > ui.globals.sm) { // left positioning: active

                        if (offset.left - list.offsetWidth < ui.dropdown.scrollbarSize) {

                            list.style.top = 'inherit';
                            list.style.right = 'inherit';

                            list.style.marginTop = ui.dropdown.menuTopMargin + 'px';
                            list.style.transformOrigin = 'top right';

                            if (inner) {

                                list.style.position = 'static';
                                list.style.boxShadow = 'none';

                            }

                        }

                        setMaxH('pos');

                    } else { // left positioning: passive

                        setMaxH('default');

                        list.style.top = 'inherit';
                        list.style.right = 'inherit';

                        list.style.marginTop = ui.dropdown.menuTopMargin + 'px';

                    }

                } else if (offset.top + parseInt(that.offsetHeight + list.offsetHeight) >= window.innerHeight) { // menu vertical positioning

                    if (offset.top - parseInt(that.offsetHeight + list.offsetHeight) + that.offsetHeight > 0) {

                        if (!ui.hasClass(parent, ui.dropdown.nameNavFullHor)) { // add top menu without full horizontal navigations

                            ui.addClass(parent, ui.dropdown.nameMenuTop);
                            list.style.removeProperty('transform-origin');

                        }

                        setMaxH('top');

                    } else setMaxH('default');

                } else setMaxH('default');

            }, dropdownHoverTimer);

            if (e.type === 'click') {

                setTimeout(() => {

                    ui.on(document,
                        'click.' + ui.dropdown.eventClose,

                        function (ev) {

                            const content = ui.closest(ev.target, '.' + ui.dropdown.nameMenu)[0];

                            // prevent for non listing contents
                            if (content !== undefined) {

                                if (ui.closest(content, '.' + ui.dropdown.target)[0] !== undefined) { // check other content classnames
                                    return;
                                }

                            }

                            if (ui.closest(ev.target, '.' + ui.dropdown.target + '.' + ui.dropdown.nameNavFullHor)[0] !== undefined && ev.target.className.split(' ').indexOf(ui.dropdown.nameMenu) === 0) { // check full horizontal navigations
                                return;
                            }

                            if (ev.button !== 2) { // inherited right clicks

                                dropdownClose();
                                ui.off(document, 'click.' + ui.dropdown.eventClose);

                            }

                        });

                }, 0);

            }

        }

        // Event Listeners
        // open
        ui.on(document,
            'click',

            '.' + ui.userAgents.nameDesktop + ' .' + ui.dropdown.target + ':not(.' + ui.dropdown.nameHover + '):not(.' + ui.globals.nameOpenEase + ') > .' + ui.dropdown.nameBtn + ',' +
            '.' + ui.userAgents.nameMobile + ' .' + ui.dropdown.target + ':not(.' + ui.globals.nameOpenEase + ') > .' + ui.globals.nameBtn,

            function (e) {

                dropdownHoverTimer = 0;
                dropdownOpen(e, this);

            });

        ui.on(document,
            'mouseenter',

            '.' + ui.userAgents.nameDesktop + ' .' + ui.dropdown.target + '.' + ui.dropdown.nameHover + ':not(.' + ui.globals.nameOpenEase + ') > .' + ui.dropdown.nameBtn,

            function (e) {

                clearTimeout(dropdownLeaveTimer);
                dropdownHoverTimer = ui.globals.ease * 2;

                dropdownOpen(e, this);

            });

        ui.on(document,
            'mouseenter',

            '.' + ui.userAgents.nameDesktop + ' .' + ui.dropdown.target + '.' + ui.dropdown.nameHover + '.' + ui.globals.nameOpen + ' > .' + ui.dropdown.nameBtn + ',' +
            '.' + ui.userAgents.nameDesktop + ' .' + ui.dropdown.target + '.' + ui.dropdown.nameHover + '.' + ui.globals.nameOpenEase + ' .' + ui.dropdown.nameMenu,

            function () {

                dropdownHoverTimer = ui.globals.ease * 2;
                clearTimeout(dropdownLeaveTimer);

            });

        // form toggle
        ui.on(document,
            'click',

            '.' + ui.dropdown.target + ' ' + ui.dropdown.tagMenuItems + ' > ' + ui.dropdown.tagValueItems,

            function () {

                const parent = ui.closest(this, '.' + ui.dropdown.target)[0];
                const target = ui.find('.' + ui.dropdown.nameBtn + ' > ' + ui.dropdown.tagValue, parent)[0];

                target.innerHTML = '';
                target.insertAdjacentHTML('beforeend', this.innerHTML);

                const input = ui.find('input', target)[0];

                if (input !== undefined) {
                    input.remove();
                }

                ui.removeClass(ui.find('.' + ui.globals.nameSelected, parent), ui.globals.nameSelected);
                ui.addClass(this.parentNode, ui.globals.nameSelected);

            });

        // close
        ui.on(document,
            'mouseleave',

            '.' + ui.dropdown.target + '.' + ui.dropdown.nameHover,

            function () {

                clearTimeout(dropdownLeaveTimer);
                clearTimeout(dropdownOpenTimer);

                dropdownLeaveTimer = setTimeout(() => {

                    const innerParent = ui.closest(this, '.' + ui.dropdown.target)[0];

                    if ((ui.hasClass(this, ui.dropdown.nameMenuPosRight) || ui.hasClass(this, ui.dropdown.nameMenuPosLeft)) && innerParent !== undefined) {
                        dropdownClose(innerParent); // detecting inner dropdown positions

                    } else dropdownClose();

                }, ui.globals.ease * 2);

            });

        ui.on(document,
            'mouseup',

            '.' + ui.dropdown.target + ':not(.' + ui.dropdown.nameNav + ') ' + ui.dropdown.tagMenuItems,

            function () {

                clearTimeout(dropdownLeaveTimer);
                clearTimeout(dropdownOpenTimer);

                dropdownClose();

            });

        // select dropdown fix
        selectOpened = false;
        selectInContent = ui.find('.' + ui.dropdown.target + ' .' + ui.dropdown.nameMenu + ' select');

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

    // loaders
    ui.onload(ui.dropdown.Start);

    ui.on(window,
        'resize',

        () => {

            if (window.innerWidth === getScrollPos) return; // close only horizontal resizing

            dropdownClose();
            getScrollPos = window.innerWidth;

        });

})();
