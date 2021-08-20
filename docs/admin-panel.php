<!-- custom JS -->
<script src="../js/custom/admin-panel.js"></script>

<main class="container no-gutter">
    <div class="col-static">

        <!-- sidebar -->
        <div class="col-300 padding-10">

            <div class="padding-20 padding-10-r md-no-padding">

                <!-- profile -->
                <div class="card padding-15-v md-no-padding-v md-no-margin round shadow-lg set-relative">
                    <div class="align-c padding-10-v">
                        <div class="padding-10 set-absolute set-t set-l ease-1st-btn">
                            <button class="btn btn-ghost btn-square round show-mobile-menu-l visible-md">
                                <svg class="icon"><use href="#bars-left"/></svg>
                            </button>
                            <button class="btn btn-ghost round" data-notifier data-tooltip="r" title="Show messages">
                                <svg class="icon"><use href="#bell-on"/></svg>
                            </button>
                        </div>
                        <div class="dropdown margin-10 set-absolute set-t set-r ease-dropdown">
                            <button class="btn btn-ghost round" data-tooltip="r" data-only="desktop" title="Settings">
                                <svg class="icon"><use href="#settings"/></svg>
                            </button>
                            <ul class="content icons-margin-10-r round shadow-lg">
                                <li><a href="#"><svg class="icon"><use href="#user"/></svg>Show Profile</a></li>
                                <li><a href="#"><svg class="icon"><use href="#image"/></svg>Change Profile Photo</a></li>
                                <li><a href="#"><svg class="icon"><use href="#key"/></svg>Change Password</a></li>
                                <li><a href="#"><svg class="icon"><use href="#sign-out"/></svg>Log Out</a></li>
                            </ul>
                        </div>
                        <div class="padding-10 circle inline-block theme-gray ui-bg-light-300">
                            <a class="hover-scale ease-layout" href="#" data-tooltip="r" title="Show your profile">
                                <img class="img-photo-lg circle" src="img/profile-image.jpg" alt="">
                            </a>
                        </div>
                        <div class="x-large padding-10-t margin-3-t">
                            aeminyuce
                        </div>
                        <span class="color-black-muted">Supervisor</span>
                        <div class="countdown x-large margin-10-t">
                            <div data-tooltip title="Idle time">
                                <svg class="icon icon-sm color-black-50 margin-3-r"><use href="#clock"/></svg>
                                <span class="color-black-50 inline-block">
                                    <span class="h">00</span>:<span class="m">59</span>:<span class="s">59</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- nav -->
                <nav class="form-lg margin-25-v icons-lg icons-no-opacity theme-default hidden-md">
                    <ul class="list-unstyled list-spacer-20 align-l icons-margin-10-r block-2nd ease-2nd-button add-mobile-menu-l">
                        <li>
                            <a class="btn btn-ghost border-r border-lg ui-border" href="#">
                                <svg class="icon"><use href="#chart-pie"/></svg>
                                Dashboard
                            </a>
                        </li>
                        <li>
                            <a class="btn btn-ghost btn-ghost-border border-r border-lg ui-border" href="#">
                                <svg class="icon"><use href="#users"/></svg>
                                Employees
                            </a>
                        </li>
                        <li>
                            <a class="btn btn-ghost btn-ghost-border border-r border-lg ui-border" href="#">
                                <svg class="icon"><use href="#moneys"/></svg>
                                Payments
                            </a>
                        </li>
                        <li>
                            <a class="btn btn-ghost btn-ghost-border border-r border-lg ui-border" href="#">
                                <svg class="icon"><use href="#calendar-days"/></svg>
                                Events
                            </a>
                        </li>
                        <li>
                            <a class="btn btn-ghost btn-ghost-border border-r border-lg ui-border" href="#">
                                <svg class="icon"><use href="#docs"/></svg>
                                Documents
                            </a>
                        </li>
                        <li>
                            <a class="btn margin-5-b btn-ghost btn-ghost-border border-r border-lg ui-border" href="#">
                                <svg class="icon"><use href="#clipboard-list"/></svg>
                                Lists
                            </a>
                        </li>
                    </ul>
                </nav>

                <!-- tips -->
                <div class="card padding-15 round shadow-lg hidden-md">
                    <button class="close-card ease-btn">
                        <svg class="icon"><use href="#remove"/></svg>
                    </button>
                    <svg class="icon margin-10-r"><use href="#help"/></svg>
                    <b>System Tips</b>
                    <div class="color-black-50 large no-line-height margin-5-t margin-15-b">You can backup your stats weekly.</div>
                    <button class="btn block circle theme-green ui-bg-dark-100 ease-btn"><b>Got it!</b></button>
                </div>

            </div>

        </div>

        <div class="row padding-20-r padding-20-v md-no-padding">
            <div class="col-12 no-padding-v">
                <div class="row lg-fluid">

                    <div class="col-6">

                        <div class="card full-h round shadow-lg">
                            <div class="card-side padding-15 border-b">
                                <a href="#" class="btn right circle ease-btn hidden-xs">
                                    Details
                                    <svg class="icon margin-5-l"><use href="#arrow-right"/></svg>
                                </a>
                                <h4 class="margin-5-b">Averages of Work</h4>
                                <div class="color-black-50 xs-align-c">
                                    Finished per Month <b>263</b> works.
                                </div>
                                <a href="#" class="btn block margin-10-t circle ease-btn visible-xs">
                                    Show More
                                    <svg class="icon margin-5-l"><use href="#arrow-right"/></svg>
                                </a>
                            </div>
                            <div class="card-side padding-30">

                                <div class="row row-gap-md xs-fluid icons-lg margin-25-t md-no-margin">
                                    <div class="col-4">
                                        <div class="donut-chart ease-donut-chart col-xs-150 col-lg-150 automargin" style="max-width: 120px;">
                                            <strong>
                                                <svg class="icon"><use href="#box"/></svg>
                                                <b class="color-black-muted margin-10-t margin-5-b block">Last Month</b>
                                                <b class="large">220</b>
                                            </strong>
                                            <svg viewBox="0 0 160 160">
                                                <circle r="69.85699" cy="80" cx="80" class="bg" />
                                                <circle r="69.85699" cy="80" cx="80" stroke="#36a2eb" data-percent="38" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div class="donut-chart ease-donut-chart col-xs-150 col-lg-150 automargin" style="max-width: 120px;">
                                            <strong>
                                                <svg class="icon"><use href="#boxes"/></svg>
                                                <b class="color-black-muted margin-10-t margin-5-b block">Last year</b>
                                                <b class="large">2275</b>
                                            </strong>
                                            <svg viewBox="0 0 160 160">
                                                <circle r="69.85699" cy="80" cx="80" class="bg" />
                                                <circle r="69.85699" cy="80" cx="80" stroke="#ff9f40" data-percent="59" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div class="pie-chart ease-pie-chart col-xs-150 col-lg-150 automargin" data-text="Profit" style="max-width: 120px;">
                                            <ul>
                                                <li data-percent="66" data-fill="#60ab57" data-title="66%"></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div class="col-6">
                        <div class="calendar ease-calendar round shadow-lg"></div>
                    </div>

                    <div class="col-6">

                        <div class="card full-h round shadow-lg">

                            <div class="card-side padding-15 border-b">
                                <h4 class="margin-5-b">Last Week Stats</h4>
                                <div class="color-black-50 xs-align-c">
                                    Maximum value of profit <b>159</b> packages.
                                </div>
                            </div>

                            <div class="padding-15-h padding-20-v">

                                <div class="line-charts ease-line-charts" data-size="5,57" data-x="Mon,Tue,Wed,Thu,Fri,Sat,Sun">
                                    <ul class="line" data-name="1st" data-type="curved dashed">
                                        <li data-y="55" data-link="#1"></li>
                                        <li data-y="70" data-link="#2"></li>
                                        <li data-y="92" data-link="#3"></li>
                                        <li data-y="55" data-link="#4"></li>
                                        <li data-y="89" data-link="#5"></li>
                                        <li data-y="98" data-link="#6"></li>
                                        <li data-y="116" data-link="#7"></li>
                                    </ul>
                                    <ul class="line" data-name="2nd" data-type="filled curved">
                                        <li data-y="120" data-link="#1"></li>
                                        <li data-y="20" data-link="#2"></li>
                                        <li data-y="159" data-link="#3"></li>
                                        <li data-y="120" data-link="#4"></li>
                                        <li data-y="60" data-link="#5"></li>
                                        <li data-y="0" data-link="#6"></li>
                                        <li data-y="20" data-link="#7"></li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div class="col-6">

                        <!-- employee list -->
                        <div class="data-list data-striped data-hover card full-h round shadow-lg theme-gray ease-data-list">

                            <div class="row sm-fluid">
                                <div class="col-5 sm-no-padding-b">
                                    <div class="text text-icon-both round no-border ui-bg-light-100 has-clear ease-form">
                                        <svg class="icon text-icon-l"><use href="#search"/></svg>
                                        <button class="clear-form">
                                            <svg class="icon"><use href="#remove"/></svg>
                                        </button>
                                        <input class="data-filter" type="text" placeholder="Search">
                                    </div>
                                </div>
                                <div class="col-7 ease-1st-form align-r sm-align-l">
                                    <div class="select form-inline round no-border ui-bg-light-100">
                                        <svg class="icon"><use href="#angle-down"/></svg>
                                        <select class="data-filter" data-index="1">
                                            <option value="">Name</option>
                                            <option>John Doe</option>
                                            <option>Mary Doe</option>
                                            <option>Mike Taylor</option>
                                            <option>Bob Pool</option>
                                        </select>
                                    </div>
                                    <div class="select form-inline round no-border ui-bg-light-100">
                                        <svg class="icon"><use href="#angle-down"/></svg>
                                        <select class="data-filter" data-index="2" data-type="number">
                                            <option value="">Age</option>
                                            <option>24</option>
                                            <option>25</option>
                                            <option>29</option>
                                        </select>
                                    </div>
                                    <div class="select form-inline round no-border ui-bg-light-100">
                                        <svg class="icon"><use href="#angle-down"/></svg>
                                        <select class="data-show">
                                            <option>5</option>
                                            <option>15</option>
                                            <option>30</option>
                                            <option>All</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="row row-gap-xs align-l no-fluid block-2nd ui-bg-light-100 ease-2nd-btn">
                                <div class="col-5">
                                    <button class="btn btn-ghost" data-sort="1">
                                        <svg class="icon"><use href="#sort"/></svg> Name
                                    </button>
                                </div>
                                <div class="col-3">
                                    <button class="btn btn-ghost" data-sort="2" data-type="number">
                                        <svg class="icon"><use href="#sort"/></svg> Age
                                    </button>
                                </div>
                                <div class="col-4">
                                    <button class="btn btn-ghost" data-sort="3">
                                        <svg class="icon"><use href="#sort"/></svg> Job
                                    </button>
                                </div>
                            </div>

                            <div class="data-container icons-xxs">

                                <div class="data-content no-border" data-val="John Doe|25|Designer">
                                    <div class="row no-row-gap no-fluid">
                                        <div class="col-5">
                                            <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image.jpg" alt="">John Doe
                                        </div>
                                        <div class="col-3">
                                            <div class="padding-5-v margin-4-v">25</div>
                                        </div>
                                        <div class="col-4">
                                            Designer<br>
                                            <svg class="icon color-yellow"><use href="#star-fill"/></svg>
                                            <b class="small color-black-muted inline-block">6.012</b>
                                        </div>
                                    </div>
                                </div>
                                <div class="data-content no-border" data-val="Mary Doe|24|Designer">
                                    <div class="row no-row-gap no-fluid">
                                        <div class="col-5">
                                            <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image2.jpg" alt="">Mary Doe
                                        </div>
                                        <div class="col-3">
                                            <div class="padding-5-v margin-4-v">24</div>
                                        </div>
                                        <div class="col-4">
                                            Designer<br>
                                            <svg class="icon color-yellow"><use href="#star-fill"/></svg>
                                            <b class="small color-black-muted inline-block">6.012</b>
                                        </div>
                                    </div>
                                </div>
                                <div class="data-content no-border" data-val="Mike Taylor|29|Developer">
                                    <div class="row no-row-gap no-fluid">
                                        <div class="col-5">
                                            <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image.jpg" alt="">Mike Taylor
                                        </div>
                                        <div class="col-3">
                                            <div class="padding-5-v margin-4-v">29</div>
                                        </div>
                                        <div class="col-4">
                                            Developer<br>
                                            <svg class="icon color-yellow"><use href="#star-fill"/></svg>
                                            <b class="small color-black-muted inline-block">7.169</b>
                                        </div>
                                    </div>
                                </div>
                                <div class="data-content no-border" data-val="Bob Pool|25|Designer">
                                    <div class="row no-row-gap no-fluid">
                                        <div class="col-5">
                                            <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image3.jpg" alt="">Bob Pool
                                        </div>
                                        <div class="col-3">
                                            <div class="padding-5-v margin-4-v">25</div>
                                        </div>
                                        <div class="col-4">
                                            Designer<br>
                                            <svg class="icon color-yellow"><use href="#star-fill"/></svg>
                                            <b class="small color-black-muted inline-block">6.012</b>
                                        </div>
                                    </div>
                                </div>
                                <div class="data-content no-border" data-val="John Doe|24|Designer">
                                    <div class="row no-row-gap no-fluid">
                                        <div class="col-5">
                                            <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image.jpg" alt="">John Doe
                                        </div>
                                        <div class="col-3">
                                            <div class="padding-5-v margin-4-v">24</div>
                                        </div>
                                        <div class="col-4">
                                            Designer<br>
                                            <svg class="icon color-yellow"><use href="#star-fill"/></svg>
                                            <b class="small color-black-muted inline-block">6.012</b>
                                        </div>
                                    </div>
                                </div>
                                <div class="data-content no-border" data-val="Mary Doe|24|Researcher">
                                    <div class="row no-row-gap no-fluid">
                                        <div class="col-5">
                                            <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image2.jpg" alt="">Mary Doe
                                        </div>
                                        <div class="col-3">
                                            <div class="padding-5-v margin-4-v">24</div>
                                        </div>
                                        <div class="col-4">
                                            Researcher<br>
                                            <svg class="icon color-yellow"><use href="#star-fill"/></svg>
                                            <b class="small color-black-muted inline-block">4.466</b>
                                        </div>
                                    </div>
                                </div>
                                <div class="data-content no-border" data-val="Mike Taylor|29|Developer">
                                    <div class="row no-row-gap no-fluid">
                                        <div class="col-5">
                                            <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image.jpg" alt="">Mike Taylor
                                        </div>
                                        <div class="col-3">
                                            <div class="padding-5-v margin-4-v">29</div>
                                        </div>
                                        <div class="col-4">
                                            Developer<br>
                                            <svg class="icon color-yellow"><use href="#star-fill"/></svg>
                                            <b class="small color-black-muted inline-block">7.169</b>
                                        </div>
                                    </div>
                                </div>
                                <div class="data-content no-border" data-val="Bob Pool|25|Designer">
                                    <div class="row no-row-gap no-fluid">
                                        <div class="col-5">
                                            <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image3.jpg" alt="">Bob Pool
                                        </div>
                                        <div class="col-3">
                                            <div class="padding-5-v margin-4-v">25</div>
                                        </div>
                                        <div class="col-4">
                                            Designer<br>
                                            <svg class="icon color-yellow"><use href="#star-fill"/></svg>
                                            <b class="small color-black-muted inline-block">6.012</b>
                                        </div>
                                    </div>
                                </div>
                                <div class="data-content no-border" data-val="John Doe|25|Developer">
                                    <div class="row no-row-gap no-fluid">
                                        <div class="col-5">
                                            <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image.jpg" alt="">John Doe
                                        </div>
                                        <div class="col-3">
                                            <div class="padding-5-v margin-4-v">25</div>
                                        </div>
                                        <div class="col-4">
                                            Developer<br>
                                            <svg class="icon color-yellow"><use href="#star-fill"/></svg>
                                            <b class="small color-black-muted inline-block">7.169</b>
                                        </div>
                                    </div>
                                </div>
                                <div class="data-content no-border" data-val="Mary Doe|24|Developer">
                                    <div class="row no-row-gap no-fluid">
                                        <div class="col-5">
                                            <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image2.jpg" alt="">Mary Doe
                                        </div>
                                        <div class="col-3">
                                            <div class="padding-5-v margin-4-v">24</div>
                                        </div>
                                        <div class="col-4">
                                            Developer<br>
                                            <svg class="icon color-yellow"><use href="#star-fill"/></svg>
                                            <b class="small color-black-muted inline-block">7.169</b>
                                        </div>
                                    </div>
                                </div>
                                <div class="data-content no-border" data-val="Mike Taylor|29|Developer">
                                    <div class="row no-row-gap no-fluid">
                                        <div class="col-5">
                                            <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image.jpg" alt="">Mike Taylor
                                        </div>
                                        <div class="col-3">
                                            <div class="padding-5-v margin-4-v">29</div>
                                        </div>
                                        <div class="col-4">
                                            Developer<br>
                                            <svg class="icon color-yellow"><use href="#star-fill"/></svg>
                                            <b class="small color-black-muted inline-block">7.169</b>
                                        </div>
                                    </div>
                                </div>
                                <div class="data-content no-border" data-val="Bob Pool|25|Researcher">
                                    <div class="row no-row-gap no-fluid">
                                        <div class="col-5">
                                            <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image3.jpg" alt="">Bob Pool
                                        </div>
                                        <div class="col-3">
                                            <div class="padding-5-v margin-4-v">25</div>
                                        </div>
                                        <div class="col-4">
                                            Researcher<br>
                                            <svg class="icon color-yellow"><use href="#star-fill"/></svg>
                                            <b class="small color-black-muted inline-block">4.466</b>
                                        </div>
                                    </div>
                                </div>
                                <div class="data-content no-border" data-val="John Doe|25|Researcher">
                                    <div class="row no-row-gap no-fluid">
                                        <div class="col-5">
                                            <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image.jpg" alt="">John Doe
                                        </div>
                                        <div class="col-3">
                                            <div class="padding-5-v margin-4-v">25</div>
                                        </div>
                                        <div class="col-4">
                                            Researcher<br>
                                            <svg class="icon color-yellow"><use href="#star-fill"/></svg>
                                            <b class="small color-black-muted inline-block">4.466</b>
                                        </div>
                                    </div>
                                </div>
                                <div class="data-content no-border" data-val="Mary Doe|24|Developer">
                                    <div class="row no-row-gap no-fluid">
                                        <div class="col-5">
                                            <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image2.jpg" alt="">Mary Doe
                                        </div>
                                        <div class="col-3">
                                            <div class="padding-5-v margin-4-v">24</div>
                                        </div>
                                        <div class="col-4">
                                            Developer<br>
                                            <svg class="icon color-yellow"><use href="#star-fill"/></svg>
                                            <b class="small color-black-muted inline-block">7.169</b>
                                        </div>
                                    </div>
                                </div>
                                <div class="data-content no-border" data-val="Mike Taylor|29|Developer">
                                    <div class="row no-row-gap no-fluid">
                                        <div class="col-5">
                                            <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image.jpg" alt="">Mike Taylor
                                        </div>
                                        <div class="col-3">
                                            <div class="padding-5-v margin-4-v">29</div>
                                        </div>
                                        <div class="col-4">
                                            Developer<br>
                                            <svg class="icon color-yellow"><use href="#star-fill"/></svg>
                                            <b class="small color-black-muted inline-block">7.169</b>
                                        </div>
                                    </div>
                                </div>
                                <div class="data-content no-border" data-val="Bob Pool|25|Researcher">
                                    <div class="row no-row-gap no-fluid">
                                        <div class="col-5">
                                            <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image3.jpg" alt="">Bob Pool
                                        </div>
                                        <div class="col-3">
                                            <div class="padding-5-v margin-4-v">25</div>
                                        </div>
                                        <div class="col-4">
                                            Researcher<br>
                                            <svg class="icon color-yellow"><use href="#star-fill"/></svg>
                                            <b class="small color-black-muted inline-block">4.466</b>
                                        </div>
                                    </div>
                                </div>
                                <div class="data-content no-border" data-val="John Doe|24|Designer">
                                    <div class="row no-row-gap no-fluid">
                                        <div class="col-5">
                                            <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image.jpg" alt="">John Doe
                                        </div>
                                        <div class="col-3">
                                            <div class="padding-5-v margin-4-v">24</div>
                                        </div>
                                        <div class="col-4">
                                            Designer<br>
                                            <svg class="icon color-yellow"><use href="#star-fill"/></svg>
                                            <b class="small color-black-muted inline-block">6.012</b>
                                        </div>
                                    </div>
                                </div>
                                <div class="data-content no-border" data-val="Mary Doe|24|Researcher">
                                    <div class="row no-row-gap no-fluid">
                                        <div class="col-5">
                                            <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image2.jpg" alt="">Mary Doe
                                        </div>
                                        <div class="col-3">
                                            <div class="padding-5-v margin-4-v">24</div>
                                        </div>
                                        <div class="col-4">
                                            Researcher<br>
                                            <svg class="icon color-yellow"><use href="#star-fill"/></svg>
                                            <b class="small color-black-muted inline-block">4.466</b>
                                        </div>
                                    </div>
                                </div>
                                <div class="data-content no-border" data-val="Mike Taylor|29|Developer">
                                    <div class="row no-row-gap no-fluid">
                                        <div class="col-5">
                                            <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image.jpg" alt="">Mike Taylor
                                        </div>
                                        <div class="col-3">
                                            <div class="padding-5-v margin-4-v">29</div>
                                        </div>
                                        <div class="col-4">
                                            Developer<br>
                                            <svg class="icon color-yellow"><use href="#star-fill"/></svg>
                                            <b class="small color-black-muted inline-block">7.169</b>
                                        </div>
                                    </div>
                                </div>
                                <div class="data-content no-border" data-val="Bob Pool|25|Developer">
                                    <div class="row no-row-gap no-fluid">
                                        <div class="col-5">
                                            <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image3.jpg" alt="">Bob Pool
                                        </div>
                                        <div class="col-3">
                                            <div class="padding-5-v margin-4-v">25</div>
                                        </div>
                                        <div class="col-4">
                                            Developer<br>
                                            <svg class="icon color-yellow"><use href="#star-fill"/></svg>
                                            <b class="small color-black-muted inline-block">7.169</b>
                                        </div>
                                    </div>
                                </div>
                                <div class="data-content no-border" data-val="John Doe|25|Researcher">
                                    <div class="row no-row-gap no-fluid">
                                        <div class="col-5">
                                            <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image.jpg" alt="">John Doe
                                        </div>
                                        <div class="col-3">
                                            <div class="padding-5-v margin-4-v">25</div>
                                        </div>
                                        <div class="col-4">
                                            Researcher<br>
                                            <svg class="icon color-yellow"><use href="#star-fill"/></svg>
                                            <b class="small color-black-muted inline-block">4.466</b>
                                        </div>
                                    </div>
                                </div>
                                <div class="data-content no-border" data-val="Mary Doe|24|Developer">
                                    <div class="row no-row-gap no-fluid">
                                        <div class="col-5">
                                            <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image2.jpg" alt="">Mary Doe
                                        </div>
                                        <div class="col-3">
                                            <div class="padding-5-v margin-4-v">24</div>
                                        </div>
                                        <div class="col-4">
                                            Developer<br>
                                            <svg class="icon color-yellow"><use href="#star-fill"/></svg>
                                            <b class="small color-black-muted inline-block">7.169</b>
                                        </div>
                                    </div>
                                </div>
                                <div class="data-content no-border" data-val="Mike Taylor|29|Developer">
                                    <div class="row no-row-gap no-fluid">
                                        <div class="col-5">
                                            <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image.jpg" alt="">Mike Taylor
                                        </div>
                                        <div class="col-3">
                                            <div class="padding-5-v margin-4-v">29</div>
                                        </div>
                                        <div class="col-4">
                                            Developer<br>
                                            <svg class="icon color-yellow"><use href="#star-fill"/></svg>
                                            <b class="small color-black-muted inline-block">7.169</b>
                                        </div>
                                    </div>
                                </div>
                                <div class="data-content no-border" data-val="Bob Pool|25|Designer">
                                    <div class="row no-row-gap no-fluid">
                                        <div class="col-5">
                                            <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image3.jpg" alt="">Bob Pool
                                        </div>
                                        <div class="col-3">
                                            <div class="padding-5-v margin-4-v">25</div>
                                        </div>
                                        <div class="col-4">
                                            Designer<br>
                                            <svg class="icon color-yellow"><use href="#star-fill"/></svg>
                                            <b class="small color-black-muted inline-block">6.012</b>
                                        </div>
                                    </div>
                                </div>
                                <div class="data-content no-border" data-val="John Doe|24|Developer">
                                    <div class="row no-row-gap no-fluid">
                                        <div class="col-5">
                                            <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image.jpg" alt="">John Doe
                                        </div>
                                        <div class="col-3">
                                            <div class="padding-5-v margin-4-v">24</div>
                                        </div>
                                        <div class="col-4">
                                            Developer<br>
                                            <svg class="icon color-yellow"><use href="#star-fill"/></svg>
                                            <b class="small color-black-muted inline-block">7.169</b>
                                        </div>
                                    </div>
                                </div>
                                <div class="data-content no-border" data-val="Mary Doe|24|Developer">
                                    <div class="row no-row-gap no-fluid">
                                        <div class="col-5">
                                            <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image2.jpg" alt="">Mary Doe
                                        </div>
                                        <div class="col-3">
                                            24
                                        </div>
                                        <div class="col-4">
                                            Developer<br>
                                            <svg class="icon color-yellow"><use href="#star-fill"/></svg>
                                            <b class="small color-black-muted inline-block">7.169</b>
                                        </div>
                                    </div>
                                </div>
                                <div class="data-content no-border" data-val="Mike Taylor|29|Designer">
                                    <div class="row no-row-gap no-fluid">
                                        <div class="col-5">
                                            <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image.jpg" alt="">Mike Taylor
                                        </div>
                                        <div class="col-3">
                                            <div class="padding-5-v margin-4-v">29</div>
                                        </div>
                                        <div class="col-4">
                                            Designer<br>
                                            <svg class="icon color-yellow"><use href="#star-fill"/></svg>
                                            <b class="small color-black-muted inline-block">6.012</b>
                                        </div>
                                    </div>
                                </div>
                                <div class="data-content no-border" data-val="Bob Pool|25|Researcher">
                                    <div class="row no-row-gap no-fluid">
                                        <div class="col-5">
                                            <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image3.jpg" alt="">Bob Pool
                                        </div>
                                        <div class="col-3">
                                            <div class="padding-5-v margin-4-v">25</div>
                                        </div>
                                        <div class="col-4">
                                            Researcher<br>
                                            <svg class="icon color-yellow"><use href="#star-fill"/></svg>
                                            <b class="small color-black-muted inline-block">4.466</b>
                                        </div>
                                    </div>
                                </div>
                                <div class="data-content no-border" data-val="John Doe|25|Designer">
                                    <div class="row no-row-gap no-fluid">
                                        <div class="col-5">
                                            <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image.jpg" alt="">John Doe
                                        </div>
                                        <div class="col-3">
                                            <div class="padding-5-v margin-4-v">25</div>
                                        </div>
                                        <div class="col-4">
                                            Designer<br>
                                            <svg class="icon color-yellow"><use href="#star-fill"/></svg>
                                            <b class="small color-black-muted inline-block">6.012</b>
                                        </div>
                                    </div>
                                </div>
                                <div class="data-content no-border" data-val="Mary Doe|24|Developer">
                                    <div class="row no-row-gap no-fluid">
                                        <div class="col-5">
                                            <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image2.jpg" alt="">Mary Doe
                                        </div>
                                        <div class="col-3">
                                            <div class="padding-5-v margin-4-v">24</div>
                                        </div>
                                        <div class="col-4">
                                            Developer<br>
                                            <svg class="icon color-yellow"><use href="#star-fill"/></svg>
                                            <b class="small color-black-muted inline-block">7.169</b>
                                        </div>
                                    </div>
                                </div>
                                <div class="data-content no-border" data-val="Mike Taylor|29|Researcher">
                                    <div class="row no-row-gap no-fluid">
                                        <div class="col-5">
                                            <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image.jpg" alt="">Mike Taylor
                                        </div>
                                        <div class="col-3">
                                            <div class="padding-5-v margin-4-v">29</div>
                                        </div>
                                        <div class="col-4">
                                            Researcher<br>
                                            <svg class="icon color-yellow"><use href="#star-fill"/></svg>
                                            <b class="small color-black-muted inline-block">4.466</b>
                                        </div>
                                    </div>
                                </div>
                                <div class="data-content no-border" data-val="Bob Pool|25|Researcher">
                                    <div class="row no-row-gap no-fluid">
                                        <div class="col-5">
                                            <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image3.jpg" alt="">Bob Pool
                                        </div>
                                        <div class="col-3">
                                            <div class="padding-5-v margin-4-v">25</div>
                                        </div>
                                        <div class="col-4">
                                            Researcher<br>
                                            <svg class="icon color-yellow"><use href="#star-fill"/></svg>
                                            <b class="small color-black-muted inline-block">4.466</b>
                                        </div>
                                    </div>
                                </div>
                                <div class="data-content no-border" data-val="John Doe|25|Designer">
                                    <div class="row no-row-gap no-fluid">
                                        <div class="col-5">
                                            <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image.jpg" alt="">John Doe
                                        </div>
                                        <div class="col-3">
                                            <div class="padding-5-v margin-4-v">25</div>
                                        </div>
                                        <div class="col-4">
                                            Designer<br>
                                            <svg class="icon color-yellow"><use href="#star-fill"/></svg>
                                            <b class="small color-black-muted inline-block">6.012</b>
                                        </div>
                                    </div>
                                </div>
                                <div class="data-content no-border" data-val="Mary Doe|24|Developer">
                                    <div class="row no-row-gap no-fluid">
                                        <div class="col-5">
                                            <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image2.jpg" alt="">Mary Doe
                                        </div>
                                        <div class="col-3">
                                            <div class="padding-5-v margin-4-v">24</div>
                                        </div>
                                        <div class="col-4">
                                            Developer<br>
                                            <svg class="icon color-yellow"><use href="#star-fill"/></svg>
                                            <b class="small color-black-muted inline-block">7.169</b>
                                        </div>
                                    </div>
                                </div>
                                <div class="data-content no-border" data-val="Mike Taylor|29|Developer">
                                    <div class="row no-row-gap no-fluid">
                                        <div class="col-5">
                                            <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image.jpg" alt="">Mike Taylor
                                        </div>
                                        <div class="col-3">
                                            <div class="padding-5-v margin-4-v">29</div>
                                        </div>
                                        <div class="col-4">
                                            Developer<br>
                                            <svg class="icon color-yellow"><use href="#star-fill"/></svg>
                                            <b class="small color-black-muted inline-block">7.169</b>
                                        </div>
                                    </div>
                                </div>
                                <div class="data-content no-border" data-val="Bob Pool|25|Researcher">
                                    <div class="row no-row-gap no-fluid">
                                        <div class="col-5">
                                            <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image3.jpg" alt="">Bob Pool
                                        </div>
                                        <div class="col-3">
                                            <div class="padding-5-v margin-4-v">25</div>
                                        </div>
                                        <div class="col-4">
                                            Researcher<br>
                                            <svg class="icon color-yellow"><use href="#star-fill"/></svg>
                                            <b class="small color-black-muted inline-block">4.466</b>
                                        </div>
                                    </div>
                                </div>
                                <div class="data-content no-border" data-val="John Doe|24|Researcher">
                                    <div class="row no-row-gap no-fluid">
                                        <div class="col-5">
                                            <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image.jpg" alt="">John Doe
                                        </div>
                                        <div class="col-3">
                                            <div class="padding-5-v margin-4-v">24</div>
                                        </div>
                                        <div class="col-4">
                                            Researcher<br>
                                            <svg class="icon color-yellow"><use href="#star-fill"/></svg>
                                            <b class="small color-black-muted inline-block">4.466</b>
                                        </div>
                                    </div>
                                </div>
                                <div class="data-content no-border" data-val="Mary Doe|24|Developer">
                                    <div class="row no-row-gap no-fluid">
                                        <div class="col-5">
                                            <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image2.jpg" alt="">Mary Doe
                                        </div>
                                        <div class="col-3">
                                            <div class="padding-5-v margin-4-v">24</div>
                                        </div>
                                        <div class="col-4">
                                            Developer<br>
                                            <svg class="icon color-yellow"><use href="#star-fill"/></svg>
                                            <b class="small color-black-muted inline-block">7.169</b>
                                        </div>
                                    </div>
                                </div>
                                <div class="data-content no-border" data-val="Mike Taylor|29|Developer">
                                    <div class="row no-row-gap no-fluid">
                                        <div class="col-5">
                                            <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image.jpg" alt="">Mike Taylor
                                        </div>
                                        <div class="col-3">
                                            <div class="padding-5-v margin-4-v">29</div>
                                        </div>
                                        <div class="col-4">
                                            Developer<br>
                                            <svg class="icon color-yellow"><use href="#star-fill"/></svg>
                                            <b class="small color-black-muted inline-block">7.169</b>
                                        </div>
                                    </div>
                                </div>
                                <div class="data-content no-border" data-val="Bob Pool|25|Researcher">
                                    <div class="row no-row-gap no-fluid">
                                        <div class="col-5">
                                            <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image3.jpg" alt="">Bob Pool
                                        </div>
                                        <div class="col-3">
                                            <div class="padding-5-v margin-4-v">25</div>
                                        </div>
                                        <div class="col-4">
                                            Researcher<br>
                                            <svg class="icon color-yellow"><use href="#star-fill"/></svg>
                                            <b class="small color-black-muted inline-block">4.466</b>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div class="row no-fluid border-t">
                                <div class="col-6">
                                    <div class="padding-5-v">
                                        Total <b class="data-total"></b>
                                    </div>
                                </div>
                                <div class="col-6 align-r">
                                    <div class="data-paging pagination ease-1st-btn" data-default="btn round" data-active="theme-default2 ui-bg-dark-100"></div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>

    </div>
</main>

<!-- mobile menu -->
<div class="mobile-menu show-l theme-default ease-layout ease-in-out ">
    <div class="mobile-menu-title ui-bg-dark-100">
        <button class="btn btn-square btn-lg btn-ghost round ease-btn close-mobile-menu">
            <svg class="icon no-opacity"><use href="#remove"/></svg>
        </button>
        <div class="x-large padding-10">Admin Panel, Menu</div>
    </div>
    <div class="mobile-menu-content scroll-v"></div>
</div>