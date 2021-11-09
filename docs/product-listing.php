<!-- custom CSS -->
<link rel="stylesheet" href="../css/custom/product-listing.css?v=<?php echo filemtime('../css/custom/product-listing.css'); ?>"/>

<!-- custom JS -->
<script src="../js/custom/product-listing.js?v=<?php echo filemtime('../js/custom/product-listing.js'); ?>"></script>

<main class="ui-container ui-no-gutter">
    <div class="ui-fixed">
        <div class="ui-col-static ui-no-fluid ui-padding-30-v ui-padding-15-h ui-md-no-padding-h">

            <div class="ui-col-250 ui-padding-10 ui-hidden-md">
                <div class="ui-add-mobile-menu-r">

                    <div class="ui-card ui-padding-15 ui-round ui-shadow-lg">
                        <div data-ui-src="json/headphones.json" data-ui-val="name" class="ui-autocomplete text text-icon-both ui-round ui-no-border ui-theme-gray ui-fill-light-300 ui-ease-form has-clear">
                            <svg class="ui-icon text-icon-l"><use href="#search"/></svg>
                            <button type="button" class="clear-form">
                                <svg class="ui-icon"><use href="#remove"/></svg>
                            </button>
                            <input type="text" placeholder="Search" autocomplete="off">
                        </div>

                        <span class="ui-sp-25"></span>

                        <h5 class="ui-h5 ui-margin-15-b ui-color-black-50">CATEGORIES</h5>
                        <ul class="ui-list-unstyled ui-list-spacer-10">
                            <li><a href="#">Headphones</a></li>
                            <li>
                                <a href="#"><b>Over-Ear Headphones</b></a>
                                <ul class="ui-list-unstyled hoverline-2nd ui-padding-15-l">
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

                    <div class="ui-card ui-round ui-shadow-lg ui-theme-sub">

                        <div class="ui-padding-15 ui-md-align-c ui-border-b">
                            <h5 class="ui-h5 ui-margin-10-b ui-color-black-50">COLORS</h5>
                            <label class="custom">
                                <span class="check-custom ui-no-border ui-circle ui-ease-form ui-product-select-red">
                                    <input type="checkbox" checked>
                                    <i class="state ui-circle ui-bg-white ui-invert-bg"></i>
                                </span>
                            </label>
                            <label class="custom">
                                <span class="check-custom ui-no-border ui-circle ui-ease-form ui-product-select-pink">
                                    <input type="checkbox" checked>
                                    <i class="state ui-circle ui-bg-white ui-invert-bg"></i>
                                </span>
                            </label>
                            <label class="custom">
                                <span class="check-custom ui-no-border ui-circle ui-ease-form ui-product-select-blue">
                                    <input type="checkbox" checked>
                                    <i class="state ui-circle ui-bg-white ui-invert-bg"></i>
                                </span>
                            </label>
                            <label class="custom">
                                <span class="check-custom ui-no-border ui-circle ui-ease-form ui-product-select-orange">
                                    <input type="checkbox">
                                    <i class="state ui-circle ui-bg-white ui-invert-bg"></i>
                                </span>
                            </label>
                            <label class="custom">
                                <span class="check-custom ui-no-border ui-circle ui-ease-form ui-product-select-yellow">
                                    <input type="checkbox">
                                    <i class="state ui-circle ui-bg-white ui-invert-bg"></i>
                                </span>
                            </label>

                            <span class="ui-clear ui-hidden-md"></span>

                            <label class="custom">
                                <span class="check-custom ui-no-border ui-circle ui-ease-form ui-product-select-black">
                                    <input type="checkbox" checked>
                                    <i class="state ui-circle ui-bg-white ui-invert-bg"></i>
                                </span>
                            </label>
                            <label class="custom">
                                <span class="check-custom ui-no-border ui-circle ui-ease-form ui-product-select-white">
                                    <input type="checkbox" checked>
                                    <i class="state ui-circle ui-bg-white ui-invert-bg"></i>
                                </span>
                            </label>
                        </div>

                        <div class="ui-padding-15 ui-border-b">

                            <h5 class="ui-h5 ui-margin-10-b ui-color-black-50">PROMOTIONS</h5>
                            <label class="custom ui-block">
                                <span class="switch-custom ui-right ui-round ui-ease-form">
                                    <input type="checkbox" checked>
                                    <i class="state ui-fill-dark-100"></i>
                                </span>
                                <svg class="ui-icon ui-margin-5-r"><use href="#truck"/></svg>
                                Fast Delivery
                            </label>
                            <span class="ui-sp-5"></span>
                            <label class="custom ui-block">
                                <span class="switch-custom ui-right ui-round ui-ease-form">
                                    <input type="checkbox" checked>
                                    <i class="state ui-fill-dark-100"></i>
                                </span>
                                <svg class="ui-icon ui-margin-5-r"><use href="#check-badge"/></svg>
                                Deals
                            </label>

                        </div>

                        <div class="ui-padding-15 ui-border-b">

                            <h5 class="ui-h5 ui-margin-10-b ui-color-black-50">CONNECTIONS</h5>
                            <label class="custom ui-block">
                                <span class="check-custom ui-round ui-ease-form">
                                    <input type="checkbox" checked>
                                    <i class="state ui-fill-dark-100"></i>
                                </span>
                                Wireless <span class="ui-color-black-25">4</span>
                            </label>
                            <label class="custom ui-block">
                                <span class="check-custom ui-round ui-ease-form">
                                    <input type="checkbox" checked>
                                    <i class="state ui-fill-dark-100"></i>
                                </span>
                                Bluetooth <span class="ui-color-black-25">11</span>
                            </label>
                            <label class="custom ui-block">
                                <span class="check-custom ui-round ui-ease-form">
                                    <input type="checkbox" checked>
                                    <i class="state ui-fill-dark-100"></i>
                                </span>
                                Wired <span class="ui-color-black-25">9</span>
                            </label>
                            <label class="custom ui-block">
                                <span class="check-custom ui-round ui-ease-form">
                                    <input type="checkbox">
                                    <i class="state ui-fill-dark-100"></i>
                                </span>
                                Radio Channel <span class="ui-color-black-25">17</span>
                            </label>

                            <span class="ui-sp-10"></span>
                            <button class="ui-btn ui-btn-sm ui-circle ui-ease-btn">
                                See All
                                <svg class="ui-icon ui-margin-5-l"><use href="#angle-down"/></svg>
                            </button>

                        </div>

                        <div class="ui-padding-15">
                            <button type="submit" class="ui-btn ui-btn-lg ui-block ui-round ui-fill-dark-100 ui-ease-btn"><b>SEARCH</b></button>
                        </div>

                    </div>
                </div>
            </div>

            <div class="ui-row">
                <div class="ui-col-12 ui-sm-no-padding-t">

                    <div class="ui-card ui-margin-10-b ui-round ui-shadow-lg">
                        <div class="ui-row ui-row-gap-lg ui-sm-fluid">
                            <div class="ui-col-12 ui-border-b">
                                <h4 class="ui-h4">
                                    <svg class="ui-icon ui-icon-lg"><use href="#history"/></svg>
                                    <span class="ui-inline-block">
                                        Price History, <span class="ui-color-black-25">Over-Ear Headphones</span>
                                    </span>
                                </h4>
                            </div>
                            <div class="ui-col-8">
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
                                <div class="ui-align-c">
                                    Last 4 Weeks
                                </div>
                            </div>
                            <div class="ui-col-4">
                                <div class="ui-row ui-no-fluid ui-margin-10-b">
                                    <div class="ui-col-6">
                                        <span class="ui-color-black-25">Highest:</span>
                                        <span class="largest ui-block">$199</span>
                                    </div>
                                    <div class="ui-col-6">
                                        <span class="ui-color-black-25">Lowest:</span>
                                        <span class="largest ui-block">$120</span>
                                    </div>
                                </div>
                                <svg class="ui-icon ui-icon-sm ui-margin-5-r ui-margin-2-b"><use href="#chart-line"/></svg>
                                <span class="ui-font-16">Current prices <b>12% lower</b> than, average prices!</span>
                                <ul class="ui-list-unstyled ui-color-black-25 ui-margin-15-t inline-ui-block-2nd">
                                    <li>
                                        <b class="ui-circle ui-padding-5 ui-margin-4-l ui-margin-5-r" style="background: hsl(30, 100%, 63%);"></b>
                                        <span>Headphones Averages</span>
                                    </li>
                                    <li>
                                        <b class="ui-circle ui-padding-5 ui-margin-4-l ui-margin-5-r" style="background: hsl(204, 82%, 57%);"></b>
                                        <span>Over-Ear Headphones Averages</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="ui-row ui-sm-fluid ui-sm-align-c">
                        <div class="ui-col-6">
                            <span class="ui-sp-5 ui-hidden-sm"></span>
                            <span class="ui-font-16">Found <b>47</b> and displaying <b>9</b> products.</span>
                        </div>
                        <div class="ui-col-6 ui-align-r ui-sm-no-padding-t">
                            <div class="select ui-align-l ui-round form-inline ui-no-border ui-theme-gray ui-fill-light-300 ui-ease-form">
                                <svg class="ui-icon"><use href="#angle-down"/></svg>
                                <select>
                                    <option value="1" checked>Sort by</option>
                                    <option value="2">Top Rated</option>
                                    <option value="3">Price (Low to High)</option>
                                    <option value="4">Price (High to Low)</option>
                                </select>
                            </div>
                            <div class="select ui-align-l ui-round form-inline ui-no-border ui-theme-gray ui-fill-light-300 ui-ease-form">
                                <svg class="ui-icon"><use href="#angle-down"/></svg>
                                <select>
                                    <option value="12" checked>Show 9</option>
                                    <option value="24">Show 18</option>
                                    <option value="36">Show 27</option>
                                </select>
                            </div>
                            <span class="ui-sp-10 ui-visible-xs"></span>
                            <span class="ui-align-c ui-theme-sub ui-ease-1st-btn">
                                <button class="ui-btn ui-btn-square ui-round ui-fill-dark-100">
                                    <svg class="ui-icon"><use href="#grid-column"/></svg>
                                </button>
                                <button class="ui-btn ui-btn-square ui-round">
                                    <svg class="ui-icon"><use href="#grid-row"/></svg>
                                </button>
                                <button class="ui-btn ui-btn-square ui-round ui-show-mobile-menu-r ui-visible-md">
                                    <svg class="ui-icon"><use href="#bars-right"/></svg>
                                </button>
                            </span>
                        </div>
                    </div>

                    <div class="products-list ui-row form-lg ui-hover-shadow-2nd ui-ease-2nd-layout ui-hover-t-2nd">
                        <div class="ui-col-4 ui-col-sm-6">
                            <a class="ui-full-h ui-padding-15 ui-no-padding-t ui-card ui-round ui-shadow-lg ui-ease-layout" href="#">
                                <span class="ui-photo-slider ui-margin-20-b">
                                    <svg class="ui-slider-loader ui-icon"><use href="#loader-line"/></svg>
                                    <img
                                        src="img/product_01.png" alt=""
                                        data-ui-src="img/product_01.png,img/product_02.png,img/product_03.png"
                                    >
                                    <button title="Prev" class="ui-prev ui-btn ui-btn-ghost ui-btn-square ui-circle ui-ease-btn">
                                        <svg class="ui-icon ui-margin-3-r"><use href="#angle-left"/></svg>
                                    </button>
                                    <button title="Next" class="ui-next ui-btn ui-btn-ghost ui-btn-square ui-circle ui-ease-btn">
                                        <svg class="ui-icon ui-margin-3-l"><use href="#angle-right"/></svg>
                                    </button>
                                    <span class="ui-photo-slider-nav ui-ease-1st-layout"></span>
                                </span>
                                <span class="ui-font-18">Red</span>
                                <span class="ui-color-black-50 ui-block ui-margin-10-v">beats by dr. dre Studio 3 Wireless Headphones</span>
                                <b class="ui-font-22">$164.98</b>
                                <span class="ui-block">
                                    <svg class="ui-icon ui-icon-sm ui-margin-5-r"><use href="#truck"/></svg> Fast Delivery
                                </span>
                                <ul class="ui-list-inline ui-margin-15-v ui-right">
                                    <li class="ui-circle ui-padding-5 ui-border-dual ui-product-red"></li>
                                    <li class="ui-circle ui-padding-5 ui-border-dual ui-product-pink"></li>
                                    <li class="ui-circle ui-padding-5 ui-border-dual ui-product-blue"></li>
                                </ul>
                                <span class="ui-left ui-padding-15-v ui-icons-xs">
                                    <svg class="ui-icon ui-color-yellow"><use href="#star-fill"/></svg>
                                    <b class="ui-color-black-50">4.8</b>
                                    <span class="ui-color-black-25">
                                        <svg class="ui-icon ui-margin-5-l"><use href="#comment"/></svg> 24
                                    </span>
                                </span>
                            </a>
                        </div>
                        <div class="ui-col-4 ui-col-sm-6">
                            <a class="ui-full-h ui-padding-15 ui-no-padding-t ui-card ui-round ui-shadow-lg ui-ease-layout" href="#">
                                <span class="ui-photo-slider ui-margin-20-b">
                                    <svg class="ui-slider-loader ui-icon"><use href="#loader-line"/></svg>
                                    <img
                                        src="img/product_02.png" alt=""
                                        data-ui-src="img/product_02.png,img/product_04.png"
                                    >
                                    <button title="Prev" class="ui-prev ui-btn ui-btn-ghost ui-btn-square ui-circle ui-ease-btn">
                                        <svg class="ui-icon ui-margin-3-r"><use href="#angle-left"/></svg>
                                    </button>
                                    <button title="Next" class="ui-next ui-btn ui-btn-ghost ui-btn-square ui-circle ui-ease-btn">
                                        <svg class="ui-icon ui-margin-3-l"><use href="#angle-right"/></svg>
                                    </button>
                                    <span class="ui-photo-slider-nav ui-ease-1st-layout"></span>
                                </span>
                                <span class="ui-font-18">Purple</span>
                                <span class="ui-color-black-50 ui-block ui-margin-10-v">beats by dr. dre Studio 3 Bluetooth Headphones</span>
                                <b class="ui-font-22">$79.95</b> <b class="ui-color-black-50 ui-font-overline">$99.99</b>
                                <span class="ui-block">
                                    <svg class="ui-icon ui-icon-sm ui-margin-5-r"><use href="#check-badge"/></svg> 20% off
                                </span>
                                <ul class="ui-list-inline ui-margin-15-v ui-right">
                                    <li class="ui-circle ui-padding-5 ui-border-dual ui-product-pink"></li>
                                    <li class="ui-circle ui-padding-5 ui-border-dual ui-product-white"></li>
                                </ul>
                                <span class="ui-left ui-padding-15-v ui-icons-xs">
                                    <svg class="ui-icon ui-color-yellow"><use href="#star-fill"/></svg>
                                    <b class="ui-color-black-50">3.9</b>
                                    <span class="ui-color-black-25">
                                        <svg class="ui-icon ui-margin-5-l"><use href="#comment"/></svg> 9
                                    </span>
                                </span>
                            </a>
                        </div>
                        <div class="ui-col-4 ui-col-sm-6">
                            <a class="ui-full-h ui-padding-15 ui-no-padding-t ui-card ui-round ui-shadow-lg ui-ease-layout" href="#">
                                <span class="ui-photo-slider ui-margin-20-b">
                                    <svg class="ui-slider-loader ui-icon"><use href="#loader-line"/></svg>
                                    <img
                                        src="img/product_03.png" alt=""
                                        data-ui-src="img/product_03.png,img/product_05.png"
                                    >
                                    <button title="Prev" class="ui-prev ui-btn ui-btn-ghost ui-btn-square ui-circle ui-ease-btn">
                                        <svg class="ui-icon ui-margin-3-r"><use href="#angle-left"/></svg>
                                    </button>
                                    <button title="Next" class="ui-next ui-btn ui-btn-ghost ui-btn-square ui-circle ui-ease-btn">
                                        <svg class="ui-icon ui-margin-3-l"><use href="#angle-right"/></svg>
                                    </button>
                                    <span class="ui-photo-slider-nav ui-ease-1st-layout"></span>
                                </span>
                                <span class="ui-font-18">Blue</span>
                                <span class="ui-color-black-50 ui-block ui-margin-10-v">beats by dr. dre Studio 3 Wireless Headphones</span>
                                <b class="ui-font-22">$149.99</b>
                                <span class="ui-block">
                                    <svg class="ui-icon ui-icon-sm ui-margin-5-r"><use href="#truck"/></svg> Fast Delivery
                                </span>
                                <ul class="ui-list-inline ui-margin-15-v ui-right">
                                    <li class="ui-circle ui-padding-5 ui-border-dual ui-product-blue"></li>
                                    <li class="ui-circle ui-padding-5 ui-border-dual ui-product-black"></li>
                                </ul>
                                <span class="ui-left ui-padding-15-v ui-icons-xs">
                                    <svg class="ui-icon ui-color-yellow"><use href="#star-fill"/></svg>
                                    <b class="ui-color-black-50">4.3</b>
                                    <span class="ui-color-black-25">
                                        <svg class="ui-icon ui-margin-5-l"><use href="#comment"/></svg> 11
                                    </span>
                                </span>
                            </a>
                        </div>
                        <div class="ui-col-4 ui-col-sm-6">
                            <a class="ui-full-h ui-padding-15 ui-no-padding-t ui-card ui-round ui-shadow-lg ui-ease-layout" href="#">
                                <span class="ui-photo-slider ui-margin-20-b">
                                    <svg class="ui-slider-loader ui-icon"><use href="#loader-line"/></svg>
                                    <img src="img/product_04.png" alt="" >
                                    <button title="Prev" class="ui-prev ui-btn ui-btn-ghost ui-btn-square ui-circle ui-ease-btn">
                                        <svg class="ui-icon ui-margin-3-r"><use href="#angle-left"/></svg>
                                    </button>
                                    <button title="Next" class="ui-next ui-btn ui-btn-ghost ui-btn-square ui-circle ui-ease-btn">
                                        <svg class="ui-icon ui-margin-3-l"><use href="#angle-right"/></svg>
                                    </button>
                                    <span class="ui-photo-slider-nav ui-ease-1st-layout"></span>
                                </span>
                                <span class="ui-font-18">White</span>
                                <span class="ui-color-black-50 ui-block ui-margin-10-v">beats by dr. dre Studio 3 Wired Headphones</span>
                                <b class="ui-font-22">$89.95</b> <b class="ui-color-black-50 ui-font-overline">$119.99</b>
                                <span class="ui-block">
                                    <svg class="ui-icon ui-icon-sm ui-margin-5-r"><use href="#check-badge"/></svg> 20% off
                                </span>
                                <ul class="ui-list-inline ui-margin-15-v ui-right">
                                    <li class="ui-circle ui-padding-5 ui-border-dual ui-product-white"></li>
                                </ul>
                                <span class="ui-left ui-padding-15-v ui-icons-xs">
                                    <svg class="ui-icon ui-color-yellow"><use href="#star-fill"/></svg>
                                    <b class="ui-color-black-50">4.9</b>
                                    <span class="ui-color-black-25">
                                        <svg class="ui-icon ui-margin-5-l"><use href="#comment"/></svg> 32
                                    </span>
                                </span>
                            </a>
                        </div>
                        <div class="ui-col-4 ui-col-sm-6">
                            <a class="ui-full-h ui-padding-15 ui-no-padding-t ui-card ui-round ui-shadow-lg ui-ease-layout" href="#">
                                <span class="ui-photo-slider ui-margin-20-b">
                                    <svg class="ui-slider-loader ui-icon"><use href="#loader-line"/></svg>
                                    <img src="img/product_05.png" alt="" >
                                    <button title="Prev" class="ui-prev ui-btn ui-btn-ghost ui-btn-square ui-circle ui-ease-btn">
                                        <svg class="ui-icon ui-margin-3-r"><use href="#angle-left"/></svg>
                                    </button>
                                    <button title="Next" class="ui-next ui-btn ui-btn-ghost ui-btn-square ui-circle ui-ease-btn">
                                        <svg class="ui-icon ui-margin-3-l"><use href="#angle-right"/></svg>
                                    </button>
                                    <span class="ui-photo-slider-nav ui-ease-1st-layout"></span>
                                </span>
                                <span class="ui-font-18">Black</span>
                                <span class="ui-color-black-50 ui-block ui-margin-10-v">beats by dr. dre Studio 3 Wired Headphones</span>
                                <b class="ui-font-22">$89.95</b> <b class="ui-color-black-50 ui-font-overline">$119.99</b>
                                <span class="ui-block">
                                    <svg class="ui-icon ui-icon-sm ui-margin-5-r"><use href="#check-badge"/></svg> 20% off
                                </span>
                                <ul class="ui-list-inline ui-margin-15-v ui-right">
                                    <li class="ui-circle ui-padding-5 ui-border-dual ui-product-black"></li>
                                </ul>
                                <span class="ui-left ui-padding-15-v ui-icons-xs">
                                    <svg class="ui-icon ui-color-yellow"><use href="#star-fill"/></svg>
                                    <b class="ui-color-black-50">4.6</b>
                                    <span class="ui-color-black-25">
                                        <svg class="ui-icon ui-margin-5-l"><use href="#comment"/></svg> 44
                                    </span>
                                </span>
                            </a>
                        </div>
                        <div class="ui-col-4 ui-col-sm-6">
                            <a class="ui-full-h ui-padding-15 ui-no-padding-t ui-card ui-round ui-shadow-lg ui-ease-layout" href="#">
                                <span class="ui-photo-slider ui-margin-20-b">
                                    <svg class="ui-slider-loader ui-icon"><use href="#loader-line"/></svg>
                                    <img
                                        src="img/product_02.png" alt=""
                                        data-ui-src="img/product_02.png,img/product_04.png"
                                    >
                                    <button title="Prev" class="ui-prev ui-btn ui-btn-ghost ui-btn-square ui-circle ui-ease-btn">
                                        <svg class="ui-icon ui-margin-3-r"><use href="#angle-left"/></svg>
                                    </button>
                                    <button title="Next" class="ui-next ui-btn ui-btn-ghost ui-btn-square ui-circle ui-ease-btn">
                                        <svg class="ui-icon ui-margin-3-l"><use href="#angle-right"/></svg>
                                    </button>
                                    <span class="ui-photo-slider-nav ui-ease-1st-layout"></span>
                                </span>
                                <span class="ui-font-18">Purple</span>
                                <span class="ui-color-black-50 ui-block ui-margin-10-v">beats by dr. dre Studio 3 Bluetooth Headphones</span>
                                <b class="ui-font-22">$79.95</b> <b class="ui-color-black-50 ui-font-overline">$99.99</b>
                                <span class="ui-block">
                                    <svg class="ui-icon ui-icon-sm ui-margin-5-r"><use href="#check-badge"/></svg> 20% off
                                </span>
                                <ul class="ui-list-inline ui-margin-15-v ui-right">
                                    <li class="ui-circle ui-padding-5 ui-border-dual ui-product-pink"></li>
                                    <li class="ui-circle ui-padding-5 ui-border-dual ui-product-white"></li>
                                </ul>
                                <span class="ui-left ui-padding-15-v ui-icons-xs">
                                    <svg class="ui-icon ui-color-yellow"><use href="#star-fill"/></svg>
                                    <b class="ui-color-black-50">3.9</b>
                                    <span class="ui-color-black-25">
                                        <svg class="ui-icon ui-margin-5-l"><use href="#comment"/></svg> 9
                                    </span>
                                </span>
                            </a>
                        </div>
                    </div>

                    <div class="ui-row">
                        <div class="ui-col-12 ui-align-c">
                            <button class="load-more ui-btn ui-btn-lg ui-btn-xs-fluid ui-padding-30-h ui-circle ui-ease-btn">Load more</button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
</main>

<!-- mobile menu -->
<div class="ui-mobile-menu ui-show-r ui-ease-layout ui-ease-in-out">
    <div class="ui-mobile-menu-title ui-padding-20-v ui-font-18 ui-border-b">
        <button class="ui-btn ui-btn-square ui-btn-lg ui-btn-ghost ui-circle ui-ease-btn ui-close-mobile-menu">
            <svg class="ui-icon ui-no-opacity"><use href="#remove"/></svg>
        </button>
        Filters
    </div>
    <div class="ui-mobile-menu-content ui-padding-10 ui-scroll-v"></div>
</div>