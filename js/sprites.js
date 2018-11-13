/*
 Sprites JS
 Sprites JS requires Events JS
*/

var sprites = {

    spritePath: '', // ex: img/
    spriteImages: '', // ex: 'file.ext' or 'file1.ext,file2.ext'
    spriteImageSizes: '', // ex: '640x480' or '640x480px,800x600'
    spriteVersion: '', // ex: ?v=1.0
    retinaSprites: true,
    loadNoRetinaSprites: true // use 'false' if you embed your no-retina sprites before

};

(function () {

    'use strict';
    /*globals window, document, selector, events, ajax */

    function spritesFnc() {

        if (sprites.spriteImages !== '' && selector('.sprite').length > 0) {

            var i, j, splitSpriteImageSizes, style, sName, sSize,
                splitSpriteImages = sprites.spriteImages.split(',');

            for (i = 0; i < splitSpriteImages.length; i += 1) {

                if (selector('.sprite[class*="' + splitSpriteImages[i].split('.')[0] + '-"]').length > 0) {
                    if (splitSpriteImages[i].split('.')[1].match(/^(png|gif|jpeg|jpg)$/g)) { j = i; }
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

            splitSpriteImageSizes = sprites.spriteImageSizes.split(',');

            for (i = 0; i < j; i += 1) {

                sName = splitSpriteImages[i].split('.');
                if (splitSpriteImageSizes[i] !== undefined) { sSize = splitSpriteImageSizes[i].split('x'); } else { sSize = ['0', '0']; }

                if (selector('.sprite[class*="' + sName[0] + '-"]').length > 0) {

                    if (sprites.retinaSprites && window.devicePixelRatio > 1) {
                        style.innerHTML += '.sprite[class*="' + sName[0] + '-"]{ background-image:url(' + sprites.spritePath + sName[0] + '@2x.' + sName[1] + sprites.spriteVersion + '); background-size:' + sSize[0] + 'px ' + sSize[1] + 'px }';

                    } else if (sprites.loadNoRetinaSprites) {
                        style.innerHTML += '.sprite[class*="' + splitSpriteImages[i].split('.')[0] + '-"]{ background-image:url(' + sprites.spritePath + splitSpriteImages[i] + sprites.spriteVersion + '); background-size:' + sSize[0] + 'px ' + sSize[1] + 'px }';
                    }

                }
            }

        }

    }

    // Loaders
    events.onload(spritesFnc);

    // ajax callback loader: requires Ajax JS
    events.on(document, 'ajaxCallbacks', function () {
        if (ajax.ajaxClassNames.indexOf('sprite') > -1) { spritesFnc(); }
    });

}());
