/*
 UI Image Uploader JS
 Requires UI JS
*/

ui.imageUploader = {

    // targets
    target: 'image-uploader',

    targetImages: 'img',
    targetNames: 'name',
    targetInfos: 'info',
    targetTags: 'tag',

    // main classnames
    nameList: 'uploader-list',
    nameDrop: 'drop-highlight',

    // helper classnames
    nameOpen: 'open',
    nameOpenEase: 'open-ease',

    nameLoading: 'loading',
    nameUploading: 'uploading',

    // tags
    tagList: 'li',

    tagNames: 'b',
    tagInfos: 'i',

    // values
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
    msgError: 'Your files not saved! Please, check your connection and try again.',

    // data attributes
    dataID: 'data-ui-id',
    dataImg: 'data-ui-img',
    dataTag: 'data-ui-tag',

    // formData API names
    formDataID: 'id',
    formDataTag: 'tag',
    formDataImg: 'img',

    // custom events
    eventUploader: 'ui:imageUploader'

};

(function () {

    'use strict';
    /*globals document, ui, setTimeout, Image, FileReader, FormData, atob, Uint8Array, Blob, confirm, alert */

    ui.imageUploader.Start = function () {

        var uploaders, savedImgs;

        function loadFiles(uploader, files) {

            var i, ext, c, ctx, data, img, imgLoaded, w, h, r, size, allowed, showTimer, readers, listCont, list, loaded, loadImages, loadImagesAfter, html, newItem;

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

                ui.addClass(uploader, ui.imageUploader.nameLoading);

                listCont = ui.find('.' + ui.imageUploader.nameList, uploader)[0];
                list = ui.find('.' + ui.imageUploader.nameList + ' ul', uploader)[0];

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

                            ui.each(imgLoaded,

                                function (k) {

                                    if (imgLoaded[k] !== undefined) { // return when image loading failed

                                        html += '<' + ui.imageUploader.tagList + ' class="' + ui.imageUploader.nameOpenEase + '">' +

                                                    '<span class="' + ui.imageUploader.targetImages + '">' +
                                                        '<img id="' + imgLoaded[k].id + '" src="' + imgLoaded[k].data + '">' +
                                                    '</span>' +

                                                    '<' + ui.imageUploader.tagNames + ' class="' + ui.imageUploader.targetNames + '">' +
                                                        imgLoaded[k].name +
                                                    '</' + ui.imageUploader.tagNames +'>' +

                                                    '<' + ui.imageUploader.tagInfos + ' class="' + ui.imageUploader.targetInfos + '">' +
                                                        imgLoaded[k].size + 'kb' +
                                                    '</' + ui.imageUploader.tagInfos + '>';

                                        if (imgLoaded[k].tag !== '') { // add tags

                                            html += '<span class="' + ui.imageUploader.targetTags + '">' +
                                                        imgLoaded[k].tag +
                                                    '</span>';

                                        }

                                        html += '</' + ui.imageUploader.tagList + '>';

                                    }

                                });

                            list.insertAdjacentHTML('beforeend', html);

                        }, 0);

                        ui.addClass(listCont, ui.imageUploader.nameOpen);

                        if (savedImgs) {
                            showTimer = ui.globals.slow;

                        } else {
                            showTimer = ui.globals.ease;
                        }

                        setTimeout(function () {

                            newItem = ui.find('.' + ui.imageUploader.nameList + ' ' + ui.imageUploader.tagList + '.' + ui.imageUploader.nameOpenEase, listCont);
                            ui.each(newItem,

                                function (k) {

                                    setTimeout(function () {
                                        ui.removeClass(newItem[k], ui.imageUploader.nameOpenEase);
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
                            ui.removeClass(uploader, ui.imageUploader.nameLoading);
                        }, showTimer);

                    }

                };

                ui.each(allowed,

                    function (i) {

                        if (savedImgs) { // array: get images saved before

                            img[i] = new Image();
                            img[i].src = allowed[i].name;

                            img[i].onload = function () {

                                loadImages(i, allowed[i].tag);
                                loadImagesAfter(); // end of images

                            };

                            img[i].onerror = function () {

                                if (ui.alerts === undefined) {
                                    alert(ui.imageUploader.msgImgError);

                                } else {

                                    ui.alerts.message({
                                        msg: allowed[i].name + ' ' + ui.imageUploader.msgImgError,
                                        theme: ui.alerts.themeDanger
                                    });

                                }

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
        uploaders = ui.find('.' + ui.imageUploader.target);
        ui.each(uploaders,

            function () {

                var i, list, imported, img, id, tag;

                i = -1;
                imported = [];

                list = ui.find('.' + ui.imageUploader.nameList + ' li', this);
                ui.each(list,

                    function () {

                        img = this.getAttribute(ui.imageUploader.dataImg);
                        if (img !== null && img !== '') {

                            id = this.getAttribute(ui.imageUploader.dataID);
                            if (id !== null && id !== '') {

                                i += 1;
                                imported[i] = [];

                                imported[i].name = img;
                                imported[i].id = id;
                                imported[i].tag = '';

                                tag = this.getAttribute(ui.imageUploader.dataTag);
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
        ui.on(document,
            'dragenter',

            '.' + ui.imageUploader.target,

            function (e) {

                e.preventDefault();
                e.stopPropagation();

                var that, uploader;

                ui.addClass(this, ui.imageUploader.nameDrop);
                that = this;

                ui.on('body',
                    'dragover.' + ui.imageUploader.eventUploader,

                    function (ev) {

                        ev.preventDefault();
                        ev.stopPropagation();

                        uploader = ui.closest(ev.target, '.' + ui.imageUploader.target)[0];

                        if (uploader === undefined) {
                            ui.removeClass(that, ui.imageUploader.nameDrop);

                        } else {
                            ui.addClass(that, ui.imageUploader.nameDrop);
                        }

                    });

            });

        ui.on('body',
            'drop',

            function (e) {

                e.preventDefault();
                e.stopPropagation();

                var uploader = ui.closest(e.target, '.' + ui.imageUploader.target)[0];

                if (uploader === undefined) {
                    ui.removeClass(uploader, ui.imageUploader.nameDrop);

                } else {

                    ui.addClass(uploader, ui.imageUploader.nameDrop);

                    savedImgs = false;
                    loadFiles(uploader, e.dataTransfer.files);

                    ui.removeClass(uploader, ui.imageUploader.nameDrop);
                    ui.off(document, 'dragover.' + ui.imageUploader.eventUploader);

                }

            });

        ui.on(document,
            'change',

            '.' + ui.imageUploader.target + ' input[type="file"]',

            function () {

                var uploader = ui.closest(this, '.' + ui.imageUploader.target)[0];

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

        ui.on(document,
            'submit',

            '.' + ui.imageUploader.target + ' form',

            function (e) {

                e.preventDefault();

                var fnc, that, formData, uploader, list, file, tag, img, imgType, confirmed;
                that = this;

                fnc = function () {

                    formData = new FormData(); // formdata API

                    uploader = ui.closest(that, '.' + ui.imageUploader.target)[0];
                    list = ui.find('.' + ui.imageUploader.nameList + ' ' + ui.imageUploader.tagList, uploader);

                    ui.each(list,

                        function (i) {

                            file = ui.find('.' + ui.imageUploader.targetImages + ' img', this)[0];
                            formData.append(ui.imageUploader.formDataID + '[' + i + ']', file.id); // add id

                            tag = ui.find('.' + ui.imageUploader.targetTags, this)[0];
                            if (tag !== undefined) { tag = tag.textContent; } else { tag = ''; }

                            formData.append(ui.imageUploader.formDataTag + '[' + i + ']', tag); // add image tag

                            img = file.src.split(";");
                            imgType = img[0].split(":")[1]; // get image type

                            img = img[1].split(",")[1];
                            img = toBlob(img, imgType); // convert to blob to using server's file protocol

                            formData.append(ui.imageUploader.formDataImg + '[' + i + ']', img); // add image file

                        });

                    ui.addClass(uploader, ui.imageUploader.nameUploading);

                    ui.ajax({

                        type: 'POST',
                        url : that.action,
                        data: formData,

                        callback: function (status, response) {

                            ui.removeClass(uploader, ui.imageUploader.nameUploading);
                            if (status === 'success') { // check ajax connection

                                response = JSON.parse(response);

                                if (ui.alerts === undefined) {
                                    alert(response.message); // show server message

                                } else {

                                    if (response.success === true) { // check server connection

                                        ui.alerts.message({
                                            msg: response.message, // show server message
                                            theme: ui.alerts.themeSuccess
                                        });

                                    } else {

                                        ui.alerts.message({
                                            msg: response.message, // show server message
                                            theme: ui.alerts.themeDanger
                                        });

                                    }

                                }

                            } else {

                                if (ui.alerts === undefined) {
                                    alert(ui.imageUploader.msgError);

                                } else {

                                    ui.alerts.message({
                                        msg: ui.imageUploader.msgError,
                                        theme: ui.alerts.themeWarning
                                    });

                                }

                            }

                        }

                    });

                };

                if (ui.alerts === undefined) {

                    confirmed = confirm(ui.imageUploader.msgBeforeUpload);
                    if (confirmed) { fnc(); }

                } else {

                    ui.alerts.dialog({

                        msg: ui.imageUploader.msgBeforeUpload,

                        callback: function (val) {
                            if (val === ui.alerts.successBtnValue) { fnc(); }
                        }

                    });

                }

            });

        ui.on(document,
            'click',

            '.' + ui.imageUploader.nameLoading + ',.' + ui.imageUploader.nameUploading,

            function (e) { // prevent clicks when loading and uploading

                e.preventDefault();
                e.stopPropagation();

            });

    };

    // Loaders
    ui.onload(ui.imageUploader.Start);

}());
