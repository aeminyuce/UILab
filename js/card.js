/*
 UI Card JS
 Requires UI JS
*/

ui.card = {};

(function () {

    'use strict';
    /*globals document, ui, setTimeout */

    ui.card.Start = function () {

        // Event Listeners
        ui.on(document, 'click', '.close-card', function () {

            var parentEl = this.parentElement;
            ui.addClass(parentEl, 'closing-card ease-layout');

            setTimeout(function () {
                parentEl.parentNode.removeChild(parentEl);
            }, ui.globals.ease * 2);

        });

    };

    // Loaders
    ui.onload(ui.card.Start);

}());
