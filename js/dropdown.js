/*
 Dropdown JS
 Dropdown JS requires Events JS
*/

/*globals window, document, selector, events, setTimeout, clearTimeout */
var dropdown = {
    windowPositionTarget: ''
};

function dropdownClose() {

    'use strict';

    var t, list;

    t = selector('.dropdown.open');
    events.removeClass(t, 'open-ease');

    setTimeout(function () {

        events.each(t, function () {

            list = selector('ul', this)[0];

            if (list.getAttribute('style') !== null) {
                list.removeAttribute('style');
            }

            events.removeClass(t, 'submenu-top open');

        });

    }, 150);

}

function dropdownFnc() {

    'use strict';

    function dropdownOpen(e, t) {

        e.preventDefault();
        e.stopPropagation();

        var win, list, alignSize, parent, btnHeight, subMenuHeight, offset, screenW, screenH, leftSpace, listWidth, offsetWidth;

        parent = t.parentNode;
        offset = parent.getBoundingClientRect();

        list = selector('ul', parent);

        if (!events.hasClass(parent, 'open')) {

            events.removeClass('.dropdown.open', 'open-ease');
            setTimeout(function () {

                events.removeClass('.dropdown.open', 'open');

                if (dropdown.windowPositionTarget === '') {

                    leftSpace = 0;
                    screenW = window.innerWidth;
                    screenH = window.innerHeight;

                } else {

                    win = selector(dropdown.windowPositionTarget)[0];

                    leftSpace = win.offset().left;
                    screenW = win.offsetWidth;
                    screenH = win.offsetHeight;

                }

                listWidth = list[0].offsetWidth;
                offsetWidth = parent.offsetWidth;

                alignSize = (listWidth - offsetWidth) / 2;

                if (offsetWidth > listWidth) {
                    list[0].style.minWidth = offsetWidth + 'px';
                }

                if (events.hasClass(parent, 'submenu-left') || (offset.left + list[0].style.offsetWidth + 15) > screenW) {

                    if ((offset.left - (listWidth - offsetWidth) - 15) > leftSpace) {
                        list[0].style.right = 0;
                    }

                } else if (events.hasClass(parent, 'submenu-center')) {

                    if ((offset.left - alignSize > leftSpace) && (alignSize > 0)) {
                        list[0].style.marginLeft = -alignSize + 'px';
                    }

                }

                btnHeight = t.offsetHeight;
                subMenuHeight = list[0].offsetHeight;

                if (offset.top + parseInt(btnHeight + subMenuHeight, 10) >= screenH) {

                    if (offset.top - parseInt(btnHeight + subMenuHeight, 10) + btnHeight > 0) {
                        events.addClass(parent, 'submenu-top');

                    } else {
                        list[0].style.height = (list[0].offsetHeight - (offset.top + parseInt(btnHeight + subMenuHeight, 10) - screenH) - 15) + 'px';
                    }

                }

                clearTimeout(window.dropdownOpenTimer);
                window.dropdownOpenTimer = setTimeout(function () {

                    events.addClass(parent, 'open');
                    setTimeout(function () {
                        events.addClass(parent, 'open-ease');
                    }, 50);

                }, 150);

            }, 0); // don not remove zero timer

            if (e.type === 'click') {

                setTimeout(function () {

                    events.on(document, 'click.dropdownClose', function (ev) {

                        if (ev.button !== 2) {
                            dropdownClose();
                            events.off(document, 'click.dropdownClose');
                        }

                    });

                }, 0); // don not remove zero timer

            }

        }

    }

    // open events
    events.on(document,
        'click',
        '.dropdown:not(.open-hover):not(.open) > .btn',

        function (e) { dropdownOpen(e, this); });

    events.on(document,
        'mouseenter',
        '.dropdown.open-hover:not(.open) > .btn',

        function (e) {

            clearTimeout(window.dropdownCloseTimer);
            dropdownOpen(e, this);

        });

    events.on(document,
        'mouseenter',
        'html:not(.mobile) .dropdown.open-hover.open > .btn,html:not(.mobile) .dropdown.open-hover.open ul',

        function () {
            clearTimeout(window.dropdownCloseTimer);
        });

    // form toggle events
    events.on('.dropdown li > label', 'click', function () {

        var p = events.closest(this, '.dropdown');
        selector('.btn > .value-toggle', p).textContent = this.textContent;

        events.removeClass(selector('li.selected', p), 'selected');
        events.addClass(this.parentNode, 'selected');

    });

    //close events
    events.on(document,
        'mouseleave',
        '.dropdown.open-hover',

        function () {

            clearTimeout(window.dropdownCloseTimer);
            clearTimeout(window.dropdownOpenTimer);

            window.dropdownCloseTimer = setTimeout(function () { dropdownClose(); }, 300);

        });

}

/*!loader */
events.onload(function () {

    'use strict';
    dropdownFnc();

});
