/*
 UI Carousel JS
 Requires UI JS
*/

ui.carousel = {

    // targets
    target: 'ui-carousel',

    targetGallery: 'ui-carousel-gallery',
    targetSlider: 'ui-carousel-slider',
    targetNav: 'ui-carousel-nav',

    // main classnames
    nameAnimate: 'ui-carousel-animate',
    nameTouchMove: 'ui-carousel-touchmove',

    nameHalfSize: 'ui-half-sized',

    nameContent: 'ui-slide-content',

    namePrev: 'ui-carousel-prev',
    nameNext: 'ui-carousel-next',
    nameDots: 'ui-dots',

    nameGalleryDetail: 'ui-detail',
    nameGalleryDetailLoader: 'ui-detail-loader',

    nameGalleryThumbs: 'ui-thumbs',
    nameGalleryImg: 'ui-img',

    // helper classnames
    nameShow: 'ui-show',
    nameFaded: 'ui-faded',
    nameActive: 'ui-active',

    nameFiltered: 'ui-filtered',
    nameNavSelected: 'ui-selected',
    nameGallerySelected: 'ui-selected',

    // outer classnames
    nameScroll: 'scroll',
    nameScrollV: 'scroll-v',
    nameScrollH: 'scroll-h',

    nameEaseFast: 'ui-ease-fast',
    nameEaseSlow: 'ui-ease-slow',
    nameEaseSlow2x: 'ui-ease-slow-2x',
    nameEaseSlow3x: 'ui-ease-slow-3x',
    nameEaseSlow4x: 'ui-ease-slow-4x',
    nameEaseSlow5x: 'ui-ease-slow-5x',

    // styling classnames
    stylesDots: 'ui-ease-all ui-ease-slow',

    // tags
    tagDots: 'i',

    // values
    halfSize: 0.5, // set percent of default half size
    defaultSlideTimer: 8000,

    touchMoveToleranceX: 15,
    touchMoveToleranceY: 25,

    // data attributes
    dataCols: 'data-ui-col',
    dataColsXL: 'data-ui-col-xl',
    dataColsLG: 'data-ui-col-lg',
    dataColsMD: 'data-ui-col-md',
    dataColsSM: 'data-ui-col-sm',
    dataColsXS: 'data-ui-col-xs',

    dataAnimate: 'data-ui-animate',
    dataContent: 'data-ui-content',
    dataCount: 'data-ui-count',
    dataSlide: 'data-ui-slide',
    dataHref: 'data-ui-href',

    // custom events
    eventTouchEnd: 'ui:carouselTouchEnd',
    eventTouchCancel: 'ui:carouselTouchCancel'

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
        isScrolling = false,

        touchStarted = false;

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

        time = content.getAttribute(ui.carousel.dataAnimate);
        if (time !== null) {

            if (time === '') { time = ui.globals.ease; }

            i = 0;
            elems = ui.find('.' + ui.carousel.nameAnimate, content);

            if (elems.length === 0) { return; }

            if (type === 'static') {
                ui.removeClass(elems, ui.carousel.nameShow);
            }

            setTimeout(function () { // wait for dom loading or slider ease time

                function show() {

                    setTimeout(function () {

                        ui.addClass(elems[i], ui.carousel.nameShow);
                        i += 1;
                        if (i < elems.length) { show(); }

                    }, time);

                }
                show();

            }, wait);

        }

    }

    function filterDots(navDots, navDotsEl, count, i) {

        ui.removeClass(navDots, ui.carousel.nameFiltered);
        ui.removeClass(navDotsEl, ui.carousel.nameShow + ' ' + ui.carousel.nameFaded);

        var col = getCols(i); // get responsive cols

        ui.addClass(navDots, ui.carousel.nameFiltered);

        if ((count - 1) > -1) {

            ui.addClass(navDotsEl[count - 1], ui.carousel.nameShow);

            if ((count - 2) > -1) {
                ui.addClass(navDotsEl[count - 2], ui.carousel.nameFaded);
            }

        }

        if ((count + col) < navDotsEl.length) {

            ui.addClass(navDotsEl[count + 1], ui.carousel.nameShow);

            if ((count + col + 1) < navDotsEl.length) {
                ui.addClass(navDotsEl[count + 2], ui.carousel.nameFaded);
            }

        }

    }

    function carouselModifier(i, that, type) {

        var j, slider, contents, nav, col, halfSized, size, navDots, navDotsEl;

        contents = ui.find('.' + ui.carousel.nameContent, that);
        if (contents.length === 0) { return; }

        nav = ui.find('.' + ui.carousel.targetNav, that)[0];
        if (nav === undefined) { return; }

        col = getCols(i); // get responsive cols

        if (contents.length <= col) { // toggle nav
            nav.style.display = 'none';

        } else { nav.style.display = ''; }

        halfSized = ui.hasClass(that, ui.carousel.nameHalfSize);
        slider = ui.find('.' + ui.carousel.targetSlider, that);

        size = col;

        if (halfSized && col > 1 && col !== contents.length) {
            size -= ui.carousel.halfSize;
        }

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

        that.setAttribute(ui.carousel.dataContent, (counts[i] + 1));
        slider[0].style.transform = 'translateX(-' + (counts[i] * contents[0].offsetWidth) + 'px)';

        navDots = ui.find('.' + ui.carousel.targetNav + ' .' + ui.carousel.nameDots, that);
        navDotsEl = ui.find('.' + ui.carousel.targetNav + ' .' + ui.carousel.nameDots + ' i', that);

        ui.removeClass(navDotsEl, ui.carousel.nameNavSelected);
        ui.addClass(navDotsEl[counts[i]], ui.carousel.nameNavSelected);

        filterDots(navDots, navDotsEl, counts[i], i); // filter dots when dots number exceeds

        ui.each(contents,

            function (l) { // detect carousel animates

                if (l + 1 > col) { return; }
                carouselAnimate(this, (ui.globals.ease * 2), type);

            });

    }

    function carouselResizer(e) {

        var that, slider;

        if (touchStarted) { return; }

        if (e === 'resize' || e.type === 'resize') {

            that = ui.find('.' + ui.carousel.target);
            ui.each(that,

                function (i) {

                    slider = ui.find('.' + ui.carousel.targetSlider, this)[0];

                    carouselModifier(i, this, 'resize');

                    this.style.transitionDuration = '0s';
                    slider.style.transitionDuration = '0s';

                });

        }

        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () { // wait auto slider until resize completed

            that = ui.find('.' + ui.carousel.target);
            ui.each(that,

                function (i) {

                    if (autoTimer[i] !== null) {

                        clearInterval(autoSlider[i]);

                        autoSlider[i] = setInterval(function () {
                            carouselNav(that[i], 'next');
                        }, autoTimer[i]);

                    }

                    slider = ui.find('.' + ui.carousel.targetSlider, this)[0];

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

            if (ui.hasClass(slider, ui.carousel.nameEaseFast)) {
                ease = ui.globals.fast;

            } else if (ui.hasClass(slider, ui.carousel.nameEaseSlow)) {
                ease = ui.globals.slow;

            } else if (ui.hasClass(slider, ui.carousel.nameEaseSlow2x)) {
                ease = ui.globals.slow2x;

            } else if (ui.hasClass(slider, ui.carousel.nameEaseSlow3x)) {
                ease = ui.globals.slow3x;

            } else if (ui.hasClass(slider, ui.carousel.nameEaseSlow4x)) {
                ease = ui.globals.slow4x;

            } else if (ui.hasClass(slider, ui.carousel.nameEaseSlow5x)) {
                ease = ui.globals.slow5x;
            }

            contentsEase[i] = ease;

        }

        carousels = ui.find('.' + ui.carousel.target);
        if (carousels.length > 0) {

            carouselNav = function (that, direction) {

                var col, slider, nav, contents, i, navDots, navDotsEl, slide, halfSized;

                nav = ui.find('.' + ui.carousel.targetNav, that)[0];
                if (nav === undefined) { return; }

                slider = ui.find('.' + ui.carousel.targetSlider, that);
                contents = ui.find('.' + ui.carousel.nameContent, slider[0]);

                if (contents.length === 0) { return; }

                i = Array.prototype.slice.call(ui.find('.' + ui.carousel.target)).indexOf(that);

                navDots = ui.find('.' + ui.carousel.targetNav + ' .' + ui.carousel.nameDots, that);
                navDotsEl = ui.find('.' + ui.carousel.targetNav + ' .' + ui.carousel.nameDots + ' i', that);

                col = getCols(i); // get responsive cols

                if (direction === 'next') {

                    counts[i] += 1;

                    if (counts[i] > contents.length - col) {
                        counts[i] = 0;
                    }

                } else if (direction === 'prev') {

                    counts[i] -= 1;

                    if (counts[i] < 0) {
                        counts[i] = 0;
                    }

                }

                that.setAttribute(ui.carousel.dataContent, (counts[i] + 1));

                ui.removeClass(navDotsEl, ui.carousel.nameNavSelected);
                ui.addClass(navDotsEl[counts[i]], ui.carousel.nameNavSelected);

                filterDots(navDots, navDotsEl, counts[i], i); // filter dots when dots number exceeds
                slide = counts[i] * contents[0].offsetWidth;

                halfSized = ui.hasClass(that, ui.carousel.nameHalfSize);

                if (halfSized && (counts[i] === contents.length - col)) {
                    slide += contents[0].offsetWidth * ui.carousel.halfSize;
                }

                slider[0].style.transform = 'translateX(-' + slide + 'px)';
                getSlideSpeed(slider, contentsEase[i], i); // get carousel slide speed

                // detect carousel animates
                if (contents.length > 1 && contents.length !== col) { // stop reloading animates when content length is not enough

                    ui.each(contents,

                        function () {
                            carouselAnimate(this, contentsEase[i], 'static');
                        });

                }

            };

            // load carousels
            ui.each(carousels,

                function (j) {

                    var k, that, contents, col, nav, navDots, navDotsHtml, navDotsEl;

                    that = this;
                    cols[j] = that.getAttribute(ui.carousel.dataCols);

                    colsXL[j] = that.getAttribute(ui.carousel.dataColsXL);
                    colsLG[j] = that.getAttribute(ui.carousel.dataColsLG);
                    colsMD[j] = that.getAttribute(ui.carousel.dataColsMD);
                    colsSM[j] = that.getAttribute(ui.carousel.dataColsSM);
                    colsXS[j] = that.getAttribute(ui.carousel.dataColsXS);

                    // col
                    if (cols[j] === null) {
                        cols[j] = 1;

                    } else {

                        cols[j] = Number(cols[j]);

                        if (!cols[j] || cols[j] === '0' || cols[j] === '') {
                            cols[j] = 1;
                        }

                    }

                    // xl
                    if (colsXL[j] === null) {
                        colsXL[j] = cols[j];

                    } else {

                        colsXL[j] = Number(colsXL[j]);

                        if (!colsXL[j] || colsXL[j] === '0' || colsXL[j] === '') {
                            colsXL[j] = cols[j];
                        }

                    }

                    // lg
                    if (colsLG[j] === null) {
                        colsLG[j] = cols[j];

                    } else {

                        colsLG[j] = Number(colsLG[j]);

                        if (!colsLG[j] || colsLG[j] === '0' || colsLG[j] === '') {
                            colsLG[j] = cols[j];
                        }

                    }

                    // md
                    if (colsMD[j] === null) {
                        colsMD[j] = cols[j];

                    } else {

                        colsMD[j] = Number(colsMD[j]);

                        if (!colsMD[j] || colsMD[j] === '0' || colsMD[j] === '') {
                            colsMD[j] = cols[j];
                        }

                    }

                    // sm
                    if (colsSM[j] === null) {
                        colsSM[j] = cols[j];

                    } else {

                        colsSM[j] = Number(colsSM[j]);

                        if (!colsSM[j] || colsSM[j] === '0' || colsSM[j] === '') {
                            colsSM[j] = cols[j];
                        }

                    }

                    // xs
                    if (colsXS[j] === null) {
                        colsXS[j] = cols[j];

                    } else {

                        colsXS[j] = Number(colsXS[j]);

                        if (!colsXS[j] || colsXS[j] === '0' || colsXS[j] === '') {
                            colsXS[j] = cols[j];
                        }

                    }

                    counts[j] = 0;

                    contents = ui.find('.' + ui.carousel.nameContent, that);
                    if (contents.length === 0) { return; }

                    nav = ui.find('.' + ui.carousel.targetNav, that)[0];
                    if (nav === undefined) { return; }

                    ui.addClass(that, ui.carousel.nameActive);
                    carouselModifier(j, that, 'static');

                    // create nav
                    col = getCols(j); // get responsive cols

                    if (contents.length <= col) { // toggle nav
                        nav.style.display = 'none';

                    } else { nav.style.display = ''; }

                    navDots = ui.find('.' + ui.carousel.nameDots, nav)[0];

                    navDotsHtml = '';
                    navDots.innerHTML = '';

                    for (k = 0; k < contents.length; k++) {

                        navDotsHtml += '<' + ui.carousel.tagDots + ' ' +
                                            'class="' + ui.carousel.stylesDots + '">' +
                                       '</' + ui.carousel.tagDots + '>';

                    }

                    navDots.insertAdjacentHTML('beforeend', navDotsHtml);
                    navDotsEl = ui.find('.' + ui.carousel.nameDots + ' i', nav);

                    counts[j] = 0;
                    that.setAttribute(ui.carousel.dataContent, (counts[j] + 1));

                    ui.removeClass(navDotsEl, ui.carousel.nameNavSelected);
                    ui.addClass(navDotsEl[counts[j]], ui.carousel.nameNavSelected);

                    filterDots(navDots, navDotsEl, counts[j], j); // filter dots when dots number exceeds

                    // auto slider
                    autoTimer[j] = that.getAttribute(ui.carousel.dataSlide);

                    if (autoTimer[j] !== null) {

                        if (autoTimer[j] === '') {
                            autoTimer[j] = ui.carousel.defaultSlideTimer;
                        }

                        autoSlider[j] = setInterval(function () {
                            carouselNav(that, 'next');
                        }, autoTimer[j]);

                    }

                });

            // Event Listeners
            ui.on(document,
                'click',

                '.' + ui.carousel.namePrev + ',.' + ui.carousel.nameNext,

                function () {

                    var i, that, direction;

                    if (ui.hasClass(this, ui.carousel.nameNext)) {
                        direction = 'next';

                    } else {
                        direction = 'prev';
                    }

                    that = ui.closest(this, '.' + ui.carousel.target)[0];
                    i = Array.prototype.slice.call(ui.find('.' + ui.carousel.target)).indexOf(that);

                    carouselNav(that, direction);

                    // wait auto slider when navigating
                    if (autoTimer[i] !== null) {
                        clearInterval(autoSlider[i]);
                    }

                });

            carouselStart = function (that) {

                var i = Array.prototype.slice.call(ui.find('.' + ui.carousel.target)).indexOf(that);

                clearInterval(autoSlider[i]);

                autoSlider[i] = setInterval(function () {
                    carouselNav(that, 'next');
                }, autoTimer[i]);

            };

            carouselStop = function (that) {

                var i = Array.prototype.slice.call(ui.find('.' + ui.carousel.target)).indexOf(that);
                clearInterval(autoSlider[i]);

            };


            ui.on(document,
                'mouseenter',

                '.' + ui.carousel.target + '[' + ui.carousel.dataSlide + ']',

                function () {
                    carouselStop(this);
                });

            ui.on(document,
                'mouseleave', '.' + ui.carousel.target + '[' + ui.carousel.dataSlide + ']',

                function () {
                    carouselStart(this);
                });

            ui.on(window,
                'visibilitychange',

                function () {

                    var callCarousels = ui.find('.' + ui.carousel.target + '[' + ui.carousel.dataSlide + ']');

                    if (document.hidden) { // stop all carousels when browser windows is not active

                        ui.each(callCarousels,

                            function () {
                                carouselStop(this);
                            });

                    } else {

                        ui.each(callCarousels,

                            function () {
                                carouselStart(this);
                            });

                    }

                });

            // prevent touch event listeners when inline scrolling
            ui.on(document,
                 'scroll',

                 '.' + ui.carousel.target + ' .' + ui.carousel.nameScroll + ',' +
                 '.' + ui.carousel.target + ' .' + ui.carousel.nameScrollV + ',' +
                 '.' + ui.carousel.target + ' .' + ui.carousel.nameScrollH,

                function (e) {

                    e.preventDefault();
                    e.stopPropagation();

                    isScrolling = true;
                    clearTimeout(isScrollingTimer);

                    isScrollingTimer = setTimeout(function () {
                        isScrolling = false;
                    }, ui.globals.ease);

                });

            // touchmove event listeners
            ui.on(document,
                'touchstart',

                '.' + ui.carousel.target,

                function (e) {

                    var i, startx, starty, currentx, currenty, startMove, touchMove, move, that, slider, sliderMax, col, navDotsEl, halfSized, touchEndTimer, contents;

                    if (isScrolling) { return; }

                    touchMove = false;
                    touchStarted = true;

                    startx = e.targetTouches[0].pageX;
                    starty = e.targetTouches[0].pageY;

                    that = this;

                    slider = ui.find('.' + ui.carousel.targetSlider, that)[0];

                    contents = ui.find('.' + ui.carousel.nameContent, that);
                    navDotsEl = ui.find('.' + ui.carousel.targetNav + ' .' + ui.carousel.nameDots + ' i', that);

                    halfSized = ui.hasClass(that, ui.carousel.nameHalfSize);

                    i = Array.prototype.slice.call(ui.find('.' + ui.carousel.target)).indexOf(that);
                    col = getCols(i); // get responsive cols

                    startMove = window.getComputedStyle(slider).getPropertyValue('transform'); // matrix(xZoom, 0, 0, yZoom, xPos, yPos)
                    startMove = startMove.replace('matrix', '').replace(/[\,\(\)\s]/g, ' ').replace(/\s\s/g, '|'); // select only numbers

                    startMove = startMove.split('|')[4];

                    ui.off(document, 'touchmove');

                    ui.on(document,
                        'touchmove',

                        function (e) {

                            if (ui.hasClass(document, ui.photoGallery.namePreviewOpened)) { return; } // stop if photo gallery is opened
                            if (isScrolling) { return; }

                            if (e.cancelable && e.defaultPrevented) { // touchstart or touchmove with preventDefault we need this. Because, now Chrome and Android browsers preventDefault automatically.
                                e.preventDefault();
                            }

                            currentx = e.targetTouches[0].pageX;
                            currenty = e.targetTouches[0].pageY;

                            if (Math.abs(startx - currentx) > ui.carousel.touchMoveToleranceX && Math.abs(starty - currenty) < ui.carousel.touchMoveToleranceY) {

                                touchMove = true;

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

                                ui.addClass(document, ui.carousel.nameTouchMove);

                            }

                        });

                    ui.off(document, 'touchend.' + ui.carousel.eventTouchEnd + ' touchcancel.' + ui.carousel.eventTouchCancel);

                    ui.on(document,
                        'touchend.' + ui.carousel.eventTouchEnd + ' touchcancel.' + ui.carousel.eventTouchCancel,

                        function () {

                            if (touchMove) {

                                that.style.transitionDuration = '';
                                slider.style.transitionDuration = '';

                                setTimeout(function () {

                                    var beforeCount, navDots;
                                    navDots = ui.find('.' + ui.carousel.targetNav + ' .' + ui.carousel.nameDots, that[i])[0];

                                    beforeCount = counts[i];
                                    counts[i] = Math.abs(move) / contents[0].offsetWidth;

                                    if (currentx > startx) { // slide to right

                                        if (counts[i].toFixed(2).split('.')[1] > ui.carousel.touchMoveToleranceX) {
                                            counts[i] = Math.floor(counts[i]);

                                        } else {

                                            if (beforeCount <= 0) {
                                                counts[i] = 0;

                                            } else {
                                                counts[i] = beforeCount - 1;
                                            }

                                        }

                                    } else { // slide to left

                                        if (counts[i].toFixed(2).split('.')[1] > ui.carousel.touchMoveToleranceX) {
                                            counts[i] = Math.ceil(counts[i]);

                                        } else {

                                            if (beforeCount >= (contents.length - 1)) {
                                                beforeCount = (contents.length - 1);

                                            } else {
                                                counts[i] = beforeCount + 1;
                                            }

                                        }

                                    }

                                    move = -Math.ceil(counts[i] * contents[0].offsetWidth);

                                    if (halfSized && (counts[i] === contents.length - col)) {
                                        move -= contents[0].offsetWidth * ui.carousel.halfSize;
                                    }

                                    slider.style.transform = 'translateX(' + move + 'px)';
                                    that.setAttribute(ui.carousel.dataContent, (counts[i] + 1));

                                    ui.removeClass(navDotsEl, ui.carousel.nameNavSelected);
                                    ui.addClass(navDotsEl[counts[i]], ui.carousel.nameNavSelected);

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
                                        ui.each(contents,

                                            function () {
                                                carouselAnimate(this, contentsEase[i], 'touch');
                                            });

                                        ui.removeClass(document, ui.carousel.nameTouchMove);
                                        touchStarted = false;

                                    }, ui.globals.fast);

                                }, 0);

                            }

                            touchMove = false;

                            ui.off(that, 'touchmove');
                            ui.off(document, 'touchend.' + ui.carousel.eventTouchEnd + ' touchcancel.' + ui.carousel.eventTouchCancel);

                        });

                });

            // carousel gallery
            ui.on('.' + ui.carousel.targetGallery + ' .' + ui.carousel.nameGalleryThumbs + ' .' + ui.carousel.nameGalleryImg,
                'click',

                function () {

                    var parent, detail, target, thumbs, index, newImg;

                    parent = ui.closest(this, '.' + ui.carousel.targetGallery);

                    detail = ui.find('.' + ui.carousel.nameGalleryDetail, parent[0]);
                    target = ui.find('img', detail);

                    thumbs = ui.find('.' + ui.carousel.nameGalleryThumbs + ' .' + ui.carousel.nameGalleryImg, parent[0]);

                    index = Array.prototype.slice.call(thumbs).indexOf(this);
                    target.setAttribute(ui.carousel.dataCount, index);

                    ui.addClass(detail, ui.carousel.nameGalleryDetailLoader);

                    newImg = new Image();
                    newImg.src = this.getAttribute(ui.carousel.dataHref);

                    newImg.onload = function () {

                        target.src = newImg.src;
                        ui.removeClass(detail, ui.carousel.nameGalleryDetailLoader);

                    };

                    ui.removeClass(thumbs, ui.carousel.nameGallerySelected);
                    ui.addClass(this, ui.carousel.nameGallerySelected);

                });

            ui.each('.' + ui.carousel.targetGallery + ' .' + ui.carousel.nameGalleryThumbs,

                function () {

                    var images = ui.find('.' + ui.carousel.nameGalleryImg, this);

                    if (images.length <= 1) {
                        this.style.display = 'none'; // hide thumbs when image length is 1 or 0
                    }

                });

        }

    };

    // Loaders
    ui.onload(ui.carousel.Start);

    ui.on(window, 'resize', carouselResizer);
    ui.on(document, ui.globals.eventDomChange, function () { carouselResizer('resize'); });

}());