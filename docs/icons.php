<!-- custom CSS -->
<style>

    body { background-color: #e8e8e8; }

    .icons-list { margin: -1px; display: flex; flex-wrap: wrap; justify-content: center; }
    .icons-list:not(:last-child) { margin-bottom: 30px; }
    .icons-list li { color: #4a515a; max-width: 160px; background-color: #f7f7f7; padding: 15px 10px; margin: 1px; border-radius: 6px; cursor: pointer; flex-grow: 1; }
    html:not(.mobile) .icons-list li:hover { background-color: #fff; }
    .icons-list li > span { content: attr(data-name); color: #666; font-size: 13px; white-space: nowrap; text-overflow: ellipsis; line-height: normal; min-width: 129px; width: 100%; margin-top: 10px; overflow: hidden; display: block; }
    .icons-list li svg.icon:not([class*="animate-"]) { box-sizing: content-box; border: solid 1px rgba(0,0,0,.1); }

    @media (prefers-color-scheme: dark) {
        .icons-list li { color: #fff; background-color: #2f343e; }
        html:not(.mobile) .icons-list li:hover { background-color: #3c424d; }
        .icons-list li > span { color: #d0d0d0; }
        .icons-list li svg.icon:not([class*="animate-"]) { border-color: rgba(255,255,255,.1); }
    }

</style>

<!-- custom JS -->
<script>

    events.onload(function () {

        'use strict';

        var buttons, iconLists, icons, totalIcons;

        totalIcons = 0;

        buttons = selector('.icon-modifiers .btn');
        events.on(buttons, 'click', function () {

            var that, icons, bttns, size, weight;

            that = this;
            bttns = selector('.btn', this.parentElement);

            events.removeClass(bttns, 'ui-dark');
            setTimeout(function () {
                events.addClass(that, 'ui-dark');
            }, 0);

            // change size
            size = this.getAttribute('data-size');
            if (size !== null) {

                icons = selector('.icons-list .icon');
                events.removeClass(icons, 'icon-xxl icon-xl icon-lg icon-sm icon-xs icon-xxs');

                if (size !== '') {
                    events.addClass(icons, 'icon-' + size);
                }

            }

            // change weight
            weight = this.getAttribute('data-weight');
            if (weight !== null) {

                icons = selector('.icons-list svg.icon');
                events.removeClass(icons, 'icon-black icon-bold icon-semibold icon-light icon-thin');

                if (weight !== '') {
                    events.addClass(icons, 'icon-' + weight);
                }

            }

        });

        iconLists = selector('.icons-list');
        events.each(iconLists, function () {

            var total = selector('li', this).length;
            this.previousElementSibling.insertAdjacentHTML('beforeend', ' <small class="margin-5-v block half-opacity">(' + total + ' icons)</small>');

            totalIcons += total;

        });

        selector('.total')[0].textContent = '(Total ' + totalIcons + ' icons)';

        icons = selector('.icons-list li');
        events.on(icons, 'click', function () {

            var range, iconName;

            range = document.createRange();

            iconName = selector('span', this)[0];
            range.selectNode(iconName);

            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);

            document.execCommand('copy');

            alerts.message({
                msg: '<b>Copied!</b><br>' + iconName.textContent,
            });

        });

        // settings
        alerts.messageTheme = 'theme-default2 ui-dark';

    });

</script>

<main class="container">
    <div class="row">
        <div class="col-12">
            <div class="padding-30 sm-no-padding align-c">

                <h1>SVG Icons<small class="total margin-5-v block half-opacity"></small></h1>

                <div class="row">
                    <div class="col-4">
                        <h4 class="align-c margin-10-b">Change Weight</h4>
                        <div class="btn-holder form-lg icon-modifiers margin-20-b theme-default2 form-lg ease-1st-btn">
                            <button data-tooltip="b" data-only="desktop" title="Black" data-weight="black" class="btn round">
                                <svg class="icon icon-lg icon-black no-opacity"><use xlink:href="#remove"/></svg>
                            </button>
                            <button data-tooltip="b" data-only="desktop" title="Bold" data-weight="bold" class="btn round">
                                <svg class="icon icon-lg icon-bold no-opacity"><use xlink:href="#remove"/></svg>
                            </button>
                            <button data-tooltip="b" data-only="desktop" title="Semibold" data-weight="semibold" class="btn round">
                                <svg class="icon icon-lg icon-semibold no-opacity"><use xlink:href="#remove"/></svg>
                            </button>
                            <button data-tooltip="b" data-only="desktop" title="Auto Weight" data-weight="" class="btn round ui-dark">
                                Auto
                            </button>
                            <button data-tooltip="b" data-only="desktop" title="Light" data-weight="light" class="btn round">
                                <svg class="icon icon-lg icon-light no-opacity"><use xlink:href="#remove"/></svg>
                            </button>
                            <button data-tooltip="b" data-only="desktop" title="Thin" data-weight="thin" class="btn round">
                                <svg class="icon icon-lg icon-thin no-opacity"><use xlink:href="#remove"/></svg>
                            </button>
                        </div>
                    </div>
                    <div class="col-8">
                        <h4 class="align-c margin-10-b">Change Size</h4>
                        <div class="btn-holder form-lg icon-modifiers margin-20-b theme-default2 form-lg ease-1st-btn">
                            <button data-size="xxl" class="btn round ui-dark">XXL</button>
                            <button data-size="xl" class="btn round">XL</button>
                            <button data-size="lg" class="btn round">L</button>
                            <button data-size="" class="btn round">-</button>
                            <button data-size="sm" class="btn round">SM</button>
                            <button data-size="xs" class="btn round">XS</button>
                            <button data-size="xxs" class="btn round">XXS</button>
                        </div>
                    </div>
                </div>

                <h2>General Icons</h2>
                <ul class="icons-list list-custom theme-default ease-1st-bg ease-2nd-all">
                    <li><svg class="icon icon-xxl"><use xlink:href="#angle-down"/></svg><span>angle-down</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#angle-left"/></svg><span>angle-left</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#angle-right"/></svg><span>angle-right</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#angle-up"/></svg><span>angle-up</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#angle-dual-down"/></svg><span>angle-dual-down</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#angle-dual-left"/></svg><span>angle-dual-left</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#angle-dual-right"/></svg><span>angle-dual-right</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#angle-dual-up"/></svg><span>angle-dual-up</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#arrow-down"/></svg><span>arrow-down</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#arrow-left"/></svg><span>arrow-left</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#arrow-right"/></svg><span>arrow-right</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#arrow-up"/></svg><span>arrow-up</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#long-arrow-down"/></svg><span>long-arrow-down</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#long-arrow-left"/></svg><span>long-arrow-left</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#long-arrow-right"/></svg><span>long-arrow-right</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#long-arrow-up"/></svg><span>long-arrow-up</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#exchange-v"/></svg><span>exchange-v</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#exchange-h"/></svg><span>exchange-h</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#move"/></svg><span>move</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#bars"/></svg><span>bars</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#bars-left"/></svg><span>bars-left</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#bars-right"/></svg><span>bars-right</sp-rightn></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#bars-center"/></svg><span>bars-center</span-center</li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#circle"/></svg><span>circle</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#circle-fill"/></svg><span>circle-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#badge"/></svg><span>badge</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#badge-fill"/></svg><span>badge-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#square"/></svg><span>square</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#square-fill"/></svg><span>square-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#shield"/></svg><span>shield</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#shield-fill"/></svg><span>shield-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#marker"/></svg><span>marker</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#marker-fill"/></svg><span>marker-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#alert"/></svg><span>alert</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#alert-triangle"/></svg><span>alert-triangle</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#alert-triangle-fill"/></svg><span>alert-triangle-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#alert-circle"/></svg><span>alert-circle</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#alert-circle-fill"/></svg><span>alert-circle-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#alert-badge"/></svg><span>alert-badge</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#alert-badge-fill"/></svg><span>alert-badge-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#alert-square"/></svg><span>alert-square</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#alert-square-fill"/></svg><span>alert-square-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#alert-shield"/></svg><span>alert-shield</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#alert-shield-fill"/></svg><span>alert-shield-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#alert-marker"/></svg><span>alert-marker</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#alert-marker-fill"/></svg><span>alert-marker-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#info"/></svg><span>info</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#info-circle"/></svg><span>info-circle</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#info-circle-fill"/></svg><span>info-circle-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#info-badge"/></svg><span>info-badge</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#info-badge-fill"/></svg><span>info-badge-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#info-square"/></svg><span>info-square</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#info-square-fill"/></svg><span>info-square-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#info-shield"/></svg><span>info-shield</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#info-shield-fill"/></svg><span>info-shield-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#info-marker"/></svg><span>info-marker</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#info-marker-fill"/></svg><span>info-marker-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#question"/></svg><span>question</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#question-circle"/></svg><span>question-circle</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#question-circle-fill"/></svg><span>question-circle-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#question-badge"/></svg><span>question-badge</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#question-badge-fill"/></svg><span>question-badge-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#question-square"/></svg><span>question-square</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#question-square-fill"/></svg><span>question-square-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#question-shield"/></svg><span>question-shield</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#question-shield-fill"/></svg><span>question-shield-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#question-marker"/></svg><span>question-marker</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#question-marker-fill"/></svg><span>question-marker-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#minus"/></svg><span>minus</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#minus-circle"/></svg><span>minus-circle</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#minus-circle-fill"/></svg><span>minus-circle-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#minus-badge"/></svg><span>minus-badge</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#minus-badge-fill"/></svg><span>minus-badge-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#minus-square"/></svg><span>minus-square</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#minus-square-fill"/></svg><span>minus-square-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#minus-shield"/></svg><span>minus-shield</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#minus-shield-fill"/></svg><span>minus-shield-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#minus-marker"/></svg><span>minus-marker</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#minus-marker-fill"/></svg><span>minus-marker-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#plus"/></svg><span>plus</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#plus-circle"/></svg><span>plus-circle</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#plus-circle-fill"/></svg><span>plus-circle-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#plus-badge"/></svg><span>plus-badge</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#plus-badge-fill"/></svg><span>plus-badge-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#plus-square"/></svg><span>plus-square</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#plus-square-fill"/></svg><span>plus-square-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#plus-shield"/></svg><span>plus-shield</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#plus-shield-fill"/></svg><span>plus-shield-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#plus-marker"/></svg><span>plus-marker</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#plus-marker-fill"/></svg><span>plus-marker-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#remove"/></svg><span>remove</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#remove-circle"/></svg><span>remove-circle</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#remove-circle-fill"/></svg><span>remove-circle-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#remove-badge"/></svg><span>remove-badge</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#remove-badge-fill"/></svg><span>remove-badge-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#remove-square"/></svg><span>remove-square</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#remove-square-fill"/></svg><span>remove-square-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#remove-shield"/></svg><span>remove-shield</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#remove-shield-fill"/></svg><span>remove-shield-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#remove-marker"/></svg><span>remove-marker</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#remove-marker-fill"/></svg><span>remove-marker-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#check"/></svg><span>check</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#check-circle"/></svg><span>check-circle</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#check-circle-fill"/></svg><span>check-circle-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#check-badge"/></svg><span>check-badge</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#check-badge-fill"/></svg><span>check-badge-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#check-square"/></svg><span>check-square</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#check-square-fill"/></svg><span>check-square-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#check-shield"/></svg><span>check-shield</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#check-shield-fill"/></svg><span>check-shield-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#check-marker"/></svg><span>check-marker</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#check-marker-fill"/></svg><span>check-marker-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#address-book"/></svg><span>address-book</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#address-book-fill"/></svg><span>address-book-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#address-card"/></svg><span>address-card</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#address-card-fill"/></svg><span>address-card-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#home"/></svg><span>home</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#home-fill"/></svg><span>home-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#at"/></svg><span>at</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#infinity"/></svg><span>infinity</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#bug"/></svg><span>bug</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#bug-fill"/></svg><span>bug-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#lab"/></svg><span>lab</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#lab-fill"/></svg><span>lab-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#bell"/></svg><span>bell</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#bell-fill"/></svg><span>bell-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#bell-on"/></svg><span>bell-on</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#bell-on-fill"/></svg><span>bell-on-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#award"/></svg><span>award</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#award-fill"/></svg><span>award-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#trophy"/></svg><span>trophy</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#trophy-fill"/></svg><span>trophy-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#trophy-star"/></svg><span>trophy-star</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#trophy-star-fill"/></svg><span>trophy-star-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#birthday"/></svg><span>birthday</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#birthday-fill"/></svg><span>birthday-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#gift"/></svg><span>gift</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#gift-fill"/></svg><span>gift-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#book"/></svg><span>book</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#book-fill"/></svg><span>book-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#books"/></svg><span>books</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#books-fill"/></svg><span>books-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#book-open"/></svg><span>book-open</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#book-open-fill"/></svg><span>book-open-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#box"/></svg><span>box</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#box-fill"/></svg><span>box-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#boxes"/></svg><span>boxes</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#boxes-fill"/></svg><span>boxes-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#code"/></svg><span>code</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#brackets"/></svg><span>brackets</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#brackets-curly"/></svg><span>brackets-curly</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#briefcase"/></svg><span>briefcase</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#briefcase-fill"/></svg><span>briefcase-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#bullhorn"/></svg><span>bullhorn</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#bullhorn-fill"/></svg><span>bullhorn-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#megaphone"/></svg><span>megaphone</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#megaphone-fill"/></svg><span>megaphone-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#calculator"/></svg><span>calculator</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#calculator-fill"/></svg><span>calculator-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#calculator-btn"/></svg><span>calculator-btn</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#calculator-btn-fill"/></svg><span>calculator-btn-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#calendar"/></svg><span>calendar</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#calendar-fill"/></svg><span>calendar-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#calendar-day"/></svg><span>calendar-day</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#calendar-day-fill"/></svg><span>calendar-day-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#calendar-days"/></svg><span>calendar-days</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#calendar-days-fill"/></svg><span>calendar-days-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#calendar-minus"/></svg><span>calendar-minus</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#calendar-minus-fill"/></svg><span>calendar-minus-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#calendar-plus"/></svg><span>calendar-plus</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#calendar-plus-fill"/></svg><span>calendar-plus-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#calendar-remove"/></svg><span>calendar-remove</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#calendar-remove-fill"/></svg><span>calendar-remove-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#calendar-check"/></svg><span>calendar-check</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#calendar-check-fill"/></svg><span>calendar-check-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#calendar-star"/></svg><span>calendar-star</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#calendar-star-fill"/></svg><span>calendar-star-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#cap"/></svg><span>cap</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#cap-fill"/></svg><span>cap-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#chart-pie"/></svg><span>chart-pie</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#chart-pie-fill"/></svg><span>chart-pie-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#chart-bar"/></svg><span>chart-bar</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#chart-line"/></svg><span>chart-line</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#clipboard"/></svg><span>clipboard</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#clipboard-fill"/></svg><span>clipboard-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#clipboard-list"/></svg><span>clipboard-list</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#clipboard-list-fill"/></svg><span>clipboard-list-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#clipboard-check"/></svg><span>clipboard-check</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#clipboard-check-fill"/></svg><span>clipboard-check-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#sticky-note"/></svg><span>sticky-note</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#sticky-note-fill"/></svg><span>sticky-note-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#sticky-note-list"/></svg><span>sticky-note-list</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#sticky-note-list-fill"/></svg><span>sticky-note-list-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#clock"/></svg><span>clock</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#clock-fill"/></svg><span>clock-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#clock-alarm"/></svg><span>clock-alarm</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#clock-alarm-fill"/></svg><span>clock-alarm-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#history"/></svg><span>history</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#clone"/></svg><span>clone</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#clone-fill"/></svg><span>clone-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#cloud-download"/></svg><span>cloud-download</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#cloud-download-fill"/></svg><span>cloud-download-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#cloud-upload"/></svg><span>cloud-upload</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#cloud-upload-fill"/></svg><span>cloud-upload-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#comment"/></svg><span>comment</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#comment-fill"/></svg><span>comment-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#comments"/></svg><span>comments</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#comments-fill"/></svg><span>comments-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#comment-minus"/></svg><span>comment-minus</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#comment-minus-fill"/></svg><span>comment-minus-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#comment-plus"/></svg><span>comment-plus</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#comment-plus-fill"/></svg><span>comment-plus-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#comment-remove"/></svg><span>comment-remove</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#comment-remove-fill"/></svg><span>comment-remove-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#comment-lines"/></svg><span>comment-lines</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#comment-lines-fill"/></svg><span>comment-lines-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#comment-dots"/></svg><span>comment-dots</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#comment-dots-fill"/></svg><span>comment-dots-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#comment-sms"/></svg><span>comment-sms</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#comment-sms-fill"/></svg><span>comment-sms-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#compass"/></svg><span>compass</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#compass-fill"/></svg><span>compass-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#copyright"/></svg><span>copyright</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#copyright-fill"/></svg><span>copyright-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#database"/></svg><span>database</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#database-fill"/></svg><span>database-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#news"/></svg><span>news</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#news-fill"/></svg><span>news-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#doc"/></svg><span>doc</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#doc-fill"/></svg><span>doc-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#docs"/></svg><span>docs</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#docs-fill"/></svg><span>docs-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#doc-no"/></svg><span>doc-no</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#doc-no-fill"/></svg><span>doc-no-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#archive"/></svg><span>archive</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#archive-fill"/></svg><span>archive-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#draw"/></svg><span>draw</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#draw-fill"/></svg><span>draw-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#edit"/></svg><span>edit</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#edit-fill"/></svg><span>edit-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#ellipsis-h"/></svg><span>ellipsis-h</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#ellipsis-h-fill"/></svg><span>ellipsis-h-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#ellipsis-v"/></svg><span>ellipsis-v</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#ellipsis-v-fill"/></svg><span>ellipsis-v-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#skip"/></svg><span>skip</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#skip-fill"/></svg><span>skip-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#skip"/></svg><span>skip</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#skip-fill"/></svg><span>skip-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#envelope"/></svg><span>envelope</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#envelope-fill"/></svg><span>envelope-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#envelope-open"/></svg><span>envelope-open</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#envelope-open-fill"/></svg><span>envelope-open-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#expand"/></svg><span>expand</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#expand-wide"/></svg><span>expand-wide</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#eye"/></svg><span>eye</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#eye-fill"/></svg><span>eye-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#face-blank"/></svg><span>face-blank</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#face-blank-fill"/></svg><span>face-blank-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#face-smile"/></svg><span>face-smile</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#face-smile-fill"/></svg><span>face-smile-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#face-sad"/></svg><span>face-sad</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#face-sad-fill"/></svg><span>face-sad-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#face-sad"/></svg><span>face-sad</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#face-sad-fill"/></svg><span>face-sad-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#face-meh"/></svg><span>face-meh</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#face-meh-fill"/></svg><span>face-meh-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#factory"/></svg><span>factory</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#factory-fill"/></svg><span>factory-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#fire"/></svg><span>fire</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#fire-fill"/></svg><span>fire-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#fire-camp"/></svg><span>fire-camp</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#fire-camp-fill"/></svg><span>fire-camp-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#flag"/></svg><span>flag</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#flag-fill"/></svg><span>flag-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#gas-pump"/></svg><span>gas-pump</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#gas-pump-fill"/></svg><span>gas-pump-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#globe"/></svg><span>globe</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#globe-fill"/></svg><span>globe-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#filter"/></svg><span>filter</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#filter-fill"/></svg><span>filter-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#grid-row"/></svg><span>grid-row</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#grid-row-fill"/></svg><span>grid-row-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#grid-column"/></svg><span>grid-column</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#grid-column-fill"/></svg><span>grid-column-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#grid-column-sm"/></svg><span>grid-column-sm</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#grid-column-sm-fill"/></svg><span>grid-column-sm-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#grid-flow"/></svg><span>grid-flow</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#grid-flow-fill"/></svg><span>grid-flow-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#grid-masonry"/></svg><span>grid-masonry</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#grid-masonry-fill"/></svg><span>grid-masonry-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#heart"/></svg><span>heart</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#heart-fill"/></svg><span>heart-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#help"/></svg><span>help</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#help-fill"/></svg><span>help-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#hourglass"/></svg><span>hourglass</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#hourglass-fill"/></svg><span>hourglass-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#hourglass-start"/></svg><span>hourglass-start</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#hourglass-start-fill"/></svg><span>hourglass-start-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#hourglass-end"/></svg><span>hourglass-end</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#hourglass-end-fill"/></svg><span>hourglass-end-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#image"/></svg><span>image</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#image-fill"/></svg><span>image-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#images"/></svg><span>images</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#images-fill"/></svg><span>images-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#images-minus"/></svg><span>images-minus</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#images-minus-fill"/></svg><span>images-minus-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#images-plus"/></svg><span>images-plus</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#images-plus-fill"/></svg><span>images-plus-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#images-check"/></svg><span>images-check</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#images-check-fill"/></svg><span>images-check-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#keyboard"/></svg><span>keyboard</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#keyboard-fill"/></svg><span>keyboard-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#land"/></svg><span>land</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#land-fill"/></svg><span>land-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#leaf"/></svg><span>leaf</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#leaf-fill"/></svg><span>leaf-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#water"/></svg><span>water</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#water-fill"/></svg><span>water-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#link"/></svg><span>link</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#link-external"/></svg><span>link-external</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#target"/></svg><span>target</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#target-fill"/></svg><span>target-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#location"/></svg><span>location</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#location-fill"/></svg><span>location-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#location-arrow"/></svg><span>location-arrow</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#location-arrow-fill"/></svg><span>location-arrow-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#key"/></svg><span>key</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#key-fill"/></svg><span>key-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#lock"/></svg><span>lock</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#lock-fill"/></svg><span>lock-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#lock-open"/></svg><span>lock-open</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#lock-open-fill"/></svg><span>lock-open-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#map"/></svg><span>map</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#map-fill"/></svg><span>map-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#network"/></svg><span>network</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#network-fill"/></svg><span>network-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#no"/></svg><span>no</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#paw"/></svg><span>paw</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#paw-fill"/></svg><span>paw-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#pen"/></svg><span>pen</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#pen-fill"/></svg><span>pen-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#pen-write"/></svg><span>pen-write</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#pen-write-fill"/></svg><span>pen-write-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#pencil"/></svg><span>pencil</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#pencil-fill"/></svg><span>pencil-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#pencil-write"/></svg><span>pencil-write</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#pencil-write-fill"/></svg><span>pencil-write-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#phone"/></svg><span>phone</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#phone-fill"/></svg><span>phone-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#phone-call"/></svg><span>phone-call</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#phone-call-fill"/></svg><span>phone-call-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#print"/></svg><span>print</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#print-fill"/></svg><span>print-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#puzzle"/></svg><span>puzzle</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#puzzle-fill"/></svg><span>puzzle-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#radiation"/></svg><span>radiation</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#radiation-fill"/></svg><span>radiation-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#recycle"/></svg><span>recycle</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#undo"/></svg><span>undo</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#redo"/></svg><span>redo</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#sync"/></svg><span>sync</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#reply"/></svg><span>reply</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#reply-fill"/></svg><span>reply-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#required"/></svg><span>required</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#save"/></svg><span>save</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#save-fill"/></svg><span>save-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#search"/></svg><span>search</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#search-minus"/></svg><span>search-minus</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#search-plus"/></svg><span>search-plus</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#search-star"/></svg><span>search-star</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#search-user"/></svg><span>search-user</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#search-marker"/></svg><span>search-marker</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#setting"/></svg><span>setting</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#setting-fill"/></svg><span>setting-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#settings"/></svg><span>settings</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#settings-fill"/></svg><span>settings-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#share"/></svg><span>share</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#share-fill"/></svg><span>share-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#send"/></svg><span>send</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#send-fill"/></svg><span>send-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#sign-in"/></svg><span>sign-in</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#sign-in-fill"/></svg><span>sign-in-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#sign-out"/></svg><span>sign-out</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#sign-out-fill"/></svg><span>sign-out-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#import"/></svg><span>import</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#export"/></svg><span>export</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#sort"/></svg><span>sort</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#sort-fill"/></svg><span>sort-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#sort-up"/></svg><span>sort-up</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#sort-up-fill"/></svg><span>sort-up-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#sort-down"/></svg><span>sort-down</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#sort-down-fill"/></svg><span>sort-down-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#star"/></svg><span>star</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#star-fill"/></svg><span>star-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#star-half"/></svg><span>star-half</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#star-half-fill"/></svg><span>star-half-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#table"/></svg><span>table</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#table-fill"/></svg><span>table-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#trash"/></svg><span>trash</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#trash-fill"/></svg><span>trash-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#wrench"/></svg><span>wrench</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#wrench-fill"/></svg><span>wrench-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#car"/></svg><span>car</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#car-fill"/></svg><span>car-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#bus"/></svg><span>bus</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#bus-fill"/></svg><span>bus-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#truck"/></svg><span>truck</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#truck-fill"/></svg><span>truck-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#tachometer"/></svg><span>tachometer</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#tachometer-fill"/></svg><span>tachometer-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#user"/></svg><span>user</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#user-fill"/></svg><span>user-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#users"/></svg><span>users</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#users-fill"/></svg><span>users-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#user-circle"/></svg><span>user-circle</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#user-circle-fill"/></svg><span>user-circle-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#user-minus"/></svg><span>user-minus</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#user-minus-fill"/></svg><span>user-minus-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#user-plus"/></svg><span>user-plus</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#user-plus-fill"/></svg><span>user-plus-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#user-check"/></svg><span>user-check</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#user-check-fill"/></svg><span>user-check-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#user-remove"/></svg><span>user-remove</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#user-remove-fill"/></svg><span>user-remove-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#user-search"/></svg><span>user-search</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#user-search-fill"/></svg><span>user-search-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#user-no"/></svg><span>user-no</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#user-no-fill"/></svg><span>user-no-fill</span></li>
                    <li><svg class="icon animate-spin icon-xxl"><use xlink:href="#loader-line"/></svg><span>loader-line</span></li>
                    <li><svg class="icon animate-spin icon-xxl"><use xlink:href="#loader-line-dual"/></svg><span>loader-line-dual</span></li>
                    <li><svg class="icon animate-spin icon-xxl"><use xlink:href="#loader-line-dash"/></svg><span>loader-line-dash</span></li>
                    <li><svg class="icon animate-spin icon-xxl"><use xlink:href="#loader-roll"/></svg><span>loader-roll</span></li>
                    <li><svg class="icon animate-spin icon-xxl"><use xlink:href="#loader-spin"/></svg><span>loader-spin</span></li>
                    <li><svg class="icon animate-spin icon-xxl"><use xlink:href="#loader-circle-sm"/></svg><span>loader-circle-sm</span></li>
                    <li><svg class="icon animate-spin icon-xxl"><use xlink:href="#loader-circle-sm-fill"/></svg><span>loader-circle-sm-fill</span></li>
                    <li><svg class="icon animate-spin icon-xxl"><use xlink:href="#loader-circle"/></svg><span>loader-circle</span></li>
                    <li><svg class="icon animate-spin icon-xxl"><use xlink:href="#loader-circle-fill"/></svg><span>loader-circle-fill</span></li>
                    <li><svg class="icon animate-spin icon-xxl"><use xlink:href="#loader-drop"/></svg><span>loader-drop</span></li>
                    <li><svg class="icon animate-spin icon-xxl"><use xlink:href="#loader-drop-fill"/></svg><span>loader-drop-fill</span></li>
                </ul>

                <h2>Touch Icons</h2>
                <ul class="icons-list list-custom theme-default ease-1st-bg ease-2nd-all">
                    <li><svg class="icon icon-xxl"><use xlink:href="#touch"/></svg><span>touch</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#touch-fill"/></svg><span>touch-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#touch-dual"/></svg><span>touch-dual</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#touch-dual-fill"/></svg><span>touch-dual-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#swipe"/></svg><span>swipe</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#swipe-fill"/></svg><span>swipe-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#swipe-down"/></svg><span>swipe-down</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#swipe-down-fill"/></svg><span>swipe-down-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#swipe-left"/></svg><span>swipe-left</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#swipe-left-fill"/></svg><span>swipe-left-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#swipe-right"/></svg><span>swipe-right</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#swipe-right-fill"/></svg><span>swipe-right-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#swipe-up"/></svg><span>swipe-up</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#swipe-up-fill"/></svg><span>swipe-up-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#pinch"/></svg><span>pinch</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#pinch-fill"/></svg><span>pinch-fill</span></li>
                </ul>

                <h2>Media Icons</h2>
                <ul class="icons-list list-custom theme-default ease-1st-bg ease-2nd-all">
                    <li><svg class="icon icon-xxl"><use xlink:href="#backward"/></svg><span>backward</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#backward-fill"/></svg><span>backward-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#play"/></svg><span>play</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#play-fill"/></svg><span>play-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#forward"/></svg><span>forward</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#forward-fill"/></svg><span>forward-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#pause"/></svg><span>pause</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#pause-fill"/></svg><span>pause-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#stop"/></svg><span>stop</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#stop-fill"/></svg><span>stop-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#random"/></svg><span>random</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#power"/></svg><span>power</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#camera"/></svg><span>camera</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#camera-fill"/></svg><span>camera-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#film"/></svg><span>film</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#film-fill"/></svg><span>film-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#video"/></svg><span>video</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#video-fill"/></svg><span>video-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#browser"/></svg><span>browser</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#browser-fill"/></svg><span>browser-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#laptop"/></svg><span>laptop</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#laptop-fill"/></svg><span>laptop-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#desktop"/></svg><span>desktop</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#desktop-fill"/></svg><span>desktop-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#tv"/></svg><span>tv</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#tv-fill"/></svg><span>tv-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#mobile-v"/></svg><span>mobile-v</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#mobile-v-fill"/></svg><span>mobile-v-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#mobile-h"/></svg><span>mobile-h</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#mobile-h-fill"/></svg><span>mobile-h-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#tablet-v"/></svg><span>tablet-v</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#tablet-v-fill"/></svg><span>tablet-v-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#tablet-h"/></svg><span>tablet-h</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#tablet-h-fill"/></svg><span>tablet-h-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#headphone"/></svg><span>headphone</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#headphone-fill"/></svg><span>headphone-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#headset"/></svg><span>headset</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#headset-fill"/></svg><span>headset-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#music"/></svg><span>music</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#music-fill"/></svg><span>music-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#volume-on"/></svg><span>volume-on</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#volume-on-fill"/></svg><span>volume-on-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#volume-off"/></svg><span>volume-off</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#volume-off-fill"/></svg><span>volume-off-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#soundwave"/></svg><span>soundwave</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#speaker"/></svg><span>speaker</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#speaker-fill"/></svg><span>speaker-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#usb-drive"/></svg><span>usb-drive</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#usb-drive-fill"/></svg><span>usb-drive-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#signal-stream"/></svg><span>signal-stream</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#signal-stream-fill"/></svg><span>signal-stream-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#signal-wifi"/></svg><span>signal-wifi</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#signal-wifi-fill"/></svg><span>signal-wifi-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#aperture"/></svg><span>aperture</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#aperture-fill"/></svg><span>aperture-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#exposure"/></svg><span>exposure</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#exposure-fill"/></svg><span>exposure-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#flash-on"/></svg><span>flash-on</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#flash-on-fill"/></svg><span>flash-on-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#flash-off"/></svg><span>flash-off</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#flash-off-fill"/></svg><span>flash-off-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#flash-auto"/></svg><span>flash-auto</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#flash-auto-fill"/></svg><span>flash-auto-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#iso"/></svg><span>iso</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#iso-fill"/></svg><span>iso-fill</span></li>
                </ul>

                <h2>Kitchen Icons</h2>
                <ul class="icons-list list-custom theme-default ease-1st-bg ease-2nd-all">
                    <li><svg class="icon icon-xxl"><use xlink:href="#chef"/></svg><span>chef</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#chef-fill"/></svg><span>chef-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#mitten"/></svg><span>mitten</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#mitten-fill"/></svg><span>mitten-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#fork"/></svg><span>fork</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#fork-fill"/></svg><span>fork-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#spoon"/></svg><span>spoon</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#spoon-fill"/></svg><span>spoon-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#knife"/></svg><span>knife</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#knife-fill"/></svg><span>knife-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#fork-spoon"/></svg><span>fork-spoon</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#fork-spoon-fill"/></svg><span>fork-spoon-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#fork-knife"/></svg><span>fork-knife</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#fork-knife-fill"/></svg><span>fork-knife-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#plate"/></svg><span>plate</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#plate-fill"/></svg><span>plate-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#cup"/></svg><span>cup</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#cup-fill"/></svg><span>cup-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#coffee"/></svg><span>coffee</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#coffee-fill"/></svg><span>coffee-fill</span></li>
                </ul>

                <h2>Real Estate Icons</h2>
                <ul class="icons-list list-custom theme-default ease-1st-bg ease-2nd-all">
                    <li><svg class="icon icon-xxl"><use xlink:href="#house"/></svg><span>house</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#house-fill"/></svg><span>house-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#house-check"/></svg><span>house-check</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#house-check-fill"/></svg><span>house-check-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#house-floor"/></svg><span>house-floor</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#house-floor-fill"/></svg><span>house-floor-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#house-heat"/></svg><span>house-heat</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#house-heat-fill"/></svg><span>house-heat-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#house-surface"/></svg><span>house-surface</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#house-surface-fill"/></svg><span>house-surface-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#floor-plan"/></svg><span>floor-plan</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#garage"/></svg><span>garage</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#garage-fill"/></svg><span>garage-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#balcony"/></svg><span>balcony</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#bath"/></svg><span>bath</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#bath-fill"/></svg><span>bath-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#bed"/></svg><span>bed</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#bed-fill"/></svg><span>bed-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#wc"/></svg><span>wc</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#wc-fill"/></svg><span>wc-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#building"/></svg><span>building</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#building-fill"/></svg><span>building-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#buildings"/></svg><span>buildings</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#buildings-fill"/></svg><span>buildings-fill</span></li>
                </ul>

                <h2>Weather Icons</h2>
                <ul class="icons-list list-custom theme-default ease-1st-bg ease-2nd-all">
                    <li><svg class="icon icon-xxl"><use xlink:href="#cloud"/></svg><span>cloud</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#cloud-fill"/></svg><span>cloud-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#clouds"/></svg><span>clouds</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#clouds-fill"/></svg><span>clouds-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#bolt"/></svg><span>bolt</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#bolt-fill"/></svg><span>bolt-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#cloud-bolt"/></svg><span>cloud-bolt</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#cloud-bolt-fill"/></svg><span>cloud-bolt-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#cloud-fog"/></svg><span>cloud-fog</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#cloud-fog-fill"/></svg><span>cloud-fog-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#cloud-moon"/></svg><span>cloud-moon</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#cloud-moon-fill"/></svg><span>cloud-moon-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#cloud-sun"/></svg><span>cloud-sun</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#cloud-sun-fill"/></svg><span>cloud-sun-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#cloud-wind"/></svg><span>cloud-wind</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#cloud-wind-fill"/></svg><span>cloud-wind-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#fog"/></svg><span>fog</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#moon"/></svg><span>moon</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#moon-fill"/></svg><span>moon-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#rain"/></svg><span>rain</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#rain-fill"/></svg><span>rain-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#rain-heavy"/></svg><span>rain-heavy</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#rain-heavy-fill"/></svg><span>rain-heavy-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#rain-snow"/></svg><span>rain-snow</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#rain-snow-fill"/></svg><span>rain-snow-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#storm"/></svg><span>storm</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#storm-fill"/></svg><span>storm-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#snow"/></svg><span>snow</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#sun"/></svg><span>sun</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#sun-fill"/></svg><span>sun-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#sunrise"/></svg><span>sunrise</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#sunrise-fill"/></svg><span>sunrise-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#sunset"/></svg><span>sunset</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#sunset-fill"/></svg><span>sunset-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#sunset"/></svg><span>sunset</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#sunset-fill"/></svg><span>sunset-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#cold"/></svg><span>cold</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#cold-fill"/></svg><span>cold-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#temperature"/></svg><span>temperature</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#temperature-fill"/></svg><span>temperature-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#wind"/></svg><span>wind</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#wind-sock"/></svg><span>wind-sock</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#wind-sock-fill"/></svg><span>wind-sock-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#tornado"/></svg><span>tornado</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#tornado-fill"/></svg><span>tornado-fill</span></li>
                </ul>

                <h2>Commerce Icons</h2>
                <ul class="icons-list list-custom theme-default ease-1st-bg ease-2nd-all">
                    <li><svg class="icon icon-xxl"><use xlink:href="#tag"/></svg><span>tag</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#tag-fill"/></svg><span>tag-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#tags"/></svg><span>tags</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#tags-fill"/></svg><span>tags-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#ticket"/></svg><span>ticket</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#ticket-fill"/></svg><span>ticket-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#barcode"/></svg><span>barcode</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#credit-card"/></svg><span>credit-card</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#credit-card-fill"/></svg><span>credit-card-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#credit-card-check"/></svg><span>credit-card-check</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#credit-card-check-fill"/></svg><span>credit-card-check-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#shopping-bag"/></svg><span>shopping-bag</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#shopping-bag-fill"/></svg><span>shopping-bag-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#shopping-cart"/></svg><span>shopping-cart</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#shopping-cart-fill"/></svg><span>shopping-cart-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#shopping-basket"/></svg><span>shopping-basket</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#shopping-basket-fill"/></svg><span>shopping-basket-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#store"/></svg><span>store</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#store-fill"/></svg><span>store-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#coin"/></svg><span>coin</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#coin-fill"/></svg><span>coin-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#coins"/></svg><span>coins</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#coins-fill"/></svg><span>coins-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#money"/></svg><span>money</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#money-fill"/></svg><span>money-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#moneys"/></svg><span>moneys</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#moneys-fill"/></svg><span>moneys-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#money-dollar"/></svg><span>money-dollar</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#money-dollar-fill"/></svg><span>money-dollar-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#money-euro"/></svg><span>money-euro</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#money-euro-fill"/></svg><span>money-euro-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#money-lira"/></svg><span>money-lira</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#money-lira-fill"/></svg><span>money-lira-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#wallet"/></svg><span>wallet</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#wallet-fill"/></svg><span>wallet-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#bank"/></svg><span>bank</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#bank-fill"/></svg><span>bank-fill</span></li>
                </ul>

                <h2>Files Icons</h2>
                <ul class="icons-list list-custom theme-default ease-1st-bg ease-2nd-all">
                    <li><svg class="icon icon-xxl"><use xlink:href="#file"/></svg><span>file</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#file-fill"/></svg><span>file-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#files"/></svg><span>files</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#files-fill"/></svg><span>files-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#file-no"/></svg><span>file-no</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#file-no-fill"/></svg><span>file-no-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#file-check"/></svg><span>file-check</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#file-check-fill"/></svg><span>file-check-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#file-minus"/></svg><span>file-minus</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#file-minus-fill"/></svg><span>file-minus-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#file-plus"/></svg><span>file-plus</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#file-plus-fill"/></svg><span>file-plus-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#file-remove"/></svg><span>file-remove</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#file-remove-fill"/></svg><span>file-remove-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#file-search"/></svg><span>file-search</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#file-search-fill"/></svg><span>file-search-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#file-download"/></svg><span>file-download</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#file-download-fill"/></svg><span>file-download-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#file-upload"/></svg><span>file-upload</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#file-upload-fill"/></svg><span>file-upload-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#file-write"/></svg><span>file-write</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#file-write-fill"/></svg><span>file-write-fill</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#file-txt"/></svg><span>file-txt</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#file-txt-fill"/></svg><span>file-txt-fill</span></li>
                    <li class="half-opacity"><i class="icon icon-xxl icon-file-avi"></i><span>file-avi</span></li>
                    <li class="half-opacity"><i class="icon icon-xxl icon-file-doc"></i><span>file-doc</span></li>
                    <li class="half-opacity"><i class="icon icon-xxl icon-file-docx"></i><span>file-docx</span></li>
                    <li class="half-opacity"><i class="icon icon-xxl icon-file-gif"></i><span>file-gif</span></li>
                    <li class="half-opacity"><i class="icon icon-xxl icon-file-jpg"></i><span>file-jpg</span></li>
                    <li class="half-opacity"><i class="icon icon-xxl icon-file-mp3"></i><span>file-mp3</span></li>
                    <li class="half-opacity"><i class="icon icon-xxl icon-file-mpg"></i><span>file-mpg</span></li>
                    <li class="half-opacity"><i class="icon icon-xxl icon-file-pdf"></i><span>file-pdf</span></li>
                    <li class="half-opacity"><i class="icon icon-xxl icon-file-png"></i><span>file-png</span></li>
                    <li class="half-opacity"><i class="icon icon-xxl icon-file-ppt"></i><span>file-ppt</span></li>
                    <li class="half-opacity"><i class="icon icon-xxl icon-file-pptx"></i><span>file-pptx</span></li>
                    <li class="half-opacity"><i class="icon icon-xxl icon-file-rar"></i><span>file-rar</span></li>
                    <li class="half-opacity"><i class="icon icon-xxl icon-file-svg"></i><span>file-svg</span></li>
                    <li class="half-opacity"><i class="icon icon-xxl icon-file-tiff"></i><span>file-tiff</span></li>
                    <li class="half-opacity"><i class="icon icon-xxl icon-file-xls"></i><span>file-xls</span></li>
                    <li class="half-opacity"><i class="icon icon-xxl icon-file-xlsx"></i><span>file-xlsx</span></li>
                    <li class="half-opacity"><i class="icon icon-xxl icon-file-xml"></i><span>file-xml</span></li>
                    <li class="half-opacity"><i class="icon icon-xxl icon-file-zip"></i><span>file-zip</span></li>
                </ul>

                <h2>Social Icons</h2>
                <ul class="icons-list list-custom theme-default ease-1st-bg ease-2nd-all">
                    <li><svg class="icon icon-xxl"><use xlink:href="#behance"/></svg><span>behance</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#dribbble"/></svg><span>dribbble</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#facebook"/></svg><span>facebook</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#github"/></svg><span>github</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#google"/></svg><span>google</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#instagram"/></svg><span>instagram</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#linkedin"/></svg><span>linkedin</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#pinterest"/></svg><span>pinterest</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#snapchat"/></svg><span>snapchat</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#tumblr"/></svg><span>tumblr</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#twitter"/></svg><span>twitter</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#whatsapp"/></svg><span>whatsapp</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#youtube"/></svg><span>youtube</span></li>
                </ul>

                <h2>Brands Icons</h2>
                <ul class="icons-list list-custom theme-default ease-1st-bg ease-2nd-all">
                    <li><svg class="icon icon-xxl"><use xlink:href="#android"/></svg><span>android</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#apple"/></svg><span>apple</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#appstore"/></svg><span>appstore</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#google-play"/></svg><span>google-play</span></li>
                    <li><svg class="icon icon-xxl"><use xlink:href="#microsoft"/></svg><span>microsoft</span></li>
                </ul>

            </div>
        </div>
    </div>
</main>
