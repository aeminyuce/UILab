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

    images = selector('.photo-slider img');

    events.each(images, function (i) {

        if (images[i].src === '' && (images[i].getBoundingClientRect().top <= (screenH + scrollPos) + 50)) {

            window.photoSliderIndex[i] = [];
            window.photoSliderIndex[i][0] = new Image();

            window.photoSliderCount[i] = images[i].getAttribute('data-src').replace(/[\s]/g, '').split(',');
            window.photoSliderIndex[i][0].src = window.photoSliderCount[i][0];

            images[i].setAttribute('data-index', i);

            window.photoSliderIndex[i][0].addEventListener('load', function () {

                images[i].src = window.photoSliderIndex[i][0].src;

                slider = events.closest(images[i], '.photo-slider')[0];
                nav = selector('.slider-nav', slider)[0];

                if (nav.innerHTML === "") {

                    for (j = 0; j < window.photoSliderCount[i].length; j += 1) {

                        if (j === 0) {
                            nav.innerHTML += events.parser('<i class="selected ease-layout"></i>');
                        } else {
                            nav.innerHTML += events.parser('<i class="ease-layout"></i>');
                        }

                    }

                }

                events.addClass(slider, 'loader-pause');

            });

        } else { return; }

    });

}
function photoSliderFnc() {

    'use strict';

    window.photoSliderIndex = [];
    window.photoSliderCount = [];

    photoSliderLoader();

    events.on(document,

        'click', '.slide-left,.slide-right',
        function (e) {

            e.preventDefault();
            var slider, i, img, count, total, dots;

            slider = events.closest(this, '.photo-slider')[0];
            if (slider === undefined) { return; }

            img = selector('img', slider)[0];

            if (img.getAttribute('data-count') === null) {

                count = 0;
                img.setAttribute('data-count', count);

            } else { count = parseInt(img.getAttribute('data-count'), 10); }

            i = img.getAttribute('data-index');
            total = (window.photoSliderCount[i].length - 1);

            if (events.hasClass(this, 'slide-right')) {

                if (count >= total) { count = total; return; }
                count += 1;

            } else {

                if (count <= 0) { count = 0; return; }
                count -= 1;

            }

            img.setAttribute('data-count', count);

            dots = selector('.slider-nav i', slider);

            events.removeClass(dots, 'selected');
            events.addClass(dots[count], 'selected');

            events.removeClass(slider, 'loader-pause');

            if (window.photoSliderIndex[i][count] === undefined) {

                window.photoSliderIndex[i][count] = new Image();
                window.photoSliderIndex[i][count].src = window.photoSliderCount[i][count];

                window.photoSliderIndex[i][count].addEventListener('load', function () {

                    img.src = window.photoSliderIndex[i][count].src;
                    events.addClass(slider, 'loader-pause');

                }, false);

            } else {

                img.src = window.photoSliderIndex[i][count].src;
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
