/*
 UI Classnames JS
 Requires UI JS
*/

ui.classnames = {

    // targets
    targetList: 'classnames-list',
    targetAlerts: 'classnames-alerts',

    // styling classnames
    stylesListSep: 'ui-font-22 ui-font-capitalize ui-m-20-t ui-opacity-half',

    stylesNoErrors: 'ui-opacity-half',
    stylesWarningSep: 'ui-font-18 ui-font-capitalize ui-m-20-t',

    stylesError: 'ui-color-red',
    stylesWarning: 'ui-color-yellow',

    // values
    filePath: 'xhr/ajax-pages.php',
    prefix: 'ui',

    // messages
    msgErrors: 'Errors',
    msgNoErrors: '* No errors detected *',

    msgEmpty: 'Empty Classname!',
    msgDuplicate: 'Prefix Duplicated'

};

(function () {

    'use strict';
    /*globals document, ui */

    ui.classnames.Start = function () {

        var arr, list, alerts, lastAddedList, lastAddedWarning;

        arr = [];

        arr.list = [];
        arr.error = [];
        arr.warning = [];

        lastAddedList = '';
        lastAddedWarning = '';

        list = ui.find('.' + ui.classnames.targetList)[0];
        alerts = ui.find('.' + ui.classnames.targetAlerts)[0];

        ui.ajax({
            url : ui.classnames.filePath,
            callback: function () { }
        });

        ui.on(document,
            ui.globals.eventAjaxCallback,

            function () {

                var reStart, reDuplicate, str, strStart, strLength, title, titleCreated, newListItem;

                ui.each(ui.ajax.classNames,

                    function () {

                        reStart = ui.classnames.prefix + '-';
                        reStart = new RegExp(reStart, 'g');

                        reDuplicate = '(' + ui.classnames.prefix + '-)|(-' + ui.classnames.prefix + ')';
                        reDuplicate = new RegExp(reDuplicate, 'g');

                        str = this.toString();
                        strStart = str.match(reStart);

                        if (strStart === null) {

                            if (str === '') {

                                // error: empty
                                arr.error.push(ui.classnames.msgEmpty);

                            } else {

                                // warning
                                arr.warning.push(str);

                            }

                        } else {

                            // list
                            arr.list.push(str);

                        }

                        strLength = str.match(reDuplicate);
                        if (strLength !== null) {

                            strLength = Number(str.match(reDuplicate).length);
                            if (strLength > 1) {

                                // error: duplicate
                                arr.error.push(ui.classnames.msgDuplicate + ': ' + str);

                            }

                        }

                    });

                // list
                arr.list = arr.list.sort();
                ui.each(arr.list,

                    function () {

                        title = this.split('-')[1];

                        if (title === 'no' || title === 'xl' || title === 'lg' || title === 'md' || title === 'sm' || title === 'xs') {
                            title = this.split('-')[2];
                        }

                        if (title === 'no') {
                            title = this.split('-')[3];
                        }

                        if (lastAddedList === title) {
                            list.insertAdjacentHTML('beforeend', '<li>' + this + '</li>');

                        } else {

                            if (title === 'm') { title = 'margin'; }
                            if (title === 'p') { title = 'padding'; }
                            if (title === 'sp') { title = 'spacer'; }

                            titleCreated = ui.find('li.' + title);
                            if (titleCreated.length === 0) {

                                list.insertAdjacentHTML('beforeend', '<li class="' + title + ' ' + ui.classnames.stylesListSep + '">' + title + '</li>');
                                list.insertAdjacentHTML('beforeend', '<li>' + this + '</li>');

                            } else { // catch title duplicate!

                                newListItem = document.createElement("LI");
                                newListItem.innerHTML = '<li>' + this + '</li>';

                                list.insertBefore(newListItem, titleCreated[0]);

                            }

                        }

                        lastAddedList = title;

                    });

                // error
                if (arr.error.length === 0) {
                    alerts.insertAdjacentHTML('beforeend', '<li class="' + ui.classnames.stylesNoErrors + '">' + ui.classnames.msgNoErrors + '</li>');

                } else {
                    alerts.insertAdjacentHTML('beforeend', '<li class="' + ui.classnames.stylesWarningSep + '">' + ui.classnames.msgErrors + '</li>');
                }

                ui.each(arr.error,

                    function () {
                        alerts.insertAdjacentHTML('beforeend', '<li class="' + ui.classnames.stylesError + '">' + this + '</li>');
                    });

                // warning
                arr.warning = arr.warning.sort();
                ui.each(arr.warning,

                    function () {

                        if (lastAddedWarning === '' || lastAddedWarning.split('-')[0] !== this.split('-')[0]) {
                            alerts.insertAdjacentHTML('beforeend', '<li class="' + ui.classnames.stylesWarningSep + '">' + this.split('-')[0] + '</li>');
                        }

                        alerts.insertAdjacentHTML('beforeend', '<li class="' + ui.classnames.stylesWarning + '">' + this + '</li>');
                        lastAddedWarning = this;

                    });

                // empty variables
                arr.list = [];
                arr.error = [];
                arr.warning = [];

            });

    };

    // Loaders
    ui.onload(ui.classnames.Start);

}());
