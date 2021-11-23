<?php header('Content-Type: text/html; charset=utf-8'); ?>

<!DOCTYPE html>
<html lang="en">

<head>

    <title>UI lab is a modular design system for developing web interfaces fastly!</title>
    <meta name="keywords" content="ui lab, responsive, design system, css, javascript, tools, examples">
    <meta name="description" content="UI lab is a modular design system for developing web interfaces fastly!" />
    <meta name="author" content="A. Emin YUCE"/>

    <!-- charset -->
    <meta charset="utf-8" />

    <!-- scaling settings -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />

    <!-- disable browser caching -->
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
    <meta http-equiv="Pragma" content="no-cache" />
    <meta http-equiv="Expires" content="0" />

    <!-- favicon -->
    <link rel="ui-icon" href="img/favicon.ico?v=<?php echo filemtime('img/favicon.ico'); ?>" />

    <!--[if IE]><meta https-equiv="X-UA-Compatible" content="IE=edge" /><![endif]-->
    <!--[if lt IE 10]><script>window.navigate('http://outdatedbrowser.com/tr');</script><![endif]-->

    <!-- import bootstrap for testing -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

    <!-- import CSS -->
    <link rel="stylesheet" href="../css/_import.css?v=<?php echo filemtime('../css/_import.css'); ?>"/>

    <!-- import JS -->
    <script src="../js/ui.js?v=<?php echo filemtime('../js/ui.js'); ?>"></script>

    <script src="../js/grid.js?v=<?php echo filemtime('../js/grid.js'); ?>"></script>

    <script src="../js/top-button.js?v=<?php echo filemtime('../js/top-button.js'); ?>"></script>
    <script src="../js/dropdown.js?v=<?php echo filemtime('../js/dropdown.js'); ?>"></script>
    <script src="../js/loading-mask.js?v=<?php echo filemtime('../js/loading-mask.js'); ?>"></script>
    <script src="../js/tab.js?v=<?php echo filemtime('../js/tab.js'); ?>"></script>

    <script src="../js/forms.js?v=<?php echo filemtime('../js/forms.js'); ?>"></script>
    <script src="../js/autocomplete.js?v=<?php echo filemtime('../js/autocomplete.js'); ?>"></script>
    <script src="../js/currency-spinner.js?v=<?php echo filemtime('../js/currency-spinner.js'); ?>"></script>
    <script src="../js/dual-multi-select.js?v=<?php echo filemtime('../js/dual-multi-select.js'); ?>"></script>
    <script src="../js/form-spinner.js?v=<?php echo filemtime('../js/form-spinner.js'); ?>"></script>
    <script src="../js/required-forms.js?v=<?php echo filemtime('../js/required-forms.js'); ?>"></script>
    <script src="../js/textarea-counter.js?v=<?php echo filemtime('../js/textarea-counter.js'); ?>"></script>

    <script src="../js/card.js?v=<?php echo filemtime('../js/card.js'); ?>"></script>
    <script src="../js/sticky-header.js?v=<?php echo filemtime('../js/sticky-header.js'); ?>"></script>

    <script src="../js/sidebar.js?v=<?php echo filemtime('../js/sidebar.js'); ?>"></script>
    <script src="../js/modal.js?v=<?php echo filemtime('../js/modal.js'); ?>"></script>
    <script src="../js/tooltip.js?v=<?php echo filemtime('../js/tooltip.js'); ?>"></script>
    <script src="../js/alerts.js?v=<?php echo filemtime('../js/alerts.js'); ?>"></script>
    <script src="../js/calendar.js?v=<?php echo filemtime('../js/calendar.js'); ?>"></script>
    <script src="../js/carousel.js?v=<?php echo filemtime('../js/carousel.js'); ?>"></script>
    <script src="../js/countdown.js?v=<?php echo filemtime('../js/countdown.js'); ?>"></script>
    <script src="../js/datatable.js?v=<?php echo filemtime('../js/datatable.js'); ?>"></script>
    <script src="../js/imgupload.js?v=<?php echo filemtime('../js/imgupload.js'); ?>"></script>
    <script src="../js/gallery.js?v=<?php echo filemtime('../js/gallery.js'); ?>"></script>
    <script src="../js/photoslide.js?v=<?php echo filemtime('../js/photoslide.js'); ?>"></script>
    <script src="../js/weather.js?v=<?php echo filemtime('../js/weather.js'); ?>"></script>

    <script src="../js/line-chart.js?v=<?php echo filemtime('../js/line-chart.js'); ?>"></script>
    <script src="../js/donut-chart.js?v=<?php echo filemtime('../js/donut-chart.js'); ?>"></script>
    <script src="../js/pie-chart.js?v=<?php echo filemtime('../js/pie-chart.js'); ?>"></script>
    <script src="../js/map.js?v=<?php echo filemtime('../js/map.js'); ?>"></script>

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    <!-- default -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap" rel="stylesheet">

    <!-- headings -->
    <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@200;300;400;500;700&display=swap" rel="stylesheet">

