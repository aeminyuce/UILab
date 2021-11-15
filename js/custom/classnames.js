/*
 UI Classnames JS
 Requires UI JS
*/

ui.classnames = {

    // targets
    targetList: 'classnames-list',
    targetAlerts: 'classnames-alerts',

    // styling classnames
    stylesError: 'ui-color-red',
    stylesWarning: 'ui-color-yellow',

    // values
    filePath: 'xhr/ajax-pages.php',
    prefix: 'ui'

};

(function () {

    'use strict';
    /*globals document, ui */

    ui.classnames.Start = function () {

        var arr, list, alerts;

        arr = [];

        arr.list = [];
        arr.error = [];
        arr.warning = [];

        list = ui.find('.' + ui.classnames.targetList)[0];
        alerts = ui.find('.' + ui.classnames.targetAlerts)[0];

        ui.ajax({
            url : ui.classnames.filePath,
            callback: function () { }
        });

        ui.on(document,
            ui.globals.eventAjaxCallback,

            function () {

                ui.each(ui.ajax.classNames, function () {

                    var reStart, reDuplicate, str, strStart, strLength;

                    reStart = ui.classnames.prefix + '-';
                    reStart = new RegExp(reStart, 'g');

                    reDuplicate = '(' + ui.classnames.prefix + '-)|(-' + ui.classnames.prefix + ')';
                    reDuplicate = new RegExp(reDuplicate, 'g');

                    str = this.toString();
                    strStart = str.match(reStart);

                    if (strStart === null) {

                        if (str === '') {

                            // error
                            arr.error.push('* Empty classname!');

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

                            // error
                            arr.error.push(str);

                        }

                    }

                });

                // list
                arr.list = arr.list.sort();

                ui.each(arr.list,

                    function () {
                        list.insertAdjacentHTML('beforeend', '<li>' + this + '</li>');
                    });

                // error
                ui.each(arr.error,

                    function () {
                        alerts.insertAdjacentHTML('beforeend', '<li class="' + ui.classnames.stylesError + '">' + this + '</li>');
                    });

                // warning
                ui.each(arr.warning,

                    function () {
                        alerts.insertAdjacentHTML('beforeend', '<li class="' + ui.classnames.stylesWarning + '">' + this + '</li>');
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
