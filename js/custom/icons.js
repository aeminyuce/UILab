/*globals window, document, ui, setTimeout */

ui.onload(function () {

    'use strict';

    var buttons, icons, totalIcons;

    totalIcons = 0;
    buttons = ui.find('.icon-modifiers .btn');

    ui.on(buttons, 'click', function () {

        var that, list, bttns, size, weight;

        that = this;
        list = ui.find('.icons-list');
        bttns = ui.find('.btn', this.parentElement);

        ui.removeClass(bttns, 'ui-fill-dark-100');
        setTimeout(function () {
            ui.addClass(that, 'ui-fill-dark-100');
        }, 0);

        // change size
        size = this.getAttribute('data-ui-size');
        if (size !== null) {

            ui.removeClass(list, 'icons-xxl icons-xl icons-lg icons-sm icons-xs icons-xxs');

            if (size !== '') {
                ui.addClass(list, 'icons-' + size);
            }

        }

        // change weight
        weight = this.getAttribute('data-ui-weight');
        if (weight !== null) {

            ui.removeClass(list, 'icons-black icons-bold icons-semibold icons-light icons-thin');

            if (weight !== '') {
                ui.addClass(list, 'icons-' + weight);
            }

        }

    });

    ui.each('.icons-list', function () {

        var total = ui.find('li', this).length;

        this.previousElementSibling.insertAdjacentHTML(
            'beforeend',
            ' <small class="margin-5-v block opacity-half">(' + total + ' icons)</small>'
        );

        totalIcons += total;

    });

    ui.find('.total')[0].textContent = '(Total ' + totalIcons + ' icons)';

    icons = ui.find('.icons-list li');
    ui.on(icons, 'click', function () {

        var range, iconName;

        range = document.createRange();

        iconName = ui.find('span', this)[0];
        range.selectNode(iconName);

        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);

        document.execCommand('copy');

        ui.alerts.message({
            msg: '<b>Copied!</b><br>' + iconName.textContent,
        });

    });

    // settings
    ui.alerts.messageTheme = 'theme-default2 ui-fill-dark-100';

});