/*
 Alerts JS
 Alerts JS requires Selector Js, Events JS, User Agents JS
*/

var alerts = {

    dialogTheme: '', // use themes
    dialogClasses: 'round shadow-lg',
    dialogMessages: true,

    messageTheme: '', // use themes
    messageClasses: 'round shadow-lg',
    messageTimer: '6000', // miliseconds, wait for atomatically close messages

    closeIcon: 'remove'

};

(function () {

    'use strict';
    /*globals window, document, selector, events, setTimeout, useragents */

    var
        pageYPos,
        cancelCloseDialog,
        messageQueue = [],

        re = new RegExp('\\s+\\s'),
        rex = new RegExp('^\\s|\\s+$');

    alerts.Start = function () {

        // dialogues
        alerts.closeDialog = function () {

            var bg, dialog;

            dialog = selector('.alerts-dialog')[0];
            events.removeClass(dialog, 'show-ease');

            setTimeout(function () {

                dialog.parentNode.removeChild(dialog);

                bg = selector('.alerts-bg');
                events.removeClass(bg, 'open-ease');

                events.removeClass(document, 'alerts-opened');

                if (useragents.mobile) {
                    window.scrollTo(0, pageYPos);
                }

                setTimeout(function () {
                    events.removeClass(bg, 'open');
                }, 150);

            }, 150);

            events.off('.dialog-buttons button', 'click');

            if (cancelCloseDialog) {

                events.off('body', 'keydown.closeAlertsDialog');
                events.off('.close-alert,.alerts-bg', 'click.closeAlertsDialog');

            }

        };

        alerts.dialog = function (set) {

            var styles, closeBtn, bg, success, buttons, i, keys, val, html, dialog, userCloseDialog;

            if (set === undefined) { return; }
            if (set.msg === undefined) { return; }

            dialog = selector('.alerts-dialog')[0];
            if (dialog !== undefined) { return; } // prevent multiple dialogues

            if (useragents.mobile) {
                pageYPos = window.pageYOffset; // get current scroll-y position
            }

            closeBtn = '';
            cancelCloseDialog = false;

            // create buttons
            buttons = '';

            if (set.custom !== undefined) {

                keys = Object.keys(set.custom);
                for (i = 0; i < keys.length; i++) {

                    val = set.custom[keys[i]];

                    if (val !== '') {
                        buttons += '<button class="dialog-custom" value="' + keys[i] + '">' + val + '</button>';
                    }
                }

            }

            if (set.success === undefined) {
                success = 'OK';

            } else { success = set.success; }
            buttons += '<button class="dialog-success" value="success">' + success + '</button>';

            if (set.error !== undefined) {

                buttons += '<button class="dialog-error" value="error">' + set.error + '</button>';

                // create close icon
                cancelCloseDialog = true;

                closeBtn = '<button class="close-alert ease-layout">' +
                        '<svg class="icon"><use href="#' + alerts.closeIcon + '"/></svg>' +
                    '</button>';
            }

            // create dialog
            styles = alerts.dialogClasses + ' ' + alerts.dialogTheme + ' ease-layout ease-in-out';
            styles = styles.replace(re, ' ').replace(rex, '');


            bg = selector('.alerts-bg')[0];

            html = '<div class="alerts-dialog ' + styles + '">' +
                        closeBtn +
                        '<div class="dialog-msg">' + set.msg + '</div>' +
                        '<div class="dialog-buttons ease-1st-btn">' +
                            buttons +
                        '</div>' +
                    '</div>';

            if (bg === undefined) {
                html += '<div class="alerts-bg ease-layout"></div>';
            }

            selector('body')[0].insertAdjacentHTML('beforeend', html);
            events.addClass(document, 'alerts-opened');

            // show dialog
            bg = selector('.alerts-bg');
            events.addClass(bg, 'open');

            setTimeout(function () {

                events.addClass(bg, 'open-ease');
                setTimeout(function () {

                    dialog = selector('.alerts-dialog');
                    events.addClass(dialog, 'show');

                    selector('.dialog-success')[0].focus(); // fosuc success button

                    setTimeout(function () {
                        events.addClass(dialog, 'show-ease');
                    }, 10);

                    // Events
                    events.on('.dialog-buttons button', 'click', function () {

                        var that, msg, msgTimer, theme;

                        that = this;

                        msg = this.textContent;
                        theme = '';

                        if (events.hasClass(this, 'dialog-success')) {
                            theme = 'success';

                        } else if (events.hasClass(this, 'dialog-error')) {
                            theme = 'danger';
                        }

                        if (alerts.dialogMessages) {
                            msgTimer = 150;

                        } else { msgTimer = 0; }

                        alerts.closeDialog();
                        setTimeout(function () {

                            // show message
                            if (alerts.dialogMessages) {

                                alerts.message({
                                    msg: msg,
                                    theme: theme
                                });

                            }

                            // callback
                            if (set.callback !== undefined) {

                                setTimeout(function () { // wait for closing dialog and showing messages
                                    set.callback.call(that, that.value);
                                }, 300);

                            }

                        }, msgTimer);

                    });

                    if (cancelCloseDialog) { // attach close events if set.error defined

                        userCloseDialog = function () {

                            var errorBtn = selector('.alerts-dialog .dialog-error')[0];
                            alerts.closeDialog();

                            if (errorBtn !== undefined) {

                                setTimeout(function () {

                                    alerts.message({
                                        msg: errorBtn.textContent,
                                        theme: 'danger'
                                    });

                                }, 150);

                            }

                        };

                        events.on('.close-alert,.alerts-bg', 'click.closeAlertsDialog', userCloseDialog);

                        events.on('body', 'keydown.closeAlertsDialog', function (e) {
                            if (e.keyCode === 27) { userCloseDialog(); } // esc
                        });

                    }

                }, 150);

            }, 10);

            return false;

        };

        // messages
        alerts.closeMessage = function (win) {

            events.removeClass(win, 'show-ease');
            setTimeout(function () {

                events.removeClass(win, 'show');
                win.parentNode.removeChild(win);

            }, 150);

        };

        alerts.message = function (set) {

            var arr, html, styles, holder, message, prev, i, j, slide;

            if (set === undefined) { return; }
            if (set.msg === undefined) { return; }

            // detect position
            arr = ['tr', 'tl', 'br', 'bl'];
            if (arr.indexOf(set.pos) < 0) { set.pos = 'br'; }

            // detect theme
            arr = ['success', 'warning', 'danger'];
            if (arr.indexOf(set.theme) < 0) {
                set.theme = '';

            } else {
                set.theme = 'msg-' + set.theme ;
            }

            // create mssage
            styles = set.pos + ' ' + set.theme + ' ' + alerts.messageClasses + ' ' + alerts.messageTheme + ' ease-layout ease-in-out';
            styles = styles.replace(re, ' ').replace(rex, '');

            holder = selector('.alerts-msg-holder')[0];

            html = '';

            if (holder === undefined) { html += '<div class="alerts-msg-holder">'; }
            html += '<div class="alerts-msg ' + styles + '">' + set.msg + '</div>';
            if (holder === undefined) { html += '</div>'; }

            if (holder === undefined) {
                selector('body')[0].insertAdjacentHTML('beforeend', html);

            } else {

                holder = selector('.alerts-msg-holder')[0];
                holder.insertAdjacentHTML('beforeend', html);

            }

            // show message
            message = selector('.alerts-msg:last-child');
            events.addClass(message, 'show');

            setTimeout(function () {

                events.addClass(message, 'show-ease');

                // move same position elements
                if (holder !== undefined) {

                    prev = selector('.alerts-msg.' + set.pos);
                    for (j = 0; j < prev.length; j++) {

                        slide = 0;

                        for (i = j + 1; i < prev.length; i++) {
                            slide += Number(prev[i].offsetHeight + 10);
                        }

                        if (set.pos === 'br' || set.pos === 'bl') {
                            slide = -1 * slide;
                        }

                        prev[j].style.transform = 'translateY(' + slide + 'px)';

                    }

                }

                // auto close messages
                messageQueue.push(message);

                setTimeout(function () { // for manually closing messages by user

                    if (messageQueue[0] === undefined) { return; }

                    alerts.closeMessage(messageQueue[0][0]);
                    messageQueue.shift();

                }, alerts.messageTimer);

            }, 10);

        };

        // Events
        events.on(document, 'click', '.alerts-msg', function () {

            var i;

            for (i = 0; i < messageQueue.length; i++) {

                if (messageQueue[i][0] === this) {
                    messageQueue.splice(i, 1);
                }

            }

            alerts.closeMessage(this);

        });

    };

    // Loaders
    events.onload(alerts.Start);

}());
