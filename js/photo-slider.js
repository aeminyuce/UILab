/*
 UI Photo Slider JS
 Requires UI JS
*/

ui.photoSlider = {};

(function () {

    'use strict';

    var count, dataSrcLists, loadedImages;

    /*globals window, document, ui, Image */
    function photoSliderLoader() {

        var slider, j, retina, images, dataSrc, nav, navHtml;

        slider = ui.find('.photo-slider');
        images = ui.find('.photo-slider img');

        ui.each(images, function (i) {

            if (dataSrcLists[i] === undefined) {

                retina = false;
                if (window.devicePixelRatio > 1) { // check retina images

                    dataSrc = images[i].getAttribute('data-ui-srcset');
                    if (dataSrc !== null && dataSrc !== '') { retina = true; }

                }

                if (!retina) { dataSrc = images[i].getAttribute('data-ui-src'); }
                ui.addClass(slider[i], 'loaded');

                if (dataSrc !== null && dataSrc !== '') {

                    loadedImages[i] = [];
                    dataSrcLists[i] = dataSrc.replace(/[\s]/g, '').split(',');

                } else {

                    dataSrcLists[i] = '';
                    return;

                }

            } else { return; }

            if (!dataSrcLists[i][0].match(/(\.png|\.gif|\.jpeg|\.jpg)$/g)) { return; }

            images[i].removeAttribute('data-ui-src');
            images[i].removeAttribute('data-ui-srcset');

            // create nav
            nav = ui.find('.slider-nav', slider[i])[0];
            if (dataSrcLists[i].length > 1) {

                ui.addClass(ui.find('button', slider[i]), 'show');
                ui.addClass(nav, 'show');

                if (nav.innerHTML === '') {

                    navHtml = '';

                    for (j = 0; j < dataSrcLists[i].length; j++) {

                        if (j === 0) {
                            navHtml += '<i class="selected ease-layout"></i>';
                        } else {
                            navHtml += '<i class="ease-layout"></i>';
                        }

                    }

                    nav.insertAdjacentHTML('beforeend', navHtml);

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

            'click', '.photo-slider button',
            function (e) {

                e.preventDefault();
                var slider, i, img, retina, total, dots;

                slider = ui.closest(this, '.photo-slider')[0];
                if (slider === undefined) { return; }

                img = ui.find('img', slider)[0];

                i = Array.prototype.slice.call(ui.find('.photo-slider')).indexOf(slider);
                if (count[i] === undefined) { count[i] = 0; }

                total = (dataSrcLists[i].length - 1);

                if (ui.hasClass(this, 'slide-r')) { // right

                    if (count[i] >= total) { count[i] = total; return; }
                    count[i] += 1;

                } else { // left

                    if (count[i] <= 0) { count[i] = 0; return; }
                    count[i] -= 1;

                }

                dots = ui.find('.slider-nav i', slider);

                ui.removeClass(dots, 'selected');
                ui.addClass(dots[count[i]], 'selected');

                ui.removeClass(slider, 'loaded');

                retina = false;
                if (img.srcset !== '') { retina = true; }

                if (loadedImages[i][count[i]] === undefined) {

                    loadedImages[i][count[i]] = new Image();
                    if (retina) {

                        loadedImages[i][count[i]].srcset = dataSrcLists[i][count[i]];
                        loadedImages[i][count[i]].onload = function () {

                            img.srcset = loadedImages[i][count[i]].srcset;
                            ui.addClass(slider, 'loaded');

                        };

                        img.onerror = function () {
                            ui.removeClass(slider, 'loaded');
                        };

                    } else {

                        loadedImages[i][count[i]].src = dataSrcLists[i][count[i]];
                        loadedImages[i][count[i]].onload = function () {

                            img.src = loadedImages[i][count[i]].src;
                            ui.addClass(slider, 'loaded');

                        };

                        img.onerror = function () {
                            ui.removeClass(slider, 'loaded');
                        };

                    }

                } else {

                    if (retina) {
                        img.srcset = loadedImages[i][count[i]].srcset;

                    } else {
                        img.src = loadedImages[i][count[i]].src;
                    }

                    ui.addClass(slider, 'loaded');

                }

            });

    };

    // Loaders
    ui.onload(ui.photoSlider.Start);

    // ajax callback loader
    ui.on(document, 'ui:ajaxCallbacks', function () {
        if (ui.ajax.classNames.indexOf('photo-slider') > -1) { photoSliderLoader(); }
    });

}());
