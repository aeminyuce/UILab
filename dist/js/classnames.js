ui.classnames = {
  targetList: 'classnames-list',
  targetAlerts: 'classnames-alerts',
  nameTotal: 'classnames-total',
  stylesNoErrors: 'ui-opacity-half',
  stylesWarningSep: 'ui-font-18 ui-font-capitalize ui-m-20-t',
  stylesError: 'ui-color-red',
  stylesWarning: 'ui-color-yellow',
  stylesCatTite: 'ui-h4 ui-font-capitalize ui-m-10-b',
  stylesCatCard: 'ui-card ui-font-16 ui-round ui-p-10 ui-shadow-lg',
  stylesCatList: 'ui-list-unstyled ui-list-sp-5',
  stylesCatRow: 'ui-row ui-xs-fluid',
  stylesCatCol: 'ui-col-lg-3 ui-col-4 ui-col-sm-6',
  listColLength: 6,
  filePath: 'xhr/ajax-pages.php',
  prefix: 'ui',
  jsTarget: 'target',
  jsName: 'name',
  jsStyles: 'styles',
  jsIgnore: 'Prefix|Suffix',
  msgErrors: 'Errors',
  msgNoErrors: '* No errors detected *',
  msgEmpty: 'Empty Classname!',
  msgDuplicate: 'Prefix Duplicated'
};

