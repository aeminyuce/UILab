/*
 Image Uploader JS
 Image Uploader JS requires Selector Js, Events JS, Ajax JS, Alerts JS
*/

var imageUploader = {

    width: 1024, // default width
    height: 768, // default height

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
    /*globals document, events, selector, setTimeout, Image, FileReader, FormData, ajax, alerts */

    imageUploader.Start = function () {

        var uploaders;

        function loadFiles(uploader, files) {

            var i, ext, c, ctx, data, img, imgLoaded, w, h, size, allowed, readers, listCont, list, tools, loaded, loadImages, loadImagesAfter;

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

                // load and resize images
                readers = [];

                img = [];
                imgLoaded = [];

                w = [];
                h = [];

                loaded = 0;

                c = document.createElement("canvas");
                ctx = c.getContext("2d");

                events.addClass(uploader, 'loading');
                tools = selector('.uploader-tools', uploader)[0];

                listCont = selector('.uploader-list', uploader)[0];
                list = selector('.uploader-list ul', uploader)[0];

                loadImages = function (j, tag) {

                    // resize images to default
                    w[j] = img[j].width;
                    h[j] = img[j].height;

                    if (w[j] > h[j]) {

                        // horizontal image
                        if (w[j] > imageUploader.width) {
                            h[j] = (h[j] * imageUploader.width) / w[j];
                        }

                    } else {

                        // vertical image
                        if (h[j] > imageUploader.height) {
                            w[j] = (w[j] * imageUploader.height) / h[j];
                        }

                    }

                    c.width = w[j];
                    c.height = h[j];

                    ctx.drawImage(img[j], 0, 0, w[j], h[j]);
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

                };

                loadImagesAfter = function () {
                    
                    loaded += 1;                    
                    if (loaded === allowed.length) {
                        
                        events.each(imgLoaded, function (k) {

                            if (imgLoaded[k] === undefined) { return; } // for not loaded images
                            
                            list.insertAdjacentHTML('beforeend',
                                
                                    '<li class="open-ease">' +
                                        '<label class="custom">' +
                                            '<span class="check-custom rounded dual-bordered ease-form">' +
                                                '<input type="checkbox">' +
                                                '<i class="ease-form-custom"></i>' +
                                            '</span>' +
                                            '<span class="name">' + imgLoaded[k].name + '</span>' +
                                        '</label>' +
                                        '<span class="img"><img src="' + imgLoaded[k].data + '" alt=""></span>' +
                                        '<span class="size">' + imgLoaded[k].size + 'kb</span>' +
                                        '<span class="tag">' + imgLoaded[k].tag + '</span>' +
                                    '</li>');
                    
                        });

                        events.addClass(tools, 'open');
                        events.addClass(listCont, 'open');

                        setTimeout(function () {

                            events.addClass(tools, 'open-ease');
                            events.removeClass(selector('li.open-ease', listCont), 'open-ease');

                            // empty variables
                            allowed = [];
                            readers = [];

                            img = [];
                            imgLoaded = [];
                            
                            w = [];
                            h = [];

                        }, 10);

                        setTimeout(function () {
                            events.removeClass(uploader, 'loading');
                        }, 150);

                    }

                };

                events.each(allowed, function (i) {

                    if (allowed[i].lastModified !== undefined) { // FileList object: get images from user selected
                        
                        readers[i] = new FileReader(); // filereader API
                        readers[i].readAsDataURL(allowed[i]);

                        readers[i].onload = function () {

                            img[i] = new Image();
                            img[i].src = this.result;

                            img[i].onload = function () { loadImages(i, ''); };

                        };

                        readers[i].onloadend = loadImagesAfter; // end of loaded images

                    } else { // array: get images from before uploaded

                        img[i] = new Image();
                        img[i].src = allowed[i].name;

                        img[i].onload = function () {

                            loadImages(i, allowed[i].tag);
                            loadImagesAfter(); // end of loaded images
                            
                        };

                        img[i].onerror = function () {

                            alerts.message({
                                msg: allowed[i].name + ' ' + imageUploader.msgImgError,
                                theme: 'danger'
                            });

                            loadImagesAfter(); // end of loaded images

                        };

                    }

                });

            }

        }

        // load before uploaded images
        uploaders = selector('.image-uploader');
        events.each(uploaders, function () {

            var list, loaded, img, tag;

            loaded = [];

            list = selector('li[data-img]', this);
            events.each(list, function (i) {

                loaded[i] = [];

                img = this.getAttribute('data-img');
                if (img !== null && img !== '') {
                    loaded[i].name = img;
                }
                
                tag = this.getAttribute('data-tag');
                if (tag !== null && tag !== '') {
                    loaded[i].tag = tag;
                }

                this.parentNode.removeChild(this);

            });

            loadFiles(this, loaded);

        });

        // Events
        events.on(document, 'dragenter dragover dragleave drop', '.image-uploader', function (e) {

            e.preventDefault();
            e.stopPropagation();

            if (e.type === 'dragenter' || e.type === 'dragover') {
                events.addClass(this, 'drop-highlight');

            } else {

                events.removeClass(this, 'drop-highlight');

                if (e.type === 'drop') {
                    loadFiles(this, e.dataTransfer.files);
                }

            }

        });

        events.on(document, 'change', '.image-uploader input[type="file"]', function () {

            var uploader = events.closest(this, '.image-uploader')[0];
            loadFiles(uploader, this.files);

        });

        events.on(document, 'submit', '.image-uploader form', function (e) {

            e.preventDefault();

            var fnc, that, formData, uploader, list, file, size, tag;
            that = this;
            
            fnc = function () {

                formData = new FormData();

                uploader = events.closest(that, '.image-uploader')[0];
                list = selector('.uploader-list ul > li', uploader);
    
                events.each(list, function (i) {
    
                    file = selector('.img img', that)[0].src;
                    formData.append('files[' + i + ']', file); // add base64 images
    
                    size = selector('.size', that)[0].textContent;
                    formData.append('sizes[' + i + ']', size); // add image sizes
    
                    tag = selector('.tag', that)[0].textContent;
                    formData.append('tags[' + i + ']', tag); // add image tags
    
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
