/*
 UI SVG Map JS
 Requires UI JS
*/

ui.svgMap = {};

(function () {

    'use strict';
    /*globals window, ui */

    ui.svgMap.Start = function () {

        var map, arr, data, g, opacity;

        map = ui.find('.svg-map');
        if (map.length === 0) { return; }

        arr = [];

        ui.each(map, function (i) {

            arr[i] = [];
            g = ui.find('g[data-ui-size]', this);

            ui.each(g, function () {

                data = this.getAttribute('data-ui-size');
                if (data > 0) { arr[i].push(data); }

            });

            arr[i] = arr[i].sort(function (a, b) { return b - a; });

            ui.each(g, function () {

                data = this.getAttribute('data-ui-size');
                if (data > 0) {

                    ui.addClass(this, 'active');

                    opacity = Math.sqrt(data) / Math.sqrt(arr[i][0]);
                    opacity = opacity.toFixed(2);

                    if (opacity > 1) { opacity = 1; }
                    if (opacity < 0.5) { opacity = 0.5; } /* optional */

                    ui.find('path', this)[0].setAttribute('style', 'opacity: ' + opacity + ';');

                }

            });

            arr[i] = [];

        });

        // Event Listeners
        ui.on('g', 'click', function () {

            var href = this.getAttribute('data-ui-href');

            if (href !== null) {
                window.location = href;
            }

        });

    };

    // Loaders
    ui.onload(ui.svgMap.Start);

}());
