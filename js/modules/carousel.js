/* carousel */

import { ui } from './../core/globals.js';
export default () => ui;

ui.carousel = {

    // targets
    target: 'ui-carousel',

    targetGallery: 'ui-carousel-gallery',
    targetSlider: 'ui-carousel-slider',
    targetNav: 'ui-carousel-nav',

    // main classnames
    nameTouchMove: 'ui-carousel-touchmove',
    nameHalfSize: 'ui-carousel-half',

    nameAnimate: 'ui-carousel-animate',
    nameContent: 'ui-carousel-content',

    namePrev: 'ui-carousel-prev',
    nameNext: 'ui-carousel-next',
    nameDots: 'ui-carousel-dots',

    nameGalleryDetail: 'ui-carousel-gallery-detail',
    nameGalleryDetailLoader: 'ui-carousel-gallery-detail-loader',

    nameGalleryThumbs: 'ui-carousel-gallery-thumbs',

    // outer classnames
    namePhoto: 'ui-photo',

    nameScroll: 'ui-scroll',
    nameScrollV: 'ui-scroll-v',
    nameScrollH: 'ui-scroll-h',

    nameEaseFast: 'ui-ease-fast',
    nameEaseSlow: 'ui-ease-slow',
    nameEaseSlow2x: 'ui-ease-slow-2x',
    nameEaseSlow3x: 'ui-ease-slow-3x',
    nameEaseSlow4x: 'ui-ease-slow-4x',
    nameEaseSlow5x: 'ui-ease-slow-5x',

    nameNoEffects: 'ui-no-effects',

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

    dataID: 'data-ui-id',

    dataAnimate: 'data-ui-animate',
    dataContent: 'data-ui-content',
    dataCount: 'data-ui-count',
    dataSlide: 'data-ui-slide',
    dataHref: 'data-ui-href',

    // custom events
    eventTouchEnd: 'ui:carouselTouchEnd',
    eventTouchCancel: 'ui:carouselTouchCancel'

};

