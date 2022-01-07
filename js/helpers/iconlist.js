/* iconlist */

ui.iconlist = {

    // targets
    target: 'iconlist',

    // main classnames
    nameTools: 'iconlist-tools',
    nameTotal: 'iconlist-total',

    nameIconsPrefix: 'ui-icons-',

    // outer classnames
    nameBtn: 'ui-btn',

    // styling classnames
    stylesToolActive: 'ui-fill-dark-100',
    stylesTotal: 'ui-font-16 ui-m-5-v ui-block ui-opacity-half',

    stylesIconSizes: 'ui-icons-xxl ui-icons-xl ui-icons-lg ui-icons-sm ui-icons-xs',

    // data attributes
    dataSize: 'data-ui-size',

    // messages
    msgTotal: 'Total icons',
    msgCopied: 'Copied!'
};

ui.iconlist.Start = () => {

    const list = ui.find('.' + ui.iconlist.target);
    const tools = ui.find('.' + ui.iconlist.nameTools + ' .' + ui.iconlist.nameBtn);

    if (list[0] === undefined || tools[0] === undefined) { return; }

    let totalIcons = 0;

    ui.on(tools,
        'click',

        function () {

            const that = this;
            const buttons = ui.find('.' + ui.iconlist.nameBtn, this.parentElement);

            ui.removeClass(buttons, ui.iconlist.stylesToolActive);

            setTimeout(() => {
                ui.addClass(that, ui.iconlist.stylesToolActive);
            }, 0);

            // change size
            const size = this.getAttribute(ui.iconlist.dataSize);
            if (size !== null) {

                ui.removeClass(list, ui.iconlist.stylesIconSizes);

                if (size !== '') {
                    ui.addClass(list, ui.iconlist.nameIconsPrefix + size);
                }

            }

        });

    ui.find('.' + ui.iconlist.target).forEach(el => {

        const total = ui.find('li', el).length;

        el.previousElementSibling.insertAdjacentHTML(
            'beforeend',
            ' <span class="' + ui.iconlist.stylesTotal + '">(' + total + ' icons)</span>'
        );

        totalIcons += total;

    });

    ui.find('.' + ui.iconlist.nameTotal)[0].textContent = '(' + ui.iconlist.msgTotal + ': ' + totalIcons + ')';

    const icons = ui.find('.' + ui.iconlist.target + ' li');

    ui.on(icons,
        'click',

        function () {

            const range = document.createRange();
            const iconName = ui.find('span', this)[0];

            range.selectNode(iconName);

            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);

            document.execCommand('copy');

            ui.alerts.message({
                msg: '<b>' + ui.iconlist.msgCopied + '</b><br>' + iconName.textContent,
            });

        });

};

// loaders
ui.onload(ui.iconlist.Start);