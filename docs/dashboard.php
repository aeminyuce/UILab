<!-- custom CSS -->
<link rel="stylesheet" href="../css/custom/dashboard.css?v=<?php echo filemtime('../css/custom/dashboard.css'); ?>"/>

<!-- custom JS -->
<script src="../js/custom/dashboard.js?v=<?php echo filemtime('../js/custom/dashboard.js'); ?>"></script>

<main class="ui-container ui-no-gutter">

    <div class="ui-col-static ui-sm-fluid">

        <!-- dashboard-menu -->
        <div class="dashboard-menu ui-col-250 ui-set-relative ui-visible-lg ui-theme-base ui-ease-width ui-ease-in-out">
            <div class="ui-col-250 ui-full-h ui-set-fixed ui-set-l ui-set-t ui-invert-bg ui-fill-dark-100 ui-ease-layout ui-ease-in-out">

                <div class="ui-set-relative ui-p-5-t">
                    <img class="ui-m-1-t" src="img/logo-udashboard.png" height="62" alt="">
                    <button class="dashboard-menu-hide ui-opacity-more ui-p-10-h ui-ease-btn ui-set-absolute ui-set-cy ui-set-r" data-ui-tooltip title="Toggle Menu">
                        <svg class="ui-icon"><use href="#angle-left"/></svg>
                    </button>
                </div>

                <div class="ui-tab-holder ui-align-l ui-icons-no-opacity ui-theme-sub ui-ease-tab ui-ease-1st-btn ui-scroll-v ui-scrollbar-faded ui-sidebar-add-l" data-ui-classes="ui-text">

                    <div class="ui-p-10">
                        <div class="ui-font-12 ui-m-10-b ui-color-white-25">Personal Activity</div>

                        <div class="ui-btn-holder ui-align-c ui-ease-1st-btn">
                            <button class="ui-btn ui-btn-multi ui-p-10 ui-round-l">

                                <span class="ui-font-22">13</span>
                                <span class="ui-font-12 ui-color-white-25 ui-m-5-b ui-block">Waiting</span>
                                <span class="ui-progress-bar ui-round ui-border-dual">
                                    <span class="ui-fill-dark-100 ui-stripe-light" style="width: 65%;"></span>
                                </span>

                            </button>
                            <button class="ui-btn ui-btn-multi ui-p-10">

                                <span class="ui-font-22">3</span>
                                <span class="ui-font-12 ui-color-white-25 ui-m-5-b ui-block">Paused</span>
                                <span class="ui-progress-bar ui-round ui-border-dual">
                                    <span class="ui-fill-dark-100 ui-stripe-light" style="width: 35%;"></span>
                                </span>

                            </button>
                            <button class="ui-btn ui-btn-multi ui-p-10 ui-round-r">

                                <span class="ui-font-22">16</span>
                                <span class="ui-font-12 ui-color-white-25 ui-m-5-b ui-block">Delayed</span>
                                <span class="ui-progress-bar ui-round ui-border-dual">
                                    <span class="ui-fill-dark-100 ui-stripe-light" style="width: 75%;"></span>
                                </span>

                            </button>
                        </div>
                    </div>

                    <a href="#" class="ui-btn ui-btn-lg ui-btn-ghost ui-block ui-m-10-v">
                        <svg class="ui-icon ui-m-15-r"><use href="#grid-masonry"/></svg>
                        Dashboard
                    </a>

                    <button class="ui-tab ui-tab-toggle ui-btn ui-btn-lg ui-btn-ghost ui-p-10-r ui-block">
                        <svg class="ui-icon ui-m-15-r"><use href="#users"/></svg>
                        <svg class="ui-toggle-icon ui-icon ui-float-r"><use href="#angle-down"/></svg>
                        Employees
                    </button>

                    <div class="ui-tab-content">
                        <div class="ui-p-15-v ui-p-20-l">
                            <ul class="ui-tab-holder ui-list-sp-15 ui-p-30-l ui-ease-2nd-btn" data-ui-classes="ui-text">
                                <li>
                                    <a class="ui-tab ui-tab-toggle ui-opacity" href="#">
                                        <svg class="ui-toggle-icon ui-icon ui-m-10-r ui-float-r"><use href="#arrow-down"/></svg>
                                        Managers
                                    </a>
                                    <div class="ui-tab-content">
                                        <ul class="ui-list-sp-15 ui-p-20 ui-no-p-r ui-no-m ui-ease-2nd-btn">
                                            <li><a class="ui-opacity" href="#">Search</a></li>
                                            <li><a class="ui-opacity" href="#">Change Group</a></li>
                                            <li><a class="ui-opacity" href="#">Add/Remove Managers</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <a class="ui-tab ui-tab-toggle ui-opacity" href="#">
                                        <svg class="ui-toggle-icon ui-icon ui-m-10-r ui-float-r"><use href="#arrow-down"/></svg>
                                        Team Leaders
                                    </a>
                                    <div class="ui-tab-content">
                                        <ul class="ui-list-sp-15 ui-p-20 ui-no-p-r ui-no-m ui-ease-2nd-btn">
                                            <li><a class="ui-opacity" href="#">Search</a></li>
                                            <li><a class="ui-opacity" href="#">Change Team</a></li>
                                            <li><a class="ui-opacity" href="#">Add/Remove Team Leaders</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li><a class="ui-opacity" href="#">Teams</a></li>
                                <li><a class="ui-opacity" href="#">Human Resources</a></li>
                                <li><a class="ui-opacity" href="#">Annual Leaves</a></li>
                            </ul>
                        </div>
                    </div>

                    <button class="ui-tab ui-tab-toggle ui-btn ui-btn-lg ui-btn-ghost ui-p-10-r ui-block">
                        <svg class="ui-icon ui-m-15-r"><use href="#moneys"/></svg>
                        <svg class="ui-toggle-icon ui-icon ui-float-r"><use href="#angle-down"/></svg>
                        Payments
                    </button>
                    <div class="ui-tab-content">
                        <div class="ui-p-15-v ui-p-20-l">
                            <ul class="ui-list-sp-15 ui-p-30-l ui-ease-2nd-btn">
                                <li><a class="ui-opacity" href="#">New Payment</a></li>
                                <li><a class="ui-opacity" href="#">Recent Payments</a></li>
                                <li><a class="ui-opacity" href="#">Last Month</a></li>
                                <li><a class="ui-opacity" href="#">Last Year</a></li>
                                <li><a class="ui-opacity" href="#">Annual Profits</a></li>
                            </ul>
                        </div>
                    </div>

                    <button class="ui-tab ui-tab-toggle ui-btn ui-btn-lg ui-btn-ghost ui-p-10-r ui-block">
                        <svg class="ui-icon ui-m-15-r"><use href="#calendar-check"/></svg>
                        <svg class="ui-toggle-icon ui-icon ui-float-r"><use href="#angle-down"/></svg>
                        Events
                    </button>
                    <div class="ui-tab-content">
                        <div class="ui-p-15-v ui-p-20-l">
                            <ul class="ui-list-sp-15 ui-p-30-l ui-ease-2nd-btn">
                                <li><a class="ui-opacity" href="#">New Event</a></li>
                                <li><a class="ui-opacity" href="#">Recent Activities</a></li>
                                <li><a class="ui-opacity" href="#">This Week</a></li>
                                <li><a class="ui-opacity" href="#">Statistics</a></li>
                            </ul>
                        </div>
                    </div>

                    <button class="ui-tab ui-tab-toggle ui-btn ui-btn-lg ui-btn-ghost ui-p-10-r ui-block">
                        <svg class="ui-icon ui-m-15-r"><use href="#files"/></svg>
                        <svg class="ui-toggle-icon ui-icon ui-float-r"><use href="#angle-down"/></svg>
                        Documents
                    </button>
                    <div class="ui-tab-content">
                        <div class="ui-p-15-v ui-p-20-l">
                            <ul class="ui-list-sp-15 ui-p-30-l ui-ease-2nd-btn">
                                <li><a class="ui-opacity" href="#">New Document</a></li>
                                <li><a class="ui-opacity" href="#">Members</a></li>
                                <li><a class="ui-opacity" href="#">Groups</a></li>
                                <li><a class="ui-opacity" href="#">Projects</a></li>
                                <li><a class="ui-opacity" href="#">Other Files</a></li>
                                <li><a class="ui-opacity" href="#">Archive</a></li>
                            </ul>
                        </div>
                    </div>

                    <button class="ui-tab ui-tab-toggle ui-btn ui-btn-lg ui-btn-ghost ui-p-10-r ui-block">
                        <svg class="ui-icon ui-m-15-r"><use href="#chart-line"/></svg>
                        <svg class="ui-toggle-icon ui-icon ui-float-r"><use href="#angle-down"/></svg>
                        Statistics
                    </button>
                    <div class="ui-tab-content">
                        <div class="ui-p-15-v ui-p-20-l">
                            <ul class="ui-list-sp-15 ui-p-30-l ui-ease-2nd-btn">
                                <li><a class="ui-opacity" href="#">Sales</a></li>
                                <li><a class="ui-opacity" href="#">Profit</a></li>
                                <li><a class="ui-opacity" href="#">Registrations</a></li>
                                <li><a class="ui-opacity" href="#">Sponsors</a></li>
                            </ul>
                        </div>
                    </div>

                    <button class="ui-tab ui-tab-toggle ui-btn ui-btn-lg ui-btn-ghost ui-p-10-r ui-block">
                        <svg class="ui-icon ui-m-15-r"><use href="#doc"/></svg>
                        <svg class="ui-toggle-icon ui-icon ui-float-r"><use href="#angle-down"/></svg>
                        Reports
                    </button>
                    <div class="ui-tab-content">
                        <div class="ui-p-15-v ui-p-20-l">
                            <ul class="ui-list-sp-15 ui-p-30-l ui-ease-2nd-btn">
                                <li><a class="ui-opacity" href="#">New Report</a></li>
                                <li><a class="ui-opacity" href="#">Market Research</a></li>
                                <li><a class="ui-opacity" href="#">Industry Data</a></li>
                                <li><a class="ui-opacity" href="#">Finance Report</a></li>
                                <li><a class="ui-opacity" href="#">Gross Profit</a></li>
                                <li><a class="ui-opacity" href="#">Cumulative Losses</a></li>
                            </ul>
                        </div>
                    </div>

                    <button class="ui-tab ui-tab-toggle ui-btn ui-btn-lg ui-btn-ghost ui-p-10-r ui-block">
                        <svg class="ui-icon ui-m-15-r"><use href="#truck"/></svg>
                        <svg class="ui-toggle-icon ui-icon ui-float-r"><use href="#angle-down"/></svg>
                        Orders
                    </button>
                    <div class="ui-tab-content">
                        <div class="ui-p-15-v ui-p-20-l">
                            <ul class="ui-list-sp-15 ui-p-30-l ui-ease-2nd-btn">
                                <li><a class="ui-opacity" href="#">New Order</a></li>
                                <li><a class="ui-opacity" href="#">Activity</a></li>
                                <li><a class="ui-opacity" href="#">Delivered</a></li>
                                <li><a class="ui-opacity" href="#">Dispatched</a></li>
                            </ul>
                        </div>
                    </div>

                    <span class="ui-sp-15"></span>

                    <div class="ui-btn-list ui-m-10 ui-icons-m-10-r ui-form-lg ui-ease-1st-btn">
                        <button class="ui-btn ui-round">
                            <svg class="ui-icon"><use href="#shield"/></svg>
                            Administration
                        </button>
                        <button class="ui-btn ui-round">
                            <svg class="ui-icon"><use href="#clock"/></svg>
                            Recent History
                        </button>
                        <button class="ui-btn ui-round">
                            <svg class="ui-icon"><use href="#settings"/></svg>
                            Tools
                        </button>
                    </div>

                </div>

            </div>
        </div>

        <div class="ui-row">

            <!-- header: start -->
            <header class="ui-col-12 ui-align-r ui-icons-no-opacity ui-shadow-sm ui-form-lg ui-ease-layout dashboard-menu-opened" data-ui-classes="ui-shadow-lg">

                <div class="ui-align-c ui-float-l ui-ease-1st-btn">
                    <button class="dashboard-menu-show ui-btn ui-color-black-25 ui-btn-ghost ui-p-10 ui-circle ui-visible-lg ui-hidden" data-ui-tooltip title="Toggle Menu">
                        <svg class="ui-icon"><use href="#angle-right"/></svg>
                    </button>
                    <button class="ui-btn ui-color-black-25 ui-btn-ghost ui-p-10 ui-circle ui-sidebar-show-l ui-hidden-lg" data-ui-tooltip title="Show Menu" data-ui-only="desktop">
                        <svg class="ui-icon"><use href="#bars-left"/></svg>
                    </button>
                    <button class="ui-btn ui-color-black-25 ui-btn-ghost ui-p-10 ui-circle" onclick="ui.modal.open({source: '.modal-search', bg: 'false'});" data-ui-tooltip data-ui-only="desktop" title="Search">
                        <svg class="ui-icon"><use href="#search"/></svg>
                    </button>
                    <div class="ui-dropdown ui-nav ui-ease-dropdown">
                        <button class="ui-btn ui-color-black-25 ui-btn-ghost ui-p-10 ui-circle ui-hidden-sm">
                            My Jobs
                            <svg class="ui-toggle-icon ui-icon ui-m-5-l"><use href="#angle-down"/></svg>
                        </button>
                        <button class="ui-btn ui-color-black-25 ui-btn-ghost ui-p-10 ui-circle ui-visible-sm">
                            <svg class="ui-icon"><use href="#angle-down"/></svg>
                        </button>
                        <ul class="ui-dropdown-menu ui-dropdown-has-icon ui-list-col-2 ui-round ui-shadow-lg">
                            <li>
                                <a href="#"><b class="ui-menu-icon">23</b> Waiting</a>
                            </li>
                            <li>
                                <a href="#"><b class="ui-menu-icon">258</b> Expert</a>
                            </li>
                            <li>
                                <a href="#"><b class="ui-menu-icon">49</b> On Audit</a>
                            </li>
                            <li>
                                <a href="#"><b class="ui-menu-icon">68</b> Delayed</a>
                            </li>
                            <li>
                                <a href="#"><b class="ui-menu-icon">23</b> Waiting</a>
                            </li>
                            <li>
                                <a href="#"><b class="ui-menu-icon">258</b> Expert</a>
                            </li>
                            <li>
                                <a href="#"><b class="ui-menu-icon">49</b> On Audit</a>
                            </li>
                            <li>
                                <a href="#"><b class="ui-menu-icon">68</b> Delayed</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="ui-inline">
                    <div class="ui-dropdown ui-menu-l ui-ease-dropdown">
                        <button class="ui-btn ui-color-black-25 ui-btn-square ui-btn-ghost ui-circle">
                            <span class="ui-notifier">
                                <svg class="ui-icon"><use href="#comment"/></svg>
                            </span>
                        </button>
                        <div class="ui-dropdown-menu ui-round ui-shadow-lg ui-no-scroll">
                            <div class="ui-tab-holder ui-theme-sub ui-ease-tab" data-ui-classes="ui-border-lg ui-stroke ui-text">

                                <div class="ui-btn-holder ui-color-black-25 ui-align-c ui-border-b ui-ease-1st-btn">
                                    <button class="ui-tab ui-btn ui-btn-ghost ui-round-t ui-border-b ui-border-lg ui-stroke ui-text ui-active" title="Favorites">
                                        <svg class="ui-icon"><use href="#star"/></svg>
                                    </button>
                                    <button class="ui-tab ui-btn ui-btn-ghost ui-round-t ui-border-b" title="History">
                                        <svg class="ui-icon"><use href="#history"/></svg>
                                    </button>
                                </div>
                                <div class="ui-tab-content ui-align-l ui-scroll-v ui-open ui-open-ease" style="max-height: 420px;">
                                    <ul class="ui-timeline ui-timeline-l ui-m-15-h ui-timeline-no-h-lines">
                                        <li>Nullam sit amet sagittis nisi. Phasellus libero dolor, aliquam eu erat sed.</li>
                                        <li>Aenean id tellus eu felis fermentum semper. Morbi et erat tincidunt, molestie leo a, accumsan dui</li>
                                        <li>Pellentesque lobortis leo vitae magna sollicitudin, at tincidunt felis tempor.</li>
                                        <li>Duis libero massa, dapibus sit amet leo malesuada, pharetra iaculis sapien.</li>
                                        <li>Pellentesque lobortis leo vitae magna sollicitudin, at tincidunt felis tempor.</li>
                                        <li>Etiam bibendum molestie lectus sit amet aliquet. Pellentesque non lacus iaculis, tristique velit.</li>
                                        <li>Aenean imperdiet dolor nibh, a porta nunc maximus vitae.</li>
                                        <li>Pellentesque lobortis leo vitae magna sollicitudin, at tincidunt felis tempor.</li>
                                    </ul>
                                </div>
                                <div class="ui-tab-content ui-align-l ui-scroll-v" style="max-height: 420px;">
                                    <ul class="ui-timeline ui-timeline-l ui-m-15-h ui-timeline-no-h-lines">
                                        <li>Nullam sit amet sagittis nisi. Phasellus libero dolor, aliquam eu erat sed.</li>
                                        <li>Aenean id tellus eu felis fermentum semper. Morbi et erat tincidunt, molestie leo a, accumsan dui</li>
                                        <li>Pellentesque lobortis leo vitae magna sollicitudin, at tincidunt felis tempor.</li>
                                        <li>Duis libero massa, dapibus sit amet leo malesuada, pharetra iaculis sapien.</li>
                                        <li>Pellentesque lobortis leo vitae magna sollicitudin, at tincidunt felis tempor.</li>
                                        <li>Etiam bibendum molestie lectus sit amet aliquet. Pellentesque non lacus iaculis, tristique velit.</li>
                                        <li>Aenean imperdiet dolor nibh, a porta nunc maximus vitae.</li>
                                        <li>Pellentesque lobortis leo vitae magna sollicitudin, at tincidunt felis tempor.</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="ui-dropdown ui-menu-l ui-ease-dropdown">
                        <button class="ui-btn ui-color-black-25 ui-btn-square ui-btn-ghost ui-circle">
                            <span class="ui-notifier">
                                <svg class="ui-icon"><use href="#bell"/></svg>
                            </span>
                        </button>
                        <div class="ui-dropdown-menu ui-round ui-shadow-lg ui-no-scroll">
                            <div class="ui-tab-holder ui-theme-sub ui-ease-tab" data-ui-classes="ui-border-lg ui-stroke ui-text">

                                <div class="ui-btn-holder ui-color-black-25 ui-align-c ui-border-b ui-ease-1st-btn">
                                    <button class="ui-tab ui-btn ui-btn-ghost ui-round-t ui-border-b ui-border-lg ui-stroke ui-text ui-active" title="Notifications">
                                        <svg class="ui-icon"><use href="#bell"/></svg>
                                    </button>
                                    <button class="ui-tab ui-btn ui-btn-ghost ui-round-t ui-border-b" title="Notes">
                                        <svg class="ui-icon"><use href="#pencil-write"/></svg>
                                    </button>
                                    <button class="ui-tab ui-btn ui-btn-ghost ui-round-t ui-border-b" title="Started Jobs">
                                        <svg class="ui-icon"><use href="#hourglass-start"/></svg>
                                    </button>
                                </div>
                                <div class="ui-tab-content ui-align-l ui-scroll-v ui-open ui-open-ease" style="max-height: 420px;">
                                    <ul class="ui-timeline ui-timeline-l ui-m-15-h ui-timeline-no-h-lines">
                                        <li>Nullam sit amet sagittis nisi. Phasellus libero dolor, aliquam eu erat sed.</li>
                                        <li>Aenean id tellus eu felis fermentum semper. Morbi et erat tincidunt, molestie leo a, accumsan dui</li>
                                        <li>Pellentesque lobortis leo vitae magna sollicitudin, at tincidunt felis tempor.</li>
                                        <li>Duis libero massa, dapibus sit amet leo malesuada, pharetra iaculis sapien.</li>
                                        <li>Pellentesque lobortis leo vitae magna sollicitudin, at tincidunt felis tempor.</li>
                                        <li>Etiam bibendum molestie lectus sit amet aliquet. Pellentesque non lacus iaculis, tristique velit.</li>
                                        <li>Aenean imperdiet dolor nibh, a porta nunc maximus vitae.</li>
                                        <li>Pellentesque lobortis leo vitae magna sollicitudin, at tincidunt felis tempor.</li>
                                    </ul>
                                </div>
                                <div class="ui-tab-content ui-align-l ui-scroll-v" style="max-height: 420px;">
                                    <ul class="ui-timeline ui-timeline-l ui-m-15-h ui-timeline-no-h-lines">
                                        <li>Nullam sit amet sagittis nisi. Phasellus libero dolor, aliquam eu erat sed.</li>
                                        <li>Aenean id tellus eu felis fermentum semper. Morbi et erat tincidunt, molestie leo a, accumsan dui</li>
                                        <li>Pellentesque lobortis leo vitae magna sollicitudin, at tincidunt felis tempor.</li>
                                        <li>Duis libero massa, dapibus sit amet leo malesuada, pharetra iaculis sapien.</li>
                                        <li>Pellentesque lobortis leo vitae magna sollicitudin, at tincidunt felis tempor.</li>
                                        <li>Etiam bibendum molestie lectus sit amet aliquet. Pellentesque non lacus iaculis, tristique velit.</li>
                                        <li>Aenean imperdiet dolor nibh, a porta nunc maximus vitae.</li>
                                        <li>Pellentesque lobortis leo vitae magna sollicitudin, at tincidunt felis tempor.</li>
                                    </ul>
                                </div>
                                <div class="ui-tab-content ui-align-l ui-scroll-v" style="max-height: 420px;">
                                    <ul class="ui-timeline ui-timeline-l ui-m-15-h ui-timeline-no-h-lines">
                                        <li>Nullam sit amet sagittis nisi. Phasellus libero dolor, aliquam eu erat sed.</li>
                                        <li>Aenean id tellus eu felis fermentum semper. Morbi et erat tincidunt, molestie leo a, accumsan dui</li>
                                        <li>Pellentesque lobortis leo vitae magna sollicitudin, at tincidunt felis tempor.</li>
                                        <li>Duis libero massa, dapibus sit amet leo malesuada, pharetra iaculis sapien.</li>
                                        <li>Pellentesque lobortis leo vitae magna sollicitudin, at tincidunt felis tempor.</li>
                                        <li>Etiam bibendum molestie lectus sit amet aliquet. Pellentesque non lacus iaculis, tristique velit.</li>
                                        <li>Aenean imperdiet dolor nibh, a porta nunc maximus vitae.</li>
                                        <li>Pellentesque lobortis leo vitae magna sollicitudin, at tincidunt felis tempor.</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="ui-float-r ui-m-10-l ui-xs-no-m">
                    <span class="ui-dropdown ui-menu-l ui-m-5-l ui-float-r ui-ease-dropdown">
                        <button class="ui-btn ui-no-p ui-circle ui-hover-scale-more">
                            <img class="ui-avatar ui-avatar-sm ui-circle" src="img/profile-image.jpg" alt="">
                        </button>
                        <ul class="ui-dropdown-menu ui-dropdown-has-grid ui-align-c ui-icons-lg ui-round ui-shadow-lg">
                            <li>
                                <a href="#">
                                    <svg class="ui-icon"><use href="#user"/></svg>
                                    Profile
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <svg class="ui-icon"><use href="#calendar"/></svg>
                                    Calendar
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <svg class="ui-icon"><use href="#lock"/></svg>
                                    Lock Screen
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <svg class="ui-icon"><use href="#key"/></svg>
                                    Change Password
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <svg class="ui-icon"><use href="#setting"/></svg>
                                    Settings
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <svg class="ui-icon"><use href="#sign-out"/></svg>
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </span>
                    <span class="ui-m-3-t ui-inline-block ui-hidden-xs">aeminyuce</span>
                    <span class="ui-font-12 ui-color-black-50 ui-block ui-hidden-xs">Premium</span>
                </div>

            </header>
            <!-- header: end -->

            <!-- layouts: start -->
            <div class="ui-tab-holder ui-ease-tab ui-p-15-b" data-ui-classes="ui-border-lg ui-stroke ui-text">

                <div class="ui-container">
                    <div class="ui-row ui-border-b ui-m-15-b ui-theme-sub">
                        <div class="ui-col-4 ui-offset-4 ui-no-p-b">

                            <div class="ui-btn-holder ui-color-black-25 ui-form-lg ui-ease-1st-btn">
                                <button class="ui-tab ui-btn ui-btn-ghost ui-round-t ui-border-b ui-border-lg ui-stroke ui-text ui-active">Dashboard</button>
                                <button class="ui-tab ui-btn ui-btn-ghost ui-round-t ui-border-b">Forms</button>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="ui-tab-content ui-open ui-open-ease">

                    <!-- dashboard: start -->
                    <div class="ui-fixed ui-fixed-xl">
                        <div class="ui-row">

                            <div class="ui-col-12 ui-no-p">
                                <div class="dashboard-carousel ui-carousel" data-ui-col-xl="4" data-ui-col-lg="2" data-ui-col="2" data-ui-col-md="2" data-ui-col-sm="1" data-ui-col-xs="1">
                                    <div class="ui-carousel-slider ui-icons-m-5-r ui-ease-layout ui-ease-slow ui-ease-in-out">

                                        <div class="ui-carousel-content ui-p-10-h ui-p-10-t ui-p-15-b ui-theme-yellow">
                                            <div class="ui-card ui-full-h ui-p-15 ui-round ui-shadow-lg">
                                                <div class="ui-col-static ui-no-fluid">
                                                    <div class="ui-row ui-no-row-gap-h ui-row-gap-md-v">
                                                        <div class="ui-col-12">
                                                            <div class="ui-font-18">Pending</div>
                                                            <span class="ui-color-black-25 ui-font-16">Total: 45%</span>
                                                        </div>
                                                    </div>
                                                    <div class="ui-col-100 ui-align-r">
                                                        <span class="ui-font-38 ui-text">157</span>
                                                    </div>
                                                </div>
                                                <div class="ui-progress-bar ui-m-15-t ui-round">
                                                    <span class="ui-fill-dark-100 ui-stripe-light" style="width: 45%;"></span>
                                                </div>
                                                <p class="ui-color-black-25 ui-font-16 ui-m-5-b">Pending for the transaction.</p>
                                                <p class="ui-color-black-25">
                                                    <svg class="ui-icon ui-icon-xs"><use href="#clock"/></svg>
                                                    <span class="ui-inline-block">Last updated: 15:12</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div class="ui-carousel-content ui-p-10-h ui-p-10-t ui-p-15-b ui-theme-yellow">
                                            <div class="ui-card ui-full-h ui-p-15 ui-round ui-shadow-lg">
                                                <div class="ui-col-static ui-no-fluid">
                                                    <div class="ui-row ui-no-row-gap-h ui-row-gap-md-v">
                                                        <div class="ui-col-12">
                                                            <div class="ui-font-18">Paused</div>
                                                            <span class="ui-color-black-25 ui-font-16">Total: 5%</span>
                                                        </div>
                                                    </div>
                                                    <div class="ui-col-100 ui-align-r">
                                                        <span class="ui-font-38 ui-text">23</span>
                                                    </div>
                                                </div>
                                                <div class="ui-progress-bar ui-m-15-t ui-round">
                                                    <span class="ui-fill-dark-100 ui-stripe-light" style="width: 5%;"></span>
                                                </div>
                                                <p class="ui-color-black-25 ui-font-16 ui-m-5-b">Paused for the some reasons.</p>
                                                <p class="ui-color-black-25">
                                                    <svg class="ui-icon ui-icon-xs"><use href="#clock"/></svg>
                                                    <span class="ui-inline-block">Last updated: 15:12</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div class="ui-carousel-content ui-p-10-h ui-p-10-t ui-p-15-b ui-theme-green">
                                            <div class="ui-card ui-full-h ui-p-15 ui-round ui-shadow-lg">
                                                <div class="ui-col-static ui-no-fluid">
                                                    <div class="ui-row ui-no-row-gap-h ui-row-gap-md-v">
                                                        <div class="ui-col-12">
                                                            <div class="ui-font-18">Completed</div>
                                                            <span class="ui-color-black-25 ui-font-16">Total: 80%</span>
                                                        </div>
                                                    </div>
                                                    <div class="ui-col-100 ui-align-r">
                                                        <span class="ui-font-38 ui-text">256</span>
                                                    </div>
                                                </div>
                                                <div class="ui-progress-bar ui-m-15-t ui-round">
                                                    <span class="ui-fill-dark-100 ui-stripe-light" style="width: 80%;"></span>
                                                </div>
                                                <p class="ui-color-black-25 ui-font-16 ui-m-5-b">Reached for the expert.</p>
                                                <p class="ui-color-black-25">
                                                    <svg class="ui-icon ui-icon-xs"><use href="#clock"/></svg>
                                                    <span class="ui-inline-block">Last updated: 15:12</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div class="ui-carousel-content ui-p-10-h ui-p-10-t ui-p-15-b ui-theme-sub">
                                            <div class="ui-card ui-full-h ui-p-15 ui-round ui-shadow-lg">
                                                <div class="ui-col-static ui-no-fluid">
                                                    <div class="ui-row ui-no-row-gap-h ui-row-gap-md-v">
                                                        <div class="ui-col-12">
                                                            <div class="ui-align-l ui-font-18">On Payment</div>
                                                            <span class="ui-color-black-25 ui-font-16">Total: 67%</span>
                                                        </div>
                                                    </div>
                                                    <div class="ui-col-100 ui-align-r">
                                                        <span class="ui-font-38 ui-text">256</span>
                                                    </div>
                                                </div>
                                                <div class="ui-progress-bar ui-m-15-t ui-round">
                                                    <span class="ui-fill-dark-100 ui-stripe-light" style="width: 67%;"></span>
                                                </div>
                                                <p class="ui-color-black-25 ui-font-16 ui-m-5-b">Confirmed for payment.</p>
                                                <p class="ui-color-black-25">
                                                    <svg class="ui-icon ui-icon-xs"><use href="#clock"/></svg>
                                                    <span class="ui-inline-block">Last updated: 15:12</span>
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="ui-carousel-nav ui-no-m-t ui-m-10-b ui-ease-1st-btn">
                                        <button class="ui-carousel-prev ui-btn ui-btn-ghost ui-btn-square ui-circle">
                                            <svg class="ui-icon ui-m-3-r"><use href="#angle-left"/></svg>
                                        </button>
                                        <span class="ui-carousel-dots ui-color-black-25"></span>
                                        <button class="ui-carousel-next ui-btn ui-btn-ghost ui-btn-square ui-circle">
                                            <svg class="ui-icon ui-m-3-l"><use href="#angle-right"/></svg>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div class="ui-col-xl-3 ui-col-lg-6 ui-col-12 ui-col-md-6">
                                <div class="ui-card ui-full-h ui-p-15 ui-round ui-shadow-lg">
                                    <div class="ui-dropdown ui-menu-l ui-float-r ui-ease-dropdown">
                                        <button class="ui-btn ui-btn-square ui-btn-ghost ui-round">
                                            <svg class="ui-icon"><use href="#ellipsis-h"/></svg>
                                        </button>
                                        <ul class="ui-dropdown-menu ui-dropdown-has-icon ui-round ui-shadow-lg">
                                            <li><a href="#"><svg class="ui-menu-icon ui-icon"><use href="#file-pdf"/></svg>Download PDF</a></li>
                                            <li><a href="#"><svg class="ui-menu-icon ui-icon"><use href="#file-xls"/></svg>Download Excel</a></li>
                                            <li><a href="#"><svg class="ui-menu-icon ui-icon"><use href="#eye"/></svg>See Detailed Activity</a></li>
                                        </ul>
                                    </div>
                                    <h4 class="ui-h4 ui-align-l ui-m-10-t">Activity</h4>
                                    <div class="ui-col-static ui-no-fluid">
                                        <div class="ui-row ui-row ui-no-row-gap-h ui-row-gap-md-v">
                                            <div class="ui-col-12 ui-font-16">
                                                <div class="ui-font-16 ui-font-bold">Total Progress</div>
                                                <span class="ui-color-black-25">23% Change</span>
                                            </div>
                                        </div>
                                        <div class="ui-col-150 ui-align-r">
                                            <span class="ui-font-38 ui-inline-block">436</span>
                                        </div>
                                    </div>
                                    <div class="ui-row ui-row-gap-lg-h ui-no-fluid">
                                        <div class="ui-col-6">
                                            <div class="ui-donut-chart ui-m-auto ui-ease-donut-chart" style="max-width: 150px;">
                                                <strong>
                                                    <b class="ui-color-black-50 ui-m-2-b ui-block">69%</b>
                                                    Payments
                                                </strong>
                                                <svg viewBox="0 0 160 160">
                                                    <circle r="69.85699" cy="80" cx="80" class="ui-donut-chart-bg" />
                                                    <circle r="69.85699" cy="80" cx="80" stroke="hsl(186, 70%, 68%)" data-ui-percent="69" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="ui-col-6">
                                            <div class="ui-pie-chart ui-m-auto ui-ease-pie-chart" data-ui-info="Profit" style="max-width: 150px;">
                                                <ul>
                                                    <li data-ui-percent="70" data-ui-fill="hsl(97, 70%, 70%)"></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <span class="ui-sp-3"></span>
                                    <p class="ui-color-black-50 ui-font-16 ui-m-5-b">Daily reports that all received.</p>
                                    <p class="ui-color-black-25">
                                        <svg class="ui-icon ui-icon-xs ui-m-5-r"><use href="#clock"/></svg>
                                        <span class="ui-inline-block">Last updated: 15:12</span>
                                    </p>
                                </div>
                            </div>

                            <div class="ui-col-xl-3 ui-col-lg-6 ui-col-12 ui-col-md-6">
                                <div class="ui-card ui-full-h ui-p-15 ui-p-10-t ui-round ui-shadow-lg" style="min-height: 350px;">
                                    <div class="ui-tab-holder ui-theme-sub ui-ease-tab" data-ui-classes="ui-border-lg ui-stroke ui-text">

                                        <div class="ui-btn-holder ui-color-black-25 ui-align-c ui-m-10-b ui-border-b ui-form-lg ui-ease-1st-btn">
                                            <button class="ui-tab ui-btn ui-btn-ghost ui-round-t ui-border-b ui-border-lg ui-stroke ui-text ui-active">Delayed</button>
                                            <button class="ui-tab ui-btn ui-btn-ghost ui-round-t ui-border-b">Paused</button>
                                        </div>
                                        <div class="ui-tab-content ui-set-absolute ui-set-h ui-scroll-v ui-open ui-open-ease" style="top: 64px; bottom: 15px;">
                                            <div class="ui-listgroup ui-m-15-h">
                                                <ul class="ui-ease-listgroup">
                                                    <li class="ui-no-border">
                                                        <span class="ui-donut-chart ui-col-48 ui-float-r ui-ease-donut-chart">
                                                            <strong class="ui-color-black-25 ui-font-11">88%</strong>
                                                            <svg viewBox="0 0 160 160">
                                                                <circle r="69.85699" cy="80" cx="80" stroke="hsl(188, 89%, 40%)" data-ui-percent="88" />
                                                            </svg>
                                                        </span>
                                                        <b class="ui-m-5-t ui-block">AAC-2019-013:AGF</b>
                                                        <span class="ui-color-black-50 ui-font-12">3814 Reports</span>
                                                    </li>
                                                    <li class="ui-no-border">
                                                        <span class="ui-donut-chart ui-col-48 ui-float-r ui-ease-donut-chart">
                                                            <strong class="ui-color-black-25 ui-font-11">76%</strong>
                                                            <svg viewBox="0 0 160 160">
                                                                <circle r="69.85699" cy="80" cx="80" stroke="hsl(188, 89%, 40%)" data-ui-percent="76" />
                                                            </svg>
                                                        </span>
                                                        <b class="ui-m-5-t ui-block">BDA-2019-642</b>
                                                        <span class="ui-color-black-50 ui-font-12">2613 Reports</span>
                                                    </li>
                                                    <li class="ui-no-border">
                                                        <span class="ui-donut-chart ui-col-48 ui-float-r ui-ease-donut-chart">
                                                            <strong class="ui-color-black-25 ui-font-11">69%</strong>
                                                            <svg viewBox="0 0 160 160">
                                                                <circle r="69.85699" cy="80" cx="80" stroke="hsl(188, 89%, 40%)" data-ui-percent="69" />
                                                            </svg>
                                                        </span>
                                                        <b class="ui-m-5-t ui-block">DDG-2019-505:AG</b>
                                                        <span class="ui-color-black-50 ui-font-12">1890 Reports</span>
                                                    </li>
                                                    <li class="ui-no-border">
                                                        <span class="ui-donut-chart ui-col-48 ui-float-r ui-ease-donut-chart">
                                                            <strong class="ui-color-black-25 ui-font-11">52%</strong>
                                                            <svg viewBox="0 0 160 160">
                                                                <circle r="69.85699" cy="80" cx="80" stroke="hsl(188, 89%, 40%)" data-ui-percent="52" />
                                                            </svg>
                                                        </span>
                                                        <b class="ui-m-5-t ui-block">OOC-2019-781:F</b>
                                                        <span class="ui-color-black-50 ui-font-12">1605 Reports</span>
                                                    </li>
                                                    <li class="ui-no-border">
                                                        <span class="ui-donut-chart ui-col-48 ui-float-r ui-ease-donut-chart">
                                                            <strong class="ui-color-black-25 ui-font-11">36%</strong>
                                                            <svg viewBox="0 0 160 160">
                                                                <circle r="69.85699" cy="80" cx="80" stroke="hsl(188, 89%, 40%)" data-ui-percent="36" />
                                                            </svg>
                                                        </span>
                                                        <b class="ui-m-5-t ui-block">BDD-2019-047:G</b>
                                                        <span class="ui-color-black-50 ui-font-12">812 Reports</span>
                                                    </li>
                                                    <li class="ui-no-border">
                                                        <span class="ui-donut-chart ui-col-48 ui-float-r ui-ease-donut-chart">
                                                            <strong class="ui-color-black-25 ui-font-11">36%</strong>
                                                            <svg viewBox="0 0 160 160">
                                                                <circle r="69.85699" cy="80" cx="80" stroke="hsl(188, 89%, 40%)" data-ui-percent="36" />
                                                            </svg>
                                                        </span>
                                                        <b class="ui-m-5-t ui-block">RAC-2019-973</b>
                                                        <span class="ui-color-black-50 ui-font-12">616 Reports</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="ui-tab-content ui-set-absolute ui-set-h ui-scroll-v" style="top: 64px; bottom: 15px;">
                                            <div class="ui-listgroup ui-m-15-h">
                                                <ul class="ui-ease-listgroup">
                                                    <li class="ui-no-border">
                                                        <span class="ui-donut-chart ui-col-48 ui-float-r ui-ease-donut-chart">
                                                            <strong class="ui-color-black-25 ui-font-11">88%</strong>
                                                            <svg viewBox="0 0 160 160">
                                                                <circle r="69.85699" cy="80" cx="80" stroke="hsl(188, 89%, 40%)" data-ui-percent="88" />
                                                            </svg>
                                                        </span>
                                                        <b class="ui-m-5-t ui-block">AAC-2019-013:AGF</b>
                                                        <span class="ui-color-black-50 ui-font-12">3814 Reports</span>
                                                    </li>
                                                    <li class="ui-no-border">
                                                        <span class="ui-donut-chart ui-col-48 ui-float-r ui-ease-donut-chart">
                                                            <strong class="ui-color-black-25 ui-font-11">76%</strong>
                                                            <svg viewBox="0 0 160 160">
                                                                <circle r="69.85699" cy="80" cx="80" stroke="hsl(188, 89%, 40%)" data-ui-percent="76" />
                                                            </svg>
                                                        </span>
                                                        <b class="ui-m-5-t ui-block">BDA-2019-642</b>
                                                        <span class="ui-color-black-50 ui-font-12">2613 Reports</span>
                                                    </li>
                                                    <li class="ui-no-border">
                                                        <span class="ui-donut-chart ui-col-48 ui-float-r ui-ease-donut-chart">
                                                            <strong class="ui-color-black-25 ui-font-11">69%</strong>
                                                            <svg viewBox="0 0 160 160">
                                                                <circle r="69.85699" cy="80" cx="80" stroke="hsl(188, 89%, 40%)" data-ui-percent="69" />
                                                            </svg>
                                                        </span>
                                                        <b class="ui-m-5-t ui-block">DDG-2019-505:AG</b>
                                                        <span class="ui-color-black-50 ui-font-12">1890 Reports</span>
                                                    </li>
                                                    <li class="ui-no-border">
                                                        <span class="ui-donut-chart ui-col-48 ui-float-r ui-ease-donut-chart">
                                                            <strong class="ui-color-black-25 ui-font-11">52%</strong>
                                                            <svg viewBox="0 0 160 160">
                                                                <circle r="69.85699" cy="80" cx="80" stroke="hsl(188, 89%, 40%)" data-ui-percent="52" />
                                                            </svg>
                                                        </span>
                                                        <b class="ui-m-5-t ui-block">OOC-2019-781:F</b>
                                                        <span class="ui-color-black-50 ui-font-12">1605 Reports</span>
                                                    </li>
                                                    <li class="ui-no-border">
                                                        <span class="ui-donut-chart ui-col-48 ui-float-r ui-ease-donut-chart">
                                                            <strong class="ui-color-black-25 ui-font-11">36%</strong>
                                                            <svg viewBox="0 0 160 160">
                                                                <circle r="69.85699" cy="80" cx="80" stroke="hsl(188, 89%, 40%)" data-ui-percent="36" />
                                                            </svg>
                                                        </span>
                                                        <b class="ui-m-5-t ui-block">BDD-2019-047:G</b>
                                                        <span class="ui-color-black-50 ui-font-12">812 Reports</span>
                                                    </li>
                                                    <li class="ui-no-border">
                                                        <span class="ui-donut-chart ui-col-48 ui-float-r ui-ease-donut-chart">
                                                            <strong class="ui-color-black-25 ui-font-11">36%</strong>
                                                            <svg viewBox="0 0 160 160">
                                                                <circle r="69.85699" cy="80" cx="80" stroke="hsl(188, 89%, 40%)" data-ui-percent="36" />
                                                            </svg>
                                                        </span>
                                                        <b class="ui-m-5-t ui-block">RAC-2019-973</b>
                                                        <span class="ui-color-black-50 ui-font-12">616 Reports</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div class="ui-col-xl-6 ui-col-lg-6 ui-col-12 ui-col-md-6">
                                <div class="ui-tab-holder ui-card ui-full-h ui-p-15 ui-round ui-shadow-lg" data-ui-classes="ui-font-bold">
                                    <div class="ui-ease-tab">
                                        <div class="ui-dropdown ui-menu-l ui-float-r ui-ease-dropdown">
                                            <button class="ui-btn ui-btn-square ui-btn-ghost ui-round">
                                                <svg class="ui-icon"><use href="#ellipsis-h"/></svg>
                                            </button>
                                            <ul class="ui-dropdown-menu ui-dropdown-has-icon ui-round ui-shadow-lg">
                                                <li><a href="#"><svg class="ui-menu-icon ui-icon"><use href="#file-pdf"/></svg>Download PDF</a></li>
                                                <li><a href="#"><svg class="ui-menu-icon ui-icon"><use href="#file-xls"/></svg>Download Excel</a></li>
                                                <li><a href="#"><svg class="ui-menu-icon ui-icon"><use href="#eye"/></svg>See Detailed Statistics</a></li>
                                            </ul>
                                        </div>
                                        <div class="ui-dropdown ui-menu-l ui-m-5-r ui-float-r ui-ease-dropdown">
                                            <button class="ui-btn ui-btn-ghost ui-round">
                                                <span>Last year</span>
                                                <svg class="ui-toggle-icon ui-icon ui-m-5-l"><use href="#angle-down"/></svg>
                                            </button>
                                            <ul class="ui-dropdown-menu ui-round ui-shadow-lg">
                                                <li class="ui-selected">
                                                    <label class="ui-tab ui-active ui-font-bold">Last year</label>
                                                </li>
                                                <li>
                                                    <label class="ui-tab">Past year</label>
                                                </li>
                                            </ul>
                                        </div>
                                        <h4 class="ui-h4 ui-align-l ui-m-10-t">Statistics</h4>
                                        <div class="ui-tab-content ui-open ui-open-ease">
                                            <div class="ui-line-chart-holder ui-ease-line-chart" data-ui-size="5,48" data-ui-x="Sep,Oct,Nov,Dec,Jan,Fab">
                                                <ul class="ui-line-chart" data-ui-name="Sales" data-ui-type="curved filled">
                                                    <li data-ui-y="10" data-ui-url="#"></li>
                                                    <li data-ui-y="30" data-ui-url="#"></li>
                                                    <li data-ui-y="70" data-ui-url="#"></li>
                                                    <li data-ui-y="120" data-ui-url="#"></li>
                                                    <li data-ui-y="100" data-ui-url="#"></li>
                                                    <li data-ui-y="150" data-ui-url="#"></li>
                                                </ul>
                                                <ul class="ui-line-chart" data-ui-name="Orders" data-ui-type="dashed">
                                                    <li data-ui-y="50" data-ui-url="#"></li>
                                                    <li data-ui-y="10" data-ui-url="#"></li>
                                                    <li data-ui-y="50" data-ui-url="#"></li>
                                                    <li data-ui-y="40" data-ui-url="#"></li>
                                                    <li data-ui-y="80" data-ui-url="#"></li>
                                                    <li data-ui-y="50" data-ui-url="#"></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="ui-tab-content">
                                            <div class="ui-line-chart-holder ui-ease-line-chart" data-ui-size="5,48" data-ui-x="Sep,Oct,Nov,Dec,Jan,Fab">
                                                <ul class="ui-line-chart" data-ui-name="Sales" data-ui-type="curved filled">
                                                    <li data-ui-y="10" data-ui-url="#"></li>
                                                    <li data-ui-y="60" data-ui-url="#"></li>
                                                    <li data-ui-y="20" data-ui-url="#"></li>
                                                    <li data-ui-y="120" data-ui-url="#"></li>
                                                    <li data-ui-y="10" data-ui-url="#"></li>
                                                    <li data-ui-y="100" data-ui-url="#"></li>
                                                </ul>
                                                <ul class="ui-line-chart" data-ui-name="Orders" data-ui-type="dashed">
                                                    <li data-ui-y="0" data-ui-url="#"></li>
                                                    <li data-ui-y="20" data-ui-url="#"></li>
                                                    <li data-ui-y="50" data-ui-url="#"></li>
                                                    <li data-ui-y="40" data-ui-url="#"></li>
                                                    <li data-ui-y="70" data-ui-url="#"></li>
                                                    <li data-ui-y="50" data-ui-url="#"></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="ui-col-xl-3 ui-col-lg-6 ui-col-12 ui-col-md-6">
                                <div class="ui-card ui-full-h ui-p-15 ui-p-10-t ui-round ui-shadow-lg" style="min-height: 350px;">
                                    <div class="ui-tab-holder ui-form-lg ui-theme-sub ui-ease-tab" data-ui-classes="ui-border-lg ui-stroke ui-text">

                                        <div class="ui-btn-holder ui-color-black-25 ui-align-c ui-border-b ui-ease-1st-btn">
                                            <button class="ui-tab ui-btn ui-btn-ghost ui-round-t ui-border-b ui-border-lg ui-stroke ui-text ui-active">News</button>
                                            <button class="ui-tab ui-btn ui-btn-ghost ui-round-t ui-border-b">Announcements</button>
                                        </div>
                                        <div class="ui-tab-content ui-set-absolute ui-set-h ui-scroll-v ui-open ui-open-ease" style="top: 64px; bottom: 15px;">
                                            <ul class="ui-timeline ui-timeline-l ui-m-15-h ui-timeline-no-h-lines">
                                                <li>Etiam bibendum molestie lectus sit amet aliquet. Pellentesque non lacus iaculis, tristique velit.</li>
                                                <li>
                                                    <span class="ui-avatar-holder ui-circle ui-hover-r-more-2nd ui-ease-2nd-layout">
                                                        <a href="#"><img class="ui-avatar ui-border-dual ui-circle" src="img/profile-image.jpg" alt=""></a>
                                                        <a href="#"><img class="ui-avatar ui-border-dual ui-circle" src="img/profile-image2.jpg" alt=""></a>
                                                        <a href="#"><img class="ui-avatar ui-border-dual ui-circle" src="img/profile-image3.jpg" alt=""></a>
                                                        <a class="ui-btn ui-btn-square ui-m-5-r ui-circle ui-ease-btn" href="#">+3</a>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span class="ui-gallery ui-m-5-t ui-ease-gallery">
                                                        <a class="ui-photo ui-m-1-h ui-round" href="img/image_01.jpg"><img src="img/image_01.jpg" height="38" alt=""></a>
                                                        <a class="ui-photo ui-m-1-h ui-round" href="img/image_02.jpg"><img src="img/image_02.jpg" height="38" alt=""></a>
                                                        <a class="ui-photo ui-m-1-h ui-round" href="img/image_03.jpg"><img src="img/image_03.jpg" height="38" alt=""></a>
                                                        <a class="ui-photo ui-m-1-h ui-round" href="img/image_04.jpg"><img src="img/image_04.jpg" height="38" alt=""></a>
                                                        <a class="ui-photo ui-m-1-h ui-round" href="img/image_05.jpg"><img src="img/image_05.jpg" height="38" alt=""></a>
                                                        <a class="ui-photo ui-m-1-h ui-round" href="img/image_06.jpg"><img src="img/image_06.jpg" height="38" alt=""></a>
                                                        <a class="ui-photo ui-m-1-h ui-round" href="img/image_07.jpg"><img src="img/image_07.jpg" height="38" alt=""></a>
                                                        <a class="ui-photo ui-m-1-h ui-round" href="img/image_08.jpg"><img src="img/image_08.jpg" height="38" alt=""></a>
                                                        <a class="ui-photo ui-m-1-h ui-round" href="img/image_09.jpg"><img src="img/image_09.jpg" height="38" alt=""></a>
                                                    </span>
                                                </li>
                                                <li>Aenean imperdiet dolor nibh, a porta nunc maximus vitae.</li>
                                                <li>Pellentesque lobortis leo vitae magna sollicitudin, at tincidunt felis tempor.</li>
                                                <li>
                                                    <span class="ui-icons-xl ui-icons-no-opacity ui-ease-1st-btn">
                                                        <a class="ui-btn ui-btn-square ui-p-5-v ui-round" href="#">
                                                            <svg class="ui-icon ui-m-2-v"><use href="#file-pdf-fill"/></svg>
                                                        </a>
                                                        <a class="ui-btn ui-btn-square ui-p-5-v ui-round" href="#">
                                                            <svg class="ui-icon ui-m-2-v"><use href="#file-xls-fill"/></svg>
                                                        </a>
                                                        <a class="ui-btn ui-btn-square ui-p-5-v ui-round" href="#">
                                                            <svg class="ui-icon ui-m-2-v"><use href="#file-zip-fill"/></svg>
                                                        </a>
                                                    </span>
                                                </li>
                                                <li>Aenean id tellus eu felis fermentum semper. Morbi et erat tincidunt, molestie leo a, accumsan dui</li>
                                                <li>Pellentesque lobortis leo vitae magna sollicitudin, at tincidunt felis tempor.</li>
                                            </ul>
                                        </div>
                                        <div class="ui-tab-content ui-set-absolute ui-set-h ui-scroll-v" style="top: 64px; bottom: 15px;">
                                            <ul class="ui-timeline ui-timeline-l ui-m-15-h ui-timeline-no-h-lines">
                                                <li>Nullam sit amet sagittis nisi. Phasellus libero dolor, aliquam eu erat sed.</li>
                                                <li>Aenean id tellus eu felis fermentum semper. Morbi et erat tincidunt, molestie leo a, accumsan dui</li>
                                                <li>Pellentesque lobortis leo vitae magna sollicitudin, at tincidunt felis tempor.</li>
                                                <li>Duis libero massa, dapibus sit amet leo malesuada, pharetra iaculis sapien.</li>
                                                <li>Pellentesque lobortis leo vitae magna sollicitudin, at tincidunt felis tempor.</li>
                                                <li>Etiam bibendum molestie lectus sit amet aliquet. Pellentesque non lacus iaculis, tristique velit.</li>
                                                <li>Aenean imperdiet dolor nibh, a porta nunc maximus vitae.</li>
                                                <li>Pellentesque lobortis leo vitae magna sollicitudin, at tincidunt felis tempor.</li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div class="ui-col-xl-3 ui-col-lg-6 ui-col-12 ui-col-md-6">
                                <div class="ui-card ui-full-h ui-p-15 ui-round ui-shadow-lg">
                                    <div class="ui-dropdown ui-menu-l ui-float-r ui-ease-dropdown">
                                        <button class="ui-btn ui-btn-square ui-btn-ghost ui-round">
                                            <svg class="ui-icon"><use href="#ellipsis-h"/></svg>
                                        </button>
                                        <ul class="ui-dropdown-menu ui-dropdown-has-icon ui-round ui-shadow-lg">
                                            <li><a href="#"><svg class="ui-menu-icon ui-icon"><use href="#calendar-plus"/></svg>Add to Your Calendar</a></li>
                                            <li><a href="#"><svg class="ui-menu-icon ui-icon"><use href="#eye"/></svg>See All Events</a></li>
                                        </ul>
                                    </div>
                                    <h4 class="ui-h4 ui-align-l ui-m-10-t">Events</h4>
                                    <div class="ui-calendar ui-ease-calendar ui-round ui-no-p" data-ui-src="json/calendar.json" data-ui-date="2019,6"></div>
                                </div>
                            </div>

                            <div class="ui-col-xl-6 ui-col-lg-6 ui-col-12 ui-col-md-6">
                                <div class="ui-card ui-full-h ui-p-15 ui-round ui-shadow-lg">
                                    <div class="ui-dropdown ui-menu-l ui-float-r ui-ease-dropdown">
                                        <button class="ui-btn ui-btn-square ui-btn-ghost ui-round">
                                            <svg class="ui-icon"><use href="#ellipsis-h"/></svg>
                                        </button>
                                        <ul class="ui-dropdown-menu ui-dropdown-has-icon ui-round ui-shadow-lg">
                                            <li><a href="#"><svg class="ui-menu-icon ui-icon"><use href="#file-pdf"/></svg>Download PDF</a></li>
                                            <li><a href="#"><svg class="ui-menu-icon ui-icon"><use href="#file-xls"/></svg>Download Excel</a></li>
                                            <li><a href="#"><svg class="ui-menu-icon ui-icon"><use href="#eye"/></svg>See All Experts</a></li>
                                        </ul>
                                    </div>
                                    <h4 class="ui-h4 ui-align-l ui-m-10-t">Experts</h4>
                                    <div class="ui-datatable ui-datatable-hover ui-theme-gray ui-ease-datatable">

                                        <div class="ui-row ui-no-row-gap-v ui-row-gap-sm-h">
                                            <div class="ui-col-6 ui-lg-fluid">
                                                <div class="ui-input ui-form-icon-all ui-round ui-no-border ui-fill-light-100 ui-form-has-clear ui-ease-form">
                                                    <svg class="ui-icon ui-form-icon-l"><use href="#search"/></svg>
                                                    <button class="ui-form-clear">
                                                        <svg class="ui-icon"><use href="#remove"/></svg>
                                                    </button>
                                                    <input class="ui-datatable-filter" type="text" placeholder="Search">
                                                </div>
                                                <span class="ui-sp-5 ui-hidden-lg"></span>
                                            </div>
                                            <div class="ui-col-lg-3 ui-col-6 ui-no-fluid">
                                                <div class="ui-select ui-round ui-no-border ui-fill-light-100 ui-ease-form">
                                                    <svg class="ui-icon"><use href="#angle-down"/></svg>
                                                    <select class="ui-datatable-filter" data-ui-index="2">
                                                        <option value="">Filter</option>
                                                        <option>Starting</option>
                                                        <option>Waiting</option>
                                                        <option>Expert</option>
                                                        <option>First Audit</option>
                                                        <option>Second Audit</option>
                                                        <option>Paused</option>
                                                        <option>Completed</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="ui-col-lg-3 ui-col-6 ui-no-fluid">
                                                <div class="ui-dropdown ui-menu-l ui-block ui-ease-dropdown">
                                                    <button class="ui-btn ui-align-l ui-round">
                                                        <span>
                                                            <svg class="ui-icon"><use href="#sort"/></svg> Sort
                                                        </span>
                                                    </button>
                                                    <ul class="ui-dropdown-menu ui-round ui-shadow-lg">
                                                        <li>
                                                            <label data-ui-sort="1">
                                                                <svg class="ui-icon"><use href="#sort"/></svg>
                                                                <input type="radio" name="s">By Name
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label data-ui-sort="2">
                                                                <svg class="ui-icon"><use href="#sort"/></svg>
                                                                <input type="radio" name="s">By Step
                                                            </label>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <select class="ui-datatable-show ui-hidden">
                                                    <option>4</option>
                                                </select>
                                            </div>
                                        </div>

                                        <span class="ui-sp-15"></span>

                                        <div class="ui-datatable-container">

                                            <div class="ui-datatable-content ui-no-border ui-round" data-ui-val="John Atkinson|Paused">
                                                <div class="ui-row ui-no-row-gap ui-no-fluid">
                                                    <div class="ui-col-5">
                                                        <img class="ui-avatar-sm ui-m-10-r ui-hidden-xs ui-circle" src="img/profile-image.jpg" alt="">John Atkinson
                                                    </div>
                                                    <div class="ui-col-7">
                                                        <ul class="ui-steps-bar ui-steps-icon">
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Starting"><use href="#check-circle"/></svg>1:S
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Waiting"><use href="#check-circle"/></svg>2:W
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Expert"><use href="#check-circle"/></svg>3:E
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="First Audit"><use href="#check-circle"/></svg>4:F
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Second Audit"><use href="#check-circle"/></svg>5:S
                                                            </li>
                                                            <li class="ui-active">
                                                                <svg class="ui-icon" data-ui-tooltip title="Paused"><use href="#clock"/></svg>6:P
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Delayed"><use href="#check-circle"/></svg>7:C
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="ui-datatable-content ui-no-border ui-round" data-ui-val="Mary Doe|Waiting">
                                                <div class="ui-row ui-no-row-gap ui-no-fluid">
                                                    <div class="ui-col-5">
                                                        <img class="ui-avatar-sm ui-m-10-r ui-hidden-xs ui-circle" src="img/profile-image2.jpg" alt="">Mary Doe
                                                    </div>
                                                    <div class="ui-col-7">
                                                        <ul class="ui-steps-bar ui-steps-icon ui-theme-yellow ui-text">
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Starting"><use href="#check-circle"/></svg>1:S
                                                            </li>
                                                            <li class="ui-active">
                                                                <svg class="ui-icon" data-ui-tooltip title="Waiting"><use href="#alert-circle"/></svg>2:W
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Expert"><use href="#check-circle"/></svg>3:E
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="First Audit"><use href="#check-circle"/></svg>4:F
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Second Audit"><use href="#check-circle"/></svg>5:S
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Paused"><use href="#check-circle"/></svg>6:P
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Delayed"><use href="#check-circle"/></svg>7:C
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="ui-datatable-content ui-no-border ui-round" data-ui-val="Mike Taylor|Completed">
                                                <div class="ui-row ui-no-row-gap ui-no-fluid">
                                                    <div class="ui-col-5">
                                                        <img class="ui-avatar-sm ui-m-10-r ui-hidden-xs ui-circle" src="img/profile-image3.jpg" alt="">Mike Taylor
                                                    </div>
                                                    <div class="ui-col-7">
                                                        <ul class="ui-steps-bar ui-steps-icon">
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Starting"><use href="#check-circle"/></svg>1:S
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Waiting"><use href="#check-circle"/></svg>2:W
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Expert"><use href="#check-circle"/></svg>3:E
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="First Audit"><use href="#check-circle"/></svg>4:F
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Second Audit"><use href="#check-circle"/></svg>5:S
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Paused"><use href="#check-circle"/></svg>6:P
                                                            </li>
                                                            <li class="ui-active">
                                                                <svg class="ui-icon" data-ui-tooltip title="Delayed"><use href="#clock"/></svg>7:C
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="ui-datatable-content ui-no-border ui-round" data-ui-val="Tony Starky|Paused">
                                                <div class="ui-row ui-no-row-gap ui-no-fluid">
                                                    <div class="ui-col-5">
                                                        <img class="ui-avatar-sm ui-m-10-r ui-hidden-xs ui-circle" src="img/profile-image.jpg" alt="">Tony Starky
                                                    </div>
                                                    <div class="ui-col-7">
                                                        <ul class="ui-steps-bar ui-steps-icon">
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Starting"><use href="#check-circle"/></svg>1:S
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Waiting"><use href="#check-circle"/></svg>2:W
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Expert"><use href="#check-circle"/></svg>3:E
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="First Audit"><use href="#check-circle"/></svg>4:F
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Second Audit"><use href="#check-circle"/></svg>5:S
                                                            </li>
                                                            <li class="ui-active">
                                                                <svg class="ui-icon" data-ui-tooltip title="Paused"><use href="#clock"/></svg>>6:P
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Delayed"><use href="#check-circle"/></svg>7:C
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="ui-datatable-content ui-no-border ui-round" data-ui-val="John Atkinson|Paused">
                                                <div class="ui-row ui-no-row-gap ui-no-fluid">
                                                    <div class="ui-col-5">
                                                        <img class="ui-avatar-sm ui-m-10-r ui-hidden-xs ui-circle" src="img/profile-image.jpg" alt="">John Atkinson
                                                    </div>
                                                    <div class="ui-col-7">
                                                        <ul class="ui-steps-bar ui-steps-icon">
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Starting"><use href="#check-circle"/></svg>1:S
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Waiting"><use href="#check-circle"/></svg>2:W
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Expert"><use href="#check-circle"/></svg>3:E
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="First Audit"><use href="#check-circle"/></svg>4:F
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Second Audit"><use href="#check-circle"/></svg>5:S
                                                            </li>
                                                            <li class="ui-active">
                                                                <svg class="ui-icon" data-ui-tooltip title="Paused"><use href="#clock"/></svg>6:P
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Delayed"><use href="#check-circle"/></svg>7:C
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="ui-datatable-content ui-no-border ui-round" data-ui-val="Mary Doe|Waiting">
                                                <div class="ui-row ui-no-row-gap ui-no-fluid">
                                                    <div class="ui-col-5">
                                                        <img class="ui-avatar-sm ui-m-10-r ui-hidden-xs ui-circle" src="img/profile-image2.jpg" alt="">Mary Doe
                                                    </div>
                                                    <div class="ui-col-7">
                                                        <ul class="ui-steps-bar ui-steps-icon ui-theme-yellow ui-text">
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Starting"><use href="#check-circle"/></svg>1:S
                                                            </li>
                                                            <li class="ui-active">
                                                                <svg class="ui-icon" data-ui-tooltip title="Waiting"><use href="#alert-circle"/></svg>2:W
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Expert"><use href="#check-circle"/></svg>3:E
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="First Audit"><use href="#check-circle"/></svg>4:F
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Second Audit"><use href="#check-circle"/></svg>5:S
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Paused"><use href="#check-circle"/></svg>6:P
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Delayed"><use href="#check-circle"/></svg>7:C
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="ui-datatable-content ui-no-border ui-round" data-ui-val="Mike Taylor|Completed">
                                                <div class="ui-row ui-no-row-gap ui-no-fluid">
                                                    <div class="ui-col-5">
                                                        <img class="ui-avatar-sm ui-m-10-r ui-hidden-xs ui-circle" src="img/profile-image3.jpg" alt="">Mike Taylor
                                                    </div>
                                                    <div class="ui-col-7">
                                                        <ul class="ui-steps-bar ui-steps-icon">
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Starting"><use href="#check-circle"/></svg>1:S
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Waiting"><use href="#check-circle"/></svg>2:W
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Expert"><use href="#check-circle"/></svg>3:E
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="First Audit"><use href="#check-circle"/></svg>4:F
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Second Audit"><use href="#check-circle"/></svg>5:S
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Paused"><use href="#check-circle"/></svg>6:P
                                                            </li>
                                                            <li class="ui-active">
                                                                <svg class="ui-icon" data-ui-tooltip title="Delayed"><use href="#clock"/></svg>7:C
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="ui-datatable-content ui-no-border ui-round" data-ui-val="Tony Starky|Paused">
                                                <div class="ui-row ui-no-row-gap ui-no-fluid">
                                                    <div class="ui-col-5">
                                                        <img class="ui-avatar-sm ui-m-10-r ui-hidden-xs ui-circle" src="img/profile-image.jpg" alt="">Tony Starky
                                                    </div>
                                                    <div class="ui-col-7">
                                                        <ul class="ui-steps-bar ui-steps-icon">
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Starting"><use href="#check-circle"/></svg>1:S
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Waiting"><use href="#check-circle"/></svg>2:W
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Expert"><use href="#check-circle"/></svg>3:E
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="First Audit"><use href="#check-circle"/></svg>4:F
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Second Audit"><use href="#check-circle"/></svg>5:S
                                                            </li>
                                                            <li class="ui-active">
                                                                <svg class="ui-icon" data-ui-tooltip title="Paused"><use href="#clock"/></svg>>6:P
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Delayed"><use href="#check-circle"/></svg>7:C
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="ui-datatable-content ui-no-border ui-round" data-ui-val="John Atkinson|Paused">
                                                <div class="ui-row ui-no-row-gap ui-no-fluid">
                                                    <div class="ui-col-5">
                                                        <img class="ui-avatar-sm ui-m-10-r ui-hidden-xs ui-circle" src="img/profile-image.jpg" alt="">John Atkinson
                                                    </div>
                                                    <div class="ui-col-7">
                                                        <ul class="ui-steps-bar ui-steps-icon">
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Starting"><use href="#check-circle"/></svg>1:S
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Waiting"><use href="#check-circle"/></svg>2:W
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Expert"><use href="#check-circle"/></svg>3:E
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="First Audit"><use href="#check-circle"/></svg>4:F
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Second Audit"><use href="#check-circle"/></svg>5:S
                                                            </li>
                                                            <li class="ui-active">
                                                                <svg class="ui-icon" data-ui-tooltip title="Paused"><use href="#clock"/></svg>6:P
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Delayed"><use href="#check-circle"/></svg>7:C
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="ui-datatable-content ui-no-border ui-round" data-ui-val="Mary Doe|Waiting">
                                                <div class="ui-row ui-no-row-gap ui-no-fluid">
                                                    <div class="ui-col-5">
                                                        <img class="ui-avatar-sm ui-m-10-r ui-hidden-xs ui-circle" src="img/profile-image2.jpg" alt="">Mary Doe
                                                    </div>
                                                    <div class="ui-col-7">
                                                        <ul class="ui-steps-bar ui-steps-icon ui-theme-yellow ui-text">
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Starting"><use href="#check-circle"/></svg>1:S
                                                            </li>
                                                            <li class="ui-active">
                                                                <svg class="ui-icon" data-ui-tooltip title="Waiting"><use href="#alert-circle"/></svg>2:W
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Expert"><use href="#check-circle"/></svg>3:E
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="First Audit"><use href="#check-circle"/></svg>4:F
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Second Audit"><use href="#check-circle"/></svg>5:S
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Paused"><use href="#check-circle"/></svg>6:P
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Delayed"><use href="#check-circle"/></svg>7:C
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="ui-datatable-content ui-no-border ui-round" data-ui-val="Mike Taylor|Completed">
                                                <div class="ui-row ui-no-row-gap ui-no-fluid">
                                                    <div class="ui-col-5">
                                                        <img class="ui-avatar-sm ui-m-10-r ui-hidden-xs ui-circle" src="img/profile-image3.jpg" alt="">Mike Taylor
                                                    </div>
                                                    <div class="ui-col-7">
                                                        <ul class="ui-steps-bar ui-steps-icon">
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Starting"><use href="#check-circle"/></svg>1:S
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Waiting"><use href="#check-circle"/></svg>2:W
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Expert"><use href="#check-circle"/></svg>3:E
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="First Audit"><use href="#check-circle"/></svg>4:F
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Second Audit"><use href="#check-circle"/></svg>5:S
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Paused"><use href="#check-circle"/></svg>6:P
                                                            </li>
                                                            <li class="ui-active">
                                                                <svg class="ui-icon" data-ui-tooltip title="Delayed"><use href="#clock"/></svg>7:C
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="ui-datatable-content ui-no-border ui-round" data-ui-val="Tony Starky|Paused">
                                                <div class="ui-row ui-no-row-gap ui-no-fluid">
                                                    <div class="ui-col-5">
                                                        <img class="ui-avatar-sm ui-m-10-r ui-hidden-xs ui-circle" src="img/profile-image.jpg" alt="">Tony Starky
                                                    </div>
                                                    <div class="ui-col-7">
                                                        <ul class="ui-steps-bar ui-steps-icon">
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Starting"><use href="#check-circle"/></svg>1:S
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Waiting"><use href="#check-circle"/></svg>2:W
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Expert"><use href="#check-circle"/></svg>3:E
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="First Audit"><use href="#check-circle"/></svg>4:F
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Second Audit"><use href="#check-circle"/></svg>5:S
                                                            </li>
                                                            <li class="ui-active">
                                                                <svg class="ui-icon" data-ui-tooltip title="Paused"><use href="#clock"/></svg>>6:P
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Delayed"><use href="#check-circle"/></svg>7:C
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="ui-datatable-content ui-no-border ui-round" data-ui-val="John Atkinson|Paused">
                                                <div class="ui-row ui-no-row-gap ui-no-fluid">
                                                    <div class="ui-col-5">
                                                        <img class="ui-avatar-sm ui-m-10-r ui-hidden-xs ui-circle" src="img/profile-image.jpg" alt="">John Atkinson
                                                    </div>
                                                    <div class="ui-col-7">
                                                        <ul class="ui-steps-bar ui-steps-icon">
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Starting"><use href="#check-circle"/></svg>1:S
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Waiting"><use href="#check-circle"/></svg>2:W
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Expert"><use href="#check-circle"/></svg>3:E
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="First Audit"><use href="#check-circle"/></svg>4:F
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Second Audit"><use href="#check-circle"/></svg>5:S
                                                            </li>
                                                            <li class="ui-active">
                                                                <svg class="ui-icon" data-ui-tooltip title="Paused"><use href="#clock"/></svg>6:P
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Delayed"><use href="#check-circle"/></svg>7:C
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="ui-datatable-content ui-no-border ui-round" data-ui-val="Mary Doe|Waiting">
                                                <div class="ui-row ui-no-row-gap ui-no-fluid">
                                                    <div class="ui-col-5">
                                                        <img class="ui-avatar-sm ui-m-10-r ui-hidden-xs ui-circle" src="img/profile-image2.jpg" alt="">Mary Doe
                                                    </div>
                                                    <div class="ui-col-7">
                                                        <ul class="ui-steps-bar ui-steps-icon ui-theme-yellow ui-text">
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Starting"><use href="#check-circle"/></svg>1:S
                                                            </li>
                                                            <li class="ui-active">
                                                                <svg class="ui-icon" data-ui-tooltip title="Waiting"><use href="#alert-circle"/></svg>2:W
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Expert"><use href="#check-circle"/></svg>3:E
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="First Audit"><use href="#check-circle"/></svg>4:F
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Second Audit"><use href="#check-circle"/></svg>5:S
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Paused"><use href="#check-circle"/></svg>6:P
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Delayed"><use href="#check-circle"/></svg>7:C
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="ui-datatable-content ui-no-border ui-round" data-ui-val="Mike Taylor|Completed">
                                                <div class="ui-row ui-no-row-gap ui-no-fluid">
                                                    <div class="ui-col-5">
                                                        <img class="ui-avatar-sm ui-m-10-r ui-hidden-xs ui-circle" src="img/profile-image3.jpg" alt="">Mike Taylor
                                                    </div>
                                                    <div class="ui-col-7">
                                                        <ul class="ui-steps-bar ui-steps-icon">
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Starting"><use href="#check-circle"/></svg>1:S
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Waiting"><use href="#check-circle"/></svg>2:W
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Expert"><use href="#check-circle"/></svg>3:E
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="First Audit"><use href="#check-circle"/></svg>4:F
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Second Audit"><use href="#check-circle"/></svg>5:S
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Paused"><use href="#check-circle"/></svg>6:P
                                                            </li>
                                                            <li class="ui-active">
                                                                <svg class="ui-icon" data-ui-tooltip title="Delayed"><use href="#clock"/></svg>7:C
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="ui-datatable-content ui-no-border ui-round" data-ui-val="Tony Starky|Paused">
                                                <div class="ui-row ui-no-row-gap ui-no-fluid">
                                                    <div class="ui-col-5">
                                                        <img class="ui-avatar-sm ui-m-10-r ui-hidden-xs ui-circle" src="img/profile-image.jpg" alt="">Tony Starky
                                                    </div>
                                                    <div class="ui-col-7">
                                                        <ul class="ui-steps-bar ui-steps-icon">
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Starting"><use href="#check-circle"/></svg>1:S
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Waiting"><use href="#check-circle"/></svg>2:W
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Expert"><use href="#check-circle"/></svg>3:E
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="First Audit"><use href="#check-circle"/></svg>4:F
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Second Audit"><use href="#check-circle"/></svg>5:S
                                                            </li>
                                                            <li class="ui-active">
                                                                <svg class="ui-icon" data-ui-tooltip title="Paused"><use href="#clock"/></svg>>6:P
                                                            </li>
                                                            <li>
                                                                <svg class="ui-icon" data-ui-tooltip title="Delayed"><use href="#check-circle"/></svg>7:C
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        <span class="ui-sp-10"></span>

                                        <div class="ui-row ui-no-row-gap ui-no-fluid">
                                            <div class="ui-col-4">
                                                <div class="ui-p-5-v">
                                                    Total <b class="ui-datatable-total"></b>
                                                </div>
                                            </div>
                                            <div class="ui-col-8 ui-align-r">
                                                <div class="ui-datatable-paging ui-paging ui-ease-1st-btn" data-ui-default="ui-btn ui-round" data-ui-active="ui-theme-sub ui-fill-dark-100"></div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <!-- dashboard: end -->

                </div>

                <div class="ui-tab-content">

                    <!-- forms: start -->
                    <div class="ui-fixed ui-fixed-xl">
                        <div class="ui-row">
                            <div class="ui-col-12">

                                <div class="ui-card ui-round ui-shadow-lg">

                                    <form action="#succesful">
                                        <div class="ui-card-side ui-p-5-h ui-border-b">
                                            <div class="ui-col-static ui-no-fluid">
                                                <div class="ui-row">
                                                    <div class="ui-col-12">
                                                        <h4 class="ui-h4 ui-align-l ui-m-4-t ui-m-3-b">Forms</h4>
                                                    </div>
                                                </div>
                                                <div class="ui-col-48 ui-p-5-v">

                                                    <div class="ui-dropdown ui-menu-l ui-ease-dropdown">
                                                        <button type="button" class="ui-btn ui-btn-lg ui-btn-ghost ui-btn-square ui-round">
                                                            <svg class="ui-icon"><use href="#ellipsis-h"/></svg>
                                                        </button>
                                                        <ul class="ui-dropdown-menu ui-dropdown-has-icon ui-round ui-shadow-lg">
                                                            <li><a href="#">
                                                                <svg class="ui-menu-icon ui-icon"><use href="#check"/></svg>
                                                                Save &amp; Continue</a>
                                                            </li>
                                                            <li><a href="#">
                                                                <svg class="ui-menu-icon ui-icon"><use href="#sign-out"/></svg>
                                                                Save &amp; Exit</a>
                                                            </li>
                                                            <li><a href="#">
                                                                <svg class="ui-menu-icon ui-icon"><use href="#pencil"/></svg>
                                                                Save &amp; Edit</a>
                                                            </li>
                                                            <li><a href="#">
                                                                <svg class="ui-menu-icon ui-icon"><use href="#plus"/></svg>
                                                                Save &amp; Add New</a>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="ui-card-side ui-p-15 ui-form-lg">
                                            <div class="ui-row">

                                                <div class="ui-col-8 ui-offset-2">
                                                    <h3 class="ui-h3">Customer Info</h3>
                                                </div>

                                                <div class="ui-col-3 ui-offset-2">
                                                    <label class="ui-form-info">First Name</label>
                                                </div>
                                                <div class="ui-col-5">
                                                    <div class="ui-input ui-round ui-border-dual ui-ease-form">
                                                        <input class="ui-required" type="text" placeholder="Enter first name" minlength="3">
                                                    </div>
                                                    <p class="ui-required-msg">Enter your first name.</p>
                                                </div>

                                                <div class="ui-col-3 ui-offset-2">
                                                    <label class="ui-form-info">Last Name</label>
                                                </div>
                                                <div class="ui-col-5">
                                                    <div class="ui-input ui-round ui-border-dual ui-ease-form">
                                                        <input class="ui-required" type="text" placeholder="Enter last name" minlength="3">
                                                    </div>
                                                    <p class="ui-required-msg">Enter your last name.</p>
                                                </div>

                                                <div class="ui-col-3 ui-offset-2">
                                                    <label class="ui-form-info">Contact Phone</label>
                                                </div>
                                                <div class="ui-col-5">
                                                    <div class="ui-input ui-form-icon-l ui-round ui-border-dual ui-ease-form">
                                                        <svg class="ui-icon"><use href="#phone"/></svg>
                                                        <input class="ui-required ui-number" type="text" placeholder="123-123-1234" minlength="12" maxlength="12">
                                                    </div>
                                                    <p class="ui-required-msg">Enter your phone.</p>
                                                </div>

                                                <div class="ui-col-3 ui-offset-2">
                                                    <label class="ui-form-info">Age</label>
                                                </div>
                                                <div class="ui-col-5">
                                                    <div class="ui-select ui-round ui-border-dual ui-ease-form">
                                                        <svg class="ui-icon"><use href="#angle-down"/></svg>
                                                        <select class="ui-required">
                                                            <option value="">Select your age</option>
                                                            <option>Under 20</option>
                                                            <option>21- 30</option>
                                                            <option>31 - 40</option>
                                                        </select>
                                                    </div>
                                                    <p class="ui-required-msg">Enter your age.</p>
                                                </div>

                                                <div class="ui-col-3 ui-offset-2">
                                                    <label class="ui-form-info">Email Address</label>
                                                </div>
                                                <div class="ui-col-5">
                                                    <div class="ui-input ui-form-icon-l ui-round ui-border-dual ui-ease-form">
                                                        <svg class="ui-icon"><use href="#at"/></svg>
                                                        <input class="ui-required" type="email">
                                                    </div>
                                                    <p class="ui-required-msg">Enter a valid email.</p>
                                                </div>

                                                <div class="ui-col-3 ui-offset-2">
                                                    <label class="ui-form-info">Company Site</label>
                                                </div>
                                                <div class="ui-col-5">
                                                    <div class="ui-form-holder ui-col-static ui-no-fluid">

                                                        <div class="ui-row ui-no-row-gap">
                                                            <div class="ui-col-12">
                                                                <div class="ui-input ui-form-icon-l ui-round ui-border-dual ui-ease-form">
                                                                    <svg class="ui-icon"><use href="#browser"/></svg>
                                                                    <input class="ui-required" type="text" placeholder="Site name">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="ui-col-200">
                                                            <div class="ui-select ui-round ui-border-dual ui-ease-form">
                                                                <svg class="ui-icon"><use href="#angle-down"/></svg>
                                                                <select>
                                                                    <option>.com</option>
                                                                    <option>.net</option>
                                                                    <option>.org</option>
                                                                </select>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <p class="ui-required-msg">Enter your site name.</p>
                                                </div>

                                                <div class="ui-sp-1 ui-m-20 ui-border-b ui-border-dashed"></div>

                                                <div class="ui-col-8 ui-offset-2">
                                                    <h3 class="ui-h3">Address Details</h3>
                                                </div>

                                                <div class="ui-col-3 ui-offset-2">
                                                    <label class="ui-form-info">Country</label>
                                                </div>
                                                <div class="ui-col-5">
                                                    <div data-ui-src="json/countries.json" data-ui-val="name" class="ui-autocomplete ui-input ui-form-icon-l ui-round ui-border-dual ui-ease-form">
                                                        <svg class="ui-icon"><use href="#keyboard"/></svg>
                                                        <input class="ui-required" type="text" placeholder="Type/Select your country" autocomplete="off" minlength="3">
                                                    </div>
                                                    <p class="ui-required-msg">Type/Select your country.</p>
                                                </div>

                                                <div class="ui-col-3 ui-offset-2">
                                                    <label class="ui-form-info">Address</label>
                                                </div>
                                                <div class="ui-col-5">
                                                    <div class="ui-textarea ui-round ui-border-dual ui-ease-form" data-ui-counter="1000">
                                                        <textarea class="ui-required" rows="3"></textarea>
                                                    </div>
                                                    <p class="ui-required-msg">Enter your address details.</p>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="ui-card-side ui-p-5-h ui-border-t">
                                            <div class="ui-row">
                                                <div class="ui-col-12 ui-align-r ui-xs-align-c ui-ease-1st-btn">

                                                    <button type="reset" class="ui-btn ui-btn-lg ui-btn-xs-fluid ui-round">
                                                        Cancel
                                                    </button>

                                                    <button type="submit" class="ui-btn ui-btn-lg ui-btn-xs-fluid ui-round ui-theme-green ui-fill-dark-100">
                                                        <svg class="ui-icon ui-m-5-r"><use href="#save"/></svg> Save
                                                    </button>

                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                </div>

                            </div>
                        </div>
                    </div>
                    <!-- forms: end -->

                </div>

            </div>
            <!-- layouts: end -->

        </div>

    </div>
