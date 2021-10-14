/*
 UI Alerts JS
 Requires UI JS
*/

ui.alerts = {

    // targets
    targetDialog: 'alerts-dialog',
    targetMsg: 'alerts-msg',
    targetBg: 'alerts-bg',

    // main classnames
    nameDialogOpened: 'alerts-opened',
    nameDialogMsg: 'dialog-msg',
    nameCloseDialog: 'close-alert',

    nameDialogBtnHolder: 'dialog-buttons',
    nameDialogCustom: 'dialog-custom',
    nameDialogSuccess: 'dialog-success',
    nameDialogError: 'dialog-error',

    nameMsgHolder: 'alerts-msg-holder',

    // helper classnames
    nameOpen: 'open',
    nameOpenEase: 'open-ease',

    nameShow: 'show',
    nameShowEase: 'show-ease',

    // outer classnames
    nameIcon: 'icon',

    // styling classnames
    stylesDialog: 'round shadow-lg ease-layout ease-in-out',
    stylesCloseDialog: 'ease-layout',
    stylesDialogBtnHolder: 'ease-1st-btn',

    stylesMessage: 'round shadow-lg ease-layout ease-in-out',

    stylesBg: 'ease-layout',

    // icons
    closeIcon: 'remove',

    // values
    dialogMessages: false, // shows automatically clicked buttons text
    successBtnValue: 'success',
    errorBtnValue: 'error',

    messageTimer: 6000, // wait for atomatically close messages

    themeSuccess: 'success',
    themeWarning: 'warning',
    themeDanger: 'danger',

    posTopRight: 'tr',
    posTopLeft: 'tl',
    posBottomRight: 'br',
    posBottomLeft: 'bl',

    // messages
    msgDialogSuccess: 'OK',

    // custom events
    eventCloseDialog: 'ui:closeAlertsDialog'

};

