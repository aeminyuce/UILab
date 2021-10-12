/*
 UI Card JS
 Requires UI JS
*/

ui.card = {

    // targets
    targetClose: 'close-card',

    // styling classnames
    stylesClosing: 'closing-card ease-layout',

};

(function () {

    'use strict';
    /*globals document, ui, setTimeout */

    ui.card.Start = function () {

        // Event Listeners
        ui.on(document,
            'click',

            '.' + ui.card.targetClose,

            function () {

                var parentEl = this.parentElement;
                ui.addClass(parentEl, ui.card.stylesClosing);

                setTimeout(function () {
                    parentEl.parentNode.removeChild(parentEl);
                }, ui.globals.ease * 2);

            });

    };

    // Loaders
    ui.onload(ui.card.Start);

}());