</head>

<body>

<?php
    if (isset($_GET["p"]) && $_GET["p"] !== '') {
        $page = $_GET["p"];
?>

    <!-- header -->
    <header class="ui-container ui-form-lg ui-theme-base ui-invert-bg ui-fill-dark-100 ui-ease-layout" data-ui-classes="ui-shadow-lg">
        <div class="ui-row">
            <div class="ui-col-12 ui-p-15">
                <button title="Toggle Dark Mode" data-ui-tooltip data-ui-only="desktop" class="ui-darkmode-toggle ui-btn ui-btn-square ui-btn-ghost ui-circle ui-icons-no-opacity ui-float-r ui-ease-btn">
                    <svg class="ui-icon ui-visible-dark"><use href="#moon-fill"/></svg>
                    <svg class="ui-icon ui-visible-light"><use href="#sun-fill"/></svg>
                </button>
                <a href="index.php" class="ui-btn ui-btn-square ui-btn-ghost ui-circle ui-m-10-r ui-ease-btn">
                    <svg class="ui-icon ui-icon-hybrid ui-no-opacity"><use href="#long-arrow-left"/></svg>
                </a>
                <h1 class="ui-h1 ui-font-18 ui-inline-block">
                    <span class="ui-font-capitalize"><?php echo str_replace("-", " ", $page); ?></span>
                </h1>
            </div>
        </div>
    </header>

<?php
        include ($page.'.php');

    } else if (isset($_GET["l"]) && $_GET["l"] !== '') {

        $page = $_GET["l"];
        include ($page.'.php');
?>

<button title="Toggle Dark Mode" data-ui-tooltip data-ui-only="desktop" class="ui-darkmode-toggle ui-btn ui-btn-lg ui-btn-square ui-round-l ui-icons-no-opacity ui-ease-btn ui-set-fixed ui-set-r" style="top: 30%;">
    <svg class="ui-icon ui-visible-dark"><use href="#moon-fill"/></svg>
    <svg class="ui-icon ui-visible-light"><use href="#sun-fill"/></svg>
</button>
<?php
    } else {
?>
    <!-- header -->
    <header class="ui-container ui-form-lg ui-invert-bg ui-theme-base ui-fill-dark-100 ui-ease-layout" data-ui-classes="ui-shadow-lg">
        <div class="ui-row">
            <div class="ui-col-static ui-no-fluid">
                <div class="ui-col-250 ui-col-xs-100 ui-p-15 ui-no-p-r">
                    <img class="ui-m-5-t" src="img/uilab-logo.png" alt="UI lab" srcset="img/uilab-logo@2x.png 2x">
                </div>
                <div class="ui-row">
                    <div class="ui-col-12 ui-align-r ui-p-15 ui-no-p-l ui-icons-no-opacity ui-ease-1st-btn">
                        <button title="Toggle Dark Mode" data-ui-tooltip data-ui-only="desktop" class="ui-darkmode-toggle ui-btn ui-btn-square ui-btn-ghost ui-circle">
                            <svg class="ui-icon ui-visible-dark"><use href="#moon-fill"/></svg>
                            <svg class="ui-icon ui-visible-light"><use href="#sun-fill"/></svg>
                        </button>
                        <a title="GitHub" href="https://github.com/aeminyuce/UILab" class="ui-btn ui-btn-square ui-btn-ghost ui-circle" target="_blank">
                            <svg class="ui-icon"><use href="#github"/></svg>
                        </a>
                        <a title="GitHub" href="https://dribbble.com/aeminyuce" class="ui-btn ui-btn-square ui-btn-ghost ui-circle" target="_blank">
                            <svg class="ui-icon"><use href="#dribbble"/></svg>
                        </a>
                        <button class="ui-btn ui-btn-square ui-btn-ghost ui-circle ui-sidebar-show-r ui-visible-md">
                            <svg class="ui-icon"><use href="#bars-right"/></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <main class="ui-container ui-no-gutter">
        <div class="ui-col-static ui-no-fluid">

            <!-- menu -->
            <div class="ui-col-250 ui-theme-gray ui-fill-light-200 ui-hidden-md">

                <div class="ui-sidebar-add-r">
                    <h3 class="ui-h3 ui-m-15">Components</h3>
                    <ul class="ui-list-unstyled ui-align-l ui-block-2nd ui-ease-2nd-button">
                        <li><a class="ui-btn ui-btn-ghost" href="?p=alerts">Alerts</a></li>
                        <li><a class="ui-btn ui-btn-ghost" href="?p=avatars">Avatars</a></li>
                        <li><a class="ui-btn ui-btn-ghost" href="?p=breadcrumbs">Breadcrumbs</a></li>
                        <li><a class="ui-btn ui-btn-ghost" href="?p=buttons">Buttons</a></li>
                        <li><a class="ui-btn ui-btn-ghost" href="?p=calendar">Calendar</a></li>
                        <li><a class="ui-btn ui-btn-ghost" href="?p=card">Card</a></li>
                        <li><a class="ui-btn ui-btn-ghost" href="?p=carousel">Carousel</a></li>
                        <li><a class="ui-btn ui-btn-ghost" href="?p=charts">Charts</a></li>
                        <li><a class="ui-btn ui-btn-ghost" href="?p=countdown">Countdown</a></li>
                        <li><a class="ui-btn ui-btn-ghost" href="?p=datatable">Datatable</a></li>
                        <li><a class="ui-btn ui-btn-ghost" href="?p=dropdown">Dropdown</a></li>
                        <li><a class="ui-btn ui-btn-ghost" href="?p=error-pages">Error Pages</a></li>
                        <li><a class="ui-btn ui-btn-ghost" href="?p=forms">Forms</a></li>
                        <li><a class="ui-btn ui-btn-ghost" href="?p=gallery">Gallery</a></li>
                        <li><a class="ui-btn ui-btn-ghost" href="?p=grid">Grid</a></li>
                        <li><a class="ui-btn ui-btn-ghost" href="?p=imgupload">Image Upload</a></li>
                        <li><a class="ui-btn ui-btn-ghost" href="?p=listgroup">List Group</a></li>
                        <li><a class="ui-btn ui-btn-ghost" href="?p=listings">Listings</a></li>
                        <li><a class="ui-btn ui-btn-ghost" href="?p=loading-mask">Loading Mask</a></li>
                        <li><a class="ui-btn ui-btn-ghost" href="?p=map">Map</a></li>
                        <li><a class="ui-btn ui-btn-ghost" href="?p=modal">Modal</a></li>
                        <li><a class="ui-btn ui-btn-ghost" href="?p=notifier">Notifier</a></li>
                        <li><a class="ui-btn ui-btn-ghost" href="?p=photoslide">Photoslide</a></li>
                        <li><a class="ui-btn ui-btn-ghost" href="?p=pricing-tables">Pricing Tables</a></li>
                        <li><a class="ui-btn ui-btn-ghost" href="?p=progress-bar">Progress Bar</a></li>
                        <li><a class="ui-btn ui-btn-ghost" href="?p=steps">Steps</a></li>
                        <li><a class="ui-btn ui-btn-ghost" href="?p=stripes">Stripes</a></li>
                        <li><a class="ui-btn ui-btn-ghost" href="?p=tables">Tables</a></li>
                        <li><a class="ui-btn ui-btn-ghost" href="?p=tab">Tab</a></li>
                        <li><a class="ui-btn ui-btn-ghost" href="?p=themes">Themes</a></li>
                        <li><a class="ui-btn ui-btn-ghost" href="?p=timeline">Timeline</a></li>
                        <li><a class="ui-btn ui-btn-ghost" href="?p=tooltip">Tooltip</a></li>
                        <li><a class="ui-btn ui-btn-ghost" href="?p=typography">Typography</a></li>
                        <li><a class="ui-btn ui-btn-ghost" href="?p=weather">Weather</a></li>
                    </ul>
                    <h3 class="ui-h3 ui-m-15">Javascript</h3>
                    <ul class="ui-list-unstyled ui-align-l ui-block-2nd ui-ease-2nd-button">
                        <li><a class="ui-btn ui-btn-ghost" href="?p=ui">UI JS</a></li>
                    </ul>
                </div>

            </div>

            <!-- thumbnails -->
            <div class="ui-row">
                <div class="ui-col-12 ui-p-15">

                    <div class="ui-fixed ui-fixed-xl ui-p-15 ui-m-30-v ui-sm-no-p">
                        <div class="ui-highlight ui-align-c ui-p-30 ui-xs-no-p ui-round ui-theme-sub">
                            <h1 class="ui-h1 ui-font-light">UI lab is a modular design system.</h2>
                            <h4 class="ui-h4 ui-font-bold ui-text">For developing web interfaces fastly!</h4>

                            <span class="ui-sp-15"></span>

                            <div class="ui-form-lg ui-ease-1st-btn">
                                <a href="?p=code" class="ui-btn ui-btn-ghost ui-btn-sm-fluid ui-m-5-h ui-xs-no-m-h ui-border-dual ui-circle">
                                    <svg class="ui-icon ui-m-5-r"><use href="#code"/></svg>
                                    Code
                                </a>
                                <a href="?p=classnames" class="ui-btn ui-btn-ghost ui-btn-sm-fluid ui-m-5-h ui-xs-no-m-h ui-border-dual ui-circle">
                                    Classnames
                                    <svg class="ui-icon ui-m-5-l"><use href="#brackets-curly"/></svg>
                                </a>
                                <a href="?p=icons" class="ui-btn ui-btn-ghost ui-btn-sm-fluid ui-m-5-h ui-xs-no-m-h ui-border-dual ui-circle">
                                    <svg class="ui-icon ui-m-5-r"><use href="#draw"/></svg>
                                    SVG Icons
                                </a>
                            </div>
                        </div>

                        <span class="ui-sp-30"></span>

                        <div class="ui-row ui-row-gap-lg ui-sm-fluid ui-align-c ui-hover-shadow-2nd ui-hover-t-2nd">
                            <div class="ui-col-lg-4 ui-col-6">
                                <a class="ui-link ui-card ui-p-2 ui-round ui-shadow-lg ui-ease-layout" href="?l=login-page">
                                    <img class="ui-img-fluid ui-round-t ui-visible-light" src="img/layout-login-page.jpg" alt="Login Page">
                                    <img class="ui-img-fluid ui-round-t ui-visible-dark" src="img/layout-login-page-dark.jpg" alt="Login Page Dark">
                                    <h4 class="ui-h4 ui-inline-block ui-p-10-v">
                                        Login Page
                                    </h4>
                                </a>
                            </div>
                            <div class="ui-col-lg-4 ui-col-6">
                                <a class="ui-link ui-card ui-p-2 ui-round ui-shadow-lg ui-ease-layout" href="?l=sign-up-page">
                                    <img class="ui-img-fluid ui-round-t ui-visible-light" src="img/layout-sign-up-page.jpg" alt="Sign Up Page">
                                    <img class="ui-img-fluid ui-round-t ui-visible-dark" src="img/layout-sign-up-page-dark.jpg" alt="Sign Up Page Dark">
                                    <h4 class="ui-h4 ui-inline-block ui-p-10-v">
                                        Sign Up Page
                                    </h4>
                                </a>
                            </div>
                            <div class="ui-col-lg-4 ui-col-6">
                                <a class="ui-link ui-card ui-p-2 ui-round ui-shadow-lg ui-ease-layout" href="?l=dashboard">
                                    <img class="ui-img-fluid ui-round-t ui-visible-light" src="img/layout-dashboard.jpg" alt="Dashboard">
                                    <img class="ui-img-fluid ui-round-t ui-visible-dark" src="img/layout-dashboard-dark.jpg" alt="Dashboard Dark">
                                    <h4 class="ui-h4 ui-inline-block ui-p-10-v">
                                        Dashboard
                                    </h4>
                                </a>
                            </div>
                            <div class="ui-col-lg-4 ui-col-6">
                                <a class="ui-link ui-card ui-p-2 ui-round ui-shadow-lg ui-ease-layout" href="?l=landing-page">
                                    <img class="ui-img-fluid ui-round-t ui-visible-light" src="img/layout-landing-page.jpg" alt="Landing Page">
                                    <img class="ui-img-fluid ui-round-t ui-visible-dark" src="img/layout-landing-page-dark.jpg" alt="Landing Page Dark">
                                    <h4 class="ui-h4 ui-inline-block ui-p-10-v">
                                        Landing Page
                                    </h4>
                                </a>
                            </div>
                            <div class="ui-col-lg-4 ui-col-6">
                                <a class="ui-link ui-card ui-p-2 ui-round ui-shadow-lg ui-ease-layout" href="?l=movie-app">
                                    <img class="ui-img-fluid ui-round-t ui-visible-light" src="img/layout-movie-app.jpg" alt="Movie App">
                                    <img class="ui-img-fluid ui-round-t ui-visible-dark" src="img/layout-movie-app-dark.jpg" alt="Movie App Dark">
                                    <h4 class="ui-h4 ui-inline-block ui-p-10-v">
                                        Movie App
                                    </h4>
                                </a>
                            </div>
                            <div class="ui-col-lg-4 ui-col-6">
                                <a class="ui-link ui-card ui-p-2 ui-round ui-shadow-lg ui-ease-layout" href="?l=product-listing">
                                    <img class="ui-img-fluid ui-round-t ui-visible-light" src="img/layout-product-listing.jpg" alt="Product Listing">
                                    <img class="ui-img-fluid ui-round-t ui-visible-dark" src="img/layout-product-listing-dark.jpg" alt="Product Listing Dark">
                                    <h4 class="ui-h4 ui-inline-block ui-p-10-v">
                                        Product Listing
                                    </h4>
                                </a>
                            </div>
                            <div class="ui-col-lg-4 ui-col-6">
                                <a class="ui-link ui-card ui-p-2 ui-round ui-shadow-lg ui-ease-layout" href="?l=real-estate-details">
                                    <img class="ui-img-fluid ui-round-t ui-visible-light" src="img/layout-real-estate-details.jpg" alt="Real Estate Details">
                                    <img class="ui-img-fluid ui-round-t ui-visible-dark" src="img/layout-real-estate-details-dark.jpg" alt="Real Estate Details Dark">
                                    <h4 class="ui-h4 ui-inline-block ui-p-10-v">
                                        Real Estate Details
                                    </h4>
                                </a>
                            </div>
                            <div class="ui-col-lg-4 ui-col-6">
                                <a class="ui-link ui-card ui-p-2 ui-round ui-shadow-lg ui-ease-layout" href="?l=photo-albums">
                                    <img class="ui-img-fluid ui-round-t ui-visible-light" src="img/layout-photo-albums.jpg" alt="Photo Albums">
                                    <img class="ui-img-fluid ui-round-t ui-visible-dark" src="img/layout-photo-albums-dark.jpg" alt="Photo Albums Dark">
                                    <h4 class="ui-h4 ui-inline-block ui-p-10-v">
                                        Photo Albums
                                    </h4>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </main>

    <!-- sidebar -->
    <div class="ui-sidebar ui-sidebar-r ui-theme-base ui-ease-layout ui-ease-in-out">
        <div class="ui-sidebar-title ui-p-15-v ui-fill-dark-100">
            <button class="ui-btn ui-btn-square ui-btn-lg ui-btn-ghost ui-circle ui-ease-btn ui-sidebar-close">
                <svg class="ui-icon ui-no-opacity"><use href="#remove"/></svg>
            </button>
            <img src="img/uilab-logo.png" alt="" srcset="img/uilab-logo@2x.png 2x">
        </div>
        <div class="ui-sidebar-content ui-no-p ui-theme-gray ui-fill-light-100 ui-scroll-v"></div>
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