</main>

<!-- mobile menu -->
<div class="ui-sidebar ui-sidebar-l ui-invert-bg ui-theme-base ui-fill-dark-100 ui-ease-layout ui-ease-in-out">
    <div class="ui-sidebar-title ui-no-p ui-border-b">
        <button class="ui-btn ui-btn-square ui-btn-lg ui-btn-ghost ui-circle ui-ease-btn ui-sidebar-close">
            <svg class="ui-icon ui-no-opacity"><use href="#remove"/></svg>
        </button>
        <img src="img/logo-udashboard.png" height="66" alt="">
    </div>
    <div class="ui-sidebar-content ui-no-p ui-scroll-v ui-scrollbar-faded"></div>
</div>

<!-- modal search -->
<div class="modal-search ui-modal ui-form-lg">
    <div class="ui-modal-container ui-xs-no-p">

        <form action="#successful">
            <h2 class="ui-h2">Search</h2>
            <p class="ui-highlight ui-font-16 ui-color-white-50 ui-xs-align-c ui-font-readable">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada purus eget enim tempus, sed faucibus ante blandit. Morbi a pharetra sapien.</p>

            <div class="ui-col-static ui-no-fluid">
                <div class="ui-row ui-no-row-gap-h">
                    <div class="ui-col-12 ui-ease-1st-form">
                        <div class="ui-input ui-form-has-clear ui-round-l ui-no-border ui-shadow-in-sm ui-theme-gray ui-fill-light-300">
                            <button type="button" class="ui-form-clear">
                                <svg class="ui-icon"><use href="#remove"/></svg>
                            </button>
                            <input class="ui-required" type="text" placeholder="Search">
                        </div>
                        <p class="ui-required-msg ui-font-16">Please, enter a keyword.</p>
                    </div>
                </div>
                <div class="ui-col-100 ui-col-xs-50 ui-p-10-v">
                    <button class="ui-btn ui-block ui-round-r ui-theme-sub ui-fill-dark-100 ui-ease-btn" type="submit">
                        <svg class="ui-icon"><use href="#search"/></svg>
                    </button>
                </div>
            </div>

            <div class="ui-row ui-xs-fluid ui-icons-xxl ui-block-2nd ui-icons-no-opacity ui-hover-t-more-2nd ui-icons-m-5-v ui-theme-base ui-ease-2nd-btn">
                <div class="ui-col-4 ui-p-10-b">
                    <a class="ui-btn ui-btn-multi ui-font-condensed ui-round ui-fill-dark-100" href="#">
                        <svg class="ui-icon"><use href="#news"/></svg>
                        <span class="ui-font-18 ui-block ui-m-5-t">News</span>
                        <span class="ui-color-white-50">589</span>
                    </a>
                </div>
                <div class="ui-col-4 ui-p-10-b">
                    <a class="ui-btn ui-btn-multi ui-font-condensed ui-round ui-fill-dark-100" href="#">
                        <svg class="ui-icon"><use href="#calendar-check"/></svg>
                        <span class="ui-font-18 ui-block ui-m-5-t">Events</span>
                        <span class="ui-color-white-50">219</span>
                    </a>
                </div>
                <div class="ui-col-4 ui-p-10-b">
                    <a class="ui-btn ui-btn-multi ui-font-condensed ui-round ui-fill-dark-100" href="#">
                        <svg class="ui-icon"><use href="#files"/></svg>
                        <span class="ui-font-18 ui-block ui-m-5-t">Documents</span>
                        <span class="ui-color-white-50">701</span>
                    </a>
                </div>
            </div>
        </form>

    </div>
</div>