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
    msgBeforeUpload: 'Do you want to upload your files?',
    msgSuccess: 'Your files saved, successfully!'

};

(function () {

    'use strict';
    /*globals document, events, selector, setTimeout, Image, FileReader, FormData, ajax, alerts */

    imageUploader.Start = function () {

        function loadFiles(uploader, files) {

            var i, ext, c, ctx, data, img, w, h, size, allowed, readers, listCont, list, tools, loaded;

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
                w = [];
                h = [];

                loaded = 0;

                c = document.createElement("canvas");
                ctx = c.getContext("2d");

                events.addClass(uploader, 'loading');
                tools = selector('.uploader-tools', uploader)[0];

                listCont = selector('.uploader-list', uploader)[0];
                list = selector('.uploader-list ul', uploader)[0];

                events.each(allowed, function (i) {

                    readers[i] = new FileReader(); // filereader API
                    readers[i].onload = function () {

                        img[i] = new Image();
                        img[i].src = this.result;

                        img[i].onload = function () {

                            // resize images to default
                            w[i] = img[i].width;
                            h[i] = img[i].height;

                            if (w[i] > h[i]) {

                                // horizontal image
                                if (w[i] > imageUploader.width) {
                                    h[i] = (h[i] * imageUploader.width) / w[i];
                                }

                            } else {

                                // vertical image
                                if (h[i] > imageUploader.height) {
                                    w[i] = (w[i] * imageUploader.height) / h[i];
                                }

                            }

                            c.width = w[i];
                            c.height = h[i];

                            ctx.drawImage(img[i], 0, 0, w[i], h[i]);
                            data = c.toDataURL("image/jpeg");

                            // calculate new image file size from new base64
                            size = data.split(',')[1].length;
                            size = (4 * Math.ceil(size / 3) * 0.5624896334383812) / 1000;

                            size = size.toFixed(0);

                            // create html
                            list.insertAdjacentHTML('beforeend',

                                '<li class="open-ease">' +
                                    '<label class="custom">' +
                                        '<span class="check-custom rounded dual-bordered ease-form">' +
                                            '<input type="checkbox">' +
                                            '<i class="ease-form-custom"></i>' +
                                        '</span>' +
                                        '<span class="name">' + allowed[i].name + '</span>' +
                                    '</label>' +
                                    '<span class="img"><img src="' + data + '" alt=""></span>' +
                                    '<span class="size">' + size + 'kb</span>' +
                                    '<span class="tag">No Tag</span>' +
                                '</li>');

                        };

                    };

                    // end of loaded images
                    readers[i].onloadend = function () {

                        loaded += 1;
                        if (loaded === allowed.length) {

                            events.addClass(tools, 'open');
                            events.addClass(listCont, 'open');

                            setTimeout(function () {

                                events.addClass(tools, 'open-ease');
                                events.removeClass(selector('li.open-ease', listCont), 'open-ease');

                                // empty variables
                                allowed = [];
                                readers = [];

                                img = [];
                                w = [];
                                h = [];

                            }, 10);

                            setTimeout(function () {
                                events.removeClass(uploader, 'loading');
                            }, 150);

                        }

                    };

                    readers[i].readAsDataURL(allowed[i]);

                });

            }

        }

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
                                    msg: imageUploader.msgSuccess,
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
                                msg: response.message, // show server message
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
