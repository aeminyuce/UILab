/*
 Modal JS
 Modal JS requires Selector Js, Events JS, Ajax JS, User Agents JS
*/

var modal = {

    classes: 'shadow-lg',
    closeIcon: 'icon icon-xs icon-remove'

};

(function () {

    'use strict';
    /*globals window, document, selector, events, setTimeout, ajax, useragents */

    var
        pageYPos,
        re = new RegExp('\\s+\\s'),
        rex = new RegExp('^\\s|\\s+$');

    modal.Start = function () {

        modal.close = function (callback) {

            var win, bg, removeModal;

            win = selector('.modal-win.show');
            if (win.length === 0) { return; }

            events.each(win, function () {
                events.removeClass(this, 'show-ease');
            });

            setTimeout(function () {

                events.each(win, function () {

                    removeModal = selector('.modal-remove', win[0]).length;

                    if (removeModal > 0) { // remove modal window
                        win[0].parentNode.removeChild(win[0]);

                    } else { // hide modal window
                        events.removeClass(this, 'show');
                    }

                });

                bg = selector('.modal-bg');
                events.removeClass(bg, 'open-ease');

                events.removeClass(document, 'modal-bg-opened');
                if (useragents.mobile) { window.scrollTo(0, pageYPos); }

                setTimeout(function () {

                    events.removeClass(bg, 'open');

                    // callback
                    if (callback !== undefined) {

                        if (typeof callback !== 'function') { return; }

                        setTimeout(function () { // wait for closing modal
                            callback.call();
                        }, 150);

                    }

                }, 150);

            }, 150);

        };

        modal.open = function (set) {

            var styles, closeBtn, nonClosable, typeArr, type, created, temp, getSize, size, customSize, sizeArr, bg, html, win, content;

            if (set === undefined) { return; }
            if (set.source === undefined) { return; }

            modal.close(); // hide opened modal windows and prevent multiple modal windows

            if (useragents.mobile) {
                pageYPos = window.pageYOffset; // get current scroll-y position
            }

            // check closable
            nonClosable = false;

            if (set.closable !== undefined) {
                if (!set.closable) { nonClosable = true; }
            }

            // create modal
            function createModal() {

                styles = modal.classes + ' ease-layout';
                styles = styles.replace(re, ' ').replace(rex, '');

                bg = selector('.modal-bg')[0];

                html = '<div class="modal-win';

                if (set.bg !== undefined && set.bg === 'false') {
                    html += ' no-bg';
                }
                
                html += ' active">' +
                            '<div class="modal-content ' + styles + '"></div>' +
                        '</div>';

                if (bg === undefined) { html += '<div class="modal-bg ease-layout"></div>'; }
                selector('body')[0].insertAdjacentHTML('beforeend', html);

                win = selector('.modal-win.active')[0];
                content = selector('.modal-content', win)[0];

            }

            // check header and footer availability
            function checkHeaderFooter() {

                if (selector('.modal-header', content)[0] !== undefined) {
                    events.addClass(content, 'has-header');
                }

                if (selector('.modal-footer', content)[0] !== undefined) {
                    events.addClass(content, 'has-footer');
                }

            }

            // complete modal
            function showModal() {

                // set modal size
                events.removeClass(content, 'lg md sm fullscreen inline');

                content.style.removeProperty('top');
                content.style.removeProperty('left');

                content.style.removeProperty('width');
                content.style.removeProperty('height');
                content.style.removeProperty('min-height');

                if (set.size === undefined) {

                    size = 'md';
                    events.addClass(content, size);

                } else {

                    getSize = function () {

                        size = 'md';

                        sizeArr = ['lg', 'md', 'sm', 'fullscreen', 'inline'];
                        if (sizeArr.indexOf(set.size) > -1) {
                            size = set.size;
                        }

                        events.addClass(content, size);

                    };

                    customSize = set.size.split('x'); // check custom size
                    if (customSize.length === 2) {

                        if (customSize[0].match(/^[0-9]+$/) !== null && customSize[1].match(/^[0-9]+$/) !== null) {

                            content.style.width = customSize[0] + 'px';
                            content.style.height = customSize[1] + 'px';

                        } else { getSize(); }

                    } else { getSize(); }

                }

                // set closable
                if (nonClosable) {
                    events.removeClass(win, 'closable');

                } else {
                    events.addClass(win, 'closable');
                }

                // add/remove close button
                closeBtn = selector('.close-modal', win)[0];

                if (nonClosable) {

                    if (closeBtn !== undefined) {
                        closeBtn.parentNode.removeChild(closeBtn);
                    }

                } else {

                    if (closeBtn === undefined) {

                        modal.closeIcon = modal.closeIcon.replace(re, ' ').replace(rex, '');

                        closeBtn = '<button class="close-modal ease-btn">' +
                                        '<i class="' + modal.closeIcon + '"></i>' +
                                    '</button>';

                        content.insertAdjacentHTML('afterbegin', closeBtn);

                    }

                }

                // show modal
                bg = selector('.modal-bg');
                events.addClass(bg, 'open');

                setTimeout(function () {

                    events.addClass(bg, 'open-ease');
                    setTimeout(function () {

                        events.addClass(document, 'modal-bg-opened');
                        events.addClass(win, 'show');

                        content.style.top = Math.floor((bg[0].offsetHeight - content.offsetHeight) / 2) + 'px';
                        content.style.left = Math.floor((bg[0].offsetWidth - content.offsetWidth) / 2) + 'px';

                        if (size !== undefined && size !== 'fullscreen') { // inherit fixed size && fullscreen

                            content.style.width = content.offsetWidth + 'px';

                            if (selector('.modal', content)[0].offsetHeight > content.offsetHeight) { // large contents has fixed and scrollable height
                                content.style.height = content.offsetHeight + 'px';

                            } else { // small contents has elastic height
                                content.style.minHeight = content.offsetHeight + 'px';
                            }

                        }

                        setTimeout(function () {

                            events.addClass(win, 'show-ease');
                            events.removeClass(win, 'active');

                            // callback
                            if (set.callback !== undefined) {

                                setTimeout(function () { // wait for modal dom is ready
                                    set.callback.call(content);
                                }, 300);

                            }

                        }, 10);

                    }, 150);

                }, 10);

            }

            // get source
            if (set.type === undefined) { // inner sources

                // check the modal created before
                set.source = selector(set.source);
                if (set.source[0] === undefined) { return; }

                created = events.closest(set.source, '.modal-win');
                if (created.length > 0) { // modal created before

                    events.addClass(created, 'active');
                    win = selector('.modal-win.active')[0];

                    content = selector('.modal-content', win)[0];
                    showModal();

                } else { // create modal

                    // move source
                    temp = document.createDocumentFragment();

                    events.each(set.source, function (i) {
                        temp.appendChild(set.source[i]);
                    });

                    createModal();
                    content.appendChild(temp);

                    checkHeaderFooter();
                    showModal();

                }

            } else { // other source types

                typeArr = ['ajax', 'iframe'];

                if (typeArr.indexOf(set.type) > -1) {
                    type = set.type;
                }

                if (type === 'iframe') { // iframe sources

                    temp = '<iframe class="modal-iframe modal-remove" src="' + set.source + '" frameborder="0" allowfullscreen></iframe>';

                    createModal();
                    content.insertAdjacentHTML('beforeend', temp);

                    showModal();

                } else if (type === 'ajax') { // ajax sources

                    ajax({
                        url : set.source,
                        callback: function (status, response) {

                            if (status === 'success') {

                                temp = '<div class="modal modal-remove">' + response + '</div>';

                                createModal();
                                content.insertAdjacentHTML('beforeend', temp);

                                checkHeaderFooter();
                                showModal();

                            }

                        }
                    });

                }

            }

            return false;

        };

        // Events
        function userClose() {

            var p = selector('.modal-win.show.closable')[0];
            if (p !== undefined) { modal.close(); }

        }

        events.on(document, 'click', '.close-modal', modal.close);
        events.on(document, 'click', '.modal-bg', userClose);

        events.on(document, 'keydown', function (e) {
            if (e.keyCode === 27) { userClose(); } // esc
        });

    };

    // Loaders
    events.onload(modal.Start);
    events.on(window, 'resize', function () {

        var win, bg;

        win = selector('.modal-win.show .modal-content:not(.fullscreen)')[0];
        if (win !== undefined) {

            bg = selector('.modal-bg')[0];

            win.style.top = Math.floor((bg.offsetHeight - win.offsetHeight) / 2) + 'px';
            win.style.left = Math.floor((bg.offsetWidth - win.offsetWidth) / 2) + 'px';

        }

    });

}());
