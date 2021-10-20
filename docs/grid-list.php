<main class="container no-gutter">
    <div class="fixed">
        <div class="row">
            <div class="col-12 padding-30-v">

                <h4>Grid List Examples</h4>
                <div class="card padding-10 round shadow-lg">
                    <div class="grid-list grid-list-striped grid-hover ui-theme-gray ui-ease-grid-list">

                        <div class="row no-row-gap-v row-gap-sm-h margin-2-v">
                            <div class="col-6 lg-fluid">
                                <div class="text text-icon-both round no-border ui-fill-light-100 has-clear ui-ease-form">
                                    <svg class="icon text-icon-l"><use href="#search"></svg>
                                    <button class="clear-form">
                                        <svg class="icon"><use href="#remove"/></svg>
                                    </button>
                                    <input class="grid-list-filter" type="text" placeholder="Search">
                                </div>
                                <span class="sp-5 hidden-lg"></span>
                            </div>
                            <div class="col-lg-3 col-6 no-fluid">
                                <div class="select round no-border ui-fill-light-100 ui-ease-form">
                                    <svg class="icon"><use href="#angle-down"></svg>
                                    <select class="grid-list-filter" data-ui-index="2">
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
                                <div class="dropdown menu-l block ui-ease-dropdown">
                                    <button class="btn align-l round ui-fill-light-100">
                                        <span>
                                            <svg class="icon"><use href="#sort"></svg> Sort
                                        </span>
                                    </button>
                                    <ul class="dropdown-menu round shadow-lg">
                                        <li>
                                            <label class="radio" data-ui-sort="1">
                                                <svg class="icon"><use href="#sort"></svg>
                                                <input type="radio" name="s">By Name
                                            </label>
                                        </li>
                                        <li>
                                            <label class="radio" data-ui-sort="2">
                                                <svg class="icon"><use href="#sort"></svg>
                                                <input type="radio" name="s">By Step
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                                <select class="grid-list-show hidden">
                                    <option>4</option>
                                </select>
                            </div>
                        </div>

                        <span class="sp-15"></span>

                        <div class="grid-list-container">

                            <div class="grid-list-content no-border round" data-ui-val="John Atkinson|Paused">
                                <div class="row no-row-gap no-fluid">
                                    <div class="col-5">
                                        <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image.jpg" alt="">John Atkinson
                                    </div>
                                    <div class="col-7">
                                        <ul class="steps-bar steps-icon ui-theme-sub ui-color">
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="Starting"><use href="#check-circle"></svg>1:S
                                            </li>
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="Waiting"><use href="#check-circle"></svg>2:W
                                            </li>
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="Expert"><use href="#check-circle"></svg>3:E
                                            </li>
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="First Audit"><use href="#check-circle"></svg>4:F
                                            </li>
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="Second Audit"><use href="#check-circle"></svg>5:S
                                            </li>
                                            <li class="active">
                                                <svg class="icon" data-ui-tooltip title="Paused"><use href="#clock"></svg>6:P
                                            </li>
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="Delayed"><use href="#check-circle"></svg>7:C
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="grid-list-content no-border round" data-ui-val="Mary Doe|Waiting">
                                <div class="row no-row-gap no-fluid">
                                    <div class="col-5">
                                        <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image2.jpg" alt="">Mary Doe
                                    </div>
                                    <div class="col-7">
                                        <ul class="steps-bar steps-icon ui-theme-red ui-color">
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="Starting"><use href="#check-circle"></svg>1:S
                                            </li>
                                            <li class="active">
                                                <svg class="icon" data-ui-tooltip title="Waiting"><use href="#clock"></svg>2:W
                                            </li>
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="Expert"><use href="#check-circle"></svg>3:E
                                            </li>
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="First Audit"><use href="#check-circle"></svg>4:F
                                            </li>
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="Second Audit"><use href="#check-circle"></svg>5:S
                                            </li>
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="Paused"><use href="#check-circle"></svg>6:P
                                            </li>
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="Delayed"><use href="#check-circle"></svg>7:C
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="grid-list-content no-border round" data-ui-val="Mike Taylor|Completed">
                                <div class="row no-row-gap no-fluid">
                                    <div class="col-5">
                                        <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image3.jpg" alt="">Mike Taylor
                                    </div>
                                    <div class="col-7">
                                        <ul class="steps-bar steps-icon ui-theme-green ui-color">
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="Starting"><use href="#check-circle"></svg>1:S
                                            </li>
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="Waiting"><use href="#check-circle"></svg>2:W
                                            </li>
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="Expert"><use href="#check-circle"></svg>3:E
                                            </li>
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="First Audit"><use href="#check-circle"></svg>4:F
                                            </li>
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="Second Audit"><use href="#check-circle"></svg>5:S
                                            </li>
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="Paused"><use href="#check-circle"></svg>6:P
                                            </li>
                                            <li class="active">
                                                <svg class="icon" data-ui-tooltip title="Delayed"><use href="#clock"></svg>7:C
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="grid-list-content no-border round" data-ui-val="Tony Starky|Paused">
                                <div class="row no-row-gap no-fluid">
                                    <div class="col-5">
                                        <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image.jpg" alt="">Tony Starky
                                    </div>
                                    <div class="col-7">
                                        <ul class="steps-bar steps-icon ui-theme-sub ui-color">
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="Starting"><use href="#check-circle"></svg>1:S
                                            </li>
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="Waiting"><use href="#check-circle"></svg>2:W
                                            </li>
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="Expert"><use href="#check-circle"></svg>3:E
                                            </li>
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="First Audit"><use href="#check-circle"></svg>4:F
                                            </li>
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="Second Audit"><use href="#check-circle"></svg>5:S
                                            </li>
                                            <li class="active">
                                                <svg class="icon" data-ui-tooltip title="Paused"><use href="#clock"></svg>6:P
                                            </li>
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="Delayed"><use href="#check-circle"></svg>7:C
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="grid-list-content no-border round" data-ui-val="John Atkinson|Paused">
                                <div class="row no-row-gap no-fluid">
                                    <div class="col-5">
                                        <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image.jpg" alt="">John Atkinson
                                    </div>
                                    <div class="col-7">
                                        <ul class="steps-bar steps-icon ui-theme-sub ui-color">
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="Starting"><use href="#check-circle"></svg>1:S
                                            </li>
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="Waiting"><use href="#check-circle"></svg>2:W
                                            </li>
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="Expert"><use href="#check-circle"></svg>3:E
                                            </li>
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="First Audit"><use href="#check-circle"></svg>4:F
                                            </li>
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="Second Audit"><use href="#check-circle"></svg>5:S
                                            </li>
                                            <li class="active">
                                                <svg class="icon" data-ui-tooltip title="Paused"><use href="#clock"></svg>6:P
                                            </li>
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="Delayed"><use href="#check-circle"></svg>7:C
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="grid-list-content no-border round" data-ui-val="Mary Doe|Waiting">
                                <div class="row no-row-gap no-fluid">
                                    <div class="col-5">
                                        <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image2.jpg" alt="">Mary Doe
                                    </div>
                                    <div class="col-7">
                                        <ul class="steps-bar steps-icon ui-theme-red ui-color">
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="Starting"><use href="#check-circle"></svg>1:S
                                            </li>
                                            <li class="active">
                                                <svg class="icon" data-ui-tooltip title="Waiting"><use href="#clock"></svg>2:W
                                            </li>
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="Expert"><use href="#check-circle"></svg>3:E
                                            </li>
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="First Audit"><use href="#check-circle"></svg>4:F
                                            </li>
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="Second Audit"><use href="#check-circle"></svg>5:S
                                            </li>
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="Paused"><use href="#check-circle"></svg>6:P
                                            </li>
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="Delayed"><use href="#check-circle"></svg>7:C
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="grid-list-content no-border round" data-ui-val="Mike Taylor|Completed">
                                <div class="row no-row-gap no-fluid">
                                    <div class="col-5">
                                        <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image3.jpg" alt="">Mike Taylor
                                    </div>
                                    <div class="col-7">
                                        <ul class="steps-bar steps-icon ui-theme-green ui-color">
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="Starting"><use href="#check-circle"></svg>1:S
                                            </li>
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="Waiting"><use href="#check-circle"></svg>2:W
                                            </li>
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="Expert"><use href="#check-circle"></svg>3:E
                                            </li>
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="First Audit"><use href="#check-circle"></svg>4:F
                                            </li>
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="Second Audit"><use href="#check-circle"></svg>5:S
                                            </li>
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="Paused"><use href="#check-circle"></svg>6:P
                                            </li>
                                            <li class="active">
                                                <svg class="icon" data-ui-tooltip title="Delayed"><use href="#clock"></svg>7:C
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="grid-list-content no-border round" data-ui-val="Tony Starky|Paused">
                                <div class="row no-row-gap no-fluid">
                                    <div class="col-5">
                                        <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image.jpg" alt="">Tony Starky
                                    </div>
                                    <div class="col-7">
                                        <ul class="steps-bar steps-icon ui-theme-sub ui-color">
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="Starting"><use href="#check-circle"></svg>1:S
                                            </li>
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="Waiting"><use href="#check-circle"></svg>2:W
                                            </li>
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="Expert"><use href="#check-circle"></svg>3:E
                                            </li>
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="First Audit"><use href="#check-circle"></svg>4:F
                                            </li>
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="Second Audit"><use href="#check-circle"></svg>5:S
                                            </li>
                                            <li class="active">
                                                <svg class="icon" data-ui-tooltip title="Paused"><use href="#clock"></svg>6:P
                                            </li>
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="Delayed"><use href="#check-circle"></svg>7:C
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="grid-list-content no-border round" data-ui-val="John Atkinson|Paused">
                                <div class="row no-row-gap no-fluid">
                                    <div class="col-5">
                                        <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image.jpg" alt="">John Atkinson
                                    </div>
                                    <div class="col-7">
                                        <ul class="steps-bar steps-icon ui-theme-sub ui-color">
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="Starting"><use href="#check-circle"></svg>1:S
                                            </li>
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="Waiting"><use href="#check-circle"></svg>2:W
                                            </li>
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="Expert"><use href="#check-circle"></svg>3:E
                                            </li>
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="First Audit"><use href="#check-circle"></svg>4:F
                                            </li>
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="Second Audit"><use href="#check-circle"></svg>5:S
                                            </li>
                                            <li class="active">
                                                <svg class="icon" data-ui-tooltip title="Paused"><use href="#clock"></svg>6:P
                                            </li>
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="Delayed"><use href="#check-circle"></svg>7:C
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="grid-list-content no-border round" data-ui-val="Mary Doe|Waiting">
                                <div class="row no-row-gap no-fluid">
                                    <div class="col-5">
                                        <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image2.jpg" alt="">Mary Doe
                                    </div>
                                    <div class="col-7">
                                        <ul class="steps-bar steps-icon ui-theme-red ui-color">
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="Starting"><use href="#check-circle"></svg>1:S
                                            </li>
                                            <li class="active">
                                                <svg class="icon" data-ui-tooltip title="Waiting"><use href="#clock"></svg>2:W
                                            </li>
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="Expert"><use href="#check-circle"></svg>3:E
                                            </li>
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="First Audit"><use href="#check-circle"></svg>4:F
                                            </li>
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="Second Audit"><use href="#check-circle"></svg>5:S
                                            </li>
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="Paused"><use href="#check-circle"></svg>6:P
                                            </li>
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="Delayed"><use href="#check-circle"></svg>7:C
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="grid-list-content no-border round" data-ui-val="Mike Taylor|Completed">
                                <div class="row no-row-gap no-fluid">
                                    <div class="col-5">
                                        <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image3.jpg" alt="">Mike Taylor
                                    </div>
                                    <div class="col-7">
                                        <ul class="steps-bar steps-icon ui-theme-green ui-color">
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="Starting"><use href="#check-circle"></svg>1:S
                                            </li>
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="Waiting"><use href="#check-circle"></svg>2:W
                                            </li>
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="Expert"><use href="#check-circle"></svg>3:E
                                            </li>
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="First Audit"><use href="#check-circle"></svg>4:F
                                            </li>
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="Second Audit"><use href="#check-circle"></svg>5:S
                                            </li>
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="Paused"><use href="#check-circle"></svg>6:P
                                            </li>
                                            <li class="active">
                                                <svg class="icon" data-ui-tooltip title="Delayed"><use href="#clock"></svg>7:C
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="grid-list-content no-border round" data-ui-val="Tony Starky|Paused">
                                <div class="row no-row-gap no-fluid">
                                    <div class="col-5">
                                        <img class="img-photo-sm margin-10-r hidden-xs circle" src="img/profile-image.jpg" alt="">Tony Starky
                                    </div>
                                    <div class="col-7">
                                        <ul class="steps-bar steps-icon ui-theme-sub ui-color">
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="Starting"><use href="#check-circle"></svg>1:S
                                            </li>
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="Waiting"><use href="#check-circle"></svg>2:W
                                            </li>
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="Expert"><use href="#check-circle"></svg>3:E
                                            </li>
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="First Audit"><use href="#check-circle"></svg>4:F
                                            </li>
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="Second Audit"><use href="#check-circle"></svg>5:S
                                            </li>
                                            <li class="active">
                                                <svg class="icon" data-ui-tooltip title="Paused"><use href="#clock"></svg>6:P
                                            </li>
                                            <li>
                                                <svg class="icon" data-ui-tooltip title="Delayed"><use href="#check-circle"></svg>7:C
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
                                    Total <b class="grid-list-total"></b>
                                </div>
                            </div>
                            <div class="col-8 no-fluid align-r">
                                <div class="grid-list-paging pagination ui-ease-1st-btn" data-ui-default="btn round" data-ui-active="ui-border-dual ui-theme-sub ui-stroke ui-color"></div>
                            </div>
                        </div>

                    </div>
                </div>

                <span class="sp-30"></span>

                <div class="grid-list grid-list-striped grid-hover border ui-ease-grid-list round">

                    <div class="row sm-fluid">
                        <div class="col-5 sm-no-padding-b">
                            <div class="text text-icon-both round ui-border-dual has-clear ui-ease-form">
                                <svg class="icon text-icon-l"><use href="#search"></svg>
                                <button class="clear-form">
                                    <svg class="icon"><use href="#remove"/></svg>
                                </button>
                                <input class="grid-list-filter" type="text" placeholder="Search">
                            </div>
                        </div>
                        <div class="col-7 align-r sm-align-l">
                            <label class="custom margin-5-r">
                                <span class="check-custom round ui-border-dual sm-no-margin-t ui-ease-form">
                                    <input class="grid-list-check-all" type="checkbox">
                                    <i class="state"></i>
                                </span>
                                Check All
                            </label>

                            <span class="sp-10 visible-sm"></span>

                            <div class="select form-inline-xs round ui-border-dual ui-ease-form">
                                <svg class="icon"><use href="#angle-down"></svg>
                                <select class="grid-list-filter" data-ui-index="1">
                                    <option value="">Name</option>
                                    <option>John Doe</option>
                                    <option>Mary Doe</option>
                                    <option>Mike Taylor</option>
                                    <option>Anna May</option>
                                </select>
                            </div>
                            <div class="select form-inline-xs round ui-border-dual ui-ease-form">
                                <svg class="icon"><use href="#angle-down"></svg>
                                <select class="grid-list-filter" data-ui-index="2" data-ui-type="number">
                                    <option value="">Age</option>
                                    <option>24</option>
                                    <option>25</option>
                                    <option>29</option>
                                </select>
                            </div>
                            <div class="select form-inline-xs round ui-border-dual ui-ease-form">
                                <svg class="icon"><use href="#angle-down"></svg>
                                <select class="grid-list-show">
                                    <option>5</option>
                                    <option>10</option>
                                    <option>20</option>
                                    <option>50</option>
                                    <option>All</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="row row-gap-xs align-l block-2nd ui-ease-2nd-btn no-fluid">
                        <div class="col-5">
                            <button class="btn" data-ui-sort="1"><svg class="icon"><use href="#sort"></svg> Name</button>
                        </div>
                        <div class="col-3">
                            <button class="btn" data-ui-sort="2" data-ui-type="number"><svg class="icon"><use href="#sort"></svg> Age</button>
                        </div>
                        <div class="col-4">
                            <button class="btn" data-ui-sort="3"><svg class="icon"><use href="#sort"></svg> Job</button>
                        </div>
                    </div>

                    <div class="grid-list-container">

                        <div class="grid-list-content" data-ui-val="John Doe|25|Designer">
                            <div class="row no-row-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round ui-border-dual ui-ease-form">
                                        <input class="grid-list-check" type="checkbox">
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
                        <div class="grid-list-content" data-ui-val="Mary Doe|24|Designer">
                            <div class="row no-row-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round ui-border-dual ui-ease-form">
                                        <input class="grid-list-check" type="checkbox">
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
                        <div class="grid-list-content" data-ui-val="Mike Taylor|29|Developer">
                            <div class="row no-row-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round ui-border-dual ui-ease-form">
                                        <input class="grid-list-check" type="checkbox">
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
                        <div class="grid-list-content" data-ui-val="Anna May|25|Designer">
                            <div class="row no-row-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round ui-border-dual ui-ease-form">
                                        <input class="grid-list-check" type="checkbox">
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
                        <div class="grid-list-content" data-ui-val="John Doe|24|Designer">
                            <div class="row no-row-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round ui-border-dual ui-ease-form">
                                        <input class="grid-list-check" type="checkbox">
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
                        <div class="grid-list-content" data-ui-val="Mary Doe|24|Researcher">
                            <div class="row no-row-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round ui-border-dual ui-ease-form">
                                        <input class="grid-list-check" type="checkbox">
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
                        <div class="grid-list-content" data-ui-val="Mike Taylor|29|Developer">
                            <div class="row no-row-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round ui-border-dual ui-ease-form">
                                        <input class="grid-list-check" type="checkbox">
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
                        <div class="grid-list-content" data-ui-val="Anna May|25|Designer">
                            <div class="row no-row-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round ui-border-dual ui-ease-form">
                                        <input class="grid-list-check" type="checkbox">
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
                        <div class="grid-list-content" data-ui-val="John Doe|25|Developer">
                            <div class="row no-row-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round ui-border-dual ui-ease-form">
                                        <input class="grid-list-check" type="checkbox">
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
                        <div class="grid-list-content" data-ui-val="Mary Doe|24|Developer">
                            <div class="row no-row-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round ui-border-dual ui-ease-form">
                                        <input class="grid-list-check" type="checkbox">
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
                        <div class="grid-list-content" data-ui-val="Mike Taylor|29|Developer">
                            <div class="row no-row-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round ui-border-dual ui-ease-form">
                                        <input class="grid-list-check" type="checkbox">
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
                        <div class="grid-list-content" data-ui-val="Anna May|25|Researcher">
                            <div class="row no-row-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round ui-border-dual ui-ease-form">
                                        <input class="grid-list-check" type="checkbox">
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
                        <div class="grid-list-content" data-ui-val="John Doe|25|Researcher">
                            <div class="row no-row-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round ui-border-dual ui-ease-form">
                                        <input class="grid-list-check" type="checkbox">
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
                        <div class="grid-list-content" data-ui-val="Mary Doe|24|Developer">
                            <div class="row no-row-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round ui-border-dual ui-ease-form">
                                        <input class="grid-list-check" type="checkbox">
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
                        <div class="grid-list-content" data-ui-val="Mike Taylor|29|Developer">
                            <div class="row no-row-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round ui-border-dual ui-ease-form">
                                        <input class="grid-list-check" type="checkbox">
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
                        <div class="grid-list-content" data-ui-val="Anna May|25|Researcher">
                            <div class="row no-row-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round ui-border-dual ui-ease-form">
                                        <input class="grid-list-check" type="checkbox">
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
                        <div class="grid-list-content" data-ui-val="John Doe|24|Designer">
                            <div class="row no-row-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round ui-border-dual ui-ease-form">
                                        <input class="grid-list-check" type="checkbox">
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
                        <div class="grid-list-content" data-ui-val="Mary Doe|24|Researcher">
                            <div class="row no-row-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round ui-border-dual ui-ease-form">
                                        <input class="grid-list-check" type="checkbox">
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
                        <div class="grid-list-content" data-ui-val="Mike Taylor|29|Developer">
                            <div class="row no-row-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round ui-border-dual ui-ease-form">
                                        <input class="grid-list-check" type="checkbox">
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
                        <div class="grid-list-content" data-ui-val="Anna May|25|Developer">
                            <div class="row no-row-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round ui-border-dual ui-ease-form">
                                        <input class="grid-list-check" type="checkbox">
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
                        <div class="grid-list-content" data-ui-val="John Doe|25|Researcher">
                            <div class="row no-row-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round ui-border-dual ui-ease-form">
                                        <input class="grid-list-check" type="checkbox">
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
                        <div class="grid-list-content" data-ui-val="Mary Doe|24|Developer">
                            <div class="row no-row-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round ui-border-dual ui-ease-form">
                                        <input class="grid-list-check" type="checkbox">
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
                        <div class="grid-list-content" data-ui-val="Mike Taylor|29|Developer">
                            <div class="row no-row-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round ui-border-dual ui-ease-form">
                                        <input class="grid-list-check" type="checkbox">
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
                        <div class="grid-list-content" data-ui-val="Anna May|25|Designer">
                            <div class="row no-row-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round ui-border-dual ui-ease-form">
                                        <input class="grid-list-check" type="checkbox">
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
                        <div class="grid-list-content" data-ui-val="John Doe|24|Developer">
                            <div class="row no-row-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round ui-border-dual ui-ease-form">
                                        <input class="grid-list-check" type="checkbox">
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
                        <div class="grid-list-content" data-ui-val="Mary Doe|24|Developer">
                            <div class="row no-row-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round ui-border-dual ui-ease-form">
                                        <input class="grid-list-check" type="checkbox">
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
                        <div class="grid-list-content" data-ui-val="Mike Taylor|29|Designer">
                            <div class="row no-row-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round ui-border-dual ui-ease-form">
                                        <input class="grid-list-check" type="checkbox">
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
                        <div class="grid-list-content" data-ui-val="Anna May|25|Researcher">
                            <div class="row no-row-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round ui-border-dual ui-ease-form">
                                        <input class="grid-list-check" type="checkbox">
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
                        <div class="grid-list-content" data-ui-val="John Doe|25|Designer">
                            <div class="row no-row-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round ui-border-dual ui-ease-form">
                                        <input class="grid-list-check" type="checkbox">
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
                        <div class="grid-list-content" data-ui-val="Mary Doe|24|Developer">
                            <div class="row no-row-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round ui-border-dual ui-ease-form">
                                        <input class="grid-list-check" type="checkbox">
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
                        <div class="grid-list-content" data-ui-val="Mike Taylor|29|Researcher">
                            <div class="row no-row-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round ui-border-dual ui-ease-form">
                                        <input class="grid-list-check" type="checkbox">
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
                        <div class="grid-list-content" data-ui-val="Anna May|25|Researcher">
                            <div class="row no-row-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round ui-border-dual ui-ease-form">
                                        <input class="grid-list-check" type="checkbox">
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
                        <div class="grid-list-content" data-ui-val="John Doe|25|Designer">
                            <div class="row no-row-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round ui-border-dual ui-ease-form">
                                        <input class="grid-list-check" type="checkbox">
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
                        <div class="grid-list-content" data-ui-val="Mary Doe|24|Developer">
                            <div class="row no-row-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round ui-border-dual ui-ease-form">
                                        <input class="grid-list-check" type="checkbox">
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
                        <div class="grid-list-content" data-ui-val="Mike Taylor|29|Developer">
                            <div class="row no-row-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round ui-border-dual ui-ease-form">
                                        <input class="grid-list-check" type="checkbox">
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
                        <div class="grid-list-content" data-ui-val="Anna May|25|Researcher">
                            <div class="row no-row-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round ui-border-dual ui-ease-form">
                                        <input class="grid-list-check" type="checkbox">
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
                        <div class="grid-list-content" data-ui-val="John Doe|24|Researcher">
                            <div class="row no-row-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round ui-border-dual ui-ease-form">
                                        <input class="grid-list-check" type="checkbox">
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
                        <div class="grid-list-content" data-ui-val="Mary Doe|24|Developer">
                            <div class="row no-row-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round ui-border-dual ui-ease-form">
                                        <input class="grid-list-check" type="checkbox">
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
                        <div class="grid-list-content" data-ui-val="Mike Taylor|29|Developer">
                            <div class="row no-row-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round ui-border-dual ui-ease-form">
                                        <input class="grid-list-check" type="checkbox">
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
                        <div class="grid-list-content" data-ui-val="Anna May|25|Researcher">
                            <div class="row no-row-gap no-fluid">
                                <div class="col-5">
                                    <span class="check-custom no-margin-v round ui-border-dual ui-ease-form">
                                        <input class="grid-list-check" type="checkbox">
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
                                Total <b class="grid-list-total"></b>
                            </div>
                        </div>
                        <div class="col-6 align-r">
                            <div class="grid-list-paging pagination ui-ease-1st-btn" data-ui-default="btn round" data-ui-active="ui-theme-sub ui-fill-dark-100"></div>
                        </div>
                    </div>

                </div>

                <span class="sp-30"></span>

                <div class="grid-list grid-hover border ui-ease-grid-list round">

                    <div class="row sm-fluid">
                        <div class="col-5 sm-no-padding-b">
                            <div class="text text-icon-both round ui-border-dual has-clear ui-ease-form">
                                <svg class="icon text-icon-l"><use href="#search"></svg>
                                <button class="clear-form">
                                    <svg class="icon"><use href="#remove"/></svg>
                                </button>
                                <input class="grid-list-filter" type="text" placeholder="Search">
                            </div>
                        </div>
                        <div class="col-7 align-r sm-align-l">
                            <label class="custom margin-5-r">
                                <span class="check-custom round ui-border-dual sm-no-margin-t ui-ease-form">
                                    <input class="grid-list-filter" data-ui-index="2" type="checkbox" value="25">
                                    <i class="state"></i>
                                </span>
                                Show only 25 ages.
                            </label>

                            <div class="select form-inline round ui-border-dual ui-ease-form right">
                                <svg class="icon" data-ui-tooltip title="Waiting"><use href="#angle-down"></svg>
                                <select class="grid-list-show">
                                    <option>10</option>
                                    <option>20</option>
                                    <option>50</option>
                                    <option selected>All</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="row row-gap-xs align-l ui-border-v block-2nd ui-ease-2nd-btn no-fluid">
                        <div class="col-5">
                            <button class="btn btn-ghost" data-ui-sort="1"><svg class="icon"><use href="#sort"></svg> Name</button>
                        </div>
                        <div class="col-3">
                            <button class="btn btn-ghost" data-ui-sort="2" data-ui-type="number"><svg class="icon"><use href="#sort"></svg> Age</button>
                        </div>
                        <div class="col-4">
                            <button class="btn btn-ghost" data-ui-sort="3"><svg class="icon"><use href="#sort"></svg> Job</button>
                        </div>
                    </div>

                    <div class="grid-list-container">

                        <div class="grid-list-content" data-ui-val="John Doe|25|Designer">
                            <div class="row no-row-gap no-fluid">
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
                        <div class="grid-list-content" data-ui-val="Mary Doe|24|Designer">
                            <div class="row no-row-gap no-fluid">
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
                        <div class="grid-list-content" data-ui-val="Mike Taylor|29|Developer">
                            <div class="row no-row-gap no-fluid">
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
                        <div class="grid-list-content" data-ui-val="Anna May|25|Designer">
                            <div class="row no-row-gap no-fluid">
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
                        <div class="grid-list-content" data-ui-val="John Doe|24|Designer">
                            <div class="row no-row-gap no-fluid">
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
                        <div class="grid-list-content" data-ui-val="Mary Doe|24|Researcher">
                            <div class="row no-row-gap no-fluid">
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
                        <div class="grid-list-content" data-ui-val="Mike Taylor|29|Developer">
                            <div class="row no-row-gap no-fluid">
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
                        <div class="grid-list-content" data-ui-val="Anna May|25|Designer">
                            <div class="row no-row-gap no-fluid">
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
                        <div class="grid-list-content" data-ui-val="John Doe|25|Developer">
                            <div class="row no-row-gap no-fluid">
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
                        <div class="grid-list-content" data-ui-val="Mary Doe|24|Developer">
                            <div class="row no-row-gap no-fluid">
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
                        <div class="grid-list-content" data-ui-val="Mike Taylor|29|Developer">
                            <div class="row no-row-gap no-fluid">
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
                        <div class="grid-list-content" data-ui-val="Anna May|25|Researcher">
                            <div class="row no-row-gap no-fluid">
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
                        <div class="grid-list-content" data-ui-val="John Doe|25|Researcher">
                            <div class="row no-row-gap no-fluid">
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
                        <div class="grid-list-content" data-ui-val="Mary Doe|24|Developer">
                            <div class="row no-row-gap no-fluid">
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
                        <div class="grid-list-content" data-ui-val="Mike Taylor|29|Developer">
                            <div class="row no-row-gap no-fluid">
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
                        <div class="grid-list-content" data-ui-val="Anna May|25|Researcher">
                            <div class="row no-row-gap no-fluid">
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
                        <div class="grid-list-content" data-ui-val="John Doe|24|Designer">
                            <div class="row no-row-gap no-fluid">
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
                        <div class="grid-list-content" data-ui-val="Mary Doe|24|Researcher">
                            <div class="row no-row-gap no-fluid">
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
                        <div class="grid-list-content" data-ui-val="Mike Taylor|29|Developer">
                            <div class="row no-row-gap no-fluid">
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
                        <div class="grid-list-content" data-ui-val="Anna May|25|Developer">
                            <div class="row no-row-gap no-fluid">
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
                        <div class="grid-list-content" data-ui-val="John Doe|25|Researcher">
                            <div class="row no-row-gap no-fluid">
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
                        <div class="grid-list-content" data-ui-val="Mary Doe|24|Developer">
                            <div class="row no-row-gap no-fluid">
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
                        <div class="grid-list-content" data-ui-val="Mike Taylor|29|Developer">
                            <div class="row no-row-gap no-fluid">
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
                        <div class="grid-list-content" data-ui-val="Anna May|25|Designer">
                            <div class="row no-row-gap no-fluid">
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
                        <div class="grid-list-content" data-ui-val="John Doe|24|Developer">
                            <div class="row no-row-gap no-fluid">
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
                        <div class="grid-list-content" data-ui-val="Mary Doe|24|Developer">
                            <div class="row no-row-gap no-fluid">
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
                        <div class="grid-list-content" data-ui-val="Mike Taylor|29|Designer">
                            <div class="row no-row-gap no-fluid">
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
                        <div class="grid-list-content" data-ui-val="Anna May|25|Researcher">
                            <div class="row no-row-gap no-fluid">
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
                        <div class="grid-list-content" data-ui-val="John Doe|25|Designer">
                            <div class="row no-row-gap no-fluid">
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
                        <div class="grid-list-content" data-ui-val="Mary Doe|24|Developer">
                            <div class="row no-row-gap no-fluid">
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
                        <div class="grid-list-content" data-ui-val="Mike Taylor|29|Researcher">
                            <div class="row no-row-gap no-fluid">
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
                        <div class="grid-list-content" data-ui-val="Anna May|25|Researcher">
                            <div class="row no-row-gap no-fluid">
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
                        <div class="grid-list-content" data-ui-val="John Doe|25|Designer">
                            <div class="row no-row-gap no-fluid">
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
                        <div class="grid-list-content" data-ui-val="Mary Doe|24|Developer">
                            <div class="row no-row-gap no-fluid">
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
                        <div class="grid-list-content" data-ui-val="Mike Taylor|29|Developer">
                            <div class="row no-row-gap no-fluid">
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
                        <div class="grid-list-content" data-ui-val="Anna May|25|Researcher">
                            <div class="row no-row-gap no-fluid">
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
                        <div class="grid-list-content" data-ui-val="John Doe|24|Researcher">
                            <div class="row no-row-gap no-fluid">
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
                        <div class="grid-list-content" data-ui-val="Mary Doe|24|Developer">
                            <div class="row no-row-gap no-fluid">
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
                        <div class="grid-list-content" data-ui-val="Mike Taylor|29|Developer">
                            <div class="row no-row-gap no-fluid">
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
                        <div class="grid-list-content" data-ui-val="Anna May|25|Researcher">
                            <div class="row no-row-gap no-fluid">
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
                                Total <b class="grid-list-total"></b>
                            </div>
                        </div>
                        <div class="col-6 align-r">
                            <div class="grid-list-paging pagination ui-ease-1st-btn" data-ui-default="btn round" data-ui-active="ui-theme-sub ui-fill-dark-100"></div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
</main>
