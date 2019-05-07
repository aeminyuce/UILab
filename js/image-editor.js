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
    /*globals document, events, selector, navigator, Image, FileReader */

    imageEditor.Start = function () {

        // Events
        events.on(document, 'change', '.image-editor input[type="file"]', function () {

            var i, ext, c, ctx, img, calc, size, allowed, readers, list;

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
                calc = [];

                c = document.createElement("canvas");
                ctx = c.getContext("2d");

                list = events.closest(this, '.image-editor')[0];
                list = selector('.editor-list', list)[0];

                events.each(allowed, function (i) {

                    readers[i] = new FileReader(); // filereader API
                    readers[i].onload = function () {

                        img[i] = new Image();
                        img[i].src = this.result;

                        img[i].onload = function () {

                            // resize images to default
                            if (img[i].width > img[i].height) { // horizontal image

                                calc[i] = (img[i].height * imageEditor.width) / img[i].width;

                                c.width = imageEditor.width;
                                c.height = calc[i];

                                ctx.drawImage(img[i], 0, 0, imageEditor.width, calc[i]);

                            } else { // vertical image

                                calc[i] = (img[i].width * imageEditor.height) / img[i].height;

                                c.width = calc[i];
                                c.height = imageEditor.height;

                                ctx.drawImage(img[i], 0, 0, calc[i], imageEditor.height);

                            }

                            // calculate new image file size from new base64
                            size = c.toDataURL("image/jpeg").length - 'data:image/png;base64,'.length;
                            size = (4 * Math.ceil(size / 3) * 0.5624896334383812) / 1000;

                            size = size.toFixed(0);

                            // create html
                            list.insertAdjacentHTML('afterbegin',

                                '<li>' +
                                    '<span class="check-custom rounded dual-bordered ease-form">' +
                                        '<input type="checkbox">' +
                                        '<i class="ease-form-custom"></i>' +
                                    '</span>' +
                                    '<span class="name">' + allowed[i].name + '</span>' +
                                    '<span class="img"><img src="' + c.toDataURL("image/jpeg") + '" alt=""></span>' +
                                    '<span class="info">' + size + 'kb</span>' +
                                    '<button class="btn btn-square btn-invisible rounded ease-btn"><i class="icon icon-sm icon-trash"></i></button>' +
                                '</li>');

                        };

                    };

                    readers[i].readAsDataURL(allowed[i]);

                });

                // empty variables
                //allowed = [];
                readers = [];
                img = [];
                calc = [];

            }

        });

    };

    // Loaders
    events.onload(imageEditor.Start);

}());
