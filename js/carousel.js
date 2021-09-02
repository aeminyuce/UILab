/*
 UI Carousel JS
 Requires UI JS
*/

ui.carousel = {
    halfSize: 0.5 // set percent of default half size
};

(function () {

    'use strict';
    /*globals window, document, ui, Image, setTimeout, clearTimeout, setInterval, clearInterval */

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

        if (window.innerWidth >= ui.globals.xl) {
            col = colsXL[i];

        } else if (window.innerWidth < ui.globals.xl && window.innerWidth >= ui.globals.lg) {
            col = colsLG[i];

        } else if (window.innerWidth <= ui.globals.md && window.innerWidth > ui.globals.sm) {
            col = colsMD[i];

        } else if (window.innerWidth <= ui.globals.sm && window.innerWidth > ui.globals.xs) {
            col = colsSM[i];

        } else if (window.innerWidth <= ui.globals.xs) {
            col = colsXS[i];

        } else {
            col = cols[i];
        }

        return col;

    }

    function carouselAnimate(content, wait, type) {

        var time, elems, i;

        time = content.getAttribute('data-ui-animate');
        if (time !== null) {

            if (time === '') { time = ui.globals.ease; }

            i = 0;
            elems = ui.find('.carousel-animate', content);

            if (elems.length === 0) { return; }

            if (type === 'static') {
                ui.removeClass(elems, 'show');
            }

            setTimeout(function () { // wait for dom loading or slider ease time

                function show() {

                    setTimeout(function () {

                        ui.addClass(elems[i], 'show');
                        i += 1;
                        if (i < elems.length) { show(); }

                    }, time);

                }
                show();

            }, wait);

        }

    }

    function filterDots(navDots, navDotsEl, count, i) {

        ui.removeClass(navDots, 'filtered');
        ui.removeClass(navDotsEl, 'show faded');

        var col = getCols(i); // get responsive cols

        ui.addClass(navDots, 'filtered');

        if ((count - 1) > -1) {

            ui.addClass(navDotsEl[count - 1], 'show');

            if ((count - 2) > -1) {
                ui.addClass(navDotsEl[count - 2], 'faded');
            }

        }

        if ((count + col) < navDotsEl.length) {

            ui.addClass(navDotsEl[count + 1], 'show');

            if ((count + col + 1) < navDotsEl.length) {
                ui.addClass(navDotsEl[count + 2], 'faded');
            }

        }

    }

    function carouselModifier(i, that, type) {

        var j, slider, contents, nav, col, halfSized, size, navDots, navDotsEl;

        contents = ui.find('.slide-content', that);
        if (contents.length === 0) { return; }

        nav = ui.find('.carousel-nav', that)[0];
        if (nav === undefined) { return; }

        col = getCols(i); // get responsive cols

        if (contents.length <= col) { // toggle nav
            nav.style.display = 'none';

        } else { nav.style.display = ''; }

        halfSized = ui.hasClass(that, 'half-sized');
        slider = ui.find('.carousel-slider', that);

        size = col;
        if (halfSized && col > 1 && col !== contents.length) { size -= ui.carousel.halfSize; }

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

        that.setAttribute('data-ui-content', (counts[i] + 1));
        slider[0].style.transform = 'translateX(-' + (counts[i] * contents[0].offsetWidth) + 'px)';

        navDots = ui.find('.carousel-nav .dots', that);
        navDotsEl = ui.find('.carousel-nav .dots i', that);

        ui.removeClass(navDotsEl, 'selected');
        ui.addClass(navDotsEl[counts[i]], 'selected');

        filterDots(navDots, navDotsEl, counts[i], i); // filter dots when dots number exceeds

        ui.each(contents, function (l) { // detect carousel animates

            if (l + 1 > col) { return; }
            carouselAnimate(this, (ui.globals.ease * 2), type);

        });

    }

    function carouselResizer(e) {

        var that, slider;

        if (e === 'resize' || e.type === 'resize') {

            that = ui.find('.carousel');
            ui.each(that, function (i) {

                slider = ui.find('.carousel-slider', this)[0];

                carouselModifier(i, this, 'resize');

                this.style.transitionDuration = '0s';
                slider.style.transitionDuration = '0s';

            });

        }

        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () { // wait auto slider until resize completed

            that = ui.find('.carousel');
            ui.each(that, function (i) {

                if (autoTimer[i] !== null) {

                    clearInterval(autoSlider[i]);

                    autoSlider[i] = setInterval(function () {
                        carouselNav(that[i], 'next');
                    }, autoTimer[i]);

                }

                slider = ui.find('.carousel-slider', this)[0];

                this.style.transitionDuration = '';
                slider.style.transitionDuration = '';

            });

        }, ui.globals.ease);

    }

    ui.carousel.Start = function () {

        var carousels, carouselStart, carouselStop;

        // get carousel slide speed
        function getSlideSpeed(slider, ease, i) {

            ease = ui.globals.ease;

            if (ui.hasClass(slider, 'ease-fast')) {
                ease = ui.globals.fast;

            } else if (ui.hasClass(slider, 'ease-slow')) {
                ease = ui.globals.slow;

            } else if (ui.hasClass(slider, 'ease-slow-2x')) {
                ease = ui.globals.slow2x;

            } else if (ui.hasClass(slider, 'ease-slow-3x')) {
                ease = ui.globals.slow3x;

            } else if (ui.hasClass(slider, 'ease-slow-4x')) {
                ease = ui.globals.slow4x;

            } else if (ui.hasClass(slider, 'ease-slow-5x')) {
                ease = ui.globals.slow5x;
            }

            contentsEase[i] = ease;

        }

        carousels = ui.find('.carousel');
        if (carousels.length > 0) {

            carouselNav = function (that, direction) {

                var col, slider, nav, contents, i, navDots, navDotsEl, slide, halfSized;

                nav = ui.find('.carousel-nav', that)[0];
                if (nav === undefined) { return; }

                slider = ui.find('.carousel-slider', that);
                contents = ui.find('.slide-content', slider[0]);

                if (contents.length === 0) { return; }

                i = Array.prototype.slice.call(ui.find('.carousel')).indexOf(that);

                navDots = ui.find('.carousel-nav .dots', that);
                navDotsEl = ui.find('.carousel-nav .dots i', that);

                col = getCols(i); // get responsive cols

                if (direction === 'next') {

                    counts[i] += 1;
                    if (counts[i] > contents.length - col) { counts[i] = 0; }

                } else if (direction === 'prev') {

                    counts[i] -= 1;
                    if (counts[i] < 0) { counts[i] = 0; }

                }

                that.setAttribute('data-ui-content', (counts[i] + 1));

                ui.removeClass(navDotsEl, 'selected');
                ui.addClass(navDotsEl[counts[i]], 'selected');

                filterDots(navDots, navDotsEl, counts[i], i); // filter dots when dots number exceeds
                slide = counts[i] * contents[0].offsetWidth;

                halfSized = ui.hasClass(that, 'half-sized');

                if (halfSized && (counts[i] === contents.length - col)) {
                    slide += contents[0].offsetWidth * ui.carousel.halfSize;
                }

                slider[0].style.transform = 'translateX(-' + slide + 'px)';
                getSlideSpeed(slider, contentsEase[i], i); // get carousel slide speed

                // detect carousel animates
                if (contents.length > 1 && contents.length !== col) { // stop reloading animates when content length is not enough

                    ui.each(contents, function () {
                        carouselAnimate(this, contentsEase[i], 'static');
                    });

                }

            };

            // load carousels
            ui.each(carousels, function (j) {

                var k, that, contents, col, nav, navDots, navDotsHtml, navDotsEl;

                that = this;
                cols[j] = that.getAttribute('data-ui-col');

                colsXL[j] = that.getAttribute('data-ui-col-xl');
                colsLG[j] = that.getAttribute('data-ui-col-lg');
                colsMD[j] = that.getAttribute('data-ui-col-md');
                colsSM[j] = that.getAttribute('data-ui-col-sm');
                colsXS[j] = that.getAttribute('data-ui-col-xs');

                // data-ui-col
                if (cols[j] === null) {
                    cols[j] = 1;

                } else {

                    cols[j] = Number(cols[j]);
                    if (!cols[j] || cols[j] === '0' || cols[j] === '') {
                        cols[j] = 1;
                    }

                }

                // data-ui-col-xl
                if (colsXL[j] === null) {
                    colsXL[j] = cols[j];

                } else {

                    colsXL[j] = Number(colsXL[j]);
                    if (!colsXL[j] || colsXL[j] === '0' || colsXL[j] === '') {
                        colsXL[j] = cols[j];
                    }

                }

                // data-ui-col-lg
                if (colsLG[j] === null) {
                    colsLG[j] = cols[j];

                } else {

                    colsLG[j] = Number(colsLG[j]);
                    if (!colsLG[j] || colsLG[j] === '0' || colsLG[j] === '') {
                        colsLG[j] = cols[j];
                    }

                }

                // data-ui-col-md
                if (colsMD[j] === null) {
                    colsMD[j] = cols[j];

                } else {

                    colsMD[j] = Number(colsMD[j]);
                    if (!colsMD[j] || colsMD[j] === '0' || colsMD[j] === '') {
                        colsMD[j] = cols[j];
                    }

                }

                // data-ui-col-sm
                if (colsSM[j] === null) {
                    colsSM[j] = cols[j];

                } else {

                    colsSM[j] = Number(colsSM[j]);
                    if (!colsSM[j] || colsSM[j] === '0' || colsSM[j] === '') {
                        colsSM[j] = cols[j];
                    }

                }

                // data-ui-col-xs
                if (colsXS[j] === null) {
                    colsXS[j] = cols[j];

                } else {

                    colsXS[j] = Number(colsXS[j]);
                    if (!colsXS[j] || colsXS[j] === '0' || colsXS[j] === '') {
                        colsXS[j] = cols[j];
                    }

                }

                counts[j] = 0;

                contents = ui.find('.slide-content', that);
                if (contents.length === 0) { return; }

                nav = ui.find('.carousel-nav', that)[0];
                if (nav === undefined) { return; }

                ui.addClass(that, 'active');
                carouselModifier(j, that, 'static');

                // create nav
                col = getCols(j); // get responsive cols

                if (contents.length <= col) { // toggle nav
                    nav.style.display = 'none';

                } else { nav.style.display = ''; }

                navDots = ui.find('.dots', nav)[0];

                navDotsHtml = '';
                navDots.innerHTML = '';

                for (k = 0; k < contents.length; k++) {
                    navDotsHtml += '<i class="ease-all ease-slow"></i>';
                }

                navDots.insertAdjacentHTML('beforeend', navDotsHtml);
                navDotsEl = ui.find('.dots i', nav);

                counts[j] = 0;
                that.setAttribute('data-ui-content', (counts[j] + 1));

                ui.removeClass(navDotsEl, 'selected');
                ui.addClass(navDotsEl[counts[j]], 'selected');

                filterDots(navDots, navDotsEl, counts[j], j); // filter dots when dots number exceeds

                // auto slider
                autoTimer[j] = that.getAttribute('data-ui-slide');
                if (autoTimer[j] !== null) {

                    if (autoTimer[j] === '') {
                        autoTimer[j] = 8000;
                    }

                    autoSlider[j] = setInterval(function () {
                        carouselNav(that, 'next');
                    }, autoTimer[j]);

                }

            });

            // Event Listeners
            ui.on(document, 'click', '.carousel-prev,.carousel-next', function () {

                var i, that, direction;
                if (ui.hasClass(this, 'carousel-next')) { direction = 'next'; } else { direction = 'prev'; }

                that = ui.closest(this, '.carousel')[0];
                i = Array.prototype.slice.call(ui.find('.carousel')).indexOf(that);

                carouselNav(that, direction);

                // wait auto slider when navigating
                if (autoTimer[i] !== null) {
                    clearInterval(autoSlider[i]);
                }

            });

            carouselStart = function (that) {

                var i = Array.prototype.slice.call(ui.find('.carousel')).indexOf(that);

                clearInterval(autoSlider[i]);
                autoSlider[i] = setInterval(function () { carouselNav(that, 'next'); }, autoTimer[i]);

            };

            carouselStop = function (that) {

                var i = Array.prototype.slice.call(ui.find('.carousel')).indexOf(that);
                clearInterval(autoSlider[i]);

            };


            ui.on(document, 'mouseenter', '.carousel[data-ui-slide]', function () {
                carouselStop(this);
            });

            ui.on(document, 'mouseleave', '.carousel[data-ui-slide]', function () {
                carouselStart(this);
            });

            ui.on(window, 'visibilitychange', function () {

                var callCarousels = ui.find('.carousel[data-ui-slide]');
                if (document.hidden) { // stop all carousels when browser windows is not active

                    ui.each(callCarousels, function () {
                        carouselStop(this);
                    });

                } else {

                    ui.each(callCarousels, function () {
                        carouselStart(this);
                    });

                }

            });

            // prevent touch event listeners when inline scrolling
            ui.on(document, 'scroll', '.carousel .scroll,.carousel .scroll-v,.carousel .scroll-h', function (e) {

                e.preventDefault();
                e.stopPropagation();

                isScrolling = true;
                clearTimeout(isScrollingTimer);

                isScrollingTimer = setTimeout(function () {
                    isScrolling = false;
                }, ui.globals.ease);

            });

            // touchmove event listeners
            ui.on(document, 'touchstart', '.carousel', function (e) {

                var i, startx, starty, currentx, currenty, startMove, touchMove, move, that, slider, sliderMax, col, navDotsEl, halfSized, touchEndTimer, contents;

                if (isScrolling) { return; }
                touchMove = false;

                startx = e.targetTouches[0].pageX;
                starty = e.targetTouches[0].pageY;

                that = this;

                slider = ui.find('.carousel-slider', that)[0];

                contents = ui.find('.slide-content', that);
                navDotsEl = ui.find('.carousel-nav .dots i', that);

                halfSized = ui.hasClass(that, 'half-sized');

                i = Array.prototype.slice.call(ui.find('.carousel')).indexOf(that);
                col = getCols(i); // get responsive cols

                startMove = window.getComputedStyle(slider).getPropertyValue('transform'); // matrix(xZoom, 0, 0, yZoom, xPos, yPos)
                startMove = startMove.replace('matrix', '').replace(/[\,\(\)\s]/g, ' ').replace(/\s\s/g, '|'); // select only numbers

                startMove = startMove.split('|')[4];

                ui.off(document, 'touchmove');
                ui.on(document, 'touchmove', function (e) {

                    if (ui.hasClass(document, 'photo-preview-opened')) { return; } // stop if photo gallery is opened
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
                            sliderMax -= contents[0].offsetWidth * ui.carousel.halfSize;
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

                        ui.addClass(document, 'carousel-touchmove');

                    }

                });

                ui.off(document, 'touchend.ui:carousel touchcancel.ui:carousel');
                ui.on(document, 'touchend.ui:carousel touchcancel.ui:carousel', function () {

                    if (touchMove) {

                        var beforeCount, navDots;
                        navDots = ui.find('.carousel-nav .dots', that[i])[0];

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
                            move -= contents[0].offsetWidth * ui.carousel.halfSize;
                        }

                        slider.style.transform = 'translateX(' + move + 'px)';
                        that.setAttribute('data-ui-content', (counts[i] + 1));

                        ui.removeClass(navDotsEl, 'selected');
                        ui.addClass(navDotsEl[counts[i]], 'selected');

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
                            ui.each(contents, function () {
                                carouselAnimate(this, contentsEase[i], 'touch');
                            });

                            ui.removeClass(document, 'carousel-touchmove');

                        }, ui.globals.fast);

                        that.style.transitionDuration = '';
                        slider.style.transitionDuration = '';

                    }

                    touchMove = false;

                    ui.off(that, 'touchmove');
                    ui.off(document, 'touchend.ui:carousel touchcancel.ui:carousel');

                });

            });

            // carousel gallery
            ui.on('.carousel-gallery .thumbs .img', 'click', function () {

                var parent, detail, target, thumbs, index, newImg;

                parent = ui.closest(this, '.carousel-gallery');

                detail = ui.find('.detail', parent[0]);
                target = ui.find('img', detail);
                thumbs = ui.find('.thumbs .img', parent[0]);

                index = Array.prototype.slice.call(thumbs).indexOf(this);
                target.setAttribute('data-ui-count', index);

                ui.addClass(detail, 'detail-loader');

                newImg = new Image();
                newImg.src = this.getAttribute('data-ui-href');

                newImg.onload = function () {

                    target.src = newImg.src;
                    ui.removeClass(detail, 'detail-loader');

                };

                ui.removeClass(thumbs, 'selected');
                ui.addClass(this, 'selected');

            });

            ui.each('.carousel-gallery .thumbs', function () {

                var images = ui.find('.img', this);

                if (images.length <= 1) {
                    this.style.display = 'none'; // hide thumbs when image length is 1 or 0
                }

            });

        }

    };

    // Loaders
    ui.onload(ui.carousel.Start);

    ui.on(window, 'resize scroll', carouselResizer);
    ui.on(document, ui.globals.eventDomChange, function () { carouselResizer('resize'); });

}());