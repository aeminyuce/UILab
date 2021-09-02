/*
 UI Modal JS
 Requires UI JS
*/

ui.modal = {

    classes: 'shadow-lg',
    closeIcon: 'remove',

    contentMaxHeight: '92%',

    contentMinHeightLg: '300',
    contentMinHeightMd: '240',
    contentMinHeightSm: '120'

};

(function () {

    'use strict';
    /*globals window, document, ui, setTimeout */

    var pageYPos;

    function modalResizer() {

        var win, type, container, bg, openSize, userDefined, customW, customH, minHeight;

        win = ui.find('.modal-win.show .modal-content:not(.fullscreen)')[0];
        if (win !== undefined) {

            bg = ui.find('.modal-bg')[0];

            openSize = win.getAttribute('data-ui-openSize');
            if (openSize !== null) {

                type = 'md';
                userDefined = ui.globals.md + 1; // md, inline-modal

                openSize = Number(openSize);

                if (window.innerWidth < openSize) {
                    win.style.width = (window.innerWidth - 30) + 'px';

                } else {

                    if (ui.hasClass(win, 'lg')) {

                        type = 'lg';
                        userDefined = ui.globals.lg; // lg

                    } else if (ui.hasClass(win, 'sm')) {

                        type = 'sm';
                        userDefined = ui.globals.md; // sm
                    }

                    if (window.innerWidth > userDefined) {
                        win.style.width = userDefined + 'px';

                    } else {
                        win.style.width = (window.innerWidth - 30) + 'px';
                    }
                }

                minHeight = ui.modal.contentMinHeightMd;

                if (type === 'lg') {
                    minHeight = ui.modal.contentMinHeightLg;

                } else if (type === 'sm') {
                    minHeight = ui.modal.contentMinHeightSm;
                }

                container = ui.find('.modal-container', win)[0];
                win.style.removeProperty('height');

                if (container.offsetHeight < minHeight) {
                    win.style.height = ui.modal.contentMaxHeight;

                } else {
                    win.style.height = win.offsetHeight + 'px';
                }

            }

            customW = win.getAttribute('data-ui-customW');
            if (customW !== null) {

                customH = win.getAttribute('data-ui-customH');
                if (customH !== null) {

                    customW = Number(customW);
                    customH = Number(customH);

                    if (window.innerWidth > customW) {

                        win.style.width = customW + 'px';
                        win.style.height = customH + 'px';

                    } else {

                        win.style.width = (window.innerWidth - 30) + 'px';
                        win.style.height = (window.innerWidth - 30) / (customW / customH) + 'px';

                    }

                }
            }

            win.style.top = Math.floor((bg.offsetHeight - win.offsetHeight) / 2) + 'px';
            win.style.left = Math.floor((bg.offsetWidth - win.offsetWidth) / 2) + 'px';

        }

    }

    ui.modal.Start = function () {

        ui.modal.close = function (callback) {

            var win, bg, removeModal;

            win = ui.find('.modal-win.show');
            if (win.length === 0) { return; }

            ui.each(win, function () {
                ui.removeClass(this, 'show-ease');
            });

            setTimeout(function () {

                ui.each(win, function () {

                    removeModal = ui.find('.modal-remove', win[0]).length;

                    if (removeModal > 0) { // remove modal window
                        win[0].parentNode.removeChild(win[0]);

                    } else { // hide modal window
                        ui.removeClass(this, 'show');
                    }

                });

                bg = ui.find('.modal-bg');
                ui.removeClass(bg, 'open-ease');

                ui.removeClass(document, 'modal-opened');

                if (ui.userAgents.mobile) {
                    window.scrollTo(0, pageYPos);
                }

                setTimeout(function () {

                    ui.removeClass(bg, 'open');

                    // callback
                    if (callback !== undefined) {

                        if (typeof callback !== 'function') { return; }

                        setTimeout(function () { // wait for closing modal
                            callback.call();
                        }, ui.globals.ease);

                    }

                }, ui.globals.ease);

            }, ui.globals.ease);

        };

        ui.modal.open = function (props) {

            /*
            props list:
                props.source
                props.size
                props.type
                props.bg
                props.closable
                props.callback
            */

            var styles, closeBtn, nonClosable, typeArr, type, created, temp, getSize, size, customSize, sizeArr, forms, bg, html, win, content;

            if (props === undefined) { return; }
            if (props.source === undefined) { return; }

            ui.modal.close(); // hide opened modal windows and prevent multiple modal windows

            if (ui.userAgents.mobile) {
                pageYPos = window.pageYOffset; // get current scroll-y position
            }

            // check closable
            nonClosable = false;

            if (props.closable !== undefined) {
                if (!props.closable) { nonClosable = true; }
            }

            // create modal
            function createModal() {

                var re, rex;

                re = new RegExp('\\s+\\s');
                rex = new RegExp('^\\s|\\s+$');

                styles = ui.modal.classes + ' ease-layout';
                styles = styles.replace(re, ' ').replace(rex, '');

                bg = ui.find('.modal-bg')[0];

                html = '<div class="modal-win';

                if (props.bg !== undefined && props.bg === 'false') {
                    html += ' no-bg';
                }

                html += ' active">' +
                            '<div class="modal-content ' + styles + '"></div>' +
                        '</div>';

                if (bg === undefined) { html += '<div class="modal-bg ease-layout"></div>'; }
                ui.find('body')[0].insertAdjacentHTML('beforeend', html);

                win = ui.find('.modal-win.active')[0];
                content = ui.find('.modal-content', win)[0];

            }

            // check header and footer availability
            function checkHeaderFooter() {

                if (ui.find('.modal-header', content)[0] !== undefined) {
                    ui.addClass(content, 'has-header');
                }

                if (ui.find('.modal-footer', content)[0] !== undefined) {
                    ui.addClass(content, 'has-footer');
                }

            }

            // complete modal
            function showModal() {

                // set modal size
                ui.removeClass(content, 'lg md sm fullscreen inline-modal');

                content.style.removeProperty('top');
                content.style.removeProperty('left');

                content.style.removeProperty('width');
                content.style.removeProperty('height');

                content.removeAttribute('data-ui-openSize');

                content.removeAttribute('data-ui-customW');
                content.removeAttribute('data-ui-customH');

                if (props.size === undefined) {

                    size = 'md';
                    ui.addClass(content, size);

                } else {

                    getSize = function () {

                        size = 'md';
                        sizeArr = ['lg', 'md', 'sm', 'fullscreen', 'inline-modal'];

                        if (sizeArr.indexOf(props.size) > -1) {
                            size = props.size;
                        }

                        ui.addClass(content, size);

                    };

                    customSize = props.size.split('x'); // check custom size
                    if (customSize.length === 2) {

                        if (customSize[0].match(/^[0-9]+$/) !== null && customSize[1].match(/^[0-9]+$/) !== null) {

                            content.style.width = customSize[0] + 'px';
                            content.style.height = customSize[1] + 'px';

                            content.setAttribute('data-ui-customW', customSize[0]);
                            content.setAttribute('data-ui-customH', customSize[1]);

                        } else { getSize(); }

                    } else { getSize(); }

                }

                // set closable
                if (nonClosable) {
                    ui.removeClass(win, 'closable');

                } else {
                    ui.addClass(win, 'closable');
                }

                // add/remove close button
                closeBtn = ui.find('.close-modal', win)[0];

                if (nonClosable) {

                    if (closeBtn !== undefined) {
                        closeBtn.parentNode.removeChild(closeBtn);
                    }

                } else {

                    if (closeBtn === undefined) {

                        closeBtn = '<button class="close-modal ease-btn">' +
                                        '<svg class="icon"><use href="#' + ui.modal.closeIcon + '"/></svg>' +
                                    '</button>';

                        content.insertAdjacentHTML('afterbegin', closeBtn);

                    }

                }

                // showing modal
                ui.addClass(document, 'modal-opened');

                bg = ui.find('.modal-bg');
                ui.addClass(bg, 'open');

                setTimeout(function () {

                    ui.addClass(bg, 'open-ease');
                    setTimeout(function () {

                        ui.addClass(win, 'show');

                        content.style.top = Math.floor((bg[0].offsetHeight - content.offsetHeight) / 2) + 'px';
                        content.style.left = Math.floor((bg[0].offsetWidth - content.offsetWidth) / 2) + 'px';

                        if (size !== undefined && size !== 'fullscreen') { // inherit fixed size && fullscreen

                            content.style.width = content.offsetWidth + 'px';
                            content.setAttribute('data-ui-openSize', content.offsetWidth);
                            content.style.height = content.offsetHeight + 'px';

                        }

                        setTimeout(function () {

                            ui.addClass(win, 'show-ease');
                            ui.removeClass(win, 'active');

                            modalResizer();
                            ui.trigger(document, ui.globals.eventDomChange); // set custom event

                            // callback
                            if (props.callback !== undefined) {

                                setTimeout(function () { // wait for modal dom is ready
                                    props.callback.call(content);
                                }, ui.globals.ease * 2);

                            }

                        }, 10);

                    }, ui.globals.ease);

                }, 10);

            }

            // get source
            if (props.type === undefined) { // inner sources

                // check the modal created before
                props.source = ui.find(props.source);
                if (props.source[0] === undefined) { return; }

                created = ui.closest(props.source, '.modal-win');
                if (created.length > 0) { // modal created before

                    ui.addClass(created, 'active');
                    win = ui.find('.modal-win.active')[0];

                    content = ui.find('.modal-content', win)[0];
                    showModal();

                    // reset forms
                    forms = ui.find('form', content);
                    ui.each(forms, function () { this.reset(); });

                } else { // create modal

                    // move source
                    temp = document.createDocumentFragment();

                    ui.each(props.source, function (i) {
                        temp.appendChild(props.source[i]);
                    });

                    createModal();
                    content.appendChild(temp);

                    checkHeaderFooter();
                    showModal();

                }

            } else { // other source types

                typeArr = ['ajax', 'iframe'];

                if (typeArr.indexOf(props.type) > -1) {
                    type = props.type;
                }

                if (type === 'iframe') { // iframe sources

                    temp = '<iframe class="modal-iframe modal-remove" src="' + props.source + '" frameborder="0" allowfullscreen></iframe>';

                    createModal();
                    content.insertAdjacentHTML('beforeend', temp);

                    showModal();

                } else if (type === 'ajax') { // ajax sources

                    ui.ajax({

                        url : props.source,
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

        // Event Listeners
        function userClose() {

            var p = ui.find('.modal-win.show.closable')[0];
            if (p !== undefined) { ui.modal.close(); }

        }

        ui.on(document, 'click', '.close-modal', ui.modal.close);
        ui.on(document, 'click', '.modal-bg', userClose);

        ui.on(document, 'keydown', function (e) {
            if (e.keyCode === 27) { userClose(); } // esc
        });

    };

    // Loaders
    ui.onload(ui.modal.Start);
    ui.on(window, 'resize', modalResizer);

}());
