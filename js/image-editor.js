/*
 Image Editor JS
 Image Editor JS requires Selector Js, Events JS, Ajax JS
*/

var imageEditor = {

    width: 1024, // default width
    height: 768, // default height

    types: ['jpg', 'jpeg', 'png', 'gif'] // add your allowed file types

};

(function () {

    'use strict';
    /*globals document, events, selector, navigator, setTimeout, Image, FileReader, FormData, ajax */

    imageEditor.Start = function () {

        function loadFiles(editor, files) {

            var i, ext, c, ctx, data, img, w, h, size, allowed, readers, listCont, list, tools, loaded;

            if (navigator.userAgent.toLowerCase().indexOf('msie 9') > -1) { // IE9 not supported filereader API

                events.trigger(selector('button[type="submit"]', editor)[0], 'click');
                return;

            }

            if (files.length > 0) {

                // check allowed file types
                allowed = [];

                for (i = 0; i < files.length; i += 1) {

                    ext = files[i].name.split('.')[1].toLowerCase();
                    if (ext !== null) {

                        ext = ext.toString();

                        if (imageEditor.types.indexOf(ext) > -1) {
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

                events.addClass(editor, 'loading');
                tools = selector('.editor-tools', editor)[0];

                listCont = selector('.editor-list', editor)[0];
                list = selector('.editor-list ul', editor)[0];

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
                                if (w[i] > imageEditor.width) {
                                    h[i] = (h[i] * imageEditor.width) / w[i];
                                }

                            } else {

                                // vertical image
                                if (h[i] > imageEditor.height) {
                                    w[i] = (w[i] * imageEditor.height) / h[i];
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
                                events.removeClass(editor, 'loading');
                            }, 150);

                        }

                    };

                    readers[i].readAsDataURL(allowed[i]);

                });

            }

        }

        // Events
        events.on(document, 'dragenter dragover dragleave drop', '.image-editor', function (e) {

            e.preventDefault();
            e.stopPropagation();

            if (navigator.userAgent.toLowerCase().indexOf('msie 9') > -1) {
                return;
            }

            if (e.type === 'dragenter' || e.type === 'dragover') {
                events.addClass(this, 'drop-highlight');

            } else {

                events.removeClass(this, 'drop-highlight');

                if (e.type === 'drop') {
                    loadFiles(this, e.dataTransfer.files);
                }

            }

        });

        events.on(document, 'change', '.image-editor input[type="file"]', function () {

            var editor = events.closest(this, '.image-editor')[0];
            loadFiles(editor, this.files);

        });

        events.on(document, 'submit', '.image-editor form', function (e) {

            if (navigator.userAgent.toLowerCase().indexOf('msie 9') > -1) { // IE9 not supported FormData API
                return;
            }

            e.preventDefault();

            var formData, editor, list, file, size, tag;
            formData = new FormData();

            editor = events.closest(this, '.image-editor')[0];
            list = selector('.editor-list ul > li', editor);

            events.each(list, function (i) {

                file = selector('.img img', this)[0].src;
                formData.append('files[' + i + ']', file); // add base64 images

                size = selector('.size', this)[0].textContent;
                formData.append('sizes[' + i + ']', size); // add image sizes

                tag = selector('.tag', this)[0].textContent;
                formData.append('tags[' + i + ']', tag); // add image tags

            });

            events.addClass(editor, 'uploading');

            ajax({
                url : this.action,
                data: formData,
                callback: function (status) {

                    if (status === 'success') {
                        events.removeClass(editor, 'uploading');
                    }

                }
            });

        });

    };

    // Loaders
    events.onload(imageEditor.Start);

}());
