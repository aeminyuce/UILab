/*
 UI Image Uploader JS
 Requires UI JS, UI Alerts JS
*/

ui.imageUploader = {

    ratio: '4:3', // activated when resize: false

    resize: true, // resize images
    resizeWidth: 1024, // resize width
    resizeHeight: 768, // resize height

    fill: false, // fill blank areas
    fillColor: 'hsl(0, 0%, 100%)', // fill color

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
    /*globals document, ui, setTimeout, Image, FileReader, FormData, atob, Uint8Array, Blob */

    ui.imageUploader.Start = function () {

        var uploaders, savedImgs;

        function loadFiles(uploader, files) {

            var i, ext, c, ctx, data, img, imgLoaded, w, h, r, size, allowed, showTimer, readers, listCont, list, tools, loaded, loadImages, loadImagesAfter, html, newItem;

            if (files.length > 0) {

                // check allowed file types
                allowed = [];

                for (i = 0; i < files.length; i++) {

                    ext = files[i].name.split('.')[1].toLowerCase();
                    if (ext !== null) {

                        ext = ext.toString();

                        if (ui.imageUploader.types.indexOf(ext) > -1) {
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

                ui.addClass(uploader, 'loading');
                tools = ui.find('.uploader-tools', uploader)[0];

                listCont = ui.find('.uploader-list', uploader)[0];
                list = ui.find('.uploader-list ul', uploader)[0];

                loadImages = function (j, tag) {

                    // get width and height
                    w[j] = img[j].width;
                    h[j] = img[j].height;

                    // get ratio
                    r = ui.imageUploader.ratio.split(':');
                    if (r.length !== 2) { r = ''; }

                    if (ui.imageUploader.resize && !savedImgs) { // resize images

                        if (w[j] > h[j]) { // horizontal image

                            h[j] = (h[j] / w[j]) * ui.imageUploader.resizeWidth;
                            w[j] = ui.imageUploader.resizeWidth;

                            if (h[j] > ui.imageUploader.resizeHeight) {

                                w[j] = (w[j] / h[j]) * ui.imageUploader.resizeHeight;
                                h[j] = ui.imageUploader.resizeHeight;

                            }

                        } else { // vertical image

                            w[j] = (w[j] / h[j]) * ui.imageUploader.resizeHeight;
                            h[j] = ui.imageUploader.resizeHeight;

                            if (w[j] > ui.imageUploader.resizeWidth) {

                                h[j] = (h[j] / w[j]) * ui.imageUploader.resizeWidth;
                                w[j] = ui.imageUploader.resizeWidth;

                            }

                        }

                        if (ui.imageUploader.fill && !savedImgs) {

                            c.width = ui.imageUploader.resizeWidth;
                            c.height = ui.imageUploader.resizeHeight;

                        } else {

                            c.width = w[j];
                            c.height = h[j];

                        }

                    } else {

                        if (!ui.imageUploader.fit && ui.imageUploader.fill && !savedImgs) {

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

                    if (ui.imageUploader.fit && !savedImgs) { // crop to fit images

                        if (ui.imageUploader.resize) {

                            c.width = ui.imageUploader.resizeWidth;
                            c.height = ui.imageUploader.resizeHeight;

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

                        if (ui.imageUploader.fill && !savedImgs) { // fill blank areas

                            ctx.fillStyle = ui.imageUploader.fillColor;
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

                        ui.imageUploader.newID += 1;
                        imgLoaded[j].id = ui.imageUploader.newID;

                    }

                };

                loadImagesAfter = function () {

                    loaded += 1;
                    if (loaded === allowed.length) {

                        setTimeout(function () {

                            ui.each(imgLoaded, function (k) {

                                if (imgLoaded[k] !== undefined) { // return when image loading failed

                                    html += '<li class="open-ease">' +
                                        '<span class="img">' +
                                            '<img id="' + imgLoaded[k].id + '" src="' + imgLoaded[k].data + '" alt="">' +
                                        '</span>' +
                                        '<span class="name">' + imgLoaded[k].name + '</span>' +
                                        '<span class="info">' + imgLoaded[k].size + 'kb' + '</span>';

                                    if (imgLoaded[k].tag !== '') { // add tags
                                        html += '<span class="tag">' + imgLoaded[k].tag + '</span>';
                                    }

                                    html += '</li>';

                                }

                            });

                            list.insertAdjacentHTML('beforeend', html);

                        }, 0);

                        ui.addClass(tools, 'open');
                        ui.addClass(listCont, 'open');

                        if (savedImgs) {
                            showTimer = ui.globals.slow;

                        } else {
                            showTimer = ui.globals.ease;
                        }

                        setTimeout(function () {

                            ui.addClass(tools, 'open-ease');

                            newItem = ui.find('.uploader-list ul > li.open-ease', listCont);
                            ui.each(newItem, function (k) {

                                setTimeout(function () {
                                    ui.removeClass(newItem[k], 'open-ease');
                                }, (ui.globals.fast / 2) * k);

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
                            ui.removeClass(uploader, 'loading');
                        }, showTimer);

                    }

                };

                ui.each(allowed, function (i) {

                    if (savedImgs) { // array: get images saved before

                        img[i] = new Image();
                        img[i].src = allowed[i].name;

                        img[i].onload = function () {

                            loadImages(i, allowed[i].tag);
                            loadImagesAfter(); // end of images

                        };

                        img[i].onerror = function () {

                            ui.alerts.message({
                                msg: allowed[i].name + ' ' + ui.imageUploader.msgImgError,
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
        uploaders = ui.find('.image-uploader');
        ui.each(uploaders, function () {

            var i, list, imported, img, id, tag;

            i = -1;
            imported = [];

            list = ui.find('.uploader-list ul > li', this);
            ui.each(list, function () {

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

        // Event Listeners
        ui.on(document, 'dragenter', '.image-uploader', function (e) {

            e.preventDefault();
            e.stopPropagation();

            var that, uploader;

            ui.addClass(this, 'drop-highlight');
            that = this;

            ui.on('body', 'dragover.uploader', function (ev) {

                ev.preventDefault();
                ev.stopPropagation();

                uploader = ui.closest(ev.target, '.image-uploader')[0];

                if (uploader === undefined) {
                    ui.removeClass(that, 'drop-highlight');

                } else {
                    ui.addClass(that, 'drop-highlight');
                }

            });

        });

        ui.on('body', 'drop', function (e) {

            e.preventDefault();
            e.stopPropagation();

            var uploader = ui.closest(e.target, '.image-uploader')[0];

            if (uploader === undefined) {
                ui.removeClass(uploader, 'drop-highlight');

            } else {

                ui.addClass(uploader, 'drop-highlight');

                savedImgs = false;
                loadFiles(uploader, e.dataTransfer.files);

                ui.removeClass(uploader, 'drop-highlight');
                ui.off(document, 'dragover.uploader');

            }

        });

        ui.on(document, 'change', '.image-uploader input[type="file"]', function () {

            var uploader = ui.closest(this, '.image-uploader')[0];

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

                for (i = 0; i < slice.length; i++) {
                    byteNumbers[i] = slice.charCodeAt(i);
                }

                byteArray = new Uint8Array(byteNumbers);
                byteArrays.push(byteArray);
            }

            blob = new Blob(byteArrays, {type: type});
            return blob;

        }

        ui.on(document, 'submit', '.image-uploader form', function (e) {

            e.preventDefault();

            var fnc, that, formData, uploader, list, file, tag, img, imgType;
            that = this;

            fnc = function () {

                formData = new FormData(); // formdata API

                uploader = ui.closest(that, '.image-uploader')[0];
                list = ui.find('.uploader-list ul > li', uploader);

                ui.each(list, function (i) {

                    file = ui.find('.img img', this)[0];
                    formData.append('id[' + i + ']', file.id); // add id

                    tag = ui.find('.tag', this)[0];
                    if (tag !== undefined) { tag = tag.textContent; } else { tag = ''; }

                    formData.append('tag[' + i + ']', tag); // add image tag

                    img = file.src.split(";");
                    imgType = img[0].split(":")[1]; // get image type

                    img = img[1].split(",")[1];
                    img = toBlob(img, imgType); // convert to blob to using server's file protocol

                    formData.append('img[' + i + ']', img); // add image file

                });

                ui.addClass(uploader, 'uploading');

                ui.ajax({

                    type: 'POST',
                    url : that.action,
                    data: formData,

                    callback: function (status, response) {

                        ui.removeClass(uploader, 'uploading');
                        if (status === 'success') { // check ajax connection

                            response = JSON.parse(response);
                            if (response.success === true) { // check server connection

                                ui.alerts.message({
                                    msg: response.message, // show server message
                                    theme: 'success'
                                });

                            } else {

                                ui.alerts.message({
                                    msg: response.message, // show server message
                                    theme: 'danger'
                                });

                            }

                        } else {

                            ui.alerts.message({
                                msg: ui.imageUploader.msgError,
                                theme: 'warning'
                            });

                        }

                    }

                });

            };

            ui.alerts.dialog({

                msg: ui.imageUploader.msgBeforeUpload,
                success: ui.imageUploader.msgConfirm,
                error: ui.imageUploader.msgNotConfirm,

                callback: function (value) {
                    if (value === 'success') { fnc(); }
                }

            });

        });

    };

    // Loaders
    ui.onload(ui.imageUploader.Start);

}());
