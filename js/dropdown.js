/*
 Dropdown JS
 Dropdown JS requires Selector Js, Events JS
*/

var dropdown = {};

(function () {

    'use strict';
    /*globals window, document, selector, events, setTimeout, clearTimeout */

    var
        dropdownOpenTimer,
        dropdownCloseTimer,
        listStyles,
        selectOpened,
        selectInContent;

    function dropdownClose() {

        if (selectOpened) { return; }

        var that, list;

        that = selector('.dropdown.open');
        events.removeClass(that, 'open-ease');

        clearTimeout(dropdownCloseTimer);
        dropdownCloseTimer = setTimeout(function () {

            events.each(that, function () {

                list = selector('.content', this)[0];

                if (listStyles === 0) {
                    list.removeAttribute('style');

                } else {

                    list.style.removeProperty('max-height');
                    list.style.removeProperty('right');
                    list.style.removeProperty('margin-left');
                    list.style.removeProperty('transform-origin');

                }

                events.removeClass(that, 'menu-t open');

            });

        }, 300);

    }

    dropdown.Start = function () {

        function dropdownOpen(e, that) {

            e.preventDefault();
            e.stopPropagation();

            var list, alignSize, parent, offset, setMaxH;

            dropdownClose();
            parent = that.parentNode;

            clearTimeout(dropdownOpenTimer);
            dropdownOpenTimer = setTimeout(function () {

                clearTimeout(dropdownOpenTimer);
                events.addClass(parent, 'open');

                dropdownOpenTimer = setTimeout(function () {
                    events.addClass(parent, 'open-ease');
                }, 50);

                offset = parent.getBoundingClientRect();
                list = selector('.content', parent)[0];

                if (events.closest(that, '.mobile-menu')[0] === undefined && !events.hasClass(parent, 'nav-full-h')) { // diable all positionings on mobile menus and full horizontal navigations

                    listStyles = list.style.length;

                    if (window.innerWidth > 767) { // menu horizontal positioning: active

                        if (events.hasClass(parent, 'menu-l') || (offset.left + list.offsetWidth + 15) > window.innerWidth) { // 15px: scrollbar size

                            if (offset.left - (list.offsetWidth - parent.offsetWidth) >= 0) {

                                list.style.right = 0;
                                list.style.left = 'inherit';

                                list.style.transformOrigin = 'top right';

                            }

                        } else if (events.hasClass(parent, 'menu-c')) {

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

                    if (events.hasClass(list, 'no-scroll')) { return; }

                    if (pos === 'top') {
                        list.style.maxHeight = window.innerHeight - 21 + 'px'; // 21: margin-top + scrollbar size

                    } else {
                        list.style.maxHeight = window.innerHeight - (offset.top + that.offsetHeight + 21) + 'px'; // 21: margin-top + scrollbar size
                    }

                };

                if (offset.top + parseInt(that.offsetHeight + list.offsetHeight, 10) >= window.innerHeight) { // menu vertical positioning

                    if (offset.top - parseInt(that.offsetHeight + list.offsetHeight, 10) + that.offsetHeight > 0) {

                        events.addClass(parent, 'menu-t');
                        list.style.removeProperty('transform-origin');

                        setMaxH('top');

                    } else { setMaxH('default'); }

                } else { setMaxH('default'); }

            }, 0); // do not remove zero timer

            if (e.type === 'click') {

                setTimeout(function () {

                    events.on(document, 'click.dropdownClose', function (ev) {

                        var content = events.closest(ev.target, '.content')[0];

                        // prevent for non listing contents
                        if (content !== undefined) {
                            if (events.closest(content, '.dropdown')[0] !== undefined) { // check other .content class names
                                return;
                            }
                        }

                        if (ev.button !== 2) { // inherited right clicks

                            dropdownClose();
                            events.off(document, 'click.dropdownClose');

                        }

                    });

                }, 0); // do not remove zero timer

            }

        }

        // Events
        // open events
        events.on(document,
            'click',
            '.dropdown:not(.open-hover):not(.open-ease) > .btn',

            function (e) { dropdownOpen(e, this); });

        events.on(document,
            'mouseenter',
            '.dropdown.open-hover:not(.open-ease) > .btn',

            function (e) {

                clearTimeout(dropdownCloseTimer);
                dropdownOpen(e, this);

            });

        events.on(document,
            'mouseenter',
            'html:not(.mobile) .dropdown.open-hover.open > .btn,html:not(.mobile) .dropdown.open-hover.open-ease .content',

            function () {
                clearTimeout(dropdownCloseTimer);
            });

        // form toggle events
        events.on('.dropdown li > label', 'click', function () {

            var p, target, input;

            p = events.closest(this, '.dropdown')[0];

            target = selector('.btn > .value-toggle', p)[0];
            target.innerHTML = '';
            target.insertAdjacentHTML('beforeend', this.innerHTML);

            input = selector('input', target)[0];
            if (input !== undefined) {
                input.parentNode.removeChild(input);
            }

            events.removeClass(selector('.selected', p), 'selected');
            events.addClass(this.parentNode, 'selected');

        });

        // close events
        events.on(document,
            'mouseleave',
            '.dropdown.open-hover',

            function () {

                clearTimeout(dropdownCloseTimer);
                clearTimeout(dropdownOpenTimer);

                dropdownCloseTimer = setTimeout(function () {
                    dropdownClose();
                }, 300);

            });

        events.on(document,
            'mouseup',
            '.dropdown:not(.nav) li',

            function () {

                clearTimeout(dropdownCloseTimer);
                clearTimeout(dropdownOpenTimer);

                dropdownClose();

            });

        // select dropdown fix
        selectOpened = false;
        selectInContent = selector('.dropdown .content select');

        events.on(document,
            'focus',
            selectInContent,

            function () { selectOpened = true; });

        events.on(document,
            'blur',
            selectInContent,

            function () { selectOpened = false; });

        events.on(document,
            'keyup',
            selectInContent,

            function (e) {

                if (e.keyCode == 27) {
                    selectOpened = false;
                }

            });

    };

    // Loaders
    events.onload(dropdown.Start);
    events.on(window, 'resize', dropdownClose);

}());
