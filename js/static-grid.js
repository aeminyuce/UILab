/*
 Static Grid JS
 Static Grid JS requires Events JS
*/

/*globals window, document, selector, events */
function staticGridFnc() {

    'use strict';
    var screenW, fnc, o, p, siblings, i;

    if (selector('[class*="static-"][class*="order-"]').length > 0) {

        fnc = function (classType, size) {

            if (size) {

                events.each('[class*="order-' + classType + '-"]', function () {

                    p = this.parentElement;
                    siblings = p.children;

                    i = Array.prototype.slice.call(this.parentElement.children).indexOf(this);

                    if (events.hasClass(this, 'order-' + classType + '-first') && i !== 0) {
                        this.setAttribute('data-ordered-from', i);
                        p.insertBefore(this, p.firstChild);
                    }
                    if (events.hasClass(this, 'order-' + classType + '-last') && i !== (siblings.length - 1)) {
                        this.setAttribute('data-ordered-from', i);
                        p.appendChild(this);
                    }

                });

            } else {

                events.each('[class*="order-' + classType + '-"][data-ordered-from]', function () {

                    o = parseInt(this.getAttribute('data-ordered-from'), 10);
                    p = this.parentElement;
                    siblings = p.children;

                    if (events.hasClass(this, 'order-' + classType + '-first')) {
                        this.removeAttribute('data-ordered-from');
                        p.insertBefore(this, siblings[o + 1]);
                    } else {
                        this.removeAttribute('data-ordered-from');
                        p.insertBefore(this, siblings[o]);
                    }

                });

            }

        };

        screenW = selector(document)[0].offsetWidth;

        fnc('xs', screenW < 481);
        fnc('sm', screenW < 768);
        fnc('md', screenW < 960);
        fnc('default', screenW < 1200);
        fnc('lg', screenW > 1199);
        fnc('xl', screenW > 1679);

    }

}

/*!loader */
events.onload(function () {

    'use strict';
    staticGridFnc();

});

/*!resize loader*/
events.on(window, 'resize', function () {

    'use strict';
    staticGridFnc();

});

/*!ajax callback loader: requires Ajax JS */
events.on(document, 'ajaxCallbacks', function () {

    'use strict';
    if (window.ajaxClassNames.indexOf('order-') > -1) { staticGridFnc(); }

});
