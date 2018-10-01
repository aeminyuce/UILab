/*
 SVG Map
 SVG Map requires Events JS
*/

/*globals window, events, selector, setTimeout, navigator, clearTimeout */
function svgMapClose() {

    'use strict';
    var toolbar = selector('.svg-map .toolbar');

    clearTimeout(window.SVGMapToolbarTimer);
    events.removeClass(toolbar, 'open-ease');

    setTimeout(function () {
        events.removeClass(toolbar, 'open');
    }, 150);

}

function svgMap() {

    'use strict';

    var map, arr, g, p, i, data, opacity, toolbar, toolbarContent, mobile, current;

    mobile = false;

    if (navigator.userAgent.toLowerCase().indexOf('mobile') > -1) { // detecting mobile
        mobile = true;
    }

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
            if (opacity < 0.5) { opacity = 0.5; } /* optional */

            selector('path', this)[0].setAttribute('style', 'opacity: ' + opacity + ';');

        }

    });

    arr = [];

    toolbar = selector('.toolbar', map);
    toolbarContent = selector('span', toolbar)[0];

    function showToolbar(e) {

        clearTimeout(window.SVGMapToolbarTimer);
        toolbar.setAttribute('style', 'top: ' + (e.clientY - (toolbar.offsetHeight + 14)) + 'px; left:' + (e.clientX - (toolbar.offsetWidth / 2)) + 'px;');

        if (e.target.toString() === '[object SVGPathElement]') {

            p = e.target.parentNode;
            toolbarContent.innerHTML = e.target.getAttribute('id') + ': ' + p.getAttribute('data-size');

            if (mobile) {

                current = selector('.svg-map [data-current]');
                if (current.length > 0) {
                    current[0].removeAttribute('data-current');
                }

                p.setAttribute('data-current', '');

            }

        }

        if (e.target.toString() === '[object SVGSVGElement]') {
            svgMapClose();

        } else {

            window.SVGMapToolbarTimer = setTimeout(function () {

                events.addClass(toolbar, 'open');

                setTimeout(function () {
                    events.addClass(toolbar, 'open-ease');
                }, 0);

            }, 300);

        }

        if (mobile) {

            events.on('body', 'touchstart.SVGMapToolbarClose', function (e) {

                if (e.target.toString() !== '[object SVGPathElement]') {

                    events.off('body', 'touchstart.SVGMapToolbarClose');
                    svgMapClose();

                }

            });

        }

    }

    if (!mobile) {

        events.on(map, 'mousemove', function (e) { showToolbar(e); });
        events.on(map, 'mouseleave', svgMapClose);

        events.on(g, 'click', function () {
            window.location = this.getAttribute('data-href');
        });

    } else {

        events.on(map, 'click', function (e) { showToolbar(e); });

        events.on(toolbar, 'click', function () {
            window.location = selector('.svg-map [data-current]')[0].getAttribute('data-href');
        });

    }

}

/*!loader */
events.onload(function () {

    'use strict';
    svgMap();

});

/*!scroll loader */
events.on(window, 'scroll', function () {

    'use strict';
    svgMapClose();

});
