/*
 Grid JS
 Grid JS requires Selector Js, Events JS
*/

var grid = {};

(function () {

    'use strict';
    /*globals window, document, selector, events, ajax */

    grid.Start = function () {

        var fnc, o, p, siblings, i;

        if (selector('[class*="col-"][class*="order-"]').length > 0) {

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

            fnc('xs', window.innerWidth < 481);
            fnc('sm', window.innerWidth < 768);
            fnc('md', window.innerWidth < 960);

            fnc('default', window.innerWidth < 1200);

            fnc('lg', window.innerWidth > 1199);
            fnc('xl', window.innerWidth > 1679);

        }

    };

    // Loaders
    events.onload(grid.Start);

    events.on(window, 'resize', grid.Start);
    events.on(document, 'domChange', grid.Start);

    // ajax callback loader: requires Ajax JS
    events.on(document, 'ajaxCallbacks', function () {
        if (ajax.classNames.indexOf('order-') > -1) { grid.Start(); }
    });

}());
