/*
 Photo Slider JS
 Photo Slider JS requires Events JS
*/

/*globals window, document, selector, events, Image */
function photoSliderLoader() {

    'use strict';
    var slider, j, images, dataSrc, nav;

    slider = selector('.photo-slider');
    images = selector('.photo-slider img');

    events.each(images, function (i) {

        if (images[i].getBoundingClientRect().top <= (window.innerHeight + window.pageYOffset) + 50) {

            if (window.photoSliderSrcList[i] === undefined) {

                dataSrc = images[i].getAttribute('data-src');
                if (dataSrc !== null && dataSrc !== '') {

                    window.photoSliderLoaded[i] = [];

                    window.photoSliderLoaded[i][0] = new Image();
                    window.photoSliderSrcList[i] = dataSrc.replace(/[\s]/g, '').split(',');

                    window.photoSliderBlank[i] = images[i].src;

                } else {

                    window.photoSliderSrcList[i] = '';
                    window.photoSliderBlank[i] = '';

                    return;

                }

            } else { return; }

            if (!window.photoSliderSrcList[i][0].match(/(\.png|\.gif|\.jpeg|\.jpg)$/g)) { return; }
            window.photoSliderLoaded[i][0].src = window.photoSliderSrcList[i][0];

            images[i].removeAttribute('data-src');
            nav = selector('.slider-nav', slider[i])[0];

            if (window.photoSliderSrcList[i].length > 1) {

                events.addClass(selector('button', slider[i]), 'show');

                events.addClass(nav, 'show');
                if (nav.innerHTML === "") {

                    for (j = 0; j < window.photoSliderSrcList[i].length; j += 1) {

                        if (j === 0) {
                            nav.innerHTML += events.parser('<i class="selected ease-layout"></i>');
                        } else {
                            nav.innerHTML += events.parser('<i class="ease-layout"></i>');
                        }

                    }

                }

            }

            window.photoSliderLoaded[i][0].onload = function () {

                images[i].src = window.photoSliderLoaded[i][0].src;
                events.addClass(slider[i], 'loader-pause');

            };

        } else { return; }

    });

}
function photoSliderFnc() {

    'use strict';

    window.photoSliderBlank = [];
    window.photoSliderSrcList = [];
    window.photoSliderLoaded = [];
    window.photoSliderCount = [];

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

                window.photoSliderLoaded[i][window.photoSliderCount[i]].onload = function () {

                    img.src = window.photoSliderLoaded[i][window.photoSliderCount[i]].src;
                    events.addClass(slider, 'loader-pause');

                };

                img.onerror = function () {

                    this.setAttribute('src', window.photoSliderBlank[i]);
                    events.removeClass(slider, 'loader-pause');

                };

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