(() => {

    let
        getCols,
        carouselResizer,
        idCount = 0,

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

        isScrollingTimer,
        isScrolling = false,

        touchStarted = false;

    getCols = (i) => {

        let col;

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

        } else col = cols[i];

        return col;

    }

    function carouselAnimate(content, wait, type) {

        let time = content.getAttribute(ui.carousel.dataAnimate);
        if (time !== null) {

            if (time === '') {
                time = ui.globals.ease;
            }

            let i = 0;
            const elems = ui.find('.' + ui.carousel.nameAnimate, content);

            if (elems.length === 0) return;

            if (ui.closest(content, '.' + ui.globals.nameResized)[0] !== undefined) { // detect carousel is resizing
                return;
            }

            if (type === 'static') {
                ui.removeClass(elems, ui.globals.nameShow);
            }

            setTimeout(() => { // wait for dom loading or slider ease time

                function show() {

                    setTimeout(() => {

                        ui.addClass(elems[i], ui.globals.nameShow);
                        i += 1;

                        if (i < elems.length) { show(); }

                    }, time);

                }
                show();

            }, wait);

        }

    }

    function filterDots(navDots, navDotsEl, count, i) {

        ui.removeClass(navDots, ui.globals.nameFiltered);
        ui.removeClass(navDotsEl, ui.globals.nameShow + ' ' + ui.globals.nameFaded);

        const col = getCols(i); // get responsive cols

        ui.addClass(navDots, ui.globals.nameFiltered);

        if ((count - 1) > -1) {

            ui.addClass(navDotsEl[count - 1], ui.globals.nameShow);

            if ((count - 2) > -1) {
                ui.addClass(navDotsEl[count - 2], ui.globals.nameFaded);
            }

        }

        if ((count + col) < navDotsEl.length) {

            ui.addClass(navDotsEl[count + 1], ui.globals.nameShow);

            if ((count + col + 1) < navDotsEl.length) {
                ui.addClass(navDotsEl[count + 2], ui.globals.nameFaded);
            }

        }

    }

    function carouselModifier(i, that, type) {

        const contents = ui.find('.' + ui.carousel.nameContent, that);
        if (contents.length === 0) return;

        const nav = ui.find('.' + ui.carousel.targetNav, that)[0];
        if (nav === undefined) return;

        const col = getCols(i); // get responsive cols

        if (contents.length <= col) nav.style.display = 'none'; // toggle nav
        else nav.style.display = '';

        const halfSized = ui.hasClass(that, ui.carousel.nameHalfSize);
        const slider = ui.find('.' + ui.carousel.targetSlider, that);

        let size = col;

        if (halfSized && col > 1 && col !== contents.length) {
            size -= ui.carousel.halfSize;
        }

        size = Math.round(that.offsetWidth / size);

        Array.prototype.forEach.call(contents,

            item => {
                item.style.width = size + 'px';
            });

        size = size * contents.length;
        slider[0].style.width = size + 'px';

        if (contents.length / col === 1) { // check nav is active
            counts[i] = 0;

        } else if (col !== 1 && counts[i] > col) { // check current count larger than current col size
            counts[i] = col;
        }

        that.setAttribute(ui.carousel.dataContent, (counts[i] + 1));
        slider[0].style.transform = 'translateX(-' + (counts[i] * contents[0].offsetWidth) + 'px)';

        const navDots = ui.find('.' + ui.carousel.targetNav + ' .' + ui.carousel.nameDots, that);
        const navDotsEl = ui.find('.' + ui.carousel.targetNav + ' .' + ui.carousel.nameDots + ' i', that);

        ui.removeClass(navDotsEl, ui.globals.nameSelected);
        ui.addClass(navDotsEl[counts[i]], ui.globals.nameSelected);

        filterDots(navDots, navDotsEl, counts[i], i); // filter dots when dots number exceeds

        Array.prototype.forEach.call(contents,

            (item, l) => { // detect carousel animates

                if (l + 1 > col) return;
                carouselAnimate(item, (ui.globals.ease * 2), type);

            });

    }

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

    function carouselNav(that, direction) {

        const nav = ui.find('.' + ui.carousel.targetNav, that)[0];
        if (nav === undefined) return;

        const slider = ui.find('.' + ui.carousel.targetSlider, that);
        const contents = ui.find('.' + ui.carousel.nameContent, slider[0]);

        if (contents.length === 0) return;

        const i = Number(that.getAttribute(ui.carousel.dataID));
        if (i === null) return;

        const navDots = ui.find('.' + ui.carousel.targetNav + ' .' + ui.carousel.nameDots, that);
        const navDotsEl = ui.find('.' + ui.carousel.targetNav + ' .' + ui.carousel.nameDots + ' i', that);

        const col = getCols(i); // get responsive cols

        if (direction === 'next') {

            counts[i] += 1;
            if (counts[i] > contents.length - col) counts[i] = 0;

        } else if (direction === 'prev') {

            counts[i] -= 1;
            if (counts[i] < 0) counts[i] = contents.length - col;

        }

        that.setAttribute(ui.carousel.dataContent, (counts[i] + 1));

        ui.removeClass(navDotsEl, ui.globals.nameSelected);
        ui.addClass(navDotsEl[counts[i]], ui.globals.nameSelected);

        filterDots(navDots, navDotsEl, counts[i], i); // filter dots when dots number exceeds
        let slide = counts[i] * contents[0].offsetWidth;

        const halfSized = ui.hasClass(that, ui.carousel.nameHalfSize);

        if (halfSized && (counts[i] === contents.length - col)) {
            slide += contents[0].offsetWidth * ui.carousel.halfSize;
        }

        slider[0].style.transform = 'translateX(-' + slide + 'px)';
        getSlideSpeed(slider, contentsEase[i], i); // get carousel slide speed

        if (contents.length > 1 && contents.length !== col) { // stop reloading animates when content length is not enough

            Array.prototype.forEach.call(contents, item => { // detect carousel animates
                carouselAnimate(item, contentsEase[i], 'static');
            });

        }

    }

    carouselResizer = (e) => {

        if (touchStarted) return;

        if (e === 'resize' || e.type === 'resize') {

            Array.prototype.forEach.call(ui.find('.' + ui.carousel.target),

                el => {

                        const i = Number(el.getAttribute(ui.carousel.dataID));
                        if (i === null) return;

                        ui.addClass(el, ui.globals.nameResized);
                        carouselModifier(i, el, 'resize');

                        const slider = ui.find('.' + ui.carousel.targetSlider, el)[0];

                        ui.addClass(el, ui.carousel.nameNoEffects);
                        ui.addClass(slider, ui.carousel.nameNoEffects);

                    });

                }

        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => { // wait auto slider until resize completed

            const that = ui.find('.' + ui.carousel.target);
            Array.prototype.forEach.call(that,

                el => {

                    const i = Number(el.getAttribute(ui.carousel.dataID));
                    if (i === null) return;

                    ui.removeClass(el, ui.globals.nameResized);

                    if (autoTimer[i] !== null && autoTimer[i] !== undefined) {

                        clearInterval(autoSlider[i]);

                        autoSlider[i] = setInterval(() => {
                            carouselNav(that[i], 'next');
                        }, autoTimer[i]);

                    }

                    const slider = ui.find('.' + ui.carousel.targetSlider, el)[0];

                    ui.removeClass(el, ui.carousel.nameNoEffects);
                    ui.removeClass(slider, ui.carousel.nameNoEffects);

                });

        }, ui.globals.ease);

    }

    ui.carousel.Init = () => {

        const carousels = ui.find('.' + ui.carousel.target + ':not(.' + ui.globals.nameActive + ')');
        if (carousels.length > 0) {

            // load carousels
            Array.prototype.forEach.call(carousels,

                el => {

                    // id
                    el.setAttribute(ui.carousel.dataID, idCount);

                    const j = idCount;
                    idCount += 1;

                    // cols
                    cols[j] = el.getAttribute(ui.carousel.dataCols);

                    colsXL[j] = el.getAttribute(ui.carousel.dataColsXL);
                    colsLG[j] = el.getAttribute(ui.carousel.dataColsLG);
                    colsMD[j] = el.getAttribute(ui.carousel.dataColsMD);
                    colsSM[j] = el.getAttribute(ui.carousel.dataColsSM);
                    colsXS[j] = el.getAttribute(ui.carousel.dataColsXS);

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

                    const contents = ui.find('.' + ui.carousel.nameContent, el);
                    if (contents.length === 0) return;

                    const nav = ui.find('.' + ui.carousel.targetNav, el)[0];
                    const navDots = ui.find('.' + ui.carousel.nameDots, nav)[0];

                    if (nav === undefined || navDots === undefined) return;

                    ui.addClass(el, ui.globals.nameActive);
                    carouselModifier(j, el, 'static');

                    // create nav
                    const col = getCols(j); // get responsive cols

                    if (contents.length <= col) nav.style.display = 'none'; // toggle nav
                    else nav.style.display = '';

                    let navDotsHtml = '';
                    navDots.innerHTML = '';

                    Array.prototype.forEach.call(contents,

                        () => {

                            navDotsHtml += '<' + ui.carousel.tagDots + ' ' +
                                                'class="' + ui.carousel.stylesDots + '">' +
                                        '</' + ui.carousel.tagDots + '>';

                        });

                    navDots.insertAdjacentHTML('beforeend', navDotsHtml);
                    const navDotsEl = ui.find('.' + ui.carousel.nameDots + ' i', nav);

                    counts[j] = 0;
                    el.setAttribute(ui.carousel.dataContent, (counts[j] + 1));

                    ui.removeClass(navDotsEl, ui.globals.nameSelected);
                    ui.addClass(navDotsEl[counts[j]], ui.globals.nameSelected);

                    filterDots(navDots, navDotsEl, counts[j], j); // filter dots when dots number exceeds

                    // auto slider
                    autoTimer[j] = el.getAttribute(ui.carousel.dataSlide);

                    if (autoTimer[j] !== null) {

                        if (autoTimer[j] === '') {
                            autoTimer[j] = ui.carousel.defaultSlideTimer;
                        }

                        const that = el;

                        autoSlider[j] = setInterval(() => {
                            carouselNav(that, 'next');
                        }, autoTimer[j]);

                    }

                });

            // carousel gallery loader
            Array.prototype.forEach.call(ui.find('.' + ui.carousel.targetGallery + ' .' + ui.carousel.nameGalleryThumbs),

                el => {

                    const images = ui.find('.' + ui.carousel.namePhoto, el);

                    if (images.length <= 1) {
                        el.style.display = 'none'; // hide thumbs when image length is 1 or 0
                    }

                });

        }

    }

    ui.carousel.Start = () => {

        ui.carousel.Init();

        // Event Listeners
        ui.on(document,
            'click',

            '.' + ui.carousel.namePrev + ',.' + ui.carousel.nameNext,

            function () {

                let direction;

                if (ui.hasClass(this, ui.carousel.nameNext)) direction = 'next';
                else direction = 'prev';

                const that = ui.closest(this, '.' + ui.carousel.target)[0];
                const i = Number(that.getAttribute(ui.carousel.dataID));

                if (i === null) return;

                carouselNav(that, direction);

                // wait auto slider when navigating
                if (autoTimer[i] !== null) {
                    clearInterval(autoSlider[i]);
                }

            });

        function carouselStart(that) {

            const i = Number(that.getAttribute(ui.carousel.dataID));
            if (i === null) return;

            clearInterval(autoSlider[i]);

            autoSlider[i] = setInterval(() => {
                carouselNav(that, 'next');
            }, autoTimer[i]);

        }

        function carouselStop(that) {

            const i = Number(that.getAttribute(ui.carousel.dataID));
            if (i === null) return;

            clearInterval(autoSlider[i]);

        }

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

            () => {

                const callCarousels = ui.find('.' + ui.carousel.target + '[' + ui.carousel.dataSlide + ']');

                if (document.hidden) { // stop all carousels when browser windows is not active
                    Array.prototype.forEach.call(callCarousels, el => { carouselStop(el); });

                } else Array.prototype.forEach.call(callCarousels, el => { carouselStart(el); });

            });

        // prevent touch event listeners when inline scrolling
        ui.on(document,
             'scroll',

             '.' + ui.carousel.target + ' .' + ui.carousel.nameScroll + ',' +
             '.' + ui.carousel.target + ' .' + ui.carousel.nameScrollV + ',' +
             '.' + ui.carousel.target + ' .' + ui.carousel.nameScrollH,

            (e) => {

                e.preventDefault();
                e.stopPropagation();

                isScrolling = true;
                clearTimeout(isScrollingTimer);

                isScrollingTimer = setTimeout(() => {
                    isScrolling = false;
                }, ui.globals.ease);

            });

        // touchmove event listeners
        ui.on(document,
            'touchstart',

            '.' + ui.carousel.target,

            function (e) {

                if (isScrolling) return;

                let touchMove = false;
                touchStarted = true;

                const startx = e.targetTouches[0].pageX;
                const starty = e.targetTouches[0].pageY;

                const slider = ui.find('.' + ui.carousel.targetSlider, this)[0];

                const contents = ui.find('.' + ui.carousel.nameContent, this);
                const navDotsEl = ui.find('.' + ui.carousel.targetNav + ' .' + ui.carousel.nameDots + ' i', this);

                const halfSized = ui.hasClass(this, ui.carousel.nameHalfSize);

                const i = Number(this.getAttribute(ui.carousel.dataID));
                if (i === null) return;

                const col = getCols(i); // get responsive cols

                let startMove = window.getComputedStyle(slider).getPropertyValue('transform'); // matrix(xZoom, 0, 0, yZoom, xPos, yPos)
                startMove = startMove.replace('matrix', '').replace(/[\,\(\)\s]/g, ' ').replace(/\s\s/g, '|'); // select only numbers

                startMove = startMove.split('|')[4];

                let currentx, currenty, move, touchEndTimer;
                const that = this;

                ui.off(document, 'touchmove');

                ui.on(document,
                    'touchmove',

                    function (e) {

                        if (ui.hasClass(document, ui.photoGallery.namePreviewOpened)) return; // stop if photo gallery is opened
                        if (isScrolling) return;

                        currentx = e.targetTouches[0].pageX;
                        currenty = e.targetTouches[0].pageY;

                        if (Math.abs(startx - currentx) > ui.carousel.touchMoveToleranceX && Math.abs(starty - currenty) < ui.carousel.touchMoveToleranceY) {

                            touchMove = true;

                            ui.addClass(that, ui.carousel.nameNoEffects);
                            ui.addClass(slider, ui.carousel.nameNoEffects);

                            clearTimeout(touchEndTimer);

                            let sliderMax = -((contents.length - col) * contents[0].offsetWidth);
                            if (halfSized) sliderMax -= contents[0].offsetWidth * ui.carousel.halfSize;

                            move = (startMove - (startx - currentx));

                            if (move > 0) move = 0;
                            else if (move < sliderMax) move = sliderMax;

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

                            ui.removeClass(that, ui.carousel.nameNoEffects);
                            ui.removeClass(slider, ui.carousel.nameNoEffects);

                            setTimeout(() => {

                                const navDots = ui.find('.' + ui.carousel.targetNav + ' .' + ui.carousel.nameDots, that[i])[0];
                                let beforeCount = counts[i];

                                counts[i] = Math.abs(move) / contents[0].offsetWidth;

                                if (currentx > startx) { // slide to right

                                    if (counts[i].toFixed(2).split('.')[1] > ui.carousel.touchMoveToleranceX) {
                                        counts[i] = Math.floor(counts[i]);

                                    } else {

                                        if (beforeCount <= 0) counts[i] = 0;
                                        else counts[i] = beforeCount - 1;

                                    }

                                } else { // slide to left

                                    if (counts[i].toFixed(2).split('.')[1] > ui.carousel.touchMoveToleranceX) {
                                        counts[i] = Math.ceil(counts[i]);

                                    } else {

                                        if (beforeCount >= (contents.length - 1)) beforeCount = (contents.length - 1);
                                        else counts[i] = beforeCount + 1;

                                    }

                                }

                                move = -Math.ceil(counts[i] * contents[0].offsetWidth);

                                if (halfSized && (counts[i] === contents.length - col)) {
                                    move -= contents[0].offsetWidth * ui.carousel.halfSize;
                                }

                                slider.style.transform = 'translateX(' + move + 'px)';
                                that.setAttribute(ui.carousel.dataContent, (counts[i] + 1));

                                ui.removeClass(navDotsEl, ui.globals.nameSelected);
                                ui.addClass(navDotsEl[counts[i]], ui.globals.nameSelected);

                                filterDots(navDots, navDotsEl, counts[i], i); // filter dots when dots number exceeds

                                clearTimeout(touchEndTimer);
                                touchEndTimer = setTimeout(() => {

                                    getSlideSpeed(slider, contentsEase[i], i); // get carousel slide speed

                                    // wait auto slider until touchmove ends
                                    if (autoTimer[i] !== null) {

                                        clearInterval(autoSlider[i]);

                                        autoSlider[i] = setInterval(() => {
                                            carouselNav(that, 'next');
                                        }, autoTimer[i]);

                                    }

                                    Array.prototype.forEach.call(contents,

                                        item => { // detect carousel animates
                                            carouselAnimate(item, contentsEase[i], 'touch');
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

        // carousel gallery thumbs
        ui.on(document,
            'click',

            '.' + ui.carousel.targetGallery + ' .' + ui.carousel.nameGalleryThumbs + ' .' + ui.carousel.namePhoto,

            function () {

                const parent = ui.closest(this, '.' + ui.carousel.targetGallery);

                const detail = ui.find('.' + ui.carousel.nameGalleryDetail, parent[0]);
                const target = ui.find('img', detail);

                const thumbs = ui.find('.' + ui.carousel.nameGalleryThumbs + ' .' + ui.carousel.namePhoto, parent[0]);

                const index = Array.prototype.slice.call(thumbs).indexOf(this);
                target.setAttribute(ui.carousel.dataCount, index);

                ui.addClass(detail, ui.carousel.nameGalleryDetailLoader);

                const newImg = new Image();
                newImg.src = this.getAttribute(ui.carousel.dataHref);

                newImg.onload = () => {

                    target.src = newImg.src;
                    ui.removeClass(detail, ui.carousel.nameGalleryDetailLoader);

                };

                ui.removeClass(thumbs, ui.globals.nameSelected);
                ui.addClass(this, ui.globals.nameSelected);

            });

    };

    // loaders
    ui.onload(ui.carousel.Start);

    ui.on(window, 'resize', carouselResizer);
    ui.on(document, ui.globals.eventDomChange, () => { carouselResizer('resize'); });

    // ajax callback loader
    ui.on(document,
        ui.globals.eventAjaxCallback,

        () => {
            if (ui.ajax.classNames.indexOf(ui.carousel.target) > -1) ui.carousel.Init();
        });

})();