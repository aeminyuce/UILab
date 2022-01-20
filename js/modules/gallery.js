/* gallery */

import { ui } from './../core/globals.js';
export default () => ui;

ui.photoGallery = {

    // targets
    targetGallery: 'ui-gallery',
    targetPreview: 'ui-gallery-preview',

    targetPhotos: 'ui-photo',
    targetPhotoVer: 'ui-photo-v',

    // main classnames
    nameGalleryPassive: 'ui-gallery-passive',
    nameGalleryCall: 'ui-gallery-call',

    nameGalleryInfo: 'ui-gallery-has-info',
    nameGalleryTouch: 'ui-gallery-touch',

    namePreviewOpened: 'ui-gallery-preview-opened',
    namePreviewClose: 'ui-gallery-preview-close',

    namePreviewBg: 'ui-gallery-preview-bg',

    namePreviewLoader: 'ui-gallery-preview-loader',
    namePreviewInfo: 'ui-gallery-preview-info',
    namePreviewZoom: 'ui-gallery-preview-zoom',

    namePreviewPrev: 'ui-gallery-preview-prev',
    namePreviewNext: 'ui-gallery-preview-next',

    // helper classnames
    nameOpen: 'ui-open',
    nameOpenEase: 'ui-open-ease',

    namePause: 'ui-pause',
    namePauseEase: 'ui-pause-ease',

    // styling classnames
    stylesCloseIcon: 'ui-btn ui-btn-lg ui-btn-square ui-btn-ghost ui-circle ui-ease-btn',

    stylesPreview: 'ui-ease-layout',
    stylesPreviewBtn: 'ui-circle ui-ease-btn',

    // outer classnames
    nameIcon: 'ui-icon',

    // tags
    tagGalleryInfo: 'span',

    // icons
    closeIcon: 'remove',
    prevIcon: 'angle-left',
    nextIcon: 'angle-right',
    loaderIcon: 'loader-line',
    errorIcon: 'ban',

    // values
    imgVerRatio: '1.33',
    imgZoomMin: '1',
    imgZoomMax: '6',

    // data attributes
    dataTarget: 'data-ui-target',
    dataCount: 'data-ui-count',
    dataHref: 'data-ui-href',

    // custom events
    eventGalleryTouch: 'ui:photogallery',

    eventPreviewClose: 'ui:previewClose',
    eventPreviewNav: 'ui:previewNav'

};

