/*
 Sprites JS
 Sprites JS requires Selector Js, Events JS
*/

var sprites = {

    path: '', // ex: img/
    images: '', // ex: 'file.ext' or 'file1.ext,file2.ext'
    imageSizes: '', // ex: '640x480' or '640x480px,800x600'
    ver: '', // set version, ex: ?v=1.0
    retina: true,
    loadNoRetina: true // use 'false' if you embed your no-retina sprites before

};

(function () {

    'use strict';
    /*globals window, document, selector, events, ajax */

    sprites.Start = function () {

        if (sprites.images !== '' && selector('.sprite').length > 0) {

            var i, j, splitSizes, style, sName, sSize, splitImgs;

            splitImgs = sprites.images.split(',');
            for (i = 0; i < splitImgs.length; i += 1) {

                if (selector('.sprite[class*="' + splitImgs[i].split('.')[0] + '-"]').length > 0) {
                    if (splitImgs[i].split('.')[1].match(/^(png|gif|jpeg|jpg)$/g)) { j = i; }
                }

            }

            j += 1;

            if (selector('#sprites-styles').length === 0) {

                style = document.createElement('style');
                style.id = 'sprites-styles';

                selector('head')[0].appendChild(style);

            } else {

                style = selector('#sprites-styles');
                style.innerHTML = '';

            }

            splitSizes = sprites.imageSizes.split(',');
            for (i = 0; i < j; i += 1) {

                sName = splitImgs[i].split('.');

                if (splitSizes[i] !== undefined) {
                    sSize = splitSizes[i].split('x');

                } else {
                    sSize = ['0', '0'];
                }

                if (selector('.sprite[class*="' + sName[0] + '-"]').length > 0) {

                    if (sprites.retina && window.devicePixelRatio > 1) {
                        style.innerHTML += '.sprite[class*="' + sName[0] + '-"]{ background-image:url(' + sprites.path + sName[0] + '@2x.' + sName[1] + sprites.ver + '); background-size:' + sSize[0] + 'px ' + sSize[1] + 'px }';

                    } else if (sprites.loadNoRetina) {
                        style.innerHTML += '.sprite[class*="' + splitImgs[i].split('.')[0] + '-"]{ background-image:url(' + sprites.path + splitImgs[i] + sprites.ver + '); background-size:' + sSize[0] + 'px ' + sSize[1] + 'px }';
                    }

                }
            }

        }

    };

    // Loaders
    events.onload(sprites.Start);

    // ajax callback loader: requires Ajax JS
    events.on(document, 'ajaxCallbacks', function () {
        if (ajax.classNames.indexOf('sprite') > -1) { sprites.Start(); }
    });

}());
