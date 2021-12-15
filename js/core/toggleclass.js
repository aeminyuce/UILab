// toggleclass
import { ui } from './globals.js';
export default () => ui;

ui.toggleClass = function (t, name) {

    var isSvgElements, arr, newArr, index, l = ui.find(t), i, j, re = new RegExp('^\\s+|\\s+$');

    name = name.split(' ');

    for (i = 0; i < l.length; i++) {

        isSvgElements = ui.globals.svgElems.indexOf(l[i].tagName.toLowerCase()) !== -1; // check SVG and own elements

        if (isSvgElements) {
            arr = l[i].className.baseVal.split(' ');

        } else {
            arr = l[i].className.split(' ');
        }

        for (j = 0; j < name.length; j++) {

            newArr = arr;
            index = newArr.indexOf(name[j]);

            if (index >= 0) { newArr.splice(index, 1); } else { newArr.push(name[j]); }

            if (isSvgElements) {
                l[i].className.baseVal = arr.join(' ');

            } else {

                newArr = newArr.join(' ').replace(re, '');

                if (newArr.length === 0) {
                    l[i].removeAttribute('class');

                } else { l[i].className = newArr; }

            }

        }
    }

}