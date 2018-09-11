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

        list = selector('ul', t[0])[0];
        if (list.getAttribute('style') !== null) {
            list.removeAttribute('style');
        }

        events.removeClass(t, 'submenu-top open');

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
                events.addClass(parent, 'open');

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
                        list[0].style.height = (list.height() - (offset.top + parseInt(btnHeight + subMenuHeight, 10) - screenH) - 15) + 'px';
                    }

                }

                setTimeout(function () {
                    events.addClass(parent, 'open-ease');
                }, 50);

            }, 0); // don not remove zero timer

            if (e.type === 'click') {

                events.on(document, 'click.dropdownClose', function (ev) {

                    if (ev.button !== 2) {
                        dropdownClose();
                        events.off(document, 'click.dropdownClose');
                    }

                });

            }

        }

    }

    // open events
    events.on(document,
        'click',
        '.dropdown:not(.open-hover):not(.open) > .btn',

        function (e) {
            dropdownOpen(e, this);
        });

    events.on(document,
        'mouseenter',
        '.dropdown.open-hover:not(.open) > .btn',

        function (e) {

            clearTimeout(window.dropdownLeaveTimer);
            dropdownOpen(e, this);

        });

    events.on(document,
        'mouseenter',
        'html:not(.mobile) .dropdown.open-hover.open > .btn,html:not(.mobile) .dropdown.open-hover.open ul',

        function () {
            clearTimeout(window.dropdownLeaveTimer);
        });

    //close events
    events.on(document,
        'mouseleave',
        '.dropdown.open-hover.open',

        function () {

            clearTimeout(window.dropdownLeaveTimer);
            window.dropdownLeaveTimer = setTimeout(function () { dropdownClose(); }, 300);

        });

}

/*!loader */
events.onload(function () {

    'use strict';
    dropdownFnc();

});
