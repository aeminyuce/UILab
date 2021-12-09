<?php header('Content-Type: text/html; charset=utf-8'); ?>

<!DOCTYPE html>
<html lang="en">

<head>

    <title>UI lab is a modular design system for developing web interfaces fastly!</title>

    <meta name="keywords" content="responsive, design system, ui examples, web, css, less, javascript">
    <meta name="description" content="UI lab is a modular design system for developing web interfaces fastly!">

    <!-- charset -->
    <meta charset="utf-8" />

    <!-- scaling -->
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- no caching -->
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Expires" content="0">

    <!-- favicon -->
    <link rel="ui-icon" href="img/favicon.ico">

    <!-- UI -->
    <link href="../css/ui.css?v=<?php echo filemtime('../css/ui.css'); ?>" rel="stylesheet">
    <script src="../js/ui.js?v=<?php echo filemtime('../js/ui.js'); ?>"></script>

    <!-- helpers -->
    <script src="../js/helpers/classnames-bundle.js?v=<?php echo filemtime('../js/helpers/classnames-bundle.js'); ?>"></script>
    <script src="../js/helpers/iconlist-bundle.js?v=<?php echo filemtime('../js/helpers/iconlist-bundle.js'); ?>"></script>

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
    <header class="ui-header-sticky ui-container ui-form-lg ui-theme-base ui-invert-bg ui-fill-dark-100 ui-ease-layout" data-ui-classes="ui-shadow-lg">
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

<button title="Toggle Dark Mode" data-ui-tooltip data-ui-only="desktop" class="ui-darkmode-toggle ui-btn ui-btn-lg ui-btn-square ui-round ui-icons-no-opacity ui-ease-btn ui-set-fixed ui-set-r" style="bottom: 88px;right: 15px;">
    <svg class="ui-icon ui-visible-dark"><use href="#moon-fill"/></svg>
    <svg class="ui-icon ui-visible-light"><use href="#sun-fill"/></svg>
