/*
 UI Photo Slider JS
 Requires UI JS
*/

ui.photoSlider = {

    // targets
    target: 'ui-photo-slider',

    // main classnames
    nameNav: 'ui-photo-slider-nav',

    // helper classNames
    namePrev: 'ui-prev',
    nameNext: 'ui-next',

    nameShow: 'ui-show',
    nameSelected: 'ui-selected',
    nameLoaded: 'ui-loaded',

    // outer classnames
    nameBtn: 'ui-btn',

    // tags
    tagNavDot: 'i',

    // values
    rexFiles: '(\.png|\.gif|\.jeg|\.jpg|\.svg)$', // .webp and .tiff not supported!

    // data attributes
    dataSrc: 'data-ui-src'

};

(function () {

    'use strict';

    var
        count,
        dataSrcLists,
        loadedImages;

    /*globals document, ui, Image */
    function photoSliderLoader() {

        var slider, j, images, dataSrc, nav, navDots, re;

        images = ui.find('.' + ui.photoSlider.target + ' img');
        ui.each(images,

            function (i) {

                if (dataSrcLists[i] !== undefined) { return; }
                dataSrc = images[i].getAttribute(ui.photoSlider.dataSrc);

                slider = ui.closest(this, '.' + ui.photoSlider.target)[0];
                ui.addClass(slider, ui.photoSlider.nameLoaded);

                if (dataSrc !== null && dataSrc !== '') {

                    loadedImages[i] = [];
                    dataSrcLists[i] = dataSrc.replace(/[\s]/g, '').split(',');

                } else {

                    dataSrcLists[i] = '';
                    return;

                }

                re = new RegExp(ui.photoSlider.rexFiles);
                if (!dataSrcLists[i][0].match(re)) { return;  }

                images[i].removeAttribute(ui.photoSlider.dataSrc);

                // create nav
                nav = ui.find('.' + ui.photoSlider.nameNav, slider)[0];
                if (dataSrcLists[i].length > 1) {

                    ui.addClass(ui.find('.' + ui.photoSlider.nameBtn, slider), ui.photoSlider.nameShow);
                    ui.addClass(nav, ui.photoSlider.nameShow);

                    if (nav.innerHTML === '') {

                        navDots = '';

                        for (j = 0; j < dataSrcLists[i].length; j++) {

                            if (j === 0) {
                                navDots += '<' + ui.photoSlider.tagNavDot + ' class="' + ui.photoSlider.nameSelected + '"></' + ui.photoSlider.tagNavDot + '>';

                            } else {
                                navDots += '<' + ui.photoSlider.tagNavDot  + '></' + ui.photoSlider.tagNavDot  + '>';
                            }

                        }

                        nav.insertAdjacentHTML('beforeend', navDots);

                    }

                }

            });

    }

    ui.photoSlider.Start = function () {

        // empty arrays when reloading
        count = [];
        dataSrcLists = [];
        loadedImages = [];

        photoSliderLoader();

        // Event Listeners
        ui.on(document,

            'click', '.' + ui.photoSlider.target + ' .' + ui.photoSlider.nameBtn,

            function (e) {

                e.preventDefault();
                var slider, i, img, total, dots;

                slider = ui.closest(this, '.' + ui.photoSlider.target)[0];
                if (slider === undefined) { return; }

                img = ui.find('img', slider)[0];

                i = Array.prototype.slice.call(ui.find('.' + ui.photoSlider.target)).indexOf(slider);
                if (count[i] === undefined) { count[i] = 0; }

                total = (dataSrcLists[i].length - 1);

                if (ui.hasClass(this, ui.photoSlider.namePrev)) {

                    if (count[i] <= 0) {
                        count[i] = 0; return;
                    }

                    count[i] -= 1;

                } else if (ui.hasClass(this, ui.photoSlider.nameNext)) {

                    if (count[i] >= total) {
                        count[i] = total; return;
                    }

                    count[i] += 1;

                }

                dots = ui.find('.' + ui.photoSlider.nameNav + ' i', slider);

                ui.removeClass(dots, ui.photoSlider.nameSelected);
                ui.addClass(dots[count[i]], ui.photoSlider.nameSelected);

                ui.removeClass(slider, ui.photoSlider.nameLoaded);

                if (loadedImages[i][count[i]] === undefined) {

                    loadedImages[i][count[i]] = new Image();
                    loadedImages[i][count[i]].src = dataSrcLists[i][count[i]];

                    loadedImages[i][count[i]].onload = function () {

                        img.src = loadedImages[i][count[i]].src;
                        ui.addClass(slider, ui.photoSlider.nameLoaded);

                    };

                    img.onerror = function () {
                        ui.removeClass(slider, ui.photoSlider.nameLoaded);
                    };


                } else {

                    img.src = loadedImages[i][count[i]].src;
                    ui.addClass(slider, ui.photoSlider.nameLoaded);

                }

            });

    };

    // Loaders
    ui.onload(ui.photoSlider.Start);

    // ajax callback loader
    ui.on(document,
        ui.globals.eventAjaxCallback,

        function () {

            if (ui.ajax.classNames.indexOf(ui.photoSlider.target) > -1) {
                photoSliderLoader();
            }

        });

}());
