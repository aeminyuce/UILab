ui.iconlist = {
  target: 'iconlist',
  nameTools: 'iconlist-tools',
  nameTotal: 'iconlist-total',
  nameIconsPrefix: 'ui-icons-',
  nameBtn: 'ui-btn',
  stylesToolActive: 'ui-fill-dark-100',
  stylesTotal: 'ui-font-16 ui-m-5-v ui-block ui-opacity-half',
  stylesIconSizes: 'ui-icons-xxl ui-icons-xl ui-icons-lg ui-icons-sm ui-icons-xs',
  dataSize: 'data-ui-size',
  msgTotal: 'Total icons',
  msgCopied: 'Copied!'
};

(function () {
  ui.iconlist.Start = function () {
    var list = ui.find('.' + ui.iconlist.target);
    var tools = ui.find('.' + ui.iconlist.nameTools + ' .' + ui.iconlist.nameBtn);

    if (list[0] === undefined || tools[0] === undefined) {
      return;
    }

    var totalIcons = 0;
    ui.on(tools, 'click', function () {
      var that = this;
      var buttons = ui.find('.' + ui.iconlist.nameBtn, this.parentElement);
      ui.removeClass(buttons, ui.iconlist.stylesToolActive);
      setTimeout(function () {
        ui.addClass(that, ui.iconlist.stylesToolActive);
      }, 0);
      var size = this.getAttribute(ui.iconlist.dataSize);

      if (size !== null) {
        ui.removeClass(list, ui.iconlist.stylesIconSizes);

        if (size !== '') {
          ui.addClass(list, ui.iconlist.nameIconsPrefix + size);
        }
      }
    });
    ui.find('.' + ui.iconlist.target).forEach(function (el) {
      var total = ui.find('li', el).length;
      el.previousElementSibling.insertAdjacentHTML('beforeend', ' <span class="' + ui.iconlist.stylesTotal + '">(' + total + ' icons)</span>');
      totalIcons += total;
    });
    ui.find('.' + ui.iconlist.nameTotal)[0].textContent = '(' + ui.iconlist.msgTotal + ': ' + totalIcons + ')';
    var icons = ui.find('.' + ui.iconlist.target + ' li');
    ui.on(icons, 'click', function () {
      var range = document.createRange();
      var iconName = ui.find('span', this)[0];
      range.selectNode(iconName);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
      document.execCommand('copy');
      ui.alerts.message({
        msg: '<b>' + ui.iconlist.msgCopied + '</b><br>' + iconName.textContent
      });
    });
  };

  ui.onload(ui.iconlist.Start);
})();
