<?php
    // hide default dark mode button
    $defaultDarkModeBtn = false;

    // cookie: menu
    $menuToggle = '';
    $menuIcon = 'left';
    $menuActiveBtn = ' ui-btn-visible ui-active';

    if (isset($_COOKIE["leftPanelToggle"]))
    {
        if ($_COOKIE["leftPanelToggle"] == 'hide')
        {
            $menuToggle = ' business-toggle-menu';
            $menuIcon = 'right';
            $menuActiveBtn = '';
        }

    }
?>

<link href="../dist/css/business.css?v=<?php echo filemtime('../dist/css/business.css'); ?>" rel="stylesheet">
<script src="../dist/js/business.js?v=<?php echo filemtime('../dist/js/business.js'); ?>"></script>

<main class="ui-container ui-no-gutter">
    <div class="ui-col-static ui-no-fluid ui-full-h">

        <!-- left panel -->
        <div class="ui-col-business-panel-l<?php echo $menuToggle; ?>"> <!-- cookie: menu -->
            <div class="business-panel-l ui-sidebar-add-l ui-ease-width">

                <div class="ui-col-static ui-no-fluid ui-tab-holder ui-ease-tab ui-ease-1st-btn" data-ui-classes="ui-btn-visible">

                    <div class="ui-col-business-panel-min">

                        <!--mini left panel -->
                        <div class="business-panel-l-min">

                            <!-- toggle sidebar -->
                            <button title="Toggle menu" class="business-panel-l-toggle ui-btn ui-btn-ghost ui-btn-square ui-m-10-b ui-ease-btn ui-visible-xl">
                                <svg class="ui-icon">
                                    <use href="../dist/icons.svg#angle-<?php echo $menuIcon ?>"></use> <!-- cookie: menu -->
                                </svg>
                            </button>

                            <!-- buttons -->
                            <div class="ui-ease-1st-btn">
                                <button title="Start" data-ui-tooltip="r" data-ui-only="desktop" class="ui-tab ui-btn ui-btn-ghost ui-btn-square<?php echo $menuActiveBtn; ?>"> <!-- cookie: menu -->
                                    <svg class="ui-icon ui-no-opacity"><use href="../dist/icons.svg#flag"></use></svg>
                                </button>

                                <button title="Reports" data-ui-tooltip="r" data-ui-only="desktop" class="ui-tab ui-btn ui-btn-ghost ui-btn-square">
                                    <svg class="ui-icon ui-no-opacity"><use href="../dist/icons.svg#briefcase"></use></svg>
                                </button>

                                <button title="Trades" data-ui-tooltip="r" data-ui-only="desktop" class="ui-tab ui-btn ui-btn-ghost ui-btn-square">
                                    <svg class="ui-icon ui-no-opacity"><use href="../dist/icons.svg#barcode"></use></svg>
                                </button>
                                <button title="Lists" data-ui-tooltip="r" data-ui-only="desktop" class="ui-tab ui-btn ui-btn-ghost ui-btn-square">
                                    <svg class="ui-icon ui-no-opacity"><use href="../dist/icons.svg#doc"></use></svg>
                                </button>
                                <button title="Misc" data-ui-tooltip="r" data-ui-only="desktop" class="ui-tab ui-btn ui-btn-ghost ui-btn-square">
                                    <svg class="ui-icon ui-no-opacity"><use href="../dist/icons.svg#recycle"></use></svg>
                                </button>
                                <button title="Human Resources" data-ui-tooltip="r" data-ui-only="desktop" class="ui-tab ui-btn ui-btn-ghost ui-btn-square">
                                    <svg class="ui-icon ui-no-opacity"><use href="../dist/icons.svg#users"></use></svg>
                                </button>

                                <a title="Contracts" href="#" data-ui-tooltip="r" data-ui-only="desktop" class="ui-btn ui-btn-ghost ui-btn-square"> <!-- link -->
                                    <svg class="ui-icon ui-no-opacity"><use href="../dist/icons.svg#award"></use></svg>
                                </a>
                                <a title="Customer Management" href="#" data-ui-tooltip="r" data-ui-only="desktop" class="ui-btn ui-btn-ghost ui-btn-square"> <!-- link -->
                                    <svg class="ui-icon ui-no-opacity"><use href="../dist/icons.svg#user-circle"></use></svg>
                                </a>
                                <a title="Documents" href="#" data-ui-tooltip="r" data-ui-only="desktop" class="ui-btn ui-btn-ghost ui-btn-square"> <!-- link -->
                                    <svg class="ui-icon ui-no-opacity"><use href="../dist/icons.svg#docs"></use></svg>
                                </a>

                                <button title="Administration" data-ui-tooltip="r" data-ui-only="desktop" class="ui-tab ui-btn ui-btn-ghost ui-btn-square">
                                    <svg class="ui-icon ui-no-opacity"><use href="../dist/icons.svg#shield"></use></svg>
                                </button>
                            </div>

                        </div>

                    </div>

                    <div class="business-panel-l-contents-holder ui-row">
                        <div class="business-panel-l-contents ui-col-12">

                            <!-- logo -->
                            <a title="Logo" class="business-panel-l-logo" href="#">
                                <img class="ui-invert-img" src="../public/img/business/logo-business-panel.png" alt="">
                            </a>

                            <!-- menus -->
                            <div class="ui-tab-content ui-open ui-open-ease">

                                <div class="ui-p-10 ui-m-10-b ui-ease-1st-bg">
                                    <form action="#">
                                        <div class="ui-input ui-form-icon ui-round ui-m-15-b ui-ease-form">
                                            <button type="submit">
                                                <svg class="ui-icon"><use href="../dist/icons.svg#search"/></svg>
                                            </button>
                                            <input type="text" placeholder="Search reports">
                                        </div>
                                    </form>
                                    <a class="business-edit ui-m-4-b" href="#">recently added</a>
                                    <a class="business-edit ui-m-4-b" href="#">yearly reports</a>
                                </div>

                                <div class="ui-p-10-h">My Stats</div>
                                <div class="ui-row ui-row-gap-sm ui-no-fluid ui-highlight ui-align-c ui-m-10 ui-theme-base ui-ease-2nd-btn">
                                    <div class="ui-col-4">
                                        <button class="ui-btn ui-btn-multi ui-fill-dark-100">
                                            <span>
                                                87
                                                <i>16</i>
                                            </span>
                                            <i>Specialist</i>
                                        </button>
                                    </div>
                                    <div class="ui-col-4">
                                        <button class="ui-btn ui-btn-multi ui-fill-dark-100">
                                            <span>
                                                10
                                                <i>7</i>
                                            </span>
                                            <i>1st Check</i>
                                        </button>
                                    </div>
                                    <div class="ui-col-4">
                                        <button class="ui-btn ui-btn-multi ui-fill-dark-100">
                                            <span>
                                                4
                                                <i>16</i>
                                            </span>
                                            <i>2nd Check</i>
                                        </button>
                                    </div>
                                    <div class="ui-col-4">
                                        <button class="ui-btn ui-btn-multi ui-fill-dark-100">
                                            <span>32</span>
                                            <i>Waiting</i>
                                        </button>
                                    </div>
                                    <div class="ui-col-4">
                                        <button class="ui-btn ui-btn-multi ui-fill-dark-100">
                                            <span>0</span>
                                            <i>Checked</i>
                                        </button>
                                    </div>
                                    <div class="ui-col-4">
                                        <button class="ui-btn ui-btn-multi ui-fill-dark-100">
                                            <span>0</span>
                                            <i>Today</i>
                                        </button>
                                    </div>
                                    <div class="ui-col-4">
                                        <button class="ui-btn ui-btn-multi ui-fill-dark-100">
                                            <span>0</span>
                                            <i>Stopped</i>
                                        </button>
                                    </div>
                                    <div class="ui-col-4">
                                        <button class="ui-btn ui-btn-multi ui-fill-dark-100">
                                            <span>85</span>
                                            <i>Delayed</i>
                                        </button>
                                    </div>
                                    <div class="ui-col-4">
                                        <button class="ui-btn ui-btn-multi ui-fill-dark-100">
                                            <svg class="ui-icon"><use href="../dist/icons.svg#hourglass-start"></use></svg>
                                            <i>Sending</i>
                                        </button>
                                    </div>
                                    <div class="ui-col-4">
                                        <button class="ui-btn ui-btn-multi ui-fill-dark-100">
                                            <svg class="ui-icon"><use href="../dist/icons.svg#flag"></use></svg>
                                            <i>Final</i>
                                        </button>
                                    </div>
                                </div>

                                <div class="ui-p-10-h">Company Stats</div>
                                <div class="ui-row ui-row-gap-sm ui-no-fluid ui-highlight ui-align-c ui-m-10 ui-theme-sub ui-ease-2nd-btn">
                                    <div class="ui-col-4">
                                        <button class="ui-btn ui-btn-multi ui-fill-dark-100">
                                            <span>
                                                315
                                                <i>17</i>
                                            </span>
                                            <i>Specialist</i>
                                        </button>
                                    </div>
                                    <div class="ui-col-4">
                                        <button class="ui-btn ui-btn-multi ui-fill-dark-100">
                                            <span>
                                                168
                                                <i>27</i>
                                            </span>
                                            <i>1st Check</i>
                                        </button>
                                    </div>
                                    <div class="ui-col-4">
                                        <button class="ui-btn ui-btn-multi ui-fill-dark-100">
                                            <span>
                                                19
                                                <i>4</i>
                                            </span>
                                            <i>2nd Check</i>
                                        </button>
                                    </div>
                                    <div class="ui-col-4">
                                        <button class="ui-btn ui-btn-multi">
                                            <span>416</span>
                                            <i>Waiting</i>
                                        </button>
                                    </div>
                                    <div class="ui-col-4">
                                        <button class="ui-btn ui-btn-multi">
                                            <span>1</span>
                                            <i>Checked</i>
                                        </button>
                                    </div>
                                    <div class="ui-col-4">
                                        <button class="ui-btn ui-btn-multi">
                                            <span>0</span>
                                            <i>Today</i>
                                        </button>
                                    </div>
                                    <div class="ui-col-4">
                                        <button class="ui-btn ui-btn-multi">
                                            <span>74</span>
                                            <i>Stopped</i>
                                        </button>
                                    </div>
                                    <div class="ui-col-4">
                                        <button class="ui-btn ui-btn-multi">
                                            <span>797</span>
                                            <i>Delayed</i>
                                        </button>
                                    </div>
                                    <div class="ui-col-4">
                                        <button class="ui-btn ui-btn-multi">
                                            <svg class="ui-icon"><use href="../dist/icons.svg#hourglass-start"></use></svg>
                                            <i>Sending</i>
                                        </button>
                                    </div>
                                    <div class="ui-col-4">
                                        <button class="ui-btn ui-btn-multi">
                                            <svg class="ui-icon"><use href="../dist/icons.svg#flag"></use></svg>
                                            <i>Final</i>
                                        </button>
                                    </div>
                                </div>

                                <div class="ui-p-10-h">Regional Stats</div>
                                <div class="ui-row ui-row-gap-sm ui-no-fluid ui-align-c ui-m-10 ui-ease-2nd-btn">
                                    <div class="ui-col-4">
                                        <button class="ui-btn ui-btn-multi">
                                            <span>416</span>
                                            <i>Waiting</i>
                                        </button>
                                    </div>
                                    <div class="ui-col-4">
                                        <button class="ui-btn ui-btn-multi">
                                            <span>1</span>
                                            <i>Checked</i>
                                        </button>
                                    </div>
                                    <div class="ui-col-4">
                                        <button class="ui-btn ui-btn-multi">
                                            <span>0</span>
                                            <i>Today</i>
                                        </button>
                                    </div>
                                    <div class="ui-col-4">
                                        <button class="ui-btn ui-btn-multi">
                                            <span>74</span>
                                            <i>Stopped</i>
                                        </button>
                                    </div>
                                    <div class="ui-col-4">
                                        <button class="ui-btn ui-btn-multi">
                                            <span>797</span>
                                            <i>Delayed</i>
                                        </button>
                                    </div>
                                    <div class="ui-col-4">
                                        <button class="ui-btn ui-btn-multi">
                                            <svg class="ui-icon"><use href="../dist/icons.svg#hourglass-start"></use></svg>
                                            <i>Sending</i>
                                        </button>
                                    </div>
                                </div>

                            </div>
                            <div class="ui-tab-content">

                                <b class="business-title">Reports</b>
                                <div class="ui-btn-list ui-ease-1st-btn"> <!-- link buttons -->
                                    <a href="#" class="ui-btn ui-btn-ghost">New</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Find</a>
                                </div>

                                <div class="ui-tab-holder ui-tab-accordion ui-ease-tab" data-ui-classes="ui-btn-visible">
                                    <button class="ui-tab ui-tab-toggle ui-btn ui-btn-ghost ui-ease-btn">
                                        <svg class="ui-toggle-icon ui-icon"><use href="../dist/icons.svg#angle-down"></use></svg>
                                        <span>Batch Operations</span>
                                    </button>
                                    <div class="ui-tab-content ui-btn-list ui-ease-1st-btn">
                                        <a href="#" class="ui-btn ui-btn-ghost">Reports</a>
                                        <a href="#" class="ui-btn ui-btn-ghost">Archive</a>
                                    </div>
                                </div>

                                <div class="ui-btn-list ui-ease-1st-btn"> <!-- link buttons -->
                                    <a href="#" class="ui-btn ui-btn-ghost">Notes</a>
                                </div>

                            </div>
                            <div class="ui-tab-content">

                                <b class="business-title">Trades</b>
                                <div class="ui-btn-list ui-ease-1st-btn"> <!-- link buttons -->
                                    <a href="#" class="ui-btn ui-btn-ghost">Bank Reconciliation</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Solution Partner Consensus</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Collection Listing</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Personnel Expenses</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Permanent Expert Bonus List</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Supervisor Bonus List</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Lists &amp; Reports</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Reconciliation Application Log</a>
                                </div>

                            </div>
                            <div class="ui-tab-content">

                                <b class="business-title">Lists</b>
                                <div class="ui-btn-list ui-ease-1st-btn"> <!-- link buttons -->
                                    <a href="#" class="ui-btn ui-btn-ghost">General List</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Job Tracking</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Expert Statuses</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Specialized Business Cases</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Expert Business Calendar</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Number of Specialist Jobs</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Secretariat Jobs</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Supervisor Business Calendar</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Matrix</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">TGFST &amp; KFE</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Job Step Times</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Job Step Time Averages</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Time Remaining When Application Is Completed</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">SPL Expired Users</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Expert Monthly Job Numbers and Average Duration</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Expert Performance</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Expert Periodic Performance</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Application Performance</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Daily report</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Monthly Customer Evaluation Report</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Supervisor Turnovers</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Supervisor Statuses</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Supervisor Rating</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">2. Supervisor Rating</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Evaluation Chart</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Unit Price Analysis</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">G. D.minimum Wage Tariff Comparison</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Map Density</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Revision Reports</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">General (Questions)</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Customer Report Number and Output</a>
                                </div>

                            </div>
                            <div class="ui-tab-content">

                                <b class="business-title">Misc</b>
                                <div class="ui-btn-list ui-ease-1st-btn"> <!-- link buttons -->
                                    <a href="#" class="ui-btn ui-btn-ghost">Project Archive</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Report Archive</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Real Estate Precedent</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Machinery Precedent</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Troubled Real Estates</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Map</a>
                                </div>

                            </div>
                            <div class="ui-tab-content">

                                <b class="business-title">Human Resources</b>
                                <div class="ui-btn-list ui-ease-1st-btn"> <!-- link buttons -->
                                    <a href="#" class="ui-btn ui-btn-ghost">Users</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Solution partners</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Specialist Assistants</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">User Notifications</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">User Permissions</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">User Lists</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Payroll Management</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Performance management</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">User Document Types</a>
                                </div>

                            </div>
                            <div class="ui-tab-content">

                                <b class="business-title">Administration</b>
                                <div class="ui-btn-list ui-ease-1st-btn"> <!-- link buttons -->
                                    <a href="#" class="ui-btn ui-btn-ghost">Monitoring Permissions</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">User Authorizations</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">User Log</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">System Backups</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Region &amp; Branch</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">City/District</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Announcement &amp; News</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Frequently Asked Questions</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Selection Boxes</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Note Stock Texts</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Document Archive</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Control List</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Ticket</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">System Logs</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Disk States</a>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>

        <!-- center -->
        <div class="ui-row ui-no-row-gap">
            <div class="ui-col-12">

                <!-- header -->
                <header class="ui-header-sticky ui-ease-layout" data-ui-classes="business-header-highlight">
                    <div class="ui-row ui-no-row-gap-v ui-no-fluid">
                        <div class="ui-col-12 ui-align-c">

                            <!-- left buttons -->
                            <div class="ui-float-l ui-ease-1st-btn">

                                <!-- toggle sidebar -->
                                <button title="Menü" class="ui-sidebar-show-l ui-btn ui-btn-ghost ui-btn-square ui-circle ui-visible-md">
                                    <svg class="ui-icon ui-no-opacity"><use href="../dist/icons.svg#bars-left"></use></svg>
                                </button>

                                <!-- dashboard -->
                                <a title="Dashboard" class="ui-btn ui-btn-ghost ui-btn-square ui-circle" href="#">
                                    <svg class="ui-icon ui-no-opacity"><use href="../dist/icons.svg#grid-masonry"></use></svg>
                                </a>

                                <!-- map -->
                                <a title="Map" class="ui-btn ui-btn-ghost ui-btn-square ui-circle" href="#">
                                    <svg class="ui-icon ui-no-opacity"><use href="../dist/icons.svg#marker"></use></svg>
                                </a>

                            </div>

                            <!-- header time -->
                            <div class="business-header-time ui-hidden-sm"></div>

                            <!-- header profile -->
                            <div class="business-profile-menu ui-dropdown ui-menu-l ui-ease-dropdown">
                                <button title="My Profile" class="ui-btn ui-btn-multi ui-no-p ui-circle">
                                    <svg class="ui-icon ui-icon-sm ui-no-opacity"><use href="../dist/icons.svg#grid-column"></use></svg>
                                    <span class="ui-avatar ui-avatar-xs ui-circle ui-theme-sub ui-fill-dark-100">
                                        <svg class="ui-icon ui-no-opacity"><use href="../dist/icons.svg#user"></use></svg>
                                    </span>
                                </button>
                                <ul class="ui-dropdown-menu ui-dropdown-has-icon ui-round ui-shadow-lg">
                                    <li class="ui-border-b ui-border-lg">
                                        <a href="#">
                                            <span class="ui-color-black-50">Pine Tree User</span><br>
                                            <span class="business-info ui-m-3-t ui-theme-base ui-fill-dark-100">Supervisor</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <svg class="ui-menu-icon ui-icon"><use href="../dist/icons.svg#archive"></use></svg>
                                            My Documents
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <svg class="ui-menu-icon ui-icon"><use href="../dist/icons.svg#key"></use></svg>
                                            Şifre Değiştir
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <svg class="ui-menu-icon ui-icon"><use href="../dist/icons.svg#desktop"></use></svg>
                                            Lock Screen
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <svg class="ui-menu-icon ui-icon"><use href="../dist/icons.svg#sign-out"></use></svg>
                                            Sign Out
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <!-- right buttons -->
                            <div class="ui-float-r ui-ease-1st-btn">

                            </div>

                        </div>
                    </div>
                </header>

                <!-- pages -->
                <div class="business-page-middle ui-fixed ui-fixed-xl">
                    <div class="ui-row">

                        <div class="ui-col-static">

                            <div class="ui-row">
                                <div class="ui-col-12 ui-no-p-v">

                                    <!-- contents -->
                                    <div class="ui-row">
                                        <div class="ui-col-4 ui-col-md-6 ui-theme-base">
                                            <div class="ui-card ui-full-h ui-p-15 ui-round ui-shadow-lg">
                                                <div class="ui-col-static ui-no-fluid">
                                                    <div class="ui-row ui-no-row-gap-h ui-row-gap-md-v">
                                                        <div class="ui-col-12">
                                                            <div class="ui-font-18">Active Reports</div>
                                                            <span class="ui-color-black-25 ui-font-16">74% efficiency</span>
                                                        </div>
                                                    </div>
                                                    <div class="ui-col-100 ui-align-r">
                                                        <span class="ui-font-38 ui-text">19</span>
                                                    </div>
                                                </div>
                                                <div class="ui-progress-bar ui-m-15-t ui-round">
                                                    <span class="ui-fill-dark-100" style="width: 74%;"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="ui-col-8 ui-col-md-6 ui-theme-sub">
                                            <div class="ui-card ui-full-h ui-p-15 ui-round ui-shadow-lg">
                                                <div class="ui-col-static ui-no-fluid">
                                                    <div class="ui-row ui-no-row-gap-h ui-row-gap-md-v">
                                                        <div class="ui-col-12">
                                                            <div class="ui-font-18">Finished Reports</div>
                                                            <span class="ui-color-black-25 ui-font-16">58% efficiency</span>
                                                        </div>
                                                    </div>
                                                    <div class="ui-col-300 ui-col-sm-100 ui-col-xs-100 ui-align-r">
                                                        <span class="ui-font-38 ui-text">
                                                            <span class="ui-font-18 ui-hidden-sm">final reports</span>
                                                            106
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="ui-progress-bar ui-m-15-t ui-round">
                                                    <span class="ui-fill-dark-100" style="width: 58%;"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="ui-col-4">
                                            <div class="ui-card ui-round ui-full-h ui-shadow-lg">
                                                <div class="ui-calendar ui-ease-calendar ui-round"></div>
                                            </div>
                                        </div>
                                        <div class="ui-col-8">
                                            <div class="ui-card ui-full-h ui-round ui-shadow-lg">
                                                <div class="ui-card-side ui-p-15 ui-border-b">
                                                    <h4 class="ui-h4">Report Intensity</h4>
                                                </div>
                                                <div class="ui-card-side ui-p-15">
                                                    <div class="ui-line-chart-holder ui-ease-line-chart" data-ui-size="10,23" data-ui-step="6"
                                                        data-ui-x="01.12.2019,02.12.2019,03.12.2019,04.12.2019,05.12.2019,06.12.2019,07.12.2019,08.12.2019,09.12.2019,10.12.2019,11.12.2019,12.12.2019,13.12.2019,14.12.2019,15.12.2019,16.12.2019,17.12.2019,18.12.2019">
                                                        <ul class="ui-line-chart" data-ui-type="filled">
                                                            <li data-ui-y="64"></li>
                                                            <li data-ui-y="56"></li>
                                                            <li data-ui-y="112"></li>
                                                            <li data-ui-y="140"></li>
                                                            <li data-ui-y="28"></li>
                                                            <li data-ui-y="0"></li>
                                                            <li data-ui-y="17"></li>
                                                            <li data-ui-y="11"></li>
                                                            <li data-ui-y="47"></li>
                                                            <li data-ui-y="106"></li>
                                                            <li data-ui-y="99"></li>
                                                            <li data-ui-y="46"></li>
                                                            <li data-ui-y="23"></li>
                                                            <li data-ui-y="59"></li>
                                                            <li data-ui-y="112"></li>
                                                            <li data-ui-y="60"></li>
                                                            <li data-ui-y="72"></li>
                                                            <li data-ui-y="10"></li>
                                                        </ul>
                                                        <ul class="ui-line-chart" data-ui-type="filled dotted">
                                                            <li data-ui-y="53"></li>
                                                            <li data-ui-y="22"></li>
                                                            <li data-ui-y="52"></li>
                                                            <li data-ui-y="93"></li>
                                                            <li data-ui-y="86"></li>
                                                            <li data-ui-y="21"></li>
                                                            <li data-ui-y="56"></li>
                                                            <li data-ui-y="48"></li>
                                                            <li data-ui-y="86"></li>
                                                            <li data-ui-y="88"></li>
                                                            <li data-ui-y="52"></li>
                                                            <li data-ui-y="77"></li>
                                                            <li data-ui-y="66"></li>
                                                            <li data-ui-y="26"></li>
                                                            <li data-ui-y="62"></li>
                                                            <li data-ui-y="43"></li>
                                                            <li data-ui-y="55"></li>
                                                            <li data-ui-y="26"></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="ui-col-12">
                                            <div class="ui-card ui-full-h ui-round ui-shadow-lg">
                                                <div class="ui-card-side ui-p-15 ui-border-b">
                                                    <h4 class="ui-h4">Performance List</h4>
                                                </div>
                                                <div class="ui-card-side">
                                                    <div class="ui-row ui-no-fluid">
                                                        <div class="ui-col-lg-2 ui-col-3 ui-col-sm-6 ui-col-xs-6 ui-offset-lg-0 ui-offset-3 ui-offset-sm-0 ui-offset-xs-0">
                                                            <div class="ui-donut-chart ui-ease-donut-chart ui-theme-base">
                                                                <strong>
                                                                    <span class="ui-avatar-lg ui-circle ui-m-5-b ui-bg-white ui-invert-bg ui-shadow-lg">
                                                                        <span class="ui-font-regular ui-m-3-t">
                                                                            86%
                                                                            <span class="ui-font-14 ui-m-5-t ui-block">UPT</span>
                                                                        </span>
                                                                    </span>
                                                                </strong>
                                                                <svg viewBox="0 0 160 160">
                                                                    <circle r="69.85699" cy="80" cx="80" class="ui-donut-chart-bg" />
                                                                    <circle r="69.85699" cy="80" cx="80" class="ui-stroke" data-ui-percent="86" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div class="ui-col-lg-2 ui-col-3 ui-col-sm-6 ui-col-xs-6">
                                                            <div class="ui-donut-chart ui-ease-donut-chart ui-theme-sub">
                                                                <strong>
                                                                    <span class="ui-avatar-lg ui-circle ui-m-5-b ui-bg-white ui-invert-bg ui-shadow-lg">
                                                                        <span class="ui-font-regular ui-m-3-t">
                                                                            72%
                                                                            <span class="ui-font-14 ui-m-5-t ui-block">AL</span>
                                                                        </span>
                                                                    </span>
                                                                </strong>
                                                                <svg viewBox="0 0 160 160">
                                                                    <circle r="69.85699" cy="80" cx="80" class="ui-donut-chart-bg" />
                                                                    <circle r="69.85699" cy="80" cx="80" class="ui-stroke" data-ui-percent="72" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div class="ui-col-lg-8 ui-col-12 ui-align-c">
                                                            <div class="ui-hover-scale-more-1st ui-m-30-v ui-md-no-m-t ui-ease-1st-layout">
                                                                <img title="68%" data-ui-tooltip="t" class="ui-avatar ui-circle ui-m-5-b" src="../public/img/profile-image2.jpg" alt="">
                                                                <span title="64%" data-ui-tooltip="t" class="ui-avatar ui-circle ui-m-5-b">
                                                                    <span>HY</span>
                                                                </span>
                                                                <span title="63%" data-ui-tooltip="t" class="ui-avatar ui-circle ui-m-5-b">
                                                                    <span>EKY</span>
                                                                </span>
                                                                <img title="58%" data-ui-tooltip="t" class="ui-avatar ui-circle ui-m-5-b" src="../public/img/profile-image.jpg" alt="">
                                                                <img title="57%" data-ui-tooltip="t" class="ui-avatar ui-circle ui-m-5-b" src="../public/img/business/profile-image3.jpg" alt="">
                                                                <img title="49%" data-ui-tooltip="t" class="ui-avatar ui-circle ui-m-5-b" src="../public/img/profile-image3.jpg" alt="">
                                                                <span title="47%" data-ui-tooltip="t" class="ui-avatar ui-circle ui-m-5-b">
                                                                    <span>AST</span>
                                                                </span>
                                                                <img title="45%" data-ui-tooltip="t" class="ui-avatar ui-circle ui-m-5-b" src="../public/img/business/profile-image.jpg" alt="">
                                                                <img title="42%" data-ui-tooltip="t" class="ui-avatar ui-circle ui-m-5-b" src="../public/img/business/profile-image2.jpg" alt="">
                                                                <span title="39%" data-ui-tooltip="t" class="ui-avatar ui-circle ui-m-5-b">
                                                                    <span>AC</span>
                                                                </span>
                                                            </div>
                                                            <a class="ui-btn ui-circle ui-m-10-b ui-ease-btn" href="#">See full list +173</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <!-- masthead -->
                            <div class="ui-col-business-masthead ui-p-10 ui-visible-lg">
                                <div class="ui-card ui-round ui-shadow-lg">

                                    <div class="business-masthead ui-sidebar-add-r">

                                        <div
                                            class="business-masthead-cover"
                                            style="background-image: url(../public/img/business/profile-cover.png)">
                                        </div>
                                        <span class="ui-avatar-lg ui-theme-sub ui-fill-dark-100">
                                            <span>UPT</span>
                                        </span>

                                        <div class="ui-align-c">
                                            User Pine Tree
                                            <div class="ui-color-black-50 ui-font-11 ui-m-15-b">
                                                upt@businesspanel.com
                                            </div>

                                            <div class="ui-m-20-b">
                                                <span class="business-info ui-theme-base ui-fill-dark-100">Licenced</span>
                                                <span class="business-info">Mobile</span>
                                            </div>
                                        </div>

                                        <b class="business-title">
                                            Recent Reports
                                            <span class="business-info">6</span>
                                        </b>

                                        <div class="ui-listgroup">
                                            <ul class="ui-listgroup-has-avatar-xs ui-listgroup-has-icon-xs ui-scroll-v ui-ease-listgroup">
                                                <li>
                                                    <a href="#">
                                                        <svg class="ui-listgroup-icon ui-icon"><use href="../dist/icons.svg#angle-right"></use></svg>
                                                        <span class="ui-avatar-xs">
                                                            <span>2hrs</span>
                                                        </span>
                                                        <b>DOC-716001</b>
                                                        Specialist User
                                                        <em>Report will be received.</em>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <svg class="ui-listgroup-icon ui-icon"><use href="../dist/icons.svg#angle-right"></use></svg>
                                                        <span class="ui-avatar-xs">
                                                            <span>6hrs</span>
                                                        </span>
                                                        <b>REP-316601</b>
                                                        Specialist User
                                                        <em>Report received.</em>
                                                    </a>
                                                <li>
                                                    <a href="#">
                                                        <svg class="ui-listgroup-icon ui-icon"><use href="../dist/icons.svg#angle-right"></use></svg>
                                                        <span class="ui-avatar-xs">
                                                            <span>11hrs</span>
                                                        </span>
                                                        <b>TOC-101262</b>
                                                        Supervisor User
                                                        <em>Report received.</em>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <svg class="ui-listgroup-icon ui-icon"><use href="../dist/icons.svg#angle-right"></use></svg>
                                                        <span class="ui-avatar-xs">
                                                            <span>14hrs</span>
                                                        </span>
                                                        <b>NAT-312557</b>
                                                        Supervisor User
                                                        <em>Report cancelled.</em>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <svg class="ui-listgroup-icon ui-icon"><use href="../dist/icons.svg#angle-right"></use></svg>
                                                        <span class="ui-avatar-xs">
                                                            <span>15hrs</span>
                                                        </span>
                                                        <b>SUN-801215</b>
                                                        Specialist User
                                                        <em>Report will be received.</em>
                                                    </a>
                                                <li>
                                                    <a href="#">
                                                        <svg class="ui-listgroup-icon ui-icon"><use href="../dist/icons.svg#angle-right"></use></svg>
                                                        <span class="ui-avatar-xs">
                                                            <span>19hrs</span>
                                                        </span>
                                                        <b>LAB-313303</b>
                                                        Specialist User
                                                        <em>Report will be received.</em>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                        <b class="business-title">Online Users</b>
                                        <div class="ui-align-c ui-p-10">
                                            <div class="ui-avatar-holder ui-hover-scale-more-2nd ui-ease-2nd-layout">
                                                <a class="ui-link" href="#" data-ui-tooltip="t" title="46mins.">
                                                    <span class="ui-avatar-sm ui-border-dual ui-circle ui-theme-sub ui-fill-dark-100">
                                                        <span>LA</span>
                                                    </span>
                                                </a>
                                                <a href="#" data-ui-tooltip="t" title="1hrs">
                                                    <img class="ui-avatar-sm ui-border-dual ui-circle" src="../public/img/business/profile-image.jpg" alt="">
                                                </a>
                                                <a href="#" data-ui-tooltip="t" title="12mins.">
                                                    <img class="ui-avatar-sm ui-border-dual ui-circle" src="../public/img/business/profile-image3.jpg" alt="">
                                                </a>
                                                <a class="ui-btn ui-btn-square ui-circle ui-ease-btn" href="#">+3</a>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>

                            <!-- toggle masthead -->
                            <button title="Toggle Masthead" class="ui-sidebar-show-r ui-btn ui-btn-lg ui-btn-square ui-circle ui-theme-sub ui-fill-dark-100 ui-ease-btn ui-hidden-lg">
                                <svg class="ui-icon"><use href="../dist/icons.svg#bars-right"></use></svg>
                            </button>

                        </div>

                    </div>
                </div>

            </div>
        </div>

        <!-- right panel -->
        <div class="ui-col-business-panel-r">
            <div class="business-panel-r ui-p-5">

                <!-- toggle dark mode -->
                <button title="toggle Dark Mode" class="ui-darkmode-toggle ui-btn ui-btn-ghost ui-btn-square ui-icons-no-opacity ui-m-10-b ui-ease-btn">
                    <svg class="ui-icon ui-visible-dark">
                        <defs>
                            <linearGradient id="dark-bg" x1="0%" y1="0%" x2="100%" y2="0%" gradientTransform="rotate(120)">
                                <stop offset="0%" style="stop-color: #4f81ff;" />
                                <stop offset="100%" style="stop-color: #b56dff;" />
                            </linearGradient>
                        </defs>
                        <use href="../dist/icons.svg#moon" fill="url(#dark-bg)"/>
                    </svg>
                    <svg class="ui-icon ui-visible-light">
                        <defs>
                            <linearGradient id="light-bg" x1="0%" y1="0%" x2="100%" y2="0%" gradientTransform="rotate(120)">
                                <stop offset="0%" style="stop-color: #eea800;" />
                                <stop offset="100%" style="stop-color: #ff6c00;" />
                            </linearGradient>
                        </defs>
                        <use href="../dist/icons.svg#sun" fill="url(#light-bg)"/>
                    </svg>
                </button>

                <!-- menus -->
                <div class="ui-tab-holder ui-ease-tab ui-ease-1st-btn" data-ui-classes="ui-btn-visible">

                    <button title="Notifications" data-ui-tooltip="l" data-ui-only="desktop" class="ui-tab ui-tab-toggle ui-btn ui-btn-ghost ui-btn-square">
                        <span class="ui-notifier">
                            <svg class="ui-icon ui-no-opacity"><use href="../dist/icons.svg#bell-on"></use></svg>
                        </span>
                    </button>
                    <div class="ui-tab-content">
                        <h4>
                            <span class="business-info">2 New</span>
                            Notifications
                        </h4>

                        <!-- list loader -->
                        <div class="business-list-loader ui-animate-progress"></div>

                        <div class="ui-scroll-v">

                            <!--no content -->
                            <div class="business-no-content">
                                <svg class="ui-icon"><use href="../dist/icons.svg#bell-on"></use></svg>
                                No new notifications.
                            </div>

                            <div class="ui-listgroup">
                                <ul class="ui-listgroup-has-avatar-xs ui-ease-listgroup">
                                    <li class="business-new">
                                        <a href="#">
                                            <span class="ui-avatar-xs">
                                                <span>SS</span>
                                            </span>
                                            <b>DOC-312557</b>
                                            <em>03.14.2022 09:50pm</em>
                                            <p>Report created.</p>
                                        </a>
                                    </li>
                                    <li class="business-new">
                                        <a href="#">
                                            <span class="ui-avatar-xs">
                                                <span>SU</span>
                                            </span>
                                            <b>DOC-312557</b>
                                            <em>03.14.2022 09:50pm</em>
                                            <p>Sending specialist.</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span class="ui-avatar-xs">
                                                <span>SD</span>
                                            </span>
                                            <b>DOC-312557</b>
                                            <em>03.14.2022 09:50pm</em>
                                            <p>Sending supervisor.</p>
                                            <span class="business-info">4hrs 59min</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span class="ui-avatar-xs">
                                                <span>BD</span>
                                            </span>
                                            <b>DOC-312557</b>
                                            <em>03.14.2022 09:50pm</em>
                                            <p>Unit changed.</p>
                                            <span class="business-info">4hrs 59min</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span class="ui-avatar-xs">
                                                <span>BG</span>
                                            </span>
                                            <b>DOC-312557</b>
                                            <em>03.14.2022 09:50pm</em>
                                            <p>Report sent.</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span class="ui-avatar-xs">
                                                <span>SS</span>
                                            </span>
                                            <b>DOC-312557</b>
                                            <em>03.14.2022 09:50pm</em>
                                            <p>Report created.</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span class="ui-avatar-xs">
                                                <span>SU</span>
                                            </span>
                                            <b>DOC-312557</b>
                                            <em>03.14.2022 09:50pm</em>
                                            <p>Sending specialist.</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span class="ui-avatar-xs">
                                                <span>SD</span>
                                            </span>
                                            <b>DOC-312557</b>
                                            <em>03.14.2022 09:50pm</em>
                                            <p>Sending supervisor.</p>
                                            <span class="business-info">4hrs 59min</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span class="ui-avatar-xs">
                                                <span>BD</span>
                                            </span>
                                            <b>DOC-312557</b>
                                            <em>03.14.2022 09:50pm</em>
                                            <p>Unit changed.</p>
                                            <span class="business-info">4hrs 59min</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span class="ui-avatar-xs">
                                                <span>BG</span>
                                            </span>
                                            <b>DOC-312557</b>
                                            <em>03.14.2022 09:50pm</em>
                                            <p>Report sent.</p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <button title="Notes" data-ui-tooltip="l" data-ui-only="desktop" class="ui-tab ui-tab-toggle ui-btn ui-btn-ghost ui-btn-square">
                        <span class="ui-notifier">
                            <svg class="ui-icon ui-no-opacity"><use href="../dist/icons.svg#pencil-write"></use></svg>
                        </span>
                    </button>
                    <div class="ui-tab-content">
                        <h4>
                            <span class="business-info">2 New</span>
                            <span class="business-mark ui-ease-bg" onclick="ui.alerts.message({ msg: 'All notes marked as read!' });">Mark All Read</span>
                            Notes
                        </h4>

                        <!-- list loader -->
                        <div class="business-list-loader ui-animate-progress"></div>

                        <div class="ui-scroll-v">

                            <!--no content -->
                            <div class="business-no-content">
                                <svg class="ui-icon"><use href="../dist/icons.svg#pencil-write"></use></svg>
                                No new notes.
                            </div>

                            <div class="ui-listgroup">
                                <ul class="ui-listgroup-has-avatar-xs ui-ease-listgroup">
                                    <li class="business-new">
                                        <a href="#">
                                            <img class="ui-avatar-xs" src="../public/img/profile-image2.jpg" alt="">
                                            <b>Specialist User</b>
                                            DOC-312557
                                            <em>3hrs 56min</em>
                                        </a>
                                        <p>Specialist user got report.</p>
                                        <span class="business-mark ui-ease-bg" onclick="ui.alerts.message({ msg: 'Note marked as read!' });">Mark as Read</span>
                                    </li>
                                    <li class="business-new">
                                        <a href="#">
                                            <span class="ui-avatar-xs">
                                                <span>KU</span>
                                            </span>
                                            <b>Specialist User</b>
                                            DOC-312557
                                            <em>3hrs 56min</em>
                                        </a>
                                        <p>Specialist user got report.</p>
                                        <span class="business-mark ui-ease-bg" onclick="ui.alerts.message({ msg: 'Note marked as read!' });">Mark as Read</span>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img class="ui-avatar-xs" src="../public/img/profile-image3.jpg" alt="">
                                            <b>Pine Tree User</b>
                                            DOC-312557
                                            <em>3hrs 56min</em>
                                        </a>
                                        <p>Supervisor user got report.</p>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span class="ui-avatar-xs">
                                                <span>KD</span>
                                            </span>
                                            <b>Pine Tree User</b>
                                            DOC-312557
                                            <em>3hrs 56min</em>
                                        </a>
                                        <p>Supervisor user got report.</p>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img class="ui-avatar-xs" src="../public/img/profile-image.jpg" alt="">
                                            <b>Secretarial User</b>
                                            DOC-312557
                                            <em>3hrs 56min</em>
                                        </a>
                                        <p>Documents for application have been provided.</p>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span class="ui-avatar-xs">
                                                <span>KS</span>
                                            </span>
                                            <b>Secretarial User</b>
                                            DOC-312557
                                            <em>3hrs 56min</em>
                                        </a>
                                        <p>Documents for application have been provided.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <button title="Pending Reports" data-ui-tooltip="l" data-ui-only="desktop" class="ui-tab ui-tab-toggle ui-btn ui-btn-ghost ui-btn-square">
                        <span class="ui-notifier">
                            <svg class="ui-icon ui-no-opacity"><use href="../dist/icons.svg#hourglass-start"></use></svg>
                        </span>
                    </button>
                    <div class="ui-tab-content">
                        <h4>
                            <span class="business-info">8 New</span>
                            Pending Reports
                        </h4>

                        <!-- list loader -->
                        <div class="business-list-loader ui-animate-progress"></div>

                        <div class="ui-scroll-v">

                            <!--no content -->
                            <div class="business-no-content">
                                <svg class="ui-icon"><use href="../dist/icons.svg#hourglass-start"></use></svg>
                                No new pending reports.
                            </div>

                            <div class="ui-listgroup">
                                <ul class="ui-listgroup-has-avatar-xs ui-ease-listgroup">
                                    <li class="business-new">
                                        <a href="#">
                                            <span class="ui-avatar-xs">
                                                <span><b>18</b> day</span>
                                            </span>
                                            <b>DOC-312557</b>
                                            <em>30.25.2022 09:43pm</em>
                                            <span class="business-info ui-theme-red ui-fill-dark-100">Urgent</span>
                                        </a>
                                        <dl class="ui-row ui-row-gap-sm">
                                            <dt>State</dt>
                                            <dd>Ankara</dd>
                                            <dt>Title Deeds</dt>
                                            <dd>1</dd>
                                            <dt>Parcels</dt>
                                            <dd>110/5</dd>
                                        </dl>
                                    </li>
                                    <li class="business-new">
                                        <a href="#">
                                            <span class="ui-avatar-xs">
                                                <span><b>16</b> day</span>
                                            </span>
                                            <b>DOC-312557</b>
                                            <em>30.25.2022 09:43pm</em>
                                            <span class="business-info ui-theme-red ui-fill-dark-100">Urgent</span>
                                            <span class="business-info ui-theme-yellow ui-fill-dark-100">VIP</span>
                                        </a>
                                        <dl class="ui-row ui-row-gap-sm">
                                            <dt>State</dt>
                                            <dd>İstanbul</dd>
                                            <dt>Title Deeds</dt>
                                            <dd>1</dd>
                                            <dt>Parcels</dt>
                                            <dd>896/7</dd>
                                        </dl>
                                    </li>
                                    <li class="business-new">
                                        <a href="#">
                                            <span class="ui-avatar-xs">
                                                <span><b>13</b> day</span>
                                            </span>
                                            <b>DOC-312557</b>
                                            <em>30.25.2022 09:43pm</em>
                                            <span class="business-info ui-theme-orange ui-fill-dark-100">Revised</span>
                                        </a>
                                        <dl class="ui-row ui-row-gap-sm">
                                            <dt>State</dt>
                                            <dd>İzmir</dd>
                                            <dt>Title Deeds</dt>
                                            <dd>1</dd>
                                            <dt>Parcels</dt>
                                            <dd>70/1</dd>
                                        </dl>
                                    </li>
                                    <li class="business-new">
                                        <a href="#">
                                            <span class="ui-avatar-xs">
                                                <span><b>10</b> day</span>
                                            </span>
                                            <b>DOC-312557</b>
                                            <em>30.25.2022 09:43pm</em>
                                        </a>
                                        <dl class="ui-row ui-row-gap-sm">
                                            <dt>State</dt>
                                            <dd>Antalya</dd>
                                            <dt>Title Deeds</dt>
                                            <dd>1</dd>
                                            <dt>Parcels</dt>
                                            <dd>606/13</dd>
                                        </dl>
                                    </li>
                                    <li class="business-new">
                                        <a href="#">
                                            <span class="ui-avatar-xs">
                                                <span><b>8</b> day</span>
                                            </span>
                                            <b>DOC-312557</b>
                                            <em>30.25.2022 09:43pm</em>
                                        </a>
                                        <dl class="ui-row ui-row-gap-sm">
                                            <dt>State</dt>
                                            <dd>İstanbul</dd>
                                            <dt>Title Deeds</dt>
                                            <dd>1</dd>
                                            <dt>Parcels</dt>
                                            <dd>23/5</dd>
                                        </dl>
                                    </li>
                                    <li class="business-new">
                                        <a href="#">
                                            <span class="ui-avatar-xs">
                                                <span><b>6</b> day</span>
                                            </span>
                                            <b>DOC-312557</b>
                                            <em>30.25.2022 09:43pm</em>
                                        </a>
                                        <dl class="ui-row ui-row-gap-sm">
                                            <dt>State</dt>
                                            <dd>Ankara</dd>
                                            <dt>Title Deeds</dt>
                                            <dd>1</dd>
                                            <dt>Parcels</dt>
                                            <dd>775/9</dd>
                                        </dl>
                                    </li>
                                    <li class="business-new">
                                        <a href="#">
                                            <span class="ui-avatar-xs">
                                                <span><b>4</b> day</span>
                                            </span>
                                            <b>DOC-312557</b>
                                            <em>30.25.2022 09:43pm</em>
                                        </a>
                                        <dl class="ui-row ui-row-gap-sm">
                                            <dt>State</dt>
                                            <dd>İstanbul</dd>
                                            <dt>Title Deeds</dt>
                                            <dd>1</dd>
                                            <dt>Parcels</dt>
                                            <dd>513/2</dd>
                                        </dl>
                                    </li>
                                    <li class="business-new">
                                        <a href="#">
                                            <span class="ui-avatar-xs">
                                                <span><b>1</b> day</span>
                                            </span>
                                            <b>DOC-312557</b>
                                            <em>30.25.2022 09:43pm</em>
                                        </a>
                                        <dl class="ui-row ui-row-gap-sm">
                                            <dt>State</dt>
                                            <dd>İstanbul</dd>
                                            <dt>Title Deeds</dt>
                                            <dd>1</dd>
                                            <dt>Parcels</dt>
                                            <dd>896/7</dd>
                                        </dl>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <button title="Gönderilecek İşler" data-ui-tooltip="l" data-ui-only="desktop" class="ui-tab ui-tab-toggle ui-btn ui-btn-ghost ui-btn-square">
                        <span class="ui-notifier">
                            <svg class="ui-icon ui-no-opacity"><use href="../dist/icons.svg#hourglass-end"></use></svg>
                        </span>
                    </button>
                    <div class="ui-tab-content">
                        <h4>
                            <span class="business-info">4 New</span>
                            Sending Reports
                        </h4>

                        <!-- list loader -->
                        <div class="business-list-loader ui-animate-progress"></div>

                        <div class="ui-scroll-v">

                            <!--no content -->
                            <div class="business-no-content">
                                <svg class="ui-icon"><use href="../dist/icons.svg#hourglass-start"></use></svg>
                                No new sending reports.
                            </div>

                            <div class="ui-listgroup">
                                <ul class="ui-listgroup-has-avatar-xs ui-ease-listgroup">
                                    <li class="business-new">
                                        <a href="#">
                                            <span class="ui-avatar-xs">
                                                <span><b>1</b> day</span>
                                            </span>
                                            <b>DOC-312557</b>
                                            <em>03.14.2022 09:50pm</em>
                                            <span class="business-info ui-theme-red ui-fill-dark-100">Urgent</span>
                                        </a>
                                    </li>
                                    <li class="business-new">
                                        <a href="#">
                                            <span class="ui-avatar-xs">
                                                <span><b>0</b> day</span>
                                            </span>
                                            <b>DOC-312557</b>
                                            <em>03.14.2022 09:50pm</em>
                                            <span class="business-info ui-theme-red ui-fill-dark-100">Urgent</span>
                                            <span class="business-info ui-theme-yellow ui-fill-dark-100">VIP</span>
                                        </a>
                                    </li>
                                    <li class="business-new">
                                        <a href="#">
                                            <span class="ui-avatar-xs">
                                                <span><b>-1</b> day</span>
                                            </span>
                                            <b>DOC-312557</b>
                                            <em>03.14.2022 09:50pm</em>
                                            <span class="business-info ui-theme-orange ui-fill-dark-100">Revised</span>
                                        </a>
                                    </li>
                                    <li class="business-new">
                                        <a href="#">
                                            <span class="ui-avatar-xs">
                                                <span><b>-2</b> day</span>
                                            </span>
                                            <b>DOC-312557</b>
                                            <em>03.14.2022 09:50pm</em>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <button title="Favorites" data-ui-tooltip="l" data-ui-only="desktop" class="ui-tab ui-tab-toggle ui-btn ui-btn-ghost ui-btn-square">
                        <svg class="ui-icon ui-no-opacity"><use href="../dist/icons.svg#star"></use></svg>
                    </button>
                    <div class="ui-tab-content">
                        <h4>Favorites</h4>

                        <!-- list loader -->
                        <div class="business-list-loader ui-animate-progress"></div>

                        <div class="ui-scroll-v">

                            <div class="ui-listgroup">
                                <b class="business-title">
                                    <a title="Add New" class="business-edit ui-ease-bg" href="#">
                                        <svg class="ui-icon"><use href="../dist/icons.svg#plus"></use></svg>
                                    </a>
                                    Search
                                </b>
                                <ul class="ui-ease-listgroup">
                                    <li>
                                        Company All Reports
                                        <span class="ui-ease-1st-bg">
                                            <a class="business-edit ui-listgroup-url" href="#">Edit</a>
                                            <span class="business-remove" onclick="ui.alerts.dialog({ msg: 'Company All Reports will be removed from the favorites list.', success: 'Remove', error: 'Cancel', callback: function (v) { if (v === 'success') ui.alerts.message({ msg: 'Removed from favorites!' }); } });">Remove</span>
                                            <a class="business-mark ui-listgroup-url" href="#">Show Results</a>
                                        </span>
                                    </li>
                                </ul>
                                <b class="business-title">
                                    <a title="Add New" class="business-edit ui-ease-bg" href="#">
                                        <svg class="ui-icon"><use href="../dist/icons.svg#plus"></use></svg>
                                    </a>
                                    Users
                                </b>
                                <ul class="ui-ease-listgroup">
                                    <li>
                                        Specialist User Reports
                                        <span class="ui-ease-1st-bg">
                                            <a class="business-edit ui-listgroup-url" href="#">Edit</a>
                                            <span class="business-remove" onclick="ui.alerts.dialog({ msg: 'Specialist User Reports will be removed from the favorites list.', success: 'Remove', error: 'Cancel', callback: function (v) { if (v === 'success') ui.alerts.message({ msg: 'Removed from favorites!' }); } });">Remove</span>
                                            <a class="business-mark ui-listgroup-url" href="#">Show Results</a>
                                        </span>
                                    </li>
                                    <li>
                                        Supervisor User Reports
                                        <span class="ui-ease-1st-bg">
                                            <a class="business-edit ui-listgroup-url" href="#">Edit</a>
                                            <span class="business-remove" onclick="ui.alerts.dialog({ msg: 'Supervisor User Reports will be removed from the favorites list.', success: 'Remove', error: 'Cancel', callback: function (v) { if (v === 'success') ui.alerts.message({ msg: 'Removed from favorites!' }); } });">Remove</span>
                                            <a class="business-mark ui-listgroup-url" href="#">Show Results</a>
                                        </span>
                                    </li>
                                </ul>
                                <b class="business-title">
                                    <a title="Add New" class="business-edit ui-ease-bg" href="#">
                                        <svg class="ui-icon"><use href="../dist/icons.svg#plus"></use></svg>
                                    </a>
                                    Companies
                                </b>
                                <span class="business-no-content-sm"> <!--no content -->
                                    <svg class="ui-icon"><use href="../dist/icons.svg#star"></use></svg>
                                    Not added yet.
                                </span>
                                <b class="business-title">
                                    <a title="Add New" class="business-edit ui-ease-bg" href="#">
                                        <svg class="ui-icon"><use href="../dist/icons.svg#plus"></use></svg>
                                    </a>
                                    Lists
                                </b>
                                <span class="business-no-content-sm"> <!--no content -->
                                    <svg class="ui-icon"><use href="../dist/icons.svg#star"></use></svg>
                                    Not lists added yet.
                                </span>
                                <b class="business-title">
                                    <a title="Add New" class="business-edit ui-ease-bg" href="#">
                                        <svg class="ui-icon"><use href="../dist/icons.svg#plus"></use></svg>
                                    </a>
                                    Maps
                                </b>
                                <span class="business-no-content-sm"> <!--no content -->
                                    <svg class="ui-icon"><use href="../dist/icons.svg#star"></use></svg>
                                    Not maps added yet.
                                </span>
                                <b class="business-title">
                                    <a title="Add New" class="business-edit ui-ease-bg" href="#">
                                        <svg class="ui-icon"><use href="../dist/icons.svg#plus"></use></svg>
                                    </a>
                                    Graphs
                                </b>
                                <span class="business-no-content-sm"> <!--no content -->
                                    <svg class="ui-icon"><use href="../dist/icons.svg#star"></use></svg>
                                    Not graphs added yet.
                                </span>
                            </div>
                        </div>

                    </div>

                    <button title="Last Visited Reports" data-ui-tooltip="l" data-ui-only="desktop" class="ui-tab ui-tab-toggle ui-btn ui-btn-ghost ui-btn-square">
                        <svg class="ui-icon ui-no-opacity"><use href="../dist/icons.svg#history"></use></svg>
                    </button>
                    <div class="ui-tab-content">
                        <h4>Last Visited Reports</h4>

                        <!-- list loader -->
                        <div class="business-list-loader ui-animate-progress"></div>

                        <div class="ui-scroll-v">

                            <!--no content -->
                            <div class="business-no-content">
                                <svg class="ui-icon"><use href="../dist/icons.svg#history"></use></svg>
                                No reports visited.
                            </div>

                            <div class="ui-listgroup">
                                <ul class="ui-listgroup-has-avatar-xs ui-listgroup-has-icon-xs ui-ease-listgroup">
                                    <li>
                                        <a href="#">
                                            <svg class="ui-listgroup-icon ui-icon"><use href="../dist/icons.svg#angle-right"></use></svg>
                                            <span class="ui-avatar-xs"><svg class="ui-icon">
                                                <use href="../dist/icons.svg#history"></use></svg>
                                            </span>
                                            <b>DOC-312557</b>
                                            <span>3170187</span>
                                            <em>1hrs 25min</em>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <svg class="ui-listgroup-icon ui-icon"><use href="../dist/icons.svg#angle-right"></use></svg>
                                            <span class="ui-avatar-xs"><svg class="ui-icon">
                                                <use href="../dist/icons.svg#history"></use></svg>
                                            </span>
                                            <b>DOC-312557</b>
                                            <span>3170187</span>
                                            <em>1hrs 25min</em>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <svg class="ui-listgroup-icon ui-icon"><use href="../dist/icons.svg#angle-right"></use></svg>
                                            <span class="ui-avatar-xs"><svg class="ui-icon">
                                                <use href="../dist/icons.svg#history"></use></svg>
                                            </span>
                                            <b>DOC-312557</b>
                                            <span>3170187</span>
                                            <em>1hrs 25min</em>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <svg class="ui-listgroup-icon ui-icon"><use href="../dist/icons.svg#angle-right"></use></svg>
                                            <span class="ui-avatar-xs"><svg class="ui-icon">
                                                <use href="../dist/icons.svg#history"></use></svg>
                                            </span>
                                            <b>DOC-312557</b>
                                            <span>3170187</span>
                                            <em>1hrs 25min</em>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>

                <!-- panel bottom -->
                <div class="ui-set-absolute ui-set-b ui-set-cx ui-align-c ui-m-5-b">

                    <!-- company icon -->
                    <a class="ui-btn ui-btn-ghost ui-btn-square ui-icons-no-opacity ui-ease-btn" title="Company Name" href="#">
                        <svg class="ui-icon ui-theme-gray ui-text"><use href="../dist/icons.svg#box"/> </svg>
                    </a>

                </div>

            </div>
        </div>

    </div>
</main>

<!-- left sidebar -->
<div class="ui-sidebar ui-sidebar-l ui-round ui-theme-base ui-ease-layout ui-ease-in-out">
    <button class="ui-sidebar-close ui-btn ui-btn-square ui-btn-ghost ui-circle ui-ease-btn">
        <svg class="ui-icon ui-no-opacity"><use href="../dist/icons.svg#arrow-left"/></svg>
    </button>
    <div class="ui-sidebar-content ui-no-p ui-scroll-v"></div>
</div>

<!-- right sidebar -->
<div class="ui-sidebar ui-sidebar-r ui-round ui-theme-base ui-ease-layout ui-ease-in-out">
    <button class="ui-sidebar-close ui-btn ui-btn-square ui-btn-ghost ui-circle ui-ease-btn">
        <svg class="ui-icon ui-no-opacity"><use href="../dist/icons.svg#arrow-right"/></svg>
    </button>
    <div class="ui-sidebar-content ui-no-p ui-scroll-v"></div>
</div>