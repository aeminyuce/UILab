/*
 UI Dropdown JS
 Requires UI JS
*/

ui.dropdown = {};

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

        that = ui.find('.dropdown.open-ease');
        ui.removeClass(that, 'open-ease');

        clearTimeout(dropdownLeaveTimer);
        dropdownLeaveTimer = setTimeout(function () {

            ui.each(that, function () {

                clearTimeout(dropdownCloseTimer);
                list = ui.find('.content', this)[0];

                dropdownCloseTimer = setTimeout(function () {

                    if (listStyles === 0) {
                        list.removeAttribute('style');

                    } else {

                        list.style.removeProperty('max-height');
                        list.style.removeProperty('right');
                        list.style.removeProperty('margin-left');
                        list.style.removeProperty('transform-origin');

                    }

                    ui.removeClass(that, 'menu-t open');

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
                ui.addClass(parent, 'open');

                dropdownOpenTimer = setTimeout(function () {
                    ui.addClass(parent, 'open-ease');
                }, dropdownHoverTimer / 6);

                offset = parent.getBoundingClientRect();
                list = ui.find('.content', parent)[0];

                if (ui.closest(that, '.mobile-menu')[0] === undefined && !ui.hasClass(parent, 'nav-full-h')) { // diable all positionings on mobile menus and full horizontal navigations

                    listStyles = list.style.length;

                    if (window.innerWidth > ui.globals.sm) { // menu horizontal positioning: active

                        if (ui.hasClass(parent, 'menu-l') || (offset.left + list.offsetWidth + 15) > window.innerWidth) { // 15px: scrollbar size

                            if (offset.left - (list.offsetWidth - parent.offsetWidth) >= 0) {

                                list.style.right = 0;
                                list.style.left = 'inherit';

                                list.style.transformOrigin = 'top right';

                            }

                        } else if (ui.hasClass(parent, 'menu-c')) {

                            alignSize = Math.abs(list.offsetWidth - parent.offsetWidth) / 2;

                            if ((offset.left - alignSize > 0) && (alignSize > 0)) {
                                list.style.marginLeft = -alignSize + 'px';
                            }

                        }

                    } else { // menu horizontal positioning: passive

                        list.style.marginLeft = -(offset.left - 10) + 'px';
                        list.style.width = (window.innerWidth - 20) + 'px';

                    }

                }

                setMaxH = function (pos) { // set max-height of list

                    if (ui.hasClass(list, 'no-scroll')) { return; }

                    if (pos === 'top') {
                        list.style.maxHeight = window.innerHeight - 21 + 'px'; // 21: margin-top + scrollbar size

                    } else {
                        list.style.maxHeight = window.innerHeight - (offset.top + that.offsetHeight + 21) + 'px'; // 21: margin-top + scrollbar size
                    }

                };

                if (offset.top + parseInt(that.offsetHeight + list.offsetHeight, 10) >= window.innerHeight) { // menu vertical positioning

                    if (offset.top - parseInt(that.offsetHeight + list.offsetHeight, 10) + that.offsetHeight > 0) {

                        if (!ui.hasClass(parent, 'nav-full-h')) { // diable all menu-t on full horizontal navigations

                            ui.addClass(parent, 'menu-t');
                            list.style.removeProperty('transform-origin');

                        }

                        setMaxH('top');

                    } else { setMaxH('default'); }

                } else { setMaxH('default'); }

            }, dropdownHoverTimer);

            if (e.type === 'click') {

                setTimeout(function () {

                    ui.on(document, 'click.ui:dropdownClose', function (ev) {

                        var content = ui.closest(ev.target, '.content')[0];

                        // prevent for non listing contents
                        if (content !== undefined) {

                            if (ui.closest(content, '.dropdown')[0] !== undefined) { // check other .content class names
                                return;
                            }

                        }

                        if (ui.closest(ev.target, '.dropdown.nav-full-h')[0] !== undefined && ev.target.className.split(' ').indexOf('content') === 0) { // check full horizontal navigations
                            return;
                        }

                        if (ev.button !== 2) { // inherited right clicks

                            dropdownClose();
                            ui.off(document, 'click.ui:dropdownClose');

                        }

                    });

                }, 0);

            }

        }

        // Event Listeners
        // open
        ui.on(document,
            'click',
            '.desktop .dropdown:not(.open-hover):not(.open-ease) > .btn,html.mobile .dropdown:not(.open-ease) > .btn',

            function (e) {

                dropdownHoverTimer = 0;
                dropdownOpen(e, this);

            });

        ui.on(document,
            'mouseenter',
            '.desktop .dropdown.open-hover:not(.open-ease) > .btn',

            function (e) {

                clearTimeout(dropdownLeaveTimer);
                dropdownHoverTimer = ui.globals.ease * 2;

                dropdownOpen(e, this);

            });

        ui.on(document,
            'mouseenter',
            '.desktop .dropdown.open-hover.open > .btn,.desktop .dropdown.open-hover.open-ease .content',

            function () {

                dropdownHoverTimer = ui.globals.ease * 2;
                clearTimeout(dropdownLeaveTimer);

            });

        // form toggle
        ui.on('.dropdown li > label', 'click', function () {

            var p, target, input;

            p = ui.closest(this, '.dropdown')[0];

            target = ui.find('.btn > .value-toggle', p)[0];
            target.innerHTML = '';
            target.insertAdjacentHTML('beforeend', this.innerHTML);

            input = ui.find('input', target)[0];
            if (input !== undefined) {
                input.parentNode.removeChild(input);
            }

            ui.removeClass(ui.find('.selected', p), 'selected');
            ui.addClass(this.parentNode, 'selected');

        });

        // close
        ui.on(document,
            'mouseleave',
            '.dropdown.open-hover',

            function () {

                clearTimeout(dropdownLeaveTimer);
                clearTimeout(dropdownOpenTimer);

                dropdownLeaveTimer = setTimeout(function () {
                    dropdownClose();
                }, ui.globals.ease * 2);

            });

        ui.on(document,
            'mouseup',
            '.dropdown:not(.nav) li',

            function () {

                clearTimeout(dropdownLeaveTimer);
                clearTimeout(dropdownOpenTimer);

                dropdownClose();

            });

        // select dropdown fix
        selectOpened = false;
        selectInContent = ui.find('.dropdown .content select');

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
