/*
 Photo Slider JS
 Photo Slider JS requires Selector Js, Events JS
*/

var photoSlider = {};

(function () {

    'use strict';

    var

        count = [],

        blankImages = [],
        dataSrcLists = [],
        loadedImages = [];
        
    /*globals window, document, selector, events, Image */
    function photoSliderLoader() {

        var slider, j, retina, images, dataSrc, nav, navHtml;

        slider = selector('.photo-slider');
        images = selector('.photo-slider img');

        events.each(images, function (i) {

            if (images[i].getBoundingClientRect().top <= (window.innerHeight + window.pageYOffset) + 50) {

                if (dataSrcLists[i] === undefined) {

                    retina = false;
                    if (window.devicePixelRatio > 1) { // check retina images

                        dataSrc = images[i].getAttribute('data-srcset');
                        if (dataSrc !== null && dataSrc !== '') { retina = true; }

                    }
                    
                    if (!retina) { dataSrc = images[i].getAttribute('data-src'); }

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

                images[i].removeAttribute('data-src');
                images[i].removeAttribute('data-srcset');
                
                if (retina) {
                    loadedImages[i][0].srcset = dataSrcLists[i][0];
                    images[i].removeAttribute('src');
                    
                } else {

                    loadedImages[i][0].src = dataSrcLists[i][0];
                    images[i].removeAttribute('srcset');

                }

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

                if (retina) {
                    
                    loadedImages[i][0].onload = function () {
                    
                        images[i].srcset = loadedImages[i][0].srcset;
                        events.addClass(slider[i], 'loader-pause');
    
                    };

                } else {

                    loadedImages[i][0].onload = function () {
                    
                        images[i].src = loadedImages[i][0].src;
                        events.addClass(slider[i], 'loader-pause');
    
                    }
                    
                }

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
                var slider, i, img, retina, total, dots;

                slider = events.closest(this, '.photo-slider')[0];
                if (slider === undefined) { return; }

                img = selector('img', slider)[0];

                i = Array.prototype.slice.call(selector('.photo-slider')).indexOf(slider);
                if (count[i] === undefined) { count[i] = 0; }

                total = (dataSrcLists[i].length - 1);

                if (events.hasClass(this, 'slide-right')) {

                    if (count[i] >= total) { count[i] = total; return; }
                    count[i] += 1;

                } else {

                    if (count[i] <= 0) { count[i] = 0; return; }
                    count[i] -= 1;

                }

                dots = selector('.slider-nav i', slider);

                events.removeClass(dots, 'selected');
                events.addClass(dots[count[i]], 'selected');

                events.removeClass(slider, 'loader-pause');

                retina = false;
                if (img.srcset !== '') { retina = true; }

                if (loadedImages[i][count[i]] === undefined) {

                    loadedImages[i][count[i]] = new Image();
                    if (retina) {

                        loadedImages[i][count[i]].srcset = dataSrcLists[i][count[i]];
                        loadedImages[i][count[i]].onload = function () {

                            img.srcset = loadedImages[i][count[i]].srcset;
                            events.addClass(slider, 'loader-pause');
    
                        }
    
                        img.onerror = function () {
    
                            this.srcset = blankImages[i];
                            events.removeClass(slider, 'loader-pause');
    
                        }

                    } else {

                        loadedImages[i][count[i]].src = dataSrcLists[i][count[i]];
                        loadedImages[i][count[i]].onload = function () {

                            img.src = loadedImages[i][count[i]].src;
                            events.addClass(slider, 'loader-pause');
    
                        }
    
                        img.onerror = function () {
    
                            this.src = blankImages[i];
                            events.removeClass(slider, 'loader-pause');
    
                        }

                    }

                } else {

                    if (retina) {
                        img.srcset = loadedImages[i][count[i]].srcset;

                    } else {
                        img.src = loadedImages[i][count[i]].src;
                    }

                    events.addClass(slider, 'loader-pause');

                }

            });

    };

    // Loaders
    events.onload(photoSlider.Start);
    
    events.on(window, 'resize', photoSliderLoader);
    events.on(window, 'scroll', photoSliderLoader);

}());
