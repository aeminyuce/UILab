<!-- custom CSS -->
<style>
    .theme-panel.ui-x-light,.theme-panel .ui-x-light:not([class*="theme-"]) { background-color: #c2c4ee; }
    .theme-panel.ui-light,.theme-panel .ui-light:not([class*="theme-"]) { background-color: #a4a8f3; }
    .theme-panel.ui-dark,.theme-panel .ui-dark:not([class*="theme-"]) { background-color: #2f3b80; }
    .theme-panel.ui-text,.theme-panel .ui-text:not([class*="theme-"]) { color: #3548b9; }
    .theme-panel.ui-border,.theme-panel .ui-border:not([class*="theme-"]) { border-color: #3548b9; }
    .theme-panel.ui-x-dark,.theme-panel .ui-x-dark:not([class*="theme-"]) { background-color: #273375; }

    .theme-panel2.ui-x-light,.theme-panel2 .ui-x-light:not([class*="theme-"]) { background-color: #d1f4fa; }
    .theme-panel2.ui-light,.theme-panel2 .ui-light:not([class*="theme-"]) { background-color: #abebf5; }
    .theme-panel2.ui-dark,.theme-panel2 .ui-dark:not([class*="theme-"]) { background-color: #00bddf; }
    .theme-panel2.ui-text,.theme-panel2 .ui-text:not([class*="theme-"]) { color: #05aac7; }
    .theme-panel2.ui-border,.theme-panel2 .ui-border:not([class*="theme-"]) { border-color: #00bddf; }
    .theme-panel2.ui-x-dark,.theme-panel2 .ui-x-dark:not([class*="theme-"]) { background-color: #00a8d5; }

    body { background-color: #f7f7f7; overflow-x: hidden; }

    .sticky-header .sidebar { top: -62px; }
    header { background-color: #fbfbfb; }

    .dashboard-carousel { margin-bottom: -5px; }

    @media (min-width: 1480px) {
        .fixed-inner { max-width: 1480px; }
    }
    @media (min-width: 1200px) {
        header.sticky.sidebar-opened { width: calc(100% - 250px); left: 250px; }
    }

    @media (prefers-color-scheme: dark) {
        header { background-color: #23272f; }
    }

</style>

<!-- custom js -->
<script>

    // Toggle Sidebar
    var testStorage;

    function toggler(onload) {

        var sidebar, sidebarInner, toggleClasses, state;

        sidebar = selector('.sidebar')[0];
        sidebarInner = selector('.sidebar > div')[0];

        toggleClasses = function () { // toggle classnames

            events.toggleClass(sidebar, 'hidden visible-lg');
            events.toggleClass('header', 'sidebar-opened');

            events.toggleClass('.show-mobile-menu-l', 'hidden-lg');
            events.toggleClass('.sidebar-show', 'hidden');

        };

        if (events.hasClass(sidebar, 'hidden')) { // show

            state = 'opened';
            toggleClasses(); // toggle classnames

            setTimeout(function () {

                sidebar.style.width = '250px';
                sidebarInner.style.transform = 'translateX(0)';

                    setTimeout(function () {

                        sidebar.style.removeProperty('width');
                        sidebar.style.removeProperty('transform');

                    }, 0);

            }, 0);

        } else { // hide

            state = 'closed';

            sidebar.style.width = '0';
            sidebarInner.style.transform = 'translateX(-100%)';

            // toggle classnames
            if (onload) {
                setTimeout(toggleClasses, 400);

            } else { toggleClasses(); }

        }

        setTimeout(function () {
            events.trigger(document, 'domChange'); // set custom event
        }, 400);

        // set sidebar state
        if (testStorage && sessionStorage !== undefined) {
            sessionStorage.setItem('dashboard-left-sidebar', state);
        }

    }

    events.on(document, 'click', '.sidebar-show,.sidebar-hide', toggler);

    events.onload(function () { // check stored sidebar position

        testStorage = true;

        // test for storage is supported?
        try {
            sessionStorage.setItem('dataListTest', 0);

        } catch (e) {
            testStorage = false;
        }

        if (testStorage && sessionStorage !== undefined) {

            var state = sessionStorage.getItem('dashboard-left-sidebar');
            if (state !== null && state === 'closed') { toggler(true); }

        }

    });

</script>

<main class="container no-gutter">

    <div class="col-static sm-fluid">

        <!-- sidebar -->
        <div class="sidebar col-250 set-relative visible-lg theme-panel ease-width ease-slow ease-in-out">
            <div class="col-250 full-h set-fixed set-l ui-dark scroll-v ease-layout ease-slow ease-in-out">

                <div class="ui-x-dark set-relative">
                    <img src="img/logo-udashboard.png" width="194" height="62" alt="">
                    <button class="sidebar-hide opacity-more padding-10-h ease-btn set-absolute set-c-y set-r" data-tooltip title="Toggle Sidebar">
                        <i class="icon icon-bars"></i>
                    </button>
                </div>

                <div class="tabs align-l icons-no-opacity theme-panel2 ease-tabs ease-1st-btn add-mobile-menu-l" data-classes="ui-text">

                    <div class="padding-10">
                        <div class="small margin-10-b light-ui">Personal Activity</div>

                        <div class="btn-holder align-c round ease-1st-btn">
                            <button class="btn btn-multi padding-10-v round">

                                <span class="xx-large xx-light">13</span>
                                <span class="small light-ui margin-5-b block">Waiting</span>
                                <span class="progress-bar progress round border-dual">
                                    <span class="ui-dark stripe-light" style="width: 65%;"></span>
                                </span>

                            </button>
                            <button class="btn btn-multi padding-10-v round">

                                <span class="xx-large xx-light">3</span>
                                <span class="small light-ui margin-5-b block">Paused</span>
                                <span class="progress-bar progress round border-dual">
                                    <span class="ui-dark stripe-light" style="width: 35%;"></span>
                                </span>

                            </button>
                            <button class="btn btn-multi padding-10-v round">

                                <span class="xx-large xx-light">16</span>
                                <span class="small light-ui margin-5-b block">Delayed</span>
                                <span class="progress-bar progress round border-dual">
                                    <span class="ui-dark stripe-light" style="width: 75%;"></span>
                                </span>

                            </button>
                        </div>
                    </div>

                    <a href="#" class="btn btn-lg btn-ghost block margin-10-v">
                        <i class="icon icon-tachometer margin-15-r"></i>
                        Dashboard
                    </a>

                    <button class="tab btn-toggle btn btn-lg btn-ghost block ui-text active">
                        <i class="icon icon-users margin-15-r"></i>
                        <i class="icon right toggle-icon icon-xs icon-angle-down"></i>
                        Employees
                    </button>

                    <div class="tab-content padding-15-v padding-3-l open open-ease">
                        <ul class="tabs list-spacer-15 padding-20-l ease-2nd-btn" data-classes="ui-text">
                            <li>
                                <a class="tab btn-toggle opacity" href="#">
                                    <i class="icon right toggle-icon margin-4-v margin-10-h icon-xs icon-arrow-down"></i>
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
                                    <i class="icon right toggle-icon margin-4-v margin-10-h icon-xs icon-arrow-down"></i>
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

                    <button class="tab btn-toggle btn btn-lg btn-ghost block">
                        <i class="icon icon-moneys margin-15-r"></i>
                        <i class="icon right toggle-icon icon-xs icon-angle-down"></i>
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

                    <button class="tab btn-toggle btn btn-lg btn-ghost block">
                        <i class="icon icon-calendar-check margin-15-r"></i>
                        <i class="icon right toggle-icon icon-xs icon-angle-down"></i>
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

                    <button class="tab btn-toggle btn btn-lg btn-ghost block">
                        <i class="icon icon-files margin-15-r"></i>
                        <i class="icon right toggle-icon icon-xs icon-angle-down"></i>
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

                    <button class="tab btn-toggle btn btn-lg btn-ghost block">
                        <i class="icon icon-chart-line margin-15-r"></i>
                        <i class="icon right toggle-icon icon-xs icon-angle-down"></i>
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

                    <button class="tab btn-toggle btn btn-lg btn-ghost block">
                        <i class="icon icon-doc margin-15-r"></i>
                        <i class="icon right toggle-icon icon-xs icon-angle-down"></i>
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

                    <button class="tab btn-toggle btn btn-lg btn-ghost block">
                        <i class="icon icon-truck-fill margin-15-r"></i>
                        <i class="icon right toggle-icon icon-xs icon-angle-down"></i>
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

                    <span class="sp15"></span>

                    <div class="btn-list margin-10 icons-margin-10-r form-lg ease-1st-btn">
                        <button class="btn round">
                            <i class="icon icon-shield"></i>Administration
                        </button>
                        <button class="btn round">
                            <i class="icon icon-clock"></i>Recent History
                        </button>
                        <button class="btn round">
                            <i class="icon icon-settings"></i>Tools
                        </button>
                    </div>

                </div>

            </div>
        </div>

        <div class="row">

            <!-- header: start -->
            <header class="col-12 align-r icons-no-opacity shadow-sm form-lg ease-layout ease-slow sidebar-opened" data-classes="shadow-lg">

                <div class="align-c left ease-1st-btn">
                    <button class="sidebar-show btn dark btn-ghost padding-10 circle visible-lg hidden" data-tooltip title="Toggle Sidebar">
                        <i class="icon icon-bars theme-panel2 ui-text"></i>
                    </button>
                    <button class="btn dark btn-ghost padding-10 circle show-mobile-menu-l hidden-lg" data-tooltip title="Show Sidebar" data-only="desktop">
                        <i class="icon icon-bars-left"></i>
                    </button>
                    <button class="btn dark btn-ghost padding-10 circle" onclick="modal.open({source: '.search', bg: 'false'});" data-tooltip data-only="desktop" title="Search">
                        <i class="icon icon-search"></i>
                    </button>
                    <div class="dropdown nav ease-dropdown">
                        <button class="btn dark btn-ghost padding-10 circle hidden-sm">
                            My Reports
                            <i class="toggle-icon icon margin-5-l icon-xs icon-angle-down"></i>
                        </button>
                        <button class="btn dark btn-ghost padding-10 circle visible-sm">
                            <i class="icon icon-user-circle"></i>
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
                    <div class="dropdown nav ease-dropdown">
                        <button class="btn dark btn-ghost padding-10 circle hidden-sm">
                            My Jobs
                            <i class="toggle-icon icon margin-5-l icon-xs icon-angle-down"></i>
                        </button>
                        <button class="btn dark btn-ghost padding-10 circle visible-sm">
                            <i class="icon icon-user-search"></i>
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
                        <button class="btn dark btn-square btn-ghost circle" data-notifier data-tooltip="l" data-only="desktop" title="Personal Logs">
                            <i class="icon icon-grid-column"></i>
                        </button>
                        <div class="content round shadow-lg no-scroll">
                            <div class="tabs xs-full-width theme-panel2 ease-tabs" data-classes="border-b border-lg ui-border ui-text" style="min-width: 300px;">

                                <div class="btn-holder dark align-c border-b ease-1st-btn">
                                    <button class="tab btn btn-ghost round-t border-b border-lg ui-border ui-text active" data-tooltip data-only="desktop" title="Favorites">
                                        <i class="icon icon-star-fill ui-no"></i>
                                    </button>
                                    <button class="tab btn btn-ghost round-t" data-tooltip data-only="desktop" title="History">
                                        <i class="icon icon-history ui-no"></i>
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
                                            <span class="margin-5-t block ease-1st-btn">
                                                <a class="btn btn-square round" href="#">
                                                    <i class="icon icon-lg icon-file-pdf default-icon"></i>
                                                </a>
                                                <a class="btn btn-square round" href="#">
                                                    <i class="icon icon-lg icon-file-xls default-icon"></i>
                                                </a>
                                                <a class="btn btn-square round" href="#">
                                                    <i class="icon icon-lg icon-file-zip default-icon"></i>
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
                        <button class="btn dark btn-square btn-ghost circle" data-notifier data-tooltip="l" data-only="desktop" title="Notification Center">
                            <i class="icon icon-bars-right"></i>
                        </button>
                        <div class="content round shadow-lg no-scroll">
                            <div class="tabs xs-full-width theme-panel2 ease-tabs" data-classes="border-b border-lg ui-border ui-text" style="min-width: 300px;">

                                <div class="btn-holder dark align-c border-b ease-1st-btn">
                                    <button class="tab btn btn-ghost round-t border-b border-lg ui-border ui-text active" data-tooltip data-only="desktop" title="Notifications">
                                        <i class="icon icon-bell-on ui-no"></i>
                                    </button>
                                    <button class="tab btn btn-ghost round-t" data-tooltip data-only="desktop" title="Notes">
                                        <i class="icon icon-pencil-write ui-no"></i>
                                    </button>
                                    <button class="tab btn btn-ghost round-t" data-tooltip data-only="desktop" title="Started Jobs">
                                        <i class="icon icon-hourglass-start ui-no"></i>
                                    </button>
                                    <button class="tab btn btn-ghost round-t" data-tooltip data-only="desktop" title="Completed Jobs">
                                        <i class="icon icon-hourglass-end ui-no"></i>
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
                                            <span class="margin-5-t block ease-1st-btn">
                                                <a class="btn btn-square round" href="#">
                                                    <i class="icon icon-lg icon-file-pdf default-icon"></i>
                                                </a>
                                                <a class="btn btn-square round" href="#">
                                                    <i class="icon icon-lg icon-file-xls default-icon"></i>
                                                </a>
                                                <a class="btn btn-square round" href="#">
                                                    <i class="icon icon-lg icon-file-zip default-icon"></i>
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
                                            <span class="margin-5-t block ease-1st-btn">
                                                <a class="btn btn-square round" href="#">
                                                    <i class="icon icon-lg icon-file-pdf default-icon"></i>
                                                </a>
                                                <a class="btn btn-square round" href="#">
                                                    <i class="icon icon-lg icon-file-xls default-icon"></i>
                                                </a>
                                                <a class="btn btn-square round" href="#">
                                                    <i class="icon icon-lg icon-file-zip default-icon"></i>
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
                        <ul class="content has-grid align-c round shadow-lg">
                            <li><a href="#"><i class="icon icon-lg icon-user"></i>Profile</a></li>
                            <li><a href="#"><i class="icon icon-lg icon-calendar"></i>Calendar</a></li>
                            <li><a href="#"><i class="icon icon-lg icon-lock"></i>Lock Screen</a></li>
                            <li><a href="#"><i class="icon icon-lg icon-key"></i>Change Password</a></li>
                            <li><a href="#"><i class="icon icon-lg icon-setting"></i>Settings</a></li>
                            <li><a href="#"><i class="icon icon-lg theme-red ui-text icon-sign-out"></i>Logout</a></li>
                        </ul>
                    </span>
                    <span class="margin-3-t inline-block hidden-xs">aeminyuce</span>
                    <span class="small x-dark block hidden-xs">Premium</span>
                </div>

            </header>
            <!-- header: end -->

            <!-- layouts: start -->
            <div class="tabs ease-tabs padding-15-b" data-classes="border-lg border-b ui-border ui-text">

                <div class="container">
                    <div class="row border-b margin-15-b theme-panel2">
                        <div class="col-4 offset-4 no-padding-b">

                            <div class="btn-holder dark form-lg ease-1st-btn">
                                <button class="tab btn btn-ghost round-t border-lg border-b ui-border ui-text active">Forms</button>
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

                                <div class="card full-h round shadow-lg">

                                    <form action="#succesful">
                                        <div class="card-side padding-15 border-b icons-no-opacity">
                                            <div class="row xs-fluid">
                                                <div class="col-4 padding-5-v xs-no-padding-t">
                                                    <h4 class="margin-5-t xs-no-margin-t">Forms Title</h4>
                                                </div>
                                                <div class="col-8 align-r xs-align-c">

                                                    <button type="submit" class="btn btn-lg padding-15-h round theme-green ui-dark ease-btn">
                                                        <i class="icon icon-save margin-5-r"></i> Save
                                                    </button>

                                                    <div class="dropdown menu-l ease-dropdown">
                                                        <button type="button" class="btn btn-lg btn-ghost btn-square round">
                                                            <i class="icon icon-ellipsis-v default-icon"></i>
                                                        </button>
                                                        <ul class="content has-icon round shadow-lg">
                                                            <li><a href="#"><i class="list-icon icon icon-check"></i>Save &amp; Continue</a></li>
                                                            <li><a href="#"><i class="list-icon icon icon-sign-out"></i>Save &amp; Exit</a></li>
                                                            <li><a href="#"><i class="list-icon icon icon-pencil"></i>Save &amp; Edit</a></li>
                                                            <li><a href="#"><i class="list-icon icon icon-plus"></i>Save &amp; Add New</a></li>
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
                                                        <i class="icon icon-phone"></i>
                                                        <input class="required number" type="text" placeholder="123-123-1234" minlength="12" maxlength="12">
                                                    </div>
                                                    <p class="required-msg">Enter your phone.</p>
                                                </div>

                                                <div class="col-3 offset-2">
                                                    <label class="form-grid">Age</label>
                                                </div>
                                                <div class="col-5">
                                                    <div class="select round border-dual ease-form">
                                                        <i class="icon icon-angle-down"></i>
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
                                                        <i class="icon icon-at"></i>
                                                        <input class="required number" type="email" placeholder="123-123-1234">
                                                    </div>
                                                    <p class="required-msg">Enter your mail.</p>
                                                </div>

                                                <div class="col-3 offset-2">
                                                    <label class="form-grid">Company Site</label>
                                                </div>
                                                <div class="col-5">
                                                    <div class="form-holder col-static no-fluid">

                                                        <div class="row row-no-gap">
                                                            <div class="col-12">
                                                                <div class="text text-icon-l round border-dual ease-form">
                                                                    <i class="icon icon-browser"></i>
                                                                    <input class="required" type="text" placeholder="Site name">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-200">
                                                            <div class="select round border-dual ease-form">
                                                                <i class="icon icon-angle-down"></i>
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

                                                <div class="sp1 margin-20 border-b border-dashed"></div>

                                                <div class="col-8 offset-2">
                                                    <h3>Address Details</h3>
                                                </div>

                                                <div class="col-3 offset-2">
                                                    <label class="form-grid">Country</label>
                                                </div>
                                                <div class="col-5">
                                                    <div data-src="json/countries.json" data-val="name" class="autocomplete text text-icon-l round border-dual ease-form">
                                                        <i class="icon icon-sm icon-keyboard"></i>
                                                        <input type="text" placeholder="Type/Select your country" autocomplete="off">
                                                    </div>
                                                    <p class="required-msg">Type/Select your country.</p>
                                                </div>

                                                <div class="col-3 offset-2">
                                                    <label class="form-grid">Address</label>
                                                </div>
                                                <div class="col-5">
                                                    <div class="textarea round border-dual ease-form" data-counter="1000">
                                                        <textarea class="required" rows="3"></textarea>
                                                    </div>
                                                    <p class="required-msg">Enter your address details.</p>
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
                                <div class="dashboard-carousel carousel" data-col-xl="4" data-col-lg="2" data-col="2" data-col-md="2" data-col-sm="1" data-col-xs="1">
                                    <div class="carousel-slider icons-margin-5-r ease-layout ease-slow ease-in-out">

                                        <div class="slide-content padding-10-h padding-10-t padding-15-b theme-yellow">
                                            <div class="card full-h padding-15 round shadow-lg">
                                                <div class="col-static no-fluid">
                                                    <div class="row row-no-gap-h row-md-gap-v">
                                                        <div class="col-12">
                                                            <div class="x-large">Pending</div>
                                                            <span class="dark large">Total: 45%</span>
                                                        </div>
                                                    </div>
                                                    <div class="col-100 align-r">
                                                        <span class="x-largest ui-text">157</span>
                                                    </div>
                                                </div>
                                                <div class="progress-bar margin-15-t progress round">
                                                    <span class="ui-dark stripe-light" style="width: 45%;"></span>
                                                </div>
                                                <p class="dark large margin-5-b">Pending for the transaction.</p>
                                                <p class="light">
                                                    <i class="icon icon-xs icon-clock"></i>
                                                    <span class="inline-block">Last updated: 15:12</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div class="slide-content padding-10-h padding-10-t padding-15-b theme-yellow">
                                            <div class="card full-h padding-15 round shadow-lg">
                                                <div class="col-static no-fluid">
                                                    <div class="row row-no-gap-h row-md-gap-v">
                                                        <div class="col-12">
                                                            <div class="x-large">Paused</div>
                                                            <span class="dark large">Total: 5%</span>
                                                        </div>
                                                    </div>
                                                    <div class="col-100 align-r">
                                                        <span class="x-largest ui-text">23</span>
                                                    </div>
                                                </div>
                                                <div class="progress-bar margin-15-t progress round">
                                                    <span class="ui-dark stripe-light" style="width: 5%;"></span>
                                                </div>
                                                <p class="dark large margin-5-b">Paused for the some reasons.</p>
                                                <p class="light">
                                                    <i class="icon icon-xs icon-clock"></i>
                                                    <span class="inline-block">Last updated: 15:12</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div class="slide-content padding-10-h padding-10-t padding-15-b theme-green">
                                            <div class="card full-h padding-15 round shadow-lg">
                                                <div class="col-static no-fluid">
                                                    <div class="row row-no-gap-h row-md-gap-v">
                                                        <div class="col-12">
                                                            <div class="x-large">Completed</div>
                                                            <span class="dark large">Total: 80%</span>
                                                        </div>
                                                    </div>
                                                    <div class="col-100 align-r">
                                                        <span class="x-largest ui-text">256</span>
                                                    </div>
                                                </div>
                                                <div class="progress-bar margin-15-t progress round">
                                                    <span class="ui-dark stripe-light" style="width: 80%;"></span>
                                                </div>
                                                <p class="dark large margin-5-b">Reached for the expert.</p>
                                                <p class="light">
                                                    <i class="icon icon-xs icon-clock"></i>
                                                    <span class="inline-block">Last updated: 15:12</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div class="slide-content padding-10-h padding-10-t padding-15-b theme-panel2">
                                            <div class="card full-h padding-15 round shadow-lg">
                                                <div class="col-static no-fluid">
                                                    <div class="row row-no-gap-h row-md-gap-v">
                                                        <div class="col-12">
                                                            <div class="align-l x-large">On Payment</div>
                                                            <span class="dark large">Total: 67%</span>
                                                        </div>
                                                    </div>
                                                    <div class="col-100 align-r">
                                                        <span class="x-largest ui-text">256</span>
                                                    </div>
                                                </div>
                                                <div class="progress-bar margin-15-t progress round">
                                                    <span class="ui-dark stripe-light" style="width: 67%;"></span>
                                                </div>
                                                <p class="dark large margin-5-b">Confirmed for payment.</p>
                                                <p class="light">
                                                    <i class="icon icon-xs icon-clock"></i>
                                                    <span class="inline-block">Last updated: 15:12</span>
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="carousel-nav no-margin-t margin-10-b ease-1st-btn">
                                        <button class="carousel-prev btn btn-ghost btn-square round"><i class="icon icon-angle-left"></i></button>
                                        <span class="dots dark"></span>
                                        <button class="carousel-next btn btn-ghost btn-square round"><i class="icon icon-angle-right"></i></button>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xl-3 col-lg-6 col-12 col-md-6">
                                <div class="card full-h padding-15 round shadow-lg">
                                    <div class="dropdown menu-l right ease-dropdown">
                                        <button class="btn btn-square btn-ghost round">
                                            <i class="icon icon-sm icon-ellipsis-v"></i>
                                        </button>
                                        <ul class="content has-icon round shadow-lg">
                                            <li><a href="#"><i class="list-icon icon icon-file-pdf"></i>Download PDF</a></li>
                                            <li><a href="#"><i class="list-icon icon icon-file-xls"></i>Download Excel</a></li>
                                            <li><a href="#"><i class="list-icon icon icon-eye"></i>See Detailed Activity</a></li>
                                        </ul>
                                    </div>
                                    <h4 class="align-l margin-5-t">Activity</h4>
                                    <div class="col-static no-fluid">
                                        <div class="row row row-no-gap-h row-md-gap-v">
                                            <div class="col-12 large">
                                                <div class="large bold">Total Progress</div>
                                                <span class="dark">23% Change</span>
                                            </div>
                                        </div>
                                        <div class="col-150 align-r">
                                            <span class="x-largest inline-block">436</span>
                                        </div>
                                    </div>
                                    <div class="row row-lg-gap-h no-fluid">
                                        <div class="col-6">
                                            <div class="donut-chart automargin ease-donut-chart" style="max-width: 150px;">
                                                <strong>
                                                    <b class="x-dark margin-2-b block">69%</b>
                                                    Payments
                                                </strong>
                                                <svg viewBox="0 0 160 160">
                                                    <circle r="69.85699" cy="80" cx="80" class="bg" data-percent="100" />
                                                    <circle r="69.85699" cy="80" cx="80" stroke="#75dbe7" data-percent="69" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="pie-chart automargin ease-pie-chart" data-text="Profit" style="max-width: 150px;">
                                                <ul>
                                                    <li data-percent="70" data-fill="#a4e87b"></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <span class="sp3"></span>
                                    <p class="x-dark large margin-5-b">Daily reports that all received.</p>
                                    <p class="light">
                                        <i class="icon icon-xs icon-clock margin-5-r"></i>
                                        <span class="inline-block">Last updated: 15:12</span>
                                    </p>
                                </div>
                            </div>

                            <div class="col-xl-3 col-lg-6 col-12 col-md-6">
                                <div class="card full-h padding-15 padding-10-t round shadow-lg" style="min-height: 350px;">
                                    <div class="tabs theme-panel2 ease-tabs" data-classes="border-b border-lg ui-border ui-text">

                                        <div class="btn-holder dark align-c margin-10-b border-b form-lg ease-1st-btn">
                                            <button class="tab btn btn-ghost round-t border-b border-lg ui-border ui-text active">Delayed</button>
                                            <button class="tab btn btn-ghost round-t">Paused</button>
                                        </div>
                                        <div class="tab-content set-absolute set-h scroll-v open open-ease" style="top: 62px; bottom: 15px;">
                                            <div class="list-group margin-15-h">
                                                <ul class="ease-list-group">
                                                    <li class="no-border">
                                                        <span class="donut-chart col-42 right ease-donut-chart">
                                                            <strong class="light x-small">88%</strong>
                                                            <svg viewBox="0 0 160 160">
                                                                <circle r="69.85699" cy="80" cx="80" stroke="#0ba8c0" data-percent="88" />
                                                            </svg>
                                                        </span>
                                                        <b class="margin-5-t block">AAC-2019-013:AGF</b>
                                                        <span class="x-dark small">3814 Reports</span>
                                                    </li>
                                                    <li class="no-border">
                                                        <span class="donut-chart col-42 right ease-donut-chart">
                                                            <strong class="light x-small">76%</strong>
                                                            <svg viewBox="0 0 160 160">
                                                                <circle r="69.85699" cy="80" cx="80" stroke="#0ba8c0" data-percent="76" />
                                                            </svg>
                                                        </span>
                                                        <b class="margin-5-t block">BDA-2019-642</b>
                                                        <span class="x-dark small">2613 Reports</span>
                                                    </li>
                                                    <li class="no-border">
                                                        <span class="donut-chart col-42 right ease-donut-chart">
                                                            <strong class="light x-small">69%</strong>
                                                            <svg viewBox="0 0 160 160">
                                                                <circle r="69.85699" cy="80" cx="80" stroke="#0ba8c0" data-percent="69" />
                                                            </svg>
                                                        </span>
                                                        <b class="margin-5-t block">DDG-2019-505:AG</b>
                                                        <span class="x-dark small">1890 Reports</span>
                                                    </li>
                                                    <li class="no-border">
                                                        <span class="donut-chart col-42 right ease-donut-chart">
                                                            <strong class="light x-small">52%</strong>
                                                            <svg viewBox="0 0 160 160">
                                                                <circle r="69.85699" cy="80" cx="80" stroke="#0ba8c0" data-percent="52" />
                                                            </svg>
                                                        </span>
                                                        <b class="margin-5-t block">OOC-2019-781:F</b>
                                                        <span class="x-dark small">1605 Reports</span>
                                                    </li>
                                                    <li class="no-border">
                                                        <span class="donut-chart col-42 right ease-donut-chart">
                                                            <strong class="light x-small">36%</strong>
                                                            <svg viewBox="0 0 160 160">
                                                                <circle r="69.85699" cy="80" cx="80" stroke="#0ba8c0" data-percent="36" />
                                                            </svg>
                                                        </span>
                                                        <b class="margin-5-t block">BDD-2019-047:G</b>
                                                        <span class="x-dark small">812 Reports</span>
                                                    </li>
                                                    <li class="no-border">
                                                        <span class="donut-chart col-42 right ease-donut-chart">
                                                            <strong class="light x-small">36%</strong>
                                                            <svg viewBox="0 0 160 160">
                                                                <circle r="69.85699" cy="80" cx="80" stroke="#0ba8c0" data-percent="36" />
                                                            </svg>
                                                        </span>
                                                        <b class="margin-5-t block">RAC-2019-973</b>
                                                        <span class="x-dark small">616 Reports</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="tab-content set-absolute set-h scroll-v" style="top: 62px; bottom: 15px;">
                                            <div class="list-group margin-15-h">
                                                <ul class="ease-list-group">
                                                    <li class="no-border">
                                                        <span class="donut-chart col-42 right ease-donut-chart">
                                                            <strong class="light x-small">88%</strong>
                                                            <svg viewBox="0 0 160 160">
                                                                <circle r="69.85699" cy="80" cx="80" stroke="#0ba8c0" data-percent="88" />
                                                            </svg>
                                                        </span>
                                                        <b class="margin-5-t block">AAC-2019-013:AGF</b>
                                                        <span class="x-dark small">3814 Reports</span>
                                                    </li>
                                                    <li class="no-border">
                                                        <span class="donut-chart col-42 right ease-donut-chart">
                                                            <strong class="light x-small">76%</strong>
                                                            <svg viewBox="0 0 160 160">
                                                                <circle r="69.85699" cy="80" cx="80" stroke="#0ba8c0" data-percent="76" />
                                                            </svg>
                                                        </span>
                                                        <b class="margin-5-t block">BDA-2019-642</b>
                                                        <span class="x-dark small">2613 Reports</span>
                                                    </li>
                                                    <li class="no-border">
                                                        <span class="donut-chart col-42 right ease-donut-chart">
                                                            <strong class="light x-small">69%</strong>
                                                            <svg viewBox="0 0 160 160">
                                                                <circle r="69.85699" cy="80" cx="80" stroke="#0ba8c0" data-percent="69" />
                                                            </svg>
                                                        </span>
                                                        <b class="margin-5-t block">DDG-2019-505:AG</b>
                                                        <span class="x-dark small">1890 Reports</span>
                                                    </li>
                                                    <li class="no-border">
                                                        <span class="donut-chart col-42 right ease-donut-chart">
                                                            <strong class="light x-small">52%</strong>
                                                            <svg viewBox="0 0 160 160">
                                                                <circle r="69.85699" cy="80" cx="80" stroke="#0ba8c0" data-percent="52" />
                                                            </svg>
                                                        </span>
                                                        <b class="margin-5-t block">OOC-2019-781:F</b>
                                                        <span class="x-dark small">1605 Reports</span>
                                                    </li>
                                                    <li class="no-border">
                                                        <span class="donut-chart col-42 right ease-donut-chart">
                                                            <strong class="light x-small">36%</strong>
                                                            <svg viewBox="0 0 160 160">
                                                                <circle r="69.85699" cy="80" cx="80" stroke="#0ba8c0" data-percent="36" />
                                                            </svg>
                                                        </span>
                                                        <b class="margin-5-t block">BDD-2019-047:G</b>
                                                        <span class="x-dark small">812 Reports</span>
                                                    </li>
                                                    <li class="no-border">
                                                        <span class="donut-chart col-42 right ease-donut-chart">
                                                            <strong class="light x-small">36%</strong>
                                                            <svg viewBox="0 0 160 160">
                                                                <circle r="69.85699" cy="80" cx="80" stroke="#0ba8c0" data-percent="36" />
                                                            </svg>
                                                        </span>
                                                        <b class="margin-5-t block">RAC-2019-973</b>
                                                        <span class="x-dark small">616 Reports</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div class="col-xl-6 col-lg-6 col-12 col-md-6">
                                <div class="card full-h padding-15 round shadow-lg tabs ease-tabs" data-classes="bold">
                                    <div class="dropdown menu-l right ease-dropdown">
                                        <button class="btn btn-square btn-ghost round">
                                            <i class="icon icon-sm icon-ellipsis-v"></i>
                                        </button>
                                        <ul class="content has-icon round shadow-lg">
                                            <li><a href="#"><i class="list-icon icon icon-file-pdf"></i>Download PDF</a></li>
                                            <li><a href="#"><i class="list-icon icon icon-file-xls"></i>Download Excel</a></li>
                                            <li><a href="#"><i class="list-icon icon icon-eye"></i>See Detailed Statistics</a></li>
                                        </ul>
                                    </div>
                                    <div class="dropdown menu-l margin-5-r right ease-dropdown">
                                        <button class="btn btn-ghost round">
                                            <span class="value-toggle">Last year</span>
                                            <i class="toggle-icon icon margin-5-l icon-xs icon-angle-down"></i>
                                        </button>
                                        <ul class="content round shadow-lg">
                                            <li><label class="tab active bold selected">Last year</label></li>
                                            <li><label class="tab">Past year</label></li>
                                        </ul>
                                    </div>
                                    <h4 class="align-l margin-5-t">Statistics</h4>
                                    <div class="tab-content open open-ease">
                                        <div class="line-charts ease-line-charts" data-size="5,48" data-x="Sep,Oct,Nov,Dec,Jan,Fab">
                                            <ul class="line" data-name="Sales" data-type="curved filled">
                                                <li data-y="10" data-link="#"></li>
                                                <li data-y="30" data-link="#"></li>
                                                <li data-y="70" data-link="#"></li>
                                                <li data-y="120" data-link="#"></li>
                                                <li data-y="100" data-link="#"></li>
                                                <li data-y="150" data-link="#"></li>
                                            </ul>
                                            <ul class="line" data-name="Orders" data-type="dashed">
                                                <li data-y="50" data-link="#"></li>
                                                <li data-y="10" data-link="#"></li>
                                                <li data-y="50" data-link="#"></li>
                                                <li data-y="40" data-link="#"></li>
                                                <li data-y="80" data-link="#"></li>
                                                <li data-y="50" data-link="#"></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="tab-content">
                                        <div class="line-charts ease-line-charts" data-size="5,48" data-x="Sep,Oct,Nov,Dec,Jan,Fab">
                                            <ul class="line" data-name="Sales" data-type="curved filled">
                                                <li data-y="10" data-link="#"></li>
                                                <li data-y="60" data-link="#"></li>
                                                <li data-y="20" data-link="#"></li>
                                                <li data-y="120" data-link="#"></li>
                                                <li data-y="10" data-link="#"></li>
                                                <li data-y="100" data-link="#"></li>
                                            </ul>
                                            <ul class="line" data-name="Orders" data-type="dashed">
                                                <li data-y="0" data-link="#"></li>
                                                <li data-y="20" data-link="#"></li>
                                                <li data-y="50" data-link="#"></li>
                                                <li data-y="40" data-link="#"></li>
                                                <li data-y="70" data-link="#"></li>
                                                <li data-y="50" data-link="#"></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xl-3 col-lg-6 col-12 col-md-6">
                                <div class="card full-h padding-15 padding-10-t round shadow-lg" style="min-height: 350px;">
                                    <div class="tabs form-lg theme-panel2 ease-tabs" data-classes="border-b border-lg ui-border ui-text">

                                        <div class="btn-holder dark align-c margin-10-b border-b ease-1st-btn">
                                            <button class="tab btn btn-ghost round-t border-b border-lg ui-border ui-text active">News</button>
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
                                                    <span class="margin-5-t block ease-1st-btn">
                                                        <a class="btn btn-square round" href="#"><i class="icon icon-lg icon-file-pdf"></i></a>
                                                        <a class="btn btn-square round" href="#"><i class="icon icon-lg icon-file-xls"></i></a>
                                                        <a class="btn btn-square round" href="#"><i class="icon icon-lg icon-file-zip"></i></a>
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
                                            <i class="icon icon-sm icon-ellipsis-v"></i>
                                        </button>
                                        <ul class="content has-icon round shadow-lg">
                                            <li><a href="#"><i class="list-icon icon icon-calendar-star"></i>Add to Your Calendar</a></li>
                                            <li><a href="#"><i class="list-icon icon icon-eye"></i>See All Events</a></li>
                                        </ul>
                                    </div>
                                    <h4 class="align-l margin-5-t">Events</h4>
                                    <div class="calendar ease-calendar round no-padding" data-src="json/events.json" data-date="2019,6"></div>
                                </div>
                            </div>

                            <div class="col-xl-6 col-lg-6 col-12 col-md-6">
                                <div class="card full-h padding-15 round shadow-lg">
                                    <div class="dropdown menu-l right ease-dropdown">
                                        <button class="btn btn-square btn-ghost round">
                                            <i class="icon icon-sm icon-ellipsis-v"></i>
                                        </button>
                                        <ul class="content has-icon round shadow-lg">
                                            <li><a href="#"><i class="list-icon icon icon-file-pdf"></i>Download PDF</a></li>
                                            <li><a href="#"><i class="list-icon icon icon-file-xls"></i>Download Excel</a></li>
                                            <li><a href="#"><i class="list-icon icon icon-eye"></i>See All Experts</a></li>
                                        </ul>
                                    </div>
                                    <h4 class="align-l margin-5-t">Experts</h4>
                                    <div class="data-list data-striped data-hover theme-gray ease-data-list">

                                        <div class="row row-no-gap-v row-sm-gap-h">
                                            <div class="col-6 lg-fluid">
                                                <div class="text text-icon-both round no-border ui-x-light has-clear ease-form">
                                                    <i class="icon icon-search text-icon-l"></i>
                                                    <button class="clear-form icon icon-remove"></button>
                                                    <input class="data-filter" type="text" placeholder="Search">
                                                </div>
                                                <span class="sp5 hidden-lg"></span>
                                            </div>
                                            <div class="col-lg-3 col-6 no-fluid">
                                                <div class="select round no-border ui-x-light ease-form">
                                                    <i class="icon icon-angle-down"></i>
                                                    <select class="data-filter" data-index="2">
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
                                                            <i class="icon icon-xs icon-sort"></i> Sort
                                                        </span>
                                                    </button>
                                                    <ul class="content round shadow-lg">
                                                        <li>
                                                            <label class="radio" data-sort="1">
                                                                <i class="icon icon-xs icon-sort ease-layout"></i>
                                                                <input type="radio" name="s">By Name
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label class="radio" data-sort="2">
                                                                <i class="icon icon-xs icon-sort ease-layout"></i>
                                                                <input type="radio" name="s">By Step
                                                            </label>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <select class="data-show hidden">
                                                    <option>4</option>
                                                </select>
                                            </div>
                                        </div>

                                        <span class="sp15"></span>

                                        <div class="data-container">

                                            <div class="data-content no-border round" data-val="John Atkinson|Paused">
                                                <div class="row row-no-gap no-fluid">
                                                    <div class="col-5">
                                                        <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image.jpg" alt="">John Atkinson
                                                    </div>
                                                    <div class="col-7">
                                                        <ul class="steps-bar steps-icon">
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="Starting"></i>1:S
                                                            </li>
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="Waiting"></i>2:W
                                                            </li>
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="Expert"></i>3:E
                                                            </li>
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="First Audit"></i>4:F
                                                            </li>
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="Second Audit"></i>5:S
                                                            </li>
                                                            <li class="active">
                                                                <i class="icon icon-clock" data-tooltip title="Paused"></i>6:P
                                                            </li>
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="Delayed"></i>7:C
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="data-content no-border round" data-val="Mary Doe|Waiting">
                                                <div class="row row-no-gap no-fluid">
                                                    <div class="col-5">
                                                        <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image2.jpg" alt="">Mary Doe
                                                    </div>
                                                    <div class="col-7">
                                                        <ul class="steps-bar steps-icon theme-yellow ui-text">
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="Starting"></i>1:S
                                                            </li>
                                                            <li class="active">
                                                                <i class="icon icon-alert-circle" data-tooltip title="Waiting"></i>2:W
                                                            </li>
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="Expert"></i>3:E
                                                            </li>
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="First Audit"></i>4:F
                                                            </li>
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="Second Audit"></i>5:S
                                                            </li>
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="Paused"></i>6:P
                                                            </li>
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="Delayed"></i>7:C
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="data-content no-border round" data-val="Mike Taylor|Completed">
                                                <div class="row row-no-gap no-fluid">
                                                    <div class="col-5">
                                                        <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image3.jpg" alt="">Mike Taylor
                                                    </div>
                                                    <div class="col-7">
                                                        <ul class="steps-bar steps-icon">
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="Starting"></i>1:S
                                                            </li>
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="Waiting"></i>2:W
                                                            </li>
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="Expert"></i>3:E
                                                            </li>
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="First Audit"></i>4:F
                                                            </li>
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="Second Audit"></i>5:S
                                                            </li>
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="Paused"></i>6:P
                                                            </li>
                                                            <li class="active">
                                                                <i class="icon icon-clock" data-tooltip title="Delayed"></i>7:C
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="data-content no-border round" data-val="Tony Starky|Paused">
                                                <div class="row row-no-gap no-fluid">
                                                    <div class="col-5">
                                                        <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image.jpg" alt="">Tony Starky
                                                    </div>
                                                    <div class="col-7">
                                                        <ul class="steps-bar steps-icon">
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="Starting"></i>1:S
                                                            </li>
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="Waiting"></i>2:W
                                                            </li>
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="Expert"></i>3:E
                                                            </li>
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="First Audit"></i>4:F
                                                            </li>
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="Second Audit"></i>5:S
                                                            </li>
                                                            <li class="active">
                                                                <i class="icon icon-clock" data-tooltip title="Paused"></i>6:P
                                                            </li>
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="Delayed"></i>7:C
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="data-content no-border round" data-val="John Atkinson|Paused">
                                                <div class="row row-no-gap no-fluid">
                                                    <div class="col-5">
                                                        <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image.jpg" alt="">John Atkinson
                                                    </div>
                                                    <div class="col-7">
                                                        <ul class="steps-bar steps-icon">
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="Starting"></i>1:S
                                                            </li>
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="Waiting"></i>2:W
                                                            </li>
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="Expert"></i>3:E
                                                            </li>
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="First Audit"></i>4:F
                                                            </li>
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="Second Audit"></i>5:S
                                                            </li>
                                                            <li class="active">
                                                                <i class="icon icon-clock" data-tooltip title="Paused"></i>6:P
                                                            </li>
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="Delayed"></i>7:C
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="data-content no-border round" data-val="Mary Doe|Waiting">
                                                <div class="row row-no-gap no-fluid">
                                                    <div class="col-5">
                                                        <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image2.jpg" alt="">Mary Doe
                                                    </div>
                                                    <div class="col-7">
                                                        <ul class="steps-bar steps-icon theme-yellow ui-text">
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="Starting"></i>1:S
                                                            </li>
                                                            <li class="active">
                                                                <i class="icon icon-alert-circle" data-tooltip title="Waiting"></i>2:W
                                                            </li>
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="Expert"></i>3:E
                                                            </li>
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="First Audit"></i>4:F
                                                            </li>
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="Second Audit"></i>5:S
                                                            </li>
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="Paused"></i>6:P
                                                            </li>
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="Delayed"></i>7:C
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="data-content no-border round" data-val="Mike Taylor|Completed">
                                                <div class="row row-no-gap no-fluid">
                                                    <div class="col-5">
                                                        <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image3.jpg" alt="">Mike Taylor
                                                    </div>
                                                    <div class="col-7">
                                                        <ul class="steps-bar steps-icon">
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="Starting"></i>1:S
                                                            </li>
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="Waiting"></i>2:W
                                                            </li>
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="Expert"></i>3:E
                                                            </li>
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="First Audit"></i>4:F
                                                            </li>
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="Second Audit"></i>5:S
                                                            </li>
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="Paused"></i>6:P
                                                            </li>
                                                            <li class="active">
                                                                <i class="icon icon-clock" data-tooltip title="Delayed"></i>7:C
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="data-content no-border round" data-val="Tony Starky|Paused">
                                                <div class="row row-no-gap no-fluid">
                                                    <div class="col-5">
                                                        <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image.jpg" alt="">Tony Starky
                                                    </div>
                                                    <div class="col-7">
                                                        <ul class="steps-bar steps-icon">
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="Starting"></i>1:S
                                                            </li>
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="Waiting"></i>2:W
                                                            </li>
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="Expert"></i>3:E
                                                            </li>
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="First Audit"></i>4:F
                                                            </li>
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="Second Audit"></i>5:S
                                                            </li>
                                                            <li class="active">
                                                                <i class="icon icon-clock" data-tooltip title="Paused"></i>6:P
                                                            </li>
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="Delayed"></i>7:C
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="data-content no-border round" data-val="John Atkinson|Paused">
                                                <div class="row row-no-gap no-fluid">
                                                    <div class="col-5">
                                                        <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image.jpg" alt="">John Atkinson
                                                    </div>
                                                    <div class="col-7">
                                                        <ul class="steps-bar steps-icon">
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="Starting"></i>1:S
                                                            </li>
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="Waiting"></i>2:W
                                                            </li>
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="Expert"></i>3:E
                                                            </li>
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="First Audit"></i>4:F
                                                            </li>
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="Second Audit"></i>5:S
                                                            </li>
                                                            <li class="active">
                                                                <i class="icon icon-clock" data-tooltip title="Paused"></i>6:P
                                                            </li>
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="Delayed"></i>7:C
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="data-content no-border round" data-val="Mary Doe|Waiting">
                                                <div class="row row-no-gap no-fluid">
                                                    <div class="col-5">
                                                        <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image2.jpg" alt="">Mary Doe
                                                    </div>
                                                    <div class="col-7">
                                                        <ul class="steps-bar steps-icon theme-yellow ui-text">
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="Starting"></i>1:S
                                                            </li>
                                                            <li class="active">
                                                                <i class="icon icon-alert-circle" data-tooltip title="Waiting"></i>2:W
                                                            </li>
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="Expert"></i>3:E
                                                            </li>
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="First Audit"></i>4:F
                                                            </li>
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="Second Audit"></i>5:S
                                                            </li>
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="Paused"></i>6:P
                                                            </li>
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="Delayed"></i>7:C
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="data-content no-border round" data-val="Mike Taylor|Completed">
                                                <div class="row row-no-gap no-fluid">
                                                    <div class="col-5">
                                                        <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image3.jpg" alt="">Mike Taylor
                                                    </div>
                                                    <div class="col-7">
                                                        <ul class="steps-bar steps-icon">
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="Starting"></i>1:S
                                                            </li>
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="Waiting"></i>2:W
                                                            </li>
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="Expert"></i>3:E
                                                            </li>
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="First Audit"></i>4:F
                                                            </li>
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="Second Audit"></i>5:S
                                                            </li>
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="Paused"></i>6:P
                                                            </li>
                                                            <li class="active">
                                                                <i class="icon icon-clock" data-tooltip title="Delayed"></i>7:C
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="data-content no-border round" data-val="Tony Starky|Paused">
                                                <div class="row row-no-gap no-fluid">
                                                    <div class="col-5">
                                                        <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image.jpg" alt="">Tony Starky
                                                    </div>
                                                    <div class="col-7">
                                                        <ul class="steps-bar steps-icon">
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="Starting"></i>1:S
                                                            </li>
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="Waiting"></i>2:W
                                                            </li>
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="Expert"></i>3:E
                                                            </li>
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="First Audit"></i>4:F
                                                            </li>
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="Second Audit"></i>5:S
                                                            </li>
                                                            <li class="active">
                                                                <i class="icon icon-clock" data-tooltip title="Paused"></i>6:P
                                                            </li>
                                                            <li>
                                                                <i class="icon icon-check-circle" data-tooltip title="Delayed"></i>7:C
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        <span class="sp10"></span>

                                        <div class="row row-no-gap no-fluid">
                                            <div class="col-4">
                                                <div class="padding-5-v">
                                                    Total <b class="data-total"></b>
                                                </div>
                                            </div>
                                            <div class="col-8 align-r">
                                                <div class="data-paging pagination ease-1st-btn" data-default="btn round"></div>
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
<div class="mobile-menu show-l theme-panel ui-dark ease-layout ease-slow ease-in-out">
    <div class="mobile-menu-title no-padding border-b">
        <button class="btn btn-square btn-lg btn-ghost circle ease-btn close-mobile-menu">
            <i class="icon icon-sm icon-remove no-opacity"></i>
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
            <p class="large x-light-ui xs-align-c">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada purus eget enim tempus, sed faucibus ante blandit. Morbi a pharetra sapien.</p>

            <div class="col-static no-fluid">
                <div class="row row-no-gap-h">
                    <div class="col-12 ease-1st-form">
                        <div class="text text-icon has-clear round-l no-border shadow-in-sm theme-gray ui-x-light">
                            <button type="button" class="clear-form icon icon-remove"></button>
                            <input class="required" type="text" placeholder="Search">
                        </div>
                        <p class="required-msg large">Please, enter a keyword.</p>
                    </div>
                </div>
                <div class="col-100 col-xs-50 padding-10-v">
                    <button class="btn block round-r theme-default2 ui-dark ease-btn" type="submit">
                        <i class="icon icon-lg icon-search"></i>
                    </button>
                </div>
            </div>

            <div class="row xs-fluid block-2nd icons-no-opacity hover-t-more-2nd icons-margin-5-v theme-gray ease-2nd-btn">
                <div class="col-4 padding-10-b">
                    <a class="btn btn-multi no-line-height round ui-x-light" href="#">
                        <i class="icon icon-xl icon-news theme-default2 ui-text"></i>
                        <span class="block margin-5-v">News</span>
                        <span class="dark">589</span>
                    </a>
                </div>
                <div class="col-4 padding-10-b">
                    <a class="btn btn-multi no-line-height round ui-x-light" href="#">
                        <i class="icon icon-xl icon-calendar-check theme-default2 ui-text"></i>
                        <span class="block margin-5-v">Events</span>
                        <span class="dark">219</span>
                    </a>
                </div>
                <div class="col-4 padding-10-b">
                    <a class="btn btn-multi no-line-height round ui-x-light" href="#">
                        <i class="icon icon-xl icon-files theme-default2 ui-text"></i>
                        <span class="block margin-5-v">Documents</span>
                        <span class="dark">701</span>
                    </a>
                </div>
            </div>
        </form>

    </div>
</div>