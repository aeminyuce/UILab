/*
 Carousel JS
 Carousel JS requires Events JS
*/

/*globals window, document, selector, events, navigator, Image */
function carouselLazyImages(col, i) {

    'use strict';

    var images = selector('.carousel');
    images = selector('.content .img[data-src]', images[i]);

    if (images.length > 0) {

        window.carouselLoadImgs[i] = [];
        events.each(images, function (l) {

            if (l >= col) { return; }
            var img = this;

            window.carouselLoadImgs[i][l] = new Image();
            window.carouselLoadImgs[i][l].src = img.getAttribute('data-src');

            window.carouselLoadImgs[i][l].addEventListener('load', function () {

                img.src = window.carouselLoadImgs[i][l].src;
                img.removeAttribute('data-src');

                window.carouselLoadImgs[i][l] = '';

            }, false);

        });

    }

}
function carouselResizerFnc(i, that) {

    'use strict';
    var col, j, k, slider, contents, navDots, navDotsIn, navDotsLength, navDotsSize, navSides;

    if (that === undefined) {
        that = selector('.carousel');
    }

    function fnc() {

        contents = selector('.content', that[i]);
        navDots = selector('.carousel-nav .dots', that[i])[0];

        navDotsLength = selector('i', navDots).length;

        if (window.innerWidth > 767) {

            col = window.carouselCols[i];
            navSides = Math.ceil(contents.length / window.carouselCols[i]);

        } else {

            col = window.carouselColsMobile[i];
            navSides = Math.ceil(contents.length / window.carouselColsMobile[i]);

        }

        navDotsSize = (navSides - navDotsLength);

        for (j = 0; j < navDotsSize; j += 1) {
            navDots.innerHTML += events.parser('<i class="ease-layout"></i>');
        }

        navDotsIn = selector('.carousel-nav .dots i', that[i]);

        if (navDotsSize < 0) {

            for (k = navSides; k < navDotsLength; k += 1) {
                navDotsIn[k].style.display = 'none';
            }

        } else {

            for (k = 0; k < navDotsLength; k += 1) {
                navDotsIn[k].style.display = '';
            }

        }

        if (window.carouselCounts[i] > (navSides - 1)) { window.carouselCounts[i] = (navSides - 1); }

        events.removeClass(navDotsIn, 'selected');
        events.addClass(navDotsIn[window.carouselCounts[i]], 'selected');

        slider = selector('.carousel-slider', that[i]);

        // detecting ie9
        if (navigator.userAgent.toLowerCase().indexOf('msie 9') > -1) {
            slider[0].style.marginLeft = '-' + (window.carouselCounts[i] * that[i].offsetWidth) + 'px';

        } else {
            slider[0].style.transform = 'translateX(-' + (window.carouselCounts[i] * that[i].offsetWidth) + 'px)';
        }

        events.width(slider, ((that[i].offsetWidth / col) * contents.length) * 2 + 'px');
        events.width(contents, (that[i].offsetWidth / col) + 'px');

        carouselLazyImages(col, i);

    }

    if (that.length > 0) {

        if (i === undefined) {
            for (i = 0; i < that.length; i += 1) { fnc(); }

        } else { fnc(); }

    }

}
function carouselFnc() {

    'use strict';
    var carousels;

    carousels = selector('.carousel');
    if (carousels.length > 0) {

        window.carouselCols = [];
        window.carouselColsMobile = [];

        window.carouselCounts = [];
        window.carouselLoadImgs = [];

        events.each(carousels, function (j) {

            window.carouselCols[j] = this.getAttribute('data-col');
            window.carouselColsMobile[j] = this.getAttribute('data-col-mobile');

            if (window.carouselCols[j] === null) {
                window.carouselCols[j] = 1;

            } else {

                window.carouselCols[j] = Number(window.carouselCols[j]);
                if (!window.carouselCols[j] || window.carouselCols[j] === '0' || window.carouselCols[j] === '') {
                    window.carouselCols[j] = 1;
                }

            }

            if (window.carouselColsMobile[j] === null) {
                window.carouselColsMobile[j] = window.carouselCols[j];

            } else {

                window.carouselColsMobile[j] = Number(window.carouselColsMobile[j]);
                if (!window.carouselColsMobile[j] || window.carouselColsMobile[j] === '0' || window.carouselColsMobile[j] === '') {
                    window.carouselColsMobile[j] = window.carouselCols[j];
                }

            }

            window.carouselCounts[j] = 0;
            carouselResizerFnc(j, carousels);

            events.addClass(this, 'active');

        });

        // Events
        events.on(document, 'click', '.carousel .carousel-prev,.carousel .carousel-next', function () {

            var col, that, slider, contents, i, max, navDots;

            that = events.closest(this, '.carousel');
            navDots = selector('.carousel-nav .dots i', that[0]);

            slider = selector('.carousel-slider', that[0]);
            contents = selector('.content', slider[0]);

            i = Array.prototype.slice.call(selector('.carousel')).indexOf(that[0]);

            if (window.innerWidth > 767) {
                col = window.carouselCols[i];

            } else {
                col = window.carouselColsMobile[i];
            }

            col = Number(col);
            max = Math.ceil(contents.length / col) - 1;

            if (events.hasClass(this, 'carousel-next')) {

                window.carouselCounts[i] += 1;
                if (window.carouselCounts[i] > max) { window.carouselCounts[i] = max; }

            } else {

                window.carouselCounts[i] -= 1;
                if (window.carouselCounts[i] < 0) { window.carouselCounts[i] = 0; }

            }

            events.removeClass(navDots, 'selected');
            events.addClass(navDots[window.carouselCounts[i]], 'selected');

            // detecting ie9
            if (navigator.userAgent.toLowerCase().indexOf('msie 9') > -1) {
                slider[0].style.marginLeft = '-' + (window.carouselCounts[i] * that[0].offsetWidth) + 'px';

            } else {
                slider[0].style.transform = 'translateX(-' + (window.carouselCounts[i] * that[0].offsetWidth) + 'px)';
            }

            carouselLazyImages(col, i);

        });

    }

}

/*!loader */
events.onload(function () {

    'use strict';
    carouselFnc();

});

/*!resize loader */
events.on(window, 'resize', function () {

    'use strict';
    carouselResizerFnc();

});
