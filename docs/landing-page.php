<!-- custom CSS -->
<style>
    body { background-color: #fffefb; }

    .theme-farmer.ui-x-light,.theme-farmer .ui-x-light:not([class*="theme-"]) { background-color: #fcf6e6; }
    .theme-farmer.ui-light,.theme-farmer .ui-light:not([class*="theme-"]) { background-color: #f3deaa; }
    .theme-farmer.ui-dark,.theme-farmer .ui-dark:not([class*="theme-"]) { background-color: #ffba0c; }
    .theme-farmer.ui-text,.theme-farmer .ui-text:not([class*="theme-"]) { color: #ffba0c; }
    .theme-farmer.ui-border,.theme-farmer .ui-border:not([class*="theme-"]) { border-color: #ffba0c; }
    .theme-farmer.ui-x-dark,.theme-farmer .ui-x-dark:not([class*="theme-"]) { background-color: #d19600; }

    .theme-farmer2.ui-x-light,.theme-farmer2 .ui-x-light:not([class*="theme-"]) { background-color: #ebfff2; }
    .theme-farmer2.ui-light,.theme-farmer2 .ui-light:not([class*="theme-"]) { background-color: #befcd3; }
    .theme-farmer2.ui-dark,.theme-farmer2 .ui-dark:not([class*="theme-"]) { background-color: #11da54; }
    .theme-farmer2.ui-text,.theme-farmer2 .ui-text:not([class*="theme-"]) { color: #11da54; }
    .theme-farmer2.ui-border,.theme-farmer2 .ui-border:not([class*="theme-"]) { border-color: #11da54; }
    .theme-farmer2.ui-x-dark,.theme-farmer2 .ui-x-dark:not([class*="theme-"]) { background-color: #00a838; }

    .col-220 { width: 220px; }

    .banner-content { background: no-repeat center center; background-size: cover; }
    .banner-content:after { content: ""; background-color: rgba(17,218,84,.4); position: absolute; top: 0; right: 0; bottom: 0; left: 0; }
    .banner-content > .fixed { z-index: 1; }

    .banner-tab01 { background-image: url(img/agriculture/lg01.jpg); }
    .banner-tab02 { background-image: url(img/agriculture/lg02.jpg); }
    .banner-tab03 { background-image: url(img/agriculture/lg03.jpg); }

    .banner-slogan,.footer-social { background-color: rgba(255,255,255,.45); }
    .banner-slogan > div { background-color: rgba(255,186,12,.8); }

    .highlight-links { margin-top: -80px; z-index: 1; }
    .highlight-links .carousel { margin: 0 -15px; }

    @media (max-width: 959px) {
        .highlight-links { padding: 0 15px; }
    }
    @media (max-width: 620px) {
        .photo-gallery > li .img { height: 150px; }
    }
    @media (prefers-color-scheme: dark) {
        .banner-content:after { background-color: rgba(4, 45, 18, 0.8); }
    }
</style>

<!-- custom js -->
<script>
    lineCharts.colors = ['#ffba0c', '#11da54', '#ff6384', '#9966ff', '#4bc0c0', '#ffcd56', '#84594d', '#bbc451', '#6a6a6a', '#647bc1'];
</script>

<!-- header: start -->
<header class="container no-gutter bg-white" data-classes="shadow-lg">

    <div class="border-b theme-farmer2">
        <div class="fixed padding-10-v sm-no-padding-v">
            <div class="row">
                <div class="col-static no-fluid">
                    <div class="col-220 padding-10">
                        <a href="#"><img src="img/agriculture/logo.png" alt="Agriculture Logo" srcset="img/agriculture/logo@2x.png 2x"></a>
                    </div>
                    <div class="row">
                        <div class="col-12 align-r">

                            <div class="hidden-sm">
                                <div class="ease-1st-btn icons-no-opacity form-lg add-mobile-menu-r">
                                    <a class="btn btn-sm-fluid btn-ghost" href="#">
                                        <i class="icon icon-home margin-5-r visible-sm"></i>
                                        <b>Home</b>
                                    </a>
                                    <div class="dropdown ease-dropdown">
                                        <button class="btn btn-sm-fluid btn-ghost">
                                            <i class="icon icon-box margin-5-r visible-sm"></i>
                                            <b>Products</b>
                                            <i class="toggle-icon icon margin-5-l icon-xs icon-angle-down"></i>
                                        </button>
                                        <ul class="content shadow-lg">
                                            <li><a href="#">Gardening</a></li>
                                            <li><a href="#">Planting</a></li>
                                            <li><a href="#">Irrigation Systems</a></li>
                                            <li><a href="#">Hardscaping</a></li>
                                            <li><a href="#">Gardening</a></li>
                                            <li><a href="#">Planting</a></li>
                                        </ul>
                                    </div>
                                    <a class="btn btn-sm-fluid btn-ghost" href="#">
                                        <i class="icon icon-users margin-5-r visible-sm"></i>
                                        <b>Team</b>
                                    </a>
                                    <a class="btn btn-sm-fluid btn-ghost" href="#">
                                        <i class="icon icon-coins margin-5-r visible-sm"></i>
                                        <b>Pricing</b>
                                    </a>
                                    <a class="btn btn-sm-fluid btn-ghost" href="#">
                                        <i class="icon icon-envelope-open margin-5-r visible-sm"></i>
                                        <b>Contact</b>
                                    </a>
                                    <span class="inline-block margin-10-h hidden-md"></span>
                                    <span class="sp10 visible-sm"></span>
                                    <a class="btn btn-sm-fluid ui-dark" href="#">
                                        <i class="icon icon-sign-in margin-5-r visible-sm"></i>
                                        <b>Login</b>
                                    </a>
                                    <a class="btn btn-sm-fluid theme-farmer ui-dark" href="#">
                                        <i class="icon icon-user-plus margin-5-r visible-sm"></i>
                                        <b>Sign Up</b>
                                    </a>
                                </div>
                            </div>

                            <button class="btn btn-lg btn-square btn-ghost ui-text ease-btn show-mobile-menu-r visible-sm">
                                <i class="icon icon-bars no-opacity"></i>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</header>
<!-- header: end -->

<main class="container no-gutter">

    <!-- tab banner: start -->
    <div class="tabs form-lg ease-tabs" data-classes="ui-text border-b border-lg ui-border">

        <div class="fixed padding-10-t theme-farmer2 set-dark">
            <div class="row row-no-gap-v icons-no-opacity icons-margin-5-r">
                <div class="col-12 xs-align-l align-c ease-1st-btn">
                    <button class="tab btn btn-xs-fluid btn-ghost margin-1-b ui-text border-b border-lg ui-border active">
                        <i class="icon icon-factory ui-text"></i>
                        Long Term Investment
                    </button>
                    <button class="tab btn btn-xs-fluid btn-ghost margin-1-b">
                        <i class="icon icon-network ui-text"></i>
                        Connect with Our Farmers
                    </button>
                    <button class="tab btn btn-xs-fluid btn-ghost margin-1-b">
                        <i class="icon icon-user-circle ui-text"></i>
                        Social Impact Investment
                    </button>
                </div>
            </div>
            <span class="sp10 visible-sm"></span>
        </div>

        <div class="banner-content banner-tab01 tab-content padding-30-v set-relative theme-farmer ui-dark open open-ease">
            <div class="fixed padding-30-v set-relative">
                <div class="row">
                    <div class="col-static">
                        <div class="row row-lg-gap-v">
                            <div class="col-12 md-align-c">

                                <h2 class="xx-largest bold">A New Way to Invest<br>in Agriculture</h2>
                                <p class="xx-large light">We provides farmers, ranchers, private forecasters and agricultural producers with online self service applications and aducational materials.</p>
                                <a href="#" class="btn btn-xs-fluid padding-30-h ui-dark ease-btn">
                                    <i class="icon icon-lg icon-money margin-5-r"></i>
                                    <b>Invest Now</b>
                                </a>

                            </div>
                        </div>
                        <div class="col-450 padding-15-v padding-10-h">

                            <div class="banner-slogan padding-15 set-relative">
                                <div class="align-c padding-15 set-relative shadow-lg">
                                    <span class="sp15"></span>
                                    <i class="icon icon-xxl icon-factory"></i>
                                    <span class="sp30 hidden-md"></span>
                                    <h3 class="bold xx-large">Long term investment</h3>
                                    <p class="x-large">Consider terms that have long term investment program.</p>
                                    <a href="#" class="btn block theme-farmer2 ui-dark ease-btn">
                                        <b>Learn more</b>
                                        <i class="icon icon-long-arrow-right margin-5-l"></i>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <span class="sp30 margin-10-v"></span>
        </div>
        <div class="banner-content banner-tab02 tab-content padding-30-v set-relative theme-farmer ui-dark">
            <div class="fixed padding-30-v set-relative">
                <div class="row">
                    <div class="col-static">
                        <div class="row row-lg-gap-v">
                            <div class="col-12 md-align-c">

                                <h2 class="xx-largest bold">A New Way to Invest<br>in Agriculture</h2>
                                <p class="xx-large light">We provides farmers, ranchers, private forecasters and agricultural producers with online self service applications and aducational materials.</p>
                                <a href="#" class="btn btn-xs-fluid padding-30-h ui-dark ease-btn">
                                    <i class="icon icon-lg icon-money margin-5-r"></i>
                                    <b>Invest Now</b>
                                </a>

                            </div>
                        </div>
                        <div class="col-450 padding-15-v padding-10-h">

                            <div class="banner-slogan padding-15 set-relative">
                                <div class="align-c padding-15 set-relative shadow-lg">
                                    <span class="sp15"></span>
                                    <i class="icon icon-xxl icon-network"></i>
                                    <span class="sp30"></span>
                                    <h3 class="bold xx-large">Connect with Our Farmers</h3>
                                    <p class="x-large">Consider terms that connect with our farmers program.</p>
                                    <a href="#" class="btn block theme-farmer2 ui-dark ease-btn">
                                        <b>Learn more</b>
                                        <i class="icon icon-long-arrow-right margin-5-l"></i>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <span class="sp30 margin-10-v"></span>
        </div>
        <div class="banner-content banner-tab03 tab-content padding-30-v set-relative theme-farmer ui-dark">
            <div class="fixed padding-30-v set-relative">
                <div class="row">
                    <div class="col-static">
                        <div class="row row-lg-gap-v">
                            <div class="col-12 md-align-c">

                                <h2 class="xx-largest bold">A New Way to Invest<br>in Agriculture</h2>
                                <p class="xx-large light">We provides farmers, ranchers, private forecasters and agricultural producers with online self service applications and aducational materials.</p>
                                <a href="#" class="btn btn-xs-fluid padding-30-h ui-dark ease-btn">
                                    <i class="icon icon-lg icon-money margin-5-r"></i>
                                    <b>Invest Now</b>
                                </a>

                            </div>
                        </div>
                        <div class="col-450 padding-15-v padding-10-h">

                            <div class="banner-slogan padding-15 set-relative">
                                <div class="align-c padding-15 set-relative shadow-lg">
                                    <span class="sp15"></span>
                                    <i class="icon icon-xxl icon-user-circle"></i>
                                    <span class="sp30"></span>
                                    <h3 class="bold xx-large">Social Impact Investment</h3>
                                    <p class="x-large">Consider terms that have social impact investment program.</p>
                                    <a href="#" class="btn block theme-farmer2 ui-dark ease-btn">
                                        <b>Learn more</b>
                                        <i class="icon icon-long-arrow-right margin-5-l"></i>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <span class="sp30 margin-10-v"></span>
        </div>

    </div>
    <!-- tab banner: end -->

    <!-- highlight links: start -->
    <div class="highlight-links fixed align-c form-lg theme-farmer2 set-relative">
        <div class="carousel" data-col="4" data-col-md="2" data-col-sm="2" data-col-xs="1" data-slide="4000">
            <div class="carousel-slider hover-shadow-2nd hover-scale-2nd ease-layout ease-slow2x ease-in-out">

                <div class="slide-content padding-15">
                    <div class="card padding-15 full-h shadow-lg ease-layout">
                        <span class="sp15"></span>
                        <i class="icon ui-text icon-xxl icon-leaf"></i>
                        <span class="sp20"></span>
                        <h3 class="xx-large margin-10-b">Planting</h3>
                        <p class="large x-dark">Complete range of lands caping services.</p>
                        <a href="#" class="btn btn-ghost block ui-text ui-dark ease-btn"><b>Learn more</b></a>
                    </div>
                </div>

                <div class="slide-content padding-15">
                    <div class="card padding-15 full-h shadow-lg ease-layout">
                        <span class="sp15"></span>
                        <i class="icon ui-text icon-xxl icon-wind-sock"></i>
                        <span class="sp20"></span>
                        <h3 class="xx-large margin-10-b">Garden Care</h3>
                        <p class="large x-dark">Resolving environmental problems with best results.</p>
                        <a href="#" class="btn btn-ghost block ui-text ui-dark ease-btn"><b>Learn more</b></a>
                    </div>
                </div>

                <div class="slide-content padding-15">
                    <div class="card padding-15 full-h shadow-lg ease-layout">
                        <span class="sp15"></span>
                        <i class="icon ui-text icon-xxl icon-water"></i>
                        <span class="sp20"></span>
                        <h3 class="xx-large margin-10-b">Irrigation System</h3>
                        <p class="large x-dark">Idea of denouncing pleasure and praising.</p>
                        <a href="#" class="btn btn-ghost block ui-text ui-dark ease-btn"><b>Learn more</b></a>
                    </div>
                </div>

                <div class="slide-content padding-15">
                    <div class="card padding-15 full-h shadow-lg ease-layout">
                        <span class="sp15"></span>
                        <i class="icon ui-text icon-xxl icon-land"></i>
                        <span class="sp20"></span>
                        <h3 class="xx-large margin-10-b">Hardscaping</h3>
                        <p class="large x-dark">Placing int the landscape with great pleasure.</p>
                        <a href="#" class="btn btn-ghost block ui-text ui-dark ease-btn"><b>Learn more</b></a>
                    </div>
                </div>

                <div class="slide-content padding-15">
                    <div class="card padding-15 full-h shadow-lg ease-layout">
                        <span class="sp15"></span>
                        <i class="icon ui-text icon-xxl icon-leaf"></i>
                        <span class="sp20"></span>
                        <h3 class="xx-large margin-10-b">Planting</h3>
                        <p class="large x-dark">Complete range of lands caping services.</p>
                        <a href="#" class="btn btn-ghost block ui-text ui-dark ease-btn"><b>Learn more</b></a>
                    </div>
                </div>

                <div class="slide-content padding-15">
                    <div class="card padding-15 full-h shadow-lg ease-layout">
                        <span class="sp15"></span>
                        <i class="icon ui-text icon-xxl icon-wind-sock"></i>
                        <span class="sp20"></span>
                        <h3 class="xx-large margin-10-b">Garden Care</h3>
                        <p class="large x-dark">Resolving environmental problems with best results.</p>
                        <a href="#" class="btn btn-ghost block ui-text ui-dark ease-btn"><b>Learn more</b></a>
                    </div>
                </div>

                <div class="slide-content padding-15">
                    <div class="card padding-15 full-h shadow-lg ease-layout">
                        <span class="sp15"></span>
                        <i class="icon ui-text icon-xxl icon-water"></i>
                        <span class="sp20"></span>
                        <h3 class="xx-large margin-10-b">Irrigation System</h3>
                        <p class="large x-dark">Idea of denouncing pleasure and praising.</p>
                        <a href="#" class="btn btn-ghost block ui-text ui-dark ease-btn"><b>Learn more</b></a>
                    </div>
                </div>

                <div class="slide-content padding-15">
                    <div class="card padding-15 full-h shadow-lg ease-layout">
                        <span class="sp15"></span>
                        <i class="icon ui-text icon-xxl icon-land"></i>
                        <span class="sp20"></span>
                        <h3 class="xx-large margin-10-b">Hardscaping</h3>
                        <p class="large x-dark">Placing int the landscape with great pleasure.</p>
                        <a href="#" class="btn btn-ghost block ui-text ui-dark ease-btn"><b>Learn more</b></a>
                    </div>
                </div>

            </div>
            <div class="carousel-nav margin-10-t icons-no-opacity ease-1st-btn">
                <button class="carousel-prev btn btn-square btn-ghost ui-dark"><i class="icon icon-arrow-left ui-text"></i></button>
                <span class="dots ui-text"></span>
                <button class="carousel-next btn btn-square btn-ghost ui-dark"><i class="icon icon-arrow-right ui-text"></i></button>
            </div>
        </div>
    </div>
    <span class="sp30 margin-15-v"></span>
    <!-- highlight links: end -->

    <!-- news: start -->
    <div class="padding-30-v theme-farmer set-dark ui-x-light">
        <div class="fixed margin-30-b">
            <div class="row">
                <div class="col-12">
                    <h2 class="bold margin-10-b">News</h2>
                    <h3 class="ui-text">Follow our activities.</h3>
                </div>
            </div>
        </div>
        <div class="tabs form-lg border-t padding-10-t ease-tabs" data-classes="ui-text border-b border-lg ui-border">

            <div class="fixed">
                <div class="row row-no-gap-v icons-no-opacity icons-margin-5-r">
                    <div class="col-12 xs-align-l align-c ease-1st-btn">
                        <button class="tab btn btn-xs-fluid btn-ghost margin-1-b ui-text border-b border-lg ui-border active">
                            <i class="icon icon-building ui-text"></i>
                            Company
                        </button>
                        <button class="tab btn btn-xs-fluid btn-ghost margin-1-b">
                            <i class="icon icon-comment ui-text"></i>
                            Social
                        </button>
                        <button class="tab btn btn-xs-fluid btn-ghost margin-1-b">
                            <i class="icon icon-users ui-text"></i>
                            Customers
                        </button>
                    </div>
                </div>
                <span class="sp10 visible-sm"></span>
            </div>

            <div class="tab-content padding-10 open open-ease">
                <div class="row sm-fluid hover-shadow-2nd hover-t-2nd">
                    <div class="col-3 col-md-6">
                        <a class="card full-h shadow ease-layout" href="#">

                            <span class="padding-15 block">
                                <span class="xx-large block">Ready to modern agriculture.</span>
                                <b class="dark margin-15-b block">Company</b>

                                <img class="img-fluid margin-15-b" src="img/agriculture/news02.jpg" alt="Agriculture News">
                                <span class="x-dark large">Vivamus egestas ligula quis ligula cursus, ut faucibus metus vehicula. Donec placerat purus ipsum, eu ultrices justo placerat...</span>
                            </span>

                            <span class="small dark border-t padding-10 block inline-block-1st">
                                <i class="icon icon-xs icon-clock margin-2-r"></i>
                                <b class="margin-10-r">SEPTEMBER 30, 2019</b>

                                <i class="icon icon-xs icon-eye margin-2-r"></i>
                                <b class="margin-10-r">116</b>

                                <i class="icon icon-xs icon-comment margin-2-r"></i>
                                <b>2</b>
                            </span>

                        </a>
                    </div>
                    <div class="col-3 col-md-6">
                        <a class="card full-h shadow ease-layout" href="#">

                            <span class="padding-15 block">
                                <span class="xx-large block">Farmers happy now.</span>
                                <b class="dark margin-15-b block">Company</b>

                                <img class="img-fluid margin-15-b" src="img/agriculture/news01.jpg" alt="Agriculture News">
                                <span class="x-dark large">Mauris nunc odio, pretium id efficitur eget, sodales in libero. Ut congue consequat nulla sit amet dapibus. Sed vel pharetra tellus...</span>
                            </span>

                            <span class="small dark border-t padding-10 block inline-block-1st">
                                <i class="icon icon-xs icon-clock margin-2-r"></i>
                                <b class="margin-10-r">SEPTEMBER 21, 2019</b>

                                <i class="icon icon-xs icon-eye margin-2-r"></i>
                                <b class="margin-10-r">147</b>

                                <i class="icon icon-xs icon-comment margin-2-r"></i>
                                <b>8</b>
                            </span>

                        </a>
                    </div>
                    <div class="col-3 col-md-6">
                        <a class="card full-h shadow ease-layout" href="#">

                            <span class="padding-15 block">
                                <span class="xx-large block">New market prospects.</span>
                                <b class="dark margin-15-b block">Company</b>

                                <img class="img-fluid margin-15-b" src="img/agriculture/news03.jpg" alt="Agriculture News">
                                <span class="x-dark large">Praesent elit erat, consequat nec pellentesque et, pharetra et arcu. Cras aliquet placerat est, nec dapibus mi. Aliquam ullamcorper...</span>
                            </span>

                            <span class="small dark border-t padding-10 block inline-block-1st">
                                <i class="icon icon-xs icon-clock margin-2-r"></i>
                                <b class="margin-10-r">SEPTEMBER 09, 2019</b>

                                <i class="icon icon-xs icon-eye margin-2-r"></i>
                                <b class="margin-10-r">205</b>

                                <i class="icon icon-xs icon-comment margin-2-r"></i>
                                <b>12</b>
                            </span>

                        </a>
                    </div>
                    <div class="col-3 col-md-6">
                        <a class="card full-h shadow ease-layout" href="#">

                            <span class="padding-15 block">
                                <span class="xx-large block">About product breeding</span>
                                <b class="dark margin-15-b block">Company</b>

                                <img class="img-fluid margin-15-b" src="img/agriculture/news04.jpg" alt="Agriculture News">
                                <span class="x-dark large">Mauris accumsan quam quis orci rhoncus eleifend. Sed varius sagittis magna ut rhoncus. Curabitur pulvinar dictum egestas. Duis sit...</span>
                            </span>

                            <span class="small dark border-t padding-10 block inline-block-1st">
                                <i class="icon icon-xs icon-clock margin-2-r"></i>
                                <b class="margin-10-r">SEPTEMBER 01, 2019</b>

                                <i class="icon icon-xs icon-eye margin-2-r"></i>
                                <b class="margin-10-r">279</b>

                                <i class="icon icon-xs icon-comment margin-2-r"></i>
                                <b>19</b>
                            </span>

                        </a>
                    </div>
                </div>
                <div class="align-c padding-30-t padding-10-b">
                    <a href="#" class="btn btn-xs-fluid padding-30-h theme-farmer2 ui-dark ease-btn">
                        <b>View all company news</b> <i class="icon icon-long-arrow-right margin-5-l"></i>
                    </a>
                </div>
            </div>
            <div class="tab-content padding-10">
                <div class="row sm-fluid">
                    <div class="col-3 col-md-6">
                        <a class="card full-h shadow ease-layout" href="#">

                            <span class="padding-15 block">
                                <span class="xx-large block">Farmers happy now.</span>
                                <b class="dark margin-15-b block">Social</b>

                                <img class="img-fluid margin-15-b" src="img/agriculture/news01.jpg" alt="Agriculture News">
                                <span class="x-dark large">Mauris nunc odio, pretium id efficitur eget, sodales in libero. Ut congue consequat nulla sit amet dapibus. Sed vel pharetra tellus...</span>
                            </span>

                            <span class="small dark border-t padding-10 block inline-block-1st">
                                <i class="icon icon-xs icon-clock margin-2-r"></i>
                                <b class="margin-10-r">SEPTEMBER 21, 2019</b>

                                <i class="icon icon-xs icon-eye margin-2-r"></i>
                                <b class="margin-10-r">147</b>

                                <i class="icon icon-xs icon-comment margin-2-r"></i>
                                <b>8</b>
                            </span>

                        </a>
                    </div>
                    <div class="col-3 col-md-6">
                        <a class="card full-h shadow ease-layout" href="#">

                            <span class="padding-15 block">
                                <span class="xx-large block">New market prospects.</span>
                                <b class="dark margin-15-b block">Social</b>

                                <img class="img-fluid margin-15-b" src="img/agriculture/news03.jpg" alt="Agriculture News">
                                <span class="x-dark large">Praesent elit erat, consequat nec pellentesque et, pharetra et arcu. Cras aliquet placerat est, nec dapibus mi. Aliquam ullamcorper...</span>
                            </span>

                            <span class="small dark border-t padding-10 block inline-block-1st">
                                <i class="icon icon-xs icon-clock margin-2-r"></i>
                                <b class="margin-10-r">SEPTEMBER 09, 2019</b>

                                <i class="icon icon-xs icon-eye margin-2-r"></i>
                                <b class="margin-10-r">205</b>

                                <i class="icon icon-xs icon-comment margin-2-r"></i>
                                <b>12</b>
                            </span>

                        </a>
                    </div>
                    <div class="col-3 col-md-6">
                        <a class="card full-h shadow ease-layout" href="#">

                            <span class="padding-15 block">
                                <span class="xx-large block">About product breeding</span>
                                <b class="dark margin-15-b block">Social</b>

                                <img class="img-fluid margin-15-b" src="img/agriculture/news04.jpg" alt="Agriculture News">
                                <span class="x-dark large">Mauris accumsan quam quis orci rhoncus eleifend. Sed varius sagittis magna ut rhoncus. Curabitur pulvinar dictum egestas. Duis sit...</span>
                            </span>

                            <span class="small dark border-t padding-10 block inline-block-1st">
                                <i class="icon icon-xs icon-clock margin-2-r"></i>
                                <b class="margin-10-r">SEPTEMBER 01, 2019</b>

                                <i class="icon icon-xs icon-eye margin-2-r"></i>
                                <b class="margin-10-r">279</b>

                                <i class="icon icon-xs icon-comment margin-2-r"></i>
                                <b>19</b>
                            </span>

                        </a>
                    </div>
                    <div class="col-3 col-md-6">
                        <a class="card full-h shadow ease-layout" href="#">

                            <span class="padding-15 block">
                                <span class="xx-large block">Ready to modern agriculture.</span>
                                <b class="dark margin-15-b block">Social</b>

                                <img class="img-fluid margin-15-b" src="img/agriculture/news02.jpg" alt="Agriculture News">
                                <span class="x-dark large">Vivamus egestas ligula quis ligula cursus, ut faucibus metus vehicula. Donec placerat purus ipsum, eu ultrices justo placerat...</span>
                            </span>

                            <span class="small dark border-t padding-10 block inline-block-1st">
                                <i class="icon icon-xs icon-clock margin-2-r"></i>
                                <b class="margin-10-r">SEPTEMBER 30, 2019</b>

                                <i class="icon icon-xs icon-eye margin-2-r"></i>
                                <b class="margin-10-r">116</b>

                                <i class="icon icon-xs icon-comment margin-2-r"></i>
                                <b>2</b>
                            </span>

                        </a>
                    </div>
                </div>
                <div class="align-c padding-30-t padding-10-b">
                    <a href="#" class="btn btn-xs-fluid padding-30-h theme-farmer2 ui-dark ease-btn">
                        <b>View all social news</b> <i class="icon icon-long-arrow-right margin-5-l"></i>
                    </a>
                </div>
            </div>
            <div class="tab-content padding-10">
                <div class="row sm-fluid">
                    <div class="col-3 col-md-6">
                        <a class="card full-h shadow ease-layout" href="#">

                            <span class="padding-15 block">
                                <span class="xx-large block">Farmers happy now.</span>
                                <b class="dark margin-15-b block">Customers</b>

                                <img class="img-fluid margin-15-b" src="img/agriculture/news01.jpg" alt="Agriculture News">
                                <span class="x-dark large">Mauris nunc odio, pretium id efficitur eget, sodales in libero. Ut congue consequat nulla sit amet dapibus. Sed vel pharetra tellus...</span>
                            </span>

                            <span class="small dark border-t padding-10 block inline-block-1st">
                                <i class="icon icon-xs icon-clock margin-2-r"></i>
                                <b class="margin-10-r">SEPTEMBER 21, 2019</b>

                                <i class="icon icon-xs icon-eye margin-2-r"></i>
                                <b class="margin-10-r">147</b>

                                <i class="icon icon-xs icon-comment margin-2-r"></i>
                                <b>8</b>
                            </span>

                        </a>
                    </div>
                    <div class="col-3 col-md-6">
                        <a class="card full-h shadow ease-layout" href="#">

                            <span class="padding-15 block">
                                <span class="xx-large block">Ready to modern agriculture.</span>
                                <b class="dark margin-15-b block">Customers</b>

                                <img class="img-fluid margin-15-b" src="img/agriculture/news02.jpg" alt="Agriculture News">
                                <span class="x-dark large">Vivamus egestas ligula quis ligula cursus, ut faucibus metus vehicula. Donec placerat purus ipsum, eu ultrices justo placerat...</span>
                            </span>

                            <span class="small dark border-t padding-10 block inline-block-1st">
                                <i class="icon icon-xs icon-clock margin-2-r"></i>
                                <b class="margin-10-r">SEPTEMBER 30, 2019</b>

                                <i class="icon icon-xs icon-eye margin-2-r"></i>
                                <b class="margin-10-r">116</b>

                                <i class="icon icon-xs icon-comment margin-2-r"></i>
                                <b>2</b>
                            </span>

                        </a>
                    </div>
                    <div class="col-3 col-md-6">
                        <a class="card full-h shadow ease-layout" href="#">

                            <span class="padding-15 block">
                                <span class="xx-large block">About product breeding</span>
                                <b class="dark margin-15-b block">Customers</b>

                                <img class="img-fluid margin-15-b" src="img/agriculture/news04.jpg" alt="Agriculture News">
                                <span class="x-dark large">Mauris accumsan quam quis orci rhoncus eleifend. Sed varius sagittis magna ut rhoncus. Curabitur pulvinar dictum egestas. Duis sit...</span>
                            </span>

                            <span class="small dark border-t padding-10 block inline-block-1st">
                                <i class="icon icon-xs icon-clock margin-2-r"></i>
                                <b class="margin-10-r">SEPTEMBER 01, 2019</b>

                                <i class="icon icon-xs icon-eye margin-2-r"></i>
                                <b class="margin-10-r">279</b>

                                <i class="icon icon-xs icon-comment margin-2-r"></i>
                                <b>19</b>
                            </span>

                        </a>
                    </div>
                    <div class="col-3 col-md-6">
                        <a class="card full-h shadow ease-layout" href="#">

                            <span class="padding-15 block">
                                <span class="xx-large block">New market prospects.</span>
                                <b class="dark margin-15-b block">Customers</b>

                                <img class="img-fluid margin-15-b" src="img/agriculture/news03.jpg" alt="Agriculture News">
                                <span class="x-dark large">Praesent elit erat, consequat nec pellentesque et, pharetra et arcu. Cras aliquet placerat est, nec dapibus mi. Aliquam ullamcorper...</span>
                            </span>

                            <span class="small dark border-t padding-10 block inline-block-1st">
                                <i class="icon icon-xs icon-clock margin-2-r"></i>
                                <b class="margin-10-r">SEPTEMBER 09, 2019</b>

                                <i class="icon icon-xs icon-eye margin-2-r"></i>
                                <b class="margin-10-r">205</b>

                                <i class="icon icon-xs icon-comment margin-2-r"></i>
                                <b>12</b>
                            </span>

                        </a>
                    </div>
                </div>
                <div class="align-c padding-30-t padding-10-b">
                    <a href="#" class="btn btn-xs-fluid padding-30-h theme-farmer2 ui-dark ease-btn">
                        <b>View all customer news</b> <i class="icon icon-long-arrow-right margin-5-l"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <span class="sp30 margin-15-v"></span>
    <!-- news: end -->

    <!-- gallery: start -->
    <div class="fixed theme-farmer2">
        <div class="row">
            <div class="col-12">
                <h2 class="bold margin-10-b">Our Projects</h2>
                <h3 class="ui-text margin-25-b">What we are doing?</h3>

                <p class="x-dark x-large xs-align-c">Aliquam leo quam, laoreet quis luctus non, vulputate vitae elit. Pellentesque consequat eu mauris ac imperdiet. In dolor velit, pellentesque eu dignissim in, dignissim ac turpis. Sed lobortis diam ante, et posuere ligula convallis suscipit. Maecenas varius ultrices eros, eu vestibulum sem aliquet et.</p>

                <span class="sp30"></span>

                <ul class="photo-gallery block-2nd has-cover ease-photo-gallery">
                    <li>
                        <a class="img has-info show-info" href="img/agriculture/md01.jpg">
                            <img src="img/agriculture/md01.jpg" alt="">
                            <span class="x-large">
                                <i class="icon icon-xxl icon-docs ui-text margin-20-r left hidden-md"></i>
                                <b>Sed nunc mauris, auctor tristique libero non tristique.</b>
                                <span class="light margin-15-t block hidden-md">
                                    Nullam mollis molestie magna nec tincidunt. Phasellus mattis aliquet ex, vel gravida dui elementum ut. Ut euismod nisi in tellus luctus dictum et ut nulla. Sed scelerisque rutrum dui, et suscipit diam sagittis quis. Quisque dapibus varius ornare.
                                </span>
                            </span>
                        </a>
                    </li>
                    <li>
                        <a class="img has-info" href="img/agriculture/md02.jpg">
                            <img src="img/agriculture/md02.jpg" alt="">
                            <span class="x-large theme-farmer ui-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu dignissim libero.</span>
                        </a>
                    </li>
                    <li>
                        <a class="img has-info" href="img/agriculture/md03.jpg">
                            <img src="img/agriculture/md03.jpg" alt="">
                            <span class="x-large ui-dark">Aenean dapibus malesuada posuere. Nulla ac tempus nisi, sed rhoncus purus.</span>
                        </a>
                    </li>
                    <li>
                        <a class="img has-info" href="img/agriculture/md04.jpg">
                            <img src="img/agriculture/md04.jpg" alt="">
                            <span class="x-large theme-farmer ui-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                        </a>
                    </li>
                    <li>
                        <a class="img has-info" href="img/agriculture/md05.jpg">
                            <img src="img/agriculture/md05.jpg" alt="">
                            <span class="x-large ui-dark">Consectetur adipiscing elit. Integer eu dignissim libero.</span>
                        </a>
                    </li>
                    <li>
                        <a class="img has-info" href="img/agriculture/md06.jpg">
                            <img src="img/agriculture/md06.jpg" alt="">
                            <span class="x-large theme-farmer ui-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <span class="sp30 margin-15-v"></span>
    <!-- gallery: end -->

    <!-- statistics: start -->
    <div class="padding-15-t padding-30-b theme-farmer set-dark ui-x-light">
        <div class="fixed padding-30-v">
            <div class="row">
                <div class="col-12">
                    <h2 class="bold margin-10-b">Why Choose Us</h2>
                    <h3 class="ui-text margin-25-b">See detailed statistics.</h3>
                </div>
                <div class="col-static">
                    <div class="row">
                        <div class="col-12">
                            <div class="line-charts ease-line-charts" data-size="10,30" data-x="Mon,Tue,Wed,Thu,Fri,Sat,Sun">
                                <ul class="line" data-name="Last year" data-type="filled">
                                    <li data-y="30" data-link="#1"></li>
                                    <li data-y="50" data-link="#2"></li>
                                    <li data-y="110" data-link="#3"></li>
                                    <li data-y="140" data-link="#4"></li>
                                    <li data-y="220" data-link="#5"></li>
                                    <li data-y="320" data-link="#6"></li>
                                    <li data-y="360" data-link="#7"></li>
                                </ul>
                                <ul class="line" data-name="This year" data-type="filled">
                                    <li data-y="120" data-link="#1"></li>
                                    <li data-y="160" data-link="#2"></li>
                                    <li data-y="180" data-link="#3"></li>
                                    <li data-y="220" data-link="#4"></li>
                                    <li data-y="280" data-link="#5"></li>
                                    <li data-y="390" data-link="#6"></li>
                                    <li data-y="430" data-link="#7"></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-450 padding-10 xs-align-c">
                        <p class="x-dark x-large margin-30-b">
                            <span class="sp15"></span>
                            <b class="xx-dark">Cras non sagittis arcu, eget viverra nunc.</b>
                            <span class="sp15"></span>
                            Suspendisse ut est mi. Nunc hendrerit suscipit ornare. Cras luctus nibh in metus semper lacinia ultricies non nulla.
                            <span class="sp15"></span>
                            Pellentesque mattis sed diam a rutrum. Sed fermentum accumsan egestas.
                        </p>
                        <a href="#" class="btn btn-lg btn-xs-fluid padding-20-h margin-30-b theme-farmer2 ui-dark ease-btn">
                            <b>View all statistics</b> <i class="icon icon-long-arrow-right margin-5-l"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- statistics: end -->

</main>

<!-- footer: start -->
<footer class="container no-gutter padding-30-v theme-farmer2 set-dark ui-dark">
    <div class="fixed padding-30-v sm-align-c">
        <div class="row">
            <div class="col-static">
                <div class="row">
                    <div class="col-4 sm-fluid">
                        <h4 class="x-light-ui margin-30-b">Customer Service</h4>
                        <ul class="list-unstyled list-spacer-10 x-large">
                            <li><a class="hoverline" href="#">Order Status</a></li>
                            <li><a class="hoverline" href="#">Shipping</a></li>
                            <li><a class="hoverline" href="#">Contact References</a></li>
                            <li><a class="hoverline" href="#">Returns</a></li>
                            <li><a class="hoverline" href="#">Contact Us</a></li>
                            <li><a class="hoverline" href="#">Our Guarantee</a></li>
                            <li><a class="hoverline" href="#">Tax Notice</a></li>
                        </ul>
                    </div>
                    <div class="col-4 sm-fluid">
                        <h4 class="x-light-ui margin-30-b">Who We Are</h4>
                        <ul class="list-unstyled list-spacer-10 x-large">
                            <li><a class="hoverline" href="#">Good Works</a></li>
                            <li><a class="hoverline" href="#">About Us</a></li>
                            <li><a class="hoverline" href="#">Environmental</a></li>
                            <li><a class="hoverline" href="#">Commitment</a></li>
                            <li><a class="hoverline" href="#">Corporation</a></li>
                            <li><a class="hoverline" href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div class="col-4 sm-fluid">
                        <h4 class="x-light-ui margin-30-b">Quick Links</h4>
                        <ul class="list-unstyled list-spacer-10 x-large">
                            <li><a class="hoverline" href="#">Educater &amp; Landscaper</a></li>
                            <li><a class="hoverline" href="#">Discounts</a></li>
                            <li><a class="hoverline" href="#">Become an Affiliate</a></li>
                            <li><a class="hoverline" href="#">Email Unsubscribe</a></li>
                        </ul>
                        <span class="sp20 visible-sm"></span>
                    </div>
                </div>
                <div class="col-450 padding-10">

                    <div class="footer-social padding-15 icons-no-opacity">
                        <div class="card padding-30 shadow-lg theme-farmer ui-dark">
                            <h4 class="margin-15-b">Social</h4>
                            <div class="form-lg ease-1st-btn">
                                <a class="btn btn-square" href="#" target="_blank"><i class="icon icon-facebook"></i></a>
                                <a class="btn btn-square" href="#" target="_blank"><i class="icon icon-twitter"></i></a>
                                <a class="btn btn-square" href="#" target="_blank"><i class="icon icon-instagram"></i></a>
                                <a class="btn btn-square" href="#" target="_blank"><i class="icon icon-linkedin"></i></a>
                                <a class="btn btn-square" href="#" target="_blank"><i class="icon icon-google"></i></a>
                                <a class="btn btn-square" href="#" target="_blank"><i class="icon icon-whatsapp"></i></a>
                                <a class="btn btn-square" href="#" target="_blank"><i class="icon icon-youtube"></i></a>
                            </div>

                            <span class="sp30"></span>

                            <h4 class="margin-15-b">Sign Up for Email</h4>
                            <p>Get in on the best deals, new products and gardening tips.</p>
                            <form action="#">

                                <div class="form-holder col-static no-fluid form-lg">
                                    <div class="row row-no-gap">
                                        <div class="col-12">
                                            <div class="text no-border ui-x-light ease-form">
                                                <input class="required" type="email" maxlength="4" placeholder="your@email.com">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-42">
                                        <button class="btn btn-square theme-farmer2 ui-dark ease-btn">
                                            <i class="icon icon-send"></i>
                                        </button>
                                    </div>
                                </div>
                                <p class="required-msg">Please, enter a valid email.</p>

                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</footer>
<!-- footer: end -->

<!-- page social -->
<div class="page-social icons-no-opacity form-lg ease-1st-btn">
    <a class="btn btn-square theme-facebook ui-dark" href="#" target="_blank" data-tooltip="r" title="Facebook">
        <i class="icon icon-lg icon-facebook"></i>
    </a>
    <a class="btn btn-square theme-twitter ui-dark" href="#" target="_blank" data-tooltip="r" title="Twitter">
        <i class="icon icon-lg icon-twitter"></i>
    </a>
    <a class="btn btn-square theme-instagram ui-dark" href="#" target="_blank" data-tooltip="r" title="Instagram">
        <i class="icon icon-lg icon-instagram"></i>
    </a>
    <a class="btn btn-square theme-linkedin ui-dark" href="#" target="_blank" data-tooltip="r" title="Linkedin">
        <i class="icon icon-lg icon-linkedin"></i>
    </a>
    <a class="btn btn-square theme-google ui-dark" href="#" target="_blank" data-tooltip="r" title="Google">
        <i class="icon icon-lg icon-google"></i>
    </a>
    <a class="btn btn-square theme-whatsapp ui-dark" href="#" target="_blank" data-tooltip="r" title="Whatsapp">
        <i class="icon icon-lg icon-whatsapp"></i>
    </a>
    <a class="btn btn-square theme-youtube ui-dark" href="#" target="_blank" data-tooltip="r" title="Youtube">
        <i class="icon icon-lg icon-youtube"></i>
    </a>
</div>

<!-- mobile menu -->
<div class="mobile-menu show-r ease-layout ease-slow ease-in-out">
    <div class="mobile-menu-title border-b">
        <button class="btn btn-square btn-lg btn-ghost ease-btn close-mobile-menu">
            <i class="icon icon-sm icon-remove no-opacity"></i>
        </button>
        <a href="#"><img src="img/agriculture/logo.png" alt="" srcset="img/agriculture/logo@2x.png 2x"></a>
    </div>
    <div class="mobile-menu-content align-l theme-farmer2 scroll-v"></div>
</div>