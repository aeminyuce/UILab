/*
 Image Editor JS
 Image Editor JS requires Events JS
*/

var imageEditor = {};

(function () {

    'use strict';
    /*globals document, selector, events */

    imageEditor.Start = function () {

        console.log('image editor');

    };

    // Loaders
    events.onload(imageEditor.Start);

}());
