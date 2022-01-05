/* imgupload */

import { ui } from './../core/globals.js';
export default () => ui;

ui.imgUpload = {

    // targets
    target: 'ui-imgupload',

    targetImages: 'ui-imgupload-src',
    targetNames: 'ui-imgupload-name',
    targetInfos: 'ui-imgupload-info',
    targetTags: 'ui-imgupload-tag',

    // main classnames
    nameList: 'ui-imgupload-list',
    nameDrop: 'ui-imgupload-drop',

    nameLoading: 'ui-imgupload-loading',
    nameUploading: 'ui-imgupload-uploading',

    // helper classnames
    nameOpen: 'ui-open',
    nameOpenEase: 'ui-open-ease',

    // tags
    tagList: 'li',

    tagNames: 'span',
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
    dataSrc: 'data-ui-src',
    dataID: 'data-ui-id',
    dataTag: 'data-ui-tag',

    // formData API names
    formDataID: 'id',
    formDataTag: 'tag',
    formDataImg: 'img',

    // custom events
    eventUploader: 'ui:imageUploader'

};

(() => {

    ui.imgUpload.Start = () => {

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

                        if (ui.imgUpload.types.indexOf(ext) > -1) {
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

                ui.addClass(uploader, ui.imgUpload.nameLoading);

                listCont = ui.find('.' + ui.imgUpload.nameList, uploader)[0];
                list = ui.find('.' + ui.imgUpload.nameList + ' ul', uploader)[0];

                loadImages = function (j, tag) {

                    // get width and height
                    w[j] = img[j].width;
                    h[j] = img[j].height;

                    // get ratio
                    r = ui.imgUpload.ratio.split(':');
                    if (r.length !== 2) { r = ''; }

                    if (ui.imgUpload.resize && !savedImgs) { // resize images

                        if (w[j] > h[j]) { // horizontal image

                            h[j] = (h[j] / w[j]) * ui.imgUpload.resizeWidth;
                            w[j] = ui.imgUpload.resizeWidth;

                            if (h[j] > ui.imgUpload.resizeHeight) {

                                w[j] = (w[j] / h[j]) * ui.imgUpload.resizeHeight;
                                h[j] = ui.imgUpload.resizeHeight;

                            }

                        } else { // vertical image

                            w[j] = (w[j] / h[j]) * ui.imgUpload.resizeHeight;
                            h[j] = ui.imgUpload.resizeHeight;

                            if (w[j] > ui.imgUpload.resizeWidth) {

                                h[j] = (h[j] / w[j]) * ui.imgUpload.resizeWidth;
                                w[j] = ui.imgUpload.resizeWidth;

                            }

                        }

                        if (ui.imgUpload.fill && !savedImgs) {

                            c.width = ui.imgUpload.resizeWidth;
                            c.height = ui.imgUpload.resizeHeight;

                        } else {

                            c.width = w[j];
                            c.height = h[j];

                        }

                    } else {

                        if (!ui.imgUpload.fit && ui.imgUpload.fill && !savedImgs) {

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

                    if (ui.imgUpload.fit && !savedImgs) { // crop to fit images

                        if (ui.imgUpload.resize) {

                            c.width = ui.imgUpload.resizeWidth;
                            c.height = ui.imgUpload.resizeHeight;

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

                        if (ui.imgUpload.fill && !savedImgs) { // fill blank areas

                            ctx.fillStyle = ui.imgUpload.fillColor;
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

                        ui.imgUpload.newID += 1;
                        imgLoaded[j].id = ui.imgUpload.newID;

                    }

                };

                loadImagesAfter = () => {

                    loaded += 1;
                    if (loaded === allowed.length) {

                        setTimeout(() => {

                            ui.each(imgLoaded,

                                function (k) {

                                    if (imgLoaded[k] !== undefined) { // return when image loading failed

                                        html += '<' + ui.imgUpload.tagList + ' class="' + ui.imgUpload.nameOpenEase + '">' +

                                                    '<span class="' + ui.imgUpload.targetImages + '">' +
                                                        '<img id="' + imgLoaded[k].id + '" src="' + imgLoaded[k].data + '" draggable="false">' +
                                                    '</span>' +

                                                    '<' + ui.imgUpload.tagNames + ' class="' + ui.imgUpload.targetNames + '">' +
                                                        imgLoaded[k].name +
                                                    '</' + ui.imgUpload.tagNames +'>' +

                                                    '<' + ui.imgUpload.tagInfos + ' class="' + ui.imgUpload.targetInfos + '">' +
                                                        imgLoaded[k].size + 'kb' +
                                                    '</' + ui.imgUpload.tagInfos + '>';

                                        if (imgLoaded[k].tag !== '') { // add tags

                                            html += '<span class="' + ui.imgUpload.targetTags + '">' +
                                                        imgLoaded[k].tag +
                                                    '</span>';

                                        }

                                        html += '</' + ui.imgUpload.tagList + '>';

                                    }

                                });

                            list.insertAdjacentHTML('afterbegin', html);

                        }, 0);

                        ui.addClass(listCont, ui.imgUpload.nameOpen);

                        if (savedImgs) {
                            showTimer = ui.globals.slow;

                        } else {
                            showTimer = ui.globals.ease;
                        }

                        setTimeout(() => {

                            newItem = ui.find('.' + ui.imgUpload.nameList + ' ' + ui.imgUpload.tagList + '.' + ui.imgUpload.nameOpenEase, listCont);
                            ui.each(newItem,

                                function (k) {

                                    setTimeout(() => {
                                        ui.removeClass(newItem[k], ui.imgUpload.nameOpenEase);
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

                        setTimeout(() => {
                            ui.removeClass(uploader, ui.imgUpload.nameLoading);
                        }, showTimer);

                    }

                };

                ui.each(allowed,

                    function (i) {

                        if (savedImgs) { // array: get images saved before

                            img[i] = new Image();
                            img[i].src = allowed[i].name;

                            img[i].onload = () => {

                                loadImages(i, allowed[i].tag);
                                loadImagesAfter(); // end of images

                            };

                            img[i].onerror = () => {

                                if (ui.alerts === undefined) {
                                    alert(ui.imgUpload.msgImgError);

                                } else {

                                    ui.alerts.message({
                                        msg: allowed[i].name + ' ' + ui.imgUpload.msgImgError,
                                        theme: ui.alerts.themeDanger
                                    });

                                }

                                loadImagesAfter(); // end of images

                            };

                        } else { // FileList object: get images from user selected

                            readers[i] = new FileReader(); // filereader API
                            readers[i].readAsDataURL(allowed[i]);

                            readers[i].onload = function () { // has this!

                                img[i] = new Image();
                                img[i].src = this.result;

                                img[i].onload = () => { loadImages(i, ''); };

                            };

                            readers[i].onloadend = loadImagesAfter; // end of images

                        }

                    });

            }

        }

        // load saved before images
        uploaders = ui.find('.' + ui.imgUpload.target);
        ui.each(uploaders,

            function () {

                var i, list, imported, img, id, tag;

                i = -1;
                imported = [];

                list = ui.find('.' + ui.imgUpload.nameList + ' li', this);
                ui.each(list,

                    function () {

                        img = this.getAttribute(ui.imgUpload.dataSrc);
                        if (img !== null && img !== '') {

                            id = this.getAttribute(ui.imgUpload.dataID);
                            if (id !== null && id !== '') {

                                i += 1;
                                imported[i] = [];

                                imported[i].name = img;
                                imported[i].id = id;
                                imported[i].tag = '';

                                tag = this.getAttribute(ui.imgUpload.dataTag);
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

            '.' + ui.imgUpload.target,

            function (e) {

                e.preventDefault();
                e.stopPropagation();

                var that, uploader;

                ui.addClass(this, ui.imgUpload.nameDrop);
                that = this;

                ui.on('body',
                    'dragover.' + ui.imgUpload.eventUploader,

                    function (ev) {

                        ev.preventDefault();
                        ev.stopPropagation();

                        uploader = ui.closest(ev.target, '.' + ui.imgUpload.target)[0];

                        if (uploader === undefined) {
                            ui.removeClass(that, ui.imgUpload.nameDrop);

                        } else {
                            ui.addClass(that, ui.imgUpload.nameDrop);
                        }

                    });

            });

        ui.on('body',
            'drop',

            function (e) {

                e.preventDefault();
                e.stopPropagation();

                var uploader = ui.closest(e.target, '.' + ui.imgUpload.target)[0];

                if (uploader === undefined) {
                    ui.removeClass(uploader, ui.imgUpload.nameDrop);

                } else {

                    ui.addClass(uploader, ui.imgUpload.nameDrop);

                    savedImgs = false;
                    loadFiles(uploader, e.dataTransfer.files);

                    ui.removeClass(uploader, ui.imgUpload.nameDrop);
                    ui.off(document, 'dragover.' + ui.imgUpload.eventUploader);

                }

            });

        ui.on(document,
            'change',

            '.' + ui.imgUpload.target + ' input[type="file"]',

            function () {

                var uploader = ui.closest(this, '.' + ui.imgUpload.target)[0];

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

            '.' + ui.imgUpload.target + ' form',

            function (e) {

                e.preventDefault();

                var fnc, that, formData, uploader, list, file, tag, img, imgType, confirmed;
                that = this;

                fnc = function () {

                    formData = new FormData(); // formdata API

                    uploader = ui.closest(that, '.' + ui.imgUpload.target)[0];
                    list = ui.find('.' + ui.imgUpload.nameList + ' ' + ui.imgUpload.tagList, uploader);

                    ui.each(list,

                        function (i) {

                            file = ui.find('.' + ui.imgUpload.targetImages + ' img', this)[0];
                            formData.append(ui.imgUpload.formDataID + '[' + i + ']', file.id); // add id

                            tag = ui.find('.' + ui.imgUpload.targetTags, this)[0];
                            if (tag !== undefined) { tag = tag.textContent; } else { tag = ''; }

                            formData.append(ui.imgUpload.formDataTag + '[' + i + ']', tag); // add image tag

                            img = file.src.split(";");
                            imgType = img[0].split(":")[1]; // get image type

                            img = img[1].split(",")[1];
                            img = toBlob(img, imgType); // convert to blob to using server's file protocol

                            formData.append(ui.imgUpload.formDataImg + '[' + i + ']', img); // add image file

                        });

                    ui.addClass(uploader, ui.imgUpload.nameUploading);

                    ui.ajax({

                        type: 'POST',
                        url : that.action,
                        data: formData,

                        callback: (status, response) => {

                            ui.removeClass(uploader, ui.imgUpload.nameUploading);
                            if (status === 'success') { // check ajax connection

                                response = JSON.parse(response);

                                if (ui.alerts === undefined) {
                                    alert(response.message); // show server message

                                } else {

                                    if (response.success) { // check server connection

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
                                    alert(ui.imgUpload.msgError);

                                } else {

                                    ui.alerts.message({
                                        msg: ui.imgUpload.msgError,
                                        theme: ui.alerts.themeWarning
                                    });

                                }

                            }

                        }

                    });

                };

                if (ui.alerts === undefined) {

                    confirmed = confirm(ui.imgUpload.msgBeforeUpload);
                    if (confirmed) { fnc(); }

                } else {

                    ui.alerts.dialog({

                        msg: ui.imgUpload.msgBeforeUpload,

                        callback: function (val) {
                            if (val === ui.alerts.successBtnValue) { fnc(); }
                        }

                    });

                }

            });

        ui.on(document,
            'click',

            '.' + ui.imgUpload.nameLoading + ',.' + ui.imgUpload.nameUploading,

            function (e) { // prevent clicks when loading and uploading

                e.preventDefault();
                e.stopPropagation();

            });

    };

    // loaders
    ui.onload(ui.imgUpload.Start);

})();
