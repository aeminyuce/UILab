/*
 Photo Gallery JS
 Photo Gallery JS requires Events JS
*/

var photoGallery = {

    closeIcon: 'icon-remove',
    prevIcon: 'icon-angle-left',
    nextIcon: 'icon-angle-right',
    loaderIcon: 'icon-loader',
    errorIcon: 'icon-file-not-found'

};

(function () {

    'use strict';
    /*globals window, document, selector, events, Image, navigator, setTimeout, clearTimeout, screen */

    var
        imgTouchmove,
        pageTouchmove,
        pageTouchmoveTimer;

    photoGallery.Start = function () {

        var ua, mobile, gallery, galleryCounter, imgCounter, pageYPos, checkImages, imgWidth, imgHeight, loadedImages = [], loadedTitles = [];

        ua = navigator.userAgent.toLowerCase();
        if (ua.indexOf('mobile') > -1 && ua.indexOf('apple') > -1) { mobile = true; } else { mobile = false; }

        gallery = selector('.photo-gallery');

        if (gallery.length > 0) {

            galleryCounter = 0;
            imgCounter = 0;

            // control vertical images
            checkImages = function () {

                var img, newImg, imgLength, imgFnc;

                img = selector('a.img img', gallery[galleryCounter]);
                imgLength = img.length - 1;

                imgFnc = function () {

                    newImg = new Image();
                    newImg.src = img[imgCounter].getAttribute('src');

                    img[imgCounter].src = newImg.src;

                    newImg.addEventListener('load', function () {

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

                    }, false);

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
            if (window.innerWidth < 960) {

                if (mobile) {
                    pageYPos = document.body.scrollTop; // ios

                } else {
                    pageYPos = document.documentElement.scrollTop; // android
                }

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

                for (i = 0; i < preview.length; i += 1) {
                    preview[i].parentNode.removeChild(preview[i]);
                }

            }

            // create gallery
            index = Array.prototype.slice.call(images).indexOf(that);

            html = events.parser('<div class="photo-preview ease-opacity">' +
                    '<button title="Kapat" class="btn btn-square btn-lg btn-invisible ease-bg close-photo-preview"><i class="icon icon-lg ' + photoGallery.closeIcon + ' no-opacity"></i></button>' +
                    '<button type="button" class="preview-prev ease-bg"><i class="icon ' + photoGallery.prevIcon + ' icon-xl"></i></button>' +
                    '<button type="button" class="preview-next ease-bg"><i class="icon ' + photoGallery.nextIcon + ' icon-xl"></i></button>' +
                    '<i class="preview-loader icon icon-xxl ' + photoGallery.loaderIcon + '"></i>' +
                    '<span class="preview-info ease-transform"></span>' +
                    '<img class="ease-layout">' +
                '</div>'
                );

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

            newImg.addEventListener('load', showImage, false);
            newImg.addEventListener('error', notLoadedImage, false);

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

                if (window.innerWidth < 960) {

                    if (mobile) {
                        document.body.scrollTop = pageYPos; // ios

                    } else {
                        document.documentElement.scrollTop = pageYPos; // andorid
                    }

                }

                loadedImages = [];
                loadedTitles = [];

                setTimeout(function () {

                    events.removeClass(preview, 'open');
                    preview[0].parentNode.removeChild(preview[0]);

                }, 150);

                events.off('body', 'keydown.previewClose');
                events.off('body', 'keydown.previewNav');

            }

            events.on('body', 'keydown.previewClose', function (e) {
                if (e.keyCode === 27) { closeGallery(); } // esc
            });

            events.on('.close-photo-preview', 'click', closeGallery);

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

                    newImg.addEventListener('load', showImage, false);
                    newImg.addEventListener('error', notLoadedImage, false);

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

                } else { navigateGallery('prev'); }

            });

            // touch events: double tap to zoom
            waitPinchZoom = false;

            imgPosX = '-50';
            imgPosY = '-50';

            imgZoom = 1;

            events.on(img, 'touchend dblclick', function (e) {

                var touchesLength, now, horLimit, verLimit;

                if (e.type === 'dblclick') { // added double click to zoom for desktop
                    touchesLength = 1;

                } else {

                    touchesLength = e.changedTouches.length;

                    setTimeout(function () {
                        waitPinchZoom = false;
                    }, 50);

                }

                if (touchesLength === 1 && !waitPinchZoom) { // control number of touches

                    now = new Date().getTime();

                    if ((e.type === 'touchend' && ((now - lastTouchEnd) <= 200 && (now - lastTouchEnd) > 0)) || e.type === 'dblclick') {

                        e.preventDefault();
                        if (events.hasClass(this, 'preview-zoom')) {

                            imgPosX = '-50';
                            imgPosY = '-50';

                            imgZoom = 1;
                            events.removeClass(this, 'preview-zoom');

                        } else {

                            if (e.type === 'dblclick') { imgZoom = 3; } else { imgZoom = 6; }
                            events.addClass(this, 'preview-zoom');

                        }

                        img.style.transform = 'translate(' + imgPosX + '%,' + imgPosY + '%) scale(' + imgZoom + ')';

                    } else if (imgTouchmove) {

                        if (imgZoom > 1 && (((imgWidth * imgZoom) > screen.width) || (imgHeight * imgZoom) > screen.height)) { // control image exceeds window size

                            imgTouchmove = false;

                            horLimit = ((((imgWidth * imgZoom) - screen.width) / (imgWidth * imgZoom)) * 100) + 100;
                            verLimit = ((((imgHeight * imgZoom) - screen.height) / (imgHeight * imgZoom)) * 100) + 100;

                            if (imgPosX < -horLimit - 100) { imgPosX = -horLimit - 100; } // left
                            if (imgPosX > horLimit) { imgPosX = horLimit; } // right

                            if (imgPosY < -verLimit - 100) { imgPosY = -verLimit - 100; } // top
                            if (imgPosY > verLimit) { imgPosY = verLimit; } // bottom

                            img.style.transform = 'translate(' + imgPosX + '%,' + imgPosY + '%) scale(' + imgZoom + ')';

                        }

                        events.off(preview, 'touchmove');
                        events.removeClass(img, 'pause-easing');

                    }

                    lastTouchEnd = now;

                }

            });

            // touch events: pinch to zoom
            events.on(preview, 'touchstart', function (e) {

                if (e.target.getAttribute('src') === null) { return; }

                e.preventDefault();
                var sx, sy, x, y, pinchStart, pinch, matrix, newScale, msx, msy;

                matrix = window.getComputedStyle(img).getPropertyValue('transform'); // matrix(xZoom, 0, 0, yZoom, xPos, yPos)

                matrix = matrix.replace('matrix', '').replace(/[\,\(\)\s]/g, ' ').replace(/\s\s/g, '|'); // select only numbers
                matrix = matrix.split('|');

                if (e.targetTouches.length > 1) { // control number of touches

                    sx = e.targetTouches[0].pageX - e.targetTouches[1].pageX;
                    sy = e.targetTouches[0].pageY - e.targetTouches[1].pageY;

                    pinchStart = Math.sqrt(sx * sx + sy * sy); // the pythagorean distance between two points

                    events.on(this, 'touchmove', function (e) {

                        waitPinchZoom = true;

                        x = e.targetTouches[0].pageX - e.targetTouches[1].pageX;
                        y = e.targetTouches[0].pageY - e.targetTouches[1].pageY;

                        pinch = Math.sqrt(x * x + y * y); // the pythagorean distance between two points

                        newScale = ((pinch - pinchStart) / pinch) * ((imgWidth / imgHeight) * 2);
                        imgZoom = parseFloat(matrix[3]) + parseFloat(newScale);

                        if (imgZoom <= 1) {

                            imgZoom = 1;
                            events.removeClass(img, 'preview-zoom');

                        } else { events.addClass(img, 'preview-zoom'); }

                        if (imgZoom > 6) { imgZoom = 6; }

                        events.addClass(img, 'pause-easing');
                        img.style.transform = 'translate(' + imgPosX + '%,' + imgPosY + '%) scale(' + imgZoom + ')';

                    });

                }

                // touch move image positioning
                msx = e.targetTouches[0].pageX;
                msy = e.targetTouches[0].pageY;

                events.on(this, 'touchmove', function (e) {

                    if (imgZoom > 1 && (((imgWidth * imgZoom) > screen.width) || (imgHeight * imgZoom) > screen.height)) { // control image exceeds window size

                        events.addClass(img, 'pause-easing');
                        imgTouchmove = true;

                        imgPosX = parseFloat((e.targetTouches[0].pageX - msx) / imgWidth) * 100 + parseFloat((matrix[4] / imgWidth) * 100);
                        imgPosY = parseFloat((e.targetTouches[0].pageY - msy) / imgHeight) * 100 + parseFloat((matrix[5] / imgHeight) * 100);

                    }

                    img.style.transform = 'translate(' + imgPosX + '%,' + imgPosY + '%) scale(' + imgZoom + ')';

                });

            });

            // mousemove for zoomed image on desktop
            events.on(document, 'mousedown', '.photo-preview img.preview-zoom', function (e) {

                if (e.target.getAttribute('src') === null || mobile) { return; }

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

                    if (mobile) { return; }

                    if (imgZoom > 1 && (((imgWidth * imgZoom) > screen.width) || (imgHeight * imgZoom) > screen.height)) { // control image exceeds window size

                        var horLimit, verLimit;

                        horLimit = (((imgWidth * imgZoom) - screen.width) / (imgWidth * imgZoom)) * 100;
                        verLimit = (((imgHeight * imgZoom) - screen.height) / (imgHeight * imgZoom)) * 100;

                        if (imgPosX < -horLimit - 100) { imgPosX = -horLimit - 100; } // left
                        if (imgPosX > horLimit) { imgPosX = horLimit; } // right

                        if (imgPosY < -verLimit - 100) { imgPosY = -verLimit - 100; } // top
                        if (imgPosY > verLimit) { imgPosY = verLimit; } // bottom

                        img.style.transform = 'translate(' + imgPosX + '%,' + imgPosY + '%) scale(' + imgZoom + ')';

                    }

                    events.off(img, 'mousemove mouseup mouseleave');
                    events.removeClass(img, 'pause-easing');

                });

            });

        }

        // Events
        events.on(document, 'click touchmove touchend', '.photo-gallery a.img', function (e) {

            if (e.type === 'click') {
                galleryFnc(e, this);

            } else {

                if (e.type === 'touchmove') {
                    pageTouchmove = true;
                }

                if (e.type === 'touchend' && pageTouchmove === false) {

                    clearTimeout(pageTouchmoveTimer);
                    pageTouchmoveTimer = setTimeout(function () {
                        galleryFnc(e, this);
                    }, 50);
                }

            }

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
