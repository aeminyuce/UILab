/* map */

import { ui } from './../core/globals.js';
export default () => ui;

ui.map = {

    // targets
    target: 'ui-map',

    // helper classnames
    nameActive: 'ui-active',

    // tags
    tagTarget: 'path',

    // values
    opacityMax: '0.75',
    opacityMin: '0.25',

    // data attributes
    dataSize: 'data-ui-size',
    dataHref: 'data-ui-href'

};

ui.map.Start = () => {

    var map, arr, data, items, opacity;

    map = ui.find('.' + ui.map.target);
    if (map.length === 0) { return; }

    arr = [];

    ui.each(map,

        function (i) {

            arr[i] = [];
            items = ui.find(ui.map.tagTarget + '[' + ui.map.dataSize + ']', this);

            ui.each(items,

                function () {

                    data = this.getAttribute(ui.map.dataSize);
                    if (data > 0) { arr[i].push(data); }

                });

            arr[i] = arr[i].sort((a, b) => b - a);

            ui.each(items,

                function () {

                    data = this.getAttribute(ui.map.dataSize);
                    if (data > 0) {

                        ui.addClass(this, ui.map.nameActive);

                        opacity = Math.sqrt(data) / Math.sqrt(arr[i][0]);
                        opacity = opacity.toFixed(2);

                        if (opacity > ui.map.opacityMax) {
                            opacity = ui.map.opacityMax;
                        }

                        if (opacity < ui.map.opacityMin) {
                            opacity = ui.map.opacityMin;
                        }

                        this.setAttribute('style', 'opacity: ' + opacity + ';');

                    }

                });

            arr[i] = [];

        });

    // Event Listeners
    ui.on(ui.map.tagTarget,
        'click',

        function () {

            var href = this.getAttribute(ui.map.dataHref);

            if (href !== null) {
                window.location = href;
            }

        });

};

// loaders
ui.onload(ui.map.Start);