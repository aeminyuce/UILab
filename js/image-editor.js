/*
 Image Editor JS
 Image Editor JS requires Events JS
*/

var imageEditor = {

    limit: 0, // Allowed image length to the list. Ex: 1, 50, 100 etc. 0 is unlimited
    types: ['jpg', 'jpeg', 'png', 'gif'] // add your allowed file types

};

(function () {

    'use strict';
    /*globals document, selector, events, alerts */

    imageEditor.Start = function () {

        // Events
        events.on(document, 'change', '.editor-list .add-img input', function () {

            var i, ext, list, allowed, added, loadFnc;

            if (this.files.length > 0) {

                allowed = [];
                list = events.closest(this, '.image-editor')[0];

                // check allowed file types
                for (i = 0; i < this.files.length; i += 1) {

                    ext = this.files[i].name.split('.')[1].toLowerCase();
                    ext = ext.match(/^(png|gif|jpeg|jpg)$/g);

                    if (ext !== null) {

                        ext = ext.toString();
                        if (imageEditor.types.indexOf(ext) > -1) { allowed.push(this.files[i]); }

                    }

                }

                // load images
                loadFnc = function () {

                    console.log('ready!');

                };

                // alert messages
                added = selector('.img-holder', list).length;
                if (imageEditor.limit > 0 && added >= imageEditor.limit) { // check allowed limit first

                    alerts.dialog({
                        msg: 'Allowed image limit is <b>' + imageEditor.limit + '</b> and you already added!'
                    });

                    return;

                }

                if (allowed.length === 0) { // all file types not allowed

                    alerts.dialog({
                        msg: 'Selected <b>' + this.files.length + '</b> files not supported!'
                    });

                } else if (this.files.length !== allowed.length) { // some file types are allowed

                    alerts.dialog({
                        msg: 'Added only <b>' + allowed.length + '</b> files.<br><b>' + this.files.length + '</b> files not supported!'
                    });

                    loadFnc();

                } else { // all file types allowed

                    alerts.dialog({
                        msg: 'Selected <b>' + allowed.length + '</b> files added!'
                    });

                    loadFnc();

                }

            }

        });

    };

    // Loaders
    events.onload(imageEditor.Start);

}());
