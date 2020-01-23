/*
 Card JS
 Card JS requires Selector Js, Events JS
*/

var card = {};

(function () {

    'use strict';
    /*globals document, events, setTimeout */

    card.Start = function () {

        // Events
        events.on(document, 'click', '.close-card', function () {

            var parentEl = this.parentElement;
            events.addClass(parentEl, 'closing-card ease-layout');

            setTimeout(function () {
                parentEl.parentNode.removeChild(parentEl);
            }, 300);

        });

    };

    // Loaders
    events.onload(card.Start);

}());