</button>
<?php
    } else {
?>
    <!-- header -->
    <header class="ui-header-sticky ui-container ui-form-lg ui-invert-bg ui-theme-base ui-fill-dark-100 ui-ease-layout ui-visible" data-ui-classes="ui-shadow-lg">
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

                            <div class="ui-cursor-default ui-no-selection ui-highlight">
                                <h1 class="ui-h1 ui-font-light">UI lab is a modular design system.</h2>
                                <h4 class="ui-h4 ui-font-bold ui-text">For developing web interfaces fastly!</h4>
                            </div>

                            <span class="ui-sp-15"></span>

                            <div class="ui-sm-align-l ui-form-lg ui-ease-1st-btn">
                                <a href="?p=classnames" class="ui-btn ui-btn-ghost ui-btn-sm-fluid ui-m-5-h ui-xs-no-m-h ui-border-dual ui-circle">
                                    <svg class="ui-icon ui-m-5-r"><use href="#brackets-curly"/></svg>
                                    Classnames
                                </a>
                                <a href="?p=iconlist" class="ui-btn ui-btn-ghost ui-btn-sm-fluid ui-m-5-h ui-xs-no-m-h ui-border-dual ui-circle">
                                    <svg class="ui-icon ui-m-5-r"><use href="#draw"/></svg>
                                    Icon List
                                </a>
                            </div>
                        </div>

                        <span class="ui-sp-30"></span>

                        <div class="ui-row ui-row-gap-lg ui-sm-fluid ui-align-c ui-hover-shadow-2nd ui-hover-t-2nd">
                            <div class="ui-col-lg-4 ui-col-6">
                                <a class="ui-link ui-card ui-p-2 ui-round ui-shadow-lg ui-ease-layout" href="?l=custom/login-page">
                                    <img class="ui-img-fluid ui-round-t ui-visible-light" src="img/layout-login-page.jpg" alt="Login Page">
                                    <img class="ui-img-fluid ui-round-t ui-visible-dark" src="img/layout-login-page-dark.jpg" alt="Login Page Dark">
                                    <h4 class="ui-h4 ui-inline-block ui-p-10-v">
                                        Login Page
                                    </h4>
                                </a>
                            </div>
                            <div class="ui-col-lg-4 ui-col-6">
                                <a class="ui-link ui-card ui-p-2 ui-round ui-shadow-lg ui-ease-layout" href="?l=custom/sign-up-page">
                                    <img class="ui-img-fluid ui-round-t ui-visible-light" src="img/layout-sign-up-page.jpg" alt="Sign Up Page">
                                    <img class="ui-img-fluid ui-round-t ui-visible-dark" src="img/layout-sign-up-page-dark.jpg" alt="Sign Up Page Dark">
                                    <h4 class="ui-h4 ui-inline-block ui-p-10-v">
                                        Sign Up Page
                                    </h4>
                                </a>
                            </div>
                            <div class="ui-col-lg-4 ui-col-6">
                                <a class="ui-link ui-card ui-p-2 ui-round ui-shadow-lg ui-ease-layout" href="?l=custom/dashboard">
                                    <img class="ui-img-fluid ui-round-t ui-visible-light" src="img/layout-dashboard.jpg" alt="Dashboard">
                                    <img class="ui-img-fluid ui-round-t ui-visible-dark" src="img/layout-dashboard-dark.jpg" alt="Dashboard Dark">
                                    <h4 class="ui-h4 ui-inline-block ui-p-10-v">
                                        Dashboard
                                    </h4>
                                </a>
                            </div>
                            <div class="ui-col-lg-4 ui-col-6">
                                <a class="ui-link ui-card ui-p-2 ui-round ui-shadow-lg ui-ease-layout" href="?l=custom/landing-page">
                                    <img class="ui-img-fluid ui-round-t ui-visible-light" src="img/layout-landing-page.jpg" alt="Landing Page">
                                    <img class="ui-img-fluid ui-round-t ui-visible-dark" src="img/layout-landing-page-dark.jpg" alt="Landing Page Dark">
                                    <h4 class="ui-h4 ui-inline-block ui-p-10-v">
                                        Landing Page
                                    </h4>
                                </a>
                            </div>
                            <div class="ui-col-lg-4 ui-col-6">
                                <a class="ui-link ui-card ui-p-2 ui-round ui-shadow-lg ui-ease-layout" href="?l=custom/movie-app">
                                    <img class="ui-img-fluid ui-round-t ui-visible-light" src="img/layout-movie-app.jpg" alt="Movie App">
                                    <img class="ui-img-fluid ui-round-t ui-visible-dark" src="img/layout-movie-app-dark.jpg" alt="Movie App Dark">
                                    <h4 class="ui-h4 ui-inline-block ui-p-10-v">
                                        Movie App
                                    </h4>
                                </a>
                            </div>
                            <div class="ui-col-lg-4 ui-col-6">
                                <a class="ui-link ui-card ui-p-2 ui-round ui-shadow-lg ui-ease-layout" href="?l=custom/product-listing">
                                    <img class="ui-img-fluid ui-round-t ui-visible-light" src="img/layout-product-listing.jpg" alt="Product Listing">
                                    <img class="ui-img-fluid ui-round-t ui-visible-dark" src="img/layout-product-listing-dark.jpg" alt="Product Listing Dark">
                                    <h4 class="ui-h4 ui-inline-block ui-p-10-v">
                                        Product Listing
                                    </h4>
                                </a>
                            </div>
                            <div class="ui-col-lg-4 ui-col-6">
                                <a class="ui-link ui-card ui-p-2 ui-round ui-shadow-lg ui-ease-layout" href="?l=custom/real-estate-details">
                                    <img class="ui-img-fluid ui-round-t ui-visible-light" src="img/layout-real-estate-details.jpg" alt="Real Estate Details">
                                    <img class="ui-img-fluid ui-round-t ui-visible-dark" src="img/layout-real-estate-details-dark.jpg" alt="Real Estate Details Dark">
                                    <h4 class="ui-h4 ui-inline-block ui-p-10-v">
                                        Real Estate Details
                                    </h4>
                                </a>
                            </div>
                            <div class="ui-col-lg-4 ui-col-6">
                                <a class="ui-link ui-card ui-p-2 ui-round ui-shadow-lg ui-ease-layout" href="?l=custom/photo-albums">
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
    <div class="ui-sidebar ui-sidebar-r ui-round ui-theme-base ui-ease-layout ui-ease-in-out">
        <div class="ui-sidebar-title ui-p-15-v ui-fill-dark-100">
            <button class="ui-btn ui-btn-square ui-btn-lg ui-btn-ghost ui-circle ui-ease-btn ui-sidebar-close">
                <svg class="ui-icon ui-no-opacity"><use href="#remove"/></svg>
            </button>
            <img class="ui-m-5-v" src="img/uilab-logo.png" alt="" srcset="img/uilab-logo@2x.png 2x">
        </div>
        <div class="ui-sidebar-content ui-no-p ui-theme-gray ui-fill-light-100 ui-scroll-v"></div>
    </div>
<?php
    }
?>

<?php include ('img/icons.svg'); ?>

</body>
</html>