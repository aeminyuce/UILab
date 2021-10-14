/*
 UI Alerts JS
 Requires UI JS
*/

ui.alerts = {

    // targets
    targetDialog: 'alerts-dialog',
    targetMsg: 'alerts-msg',

    // styling classnames
    stylesDialog: 'round shadow-lg ease-layout ease-in-out',
    stylesMessage: 'round shadow-lg ease-layout ease-in-out',

    // icons
    closeIcon: 'remove',

    // values
    dialogMessages: false, // shows automatically clicked buttons text
    messageTimer: 6000 // wait for atomatically close messages

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
            ui.removeClass(dialog, 'show-ease');

            setTimeout(function () {

                dialog.parentNode.removeChild(dialog);

                bg = ui.find('.alerts-bg');
                ui.removeClass(bg, 'open-ease');

                ui.removeClass(document, 'alerts-opened');

                if (ui.userAgents.mobile) {
                    window.scrollTo(0, pageYPos);
                }

                setTimeout(function () {
                    ui.removeClass(bg, 'open');
                }, ui.globals.ease);

            }, ui.globals.ease);

            ui.off('.dialog-buttons button', 'click');

            if (cancelCloseDialog) {

                ui.off('body', 'keydown.closeAlertsDialog');
                ui.off('.close-alert,.alerts-bg', 'click.ui:closeAlertsDialog');

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
                        buttons += '<button class="dialog-custom" value="' + keys[i] + '">' + val + '</button>';
                    }
                }

            }

            if (props.success === undefined) {
                success = 'OK';

            } else { success = props.success; }
            buttons += '<button class="dialog-success" value="success">' + success + '</button>';

            if (props.error !== undefined) {

                buttons += '<button class="dialog-error" value="error">' + props.error + '</button>';

                // create close icon
                cancelCloseDialog = true;

                closeBtn = '<button class="close-alert ease-layout">' +
                                '<svg class="icon"><use href="#' + ui.alerts.closeIcon + '"/></svg>' +
                            '</button>';
            }

            // create dialog
            bg = ui.find('.alerts-bg')[0];

            html = '<div class="' + ui.alerts.targetDialog + ' ' + ui.alerts.stylesDialog + '">' +
                        closeBtn +
                        '<div class="dialog-msg">' + props.msg + '</div>' +
                        '<div class="dialog-buttons ease-1st-btn">' +
                            buttons +
                        '</div>' +
                    '</div>';

            if (bg === undefined) {
                html += '<div class="alerts-bg ease-layout"></div>';
            }

            ui.find('body')[0].insertAdjacentHTML('beforeend', html);
            ui.addClass(document, 'alerts-opened');

            // show dialog
            bg = ui.find('.alerts-bg');
            ui.addClass(bg, 'open');

            setTimeout(function () {

                ui.addClass(bg, 'open-ease');
                setTimeout(function () {

                    dialog = ui.find('.' + ui.alerts.targetDialog);
                    ui.addClass(dialog, 'show');

                    ui.find('.dialog-success')[0].focus(); // fosuc success button

                    setTimeout(function () {
                        ui.addClass(dialog, 'show-ease');
                    }, 10);

                    // Event Listeners
                    ui.on('.dialog-buttons button',
                        'click',

                        function () {

                            var that, msg, msgTimer, theme;

                            that = this;

                            msg = this.textContent;
                            theme = '';

                            if (ui.hasClass(this, 'dialog-success')) {
                                theme = 'success';

                            } else if (ui.hasClass(this, 'dialog-error')) {
                                theme = 'danger';
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

                            var errorBtn = ui.find('.' + ui.alerts.targetDialog + ' .dialog-error')[0];
                            ui.alerts.closeDialog();

                            if (errorBtn !== undefined) {

                                setTimeout(function () {

                                    ui.alerts.message({
                                        msg: errorBtn.textContent,
                                        theme: 'danger'
                                    });

                                }, ui.globals.ease);

                            }

                        };

                        ui.on('.close-alert,.alerts-bg', 'click.ui:closeAlertsDialog', userCloseDialog);

                        ui.on('body',
                            'keydown.closeAlertsDialog',

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

            ui.removeClass(win, 'show-ease');
            setTimeout(function () {

                ui.removeClass(win, 'show');
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
            arr = ['tr', 'tl', 'br', 'bl'];
            if (arr.indexOf(props.pos) < 0) { props.pos = 'br'; }

            // detect theme
            arr = ['success', 'warning', 'danger'];
            if (arr.indexOf(props.theme) < 0) {
                props.theme = '';

            } else {
                props.theme = 'msg-' + props.theme ;
            }

            // create mssage
            holder = ui.find('.alerts-msg-holder')[0];

            html = '';

            if (holder === undefined) {
                html += '<div class="alerts-msg-holder">';
            }

            html += '<div class="' + ui.alerts.targetMsg + ' ' + props.pos + ' ' + props.theme + ' ' + ui.alerts.stylesMessage + '">' +
                        props.msg +
                    '</div>';

            if (holder === undefined) {

                html += '</div>';
                ui.find('body')[0].insertAdjacentHTML('beforeend', html);

            } else {

                holder = ui.find('.alerts-msg-holder')[0];
                holder.insertAdjacentHTML('beforeend', html);

            }

            // show message
            message = ui.find('.' + ui.alerts.targetMsg + ':last-child');
            ui.addClass(message, 'show');

            setTimeout(function () {

                ui.addClass(message, 'show-ease');

                // move same position elements
                if (holder !== undefined) {

                    prev = ui.find('.' + ui.alerts.targetMsg + '.' + props.pos);

                    for (j = 0; j < prev.length; j++) {

                        slide = 0;

                        for (i = j + 1; i < prev.length; i++) {
                            slide += Number(prev[i].offsetHeight + 10);
                        }

                        if (props.pos === 'br' || props.pos === 'bl') {
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
