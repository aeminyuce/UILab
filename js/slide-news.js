/*
 Slide News JS
 Slide News JS requires Events JS
*/

/*globals window, selector, events, navigator, setInterval, clearInterval */
function slideNewsResizerFnc() {

    'use strict';
    var slider, nav, parentWidth;

    slider = selector('.slide-news')[0];
    if (slider !== undefined) {

        parentWidth = slider.offsetWidth;
        events.width(selector('li', slider), parentWidth + 'px');

        // detecting ie9
        if (navigator.userAgent.toLowerCase().indexOf('msie 9') > -1) {
            selector('ul', slider)[0].style.marginLeft = '-' + (window.slideNewsCount * parentWidth) + 'px';

        } else {
            selector('ul', slider)[0].style.transform = 'translateX(-' + (window.slideNewsCount * parentWidth) + 'px)';
        }

        nav = selector('.slide-nav i');

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

        events.width(selector('li', slider), slider.offsetWidth + 'px');

        // show/hide slider buttons
        if (total > 1) {

            events.show('.slide-next,.slide-nav');

            html = '<i class="selected ease-layout"></i>';
            for (i = 0; i < total; i += 1) { html += '<i class="ease-layout"></i>'; }

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

/*!resize loader */
events.on(window, 'resize', function () {

    'use strict';
    slideNewsResizerFnc();

});
