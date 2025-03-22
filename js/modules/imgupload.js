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

ui.imgUpload.Start = () => {

    let savedImgs;

    const loadFiles = (uploader, files) => {

        if (files.length > 0) {

            // check allowed file types
            let allowed = [];

            for (let i = 0; i < files.length; i++) {

                let ext = files[i].name.split('.')[1].toLowerCase();
                if (ext !== null) {

                    ext = ext.toString();

                    if (ui.imgUpload.types.indexOf(ext) > -1) {
                        allowed.push(files[i]);
                    }

                }

            }

            if (allowed.length === 0) return; // stop when all file types not allowed

            // load images
            let readers = [];

            let img = [];
            let imgLoaded = [];

            let w = [];
            let h = [];

            let html = '';
            let loaded = 0;

            const c = document.createElement("canvas");
            const ctx = c.getContext("2d");

            ui.addClass(uploader, ui.imgUpload.nameLoading);

            const loadImages = (j, tag) => {

                // get width and height
                w[j] = img[j].width;
                h[j] = img[j].height;

                // get ratio
                let r = ui.imgUpload.ratio.split(':');
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

                    } else ctx.drawImage(img[j], 0, 0, w[j], h[j]);

                }

                const data = c.toDataURL("image/jpeg");

                // calculate new image file size from new base64
                let size = data.split(',')[1].length;
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

            const loadImagesThen = () => {

                loaded += 1;
                if (loaded === allowed.length) {

                    setTimeout(() => {

                        Array.prototype.forEach.call(imgLoaded,

                            (img) => {

                                if (img !== undefined) { // return when image loading failed

                                    html += '<' + ui.imgUpload.tagList + ' class="' + ui.globals.nameOpenEase + '">' +

                                                '<span class="' + ui.imgUpload.targetImages + '">' +
                                                    '<img id="' + img.id + '" src="' + img.data + '" draggable="false">' +
                                                '</span>' +

                                                '<' + ui.imgUpload.tagNames + ' class="' + ui.imgUpload.targetNames + '">' +
                                                    img.name +
                                                '</' + ui.imgUpload.tagNames +'>' +

                                                '<' + ui.imgUpload.tagInfos + ' class="' + ui.imgUpload.targetInfos + '">' +
                                                    img.size + 'kb' +
                                                '</' + ui.imgUpload.tagInfos + '>';

                                    if (img.tag !== '') { // add tags

                                        html += '<span class="' + ui.imgUpload.targetTags + '">' +
                                                    img.tag +
                                                '</span>';

                                    }

                                    html += '</' + ui.imgUpload.tagList + '>';

                                }

                            });

                        const list = ui.find('.' + ui.imgUpload.nameList + ' ul', uploader)[0];
                        list.insertAdjacentHTML('afterbegin', html);

                    }, 0);

                    const listCont = ui.find('.' + ui.imgUpload.nameList, uploader)[0];
                    ui.addClass(listCont, ui.globals.nameOpen);

                    let showTimer;

                    if (savedImgs) showTimer = ui.globals.slow;
                    else showTimer = ui.globals.ease;

                    setTimeout(() => {

                        Array.prototype.forEach.call(ui.find('.' + ui.imgUpload.nameList + ' ' + ui.imgUpload.tagList + '.' + ui.globals.nameOpenEase, listCont),

                            (newImg, i) => {

                                setTimeout(() => {
                                    ui.removeClass(newImg, ui.globals.nameOpenEase);
                                }, (ui.globals.fast / 2) * i);

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

            Array.prototype.forEach.call(allowed,
                (el, i) => {

                    if (savedImgs) { // array: get images saved before

                        img[i] = new Image();
                        img[i].src = el.name;

                        img[i].onload = () => {

                            loadImages(i, el.tag);
                            loadImagesThen(); // end of images

                        };

                        img[i].onerror = () => {

                            if (ui.alerts === undefined) {
                                alert(ui.imgUpload.msgImgError);

                            } else {

                                ui.alerts.message({
                                    msg: el.name + ' ' + ui.imgUpload.msgImgError,
                                    theme: ui.alerts.themeDanger
                                });

                            }

                            loadImagesThen(); // end of images

                        };

                    } else { // FileList object: get images from user selected

                        readers[i] = new FileReader(); // filereader API
                        readers[i].readAsDataURL(el);

                        readers[i].onload = function () {

                            img[i] = new Image();
                            img[i].src = this.result;

                            img[i].onload = () => { loadImages(i, ''); };

                        };

                        readers[i].onloadend = loadImagesThen; // end of images

                    }

                });

        }

    }

    // load saved before images
    Array.prototype.forEach.call(ui.find('.' + ui.imgUpload.target),

        (el) => {

            let i = -1;
            let imported = [];

            Array.prototype.forEach.call(ui.find('.' + ui.imgUpload.nameList + ' li', el),

                (item) => {

                    const img = item.getAttribute(ui.imgUpload.dataSrc);
                    if (img !== null && img !== '') {

                        const id = item.getAttribute(ui.imgUpload.dataID);
                        if (id !== null && id !== '') {

                            i += 1;
                            imported[i] = [];

                            imported[i].name = img;
                            imported[i].id = id;
                            imported[i].tag = '';

                            const tag = item.getAttribute(ui.imgUpload.dataTag);
                            if (tag !== null) { imported[i].tag = tag; }

                        }

                    }

                    item.remove();

                });

            savedImgs = true;
            loadFiles(el, imported);

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

            ui.addClass(this, ui.imgUpload.nameDrop);

            ui.on('body',
                'dragover.' + ui.imgUpload.eventUploader,

                (ev) => {

                    ev.preventDefault();
                    ev.stopPropagation();

                    const uploader = ui.closest(ev.target, '.' + ui.imgUpload.target)[0];

                    if (uploader === undefined) ui.removeClass(this, ui.imgUpload.nameDrop);
                    else ui.addClass(this, ui.imgUpload.nameDrop);

                });

        });

    ui.on('body',
        'drop',

        function (e) {

            e.preventDefault();
            e.stopPropagation();

            const uploader = ui.closest(e.target, '.' + ui.imgUpload.target)[0];

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

            const uploader = ui.closest(this, '.' + ui.imgUpload.target)[0];

            savedImgs = false;
            loadFiles(uploader, this.files);

        });

    function toBlob(base, type, sliceSize) { // convert base64 images to blob

        type = type || '';
        sliceSize = sliceSize || 512;

        const byteCharacters = atob(base);
        const byteArrays = [];

        for (let j = 0; j < byteCharacters.length; j += sliceSize) {

            const slice = byteCharacters.slice(j, j + sliceSize);
            const byteNumbers = new Array(slice.length);

            for (let i = 0; i < slice.length; i++) byteNumbers[i] = slice.charCodeAt(i);

            const byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }

        const blob = new Blob(byteArrays, {type: type});
        return blob;

    }

    ui.on(document,
        'submit',

        '.' + ui.imgUpload.target + ' form',

        function (e) {

            e.preventDefault();

            const uploaderFnc = () => {

                const formData = new FormData(); // formdata API
                const uploader = ui.closest(this, '.' + ui.imgUpload.target)[0];

                Array.prototype.forEach.call(ui.find('.' + ui.imgUpload.nameList + ' ' + ui.imgUpload.tagList, uploader),

                    (el, i) => {

                        const file = ui.find('.' + ui.imgUpload.targetImages + ' img', el)[0];
                        formData.append(ui.imgUpload.formDataID + '[' + i + ']', file.id); // add id

                        let tag = ui.find('.' + ui.imgUpload.targetTags, el)[0];
                        if (tag !== undefined) tag = tag.textContent; else tag = '';

                        formData.append(ui.imgUpload.formDataTag + '[' + i + ']', tag); // add image tag

                        let img = file.src.split(";");
                        const imgType = img[0].split(":")[1]; // get image type

                        img = img[1].split(",")[1];
                        img = toBlob(img, imgType); // convert to blob to using server's file protocol

                        formData.append(ui.imgUpload.formDataImg + '[' + i + ']', img); // add image file

                    });


                ui.addClass(uploader, ui.imgUpload.nameUploading);

                ui.ajax({

                    type: 'POST',
                    url : this.action,
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

                const confirmed = confirm(ui.imgUpload.msgBeforeUpload);
                if (confirmed) uploaderFnc();

            } else {

                ui.alerts.dialog({

                    msg: ui.imgUpload.msgBeforeUpload,
                    error: ui.imgUpload.msgNotConfirm,

                    callback: function (val) {
                        if (val === ui.alerts.successBtnValue) { uploaderFnc(); }
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
