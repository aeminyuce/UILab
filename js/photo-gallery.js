/*
 UI Photo Gallery JS
 Requires UI JS
*/

ui.photoGallery = {

    closeIcon: 'remove',
    prevIcon: 'arrow-left',
    nextIcon: 'arrow-right',
    loaderIcon: 'loader-line',
    errorIcon: 'no'

};

(function () {

    'use strict';
    /*globals window, document, ui, Image, setTimeout, clearTimeout */

    var
        imgTouchmove,
        pageTouchmove = false,
        pageTouchmoveTimer;

    ui.photoGallery.Start = function () {

        var gallery, galleryCounter, imgCounter, pageYPos, checkImages, imgWidth, imgHeight, loadedImages = [], loadedTitles = [];

        gallery = ui.find('.photo-gallery');

        if (gallery.length > 0) {

            galleryCounter = 0;
            imgCounter = 0;

            // control vertical images
            checkImages = function () {

                var img, newImg, imgLength, imgFnc;

                img = ui.find('a.img img', gallery[galleryCounter]);

                imgLength = img.length - 1;
                if (imgLength < 0) { return; }

                imgFnc = function () {

                    newImg = new Image();
                    newImg.src = img[imgCounter].src;

                    img[imgCounter].src = newImg.src;

                    newImg.onload = function () {

                        if (this.naturalWidth / this.naturalHeight < 1.33) {
                            ui.addClass(img[imgCounter], 'cover-h');
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

                    };

                };

                imgFnc();

            };

            checkImages();

        }

        function galleryFnc(e, that, call) {

            e.preventDefault();
            var i, parent, images, preview, html, index, loader, newImg, img, imgPosX, imgPosY, info, imgZoom, lastTouchEnd, waitPinchZoom;

            parent = ui.closest(that, '.photo-gallery')[0];

            if (parent === undefined) {
                parent = ui.closest(that, '.photo-gallery-passive')[0];
            }

            if (call === undefined) {
                images = ui.find('a.img', parent);

            } else {
                images = ui.find('.img', parent);
            }

            // mobile and touch screens: show data titles first
            if (e.type === 'touchend') {

                if (ui.hasClass(that, 'has-info')) {

                    if (!ui.hasClass(that, 'touch-hover')) {

                        ui.removeClass(images, 'touch-hover');
                        ui.addClass(that, 'touch-hover');

                        return;

                    }

                    ui.removeClass(images, 'touch-hover');

                } else { ui.removeClass(images, 'touch-hover'); }

            }

            if (ui.userAgents.mobile) {
                pageYPos = window.pageYOffset; // get current scroll-y position
            }

            // get images and titles
            ui.each(images, function () {

                var href = this.getAttribute('href');

                if (href !== null) {
                    loadedImages.push(href);

                } else {
                    loadedImages.push(this.getAttribute('data-ui-href'));
                }

                if (ui.hasClass(this, 'has-info')) {
                    loadedTitles.push(ui.find('span', this)[0].innerHTML);

                } else {
                    loadedTitles.push(null);
                }

            });

            // detect previously opened galleries
            preview = ui.find('.photo-preview');

            if (preview.length > 0) {

                for (i = 0; i < preview.length; i++) {
                    preview[i].parentNode.removeChild(preview[i]);
                }

            }

            // create gallery
            index = Array.prototype.slice.call(images).indexOf(that);

            html = '<div class="photo-preview ease-layout">' +
                '<div class="photo-preview-bg"></div>' +
                '<button class="close-photo-preview btn btn-lg btn-square btn-ghost ease-btn">' +
                    '<svg class="icon"><use href="#' + ui.photoGallery.closeIcon + '"/></svg>' +
                '</button>' +
                '<button type="button" class="preview-prev ease-btn">' +
                    '<svg class="icon"><use href="#' + ui.photoGallery.prevIcon + '"/></svg>' +
                '</button>' +
                '<button type="button" class="preview-next ease-btn">' +
                    '<svg class="icon"><use href="#' + ui.photoGallery.nextIcon + '"/></svg>' +
                '</button>' +
                '<svg class="preview-loader icon"><use href="#' + ui.photoGallery.loaderIcon + '"/></svg>' +
                '<span class="preview-info ease-layout"></span>' +
                '<img class="ease-layout">' +
            '</div>';

            ui.find('body')[0].insertAdjacentHTML('beforeend', html);
            preview = ui.find('.photo-preview');

            // create and load image
            newImg = new Image();
            newImg.src = loadedImages[index];

            img = ui.find('img', preview);
            img.src = newImg.src;

            loader = ui.find('.preview-loader', preview);

            function showImage() {

                if (img.naturalWidth / img.naturalHeight < 1.33) {
                    ui.addClass(img, 'cover-h');
                }

                imgWidth = img.width;
                imgHeight = img.height;

                ui.addClass(loader, 'pause');
                ui.hide(loader);

                ui.addClass(img, 'open');

                setTimeout(function () {
                    ui.addClass(img, 'open-ease');
                }, ui.globals.ease + 10);

            }

            function notLoadedImage() {

                ui.addClass(loader, 'pause');
                ui.find('use', loader)[0].setAttribute('href', '#' + ui.photoGallery.errorIcon);

            }

            newImg.onload = showImage;
            newImg.onerror = notLoadedImage;

            function toggleGalleryTools() {

                // show/hide nav buttons
                if (index < 1) {
                    ui.hide('.preview-prev');

                } else {
                    ui.show('.preview-prev');
                }

                if (index >= (loadedImages.length - 1)) {
                    ui.hide('.preview-next');

                } else {
                    ui.show('.preview-next');
                }

                // show/hide info window
                info = ui.find('.preview-info')[0];
                ui.removeClass(info, 'open');

                setTimeout(function () {

                    if (loadedTitles[index] === null) {
                        info.innerHTML = '';

                    } else {

                        ui.addClass(info, 'open');
                        info.innerHTML = loadedTitles[index];

                    }

                }, ui.globals.slow);

            }

            toggleGalleryTools();

            // show gallery
            ui.addClass(document, 'photo-preview-opened');
            ui.addClass(preview, 'open');

            setTimeout(function () {
                ui.addClass(preview, 'open-ease');
            }, 10);

            // close gallery
            function closeGallery() {

                ui.removeClass(preview, 'open-ease');
                ui.removeClass(document, 'photo-preview-opened');

                if (ui.userAgents.mobile) {
                    window.scrollTo(0, pageYPos);
                }

                loadedImages = [];
                loadedTitles = [];

                setTimeout(function () {

                    ui.removeClass(preview, 'open');
                    preview[0].parentNode.removeChild(preview[0]);

                }, ui.globals.ease);

                ui.off('body', 'keydown.previewClose keydown.previewNav');

            }

            ui.on('body', 'keydown.previewClose', function (e) {
                if (e.keyCode === 27) { closeGallery(); } // esc
            });

            ui.on('.close-photo-preview', 'click', closeGallery);
            ui.on('.photo-preview-bg', 'click', closeGallery);

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
                ui.removeClass(img, 'open-ease');
                ui.show(loader);

                ui.removeClass(loader, 'pause');
                ui.find('use', loader)[0].setAttribute('href', '#' + ui.photoGallery.loaderIcon);

                toggleGalleryTools();

                setTimeout(function () {

                    ui.removeClass(img, 'open');
                    ui.removeClass(img, 'cover-h');

                    newImg.src = loadedImages[index];
                    img.src = newImg.src;

                    newImg.onload = showImage;
                    newImg.onerror = notLoadedImage;

                    // reset touch setting
                    imgPosX = '-50';
                    imgPosY = '-50';

                    imgZoom = 1;

                    ui.removeClass(this, 'preview-zoom');
                    img.style.transform = 'translate(' + imgPosX + '%,' + imgPosY + '%) scale(' + imgZoom + ')';

                }, ui.globals.ease);

            }

            // Event Listeners
            ui.on('.preview-prev,.preview-next', 'click', function () {

                if (ui.hasClass(this, 'preview-next')) {
                    navigateGallery('next');

                } else { navigateGallery('prev'); }

            });

            ui.on('body', 'keydown.previewNav', function (e) {

                if (e.keyCode === 39) {
                    navigateGallery('next');

                } else if (e.keyCode === 37) {
                    navigateGallery('prev');
                }

            });

            function imgLimits() {

                var horLimit, verLimit;

                horLimit = (((imgWidth * imgZoom) - window.innerWidth) / (imgWidth * imgZoom)) * 100;
                verLimit = (((imgHeight * imgZoom) - window.innerHeight) / (imgHeight * imgZoom)) * 100;

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

            ui.on(img, 'touchend dblclick', function (e) {

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

                        if (ui.hasClass(this, 'preview-zoom')) {

                            imgPosX = '-50';
                            imgPosY = '-50';

                            imgZoom = 1;
                            ui.removeClass(this, 'preview-zoom');

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

                            ui.addClass(this, 'preview-zoom');

                        }

                        img.style.transform = 'translate(' + imgPosX + '%,' + imgPosY + '%) scale(' + imgZoom + ')';

                    } else if (imgTouchmove) {

                        if (imgZoom > 1 && (((imgWidth * imgZoom) > window.innerWidth) || (imgHeight * imgZoom) > window.innerHeight)) { // control image exceeds window size

                            imgTouchmove = false;
                            imgLimits();

                        }

                        ui.off(preview, 'touchmove');
                        ui.removeClass(img, 'pause-easing');

                    }

                    lastTouchEnd = now;

                }

            });

            // touch event listeners: pinch to zoom
            ui.on(preview, 'touchstart', function (e) {

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

                ui.on(this, 'touchmove', function (e) {

                    if (imgZoom > 1 && (((imgWidth * imgZoom) > window.innerWidth) || (imgHeight * imgZoom) > window.innerHeight)) { // control image exceeds window size

                        ui.addClass(img, 'pause-easing');

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
                            ui.removeClass(img, 'preview-zoom');

                        } else { ui.addClass(img, 'preview-zoom'); }

                        if (imgZoom > 6) { imgZoom = 6; }

                    }

                    img.style.transform = 'translate(' + imgPosX + '%,' + imgPosY + '%) scale(' + imgZoom + ')';

                });

            });

            // mousemove for zoomed image on desktop
            ui.on(document, 'mousedown', '.photo-preview img.preview-zoom', function (e) {

                if (e.target.src === null || ui.userAgents.mobile) { return; }

                e.preventDefault();
                var msx, msy, matrix;

                msx = e.clientX;
                msy = e.clientY;

                matrix = window.getComputedStyle(img).getPropertyValue('transform'); // matrix(xZoom, 0, 0, yZoom, xPos, yPos)

                matrix = matrix.replace('matrix', '').replace(/[\,\(\)\s]/g, ' ').replace(/\s\s/g, '|'); // select only numbers
                matrix = matrix.split('|');

                ui.on(img, 'mousemove', function (e) {

                    if (imgZoom > 1 && (((imgWidth * imgZoom) > window.innerWidth) || (imgHeight * imgZoom) > window.innerHeight)) { // control image exceeds window size

                        ui.addClass(img, 'pause-easing');

                        imgPosX = parseFloat((e.clientX - msx) / imgWidth) * 100 + parseFloat((matrix[4] / imgWidth) * 100);
                        imgPosY = parseFloat((e.clientY - msy) / imgHeight) * 100 + parseFloat((matrix[5] / imgHeight) * 100);

                        img.style.transform = 'translate(' + imgPosX + '%,' + imgPosY + '%) scale(' + imgZoom + ')';

                    }

                });

                ui.on(img, 'mouseup mouseleave', function () {

                    if (ui.userAgents.desktop) {

                        if (imgZoom > 1 && (((imgWidth * imgZoom) > window.innerWidth) || (imgHeight * imgZoom) > window.innerHeight)) { // control image exceeds window size
                            imgLimits();
                        }

                        ui.off(img, 'mousemove mouseup mouseleave');
                        ui.removeClass(img, 'pause-easing');

                    }

                });

            });

        }

        // Event Listeners
        ui.on(document, 'touchmove.ui:photogallery touchend', '.photo-gallery a.img', function (e) {

            e.preventDefault();
            if (e.type === 'touchmove') { pageTouchmove = true; }

            var that = this;
            if (e.type === 'touchend') {

                clearTimeout(pageTouchmoveTimer);
                pageTouchmoveTimer = setTimeout(function () {

                    if (pageTouchmove === false) {

                        if (ui.hasClass(this, 'has-info')) {

                            if (ui.userAgents.mobile && ui.hasClass(this, 'touch-hover')) {
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

        ui.on(document, 'click', '.photo-gallery a.img', function (e) {

            if (ui.userAgents.desktop) {

                e.preventDefault();
                galleryFnc(e, this);
            }

        });

        ui.on(document, 'click', '.photo-gallery-call', function (e) {

            var target, count;

            target = this.getAttribute('data-ui-target');
            count = this.getAttribute('data-ui-count');

            if (target === null) { return; }

            if (count === null) {
                count = 0;

            } else {

                count = Number(count);
                if (!count || count === '') {
                    count = 0;
                }

            }

            galleryFnc(e, ui.find(target + ' .img')[count], 'call');

        });

    };

    // Loaders
    ui.onload(ui.photoGallery.Start);

}());
