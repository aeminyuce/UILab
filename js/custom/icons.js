/*globals window, document, ui, setTimeout */

ui.onload(function () {

    'use strict';

    var buttons, icons, totalIcons;

    totalIcons = 0;
    buttons = ui.find('.ui-icon-modifiers .ui-btn');

    ui.on(buttons,
        'click',

        function () {

            var that, list, bttns, size, weight;

            that = this;
            list = ui.find('.ui-icons-list');
            bttns = ui.find('.ui-btn', this.parentElement);

            ui.removeClass(bttns, 'ui-fill-dark-100');
            setTimeout(function () {
                ui.addClass(that, 'ui-fill-dark-100');
            }, 0);

            // change size
            size = this.getAttribute('data-ui-size');
            if (size !== null) {

                ui.removeClass(list, 'ui-icons-xxl ui-icons-xl ui-icons-lg ui-icons-sm ui-icons-xs ui-icons-xxs');

                if (size !== '') {
                    ui.addClass(list, 'ui-icons-' + size);
                }

            }

            // change weight
            weight = this.getAttribute('data-ui-weight');
            if (weight !== null) {

                ui.removeClass(list, 'ui-icons-black ui-icons-bold ui-icons-semibold ui-icons-light ui-icons-thin');

                if (weight !== '') {
                    ui.addClass(list, 'ui-icons-' + weight);
                }

            }

        });

    ui.each('.ui-icons-list',

        function () {

            var total = ui.find('li', this).length;

            this.previousElementSibling.insertAdjacentHTML(
                'beforeend',
                ' <small class="margin-5-v block opacity-half">(' + total + ' icons)</small>'
            );

            totalIcons += total;

        });

    ui.find('.ui-total')[0].textContent = '(Total ' + totalIcons + ' icons)';

    icons = ui.find('.ui-icons-list li');
    ui.on(icons,
        'click',

        function () {

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

    ui.alerts.stylesMsgTheme = 'ui-theme-red ui-fill-dark-100';

});