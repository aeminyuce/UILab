<?php header('Content-Type: text/html; charset=utf-8'); ?>

<!DOCTYPE html>
<html lang="en">

<head>

    <title>UI Lab: CSS &amp; JavaScript powered responsive design system.</title>
    <meta name="keywords" content="uilab, responsive, design system, css, javascript, tools, examples">
    <meta name="description" content="CSS & JavaScript powered responsive design system." />
    <meta name="author" content="A. Emin Yuce"/>

    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
    <link rel="icon" href="img/favicon.ico" />

    <!--[if IE]><meta https-equiv="X-UA-Compatible" content="IE=edge" /><![endif]-->
    <!--[if lt IE 10]><script>window.navigate('http://outdatedbrowser.com/tr');</script><![endif]-->

    <!-- import CSS -->
    <link rel="stylesheet" href="../css/_import.css"/>
    <link rel="stylesheet" href="../css/custom/layout.css"/>

    <!-- import JS -->
    <script src="../js/ui.js"></script>
    <script src="../js/grid.js"></script>

    <script src="../js/effects.js"></script>

    <script src="../js/top-button.js"></script>
    <script src="../js/dropdown.js"></script>
    <script src="../js/loading-mask.js"></script>
    <script src="../js/tabs.js"></script>

    <script src="../js/forms.js"></script>
    <script src="../js/autocomplete.js"></script>
    <script src="../js/currency-spinner.js"></script>
    <script src="../js/dual-multi-select.js"></script>
    <script src="../js/form-spinner.js"></script>
    <script src="../js/required-forms.js"></script>
    <script src="../js/textarea-counter.js"></script>

    <script src="../js/card.js"></script>
    <script src="../js/sticky-header.js"></script>

    <script src="../js/mobile-menu.js"></script>
    <script src="../js/modal.js"></script>
    <script src="../js/tooltip.js"></script>
    <script src="../js/alerts.js"></script>
    <script src="../js/calendar.js"></script>
    <script src="../js/carousel.js"></script>
    <script src="../js/countdown.js"></script>
    <script src="../js/grid-list.js"></script>
    <script src="../js/image-uploader.js"></script>
    <script src="../js/photo-gallery.js"></script>
    <script src="../js/photo-slider.js"></script>
    <script src="../js/weather.js"></script>

    <script src="../js/line-charts.js"></script>
    <script src="../js/donut-chart.js"></script>
    <script src="../js/pie-chart.js"></script>
    <script src="../js/svg-map.js"></script>

</head>

<body>

