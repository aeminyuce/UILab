/*
 SVG Map
 SVG Map requires Events JS
*/

var svgMap = {};

(function () {

    'use strict';
    /*globals window, events, selector */

    svgMap.Start = function () {

        var map, arr, data, g, opacity;

        map = selector('.svg-map');
        if (map.length === 0) { return; }

        arr = [];

        events.each(map, function (i) {

            arr[i] = [];
            g = selector('g[data-size]', this);

            events.each(g, function () {

                data = this.getAttribute('data-size');
                if (data > 0) { arr[i].push(data); }

            });

            arr[i] = arr[i].sort(function (a, b) { return b - a; });

            events.each(g, function () {

                data = this.getAttribute('data-size');
                if (data > 0) {

                    events.addClass(this, 'active');

                    opacity = Math.sqrt(data) / Math.sqrt(arr[i][0]);
                    opacity = opacity.toFixed(2);

                    if (opacity > 1) { opacity = 1; }
                    if (opacity < 0.5) { opacity = 0.5; } /* optional */

                    selector('path', this)[0].setAttribute('style', 'opacity: ' + opacity + ';');

                }

            });

            arr[i] = [];

        });

        // Events
        events.on(g, 'click', function () {
            window.location = this.getAttribute('data-href');
        });

    };

    // Loaders
    events.onload(svgMap.Start);

}());
