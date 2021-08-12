/*globals window, document, selector, events, setTimeout, alerts */

events.onload(function () {

    'use strict';

    var buttons, icons, totalIcons;

    totalIcons = 0;
    buttons = selector('.icon-modifiers .btn');

    events.on(buttons, 'click', function () {

        var that, list, bttns, size, weight;

        that = this;
        list = selector('.icons-list');
        bttns = selector('.btn', this.parentElement);

        events.removeClass(bttns, 'ui-bg-dark-100');
        setTimeout(function () {
            events.addClass(that, 'ui-bg-dark-100');
        }, 0);

        // change size
        size = this.getAttribute('data-size');
        if (size !== null) {

            events.removeClass(list, 'icons-xxl icons-xl icons-lg icons-sm icons-xs icons-xxs');

            if (size !== '') {
                events.addClass(list, 'icons-' + size);
            }

        }

        // change weight
        weight = this.getAttribute('data-weight');
        if (weight !== null) {

            events.removeClass(list, 'icons-black icons-bold icons-semibold icons-light icons-thin');

            if (weight !== '') {
                events.addClass(list, 'icons-' + weight);
            }

        }

    });

    events.each('.icons-list', function () {

        var total = selector('li', this).length;
        this.previousElementSibling.insertAdjacentHTML('beforeend', ' <small class="margin-5-v block opacity-half">(' + total + ' icons)</small>');

        totalIcons += total;

    });

    selector('.total')[0].textContent = '(Total ' + totalIcons + ' icons)';

    icons = selector('.icons-list li');
    events.on(icons, 'click', function () {

        var range, iconName;

        range = document.createRange();

        iconName = selector('span', this)[0];
        range.selectNode(iconName);

        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);

        document.execCommand('copy');

        alerts.message({
            msg: '<b>Copied!</b><br>' + iconName.textContent,
        });

    });

    // settings
    alerts.messageTheme = 'theme-default2 ui-bg-dark-100';

});