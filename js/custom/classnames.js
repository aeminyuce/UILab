/*
 UI Classnames JS
 Requires UI JS
*/

ui.classnames = {

    // targets
    target: 'xhr/ajax-pages.php',

    // values
    prefix: 'ui'

};

(function () {

    'use strict';
    /*globals document, ui, console */
    /*eslint no-console: ["error", { allow: ["warn", "error"] }] */

    ui.classnames.Start = function () {

        ui.ajax({
            url : ui.classnames.target,
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
                        console.warn(str);

                    } else {
                        //console.log(str);
                    }

                    strLength = str.match(reDuplicate);
                    if (strLength !== null) {

                        strLength = Number(str.match(reDuplicate).length);

                        if (strLength > 1) {
                            console.error(str);
                        }

                    }

                });
            });

    };

    // Loaders
    ui.onload(ui.classnames.Start);

}());
