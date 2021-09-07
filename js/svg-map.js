/*
 UI SVG Map JS
 Requires UI JS
*/

ui.svgMap = {

    // targets
    target: '.svg-map',

    // helper classnames
    nameActive: 'active',

    // tags
    tagTarget: 'path',

    // values
    opacityMax: '0.75',
    opacityMin: '0.25',

    // data attributes
    dataSize: 'data-ui-size',
    dataHref: 'data-ui-href'

};

(function () {

    'use strict';
    /*globals window, ui */

    ui.svgMap.Start = function () {

        var map, arr, data, items, opacity;

        map = ui.find(ui.svgMap.target);
        if (map.length === 0) { return; }

        arr = [];

        ui.each(map,

            function (i) {

                arr[i] = [];
                items = ui.find(ui.svgMap.tagTarget + '[' + ui.svgMap.dataSize + ']', this);

                ui.each(items,

                    function () {

                        data = this.getAttribute(ui.svgMap.dataSize);
                        if (data > 0) { arr[i].push(data); }

                    });

                arr[i] = arr[i].sort(function (a, b) { return b - a; });

                ui.each(items,

                    function () {

                        data = this.getAttribute(ui.svgMap.dataSize);
                        if (data > 0) {

                            ui.addClass(this, ui.svgMap.nameActive);

                            opacity = Math.sqrt(data) / Math.sqrt(arr[i][0]);
                            opacity = opacity.toFixed(2);

                            if (opacity > ui.svgMap.opacityMax) {
                                opacity = ui.svgMap.opacityMax;
                            }

                            if (opacity < ui.svgMap.opacityMin) {
                                opacity = ui.svgMap.opacityMin;
                            }

                            this.setAttribute('style', 'opacity: ' + opacity + ';');

                        }

                    });

                arr[i] = [];

            });

        // Event Listeners
        ui.on(ui.svgMap.tagTarget,
            'click',

            function () {

                var href = this.getAttribute(ui.svgMap.dataHref);

                if (href !== null) {
                    window.location = href;
                }

            });

    };

    // Loaders
    ui.onload(ui.svgMap.Start);

}());
