/*
 Image Editor JS
 Image Editor JS requires Events JS, Ajax JS
*/

var imageEditor = {

    width: 1024, // default width
    height: 768, // default height

    types: ['jpg', 'jpeg', 'png', 'gif'] // add your allowed file types

};

(function () {

    'use strict';
    /*globals document, events, selector, navigator, setTimeout, Image, FileReader */

    imageEditor.Start = function () {

        // Events
        events.on(document, 'change', '.image-editor input[type="file"]', function () {

            var i, ext, c, ctx, data, img, w, h, size, allowed, readers, editor, list, tools;

            if (navigator.userAgent.toLowerCase().indexOf('msie 9') > -1) { // IE9 not supported filereader API
                return;
            }

            if (this.files.length > 0) {

                // check allowed file types
                allowed = [];

                for (i = 0; i < this.files.length; i += 1) {

                    ext = this.files[i].name.split('.')[1].toLowerCase();
                    if (ext !== null) {

                        ext = ext.toString();

                        if (imageEditor.types.indexOf(ext) > -1) {
                            allowed.push(this.files[i]);
                        }

                    }

                }

                if (allowed.length === 0) { return; } // stop when all file types not allowed

                // load and resize images
                readers = [];

                img = [];
                w = [];
                h = [];

                c = document.createElement("canvas");
                ctx = c.getContext("2d");

                editor = events.closest(this, '.image-editor')[0];
                events.addClass(editor, 'loading');

                list = selector('.editor-list', editor)[0];
                tools = selector('.editor-tools', editor)[0];

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
                            size = data.length - 'data:image/png;base64,'.length;
                            size = (4 * Math.ceil(size / 3) * 0.5624896334383812) / 1000;

                            size = size.toFixed(0);

                            // create html
                            list.insertAdjacentHTML('afterbegin',

                                '<li class="open-ease">' +
                                    '<span class="check-custom rounded dual-bordered ease-form">' +
                                        '<input type="checkbox">' +
                                        '<i class="ease-form-custom"></i>' +
                                    '</span>' +
                                    '<span class="name">' + allowed[i].name + '</span>' +
                                    '<span class="img"><img src="' + data + '" alt=""></span>' +
                                    '<span class="info">' + size + 'kb</span>' +
                                    '<button class="btn btn-square btn-invisible rounded ease-btn"><i class="icon icon-sm icon-trash"></i></button>' +
                                '</li>');

                            // end of loaded images
                            if (i === allowed.length - 1) {

                                events.addClass(list, 'open');
                                events.addClass(tools, 'open');

                                setTimeout(function () {

                                    events.removeClass(selector('li.open-ease', list), 'open-ease');

                                    // empty variables
                                    allowed = [];
                                    readers = [];

                                    img = [];
                                    w = [];
                                    h = [];

                                }, 0);

                                setTimeout(function () {
                                    events.removeClass(editor, 'loading');
                                }, 150);

                            }

                        };

                    };

                    readers[i].readAsDataURL(allowed[i]);

                });

            }

        });

    };

    // Loaders
    events.onload(imageEditor.Start);

}());