(function () {

    'use strict';
    /*globals window, document, ui, setTimeout */

    var
        pageYPos,
        cancelCloseDialog,
        messageQueue = [];

    ui.alerts.Start = function () {

        // dialogues
        ui.alerts.closeDialog = function () {

            var bg, dialog;

            dialog = ui.find('.' + ui.alerts.targetDialog)[0];
            ui.removeClass(dialog, ui.alerts.nameShowEase);

            setTimeout(function () {

                dialog.parentNode.removeChild(dialog);

                bg = ui.find('.' + ui.alerts.targetBg);
                ui.removeClass(bg, ui.alerts.nameOpenEase);

                ui.removeClass(document, ui.alerts.nameDialogOpened);

                if (ui.userAgents.mobile) {
                    window.scrollTo(0, pageYPos);
                }

                setTimeout(function () {
                    ui.removeClass(bg, ui.alerts.nameOpen);

                }, ui.globals.ease);

            }, ui.globals.ease);

            ui.off('.' + ui.alerts.nameDialogBtnHolder + ' button', 'click');

            if (cancelCloseDialog) {

                ui.off('body', 'keydown.' + ui.alerts.eventCloseDialog);
                ui.off('.' + ui.alerts.nameCloseDialog + ',.' + ui.alerts.targetBg, 'click.' + ui.alerts.eventCloseDialog);

            }

        };

        ui.alerts.dialog = function (props) {

            /*
            props list:
                props.msg
                props.error
                props.custom
                props.callback
            */

            var closeBtn, bg, success, buttons, i, keys, val, html, dialog, userCloseDialog;

            if (props === undefined) { return; }
            if (props.msg === undefined) { return; }

            dialog = ui.find('.' + ui.alerts.targetDialog)[0];
            if (dialog !== undefined) { return; } // prevent multiple dialogues

            if (ui.userAgents.mobile) {
                pageYPos = window.pageYOffset; // get current scroll-y position
            }

            closeBtn = '';
            cancelCloseDialog = false;

            // create buttons
            buttons = '';

            if (props.custom !== undefined) {

                keys = Object.keys(props.custom);
                for (i = 0; i < keys.length; i++) {

                    val = props.custom[keys[i]];
                    if (val !== '') {

                        buttons += '<button class="' + ui.alerts.nameDialogCustom + '" value="' + keys[i] + '">' +
                                        val +
                                    '</button>';

                    }
                }

            }

            if (props.success === undefined) {
                success = ui.alerts.msgDialogSuccess;

            } else {
                success = props.success;
            }

            buttons += '<button class="' + ui.alerts.nameDialogSuccess + '" value="' + ui.alerts.successBtnValue + '">' +
                            success +
                        '</button>';

            if (props.error !== undefined) {

                buttons += '<button class="' + ui.alerts.nameDialogError + '" value="' + ui.alerts.errorBtnValue + '">' +
                                props.error +
                            '</button>';

                // create close icon
                cancelCloseDialog = true;

                closeBtn = '<button class="' + ui.alerts.nameCloseDialog + ' ' + ui.alerts.stylesCloseDialog + '">' +
                                '<svg class="' + ui.alerts.nameIcon + '"><use href="#' + ui.alerts.closeIcon + '"/></svg>' +
                            '</button>';
            }

            // create dialog
            bg = ui.find('.' + ui.alerts.targetBg)[0];

            html = '<div class="' + ui.alerts.targetDialog + ' ' + ui.alerts.stylesDialog + '">' +
                        closeBtn +
                        '<div class="' + ui.alerts.nameDialogMsg + '">' +
                            props.msg +
                        '</div>' +
                        '<div class="' + ui.alerts.nameDialogBtnHolder + ' ' + ui.alerts.stylesDialogBtnHolder + '">' +
                            buttons +
                        '</div>' +
                    '</div>';

            if (bg === undefined) {

                html += '<div class="' + ui.alerts.targetBg + ' ' + ui.alerts.stylesBg + '">' +
                        '</div>';

            }

            ui.find('body')[0].insertAdjacentHTML('beforeend', html);
            ui.addClass(document, ui.alerts.nameDialogOpened);

            // show dialog
            bg = ui.find('.' + ui.alerts.targetBg);
            ui.addClass(bg, ui.alerts.nameOpen);

            setTimeout(function () {

                ui.addClass(bg, ui.alerts.nameOpenEase);
                setTimeout(function () {

                    dialog = ui.find('.' + ui.alerts.targetDialog);
                    ui.addClass(dialog, ui.alerts.nameShow);

                    ui.find('.' + ui.alerts.nameDialogSuccess)[0].focus(); // fosuc success button

                    setTimeout(function () {
                        ui.addClass(dialog, ui.alerts.nameShowEase);
                    }, 10);

                    // Event Listeners
                    ui.on('.' + ui.alerts.nameDialogBtnHolder + ' button',
                        'click',

                        function () {

                            var that, msg, msgTimer, theme;

                            that = this;

                            msg = this.textContent;
                            theme = '';

                            if (ui.hasClass(this, ui.alerts.nameDialogSuccess)) {
                                theme = ui.alerts.themeSuccess;

                            } else if (ui.hasClass(this, ui.alerts.nameDialogError)) {
                                theme = ui.alerts.themeDanger;
                            }

                            if (ui.alerts.dialogMessages) {
                                msgTimer = ui.globals.ease;

                            } else { msgTimer = 0; }

                            ui.alerts.closeDialog();

                            setTimeout(function () {

                                // show message
                                if (ui.alerts.dialogMessages) {

                                    ui.alerts.message({
                                        msg: msg,
                                        theme: theme
                                    });

                                }

                                // callback
                                if (props.callback !== undefined) {

                                    setTimeout(function () { // wait for closing dialog and showing messages
                                        props.callback.call(that, that.value);

                                    }, ui.globals.ease * 2);

                                }

                            }, msgTimer);

                        });

                    if (cancelCloseDialog) { // attach close event listeners if props.error defined

                        userCloseDialog = function () {

                            var errorBtn = ui.find('.' + ui.alerts.targetDialog + ' .' + ui.alerts.nameDialogError)[0];

                            ui.alerts.closeDialog();
                            if (ui.alerts.dialogMessages && errorBtn !== undefined) {

                                setTimeout(function () {

                                    ui.alerts.message({
                                        msg: errorBtn.textContent,
                                        theme: ui.alerts.themeDanger
                                    });

                                }, ui.globals.ease);

                            }

                        };

                        ui.on('.' + ui.alerts.nameCloseDialog + ',.' + ui.alerts.targetBg,
                            'click.' + ui.alerts.eventCloseDialog,

                            userCloseDialog

                            );

                        ui.on('body',
                            'keydown.' + ui.alerts.eventCloseDialog,

                            function (e) {
                                if (e.keyCode === 27) { userCloseDialog(); } // esc
                            });

                    }

                }, ui.globals.ease);

            }, 10);

            return false;

        };

        // messages
        ui.alerts.closeMessage = function (win) {

            ui.removeClass(win, ui.alerts.nameShowEase);
            setTimeout(function () {

                ui.removeClass(win, ui.alerts.nameShow);
                win.parentNode.removeChild(win);

            }, ui.globals.ease);

        };

        ui.alerts.message = function (props) {

            /*
            props list:
                props.msg
                props.pos
                props.theme
            */

            var arr, html, holder, message, prev, i, j, slide;

            if (props === undefined) { return; }
            if (props.msg === undefined) { return; }

            // detect position
            arr = [ui.alerts.posTopRight, ui.alerts.posTopLeft, ui.alerts.posBottomRight, ui.alerts.posBottomLeft];

            if (arr.indexOf(props.pos) < 0) {
                props.pos = ui.alerts.posBottomRight;
            }

            // detect theme
            arr = [ui.alerts.themeSuccess, ui.alerts.themeWarning, ui.alerts.themeDanger];

            if (arr.indexOf(props.theme) < 0) {
                props.theme = '';

            } else {
                props.theme = 'msg-' + props.theme ;
            }

            // create mssage
            holder = ui.find('.' + ui.alerts.nameMsgHolder)[0];

            html = '';

            if (holder === undefined) {
                html += '<div class="' + ui.alerts.nameMsgHolder + '">';
            }

            html += '<div class="' + ui.alerts.targetMsg + ' ' + props.pos + ' ' + props.theme + ' ' + ui.alerts.stylesMessage + '">' +
                        props.msg +
                    '</div>';

            if (holder === undefined) {

                html += '</div>';
                ui.find('body')[0].insertAdjacentHTML('beforeend', html);

            } else {

                holder = ui.find('.' + ui.alerts.nameMsgHolder)[0];
                holder.insertAdjacentHTML('beforeend', html);

            }

            // show message
            message = ui.find('.' + ui.alerts.targetMsg + ':last-child');
            ui.addClass(message, ui.alerts.nameShow);

            setTimeout(function () {

                ui.addClass(message, ui.alerts.nameShowEase);

                // move same position elements
                if (holder !== undefined) {

                    prev = ui.find('.' + ui.alerts.targetMsg + '.' + props.pos);

                    for (j = 0; j < prev.length; j++) {

                        slide = 0;

                        for (i = j + 1; i < prev.length; i++) {
                            slide += Number(prev[i].offsetHeight + 10);
                        }

                        if (props.pos === ui.alerts.posBottomRight || props.pos === ui.alerts.posBottomLeft) {
                            slide = -1 * slide;
                        }

                        prev[j].style.transform = 'translateY(' + slide + 'px)';

                    }

                }

                // auto close messages
                messageQueue.push(message);

                setTimeout(function () { // for manually closing messages by user

                    if (messageQueue[0] === undefined) { return; }

                    ui.alerts.closeMessage(messageQueue[0][0]);
                    messageQueue.shift();

                }, ui.alerts.messageTimer);

            }, 10);

        };

        // Event Listeners
        ui.on(document,
            'click',

            '.' + ui.alerts.targetMsg,

            function () {

                var i;

                for (i = 0; i < messageQueue.length; i++) {

                    if (messageQueue[i][0] === this) {
                        messageQueue.splice(i, 1);
                    }

                }

                ui.alerts.closeMessage(this);

            });

    };

    // Loaders
    ui.onload(ui.alerts.Start);

}());
