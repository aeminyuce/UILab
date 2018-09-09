/*
 Dropdown JS
 Dropdown JS requires Events JS
*/

/*globals window, document, selector, events, navigator, setTimeout, clearTimeout */
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

        var ua, win, list, alignSize, parent, btnHeight, subMenuHeight, offset, screenW, screenH, leftSpace;

        leftSpace = 0;
        parent = t.parentNode;

        if (!events.hasClass(parent, 'open')) {

            ua = navigator.userAgent.toLowerCase();

            list = selector('ul', parent);
            offset = parent.getBoundingClientRect();
            alignSize = (Math.ceil(list[0].offsetWidth - parent.offsetWidth) / 2);

            if (dropdown.windowPositionTarget === '') {

                if (ua.indexOf('edge') > -1 || (ua.indexOf('mobile') > -1 && ua.indexOf('apple') > -1)) {
                    win = document.body; // edge and ios devices returns document.documentElement = 0

                } else { win = document.documentElement; }

                leftSpace = 0;
                screenW = window.innerWidth;
                screenH = window.innerHeight;

            } else {

                win = selector(dropdown.windowPositionTarget)[0];

                leftSpace = win.offset().left;
                screenW = win.offsetWidth;
                screenH = win.offsetHeight;

            }

            if (parent.offsetWidth > list[0].offsetWidth) {
                list[0].style.minWidth = parent.offsetWidth + 'px';
            }

            if (events.hasClass(parent, 'submenu-left') || (offset.left + list[0].style.offsetWidth + 15) > screenW) {

                if ((offset.left - (list[0].offsetWidth - parent.offsetWidth) - 15) < leftSpace) {
                    list[0].style.marginLeft =  -alignSize + 'px';

                } else { list[0].style.right = 0; }

            } else if (events.hasClass(parent, 'submenu-center')) {

                if (offset.left - alignSize > leftSpace) {
                    list[0].style.marginLeft = alignSize + 'px';
                }

            }

            events.removeClass('.dropdown.open', 'open-ease');
            setTimeout(function () {

                events.removeClass('.dropdown.open', 'open');
                events.addClass(parent, 'open');

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

                events.on(document, 'click.dropdownclose', function (ev) {

                    if (ev.button !== 2) {
                        dropdownClose();
                        events.off(document, 'click.dropdownclose');
                    }

                });

            }

        }

    }

    // open events
    events.on(document, 'click', '.dropdown:not(.open-hover):not(.open) > .btn,.mobile .open-hover:not(.open) > .btn', function (e) {
        dropdownOpen(e, this);
    });

    events.on(document, 'mouseenter', 'html:not(.mobile) .dropdown.open-hover > .btn,html:not(.mobile) .dropdown.open-hover > ul', function () {
        clearTimeout(window.dropdownLeaveTimer);
    });

    events.on(document, 'mouseenter', 'html:not(.mobile) .dropdown.open-hover:not(.open) > .btn', function (e) {

        var that = this;
        clearTimeout(window.dropdownHoverTimer);

        window.dropdownHoverTimer = setTimeout(function () {
            dropdownOpen(e, that);
        }, 150);

    });

    //close events
    events.on(document, 'mouseleave', 'html:not(.mobile) .dropdown.open-hover', function () {
        clearTimeout(window.dropdownHoverTimer);
    });

    events.on(document, 'mouseleave', 'html:not(.mobile) .dropdown.open-hover > .btn,html:not(.mobile) .dropdown.open-hover > ul', function () {

        clearTimeout(window.dropdownLeaveTimer);
        window.dropdownLeaveTimer = setTimeout(dropdownClose, 300);

    });

}

/*!loader */
events.onload(function () {

    'use strict';
    dropdownFnc();

});
