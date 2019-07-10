/*
 Number JS
 Number JS requires Selector Js, Events JS
*/

var number = {};

(function () {

    'use strict';
    /*globals document, events, setTimeout */

    number.Start = function () {

        // Events
        events.on(document, 'keypress', '.text > .number', function (e) {

            var c, isRefresh = false;

            if (e.which) {
                c = e.which;

            } else {

                c = e.keyCode;
                if (c === 116) { isRefresh = true; }

            }

            if (c !== 8 && c !== 9 && c !== 35 && c !== 36 && c !== 37 && c !== 39 && c !== 46 && !isRefresh && (c < 48 || c > 57)) {
                e.preventDefault();
            }

        });

        events.on(document, 'paste', '.text > .number', function () {

            var i, re, that, getValues, newValues, maxLength;

            that = this;

            maxLength = that.getAttribute('maxlength');
            that.removeAttribute('maxlength');

            setTimeout(function () {

                newValues = '';
                getValues = that.value.match(new RegExp(/[0-9]/, 'g'));

                if (getValues !== null) {

                    for (i = 0; i < getValues.length; i += 1) {
                        newValues += getValues[i];
                    }

                } else {

                    that.value = newValues;
                    return false;

                }

                if (maxLength !== null) {

                    re = '[0-9]{1,' + maxLength + '}';
                    re = new RegExp(re, 'g');

                    that.value = newValues.match(re)[0];
                    that.setAttribute('maxlength', maxLength);

                } else {
                    that.value = newValues;
                }

            }, 0);

        });

    };

    // Loaders
    events.onload(number.Start);

}());
