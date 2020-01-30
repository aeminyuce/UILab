/*
 Photo Gallery JS
 Photo Gallery JS requires Selector Js, Events JS, User Agents JS
*/

var photoGallery = {

    closeIcon: 'icon-remove',
    prevIcon: 'icon-arrow-left',
    nextIcon: 'icon-arrow-right',
    loaderIcon: 'icon-loader-line icon-xxl',
    errorIcon: 'icon-no icon-xxl'

};

(function () {

    'use strict';
    /*globals window, document, selector, events, Image, setTimeout, clearTimeout, screen, useragents */

    var
        imgTouchmove,
        pageTouchmove = false,
        pageTouchmoveTimer;

    photoGallery.Start = function () {

        var gallery, galleryCounter, imgCounter, pageYPos, checkImages, imgWidth, imgHeight, loadedImages = [], loadedTitles = [];

        gallery = selector('.photo-gallery');

        if (gallery.length > 0) {

            galleryCounter = 0;
            imgCounter = 0;

            // control vertical images
            checkImages = function () {

                var img, newImg, imgLength, imgFnc;

                img = selector('a.img img', gallery[galleryCounter]);

                imgLength = img.length - 1;
                if (imgLength < 0) { return; }

                imgFnc = function () {

                    newImg = new Image();
                    newImg.src = img[imgCounter].src;

                    img[imgCounter].src = newImg.src;

                    newImg.onload = function () {

                        if (this.naturalWidth / this.naturalHeight < 1.33) {
                            events.addClass(img[imgCounter], 'cover-h');
                        }

                        if (imgCounter < imgLength) {

                            imgCounter += 1;
                            imgFnc();

                        } else if (imgCounter === imgLength) {

                            imgCounter = 0;
                            if (galleryCounter < (gallery.length - 1)) {

                                galleryCounter += 1;
                                checkImages();

                            }
                        }

                    }

                };

                imgFnc();

            };

            checkImages();

        }

        function galleryFnc(e, that, call) {

            e.preventDefault();
            var i, parent, images, preview, html, index, loader, newImg, img, imgPosX, imgPosY, info, imgZoom, lastTouchEnd, waitPinchZoom;

            parent = events.closest(that, '.photo-gallery')[0];

            if (parent === undefined) {
                parent = events.closest(that, '.photo-gallery-passive')[0];
            }

            if (call === undefined) {
                images = selector('a.img', parent);

            } else {
                images = selector('.img', parent);
            }

            // mobile and touch screens: show data titles first
            if (e.type === 'touchend') {

                if (events.hasClass(that, 'has-info')) {

                    if (!events.hasClass(that, 'hover-touch')) {

                        events.removeClass(images, 'hover-touch');
                        events.addClass(that, 'hover-touch');

                        return;

                    }

                    events.removeClass(images, 'hover-touch');

                } else { events.removeClass(images, 'hover-touch'); }

            }

            // get page scroll position
            if (useragents.mobile && window.innerWidth < 960) {
                pageYPos = window.pageYOffset; // get current scroll-y position
            }

            // get images and titles
            events.each(images, function () {

                var href = this.getAttribute('href');

                if (href !== null) {
                    loadedImages.push(href);

                } else {
                    loadedImages.push(this.getAttribute('data-href'));
                }

                if (events.hasClass(this, 'has-info')) {
                    loadedTitles.push(selector('span', this)[0].innerHTML);

                } else {
                    loadedTitles.push(null);
                }

            });

            // detect previously opened galleries
            preview = selector('.photo-preview');

            if (preview.length > 0) {

                for (i = 0; i < preview.length; i++) {
                    preview[i].parentNode.removeChild(preview[i]);
                }

            }

            // create gallery
            index = Array.prototype.slice.call(images).indexOf(that);

            html = '<div class="photo-preview ease-layout">' +
                    '<div class="photo-preview-bg"></div>' +
                    '<button class="btn btn-square btn-lg btn-ghost close-photo-preview ease-btn"><i class="icon ' + photoGallery.closeIcon + ' no-opacity"></i></button>' +
                    '<button type="button" class="preview-prev ease-btn"><i class="icon ' + photoGallery.prevIcon + '"></i></button>' +
                    '<button type="button" class="preview-next ease-btn"><i class="icon ' + photoGallery.nextIcon + '"></i></button>' +
                    '<i class="preview-loader icon ' + photoGallery.loaderIcon + '"></i>' +
                    '<span class="preview-info ease-layout"></span>' +
                    '<img class="ease-layout">' +
                '</div>';

            selector('body')[0].insertAdjacentHTML('beforeend', html);
            preview = selector('.photo-preview');

            // create and load image
            newImg = new Image();
            newImg.src = loadedImages[index];

            img = selector('img', preview);
            img.src = newImg.src;

            loader = selector('.preview-loader', preview);

            function showImage() {

                if (img.naturalWidth / img.naturalHeight < 1.33) {
                    events.addClass(img, 'cover-h');
                }

                imgWidth = img.width;
                imgHeight = img.height;

                events.addClass(loader, 'pause');
                events.hide(loader);

                events.addClass(img, 'open');

                setTimeout(function () {
                    events.addClass(img, 'open-ease');
                }, 160);

            }

            function notLoadedImage() {

                events.removeClass(loader, photoGallery.loaderIcon);

                events.addClass(loader, 'pause');
                events.addClass(loader, photoGallery.errorIcon);

            }

            newImg.onload = showImage;
            newImg.onerror = notLoadedImage;

            function toggleGalleryTools() {

                // show/hide nav buttons
                if (index < 1) {
                    events.hide('.preview-prev');

                } else {
                    events.show('.preview-prev');
                }

                if (index >= (loadedImages.length - 1)) {
                    events.hide('.preview-next');

                } else {
                    events.show('.preview-next');
                }

                // show/hide info window
                info = selector('.preview-info')[0];
                events.removeClass(info, 'open');

                setTimeout(function () {

                    if (loadedTitles[index] === null) {
                        info.innerHTML = '';

                    } else {

                        events.addClass(info, 'open');
                        info.innerHTML = loadedTitles[index];

                    }

                }, 450);

            }

            toggleGalleryTools();

            // show gallery
            events.addClass(document, 'photo-preview-opened');
            events.addClass(preview, 'open');

            setTimeout(function () {
                events.addClass(preview, 'open-ease');
            }, 10);

            // close gallery
            function closeGallery() {

                events.removeClass(preview, 'open-ease');
                events.removeClass(document, 'photo-preview-opened');

                if (useragents.mobile && window.innerWidth < 960) {
                    window.scrollTo(0, pageYPos);
                }

                loadedImages = [];
                loadedTitles = [];

                setTimeout(function () {

                    events.removeClass(preview, 'open');
                    preview[0].parentNode.removeChild(preview[0]);

                }, 150);

                events.off('body', 'keydown.previewClose keydown.previewNav');

            }

            events.on('body', 'keydown.previewClose', function (e) {
                if (e.keyCode === 27) { closeGallery(); } // esc
            });

            events.on('.close-photo-preview', 'click', closeGallery);
            events.on('.photo-preview-bg', 'click', closeGallery);

            // gallery nav
            function navigateGallery(direction) {

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
                events.removeClass(img, 'open-ease');

                events.removeClass(loader, 'pause');
                events.show(loader);

                events.removeClass(loader, photoGallery.errorIcon);
                events.addClass(loader, photoGallery.loaderIcon);

                toggleGalleryTools();

                setTimeout(function () {

                    events.removeClass(img, 'open');
                    events.removeClass(img, 'cover-h');

                    newImg.src = loadedImages[index];
                    img.src = newImg.src;

                    newImg.onload = showImage;
                    newImg.onerror = notLoadedImage;

                    // reset touch setting
                    imgPosX = '-50';
                    imgPosY = '-50';

                    imgZoom = 1;

                    events.removeClass(this, 'preview-zoom');
                    img.style.transform = 'translate(' + imgPosX + '%,' + imgPosY + '%) scale(' + imgZoom + ')';

                }, 150);

            }

            // Events
            events.on('.preview-prev,.preview-next', 'click', function () {

                if (events.hasClass(this, 'preview-next')) {
                    navigateGallery('next');

                } else { navigateGallery('prev'); }

            });

            events.on('body', 'keydown.previewNav', function (e) {

                if (e.keyCode === 39) {
                    navigateGallery('next');

                } else if (e.keyCode === 37) {
                    navigateGallery('prev');
                }

            });

            function imgLimits() {

                var horLimit, verLimit;

                horLimit = (((imgWidth * imgZoom) - screen.width) / (imgWidth * imgZoom)) * 100;
                verLimit = (((imgHeight * imgZoom) - screen.height) / (imgHeight * imgZoom)) * 100;

                if (imgPosX < -horLimit - 100) { imgPosX = -horLimit - 100; } // left
                if (imgPosX > horLimit) { imgPosX = horLimit; } // right

                if (imgPosY < -verLimit - 100) { imgPosY = -verLimit - 100; } // top
                if (imgPosY > verLimit) { imgPosY = verLimit; } // bottom

                img.style.transform = 'translate(' + imgPosX + '%,' + imgPosY + '%) scale(' + imgZoom + ')';

            }

            // touch events: double tap to zoom
            imgPosX = '-50';
            imgPosY = '-50';

            imgZoom = 1;

            events.on(img, 'touchend dblclick', function (e) {

                var touchesLength, now, getX, getY, rect;

                if (waitPinchZoom) { return; }

                if (e.type === 'dblclick') { // added double click to zoom for desktop
                    touchesLength = 1;

                } else {
                    touchesLength = e.changedTouches.length;
                }

                if (touchesLength === 1) { // control number of touches

                    now = new Date().getTime();
                    if ((e.type === 'touchend' && ((now - lastTouchEnd) <= 200 && (now - lastTouchEnd) > 0)) || e.type === 'dblclick') {

                        e.preventDefault();
                        rect = img.getBoundingClientRect(); // get img DOM rect

                        if (events.hasClass(this, 'preview-zoom')) {

                            imgPosX = '-50';
                            imgPosY = '-50';

                            imgZoom = 1;
                            events.removeClass(this, 'preview-zoom');

                        } else {

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

                            events.addClass(this, 'preview-zoom');

                        }

                        img.style.transform = 'translate(' + imgPosX + '%,' + imgPosY + '%) scale(' + imgZoom + ')';

                    } else if (imgTouchmove) {

                        if (imgZoom > 1 && (((imgWidth * imgZoom) > screen.width) || (imgHeight * imgZoom) > screen.height)) { // control image exceeds window size

                            imgTouchmove = false;
                            imgLimits();

                        }

                        events.off(preview, 'touchmove');
                        events.removeClass(img, 'pause-easing');

                    }

                    lastTouchEnd = now;

                }

            });

            // touch events: pinch to zoom
            events.on(preview, 'touchstart', function (e) {

                if (e.target.src === undefined) { return; }

                e.preventDefault();
                var sx, sy, x, y, pinchStart, pinch, matrix, newScale, msx, msy;

                waitPinchZoom = false;

                matrix = window.getComputedStyle(img).getPropertyValue('transform'); // matrix(xZoom, 0, 0, yZoom, xPos, yPos)

                matrix = matrix.replace('matrix', '').replace(/[\,\(\)\s]/g, ' ').replace(/\s\s/g, '|'); // select only numbers
                matrix = matrix.split('|');

                // touch move image positioning
                msx = e.targetTouches[0].pageX;
                msy = e.targetTouches[0].pageY;

                if (e.targetTouches.length > 1) { // control number of touches

                    sx = msx - e.targetTouches[1].pageX;
                    sy = msy - e.targetTouches[1].pageY;

                    pinchStart = Math.sqrt(sx * sx + sy * sy); // the pythagorean distance between two points

                }

                events.on(this, 'touchmove', function (e) {

                    if (imgZoom > 1 && (((imgWidth * imgZoom) > screen.width) || (imgHeight * imgZoom) > screen.height)) { // control image exceeds window size

                        events.addClass(img, 'pause-easing');

                        imgTouchmove = true;
                        waitPinchZoom = true;

                        imgPosX = parseFloat((e.targetTouches[0].pageX - msx) / imgWidth) * 100 + parseFloat((matrix[4] / imgWidth) * 100);
                        imgPosY = parseFloat((e.targetTouches[0].pageY - msy) / imgHeight) * 100 + parseFloat((matrix[5] / imgHeight) * 100);

                    }

                    if (e.targetTouches.length > 1) { // control number of touches

                        x = e.targetTouches[0].pageX - e.targetTouches[1].pageX;
                        y = e.targetTouches[0].pageY - e.targetTouches[1].pageY;

                        pinch = Math.sqrt(x * x + y * y); // the pythagorean distance between two points

                        newScale = ((pinch - pinchStart) / pinch) * ((imgWidth / imgHeight) * 2);
                        imgZoom = parseFloat(matrix[3]) + parseFloat(newScale);

                        if (imgZoom <= 1) {

                            imgPosX = '-50';
                            imgPosY = '-50';

                            imgZoom = 1;
                            events.removeClass(img, 'preview-zoom');

                        } else { events.addClass(img, 'preview-zoom'); }

                        if (imgZoom > 6) { imgZoom = 6; }

                    }

                    img.style.transform = 'translate(' + imgPosX + '%,' + imgPosY + '%) scale(' + imgZoom + ')';

                });

            });

            // mousemove for zoomed image on desktop
            events.on(document, 'mousedown', '.photo-preview img.preview-zoom', function (e) {

                if (e.target.src === null || useragents.mobile) { return; }

                e.preventDefault();
                var msx, msy, matrix;

                msx = e.clientX;
                msy = e.clientY;

                matrix = window.getComputedStyle(img).getPropertyValue('transform'); // matrix(xZoom, 0, 0, yZoom, xPos, yPos)

                matrix = matrix.replace('matrix', '').replace(/[\,\(\)\s]/g, ' ').replace(/\s\s/g, '|'); // select only numbers
                matrix = matrix.split('|');

                events.on(img, 'mousemove', function (e) {

                    if (imgZoom > 1 && (((imgWidth * imgZoom) > screen.width) || (imgHeight * imgZoom) > screen.height)) { // control image exceeds window size

                        events.addClass(img, 'pause-easing');

                        imgPosX = parseFloat((e.clientX - msx) / imgWidth) * 100 + parseFloat((matrix[4] / imgWidth) * 100);
                        imgPosY = parseFloat((e.clientY - msy) / imgHeight) * 100 + parseFloat((matrix[5] / imgHeight) * 100);

                        img.style.transform = 'translate(' + imgPosX + '%,' + imgPosY + '%) scale(' + imgZoom + ')';

                    }

                });

                events.on(img, 'mouseup mouseleave', function () {

                    if (useragents.mobile) { return; }

                    if (imgZoom > 1 && (((imgWidth * imgZoom) > screen.width) || (imgHeight * imgZoom) > screen.height)) { // control image exceeds window size
                        imgLimits();
                    }

                    events.off(img, 'mousemove mouseup mouseleave');
                    events.removeClass(img, 'pause-easing');

                });

            });

        }

        // Events
        events.on(document, 'touchmove.photogallery touchend', '.photo-gallery a.img', function (e) {

            e.preventDefault();
            if (e.type === 'touchmove') { pageTouchmove = true; }

            var that = this;
            if (e.type === 'touchend') {

                clearTimeout(pageTouchmoveTimer);
                pageTouchmoveTimer = setTimeout(function () {

                    if (pageTouchmove === false) {

                        if (events.hasClass(this, 'has-info')) {

                            if (useragents.mobile && events.hasClass(this, 'hover-touch')) {
                                galleryFnc(e, that);

                            } else { return; }

                        } else {
                            galleryFnc(e, that);
                        }

                    }

                    pageTouchmove = false;

                }, 50);

            }

        });

        events.on(document, 'click', '.photo-gallery a.img', function (e) {

            if (useragents.mobile) { return; }

            e.preventDefault();
            galleryFnc(e, this);

        });

        events.on(document, 'click', '.photo-gallery-call', function (e) {

            var target, count;

            target = this.getAttribute('data-target');
            count = this.getAttribute('data-count');

            if (target === null) { return; }

            if (count === null) {
                count = 0;

            } else {

                count = Number(count);
                if (!count || count === '') {
                    count = 0;
                }

            }

            galleryFnc(e, selector(target + ' .img')[count], 'call');

        });

    };

    // Loaders
    events.onload(photoGallery.Start);

}());
