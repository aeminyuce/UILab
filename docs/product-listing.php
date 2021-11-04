<!-- custom CSS -->
<link rel="stylesheet" href="../css/custom/product-listing.css?v=<?php echo filemtime('../css/custom/product-listing.css'); ?>"/>

<!-- custom JS -->
<script src="../js/custom/product-listing.js?v=<?php echo filemtime('../js/custom/product-listing.js'); ?>"></script>

<main class="container no-gutter">
    <div class="fixed">
        <div class="col-static no-fluid ui-padding-30-v ui-padding-15-h ui-md-no-padding-h">

            <div class="col-250 ui-padding-10 hidden-md">
                <div class="ui-add-mobile-menu-r">

                    <div class="ui-card ui-padding-15 round shadow-lg">
                        <div data-ui-src="json/headphones.json" data-ui-val="name" class="ui-autocomplete text text-icon-both round ui-no-border ui-theme-gray ui-fill-light-300 ui-ease-form has-clear">
                            <svg class="ui-icon text-icon-l"><use href="#search"/></svg>
                            <button type="button" class="clear-form">
                                <svg class="ui-icon"><use href="#remove"/></svg>
                            </button>
                            <input type="text" placeholder="Search" autocomplete="off">
                        </div>

                        <span class="sp-25"></span>

                        <h5 class="ui-margin-15-b font-color-black-50">CATEGORIES</h5>
                        <ul class="list-unstyled list-spacer-10">
                            <li><a href="#">Headphones</a></li>
                            <li>
                                <a href="#"><b>Over-Ear Headphones</b></a>
                                <ul class="list-unstyled hoverline-2nd ui-padding-15-l">
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

                    <div class="ui-card round shadow-lg ui-theme-sub">

                        <div class="ui-padding-15 md-align-c ui-border-b">
                            <h5 class="ui-margin-10-b font-color-black-50">COLORS</h5>
                            <label class="custom">
                                <span class="check-custom ui-no-border circle ui-ease-form ui-product-select-red">
                                    <input type="checkbox" checked>
                                    <i class="state circle bg-white invert-bg"></i>
                                </span>
                            </label>
                            <label class="custom">
                                <span class="check-custom ui-no-border circle ui-ease-form ui-product-select-pink">
                                    <input type="checkbox" checked>
                                    <i class="state circle bg-white invert-bg"></i>
                                </span>
                            </label>
                            <label class="custom">
                                <span class="check-custom ui-no-border circle ui-ease-form ui-product-select-blue">
                                    <input type="checkbox" checked>
                                    <i class="state circle bg-white invert-bg"></i>
                                </span>
                            </label>
                            <label class="custom">
                                <span class="check-custom ui-no-border circle ui-ease-form ui-product-select-orange">
                                    <input type="checkbox">
                                    <i class="state circle bg-white invert-bg"></i>
                                </span>
                            </label>
                            <label class="custom">
                                <span class="check-custom ui-no-border circle ui-ease-form ui-product-select-yellow">
                                    <input type="checkbox">
                                    <i class="state circle bg-white invert-bg"></i>
                                </span>
                            </label>

                            <span class="clearfix hidden-md"></span>

                            <label class="custom">
                                <span class="check-custom ui-no-border circle ui-ease-form ui-product-select-black">
                                    <input type="checkbox" checked>
                                    <i class="state circle bg-white invert-bg"></i>
                                </span>
                            </label>
                            <label class="custom">
                                <span class="check-custom ui-no-border circle ui-ease-form ui-product-select-white">
                                    <input type="checkbox" checked>
                                    <i class="state circle bg-white invert-bg"></i>
                                </span>
                            </label>
                        </div>

                        <div class="ui-padding-15 ui-border-b">

                            <h5 class="ui-margin-10-b font-color-black-50">PROMOTIONS</h5>
                            <label class="custom block">
                                <span class="switch-custom right round ui-ease-form">
                                    <input type="checkbox" checked>
                                    <i class="state ui-fill-dark-100"></i>
                                </span>
                                <svg class="ui-icon ui-margin-5-r"><use href="#truck"/></svg>
                                Fast Delivery
                            </label>
                            <span class="sp-5"></span>
                            <label class="custom block">
                                <span class="switch-custom right round ui-ease-form">
                                    <input type="checkbox" checked>
                                    <i class="state ui-fill-dark-100"></i>
                                </span>
                                <svg class="ui-icon ui-margin-5-r"><use href="#check-badge"/></svg>
                                Deals
                            </label>

                        </div>

                        <div class="ui-padding-15 ui-border-b">

                            <h5 class="ui-margin-10-b font-color-black-50">CONNECTIONS</h5>
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
                            <button class="ui-btn ui-btn-sm circle ui-ease-btn">
                                See All
                                <svg class="ui-icon ui-margin-5-l"><use href="#angle-down"/></svg>
                            </button>

                        </div>

                        <div class="ui-padding-15">
                            <button type="submit" class="ui-btn ui-btn-lg block round ui-fill-dark-100 ui-ease-btn"><b>SEARCH</b></button>
                        </div>

                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12 ui-sm-no-padding-t">

                    <div class="ui-card ui-margin-10-b round shadow-lg">
                        <div class="row row-gap-lg sm-fluid">
                            <div class="col-12 ui-border-b">
                                <h4>
                                    <svg class="ui-icon ui-icon-lg"><use href="#history"/></svg>
                                    <span class="inline-block">
                                        Price History, <span class="font-color-black-muted">Over-Ear Headphones</span>
                                    </span>
                                </h4>
                            </div>
                            <div class="col-8">
                                <div class="ui-line-charts ui-ease-line-charts" data-ui-x="1st Week,2nd Week,3rd Week,4th Week">
                                    <ul class="ui-lines" data-ui-type="curved dashed">
                                        <li data-ui-y="156"></li>
                                        <li data-ui-y="180"></li>
                                        <li data-ui-y="144"></li>
                                        <li data-ui-y="157"></li>
                                    </ul>
                                    <ul class="ui-lines" data-ui-type="curved filled">
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
                                <div class="row no-fluid ui-margin-10-b">
                                    <div class="col-6">
                                        <span class="font-color-black-muted">Highest:</span>
                                        <span class="largest block">$199</span>
                                    </div>
                                    <div class="col-6">
                                        <span class="font-color-black-muted">Lowest:</span>
                                        <span class="largest block">$120</span>
                                    </div>
                                </div>
                                <svg class="ui-icon ui-icon-sm ui-margin-5-r ui-margin-2-b"><use href="#chart-line"/></svg>
                                <span class="large">Current prices <b>12% lower</b> than, average prices!</span>
                                <ul class="list-unstyled font-color-black-muted ui-margin-15-t inline-block-2nd">
                                    <li>
                                        <b class="circle ui-padding-5 ui-margin-4-l ui-margin-5-r" style="background: hsl(30, 100%, 63%);"></b>
                                        <span>Headphones Averages</span>
                                    </li>
                                    <li>
                                        <b class="circle ui-padding-5 ui-margin-4-l ui-margin-5-r" style="background: hsl(204, 82%, 57%);"></b>
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
                        <div class="col-6 align-r ui-sm-no-padding-t">
                            <div class="select align-l round form-inline ui-no-border ui-theme-gray ui-fill-light-300 ui-ease-form">
                                <svg class="ui-icon"><use href="#angle-down"/></svg>
                                <select>
                                    <option value="1" checked>Sort by</option>
                                    <option value="2">Top Rated</option>
                                    <option value="3">Price (Low to High)</option>
                                    <option value="4">Price (High to Low)</option>
                                </select>
                            </div>
                            <div class="select align-l round form-inline ui-no-border ui-theme-gray ui-fill-light-300 ui-ease-form">
                                <svg class="ui-icon"><use href="#angle-down"/></svg>
                                <select>
                                    <option value="12" checked>Show 9</option>
                                    <option value="24">Show 18</option>
                                    <option value="36">Show 27</option>
                                </select>
                            </div>
                            <span class="sp-10 visible-xs"></span>
                            <span class="align-c ui-theme-sub ui-ease-1st-btn">
                                <button class="ui-btn ui-btn-square round ui-fill-dark-100">
                                    <svg class="ui-icon"><use href="#grid-column"/></svg>
                                </button>
                                <button class="ui-btn ui-btn-square round">
                                    <svg class="ui-icon"><use href="#grid-row"/></svg>
                                </button>
                                <button class="ui-btn ui-btn-square round ui-show-mobile-menu-r visible-md">
                                    <svg class="ui-icon"><use href="#bars-right"/></svg>
                                </button>
                            </span>
                        </div>
                    </div>

                    <div class="products-list row form-lg hover-shadow-2nd ui-ease-2nd-layout hover-t-2nd">
                        <div class="col-4 col-sm-6">
                            <a class="full-h ui-padding-15 ui-no-padding-t ui-card round shadow-lg ui-ease-layout" href="#">
                                <span class="ui-photo-slider ui-margin-20-b">
                                    <svg class="ui-slider-loader ui-icon"><use href="#loader-line"/></svg>
                                    <img
                                        src="img/product_01.png" alt=""
                                        data-ui-src="img/product_01.png,img/product_02.png,img/product_03.png"
                                    >
                                    <button title="Prev" class="ui-prev ui-btn ui-btn-ghost ui-btn-square circle ui-ease-btn">
                                        <svg class="ui-icon ui-margin-3-r"><use href="#angle-left"/></svg>
                                    </button>
                                    <button title="Next" class="ui-next ui-btn ui-btn-ghost ui-btn-square circle ui-ease-btn">
                                        <svg class="ui-icon ui-margin-3-l"><use href="#angle-right"/></svg>
                                    </button>
                                    <span class="ui-photo-slider-nav ui-ease-1st-layout"></span>
                                </span>
                                <span class="x-large">Red</span>
                                <span class="font-color-black-50 block ui-margin-10-v">beats by dr. dre Studio 3 Wireless Headphones</span>
                                <b class="xx-large">$164.98</b>
                                <span class="block">
                                    <svg class="ui-icon ui-icon-sm ui-margin-5-r"><use href="#truck"/></svg> Fast Delivery
                                </span>
                                <ul class="list-inline ui-margin-15-v right">
                                    <li class="circle ui-padding-5 ui-border-dual ui-product-red"></li>
                                    <li class="circle ui-padding-5 ui-border-dual ui-product-pink"></li>
                                    <li class="circle ui-padding-5 ui-border-dual ui-product-blue"></li>
                                </ul>
                                <span class="left ui-padding-15-v ui-icons-xs">
                                    <svg class="ui-icon font-color-yellow"><use href="#star-fill"/></svg>
                                    <b class="font-color-black-50">4.8</b>
                                    <span class="font-color-black-muted">
                                        <svg class="ui-icon ui-margin-5-l"><use href="#comment"/></svg> 24
                                    </span>
                                </span>
                            </a>
                        </div>
                        <div class="col-4 col-sm-6">
                            <a class="full-h ui-padding-15 ui-no-padding-t ui-card round shadow-lg ui-ease-layout" href="#">
                                <span class="ui-photo-slider ui-margin-20-b">
                                    <svg class="ui-slider-loader ui-icon"><use href="#loader-line"/></svg>
                                    <img
                                        src="img/product_02.png" alt=""
                                        data-ui-src="img/product_02.png,img/product_04.png"
                                    >
                                    <button title="Prev" class="ui-prev ui-btn ui-btn-ghost ui-btn-square circle ui-ease-btn">
                                        <svg class="ui-icon ui-margin-3-r"><use href="#angle-left"/></svg>
                                    </button>
                                    <button title="Next" class="ui-next ui-btn ui-btn-ghost ui-btn-square circle ui-ease-btn">
                                        <svg class="ui-icon ui-margin-3-l"><use href="#angle-right"/></svg>
                                    </button>
                                    <span class="ui-photo-slider-nav ui-ease-1st-layout"></span>
                                </span>
                                <span class="x-large">Purple</span>
                                <span class="font-color-black-50 block ui-margin-10-v">beats by dr. dre Studio 3 Bluetooth Headphones</span>
                                <b class="xx-large">$79.95</b> <b class="font-color-black-50 font-overline">$99.99</b>
                                <span class="block">
                                    <svg class="ui-icon ui-icon-sm ui-margin-5-r"><use href="#check-badge"/></svg> 20% off
                                </span>
                                <ul class="list-inline ui-margin-15-v right">
                                    <li class="circle ui-padding-5 ui-border-dual ui-product-pink"></li>
                                    <li class="circle ui-padding-5 ui-border-dual ui-product-white"></li>
                                </ul>
                                <span class="left ui-padding-15-v ui-icons-xs">
                                    <svg class="ui-icon font-color-yellow"><use href="#star-fill"/></svg>
                                    <b class="font-color-black-50">3.9</b>
                                    <span class="font-color-black-muted">
                                        <svg class="ui-icon ui-margin-5-l"><use href="#comment"/></svg> 9
                                    </span>
                                </span>
                            </a>
                        </div>
                        <div class="col-4 col-sm-6">
                            <a class="full-h ui-padding-15 ui-no-padding-t ui-card round shadow-lg ui-ease-layout" href="#">
                                <span class="ui-photo-slider ui-margin-20-b">
                                    <svg class="ui-slider-loader ui-icon"><use href="#loader-line"/></svg>
                                    <img
                                        src="img/product_03.png" alt=""
                                        data-ui-src="img/product_03.png,img/product_05.png"
                                    >
                                    <button title="Prev" class="ui-prev ui-btn ui-btn-ghost ui-btn-square circle ui-ease-btn">
                                        <svg class="ui-icon ui-margin-3-r"><use href="#angle-left"/></svg>
                                    </button>
                                    <button title="Next" class="ui-next ui-btn ui-btn-ghost ui-btn-square circle ui-ease-btn">
                                        <svg class="ui-icon ui-margin-3-l"><use href="#angle-right"/></svg>
                                    </button>
                                    <span class="ui-photo-slider-nav ui-ease-1st-layout"></span>
                                </span>
                                <span class="x-large">Blue</span>
                                <span class="font-color-black-50 block ui-margin-10-v">beats by dr. dre Studio 3 Wireless Headphones</span>
                                <b class="xx-large">$149.99</b>
                                <span class="block">
                                    <svg class="ui-icon ui-icon-sm ui-margin-5-r"><use href="#truck"/></svg> Fast Delivery
                                </span>
                                <ul class="list-inline ui-margin-15-v right">
                                    <li class="circle ui-padding-5 ui-border-dual ui-product-blue"></li>
                                    <li class="circle ui-padding-5 ui-border-dual ui-product-black"></li>
                                </ul>
                                <span class="left ui-padding-15-v ui-icons-xs">
                                    <svg class="ui-icon font-color-yellow"><use href="#star-fill"/></svg>
                                    <b class="font-color-black-50">4.3</b>
                                    <span class="font-color-black-muted">
                                        <svg class="ui-icon ui-margin-5-l"><use href="#comment"/></svg> 11
                                    </span>
                                </span>
                            </a>
                        </div>
                        <div class="col-4 col-sm-6">
                            <a class="full-h ui-padding-15 ui-no-padding-t ui-card round shadow-lg ui-ease-layout" href="#">
                                <span class="ui-photo-slider ui-margin-20-b">
                                    <svg class="ui-slider-loader ui-icon"><use href="#loader-line"/></svg>
                                    <img src="img/product_04.png" alt="" >
                                    <button title="Prev" class="ui-prev ui-btn ui-btn-ghost ui-btn-square circle ui-ease-btn">
                                        <svg class="ui-icon ui-margin-3-r"><use href="#angle-left"/></svg>
                                    </button>
                                    <button title="Next" class="ui-next ui-btn ui-btn-ghost ui-btn-square circle ui-ease-btn">
                                        <svg class="ui-icon ui-margin-3-l"><use href="#angle-right"/></svg>
                                    </button>
                                    <span class="ui-photo-slider-nav ui-ease-1st-layout"></span>
                                </span>
                                <span class="x-large">White</span>
                                <span class="font-color-black-50 block ui-margin-10-v">beats by dr. dre Studio 3 Wired Headphones</span>
                                <b class="xx-large">$89.95</b> <b class="font-color-black-50 font-overline">$119.99</b>
                                <span class="block">
                                    <svg class="ui-icon ui-icon-sm ui-margin-5-r"><use href="#check-badge"/></svg> 20% off
                                </span>
                                <ul class="list-inline ui-margin-15-v right">
                                    <li class="circle ui-padding-5 ui-border-dual ui-product-white"></li>
                                </ul>
                                <span class="left ui-padding-15-v ui-icons-xs">
                                    <svg class="ui-icon font-color-yellow"><use href="#star-fill"/></svg>
                                    <b class="font-color-black-50">4.9</b>
                                    <span class="font-color-black-muted">
                                        <svg class="ui-icon ui-margin-5-l"><use href="#comment"/></svg> 32
                                    </span>
                                </span>
                            </a>
                        </div>
                        <div class="col-4 col-sm-6">
                            <a class="full-h ui-padding-15 ui-no-padding-t ui-card round shadow-lg ui-ease-layout" href="#">
                                <span class="ui-photo-slider ui-margin-20-b">
                                    <svg class="ui-slider-loader ui-icon"><use href="#loader-line"/></svg>
                                    <img src="img/product_05.png" alt="" >
                                    <button title="Prev" class="ui-prev ui-btn ui-btn-ghost ui-btn-square circle ui-ease-btn">
                                        <svg class="ui-icon ui-margin-3-r"><use href="#angle-left"/></svg>
                                    </button>
                                    <button title="Next" class="ui-next ui-btn ui-btn-ghost ui-btn-square circle ui-ease-btn">
                                        <svg class="ui-icon ui-margin-3-l"><use href="#angle-right"/></svg>
                                    </button>
                                    <span class="ui-photo-slider-nav ui-ease-1st-layout"></span>
                                </span>
                                <span class="x-large">Black</span>
                                <span class="font-color-black-50 block ui-margin-10-v">beats by dr. dre Studio 3 Wired Headphones</span>
                                <b class="xx-large">$89.95</b> <b class="font-color-black-50 font-overline">$119.99</b>
                                <span class="block">
                                    <svg class="ui-icon ui-icon-sm ui-margin-5-r"><use href="#check-badge"/></svg> 20% off
                                </span>
                                <ul class="list-inline ui-margin-15-v right">
                                    <li class="circle ui-padding-5 ui-border-dual ui-product-black"></li>
                                </ul>
                                <span class="left ui-padding-15-v ui-icons-xs">
                                    <svg class="ui-icon font-color-yellow"><use href="#star-fill"/></svg>
                                    <b class="font-color-black-50">4.6</b>
                                    <span class="font-color-black-muted">
                                        <svg class="ui-icon ui-margin-5-l"><use href="#comment"/></svg> 44
                                    </span>
                                </span>
                            </a>
                        </div>
                        <div class="col-4 col-sm-6">
                            <a class="full-h ui-padding-15 ui-no-padding-t ui-card round shadow-lg ui-ease-layout" href="#">
                                <span class="ui-photo-slider ui-margin-20-b">
                                    <svg class="ui-slider-loader ui-icon"><use href="#loader-line"/></svg>
                                    <img
                                        src="img/product_02.png" alt=""
                                        data-ui-src="img/product_02.png,img/product_04.png"
                                    >
                                    <button title="Prev" class="ui-prev ui-btn ui-btn-ghost ui-btn-square circle ui-ease-btn">
                                        <svg class="ui-icon ui-margin-3-r"><use href="#angle-left"/></svg>
                                    </button>
                                    <button title="Next" class="ui-next ui-btn ui-btn-ghost ui-btn-square circle ui-ease-btn">
                                        <svg class="ui-icon ui-margin-3-l"><use href="#angle-right"/></svg>
                                    </button>
                                    <span class="ui-photo-slider-nav ui-ease-1st-layout"></span>
                                </span>
                                <span class="x-large">Purple</span>
                                <span class="font-color-black-50 block ui-margin-10-v">beats by dr. dre Studio 3 Bluetooth Headphones</span>
                                <b class="xx-large">$79.95</b> <b class="font-color-black-50 font-overline">$99.99</b>
                                <span class="block">
                                    <svg class="ui-icon ui-icon-sm ui-margin-5-r"><use href="#check-badge"/></svg> 20% off
                                </span>
                                <ul class="list-inline ui-margin-15-v right">
                                    <li class="circle ui-padding-5 ui-border-dual ui-product-pink"></li>
                                    <li class="circle ui-padding-5 ui-border-dual ui-product-white"></li>
                                </ul>
                                <span class="left ui-padding-15-v ui-icons-xs">
                                    <svg class="ui-icon font-color-yellow"><use href="#star-fill"/></svg>
                                    <b class="font-color-black-50">3.9</b>
                                    <span class="font-color-black-muted">
                                        <svg class="ui-icon ui-margin-5-l"><use href="#comment"/></svg> 9
                                    </span>
                                </span>
                            </a>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12 align-c">
                            <button class="load-more ui-btn ui-btn-lg ui-btn-xs-fluid ui-padding-30-h circle ui-ease-btn">Load more</button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
</main>

<!-- mobile menu -->
<div class="ui-mobile-menu ui-show-r ui-ease-layout ui-ease-in-out">
    <div class="ui-mobile-menu-title ui-padding-20-v x-large ui-border-b">
        <button class="ui-btn ui-btn-square ui-btn-lg ui-btn-ghost circle ui-ease-btn ui-close-mobile-menu">
            <svg class="ui-icon no-opacity"><use href="#remove"/></svg>
        </button>
        Filters
    </div>
    <div class="ui-mobile-menu-content ui-padding-10 scroll-v"></div>
</div>