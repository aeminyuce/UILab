/*
 Modal JS
 Modal JS requires Events JS
*/

var modal = {

    classes: 'rounded shadow-lg',
    closeIcon: 'icon icon-xxs icon-remove'

};

(function () {

    'use strict';
    /*globals window, document, selector, events, navigator, setTimeout */

    var
        mobile,
        pageYPosition,

        re = new RegExp('\\s+\\s'),
        rex = new RegExp('^\\s|\\s+$');

    modal.Start = function () {

        modal.close = function () {

            var win, bg;

            win = selector('.modal-win.show');
            if (win.length === 0) { return; }

            events.each(win, function () {
                events.removeClass(this, 'show-ease');
            });

            setTimeout(function () {

                events.each(win, function () {
                    events.removeClass(this, 'show');
                });

                bg = selector('.modal-bg');
                events.removeClass(bg, 'open-ease');

                events.removeClass(document, 'modal-bg-opened');
                if (mobile) { window.scrollTo(0, pageYPosition); }

                setTimeout(function () {
                    events.removeClass(bg, 'open');
                }, 150);

            }, 150);

        };

        modal.open = function (set) {

            var styles, closeBtn, nonClosable, createdBefore, created, temp, size, sizeArr, bg, html, win, content;

            if (set === undefined) { return; }
            if (set.source === undefined) { return; }

            // hide opened modal windows and prevent multiple modal windows
            modal.close();

            if (navigator.userAgent.toLowerCase().indexOf('mobile') > -1) { // detecting mobile
                mobile = true;
            }
            if (mobile) {
                pageYPosition = window.pageYOffset; // get current scroll-y position
            }

            // check closable
            nonClosable = false;

            if (set.closable !== undefined) {
                if (!set.closable) { nonClosable = true; }
            }

            // get source
            createdBefore = false;

            if (set.type === undefined) { // inner sources

                // check the modal created before
                set.source = selector(set.source);
                if (set.source[0] === undefined) { return; }

                created = events.closest(set.source, '.modal-win');

                if (created.length > 0) {

                    events.addClass(created, 'active');
                    win = selector('.modal-win.active')[0];

                    createdBefore = true;

                } else {

                    temp = document.createDocumentFragment();

                    events.each(set.source, function (i) {
                        temp.appendChild(set.source[i]);
                    });

                    set.source = temp;

                }

            }

            if (!createdBefore) {

                // set modal size
                size = 'md';
                if (set.size !== undefined) {

                    sizeArr = ['lg', 'md', 'sm'];
                    if (sizeArr.indexOf(set.size) < 0) { size = set.size; }

                }

                // create modal
                styles = size + ' ' + modal.classes + ' ease-layout';
                styles = styles.replace(re, ' ').replace(rex, '');

                bg = selector('.modal-bg')[0];

                html = '<div class="modal-win active ' + styles + '"></div>';
                if (bg === undefined) { html += '<div class="modal-bg ease-opacity"></div>'; }

                html = events.parser(html);
                selector('body')[0].insertAdjacentHTML('beforeend', html);

                win = selector('.modal-win.active')[0];
                win.appendChild(set.source);

                // check header and footer availability
                content = selector('.modal', win)[0];

                if (selector('.modal-header', content)[0] !== undefined) {
                    events.addClass(content, 'has-header');
                }

                if (selector('.modal-footer', content)[0] !== undefined) {
                    events.addClass(content, 'has-footer');
                }

            }

            // set closable
            if (nonClosable) {
                events.removeClass(win, 'closable');

            } else {
                events.addClass(win, 'closable');
            }

            // add/remove close button
            if (nonClosable) {

                closeBtn = selector('.close-modal', win)[0];

                if (closeBtn !== undefined) {
                    win.removeChild(closeBtn);
                }

            } else {

                modal.closeIcon = modal.closeIcon.replace(re, ' ').replace(rex, '');

                closeBtn = '<button class="close-modal ease-bg">' +
                                '<i class="' + modal.closeIcon + '"></i>' +
                            '</button>';

                closeBtn = events.parser(closeBtn);
                win.insertAdjacentHTML('afterbegin', closeBtn);                

            }

            // show modal
            bg = selector('.modal-bg');
            events.addClass(bg, 'open');

            setTimeout(function () {

                events.addClass(bg, 'open-ease');
                setTimeout(function () {

                    events.addClass(document, 'modal-bg-opened');
                    events.addClass(win, 'show');

                    setTimeout(function () {

                        events.addClass(win, 'show-ease');
                        events.removeClass(win, 'active');

                    }, 10);

                }, 150);

            }, 10);

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

}());
