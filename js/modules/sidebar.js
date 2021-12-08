/*
 UI Sidebar JS
 Requires UI Core JS
*/

ui.sidebar = {

    // targets
    target: 'ui-sidebar',
    targetBg: 'ui-sidebar-bg',

    // main classnames
    nameOpened: 'ui-sidebar-opened',
    nameClose: 'ui-sidebar-close',
    nameContent: 'ui-sidebar-content',

    nameTargetPrefix: 'ui-sbid-',
    nameShowPrefix: 'ui-sidebar-',
    nameShowMenuPrefix: 'ui-sidebar-show-',
    nameAddContentPrefix: 'ui-sidebar-add-',

    nameLeftSuffix: 'l',
    nameRightSuffix: 'r',

    // helper classnames
    nameOpen: 'ui-open',
    nameOpenEase: 'ui-open-ease',

    // styling classnames
    stylesBg: 'ui-ease-slow ui-ease-layout',

    // tags
    tagDataTarget: 'i',

    // data attributes
    dataID: 'data-ui-sbid',
    dataImport: 'data-ui-import',

    // custom events
    eventMenuOpen: 'ui:sidebarOpen'

};

(function () {

    /*globals window, document, ui, setTimeout */

    var getScrollPos;

    ui.sidebar.close = function (panel) {

        var i, id, el, contents, bg;

        bg = ui.find('.' + ui.sidebar.targetBg)[0];

        ui.removeClass(panel, ui.sidebar.nameOpenEase);
        ui.removeClass(bg, ui.sidebar.nameOpenEase);

        ui.removeClass(document, ui.sidebar.nameOpened);

        setTimeout(function () {

            ui.removeClass(panel, ui.sidebar.nameOpen);
            ui.removeClass(bg, ui.sidebar.nameOpen);

        }, ui.globals.slow);

        contents = ui.find('[' + ui.sidebar.dataID + ']');

        for (i = 0; i < contents.length; i++) {

            id = '.' + ui.sidebar.nameTargetPrefix + contents[i].getAttribute(ui.sidebar.dataID);
            el = ui.find(id)[0];

            contents[i].removeAttribute(ui.sidebar.dataID);

            el.appendChild(contents[i]);
            el.parentNode.insertBefore(el.firstChild, el);

            el.parentNode.removeChild(el);

        }

        ui.off('.' + ui.sidebar.nameClose, 'click');

    };

    ui.sidebar.Start = function () {

        // Event Listeners
        ui.on(document,
            'click',

            '[class*="' + ui.sidebar.nameShowMenuPrefix + '"]',

            function () {

                var html, importers, moveFnc, id, i, j, index, indexArr, position, bg, panel, filtered, content;

                html = [];
                position = ui.sidebar.nameLeftSuffix;

                if (ui.hasClass(this, ui.sidebar.nameShowMenuPrefix + ui.sidebar.nameRightSuffix)) {
                    position = ui.sidebar.nameRightSuffix;
                }

                moveFnc = function (that, j) {

                    id = new Date().getTime();
                    id = id.toString();
                    id = id.substring(id.length - 4, id.length) + j;

                    that.insertAdjacentHTML(
                        'beforebegin',

                        '<' + ui.sidebar.tagDataTarget + ' class="' + ui.sidebar.nameTargetPrefix + id + '" style="display: none;">' +
                        '</' + ui.sidebar.tagDataTarget + '>'
                    );

                    that.setAttribute(ui.sidebar.dataID, id);

                    html[j] = document.createDocumentFragment();
                    html[j].appendChild(that);

                };

                importers = ui.find('.' + ui.sidebar.nameAddContentPrefix + position);

                if (importers.length === 1) {
                    moveFnc(importers[0], 0);

                } else if (importers.length > 1) {

                    indexArr = [];

                    for (i = 0; i < importers.length; i++) {

                        index = importers[i].getAttribute(ui.sidebar.dataImport);

                        if (index !== null && index !== '') {
                            indexArr.push(Number(index));

                        } else {
                            indexArr.push(i);
                        }

                    }

                    for (i = 0; i < importers.length; i++) {
                        moveFnc(importers[i], indexArr[i]);
                    }

                } else { return; }

                panel = ui.find('.' + ui.sidebar.target + '.' + ui.sidebar.nameShowPrefix + position);
                content = ui.find('.' + ui.sidebar.nameContent, panel);

                filtered = html.filter(function (el) {
                    return el != null;
                });

                for (j = 0; j < filtered.length; j++) {
                    content.appendChild(filtered[j]);
                }

                bg = ui.find('.' + ui.sidebar.targetBg)[0];
                if (bg === undefined) {

                    ui.find('body')[0].insertAdjacentHTML(
                        'beforeend',
                        '<div class="' + ui.sidebar.targetBg + ' ' + ui.sidebar.stylesBg + '"></div>'
                    );

                    bg = ui.find('.' + ui.sidebar.targetBg)[0];

                }

                ui.addClass(document, ui.sidebar.nameOpened);

                ui.addClass(panel, ui.sidebar.nameOpen);
                ui.addClass(bg, ui.sidebar.nameOpen);

                setTimeout(function () {

                    ui.addClass(panel, ui.sidebar.nameOpenEase);
                    ui.addClass(bg, ui.sidebar.nameOpenEase);

                    setTimeout(function () {
                        ui.trigger(document, ui.sidebar.eventMenuOpen + ' ' + ui.globals.eventDomChange); // set custom event
                    }, ui.globals.slow);

                }, 10);

                ui.on('.' + ui.sidebar.nameClose,
                    'click',

                    function () {
                        ui.sidebar.close(panel);
                    });

            });

        ui.on(document,
            'click',

            '.' + ui.sidebar.targetBg,

            function () {

                var panel = ui.find('.' + ui.sidebar.target + '.' + ui.sidebar.nameOpen);
                ui.sidebar.close(panel);

            });

    };

    // Loaders
    ui.onload(ui.sidebar.Start);

    ui.on(window,
        'resize',

        function () {

            if (window.innerWidth === getScrollPos) { return; } // close only horizontal resizing

            var panel = ui.find('.' + ui.sidebar.target + '.' + ui.sidebar.nameOpen);

            if (panel.length > 0) {
                ui.sidebar.close(panel);
            }

            getScrollPos = window.innerWidth;

        });

}());