/* closest */

import { ui } from './globals.js';
export default () => ui;

ui.closest = function (that, outer) {

    let outerEl, parentEl;

    if (outer instanceof Object) outerEl = [outer];
    else outerEl = ui.find(outer);

    let elems = [];

    Array.prototype.forEach.call(ui.find(that),

        el => {

            parentEl = el.parentNode;
            while (parentEl) {

                for (let i = 0; i < outerEl.length; i++) {

                    if (parentEl === outerEl[i]) {

                        elems = ui.find(parentEl);
                        return;

                    }

                }

                parentEl = parentEl.parentNode;

            }

        });

    return elems;

}