<!-- custom js -->
<script>

    (function () {

        'use strict';
        /*globals document, selector, events, alert, setTimeout, ajax, FileReader */

        function fileSize(holder, code) {

            var fileSize = encodeURIComponent(code).match(/%[89ABab]/g);

            fileSize = code.length + (fileSize ? fileSize.length : 0);
            fileSize = fileSize / 1000;

            fileSize = fileSize.toFixed(2);
            selector('.generate-size', holder)[0].innerHTML = fileSize + ' kb';

        }

        function pullFiles(that) {

            var holder, list, result, pullResults, count, type, countFnc;

            holder = events.closest(that, '.generate-holder')[0];
            list = selector('input:checked:not(.generate-toggle)', holder);
            result = selector('textarea', holder)[0];

            pullResults = '';
            count = 0;

            type = that.getAttribute('data-type');

            countFnc = function () {

                ajax({

                    url : list[count].getAttribute('value') + '.' + that.name,
                    callback: function (status, response) {

                        if (status === 'success') {

                            pullResults += response;

                            if (count < list.length - 1) {

                                count += 1;
                                pullResults += '\n';
                                countFnc();

                            } else {

                                if (that.name === 'less') {
                                    pullResults = pullResults.replace(/ @import '_settings.less';/g, ''); // remove repeated import settings file
                                }

                                if (type === 'icons') { // icons
                                    pullResults = '<svg style="display: none;">\n' + pullResults + '</svg>'
                                }

                                result.value = pullResults;
                                result.scrollTop = 0; // IE, EDGE: scrollTo() not supported for textarea element

                                fileSize(holder, pullResults);

                                // empty variables
                                setTimeout(function () {
                                    loadingButton.toggle(that); // hide loading
                                }, 150);

                                pullResults = '';

                            }

                        }

                    }

                });

            };

            loadingButton.toggle(that); // show loading
            if (list.length < 1) {

                setTimeout(function () {
                    loadingButton.toggle(that); // hide loading
                }, 150);

                return;

            }

            if (that.name === 'less') { // firstly, import settings file
                ajax({

                    url : '../css/_settings.less',
                    callback: function (status, response) {

                        if (status === 'success') {
                            pullResults += response;
                        }

                    }

                });
            }

            countFnc();

        }

        function readFiles(that) {

            var i, holder, forms, elems, list, btn, reader, ext, file, getTypes, count, toggler;

            holder = events.closest(that, '.generate-holder')[0];
            elems = selector('input', holder);
            list = selector('input:not(.generate-toggle)', holder);

            reader = new FileReader(); // filereader API

            file = that.files[0];
            if (file === null) {

                that.value = '';
                return;

            }

            btn = that.parentElement;
            btn = selector('.btn', btn)[0];

            loadingButton.toggle(btn); // show loading

            events.each(elems, function () {
                this.checked = false;
            });

            ext = file.name.match(/\.[0-9a-z]+$/i)[0];
            if (ext === '.' + that.name) {

                reader.readAsText(file, "UTF-8");
                reader.onload = function (ev) {

                    getTypes = ev.target.result.match(/\/\*+[\w\d\s\,]+\*\//g);

                    if (getTypes === null) {

                        setTimeout(function () {
                            loadingButton.toggle(btn); // hide loading
                        }, 150);

                        that.value = '';

                        return;

                    }

                    for (i = 0; i < getTypes.length; i += 1) {

                        getTypes[i] = getTypes[i].replace(/\/\* /g, '').replace(/ \*\//g, '');
                        getTypes[i] = getTypes[i].toLowerCase();

                    }

                    setTimeout(function () {

                        events.each(list, function () {

                            if (getTypes.toString().indexOf(this.name) > -1) {
                                this.checked = true;

                            } else {
                                this.checked = false;
                            }

                        });

                        // check selected all properties
                        forms = selector('.generate-forms', holder);
                        events.each(forms, function () {

                            count = 0;

                            elems = selector('input:not(.generate-toggle)', this);
                            toggler = selector('.generate-toggle', this)[0];

                            events.each(elems, function () {
                                if (this.checked) { count += 1; }
                            });


                            if (elems.length > 0 && count === elems.length) {
                                toggler.checked = true;

                            } else {
                                toggler.checked = false;
                            }

                        });

                        setTimeout(function () {
                            loadingButton.toggle(btn); // hide loading
                        }, 150);

                        // empty variables
                        getTypes = [];

                    }, 300);

                };

            } else {

                setTimeout(function () {
                    loadingButton.toggle(btn); // hide loading
                }, 150);

            }

            that.value = '';

        }

        function generator() {

            // Events
            events.on('.generate-import', 'change', function () {
                readFiles(this);
            });

            events.on('.generate-btn', 'click', function () {
                pullFiles(this);
            });

            events.on('.generate-clear', 'click', function () {

                var holder, form;

                holder = events.closest(this, '.generate-holder')[0];
                form = selector('textarea', holder)[0];

                form.value = '';
                selector('.generate-size', holder)[0].innerHTML = '0 kb';

            });

            events.on('.generate-min', 'click', function () {

                var holder, result, code;

                holder = events.closest(this, '.generate-holder')[0];
                result = selector('textarea', holder)[0];

                code = result.value;
                if (code.length === 0) { return; }

                // comments
                code = code.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, ''); // remove // /*
                code = code.replace(/(<!--.*?-->)|(<!--[\w\W\n\s]+?-->)/gm, ''); // remove <!-- -->

                // line breaks and multiple spaces
                if (this.name === 'css') {

                    code = code.replace(/ {/g, '{').replace(/: /g, ':');
                    code = code.replace(/ >/g, '>').replace(/> /g, '>');
                    code = code.replace(/, /g, ',');

                }

                if (this.name === 'js') {
                    code = code.replace(/\n/g, ' ').replace(/\s+\s/g, ' ');

                } else {
                    code = code.replace(/\n/g, '').replace(/\s+\s/g, '').replace(/^\s|\s+$/g, '');
                }

                code = code.replace(/^\s|\s+$/g, '');

                result.value = code;
                result.scrollTop = 0; // IE, EDGE: scrollTo() not supported for textarea element

                fileSize(holder, code);

            });

            events.on(document, 'paste keydown blur', '.generate-holder textarea', function () {

                var that, holder, result, code;

                that = this;
                setTimeout(function () {

                    holder = events.closest(that, '.generate-holder')[0];
                    result = selector('textarea', holder)[0];

                    code = result.value;
                    fileSize(holder, code);

                }, 0);

            });

            events.on('.generate-copy', 'click', function () {

                var holder, form;

                holder = events.closest(this, '.generate-holder')[0];
                form = selector('textarea', holder)[0];

                if (form.value.length === 0) { return; }

                form.select();
                document.execCommand('copy');

            });

            events.on('.generate-toggle', 'change', function () {

                var forms, elems;

                forms = events.closest(this, '.generate-forms')[0];
                elems = selector('input', forms);

                if (this.checked) {

                    events.each(elems, function () {
                        this.checked = true;
                    });

                } else {

                    events.each(elems, function () {
                        this.checked = false;
                    });

                }

            });

            events.on('.generate-forms input:not(.generate-toggle)', 'change', function () {

                var forms, elems, count, toggler;
                count = 0;

                forms = events.closest(this, '.generate-forms')[0];
                elems = selector('input:not(.generate-toggle)', forms);

                toggler = selector('.generate-toggle', forms)[0];

                events.each(elems, function () {
                    if (this.checked) { count += 1; }
                });

                if (count === elems.length) {
                    toggler.checked = true;

                } else {
                    toggler.checked = false;
                }

            });

        }

        events.onload(generator);

    }());

</script>

<main class="container">
    <div class="row">
        <div class="col-12">
            <div class="padding-30-v sm-no-padding tabs theme-default2 ease-tabs" data-classes="border-b border-lg ui-border">

                <div class="row border-b margin-15-b">

                    <div class="col-4 offset-4 no-padding-b">
                        <div class="btn-holder form-lg ease-1st-btn">
                            <button class="tab btn btn-ghost round-t border-b border-lg ui-border active">CSS</button>
                            <button class="tab btn btn-ghost round-t">JS</button>
                            <button class="tab btn btn-ghost round-t">Icons</button>
                        </div>
                    </div>

                </div>

                <div class="generate-holder tab-content form-lg padding-30 open open-ease">

                    <div class="align-c margin-30-b">
                        <div class="file no-border round circle no-border ease-form form-xs-inline">
                            <input name="less" class="generate-import" type="file">
                            <span class="btn circle block ease-btn">
                                <span class="inline-block">Import LESS</span>
                                <svg class="icon margin-5-l"><use href="#import"/></svg>
                            </span>
                        </div>
                        <div class="file no-border round circle no-border ease-form form-xs-inline">
                            <input name="css" class="generate-import" type="file">
                            <span class="btn circle block ease-btn">
                                <span class="inline-block">Import CSS</span>
                                <svg class="icon margin-5-l"><use href="#import"/></svg>
                            </span>
                        </div>
                    </div>

                    <div class="generate-list row row-sm-gap-v">
                        <div class="col-3 col-md-4 col-sm-6">

                            <h5 class="bold">Core</h5>

                            <div class="generate-forms margin-20-b block-1st">
                                <label class="custom margin-5-b opacity ease-opacity">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input class="generate-toggle" type="checkbox" checked>
                                        <i class="state"></i>
                                    </span>
                                    <span class="x-dark">Select/Deselect All</span>
                                </label>

                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="reset" value="../css/reset" checked>
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Reset
                                </label>
                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="helpers" value="../css/helpers" checked>
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Helpers
                                </label>
                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="grid" value="../css/grid" checked>
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Grid
                                </label>
                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="borders" value="../css/borders" checked>
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Borders
                                </label>
                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="paddings" value="../css/paddings" checked>
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Paddings
                                </label>
                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="margins" value="../css/margins" checked>
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Margins
                                </label>
                            </div>

                            <h5 class="bold">Effects</h5>

                            <div class="generate-forms margin-20-b block-1st">
                                <label class="custom margin-5-b opacity ease-opacity">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input class="generate-toggle" type="checkbox" checked>
                                        <i class="state"></i>
                                    </span>
                                    <span class="x-dark">Select/Deselect All</span>
                                </label>

                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="effects" value="../css/effects" checked>
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Effects
                                </label>
                            </div>

                            <h5 class="bold">Typography</h5>

                            <div class="generate-forms margin-20-b block-1st">
                                <label class="custom margin-5-b opacity ease-opacity">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input class="generate-toggle" type="checkbox">
                                        <i class="state"></i>
                                    </span>
                                    <span class="x-dark">Select/Deselect All</span>
                                </label>

                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="typography" value="../css/typography" checked>
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Typography
                                </label>
                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="listings" value="../css/listings">
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Listings
                                </label>
                            </div>

                        </div>
                        <div class="col-3 col-md-4 col-sm-6">

                            <h5 class="bold">Buttons</h5>

                            <div class="generate-forms margin-20-b block-1st">
                                <label class="custom margin-5-b opacity ease-opacity">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input class="generate-toggle" type="checkbox">
                                        <i class="state"></i>
                                    </span>
                                    <span class="x-dark">Select/Deselect All</span>
                                </label>

                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="buttons" value="../css/buttons" checked>
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Buttons
                                </label>
                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="top button" value="../css/top-button" checked>
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Top Button
                                </label>
                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="tabs" value="../css/tabs">
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Tabs
                                </label>
                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="dropdown" value="../css/dropdown">
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Dropdown
                                </label>
                            </div>

                            <h5 class="bold">Forms</h5>

                            <div class="generate-forms margin-20-b block-1st">
                                <label class="custom margin-5-b opacity ease-opacity">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input class="generate-toggle" type="checkbox">
                                        <i class="state"></i>
                                    </span>
                                    <span class="x-dark">Select/Deselect All</span>
                                </label>

                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="forms" value="../css/forms" checked>
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Forms
                                </label>
                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="textarea counter" value="../css/textarea-counter">
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Textarea Counter
                                </label>
                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="autocomplete" value="../css/autocomplete">
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Autocomplete
                                </label>
                            </div>

                            <h5 class="bold">Icons</h5>

                            <div class="generate-forms margin-20-b block-1st">
                                <label class="custom margin-5-b opacity ease-opacity">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input class="generate-toggle" type="checkbox" checked>
                                        <i class="state"></i>
                                    </span>
                                    <span class="x-dark">Select/Deselect All</span>
                                </label>

                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="icons" value="../css/icons" checked>
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Icons
                                </label>
                            </div>

                        </div>
                        <div class="col-3 col-md-4 col-sm-6">

                            <h5 class="bold">Layout</h5>

                            <div class="generate-forms margin-20-b block-1st">
                                <label class="custom margin-5-b opacity ease-opacity">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input class="generate-toggle" type="checkbox">
                                        <i class="state"></i>
                                    </span>
                                    <span class="x-dark">Select/Deselect All</span>
                                </label>

                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="list group" value="../css/list-group" checked>
                                        <i class="state ui-dark"></i>
                                    </span>
                                    List Group
                                </label>
                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="card" value="../css/card" checked>
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Card
                                </label>
                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="tables" value="../css/tables" checked>
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Tables
                                </label>                                    <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="breadcrumbs" value="../css/breadcrumbs">
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Breadcrumbs
                                </label>
                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="page social" value="../css/page-social">
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Page Social
                                </label>
                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="photo images" value="../css/photo-images">
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Photo Images
                                </label>
                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="progress bar" value="../css/progress-bar">
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Progress Bar
                                </label>
                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="scrollbar" value="../css/scrollbar">
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Scrollbar
                                </label>
                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="steps" value="../css/steps">
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Steps
                                </label>
                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="sticky header" value="../css/sticky-header">
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Sticky Header
                                </label>
                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="stripes" value="../css/stripes">
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Stripes
                                </label>
                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="timeline" value="../css/timeline">
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Timeline
                                </label>
                            </div>

                            <h5 class="bold">Charts</h5>

                            <div class="generate-forms margin-20-b block-1st">
                                <label class="custom margin-5-b opacity ease-opacity">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input class="generate-toggle" type="checkbox">
                                        <i class="state"></i>
                                    </span>
                                    <span class="x-dark">Select/Deselect All</span>
                                </label>

                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="line charts" value="../css/line-charts">
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Line Charts
                                </label>
                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="donut chart" value="../css/donut-chart">
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Donut Chart
                                </label>
                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="pie chart" value="../css/pie-chart">
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Pie Chart
                                </label>
                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="svg map" value="../css/svg-map">
                                        <i class="state ui-dark"></i>
                                    </span>
                                    SVG Map
                                </label>
                            </div>

                        </div>
                        <div class="col-3 col-md-4 col-sm-6">

                            <h5 class="bold">Components</h5>

                            <div class="generate-forms margin-20-b block-1st">
                                <label class="custom margin-5-b opacity ease-opacity">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input class="generate-toggle" type="checkbox">
                                        <i class="state"></i>
                                    </span>
                                    <span class="x-dark">Select/Deselect All</span>
                                </label>

                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="mobile menu" value="../css/mobile-menu" checked>
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Mobile Menu
                                </label>
                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="modal" value="../css/modal" checked>
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Modal
                                </label>
                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="tooltip" value="../css/tooltip" checked>
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Tooltip
                                </label>
                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="alerts" value="../css/alerts">
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Alerts
                                </label>
                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="calendar" value="../css/calendar">
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Calendar
                                </label>
                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="carousel" value="../css/carousel">
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Carousel
                                </label>
                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="data list" value="../css/data-list">
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Data List
                                </label>
                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="image uploader" value="../css/image-uploader">
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Image Uploader
                                </label>
                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="photo gallery" value="../css/photo-gallery">
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Photo Gallery
                                </label>
                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="photo slider" value="../css/photo-slider">
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Photo Slider
                                </label>
                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="weather" value="../css/weather">
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Weather
                                </label>
                            </div>

                            <h5 class="bold">Themes</h5>

                            <div class="generate-forms margin-20-b block-1st">
                                <label class="custom margin-5-b opacity ease-opacity">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input class="generate-toggle" type="checkbox">
                                        <i class="state"></i>
                                    </span>
                                    <span class="x-dark">Select/Deselect All</span>
                                </label>

                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="themes" value="../css/themes" checked>
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Themes
                                </label>
                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="darkmode" value="../css/darkmode">
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Dark Mode
                                </label>
                            </div>

                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12 no-padding-t">

                            <div class="textarea margin-15-b round border-dual ease-form">
                                <textarea class="x-dark large padding-10" rows="12" placeholder="Generated CSS will be here!"></textarea>
                                <div class="border-t border-dual">
                                    <div class="inline-block padding-5-r">
                                        <button title="Clear form!" class="generate-clear btn btn-square btn-ghost left ease-btn">
                                            <svg class="icon"><use href="#trash"/></svg>
                                        </button>
                                        <button title="Minify code" name="css" class="generate-min btn btn-square btn-ghost ease-btn">
                                            <svg class="icon"><use href="#code"/></svg>
                                        </button>
                                    </div>
                                    File size:
                                    <b class="generate-size">0 Kb</b>
                                </div>
                            </div>

                            <div class="align-r align-c ease-1st-btn">
                                <span class="sp15 visible-xs"></span>
                                <button name="less" class="generate-btn btn btn-xs-fluid round ui-dark">Generate LESS</button>
                                <button name="css" class="generate-btn btn btn-xs-fluid round ui-dark">Generate CSS</button>
                                <span class="sp5 visible-sm"></span>
                                <button title="Copy to clipboard!" class="generate-copy btn btn-xs-fluid round">
                                    <svg class="icon ui-text margin-5-r no-opacity"><use href="#files"/></svg>Copy to clipboard
                                </button>
                            </div>

                        </div>
                    </div>

                </div>

                <div class="generate-holder tab-content form-lg padding-30">

                    <div class="align-c margin-30-b">
                        <div class="file no-border round circle no-border ease-form form-xs-inline">
                            <input name="js" class="generate-import" type="file">
                            <span class="btn circle block ease-btn">
                                <span class="inline-block">Import JS</span>
                                <svg class="icon margin-5-l"><use href="#import"/></svg>
                            </span>
                        </div>
                    </div>

                    <div class="generate-list row row-sm-gap-v">
                        <div class="col-3 col-md-4 col-sm-6">

                            <h5 class="bold">Core</h5>

                            <div class="generate-forms margin-20-b block-1st">
                                <label class="custom margin-5-b opacity ease-opacity">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input class="generate-toggle" type="checkbox">
                                        <i class="state"></i>
                                    </span>
                                    <span class="x-dark">Select/Deselect All</span>
                                </label>

                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="selector js" value="../js/selector" checked>
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Selector
                                </label>
                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="events js" value="../js/events" checked>
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Events
                                </label>
                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                            <input type="checkbox" name="user agents js" value="../js/user-agents" checked>
                                            <i class="state ui-dark"></i>
                                    </span>
                                    User Agents
                                </label>
                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="grid js" value="../js/grid" checked>
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Grid
                                </label>
                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="ajax js" value="../js/ajax">
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Ajax
                                </label>
                            </div>

                            <h5 class="bold">Effects</h5>

                            <div class="generate-forms margin-20-b block-1st">
                                <label class="custom margin-5-b opacity ease-opacity">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input class="generate-toggle" type="checkbox" checked>
                                        <i class="state"></i>
                                    </span>
                                    <span class="x-dark">Select/Deselect All</span>
                                </label>

                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="effects js" value="../js/effects" checked>
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Effects
                                </label>
                            </div>

                            <h5 class="bold">Buttons</h5>

                            <div class="generate-forms margin-20-b block-1st">
                                <label class="custom margin-5-b opacity ease-opacity">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input class="generate-toggle" type="checkbox">
                                        <i class="state"></i>
                                    </span>
                                    <span class="x-dark">Select/Deselect All</span>
                                </label>

                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="top button js" value="../js/top-button" checked>
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Top Button
                                </label>
                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="dropdown js" value="../js/dropdown">
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Dropdown
                                </label>
                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="loading button js" value="../js/loading-button">
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Loading Button
                                </label>
                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="tabs js" value="../js/tabs">
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Tabs
                                </label>
                            </div>

                        </div>
                        <div class="col-3 col-md-4 col-sm-6">

                            <h5 class="bold">Forms</h5>

                            <div class="generate-forms margin-20-b block-1st">
                                <label class="custom margin-5-b opacity ease-opacity">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input class="generate-toggle" type="checkbox">
                                        <i class="state"></i>
                                    </span>
                                    <span class="x-dark">Select/Deselect All</span>
                                </label>

                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="forms js" value="../js/forms" checked>
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Forms
                                </label>
                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="autocomplete js" value="../js/autocomplete">
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Autocomplete
                                </label>
                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="currency spinner js" value="../js/currency-spinner">
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Currency Spinner
                                </label>
                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="dual multi select js" value="../js/dual-multi-select">
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Dual Multi Select
                                </label>
                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="form spinner js" value="../js/form-spinner">
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Form Spinner
                                </label>
                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="required forms js" value="../js/required-forms">
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Required Forms
                                </label>
                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="textarea counter js" value="../js/textarea-counter">
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Textarea Counter
                                </label>
                            </div>

                            <h5 class="bold">Layout</h5>

                            <div class="generate-forms margin-20-b block-1st">
                                <label class="custom margin-5-b opacity ease-opacity">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input class="generate-toggle" type="checkbox">
                                        <i class="state"></i>
                                    </span>
                                    <span class="x-dark">Select/Deselect All</span>
                                </label>

                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="card js" value="../js/card" checked>
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Card
                                </label>
                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="sticky header js" value="../js/sticky-header">
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Sticky Header
                                </label>
                            </div>

                        </div>
                        <div class="col-3 col-md-4 col-sm-6">

                            <h5 class="bold">Components</h5>

                            <div class="generate-forms margin-20-b block-1st">
                                <label class="custom margin-5-b opacity ease-opacity">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input class="generate-toggle" type="checkbox">
                                        <i class="state"></i>
                                    </span>
                                    <span class="x-dark">Select/Deselect All</span>
                                </label>

                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="mobile menu js" value="../js/mobile-menu" checked>
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Mobile Menu
                                </label>
                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="modal js" value="../js/modal" checked>
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Modal
                                </label>
                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="tooltip js" value="../js/tooltip" checked>
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Tooltip
                                </label>
                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="alerts js" value="../js/alerts">
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Alerts
                                </label>
                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="calendar js" value="../js/calendar">
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Calendar
                                </label>
                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="carousel js" value="../js/carousel">
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Carousel
                                </label>
                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="countdown js" value="../js/countdown">
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Countdown
                                </label>
                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="data list js" value="../js/data-list">
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Data List
                                </label>
                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="image uploader js" value="../js/image-uploader">
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Image Uploader
                                </label>
                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="photo gallery js" value="../js/photo-gallery">
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Photo Gallery
                                </label>
                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="photo slider js" value="../js/photo-slider">
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Photo Slider
                                </label>
                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="weather js" value="../js/weather">
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Weather
                                </label>
                            </div>

                        </div>
                        <div class="col-3 col-md-4 col-sm-6">

                            <h5 class="bold">Charts</h5>

                            <div class="generate-forms margin-20-b block-1st">
                                <label class="custom margin-5-b opacity ease-opacity">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input class="generate-toggle" type="checkbox">
                                        <i class="state"></i>
                                    </span>
                                    <span class="x-dark">Select/Deselect All</span>
                                </label>

                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="line charts js" value="../js/line-charts">
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Line Charts
                                </label>
                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="donut chart js" value="../js/donut-chart">
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Donut Chart
                                </label>
                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="pie chart js" value="../js/pie-chart">
                                        <i class="state ui-dark"></i>
                                    </span>
                                    Pie chart
                                </label>
                                <label class="custom">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" name="svg map js" value="../js/svg-map">
                                        <i class="state ui-dark"></i>
                                    </span>
                                    SVG Map
                                </label>
                            </div>

                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12 no-padding-t">

                            <div class="textarea margin-15-b round border-dual ease-form">
                                <textarea class="x-dark large padding-10" rows="12" placeholder="Generated JS will be here!"></textarea>
                                <div class="border-t border-dual">
                                    <div class="inline-block padding-5-r">
                                        <button title="Clear form!" class="generate-clear btn btn-square btn-ghost left ease-btn">
                                            <svg class="icon"><use href="#trash"/></svg>
                                        </button>
                                        <button title="Minify code" name="js" class="generate-min btn btn-square btn-ghost ease-btn">
                                            <svg class="icon"><use href="#code"/></svg>
                                        </button>
                                    </div>
                                    File size:
                                    <b class="generate-size">0 Kb</b>
                                </div>
                            </div>

                            <div class="align-r align-c ease-1st-btn">
                                <span class="sp15 visible-xs"></span>
                                <button name="js" class="generate-btn btn btn-xs-fluid round ui-dark">Generate JS</button>
                                <button title="Copy to clipboard!" class="generate-copy btn btn-xs-fluid round">
                                    <svg class="icon ui-text margin-5-r no-opacity"><use href="#files"/></svg>Copy to clipboard
                                </button>
                            </div>

                        </div>
                    </div>

                </div>

                <div class="generate-holder tab-content form-lg padding-30">

                    <div class="generate-list row row-sm-gap-v">
                        <div class="col-12">

                            <div class="generate-forms margin-20-b">
                                <label class="custom margin-5-b opacity ease-opacity">
                                    <span class="switch-custom round border-dual ease-form">
                                        <input class="generate-toggle" type="checkbox">
                                        <i class="state"></i>
                                    </span>
                                    <span class="x-dark">Select/Deselect All</span>
                                </label>

                                <div class="row row-no-gap-v xs-fluid">
                                    <div class="col-3 col-md-4 col-sm-6 block-1st">
                                        <label class="custom">
                                            <span class="switch-custom round border-dual ease-form">
                                                <input type="checkbox" value="../icons/general" checked>
                                                <i class="state ui-dark"></i>
                                            </span>
                                            General
                                        </label>
                                        <label class="custom">
                                            <span class="switch-custom round border-dual ease-form">
                                                <input type="checkbox" value="../icons/touch">
                                                <i class="state ui-dark"></i>
                                            </span>
                                            Touch
                                        </label>
                                        <label class="custom">
                                            <span class="switch-custom round border-dual ease-form">
                                                <input type="checkbox" value="../icons/media">
                                                <i class="state ui-dark"></i>
                                            </span>
                                            Media
                                        </label>
                                    </div>
                                    <div class="col-3 col-md-4 col-sm-6 block-1st">
                                        <label class="custom">
                                            <span class="switch-custom round border-dual ease-form">
                                                <input type="checkbox" value="../icons/real-estate">
                                                <i class="state ui-dark"></i>
                                            </span>
                                            Real Estate
                                        </label>
                                        <label class="custom">
                                            <span class="switch-custom round border-dual ease-form">
                                                <input type="checkbox" value="../icons/weather">
                                                <i class="state ui-dark"></i>
                                            </span>
                                            Weather
                                        </label>
                                        <label class="custom">
                                            <span class="switch-custom round border-dual ease-form">
                                                <input type="checkbox" value="../icons/kitchen">
                                                <i class="state ui-dark"></i>
                                            </span>
                                            Kitchen
                                        </label>
                                    </div>
                                    <div class="col-3 col-md-4 col-sm-6 block-1st">
                                        <label class="custom">
                                            <span class="switch-custom round border-dual ease-form">
                                                <input type="checkbox" value="../icons/commerce">
                                                <i class="state ui-dark"></i>
                                            </span>
                                            Commerce
                                        </label>
                                        <label class="custom">
                                            <span class="switch-custom round border-dual ease-form">
                                                <input type="checkbox" value="../icons/files">
                                                <i class="state ui-dark"></i>
                                            </span>
                                            Files
                                        </label>
                                        <label class="custom">
                                            <span class="switch-custom round border-dual ease-form">
                                                <input type="checkbox" value="../icons/social">
                                                <i class="state ui-dark"></i>
                                            </span>
                                            Social
                                        </label>
                                    </div>
                                    <div class="col-3 col-md-4 col-sm-6 block-1st">
                                        <label class="custom">
                                            <span class="switch-custom round border-dual ease-form">
                                                <input type="checkbox" value="../icons/brands">
                                                <i class="state ui-dark"></i>
                                            </span>
                                            Brands
                                        </label>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12 no-padding-t">

                            <div class="textarea margin-15-b round border-dual ease-form">
                                <textarea class="x-dark large padding-10" rows="12" placeholder="Generated icons will be here!"></textarea>
                                <div class="border-t border-dual">
                                    <div class="inline-block padding-5-r">
                                        <button title="Clear form!" class="generate-clear btn btn-square btn-ghost left ease-btn">
                                            <svg class="icon"><use href="#trash"/></svg>
                                        </button>
                                        <button title="Minify code" name="icon" class="generate-min btn btn-square btn-ghost ease-btn">
                                            <svg class="icon"><use href="#code"/></svg>
                                        </button>
                                    </div>
                                    File size:
                                    <b class="generate-size">0 Kb</b>
                                </div>
                            </div>

                            <div class="align-r align-c ease-1st-btn">
                                <span class="sp15 visible-xs"></span>
                                <button name="php" class="generate-btn btn btn-xs-fluid round ui-dark" data-type="icons">Generate Icons</button>
                                <button title="Copy to clipboard!" class="generate-copy btn btn-xs-fluid round">
                                    <svg class="icon ui-text margin-5-r no-opacity"><use href="#files"/></svg>Copy to clipboard
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