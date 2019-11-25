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

    showMaxDots: 10, // 5+ numbers, allowed size for dots number exceeds
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
        autoTimeouts = [],

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

    function filterDots(navDots, navDotsEl, navSide) {

        if (carousel.showMaxDots < 5) { return; }

        events.removeClass(navDots, 'filtered');
        events.removeClass(navDotsEl, 'show faded');

        if (navDotsEl.length > carousel.showMaxDots) {

            events.addClass(navDots, 'filtered');

            if ((navSide - 1) > -1) {

                events.addClass(navDotsEl[navSide - 1], 'show');

                if ((navSide - 2) > -1) {
                    events.addClass(navDotsEl[navSide - 2], 'show faded');
                }

            }

            if ((navSide + 1) < navDotsEl.length) {

                events.addClass(navDotsEl[navSide + 1], 'show');

                if ((navSide + 2) < navDotsEl.length) {
                    events.addClass(navDotsEl[navSide + 2], 'show faded');
                }

            }

        }

    }

    function carouselResizerFnc(i, that, type) {

        var col, j, k, slider, contents, animate, nav, navDots, navDotsEl, navDotsLength, navDotsSize, navDotsHtml, navSides, navSide, halfSized, size;

        function fnc() {

            contents = selector('.content', that[i]);
            if (contents.length === 0) { return; }

            nav = selector('.carousel-nav', that[i])[0];
            navDots = selector('.dots', nav)[0];
            navDotsLength = selector('i', navDots).length;

            col = getCols(i); // get responsive cols

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

            if (navSides < 2) {
                nav.style.display = 'none';

            } else {
                nav.style.display = '';
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

            filterDots(navDots, navDotsEl, navSide); // filter dots when dots number exceeds

            halfSized = events.hasClass(that[i], 'half-sized');
            slider = selector('.carousel-slider', that[i]);

            size = col;
            if (halfSized && col > 1) { size -= carousel.halfSize; }

            size = Math.ceil(that[i].offsetWidth / size);

            for (j = 0; j < contents.length; j += 1) {
                contents[j].style.width = size + 'px';
            }

            size = size * contents.length;
            slider[0].style.width = size + 'px';

            slider[0].style.transform = 'translateX(-' + (counts[i] * contents[0].offsetWidth) + 'px)';

        }

        if (that.length > 0) {

            if (i === undefined) {
                for (i = 0; i < that.length; i += 1) { fnc(); }

            } else { fnc(); }

        }

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

                var col, slider, contents, animate, i, navDots, navDotsEl, navSide, slide, halfSized;

                slider = selector('.carousel-slider', that);
                contents = selector('.content', slider[0]);

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

                getSlideSpeed(slider, contentsEase[i], i); // get carousel slide speed

                // detect carousel animates
                if (contents.length > 1 && contents.length !== col) { // stop reloading animates when content length is not enough

                    events.each(contents, function () {

                        animate = this.getAttribute('data-animate');
                        if (animate !== null) {

                            if (animate === '') { animate = 150; }
                            carouselAnimate(this, animate, contentsEase[i], 'static');

                        }

                    });

                }

                that.setAttribute('data-content', (counts[i] + 1));

                navSide = Math.round(counts[i] * Math.ceil(contents.length / col) / contents.length);

                events.removeClass(navDotsEl, 'selected');
                events.addClass(navDotsEl[navSide], 'selected');

                filterDots(navDots, navDotsEl, navSide); // filter dots when dots number exceeds
                slide = counts[i] * contents[0].offsetWidth;

                halfSized = events.hasClass(that, 'half-sized');

                if (halfSized && (counts[i] === contents.length - col)) {
                    slide += contents[0].offsetWidth * carousel.halfSize;
                }

                slider[0].style.transform = 'translateX(-' + slide + 'px)';

            };

            // load carousels
            events.each(carousels, function (j) {

                var that = this;

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


            carouselStart = function (that) {

                var i = Array.prototype.slice.call(selector('.carousel')).indexOf(that);

                autoSlider[i] = setInterval(function () {
                    carouselNav(that, 'next');
                }, autoTimer[i]);

            };
            
            carouselStop = function (that) {

                var i = Array.prototype.slice.call(selector('.carousel')).indexOf(that);

                clearInterval(autoSlider[i]);
                clearTimeout(autoTimeouts[i]);

            };

           
            events.on(document, 'mouseenter', '.carousel[data-slide]', function () {
                carouselStop(this);
            });
            
            events.on(document, 'mouseleave', '.carousel[data-slide]', function () {
                carouselStart(this);
            });
            
            events.on(window, 'visibilitychange', function () {

                if (document.hidden) { // stop all carousels when browser windows is not active
                    
                    events.each(carousels, function () {
                        carouselStop(this);
                    });
                    
                } else {

                    events.each(carousels, function () {
                        carouselStart(this);
                    });

                }

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
                            clearTimeout(autoTimeouts[i]);

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

                        slider.style.transform = 'translateX(' + -(counts[i] * contents[0].offsetWidth) + 'px)';
                        that.setAttribute('data-content', (counts[i] + 1));

                        navSide = Math.round(counts[i] * Math.ceil(contents.length / col) / contents.length);

                        events.removeClass(navDotsEl, 'selected');
                        events.addClass(navDotsEl[navSide], 'selected');

                        filterDots(navDots, navDotsEl, navSide); // filter dots when dots number exceeds

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

                }

                events.removeClass(thumbs, 'selected');
                events.addClass(this, 'selected');

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
