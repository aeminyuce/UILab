/* sidebar */

import { ui } from './../core/globals.js';
export default () => ui;

ui.sidebar = {

    // targets
    target: 'ui-sidebar',
    targetHolder: 'body',
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

(() => {

    var getScrollPos;

    ui.sidebar.close = function (panel) {

        var i, id, el, contents, bg;

        bg = ui.find('.' + ui.sidebar.targetBg)[0];

        ui.removeClass(panel, ui.globals.nameOpenEase);
        ui.removeClass(bg, ui.globals.nameOpenEase);

        ui.removeClass(document, ui.sidebar.nameOpened);

        setTimeout(() => {

            ui.removeClass(panel, ui.globals.nameOpen);
            ui.removeClass(bg, ui.globals.nameOpen);

        }, ui.globals.slow);

        contents = ui.find('[' + ui.sidebar.dataID + ']');

        for (i = 0; i < contents.length; i++) {

            id = '.' + ui.sidebar.nameTargetPrefix + contents[i].getAttribute(ui.sidebar.dataID);
            el = ui.find(id)[0];

            contents[i].removeAttribute(ui.sidebar.dataID);

            el.appendChild(contents[i]);
            el.parentNode.insertBefore(el.firstChild, el);
            el.remove();

        }

        ui.off('.' + ui.sidebar.nameClose, 'click');

    };

    ui.sidebar.Start = () => {

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

                        if (index !== null && index !== '') indexArr.push(Number(index));
                        else indexArr.push(i);

                    }

                    for (i = 0; i < importers.length; i++) {
                        moveFnc(importers[i], indexArr[i]);
                    }

                } else return;

                panel = ui.find('.' + ui.sidebar.target + '.' + ui.sidebar.nameShowPrefix + position);
                content = ui.find('.' + ui.sidebar.nameContent, panel);

                filtered = html.filter((el) => el != null);

                for (j = 0; j < filtered.length; j++) {
                    content.appendChild(filtered[j]);
                }

                bg = ui.find('.' + ui.sidebar.targetBg)[0];
                if (bg === undefined) {

                    ui.find(ui.sidebar.targetHolder)[0].insertAdjacentHTML(
                        'beforeend',
                        '<div class="' + ui.sidebar.targetBg + ' ' + ui.sidebar.stylesBg + '"></div>'
                    );

                    bg = ui.find('.' + ui.sidebar.targetBg)[0];

                }

                ui.addClass(document, ui.sidebar.nameOpened);

                ui.addClass(panel, ui.globals.nameOpen);
                ui.addClass(bg, ui.globals.nameOpen);

                setTimeout(() => {

                    ui.addClass(panel, ui.globals.nameOpenEase);
                    ui.addClass(bg, ui.globals.nameOpenEase);

                    setTimeout(() => {
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

                var panel = ui.find('.' + ui.sidebar.target + '.' + ui.globals.nameOpen);
                ui.sidebar.close(panel);

            });

    };

    // loaders
    ui.onload(ui.sidebar.Start);

    ui.on(window,
        'resize',

        () => {

            if (window.innerWidth === getScrollPos) return; // close only horizontal resizing

            var panel = ui.find('.' + ui.sidebar.target + '.' + ui.globals.nameOpen);

            if (panel.length > 0) ui.sidebar.close(panel);
            getScrollPos = window.innerWidth;

        });

})();