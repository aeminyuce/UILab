/*
 UI Classnames JS
 Requires UI JS
*/

ui.classnames = {

    // targets
    target: 'xhr/ajax-pages.php'

};

(function () {

    'use strict';
    /*globals document, ui, console */

    ui.classnames.Start = function () {

        ui.ajax({
            url : ui.classnames.target,
            callback: function () { }
        });

        ui.on(document,
            ui.globals.eventAjaxCallback,

            function () {
                ui.each(ui.ajax.classNames, function () {

                    var str, strStart, strLength;

                    str = this.toString();

                    strStart = str.match(/ui-/g);

                    if (strStart === null) {
                        console.warn(str);

                    } else {
                        //console.log(str);
                    }

                    strLength = str.match(/(ui-)|(-ui)/g);
                    if (strLength !== null) {

                        strLength = Number(str.match(/(ui-)|(-ui)/g).length);

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
