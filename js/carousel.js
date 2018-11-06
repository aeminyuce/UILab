/*
 Carousel JS
 Carousel JS requires Events JS
*/

(function () {

    'use strict';
    /*globals window, document, selector, events, navigator, Image, setTimeout, clearTimeout, setInterval, clearInterval */

    var
        cols = [],
        colsMobile = [],
        counts = [],
        loadingImgs = [],
        loadedImgs = [],
        autoSlider = [],
        autoTimer = [],
        autoTimeouts = [];

    function carouselAnimate(content, time, wait) {

        var animates, i = 0;
        animates = selector('.carousel-animate:not(.show)', content);

        if (animates.length === 0) { return; }


        setTimeout(function () { // wait for dom loading or slider ease time

            function show() {

                setTimeout(function () {

                    events.addClass(animates[i], 'show');

                    i += 1;
                    if (i < animates.length) { show(); }

                }, time);

            }
            show();

        }, wait);

    }

    function carouselLazyImages(that, col, i, ev) {

        var images;
        images = selector('.content img.img[data-src]', that);

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

                    loadedImgs[i][l].src = loadingImgs[i][l].src;
                    events.addClass(loadedImgs[i][l], 'loaded');

                    loadingImgs[i][l] = [];
                    loadedImgs[i][l] = [];

                }, false);

            });

        }

    }

    function carouselResizerFnc(i, that) {

        var col, j, k, slider, contents, animate, navDots, navDotsIn, navDotsLength, navDotsSize, navSides;

        if (that === undefined) {

            i = 0;
            that = selector('.carousel');

        }

        function fnc() {

            contents = selector('.content', that[i]);
            navDots = selector('.carousel-nav .dots', that[i])[0];

            navDotsLength = selector('i', navDots).length;

            if (window.innerWidth > 767) {

                col = cols[i];
                navSides = Math.ceil(contents.length / cols[i]);

            } else {

                col = colsMobile[i];
                navSides = Math.ceil(contents.length / colsMobile[i]);

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

            if (counts[i] > (navSides - 1)) {
                counts[i] = (navSides - 1);
            }

            animate = contents[counts[i]].getAttribute('data-animate');
            if (animate !== null) {

                if (animate === '') { animate = 150; }
                carouselAnimate(contents[counts[i]], animate, 300);

            }

            that[i].setAttribute('data-content', (counts[i] + 1));

            events.removeClass(navDotsIn, 'selected');
            events.addClass(navDotsIn[counts[i]], 'selected');

            slider = selector('.carousel-slider', that[i]);

            // detecting ie9
            if (navigator.userAgent.toLowerCase().indexOf('msie 9') > -1) {
                slider[0].style.marginLeft = '-' + (counts[i] * that[i].offsetWidth) + 'px';

            } else {
                slider[0].style.transform = 'translateX(-' + (counts[i] * that[i].offsetWidth) + 'px)';
            }

            events.width(slider, ((that[i].offsetWidth / col) * contents.length) * 2 + 'px'); // why: (offsetWidth * 2) for window resizing
            events.width(contents, (that[i].offsetWidth / col) + 'px');

            carouselLazyImages(that[i], col, i);

        }

        if (that.length > 0) {

            if (i === undefined) {
                for (i = 0; i < that.length; i += 1) { fnc(); }

            } else { fnc(); }

        }

    }

    function carouselFnc() {

        var carousels, carouselNav;
        carousels = selector('.carousel');

        if (carousels.length > 0) {

            carouselNav = function (that, direction) {

                var col, slider, contents, animate, wait, i, max, navDots;

                navDots = selector('.carousel-nav .dots i', that);

                slider = selector('.carousel-slider', that);
                contents = selector('.content', slider[0]);

                i = Array.prototype.slice.call(selector('.carousel')).indexOf(that);

                if (window.innerWidth > 767) {
                    col = cols[i];

                } else {
                    col = colsMobile[i];
                }

                col = Number(col);
                max = Math.ceil(contents.length / col) - 1;

                if (direction === 'next') {

                    counts[i] += 1;
                    if (counts[i] > max) { counts[i] = 0; }

                } else if (direction === 'prev') {

                    counts[i] -= 1;
                    if (counts[i] < 0) { counts[i] = 0; }

                }

                // get carousel slide speed
                wait = 150;

                if (events.hasClass(slider, 'ease-fast')) {
                    wait = 100;

                } else if (events.hasClass(slider, 'ease-slow')) {
                    wait = 400;

                } else if (events.hasClass(slider, 'ease-slow2x')) {
                    wait = 800;

                } else if (events.hasClass(slider, 'ease-slow3x')) {
                    wait = 1200;

                } else if (events.hasClass(slider, 'ease-slow4x')) {
                    wait = 1600;

                } else if (events.hasClass(slider, 'ease-slow5x')) {
                    wait = 2000;
                }

                // wait auto slider to slide completed
                if (autoSlider[i] !== undefined) {

                    clearInterval(autoSlider[i]);
                    clearTimeout(autoTimeouts[i]);

                    autoTimeouts[i] = setTimeout(function () {

                        autoSlider[i] = setInterval(function () {
                            carouselNav(that, 'next');

                        }, autoTimer[i]);

                    }, wait);

                }

                // detect carousel animates
                animate = contents[counts[i]].getAttribute('data-animate');
                if (animate !== null) {

                    if (animate === '') { animate = 150; }
                    carouselAnimate(contents[counts[i]], animate, wait);

                }

                that.setAttribute('data-content', (counts[i] + 1));

                events.removeClass(navDots, 'selected');
                events.addClass(navDots[counts[i]], 'selected');

                // detecting ie9
                if (navigator.userAgent.toLowerCase().indexOf('msie 9') > -1) {
                    slider[0].style.marginLeft = '-' + (counts[i] * that.offsetWidth) + 'px';

                } else {
                    slider[0].style.transform = 'translateX(-' + (counts[i] * that.offsetWidth) + 'px)';
                }

                carouselLazyImages(that, col, i);

            };

            events.each(carousels, function (j) {

                var that = this;

                cols[j] = that.getAttribute('data-col');
                colsMobile[j] = that.getAttribute('data-col-mobile');

                if (cols[j] === null) {
                    cols[j] = 1;

                } else {

                    cols[j] = Number(cols[j]);
                    if (!cols[j] || cols[j] === '0' || cols[j] === '') {
                        cols[j] = 1;
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

                carouselResizerFnc(j, carousels);

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

            // touchmove events
            events.on(document, 'touchstart', '.carousel', function (e) {

                var i, startx, starty, currentx, currenty, touchMove, startDate, startMove, move, that, slider, sliderMax, col, navDotsIn;

                touchMove = false;

                startx = e.targetTouches[0].pageX;
                starty = e.targetTouches[0].pageY;

                that = this;
                startDate = new Date().getTime();

                slider = selector('.carousel-slider', that)[0];
                navDotsIn = selector('.carousel-nav .dots i', that);

                i = Array.prototype.slice.call(selector('.carousel')).indexOf(that);

                if (window.innerWidth > 767) {
                    col = cols[i];

                } else {
                    col = colsMobile[i];
                }

                startMove = window.getComputedStyle(slider).getPropertyValue('transform'); // matrix(xZoom, 0, 0, yZoom, xPos, yPos)
                startMove = startMove.replace('matrix', '').replace(/[\,\(\)\s]/g, ' ').replace(/\s\s/g, '|'); // select only numbers

                startMove = startMove.split('|')[4];

                events.on(that, 'touchmove', function (e) {

                    currentx = e.targetTouches[0].pageX;
                    currenty = e.targetTouches[0].pageY;

                    if (Math.abs(startx - currentx) > 10 && Math.abs(starty - currenty) < 10) {

                        touchMove = true;

                        move = (startMove - (startx - currentx));
                        sliderMax = -(slider.offsetWidth / 2); // why? (offsetWidth / 2), search => why

                        if (move > 0) {
                            move = 0;

                        } else if (move < sliderMax) {
                            move = sliderMax;
                        }

                        slider.style.transform = 'translateX(' + move + 'px)';
                        carouselLazyImages(that, col, i, 'touchmove');

                        clearInterval(autoSlider[i]);
                        clearTimeout(autoTimeouts[i]);

                        events.addClass(document, 'carousel-touchmove');
                        slider.style.transitionDuration = '.15s';

                    } else { return; }

                });

                events.on(document, 'touchend', function () {

                    if (touchMove) {

                        counts[i] = Math.abs(move) / that.offsetWidth;

                        if (new Date().getTime() - startDate < 1200) { // control touch speed
                            counts[i] = Math.ceil(counts[i]);

                        } else {
                            counts[i] = Math.round(counts[i]);
                        }

                        slider.style.transform = 'translateX(' + -(counts[i] * that.offsetWidth) + 'px)';

                        events.removeClass(navDotsIn, 'selected');
                        events.addClass(navDotsIn[counts[i]], 'selected');

                        autoSlider[i] = setInterval(function () {
                            carouselNav(that, 'next');

                        }, autoTimer[i]);

                        events.removeClass(document, 'carousel-touchmove');
                        slider.style.transitionDuration = '';

                    }

                    touchMove = false;

                    events.off(that, 'touchmove');
                    events.off(document, 'touchend');

                });

            });

        }

    }

    // Loaders
    events.onload(carouselFnc);
    events.on(window, 'resize', carouselResizerFnc);

}());
