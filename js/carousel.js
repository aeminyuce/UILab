/*
 Carousel JS
 Carousel JS requires Selector Js, Events JS
*/

var carousel = {

    xl: 1680,
    lg: 1200,
    md: 959,
    sm: 767,
    xs: 468,

    halfSize: 0.5 // set percent of default half size

};

(function () {

    'use strict';
    /*globals window, document, selector, events, Image, setTimeout, clearTimeout, setInterval, clearInterval */

    var
        cols = [],

        colsXL = [],
        colsLG = [],
        colsMD = [],
        colsSM = [],
        colsXS = [],

        counts = [],
        contentsEase = [],

        autoSlider = [],
        autoTimer = [],

        resizeTimer,
        carouselNav,

        isScrollingTimer,
        isScrolling = false;

    function getCols(i) {

        var col;

        if (window.innerWidth >= carousel.xl) {
            col = colsXL[i];

        } else if (window.innerWidth < carousel.xl && window.innerWidth >= carousel.lg) {
            col = colsLG[i];

        } else if (window.innerWidth <= carousel.md && window.innerWidth > carousel.sm) {
            col = colsMD[i];

        } else if (window.innerWidth <= carousel.sm && window.innerWidth > carousel.xs) {
            col = colsSM[i];

        } else if (window.innerWidth <= carousel.xs) {
            col = colsXS[i];

        } else {
            col = cols[i];
        }

        return col;

    }

    function carouselAnimate(content, wait, type) {

        var time, elems, i;

        time = content.getAttribute('data-animate');
        if (time !== null) {

            if (time === '') { time = 150; }

            i = 0;
            elems = selector('.carousel-animate', content);

            if (elems.length === 0) { return; }

            if (type === 'static') {
                events.removeClass(elems, 'show');
            }

            setTimeout(function () { // wait for dom loading or slider ease time

                function show() {

                    setTimeout(function () {

                        events.addClass(elems[i], 'show');
                        i += 1;
                        if (i < elems.length) { show(); }

                    }, time);

                }
                show();

            }, wait);

        }

    }

    function filterDots(navDots, navDotsEl, count, i) {

        events.removeClass(navDots, 'filtered');
        events.removeClass(navDotsEl, 'show faded');

        var col = getCols(i); // get responsive cols

        events.addClass(navDots, 'filtered');

        if ((count - 1) > -1) {

            events.addClass(navDotsEl[count - 1], 'show');

            if ((count - 2) > -1) {
                events.addClass(navDotsEl[count - 2], 'faded');
            }

        }

        if ((count + col) < navDotsEl.length) {

            events.addClass(navDotsEl[count + 1], 'show');

            if ((count + col + 1) < navDotsEl.length) {
                events.addClass(navDotsEl[count + 2], 'faded');
            }

        }

    }

    function carouselModifier(i, that, type) {

        var j, slider, contents, nav, col, halfSized, size, navDots, navDotsEl;

        contents = selector('.slide-content', that);
        if (contents.length === 0) { return; }

        nav = selector('.carousel-nav', that)[0];
        if (nav === undefined) { return; }

        col = getCols(i); // get responsive cols

        if (contents.length <= col) { // toggle nav
            nav.style.display = 'none';

        } else { nav.style.display = ''; }

        halfSized = events.hasClass(that, 'half-sized');
        slider = selector('.carousel-slider', that);

        size = col;
        if (halfSized && col > 1 && col !== contents.length) { size -= carousel.halfSize; }

        size = Math.round(that.offsetWidth / size);

        for (j = 0; j < contents.length; j++) {
            contents[j].style.width = size + 'px';
        }

        size = size * contents.length;
        slider[0].style.width = size + 'px';

        if (contents.length / col === 1) { // check nav is active
            counts[i] = 0;

        } else if (counts[i] > col) { // check current count larger than current col size
            counts[i] = col;
        }

        that.setAttribute('data-content', (counts[i] + 1));
        slider[0].style.transform = 'translateX(-' + (counts[i] * contents[0].offsetWidth) + 'px)';

        navDots = selector('.carousel-nav .dots', that);
        navDotsEl = selector('.carousel-nav .dots i', that);

        events.removeClass(navDotsEl, 'selected');
        events.addClass(navDotsEl[counts[i]], 'selected');

        filterDots(navDots, navDotsEl, counts[i], i); // filter dots when dots number exceeds

        events.each(contents, function (l) { // detect carousel animates

            if (l + 1 > col) { return; }
            carouselAnimate(this, 300, type);

        });

    }

    function carouselResizer(e) {

        var that, slider;

        if (e === 'resize' || e.type === 'resize') {

            that = selector('.carousel');
            events.each(that, function (i) {

                slider = selector('.carousel-slider', this)[0];

                carouselModifier(i, this, 'resize');

                this.style.transitionDuration = '0s';
                slider.style.transitionDuration = '0s';

            });

        }

        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () { // wait auto slider until resize completed

            that = selector('.carousel');
            events.each(that, function (i) {

                if (autoTimer[i] !== null) {

                    clearInterval(autoSlider[i]);

                    autoSlider[i] = setInterval(function () {
                        carouselNav(that[i], 'next');
                    }, autoTimer[i]);

                }

                slider = selector('.carousel-slider', this)[0];

                this.style.transitionDuration = '';
                slider.style.transitionDuration = '';

            });

        }, 150);

    }

    carousel.Start = function () {

        var carousels, carouselStart, carouselStop;

        // get carousel slide speed
        function getSlideSpeed(slider, ease, i) {

            ease = 150;

            if (events.hasClass(slider, 'ease-fast')) {
                ease = 100;

            } else if (events.hasClass(slider, 'ease-slow')) {
                ease = 400;

            } else if (events.hasClass(slider, 'ease-slow-2x')) {
                ease = 800;

            } else if (events.hasClass(slider, 'ease-slow-3x')) {
                ease = 1200;

            } else if (events.hasClass(slider, 'ease-slow-4x')) {
                ease = 1600;

            } else if (events.hasClass(slider, 'ease-slow-5x')) {
                ease = 2000;
            }

            contentsEase[i] = ease;

        }

        carousels = selector('.carousel');
        if (carousels.length > 0) {

            carouselNav = function (that, direction) {

                var col, slider, nav, contents, i, navDots, navDotsEl, slide, halfSized;

                nav = selector('.carousel-nav', that)[0];
                if (nav === undefined) { return; }

                slider = selector('.carousel-slider', that);
                contents = selector('.slide-content', slider[0]);

                if (contents.length === 0) { return; }

                i = Array.prototype.slice.call(selector('.carousel')).indexOf(that);

                navDots = selector('.carousel-nav .dots', that);
                navDotsEl = selector('.carousel-nav .dots i', that);

                col = getCols(i); // get responsive cols

                if (direction === 'next') {

                    counts[i] += 1;
                    if (counts[i] > contents.length - col) { counts[i] = 0; }

                } else if (direction === 'prev') {

                    counts[i] -= 1;
                    if (counts[i] < 0) { counts[i] = 0; }

                }

                that.setAttribute('data-content', (counts[i] + 1));

                events.removeClass(navDotsEl, 'selected');
                events.addClass(navDotsEl[counts[i]], 'selected');

                filterDots(navDots, navDotsEl, counts[i], i); // filter dots when dots number exceeds
                slide = counts[i] * contents[0].offsetWidth;

                halfSized = events.hasClass(that, 'half-sized');

                if (halfSized && (counts[i] === contents.length - col)) {
                    slide += contents[0].offsetWidth * carousel.halfSize;
                }

                slider[0].style.transform = 'translateX(-' + slide + 'px)';
                getSlideSpeed(slider, contentsEase[i], i); // get carousel slide speed

                // detect carousel animates
                if (contents.length > 1 && contents.length !== col) { // stop reloading animates when content length is not enough

                    events.each(contents, function () {
                        carouselAnimate(this, contentsEase[i], 'static');
                    });

                }

            };

            // load carousels
            events.each(carousels, function (j) {

                var k, that, contents, col, nav, navDots, navDotsHtml, navDotsEl;

                that = this;
                cols[j] = that.getAttribute('data-col');

                colsXL[j] = that.getAttribute('data-col-xl');
                colsLG[j] = that.getAttribute('data-col-lg');
                colsMD[j] = that.getAttribute('data-col-md');
                colsSM[j] = that.getAttribute('data-col-sm');
                colsXS[j] = that.getAttribute('data-col-xs');

                // data-col
                if (cols[j] === null) {
                    cols[j] = 1;

                } else {

                    cols[j] = Number(cols[j]);
                    if (!cols[j] || cols[j] === '0' || cols[j] === '') {
                        cols[j] = 1;
                    }

                }

                // data-col-xl
                if (colsXL[j] === null) {
                    colsXL[j] = cols[j];

                } else {

                    colsXL[j] = Number(colsXL[j]);
                    if (!colsXL[j] || colsXL[j] === '0' || colsXL[j] === '') {
                        colsXL[j] = cols[j];
                    }

                }

                // data-col-lg
                if (colsLG[j] === null) {
                    colsLG[j] = cols[j];

                } else {

                    colsLG[j] = Number(colsLG[j]);
                    if (!colsLG[j] || colsLG[j] === '0' || colsLG[j] === '') {
                        colsLG[j] = cols[j];
                    }

                }

                // data-col-md
                if (colsMD[j] === null) {
                    colsMD[j] = cols[j];

                } else {

                    colsMD[j] = Number(colsMD[j]);
                    if (!colsMD[j] || colsMD[j] === '0' || colsMD[j] === '') {
                        colsMD[j] = cols[j];
                    }

                }

                // data-col-sm
                if (colsSM[j] === null) {
                    colsSM[j] = cols[j];

                } else {

                    colsSM[j] = Number(colsSM[j]);
                    if (!colsSM[j] || colsSM[j] === '0' || colsSM[j] === '') {
                        colsSM[j] = cols[j];
                    }

                }

                // data-col-xs
                if (colsXS[j] === null) {
                    colsXS[j] = cols[j];

                } else {

                    colsXS[j] = Number(colsXS[j]);
                    if (!colsXS[j] || colsXS[j] === '0' || colsXS[j] === '') {
                        colsXS[j] = cols[j];
                    }

                }

                counts[j] = 0;

                contents = selector('.slide-content', that);
                if (contents.length === 0) { return; }

                nav = selector('.carousel-nav', that)[0];
                if (nav === undefined) { return; }

                events.addClass(that, 'active');
                carouselModifier(j, that, 'static');

                // create nav
                col = getCols(j); // get responsive cols

                if (contents.length <= col) { // toggle nav
                    nav.style.display = 'none';

                } else { nav.style.display = ''; }

                navDots = selector('.dots', nav)[0];

                navDotsHtml = '';
                navDots.innerHTML = '';

                for (k = 0; k < contents.length; k++) {
                    navDotsHtml += '<i class="ease-all ease-slow"></i>';
                }

                navDots.insertAdjacentHTML('beforeend', navDotsHtml);
                navDotsEl = selector('.dots i', nav);

                counts[j] = 0;
                that.setAttribute('data-content', (counts[j] + 1));

                events.removeClass(navDotsEl, 'selected');
                events.addClass(navDotsEl[counts[j]], 'selected');

                filterDots(navDots, navDotsEl, counts[j], j); // filter dots when dots number exceeds

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

                var i, that, direction;
                if (events.hasClass(this, 'carousel-next')) { direction = 'next'; } else { direction = 'prev'; }

                that = events.closest(this, '.carousel')[0];
                i = Array.prototype.slice.call(selector('.carousel')).indexOf(that);

                carouselNav(that, direction);

                // wait auto slider when navigating
                if (autoTimer[i] !== null) {
                    clearInterval(autoSlider[i]);
                }

            });

            carouselStart = function (that) {

                var i = Array.prototype.slice.call(selector('.carousel')).indexOf(that);

                clearInterval(autoSlider[i]);
                autoSlider[i] = setInterval(function () { carouselNav(that, 'next'); }, autoTimer[i]);

            };

            carouselStop = function (that) {

                var i = Array.prototype.slice.call(selector('.carousel')).indexOf(that);
                clearInterval(autoSlider[i]);

            };


            events.on(document, 'mouseenter', '.carousel[data-slide]', function () {
                carouselStop(this);
            });

            events.on(document, 'mouseleave', '.carousel[data-slide]', function () {
                carouselStart(this);
            });

            events.on(window, 'visibilitychange', function () {

                var callCarousels = selector('.carousel[data-slide]');
                if (document.hidden) { // stop all carousels when browser windows is not active

                    events.each(callCarousels, function () {
                        carouselStop(this);
                    });

                } else {

                    events.each(callCarousels, function () {
                        carouselStart(this);
                    });

                }

            });

            // prevent touch events when inline scrolling
            events.on(document, 'scroll', '.carousel .scroll,.carousel .scroll-v,.carousel .scroll-h', function (e) {

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

                var i, startx, starty, currentx, currenty, startMove, touchMove, move, that, slider, sliderMax, col, navDotsEl, halfSized, touchEndTimer, contents;

                if (isScrolling) { return; }
                touchMove = false;

                startx = e.targetTouches[0].pageX;
                starty = e.targetTouches[0].pageY;

                that = this;

                slider = selector('.carousel-slider', that)[0];

                contents = selector('.slide-content', that);
                navDotsEl = selector('.carousel-nav .dots i', that);

                halfSized = events.hasClass(that, 'half-sized');

                i = Array.prototype.slice.call(selector('.carousel')).indexOf(that);
                col = getCols(i); // get responsive cols

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
                        sliderMax = -((contents.length - col) * contents[0].offsetWidth);

                        if (halfSized) {
                            sliderMax -= contents[0].offsetWidth * carousel.halfSize;
                        }

                        move = (startMove - (startx - currentx));

                        if (move > 0) {
                            move = 0;

                        } else if (move < sliderMax) {
                            move = sliderMax;
                        }

                        slider.style.transform = 'translateX(' + move + 'px)';

                        // wait auto slider when touchmove
                        if (autoTimer[i] !== null) {
                            clearInterval(autoSlider[i]);
                        }

                        events.addClass(document, 'carousel-touchmove');

                    }

                });

                events.off(document, 'touchend.carousel touchcancel.carousel');
                events.on(document, 'touchend.carousel touchcancel.carousel', function () {

                    if (touchMove) {

                        var beforeCount, navDots;
                        navDots = selector('.carousel-nav .dots', that[i])[0];

                        beforeCount = counts[i];
                        counts[i] = Math.abs(move) / contents[0].offsetWidth;

                        if (currentx < 0) {
                            currentx = 0;

                        } else if (currentx > contents[0].offsetWidth) {
                            currentx = contents[0].offsetWidth;
                        }

                        if ((currentx - startx) > 0) { // slide to right

                            if (counts[i].toFixed(2).split('.')[1] < 85) {
                                counts[i] = Math.floor(counts[i]);

                            } else {
                                counts[i] = beforeCount;
                            }

                        } else { // slide to left

                            if (counts[i].toFixed(2).split('.')[1] > 15) {
                                counts[i] = Math.ceil(counts[i]);

                            } else {
                                counts[i] = beforeCount;
                            }

                        }

                        move = -Math.ceil(counts[i] * contents[0].offsetWidth);

                        if (halfSized && (counts[i] === contents.length - col)) {
                            move -= contents[0].offsetWidth * carousel.halfSize;
                        }

                        slider.style.transform = 'translateX(' + move + 'px)';
                        that.setAttribute('data-content', (counts[i] + 1));

                        events.removeClass(navDotsEl, 'selected');
                        events.addClass(navDotsEl[counts[i]], 'selected');

                        filterDots(navDots, navDotsEl, counts[i], i); // filter dots when dots number exceeds

                        clearTimeout(touchEndTimer);
                        touchEndTimer = setTimeout(function () {

                            getSlideSpeed(slider, contentsEase[i], i); // get carousel slide speed

                            // wait auto slider until touchmove ends
                            if (autoTimer[i] !== null) {

                                clearInterval(autoSlider[i]);

                                autoSlider[i] = setInterval(function () {
                                    carouselNav(that, 'next');
                                }, autoTimer[i]);

                            }

                            // detect carousel animates
                            events.each(contents, function () {
                                carouselAnimate(this, contentsEase[i], 'touch');
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

            // carousel gallery
            events.on('.carousel-gallery .thumbs .img', 'click', function () {

                var parent, detail, target, thumbs, index, newImg;

                parent = events.closest(this, '.carousel-gallery');

                detail = selector('.detail', parent[0]);
                target = selector('img', detail);
                thumbs = selector('.thumbs .img', parent[0]);

                index = Array.prototype.slice.call(thumbs).indexOf(this);
                target.setAttribute('data-count', index);

                events.addClass(detail, 'detail-loader');

                newImg = new Image();
                newImg.src = this.getAttribute('data-href');

                newImg.onload = function () {

                    target.src = newImg.src;
                    events.removeClass(detail, 'detail-loader');

                };

                events.removeClass(thumbs, 'selected');
                events.addClass(this, 'selected');

            });

        }

    };

    // Loaders
    events.onload(carousel.Start);

    events.on(window, 'resize scroll', carouselResizer);
    events.on(document, 'domChange', function () { carouselResizer('resize'); });

}());