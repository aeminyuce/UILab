<!-- custom CSS -->
<link rel="stylesheet" href="../css/custom/dashboard.css"/>

<!-- custom JS -->
<script src="../js/custom/dashboard.js"></script>

<main class="container no-gutter">

    <div class="col-static sm-fluid">

        <!-- sidebar -->
        <div class="sidebar col-250 set-relative visible-lg theme-panel ease-width ease-in-out">
            <div class="col-250 full-h set-fixed set-l ui-bg-dark-100 ease-layout ease-in-out">

                <div class="ui-bg-dark-300 set-relative">
                    <img src="img/logo-udashboard.png" width="194" height="62" alt="">
                    <button class="sidebar-hide opacity-more padding-10-h ease-btn set-absolute set-cy set-r" data-ui-tooltip title="Toggle Sidebar">
                        <svg class="icon"><use href="#angle-left"/></svg>
                    </button>
                </div>

                <div class="tabs align-l icons-no-opacity theme-panel2 ease-tabs ease-1st-btn scroll-v add-mobile-menu-l" data-ui-classes="ui-color">

                    <div class="padding-10">
                        <div class="small margin-10-b font-color-white-muted">Personal Activity</div>

                        <div class="btn-holder align-c round ease-1st-btn">
                            <button class="btn btn-multi padding-10-v round">

                                <span class="xx-large">13</span>
                                <span class="small font-color-white-muted margin-5-b block">Waiting</span>
                                <span class="progress-bar round border-dual">
                                    <span class="ui-bg-dark-100 stripe-light" style="width: 65%;"></span>
                                </span>

                            </button>
                            <button class="btn btn-multi padding-10-v round">

                                <span class="xx-large">3</span>
                                <span class="small font-color-white-muted margin-5-b block">Paused</span>
                                <span class="progress-bar round border-dual">
                                    <span class="ui-bg-dark-100 stripe-light" style="width: 35%;"></span>
                                </span>

                            </button>
                            <button class="btn btn-multi padding-10-v round">

                                <span class="xx-large">16</span>
                                <span class="small font-color-white-muted margin-5-b block">Delayed</span>
                                <span class="progress-bar round border-dual">
                                    <span class="ui-bg-dark-100 stripe-light" style="width: 75%;"></span>
                                </span>

                            </button>
                        </div>
                    </div>

                    <a href="#" class="btn btn-lg btn-ghost block margin-10-v">
                        <svg class="icon margin-15-r"><use href="#grid-masonry"/></svg>
                        Dashboard
                    </a>

                    <button class="tab btn-toggle btn btn-lg btn-ghost padding-10-r block ui-color active">
                        <svg class="icon margin-15-r"><use href="#users"/></svg>
                        <svg class="toggle-icon icon right"><use href="#angle-down"/></svg>
                        Employees
                    </button>

                    <div class="tab-content padding-15-v padding-3-l open open-ease">
                        <ul class="tabs list-spacer-15 padding-20-l ease-2nd-btn" data-ui-classes="ui-color">
                            <li>
                                <a class="tab btn-toggle opacity" href="#">
                                    <svg class="toggle-icon icon margin-10-r right"><use href="#arrow-down"/></svg>
                                    Managers
                                </a>
                                <ul class="tab-content list-spacer-15 padding-20-l margin-20-b ease-2nd-btn">
                                    <li><a class="opacity" href="#">Search</a></li>
                                    <li><a class="opacity" href="#">Change Group</a></li>
                                    <li><a class="opacity" href="#">Add/Remove Managers</a></li>
                                </ul>
                            </li>
                            <li>
                                <a class="tab btn-toggle opacity" href="#">
                                    <svg class="toggle-icon icon margin-10-r right"><use href="#arrow-down"/></svg>
                                    Team Leaders
                                </a>
                                <ul class="tab-content list-spacer-15 padding-20-l margin-20-b ease-2nd-btn">
                                    <li><a class="opacity" href="#">Search</a></li>
                                    <li><a class="opacity" href="#">Change Team</a></li>
                                    <li><a class="opacity" href="#">Add/Remove Team Leaders</a></li>
                                </ul>
                            </li>
                            <li><a class="opacity" href="#">Teams</a></li>
                            <li><a class="opacity" href="#">Human Resources</a></li>
                            <li><a class="opacity" href="#">Annual Leaves</a></li>
                        </ul>
                    </div>

                    <button class="tab btn-toggle btn btn-lg btn-ghost padding-10-r block">
                        <svg class="icon margin-15-r"><use href="#moneys"/></svg>
                        <svg class="toggle-icon icon right"><use href="#angle-down"/></svg>
                        Payments
                    </button>
                    <div class="tab-content padding-15-v padding-3-l">
                    <ul class="list-spacer-15 padding-20-l ease-2nd-btn">
                            <li><a class="opacity" href="#">New Payment</a></li>
                            <li><a class="opacity" href="#">Recent Payments</a></li>
                            <li><a class="opacity" href="#">Last Month</a></li>
                            <li><a class="opacity" href="#">Last Year</a></li>
                            <li><a class="opacity" href="#">Annual Profits</a></li>
                        </ul>
                    </div>

                    <button class="tab btn-toggle btn btn-lg btn-ghost padding-10-r block">
                        <svg class="icon margin-15-r"><use href="#calendar-check"/></svg>
                        <svg class="toggle-icon icon right"><use href="#angle-down"/></svg>
                        Events
                    </button>
                    <div class="tab-content padding-15-v padding-3-l">
                        <ul class="list-spacer-15 padding-20-l ease-2nd-btn">
                            <li><a class="opacity" href="#">New Event</a></li>
                            <li><a class="opacity" href="#">Recent Activities</a></li>
                            <li><a class="opacity" href="#">This Week</a></li>
                            <li><a class="opacity" href="#">Statistics</a></li>
                        </ul>
                    </div>

                    <button class="tab btn-toggle btn btn-lg btn-ghost padding-10-r block">
                        <svg class="icon margin-15-r"><use href="#files"/></svg>
                        <svg class="toggle-icon icon right"><use href="#angle-down"/></svg>
                        Documents
                    </button>
                    <div class="tab-content padding-15-v padding-3-l">
                        <ul class="list-spacer-15 padding-20-l ease-2nd-btn">
                            <li><a class="opacity" href="#">New Document</a></li>
                            <li><a class="opacity" href="#">Members</a></li>
                            <li><a class="opacity" href="#">Groups</a></li>
                            <li><a class="opacity" href="#">Projects</a></li>
                            <li><a class="opacity" href="#">Other Files</a></li>
                            <li><a class="opacity" href="#">Archive</a></li>
                        </ul>
                    </div>

                    <button class="tab btn-toggle btn btn-lg btn-ghost padding-10-r block">
                        <svg class="icon margin-15-r"><use href="#chart-line"/></svg>
                        <svg class="toggle-icon icon right"><use href="#angle-down"/></svg>
                        Statistics
                    </button>
                    <div class="tab-content padding-15-v padding-3-l">
                        <ul class="list-spacer-15 padding-20-l ease-2nd-btn">
                            <li><a class="opacity" href="#">Sales</a></li>
                            <li><a class="opacity" href="#">Profit</a></li>
                            <li><a class="opacity" href="#">Registrations</a></li>
                            <li><a class="opacity" href="#">Sponsors</a></li>
                        </ul>
                    </div>

                    <button class="tab btn-toggle btn btn-lg btn-ghost padding-10-r block">
                        <svg class="icon margin-15-r"><use href="#doc"/></svg>
                        <svg class="toggle-icon icon right"><use href="#angle-down"/></svg>
                        Reports
                    </button>
                    <div class="tab-content padding-15-v padding-3-l">
                        <ul class="list-spacer-15 padding-20-l ease-2nd-btn">
                            <li><a class="opacity" href="#">New Report</a></li>
                            <li><a class="opacity" href="#">Market Research</a></li>
                            <li><a class="opacity" href="#">Industry Data</a></li>
                            <li><a class="opacity" href="#">Finance Report</a></li>
                            <li><a class="opacity" href="#">Gross Profit</a></li>
                            <li><a class="opacity" href="#">Cumulative Losses</a></li>
                        </ul>
                    </div>

                    <button class="tab btn-toggle btn btn-lg btn-ghost padding-10-r block">
                        <svg class="icon margin-15-r"><use href="#truck"/></svg>
                        <svg class="toggle-icon icon right"><use href="#angle-down"/></svg>
                        Orders
                    </button>
                    <div class="tab-content padding-15-v padding-3-l">
                        <ul class="list-spacer-15 padding-20-l ease-2nd-btn">
                            <li><a class="opacity" href="#">New Order</a></li>
                            <li><a class="opacity" href="#">Activity</a></li>
                            <li><a class="opacity" href="#">Delivered</a></li>
                            <li><a class="opacity" href="#">Dispatched</a></li>
                        </ul>
                    </div>

                    <span class="sp-15"></span>

                    <div class="btn-list margin-10 icons-margin-10-r form-lg ease-1st-btn">
                        <button class="btn round">
                            <svg class="icon"><use href="#shield"/></svg>
                            Administration
                        </button>
                        <button class="btn round">
                            <svg class="icon"><use href="#clock"/></svg>
                            Recent History
                        </button>
                        <button class="btn round">
                            <svg class="icon"><use href="#settings"/></svg>
                            Tools
                        </button>
                    </div>

                </div>

            </div>
        </div>

        <div class="row">

            <!-- header: start -->
            <header class="col-12 align-r icons-no-opacity shadow-sm form-lg ease-layout sidebar-opened" data-ui-classes="shadow-lg">

                <div class="align-c left ease-1st-btn">
                    <button class="sidebar-show btn font-color-black-muted btn-ghost padding-10 circle visible-lg hidden" data-ui-tooltip title="Toggle Sidebar">
                        <svg class="icon"><use href="#angle-right"/></svg>
                    </button>
                    <button class="btn font-color-black-muted btn-ghost padding-10 circle show-mobile-menu-l hidden-lg" data-ui-tooltip title="Show Sidebar" data-ui-only="desktop">
                        <svg class="icon"><use href="#bars-left"/></svg>
                    </button>
                    <button class="btn font-color-black-muted btn-ghost padding-10 circle" onclick="ui.modal.open({source: '.search', bg: 'false'});" data-ui-tooltip data-ui-only="desktop" title="Search">
                        <svg class="icon"><use href="#search"/></svg>
                    </button>
                    <div class="dropdown nav ease-dropdown">
                        <button class="btn font-color-black-muted btn-ghost padding-10 circle hidden-sm">
                            My Jobs
                            <svg class="toggle-icon icon margin-5-l"><use href="#angle-down"/></svg>
                        </button>
                        <button class="btn font-color-black-muted btn-ghost padding-10 circle visible-sm">
                            <svg class="icon"><use href="#angle-down"/></svg>
                        </button>
                        <ul class="content list-column-2 has-icon round shadow-lg">
                            <li><a href="#"><b class="list-icon">23</b> Waiting</a></li>
                            <li><a href="#"><b class="list-icon">258</b> Expert</a></li>
                            <li><a href="#"><b class="list-icon">49</b> On Audit</a></li>
                            <li><a href="#"><b class="list-icon">68</b> Delayed</a></li>
                            <li><a href="#"><b class="list-icon">23</b> Waiting</a></li>
                            <li><a href="#"><b class="list-icon">258</b> Expert</a></li>
                            <li><a href="#"><b class="list-icon">49</b> On Audit</a></li>
                            <li><a href="#"><b class="list-icon">68</b> Delayed</a></li>
                        </ul>
                    </div>
                </div>

                <div class="inline">
                    <div class="dropdown menu-l ease-dropdown">
                        <button class="btn font-color-black-muted btn-square btn-ghost circle" data-ui-notifier data-ui-tooltip="l" data-ui-only="desktop" title="Personal Logs">
                            <svg class="icon"><use href="#grid-column"/></svg>
                        </button>
                        <div class="content round shadow-lg no-scroll">
                            <div class="tabs xs-full-width theme-panel2" data-ui-classes="border-b border-lg ui-border ui-color" style="min-width: 300px;">

                                <div class="btn-holder font-color-black-muted align-c border-b ease-1st-btn">
                                    <button class="tab btn btn-ghost round-t border-b border-lg ui-border ui-color active" data-ui-tooltip data-ui-only="desktop" title="Favorites">
                                        <svg class="icon ui-no"><use href="#star"/></svg>
                                    </button>
                                    <button class="tab btn btn-ghost round-t" data-ui-tooltip data-ui-only="desktop" title="History">
                                        <svg class="icon ui-no"><use href="#history"/></svg>
                                    </button>
                                </div>
                                <div class="tab-content align-l scroll-v open open-ease" style="max-height: 420px;">
                                    <ul class="timeline side-l margin-15-h hide-h-lines">
                                        <li>Etiam bibendum molestie lectus sit amet aliquet. Pellentesque non lacus iaculis, tristique velit.</li>
                                        <li>
                                            Lorem ipsum dolor sit amet.
                                            <span class="photos-holder margin-5-t hover-scale-more-2nd ease-2nd-layout">
                                                <a href="#"><img class="img-photo border-lg circle" src="img/profile-image.jpg" alt=""></a>
                                                <a href="#"><img class="img-photo border-lg circle" src="img/profile-image2.jpg" alt=""></a>
                                                <a href="#"><img class="img-photo border-lg circle" src="img/profile-image3.jpg" alt=""></a>
                                                <a class="btn no-margin circle ease-btn" href="#">+12</a>
                                            </span>
                                        </li>
                                        <li>Aenean imperdiet dolor nibh, a porta nunc maximus vitae.</li>
                                        <li>Pellentesque lobortis leo vitae magna sollicitudin, at tincidunt felis tempor.</li>
                                        <li>
                                            Nullam sit amet sagittis nisi.
                                            <span class="icons-xl margin-5-t block ease-1st-btn">
                                                <a class="btn btn-square padding-4-v round" href="#">
                                                    <svg class="icon"><use href="#file-pdf"/></svg>
                                                </a>
                                                <a class="btn btn-square padding-4-v round" href="#">
                                                    <svg class="icon"><use href="#file-xls"/></svg>
                                                </a>
                                                <a class="btn btn-square padding-4-v round" href="#">
                                                    <svg class="icon"><use href="#file-zip"/></svg>
                                                </a>
                                            </span>
                                        </li>
                                        <li>Aenean id tellus eu felis fermentum semper. Morbi et erat tincidunt, molestie leo a, accumsan dui</li>
                                        <li>Pellentesque lobortis leo vitae magna sollicitudin, at tincidunt felis tempor.</li>
                                        <li>Duis libero massa, dapibus sit amet leo malesuada, pharetra iaculis sapien.</li>
                                        <li>Pellentesque lobortis leo vitae magna sollicitudin, at tincidunt felis tempor.</li>
                                    </ul>
                                </div>
                                <div class="tab-content align-l scroll-v" style="max-height: 420px;">
                                    <ul class="timeline side-l margin-15-h hide-h-lines">
                                        <li>Nullam sit amet sagittis nisi. Phasellus libero dolor, aliquam eu erat sed.</li>
                                        <li>
                                            Lorem ipsum dolor sit amet.
                                            <span class="photo-gallery margin-5-t ease-photo-gallery">
                                                <a class="img margin-1-h round" href="img/image_01.jpg"><img src="img/thumb_01.jpg" height="38" alt=""></a>
                                                <a class="img margin-1-h round" href="img/image_02.jpg"><img src="img/thumb_02.jpg" height="38" alt=""></a>
                                                <a class="img margin-1-h round" href="img/image_03.jpg"><img src="img/thumb_03.jpg" height="38" alt=""></a>
                                                <a class="img margin-1-h round" href="img/image_04.jpg"><img src="img/thumb_04.jpg" height="38" alt=""></a>
                                                <a class="img margin-1-h round" href="img/image_05.jpg"><img src="img/thumb_05.jpg" height="38" alt=""></a>
                                                <a class="img margin-1-h round" href="img/image_06.jpg"><img src="img/thumb_06.jpg" height="38" alt=""></a>
                                                <a class="img margin-1-h round" href="img/image_07.jpg"><img src="img/thumb_07.jpg" height="38" alt=""></a>
                                                <a class="img margin-1-h round" href="img/image_08.jpg"><img src="img/thumb_08.jpg" height="38" alt=""></a>
                                            </span>
                                        </li>
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
                    <div class="dropdown menu-l ease-dropdown">
                        <button class="btn font-color-black-muted btn-square btn-ghost circle" data-ui-notifier data-ui-tooltip="l" data-ui-only="desktop" title="Notification Center">
                            <svg class="icon"><use href="#bars-right"/></svg>
                        </button>
                        <div class="content round shadow-lg no-scroll">
                            <div class="tabs xs-full-width theme-panel2 ease-tabs" data-ui-classes="border-b border-lg ui-border ui-color" style="min-width: 300px;">

                                <div class="btn-holder font-color-black-muted align-c border-b ease-1st-btn">
                                    <button class="tab btn btn-ghost round-t border-b border-lg ui-border ui-color active" data-ui-tooltip data-ui-only="desktop" title="Notifications">
                                        <svg class="icon ui-no"><use href="#bell"/></svg>
                                    </button>
                                    <button class="tab btn btn-ghost round-t" data-ui-tooltip data-ui-only="desktop" title="Notes">
                                        <svg class="icon ui-no"><use href="#pencil-write"/></svg>
                                    </button>
                                    <button class="tab btn btn-ghost round-t" data-ui-tooltip data-ui-only="desktop" title="Started Jobs">
                                        <svg class="icon ui-no"><use href="#hourglass-start"/></svg>
                                    </button>
                                    <button class="tab btn btn-ghost round-t" data-ui-tooltip data-ui-only="desktop" title="Completed Jobs">
                                        <svg class="icon ui-no"><use href="#hourglass-end"/></svg>
                                    </button>
                                </div>
                                <div class="tab-content align-l scroll-v open open-ease" style="max-height: 420px;">
                                    <ul class="timeline side-l margin-15-h hide-h-lines">
                                        <li>Etiam bibendum molestie lectus sit amet aliquet. Pellentesque non lacus iaculis, tristique velit.</li>
                                        <li>
                                            Lorem ipsum dolor sit amet.
                                            <span class="photos-holder margin-5-t hover-scale-more-2nd ease-2nd-layout">
                                                <a href="#"><img class="img-photo border-lg circle" src="img/profile-image.jpg" alt=""></a>
                                                <a href="#"><img class="img-photo border-lg circle" src="img/profile-image2.jpg" alt=""></a>
                                                <a href="#"><img class="img-photo border-lg circle" src="img/profile-image3.jpg" alt=""></a>
                                                <a class="btn no-margin circle ease-btn" href="#">+12</a>
                                            </span>
                                        </li>
                                        <li>Aenean imperdiet dolor nibh, a porta nunc maximus vitae.</li>
                                        <li>Pellentesque lobortis leo vitae magna sollicitudin, at tincidunt felis tempor.</li>
                                        <li>
                                            Nullam sit amet sagittis nisi.
                                            <span class="icons-xl margin-5-t block ease-1st-btn">
                                                <a class="btn btn-square padding-4-v round" href="#">
                                                    <svg class="icon"><use href="#file-pdf"/></svg>
                                                </a>
                                                <a class="btn btn-square padding-4-v round" href="#">
                                                    <svg class="icon"><use href="#file-xls"/></svg>
                                                </a>
                                                <a class="btn btn-square padding-4-v round" href="#">
                                                    <svg class="icon"><use href="#file-zip"/></svg>
                                                </a>
                                            </span>
                                        </li>
                                        <li>Aenean id tellus eu felis fermentum semper. Morbi et erat tincidunt, molestie leo a, accumsan dui</li>
                                        <li>Pellentesque lobortis leo vitae magna sollicitudin, at tincidunt felis tempor.</li>
                                        <li>Duis libero massa, dapibus sit amet leo malesuada, pharetra iaculis sapien.</li>
                                        <li>Pellentesque lobortis leo vitae magna sollicitudin, at tincidunt felis tempor.</li>
                                    </ul>
                                </div>
                                <div class="tab-content align-l scroll-v" style="max-height: 420px;">
                                    <ul class="timeline side-l margin-15-h hide-h-lines">
                                        <li>Nullam sit amet sagittis nisi. Phasellus libero dolor, aliquam eu erat sed.</li>
                                        <li>
                                            Lorem ipsum dolor sit amet.
                                            <span class="photo-gallery margin-5-t ease-photo-gallery">
                                                <a class="img margin-1-h round" href="img/image_01.jpg"><img src="img/thumb_01.jpg" height="38" alt=""></a>
                                                <a class="img margin-1-h round" href="img/image_02.jpg"><img src="img/thumb_02.jpg" height="38" alt=""></a>
                                                <a class="img margin-1-h round" href="img/image_03.jpg"><img src="img/thumb_03.jpg" height="38" alt=""></a>
                                                <a class="img margin-1-h round" href="img/image_04.jpg"><img src="img/thumb_04.jpg" height="38" alt=""></a>
                                                <a class="img margin-1-h round" href="img/image_05.jpg"><img src="img/thumb_05.jpg" height="38" alt=""></a>
                                                <a class="img margin-1-h round" href="img/image_06.jpg"><img src="img/thumb_06.jpg" height="38" alt=""></a>
                                                <a class="img margin-1-h round" href="img/image_07.jpg"><img src="img/thumb_07.jpg" height="38" alt=""></a>
                                                <a class="img margin-1-h round" href="img/image_08.jpg"><img src="img/thumb_08.jpg" height="38" alt=""></a>
                                            </span>
                                        </li>
                                        <li>Aenean id tellus eu felis fermentum semper. Morbi et erat tincidunt, molestie leo a, accumsan dui</li>
                                        <li>Pellentesque lobortis leo vitae magna sollicitudin, at tincidunt felis tempor.</li>
                                        <li>Duis libero massa, dapibus sit amet leo malesuada, pharetra iaculis sapien.</li>
                                        <li>Pellentesque lobortis leo vitae magna sollicitudin, at tincidunt felis tempor.</li>
                                        <li>Etiam bibendum molestie lectus sit amet aliquet. Pellentesque non lacus iaculis, tristique velit.</li>
                                        <li>Aenean imperdiet dolor nibh, a porta nunc maximus vitae.</li>
                                        <li>Pellentesque lobortis leo vitae magna sollicitudin, at tincidunt felis tempor.</li>
                                    </ul>
                                </div>
                                <div class="tab-content align-l scroll-v" style="max-height: 420px;">
                                    <ul class="timeline side-l margin-15-h hide-h-lines">
                                        <li>Etiam bibendum molestie lectus sit amet aliquet. Pellentesque non lacus iaculis, tristique velit.</li>
                                        <li>
                                            Lorem ipsum dolor sit amet.
                                            <span class="photos-holder margin-5-t hover-scale-more-2nd ease-2nd-layout">
                                                <a href="#"><img class="img-photo border-lg circle" src="img/profile-image.jpg" alt=""></a>
                                                <a href="#"><img class="img-photo border-lg circle" src="img/profile-image2.jpg" alt=""></a>
                                                <a href="#"><img class="img-photo border-lg circle" src="img/profile-image3.jpg" alt=""></a>
                                                <a class="btn no-margin circle ease-btn" href="#">+12</a>
                                            </span>
                                        </li>
                                        <li>Aenean imperdiet dolor nibh, a porta nunc maximus vitae.</li>
                                        <li>Pellentesque lobortis leo vitae magna sollicitudin, at tincidunt felis tempor.</li>
                                        <li>
                                            Nullam sit amet sagittis nisi.
                                            <span class="icons-xl margin-5-t block ease-1st-btn">
                                                <a class="btn btn-square padding-4-v round" href="#">
                                                    <svg class="icon"><use href="#file-pdf"/></svg>
                                                </a>
                                                <a class="btn btn-square padding-4-v round" href="#">
                                                    <svg class="icon"><use href="#file-xls"/></svg>
                                                </a>
                                                <a class="btn btn-square padding-4-v round" href="#">
                                                    <svg class="icon"><use href="#file-zip"/></svg>
                                                </a>
                                            </span>
                                        </li>
                                        <li>Aenean id tellus eu felis fermentum semper. Morbi et erat tincidunt, molestie leo a, accumsan dui</li>
                                        <li>Pellentesque lobortis leo vitae magna sollicitudin, at tincidunt felis tempor.</li>
                                        <li>Duis libero massa, dapibus sit amet leo malesuada, pharetra iaculis sapien.</li>
                                        <li>Pellentesque lobortis leo vitae magna sollicitudin, at tincidunt felis tempor.</li>
                                    </ul>
                                </div>
                                <div class="tab-content align-l scroll-v" style="max-height: 420px;">
                                    <ul class="timeline side-l margin-15-h hide-h-lines">
                                        <li>Nullam sit amet sagittis nisi. Phasellus libero dolor, aliquam eu erat sed.</li>
                                        <li>
                                            Lorem ipsum dolor sit amet.
                                            <span class="photo-gallery margin-5-t ease-photo-gallery">
                                                <a class="img margin-1-h round" href="img/image_01.jpg"><img src="img/thumb_01.jpg" height="38" alt=""></a>
                                                <a class="img margin-1-h round" href="img/image_02.jpg"><img src="img/thumb_02.jpg" height="38" alt=""></a>
                                                <a class="img margin-1-h round" href="img/image_03.jpg"><img src="img/thumb_03.jpg" height="38" alt=""></a>
                                                <a class="img margin-1-h round" href="img/image_04.jpg"><img src="img/thumb_04.jpg" height="38" alt=""></a>
                                                <a class="img margin-1-h round" href="img/image_05.jpg"><img src="img/thumb_05.jpg" height="38" alt=""></a>
                                                <a class="img margin-1-h round" href="img/image_06.jpg"><img src="img/thumb_06.jpg" height="38" alt=""></a>
                                                <a class="img margin-1-h round" href="img/image_07.jpg"><img src="img/thumb_07.jpg" height="38" alt=""></a>
                                                <a class="img margin-1-h round" href="img/image_08.jpg"><img src="img/thumb_08.jpg" height="38" alt=""></a>
                                            </span>
                                        </li>
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

                <div class="right margin-10-l xs-no-margin">
                    <span class="dropdown menu-l margin-5-l right ease-dropdown">
                        <button class="btn no-padding circle hover-scale-more">
                            <img class="img-photo img-photo-sm circle" src="img/profile-image.jpg" alt="">
                        </button>
                        <ul class="content has-grid align-c icons-lg round shadow-lg">
                            <li>
                                <a href="#">
                                    <svg class="icon"><use href="#user"/></svg>
                                    Profile
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <svg class="icon"><use href="#calendar"/></svg>
                                    Calendar
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <svg class="icon"><use href="#lock"/></svg>
                                    Lock Screen
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <svg class="icon"><use href="#key"/></svg>
                                    Change Password
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <svg class="icon"><use href="#setting"/></svg>
                                    Settings
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <svg class="icon"><use href="#sign-out"/></svg>
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </span>
                    <span class="margin-3-t inline-block hidden-xs">aeminyuce</span>
                    <span class="small font-color-black-50 block hidden-xs">Premium</span>
                </div>

            </header>
            <!-- header: end -->

            <!-- layouts: start -->
            <div class="tabs ease-tabs padding-15-b" data-ui-classes="border-lg border-b ui-border ui-color">

                <div class="container">
                    <div class="row border-b margin-15-b theme-panel2">
                        <div class="col-4 offset-4 no-padding-b">

                            <div class="btn-holder font-color-black-muted form-lg ease-1st-btn">
                                <button class="tab btn btn-ghost round-t border-lg border-b ui-border ui-color active">Forms</button>
                                <button class="tab btn btn-ghost round-t">Dashboard</button>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="tab-content open open-ease">

                    <!-- forms: start -->
                    <div class="fixed fixed-inner">
                        <div class="row">
                            <div class="col-12">

                                <div class="card round shadow-lg">

                                    <form action="#succesful">
                                        <div class="card-side padding-5-h border-b">
                                            <div class="col-static no-fluid">
                                                <div class="row">
                                                    <div class="col-12">
                                                        <h4 class="align-l margin-4-t margin-3-b">Forms</h4>
                                                    </div>
                                                </div>
                                                <div class="col-42 padding-5-v">

                                                    <div class="dropdown menu-l ease-dropdown">
                                                        <button type="button" class="btn btn-lg btn-ghost btn-square round">
                                                            <svg class="icon default-icon"><use href="#ellipsis-h"/></svg>
                                                        </button>
                                                        <ul class="content has-icon round shadow-lg">
                                                            <li><a href="#">
                                                                <svg class="list-icon icon"><use href="#check"/></svg>
                                                                Save &amp; Continue</a>
                                                            </li>
                                                            <li><a href="#">
                                                                <svg class="list-icon icon"><use href="#sign-out"/></svg>
                                                                Save &amp; Exit</a>
                                                            </li>
                                                            <li><a href="#">
                                                                <svg class="list-icon icon"><use href="#pencil"/></svg>
                                                                Save &amp; Edit</a>
                                                            </li>
                                                            <li><a href="#">
                                                                <svg class="list-icon icon"><use href="#plus"/></svg>
                                                                Save &amp; Add New</a>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-side padding-15 form-lg">
                                            <div class="row">

                                                <div class="col-8 offset-2">
                                                    <h3>Customer Info</h3>
                                                </div>

                                                <div class="col-3 offset-2">
                                                    <label class="form-grid">First Name</label>
                                                </div>
                                                <div class="col-5">
                                                    <div class="text round border-dual ease-form">
                                                        <input class="required" type="text" placeholder="Enter first name" minlength="3">
                                                    </div>
                                                    <p class="required-msg">Enter your first name.</p>
                                                </div>

                                                <div class="col-3 offset-2">
                                                    <label class="form-grid">Last Name</label>
                                                </div>
                                                <div class="col-5">
                                                    <div class="text round border-dual ease-form">
                                                        <input class="required" type="text" placeholder="Enter last name" minlength="3">
                                                    </div>
                                                    <p class="required-msg">Enter your last name.</p>
                                                </div>

                                                <div class="col-3 offset-2">
                                                    <label class="form-grid">Contact Phone</label>
                                                </div>
                                                <div class="col-5">
                                                    <div class="text text-icon-l round border-dual ease-form">
                                                        <svg class="icon"><use href="#phone"/></svg>
                                                        <input class="required number" type="text" placeholder="123-123-1234" minlength="12" maxlength="12">
                                                    </div>
                                                    <p class="required-msg">Enter your phone.</p>
                                                </div>

                                                <div class="col-3 offset-2">
                                                    <label class="form-grid">Age</label>
                                                </div>
                                                <div class="col-5">
                                                    <div class="select round border-dual ease-form">
                                                        <svg class="icon"><use href="#angle-down"/></svg>
                                                        <select class="required">
                                                            <option value="">Select your age</option>
                                                            <option>Under 20</option>
                                                            <option>21- 30</option>
                                                            <option>31 - 40</option>
                                                        </select>
                                                    </div>
                                                    <p class="required-msg">Enter your age.</p>
                                                </div>

                                                <div class="col-3 offset-2">
                                                    <label class="form-grid">Email Address</label>
                                                </div>
                                                <div class="col-5">
                                                    <div class="text text-icon-l round border-dual ease-form">
                                                        <svg class="icon"><use href="#at"/></svg>
                                                        <input class="required email" type="email">
                                                    </div>
                                                    <p class="required-msg">Enter a valid email.</p>
                                                </div>

                                                <div class="col-3 offset-2">
                                                    <label class="form-grid">Company Site</label>
                                                </div>
                                                <div class="col-5">
                                                    <div class="form-holder col-static no-fluid">

                                                        <div class="row no-row-gap">
                                                            <div class="col-12">
                                                                <div class="text text-icon-l round border-dual ease-form">
                                                                    <svg class="icon"><use href="#browser"/></svg>
                                                                    <input class="required" type="text" placeholder="Site name">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-200">
                                                            <div class="select round border-dual ease-form">
                                                                <svg class="icon"><use href="#angle-down"/></svg>
                                                                <select>
                                                                    <option>.com</option>
                                                                    <option>.net</option>
                                                                    <option>.org</option>
                                                                </select>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <p class="required-msg">Enter your site name.</p>
                                                </div>

                                                <div class="sp-1 margin-20 border-b border-dashed"></div>

                                                <div class="col-8 offset-2">
                                                    <h3>Address Details</h3>
                                                </div>

                                                <div class="col-3 offset-2">
                                                    <label class="form-grid">Country</label>
                                                </div>
                                                <div class="col-5">
                                                    <div data-ui-src="json/countries.json" data-ui-val="name" class="autocomplete text text-icon-l round border-dual ease-form">
                                                        <svg class="icon"><use href="#keyboard"/></svg>
                                                        <input class="required" type="text" placeholder="Type/Select your country" autocomplete="off" minlength="3">
                                                    </div>
                                                    <p class="required-msg">Type/Select your country.</p>
                                                </div>

                                                <div class="col-3 offset-2">
                                                    <label class="form-grid">Address</label>
                                                </div>
                                                <div class="col-5">
                                                    <div class="textarea round border-dual ease-form" data-ui-counter="1000">
                                                        <textarea class="required" rows="3"></textarea>
                                                    </div>
                                                    <p class="required-msg">Enter your address details.</p>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="card-side padding-5-h border-t">
                                            <div class="row">
                                                <div class="col-12 align-r xs-align-c ease-1st-btn">

                                                    <button type="reset" class="btn btn-lg btn-xs-fluid padding-15-h round">
                                                        Cancel
                                                    </button>

                                                    <button type="submit" class="btn btn-lg btn-xs-fluid padding-15-h round theme-green ui-bg-dark-100">
                                                        <svg class="icon margin-5-r"><use href="#save"/></svg> Save
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

                <div class="tab-content">

                    <!-- dashboard: start -->
                    <div class="fixed fixed-inner">
                        <div class="row">

                            <div class="col-12 no-padding">
                                <div class="dashboard-carousel carousel" data-ui-col-xl="4" data-ui-col-lg="2" data-ui-col="2" data-ui-col-md="2" data-ui-col-sm="1" data-ui-col-xs="1">
                                    <div class="carousel-slider icons-margin-5-r ease-layout ease-slow ease-in-out">

                                        <div class="slide-content padding-10-h padding-10-t padding-15-b theme-yellow">
                                            <div class="card full-h padding-15 round shadow-lg">
                                                <div class="col-static no-fluid">
                                                    <div class="row no-row-gap-h row-gap-md-v">
                                                        <div class="col-12">
                                                            <div class="x-large">Pending</div>
                                                            <span class="font-color-black-muted large">Total: 45%</span>
                                                        </div>
                                                    </div>
                                                    <div class="col-100 align-r">
                                                        <span class="x-largest ui-color">157</span>
                                                    </div>
                                                </div>
                                                <div class="progress-bar margin-15-t progress round">
                                                    <span class="ui-bg-dark-100 stripe-light" style="width: 45%;"></span>
                                                </div>
                                                <p class="font-color-black-muted large margin-5-b">Pending for the transaction.</p>
                                                <p class="font-color-black-muted">
                                                    <svg class="icon icon-xs"><use href="#clock"/></svg>
                                                    <span class="inline-block">Last updated: 15:12</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div class="slide-content padding-10-h padding-10-t padding-15-b theme-yellow">
                                            <div class="card full-h padding-15 round shadow-lg">
                                                <div class="col-static no-fluid">
                                                    <div class="row no-row-gap-h row-gap-md-v">
                                                        <div class="col-12">
                                                            <div class="x-large">Paused</div>
                                                            <span class="font-color-black-muted large">Total: 5%</span>
                                                        </div>
                                                    </div>
                                                    <div class="col-100 align-r">
                                                        <span class="x-largest ui-color">23</span>
                                                    </div>
                                                </div>
                                                <div class="progress-bar margin-15-t progress round">
                                                    <span class="ui-bg-dark-100 stripe-light" style="width: 5%;"></span>
                                                </div>
                                                <p class="font-color-black-muted large margin-5-b">Paused for the some reasons.</p>
                                                <p class="font-color-black-muted">
                                                    <svg class="icon icon-xs"><use href="#clock"/></svg>
                                                    <span class="inline-block">Last updated: 15:12</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div class="slide-content padding-10-h padding-10-t padding-15-b theme-green">
                                            <div class="card full-h padding-15 round shadow-lg">
                                                <div class="col-static no-fluid">
                                                    <div class="row no-row-gap-h row-gap-md-v">
                                                        <div class="col-12">
                                                            <div class="x-large">Completed</div>
                                                            <span class="font-color-black-muted large">Total: 80%</span>
                                                        </div>
                                                    </div>
                                                    <div class="col-100 align-r">
                                                        <span class="x-largest ui-color">256</span>
                                                    </div>
                                                </div>
                                                <div class="progress-bar margin-15-t progress round">
                                                    <span class="ui-bg-dark-100 stripe-light" style="width: 80%;"></span>
                                                </div>
                                                <p class="font-color-black-muted large margin-5-b">Reached for the expert.</p>
                                                <p class="font-color-black-muted">
                                                    <svg class="icon icon-xs"><use href="#clock"/></svg>
                                                    <span class="inline-block">Last updated: 15:12</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div class="slide-content padding-10-h padding-10-t padding-15-b theme-panel2">
                                            <div class="card full-h padding-15 round shadow-lg">
                                                <div class="col-static no-fluid">
                                                    <div class="row no-row-gap-h row-gap-md-v">
                                                        <div class="col-12">
                                                            <div class="align-l x-large">On Payment</div>
                                                            <span class="font-color-black-muted large">Total: 67%</span>
                                                        </div>
                                                    </div>
                                                    <div class="col-100 align-r">
                                                        <span class="x-largest ui-color">256</span>
                                                    </div>
                                                </div>
                                                <div class="progress-bar margin-15-t progress round">
                                                    <span class="ui-bg-dark-100 stripe-light" style="width: 67%;"></span>
                                                </div>
                                                <p class="font-color-black-muted large margin-5-b">Confirmed for payment.</p>
                                                <p class="font-color-black-muted">
                                                    <svg class="icon icon-xs"><use href="#clock"/></svg>
                                                    <span class="inline-block">Last updated: 15:12</span>
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="carousel-nav no-margin-t margin-10-b ease-1st-btn">
                                        <button class="carousel-prev btn btn-ghost btn-square round">
                                            <svg class="icon"><use href="#angle-left"/></svg>
                                        </button>
                                        <span class="dots font-color-black-muted"></span>
                                        <button class="carousel-next btn btn-ghost btn-square round">
                                            <svg class="icon"><use href="#angle-right"/></svg>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xl-3 col-lg-6 col-12 col-md-6">
                                <div class="card full-h padding-15 round shadow-lg">
                                    <div class="dropdown menu-l right ease-dropdown">
                                        <button class="btn btn-square btn-ghost round">
                                            <svg class="icon"><use href="#ellipsis-h"/></svg>
                                        </button>
                                        <ul class="content has-icon round shadow-lg">
                                            <li><a href="#"><svg class="list-icon icon"><use href="#file-pdf"/></svg>Download PDF</a></li>
                                            <li><a href="#"><svg class="list-icon icon"><use href="#file-xls"/></svg>Download Excel</a></li>
                                            <li><a href="#"><svg class="list-icon icon"><use href="#eye"/></svg>See Detailed Activity</a></li>
                                        </ul>
                                    </div>
                                    <h4 class="align-l margin-5-t">Activity</h4>
                                    <div class="col-static no-fluid">
                                        <div class="row row no-row-gap-h row-gap-md-v">
                                            <div class="col-12 large">
                                                <div class="large font-bold">Total Progress</div>
                                                <span class="font-color-black-muted">23% Change</span>
                                            </div>
                                        </div>
                                        <div class="col-150 align-r">
                                            <span class="x-largest inline-block">436</span>
                                        </div>
                                    </div>
                                    <div class="row row-gap-lg-h no-fluid">
                                        <div class="col-6">
                                            <div class="donut-chart automargin ease-donut-chart" style="max-width: 150px;">
                                                <strong>
                                                    <b class="font-color-black-50 margin-2-b block">69%</b>
                                                    Payments
                                                </strong>
                                                <svg viewBox="0 0 160 160">
                                                    <circle r="69.85699" cy="80" cx="80" class="bg" />
                                                    <circle r="69.85699" cy="80" cx="80" stroke="hsl(186, 70%, 68%)" data-ui-percent="69" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="pie-chart automargin ease-pie-chart" data-ui-text="Profit" style="max-width: 150px;">
                                                <ul>
                                                    <li data-ui-percent="70" data-ui-fill="hsl(97, 70%, 70%)"></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <span class="sp-3"></span>
                                    <p class="font-color-black-50 large margin-5-b">Daily reports that all received.</p>
                                    <p class="font-color-black-muted">
                                        <svg class="icon icon-xs margin-5-r"><use href="#clock"/></svg>
                                        <span class="inline-block">Last updated: 15:12</span>
                                    </p>
                                </div>
                            </div>

                            <div class="col-xl-3 col-lg-6 col-12 col-md-6">
                                <div class="card full-h padding-15 padding-10-t round shadow-lg" style="min-height: 350px;">
                                    <div class="tabs theme-panel2 ease-tabs" data-ui-classes="border-b border-lg ui-border ui-color">

                                        <div class="btn-holder font-color-black-muted align-c margin-10-b border-b form-lg ease-1st-btn">
                                            <button class="tab btn btn-ghost round-t border-b border-lg ui-border ui-color active">Delayed</button>
                                            <button class="tab btn btn-ghost round-t">Paused</button>
                                        </div>
                                        <div class="tab-content set-absolute set-h scroll-v open open-ease" style="top: 62px; bottom: 15px;">
                                            <div class="list-group margin-15-h">
                                                <ul class="ease-list-group">
                                                    <li class="no-border">
                                                        <span class="donut-chart col-42 right ease-donut-chart">
                                                            <strong class="font-color-black-muted x-small">88%</strong>
                                                            <svg viewBox="0 0 160 160">
                                                                <circle r="69.85699" cy="80" cx="80" stroke="hsl(188, 89%, 40%)" data-ui-percent="88" />
                                                            </svg>
                                                        </span>
                                                        <b class="margin-5-t block">AAC-2019-013:AGF</b>
                                                        <span class="font-color-black-50 small">3814 Reports</span>
                                                    </li>
                                                    <li class="no-border">
                                                        <span class="donut-chart col-42 right ease-donut-chart">
                                                            <strong class="font-color-black-muted x-small">76%</strong>
                                                            <svg viewBox="0 0 160 160">
                                                                <circle r="69.85699" cy="80" cx="80" stroke="hsl(188, 89%, 40%)" data-ui-percent="76" />
                                                            </svg>
                                                        </span>
                                                        <b class="margin-5-t block">BDA-2019-642</b>
                                                        <span class="font-color-black-50 small">2613 Reports</span>
                                                    </li>
                                                    <li class="no-border">
                                                        <span class="donut-chart col-42 right ease-donut-chart">
                                                            <strong class="font-color-black-muted x-small">69%</strong>
                                                            <svg viewBox="0 0 160 160">
                                                                <circle r="69.85699" cy="80" cx="80" stroke="hsl(188, 89%, 40%)" data-ui-percent="69" />
                                                            </svg>
                                                        </span>
                                                        <b class="margin-5-t block">DDG-2019-505:AG</b>
                                                        <span class="font-color-black-50 small">1890 Reports</span>
                                                    </li>
                                                    <li class="no-border">
                                                        <span class="donut-chart col-42 right ease-donut-chart">
                                                            <strong class="font-color-black-muted x-small">52%</strong>
                                                            <svg viewBox="0 0 160 160">
                                                                <circle r="69.85699" cy="80" cx="80" stroke="hsl(188, 89%, 40%)" data-ui-percent="52" />
                                                            </svg>
                                                        </span>
                                                        <b class="margin-5-t block">OOC-2019-781:F</b>
                                                        <span class="font-color-black-50 small">1605 Reports</span>
                                                    </li>
                                                    <li class="no-border">
                                                        <span class="donut-chart col-42 right ease-donut-chart">
                                                            <strong class="font-color-black-muted x-small">36%</strong>
                                                            <svg viewBox="0 0 160 160">
                                                                <circle r="69.85699" cy="80" cx="80" stroke="hsl(188, 89%, 40%)" data-ui-percent="36" />
                                                            </svg>
                                                        </span>
                                                        <b class="margin-5-t block">BDD-2019-047:G</b>
                                                        <span class="font-color-black-50 small">812 Reports</span>
                                                    </li>
                                                    <li class="no-border">
                                                        <span class="donut-chart col-42 right ease-donut-chart">
                                                            <strong class="font-color-black-muted x-small">36%</strong>
                                                            <svg viewBox="0 0 160 160">
                                                                <circle r="69.85699" cy="80" cx="80" stroke="hsl(188, 89%, 40%)" data-ui-percent="36" />
                                                            </svg>
                                                        </span>
                                                        <b class="margin-5-t block">RAC-2019-973</b>
                                                        <span class="font-color-black-50 small">616 Reports</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="tab-content set-absolute set-h scroll-v" style="top: 62px; bottom: 15px;">
                                            <div class="list-group margin-15-h">
                                                <ul class="ease-list-group">
                                                    <li class="no-border">
                                                        <span class="donut-chart col-42 right ease-donut-chart">
                                                            <strong class="font-color-black-muted x-small">88%</strong>
                                                            <svg viewBox="0 0 160 160">
                                                                <circle r="69.85699" cy="80" cx="80" stroke="hsl(188, 89%, 40%)" data-ui-percent="88" />
                                                            </svg>
                                                        </span>
                                                        <b class="margin-5-t block">AAC-2019-013:AGF</b>
                                                        <span class="font-color-black-50 small">3814 Reports</span>
                                                    </li>
                                                    <li class="no-border">
                                                        <span class="donut-chart col-42 right ease-donut-chart">
                                                            <strong class="font-color-black-muted x-small">76%</strong>
                                                            <svg viewBox="0 0 160 160">
                                                                <circle r="69.85699" cy="80" cx="80" stroke="hsl(188, 89%, 40%)" data-ui-percent="76" />
                                                            </svg>
                                                        </span>
                                                        <b class="margin-5-t block">BDA-2019-642</b>
                                                        <span class="font-color-black-50 small">2613 Reports</span>
                                                    </li>
                                                    <li class="no-border">
                                                        <span class="donut-chart col-42 right ease-donut-chart">
                                                            <strong class="font-color-black-muted x-small">69%</strong>
                                                            <svg viewBox="0 0 160 160">
                                                                <circle r="69.85699" cy="80" cx="80" stroke="hsl(188, 89%, 40%)" data-ui-percent="69" />
                                                            </svg>
                                                        </span>
                                                        <b class="margin-5-t block">DDG-2019-505:AG</b>
                                                        <span class="font-color-black-50 small">1890 Reports</span>
                                                    </li>
                                                    <li class="no-border">
                                                        <span class="donut-chart col-42 right ease-donut-chart">
                                                            <strong class="font-color-black-muted x-small">52%</strong>
                                                            <svg viewBox="0 0 160 160">
                                                                <circle r="69.85699" cy="80" cx="80" stroke="hsl(188, 89%, 40%)" data-ui-percent="52" />
                                                            </svg>
                                                        </span>
                                                        <b class="margin-5-t block">OOC-2019-781:F</b>
                                                        <span class="font-color-black-50 small">1605 Reports</span>
                                                    </li>
                                                    <li class="no-border">
                                                        <span class="donut-chart col-42 right ease-donut-chart">
                                                            <strong class="font-color-black-muted x-small">36%</strong>
                                                            <svg viewBox="0 0 160 160">
                                                                <circle r="69.85699" cy="80" cx="80" stroke="hsl(188, 89%, 40%)" data-ui-percent="36" />
                                                            </svg>
                                                        </span>
                                                        <b class="margin-5-t block">BDD-2019-047:G</b>
                                                        <span class="font-color-black-50 small">812 Reports</span>
                                                    </li>
                                                    <li class="no-border">
                                                        <span class="donut-chart col-42 right ease-donut-chart">
                                                            <strong class="font-color-black-muted x-small">36%</strong>
                                                            <svg viewBox="0 0 160 160">
                                                                <circle r="69.85699" cy="80" cx="80" stroke="hsl(188, 89%, 40%)" data-ui-percent="36" />
                                                            </svg>
                                                        </span>
                                                        <b class="margin-5-t block">RAC-2019-973</b>
                                                        <span class="font-color-black-50 small">616 Reports</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div class="col-xl-6 col-lg-6 col-12 col-md-6">
                                <div class="card full-h padding-15 round shadow-lg tabs" data-ui-classes="font-bold">
                                    <div class="ease-tabs">
                                        <div class="dropdown menu-l right ease-dropdown">
                                            <button class="btn btn-square btn-ghost round">
                                                <svg class="icon"><use href="#ellipsis-h"/></svg>
                                            </button>
                                            <ul class="content has-icon round shadow-lg">
                                                <li><a href="#"><svg class="list-icon icon"><use href="#file-pdf"/></svg>Download PDF</a></li>
                                                <li><a href="#"><svg class="list-icon icon"><use href="#file-xls"/></svg>Download Excel</a></li>
                                                <li><a href="#"><svg class="list-icon icon"><use href="#eye"/></svg>See Detailed Statistics</a></li>
                                            </ul>
                                        </div>
                                        <div class="dropdown menu-l margin-5-r right ease-dropdown">
                                            <button class="btn btn-ghost round">
                                                <span class="value-toggle">Last year</span>
                                                <svg class="toggle-icon icon margin-5-l"><use href="#angle-down"/></svg>
                                            </button>
                                            <ul class="content round shadow-lg">
                                                <li><label class="tab active font-bold selected">Last year</label></li>
                                                <li><label class="tab">Past year</label></li>
                                            </ul>
                                        </div>
                                        <h4 class="align-l margin-5-t">Statistics</h4>
                                        <div class="tab-content open open-ease">
                                            <div class="line-charts ease-line-charts" data-ui-size="5,48" data-ui-x="Sep,Oct,Nov,Dec,Jan,Fab">
                                                <ul class="line" data-ui-name="Sales" data-ui-type="curved filled">
                                                    <li data-ui-y="10" data-ui-link="#"></li>
                                                    <li data-ui-y="30" data-ui-link="#"></li>
                                                    <li data-ui-y="70" data-ui-link="#"></li>
                                                    <li data-ui-y="120" data-ui-link="#"></li>
                                                    <li data-ui-y="100" data-ui-link="#"></li>
                                                    <li data-ui-y="150" data-ui-link="#"></li>
                                                </ul>
                                                <ul class="line" data-ui-name="Orders" data-ui-type="dashed">
                                                    <li data-ui-y="50" data-ui-link="#"></li>
                                                    <li data-ui-y="10" data-ui-link="#"></li>
                                                    <li data-ui-y="50" data-ui-link="#"></li>
                                                    <li data-ui-y="40" data-ui-link="#"></li>
                                                    <li data-ui-y="80" data-ui-link="#"></li>
                                                    <li data-ui-y="50" data-ui-link="#"></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="tab-content">
                                            <div class="line-charts ease-line-charts" data-ui-size="5,48" data-ui-x="Sep,Oct,Nov,Dec,Jan,Fab">
                                                <ul class="line" data-ui-name="Sales" data-ui-type="curved filled">
                                                    <li data-ui-y="10" data-ui-link="#"></li>
                                                    <li data-ui-y="60" data-ui-link="#"></li>
                                                    <li data-ui-y="20" data-ui-link="#"></li>
                                                    <li data-ui-y="120" data-ui-link="#"></li>
                                                    <li data-ui-y="10" data-ui-link="#"></li>
                                                    <li data-ui-y="100" data-ui-link="#"></li>
                                                </ul>
                                                <ul class="line" data-ui-name="Orders" data-ui-type="dashed">
                                                    <li data-ui-y="0" data-ui-link="#"></li>
                                                    <li data-ui-y="20" data-ui-link="#"></li>
                                                    <li data-ui-y="50" data-ui-link="#"></li>
                                                    <li data-ui-y="40" data-ui-link="#"></li>
                                                    <li data-ui-y="70" data-ui-link="#"></li>
                                                    <li data-ui-y="50" data-ui-link="#"></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xl-3 col-lg-6 col-12 col-md-6">
                                <div class="card full-h padding-15 padding-10-t round shadow-lg" style="min-height: 350px;">
                                    <div class="tabs form-lg theme-panel2 ease-tabs" data-ui-classes="border-b border-lg ui-border ui-color">

                                        <div class="btn-holder font-color-black-muted align-c margin-10-b border-b ease-1st-btn">
                                            <button class="tab btn btn-ghost round-t border-b border-lg ui-border ui-color active">News</button>
                                            <button class="tab btn btn-ghost round-t">Announcements</button>
                                        </div>
                                        <div class="tab-content set-absolute set-h scroll-v open open-ease" style="top: 62px; bottom: 15px;">
                                            <ul class="timeline side-l margin-15-h hide-h-lines">
                                                <li>Etiam bibendum molestie lectus sit amet aliquet. Pellentesque non lacus iaculis, tristique velit.</li>
                                                <li>
                                                    Lorem ipsum dolor sit amet.
                                                    <span class="photos-holder margin-5-t hover-scale-more-2nd ease-2nd-layout">
                                                        <a href="#"><img class="img-photo border-lg circle" src="img/profile-image.jpg" alt=""></a>
                                                        <a href="#"><img class="img-photo border-lg circle" src="img/profile-image2.jpg" alt=""></a>
                                                        <a href="#"><img class="img-photo border-lg circle" src="img/profile-image3.jpg" alt=""></a>
                                                        <a class="btn btn-lg no-margin circle ease-btn" href="#">+12</a>
                                                    </span>
                                                </li>
                                                <li>Aenean imperdiet dolor nibh, a porta nunc maximus vitae.</li>
                                                <li>Pellentesque lobortis leo vitae magna sollicitudin, at tincidunt felis tempor.</li>
                                                <li>
                                                    Nullam sit amet sagittis nisi.
                                                    <span class="icons-xl margin-5-t block ease-1st-btn">
                                                        <a class="btn btn-square padding-3-v round" href="#">
                                                            <svg class="icon"><use href="#file-pdf"/></svg>
                                                        </a>
                                                        <a class="btn btn-square padding-3-v round" href="#">
                                                            <svg class="icon"><use href="#file-xls"/></svg>
                                                        </a>
                                                        <a class="btn btn-square padding-3-v round" href="#">
                                                            <svg class="icon"><use href="#file-zip"/></svg>
                                                        </a>
                                                    </span>
                                                </li>
                                                <li>Aenean id tellus eu felis fermentum semper. Morbi et erat tincidunt, molestie leo a, accumsan dui</li>
                                                <li>Pellentesque lobortis leo vitae magna sollicitudin, at tincidunt felis tempor.</li>
                                                <li>Duis libero massa, dapibus sit amet leo malesuada, pharetra iaculis sapien.</li>
                                                <li>Pellentesque lobortis leo vitae magna sollicitudin, at tincidunt felis tempor.</li>
                                            </ul>
                                        </div>
                                        <div class="tab-content set-absolute set-h scroll-v" style="top: 62px; bottom: 15px;">
                                            <ul class="timeline side-l margin-15-h hide-h-lines">
                                                <li>Nullam sit amet sagittis nisi. Phasellus libero dolor, aliquam eu erat sed.</li>
                                                <li>
                                                    Lorem ipsum dolor sit amet.
                                                    <span class="photo-gallery margin-5-t ease-photo-gallery">
                                                        <a class="img margin-1-h round" href="img/image_01.jpg"><img src="img/thumb_01.jpg" height="38" alt=""></a>
                                                        <a class="img margin-1-h round" href="img/image_02.jpg"><img src="img/thumb_02.jpg" height="38" alt=""></a>
                                                        <a class="img margin-1-h round" href="img/image_03.jpg"><img src="img/thumb_03.jpg" height="38" alt=""></a>
                                                        <a class="img margin-1-h round" href="img/image_04.jpg"><img src="img/thumb_04.jpg" height="38" alt=""></a>
                                                        <a class="img margin-1-h round" href="img/image_05.jpg"><img src="img/thumb_05.jpg" height="38" alt=""></a>
                                                        <a class="img margin-1-h round" href="img/image_06.jpg"><img src="img/thumb_06.jpg" height="38" alt=""></a>
                                                        <a class="img margin-1-h round" href="img/image_07.jpg"><img src="img/thumb_07.jpg" height="38" alt=""></a>
                                                        <a class="img margin-1-h round" href="img/image_08.jpg"><img src="img/thumb_08.jpg" height="38" alt=""></a>
                                                        <a class="img margin-1-h round" href="img/image_09.jpg"><img src="img/thumb_09.jpg" height="38" alt=""></a>
                                                    </span>
                                                </li>
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

                            <div class="col-xl-3 col-lg-6 col-12 col-md-6">
                                <div class="card full-h padding-15 round shadow-lg">
                                    <div class="dropdown menu-l right ease-dropdown">
                                        <button class="btn btn-square btn-ghost round">
                                            <svg class="icon"><use href="#ellipsis-h"/></svg>
                                        </button>
                                        <ul class="content has-icon round shadow-lg">
                                            <li><a href="#"><svg class="list-icon icon"><use href="#calendar-plus"/></svg>Add to Your Calendar</a></li>
                                            <li><a href="#"><svg class="list-icon icon"><use href="#eye"/></svg>See All Events</a></li>
                                        </ul>
                                    </div>
                                    <h4 class="align-l margin-5-t">Events</h4>
                                    <div class="calendar ease-calendar round no-padding" data-ui-src="json/calendar.json" data-ui-date="2019,6"></div>
                                </div>
                            </div>

                            <div class="col-xl-6 col-lg-6 col-12 col-md-6">
                                <div class="card full-h padding-15 round shadow-lg">
                                    <div class="dropdown menu-l right ease-dropdown">
                                        <button class="btn btn-square btn-ghost round">
                                            <svg class="icon"><use href="#ellipsis-h"/></svg>
                                        </button>
                                        <ul class="content has-icon round shadow-lg">
                                            <li><a href="#"><svg class="list-icon icon"><use href="#file-pdf"/></svg>Download PDF</a></li>
                                            <li><a href="#"><svg class="list-icon icon"><use href="#file-xls"/></svg>Download Excel</a></li>
                                            <li><a href="#"><svg class="list-icon icon"><use href="#eye"/></svg>See All Experts</a></li>
                                        </ul>
                                    </div>
                                    <h4 class="align-l margin-5-t">Experts</h4>
                                    <div class="grid-list grid-striped grid-hover theme-gray ease-grid-list">

                                        <div class="row no-row-gap-v row-gap-sm-h">
                                            <div class="col-6 lg-fluid">
                                                <div class="text text-icon-both round no-border ui-bg-light-100 has-clear ease-form">
                                                    <svg class="icon text-icon-l"><use href="#search"/></svg>
                                                    <button class="clear-form">
                                                        <svg class="icon"><use href="#remove"/></svg>
                                                    </button>
                                                    <input class="grid-filter" type="text" placeholder="Search">
                                                </div>
                                                <span class="sp-5 hidden-lg"></span>
                                            </div>
                                            <div class="col-lg-3 col-6 no-fluid">
                                                <div class="select round no-border ui-bg-light-100 ease-form">
                                                    <svg class="icon"><use href="#angle-down"/></svg>
                                                    <select class="grid-filter" data-ui-index="2">
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
                                            <div class="col-lg-3 col-6 no-fluid">
                                                <div class="dropdown menu-l block ease-dropdown">
                                                    <button class="btn align-l round">
                                                        <span class="value-toggle">
                                                            <svg class="icon"><use href="#sort"/></svg> Sort
                                                        </span>
                                                    </button>
                                                    <ul class="content round shadow-lg">
                                                        <li>
                                                            <label class="radio" data-ui-sort="1">
                                                                <svg class="icon"><use href="#sort"/></svg>
                                                                <input type="radio" name="s">By Name
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label class="radio" data-ui-sort="2">
                                                                <svg class="icon"><use href="#sort"/></svg>
                                                                <input type="radio" name="s">By Step
                                                            </label>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <select class="grid-show hidden">
                                                    <option>4</option>
                                                </select>
                                            </div>
                                        </div>

                                        <span class="sp-15"></span>

                                        <div class="grid-container">

                                            <div class="grid-content no-border round" data-ui-val="John Atkinson|Paused">
                                                <div class="row no-row-gap no-fluid">
                                                    <div class="col-5">
                                                        <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image.jpg" alt="">John Atkinson
                                                    </div>
                                                    <div class="col-7">
                                                        <ul class="steps-bar steps-icon">
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Starting"><use href="#check-circle"/></svg>1:S
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Waiting"><use href="#check-circle"/></svg>2:W
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Expert"><use href="#check-circle"/></svg>3:E
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="First Audit"><use href="#check-circle"/></svg>4:F
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Second Audit"><use href="#check-circle"/></svg>5:S
                                                            </li>
                                                            <li class="active">
                                                                <svg class="icon" data-ui-tooltip title="Paused"><use href="#clock"/></svg>6:P
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Delayed"><use href="#check-circle"/></svg>7:C
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="grid-content no-border round" data-ui-val="Mary Doe|Waiting">
                                                <div class="row no-row-gap no-fluid">
                                                    <div class="col-5">
                                                        <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image2.jpg" alt="">Mary Doe
                                                    </div>
                                                    <div class="col-7">
                                                        <ul class="steps-bar steps-icon theme-yellow ui-color">
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Starting"><use href="#check-circle"/></svg>1:S
                                                            </li>
                                                            <li class="active">
                                                                <svg class="icon" data-ui-tooltip title="Waiting"><use href="#alert-circle"/></svg>2:W
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Expert"><use href="#check-circle"/></svg>3:E
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="First Audit"><use href="#check-circle"/></svg>4:F
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Second Audit"><use href="#check-circle"/></svg>5:S
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Paused"><use href="#check-circle"/></svg>6:P
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Delayed"><use href="#check-circle"/></svg>7:C
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="grid-content no-border round" data-ui-val="Mike Taylor|Completed">
                                                <div class="row no-row-gap no-fluid">
                                                    <div class="col-5">
                                                        <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image3.jpg" alt="">Mike Taylor
                                                    </div>
                                                    <div class="col-7">
                                                        <ul class="steps-bar steps-icon">
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Starting"><use href="#check-circle"/></svg>1:S
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Waiting"><use href="#check-circle"/></svg>2:W
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Expert"><use href="#check-circle"/></svg>3:E
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="First Audit"><use href="#check-circle"/></svg>4:F
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Second Audit"><use href="#check-circle"/></svg>5:S
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Paused"><use href="#check-circle"/></svg>6:P
                                                            </li>
                                                            <li class="active">
                                                                <svg class="icon" data-ui-tooltip title="Delayed"><use href="#clock"/></svg>7:C
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="grid-content no-border round" data-ui-val="Tony Starky|Paused">
                                                <div class="row no-row-gap no-fluid">
                                                    <div class="col-5">
                                                        <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image.jpg" alt="">Tony Starky
                                                    </div>
                                                    <div class="col-7">
                                                        <ul class="steps-bar steps-icon">
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Starting"><use href="#check-circle"/></svg>1:S
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Waiting"><use href="#check-circle"/></svg>2:W
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Expert"><use href="#check-circle"/></svg>3:E
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="First Audit"><use href="#check-circle"/></svg>4:F
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Second Audit"><use href="#check-circle"/></svg>5:S
                                                            </li>
                                                            <li class="active">
                                                                <svg class="icon" data-ui-tooltip title="Paused"><use href="#clock"/></svg>>6:P
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Delayed"><use href="#check-circle"/></svg>7:C
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="grid-content no-border round" data-ui-val="John Atkinson|Paused">
                                                <div class="row no-row-gap no-fluid">
                                                    <div class="col-5">
                                                        <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image.jpg" alt="">John Atkinson
                                                    </div>
                                                    <div class="col-7">
                                                        <ul class="steps-bar steps-icon">
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Starting"><use href="#check-circle"/></svg>1:S
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Waiting"><use href="#check-circle"/></svg>2:W
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Expert"><use href="#check-circle"/></svg>3:E
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="First Audit"><use href="#check-circle"/></svg>4:F
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Second Audit"><use href="#check-circle"/></svg>5:S
                                                            </li>
                                                            <li class="active">
                                                                <svg class="icon" data-ui-tooltip title="Paused"><use href="#clock"/></svg>6:P
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Delayed"><use href="#check-circle"/></svg>7:C
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="grid-content no-border round" data-ui-val="Mary Doe|Waiting">
                                                <div class="row no-row-gap no-fluid">
                                                    <div class="col-5">
                                                        <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image2.jpg" alt="">Mary Doe
                                                    </div>
                                                    <div class="col-7">
                                                        <ul class="steps-bar steps-icon theme-yellow ui-color">
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Starting"><use href="#check-circle"/></svg>1:S
                                                            </li>
                                                            <li class="active">
                                                                <svg class="icon" data-ui-tooltip title="Waiting"><use href="#alert-circle"/></svg>2:W
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Expert"><use href="#check-circle"/></svg>3:E
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="First Audit"><use href="#check-circle"/></svg>4:F
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Second Audit"><use href="#check-circle"/></svg>5:S
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Paused"><use href="#check-circle"/></svg>6:P
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Delayed"><use href="#check-circle"/></svg>7:C
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="grid-content no-border round" data-ui-val="Mike Taylor|Completed">
                                                <div class="row no-row-gap no-fluid">
                                                    <div class="col-5">
                                                        <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image3.jpg" alt="">Mike Taylor
                                                    </div>
                                                    <div class="col-7">
                                                        <ul class="steps-bar steps-icon">
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Starting"><use href="#check-circle"/></svg>1:S
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Waiting"><use href="#check-circle"/></svg>2:W
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Expert"><use href="#check-circle"/></svg>3:E
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="First Audit"><use href="#check-circle"/></svg>4:F
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Second Audit"><use href="#check-circle"/></svg>5:S
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Paused"><use href="#check-circle"/></svg>6:P
                                                            </li>
                                                            <li class="active">
                                                                <svg class="icon" data-ui-tooltip title="Delayed"><use href="#clock"/></svg>7:C
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="grid-content no-border round" data-ui-val="Tony Starky|Paused">
                                                <div class="row no-row-gap no-fluid">
                                                    <div class="col-5">
                                                        <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image.jpg" alt="">Tony Starky
                                                    </div>
                                                    <div class="col-7">
                                                        <ul class="steps-bar steps-icon">
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Starting"><use href="#check-circle"/></svg>1:S
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Waiting"><use href="#check-circle"/></svg>2:W
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Expert"><use href="#check-circle"/></svg>3:E
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="First Audit"><use href="#check-circle"/></svg>4:F
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Second Audit"><use href="#check-circle"/></svg>5:S
                                                            </li>
                                                            <li class="active">
                                                                <svg class="icon" data-ui-tooltip title="Paused"><use href="#clock"/></svg>>6:P
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Delayed"><use href="#check-circle"/></svg>7:C
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="grid-content no-border round" data-ui-val="John Atkinson|Paused">
                                                <div class="row no-row-gap no-fluid">
                                                    <div class="col-5">
                                                        <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image.jpg" alt="">John Atkinson
                                                    </div>
                                                    <div class="col-7">
                                                        <ul class="steps-bar steps-icon">
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Starting"><use href="#check-circle"/></svg>1:S
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Waiting"><use href="#check-circle"/></svg>2:W
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Expert"><use href="#check-circle"/></svg>3:E
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="First Audit"><use href="#check-circle"/></svg>4:F
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Second Audit"><use href="#check-circle"/></svg>5:S
                                                            </li>
                                                            <li class="active">
                                                                <svg class="icon" data-ui-tooltip title="Paused"><use href="#clock"/></svg>6:P
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Delayed"><use href="#check-circle"/></svg>7:C
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="grid-content no-border round" data-ui-val="Mary Doe|Waiting">
                                                <div class="row no-row-gap no-fluid">
                                                    <div class="col-5">
                                                        <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image2.jpg" alt="">Mary Doe
                                                    </div>
                                                    <div class="col-7">
                                                        <ul class="steps-bar steps-icon theme-yellow ui-color">
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Starting"><use href="#check-circle"/></svg>1:S
                                                            </li>
                                                            <li class="active">
                                                                <svg class="icon" data-ui-tooltip title="Waiting"><use href="#alert-circle"/></svg>2:W
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Expert"><use href="#check-circle"/></svg>3:E
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="First Audit"><use href="#check-circle"/></svg>4:F
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Second Audit"><use href="#check-circle"/></svg>5:S
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Paused"><use href="#check-circle"/></svg>6:P
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Delayed"><use href="#check-circle"/></svg>7:C
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="grid-content no-border round" data-ui-val="Mike Taylor|Completed">
                                                <div class="row no-row-gap no-fluid">
                                                    <div class="col-5">
                                                        <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image3.jpg" alt="">Mike Taylor
                                                    </div>
                                                    <div class="col-7">
                                                        <ul class="steps-bar steps-icon">
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Starting"><use href="#check-circle"/></svg>1:S
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Waiting"><use href="#check-circle"/></svg>2:W
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Expert"><use href="#check-circle"/></svg>3:E
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="First Audit"><use href="#check-circle"/></svg>4:F
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Second Audit"><use href="#check-circle"/></svg>5:S
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Paused"><use href="#check-circle"/></svg>6:P
                                                            </li>
                                                            <li class="active">
                                                                <svg class="icon" data-ui-tooltip title="Delayed"><use href="#clock"/></svg>7:C
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="grid-content no-border round" data-ui-val="Tony Starky|Paused">
                                                <div class="row no-row-gap no-fluid">
                                                    <div class="col-5">
                                                        <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image.jpg" alt="">Tony Starky
                                                    </div>
                                                    <div class="col-7">
                                                        <ul class="steps-bar steps-icon">
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Starting"><use href="#check-circle"/></svg>1:S
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Waiting"><use href="#check-circle"/></svg>2:W
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Expert"><use href="#check-circle"/></svg>3:E
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="First Audit"><use href="#check-circle"/></svg>4:F
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Second Audit"><use href="#check-circle"/></svg>5:S
                                                            </li>
                                                            <li class="active">
                                                                <svg class="icon" data-ui-tooltip title="Paused"><use href="#clock"/></svg>>6:P
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Delayed"><use href="#check-circle"/></svg>7:C
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="grid-content no-border round" data-ui-val="John Atkinson|Paused">
                                                <div class="row no-row-gap no-fluid">
                                                    <div class="col-5">
                                                        <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image.jpg" alt="">John Atkinson
                                                    </div>
                                                    <div class="col-7">
                                                        <ul class="steps-bar steps-icon">
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Starting"><use href="#check-circle"/></svg>1:S
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Waiting"><use href="#check-circle"/></svg>2:W
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Expert"><use href="#check-circle"/></svg>3:E
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="First Audit"><use href="#check-circle"/></svg>4:F
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Second Audit"><use href="#check-circle"/></svg>5:S
                                                            </li>
                                                            <li class="active">
                                                                <svg class="icon" data-ui-tooltip title="Paused"><use href="#clock"/></svg>6:P
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Delayed"><use href="#check-circle"/></svg>7:C
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="grid-content no-border round" data-ui-val="Mary Doe|Waiting">
                                                <div class="row no-row-gap no-fluid">
                                                    <div class="col-5">
                                                        <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image2.jpg" alt="">Mary Doe
                                                    </div>
                                                    <div class="col-7">
                                                        <ul class="steps-bar steps-icon theme-yellow ui-color">
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Starting"><use href="#check-circle"/></svg>1:S
                                                            </li>
                                                            <li class="active">
                                                                <svg class="icon" data-ui-tooltip title="Waiting"><use href="#alert-circle"/></svg>2:W
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Expert"><use href="#check-circle"/></svg>3:E
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="First Audit"><use href="#check-circle"/></svg>4:F
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Second Audit"><use href="#check-circle"/></svg>5:S
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Paused"><use href="#check-circle"/></svg>6:P
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Delayed"><use href="#check-circle"/></svg>7:C
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="grid-content no-border round" data-ui-val="Mike Taylor|Completed">
                                                <div class="row no-row-gap no-fluid">
                                                    <div class="col-5">
                                                        <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image3.jpg" alt="">Mike Taylor
                                                    </div>
                                                    <div class="col-7">
                                                        <ul class="steps-bar steps-icon">
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Starting"><use href="#check-circle"/></svg>1:S
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Waiting"><use href="#check-circle"/></svg>2:W
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Expert"><use href="#check-circle"/></svg>3:E
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="First Audit"><use href="#check-circle"/></svg>4:F
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Second Audit"><use href="#check-circle"/></svg>5:S
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Paused"><use href="#check-circle"/></svg>6:P
                                                            </li>
                                                            <li class="active">
                                                                <svg class="icon" data-ui-tooltip title="Delayed"><use href="#clock"/></svg>7:C
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="grid-content no-border round" data-ui-val="Tony Starky|Paused">
                                                <div class="row no-row-gap no-fluid">
                                                    <div class="col-5">
                                                        <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image.jpg" alt="">Tony Starky
                                                    </div>
                                                    <div class="col-7">
                                                        <ul class="steps-bar steps-icon">
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Starting"><use href="#check-circle"/></svg>1:S
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Waiting"><use href="#check-circle"/></svg>2:W
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Expert"><use href="#check-circle"/></svg>3:E
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="First Audit"><use href="#check-circle"/></svg>4:F
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Second Audit"><use href="#check-circle"/></svg>5:S
                                                            </li>
                                                            <li class="active">
                                                                <svg class="icon" data-ui-tooltip title="Paused"><use href="#clock"/></svg>>6:P
                                                            </li>
                                                            <li>
                                                                <svg class="icon" data-ui-tooltip title="Delayed"><use href="#check-circle"/></svg>7:C
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        <span class="sp-10"></span>

                                        <div class="row no-row-gap no-fluid">
                                            <div class="col-4">
                                                <div class="padding-5-v">
                                                    Total <b class="grid-total"></b>
                                                </div>
                                            </div>
                                            <div class="col-8 align-r">
                                                <div class="grid-paging pagination ease-1st-btn" data-ui-default="btn round" data-ui-active="theme-panel2 ui-bg-dark-100"></div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <!-- dashboard: end -->

                </div>

            </div>
            <!-- layouts: end -->

        </div>

    </div>