(() => {

    let
        imgTouchmove,
        pageTouchmove = false,
        pageTouchmoveTimer;

    ui.photoGallery.Start = () => {

        let galleryCounter, imgCounter, imgWidth;
        const gallery = ui.find('.' + ui.photoGallery.targetGallery);

        function checkImages () { // control vertical images

            const img = ui.find('a.' + ui.photoGallery.targetPhotos +' img', gallery[galleryCounter]);

            const imgLength = img.length - 1;
            if (imgLength < 0) { return; }

            function imgLoader() {

                const newImg = new Image();
                newImg.src = img[imgCounter].src;

                img[imgCounter].src = newImg.src;

                newImg.onload = function () {

                    if (this.naturalWidth / this.naturalHeight < ui.photoGallery.imgVerRatio) {
                        ui.addClass(img[imgCounter], ui.photoGallery.targetPhotoVer);
                    }

                    if (imgCounter < imgLength) {

                        imgCounter += 1;
                        imgLoader();

                    } else if (imgCounter === imgLength) {

                        imgCounter = 0;
                        if (galleryCounter < (gallery.length - 1)) {

                            galleryCounter += 1;
                            checkImages();

                        }
                    }

                };

            }

            imgLoader();

        }

        if (gallery.length > 0) {

            galleryCounter = 0;
            imgCounter = 0;

            checkImages();

        }

        function galleryFnc(e, that, call) {

            let parent = ui.closest(that, '.' + ui.photoGallery.targetGallery)[0];

            if (parent === undefined) {
                parent = ui.closest(that, '.' + ui.photoGallery.nameGalleryPassive)[0];
            }

            let images;

            if (call === undefined) {
                images = ui.find('a.' + ui.photoGallery.targetPhotos, parent);

            } else {
                images = ui.find('.' + ui.photoGallery.targetPhotos, parent);
            }

            // mobile and touch screens: show data titles first
            if (e.type === 'touchend') {

                if (ui.hasClass(that, ui.photoGallery.nameGalleryInfo)) {

                    if (!ui.hasClass(that, ui.photoGallery.nameGalleryTouch)) {

                        ui.removeClass(images, ui.photoGallery.nameGalleryTouch);
                        ui.addClass(that, ui.photoGallery.nameGalleryTouch);

                        return;

                    }

                    ui.removeClass(images, ui.photoGallery.nameGalleryTouch);

                } else { ui.removeClass(images, ui.photoGallery.nameGalleryTouch); }

            }

            let pageYPos;

            if (ui.userAgents.mobile) {
                pageYPos = window.pageYOffset; // get current y scroll position
            }

            // get images and titles
            let loadedImages = [];
            let loadedTitles = [];

            images.forEach(el => {

                const href = el.getAttribute('href');

                if (href !== null) {
                    loadedImages.push(href);

                } else {
                    loadedImages.push(el.getAttribute(ui.photoGallery.dataHref));
                }

                if (ui.hasClass(el, ui.photoGallery.nameGalleryInfo)) {
                    loadedTitles.push(ui.find(ui.photoGallery.tagGalleryInfo, el)[0].innerHTML);

                } else {
                    loadedTitles.push(null);
                }

            });

            // detect previously opened galleries
            const previousOpened = ui.find('.' + ui.photoGallery.targetPreview);
            if (previousOpened.length > 0) {

                previousOpened.forEach(el => {
                    el.parentNode.removeChild(el);
                });

            }

            // create gallery
            let index = Array.prototype.slice.call(images).indexOf(that);

            const html = '<div class="' + ui.photoGallery.targetPreview + ' ' + ui.photoGallery.stylesPreview + '">' +
                        '<div class="' + ui.photoGallery.namePreviewBg + '"></div>' +

                        '<button class="' + ui.photoGallery.namePreviewClose + ' ' + ui.photoGallery.stylesCloseIcon +'">' +
                            '<svg class="' + ui.photoGallery.nameIcon + '"><use href="' + ui.globals.iconSrc + '#' + ui.photoGallery.closeIcon + '"/></svg>' +
                        '</button>' +

                        '<button type="button" class="' + ui.photoGallery.namePreviewPrev + ' ' + ui.photoGallery.stylesPreviewBtn + '">' +
                            '<svg class="' + ui.photoGallery.nameIcon + '"><use href="' + ui.globals.iconSrc + '#' + ui.photoGallery.prevIcon + '"/></svg>' +
                        '</button>' +
                        '<button type="button" class="' + ui.photoGallery.namePreviewNext + ' ' + ui.photoGallery.stylesPreviewBtn + '">' +
                            '<svg class="' + ui.photoGallery.nameIcon + '"><use href="' + ui.globals.iconSrc + '#' + ui.photoGallery.nextIcon + '"/></svg>' +
                        '</button>' +

                        '<svg class="' + ui.photoGallery.namePreviewLoader + ' ' + ui.photoGallery.nameIcon + '">' +
                            '<use href="' + ui.globals.iconSrc + '#' + ui.photoGallery.loaderIcon + '"/>' +
                        '</svg>' +
                        '<span class="' + ui.photoGallery.namePreviewInfo + ' ' + ui.photoGallery.stylesPreview + '"></span>' +

                        '<img class="' + ui.photoGallery.stylesPreview + '">' +
                    '</div>';

            ui.find('body')[0].insertAdjacentHTML('beforeend', html);
            const preview = ui.find('.' + ui.photoGallery.targetPreview);

            // create and load image
            const newImg = new Image();
            newImg.src = loadedImages[index];

            const img = ui.find('img', preview);
            img.src = newImg.src;

            let imgHeight;
            const loader = ui.find('.' + ui.photoGallery.namePreviewLoader, preview);

            const showImage = () => {

                if (img.naturalWidth / img.naturalHeight < 1.33) {
                    ui.addClass(img, ui.photoGallery.targetPhotoVer);
                }

                imgWidth = img.width;
                imgHeight = img.height;

                ui.addClass(loader, ui.photoGallery.namePause);
                loader.style.display = 'none';

                ui.addClass(img, ui.photoGallery.nameOpen);

                setTimeout(() => {
                    ui.addClass(img, ui.photoGallery.nameOpenEase);
                }, ui.globals.ease + 10);

            }

            const notLoadedImage = () => {

                ui.addClass(loader, ui.photoGallery.namePause);
                ui.find('use', loader)[0].setAttribute('href', ui.globals.iconSrc + '#' + ui.photoGallery.errorIcon);

            }

            newImg.onload = showImage;
            newImg.onerror = notLoadedImage;

            function toggleGalleryTools() {

                // show/hide nav buttons
                if (index < 1) {
                    ui.find('.' + ui.photoGallery.namePreviewPrev)[0].style.display = 'none';

                } else {
                    ui.find('.' + ui.photoGallery.namePreviewPrev)[0].style.display = 'block';
                }

                if (index >= (loadedImages.length - 1)) {
                    ui.find('.' + ui.photoGallery.namePreviewNext)[0].style.display = 'none';

                } else {
                    ui.find('.' + ui.photoGallery.namePreviewNext)[0].style.display = 'block';
                }

                // show/hide info window
                const info = ui.find('.' + ui.photoGallery.namePreviewInfo)[0];
                ui.removeClass(info, ui.photoGallery.nameOpen);

                setTimeout(() => {

                    if (loadedTitles[index] === null) {
                        info.innerHTML = '';

                    } else {

                        ui.addClass(info, ui.photoGallery.nameOpen);
                        info.innerHTML = loadedTitles[index];

                    }

                }, ui.globals.slow);

            }

            toggleGalleryTools();

            // show gallery
            ui.addClass(document, ui.photoGallery.namePreviewOpened);
            ui.addClass(preview, ui.photoGallery.nameOpen);

            setTimeout(() => {
                ui.addClass(preview, ui.photoGallery.nameOpenEase);
            }, 10);

            // close gallery
            function closeGallery() {

                ui.removeClass(preview, ui.photoGallery.nameOpenEase);
                ui.removeClass(document, ui.photoGallery.namePreviewOpened);

                if (ui.userAgents.mobile) {
                    window.scrollTo(0, pageYPos);
                }

                loadedImages = [];
                loadedTitles = [];

                setTimeout(() => {

                    ui.removeClass(preview, ui.photoGallery.nameOpen);
                    preview[0].parentNode.removeChild(preview[0]);

                }, ui.globals.ease);

                ui.off('body', 'keydown.' + ui.photoGallery.eventPreviewClose + ' keydown.' + ui.photoGalleryeventPreviewNav);

            }

            ui.on('body',
                'keydown.' + ui.photoGallery.eventPreviewClose,

                function (e) {
                    if (e.keyCode === 27) { closeGallery(); } // esc
                });

            ui.on('.' + ui.photoGallery.namePreviewClose, 'click', closeGallery);
            ui.on('.' + ui.photoGallery.namePreviewBg, 'click', closeGallery);

            // gallery nav
            let imgPosX, imgPosY, imgZoom;

            function navigateGallery(that, direction) {

                // control prev/next
                if (direction === 'next') {

                    index += 1;
                    if (index > (loadedImages.length - 1)) {

                        index = (loadedImages.length - 1);
                        return;

                    }

                } else {

                    index -= 1;
                    if (index < 0) {

                        index = 0;
                        return;

                    }

                }

                // hide current image and load new one
                ui.removeClass(img, ui.photoGallery.nameOpenEase);
                loader.style.display = 'block';

                ui.removeClass(loader, ui.photoGallery.namePause);
                ui.find('use', loader)[0].setAttribute('href', ui.globals.iconSrc + '#' + ui.photoGallery.loaderIcon);

                toggleGalleryTools();

                setTimeout(() => {

                    ui.removeClass(img, ui.photoGallery.nameOpen);
                    ui.removeClass(img, ui.photoGallery.targetPhotoVer);

                    newImg.src = loadedImages[index];
                    img.src = newImg.src;

                    newImg.onload = showImage;
                    newImg.onerror = notLoadedImage;

                    // reset touch setting
                    imgPosX = '-50';
                    imgPosY = '-50';

                    imgZoom = 1;

                    ui.removeClass(that, ui.photoGallery.namePreviewZoom);
                    img.style.transform = 'translate(' + imgPosX + '%,' + imgPosY + '%) scale(' + imgZoom + ')';

                }, ui.globals.ease);

            }

            // Event Listeners
            ui.on('.' + ui.photoGallery.targetPreview + ' .' + ui.photoGallery.namePreviewPrev + ',.' + ui.photoGallery.targetPreview + ' .' + ui.photoGallery.namePreviewNext,
                'click',

                function () {

                    if (ui.hasClass(this, ui.photoGallery.namePreviewNext)) {
                        navigateGallery(this, 'next');

                    } else {
                        navigateGallery(this, 'prev');
                    }

                });

            ui.on('body',
                'keydown.' + ui.photoGalleryeventPreviewNav,

                function (e) {

                    if (e.keyCode === 39) {
                        navigateGallery(this, 'next');

                    } else if (e.keyCode === 37) {
                        navigateGallery(this, 'prev');
                    }

                });

            function imgLimits() {

                const horLimit = (((imgWidth * imgZoom) - window.innerWidth) / (imgWidth * imgZoom)) * 100;
                const verLimit = (((imgHeight * imgZoom) - window.innerHeight) / (imgHeight * imgZoom)) * 100;

                if (imgPosX < -horLimit - 100) { imgPosX = -horLimit - 100; } // left
                if (imgPosX > horLimit) { imgPosX = horLimit; } // right

                if (imgPosY < -verLimit - 100) { imgPosY = -verLimit - 100; } // top
                if (imgPosY > verLimit) { imgPosY = verLimit; } // bottom

                img.style.transform = 'translate(' + imgPosX + '%,' + imgPosY + '%) scale(' + imgZoom + ')';

            }

            // touch event listeners: double tap to zoom
            imgPosX = '-50';
            imgPosY = '-50';

            imgZoom = 1;
            let waitPinchZoom = false;

            ui.on(img,
                'touchend dblclick',

                function (e) {

                    if (waitPinchZoom) { return; }

                    let touchesLength;

                    if (e.type === 'dblclick') { // added double click to zoom for desktop
                        touchesLength = 1;

                    } else {
                        touchesLength = e.changedTouches.length;
                    }

                    if (touchesLength === 1) { // control number of touches

                        let lastTouchEnd = 0;
                        const now = new Date().getTime();

                        if ((e.type === 'touchend' && ((now - lastTouchEnd) <= 200 && (now - lastTouchEnd) > 0)) || e.type === 'dblclick') {

                            e.preventDefault();

                            if (ui.hasClass(this, ui.photoGallery.namePreviewZoom)) {

                                imgPosX = '-50';
                                imgPosY = '-50';

                                imgZoom = 1;
                                ui.removeClass(this, ui.photoGallery.namePreviewZoom);

                            } else {

                                let getX, getY;
                                const rect = img.getBoundingClientRect(); // get img DOM rect

                                imgZoom = 2;

                                if (e.type === 'dblclick') {

                                    getX = e.clientX;
                                    getY = e.clientY;

                                } else {

                                    getX = e.changedTouches[0].pageX;
                                    getY = e.changedTouches[0].pageY;

                                }

                                imgPosX = -50 + ((parseFloat(((rect.width / 2) - (getX - rect.x)) / rect.width) * 100) / 2) * imgZoom;
                                imgPosY = -50 + ((parseFloat(((rect.height / 2) - (getY - rect.y)) / rect.height) * 100) / 2) * imgZoom;

                                ui.addClass(this, ui.photoGallery.namePreviewZoom);

                            }

                            img.style.transform = 'translate(' + imgPosX + '%,' + imgPosY + '%) scale(' + imgZoom + ')';

                        } else if (imgTouchmove) {

                            if (imgZoom > 1 && (((imgWidth * imgZoom) > window.innerWidth) || (imgHeight * imgZoom) > window.innerHeight)) { // control image exceeds window size

                                imgTouchmove = false;
                                imgLimits();

                            }

                            ui.off(preview, 'touchmove');
                            ui.removeClass(img, ui.photoGallery.namePauseEase);

                        }

                        lastTouchEnd = now;

                    }

                });

            // touch event listeners: pinch to zoom
            ui.on(preview,
                'touchstart',

                function (e) {

                    if (e.target.src === undefined) { return; }

                    e.preventDefault();
                    waitPinchZoom = false;

                    let matrix = window.getComputedStyle(img).getPropertyValue('transform'); // matrix(xZoom, 0, 0, yZoom, xPos, yPos)

                    matrix = matrix.replace('matrix', '').replace(/[\,\(\)\s]/g, ' ').replace(/\s\s/g, '|'); // select only numbers
                    matrix = matrix.split('|');

                    // touch move image positioning
                    const msx = e.targetTouches[0].pageX;
                    const msy = e.targetTouches[0].pageY;

                    let pinchStart;

                    if (e.targetTouches.length > 1) { // control number of touches

                        const sx = msx - e.targetTouches[1].pageX;
                        const sy = msy - e.targetTouches[1].pageY;

                        pinchStart = Math.sqrt(sx * sx + sy * sy); // the pythagorean distance between two points

                    }

                    ui.on(this,
                        'touchmove',

                        function (e) {

                            if (imgZoom > 1 && (((imgWidth * imgZoom) > window.innerWidth) || (imgHeight * imgZoom) > window.innerHeight)) { // control image exceeds window size

                                ui.addClass(img, ui.photoGallery.namePauseEase);

                                imgTouchmove = true;
                                waitPinchZoom = true;

                                imgPosX = parseFloat((e.targetTouches[0].pageX - msx) / imgWidth) * 100 + parseFloat((matrix[4] / imgWidth) * 100);
                                imgPosY = parseFloat((e.targetTouches[0].pageY - msy) / imgHeight) * 100 + parseFloat((matrix[5] / imgHeight) * 100);

                            }

                            if (e.targetTouches.length > 1) { // control number of touches

                                const x = e.targetTouches[0].pageX - e.targetTouches[1].pageX;
                                const y = e.targetTouches[0].pageY - e.targetTouches[1].pageY;

                                const pinch = Math.sqrt(x * x + y * y); // the pythagorean distance between two points
                                const newScale = ((pinch - pinchStart) / pinch) * ((imgWidth / imgHeight) * 2);

                                imgZoom = parseFloat(matrix[3]) + parseFloat(newScale);

                                if (imgZoom <= ui.photoGallery.imgZoomMin) {

                                    imgPosX = '-50';
                                    imgPosY = '-50';

                                    imgZoom = ui.photoGallery.imgZoomMin;
                                    ui.removeClass(img, ui.photoGallery.namePreviewZoom);

                                } else { ui.addClass(img, ui.photoGallery.namePreviewZoom); }

                                if (imgZoom > ui.photoGallery.imgZoomMax) {
                                    imgZoom = ui.photoGallery.imgZoomMax;
                                }

                            }

                            img.style.transform = 'translate(' + imgPosX + '%,' + imgPosY + '%) scale(' + imgZoom + ')';

                        });

                });

            // mousemove for zoomed image on desktop
            ui.on(document,
                'mousedown',

                '.' + ui.photoGallery.targetPreview + ' img.' + ui.photoGallery.namePreviewZoom,

                function (e) {

                    if (e.target.src === null || ui.userAgents.mobile) { return; }

                    e.preventDefault();

                    const msx = e.clientX;
                    const msy = e.clientY;

                    let matrix = window.getComputedStyle(img).getPropertyValue('transform'); // matrix(xZoom, 0, 0, yZoom, xPos, yPos)

                    matrix = matrix.replace('matrix', '').replace(/[\,\(\)\s]/g, ' ').replace(/\s\s/g, '|'); // select only numbers
                    matrix = matrix.split('|');

                    ui.on(img,
                        'mousemove',

                        function (e) {

                            if (imgZoom > 1 && (((imgWidth * imgZoom) > window.innerWidth) || (imgHeight * imgZoom) > window.innerHeight)) { // control image exceeds window size

                                ui.addClass(img, ui.photoGallery.namePauseEase);

                                imgPosX = parseFloat((e.clientX - msx) / imgWidth) * 100 + parseFloat((matrix[4] / imgWidth) * 100);
                                imgPosY = parseFloat((e.clientY - msy) / imgHeight) * 100 + parseFloat((matrix[5] / imgHeight) * 100);

                                img.style.transform = 'translate(' + imgPosX + '%,' + imgPosY + '%) scale(' + imgZoom + ')';

                            }

                        });

                    ui.on(img,
                        'mouseup mouseleave',

                        function () {

                            if (ui.userAgents.desktop) {

                                if (imgZoom > 1 && (((imgWidth * imgZoom) > window.innerWidth) || (imgHeight * imgZoom) > window.innerHeight)) { // control image exceeds window size
                                    imgLimits();
                                }

                                ui.off(img, 'mousemove mouseup mouseleave');
                                ui.removeClass(img, ui.photoGallery.namePauseEase);

                            }

                        });

                });

        }

        // Event Listeners
        ui.on(document,
            'touchmove.' + ui.photoGallery.eventGalleryTouch + ' touchend',

            '.' + ui.photoGallery.targetGallery + ' a.' + ui.photoGallery.targetPhotos,

            function (e) {

                if (e.cancelable && e.defaultPrevented) { // touchstart or touchmove with preventDefault we need this. Because, now Chrome and Android browsers preventDefault automatically.
                    e.preventDefault();
                }

                if (e.type === 'touchmove') { pageTouchmove = true; }

                if (e.type === 'touchend') {

                    const that = this;

                    clearTimeout(pageTouchmoveTimer);
                    pageTouchmoveTimer = setTimeout(function () {

                        if (!pageTouchmove) {

                            if (ui.hasClass(this, ui.photoGallery.nameGalleryInfo)) {

                                if (ui.userAgents.mobile && ui.hasClass(this, ui.photoGallery.nameGalleryTouch)) {
                                    galleryFnc(e, that);

                                } else { return; }

                            } else {
                                galleryFnc(e, that);
                            }

                        }

                        pageTouchmove = false;

                    }, ui.globals.fast / 2);

                }

            });

        ui.on(document,
            'click',

            '.' + ui.photoGallery.targetGallery + ' a.' + ui.photoGallery.targetPhotos,

            function (e) {

                e.preventDefault();

                if (ui.userAgents.desktop) {
                    galleryFnc(e, this);
                }

            });

        ui.on(document,
            'click',

            '.' + ui.photoGallery.nameGalleryCall,

            function (e) {

                e.preventDefault();

                const target = this.getAttribute(ui.photoGallery.dataTarget);
                let count = this.getAttribute(ui.photoGallery.dataCount);

                if (target === null) { return; }

                if (count === null) {
                    count = 0;

                } else {

                    count = Number(count);

                    if (!count || count === '') {
                        count = 0;
                    }

                }

                galleryFnc(e, ui.find(target + ' .' + ui.photoGallery.targetPhotos)[count], 'call');

            });

    };

    // loaders
    ui.onload(ui.photoGallery.Start);

})();
