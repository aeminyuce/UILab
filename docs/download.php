<!-- custom JS -->
<script src="../js/custom/download.js?v=<?php echo filemtime('../js/custom/download.js'); ?>"></script>

<main class="ui-container">
    <div class="ui-row">
        <div class="ui-col-12">
            <div class="ui-padding-30-b ui-sm-no-padding ui-tabs ui-theme-sub ui-ease-tabs" data-ui-classes="ui-border-lg ui-stroke">

                <div class="ui-row ui-border-b ui-margin-30-b">

                    <div class="ui-col-4 ui-offset-4 ui-no-padding-b">
                        <div class="ui-btn-holder form-lg ui-ease-1st-btn">
                            <button class="ui-tab ui-btn ui-btn-ghost ui-round-t ui-border-b ui-border-lg ui-stroke active">CSS</button>
                            <button class="ui-tab ui-btn ui-btn-ghost ui-round-t ui-border-b">JS</button>
                            <button class="ui-tab ui-btn ui-btn-ghost ui-round-t ui-border-b">Icons</button>
                        </div>
                    </div>

                </div>

                <div class="ui-fixed ui-fixed-xl ui-padding-15 ui-sm-no-padding ui-shadow-in-sm ui-round ui-theme-gray ui-fill-light-100">

                    <div class="generate-holder ui-tab-content form-lg ui-padding-15 ui-open ui-open-ease">

                        <div class="ui-align-c ui-margin-30-b">
                            <div class="file ui-no-border ui-round ui-circle ui-no-border ui-ease-form form-inline-xs">
                                <input class="ui-cursor-pointer" name="less" class="generate-import" type="file">
                                <span class="ui-btn ui-padding-30-h ui-circle ui-block ui-ease-btn">
                                    <span class="ui-inline-block">Import LESS File</span>
                                    <svg class="ui-icon ui-margin-5-l"><use href="#import"/></svg>
                                </span>
                            </div>
                        </div>

                        <div class="generate-list ui-row ui-row-gap-sm-v">
                            <div class="ui-col-3 ui-col-md-4 ui-col-sm-6">

                                <h4>Core</h4>

                                <div class="generate-forms ui-margin-20-b ui-block-1st">
                                    <label class="custom ui-margin-5-b ui-opacity ui-ease-opacity">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form form-disabled">
                                            <input class="generate-toggle" type="checkbox" checked disabled>
                                            <i class="state"></i>
                                        </span>
                                        <span class="ui-color-black-50">Select/Deselect All</span>
                                    </label>

                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form form-disabled">
                                            <input type="checkbox" name="ui" value="../css/ui" checked disabled>
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        UI
                                    </label>
                                </div>

                                <h4>Grid System</h4>

                                <div class="generate-forms ui-margin-20-b ui-block-1st">
                                    <label class="custom ui-margin-5-b ui-opacity ui-ease-opacity">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input class="generate-toggle" type="checkbox" checked>
                                            <i class="state"></i>
                                        </span>
                                        <span class="ui-color-black-50">Select/Deselect All</span>
                                    </label>

                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="grid" value="../css/grid" checked>
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Grid
                                    </label>
                                </div>

                                <h4>Utilities</h4>

                                <div class="generate-forms ui-margin-20-b ui-block-1st">
                                    <label class="custom ui-margin-5-b ui-opacity ui-ease-opacity">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input class="generate-toggle" type="checkbox" checked>
                                            <i class="state"></i>
                                        </span>
                                        <span class="ui-color-black-50">Select/Deselect All</span>
                                    </label>

                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="helpers" value="../css/helpers" checked>
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Helpers
                                    </label>
                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="ui-borders" value="../css/borders" checked>
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Borders
                                    </label>
                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="paddings" value="../css/paddings" checked>
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Paddings
                                    </label>
                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="margins" value="../css/margins" checked>
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Margins
                                    </label>
                                </div>

                                <h4>Typography</h4>

                                <div class="generate-forms ui-margin-20-b ui-block-1st">
                                    <label class="custom ui-margin-5-b ui-opacity ui-ease-opacity">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input class="generate-toggle" type="checkbox">
                                            <i class="state"></i>
                                        </span>
                                        <span class="ui-color-black-50">Select/Deselect All</span>
                                    </label>

                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="typography" value="../css/typography" checked>
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Typography
                                    </label>
                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="listings" value="../css/listings">
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Listings
                                    </label>
                                </div>

                            </div>
                            <div class="ui-col-3 ui-col-md-4 ui-col-sm-6">

                                <h4>Buttons</h4>

                                <div class="generate-forms ui-margin-20-b ui-block-1st">
                                    <label class="custom ui-margin-5-b ui-opacity ui-ease-opacity">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input class="generate-toggle" type="checkbox">
                                            <i class="state"></i>
                                        </span>
                                        <span class="ui-color-black-50">Select/Deselect All</span>
                                    </label>

                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="buttons" value="../css/buttons" checked>
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Buttons
                                    </label>
                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="top button" value="../css/top-button" checked>
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Top Button
                                    </label>
                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="tabs" value="../css/tabs">
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Tabs
                                    </label>
                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="dropdown" value="../css/dropdown">
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Dropdown
                                    </label>
                                </div>

                                <h4>Forms</h4>

                                <div class="generate-forms ui-margin-20-b ui-block-1st">
                                    <label class="custom ui-margin-5-b ui-opacity ui-ease-opacity">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input class="generate-toggle" type="checkbox">
                                            <i class="state"></i>
                                        </span>
                                        <span class="ui-color-black-50">Select/Deselect All</span>
                                    </label>

                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="forms" value="../css/forms" checked>
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Forms
                                    </label>
                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="textarea counter" value="../css/textarea-counter">
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Textarea Counter
                                    </label>
                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="autocomplete" value="../css/autocomplete">
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Autocomplete
                                    </label>
                                </div>

                                <h4>Icons</h4>

                                <div class="generate-forms ui-margin-20-b ui-block-1st">
                                    <label class="custom ui-margin-5-b ui-opacity ui-ease-opacity">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input class="generate-toggle" type="checkbox" checked>
                                            <i class="state"></i>
                                        </span>
                                        <span class="ui-color-black-50">Select/Deselect All</span>
                                    </label>

                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="icons" value="../css/icons" checked>
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Icons
                                    </label>
                                </div>

                            </div>
                            <div class="ui-col-3 ui-col-md-4 ui-col-sm-6">

                                <h4>Layout</h4>

                                <div class="generate-forms ui-margin-20-b ui-block-1st">
                                    <label class="custom ui-margin-5-b ui-opacity ui-ease-opacity">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input class="generate-toggle" type="checkbox">
                                            <i class="state"></i>
                                        </span>
                                        <span class="ui-color-black-50">Select/Deselect All</span>
                                    </label>

                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="list group" value="../css/list-group" checked>
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        List Group
                                    </label>
                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="card" value="../css/card" checked>
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Card
                                    </label>
                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="tables" value="../css/tables" checked>
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Tables
                                    </label>                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="breadcrumbs" value="../css/breadcrumbs">
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Breadcrumbs
                                    </label>
                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="loading mask" value="../css/loading-mask">
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Loading Mask
                                    </label>
                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="photo images" value="../css/photo-images">
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Photo Images
                                    </label>
                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="progress bar" value="../css/progress-bar">
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Progress Bar
                                    </label>
                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="scrollbar" value="../css/scrollbar">
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Scrollbar
                                    </label>
                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="steps" value="../css/steps">
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Steps
                                    </label>
                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="sticky header" value="../css/sticky-header">
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Sticky Header
                                    </label>
                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="stripes" value="../css/stripes">
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Stripes
                                    </label>
                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="timeline" value="../css/timeline">
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Timeline
                                    </label>
                                </div>

                                <h4>Charts</h4>

                                <div class="generate-forms ui-margin-20-b ui-block-1st">
                                    <label class="custom ui-margin-5-b ui-opacity ui-ease-opacity">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input class="generate-toggle" type="checkbox">
                                            <i class="state"></i>
                                        </span>
                                        <span class="ui-color-black-50">Select/Deselect All</span>
                                    </label>

                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="line charts" value="../css/line-charts">
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Line Charts
                                    </label>
                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="donut chart" value="../css/donut-chart">
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Donut Chart
                                    </label>
                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="pie chart" value="../css/pie-chart">
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Pie Chart
                                    </label>
                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="svg map" value="../css/svg-map">
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        SVG Map
                                    </label>
                                </div>

                            </div>
                            <div class="ui-col-3 ui-col-md-4 ui-col-sm-6">

                                <h4>Components</h4>

                                <div class="generate-forms ui-margin-20-b ui-block-1st">
                                    <label class="custom ui-margin-5-b ui-opacity ui-ease-opacity">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input class="generate-toggle" type="checkbox">
                                            <i class="state"></i>
                                        </span>
                                        <span class="ui-color-black-50">Select/Deselect All</span>
                                    </label>

                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="mobile menu" value="../css/mobile-menu" checked>
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Mobile Menu
                                    </label>
                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="modal" value="../css/modal" checked>
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Modal
                                    </label>
                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="tooltip" value="../css/tooltip" checked>
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Tooltip
                                    </label>
                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="alerts" value="../css/alerts">
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Alerts
                                    </label>
                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="calendar" value="../css/calendar">
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Calendar
                                    </label>
                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="carousel" value="../css/carousel">
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Carousel
                                    </label>
                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="grid list" value="../css/grid-list">
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Grid List
                                    </label>
                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="image uploader" value="../css/image-uploader">
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Image Uploader
                                    </label>
                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="photo gallery" value="../css/photo-gallery">
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Photo Gallery
                                    </label>
                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="photo slider" value="../css/photo-slider">
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Photo Slider
                                    </label>
                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="weather" value="../css/weather">
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Weather
                                    </label>
                                </div>

                                <h4>Themes</h4>

                                <div class="generate-forms ui-margin-20-b ui-block-1st">
                                    <label class="custom ui-margin-5-b ui-opacity ui-ease-opacity">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input class="generate-toggle" type="checkbox" checked>
                                            <i class="state"></i>
                                        </span>
                                        <span class="ui-color-black-50">Select/Deselect All</span>
                                    </label>

                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="themes" value="../css/themes" checked>
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Themes
                                    </label>
                                </div>

                            </div>
                        </div>

                        <div class="ui-row">
                            <div class="ui-col-12 ui-no-padding-t">

                                <div class="textarea ui-margin-15-b ui-round ui-border-dual ui-ease-form">
                                    <textarea class="ui-color-black-50 ui-font-16 ui-padding-10" rows="12" placeholder="Generated CSS will be here!"></textarea>
                                    <div class="ui-border-t ui-border-dual">
                                        <div class="ui-inline-block ui-padding-5-r">
                                            <button title="Clear form!" class="generate-clear ui-btn ui-btn-square ui-btn-ghost ui-left ui-ease-btn">
                                                <svg class="ui-icon"><use href="#trash"/></svg>
                                            </button>
                                            <button title="Minify code" name="css" class="generate-min ui-btn ui-btn-square ui-btn-ghost ui-ease-btn">
                                                <svg class="ui-icon"><use href="#code"/></svg>
                                            </button>
                                        </div>
                                        File size:
                                        <b class="generate-size">0 Kb</b>
                                    </div>
                                </div>

                                <div class="ui-align-r ui-align-c ui-ease-1st-btn">
                                    <span class="ui-sp-15 ui-visible-xs"></span>
                                    <button name="less" class="generate-btn ui-btn ui-btn-xs-fluid ui-round ui-fill-dark-100">Generate LESS</button>
                                    <span class="ui-sp-5 ui-visible-sm"></span>
                                    <button title="Copy to clipboard!" class="generate-copy ui-btn ui-btn-xs-fluid ui-round">
                                        <svg class="ui-icon ui-current ui-margin-5-r ui-no-opacity"><use href="#files"/></svg>Copy to clipboard
                                    </button>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div class="generate-holder ui-tab-content form-lg ui-padding-15">

                        <div class="ui-align-c ui-margin-30-b">
                            <div class="file ui-no-border ui-round ui-circle ui-no-border ui-ease-form form-inline-xs">
                                <input class="ui-cursor-pointer" name="js" class="generate-import" type="file">
                                <span class="ui-btn ui-padding-30-h ui-circle ui-block ui-ease-btn">
                                    <span class="ui-inline-block">Import JS File</span>
                                    <svg class="ui-icon ui-margin-5-l"><use href="#import"/></svg>
                                </span>
                            </div>
                        </div>

                        <div class="generate-list ui-row ui-row-gap-sm-v">
                            <div class="ui-col-3 ui-col-md-4 ui-col-sm-6">

                                <h4>Core</h4>

                                <div class="generate-forms ui-margin-20-b ui-block-1st">
                                    <label class="custom ui-margin-5-b ui-opacity ui-ease-opacity">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input class="generate-toggle" type="checkbox" checked>
                                            <i class="state"></i>
                                        </span>
                                        <span class="ui-color-black-50">Select/Deselect All</span>
                                    </label>

                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="ui js" value="../js/ui" checked>
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        UI
                                    </label>
                                </div>

                                <h4>Grid System</h4>

                                <div class="generate-forms ui-margin-20-b ui-block-1st">
                                    <label class="custom ui-margin-5-b ui-opacity ui-ease-opacity">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input class="generate-toggle" type="checkbox" checked>
                                            <i class="state"></i>
                                        </span>
                                        <span class="ui-color-black-50">Select/Deselect All</span>
                                    </label>

                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="grid js" value="../js/grid" checked>
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Grid
                                    </label>
                                </div>

                                <h4>Buttons</h4>

                                <div class="generate-forms ui-margin-20-b ui-block-1st">
                                    <label class="custom ui-margin-5-b ui-opacity ui-ease-opacity">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input class="generate-toggle" type="checkbox">
                                            <i class="state"></i>
                                        </span>
                                        <span class="ui-color-black-50">Select/Deselect All</span>
                                    </label>

                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="top button js" value="../js/top-button" checked>
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Top Button
                                    </label>
                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="dropdown js" value="../js/dropdown">
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Dropdown
                                    </label>
                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="tabs js" value="../js/tabs">
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Tabs
                                    </label>
                                </div>

                            </div>
                            <div class="ui-col-3 ui-col-md-4 ui-col-sm-6">

                                <h4>Forms</h4>

                                <div class="generate-forms ui-margin-20-b ui-block-1st">
                                    <label class="custom ui-margin-5-b ui-opacity ui-ease-opacity">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input class="generate-toggle" type="checkbox">
                                            <i class="state"></i>
                                        </span>
                                        <span class="ui-color-black-50">Select/Deselect All</span>
                                    </label>

                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="forms js" value="../js/forms" checked>
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Forms
                                    </label>
                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="autocomplete js" value="../js/autocomplete">
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Autocomplete
                                    </label>
                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="currency spinner js" value="../js/currency-spinner">
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Currency Spinner
                                    </label>
                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="dual multi select js" value="../js/dual-multi-select">
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Dual Multi Select
                                    </label>
                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="form spinner js" value="../js/form-spinner">
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Form Spinner
                                    </label>
                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="required forms js" value="../js/required-forms">
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Required Forms
                                    </label>
                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="textarea counter js" value="../js/textarea-counter">
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Textarea Counter
                                    </label>
                                </div>

                                <h4>Layout</h4>

                                <div class="generate-forms ui-margin-20-b ui-block-1st">
                                    <label class="custom ui-margin-5-b ui-opacity ui-ease-opacity">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input class="generate-toggle" type="checkbox">
                                            <i class="state"></i>
                                        </span>
                                        <span class="ui-color-black-50">Select/Deselect All</span>
                                    </label>

                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="card js" value="../js/card" checked>
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Card
                                    </label>
                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="sticky header js" value="../js/sticky-header">
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Sticky Header
                                    </label>
                                </div>

                            </div>
                            <div class="ui-col-3 ui-col-md-4 ui-col-sm-6">

                                <h4>Components</h4>

                                <div class="generate-forms ui-margin-20-b ui-block-1st">
                                    <label class="custom ui-margin-5-b ui-opacity ui-ease-opacity">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input class="generate-toggle" type="checkbox">
                                            <i class="state"></i>
                                        </span>
                                        <span class="ui-color-black-50">Select/Deselect All</span>
                                    </label>

                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="mobile menu js" value="../js/mobile-menu" checked>
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Mobile Menu
                                    </label>
                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="modal js" value="../js/modal" checked>
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Modal
                                    </label>
                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="tooltip js" value="../js/tooltip" checked>
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Tooltip
                                    </label>
                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="alerts js" value="../js/alerts">
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Alerts
                                    </label>
                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="calendar js" value="../js/calendar">
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Calendar
                                    </label>
                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="carousel js" value="../js/carousel">
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Carousel
                                    </label>
                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="countdown js" value="../js/countdown">
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Countdown
                                    </label>
                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="grid list js" value="../js/grid-list">
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Grid List
                                    </label>
                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="image uploader js" value="../js/image-uploader">
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Image Uploader
                                    </label>
                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="oading mask js" value="../js/loading-mask">
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Loading Mask
                                    </label>
                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="photo gallery js" value="../js/photo-gallery">
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Photo Gallery
                                    </label>
                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="photo slider js" value="../js/photo-slider">
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Photo Slider
                                    </label>
                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="weather js" value="../js/weather">
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Weather
                                    </label>
                                </div>

                            </div>
                            <div class="ui-col-3 ui-col-md-4 ui-col-sm-6">

                                <h4>Charts</h4>

                                <div class="generate-forms ui-margin-20-b ui-block-1st">
                                    <label class="custom ui-margin-5-b ui-opacity ui-ease-opacity">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input class="generate-toggle" type="checkbox">
                                            <i class="state"></i>
                                        </span>
                                        <span class="ui-color-black-50">Select/Deselect All</span>
                                    </label>

                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="line charts js" value="../js/line-charts">
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Line Charts
                                    </label>
                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="donut chart js" value="../js/donut-chart">
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Donut Chart
                                    </label>
                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="pie chart js" value="../js/pie-chart">
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        Pie chart
                                    </label>
                                    <label class="custom">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" name="svg map js" value="../js/svg-map">
                                            <i class="state ui-fill-dark-100"></i>
                                        </span>
                                        SVG Map
                                    </label>
                                </div>

                            </div>
                        </div>

                        <div class="ui-row">
                            <div class="ui-col-12 ui-no-padding-t">

                                <div class="textarea ui-margin-15-b ui-round ui-border-dual ui-ease-form">
                                    <textarea class="ui-color-black-50 ui-font-16 ui-padding-10" rows="12" placeholder="Generated JS will be here!"></textarea>
                                    <div class="ui-border-t ui-border-dual">
                                        <div class="ui-inline-block ui-padding-5-r">
                                            <button title="Clear form!" class="generate-clear ui-btn ui-btn-square ui-btn-ghost ui-left ui-ease-btn">
                                                <svg class="ui-icon"><use href="#trash"/></svg>
                                            </button>
                                            <button title="Minify code" name="js" class="generate-min ui-btn ui-btn-square ui-btn-ghost ui-ease-btn">
                                                <svg class="ui-icon"><use href="#code"/></svg>
                                            </button>
                                        </div>
                                        File size:
                                        <b class="generate-size">0 Kb</b>
                                    </div>
                                </div>

                                <div class="ui-align-r ui-align-c ui-ease-1st-btn">
                                    <span class="ui-sp-15 ui-visible-xs"></span>
                                    <button name="js" class="generate-btn ui-btn ui-btn-xs-fluid ui-round ui-fill-dark-100">Generate JS</button>
                                    <button title="Copy to clipboard!" class="generate-copy ui-btn ui-btn-xs-fluid ui-round">
                                        <svg class="ui-icon ui-current ui-margin-5-r ui-no-opacity"><use href="#files"/></svg>Copy to clipboard
                                    </button>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div class="generate-holder ui-tab-content form-lg ui-padding-15">

                        <div class="generate-list ui-row ui-row-gap-sm-v">
                            <div class="ui-col-12">

                                <div class="generate-forms ui-margin-20-b">
                                    <label class="custom ui-margin-5-b ui-opacity ui-ease-opacity">
                                        <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                            <input class="generate-toggle" type="checkbox">
                                            <i class="state"></i>
                                        </span>
                                        <span class="ui-color-black-50">Select/Deselect All</span>
                                    </label>

                                    <div class="ui-row ui-no-ui-row-gap-v ui-xs-fluid">
                                        <div class="ui-col-3 ui-col-md-4 ui-col-sm-6 ui-block-1st">
                                            <label class="custom">
                                                <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                                    <input type="checkbox" value="../icons/general" checked>
                                                    <i class="state ui-fill-dark-100"></i>
                                                </span>
                                                General
                                            </label>
                                            <label class="custom">
                                                <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                                    <input type="checkbox" value="../icons/touch">
                                                    <i class="state ui-fill-dark-100"></i>
                                                </span>
                                                Touch
                                            </label>
                                            <label class="custom">
                                                <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                                    <input type="checkbox" value="../icons/media">
                                                    <i class="state ui-fill-dark-100"></i>
                                                </span>
                                                Media
                                            </label>
                                        </div>
                                        <div class="ui-col-3 ui-col-md-4 ui-col-sm-6 ui-block-1st">
                                            <label class="custom">
                                                <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                                    <input type="checkbox" value="../icons/real-estate">
                                                    <i class="state ui-fill-dark-100"></i>
                                                </span>
                                                Real Estate
                                            </label>
                                            <label class="custom">
                                                <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                                    <input type="checkbox" value="../icons/weather">
                                                    <i class="state ui-fill-dark-100"></i>
                                                </span>
                                                Weather
                                            </label>
                                            <label class="custom">
                                                <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                                    <input type="checkbox" value="../icons/kitchen">
                                                    <i class="state ui-fill-dark-100"></i>
                                                </span>
                                                Kitchen
                                            </label>
                                        </div>
                                        <div class="ui-col-3 ui-col-md-4 ui-col-sm-6 ui-block-1st">
                                            <label class="custom">
                                                <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                                    <input type="checkbox" value="../icons/commerce">
                                                    <i class="state ui-fill-dark-100"></i>
                                                </span>
                                                Commerce
                                            </label>
                                            <label class="custom">
                                                <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                                    <input type="checkbox" value="../icons/files">
                                                    <i class="state ui-fill-dark-100"></i>
                                                </span>
                                                Files
                                            </label>
                                            <label class="custom">
                                                <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                                    <input type="checkbox" value="../icons/social">
                                                    <i class="state ui-fill-dark-100"></i>
                                                </span>
                                                Social
                                            </label>
                                        </div>
                                        <div class="ui-col-3 ui-col-md-4 ui-col-sm-6 ui-block-1st">
                                            <label class="custom">
                                                <span class="switch-custom ui-round ui-border-dual ui-ease-form">
                                                    <input type="checkbox" value="../icons/brands">
                                                    <i class="state ui-fill-dark-100"></i>
                                                </span>
                                                Brands
                                            </label>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="ui-row">
                            <div class="ui-col-12 ui-no-padding-t">

                                <div class="textarea ui-margin-15-b ui-round ui-border-dual ui-ease-form">
                                    <textarea class="ui-color-black-50 ui-font-16 ui-padding-10" rows="12" placeholder="Generated icons will be here!"></textarea>
                                    <div class="ui-border-t ui-border-dual">
                                        <div class="ui-inline-block ui-padding-5-r">
                                            <button title="Clear form!" class="generate-clear ui-btn ui-btn-square ui-btn-ghost ui-left ui-ease-btn">
                                                <svg class="ui-icon"><use href="#trash"/></svg>
                                            </button>
                                            <button title="Minify code" name="ui-icon" class="generate-min ui-btn ui-btn-square ui-btn-ghost ui-ease-btn">
                                                <svg class="ui-icon"><use href="#code"/></svg>
                                            </button>
                                        </div>
                                        File size:
                                        <b class="generate-size">0 Kb</b>
                                    </div>
                                </div>

                                <div class="ui-align-r ui-align-c ui-ease-1st-btn">
                                    <span class="ui-sp-15 ui-visible-xs"></span>
                                    <button name="php" class="generate-btn ui-btn ui-btn-xs-fluid ui-round ui-fill-dark-100" data-ui-type="icons">Generate Icons</button>
                                    <button title="Copy to clipboard!" class="generate-copy ui-btn ui-btn-xs-fluid ui-round">
                                        <svg class="ui-icon ui-current ui-margin-5-r ui-no-opacity"><use href="#files"/></svg>Copy to clipboard
                                    </button>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    </div>
</main>