</main>

<!-- mobile menu -->
<div class="mobile-menu show-l theme-panel ui-bg-dark-100 ease-layout ease-in-out">
    <div class="mobile-menu-title no-padding border-b">
        <button class="btn btn-square btn-lg btn-ghost circle ease-btn close-mobile-menu">
            <svg class="icon no-opacity"><use href="#remove"/></svg>
        </button>
        <img src="img/logo-udashboard.png" height="66" alt="">
    </div>
    <div class="mobile-menu-content no-padding scroll-v"></div>
</div>

<!-- modal search -->
<div class="search modal form-lg">
    <div class="modal-container xs-no-padding">

        <form action="#successful">
            <h2>Search</h2>
            <p class="large font-color-white-50 xs-align-c">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada purus eget enim tempus, sed faucibus ante blandit. Morbi a pharetra sapien.</p>

            <div class="col-static no-fluid">
                <div class="row no-row-gap-h">
                    <div class="col-12 ease-1st-form">
                        <div class="text text-icon has-clear round-l no-border shadow-in-sm theme-gray ui-bg-light-300">
                            <button type="button" class="clear-form">
                                <svg class="icon"><use href="#remove"/></svg>
                            </button>
                            <input class="required" type="text" placeholder="Search">
                        </div>
                        <p class="required-msg large">Please, enter a keyword.</p>
                    </div>
                </div>
                <div class="col-100 col-xs-50 padding-10-v">
                    <button class="btn block round-r theme-panel2 ui-bg-dark-100 ease-btn" type="submit">
                        <svg class="icon"><use href="#search"/></svg>
                    </button>
                </div>
            </div>

            <div class="row xs-fluid icons-xxl block-2nd icons-no-opacity hover-t-more-2nd icons-margin-5-v theme-panel ease-2nd-btn">
                <div class="col-4 padding-10-b">
                    <a class="btn btn-multi no-line-height round ui-bg-dark-100" href="#">
                        <svg class="icon"><use href="#news"/></svg>
                        <span class="x-large block margin-5-t">News</span>
                        <span class="font-color-white-50">589</span>
                    </a>
                </div>
                <div class="col-4 padding-10-b">
                    <a class="btn btn-multi no-line-height round ui-bg-dark-100" href="#">
                        <svg class="icon"><use href="#calendar-check"/></svg>
                        <span class="x-large block margin-5-t">Events</span>
                        <span class="font-color-white-50">219</span>
                    </a>
                </div>
                <div class="col-4 padding-10-b">
                    <a class="btn btn-multi no-line-height round ui-bg-dark-100" href="#">
                        <svg class="icon"><use href="#files"/></svg>
                        <span class="x-large block margin-5-t">Documents</span>
                        <span class="font-color-white-50">701</span>
                    </a>
                </div>
            </div>
        </form>

    </div>
</div>