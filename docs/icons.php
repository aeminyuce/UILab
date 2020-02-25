<!DOCTYPE html>
<html lang="en">

<head>
    <title>UI Lab, Icons</title>
    <meta name="keywords" content="uilab, responsive, design system, css, javascript, icons">
    <meta name="description" content="CSS & JavaScript powered responsive design system." />
    <meta name="author" content="A. Emin Yuce"/>

    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
    <link rel="icon" href="img/favicon.ico" />

    <!--[if IE]><meta https-equiv="X-UA-Compatible" content="IE=edge" /><![endif]-->
    <!--[if lt IE 10]><script>window.navigate('http://outdatedbrowser.com/tr');</script><![endif]-->

    <!-- CSS Tools -->
    <link rel="stylesheet" href="../css/reset.css"/>

    <link rel="stylesheet" href="../css/alerts.css"/>
    <link rel="stylesheet" href="../css/buttons.css"/>
    <link rel="stylesheet" href="../css/borders.css"/>
    <link rel="stylesheet" href="../css/effects.css"/>
    <link rel="stylesheet" href="../css/grid.css"/>
    <link rel="stylesheet" href="../css/helpers.css"/>
    <link rel="stylesheet" href="../css/icons.css"/>
    <link rel="stylesheet" href="../css/margins.css"/>
    <link rel="stylesheet" href="../css/paddings.css"/>
    <link rel="stylesheet" href="../css/scrollbar.css"/>
    <link rel="stylesheet" href="../css/sticky-header.css"/>
    <link rel="stylesheet" href="../css/typography.css"/>
    <link rel="stylesheet" href="../css/tooltip.css"/>
    <link rel="stylesheet" href="../css/top-button.css"/>

    <link rel="stylesheet" href="../css/themes.css"/>
    <link rel="stylesheet" href="../css/darkmode.css"/>

    <!-- Javascript Tools -->
    <script src="../js/selector.js"></script>
    <script src="../js/events.js"></script>
    <script src="../js/user-agents.js"></script>

    <script src="../js/alerts.js"></script>
    <script src="../js/sticky-header.js"></script>
    <script src="../js/themes.js"></script>
    <script src="../js/tooltip.js"></script>
    <script src="../js/top-button.js"></script>

    <!-- custom CSS -->
    <style>

        body { background-color: #e8e8e8; }

        .icons-list { margin: -1px; display: flex; flex-wrap: wrap; justify-content: center; }
        .icons-list:not(:last-child) { margin-bottom: 30px; }
        .icons-list li { color: #4a515a; max-width: 160px; background-color: #f7f7f7; padding: 15px 10px; margin: 1px; border-radius: 6px; cursor: pointer; flex-grow: 1; }
        html:not(.mobile) .icons-list li:hover { background-color: #fff; }
        .icons-list li > span { content: attr(data-name); color: #666; font-size: 13px; white-space: nowrap; text-overflow: ellipsis; line-height: normal; min-width: 129px; width: 100%; margin-top: 10px; overflow: hidden; display: block; }

        .icons-list li svg.icon { background: #e8e2e2; border-radius: 6px; }

        @media (prefers-color-scheme: dark) {
            .icons-list li { color: #fff; background-color: #2f343e; }
            html:not(.mobile) .icons-list li:hover { background-color: #3c424d; }
            .icons-list li > span { color: #d0d0d0; }

            .icons-list li svg.icon { background: #252a33; }
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

</head>

<body>

    <!-- header -->
    <header class="container theme-default ui-dark">
        <div class="row theme-default2 ui-border border-t border-dual">
            <div class="col-12">
                <a href="index.html" class="btn btn-lg btn-square circle ease-btn margin-10-r"><i class="icon no-opacity icon-long-arrow-left"></i></a>
                <h1 class="x-large inline-block">UI Lab, Icons</h1>
            </div>
        </div>
    </header>

    <!-- documentation examples -->
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
                        <li class="half-opacity"><i class="icon icon-xxl icon-pen"></i><span>pen</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-pen-write"></i><span>pen-write</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-pencil"></i><span>pencil</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-pencil-write"></i><span>pencil-write</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-phone"></i><span>phone</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-phone-call"></i><span>phone-call</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-print"></i><span>print</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-puzzle"></i><span>puzzle</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-radiation"></i><span>radiation</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-recycle"></i><span>recycle</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-undo"></i><span>undo</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-redo"></i><span>redo</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-reply"></i><span>reply</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-required"></i><span>required</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-save"></i><span>save</span></li>
                        <li><svg class="icon icon-xxl"><use xlink:href="#search"/></svg><span>search</span></li>
                        <li><svg class="icon icon-xxl"><use xlink:href="#search-minus"/></svg><span>search-minus</span></li>
                        <li><svg class="icon icon-xxl"><use xlink:href="#search-plus"/></svg><span>search-plus</span></li>
                        <li><svg class="icon icon-xxl"><use xlink:href="#search-star"/></svg><span>search-star</span></li>
                        <li><svg class="icon icon-xxl"><use xlink:href="#search-user"/></svg><span>search-user</span></li>
                        <li><svg class="icon icon-xxl"><use xlink:href="#search-marker"/></svg><span>search-marker</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-setting"></i><span>setting</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-settings"></i><span>settings</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-settings-v"></i><span>settings-v</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-share"></i><span>share</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-send"></i><span>send</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-sign-in"></i><span>sign-in</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-sign-out"></i><span>sign-out</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-import"></i><span>import</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-export"></i><span>export</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-sort"></i><span>sort</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-sort-down"></i><span>sort-down</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-sort-up"></i><span>sort-up</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-star"></i><span>star</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-star-half"></i><span>star-half</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-star-fill"></i><span>star-fill</span></li>
                        <li><svg class="icon icon-xxl"><use xlink:href="#sync"/></svg><span>sync</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-table"></i><span>table</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-trash"></i><span>trash</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-trash-fill"></i><span>trash-fill</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-wrench"></i><span>wrench</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-car"></i><span>car</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-bus"></i><span>bus</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-truck"></i><span>truck</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-truck-fill"></i><span>truck-fill</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-tachometer"></i><span>tachometer</span></li>
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
                        <li class="half-opacity"><i class="icon icon-xxl icon-touch"></i><span>touch</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-swipe"></i><span>swipe</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-swipe-down"></i><span>swipe-down</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-swipe-left"></i><span>swipe-left</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-swipe-right"></i><span>swipe-right</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-swipe-up"></i><span>swipe-up</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-zoom"></i><span>zoom</span></li>
                    </ul>

                    <h2>Media Icons</h2>
                    <ul class="icons-list list-custom theme-default ease-1st-bg ease-2nd-all">
                        <li class="half-opacity"><i class="icon icon-xxl icon-backward"></i><span>backward</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-play"></i><span>play</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-forward"></i><span>forward</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-pause"></i><span>pause</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-stop"></i><span>stop</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-shuffle"></i><span>shuffle</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-power"></i><span>power</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-camera"></i><span>camera</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-film"></i><span>film</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-video"></i><span>video</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-browser"></i><span>browser</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-laptop"></i><span>laptop</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-desktop"></i><span>desktop</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-tv"></i><span>tv</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-mobile-v"></i><span>mobile-v</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-mobile-h"></i><span>mobile-h</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-mobile-alt-v"></i><span>mobile-alt-v</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-mobile-alt-h"></i><span>mobile-alt-h</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-tablet-v"></i><span>tablet-v</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-tablet-h"></i><span>tablet-h</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-tablet-alt-v"></i><span>alt-v</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-tablet-alt-h"></i><span>alt-h</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-headphone"></i><span>headphone</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-headset"></i><span>headset</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-music"></i><span>music</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-volume-on"></i><span>volume-on</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-volume-off"></i><span>volume-off</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-soundwave"></i><span>soundwave</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-speaker"></i><span>speaker</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-usb-drive"></i><span>usb-drive</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-signal-stream"></i><span>signal-stream</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-signal-wifi"></i><span>signal-wifi</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-aperture"></i><span>aperture</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-exposure"></i><span>exposure</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-flash-on"></i><span>flash-on</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-flash-off"></i><span>flash-off</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-flash-auto"></i><span>flash-auto</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-iso"></i><span>iso</span></li>
                    </ul>

                    <h2>Kitchen Icons</h2>
                    <ul class="icons-list list-custom theme-default ease-1st-bg ease-2nd-all">
                        <li class="half-opacity"><i class="icon icon-xxl icon-fork-spoon"></i><span>fork-spoon</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-fork"></i><span>fork</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-spoon"></i><span>spoon</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-coffee"></i><span>coffee</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-cup"></i><span>cup</span></li>
                    </ul>

                    <h2>Real Estate Icons</h2>
                    <ul class="icons-list list-custom theme-default ease-1st-bg ease-2nd-all">
                        <li class="half-opacity"><i class="icon icon-xxl icon-house"></i><span>house</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-house-check"></i><span>house-check</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-house-floor"></i><span>house-floor</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-house-heat"></i><span>house-heat</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-house-surface"></i><span>house-surface</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-floor-plan"></i><span>floor-plan</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-garage"></i><span>garage</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-balcony"></i><span>balcony</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-bath"></i><span>bath</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-bed"></i><span>bed</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-building"></i><span>building</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-buildings"></i><span>buildings</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-wc"></i><span>wc</span></li>
                    </ul>

                    <h2>Weather Icons</h2>
                    <ul class="icons-list list-custom theme-default ease-1st-bg ease-2nd-all">
                        <li class="half-opacity"><i class="icon icon-xxl icon-cloud"></i><span>cloud</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-clouds"></i><span>clouds</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-bolt"></i><span>bolt</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-cloud-bolt"></i><span>cloud-bolt</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-cloud-fog"></i><span>cloud-fog</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-cloud-moon"></i><span>cloud-moon</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-cloud-sun"></i><span>cloud-sun</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-cloud-wind"></i><span>cloud-wind</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-fog"></i><span>fog</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-moon"></i><span>moon</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-rain"></i><span>rain</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-rain-heavy"></i><span>rain-heavy</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-rain-snow"></i><span>rain-snow</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-snow"></i><span>snow</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-sun"></i><span>sun</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-sunrise"></i><span>sunrise</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-sunset"></i><span>sunset</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-cold"></i><span>cold</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-temperature"></i><span>temperature</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-wind"></i><span>wind</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-wind-sock"></i><span>wind-sock</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-storm"></i><span>storm</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-tornado"></i><span>tornado</span></li>
                    </ul>

                    <h2>Commerce Icons</h2>
                    <ul class="icons-list list-custom theme-default ease-1st-bg ease-2nd-all">
                        <li class="half-opacity"><i class="icon icon-xxl icon-tag"></i><span>tag</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-tags"></i><span>tags</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-ticket"></i><span>ticket</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-barcode"></i><span>barcode</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-credit-card"></i><span>credit-card</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-credit-card-check"></i><span>credit-card-check</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-shopping-bag"></i><span>shopping-bag</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-shopping-cart"></i><span>shopping-cart</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-shopping-cart-fill"></i><span>shopping-cart-fill</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-shopping-basket"></i><span>shopping-basket</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-shopping-basket-fill"></i><span>shopping-basket-fill</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-store"></i><span>store</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-coin"></i><span>coin</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-coins"></i><span>coins</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-money"></i><span>money</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-moneys"></i><span>moneys</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-wallet"></i><span>wallet</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-bank"></i><span>bank</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-money-dollar"></i><span>money-dollar</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-money-euro"></i><span>money-euro</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-money-lira"></i><span>money-lira</span></li>
                    </ul>

                    <h2>Files Icons</h2>
                    <ul class="icons-list list-custom theme-default ease-1st-bg ease-2nd-all">
                        <li class="half-opacity"><i class="icon icon-xxl icon-file"></i><span>file</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-files"></i><span>files</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-file-no"></i><span>file-no</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-file-check"></i><span>file-check</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-file-minus"></i><span>file-minus</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-file-plus"></i><span>file-plus</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-file-remove"></i><span>file-remove</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-file-search"></i><span>file-search</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-file-download"></i><span>file-download</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-file-upload"></i><span>file-upload</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-file-write"></i><span>file-write</span></li>
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
                        <li class="half-opacity"><i class="icon icon-xxl icon-file-txt"></i><span>file-txt</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-file-xls"></i><span>file-xls</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-file-xlsx"></i><span>file-xlsx</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-file-xml"></i><span>file-xml</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-file-zip"></i><span>file-zip</span></li>
                    </ul>

                    <h2>Social Icons</h2>
                    <ul class="icons-list list-custom theme-default ease-1st-bg ease-2nd-all">
                        <li class="half-opacity"><i class="icon icon-xxl icon-behance"></i><span>behance</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-dribbble"></i><span>dribbble</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-facebook"></i><span>facebook</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-github"></i><span>github</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-google"></i><span>google</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-instagram"></i><span>instagram</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-linkedin"></i><span>linkedin</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-pinterest"></i><span>pinterest</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-snapchat"></i><span>snapchat</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-tumblr"></i><span>tumblr</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-twitter"></i><span>twitter</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-whatsapp"></i><span>whatsapp</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-youtube"></i><span>youtube</span></li>
                    </ul>

                    <h2>Brands Icons</h2>
                    <ul class="icons-list list-custom theme-default ease-1st-bg ease-2nd-all">
                        <li class="half-opacity"><i class="icon icon-xxl icon-andorid"></i><span>andorid</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-apple"></i><span>apple</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-appstore"></i><span>appstore</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-google-play"></i><span>google-play</span></li>
                        <li class="half-opacity"><i class="icon icon-xxl icon-microsoft"></i><span>microsoft</span></li>
                    </ul>

                </div>
            </div>
        </div>
    </main>

    <?php include ('../icons/general.php'); ?>

</body>
</html>
