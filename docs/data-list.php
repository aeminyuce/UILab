<main class="container no-gutter">
    <div class="fixed">
        <div class="row">
            <div class="col-12 padding-30-v">

                <h4>Data List Examples</h4>
                <div class="card padding-10 round shadow-lg">
                    <div class="data-list data-striped data-hover theme-gray ease-data-list">

                        <div class="row row-no-gap-v row-sm-gap-h margin-2-v">
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
                                    <button class="btn align-l round ui-x-light">
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
                                        <ul class="steps-bar steps-icon theme-default2 ui-text">
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
                                        <ul class="steps-bar steps-icon theme-default2 ui-text">
                                            <li>
                                                <i class="icon icon-check-circle" data-tooltip title="Starting"></i>1:S
                                            </li>
                                            <li class="active">
                                                <i class="icon icon-clock" data-tooltip title="Waiting"></i>2:W
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
                                        <ul class="steps-bar steps-icon theme-default2 ui-text">
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
                                        <ul class="steps-bar steps-icon theme-default2 ui-text">
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
                                        <ul class="steps-bar steps-icon theme-default2 ui-text">
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
                                        <ul class="steps-bar steps-icon theme-default2 ui-text">
                                            <li>
                                                <i class="icon icon-check-circle" data-tooltip title="Starting"></i>1:S
                                            </li>
                                            <li class="active">
                                                <i class="icon icon-clock" data-tooltip title="Waiting"></i>2:W
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
                                        <ul class="steps-bar steps-icon theme-default2 ui-text">
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
                                        <ul class="steps-bar steps-icon theme-default2 ui-text">
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
                                        <ul class="steps-bar steps-icon theme-default2 ui-text">
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
                                        <ul class="steps-bar steps-icon theme-default2 ui-text">
                                            <li>
                                                <i class="icon icon-check-circle" data-tooltip title="Starting"></i>1:S
                                            </li>
                                            <li class="active">
                                                <i class="icon icon-clock" data-tooltip title="Waiting"></i>2:W
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
                                        <ul class="steps-bar steps-icon theme-default2 ui-text">
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
                                        <ul class="steps-bar steps-icon theme-default2 ui-text">
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
                            <div class="col-8 no-fluid align-r">
                                <div class="data-paging pagination ease-1st-btn" data-default="btn round" data-active="theme-default2 ui-dark"></div>
                            </div>
                        </div>

                    </div>
                </div>

                <span class="sp30"></span>

                <div class="data-list data-striped data-hover border ease-data-list round">

                    <div class="row sm-fluid">
                        <div class="col-5 sm-no-padding-b">
                            <div class="text text-icon-both round border-dual has-clear ease-form">
                                <i class="icon icon-search text-icon-l"></i>
                                <button class="clear-form icon icon-remove"></button>
                                <input class="data-filter" type="text" placeholder="Search">
                            </div>
                        </div>
                        <div class="col-7 align-r sm-align-l">
                            <label class="custom margin-5-r">
                                <span class="check-custom round border-dual sm-no-margin-t ease-form">
                                    <input class="data-check-all" type="checkbox">
                                    <i class="state"></i>
                                </span>
                                Check All
                            </label>

                            <span class="sp10 visible-sm"></span>

                            <div class="select form-xs-inline round border-dual ease-form">
                                <i class="icon icon-angle-down"></i>
                                <select class="data-filter" data-index="1">
                                    <option value="">Name</option>
                                    <option>John Doe</option>
                                    <option>Mary Doe</option>
                                    <option>Mike Taylor</option>
                                    <option>Anna May</option>
                                </select>
                            </div>
                            <div class="select form-xs-inline round border-dual ease-form">
                                <i class="icon icon-angle-down"></i>
                                <select class="data-filter" data-index="2" data-type="number">
                                    <option value="">Age</option>
                                    <option>24</option>
                                    <option>25</option>
                                    <option>29</option>
                                </select>
                            </div>
                            <div class="select form-xs-inline round border-dual ease-form">
                                <i class="icon icon-angle-down"></i>
                                <select class="data-show">
                                    <option>5</option>
                                    <option>10</option>
                                    <option>20</option>
                                    <option>50</option>
                                    <option>All</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="row row-xs-gap align-l block-2nd ease-2nd-btn no-fluid">
                        <div class="col-5">
                            <button class="btn" data-sort="1"><i class="icon icon-xs icon-sort"></i> Name</button>
                        </div>
                        <div class="col-3">
                            <button class="btn" data-sort="2" data-type="number"><i class="icon icon-xs icon-sort"></i> Age</button>
                        </div>
                        <div class="col-4">
                            <button class="btn" data-sort="3"><i class="icon icon-xs icon-sort"></i> Job</button>
                        </div>
                    </div>

                    <div class="data-container">

                        <div class="data-content" data-val="John Doe|25|Designer">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round border-dual ease-form">
                                        <input class="data-check" type="checkbox">
                                        <i class="state"></i>
                                    </span>
                                    John Doe
                                </div>
                                <div class="col-3">
                                    25
                                </div>
                                <div class="col-4">
                                    Designer
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="Mary Doe|24|Designer">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round border-dual ease-form">
                                        <input class="data-check" type="checkbox">
                                        <i class="state"></i>
                                    </span>
                                    Mary Doe
                                </div>
                                <div class="col-3">
                                    24
                                </div>
                                <div class="col-4">
                                    Designer
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="Mike Taylor|29|Developer">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round border-dual ease-form">
                                        <input class="data-check" type="checkbox">
                                        <i class="state"></i>
                                    </span>
                                    Mike Taylor
                                </div>
                                <div class="col-3">
                                    29
                                </div>
                                <div class="col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="Anna May|25|Designer">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round border-dual ease-form">
                                        <input class="data-check" type="checkbox">
                                        <i class="state"></i>
                                    </span>
                                    Anna May
                                </div>
                                <div class="col-3">
                                    25
                                </div>
                                <div class="col-4">
                                    Designer
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="John Doe|24|Designer">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round border-dual ease-form">
                                        <input class="data-check" type="checkbox">
                                        <i class="state"></i>
                                    </span>
                                    John Doe
                                </div>
                                <div class="col-3">
                                    24
                                </div>
                                <div class="col-4">
                                    Designer
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="Mary Doe|24|Researcher">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round border-dual ease-form">
                                        <input class="data-check" type="checkbox">
                                        <i class="state"></i>
                                    </span>
                                    Mary Doe
                                </div>
                                <div class="col-3">
                                    24
                                </div>
                                <div class="col-4">
                                    Researcher
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="Mike Taylor|29|Developer">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round border-dual ease-form">
                                        <input class="data-check" type="checkbox">
                                        <i class="state"></i>
                                    </span>
                                    Mike Taylor
                                </div>
                                <div class="col-3">
                                    29
                                </div>
                                <div class="col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="Anna May|25|Designer">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round border-dual ease-form">
                                        <input class="data-check" type="checkbox">
                                        <i class="state"></i>
                                    </span>
                                    Anna May
                                </div>
                                <div class="col-3">
                                    25
                                </div>
                                <div class="col-4">
                                    Designer
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="John Doe|25|Developer">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round border-dual ease-form">
                                        <input class="data-check" type="checkbox">
                                        <i class="state"></i>
                                    </span>
                                    John Doe
                                </div>
                                <div class="col-3">
                                    25
                                </div>
                                <div class="col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="Mary Doe|24|Developer">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round border-dual ease-form">
                                        <input class="data-check" type="checkbox">
                                        <i class="state"></i>
                                    </span>
                                    Mary Doe
                                </div>
                                <div class="col-3">
                                    24
                                </div>
                                <div class="col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="Mike Taylor|29|Developer">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round border-dual ease-form">
                                        <input class="data-check" type="checkbox">
                                        <i class="state"></i>
                                    </span>
                                    Mike Taylor
                                </div>
                                <div class="col-3">
                                    29
                                </div>
                                <div class="col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="Anna May|25|Researcher">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round border-dual ease-form">
                                        <input class="data-check" type="checkbox">
                                        <i class="state"></i>
                                    </span>
                                    Anna May
                                </div>
                                <div class="col-3">
                                    25
                                </div>
                                <div class="col-4">
                                    Researcher
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="John Doe|25|Researcher">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round border-dual ease-form">
                                        <input class="data-check" type="checkbox">
                                        <i class="state"></i>
                                    </span>
                                    John Doe
                                </div>
                                <div class="col-3">
                                    25
                                </div>
                                <div class="col-4">
                                    Researcher
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="Mary Doe|24|Developer">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round border-dual ease-form">
                                        <input class="data-check" type="checkbox">
                                        <i class="state"></i>
                                    </span>
                                    Mary Doe
                                </div>
                                <div class="col-3">
                                    24
                                </div>
                                <div class="col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="Mike Taylor|29|Developer">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round border-dual ease-form">
                                        <input class="data-check" type="checkbox">
                                        <i class="state"></i>
                                    </span>
                                    Mike Taylor
                                </div>
                                <div class="col-3">
                                    29
                                </div>
                                <div class="col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="Anna May|25|Researcher">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round border-dual ease-form">
                                        <input class="data-check" type="checkbox">
                                        <i class="state"></i>
                                    </span>
                                    Anna May
                                </div>
                                <div class="col-3">
                                    25
                                </div>
                                <div class="col-4">
                                    Researcher
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="John Doe|24|Designer">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round border-dual ease-form">
                                        <input class="data-check" type="checkbox">
                                        <i class="state"></i>
                                    </span>
                                    John Doe
                                </div>
                                <div class="col-3">
                                    24
                                </div>
                                <div class="col-4">
                                    Designer
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="Mary Doe|24|Researcher">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round border-dual ease-form">
                                        <input class="data-check" type="checkbox">
                                        <i class="state"></i>
                                    </span>
                                    Mary Doe
                                </div>
                                <div class="col-3">
                                    24
                                </div>
                                <div class="col-4">
                                    Researcher
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="Mike Taylor|29|Developer">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round border-dual ease-form">
                                        <input class="data-check" type="checkbox">
                                        <i class="state"></i>
                                    </span>
                                    Mike Taylor
                                </div>
                                <div class="col-3">
                                    29
                                </div>
                                <div class="col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="Anna May|25|Developer">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round border-dual ease-form">
                                        <input class="data-check" type="checkbox">
                                        <i class="state"></i>
                                    </span>
                                    Anna May
                                </div>
                                <div class="col-3">
                                    25
                                </div>
                                <div class="col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="John Doe|25|Researcher">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round border-dual ease-form">
                                        <input class="data-check" type="checkbox">
                                        <i class="state"></i>
                                    </span>
                                    John Doe
                                </div>
                                <div class="col-3">
                                    25
                                </div>
                                <div class="col-4">
                                    Researcher
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="Mary Doe|24|Developer">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round border-dual ease-form">
                                        <input class="data-check" type="checkbox">
                                        <i class="state"></i>
                                    </span>
                                    Mary Doe
                                </div>
                                <div class="col-3">
                                    24
                                </div>
                                <div class="col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="Mike Taylor|29|Developer">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round border-dual ease-form">
                                        <input class="data-check" type="checkbox">
                                        <i class="state"></i>
                                    </span>
                                    Mike Taylor
                                </div>
                                <div class="col-3">
                                    29
                                </div>
                                <div class="col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="Anna May|25|Designer">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round border-dual ease-form">
                                        <input class="data-check" type="checkbox">
                                        <i class="state"></i>
                                    </span>
                                    Anna May
                                </div>
                                <div class="col-3">
                                    25
                                </div>
                                <div class="col-4">
                                    Designer
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="John Doe|24|Developer">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round border-dual ease-form">
                                        <input class="data-check" type="checkbox">
                                        <i class="state"></i>
                                    </span>
                                    John Doe
                                </div>
                                <div class="col-3">
                                    24
                                </div>
                                <div class="col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="Mary Doe|24|Developer">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round border-dual ease-form">
                                        <input class="data-check" type="checkbox">
                                        <i class="state"></i>
                                    </span>
                                    Mary Doe
                                </div>
                                <div class="col-3">
                                    24
                                </div>
                                <div class="col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="Mike Taylor|29|Designer">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round border-dual ease-form">
                                        <input class="data-check" type="checkbox">
                                        <i class="state"></i>
                                    </span>
                                    Mike Taylor
                                </div>
                                <div class="col-3">
                                    29
                                </div>
                                <div class="col-4">
                                    Designer
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="Anna May|25|Researcher">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round border-dual ease-form">
                                        <input class="data-check" type="checkbox">
                                        <i class="state"></i>
                                    </span>
                                    Anna May
                                </div>
                                <div class="col-3">
                                    25
                                </div>
                                <div class="col-4">
                                    Researcher
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="John Doe|25|Designer">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round border-dual ease-form">
                                        <input class="data-check" type="checkbox">
                                        <i class="state"></i>
                                    </span>
                                    John Doe
                                </div>
                                <div class="col-3">
                                    25
                                </div>
                                <div class="col-4">
                                    Designer
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="Mary Doe|24|Developer">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round border-dual ease-form">
                                        <input class="data-check" type="checkbox">
                                        <i class="state"></i>
                                    </span>
                                    Mary Doe
                                </div>
                                <div class="col-3">
                                    24
                                </div>
                                <div class="col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="Mike Taylor|29|Researcher">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round border-dual ease-form">
                                        <input class="data-check" type="checkbox">
                                        <i class="state"></i>
                                    </span>
                                    Mike Taylor
                                </div>
                                <div class="col-3">
                                    29
                                </div>
                                <div class="col-4">
                                    Researcher
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="Anna May|25|Researcher">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round border-dual ease-form">
                                        <input class="data-check" type="checkbox">
                                        <i class="state"></i>
                                    </span>
                                    Anna May
                                </div>
                                <div class="col-3">
                                    25
                                </div>
                                <div class="col-4">
                                    Researcher
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="John Doe|25|Designer">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round border-dual ease-form">
                                        <input class="data-check" type="checkbox">
                                        <i class="state"></i>
                                    </span>
                                    John Doe
                                </div>
                                <div class="col-3">
                                    25
                                </div>
                                <div class="col-4">
                                    Designer
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="Mary Doe|24|Developer">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round border-dual ease-form">
                                        <input class="data-check" type="checkbox">
                                        <i class="state"></i>
                                    </span>
                                    Mary Doe
                                </div>
                                <div class="col-3">
                                    24
                                </div>
                                <div class="col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="Mike Taylor|29|Developer">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round border-dual ease-form">
                                        <input class="data-check" type="checkbox">
                                        <i class="state"></i>
                                    </span>
                                    Mike Taylor
                                </div>
                                <div class="col-3">
                                    29
                                </div>
                                <div class="col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="Anna May|25|Researcher">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round border-dual ease-form">
                                        <input class="data-check" type="checkbox">
                                        <i class="state"></i>
                                    </span>
                                    Anna May
                                </div>
                                <div class="col-3">
                                    25
                                </div>
                                <div class="col-4">
                                    Researcher
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="John Doe|24|Researcher">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round border-dual ease-form">
                                        <input class="data-check" type="checkbox">
                                        <i class="state"></i>
                                    </span>
                                    John Doe
                                </div>
                                <div class="col-3">
                                    24
                                </div>
                                <div class="col-4">
                                    Researcher
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="Mary Doe|24|Developer">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round border-dual ease-form">
                                        <input class="data-check" type="checkbox">
                                        <i class="state"></i>
                                    </span>
                                    Mary Doe
                                </div>
                                <div class="col-3">
                                    24
                                </div>
                                <div class="col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="Mike Taylor|29|Developer">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round border-dual ease-form">
                                        <input class="data-check" type="checkbox">
                                        <i class="state"></i>
                                    </span>
                                    Mike Taylor
                                </div>
                                <div class="col-3">
                                    29
                                </div>
                                <div class="col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="Anna May|25|Researcher">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round border-dual ease-form">
                                        <input class="data-check" type="checkbox">
                                        <i class="state"></i>
                                    </span>
                                    Anna May
                                </div>
                                <div class="col-3">
                                    25
                                </div>
                                <div class="col-4">
                                    Researcher
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="row no-fluid">
                        <div class="col-6">
                            <div class="padding-5-v">
                                Total <b class="data-total"></b>
                            </div>
                        </div>
                        <div class="col-6 align-r">
                            <div class="data-paging pagination ease-1st-btn" data-default="btn round" data-active="theme-default2 ui-dark"></div>
                        </div>
                    </div>

                </div>

                <span class="sp30"></span>

                <div class="data-list data-hover border ease-data-list round">

                    <div class="row sm-fluid">
                        <div class="col-5 sm-no-padding-b">
                            <div class="text text-icon-both round border-dual has-clear ease-form">
                                <i class="icon icon-search text-icon-l"></i>
                                <button class="clear-form icon icon-remove"></button>
                                <input class="data-filter" type="text" placeholder="Search">
                            </div>
                        </div>
                        <div class="col-7 align-r sm-align-l">
                            <label class="custom margin-5-r">
                                <span class="check-custom round border-dual sm-no-margin-t ease-form">
                                    <input class="data-filter" data-index="2" type="checkbox" value="25">
                                    <i class="state"></i>
                                </span>
                                Show only 25 ages.
                            </label>

                            <div class="select form-inline round border-dual ease-form right">
                                <i class="icon icon-xs icon-angle-down"></i>
                                <select class="data-show">
                                    <option>10</option>
                                    <option>20</option>
                                    <option>50</option>
                                    <option selected>All</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="row row-xs-gap align-l border-v block-2nd ease-2nd-btn no-fluid">
                        <div class="col-5">
                            <button class="btn btn-ghost" data-sort="1"><i class="icon icon-xs icon-sort"></i> Name</button>
                        </div>
                        <div class="col-3">
                            <button class="btn btn-ghost" data-sort="2" data-type="number"><i class="icon icon-xs icon-sort"></i> Age</button>
                        </div>
                        <div class="col-4">
                            <button class="btn btn-ghost" data-sort="3"><i class="icon icon-xs icon-sort"></i> Job</button>
                        </div>
                    </div>

                    <div class="data-container">

                        <div class="data-content" data-val="John Doe|25|Designer">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    John Doe
                                </div>
                                <div class="col-3">
                                    25
                                </div>
                                <div class="col-4">
                                    Designer
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="Mary Doe|24|Designer">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    Mary Doe
                                </div>
                                <div class="col-3">
                                    24
                                </div>
                                <div class="col-3">
                                    Designer
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="Mike Taylor|29|Developer">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    Mike Taylor
                                </div>
                                <div class="col-3">
                                    29
                                </div>
                                <div class="col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="Anna May|25|Designer">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    Anna May
                                </div>
                                <div class="col-3">
                                    25
                                </div>
                                <div class="col-4">
                                    Designer
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="John Doe|24|Designer">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    John Doe
                                </div>
                                <div class="col-3">
                                    24
                                </div>
                                <div class="col-4">
                                    Designer
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="Mary Doe|24|Researcher">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    Mary Doe
                                </div>
                                <div class="col-3">
                                    24
                                </div>
                                <div class="col-4">
                                    Researcher
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="Mike Taylor|29|Developer">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    Mike Taylor
                                </div>
                                <div class="col-3">
                                    29
                                </div>
                                <div class="col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="Anna May|25|Designer">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    Anna May
                                </div>
                                <div class="col-3">
                                    25
                                </div>
                                <div class="col-4">
                                    Designer
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="John Doe|25|Developer">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    John Doe
                                </div>
                                <div class="col-3">
                                    25
                                </div>
                                <div class="col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="Mary Doe|24|Developer">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    Mary Doe
                                </div>
                                <div class="col-3">
                                    24
                                </div>
                                <div class="col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="Mike Taylor|29|Developer">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    Mike Taylor
                                </div>
                                <div class="col-3">
                                    29
                                </div>
                                <div class="col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="Anna May|25|Researcher">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    Anna May
                                </div>
                                <div class="col-3">
                                    25
                                </div>
                                <div class="col-4">
                                    Researcher
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="John Doe|25|Researcher">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    John Doe
                                </div>
                                <div class="col-3">
                                    25
                                </div>
                                <div class="col-4">
                                    Researcher
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="Mary Doe|24|Developer">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    Mary Doe
                                </div>
                                <div class="col-3">
                                    24
                                </div>
                                <div class="col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="Mike Taylor|29|Developer">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    Mike Taylor
                                </div>
                                <div class="col-3">
                                    29
                                </div>
                                <div class="col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="Anna May|25|Researcher">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    Anna May
                                </div>
                                <div class="col-3">
                                    25
                                </div>
                                <div class="col-4">
                                    Researcher
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="John Doe|24|Designer">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    John Doe
                                </div>
                                <div class="col-3">
                                    24
                                </div>
                                <div class="col-4">
                                    Designer
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="Mary Doe|24|Researcher">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    Mary Doe
                                </div>
                                <div class="col-3">
                                    24
                                </div>
                                <div class="col-4">
                                    Researcher
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="Mike Taylor|29|Developer">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    Mike Taylor
                                </div>
                                <div class="col-3">
                                    29
                                </div>
                                <div class="col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="Anna May|25|Developer">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    Anna May
                                </div>
                                <div class="col-3">
                                    25
                                </div>
                                <div class="col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="John Doe|25|Researcher">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    John Doe
                                </div>
                                <div class="col-3">
                                    25
                                </div>
                                <div class="col-4">
                                    Researcher
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="Mary Doe|24|Developer">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    Mary Doe
                                </div>
                                <div class="col-3">
                                    24
                                </div>
                                <div class="col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="Mike Taylor|29|Developer">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    Mike Taylor
                                </div>
                                <div class="col-3">
                                    29
                                </div>
                                <div class="col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="Anna May|25|Designer">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    Anna May
                                </div>
                                <div class="col-3">
                                    25
                                </div>
                                <div class="col-4">
                                    Designer
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="John Doe|24|Developer">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    John Doe
                                </div>
                                <div class="col-3">
                                    24
                                </div>
                                <div class="col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="Mary Doe|24|Developer">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    Mary Doe
                                </div>
                                <div class="col-3">
                                    24
                                </div>
                                <div class="col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="Mike Taylor|29|Designer">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    Mike Taylor
                                </div>
                                <div class="col-3">
                                    29
                                </div>
                                <div class="col-4">
                                    Designer
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="Anna May|25|Researcher">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    Anna May
                                </div>
                                <div class="col-3">
                                    25
                                </div>
                                <div class="col-4">
                                    Researcher
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="John Doe|25|Designer">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    John Doe
                                </div>
                                <div class="col-3">
                                    25
                                </div>
                                <div class="col-4">
                                    Designer
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="Mary Doe|24|Developer">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    Mary Doe
                                </div>
                                <div class="col-3">
                                    24
                                </div>
                                <div class="col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="Mike Taylor|29|Researcher">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    Mike Taylor
                                </div>
                                <div class="col-3">
                                    29
                                </div>
                                <div class="col-4">
                                    Researcher
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="Anna May|25|Researcher">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    Anna May
                                </div>
                                <div class="col-3">
                                    25
                                </div>
                                <div class="col-4">
                                    Researcher
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="John Doe|25|Designer">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    John Doe
                                </div>
                                <div class="col-3">
                                    25
                                </div>
                                <div class="col-4">
                                    Designer
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="Mary Doe|24|Developer">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    Mary Doe
                                </div>
                                <div class="col-3">
                                    24
                                </div>
                                <div class="col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="Mike Taylor|29|Developer">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    Mike Taylor
                                </div>
                                <div class="col-3">
                                    29
                                </div>
                                <div class="col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="Anna May|25|Researcher">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    Anna May
                                </div>
                                <div class="col-3">
                                    25
                                </div>
                                <div class="col-4">
                                    Researcher
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="John Doe|24|Researcher">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    John Doe
                                </div>
                                <div class="col-3">
                                    24
                                </div>
                                <div class="col-4">
                                    Researcher
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="Mary Doe|24|Developer">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    Mary Doe
                                </div>
                                <div class="col-3">
                                    24
                                </div>
                                <div class="col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="Mike Taylor|29|Developer">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    Mike Taylor
                                </div>
                                <div class="col-3">
                                    29
                                </div>
                                <div class="col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="data-content" data-val="Anna May|25|Researcher">
                            <div class="row row-no-gap no-fluid">
                                <div class="col-5">
                                    Anna May
                                </div>
                                <div class="col-3">
                                    25
                                </div>
                                <div class="col-4">
                                    Researcher
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="row no-fluid">
                        <div class="col-6">
                            <div class="padding-5-v">
                                Total <b class="data-total"></b>
                            </div>
                        </div>
                        <div class="col-6 align-r">
                            <div class="data-paging pagination ease-1st-btn" data-default="btn round" data-active="theme-default2 ui-dark"></div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
</main>