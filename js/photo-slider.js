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
    var slider, arr, j, screenH, scrollPos, images, newImage, nav;

    if (photoSlider.target === '') {

        screenH = window.innerHeight;
        scrollPos = window.pageYOffset;

    } else {

        screenH = selector(photoSlider.target)[0].offsetHeight;
        scrollPos = selector(photoSlider.target)[0].scrollTop;

    }

    images = selector('.photo-slider img');

    arr = [];
    newImage = [];

    events.each(images, function (i) {

        if (images[i].src === '' && (images[i].getBoundingClientRect().top <= (screenH + scrollPos) + 50)) {

            newImage[i] = new Image();

            arr = images[i].getAttribute('data-src').replace(/[\s]/g, '').split(',');
            newImage[i].src = arr[0];

            newImage[i].addEventListener('load', function () {

                images[i].src = newImage[i].src;

                slider = events.closest(images[i], '.photo-slider')[0];
                nav = selector('.slider-nav', slider)[0];

                if (nav.innerHTML === "") {

                    for (j = 0; j < arr.length; j += 1) {

                        if (j === 0) {
                            nav.innerHTML += events.parser('<span class="selected ease-layout"></span>');
                        } else {
                            nav.innerHTML += events.parser('<span class="ease-layout"></span>');
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
    photoSliderLoader();

    events.on(document,

        'click', '.slide-left,.slide-right',
        function (e) {

            e.preventDefault();
            var slider, img, arr, count, total, dots;

            slider = events.closest(this, '.photo-slider')[0];
            if (slider === undefined) { return; }

            img = selector('img', slider)[0];
            arr = img.getAttribute('data-src').replace(/[\s]/g, '').split(',');

            if (img.getAttribute('data-count') === null) {

                count = 0;
                img.setAttribute('data-count', count);

            } else { count = parseInt(img.getAttribute('data-count'), 10); }

            total = (arr.length - 1);
            if (events.hasClass(this, 'slide-right')) {

                if (count >= total) { count = total; return; }
                count += 1;

            } else {

                if (count <= 0) { count = 0; return; }
                count -= 1;

            }

            img.setAttribute('data-count', count);
            img.src = arr[count];

            dots = selector('.slider-nav span', slider);

            events.removeClass(dots, 'selected');
            events.addClass(dots[count], 'selected');

            events.removeClass(slider, 'loader-pause');

            img.addEventListener('load', function () {
                events.addClass(slider, 'loader-pause');
            }, false);

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
