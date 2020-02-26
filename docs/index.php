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
    <link rel="stylesheet" href="../css/reset.css"/>
    <link rel="stylesheet" href="../css/helpers.css"/>
    <link rel="stylesheet" href="../css/grid.css"/>
    <link rel="stylesheet" href="../css/borders.css"/>
    <link rel="stylesheet" href="../css/paddings.css"/>
    <link rel="stylesheet" href="../css/margins.css"/>

    <link rel="stylesheet" href="../css/effects.css"/>

    <link rel="stylesheet" href="../css/typography.css"/>
    <link rel="stylesheet" href="../css/listings.css"/>

    <link rel="stylesheet" href="../css/buttons.css"/>
    <link rel="stylesheet" href="../css/top-button.css"/>
    <link rel="stylesheet" href="../css/tabs.css"/>
    <link rel="stylesheet" href="../css/dropdown.css"/>

    <link rel="stylesheet" href="../css/forms.css"/>
    <link rel="stylesheet" href="../css/textarea-counter.css"/>
    <link rel="stylesheet" href="../css/autocomplete.css"/>

    <link rel="stylesheet" href="../css/icons.css"/>
    <link rel="stylesheet" href="../css/icons-notifiers.css"/>

    <link rel="stylesheet" href="../css/list-group.css"/>
    <link rel="stylesheet" href="../css/card.css"/>
    <link rel="stylesheet" href="../css/tables.css"/>
    <link rel="stylesheet" href="../css/breadcrumbs.css"/>
    <link rel="stylesheet" href="../css/page-social.css"/>
    <link rel="stylesheet" href="../css/photo-images.css"/>
    <link rel="stylesheet" href="../css/progress-bar.css"/>
    <link rel="stylesheet" href="../css/scrollbar.css"/>
    <link rel="stylesheet" href="../css/steps.css"/>
    <link rel="stylesheet" href="../css/sticky-header.css"/>
    <link rel="stylesheet" href="../css/stripes.css"/>
    <link rel="stylesheet" href="../css/timeline.css"/>

    <link rel="stylesheet" href="../css/line-charts.css"/>
    <link rel="stylesheet" href="../css/donut-chart.css"/>
    <link rel="stylesheet" href="../css/pie-chart.css"/>
    <link rel="stylesheet" href="../css/svg-map.css"/>

    <link rel="stylesheet" href="../css/mobile-menu.css"/>
    <link rel="stylesheet" href="../css/modal.css"/>
    <link rel="stylesheet" href="../css/tooltip.css"/>
    <link rel="stylesheet" href="../css/alerts.css"/>
    <link rel="stylesheet" href="../css/calendar.css"/>
    <link rel="stylesheet" href="../css/carousel.css"/>
    <link rel="stylesheet" href="../css/data-list.css"/>
    <link rel="stylesheet" href="../css/image-uploader.css"/>
    <link rel="stylesheet" href="../css/photo-gallery.css"/>
    <link rel="stylesheet" href="../css/photo-slider.css"/>
    <link rel="stylesheet" href="../css/weather.css"/>

    <link rel="stylesheet" href="../css/themes.css"/>
    <link rel="stylesheet" href="../css/darkmode.css"/>

    <!-- import JS -->
    <script src="../js/selector.js"></script>
    <script src="../js/events.js"></script>
    <script src="../js/user-agents.js"></script>
    <script src="../js/grid.js"></script>
    <script src="../js/ajax.js"></script>

    <script src="../js/effects.js"></script>

    <script src="../js/top-button.js"></script>
    <script src="../js/dropdown.js"></script>
    <script src="../js/loading-button.js"></script>
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
    <script src="../js/data-list.js"></script>
    <script src="../js/image-uploader.js"></script>
    <script src="../js/photo-gallery.js"></script>
    <script src="../js/photo-slider.js"></script>
    <script src="../js/weather.js"></script>

    <script src="../js/line-charts.js"></script>
    <script src="../js/donut-chart.js"></script>
    <script src="../js/pie-chart.js"></script>
    <script src="../js/svg-map.js"></script>

    <script src="../js/themes.js"></script>

