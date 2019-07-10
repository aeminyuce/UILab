/*
 Photo Slider JS
 Photo Slider JS requires Selector Js, Events JS
*/

var photoSlider = {};

(function () {

    'use strict';

    var
        blankImages = [],
        dataSrcLists = [],
        loadedImages = [],
        sliderCount = [];

    /*globals window, document, selector, events, Image */
    function photoSliderLoader() {

        var slider, j, images, dataSrc, nav, navHtml;

        slider = selector('.photo-slider');
        images = selector('.photo-slider img');

        events.each(images, function (i) {

            if (images[i].getBoundingClientRect().top <= (window.innerHeight + window.pageYOffset) + 50) {

                if (dataSrcLists[i] === undefined) {

                    dataSrc = images[i].getAttribute('data-src');
                    if (dataSrc !== null && dataSrc !== '') {

                        loadedImages[i] = [];

                        loadedImages[i][0] = new Image();
                        dataSrcLists[i] = dataSrc.replace(/[\s]/g, '').split(',');

                        blankImages[i] = images[i].src;

                    } else {

                        dataSrcLists[i] = '';
                        blankImages[i] = '';

                        return;

                    }

                } else { return; }

                if (!dataSrcLists[i][0].match(/(\.png|\.gif|\.jpeg|\.jpg)$/g)) { return; }
                loadedImages[i][0].src = dataSrcLists[i][0];

                images[i].removeAttribute('data-src');
                nav = selector('.slider-nav', slider[i])[0];

                if (dataSrcLists[i].length > 1) {

                    events.addClass(selector('button', slider[i]), 'show');
                    events.addClass(nav, 'show');

                    if (nav.innerHTML === '') {

                        navHtml = '';

                        for (j = 0; j < dataSrcLists[i].length; j += 1) {

                            if (j === 0) {
                                navHtml += '<i class="selected ease-layout"></i>';
                            } else {
                                navHtml += '<i class="ease-layout"></i>';
                            }

                        }

                        nav.insertAdjacentHTML('beforeend', navHtml);

                    }

                }

                loadedImages[i][0].onload = function () {

                    images[i].src = loadedImages[i][0].src;
                    events.addClass(slider[i], 'loader-pause');

                };

            } else { return; }

        });

    }
    photoSlider.Start = function () {

        photoSliderLoader();

        // Events
        events.on(document,

            'click', '.photo-slider button',
            function (e) {

                e.preventDefault();
                var slider, i, img, total, dots;

                slider = events.closest(this, '.photo-slider')[0];
                if (slider === undefined) { return; }

                img = selector('img', slider)[0];

                i = Array.prototype.slice.call(selector('.photo-slider')).indexOf(slider);
                if (sliderCount[i] === undefined) { sliderCount[i] = 0; }

                total = (dataSrcLists[i].length - 1);

                if (events.hasClass(this, 'slide-right')) {

                    if (sliderCount[i] >= total) { sliderCount[i] = total; return; }
                    sliderCount[i] += 1;

                } else {

                    if (sliderCount[i] <= 0) { sliderCount[i] = 0; return; }
                    sliderCount[i] -= 1;

                }

                dots = selector('.slider-nav i', slider);

                events.removeClass(dots, 'selected');
                events.addClass(dots[sliderCount[i]], 'selected');

                events.removeClass(slider, 'loader-pause');

                if (loadedImages[i][sliderCount[i]] === undefined) {

                    loadedImages[i][sliderCount[i]] = new Image();
                    loadedImages[i][sliderCount[i]].src = dataSrcLists[i][sliderCount[i]];

                    loadedImages[i][sliderCount[i]].onload = function () {

                        img.src = loadedImages[i][sliderCount[i]].src;
                        events.addClass(slider, 'loader-pause');

                    };

                    img.onerror = function () {

                        this.setAttribute('src', blankImages[i]);
                        events.removeClass(slider, 'loader-pause');

                    };

                } else {

                    img.src = loadedImages[i][sliderCount[i]].src;
                    events.addClass(slider, 'loader-pause');

                }

            });

    };

    // Loaders
    events.onload(photoSlider.Start);
    events.on(window, 'resize', photoSliderLoader);
    events.on(window, 'scroll', photoSliderLoader);

}());
