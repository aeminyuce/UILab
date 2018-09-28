/*
 Photo Preview JS
 Photo Preview JS requires Events JS
*/

/*globals window, document, selector, events, Image */
var photoPreview = {

    target: ''

};
function photoPreviewLoader() {

    'use strict';
    var screenH, scrollPos, images, newImage, j;

    if (photoPreview.target === '') {

        screenH = window.innerHeight;
        scrollPos = window.pageYOffset;

    } else {

        screenH = selector(photoPreview.target)[0].offsetHeight;
        scrollPos = selector(photoPreview.target)[0].scrollTop;

    }

    images = selector('.photo-preview img');
    newImage = [];

    for (j = 0; j < images.length; j += 1) {
        newImage[j] = [];
    }

    events.each(images, function (i) {

        newImage[i] = new Image();

        newImage[i].src = images[i].getAttribute('data-src').replace(/[\s]/g, '').split(',')[0];

        if (images[i].getBoundingClientRect().top <= (screenH + scrollPos)) {
            newImage[i].addEventListener('load', function () {

                images[i].src = newImage[i].src;
                events.addClass(images[i], 'open-ease');

            });
        }

    });

}
function photoPreviewFnc() {

    'use strict';
    photoPreviewLoader();

    events.on(document,

        'click', '.preview-left,.preview-right',
        function () {

            var preview, img, arr, count, total;

            preview = events.closest(this, '.photo-preview')[0];
            if (preview === undefined) { return; }

            img = selector('img', preview)[0];
            arr = img.getAttribute('data-src').replace(/[\s]/g, '').split(',');

            if (img.getAttribute('data-count') === null) {

                count = 0;
                img.setAttribute('data-count', count);

            } else { count = parseInt(img.getAttribute('data-count'), 10); }

            total = (arr.length - 1);
            if (events.hasClass(this, 'preview-right')) {

                if (count >= total) { count = total; return; }
                count += 1;

            } else {

                if (count <= 0) { count = 0; return; }
                count -= 1;

            }

            img.setAttribute('data-count', count);
            img.src = arr[count];

            events.removeClass(img, 'open-ease');
            img.addEventListener('load', function () {
                events.addClass(img, 'open-ease');
            }, false);

        });

}

/*!loader */
events.onload(function () {

    'use strict';
    photoPreviewFnc();

});

/*!resize loader*/
events.on(window, 'resize', function () {

    'use strict';
    photoPreviewLoader();

});

/*!scroll loader*/
events.on(window, 'scroll', function () {

    'use strict';
    photoPreviewLoader();

});