ui.classnames.Start = function () {
  var arr = [];
  arr.list = [];
  arr.error = [];
  arr.warning = [];
  arr.filtered = [];
  arr.groups = [];
  var lastAddedWarning = '';
  var list = ui.find('.' + ui.classnames.targetList)[0];
  var alerts = ui.find('.' + ui.classnames.targetAlerts)[0];

  if (list === undefined || alerts === undefined) {
    return;
  }

  var total = ui.find('.' + ui.classnames.nameTotal)[0];
  ui.ajax({
    url: ui.classnames.filePath,
    callback: function callback() {}
  });
  ui.on(document, ui.globals.eventAjaxCallback, function () {
    var loaded = [];
    var re = ui.classnames.jsTarget + '+\\w*|' + ui.classnames.jsTarget + '|' + ui.classnames.jsName + '+\\w*' + '|' + ui.classnames.jsStyles + '+\\w*';
    re = new RegExp(re, 'g');

    for (var jsModule in ui) {
      for (var jsKey in ui[jsModule]) {
        if (jsKey.match(re) !== null && jsKey.match(ui.classnames.jsIgnore) === null) {
          var jsClass = ui[jsModule][jsKey];

          if (typeof jsClass === 'string') {
            var jsStyleList = jsClass.toString().split(' ');

            if (jsStyleList.length > 1) {
              jsStyleList.forEach(function (style) {
                loaded.push(style);
              });
            } else if (jsClass !== '') {
              loaded.push(jsClass);
            }
          }
        }
      }
    }

    ui.ajax.classNames.forEach(function (name) {
      loaded.push(name);
    });
    loaded = loaded.filter(function (value, index, self) {
      return self.indexOf(value) === index;
    });
    loaded.forEach(function (name) {
      var reStart = ui.classnames.prefix + '-+\\w+';
      reStart = new RegExp(reStart, 'g');
      var reDuplicate = '(' + ui.classnames.prefix + '-)|(-' + ui.classnames.prefix + ')';
      reDuplicate = new RegExp(reDuplicate, 'g');
      var str = name.toString();
      var strStart = str.match(reStart);

      if (strStart === null) {
        if (str === '') {
          arr.error.push(ui.classnames.msgEmpty);
        } else {
          arr.warning.push(str);
        }
      } else {
        arr.list.push(str);
      }

      var strLength = str.match(reDuplicate);

      if (strLength !== null) {
        strLength = Number(str.match(reDuplicate).length);

        if (strLength > 1) {
          arr.error.push(ui.classnames.msgDuplicate + ': ' + str);
        }
      }
    });

    if (arr.error.length === 0) {
      alerts.insertAdjacentHTML('beforeend', '<li class="' + ui.classnames.stylesNoErrors + '">' + ui.classnames.msgNoErrors + '</li>');
    } else {
      alerts.insertAdjacentHTML('beforeend', '<li class="' + ui.classnames.stylesWarningSep + '">' + ui.classnames.msgErrors + '</li>');
    }

    arr.error.forEach(function (name) {
      alerts.insertAdjacentHTML('beforeend', '<li class="' + ui.classnames.stylesError + '">' + name + '</li>');
    });
    arr.warning = arr.warning.sort();
    arr.warning.forEach(function (name) {
      if (lastAddedWarning === '' || lastAddedWarning.split('-')[0] !== name.split('-')[0]) {
        alerts.insertAdjacentHTML('beforeend', '<li class="' + ui.classnames.stylesWarningSep + '">' + name.split('-')[0] + '</li>');
      }

      alerts.insertAdjacentHTML('beforeend', '<li class="' + ui.classnames.stylesWarning + '">' + name + '</li>');
      lastAddedWarning = name;
    });

    var filterClassnames = function filterClassnames(that) {
      var title = that.split('-')[1];

      if (title === 'no' || title === 'xl' || title === 'lg' || title === 'md' || title === 'sm' || title === 'xs') {
        title = that.split('-')[2];
      }

      if (title === 'no') {
        title = that.split('-')[3];
      }

      if (['desktop', 'windows', 'edg', 'edge', 'ie', 'chrome', 'firefox', 'opera', 'mac', 'safari', 'mobile', 'ios', 'android'].indexOf(title) >= 0) {
        title = 'user agents';
      } else if (['container', 'fluid', 'fixed', 'row', 'gutter', 'col', 'push', 'pull', 'offset', 'order'].indexOf(title) >= 0) {
        title = 'grids';
      } else if (['open', 'active', 'selected', 'pause', ' show', 'showed', 'faded', 'odd', 'even', 'asc', 'desc', 'filtered', 'checked', 'loaded', 'success', 'resized', 'changed'].indexOf(title) >= 0) {
        title = 'helpers';
      } else if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].indexOf(title) >= 0) {
        title = 'headings';
      } else if (['form', 'input', 'select', 'dual', 'textarea', 'indeterminate', 'range', 'check', 'radio', 'switch', 'currency', 'spinner', 'file', 'number', 'required', 'label', 'pass'].indexOf(title) >= 0) {
        title = 'forms';
      } else if (['w', 'weather', 'days', 'graphs', 'reports', 'now', 'clear', 'night'].indexOf(title) >= 0) {
        title = 'weather';
      } else if (['code', 'rtl', 'pre', 'hr'].indexOf(title) >= 0) {
        title = 'typography';
      } else if (['theme', 'fill', 'stroke', 'text'].indexOf(title) >= 0) {
        title = 'themes';
      } else if (['line', 'donut', 'pie'].indexOf(title) >= 0) {
        title = 'charts';
      } else if (['icon', 'icons', 'toggle'].indexOf(title) >= 0) {
        title = 'icons';
      } else if (['dropdown', 'nav', 'menu'].indexOf(title) >= 0) {
        title = 'dropdowns';
      } else if (title === 'darkmode' || title === 'invert') {
        title = 'dark mode';
      } else if (title === 'carousel' || title === 'bring') {
        title = 'carousel';
      }

      if (title === 'header' || title === 'sticky') {
        title = 'header';
      }

      if (title === 'alerts' || title === 'dialog') {
        title = 'alerts';
      }

      if (title === 'header' || title === 'sticky') {
        title = 'header';
      } else if (title === 'm') {
        title = 'margin';
      }

      if (title === 'p') {
        title = 'padding';
      }

      if (title === 'sp') {
        title = 'spacer';
      }

      if (title === 'ease') {
        title = 'effects';
      }

      if (title === 'imgupload') {
        title = 'image upload';
      }

      return title;
    };

    arr.list.forEach(function (name) {
      var title = filterClassnames(name);

      if (arr.filtered.indexOf(title) === -1) {
        arr.filtered.push(title);
      }
    });
    arr.list.forEach(function (name) {
      var title = filterClassnames(name);

      if (arr.filtered.indexOf(title) > -1) {
        if (arr.groups[title] === undefined) {
          arr.groups[title] = name;
        } else {
          arr.groups[title] += ', ' + name;
        }
      }
    });
    var html, items;
    var created = 0;
    arr.filtered = arr.filtered.sort(function (a, b) {
      return a.localeCompare(b);
    });
    arr.filtered.forEach(function (name) {
      items = arr.groups[name].split(',');
      items = items.sort(function (a, b) {
        return a.length - b.length || a.localeCompare(b, undefined, {
          numeric: true,
          sensitivity: 'base'
        });
      });
      html = '<h4 class="' + ui.classnames.stylesCatTite + '">' + name + '</h4>' + '<div class="' + ui.classnames.stylesCatCard + '">' + '<div class="' + ui.classnames.stylesCatRow + '">';
      items.forEach(function (item, i) {
        if (parseInt(i / ui.classnames.listColLength) === i / ui.classnames.listColLength) {
          if (i !== 0) {
            html += '</ul></div>';
          }

          html += '<div class="' + ui.classnames.stylesCatCol + '">' + '<ul class="' + ui.classnames.stylesCatList + '">';
        }

        if (item.indexOf('[native code]') === -1) {
          item = item.replace(/^\s+|\s+$/g, '');
          html += '<li>' + item + '</li>';
          created += 1;
        }
      });
      html += '</ul></div></div></div>';
      list.insertAdjacentHTML('beforeend', html);
    });
    total.textContent = arr.filtered.length + ' / ' + created;
    loaded = [];
    arr = [];
    html = "";
    items = "";
  });
};

ui.onload(ui.classnames.Start);
