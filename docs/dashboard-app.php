<!-- custom CSS -->
<link rel="stylesheet" href="../css/custom/dashboard-app.css?v=<?php echo filemtime('../css/custom/dashboard-app.css'); ?>"/>

<!-- custom JS -->
<script src="../js/custom/dashboard-app.js?v=<?php echo filemtime('../js/custom/dashboard-app.js'); ?>"></script>

<main class="container no-gutter">
    <div class="fixed padding-30-v no-scroll">

        <div class="row row-gap-lg sm-fluid padding-30-b">
            <div class="col-lg-3 col-6">

                <div class="app padding-15 ui-theme-app">

                    <div class="ui-card no-margin-b">

                        <div class="ui-card-side padding-15 no-padding-b icons-no-opacity">
                            <div class="col-static no-fluid">
                                <div class="col-50">
                                    <button class="ui-btn ui-btn-ghost ui-btn-square circle ui-fill-light-100 ui-ease-btn" data-ui-notifier>
                                        <svg class="icon ui-color"><use href="#bell"/></svg>
                                    </button>
                                </div>
                                <div class="row">
                                    <div class="col-12 align-c padding-3-v">
                                        <img src="img/logo-reports.png" alt="Logo" height="26">
                                    </div>
                                </div>
                                <div class="col-50 align-r">
                                    <button class="ui-btn ui-btn-ghost ui-btn-square circle ui-fill-light-100 ui-ease-btn">
                                        <svg class="icon ui-color"><use href="#settings"/></svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="ui-card-side padding-10">

                            <div class="row row-gap-md no-fluid ui-ease-2nd-btn">
                                <div class="col-4">
                                    <a class="ui-btn ui-btn-multi no-line-height padding-10-v block round ui-fill-light-100" href="#">
                                        <span class="ui-color x-largest">23</span>
                                        <span class="block">
                                            <span class="font-color-black-50 small font-ellipsis">Waiting</span>
                                        </span>
                                    </a>
                                </div>
                                <div class="col-4">
                                    <a class="ui-btn ui-btn-multi no-line-height padding-10-v block round ui-fill-light-100" href="#">
                                        <span class="ui-color x-largest">258</span>
                                        <span class="block">
                                            <span class="font-color-black-50 small font-ellipsis">Expert</span>
                                        </span>
                                    </a>
                                </div>
                                <div class="col-4">
                                    <a class="ui-btn ui-btn-multi no-line-height padding-10-v block round ui-fill-light-100" href="#">
                                        <span class="ui-color x-largest">49</span>
                                        <span class="block">
                                            <span class="font-color-black-50 small font-ellipsis">First Audit</span>
                                        </span>
                                    </a>
                                </div>
                            </div>

                            <div class="row row-gap-md no-fluid ui-ease-2nd-btn">
                                <div class="col-4">
                                    <a class="ui-btn ui-btn-ghost ui-btn-multi no-line-height padding-10-v block round ui-border-dual" href="#">
                                        <span class="font-color-black-50 xx-large">19</span>
                                        <span class="block">
                                            <span class="font-color-black-50 small font-ellipsis">Second Audit</span>
                                        </span>
                                    </a>
                                </div>
                                <div class="col-4">
                                    <a class="ui-btn ui-btn-ghost ui-btn-multi no-line-height padding-10-v block round ui-border-dual" href="#">
                                        <span class="font-color-black-50 xx-large">20</span>
                                        <span class="block">
                                            <span class="font-color-black-50 small font-ellipsis">Paused</span>
                                        </span>
                                    </a>
                                </div>
                                <div class="col-4">
                                    <a class="ui-btn ui-btn-ghost ui-btn-multi no-line-height padding-10-v block round ui-border-dual" href="#">
                                        <span class="font-color-black-50 xx-large">68</span>
                                        <span class="block">
                                            <span class="font-color-black-50 small font-ellipsis">Delayed</span>
                                        </span>
                                    </a>
                                </div>
                            </div>

                        </div>
                        <div class="ui-card-side padding-15 no-padding-b">
                            <h5 class="font-bold">Last Week</h5>
                        </div>

                        <div class="ui-card-side padding-15 padding-5-b">
                            <div class="line-charts margin-15-b ui-ease-line-charts" data-ui-size="5,15" data-ui-x="1,2,3,4,5,6,7">
                                <ul class="lines" data-ui-name="1st" data-ui-type="curved dotted">
                                    <li data-ui-y="159"></li>
                                    <li data-ui-y="120"></li>
                                    <li data-ui-y="20"></li>
                                    <li data-ui-y="118"></li>
                                    <li data-ui-y="37"></li>
                                    <li data-ui-y="0"></li>
                                    <li data-ui-y="76"></li>
                                </ul>
                                <ul class="lines" data-ui-name="2nd" data-ui-type="curved filled">
                                    <li data-ui-y="55"></li>
                                    <li data-ui-y="70"></li>
                                    <li data-ui-y="92"></li>
                                    <li data-ui-y="48"></li>
                                    <li data-ui-y="166"></li>
                                    <li data-ui-y="98"></li>
                                    <li data-ui-y="116"></li>
                                </ul>
                            </div>
                        </div>

                        <div class="ui-card-side padding-15-h">
                            <h5 class="font-bold">Work Intensity</h5>
                        </div>

                        <div class="ui-card-side padding-15">
                            <div class="row row-gap-md no-fluid">
                                <div class="col-4">
                                    <div class="donut-chart ui-ease-donut-chart">
                                        <strong>SS</strong>
                                        <svg viewBox="0 0 160 160">
                                            <circle r="69.85699" cy="80" cx="80" class="donut-bg" />
                                            <circle r="69.85699" cy="80" cx="80" stroke="hsl(214, 100%, 50%)" data-ui-percent="17" data-ui-title="17%" />
                                        </svg>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="donut-chart ui-ease-donut-chart">
                                        <strong>SU</strong>
                                        <svg viewBox="0 0 160 160">
                                            <circle r="69.85699" cy="80" cx="80" class="donut-bg" />
                                            <circle r="69.85699" cy="80" cx="80" stroke="hsl(214, 100%, 50%)" data-ui-percent="13" data-ui-title="13%" />
                                        </svg>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="donut-chart ui-ease-donut-chart">
                                        <strong>SD</strong>
                                        <svg viewBox="0 0 160 160">
                                            <circle r="69.85699" cy="80" cx="80" class="donut-bg" />
                                            <circle r="69.85699" cy="80" cx="80" stroke="hsl(349, 100%, 53%)" data-ui-percent="70" data-ui-title="70%" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="ui-card-side padding-15-h">
                            <h5 class="font-bold">Last Visited</h5>
                        </div>

                        <div class="ui-card-side padding-15">
                            <div class="carousel" data-ui-col="1">
                                <div class="carousel-slider ui-ease-2nd-layout ui-ease-layout ui-ease-in-out">

                                    <div class="slide-content list-group ui-no-border padding-1-h">
                                        <ul class="has-photo-sm has-icon-sm ui-ease-list-group">
                                            <li class="round ui-theme-gray ui-fill-light-100">
                                                <a href="#">
                                                    <svg class="list-icon icon"><use href="#angle-right"/></svg>
                                                    <span class="img-photo-sm circle">
                                                        <svg class="icon"><use href="#clock"/></svg>
                                                    </span>
                                                    <b class="large block">REP-701-2019</b>
                                                    <span class="small font-color-black-muted">1 hour ago</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="slide-content list-group ui-no-border padding-1-h">
                                        <ul class="has-photo-sm has-icon-sm ui-ease-list-group">
                                            <li class="round ui-theme-gray ui-fill-light-100">
                                                <a href="#">
                                                    <svg class="list-icon icon"><use href="#angle-right"/></svg>
                                                    <span class="img-photo-sm circle">
                                                        <svg class="icon"><use href="#clock"/></svg>
                                                    </span>
                                                    <b class="large block">REP-103-2018</b>
                                                    <span class="small font-color-black-muted">2 hours ago</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="slide-content list-group ui-no-border padding-1-h">
                                        <ul class="has-photo-sm has-icon-sm ui-ease-list-group">
                                            <li class="round ui-theme-gray ui-fill-light-100">
                                                <a href="#">
                                                    <svg class="list-icon icon"><use href="#angle-right"/></svg>
                                                    <span class="img-photo-sm circle">
                                                        <svg class="icon"><use href="#clock"/></svg>
                                                    </span>
                                                    <b class="large block">REP-616-2017</b>
                                                    <span class="small font-color-black-muted">3 days ago</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                                <div class="carousel-nav ui-ease-1st-btn">
                                    <span class="dots font-color-black-muted"></span>
                                </div>
                            </div>
                        </div>

                    </div>

                    <span class="sp-5"></span>

                    <div class="padding-10 no-padding-b icons-no-opacity">
                        <div class="row no-row-gap no-fluid icons-lg icons-thin block-2nd ui-ease-2nd-btn">
                            <div class="col-3">
                                <button class="ui-btn ui-btn-multi ui-btn-ghost padding-10-t circle icons-semibol ui-color">
                                    <svg class="icon icon-semibold"><use href="#home"/></svg>
                                    <span class="small block">Home</span>
                                </button>
                            </div>
                            <div class="col-3">
                                <button class="ui-btn ui-btn-multi ui-btn-ghost padding-10-t circle font-color-black-muted">
                                    <svg class="icon"><use href="#search"/></svg>
                                    <span class="small block">Search</span>
                                </button>
                            </div>
                            <div class="col-3">
                                <button class="ui-btn ui-btn-multi ui-btn-ghost padding-10-t circle font-color-black-muted" data-ui-notifier="2">
                                    <svg class="icon"><use href="#comment"/></svg>
                                    <span class="small block">Chat</span>
                                </button>
                            </div>
                            <div class="col-3">
                                <button class="ui-btn ui-btn-multi ui-btn-ghost padding-10-t circle font-color-black-muted">
                                    <svg class="icon"><use href="#user"/></svg>
                                    <span class="small block">Profile</span>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div class="col-lg-3 col-6">

                <div class="app padding-15 ui-theme-app">

                    <div class="ui-card no-margin-b">

                        <div class="ui-card-side padding-15 no-padding-b icons-no-opacity">
                            <div class="col-static no-fluid">
                                <div class="col-50">
                                    <button class="ui-btn ui-btn-ghost ui-btn-square circle ui-fill-light-100 ui-ease-btn" data-ui-notifier>
                                        <svg class="icon ui-color"><use href="#bell"/></svg>
                                    </button>
                                </div>
                                <div class="row">
                                    <div class="col-12 align-c padding-3-v">
                                        <img src="img/logo-reports.png" alt="Logo" height="26">
                                    </div>
                                </div>
                                <div class="col-50 align-r">
                                    <button class="ui-btn ui-btn-ghost ui-btn-square circle ui-fill-light-100 ui-ease-btn">
                                        <svg class="icon ui-color"><use href="#settings"/></svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="ui-card-side padding-15">
                            <div class="grid-list grid-list-striped grid-hover ui-ease-grid-list">

                                <div class="form-lg ui-ease-1st-form">
                                    <div class="text text-icon-both ui-border-dual has-clear circle">
                                        <svg class="icon text-icon-l"><use href="#search"/></svg>
                                        <button class="clear-form">
                                            <svg class="icon"><use href="#remove"/></svg>
                                        </button>
                                        <input class="grid-list-filter" type="text" placeholder="Search">
                                    </div>
                                </div>

                                <span class="sp-10"></span>

                                <div class="row row-gap-xs no-fluid block-2nd ui-ease-2nd-btn">
                                    <div class="col-5">
                                        <button class="ui-btn align-l circle-l ui-fill-light-100" data-ui-sort="1">
                                            <svg class="icon"><use href="#sort"/></svg> Report
                                        </button>
                                    </div>
                                    <div class="col-7">
                                        <button class="ui-btn align-l circle-r ui-fill-light-100" data-ui-sort="2">
                                            <svg class="icon"><use href="#sort"/></svg> Customer
                                        </button>
                                    </div>
                                </div>

                                <span class="sp-5"></span>

                                <div class="grid-list-container scroll-v" style="height: 534px;">

                                    <div class="grid-list-content ui-no-border" data-ui-val="REP-701-2019|John Doe">
                                        <div class="col-static no-fluid">
                                            <div class="row no-row-gap-h no-fluid row-gap-md-v">
                                                <div class="col-6">
                                                    <b class="font-color-black-muted">REP-701-2019</b>
                                                </div>
                                                <div class="col-6 inline-block-1st">
                                                    <b class="xx-small circle padding-4-h padding-3-v ui-fill-dark-100">SS</b>
                                                    <span class="margin-3-l">John Doe</span>
                                                </div>
                                            </div>
                                            <div class="col-32">
                                                <span class="dropdown menu-l ui-ease-dropdown">
                                                    <button class="ui-btn ui-btn-ghost ui-btn-square circle">
                                                        <svg class="icon"><use href="#ellipsis-h"/></svg>
                                                    </button>
                                                    <ul class="dropdown-menu round shadow-lg">
                                                        <li><a href="#">View Details</a></li>
                                                        <li><a href="#">Send Message</a></li>
                                                    </ul>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="grid-list-content ui-no-border" data-ui-val="REP-616-2017|Mike Taylor">
                                        <div class="col-static no-fluid">
                                            <div class="row no-row-gap-h no-fluid row-gap-md-v">
                                                <div class="col-6">
                                                    <b class="font-color-black-muted">REP-616-2017</b>
                                                </div>
                                                <div class="col-6 inline-block-1st">
                                                    <b class="xx-small circle padding-4-h padding-3-v ui-fill-dark-100">SU</b>
                                                    <span class="margin-3-l">Mike Taylor</span>
                                                </div>
                                            </div>
                                            <div class="col-32">
                                                <span class="dropdown menu-l ui-ease-dropdown">
                                                    <button class="ui-btn ui-btn-ghost ui-btn-square circle">
                                                        <svg class="icon"><use href="#ellipsis-h"/></svg>
                                                    </button>
                                                    <ul class="dropdown-menu round shadow-lg">
                                                        <li><a href="#">View Details</a></li>
                                                        <li><a href="#">Send Message</a></li>
                                                    </ul>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="grid-list-content ui-no-border" data-ui-val="REP-103-2018|Mary Doe">
                                        <div class="col-static no-fluid">
                                            <div class="row no-row-gap-h no-fluid row-gap-md-v">
                                                <div class="col-6">
                                                    <b class="font-color-black-muted">REP-103-2018</b>
                                                </div>
                                                <div class="col-6 inline-block-1st">
                                                    <b class="xx-small circle padding-4-h padding-3-v ui-theme-app2 ui-fill-dark-100">SD</b>
                                                    <span class="margin-3-l">Mary Doe</span>
                                                </div>
                                            </div>
                                            <div class="col-32">
                                                <span class="dropdown menu-l ui-ease-dropdown">
                                                    <button class="ui-btn ui-btn-ghost ui-btn-square circle">
                                                        <svg class="icon"><use href="#ellipsis-h"/></svg>
                                                    </button>
                                                    <ul class="dropdown-menu round shadow-lg">
                                                        <li><a href="#">View Details</a></li>
                                                        <li><a href="#">Send Message</a></li>
                                                    </ul>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="grid-list-content ui-no-border" data-ui-val="REP-701-2019|John Doe">
                                        <div class="col-static no-fluid">
                                            <div class="row no-row-gap-h no-fluid row-gap-md-v">
                                                <div class="col-6">
                                                    <b class="font-color-black-muted">REP-701-2019</b>
                                                </div>
                                                <div class="col-6 inline-block-1st">
                                                    <b class="xx-small circle padding-4-h padding-3-v ui-fill-dark-100">SS</b>
                                                    <span class="margin-3-l">John Doe</span>
                                                </div>
                                            </div>
                                            <div class="col-32">
                                                <span class="dropdown menu-l ui-ease-dropdown">
                                                    <button class="ui-btn ui-btn-ghost ui-btn-square circle">
                                                        <svg class="icon"><use href="#ellipsis-h"/></svg>
                                                    </button>
                                                    <ul class="dropdown-menu round shadow-lg">
                                                        <li><a href="#">View Details</a></li>
                                                        <li><a href="#">Send Message</a></li>
                                                    </ul>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="grid-list-content ui-no-border" data-ui-val="REP-616-2017|Mike Taylor">
                                        <div class="col-static no-fluid">
                                            <div class="row no-row-gap-h no-fluid row-gap-md-v">
                                                <div class="col-6">
                                                    <b class="font-color-black-muted">REP-616-2017</b>
                                                </div>
                                                <div class="col-6 inline-block-1st">
                                                    <b class="xx-small circle padding-4-h padding-3-v ui-fill-dark-100">SU</b>
                                                    <span class="margin-3-l">Mike Taylor</span>
                                                </div>
                                            </div>
                                            <div class="col-32">
                                                <span class="dropdown menu-l ui-ease-dropdown">
                                                    <button class="ui-btn ui-btn-ghost ui-btn-square circle">
                                                        <svg class="icon"><use href="#ellipsis-h"/></svg>
                                                    </button>
                                                    <ul class="dropdown-menu round shadow-lg">
                                                        <li><a href="#">View Details</a></li>
                                                        <li><a href="#">Send Message</a></li>
                                                    </ul>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="grid-list-content ui-no-border" data-ui-val="REP-103-2018|Mary Doe">
                                        <div class="col-static no-fluid">
                                            <div class="row no-row-gap-h no-fluid row-gap-md-v">
                                                <div class="col-6">
                                                    <b class="font-color-black-muted">REP-103-2018</b>
                                                </div>
                                                <div class="col-6 inline-block-1st">
                                                    <b class="xx-small circle padding-4-h padding-3-v ui-theme-app2 ui-fill-dark-100">SD</b>
                                                    <span class="margin-3-l">Mary Doe</span>
                                                </div>
                                            </div>
                                            <div class="col-32">
                                                <span class="dropdown menu-l ui-ease-dropdown">
                                                    <button class="ui-btn ui-btn-ghost ui-btn-square circle">
                                                        <svg class="icon"><use href="#ellipsis-h"/></svg>
                                                    </button>
                                                    <ul class="dropdown-menu round shadow-lg">
                                                        <li><a href="#">View Details</a></li>
                                                        <li><a href="#">Send Message</a></li>
                                                    </ul>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="grid-list-content ui-no-border" data-ui-val="REP-701-2019|John Doe">
                                        <div class="col-static no-fluid">
                                            <div class="row no-row-gap-h no-fluid row-gap-md-v">
                                                <div class="col-6">
                                                    <b class="font-color-black-muted">REP-701-2019</b>
                                                </div>
                                                <div class="col-6 inline-block-1st">
                                                    <b class="xx-small circle padding-4-h padding-3-v ui-fill-dark-100">SS</b>
                                                    <span class="margin-3-l">John Doe</span>
                                                </div>
                                            </div>
                                            <div class="col-32">
                                                <span class="dropdown menu-l ui-ease-dropdown">
                                                    <button class="ui-btn ui-btn-ghost ui-btn-square circle">
                                                        <svg class="icon"><use href="#ellipsis-h"/></svg>
                                                    </button>
                                                    <ul class="dropdown-menu round shadow-lg">
                                                        <li><a href="#">View Details</a></li>
                                                        <li><a href="#">Send Message</a></li>
                                                    </ul>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="grid-list-content ui-no-border" data-ui-val="REP-616-2017|Mike Taylor">
                                        <div class="col-static no-fluid">
                                            <div class="row no-row-gap-h no-fluid row-gap-md-v">
                                                <div class="col-6">
                                                    <b class="font-color-black-muted">REP-616-2017</b>
                                                </div>
                                                <div class="col-6 inline-block-1st">
                                                    <b class="xx-small circle padding-4-h padding-3-v ui-fill-dark-100">SU</b>
                                                    <span class="margin-3-l">Mike Taylor</span>
                                                </div>
                                            </div>
                                            <div class="col-32">
                                                <span class="dropdown menu-l ui-ease-dropdown">
                                                    <button class="ui-btn ui-btn-ghost ui-btn-square circle">
                                                        <svg class="icon"><use href="#ellipsis-h"/></svg>
                                                    </button>
                                                    <ul class="dropdown-menu round shadow-lg">
                                                        <li><a href="#">View Details</a></li>
                                                        <li><a href="#">Send Message</a></li>
                                                    </ul>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="grid-list-content ui-no-border" data-ui-val="REP-103-2018|Mary Doe">
                                        <div class="col-static no-fluid">
                                            <div class="row no-row-gap-h no-fluid row-gap-md-v">
                                                <div class="col-6">
                                                    <b class="font-color-black-muted">REP-103-2018</b>
                                                </div>
                                                <div class="col-6 inline-block-1st">
                                                    <b class="xx-small circle padding-4-h padding-3-v ui-theme-app2 ui-fill-dark-100">SD</b>
                                                    <span class="margin-3-l">Mary Doe</span>
                                                </div>
                                            </div>
                                            <div class="col-32">
                                                <span class="dropdown menu-l ui-ease-dropdown">
                                                    <button class="ui-btn ui-btn-ghost ui-btn-square circle">
                                                        <svg class="icon"><use href="#ellipsis-h"/></svg>
                                                    </button>
                                                    <ul class="dropdown-menu round shadow-lg">
                                                        <li><a href="#">View Details</a></li>
                                                        <li><a href="#">Send Message</a></li>
                                                    </ul>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="grid-list-content ui-no-border" data-ui-val="REP-701-2019|John Doe">
                                        <div class="col-static no-fluid">
                                            <div class="row no-row-gap-h no-fluid row-gap-md-v">
                                                <div class="col-6">
                                                    <b class="font-color-black-muted">REP-701-2019</b>
                                                </div>
                                                <div class="col-6 inline-block-1st">
                                                    <b class="xx-small circle padding-4-h padding-3-v ui-fill-dark-100">SS</b>
                                                    <span class="margin-3-l">John Doe</span>
                                                </div>
                                            </div>
                                            <div class="col-32">
                                                <span class="dropdown menu-l ui-ease-dropdown">
                                                    <button class="ui-btn ui-btn-ghost ui-btn-square circle">
                                                        <svg class="icon"><use href="#ellipsis-h"/></svg>
                                                    </button>
                                                    <ul class="dropdown-menu round shadow-lg">
                                                        <li><a href="#">View Details</a></li>
                                                        <li><a href="#">Send Message</a></li>
                                                    </ul>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="grid-list-content ui-no-border" data-ui-val="REP-616-2017|Mike Taylor">
                                        <div class="col-static no-fluid">
                                            <div class="row no-row-gap-h no-fluid row-gap-md-v">
                                                <div class="col-6">
                                                    <b class="font-color-black-muted">REP-616-2017</b>
                                                </div>
                                                <div class="col-6 inline-block-1st">
                                                    <b class="xx-small circle padding-4-h padding-3-v ui-fill-dark-100">SU</b>
                                                    <span class="margin-3-l">Mike Taylor</span>
                                                </div>
                                            </div>
                                            <div class="col-32">
                                                <span class="dropdown menu-l ui-ease-dropdown">
                                                    <button class="ui-btn ui-btn-ghost ui-btn-square circle">
                                                        <svg class="icon"><use href="#ellipsis-h"/></svg>
                                                    </button>
                                                    <ul class="dropdown-menu round shadow-lg">
                                                        <li><a href="#">View Details</a></li>
                                                        <li><a href="#">Send Message</a></li>
                                                    </ul>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="grid-list-content ui-no-border" data-ui-val="REP-103-2018|Mary Doe">
                                        <div class="col-static no-fluid">
                                            <div class="row no-row-gap-h no-fluid row-gap-md-v">
                                                <div class="col-6">
                                                    <b class="font-color-black-muted">REP-103-2018</b>
                                                </div>
                                                <div class="col-6 inline-block-1st">
                                                    <b class="xx-small circle padding-4-h padding-3-v ui-theme-app2 ui-fill-dark-100">SD</b>
                                                    <span class="margin-3-l">Mary Doe</span>
                                                </div>
                                            </div>
                                            <div class="col-32">
                                                <span class="dropdown menu-l ui-ease-dropdown">
                                                    <button class="ui-btn ui-btn-ghost ui-btn-square circle">
                                                        <svg class="icon"><use href="#ellipsis-h"/></svg>
                                                    </button>
                                                    <ul class="dropdown-menu round shadow-lg">
                                                        <li><a href="#">View Details</a></li>
                                                        <li><a href="#">Send Message</a></li>
                                                    </ul>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>

                    <span class="sp-5"></span>

                    <div class="padding-10 no-padding-b icons-no-opacity">
                        <div class="row no-row-gap no-fluid icons-lg icons-thin block-2nd ui-ease-2nd-btn">
                            <div class="col-3">
                                <button class="ui-btn ui-btn-multi ui-btn-ghost padding-10-t circle font-color-black-muted">
                                    <svg class="icon"><use href="#home"/></svg>
                                    <span class="small block">Home</span>
                                </button>
                            </div>
                            <div class="col-3">
                                <button class="ui-btn ui-btn-multi ui-btn-ghost padding-10-t circle ui-color">
                                    <svg class="icon icon-semibold"><use href="#search"/></svg>
                                    <span class="small block">Search</span>
                                </button>
                            </div>
                            <div class="col-3">
                                <button class="ui-btn ui-btn-multi ui-btn-ghost padding-10-t circle font-color-black-muted" data-ui-notifier="2">
                                    <svg class="icon"><use href="#comment"/></svg>
                                    <span class="small block">Chat</span>
                                </button>
                            </div>
                            <div class="col-3">
                                <button class="ui-btn ui-btn-multi ui-btn-ghost padding-10-t circle font-color-black-muted">
                                    <svg class="icon"><use href="#user"/></svg>
                                    <span class="small block">Profile</span>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div class="col-lg-3 col-6">

                <div class="app padding-15 ui-theme-app">

                    <div class="ui-card no-margin-b">

                        <div class="ui-card-side padding-15 no-padding-b icons-no-opacity">
                            <div class="col-static no-fluid">
                                <div class="col-50">
                                    <button class="ui-btn ui-btn-ghost ui-btn-square circle ui-fill-light-100 ui-ease-btn" data-ui-notifier>
                                        <svg class="icon ui-color"><use href="#bell"/></svg>
                                    </button>
                                </div>
                                <div class="row">
                                    <div class="col-12 align-c padding-3-v">
                                        <img src="img/logo-reports.png" alt="Logo" height="26">
                                    </div>
                                </div>
                                <div class="col-50 align-r">
                                    <button class="ui-btn ui-btn-ghost ui-btn-square circle ui-fill-light-100 ui-ease-btn">
                                        <svg class="icon ui-color"><use href="#settings"/></svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="ui-card-side padding-10">

                            <div class="tabs ui-ease-tabs" data-ui-classes="ui-theme-app ui-stroke">

                                <ul class="contacts list-inline margin-5-t margin-10-b ui-ease-1st-border scroll-h">
                                    <li class="tab circle online ui-theme-app ui-stroke active">
                                        <img class="img-photo circle" src="img/profile-image.jpg" alt="">
                                    </li>
                                    <li class="tab circle online" data-ui-msg="2">
                                        <img class="img-photo circle" src="img/profile-image2.jpg" alt="">
                                    </li>
                                    <li class="tab circle">
                                        <span class="img-photo circle ui-fill-light-100"><span>MT</span></span>
                                    </li>
                                    <li class="tab circle">
                                        <img class="img-photo circle" src="img/profile-image3.jpg" alt="">
                                    </li>
                                    <li class="tab circle">
                                        <span class="img-photo circle ui-fill-light-100"><span>MD</span></span>
                                    </li>
                                    <li class="tab circle">
                                        <span class="img-photo circle ui-fill-light-100"><span>JD</span></span>
                                    </li>
                                </ul>

                                <div class="tab-content padding-10 ui-border-dual open open-ease">
                                    <div class="row no-fluid no-margin circle ui-theme-gray ui-fill-light-100">
                                        <div class="col-6">
                                            <h5 class="font-bold">John Doe</h5>
                                        </div>
                                        <div class="col-6 align-r">
                                            <span class="font-color-black-muted">Online</span>
                                        </div>
                                    </div>

                                    <span class="sp-10"></span>

                                    <ul class="messages list-custom margin-10-b scroll-v">
                                        <li class="left">
                                            <img class="img-photo-xs circle" src="img/profile-image.jpg" alt="">
                                            <span class="ui-fill-light-100">Hey</span>
                                        </li>
                                        <li class="left">
                                            <span class="ui-fill-light-100">Did you check the latest reports?</span>
                                        </li>
                                        <li class="right">
                                            <span class="ui-fill-dark-100">Sorry</span>
                                        </li>
                                        <li class="right">
                                            <span class="ui-fill-dark-100">Not yet!</span>
                                        </li>
                                        <li class="left">
                                            <img class="img-photo-xs circle" src="img/profile-image.jpg" alt="">
                                            <span class="ui-fill-light-100">Ok</span>
                                        </li>
                                        <li class="left">
                                            <span class="ui-fill-light-100">I need them and i am waiting for you</span>
                                        </li>
                                        <li class="right">
                                            <span class="ui-fill-dark-100">But, i  will get back to you as soon as possible.</span>
                                        </li>
                                        <li class="left">
                                            <img class="img-photo-xs circle" src="img/profile-image.jpg" alt="">
                                            <span class="ui-fill-light-100">Ok i am waiting...</span>
                                        </li>
                                        <li class="left">
                                            <img class="img-photo-xs circle" src="img/profile-image.jpg" alt="">
                                            <span class="ui-fill-light-100">Thank you</span>
                                        </li>
                                        <li class="right">
                                            <span class="ui-fill-dark-100">Ok</span>
                                        </li>
                                    </ul>
                                    <div class="col-static no-fluid padding-5 circle ui-theme-gray ui-fill-light-100">
                                        <div class="col-35">
                                            <img class="img-photo-xs margin-1 circle" src="img/profile-image3.jpg" alt="">
                                        </div>
                                        <div class="row no-row-gap">
                                            <div class="text text-icon ui-no-border padding-2 circle ui-ease-form">
                                                <button type="button">
                                                    <svg class="icon"><use href="#comment-dots"/></svg>
                                                </button>
                                                <input type="text" placeholder="Type your message">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-content padding-10 ui-border-dual">
                                    <div class="row no-fluid no-margin circle ui-theme-gray ui-fill-light-100">
                                        <div class="col-6">
                                            <h5 class="font-bold">Mary Doe</h5>
                                        </div>
                                        <div class="col-6 align-r">
                                            <span class="font-color-black-muted">Online</span>
                                        </div>
                                    </div>

                                    <span class="sp-10"></span>

                                    <ul class="messages list-custom margin-10-b scroll-v">
                                        <li class="left">
                                            <img class="img-photo-xs circle" src="img/profile-image2.jpg" alt="">
                                            <span class="ui-fill-light-100">Hey</span>
                                        </li>
                                        <li class="left">
                                            <span class="ui-fill-light-100">Did you check the latest reports?</span>
                                        </li>
                                        <li class="right">
                                            <span class="ui-fill-dark-100">Sorry</span>
                                        </li>
                                        <li class="right">
                                            <span class="ui-fill-dark-100">Not yet!</span>
                                        </li>
                                        <li class="left">
                                            <img class="img-photo-xs circle" src="img/profile-image2.jpg" alt="">
                                            <span class="ui-fill-light-100">Ok</span>
                                        </li>
                                        <li class="left">
                                            <span class="ui-fill-light-100">I need them and i am waiting for you</span>
                                        </li>
                                        <li class="right">
                                            <span class="ui-fill-dark-100">But, i  will get back to you as soon as possible.</span>
                                        </li>
                                        <li class="left">
                                            <img class="img-photo-xs circle" src="img/profile-image2.jpg" alt="">
                                            <span class="ui-fill-light-100">Ok i am waiting...</span>
                                        </li>
                                        <li class="left">
                                            <img class="img-photo-xs circle" src="img/profile-image2.jpg" alt="">
                                            <span class="ui-fill-light-100">Thank you</span>
                                        </li>
                                        <li class="right">
                                            <span class="ui-fill-dark-100">Ok</span>
                                        </li>
                                    </ul>
                                    <div class="col-static no-fluid padding-5 circle ui-theme-gray ui-fill-light-100">
                                        <div class="col-35">
                                            <img class="img-photo-xs margin-1 circle" src="img/profile-image3.jpg" alt="">
                                        </div>
                                        <div class="row no-row-gap">
                                            <div class="text text-icon ui-no-border padding-2 circle ui-ease-form">
                                                <button class="icon icon-comment-dots ui-theme-app ui-color"></button>
                                                <input type="text" placeholder="Type your message">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-content padding-10 ui-border-dual">
                                    <div class="row no-fluid no-margin circle ui-theme-gray ui-fill-light-100">
                                        <div class="col-6">
                                            <h5 class="font-bold">Mike Taylor</h5>
                                        </div>
                                        <div class="col-6 align-r">
                                            <span class="font-color-black-muted">Today 09:22</span>
                                        </div>
                                    </div>

                                    <span class="sp-10"></span>

                                    <ul class="messages list-custom margin-10-b scroll-v">
                                        <li class="left">
                                            <span class="img-photo-xs circle"><span>HY</span></span>
                                            <span class="ui-fill-light-100">Hey</span>
                                        </li>
                                        <li class="left">
                                            <span class="ui-fill-light-100">Did you check the latest reports?</span>
                                        </li>
                                        <li class="right">
                                            <span class="ui-fill-dark-100">Sorry</span>
                                        </li>
                                        <li class="right">
                                            <span class="ui-fill-dark-100">Not yet!</span>
                                        </li>
                                        <li class="left">
                                            <span class="img-photo-xs circle"><span>HY</span></span>
                                            <span class="ui-fill-light-100">Ok</span>
                                        </li>
                                        <li class="left">
                                            <span class="ui-fill-light-100">I need them and i am waiting for you</span>
                                        </li>
                                        <li class="right">
                                            <span class="ui-fill-dark-100">But, i  will get back to you as soon as possible.</span>
                                        </li>
                                        <li class="left">
                                            <span class="img-photo-xs circle"><span>HY</span></span>
                                            <span class="ui-fill-light-100">Ok i am waiting...</span>
                                        </li>
                                        <li class="left">
                                            <span class="img-photo-xs circle"><span>HY</span></span>
                                            <span class="ui-fill-light-100">Thank you</span>
                                        </li>
                                        <li class="right">
                                            <span class="ui-fill-dark-100">Ok</span>
                                        </li>
                                    </ul>
                                    <div class="col-static no-fluid padding-5 circle ui-theme-gray ui-fill-light-100">
                                        <div class="col-35">
                                            <img class="img-photo-xs margin-1 circle" src="img/profile-image3.jpg" alt="">
                                        </div>
                                        <div class="row no-row-gap">
                                            <div class="text text-icon ui-no-border padding-2 circle ui-ease-form">
                                                <button type="button">
                                                    <svg class="icon"><use href="#comment-dots"/></svg>
                                                </button>
                                                <input type="text" placeholder="Type your message">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-content padding-10 ui-border-dual">
                                    <div class="row no-fluid no-margin circle ui-theme-gray ui-fill-light-100">
                                        <div class="col-6">
                                            <h5 class="font-bold">John Doe</h5>
                                        </div>
                                        <div class="col-6 align-r">
                                            <span class="font-color-black-muted">1 day ago</span>
                                        </div>
                                    </div>

                                    <span class="sp-10"></span>

                                    <ul class="messages list-custom margin-10-b scroll-v">
                                        <li class="left">
                                            <img class="img-photo-xs circle" src="img/profile-image3.jpg" alt="">
                                            <span class="ui-fill-light-100">Hey</span>
                                        </li>
                                        <li class="left">
                                            <span class="ui-fill-light-100">Did you check the latest reports?</span>
                                        </li>
                                        <li class="right">
                                            <span class="ui-fill-dark-100">Sorry</span>
                                        </li>
                                        <li class="right">
                                            <span class="ui-fill-dark-100">Not yet!</span>
                                        </li>
                                        <li class="left">
                                            <img class="img-photo-xs circle" src="img/profile-image3.jpg" alt="">
                                            <span class="ui-fill-light-100">Ok</span>
                                        </li>
                                        <li class="left">
                                            <span class="ui-fill-light-100">I need them and i am waiting for you</span>
                                        </li>
                                        <li class="right">
                                            <span class="ui-fill-dark-100">But, i  will get back to you as soon as possible.</span>
                                        </li>
                                        <li class="left">
                                            <img class="img-photo-xs circle" src="img/profile-image3.jpg" alt="">
                                            <span class="ui-fill-light-100">Ok i am waiting...</span>
                                        </li>
                                        <li class="left">
                                            <img class="img-photo-xs circle" src="img/profile-image3.jpg" alt="">
                                            <span class="ui-fill-light-100">Thank you</span>
                                        </li>
                                        <li class="right">
                                            <span class="ui-fill-dark-100">Ok</span>
                                        </li>
                                    </ul>
                                    <div class="col-static no-fluid padding-5 circle ui-theme-gray ui-fill-light-100">
                                        <div class="col-35">
                                            <img class="img-photo-xs margin-1 circle" src="img/profile-image3.jpg" alt="">
                                        </div>
                                        <div class="row no-row-gap">
                                            <div class="text text-icon ui-no-border padding-2 circle ui-ease-form">
                                                <button class="icon icon-comment-dots ui-theme-app ui-color"></button>
                                                <input type="text" placeholder="Type your message">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-content padding-10 ui-border-dual">
                                    <div class="row no-fluid no-margin circle ui-theme-gray ui-fill-light-100">
                                        <div class="col-6">
                                            <h5 class="font-bold">Mary Doe</h5>
                                        </div>
                                        <div class="col-6 align-r">
                                            <span class="font-color-black-muted">2 days ago</span>
                                        </div>
                                    </div>

                                    <span class="sp-10"></span>

                                    <ul class="messages list-custom margin-10-b scroll-v">
                                        <li class="left">
                                            <span class="img-photo-xs circle"><span>EK</span></span>
                                            <span class="ui-fill-light-100">Hey</span>
                                        </li>
                                        <li class="left">
                                            <span class="ui-fill-light-100">Did you check the latest reports?</span>
                                        </li>
                                        <li class="right">
                                            <span class="ui-fill-dark-100">Sorry</span>
                                        </li>
                                        <li class="right">
                                            <span class="ui-fill-dark-100">Not yet!</span>
                                        </li>
                                        <li class="left">
                                            <span class="img-photo-xs circle"><span>EK</span></span>
                                            <span class="ui-fill-light-100">Ok</span>
                                        </li>
                                        <li class="left">
                                            <span class="ui-fill-light-100">I need them and i am waiting for you</span>
                                        </li>
                                        <li class="right">
                                            <span class="ui-fill-dark-100">But, i  will get back to you as soon as possible.</span>
                                        </li>
                                        <li class="left">
                                            <span class="img-photo-xs circle"><span>EK</span></span>
                                            <span class="ui-fill-light-100">Ok i am waiting...</span>
                                        </li>
                                        <li class="left">
                                            <span class="img-photo-xs circle"><span>EK</span></span>
                                            <span class="ui-fill-light-100">Thank you</span>
                                        </li>
                                        <li class="right">
                                            <span class="ui-fill-dark-100">Ok</span>
                                        </li>
                                    </ul>
                                    <div class="col-static no-fluid padding-5 circle ui-theme-gray ui-fill-light-100">
                                        <div class="col-35">
                                            <img class="img-photo-xs margin-1 circle" src="img/profile-image3.jpg" alt="">
                                        </div>
                                        <div class="row no-row-gap">
                                            <div class="text text-icon ui-no-border padding-2 circle ui-ease-form">
                                                <button type="button">
                                                    <svg class="icon"><use href="#comment-dots"/></svg>
                                                </button>
                                                <input type="text" placeholder="Type your message">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-content padding-10 ui-border-dual">
                                    <div class="row no-fluid no-margin circle ui-theme-gray ui-fill-light-100">
                                        <div class="col-6">
                                            <h5 class="font-bold">John Doe</h5>
                                        </div>
                                        <div class="col-6 align-r">
                                            <span class="font-color-black-muted">3 days ago</span>
                                        </div>
                                    </div>

                                    <span class="sp-10"></span>

                                    <ul class="messages list-custom margin-10-b scroll-v">
                                        <li class="left">
                                            <span class="img-photo-xs circle"><span>CY</span></span>
                                            <span class="ui-fill-light-100">Hey</span>
                                        </li>
                                        <li class="left">
                                            <span class="ui-fill-light-100">Did you check the latest reports?</span>
                                        </li>
                                        <li class="right">
                                            <span class="ui-fill-dark-100">Sorry</span>
                                        </li>
                                        <li class="right">
                                            <span class="ui-fill-dark-100">Not yet!</span>
                                        </li>
                                        <li class="left">
                                            <span class="img-photo-xs circle"><span>CY</span></span>
                                            <span class="ui-fill-light-100">Ok</span>
                                        </li>
                                        <li class="left">
                                            <span class="ui-fill-light-100">I need them and i am waiting for you</span>
                                        </li>
                                        <li class="right">
                                            <span class="ui-fill-dark-100">But, i  will get back to you as soon as possible.</span>
                                        </li>
                                        <li class="left">
                                            <span class="img-photo-xs circle"><span>CY</span></span>
                                            <span class="ui-fill-light-100">Ok i am waiting...</span>
                                        </li>
                                        <li class="left">
                                            <span class="img-photo-xs circle"><span>CY</span></span>
                                            <span class="ui-fill-light-100">Thank you</span>
                                        </li>
                                        <li class="right">
                                            <span class="ui-fill-dark-100">Ok</span>
                                        </li>
                                    </ul>
                                    <div class="col-static no-fluid padding-5 circle ui-theme-gray ui-fill-light-100">
                                        <div class="col-35">
                                            <img class="img-photo-xs margin-1 circle" src="img/profile-image3.jpg" alt="">
                                        </div>
                                        <div class="row no-row-gap">
                                            <div class="text text-icon ui-no-border padding-2 circle ui-ease-form">
                                                <button type="button">
                                                    <svg class="icon"><use href="#comment-dots"/></svg>
                                                </button>
                                                <input type="text" placeholder="Type your message">
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                    <span class="sp-5"></span>

                    <div class="padding-10 no-padding-b icons-no-opacity">
                        <div class="row no-row-gap no-fluid icons-lg icons-thin block-2nd ui-ease-2nd-btn">
                            <div class="col-3">
                                <button class="ui-btn ui-btn-multi ui-btn-ghost padding-10-t circle font-color-black-muted">
                                    <svg class="icon"><use href="#home"/></svg>
                                    <span class="small block">Home</span>
                                </button>
                            </div>
                            <div class="col-3">
                                <button class="ui-btn ui-btn-multi ui-btn-ghost padding-10-t circle font-color-black-muted">
                                    <svg class="icon"><use href="#search"/></svg>
                                    <span class="small block">Search</span>
                                </button>
                            </div>
                            <div class="col-3">
                                <button class="ui-btn ui-btn-multi ui-btn-ghost padding-10-t circle ui-color" data-ui-notifier="2">
                                    <svg class="icon icon-semibold"><use href="#comment"/></svg>
                                    <span class="small block">Chat</span>
                                </button>
                            </div>
                            <div class="col-3">
                                <button class="ui-btn ui-btn-multi ui-btn-ghost padding-10-t circle font-color-black-muted">
                                    <svg class="icon"><use href="#user"/></svg>
                                    <span class="small block">Profile</span>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div class="col-lg-3 col-6">

                <div class="app padding-15 ui-theme-app">

                    <div class="ui-card no-margin-b">

                        <div class="ui-card-side padding-15 no-padding-b icons-no-opacity">
                            <div class="col-static no-fluid">
                                <div class="col-50">
                                    <button class="ui-btn ui-btn-ghost ui-btn-square circle ui-fill-light-100 ui-ease-btn" data-ui-notifier>
                                        <svg class="icon ui-color"><use href="#bell"/></svg>
                                    </button>
                                </div>
                                <div class="row">
                                    <div class="col-12 align-c padding-3-v">
                                        <img src="img/logo-reports.png" alt="Logo" height="26">
                                    </div>
                                </div>
                                <div class="col-50 align-r">
                                    <button class="ui-btn ui-btn-ghost ui-btn-square circle ui-fill-light-100 ui-ease-btn">
                                        <svg class="icon ui-color"><use href="#settings"/></svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="ui-card-side padding-10">

                            <div class="align-c padding-30 margin-5-t margin-15-b round ui-border-dual">
                                <div class="status">
                                    <img class="img-photo-lg circle" src="img/profile-image.jpg" alt="">
                                </div>
                                <span class="sp-20"></span>
                                <span class="x-large margin-3-l">John Doe</span>
                                <span class="sp-2"></span>
                                <b class="xx-small circle padding-5-h padding-3-v ui-theme-app2 ui-fill-dark-100">SD</b>
                                <span class="font-color-black-50 margin-3-l">Audit Staff</span>
                            </div>

                            <h5 class="font-bold margin-10-b">Settings</h5>
                            <div class="list-group round ui-no-border ui-theme-gray ui-fill-light-100">
                                <ul class="has-icon-xs ui-ease-list-group">
                                    <li>
                                        <a href="#">
                                            <svg class="list-icon icon"><use href="#angle-right"/></svg>
                                            Account
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <svg class="list-icon icon"><use href="#angle-right"/></svg>
                                            Dashboard
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <svg class="list-icon icon"><use href="#angle-right"/></svg>
                                            Notifications
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <svg class="list-icon icon"><use href="#angle-right"/></svg>
                                            Privacy and Safety
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <span class="sp-15"></span>

                            <h5 class="font-bold margin-10-b">General</h5>

                            <div class="list-group round ui-no-border ui-theme-gray ui-fill-light-100">
                                <ul class="has-icon-xs ui-ease-list-group">
                                    <li>
                                        <a href="#">
                                            <svg class="list-icon icon"><use href="#angle-right"/></svg>
                                            Data Usage
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <svg class="list-icon icon"><use href="#angle-right"/></svg>
                                            Accessibility
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <svg class="list-icon icon"><use href="#angle-right"/></svg>
                                            About Reports
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <span class="sp-25"></span>

                            <div class="list-group round ui-no-border ui-theme-gray ui-fill-light-100">
                                <ul class="has-icon-xs ui-ease-list-group">
                                    <li>
                                        <a class="round" href="#">
                                            <svg class="list-icon icon"><use href="#sign-out"/></svg>
                                            Sign Out
                                        </a>
                                    </li>
                                </ul>
                            </div>

                        </div>

                    </div>

                    <span class="sp-5"></span>

                    <div class="padding-10 no-padding-b icons-no-opacity">
                        <div class="row no-row-gap no-fluid icons-lg icons-thin block-2nd ui-ease-2nd-btn">
                            <div class="col-3">
                                <button class="ui-btn ui-btn-multi ui-btn-ghost padding-10-t circle font-color-black-muted">
                                    <svg class="icon"><use href="#home"/></svg>
                                    <span class="small block">Home</span>
                                </button>
                            </div>
                            <div class="col-3">
                                <button class="ui-btn ui-btn-multi ui-btn-ghost padding-10-t circle font-color-black-muted">
                                    <svg class="icon"><use href="#search"/></svg>
                                    <span class="small block">Search</span>
                                </button>
                            </div>
                            <div class="col-3">
                                <button class="ui-btn ui-btn-multi ui-btn-ghost padding-10-t circle font-color-black-muted" data-ui-notifier="2">
                                    <svg class="icon"><use href="#comment"/></svg>
                                    <span class="small block">Chat</span>
                                </button>
                            </div>
                            <div class="col-3">
                                <button class="ui-btn ui-btn-multi ui-btn-ghost padding-10-t circle ui-color">
                                    <svg class="icon icon-semibold"><use href="#user"/></svg>
                                    <span class="small block">Profile</span>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    </div>
</main>