/*
 Image Uploader JS
 Image Uploader JS requires Selector Js, Events JS, Ajax JS, Alerts JS
*/

var imageUploader = {

    ratio: '4:3', // activated when resize: false

    resize: true, // resize images
    resizeWidth: 1024, // resize width
    resizeHeight: 768, // resize height

    fill: false, // fill blank areas
    fillColor: '#fff', // fill color

    fit: true, // crop to fit images

    newID: 1000000, // start new ids from
    types: ['jpg', 'jpeg', 'png', 'gif'], // add your allowed file types

    // messages
    msgConfirm: 'Yes',
    msgNotConfirm: 'No',

    msgImgError: 'is not found!',

    msgBeforeUpload: 'Do you want to upload your files?',
    msgError: 'Your files not saved! Please, check your connection and try again.'

};

(function () {

    'use strict';
    /*globals document, events, selector, setTimeout, Image, FileReader, FormData, ajax, alerts, atob, Uint8Array, Blob */

    imageUploader.Start = function () {

        var uploaders, savedImgs;

        function loadFiles(uploader, files) {

            var i, ext, c, ctx, data, img, imgLoaded, w, h, r, size, allowed, showTimer, readers, listCont, list, tools, loaded, loadImages, loadImagesAfter, html, newItem;

            if (files.length > 0) {

                // check allowed file types
                allowed = [];

                for (i = 0; i < files.length; i += 1) {

                    ext = files[i].name.split('.')[1].toLowerCase();
                    if (ext !== null) {

                        ext = ext.toString();

                        if (imageUploader.types.indexOf(ext) > -1) {
                            allowed.push(files[i]);
                        }

                    }

                }

                if (allowed.length === 0) { return; } // stop when all file types not allowed

                // load images
                readers = [];

                img = [];
                imgLoaded = [];

                w = [];
                h = [];

                html = '';
                loaded = 0;

                c = document.createElement("canvas");
                ctx = c.getContext("2d");

                events.addClass(uploader, 'loading');
                tools = selector('.uploader-tools', uploader)[0];

                listCont = selector('.uploader-list', uploader)[0];
                list = selector('.uploader-list ul', uploader)[0];

                loadImages = function (j, tag) {

                    // get width and height
                    w[j] = img[j].width;
                    h[j] = img[j].height;

                    // get ratio
                    r = imageUploader.ratio.split(':');
                    if (r.length !== 2) { r = ''; }

                    if (imageUploader.resize && !savedImgs) { // resize images

                        if (w[j] > h[j]) { // horizontal image

                            h[j] = (h[j] / w[j]) * imageUploader.resizeWidth;
                            w[j] = imageUploader.resizeWidth;

                            if (h[j] > imageUploader.resizeHeight) {

                                w[j] = (w[j] / h[j]) * imageUploader.resizeHeight;
                                h[j] = imageUploader.resizeHeight;

                            }

                        } else { // vertical image

                            w[j] = (w[j] / h[j]) * imageUploader.resizeHeight;
                            h[j] = imageUploader.resizeHeight;

                            if (w[j] > imageUploader.resizeWidth) {

                                h[j] = (h[j] / w[j]) * imageUploader.resizeWidth;
                                w[j] = imageUploader.resizeWidth;

                            }

                        }

                        if (imageUploader.fill && !savedImgs) {

                            c.width = imageUploader.resizeWidth;
                            c.height = imageUploader.resizeHeight;

                        } else {

                            c.width = w[j];
                            c.height = h[j];

                        }

                    } else {

                        if (!imageUploader.fit && imageUploader.fill && !savedImgs) {

                            if (r !== '') {

                                if (w[j] > h[j]) { // horizontal image

                                    c.width = w[j];
                                    c.height = (r[1] / r[0]) * w[j];

                                } else { // vertical image

                                    c.width = (r[0] / r[1]) * h[j];
                                    c.height = h[j];

                                }

                            }

                        } else {

                            c.width = w[j];
                            c.height = h[j];

                        }

                    }

                    if (imageUploader.fit && !savedImgs) { // crop to fit images

                        if (imageUploader.resize) {

                            c.width = imageUploader.resizeWidth;
                            c.height = imageUploader.resizeHeight;

                        } else {

                            if (w[j] > h[j]) { // horizontal image

                                c.width = (r[0] / r[1]) * h[j];
                                c.height = h[j];

                            } else { // vertical image

                                c.width = w[j];
                                c.height = (r[1] / r[0]) * w[j];

                            }

                        }

                        ctx.drawImage(img[j], 0, 0, c.width, c.height);

                    } else {

                        if (imageUploader.fill && !savedImgs) { // fill blank areas

                            ctx.fillStyle = imageUploader.fillColor;
                            ctx.fillRect(0, 0, c.width, c.height);

                            ctx.drawImage(img[j], (c.width - w[j]) / 2, (c.height - h[j]) / 2, w[j], h[j]);

                        } else {
                            ctx.drawImage(img[j], 0, 0, w[j], h[j]);
                        }

                    }

                    data = c.toDataURL("image/jpeg");

                    // calculate new image file size from new base64
                    size = data.split(',')[1].length;
                    size = (4 * Math.ceil(size / 3) * 0.5624896334383812) / 1000;

                    size = size.toFixed(0);

                    imgLoaded[j] = [];

                    imgLoaded[j].name = allowed[j].name;
                    imgLoaded[j].data = data;
                    imgLoaded[j].size = size;
                    imgLoaded[j].tag = tag;

                    if (savedImgs) { // get saved image's id
                        imgLoaded[j].id = allowed[j].id;

                    } else { // define a new id

                        imageUploader.newID += 1;
                        imgLoaded[j].id = imageUploader.newID;

                    }

                };

                loadImagesAfter = function () {

                    loaded += 1;
                    if (loaded === allowed.length) {

                        setTimeout(function () {

                            events.each(imgLoaded, function (k) {

                                if (imgLoaded[k] !== undefined) { // return when image loading failed

                                    html += '<li class="open-ease">' +
                                        '<span class="img">' +
                                            '<img id="' + imgLoaded[k].id + '" src="' + imgLoaded[k].data + '" alt="">' +
                                        '</span>' +
                                        '<span class="name">' + imgLoaded[k].name + '</span>' +
                                        '<span class="info">' + imgLoaded[k].size + 'kb';

                                    if (imgLoaded[k].tag !== '') { // add tags
                                        html += ', <span class="tag">' + imgLoaded[k].tag + '</span></span>';
                                    }

                                    html += '</span></li>';

                                }

                            });

                            list.insertAdjacentHTML('beforeend', html);

                        }, 0);

                        events.addClass(tools, 'open');
                        events.addClass(listCont, 'open');

                        if (savedImgs) { showTimer = 450; } else { showTimer = 150; }

                        setTimeout(function () {

                            events.addClass(tools, 'open-ease');

                            newItem = selector('.uploader-list ul > li.open-ease', listCont);
                            events.each(newItem, function (k) {

                                setTimeout(function () {
                                    events.removeClass(newItem[k], 'open-ease');
                                }, 50 * k);

                            });

                            // empty variables
                            allowed = [];
                            readers = [];

                            img = [];
                            imgLoaded = [];

                            w = [];
                            h = [];

                            html = '';

                        }, showTimer);

                        setTimeout(function () {
                            events.removeClass(uploader, 'loading');
                        }, showTimer);

                    }

                };

                events.each(allowed, function (i) {

                    if (savedImgs) { // array: get images saved before

                        img[i] = new Image();
                        img[i].src = allowed[i].name;

                        img[i].onload = function () {

                            loadImages(i, allowed[i].tag);
                            loadImagesAfter(); // end of images

                        };

                        img[i].onerror = function () {

                            alerts.message({
                                msg: allowed[i].name + ' ' + imageUploader.msgImgError,
                                theme: 'danger'
                            });

                            loadImagesAfter(); // end of images

                        };

                    } else { // FileList object: get images from user selected

                        readers[i] = new FileReader(); // filereader API
                        readers[i].readAsDataURL(allowed[i]);

                        readers[i].onload = function () {

                            img[i] = new Image();
                            img[i].src = this.result;

                            img[i].onload = function () { loadImages(i, ''); };

                        };

                        readers[i].onloadend = loadImagesAfter; // end of images

                    }

                });

            }

        }

        // load saved before images
        uploaders = selector('.image-uploader');
        events.each(uploaders, function () {

            var i, list, imported, img, id, tag;

            i = -1;
            imported = [];

            list = selector('.uploader-list ul > li', this);
            events.each(list, function () {

                img = this.getAttribute('data-img');
                if (img !== null && img !== '') {

                    id = this.getAttribute('data-id');
                    if (id !== null && id !== '') {

                        i += 1;
                        imported[i] = [];

                        imported[i].name = img;
                        imported[i].id = id;
                        imported[i].tag = '';

                        tag = this.getAttribute('data-tag');
                        if (tag !== null) { imported[i].tag = tag; }

                    }

                }

                this.parentNode.removeChild(this);

            });

            savedImgs = true;
            loadFiles(this, imported);

            // empty variables
            imported = [];

        });

        // Events
        events.on(document, 'dragenter', '.image-uploader', function (e) {

            e.preventDefault();
            e.stopPropagation();

            var that, uploader;

            events.addClass(this, 'drop-highlight');
            that = this;

            events.on('body', 'dragover.uploader', function (ev) {

                ev.preventDefault();
                ev.stopPropagation();

                uploader = events.closest(ev.target, '.image-uploader')[0];

                if (uploader === undefined) {
                    events.removeClass(that, 'drop-highlight');

                } else {
                    events.addClass(that, 'drop-highlight');
                }

            });

        });

        events.on('body', 'drop', function (e) {

            e.preventDefault();
            e.stopPropagation();

            var uploader = events.closest(e.target, '.image-uploader')[0];

            if (uploader === undefined) {
                events.removeClass(uploader, 'drop-highlight');

            } else {

                events.addClass(uploader, 'drop-highlight');

                savedImgs = false;
                loadFiles(uploader, e.dataTransfer.files);

                events.removeClass(uploader, 'drop-highlight');
                events.off(document, 'dragover.uploader');

            }

        });

        events.on(document, 'change', '.image-uploader input[type="file"]', function () {

            var uploader = events.closest(this, '.image-uploader')[0];

            savedImgs = false;
            loadFiles(uploader, this.files);

        });

        function toBlob(base, type, sliceSize) { // convert base64 images to blob

            var i, j, byteCharacters, byteArray, byteArrays, slice, byteNumbers, blob;

            type = type || '';
            sliceSize = sliceSize || 512;

            byteCharacters = atob(base);
            byteArrays = [];

            for (j = 0; j < byteCharacters.length; j += sliceSize) {

                slice = byteCharacters.slice(j, j + sliceSize);
                byteNumbers = new Array(slice.length);

                for (i = 0; i < slice.length; i += 1) {
                    byteNumbers[i] = slice.charCodeAt(i);
                }

                byteArray = new Uint8Array(byteNumbers);
                byteArrays.push(byteArray);
            }

            blob = new Blob(byteArrays, {type: type});
            return blob;

        }

        events.on(document, 'submit', '.image-uploader form', function (e) {

            e.preventDefault();

            var fnc, that, formData, uploader, list, file, tag, img, imgType;
            that = this;

            fnc = function () {

                formData = new FormData(); // formdata API

                uploader = events.closest(that, '.image-uploader')[0];
                list = selector('.uploader-list ul > li', uploader);

                events.each(list, function (i) {

                    file = selector('.img img', this)[0];
                    formData.append('id[' + i + ']', file.id); // add id

                    tag = selector('.tag', this)[0].textContent;
                    formData.append('tag[' + i + ']', tag); // add image tag

                    img = file.src.split(";");
                    imgType = img[0].split(":")[1]; // get image type

                    img = img[1].split(",")[1];
                    img = toBlob(img, imgType); // convert to blob to using server's file protocol

                    formData.append('file[' + i + ']', img); // add image file

                });

                events.addClass(uploader, 'uploading');

                ajax({

                    url : that.action,
                    data: formData,

                    callback: function (status, response) {

                        events.removeClass(uploader, 'uploading');
                        if (status === 'success') { // check ajax connection

                            response = JSON.parse(response);
                            if (response.success === true) { // check server connection

                                alerts.message({
                                    msg: response.message, // show server message
                                    theme: 'success'
                                });

                            } else {

                                alerts.message({
                                    msg: response.message, // show server message
                                    theme: 'danger'
                                });

                            }

                        } else {

                            alerts.message({
                                msg: imageUploader.msgError,
                                theme: 'warning'
                            });

                        }

                    }

                });

            };

            alerts.dialog({

                msg: imageUploader.msgBeforeUpload,
                success: imageUploader.msgConfirm,
                error: imageUploader.msgNotConfirm,

                callback: function (value) {
                    if (value === 'success') { fnc(); }
                }

            });

        });

    };

    // Loaders
    events.onload(imageUploader.Start);

}());
