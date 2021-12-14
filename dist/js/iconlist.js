ui.iconlist = {
  target: 'iconlist',
  nameTools: 'iconlist-tools',
  nameTotal: 'iconlist-total',
  nameIconsPrefix: 'ui-icons-',
  nameBtn: 'ui-btn',
  stylesToolActive: 'ui-fill-dark-100',
  stylesTotal: 'ui-font-16 ui-m-5-v ui-block ui-opacity-half',
  stylesIconWeights: 'ui-icons-bold ui-icons-semibold ui-icons-light ui-icons-thin',
  stylesIconSizes: 'ui-icons-xxl ui-icons-xl ui-icons-lg ui-icons-sm ui-icons-xs',
  dataSize: 'data-ui-size',
  dataWeight: 'data-ui-weight',
  msgTotal: 'Total icons',
  msgCopied: 'Copied!'
};

(function () {
  ui.iconlist.Start = function () {
    var tools, list, icons, totalIcons;
    list = ui.find('.' + ui.iconlist.target);
    tools = ui.find('.' + ui.iconlist.nameTools + ' .' + ui.iconlist.nameBtn);

    if (list[0] === undefined || tools[0] === undefined) {
      return;
    }

    totalIcons = 0;
    ui.on(tools, 'click', function () {
      var that, buttons, size, weight;
      that = this;
      buttons = ui.find('.' + ui.iconlist.nameBtn, this.parentElement);
      ui.removeClass(buttons, ui.iconlist.stylesToolActive);
      setTimeout(function () {
        ui.addClass(that, ui.iconlist.stylesToolActive);
      }, 0);
      size = this.getAttribute(ui.iconlist.dataSize);

      if (size !== null) {
        ui.removeClass(list, ui.iconlist.stylesIconSizes);

        if (size !== '') {
          ui.addClass(list, ui.iconlist.nameIconsPrefix + size);
        }
      }

      weight = this.getAttribute(ui.iconlist.dataWeight);

      if (weight !== null) {
        ui.removeClass(list, ui.iconlist.stylesIconWeights);

        if (weight !== '') {
          ui.addClass(list, ui.iconlist.nameIconsPrefix + weight);
        }
      }
    });
    ui.each('.' + ui.iconlist.target, function () {
      var total = ui.find('li', this).length;
      this.previousElementSibling.insertAdjacentHTML('beforeend', ' <span class="' + ui.iconlist.stylesTotal + '">(' + total + ' icons)</span>');
      totalIcons += total;
    });
    ui.find('.' + ui.iconlist.nameTotal)[0].textContent = '(' + ui.iconlist.msgTotal + ': ' + totalIcons + ')';
    icons = ui.find('.' + ui.iconlist.target + ' li');
    ui.on(icons, 'click', function () {
      var range, iconName;
      range = document.createRange();
      iconName = ui.find('span', this)[0];
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