</head>

<body>

<?php
    if (isset($_GET["p"]) && $_GET["p"] !== '') {
        $page = $_GET["p"];
?>

    <!-- header -->
    <header class="container theme-default ui-dark">
        <div class="row theme-default2 ui-border border-t border-dual">
            <div class="col-12">
                <a href="index.php" class="btn btn-lg btn-square circle ease-btn margin-10-r"><i class="icon no-opacity icon-long-arrow-left"></i></a>
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

<?php
    } else {
?>
    <!-- header -->
    <header class="container theme-default ui-dark">
        <div class="row theme-default2 ui-border border-t border-dual">
            <div class="col-static no-fluid">
                <div class="col-250 col-xs-150 align-c md-align-l padding-15">
                    <img src="img/uilab-logo.png" alt="UILab" srcset="img/uilab-logo@2x.png 2x">
                </div>
                <div class="row form-lg">
                    <div class="col-12 align-r padding-15-r ease-1st-btn">
                        <a title="GitHub" href="https://github.com/aeminyuce/UILab/" class="btn btn-square round ui-dark" target="_blank">
                            <i class="icon icon-github"></i>
                        </a>
                        <button class="btn btn-square round ui-dark show-mobile-menu-r visible-md">
                            <i class="icon icon-bars-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <main class="container no-gutter">
        <div class="col-static no-fluid">

            <!-- sidebar -->
            <div class="col-250 theme-gray ui-light hidden-md">
                <div class="align-l sm-align-c padding-20-t form-lg add-mobile-menu-r">
                    <h4 class="bold padding-10-h theme-default2 ui-text">UI</h4>
                    <ul class="list-unstyled block-2nd ease-2nd-button">
                        <li><a class="btn btn-ghost" href="?p=alerts">Alerts</a></li>
                        <li><a class="btn btn-ghost" href="?p=breadcrumbs">Breadcrumbs</a></li>
                        <li><a class="btn btn-ghost" href="?p=buttons">Buttons</a></li>
                        <li><a class="btn btn-ghost" href="?p=calendar">Calendar</a></li>
                        <li><a class="btn btn-ghost" href="?p=card">Card</a></li>
                        <li><a class="btn btn-ghost" href="?p=carousel">Carousel</a></li>
                        <li><a class="btn btn-ghost" href="?p=charts">Charts</a></li>
                        <li><a class="btn btn-ghost" href="?p=countdown">Countdown</a></li>
                        <li><a class="btn btn-ghost" href="?p=data-list">Data List</a></li>
                        <li><a class="btn btn-ghost" href="?p=dropdown">Dropdown</a></li>
                        <li><a class="btn btn-ghost" href="?p=error-pages">Error Pages</a></li>
                        <li><a class="btn btn-ghost" href="?p=forms">Forms</a></li>
                        <li><a class="btn btn-ghost" href="?p=grid">Grid</a></li>
                        <li><a class="btn btn-ghost" href="?p=image-uploader">Image Uploader</a></li>
                        <li><a class="btn btn-ghost" href="?p=list-group">List Group</a></li>
                        <li><a class="btn btn-ghost" href="?p=modal">Modal</a></li>
                        <li><a class="btn btn-ghost" href="?p=notifier-icons">Notifier Icons</a></li>
                        <li><a class="btn btn-ghost" href="?p=photo-images">Photo Images</a></li>
                        <li><a class="btn btn-ghost" href="?p=pricing-tables">Pricing Tables</a></li>
                        <li><a class="btn btn-ghost" href="?p=progress-bar">Progress Bar</a></li>
                        <li><a class="btn btn-ghost" href="?p=steps">Steps</a></li>
                        <li><a class="btn btn-ghost" href="?p=stripes">Stripes</a></li>
                        <li><a class="btn btn-ghost" href="?p=svg-map">SVG Map</a></li>
                        <li><a class="btn btn-ghost" href="?p=tables">Tables</a></li>
                        <li><a class="btn btn-ghost" href="?p=tabs">Tabs</a></li>
                        <li><a class="btn btn-ghost" href="?p=timeline">Timeline</a></li>
                        <li><a class="btn btn-ghost" href="?p=tooltip">Tooltip</a></li>
                        <li><a class="btn btn-ghost" href="?p=typography">Typography</a></li>
                        <li><a class="btn btn-ghost" href="?p=weather">Weather</a></li>
                    </ul>
                    <h4 class="bold padding-10-h theme-default2 ui-text">JS</h4>
                    <ul class="list-unstyled block-2nd ease-2nd-button">
                        <li><a class="btn btn-ghost" href="?p=selector">Selector</a></li>
                        <li><a class="btn btn-ghost" href="?p=events">Events</a></li>
                        <li><a class="btn btn-ghost" href="?p=useragents">User Agents</a></li>
                        <li><a class="btn btn-ghost" href="?p=ajax">Ajax</a></li>
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
                                <a href="?p=icons" class="btn btn-xs-fluid padding-30-h circle theme-default ui-dark">
                                    <i class="icon icon-puzzle margin-5-r"></i> Icons
                                </a>
                                <a href="?p=download" class="btn btn-xs-fluid padding-30-h circle theme-default2 ui-dark">
                                    Download <i class="icon icon-long-arrow-right margin-5-l"></i>
                                </a>
                            </div>

                        </div>
                    </div>

                    <span class="sp10"></span>

                    <h4>Example Layouts</h4>
                    <div class="row large align-c hover-shadow-2nd hover-t-2nd">
                        <div class="col-4 col-md-6">
                            <a class="card padding-2 round shadow-lg ease-layout" href="?l=dashboard-app">
                                <picture>
                                    <source srcset="img/layout-dashboard-app-dark.jpg" media="(prefers-color-scheme: dark)">
                                    <img class="img-fluid margin-10-b round" src="img/layout-dashboard-app.jpg" alt="Dashboard App">
                                </picture>
                                <span class="inline-block padding-10-t padding-20-b">
                                    Dashboard App
                                </span>
                            </a>
                        </div>
                        <div class="col-4 col-md-6">
                            <a class="card padding-2 round shadow-lg ease-layout" href="?l=dashboard">
                                <picture>
                                    <source srcset="img/layout-dashboard-dark.jpg" media="(prefers-color-scheme: dark)">
                                    <img class="img-fluid margin-10-b round" src="img/layout-dashboard.jpg" alt="Dashboard">
                                </picture>
                                <span class="inline-block padding-10-t padding-20-b">
                                    Dashboard
                                </span>
                            </a>
                        </div>
                        <div class="col-4 col-md-6">
                            <a class="card padding-2 round shadow-lg ease-layout" href="?l=sign-up-page">
                                <picture>
                                    <source srcset="img/layout-sign-up-page-dark.jpg" media="(prefers-color-scheme: dark)">
                                    <img class="img-fluid margin-10-b round" src="img/layout-sign-up-page.jpg" alt="Sign Up Page">
                                </picture>
                                <span class="inline-block padding-10-t padding-20-b">
                                    Sign Up Page
                                </span>
                            </a>
                        </div>
                        <div class="col-4 col-md-6">
                            <a class="card padding-2 round shadow-lg ease-layout" href="?l=login-page">
                                <picture>
                                    <source srcset="img/layout-login-page-dark.jpg" media="(prefers-color-scheme: dark)">
                                    <img class="img-fluid margin-10-b round" src="img/layout-login-page.jpg" alt="Login Page">
                                </picture>
                                <span class="inline-block padding-10-t padding-20-b">
                                    Login Page
                                </span>
                            </a>
                        </div>
                        <div class="col-4 col-md-6">
                            <a class="card padding-2 round shadow-lg ease-layout" href="?l=landing-page">
                                <picture>
                                    <source srcset="img/layout-landing-page-dark.jpg" media="(prefers-color-scheme: dark)">
                                    <img class="img-fluid margin-10-b round" src="img/layout-landing-page.jpg" alt="Landing Page">
                                </picture>
                                <span class="inline-block padding-10-t padding-20-b">
                                    Landing Page
                                </span>
                            </a>
                        </div>
                        <div class="col-4 col-md-6">
                            <a class="card padding-2 round shadow-lg ease-layout" href="?l=movie-app">
                                <picture>
                                    <source srcset="img/layout-movie-app-dark.jpg" media="(prefers-color-scheme: dark)">
                                    <img class="img-fluid margin-10-b round" src="img/layout-movie-app.jpg" alt="Movie App">
                                </picture>
                                <span class="inline-block padding-10-t padding-20-b">
                                    Movie App
                                </span>
                            </a>
                        </div>
                        <div class="col-4 col-md-6">
                            <a class="card padding-2 round shadow-lg ease-layout" href="?l=weather-app">
                                <picture>
                                    <source srcset="img/layout-weather-app-dark.jpg" media="(prefers-color-scheme: dark)">
                                    <img class="img-fluid margin-10-b round" src="img/layout-weather-app.jpg" alt="Weather App">
                                </picture>
                                <span class="inline-block padding-10-t padding-20-b">
                                    Weather App
                                </span>
                            </a>
                        </div>
                        <div class="col-4 col-md-6">
                            <a class="card padding-2 round shadow-lg ease-layout" href="?l=admin-panel">
                                <picture>
                                    <source srcset="img/layout-admin-panel-dark.jpg" media="(prefers-color-scheme: dark)">
                                    <img class="img-fluid margin-10-b round" src="img/layout-admin-panel.jpg" alt="Admin Panel">
                                </picture>
                                <span class="inline-block padding-10-t padding-20-b">
                                    Admin Panel
                                </span>
                            </a>
                        </div>
                        <div class="col-4 col-md-6">
                            <a class="card padding-2 round shadow-lg ease-layout" href="?l=product-listing">
                                <picture>
                                    <source srcset="img/layout-product-listing-dark.jpg" media="(prefers-color-scheme: dark)">
                                    <img class="img-fluid margin-10-b round" src="img/layout-product-listing.jpg" alt="Product Listing">
                                </picture>
                                <span class="inline-block padding-10-t padding-20-b">
                                    Product Listing
                                </span>
                            </a>
                        </div>
                        <div class="col-4 col-md-6">
                            <a class="card padding-2 round shadow-lg ease-layout" href="?l=real-estate-details">
                                <picture>
                                    <source srcset="img/layout-real-estate-details-dark.jpg" media="(prefers-color-scheme: dark)">
                                    <img class="img-fluid margin-10-b round" src="img/layout-real-estate-details.jpg" alt="Real Estate Details">
                                </picture>
                                <span class="inline-block padding-10-t padding-20-b">
                                    Real Estate Details
                                </span>
                            </a>
                        </div>
                        <div class="col-4 col-md-6">
                            <a class="card padding-2 round shadow-lg ease-layout" href="?l=photo-albums">
                                <picture>
                                    <source srcset="img/layout-photo-albums-dark.jpg" media="(prefers-color-scheme: dark)">
                                    <img class="img-fluid margin-10-b round" src="img/layout-photo-albums.jpg" alt="Photo Albums">
                                </picture>
                                <span class="inline-block padding-10-t padding-20-b">
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
    <div class="mobile-menu show-r theme-default ease-layout ease-slow ease-in-out">
        <div class="mobile-menu-title padding-15-v ui-dark">
            <button class="btn btn-square btn-lg btn-ghost round ease-btn close-mobile-menu">
                <i class="icon icon-sm icon-remove no-opacity"></i>
            </button>
            <img src="img/uilab-logo.png" alt="" srcset="img/uilab-logo@2x.png 2x">
        </div>
        <div class="mobile-menu-content no-padding theme-gray ui-x-light scroll-v"></div>
    </div>
<?php
    }
?>

<?php include ('../icons/general.php'); ?>

</body>
</html>
