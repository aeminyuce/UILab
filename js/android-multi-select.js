/*
 Android Multi Select JS
 Android Multi Select JS requires Events JS
*/

var androidMultiselect = {};

(function () {

    'use strict';
    /*globals document, selector, events, ajax, navigator */

    var checkMultiselects;

    androidMultiselect.Start = function () {

        var titleText, userLang, multiSelects, i, select, options, selected, html;

        userLang = (navigator.language || navigator.userLanguage).split('-')[0];
        if (userLang === 'tr') { titleText = 'Öğe'; } else { titleText = 'Item(s)'; }

        checkMultiselects = function () {

            multiSelects = selector('.android .select-multi:not(.checked-for-android)');
            if (multiSelects.length > 0) {

                events.each(multiSelects, function () {

                    selected = [];

                    select = selector('select', this)[0];
                    options = select.options;

                    for (i = 0; i < options.length; i += 1) {
                        if (options[i].selected) { selected.push(options[i].value); }
                    }

                    html = '<option selected disabled>' + selected.length + ' ' + titleText + '</option>';
                    select.insertAdjacentHTML('afterbegin', html); //https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML

                    events.addClass(this, 'checked-for-android');

                });

            }

        };
        checkMultiselects();

        // Events
        events.on(document, 'change', '.android .select-multi select', function () {

            selected = [];
            options = this.options;

            for (i = 0; i < options.length; i += 1) {
                if (options[i].selected) { selected.push(options[i].value); }
            }

            options[0].innerHTML = (selected.length - 1) + ' ' + titleText;
            events.trigger(this, 'blur');

        });


        events.on(document, 'reset', '.android form', function () {

            options = this.querySelectorAll('select'); // getting html porperties (not nodelist!)

            events.each(options, function () {
                this.options[0].innerHTML = '0 ' + titleText;
            });

        });

    };

    // Loaders
    events.onload(androidMultiselect.Start);

    // ajax callback loader: requires Ajax JS
    events.on(document, 'ajaxCallbacks', function () {

        if (navigator.userAgent.toLowerCase().indexOf('android') > -1) {
            if (ajax.classNames.indexOf('select-multi') > -1) { checkMultiselects(); }
        }

    });

}());
