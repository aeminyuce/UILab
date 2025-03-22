/* modal */

import { ui } from './../core/globals.js';
export default () => ui;

ui.modal = {

    // targets
    target: 'ui-modal',
    targetHolder: 'body',
    targetWin: 'ui-modal-win',
    targetBg: 'ui-modal-bg',

    // main classnames
    nameModalOpened: 'ui-modal-opened',
    nameWinNoBG: 'ui-modal-no-bg',

    nameContent: 'ui-modal-content',
    nameHasHeader: 'ui-modal-has-header',
    nameHasFooter: 'ui-modal-has-footer',

    nameHeader: 'ui-modal-header',
    nameContainer: 'ui-modal-container',
    nameFooter: 'ui-modal-footer',

    nameClosable: 'ui-modal-closable',
    nameRemovable: 'ui-modal-removable',
    nameIframe: 'ui-modal-iframe',

    nameModalClose: 'ui-modal-close',

    nameSizePrefix: 'ui-modal-',
    nameLG: 'ui-modal-lg',
    nameMD: 'ui-modal-md',
    nameSM: 'ui-modal-sm',

    nameInline: 'ui-modal-inline',
    nameFullscreen: 'ui-modal-fullscreen',

    // styling classnames
    stylesContent: 'ui-shadow-lg ui-ease-layout',
    stylesCloseBtn: 'ui-ease-btn',
    stylesModalBg: 'ui-ease-layout',

    // values
    winMargin: 15,

    sizeLG: 'lg',
    sizeMD: 'md',
    sizeSM: 'sm',

    sizeInline: 'inline',
    sizeFullscreen: 'fullscreen',

    typeAjax: 'ajax',
    typeIframe: 'iframe',

    heightMax: '92%',
    heightMinLG: '300',
    heightMinMD: '240',
    heightMinSM: '120',

    // data attributes
    dataCustomW: 'data-ui-customW',
    dataCustomH: 'data-ui-customH',
    dataOpenSize: 'data-ui-openSize'

};

