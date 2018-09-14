/*
 SVG Map
 SVG Map requires Events JS
*/

/*globals window, events, selector, setTimeout */
/* svg map */
function svgMap() {

    'use strict';

    var map, arr, g, i, data, opacity, toolbar, toolbarContent;

    map = selector('.svg-map');
    if (map.length !== 1) { return; }

    arr = [];
    g = selector('.svg-map [data-size]');

    for (i = 0; i < g.length; i += 1) {

        data = g[i].getAttribute('data-size');
        if (data >= 1) { arr.push(data); }

    }

    arr = arr.sort(function (a, b) { return b - a; });

    events.each(g, function () {

        data = this.getAttribute('data-size');

        if (data > 0) {

            this.setAttribute('class', 'active');

            opacity = Math.sqrt(data) / Math.sqrt(arr[0]);
            opacity = opacity.toFixed(2);

            if (opacity > 1) { opacity = 1; }
            if (opacity < 0.5) { opacity = 0.25; } /* optional */

            selector('path', this)[0].setAttribute('style', 'opacity: ' + opacity + ';');

        }

    });

    arr = [];

    toolbar = selector('.toolbar', map);
    toolbarContent = selector('span', toolbar)[0];

    function toolbarClose() {

        events.removeClass(toolbar, 'open-ease');

        setTimeout(function () {
            events.removeClass(toolbar, 'open');
        }, 150);

    }

    events.on(map, 'mousemove', function (e) {

        toolbar.setAttribute('style', 'top: ' + (e.clientY - (toolbar.offsetHeight + 14)) + 'px; left:' + (e.clientX - (toolbar.offsetWidth / 2)) + 'px;');

        if (e.target.toString() === '[object SVGPathElement]') {
            toolbarContent.innerHTML = e.target.getAttribute('id') + ': ' + e.target.parentNode.getAttribute('data-size');
        }

        if (e.target.toString() === '[object SVGSVGElement]') {
            toolbarClose();
        } else {

            events.addClass(toolbar, 'open');

            setTimeout(function () {
                events.addClass(toolbar, 'open-ease');
            }, 0);

        }

    });

    events.on(map, 'mouseleave', toolbarClose);

    events.on(g, 'click', function () {
        window.location = this.getAttribute('data-href');
    });

}

/*!loader */
events.onload(function () {

    'use strict';
    svgMap();

});
