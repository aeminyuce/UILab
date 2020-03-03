<!-- custom CSS -->
<style>
    body { background: #fdfdfd; }
    .col-218 { width: 218px; }
</style>

<!-- custom js -->
<script>

    lineCharts.rows = 4; // set number of rows
    lineCharts.rowsHeight = 36; // set height of single row (px)

    lineCharts.top = 16; // set top space (px)
    lineCharts.right = 20; // set right space (px)
    lineCharts.bottom = 10; // set bottom space (px)

    lineCharts.showBgGrid = false; // set showing bg grid
    lineCharts.showInfo = false; // set showing info

    alerts.messageTheme = 'theme-default2 ui-dark';

    events.onload(function () {
        events.on('.load-more', 'click', function () {

            var that, target, scrollPos;

            that = this;
            loadingButton.toggle(this);

            scrollPos = that.getBoundingClientRect().top + window.pageYOffset - 15;

            ajax({
                url : 'ajax/ajax-products.php',
                callback: function (status, response) {

                    target = selector('.products-list');
                    if (target.length > 0) {

                        if (status === 'success') {

                            target[0].insertAdjacentHTML('beforeend', response);

                            alerts.message({
                                msg: 'Products loaded!',
                                theme: 'theme-default2 ui-dark'
                            });

                            loadingButton.toggle(that);
                            setTimeout(function () {
                                window.scrollTo(0, scrollPos);
                            }, 150);

                        } else {

                            alerts.message({
                                msg: 'Products not loaded!',
                                theme: 'danger',
                                pos: 'tr'
                            });

                            loadingButton.toggle(that);

                        }

                    }

                }
            });

        });

    });

</script>

<main class="container no-gutter">
    <div class="fixed">
        <div class="col-static no-fluid padding-30-v padding-15-h md-no-padding-h">

            <div class="col-218 padding-10 hidden-md">
                <div class="add-mobile-menu-r">

                    <div class="card padding-15 round shadow-lg">
                        <div data-src="json/headphones.json" data-val="name" class="autocomplete text text-icon-both round no-border theme-gray ui-light ease-form has-clear">
                            <i class="icon text-icon-l icon-search"></i>
                            <button type="button" class="clear-form icon icon-remove"></button>
                            <input type="text" placeholder="Search" autocomplete="off">
                        </div>

                        <span class="sp25"></span>

                        <h5 class="margin-15-b x-dark">CATEGORIES</h5>
                        <ul class="list-unstyled list-spacer-10">
                            <li><a href="#">Headphones</a></li>
                            <li>
                                <a href="#"><b>Over-Ear Headphones</b></a>
                                <ul class="list-unstyled padding-15-l">
                                    <li><a class="hoverline" href="#">Sony</a></li>
                                    <li><a class="hoverline" href="#">Logitech</a></li>
                                    <li><a class="hoverline" href="#">JBL</a></li>
                                    <li><a class="hoverline" href="#">Beats</a></li>
                                    <li><a class="hoverline" href="#">Pioneer</a></li>
                                    <li><a class="hoverline" href="#">Philips</a></li>
                                    <li><a class="hoverline" href="#">Sony</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div class="card round shadow-lg theme-default2">

                        <div class="padding-15 md-align-c border-b">
                            <h5 class="margin-10-b x-dark">COLORS</h5>
                            <label class="custom">
                                <span class="check-custom no-border circle ease-form" style="background: #ee2329;">
                                    <input type="checkbox" checked>
                                    <i class="state bg-white circle"></i>
                                </span>
                            </label>
                            <label class="custom">
                                <span class="check-custom no-border circle ease-form" style="background: #d22fdf;">
                                    <input type="checkbox" checked>
                                    <i class="state bg-white circle"></i>
                                </span>
                            </label>
                            <label class="custom">
                                <span class="check-custom no-border circle ease-form" style="background: #248ddd;">
                                    <input type="checkbox" checked>
                                    <i class="state bg-white circle"></i>
                                </span>
                            </label>
                            <label class="custom">
                                <span class="check-custom no-border circle ease-form" style="background: #e96b3a;">
                                    <input type="checkbox">
                                    <i class="state bg-white circle"></i>
                                </span>
                            </label>
                            <label class="custom">
                                <span class="check-custom no-border circle ease-form" style="background: #f0ce44;">
                                    <input type="checkbox">
                                    <i class="state bg-white circle"></i>
                                </span>
                            </label>

                            <span class="clearfix hidden-md"></span>

                            <label class="custom">
                                <span class="check-custom no-border circle ease-form" style="background: #15181d;">
                                    <input type="checkbox" checked>
                                    <i class="state bg-white circle"></i>
                                </span>
                            </label>
                            <label class="custom">
                                <span class="check-custom border bg-white circle ease-form">
                                    <input type="checkbox" checked>
                                    <i class="state circle border" style="background: #f5f5f5;"></i>
                                </span>
                            </label>
                        </div>

                        <div class="padding-15 border-b">

                            <h5 class="margin-10-b x-dark">PROMOTIONS</h5>
                            <label class="custom block">
                                <span class="switch-custom right round ease-form">
                                    <input type="checkbox" checked>
                                    <i class="ui-dark state"></i>
                                </span>
                                <i class="icon margin-10-r icon-truck"></i>Fast Delivery
                            </label>
                            <span class="sp5"></span>
                            <label class="custom block">
                                <span class="switch-custom right round ease-form">
                                    <input type="checkbox" checked>
                                    <i class="ui-dark state"></i>
                                </span>
                                <i class="icon margin-10-r icon-check-badge"></i>Deals
                            </label>

                        </div>

                        <div class="padding-15 border-b">

                            <h5 class="margin-10-b x-dark">CONNECTIONS</h5>
                            <label class="custom block">
                                <span class="check-custom round ease-form">
                                    <input type="checkbox" checked>
                                    <i class="ui-dark state"></i>
                                </span>
                                Wireless <span class="dark">4</span>
                            </label>
                            <label class="custom block">
                                <span class="check-custom round ease-form">
                                    <input type="checkbox" checked>
                                    <i class="ui-dark state"></i>
                                </span>
                                Bluetooth <span class="dark">11</span>
                            </label>
                            <label class="custom block">
                                <span class="check-custom round ease-form">
                                    <input type="checkbox" checked>
                                    <i class="ui-dark state"></i>
                                </span>
                                Wired <span class="dark">9</span>
                            </label>
                            <label class="custom block">
                                <span class="check-custom round ease-form">
                                    <input type="checkbox">
                                    <i class="ui-dark state"></i>
                                </span>
                                Radio Channel <span class="dark">17</span>
                            </label>

                            <span class="sp10"></span>
                            <button class="btn btn-sm circle ease-btn">
                                See All <i class="icon icon-xxs icon-arrow-down margin-5-l no-opacity"></i>
                            </button>

                        </div>

                        <div class="padding-15">
                            <button type="submit" class="btn btn-lg block round ui-dark ease-btn"><b>SEARCH</b></button>
                        </div>

                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12 sm-no-padding-t">

                    <div class="card margin-10-b round shadow-lg">
                        <div class="row row-lg-gap sm-fluid">
                            <div class="col-12 border-b">
                                <h4>
                                    <i class="icon icon-lg icon-history margin-5-r"></i>
                                    <span class="inline-block">
                                        Price History, <span class="dark">Over-Ear Headphones</span>
                                    </span>
                                </h4>
                            </div>
                            <div class="col-8">
                                <div class="line-charts ease-line-charts" data-x="1st Week,2nd Week,3rd Week,4th Week">
                                    <ul class="line" data-type="curved dashed">
                                        <li data-y="156"></li>
                                        <li data-y="180"></li>
                                        <li data-y="144"></li>
                                        <li data-y="157"></li>
                                    </ul>
                                    <ul class="line" data-type="curved filled">
                                        <li data-y="134"></li>
                                        <li data-y="199"></li>
                                        <li data-y="120"></li>
                                        <li data-y="174"></li>
                                    </ul>
                                </div>
                                <div class="align-c">
                                    Last 4 Weeks
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="row no-fluid margin-10-b">
                                    <div class="col-6">
                                        <span class="dark">Highest:</span>
                                        <span class="largest block">$199</span>
                                    </div>
                                    <div class="col-6">
                                        <span class="dark">Lowest:</span>
                                        <span class="largest block">$120</span>
                                    </div>
                                </div>
                                <i class="icon icon-sm icon-chart-line margin-5-r margin-2-b"></i>
                                <span class="large">Current prices <b>12% lower</b> than, average prices!</span>
                                <ul class="list-unstyled dark margin-15-t inline-block-2nd">
                                    <li>
                                        <b class="circle padding-5 margin-4-l margin-5-r" style="background: #ff9f40;"></b>
                                        <span>Headphones Averages</span>
                                    </li>
                                    <li>
                                        <b class="circle padding-5 margin-4-l margin-5-r" style="background: #36a2eb;"></b>
                                        <span>Over-Ear Headphones Averages</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="row sm-fluid sm-align-c">
                        <div class="col-6">
                            <span class="sp5 hidden-sm"></span>
                            <span class="large">Found <b>47</b> and displaying <b>9</b> products.</span>
                        </div>
                        <div class="col-6 align-r sm-no-padding-t">
                            <div class="select round form-inline no-border theme-gray ui-light ease-form">
                                <i class="icon icon-angle-down"></i>
                                <select>
                                    <option value="1" checked>Sort by</option>
                                    <option value="2">Top Rated</option>
                                    <option value="3">Price (Low to High)</option>
                                    <option value="4">Price (High to Low)</option>
                                </select>
                            </div>
                            <div class="select round form-inline no-border theme-gray ui-light ease-form">
                                <i class="icon icon-angle-down"></i>
                                <select>
                                    <option value="12" checked>Show 9</option>
                                    <option value="24">Show 18</option>
                                    <option value="36">Show 27</option>
                                </select>
                            </div>
                            <span class="sp10 visible-xs"></span>
                            <span class="align-c theme-default2 ease-1st-btn">
                                <button class="btn btn-square round ui-dark">
                                    <i class="icon icon-grid-column"></i>
                                </button>
                                <button class="btn btn-square round">
                                    <i class="icon icon-grid-row"></i>
                                </button>
                                <button class="btn btn-square round show-mobile-menu-r visible-md">
                                    <i class="icon icon-bars-right"></i>
                                </button>
                            </span>
                        </div>
                    </div>

                    <div class="products-list row hover-shadow-2nd ease-2nd-layout hover-t-2nd">
                        <div class="col-4 col-sm-6">
                            <a class="full-h padding-15 no-padding-t card round shadow-lg ease-layout" href="#">
                                <span class="photo-slider margin-20-b">
                                    <i class="slider-loader icon icon-xl icon-loader-line"></i>
                                    <img src="img/product_01.png"
                                            srcset="img/product_01@2x.png"
                                            data-src="img/product_01.png,img/product_02.png,img/product_03.png"
                                            data-srcset="img/product_01@2x.png,img/product_02@2x.png,img/product_03@2x.png"
                                        alt="">
                                    <button title="Prev" class="slide-l round ease-layout">
                                        <i class="icon icon-angle-left"></i>
                                    </button>
                                    <button title="Next" class="slide-r round ease-layout">
                                        <i class="icon icon-angle-right"></i>
                                    </button>
                                    <span class="slider-nav"></span>
                                </span>
                                <span class="x-large">Red</span>
                                <span class="x-dark block margin-10-v">beats by dr. dre Studio 3 Wireless Headphones</span>
                                <b class="xx-large">$164.98</b>
                                <span class="block">
                                    <i class="icon icon-sm icon-truck margin-2-r"></i> Fast Delivery
                                </span>
                                <ul class="list-inline margin-15-v right">
                                    <li class="circle padding-5 border-dual" style="border-color: #ee2329;"></li>
                                    <li class="circle padding-5 border-dual" style="border-color: #d22fdf;"></li>
                                    <li class="circle padding-5 border-dual" style="border-color: #248ddd;"></li>
                                </ul>
                                <span class="left padding-15-v margin-2-t">
                                    <i class="icon icon-sm icon-star-fill font-yellow margin-4-b"></i>
                                    <b class="x-dark">4.8</b>
                                    <span class="dark">
                                        <i class="icon icon-sm icon-comment margin-3-b margin-5-l"></i> 24
                                    </span>
                                </span>
                            </a>
                        </div>
                        <div class="col-4 col-sm-6">
                            <a class="full-h padding-15 no-padding-t card round shadow-lg ease-layout" href="#">
                                <span class="photo-slider margin-20-b">
                                    <i class="slider-loader icon icon-xl icon-loader-line"></i>
                                    <img src="img/product_02.png"
                                            srcset="img/product_02@2x.png"
                                            data-src="img/product_02.png,img/product_04.png"
                                            data-srcset="img/product_02@2x.png,img/product_04@2x.png"
                                        alt="">
                                    <button title="Prev" class="slide-l round ease-layout">
                                        <i class="icon icon-angle-left"></i>
                                    </button>
                                    <button title="Next" class="slide-r round ease-layout">
                                        <i class="icon icon-angle-right"></i>
                                    </button>
                                    <span class="slider-nav"></span>
                                </span>
                                <span class="x-large">Purple</span>
                                <span class="x-dark block margin-10-v">beats by dr. dre Studio 3 Bluetooth Headphones</span>
                                <b class="xx-large">$79.95</b> <b class="x-dark overline">$99.99</b>
                                <span class="block">
                                    <i class="icon icon-sm margin-5-r icon-check-badge"></i> 20% off
                                </span>
                                <ul class="list-inline margin-15-v right">
                                    <li class="circle padding-5 border-dual" style="border-color: #d22fdf;"></li>
                                    <li class="circle padding-5 border-dual" style="border-color: #dedede;"></li>
                                </ul>
                                <span class="left padding-15-v margin-2-t">
                                    <i class="icon icon-sm icon-star-fill font-yellow margin-4-b"></i>
                                    <b class="x-dark">3.9</b>
                                    <span class="dark">
                                        <i class="icon icon-sm icon-comment margin-3-b margin-5-l"></i> 9
                                    </span>
                                </span>
                            </a>
                        </div>
                        <div class="col-4 col-sm-6">
                            <a class="full-h padding-15 no-padding-t card round shadow-lg ease-layout" href="#">
                                <span class="photo-slider margin-20-b">
                                    <i class="slider-loader icon icon-xl icon-loader-line"></i>
                                    <img src="img/product_03.png"
                                            srcset="img/product_03@2x.png"
                                            data-src="img/product_03.png,img/product_05.png"
                                            data-srcset="img/product_03@2x.png,img/product_05@2x.png"
                                        alt="">
                                    <button title="Prev" class="slide-l round ease-layout">
                                        <i class="icon icon-angle-left"></i>
                                    </button>
                                    <button title="Next" class="slide-r round ease-layout">
                                        <i class="icon icon-angle-right"></i>
                                    </button>
                                    <span class="slider-nav"></span>
                                </span>
                                <span class="x-large">Blue</span>
                                <span class="x-dark block margin-10-v">beats by dr. dre Studio 3 Wireless Headphones</span>
                                <b class="xx-large">$149.99</b>
                                <span class="block">
                                    <i class="icon icon-sm icon-truck margin-2-r"></i> Fast Delivery
                                </span>
                                <ul class="list-inline margin-15-v right">
                                    <li class="circle padding-5 border-dual" style="border-color: #248ddd;"></li>
                                    <li class="circle padding-5 border-dual" style="border-color: #3b3b3b;"></li>
                                </ul>
                                <span class="left padding-15-v margin-2-t">
                                    <i class="icon icon-sm icon-star-fill font-yellow margin-4-b"></i>
                                    <b class="x-dark">4.3</b>
                                    <span class="dark">
                                        <i class="icon icon-sm icon-comment margin-3-b margin-5-l"></i> 11
                                    </span>
                                </span>
                            </a>
                        </div>
                        <div class="col-4 col-sm-6">
                            <a class="full-h padding-15 no-padding-t card round shadow-lg ease-layout" href="#">
                                <span class="photo-slider margin-20-b">
                                    <i class="slider-loader icon icon-xl icon-loader-line"></i>
                                    <img src="img/product_04.png"
                                            srcset="img/product_04@2x.png"
                                        alt="">
                                    <button title="Prev" class="slide-l round ease-layout">
                                        <i class="icon icon-angle-left"></i>
                                    </button>
                                    <button title="Next" class="slide-r round ease-layout">
                                        <i class="icon icon-angle-right"></i>
                                    </button>
                                    <span class="slider-nav"></span>
                                </span>
                                <span class="x-large">White</span>
                                <span class="x-dark block margin-10-v">beats by dr. dre Studio 3 Wired Headphones</span>
                                <b class="xx-large">$89.95</b> <b class="x-dark overline">$119.99</b>
                                <span class="block">
                                    <i class="icon icon-sm margin-5-r icon-check-badge"></i> 20% off
                                </span>
                                <ul class="list-inline margin-15-v right">
                                    <li class="circle padding-5 border-dual" style="border-color: #dedede;"></li>
                                </ul>
                                <span class="left padding-15-v margin-2-t">
                                    <i class="icon icon-sm icon-star-fill font-yellow margin-4-b"></i>
                                    <b class="x-dark">4.9</b>
                                    <span class="dark">
                                        <i class="icon icon-sm icon-comment margin-3-b margin-5-l"></i> 32
                                    </span>
                                </span>
                            </a>
                        </div>
                        <div class="col-4 col-sm-6">
                            <a class="full-h padding-15 no-padding-t card round shadow-lg ease-layout" href="#">
                                <span class="photo-slider margin-20-b">
                                    <i class="slider-loader icon icon-xl icon-loader-line"></i>
                                    <img src="img/product_05.png"
                                            srcset="img/product_05@2x.png"
                                        alt="">
                                    <button title="Prev" class="slide-l round ease-layout">
                                        <i class="icon icon-angle-left"></i>
                                    </button>
                                    <button title="Next" class="slide-r round ease-layout">
                                        <i class="icon icon-angle-right"></i>
                                    </button>
                                    <span class="slider-nav"></span>
                                </span>
                                <span class="x-large">Black</span>
                                <span class="x-dark block margin-10-v">beats by dr. dre Studio 3 Wired Headphones</span>
                                <b class="xx-large">$89.95</b> <b class="x-dark overline">$119.99</b>
                                <span class="block">
                                    <i class="icon icon-sm margin-5-r icon-check-badge"></i> 20% off
                                </span>
                                <ul class="list-inline margin-15-v right">
                                    <li class="circle padding-10 border" style="background: #3b3b3b;"></li>
                                </ul>
                                <span class="left padding-15-v margin-2-t">
                                    <i class="icon icon-sm icon-star-fill font-yellow margin-4-b"></i>
                                    <b class="x-dark">4.6</b>
                                    <span class="dark">
                                        <i class="icon icon-sm icon-comment margin-3-b margin-5-l"></i> 44
                                    </span>
                                </span>
                            </a>
                        </div>
                        <div class="col-4 col-sm-6">
                            <a class="full-h padding-15 no-padding-t card round shadow-lg ease-layout" href="#">
                                <span class="photo-slider margin-20-b">
                                    <i class="slider-loader icon icon-xl icon-loader-line"></i>
                                    <img
                                            src="img/product_02.png"
                                            srcset="img/product_02@2x.png"
                                            data-src="img/product_02.png,img/product_04.png"
                                            data-srcset="img/product_02@2x.png,img/product_04@2x.png"
                                        alt="">
                                    <button title="Prev" class="slide-l round ease-layout">
                                        <i class="icon icon-angle-left"></i>
                                    </button>
                                    <button title="Next" class="slide-r round ease-layout">
                                        <i class="icon icon-angle-right"></i>
                                    </button>
                                    <span class="slider-nav"></span>
                                </span>
                                <span class="x-large">Purple</span>
                                <span class="x-dark block margin-10-v">beats by dr. dre Studio 3 Bluetooth Headphones</span>
                                <b class="xx-large">$79.95</b> <b class="x-dark overline">$99.99</b>
                                <span class="block">
                                    <i class="icon icon-sm margin-5-r icon-check-badge"></i> 20% off
                                </span>
                                <ul class="list-inline margin-15-v right">
                                    <li class="circle padding-5 border-dual" style="border-color: #d22fdf;"></li>
                                    <li class="circle padding-5 border-dual" style="border-color: #dedede;"></li>
                                </ul>
                                <span class="left padding-15-v margin-2-t">
                                    <i class="icon icon-sm icon-star-fill font-yellow margin-4-b"></i>
                                    <b class="x-dark">3.9</b>
                                    <span class="dark">
                                        <i class="icon icon-sm icon-comment margin-3-b margin-5-l"></i> 9
                                    </span>
                                </span>
                            </a>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12 align-c">
                            <button class="load-more btn btn-lg btn-xs-fluid padding-30-h circle ease-btn">Load more</button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
</main>

<!-- mobile menu -->
<div class="mobile-menu show-r ease-layout ease-slow ease-in-out">
    <div class="mobile-menu-title padding-20-v x-large border-b">
        <button class="btn btn-square btn-lg btn-ghost circle ease-btn close-mobile-menu">
            <i class="icon icon-sm icon-remove no-opacity"></i>
        </button>
        Filters
    </div>
    <div class="mobile-menu-content padding-10 scroll-v"></div>
</div>