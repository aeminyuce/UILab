/* photoslide */

import { ui } from './../core/globals.js';
export default () => ui;

ui.photoslide = {

    // targets
    target: 'ui-photoslide',

    // main classnames
    nameNav: 'ui-photoslide-nav',

    namePrev: 'ui-photoslide-prev',
    nameNext: 'ui-photoslide-next',

    // outer classnames
    nameBtn: 'ui-btn',

    // tags
    tagNavDot: 'i',

    // values
    rexFiles: '(\.png|\.gif|\.jeg|\.jpg|\.svg)$', // .webp and .tiff not supported!

    // data attributes
    dataSrc: 'data-ui-src'

};

(() => {

    var
        count,
        dataSrcLists,
        loadedImages;

    ui.photoslide.Init = () => {

        var slider, j, images, dataSrc, nav, navDots, re;

        images = ui.find('.' + ui.photoslide.target + ' img');
        Array.prototype.forEach.call(images,

            (el, i) => {

                if (dataSrcLists[i] !== undefined) return;
                dataSrc = el.getAttribute(ui.photoslide.dataSrc);

                slider = ui.closest(el, '.' + ui.photoslide.target)[0];
                ui.addClass(slider, ui.globals.nameLoaded);

                if (dataSrc !== null && dataSrc !== '') {

                    loadedImages[i] = [];
                    dataSrcLists[i] = dataSrc.replace(/[\s]/g, '').split(',');

                } else {

                    dataSrcLists[i] = '';
                    return;

                }

                re = new RegExp(ui.photoslide.rexFiles);
                if (!dataSrcLists[i][0].match(re)) return;

                el.removeAttribute(ui.photoslide.dataSrc);

                // create nav
                nav = ui.find('.' + ui.photoslide.nameNav, slider)[0];
                if (dataSrcLists[i].length > 1) {

                    ui.addClass(ui.find('.' + ui.photoslide.nameBtn, slider), ui.globals.nameShow);
                    ui.addClass(nav, ui.globals.nameShow);

                    if (nav.innerHTML === '') {

                        navDots = '';

                        for (j = 0; j < dataSrcLists[i].length; j++) {

                            if (j === 0) {
                                navDots += '<' + ui.photoslide.tagNavDot + ' class="' + ui.globals.nameSelected + '"></' + ui.photoslide.tagNavDot + '>';

                            } else navDots += '<' + ui.photoslide.tagNavDot + '></' + ui.photoslide.tagNavDot + '>';

                        }

                        nav.insertAdjacentHTML('beforeend', navDots);

                    }

                }

            });

    }

    ui.photoslide.Start = () => {

        // empty arrays when reloading
        count = [];
        dataSrcLists = [];
        loadedImages = [];

        ui.photoslide.Init();

        // Event Listeners
        ui.on(document,

            'click', '.' + ui.photoslide.target + ' .' + ui.photoslide.nameBtn,

            function (e) {

                e.preventDefault();
                var slider, i, img, total, dots;

                slider = ui.closest(this, '.' + ui.photoslide.target)[0];
                if (slider === undefined) return;

                img = ui.find('img', slider)[0];

                i = Array.prototype.slice.call(ui.find('.' + ui.photoslide.target)).indexOf(slider);
                if (count[i] === undefined) { count[i] = 0; }

                total = (dataSrcLists[i].length - 1);

                if (ui.hasClass(this, ui.photoslide.namePrev)) {

                    if (count[i] <= 0) {
                        count[i] = 0; return;
                    }

                    count[i] -= 1;

                } else if (ui.hasClass(this, ui.photoslide.nameNext)) {

                    if (count[i] >= total) {
                        count[i] = total; return;
                    }

                    count[i] += 1;

                }

                dots = ui.find('.' + ui.photoslide.nameNav + ' i', slider);

                ui.removeClass(dots, ui.globals.nameSelected);
                ui.addClass(dots[count[i]], ui.globals.nameSelected);

                ui.removeClass(slider, ui.globals.nameLoaded);

                if (loadedImages[i][count[i]] === undefined) {

                    loadedImages[i][count[i]] = new Image();
                    loadedImages[i][count[i]].src = dataSrcLists[i][count[i]];

                    loadedImages[i][count[i]].onload = () => {

                        img.src = loadedImages[i][count[i]].src;
                        ui.addClass(slider, ui.globals.nameLoaded);

                    };

                    img.onerror = () => {
                        ui.removeClass(slider, ui.globals.nameLoaded);
                    };


                } else {

                    img.src = loadedImages[i][count[i]].src;
                    ui.addClass(slider, ui.globals.nameLoaded);

                }

            });

    };

    // loaders
    ui.onload(ui.photoslide.Start);

    // ajax callback loader
    ui.on(document,
        ui.globals.eventAjaxCallback,

        () => {
            if (ui.ajax.classNames.indexOf(ui.photoslide.target) > -1) ui.photoslide.Init();
        });

})();
