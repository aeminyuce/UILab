<!-- custom JS -->
<script src="../js/custom/product-listing.js?v=<?php echo filemtime('../js/custom/product-listing.js'); ?>"></script>

<main class="container no-gutter">
    <div class="fixed">
        <div class="col-static no-fluid padding-30-v padding-15-h md-no-padding-h">

            <div class="col-250 padding-10 hidden-md">
                <div class="add-mobile-menu-r">

                    <div class="card padding-15 round shadow-lg">
                        <div data-ui-src="json/headphones.json" data-ui-val="name" class="ui-autocomplete text text-icon-both round no-border ui-theme-gray ui-fill-light-300 ui-ease-form has-clear">
                            <svg class="icon text-icon-l"><use href="#search"/></svg>
                            <button type="button" class="clear-form">
                                <svg class="icon"><use href="#remove"/></svg>
                            </button>
                            <input type="text" placeholder="Search" autocomplete="off">
                        </div>

                        <span class="sp-25"></span>

                        <h5 class="margin-15-b font-color-black-50">CATEGORIES</h5>
                        <ul class="list-unstyled list-spacer-10">
                            <li><a href="#">Headphones</a></li>
                            <li>
                                <a href="#"><b>Over-Ear Headphones</b></a>
                                <ul class="list-unstyled hoverline-2nd padding-15-l">
                                    <li><a href="#">Sony</a></li>
                                    <li><a href="#">Logitech</a></li>
                                    <li><a href="#">JBL</a></li>
                                    <li><a href="#">Beats</a></li>
                                    <li><a href="#">Pioneer</a></li>
                                    <li><a href="#">Philips</a></li>
                                    <li><a href="#">Sony</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div class="card round shadow-lg ui-theme-sub">

                        <div class="padding-15 md-align-c border-b">
                            <h5 class="margin-10-b font-color-black-50">COLORS</h5>
                            <label class="custom">
                                <span class="check-custom no-border circle ui-ease-form" style="background: hsl(358, 86%, 54%);">
                                    <input type="checkbox" checked>
                                    <i class="state circle"></i>
                                </span>
                            </label>
                            <label class="custom">
                                <span class="check-custom no-border circle ui-ease-form" style="background: hsl(296, 73%, 53%);">
                                    <input type="checkbox" checked>
                                    <i class="state circle"></i>
                                </span>
                            </label>
                            <label class="custom">
                                <span class="check-custom no-border circle ui-ease-form" style="background: hsl(206, 73%, 50%);">
                                    <input type="checkbox" checked>
                                    <i class="state circle"></i>
                                </span>
                            </label>
                            <label class="custom">
                                <span class="check-custom no-border circle ui-ease-form" style="background: hsl(17, 80%, 57%);">
                                    <input type="checkbox">
                                    <i class="state circle"></i>
                                </span>
                            </label>
                            <label class="custom">
                                <span class="check-custom no-border circle ui-ease-form" style="background: hsl(48, 85%, 60%);">
                                    <input type="checkbox">
                                    <i class="state circle"></i>
                                </span>
                            </label>

                            <span class="clearfix hidden-md"></span>

                            <label class="custom">
                                <span class="check-custom no-border circle ui-ease-form" style="background: hsl(218, 16%, 10%);">
                                    <input type="checkbox" checked>
                                    <i class="state circle"></i>
                                </span>
                            </label>
                            <label class="custom">
                                <span class="check-custom border circle ui-ease-form" style="background: hsl(0, 0%, 77%);">
                                    <input type="checkbox" checked>
                                    <i class="state circle border" style="background: hsl(0, 0%, 96%);"></i>
                                </span>
                            </label>
                        </div>

                        <div class="padding-15 border-b">

                            <h5 class="margin-10-b font-color-black-50">PROMOTIONS</h5>
                            <label class="custom block">
                                <span class="switch-custom right round ui-ease-form">
                                    <input type="checkbox" checked>
                                    <i class="state ui-fill-dark-100"></i>
                                </span>
                                <svg class="icon margin-5-r"><use href="#truck"/></svg>
                                Fast Delivery
                            </label>
                            <span class="sp-5"></span>
                            <label class="custom block">
                                <span class="switch-custom right round ui-ease-form">
                                    <input type="checkbox" checked>
                                    <i class="state ui-fill-dark-100"></i>
                                </span>
                                <svg class="icon margin-5-r"><use href="#check-badge"/></svg>
                                Deals
                            </label>

                        </div>

                        <div class="padding-15 border-b">

                            <h5 class="margin-10-b font-color-black-50">CONNECTIONS</h5>
                            <label class="custom block">
                                <span class="check-custom round ui-ease-form">
                                    <input type="checkbox" checked>
                                    <i class="state ui-fill-dark-100"></i>
                                </span>
                                Wireless <span class="font-color-black-muted">4</span>
                            </label>
                            <label class="custom block">
                                <span class="check-custom round ui-ease-form">
                                    <input type="checkbox" checked>
                                    <i class="state ui-fill-dark-100"></i>
                                </span>
                                Bluetooth <span class="font-color-black-muted">11</span>
                            </label>
                            <label class="custom block">
                                <span class="check-custom round ui-ease-form">
                                    <input type="checkbox" checked>
                                    <i class="state ui-fill-dark-100"></i>
                                </span>
                                Wired <span class="font-color-black-muted">9</span>
                            </label>
                            <label class="custom block">
                                <span class="check-custom round ui-ease-form">
                                    <input type="checkbox">
                                    <i class="state ui-fill-dark-100"></i>
                                </span>
                                Radio Channel <span class="font-color-black-muted">17</span>
                            </label>

                            <span class="sp-10"></span>
                            <button class="btn btn-sm circle ui-ease-btn">
                                See All
                                <svg class="icon margin-5-l"><use href="#angle-down"/></svg>
                            </button>

                        </div>

                        <div class="padding-15">
                            <button type="submit" class="btn btn-lg block round ui-fill-dark-100 ui-ease-btn"><b>SEARCH</b></button>
                        </div>

                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12 sm-no-padding-t">

                    <div class="card margin-10-b round shadow-lg">
                        <div class="row row-gap-lg sm-fluid">
                            <div class="col-12 border-b">
                                <h4>
                                    <svg class="icon icon-lg"><use href="#history"/></svg>
                                    <span class="inline-block">
                                        Price History, <span class="font-color-black-muted">Over-Ear Headphones</span>
                                    </span>
                                </h4>
                            </div>
                            <div class="col-8">
                                <div class="line-charts ui-ease-line-charts" data-ui-x="1st Week,2nd Week,3rd Week,4th Week">
                                    <ul class="lines" data-ui-type="curved dashed">
                                        <li data-ui-y="156"></li>
                                        <li data-ui-y="180"></li>
                                        <li data-ui-y="144"></li>
                                        <li data-ui-y="157"></li>
                                    </ul>
                                    <ul class="lines" data-ui-type="curved filled">
                                        <li data-ui-y="134"></li>
                                        <li data-ui-y="199"></li>
                                        <li data-ui-y="120"></li>
                                        <li data-ui-y="174"></li>
                                    </ul>
                                </div>
                                <div class="align-c">
                                    Last 4 Weeks
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="row no-fluid margin-10-b">
                                    <div class="col-6">
                                        <span class="font-color-black-muted">Highest:</span>
                                        <span class="largest block">$199</span>
                                    </div>
                                    <div class="col-6">
                                        <span class="font-color-black-muted">Lowest:</span>
                                        <span class="largest block">$120</span>
                                    </div>
                                </div>
                                <svg class="icon icon-sm margin-5-r margin-2-b"><use href="#chart-line"/></svg>
                                <span class="large">Current prices <b>12% lower</b> than, average prices!</span>
                                <ul class="list-unstyled font-color-black-muted margin-15-t inline-block-2nd">
                                    <li>
                                        <b class="circle padding-5 margin-4-l margin-5-r" style="background: hsl(30, 100%, 63%);"></b>
                                        <span>Headphones Averages</span>
                                    </li>
                                    <li>
                                        <b class="circle padding-5 margin-4-l margin-5-r" style="background: hsl(204, 82%, 57%);"></b>
                                        <span>Over-Ear Headphones Averages</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="row sm-fluid sm-align-c">
                        <div class="col-6">
                            <span class="sp-5 hidden-sm"></span>
                            <span class="large">Found <b>47</b> and displaying <b>9</b> products.</span>
                        </div>
                        <div class="col-6 align-r sm-no-padding-t">
                            <div class="select align-l round form-inline no-border ui-theme-gray ui-fill-light-300 ui-ease-form">
                                <svg class="icon"><use href="#angle-down"/></svg>
                                <select>
                                    <option value="1" checked>Sort by</option>
                                    <option value="2">Top Rated</option>
                                    <option value="3">Price (Low to High)</option>
                                    <option value="4">Price (High to Low)</option>
                                </select>
                            </div>
                            <div class="select align-l round form-inline no-border ui-theme-gray ui-fill-light-300 ui-ease-form">
                                <svg class="icon"><use href="#angle-down"/></svg>
                                <select>
                                    <option value="12" checked>Show 9</option>
                                    <option value="24">Show 18</option>
                                    <option value="36">Show 27</option>
                                </select>
                            </div>
                            <span class="sp-10 visible-xs"></span>
                            <span class="align-c ui-theme-sub ui-ease-1st-btn">
                                <button class="btn btn-square round ui-fill-dark-100">
                                    <svg class="icon"><use href="#grid-column"/></svg>
                                </button>
                                <button class="btn btn-square round">
                                    <svg class="icon"><use href="#grid-row"/></svg>
                                </button>
                                <button class="btn btn-square round show-mobile-menu-r visible-md">
                                    <svg class="icon"><use href="#bars-right"/></svg>
                                </button>
                            </span>
                        </div>
                    </div>

                    <div class="products-list row hover-shadow-2nd ui-ease-2nd-layout hover-t-2nd">
                        <div class="col-4 col-sm-6">
                            <a class="full-h padding-15 no-padding-t card round shadow-lg ui-ease-layout" href="#">
                                <span class="photo-slider margin-20-b">
                                    <svg class="slider-loader icon"><use href="#loader-line"/></svg>
                                    <img
                                        src="img/product_01.png" alt=""
                                        data-ui-src="img/product_01.png,img/product_02.png,img/product_03.png"
                                    >
                                    <button title="Prev" class="prev btn btn-ghost btn-square round ui-ease-btn">
                                        <svg class="icon"><use href="#angle-left"/></svg>
                                    </button>
                                    <button title="Next" class="next btn btn-ghost btn-square round ui-ease-btn">
                                        <svg class="icon"><use href="#angle-right"/></svg>
                                    </button>
                                    <span class="photo-slider-nav ui-ease-1st-layout"></span>
                                </span>
                                <span class="x-large">Red</span>
                                <span class="font-color-black-50 block margin-10-v">beats by dr. dre Studio 3 Wireless Headphones</span>
                                <b class="xx-large">$164.98</b>
                                <span class="block">
                                    <svg class="icon icon-sm margin-5-r"><use href="#truck"/></svg> Fast Delivery
                                </span>
                                <ul class="list-inline margin-15-v right">
                                    <li class="circle padding-5 border-dual" style="border-color: hsl(358, 86%, 54%);"></li>
                                    <li class="circle padding-5 border-dual" style="border-color: hsl(296, 73%, 53%);"></li>
                                    <li class="circle padding-5 border-dual" style="border-color: hsl(206, 73%, 50%);"></li>
                                </ul>
                                <span class="left padding-15-v icons-xs">
                                    <svg class="icon font-color-yellow"><use href="#star-fill"/></svg>
                                    <b class="font-color-black-50">4.8</b>
                                    <span class="font-color-black-muted">
                                        <svg class="icon margin-5-l"><use href="#comment"/></svg> 24
                                    </span>
                                </span>
                            </a>
                        </div>
                        <div class="col-4 col-sm-6">
                            <a class="full-h padding-15 no-padding-t card round shadow-lg ui-ease-layout" href="#">
                                <span class="photo-slider margin-20-b">
                                    <svg class="slider-loader icon"><use href="#loader-line"/></svg>
                                    <img
                                        src="img/product_02.png" alt=""
                                        data-ui-src="img/product_02.png,img/product_04.png"
                                    >
                                    <button title="Prev" class="prev btn btn-ghost btn-square round ui-ease-btn">
                                        <svg class="icon"><use href="#angle-left"/></svg>
                                    </button>
                                    <button title="Next" class="next btn btn-ghost btn-square round ui-ease-btn">
                                        <svg class="icon"><use href="#angle-right"/></svg>
                                    </button>
                                    <span class="photo-slider-nav ui-ease-1st-layout"></span>
                                </span>
                                <span class="x-large">Purple</span>
                                <span class="font-color-black-50 block margin-10-v">beats by dr. dre Studio 3 Bluetooth Headphones</span>
                                <b class="xx-large">$79.95</b> <b class="font-color-black-50 font-overline">$99.99</b>
                                <span class="block">
                                    <svg class="icon icon-sm margin-5-r"><use href="#check-badge"/></svg> 20% off
                                </span>
                                <ul class="list-inline margin-15-v right">
                                    <li class="circle padding-5 border-dual" style="border-color: hsl(296, 73%, 53%);"></li>
                                    <li class="circle padding-5 border-dual" style="border-color: hsl(0, 0%, 77%);"></li>
                                </ul>
                                <span class="left padding-15-v icons-xs">
                                    <svg class="icon font-color-yellow"><use href="#star-fill"/></svg>
                                    <b class="font-color-black-50">3.9</b>
                                    <span class="font-color-black-muted">
                                        <svg class="icon margin-5-l"><use href="#comment"/></svg> 9
                                    </span>
                                </span>
                            </a>
                        </div>
                        <div class="col-4 col-sm-6">
                            <a class="full-h padding-15 no-padding-t card round shadow-lg ui-ease-layout" href="#">
                                <span class="photo-slider margin-20-b">
                                    <svg class="slider-loader icon"><use href="#loader-line"/></svg>
                                    <img
                                        src="img/product_03.png" alt=""
                                        data-ui-src="img/product_03.png,img/product_05.png"
                                    >
                                    <button title="Prev" class="prev btn btn-ghost btn-square round ui-ease-btn">
                                        <svg class="icon"><use href="#angle-left"/></svg>
                                    </button>
                                    <button title="Next" class="next btn btn-ghost btn-square round ui-ease-btn">
                                        <svg class="icon"><use href="#angle-right"/></svg>
                                    </button>
                                    <span class="photo-slider-nav ui-ease-1st-layout"></span>
                                </span>
                                <span class="x-large">Blue</span>
                                <span class="font-color-black-50 block margin-10-v">beats by dr. dre Studio 3 Wireless Headphones</span>
                                <b class="xx-large">$149.99</b>
                                <span class="block">
                                    <svg class="icon icon-sm margin-5-r"><use href="#truck"/></svg> Fast Delivery
                                </span>
                                <ul class="list-inline margin-15-v right">
                                    <li class="circle padding-5 border-dual" style="border-color: hsl(206, 73%, 50%);"></li>
                                    <li class="circle padding-5 border-dual" style="border-color: hsl(0, 0%, 23%);"></li>
                                </ul>
                                <span class="left padding-15-v icons-xs">
                                    <svg class="icon font-color-yellow"><use href="#star-fill"/></svg>
                                    <b class="font-color-black-50">4.3</b>
                                    <span class="font-color-black-muted">
                                        <svg class="icon margin-5-l"><use href="#comment"/></svg> 11
                                    </span>
                                </span>
                            </a>
                        </div>
                        <div class="col-4 col-sm-6">
                            <a class="full-h padding-15 no-padding-t card round shadow-lg ui-ease-layout" href="#">
                                <span class="photo-slider margin-20-b">
                                    <svg class="slider-loader icon"><use href="#loader-line"/></svg>
                                    <img src="img/product_04.png" alt="" >
                                    <button title="Prev" class="prev btn btn-ghost btn-square round ui-ease-btn">
                                        <svg class="icon"><use href="#angle-left"/></svg>
                                    </button>
                                    <button title="Next" class="next btn btn-ghost btn-square round ui-ease-btn">
                                        <svg class="icon"><use href="#angle-right"/></svg>
                                    </button>
                                    <span class="photo-slider-nav ui-ease-1st-layout"></span>
                                </span>
                                <span class="x-large">White</span>
                                <span class="font-color-black-50 block margin-10-v">beats by dr. dre Studio 3 Wired Headphones</span>
                                <b class="xx-large">$89.95</b> <b class="font-color-black-50 font-overline">$119.99</b>
                                <span class="block">
                                    <svg class="icon icon-sm margin-5-r"><use href="#check-badge"/></svg> 20% off
                                </span>
                                <ul class="list-inline margin-15-v right">
                                    <li class="circle padding-5 border-dual" style="border-color: hsl(0, 0%, 77%);"></li>
                                </ul>
                                <span class="left padding-15-v icons-xs">
                                    <svg class="icon font-color-yellow"><use href="#star-fill"/></svg>
                                    <b class="font-color-black-50">4.9</b>
                                    <span class="font-color-black-muted">
                                        <svg class="icon margin-5-l"><use href="#comment"/></svg> 32
                                    </span>
                                </span>
                            </a>
                        </div>
                        <div class="col-4 col-sm-6">
                            <a class="full-h padding-15 no-padding-t card round shadow-lg ui-ease-layout" href="#">
                                <span class="photo-slider margin-20-b">
                                    <svg class="slider-loader icon"><use href="#loader-line"/></svg>
                                    <img src="img/product_05.png" alt="" >
                                    <button title="Prev" class="prev btn btn-ghost btn-square round ui-ease-btn">
                                        <svg class="icon"><use href="#angle-left"/></svg>
                                    </button>
                                    <button title="Next" class="next btn btn-ghost btn-square round ui-ease-btn">
                                        <svg class="icon"><use href="#angle-right"/></svg>
                                    </button>
                                    <span class="photo-slider-nav ui-ease-1st-layout"></span>
                                </span>
                                <span class="x-large">Black</span>
                                <span class="font-color-black-50 block margin-10-v">beats by dr. dre Studio 3 Wired Headphones</span>
                                <b class="xx-large">$89.95</b> <b class="font-color-black-50 font-overline">$119.99</b>
                                <span class="block">
                                    <svg class="icon icon-sm margin-5-r"><use href="#check-badge"/></svg> 20% off
                                </span>
                                <ul class="list-inline margin-15-v right">
                                    <li class="circle padding-10 border" style="background: hsl(0, 0%, 23%);"></li>
                                </ul>
                                <span class="left padding-15-v icons-xs">
                                    <svg class="icon font-color-yellow"><use href="#star-fill"/></svg>
                                    <b class="font-color-black-50">4.6</b>
                                    <span class="font-color-black-muted">
                                        <svg class="icon margin-5-l"><use href="#comment"/></svg> 44
                                    </span>
                                </span>
                            </a>
                        </div>
                        <div class="col-4 col-sm-6">
                            <a class="full-h padding-15 no-padding-t card round shadow-lg ui-ease-layout" href="#">
                                <span class="photo-slider margin-20-b">
                                    <svg class="slider-loader icon"><use href="#loader-line"/></svg>
                                    <img
                                        src="img/product_02.png" alt=""
                                        data-ui-src="img/product_02.png,img/product_04.png"
                                    >
                                    <button title="Prev" class="prev btn btn-ghost btn-square round ui-ease-btn">
                                        <svg class="icon"><use href="#angle-left"/></svg>
                                    </button>
                                    <button title="Next" class="next btn btn-ghost btn-square round ui-ease-btn">
                                        <svg class="icon"><use href="#angle-right"/></svg>
                                    </button>
                                    <span class="photo-slider-nav ui-ease-1st-layout"></span>
                                </span>
                                <span class="x-large">Purple</span>
                                <span class="font-color-black-50 block margin-10-v">beats by dr. dre Studio 3 Bluetooth Headphones</span>
                                <b class="xx-large">$79.95</b> <b class="font-color-black-50 font-overline">$99.99</b>
                                <span class="block">
                                    <svg class="icon icon-sm margin-5-r"><use href="#check-badge"/></svg> 20% off
                                </span>
                                <ul class="list-inline margin-15-v right">
                                    <li class="circle padding-5 border-dual" style="border-color: hsl(296, 73%, 53%);"></li>
                                    <li class="circle padding-5 border-dual" style="border-color: hsl(0, 0%, 77%);"></li>
                                </ul>
                                <span class="left padding-15-v icons-xs">
                                    <svg class="icon font-color-yellow"><use href="#star-fill"/></svg>
                                    <b class="font-color-black-50">3.9</b>
                                    <span class="font-color-black-muted">
                                        <svg class="icon margin-5-l"><use href="#comment"/></svg> 9
                                    </span>
                                </span>
                            </a>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12 align-c">
                            <button class="load-more btn btn-lg btn-xs-fluid padding-30-h circle ui-ease-btn">Load more</button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
</main>

<!-- mobile menu -->
<div class="mobile-menu show-r ui-ease-layout ui-ease-in-out">
    <div class="mobile-menu-title padding-20-v x-large border-b">
        <button class="btn btn-square btn-lg btn-ghost circle ui-ease-btn close-mobile-menu">
            <svg class="icon no-opacity"><use href="#remove"/></svg>
        </button>
        Filters
    </div>
    <div class="mobile-menu-content padding-10 scroll-v"></div>
</div>