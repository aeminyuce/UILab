/*
 Slide News JS
 Slide News JS requires Events JS
*/

/*globals window, selector, events, navigator, document, setInterval, clearInterval */
function slideNewsResizerFnc() {

    'use strict';
    var slider, nav, screenW;

    slider = selector('.slide-news')[0];
    if (slider !== undefined) {

        screenW = selector(document)[0].offsetWidth;
        events.width(selector('li', slider), screenW + 'px');

        // detecting ie9
        if (navigator.userAgent.toLowerCase().indexOf('msie 9') > -1) {
            selector('ul', slider)[0].style.marginLeft = '-' + (window.slideNewsCount * screenW) + 'px';

        } else {
            selector('ul', slider)[0].style.transform = 'translateX(-' + (window.slideNewsCount * screenW) + 'px)';
        }

        nav = selector('.slide-nav span');
        events.removeClass(nav, 'selected');
        events.addClass(nav[window.slideNewsCount], 'selected');

        window.slideNewsIntFnc();

    }

}

window.slideNewsIntFnc = function () {

    'use strict';
    window.slideNewsIntTimer = 8000;

    clearInterval(window.slideNewsInt);
    window.slideNewsInt = setInterval(function () {

        var total =  (selector('.slide-news li').length - 1);
        window.slideNewsCount += 1;

        if (window.slideNewsCount > total) { window.slideNewsCount = 0; }
        slideNewsResizerFnc();

    },  window.slideNewsIntTimer);

};

function slideNewsFnc() {

    'use strict';
    var i, html, total, slider;

    slider = selector('.slide-news')[0];
    if (slider !== undefined) {

        total = (selector('li', slider).length - 1);

        events.width(selector('li', slider), selector(document)[0].offsetWidth + 'px');

        // show/hide slider buttons
        if (total > 1) {

            events.show('.slide-next,.slide-nav');

            html = '<span class="selected ease-bg"></span>';
            for (i = 0; i < total; i += 1) { html += '<span class="ease-bg"></span>'; }

            selector('.slide-nav')[0].innerHTML = html;

        }

        window.slideNewsCount = 0;

        // slider navigation
        events.on('.slide-prev,.slide-next', 'click', function () {

            if (events.hasClass(this, 'slide-next')) {

                window.slideNewsCount += 1;
                if (window.slideNewsCount > total) { window.slideNewsCount = 0; }

            } else {

                window.slideNewsCount -= 1;
                if (window.slideNewsCount < 0) { window.slideNewsCount = 0; }

            }

            if (window.slideNewsCount === 0) {
                events.hide('.slide-prev');

            } else { events.show('.slide-prev'); }

            slideNewsResizerFnc();

        });

        events.on(slider, 'mouseover', function () { clearInterval(window.slideNewsInt); });
        events.on(slider, 'mouseout', function () { window.slideNewsIntFnc(); });

        window.slideNewsIntFnc();

    }

}

/*!loader */
events.onload(function () {

    'use strict';
    slideNewsFnc();

});

/*!resize loader*/
events.on(window, 'resize', function () {

    'use strict';
    slideNewsResizerFnc();

});
