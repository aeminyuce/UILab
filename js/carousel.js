/*
 Carousel JS
 Carousel JS requires Events JS
*/

var carousel = {

    mobile: 767, // data-col-mobile breakdown
    tablet: 959 // data-col-tablet breakdown

};

(function () {

    'use strict';
    /*globals window, document, selector, events, navigator, Image, setTimeout, clearTimeout, setInterval, clearInterval */

    var
        cols = [],
        colsTablet = [],
        colsMobile = [],

        counts = [],

        loadingImgs = [],
        loadedImgs = [],

        contentsEase = [],

        autoSlider = [],
        autoTimer = [],
        autoTimeouts = [],

        resizeTimer,
        carouselNav,

        isScrollingTimer,
        isScrolling = false;

    function carouselAnimate(content, time, wait, type) {

        var animateEls, i = 0;
        animateEls = selector('.carousel-animate', content);

        if (animateEls.length === 0) { return; }

        if (type === 'static') {
            events.removeClass(animateEls, 'show');
        }

        setTimeout(function () { // wait for dom loading or slider ease time

            function show() {

                setTimeout(function () {

                    events.addClass(animateEls[i], 'show');
                    i += 1;
                    if (i < animateEls.length) { show(); }

                }, time);

            }
            show();

        }, wait);

    }

    function carouselLazyImages(that, col, i, ev) {

        var images = selector('.content img.img[data-src]', that);

        if (images.length > 0) {

            loadingImgs[i] = [];
            loadedImgs[i] = [];

            events.each(images, function (l) {

                if (ev === undefined && l >= col) { return; } // control col length

                loadedImgs[i][l] = this;

                loadingImgs[i][l] = new Image();
                loadingImgs[i][l].src = loadedImgs[i][l].getAttribute('data-src');

                loadedImgs[i][l].removeAttribute('data-src');
                loadingImgs[i][l].addEventListener('load', function () {

                    if (loadingImgs[i][l] === undefined) { return; }

                    loadedImgs[i][l].src = loadingImgs[i][l].src;
                    events.addClass(loadedImgs[i][l], 'loaded');

                    loadingImgs[i][l] = [];
                    loadedImgs[i][l] = [];

                }, false);

            });

        }

    }

    function carouselResizerFnc(i, that, type) {

        var col, j, k, slider, contents, animate, navDots, navDotsEl, navDotsLength, navDotsSize, navDotsHtml, navSides, navSide;

        function fnc() {

            contents = selector('.content', that[i]);
            if (contents.length === 0) { return; }

            navDots = selector('.carousel-nav .dots', that[i])[0];

            navDotsLength = selector('i', navDots).length;

            if (window.innerWidth > carousel.tablet) {
                col = cols[i];

            } else if (window.innerWidth > carousel.mobile && window.innerWidth <= carousel.tablet) {
                col = colsTablet[i];

            } else {
                col = colsMobile[i];
            }

            navSides = Math.ceil(contents.length / col);
            navDotsSize = navSides - navDotsLength;

            navDotsHtml = '';

            for (j = 0; j < navDotsSize; j += 1) {
                navDotsHtml += '<i class="ease-layout"></i>';
            }

            navDots.insertAdjacentHTML('beforeend', navDotsHtml);
            navDotsEl = selector('.carousel-nav .dots i', that[i]);

            if (navDotsSize < 0) {

                for (k = Math.abs(navDotsSize); k < navDotsLength; k += 1) {
                    navDotsEl[k].style.display = 'none';
                }

            } else {

                for (k = 0; k < navDotsLength; k += 1) {
                    navDotsEl[k].style.display = '';
                }

            }

            if (counts[i] > (navSides - 1)) {
                counts[i] = (navSides - 1);
            }

            // detect carousel animates
            events.each(contents, function (l) {

                if (l + 1 > col) { return; }

                animate = this.getAttribute('data-animate');
                if (animate !== null) {

                    if (animate === '') { animate = 150; }
                    carouselAnimate(this, animate, 300, type);

                }

            });

            that[i].setAttribute('data-content', (counts[i] + 1));

            navSide = Math.round(counts[i] * navSides / contents.length);

            events.removeClass(navDotsEl, 'selected');
            events.addClass(navDotsEl[navSide], 'selected');

            slider = selector('.carousel-slider', that[i]);

            for (j = 0; j < slider.length; j += 1) {
                slider[j].style.width = (that[i].offsetWidth / col) * contents.length + 'px';
            }

            for (j = 0; j < contents.length; j += 1) {
                contents[j].style.width = (that[i].offsetWidth / col) + 'px';
            }

            // detecting ie9
            if (navigator.userAgent.toLowerCase().indexOf('msie 9') > -1) {
                slider[0].style.marginLeft = '-' + (counts[i] * contents[i].offsetWidth) + 'px';

            } else {
                slider[0].style.transform = 'translateX(-' + (counts[i] * contents[i].offsetWidth) + 'px)';
            }

            carouselLazyImages(that[i], col, i);

        }

        if (that.length > 0) {

            if (i === undefined) {
                for (i = 0; i < that.length; i += 1) { fnc(); }

            } else { fnc(); }

        }

    }

    carousel.Start = function () {

        var carousels;

        // get carousel slide speed
        function getSlideSpeed(slider, ease, i) {

            ease = 150;

            if (events.hasClass(slider, 'ease-fast')) {
                ease = 100;

            } else if (events.hasClass(slider, 'ease-slow')) {
                ease = 400;

            } else if (events.hasClass(slider, 'ease-slow2x')) {
                ease = 800;

            } else if (events.hasClass(slider, 'ease-slow3x')) {
                ease = 1200;

            } else if (events.hasClass(slider, 'ease-slow4x')) {
                ease = 1600;

            } else if (events.hasClass(slider, 'ease-slow5x')) {
                ease = 2000;
            }

            contentsEase[i] = ease;

        }

        carousels = selector('.carousel');
        if (carousels.length > 0) {

            carouselNav = function (that, direction) {

                var col, slider, contents, animate, i, navDots, navSide;

                navDots = selector('.carousel-nav .dots i', that);

                slider = selector('.carousel-slider', that);
                contents = selector('.content', slider[0]);

                i = Array.prototype.slice.call(selector('.carousel')).indexOf(that);

                if (window.innerWidth > carousel.tablet) {
                    col = cols[i];

                } else if (window.innerWidth > carousel.mobile && window.innerWidth <= carousel.tablet) {
                    col = colsTablet[i];

                } else {
                    col = colsMobile[i];
                }

                if (direction === 'next') {

                    counts[i] += 1;
                    if (counts[i] > contents.length - col) { counts[i] = 0; }

                } else if (direction === 'prev') {

                    counts[i] -= 1;
                    if (counts[i] < 0) { counts[i] = 0; }

                }

                getSlideSpeed(slider, contentsEase[i], i); // get carousel slide speed

                // wait auto slider until slide completed
                if (autoSlider[i] !== undefined) {

                    clearInterval(autoSlider[i]);
                    clearTimeout(autoTimeouts[i]);

                    autoTimeouts[i] = setTimeout(function () {

                        autoSlider[i] = setInterval(function () {
                            carouselNav(that, 'next');
                        }, autoTimer[i]);

                    }, contentsEase[i]);

                }

                // detect carousel animates
                events.each(contents, function () {

                    animate = this.getAttribute('data-animate');
                    if (animate !== null) {

                        if (animate === '') { animate = 150; }
                        carouselAnimate(this, animate, contentsEase[i], 'static');

                    }

                });

                that.setAttribute('data-content', (counts[i] + 1));

                navSide = Math.round(counts[i] * Math.ceil(contents.length / col) / contents.length);

                events.removeClass(navDots, 'selected');
                events.addClass(navDots[navSide], 'selected');

                // detecting ie9
                if (navigator.userAgent.toLowerCase().indexOf('msie 9') > -1) {
                    slider[0].style.marginLeft = '-' + (counts[i] * contents[i].offsetWidth) + 'px';

                } else {
                    slider[0].style.transform = 'translateX(-' + (counts[i] * contents[i].offsetWidth) + 'px)';
                }

                carouselLazyImages(that, col, i);

            };

            // load carousels
            events.each(carousels, function (j) {

                var that = this;

                cols[j] = that.getAttribute('data-col');
                colsTablet[j] = that.getAttribute('data-col-tablet');
                colsMobile[j] = that.getAttribute('data-col-mobile');

                if (cols[j] === null) {
                    cols[j] = 1;

                } else {

                    cols[j] = Number(cols[j]);
                    if (!cols[j] || cols[j] === '0' || cols[j] === '') {
                        cols[j] = 1;
                    }

                }

                if (colsTablet[j] === null) {
                    colsTablet[j] = cols[j];

                } else {

                    colsTablet[j] = Number(colsTablet[j]);
                    if (!colsTablet[j] || colsTablet[j] === '0' || colsTablet[j] === '') {
                        colsTablet[j] = cols[j];
                    }

                }

                if (colsMobile[j] === null) {
                    colsMobile[j] = cols[j];

                } else {

                    colsMobile[j] = Number(colsMobile[j]);
                    if (!colsMobile[j] || colsMobile[j] === '0' || colsMobile[j] === '') {
                        colsMobile[j] = cols[j];
                    }

                }

                counts[j] = 0;
                events.addClass(that, 'active');

                carouselResizerFnc(j, carousels, 'static');

                // auto slider
                autoTimer[j] = that.getAttribute('data-slide');
                if (autoTimer[j] !== null) {

                    if (autoTimer[j] === '') { autoTimer[j] = 8000; }

                    autoSlider[j] = setInterval(function () {
                        carouselNav(that, 'next');
                    }, autoTimer[j]);

                }

            });

            // Events
            events.on(document, 'click', '.carousel-prev,.carousel-next', function () {

                var that, direction;
                if (events.hasClass(this, 'carousel-next')) { direction = 'next'; } else { direction = 'prev'; }

                that = events.closest(this, '.carousel')[0];
                carouselNav(that, direction);

            });

            events.on(document, 'mouseenter', '.carousel[data-slide]', function () {

                var i = Array.prototype.slice.call(selector('.carousel')).indexOf(this);

                clearInterval(autoSlider[i]);
                clearTimeout(autoTimeouts[i]);

            });

            events.on(document, 'mouseleave', '.carousel[data-slide]', function () {

                var i, that;

                that = this;
                i = Array.prototype.slice.call(selector('.carousel')).indexOf(that);

                clearInterval(autoSlider[i]);
                clearTimeout(autoTimeouts[i]);

                autoSlider[i] = setInterval(function () {
                    carouselNav(that, 'next');
                }, autoTimer[i]);

            });

            // prevent touch events when inline scrolling
            events.on(document, 'scroll', '.carousel .scroll,.carousel .v-scroll,.carousel .h-scroll', function (e) {

                e.preventDefault();
                e.stopPropagation();

                isScrolling = true;
                clearTimeout(isScrollingTimer);

                isScrollingTimer = setTimeout(function () {
                    isScrolling = false;
                }, 150);

            });

            // touchmove events
            events.on(document, 'touchstart', '.carousel', function (e) {

                var i, startx, starty, currentx, currenty, startMove, touchMove, move, that, slider, sliderMax, col, navDotsEl, navSide, touchEndTimer, animate, contents;

                if (isScrolling) { return; }
                touchMove = false;

                startx = e.targetTouches[0].pageX;
                starty = e.targetTouches[0].pageY;

                that = this;

                slider = selector('.carousel-slider', that)[0];

                contents = selector('.content', that);
                navDotsEl = selector('.carousel-nav .dots i', that);

                i = Array.prototype.slice.call(selector('.carousel')).indexOf(that);

                if (window.innerWidth > carousel.tablet) {
                    col = cols[i];

                } else if (window.innerWidth > carousel.mobile && window.innerWidth <= carousel.tablet) {
                    col = colsTablet[i];

                } else {
                    col = colsMobile[i];
                }

                startMove = window.getComputedStyle(slider).getPropertyValue('transform'); // matrix(xZoom, 0, 0, yZoom, xPos, yPos)
                startMove = startMove.replace('matrix', '').replace(/[\,\(\)\s]/g, ' ').replace(/\s\s/g, '|'); // select only numbers

                startMove = startMove.split('|')[4];

                events.off(document, 'touchmove');
                events.on(document, 'touchmove', function (e) {

                    if (events.hasClass(document, 'photo-preview-opened')) { return; } // stop if photo gallery is opened
                    if (isScrolling) { return; }

                    if (e.cancelable && e.defaultPrevented) { // touchstart or touchmove with preventDefault we need this. Because, now Chrome and Android browsers preventDefault automatically.
                        e.preventDefault();
                    }

                    currentx = e.targetTouches[0].pageX;
                    currenty = e.targetTouches[0].pageY;

                    if (Math.abs(startx - currentx) > 10 && Math.abs(starty - currenty) < 10) {
                        touchMove = true;
                    }

                    if (touchMove) {

                        that.style.transitionDuration = '0s';
                        slider.style.transitionDuration = '0s';

                        clearTimeout(touchEndTimer);

                        sliderMax = -((contents.length - col) * contents[i].offsetWidth);
                        move = (startMove - (startx - currentx));

                        if (move > 0) {
                            move = 0;

                        } else if (move < sliderMax) {
                            move = sliderMax;
                        }

                        slider.style.transform = 'translateX(' + move + 'px)';

                        carouselLazyImages(that, col, i, 'touchmove');

                        // wait auto slider when touchmove
                        if (autoTimer[i] !== null) {

                            clearInterval(autoSlider[i]);
                            clearTimeout(autoTimeouts[i]);

                        }

                        events.addClass(document, 'carousel-touchmove');

                    }

                });

                events.off(document, 'touchend.carousel touchcancel.carousel');
                events.on(document, 'touchend.carousel touchcancel.carousel', function () {

                    if (touchMove) {

                        var beforeCount;

                        beforeCount = counts[i];
                        counts[i] = Math.abs(move) / contents[i].offsetWidth;

                        if (currentx < 0) {
                            currentx = 0;

                        } else if (currentx > contents[i].offsetWidth) {
                            currentx = contents[i].offsetWidth;
                        }

                        if ((currentx - startx) > 0) { // slide to right

                            if (counts[i].toFixed(2).substring(2) < 85) {
                                counts[i] = Math.floor(counts[i]);

                            } else {
                                counts[i] = beforeCount;
                            }

                        } else { // slide to left

                            if (counts[i].toFixed(2).substring(2) > 15) {
                                counts[i] = Math.ceil(counts[i]);

                            } else {
                                counts[i] = beforeCount;
                            }

                        }

                        slider.style.transform = 'translateX(' + -(counts[i] * contents[i].offsetWidth) + 'px)';
                        that.setAttribute('data-content', (counts[i] + 1));

                        navSide = Math.round(counts[i] * Math.ceil(contents.length / col) / contents.length);

                        events.removeClass(navDotsEl, 'selected');
                        events.addClass(navDotsEl[navSide], 'selected');

                        clearTimeout(touchEndTimer);
                        touchEndTimer = setTimeout(function () {

                            getSlideSpeed(slider, contentsEase[i], i); // get carousel slide speed

                            // wait auto slider until touchmove ends
                            if (autoTimer[i] !== null) {

                                clearInterval(autoSlider[i]);
                                clearTimeout(autoTimeouts[i]);

                                autoSlider[i] = setInterval(function () {
                                    carouselNav(that, 'next');
                                }, autoTimer[i]);

                            }

                            // detect carousel animates
                            events.each(contents, function () {

                                animate = this.getAttribute('data-animate');
                                if (animate !== null) {

                                    if (animate === '') { animate = 150; }
                                    carouselAnimate(this, animate, contentsEase[i], 'touch');

                                }

                            });

                            events.removeClass(document, 'carousel-touchmove');

                        }, 100);

                        that.style.transitionDuration = '';
                        slider.style.transitionDuration = '';

                    }

                    touchMove = false;

                    events.off(that, 'touchmove');
                    events.off(document, 'touchend.carousel touchcancel.carousel');

                });

            });

        }

    };

    // Loaders
    events.onload(carousel.Start);
    events.on(window, 'resize', function () {

        var i, that, slider;

        i = undefined;
        that = selector('.carousel');

        events.each(that, function () {

            slider = selector('.carousel-slider', this)[0];

            this.style.transitionDuration = '0s';
            slider.style.transitionDuration = '0s';

        });

        // wait auto slider until resize compeleted
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {

            events.each(that, function (i) {

                slider = selector('.carousel-slider', that[i])[0];

                if (autoTimer[i] !== null) {

                    clearInterval(autoSlider[i]);
                    clearTimeout(autoTimeouts[i]);

                    autoSlider[i] = setInterval(function () {
                        carouselNav(that[i], 'next');
                    }, autoTimer[i]);

                }

                that[i].style.transitionDuration = '';
                slider.style.transitionDuration = '';

            });

        }, 150);

        carouselResizerFnc(i, that, 'resize');

    });

}());