(() => {

    var pageYPos

    ui.modal.resizer = () => {

        var win, type, container, bg, openSize, userDefined, customW, customH, minHeight;

        win = ui.find('.' + ui.modal.targetWin + '.' + ui.globals.nameShow + ' .' + ui.modal.nameContent + ':not(.' + ui.modal.nameFullscreen + ')')[0];
        if (win !== undefined) {

            bg = ui.find('.' + ui.modal.targetBg)[0];

            openSize = win.getAttribute(ui.modal.dataOpenSize);
            if (openSize !== null) {

                type = 'md';
                userDefined = ui.globals.md + 1; // md, inline

                openSize = Number(openSize);

                if (window.innerWidth < openSize) {
                    win.style.width = (window.innerWidth - (ui.modal.winMargin * 2)) + 'px';

                } else {

                    if (ui.hasClass(win, ui.modal.nameLG)) {

                        type = 'lg';
                        userDefined = ui.globals.lg; // lg

                    } else if (ui.hasClass(win, ui.modal.nameSM)) {

                        type = 'sm';
                        userDefined = ui.globals.md; // sm
                    }

                    if (window.innerWidth > userDefined) {
                        win.style.width = userDefined + 'px';

                    } else win.style.width = (window.innerWidth - (ui.modal.winMargin * 2)) + 'px';
                }

                minHeight = ui.modal.heightMinMD;

                if (type === 'lg') {
                    minHeight = ui.modal.heightMinLG;

                } else if (type === 'sm') {
                    minHeight = ui.modal.heightMinSM;
                }

                container = ui.find('.' + ui.modal.nameContainer, win)[0];
                win.style.removeProperty('height');

                if (container.offsetHeight < minHeight) {
                    win.style.height = (window.innerHeight - (ui.modal.winMargin * 2)) + 'px';

                } else {
                    win.style.height = win.offsetHeight + 'px';
                }

            }

            customW = win.getAttribute(ui.modal.dataCustomW);
            if (customW !== null) {

                customH = win.getAttribute(ui.modal.dataCustomH);
                if (customH !== null) {

                    customW = Number(customW);
                    customH = Number(customH);

                    if (window.innerWidth > customW) {

                        win.style.width = customW + 'px';
                        win.style.height = customH + 'px';

                    } else {

                        win.style.width = (window.innerWidth - (ui.modal.winMargin * 2)) + 'px';
                        win.style.height = (window.innerWidth - (ui.modal.winMargin * 2)) / (customW / customH) + 'px';

                    }

                }
            }

            win.style.top = Math.floor((bg.offsetHeight - win.offsetHeight) / 2) + 'px';
            win.style.left = Math.floor((bg.offsetWidth - win.offsetWidth) / 2) + 'px';

        }

    }

    ui.modal.Start = () => {

        ui.modal.close = function () {

            var win, bg, removeModal;

            win = ui.find('.' + ui.modal.targetWin + '.' + ui.globals.nameShow);
            if (win.length === 0) return;

            Array.prototype.forEach.call(win,

                el => {
                    ui.removeClass(el, ui.globals.nameShowEase);
                });

            setTimeout(() => {

                Array.prototype.forEach.call(win,

                    el => {

                        removeModal = ui.find('.' + ui.modal.nameRemovable, win[0]).length;

                        if (removeModal > 0) { // remove modal window
                            win[0].remove();

                        } else { // hide modal window
                            ui.removeClass(el, ui.globals.nameShow);
                        }

                    });

                bg = ui.find('.' + ui.modal.targetBg);
                ui.removeClass(bg, ui.globals.nameOpenEase);

                ui.removeClass(document, ui.modal.nameModalOpened);

                if (ui.userAgents.mobile) {
                    window.scrollTo(0, pageYPos);
                }

                setTimeout(() => {
                    ui.removeClass(bg, ui.globals.nameOpen);
                }, ui.globals.ease);

                ui.trigger(document, ui.globals.eventDomChange); // set custom event

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

            var closeBtn, nonClosable, typeArr, type, created, temp, getSize, size, customSize, sizeArr, bg, html, win, content;

            if (props === undefined) return;
            if (props.source === undefined) return;

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

                bg = ui.find('.' + ui.modal.targetBg)[0];
                html = '<div class="' + ui.modal.targetWin;

                if (props.bg !== undefined && props.bg === 'false') {
                    html += ' ' + ui.modal.nameWinNoBG;
                }

                html += ' ' + ui.globals.nameActive + '">' +
                            '<div class="' + ui.modal.nameContent + ' ' + ui.modal.stylesContent + '"></div>' +
                        '</div>';

                if (bg === undefined) {
                    html += '<div class="' + ui.modal.targetBg + ' ' + ui.modal.stylesModalBg + '"></div>';
                }

                ui.find(ui.modal.targetHolder)[0].insertAdjacentHTML('beforeend', html);

                win = ui.find('.' + ui.modal.targetWin + '.' + ui.globals.nameActive)[0];
                content = ui.find('.' + ui.modal.nameContent, win)[0];

            }

            // check header and footer availability
            function checkHeaderFooter() {

                if (ui.find('.' + ui.modal.nameHeader, content)[0] !== undefined) {
                    ui.addClass(content, ui.modal.nameHasHeader);
                }

                if (ui.find('.' + ui.modal.nameFooter, content)[0] !== undefined) {
                    ui.addClass(content, ui.modal.nameHasFooter);
                }

            }

            // complete modal
            function showModal() {

                // set modal size
                ui.removeClass(content, ui.modal.nameLG + ' ' + ui.modal.nameMD + ' ' + ui.modal.nameSM + ' ' + ui.modal.nameFullscreen + ' ' + ui.modal.nameInline);

                content.style.removeProperty('top');
                content.style.removeProperty('left');

                content.style.removeProperty('width');
                content.style.removeProperty('height');

                content.removeAttribute(ui.modal.dataOpenSize);

                content.removeAttribute(ui.modal.dataCustomW);
                content.removeAttribute(ui.modal.dataCustomH);

                if (props.size === undefined) {

                    size = ui.modal.nameMD;
                    ui.addClass(content, size);

                } else {

                    getSize = function () {

                        size = ui.modal.nameMD;
                        sizeArr = [ui.modal.sizeLG, ui.modal.sizeMD, ui.modal.sizeSM, ui.modal.sizeFullscreen, ui.modal.sizeInline];

                        if (sizeArr.indexOf(props.size) > -1) {
                            size = ui.modal.nameSizePrefix + props.size;
                        }

                        ui.addClass(content, size);

                    };

                    customSize = props.size.split('x'); // check custom size
                    if (customSize.length === 2) {

                        if (customSize[0].match(/^[0-9]+$/) !== null && customSize[1].match(/^[0-9]+$/) !== null) {

                            content.style.width = customSize[0] + 'px';
                            content.style.height = customSize[1] + 'px';

                            content.setAttribute(ui.modal.dataCustomW, customSize[0]);
                            content.setAttribute(ui.modal.dataCustomH, customSize[1]);

                        } else getSize();

                    } else getSize();

                }

                // set closable
                if (nonClosable) ui.removeClass(win, ui.modal.nameClosable);
                else ui.addClass(win, ui.modal.nameClosable);

                // add/remove close button
                closeBtn = ui.find('.' + ui.modal.nameModalClose, win)[0];

                if (nonClosable) {

                    if (closeBtn !== undefined) {
                        closeBtn.remove();
                    }

                } else {

                    if (closeBtn === undefined) {

                        closeBtn = '<button class="' + ui.modal.nameModalClose + ' ' + ui.modal.stylesCloseBtn + '">' +
                                        '<svg class="' + ui.globals.nameIcon + '" viewBox="' + ui.globals.svgIconViewBox + '">' +
                                            '<path d="' + ui.assets('iconRemove') + '" />' +
                                        '</svg>' +
                                    '</button>';

                        content.insertAdjacentHTML('afterbegin', closeBtn);

                    }

                }

                // showing modal
                ui.addClass(document, ui.modal.nameModalOpened);

                bg = ui.find('.' + ui.modal.targetBg);
                ui.addClass(bg, ui.moglobalsdal.nameOpen);

                setTimeout(() => {

                    ui.addClass(bg, ui.globals.nameOpenEase);

                    setTimeout(() => {

                        ui.addClass(win, ui.globals.nameShow);

                        content.style.top = Math.floor((bg[0].offsetHeight - content.offsetHeight) / 2) + 'px';
                        content.style.left = Math.floor((bg[0].offsetWidth - content.offsetWidth) / 2) + 'px';

                        if (size !== undefined && size !== ui.modal.nameFullscreen) { // inherit fixed size && fullscreen

                            content.style.width = content.offsetWidth + 'px';
                            content.setAttribute(ui.modal.dataOpenSize, content.offsetWidth);
                            content.style.height = content.offsetHeight + 'px';

                        }

                        setTimeout(() => {

                            ui.addClass(win, ui.globals.nameShowEase);
                            ui.removeClass(win, ui.globals.nameActive);

                            ui.modal.resizer();

                            setTimeout(() => { // wait for modal dom is ready
                                ui.trigger(document, ui.globals.eventDomChange); // set custom event
                            }, ui.globals.ease);

                            // callback
                            if (props.callback !== undefined) {

                                setTimeout(() => { // wait for modal dom is ready
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
                if (props.source[0] === undefined) return;

                created = ui.closest(props.source, '.' + ui.modal.targetWin);
                if (created.length > 0) { // modal created before

                    ui.addClass(created, ui.globals.nameActive);
                    win = ui.find('.' + ui.modal.targetWin + '.' + ui.globals.nameActive)[0];

                    content = ui.find('.' + ui.modal.nameContent, win)[0];
                    showModal();

                    // reset forms
                    Array.prototype.forEach.call(ui.find('form', content),

                        el => {
                            el.reset();
                        });

                } else { // create modal

                    // move source
                    temp = document.createDocumentFragment();

                    Array.prototype.forEach.call(props.source,

                        (el) => {
                            temp.appendChild(el);
                        });

                    createModal();
                    content.appendChild(temp);

                    checkHeaderFooter();
                    showModal();

                }

            } else { // other source types

                typeArr = [ui.modal.typeAjax, ui.modal.typeIframe];

                if (typeArr.indexOf(props.type) > -1) {
                    type = props.type;
                }

                if (type === ui.modal.typeIframe) { // iframe sources

                    temp = '<iframe '+
                                'class="' + ui.modal.nameIframe + ' ' + ui.modal.nameRemovable + '" '+
                                'src="' + props.source + '" ' +
                                'frameborder="0" ' +
                                'allowfullscreen' +
                            '>' +
                            '</iframe>';

                    createModal();
                    content.insertAdjacentHTML('beforeend', temp);

                    showModal();

                } else if (type === ui.modal.typeAjax) { // ajax sources

                    ui.ajax({

                        url : props.source,
                        callback: (status, response) => {

                            if (status === 'success') {

                                temp = '<div class="' + ui.modal.target + ' ' + ui.modal.nameRemovable + '">' +
                                            response +
                                        '</div>';

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

            var p = ui.find('.' + ui.modal.targetWin + '.' + ui.globals.nameShow + '.' + ui.modal.nameClosable)[0];
            if (p !== undefined) { ui.modal.close(); }

        }

        ui.on(document, 'click', '.' + ui.modal.nameModalClose, ui.modal.close);
        ui.on(document, 'click', '.' + ui.modal.targetBg, userClose);

        ui.on(document, 'keydown', function (e) {
            if (e.keyCode === 27) { userClose(); } // esc
        });

    };

    // loaders
    ui.onload(ui.modal.Start);
    ui.on(window, 'resize', ui.modal.resizer);

})();
