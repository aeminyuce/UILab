/*
 Dropdown JS
 Dropdown JS requires Selector Js, Events JS
*/

var dropdown = {};

(function () {

    'use strict';
    /*globals window, document, selector, events, setTimeout, clearTimeout , screen*/

    var
        dropdownOpenTimer,
        dropdownCloseTimer,
        listStyles;

    function dropdownCloseFnc() {

        var t, list;

        t = selector('.dropdown.open');
        events.removeClass(t, 'open-ease');

        setTimeout(function () {

            events.each(t, function () {

                list = selector('.content', this)[0];

                if (listStyles === 0) {
                    list.removeAttribute('style');

                } else {

                    list.style.removeProperty('min-width');
                    list.style.removeProperty('right');
                    list.style.removeProperty('margin-left');
                    list.style.removeProperty('height');
                    list.style.removeProperty('transform-origin');

                }

                events.removeClass(t, 'submenu-top open');

            });

        }, 150);

    }

    dropdown.Start = function () {

        function dropdownOpen(e, t) {

            e.preventDefault();
            e.stopPropagation();

            var list, alignSize, parent, btnHeight, subMenuHeight, offset, listWidth;

            parent = t.parentNode;
            if (!events.hasClass(parent, 'open')) {

                events.removeClass('.dropdown.open', 'open-ease');
                setTimeout(function () {

                    events.removeClass('.dropdown.open', 'open');

                    clearTimeout(dropdownOpenTimer);
                    events.addClass(parent, 'open');

                    dropdownOpenTimer = setTimeout(function () {
                        events.addClass(parent, 'open-ease');
                    }, 50);

                    offset = parent.getBoundingClientRect();
                    list = selector('.content', parent)[0];

                    if (screen.width < 481 && !events.hasClass(list, 'has-grid')) {
                        list.style.minWidth = parent.offsetWidth + 'px';
                    }

                    listStyles = list.style.length;
                    listWidth = list.offsetWidth;

                    if (events.hasClass(parent, 'submenu-left') || (offset.left + listWidth + 15) > window.innerWidth) { // 15px: scrollbar size

                        if ((offset.left - (listWidth - parent.offsetWidth)) >= 0) {

                            list.style.right = 0;
                            list.style.left = 'inherit';
                            
                            list.style.transformOrigin = 'top right';
                            
                        }

                    } else if (events.hasClass(parent, 'submenu-center')) {

                        alignSize = Math.abs(listWidth - parent.offsetWidth) / 2;

                        if ((offset.left - alignSize > 0) && (alignSize > 0)) {
                            list.style.marginLeft = -alignSize + 'px';
                        }

                    }

                    btnHeight = t.offsetHeight;
                    subMenuHeight = list.offsetHeight;

                    if (offset.top + parseInt(btnHeight + subMenuHeight, 10) >= window.innerHeight) {

                        if (offset.top - parseInt(btnHeight + subMenuHeight, 10) + btnHeight > 0) {

                            events.addClass(parent, 'submenu-top');
                            list.style.removeProperty('transform-origin');
                        }

                    }

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

                                dropdownCloseFnc();
                                events.off(document, 'click.dropdownClose');

                            }

                        });

                    }, 0); // do not remove zero timer

                }

            }

        }

        // Events
        // open events
        events.on(document,
            'click',
            '.dropdown:not(.open-hover):not(.open) > .btn',

            function (e) { dropdownOpen(e, this); });

        events.on(document,
            'mouseenter',
            '.dropdown.open-hover:not(.open) > .btn',

            function (e) {

                clearTimeout(dropdownCloseTimer);
                dropdownOpen(e, this);

            });

        events.on(document,
            'mouseenter',
            'html:not(.mobile) .dropdown.open-hover.open > .btn,html:not(.mobile) .dropdown.open-hover.open .content',

            function () {
                clearTimeout(dropdownCloseTimer);
            });

        // form toggle events
        events.on('.dropdown li > label', 'click', function () {

            var p = events.closest(this, '.dropdown');
            selector('.btn > .value-toggle', p).textContent = this.textContent;

            events.removeClass(selector('li.selected', p), 'selected');
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
                    dropdownCloseFnc();
                }, 300);

            });

        events.on('.dropdown li', 'mouseup', function () {

            clearTimeout(dropdownCloseTimer);
            clearTimeout(dropdownOpenTimer);

            dropdownCloseFnc();

        });

    };

    // Loaders
    events.onload(dropdown.Start);

}());
