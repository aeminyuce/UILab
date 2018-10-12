/*
 Photo Slider JS
 Photo Slider JS requires Events JS
*/

/*globals window, document, selector, events, Image */
var photoSlider = {

    target: ''

};
function photoSliderLoader() {

    'use strict';
    var slider, j, screenH, scrollPos, images, nav;

    if (photoSlider.target === '') {

        screenH = window.innerHeight;
        scrollPos = window.pageYOffset;

    } else {

        screenH = selector(photoSlider.target)[0].offsetHeight;
        scrollPos = selector(photoSlider.target)[0].scrollTop;

    }

    images = selector('.photo-slider img[data-src]');

    events.each(images, function (i) {

        if (images[i].getBoundingClientRect().top <= (screenH + scrollPos) + 50) {

            window.photoSliderLoaded[i] = [];
            window.photoSliderLoaded[i][0] = new Image();

            window.photoSliderSrcList[i] = images[i].getAttribute('data-src').replace(/[\s]/g, '').split(',');
            window.photoSliderLoaded[i][0].src = window.photoSliderSrcList[i][0];

            images[i].removeAttribute('data-src');

            window.photoSliderLoaded[i][0].addEventListener('load', function () {

                images[i].src = window.photoSliderLoaded[i][0].src;

                slider = events.closest(images[i], '.photo-slider')[0];
                nav = selector('.slider-nav', slider)[0];

                if (nav.innerHTML === "") {

                    for (j = 0; j < window.photoSliderSrcList[i].length; j += 1) {

                        if (j === 0) {
                            nav.innerHTML += events.parser('<i class="selected ease-layout"></i>');
                        } else {
                            nav.innerHTML += events.parser('<i class="ease-layout"></i>');
                        }

                    }

                }

                events.addClass(slider, 'loader-pause');

            }, false);

        } else { return; }

    });

}
function photoSliderFnc() {

    'use strict';

    window.photoSliderSrcList = [];
    window.photoSliderLoaded = [];
    window.photoSliderCount = [];

    photoSliderLoader();

    events.on(document,

        'click', '.slide-left,.slide-right',
        function (e) {

            e.preventDefault();
            var slider, i, img, total, dots;

            slider = events.closest(this, '.photo-slider')[0];
            if (slider === undefined) { return; }

            img = selector('img', slider)[0];

            i = Array.prototype.slice.call(selector('.photo-slider')).indexOf(slider);
            if (window.photoSliderCount[i] === undefined) { window.photoSliderCount[i] = 0; }

            total = (window.photoSliderSrcList[i].length - 1);

            if (events.hasClass(this, 'slide-right')) {

                if (window.photoSliderCount[i] >= total) { window.photoSliderCount[i] = total; return; }
                window.photoSliderCount[i] += 1;

            } else {

                if (window.photoSliderCount[i] <= 0) { window.photoSliderCount[i] = 0; return; }
                window.photoSliderCount[i] -= 1;

            }

            dots = selector('.slider-nav i', slider);

            events.removeClass(dots, 'selected');
            events.addClass(dots[window.photoSliderCount[i]], 'selected');

            events.removeClass(slider, 'loader-pause');

            if (window.photoSliderLoaded[i][window.photoSliderCount[i]] === undefined) {

                window.photoSliderLoaded[i][window.photoSliderCount[i]] = new Image();
                window.photoSliderLoaded[i][window.photoSliderCount[i]].src = window.photoSliderSrcList[i][window.photoSliderCount[i]];

                window.photoSliderLoaded[i][window.photoSliderCount[i]].addEventListener('load', function () {

                    img.src = window.photoSliderLoaded[i][window.photoSliderCount[i]].src;
                    events.addClass(slider, 'loader-pause');

                }, false);

            } else {

                img.src = window.photoSliderLoaded[i][window.photoSliderCount[i]].src;
                events.addClass(slider, 'loader-pause');

            }

        });

}

/*!loader */
events.onload(function () {

    'use strict';
    photoSliderFnc();

});

/*!resize loader */
events.on(window, 'resize', function () {

    'use strict';
    photoSliderLoader();

});

/*!scroll loader */
events.on(window, 'scroll', function () {

    'use strict';
    photoSliderLoader();

});