<?php
    if (isset($_GET["p"]) && $_GET["p"] !== '') {
        $page = $_GET["p"];
?>

    <!-- header -->
    <header class="container header form-lg ui-bg-dark-100 ease-layout" data-ui-classes="shadow-lg">
        <div class="row">
            <div class="col-12">
                <button title="Toggle Theme" data-ui-tooltip data-ui-only="desktop" class="btn-toggle-color btn btn-square round icons-no-opacity right ease-btn">
                    <svg class="icon visible-dark"><use href="#moon-fill"/></svg>
                    <svg class="icon visible-light"><use href="#sun-fill"/></svg>
                </button>
                <a href="index.php" class="btn btn-square circle margin-10-r ease-btn">
                    <svg class="icon icon-hybrid no-opacity"><use href="#long-arrow-left"/></svg>
                </a>
                <h1 class="x-large inline-block">UI Lab, <span class="capitalize"><?php echo str_replace("-", " ", $page); ?></span></h1>
            </div>
        </div>
    </header>

<?php
        include ($page.'.php');

    } else if (isset($_GET["l"]) && $_GET["l"] !== '') {

        $page = $_GET["l"];
        include ($page.'.php');
?>

<button title="Toggle Theme" data-ui-tooltip data-ui-only="desktop" class="btn-toggle-color btn btn-lg btn-square round-l icons-no-opacity ease-btn set-fixed set-r" style="top: 80px;">
    <svg class="icon visible-dark"><use href="#moon-fill"/></svg>
    <svg class="icon visible-light"><use href="#sun-fill"/></svg>
</button>
<?php
    } else {
?>
    <!-- header -->
    <header class="container header form-lg ui-bg-dark-100 ease-layout" data-ui-classes="shadow-lg">
        <div class="row">
            <div class="col-static no-fluid">
                <div class="col-250 col-xs-150 align-c md-align-l padding-15">
                    <img src="img/uilab-logo.png" alt="UILab" srcset="img/uilab-logo@2x.png 2x">
                </div>
                <div class="row">
                    <div class="col-12 align-r padding-15-r icons-no-opacity ease-1st-btn">
                        <button title="Toggle Theme" data-ui-tooltip data-ui-only="desktop" class="btn-toggle-color btn btn-square round">
                            <svg class="icon visible-dark"><use href="#moon-fill"/></svg>
                            <svg class="icon visible-light"><use href="#sun-fill"/></svg>
                        </button>
                        <a title="GitHub" href="https://github.com/aeminyuce/UILab/" class="btn btn-square round" target="_blank">
                            <svg class="icon"><use href="#github"/></svg>
                        </a>
                        <button class="btn btn-square round show-mobile-menu-r visible-md">
                            <svg class="icon"><use href="#bars-right"/></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <main class="container no-gutter">
        <div class="col-static no-fluid">

            <!-- sidebar -->
            <div class="col-250 theme-gray ui-bg-light-300 hidden-md">
                <div class="align-l sm-align-c padding-20-t form-lg add-mobile-menu-r">
                    <h4 class="font-bold padding-10-h theme-default2 ui-color">UI</h4>
                    <ul class="list-unstyled block-2nd ease-2nd-button">
                        <li><a class="btn btn-ghost" href="?p=alerts">Alerts</a></li>
                        <li><a class="btn btn-ghost" href="?p=breadcrumbs">Breadcrumbs</a></li>
                        <li><a class="btn btn-ghost" href="?p=buttons">Buttons</a></li>
                        <li><a class="btn btn-ghost" href="?p=calendar">Calendar</a></li>
                        <li><a class="btn btn-ghost" href="?p=card">Card</a></li>
                        <li><a class="btn btn-ghost" href="?p=carousel">Carousel</a></li>
                        <li><a class="btn btn-ghost" href="?p=charts">Charts</a></li>
                        <li><a class="btn btn-ghost" href="?p=countdown">Countdown</a></li>
                        <li><a class="btn btn-ghost" href="?p=dropdown">Dropdown</a></li>
                        <li><a class="btn btn-ghost" href="?p=error-pages">Error Pages</a></li>
                        <li><a class="btn btn-ghost" href="?p=forms">Forms</a></li>
                        <li><a class="btn btn-ghost" href="?p=grid">Grid</a></li>
                        <li><a class="btn btn-ghost" href="?p=grid-list">Grid List</a></li>
                        <li><a class="btn btn-ghost" href="?p=image-uploader">Image Uploader</a></li>
                        <li><a class="btn btn-ghost" href="?p=list-group">List Group</a></li>
                        <li><a class="btn btn-ghost" href="?p=loading-mask">Loading Mask</a></li>
                        <li><a class="btn btn-ghost" href="?p=modal">Modal</a></li>
                        <li><a class="btn btn-ghost" href="?p=photo-images">Photo Images</a></li>
                        <li><a class="btn btn-ghost" href="?p=pricing-tables">Pricing Tables</a></li>
                        <li><a class="btn btn-ghost" href="?p=progress-bar">Progress Bar</a></li>
                        <li><a class="btn btn-ghost" href="?p=steps">Steps</a></li>
                        <li><a class="btn btn-ghost" href="?p=stripes">Stripes</a></li>
                        <li><a class="btn btn-ghost" href="?p=svg-map">SVG Map</a></li>
                        <li><a class="btn btn-ghost" href="?p=tables">Tables</a></li>
                        <li><a class="btn btn-ghost" href="?p=tabs">Tabs</a></li>
                        <li><a class="btn btn-ghost" href="?p=themes">Themes</a></li>
                        <li><a class="btn btn-ghost" href="?p=timeline">Timeline</a></li>
                        <li><a class="btn btn-ghost" href="?p=tooltip">Tooltip</a></li>
                        <li><a class="btn btn-ghost" href="?p=typography">Typography</a></li>
                        <li><a class="btn btn-ghost" href="?p=weather">Weather</a></li>
                    </ul>
                    <h4 class="font-bold padding-10-h theme-default2 ui-color">Javascript</h4>
                    <ul class="list-unstyled block-2nd ease-2nd-button">
                        <li><a class="btn btn-ghost" href="?p=ui">UI JS</a></li>
                    </ul>
                </div>
            </div>

            <div class="row">
                <div class="col-12 padding-30">

                    <div class="card round shadow-lg">
                        <div class="card-side padding-30">
                            <h2 class="margin-10-b">UILab</h2>
                            <p class="large xs-align-c">CSS &amp; JavaScript powered responsive design system.</p>
                            <div class="form-lg ease-1st-btn">
                                <a href="?p=icons" class="btn btn-xs-fluid padding-30-h circle theme-default2">
                                    <svg class="icon margin-5-r no-opacity ui-color"><use href="#draw"/></svg> See Icons
                                </a>
                                <a href="?p=download" class="btn btn-xs-fluid padding-30-h circle theme-default2 ui-bg-dark-100">
                                    Download <svg class="icon margin-5-l"><use href="#long-arrow-right"/></svg>
                                </a>
                            </div>

                        </div>
                    </div>

                    <span class="sp-10"></span>

                    <h4>Example Layouts</h4>
                    <div class="row large align-c hover-shadow-2nd hover-t-2nd">
                        <div class="col-4 col-md-6">
                            <a class="card padding-2 round shadow-lg ease-layout" href="?l=dashboard-app">
                                <img class="img-fluid round visible-light" src="img/layout-dashboard-app.jpg" alt="Dashboard App">
                                <img class="img-fluid round visible-dark" src="img/layout-dashboard-app-dark.jpg" alt="Dashboard App Dark">
                                <span class="inline-block padding-20-v">
                                    Dashboard App
                                </span>
                            </a>
                        </div>
                        <div class="col-4 col-md-6">
                            <a class="card padding-2 round shadow-lg ease-layout" href="?l=dashboard">
                                <img class="img-fluid round visible-light" src="img/layout-dashboard.jpg" alt="Dashboard">
                                <img class="img-fluid round visible-dark" src="img/layout-dashboard-dark.jpg" alt="Dashboard Dark">
                                <span class="inline-block padding-20-v">
                                    Dashboard
                                </span>
                            </a>
                        </div>
                        <div class="col-4 col-md-6">
                            <a class="card padding-2 round shadow-lg ease-layout" href="?l=sign-up-page">
                                <img class="img-fluid round visible-light" src="img/layout-sign-up-page.jpg" alt="Sign Up Page">
                                <img class="img-fluid round visible-dark" src="img/layout-sign-up-page-dark.jpg" alt="Sign Up Page Dark">
                                <span class="inline-block padding-20-v">
                                    Sign Up Page
                                </span>
                            </a>
                        </div>
                        <div class="col-4 col-md-6">
                            <a class="card padding-2 round shadow-lg ease-layout" href="?l=login-page">
                                <img class="img-fluid round visible-light" src="img/layout-login-page.jpg" alt="Login Page">
                                <img class="img-fluid round visible-dark" src="img/layout-login-page-dark.jpg" alt="Login Page Dark">
                                <span class="inline-block padding-20-v">
                                    Login Page
                                </span>
                            </a>
                        </div>
                        <div class="col-4 col-md-6">
                            <a class="card padding-2 round shadow-lg ease-layout" href="?l=landing-page">
                                <img class="img-fluid round visible-light" src="img/layout-landing-page.jpg" alt="Landing Page">
                                <img class="img-fluid round visible-dark" src="img/layout-landing-page-dark.jpg" alt="Landing Page Dark">
                                <span class="inline-block padding-20-v">
                                    Landing Page
                                </span>
                            </a>
                        </div>
                        <div class="col-4 col-md-6">
                            <a class="card padding-2 round shadow-lg ease-layout" href="?l=movie-app">
                                <img class="img-fluid round visible-light" src="img/layout-movie-app.jpg" alt="Movie App">
                                <img class="img-fluid round visible-dark" src="img/layout-movie-app-dark.jpg" alt="Movie App Dark">
                                <span class="inline-block padding-20-v">
                                    Movie App
                                </span>
                            </a>
                        </div>
                        <div class="col-4 col-md-6">
                            <a class="card padding-2 round shadow-lg ease-layout" href="?l=weather-app">
                                <img class="img-fluid round visible-light" src="img/layout-weather-app.jpg" alt="Weather App">
                                <img class="img-fluid round visible-dark" src="img/layout-weather-app-dark.jpg" alt="Weather App Dark">
                                <span class="inline-block padding-20-v">
                                    Weather App
                                </span>
                            </a>
                        </div>
                        <div class="col-4 col-md-6">
                            <a class="card padding-2 round shadow-lg ease-layout" href="?l=admin-panel">
                                <img class="img-fluid round visible-light" src="img/layout-admin-panel.jpg" alt="Admin Panel">
                                <img class="img-fluid round visible-dark" src="img/layout-admin-panel-dark.jpg" alt="Admin Panel Dark">
                                <span class="inline-block padding-20-v">
                                    Admin Panel
                                </span>
                            </a>
                        </div>
                        <div class="col-4 col-md-6">
                            <a class="card padding-2 round shadow-lg ease-layout" href="?l=product-listing">
                                <img class="img-fluid round visible-light" src="img/layout-product-listing.jpg" alt="Product Listing">
                                <img class="img-fluid round visible-dark" src="img/layout-product-listing-dark.jpg" alt="Product Listing Dark">
                                <span class="inline-block padding-20-v">
                                    Product Listing
                                </span>
                            </a>
                        </div>
                        <div class="col-4 col-md-6">
                            <a class="card padding-2 round shadow-lg ease-layout" href="?l=real-estate-details">
                                <img class="img-fluid round visible-light" src="img/layout-real-estate-details.jpg" alt="Real Estate Details">
                                <img class="img-fluid round visible-dark" src="img/layout-real-estate-details-dark.jpg" alt="Real Estate Details Dark">
                                <span class="inline-block padding-20-v">
                                    Real Estate Details
                                </span>
                            </a>
                        </div>
                        <div class="col-4 col-md-6">
                            <a class="card padding-2 round shadow-lg ease-layout" href="?l=photo-albums">
                                <img class="img-fluid round visible-light" src="img/layout-photo-albums.jpg" alt="Photo Albums">
                                <img class="img-fluid round visible-dark" src="img/layout-photo-albums-dark.jpg" alt="Photo Albums Dark">
                                <span class="inline-block padding-20-v">
                                    Photo Albums
                                </span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </main>

    <!-- mobile menu -->
    <div class="mobile-menu show-r theme-default ease-layout ease-in-out">
        <div class="mobile-menu-title padding-15-v ui-bg-dark-100">
            <button class="btn btn-square btn-lg btn-ghost round ease-btn close-mobile-menu">
                <svg class="icon no-opacity"><use href="#remove"/></svg>
            </button>
            <img src="img/uilab-logo.png" alt="" srcset="img/uilab-logo@2x.png 2x">
        </div>
        <div class="mobile-menu-content no-padding theme-gray ui-bg-light-100 scroll-v"></div>
    </div>
<?php
    }
?>

<!-- icons -->
<svg style="display: none;">
<?php
    include ('../icons/general.php');
    include ('../icons/touch.php');
    include ('../icons/media.php');
    include ('../icons/kitchen.php');
    include ('../icons/real-estate.php');
    include ('../icons/weather.php');
    include ('../icons/commerce.php');
    include ('../icons/files.php');
    include ('../icons/social.php');
    include ('../icons/brands.php');
?>
</svg>
</body>
</html>
