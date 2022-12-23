<main class="ui-container ui-no-gutter">
    <div class="ui-fixed">
        <div class="ui-row">
            <div class="ui-col-12 ui-p-30-v">

                <h3 class="ui-h3">Datatable Examples</h3>
                <div class="ui-card ui-p-10 ui-round ui-shadow-lg">
                    <div class="ui-datatable ui-datatable-hover ui-theme-gray ui-ease-datatable">

                        <div class="ui-row ui-no-row-gap-v ui-row-gap-sm-h ui-m-2-v">
                            <div class="ui-col-6 ui-lg-fluid">
                                <div class="ui-input ui-form-icon-all ui-round ui-no-border ui-fill-light-100 ui-form-has-clear ui-ease-form">
                                    <svg class="ui-icon ui-form-icon-l"><use href="../dist/icons.svg#search"></svg>
                                    <button class="ui-form-clear">
                                        <svg class="ui-icon"><use href="../dist/icons.svg#remove"/></svg>
                                    </button>
                                    <input class="ui-datatable-filter" type="text" placeholder="Search">
                                </div>
                                <span class="ui-sp-5 ui-hidden-lg"></span>
                            </div>
                            <div class="ui-col-lg-3 ui-col-6 ui-no-fluid">
                                <div class="ui-select ui-round ui-no-border ui-fill-light-100 ui-ease-form">
                                    <svg class="ui-icon"><use href="../dist/icons.svg#angle-down"></svg>
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
                                    <button class="ui-btn ui-align-l ui-p-10 ui-round ui-fill-light-100">
                                        <span>
                                            <svg class="ui-icon"><use href="../dist/icons.svg#sort"></svg> Sort
                                        </span>
                                    </button>
                                    <ul class="ui-dropdown-menu ui-round ui-shadow-lg">
                                        <li>
                                            <label data-ui-sort="1">
                                                <svg class="ui-icon"><use href="../dist/icons.svg#sort"></svg>
                                                <input type="radio" name="s">By Name
                                            </label>
                                        </li>
                                        <li>
                                            <label data-ui-sort="2">
                                                <svg class="ui-icon"><use href="../dist/icons.svg#sort"></svg>
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
                                        <img class="ui-avatar-sm ui-m-10-r ui-hidden-xs ui-circle" src="../public/img/profile-image.jpg" alt="">John Atkinson
                                    </div>
                                    <div class="ui-col-7">
                                        <ul class="ui-steps-bar ui-steps-icon ui-theme-sub ui-text">
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="Starting"><use href="../dist/icons.svg#check-circle"></svg>1:S
                                            </li>
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="Waiting"><use href="../dist/icons.svg#check-circle"></svg>2:W
                                            </li>
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="Expert"><use href="../dist/icons.svg#check-circle"></svg>3:E
                                            </li>
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="First Audit"><use href="../dist/icons.svg#check-circle"></svg>4:F
                                            </li>
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="Second Audit"><use href="../dist/icons.svg#check-circle"></svg>5:S
                                            </li>
                                            <li class="ui-active">
                                                <svg class="ui-icon" data-ui-tooltip name="Paused"><use href="../dist/icons.svg#clock"></svg>6:P
                                            </li>
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="Delayed"><use href="../dist/icons.svg#check-circle"></svg>7:C
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="ui-datatable-content ui-no-border ui-round" data-ui-val="Mary Doe|Waiting">
                                <div class="ui-row ui-no-row-gap ui-no-fluid">
                                    <div class="ui-col-5">
                                        <img class="ui-avatar-sm ui-m-10-r ui-hidden-xs ui-circle" src="../public/img/profile-image2.jpg" alt="">Mary Doe
                                    </div>
                                    <div class="ui-col-7">
                                        <ul class="ui-steps-bar ui-steps-icon ui-theme-red ui-text">
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="Starting"><use href="../dist/icons.svg#check-circle"></svg>1:S
                                            </li>
                                            <li class="ui-active">
                                                <svg class="ui-icon" data-ui-tooltip name="Waiting"><use href="../dist/icons.svg#clock"></svg>2:W
                                            </li>
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="Expert"><use href="../dist/icons.svg#check-circle"></svg>3:E
                                            </li>
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="First Audit"><use href="../dist/icons.svg#check-circle"></svg>4:F
                                            </li>
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="Second Audit"><use href="../dist/icons.svg#check-circle"></svg>5:S
                                            </li>
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="Paused"><use href="../dist/icons.svg#check-circle"></svg>6:P
                                            </li>
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="Delayed"><use href="../dist/icons.svg#check-circle"></svg>7:C
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="ui-datatable-content ui-no-border ui-round" data-ui-val="Mike Taylor|Completed">
                                <div class="ui-row ui-no-row-gap ui-no-fluid">
                                    <div class="ui-col-5">
                                        <img class="ui-avatar-sm ui-m-10-r ui-hidden-xs ui-circle" src="../public/img/profile-image3.jpg" alt="">Mike Taylor
                                    </div>
                                    <div class="ui-col-7">
                                        <ul class="ui-steps-bar ui-steps-icon ui-theme-green ui-text">
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="Starting"><use href="../dist/icons.svg#check-circle"></svg>1:S
                                            </li>
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="Waiting"><use href="../dist/icons.svg#check-circle"></svg>2:W
                                            </li>
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="Expert"><use href="../dist/icons.svg#check-circle"></svg>3:E
                                            </li>
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="First Audit"><use href="../dist/icons.svg#check-circle"></svg>4:F
                                            </li>
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="Second Audit"><use href="../dist/icons.svg#check-circle"></svg>5:S
                                            </li>
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="Paused"><use href="../dist/icons.svg#check-circle"></svg>6:P
                                            </li>
                                            <li class="ui-active">
                                                <svg class="ui-icon" data-ui-tooltip name="Delayed"><use href="../dist/icons.svg#clock"></svg>7:C
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="ui-datatable-content ui-no-border ui-round" data-ui-val="Tony Starky|Paused">
                                <div class="ui-row ui-no-row-gap ui-no-fluid">
                                    <div class="ui-col-5">
                                        <img class="ui-avatar-sm ui-m-10-r ui-hidden-xs ui-circle" src="../public/img/profile-image.jpg" alt="">Tony Starky
                                    </div>
                                    <div class="ui-col-7">
                                        <ul class="ui-steps-bar ui-steps-icon ui-theme-sub ui-text">
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="Starting"><use href="../dist/icons.svg#check-circle"></svg>1:S
                                            </li>
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="Waiting"><use href="../dist/icons.svg#check-circle"></svg>2:W
                                            </li>
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="Expert"><use href="../dist/icons.svg#check-circle"></svg>3:E
                                            </li>
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="First Audit"><use href="../dist/icons.svg#check-circle"></svg>4:F
                                            </li>
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="Second Audit"><use href="../dist/icons.svg#check-circle"></svg>5:S
                                            </li>
                                            <li class="ui-active">
                                                <svg class="ui-icon" data-ui-tooltip name="Paused"><use href="../dist/icons.svg#clock"></svg>6:P
                                            </li>
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="Delayed"><use href="../dist/icons.svg#check-circle"></svg>7:C
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="ui-datatable-content ui-no-border ui-round" data-ui-val="John Atkinson|Paused">
                                <div class="ui-row ui-no-row-gap ui-no-fluid">
                                    <div class="ui-col-5">
                                        <img class="ui-avatar-sm ui-m-10-r ui-hidden-xs ui-circle" src="../public/img/profile-image.jpg" alt="">John Atkinson
                                    </div>
                                    <div class="ui-col-7">
                                        <ul class="ui-steps-bar ui-steps-icon ui-theme-sub ui-text">
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="Starting"><use href="../dist/icons.svg#check-circle"></svg>1:S
                                            </li>
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="Waiting"><use href="../dist/icons.svg#check-circle"></svg>2:W
                                            </li>
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="Expert"><use href="../dist/icons.svg#check-circle"></svg>3:E
                                            </li>
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="First Audit"><use href="../dist/icons.svg#check-circle"></svg>4:F
                                            </li>
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="Second Audit"><use href="../dist/icons.svg#check-circle"></svg>5:S
                                            </li>
                                            <li class="ui-active">
                                                <svg class="ui-icon" data-ui-tooltip name="Paused"><use href="../dist/icons.svg#clock"></svg>6:P
                                            </li>
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="Delayed"><use href="../dist/icons.svg#check-circle"></svg>7:C
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="ui-datatable-content ui-no-border ui-round" data-ui-val="Mary Doe|Waiting">
                                <div class="ui-row ui-no-row-gap ui-no-fluid">
                                    <div class="ui-col-5">
                                        <img class="ui-avatar-sm ui-m-10-r ui-hidden-xs ui-circle" src="../public/img/profile-image2.jpg" alt="">Mary Doe
                                    </div>
                                    <div class="ui-col-7">
                                        <ul class="ui-steps-bar ui-steps-icon ui-theme-red ui-text">
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="Starting"><use href="../dist/icons.svg#check-circle"></svg>1:S
                                            </li>
                                            <li class="ui-active">
                                                <svg class="ui-icon" data-ui-tooltip name="Waiting"><use href="../dist/icons.svg#clock"></svg>2:W
                                            </li>
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="Expert"><use href="../dist/icons.svg#check-circle"></svg>3:E
                                            </li>
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="First Audit"><use href="../dist/icons.svg#check-circle"></svg>4:F
                                            </li>
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="Second Audit"><use href="../dist/icons.svg#check-circle"></svg>5:S
                                            </li>
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="Paused"><use href="../dist/icons.svg#check-circle"></svg>6:P
                                            </li>
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="Delayed"><use href="../dist/icons.svg#check-circle"></svg>7:C
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="ui-datatable-content ui-no-border ui-round" data-ui-val="Mike Taylor|Completed">
                                <div class="ui-row ui-no-row-gap ui-no-fluid">
                                    <div class="ui-col-5">
                                        <img class="ui-avatar-sm ui-m-10-r ui-hidden-xs ui-circle" src="../public/img/profile-image3.jpg" alt="">Mike Taylor
                                    </div>
                                    <div class="ui-col-7">
                                        <ul class="ui-steps-bar ui-steps-icon ui-theme-green ui-text">
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="Starting"><use href="../dist/icons.svg#check-circle"></svg>1:S
                                            </li>
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="Waiting"><use href="../dist/icons.svg#check-circle"></svg>2:W
                                            </li>
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="Expert"><use href="../dist/icons.svg#check-circle"></svg>3:E
                                            </li>
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="First Audit"><use href="../dist/icons.svg#check-circle"></svg>4:F
                                            </li>
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="Second Audit"><use href="../dist/icons.svg#check-circle"></svg>5:S
                                            </li>
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="Paused"><use href="../dist/icons.svg#check-circle"></svg>6:P
                                            </li>
                                            <li class="ui-active">
                                                <svg class="ui-icon" data-ui-tooltip name="Delayed"><use href="../dist/icons.svg#clock"></svg>7:C
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="ui-datatable-content ui-no-border ui-round" data-ui-val="Tony Starky|Paused">
                                <div class="ui-row ui-no-row-gap ui-no-fluid">
                                    <div class="ui-col-5">
                                        <img class="ui-avatar-sm ui-m-10-r ui-hidden-xs ui-circle" src="../public/img/profile-image.jpg" alt="">Tony Starky
                                    </div>
                                    <div class="ui-col-7">
                                        <ul class="ui-steps-bar ui-steps-icon ui-theme-sub ui-text">
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="Starting"><use href="../dist/icons.svg#check-circle"></svg>1:S
                                            </li>
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="Waiting"><use href="../dist/icons.svg#check-circle"></svg>2:W
                                            </li>
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="Expert"><use href="../dist/icons.svg#check-circle"></svg>3:E
                                            </li>
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="First Audit"><use href="../dist/icons.svg#check-circle"></svg>4:F
                                            </li>
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="Second Audit"><use href="../dist/icons.svg#check-circle"></svg>5:S
                                            </li>
                                            <li class="ui-active">
                                                <svg class="ui-icon" data-ui-tooltip name="Paused"><use href="../dist/icons.svg#clock"></svg>6:P
                                            </li>
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="Delayed"><use href="../dist/icons.svg#check-circle"></svg>7:C
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="ui-datatable-content ui-no-border ui-round" data-ui-val="John Atkinson|Paused">
                                <div class="ui-row ui-no-row-gap ui-no-fluid">
                                    <div class="ui-col-5">
                                        <img class="ui-avatar-sm ui-m-10-r ui-hidden-xs ui-circle" src="../public/img/profile-image.jpg" alt="">John Atkinson
                                    </div>
                                    <div class="ui-col-7">
                                        <ul class="ui-steps-bar ui-steps-icon ui-theme-sub ui-text">
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="Starting"><use href="../dist/icons.svg#check-circle"></svg>1:S
                                            </li>
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="Waiting"><use href="../dist/icons.svg#check-circle"></svg>2:W
                                            </li>
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="Expert"><use href="../dist/icons.svg#check-circle"></svg>3:E
                                            </li>
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="First Audit"><use href="../dist/icons.svg#check-circle"></svg>4:F
                                            </li>
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="Second Audit"><use href="../dist/icons.svg#check-circle"></svg>5:S
                                            </li>
                                            <li class="ui-active">
                                                <svg class="ui-icon" data-ui-tooltip name="Paused"><use href="../dist/icons.svg#clock"></svg>6:P
                                            </li>
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="Delayed"><use href="../dist/icons.svg#check-circle"></svg>7:C
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="ui-datatable-content ui-no-border ui-round" data-ui-val="Mary Doe|Waiting">
                                <div class="ui-row ui-no-row-gap ui-no-fluid">
                                    <div class="ui-col-5">
                                        <img class="ui-avatar-sm ui-m-10-r ui-hidden-xs ui-circle" src="../public/img/profile-image2.jpg" alt="">Mary Doe
                                    </div>
                                    <div class="ui-col-7">
                                        <ul class="ui-steps-bar ui-steps-icon ui-theme-red ui-text">
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="Starting"><use href="../dist/icons.svg#check-circle"></svg>1:S
                                            </li>
                                            <li class="ui-active">
                                                <svg class="ui-icon" data-ui-tooltip name="Waiting"><use href="../dist/icons.svg#clock"></svg>2:W
                                            </li>
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="Expert"><use href="../dist/icons.svg#check-circle"></svg>3:E
                                            </li>
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="First Audit"><use href="../dist/icons.svg#check-circle"></svg>4:F
                                            </li>
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="Second Audit"><use href="../dist/icons.svg#check-circle"></svg>5:S
                                            </li>
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="Paused"><use href="../dist/icons.svg#check-circle"></svg>6:P
                                            </li>
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="Delayed"><use href="../dist/icons.svg#check-circle"></svg>7:C
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="ui-datatable-content ui-no-border ui-round" data-ui-val="Mike Taylor|Completed">
                                <div class="ui-row ui-no-row-gap ui-no-fluid">
                                    <div class="ui-col-5">
                                        <img class="ui-avatar-sm ui-m-10-r ui-hidden-xs ui-circle" src="../public/img/profile-image3.jpg" alt="">Mike Taylor
                                    </div>
                                    <div class="ui-col-7">
                                        <ul class="ui-steps-bar ui-steps-icon ui-theme-green ui-text">
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="Starting"><use href="../dist/icons.svg#check-circle"></svg>1:S
                                            </li>
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="Waiting"><use href="../dist/icons.svg#check-circle"></svg>2:W
                                            </li>
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="Expert"><use href="../dist/icons.svg#check-circle"></svg>3:E
                                            </li>
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="First Audit"><use href="../dist/icons.svg#check-circle"></svg>4:F
                                            </li>
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="Second Audit"><use href="../dist/icons.svg#check-circle"></svg>5:S
                                            </li>
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="Paused"><use href="../dist/icons.svg#check-circle"></svg>6:P
                                            </li>
                                            <li class="ui-active">
                                                <svg class="ui-icon" data-ui-tooltip name="Delayed"><use href="../dist/icons.svg#clock"></svg>7:C
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="ui-datatable-content ui-no-border ui-round" data-ui-val="Tony Starky|Paused">
                                <div class="ui-row ui-no-row-gap ui-no-fluid">
                                    <div class="ui-col-5">
                                        <img class="ui-avatar-sm ui-m-10-r ui-hidden-xs ui-circle" src="../public/img/profile-image.jpg" alt="">Tony Starky
                                    </div>
                                    <div class="ui-col-7">
                                        <ul class="ui-steps-bar ui-steps-icon ui-theme-sub ui-text">
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="Starting"><use href="../dist/icons.svg#check-circle"></svg>1:S
                                            </li>
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="Waiting"><use href="../dist/icons.svg#check-circle"></svg>2:W
                                            </li>
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="Expert"><use href="../dist/icons.svg#check-circle"></svg>3:E
                                            </li>
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="First Audit"><use href="../dist/icons.svg#check-circle"></svg>4:F
                                            </li>
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="Second Audit"><use href="../dist/icons.svg#check-circle"></svg>5:S
                                            </li>
                                            <li class="ui-active">
                                                <svg class="ui-icon" data-ui-tooltip name="Paused"><use href="../dist/icons.svg#clock"></svg>6:P
                                            </li>
                                            <li>
                                                <svg class="ui-icon" data-ui-tooltip name="Delayed"><use href="../dist/icons.svg#check-circle"></svg>7:C
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <span class="ui-sp-10"></span>

                        <div class="ui-row ui-no-row-gap ui-no-fluid">
                            <div class="ui-col-4">
                                <div class="ui-p-10-v">
                                    Total <b class="ui-datatable-total"></b>
                                </div>
                            </div>
                            <div class="ui-col-8 ui-no-fluid ui-align-r">
                                <div class="ui-datatable-paging ui-paging ui-ease-1st-btn" data-ui-default="ui-btn ui-round" data-ui-active="ui-theme-sub ui-fill-dark-100"></div>
                            </div>
                        </div>

                    </div>
                </div>

                <span class="ui-sp-30"></span>

                <div class="ui-datatable ui-datatable-hover ui-border ui-ease-datatable ui-round">

                    <div class="ui-row ui-sm-fluid">
                        <div class="ui-col-5 ui-sm-no-p-b">
                            <div class="ui-input ui-form-icon-all ui-round ui-border-dual ui-form-has-clear ui-ease-form">
                                <svg class="ui-icon ui-form-icon-l"><use href="../dist/icons.svg#search"></svg>
                                <button class="ui-form-clear">
                                    <svg class="ui-icon"><use href="../dist/icons.svg#remove"/></svg>
                                </button>
                                <input class="ui-datatable-filter" type="text" placeholder="Search">
                            </div>
                        </div>
                        <div class="ui-col-7 ui-align-r ui-sm-align-l">
                            <label class="ui-label ui-m-10-r">
                                <span class="ui-check ui-round ui-border-dual ui-sm-no-m-t ui-ease-form">
                                    <input class="ui-datatable-check-all" type="checkbox">
                                    <i class="ui-form-state"></i>
                                </span>
                                Check All
                            </label>

                            <span class="ui-sp-10 ui-visible-sm"></span>

                            <div class="ui-select ui-form-inline-xs ui-round ui-border-dual ui-ease-form">
                                <svg class="ui-icon"><use href="../dist/icons.svg#angle-down"></svg>
                                <select class="ui-datatable-filter" data-ui-index="1">
                                    <option value="">Name</option>
                                    <option>John Doe</option>
                                    <option>Mary Doe</option>
                                    <option>Mike Taylor</option>
                                    <option>Anna May</option>
                                </select>
                            </div>
                            <div class="ui-select ui-form-inline-xs ui-round ui-border-dual ui-ease-form">
                                <svg class="ui-icon"><use href="../dist/icons.svg#angle-down"></svg>
                                <select class="ui-datatable-filter" data-ui-index="2" data-ui-type="number">
                                    <option value="">Age</option>
                                    <option>24</option>
                                    <option>25</option>
                                    <option>29</option>
                                </select>
                            </div>
                            <div class="ui-select ui-form-inline-xs ui-round ui-border-dual ui-ease-form">
                                <svg class="ui-icon"><use href="../dist/icons.svg#angle-down"></svg>
                                <select class="ui-datatable-show">
                                    <option>5</option>
                                    <option>10</option>
                                    <option>20</option>
                                    <option>50</option>
                                    <option>All</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="ui-row ui-row-gap-xs ui-align-l ui-block-2nd ui-ease-2nd-btn ui-no-fluid">
                        <div class="ui-col-5">
                            <button class="ui-btn" data-ui-sort="1"><svg class="ui-icon"><use href="../dist/icons.svg#sort"></svg> Name</button>
                        </div>
                        <div class="ui-col-3">
                            <button class="ui-btn" data-ui-sort="2" data-ui-type="number"><svg class="ui-icon"><use href="../dist/icons.svg#sort"></svg> Age</button>
                        </div>
                        <div class="ui-col-4">
                            <button class="ui-btn" data-ui-sort="3"><svg class="ui-icon"><use href="../dist/icons.svg#sort"></svg> Job</button>
                        </div>
                    </div>

                    <div class="ui-datatable-container">

                        <div class="ui-datatable-content" data-ui-val="John Doe|25|Designer">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    <span class="ui-check ui-m-3-r ui-round ui-border-dual ui-ease-form">
                                        <input class="ui-datatable-check" type="checkbox">
                                        <i class="ui-form-state"></i>
                                    </span>
                                    John Doe
                                </div>
                                <div class="ui-col-3">
                                    25
                                </div>
                                <div class="ui-col-4">
                                    Designer
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="Mary Doe|24|Designer">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    <span class="ui-check ui-m-3-r ui-round ui-border-dual ui-ease-form">
                                        <input class="ui-datatable-check" type="checkbox">
                                        <i class="ui-form-state"></i>
                                    </span>
                                    Mary Doe
                                </div>
                                <div class="ui-col-3">
                                    24
                                </div>
                                <div class="ui-col-4">
                                    Designer
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="Mike Taylor|29|Developer">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    <span class="ui-check ui-m-3-r ui-round ui-border-dual ui-ease-form">
                                        <input class="ui-datatable-check" type="checkbox">
                                        <i class="ui-form-state"></i>
                                    </span>
                                    Mike Taylor
                                </div>
                                <div class="ui-col-3">
                                    29
                                </div>
                                <div class="ui-col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="Anna May|25|Designer">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    <span class="ui-check ui-m-3-r ui-round ui-border-dual ui-ease-form">
                                        <input class="ui-datatable-check" type="checkbox">
                                        <i class="ui-form-state"></i>
                                    </span>
                                    Anna May
                                </div>
                                <div class="ui-col-3">
                                    25
                                </div>
                                <div class="ui-col-4">
                                    Designer
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="John Doe|24|Designer">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    <span class="ui-check ui-m-3-r ui-round ui-border-dual ui-ease-form">
                                        <input class="ui-datatable-check" type="checkbox">
                                        <i class="ui-form-state"></i>
                                    </span>
                                    John Doe
                                </div>
                                <div class="ui-col-3">
                                    24
                                </div>
                                <div class="ui-col-4">
                                    Designer
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="Mary Doe|24|Researcher">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    <span class="ui-check ui-m-3-r ui-round ui-border-dual ui-ease-form">
                                        <input class="ui-datatable-check" type="checkbox">
                                        <i class="ui-form-state"></i>
                                    </span>
                                    Mary Doe
                                </div>
                                <div class="ui-col-3">
                                    24
                                </div>
                                <div class="ui-col-4">
                                    Researcher
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="Mike Taylor|29|Developer">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    <span class="ui-check ui-m-3-r ui-round ui-border-dual ui-ease-form">
                                        <input class="ui-datatable-check" type="checkbox">
                                        <i class="ui-form-state"></i>
                                    </span>
                                    Mike Taylor
                                </div>
                                <div class="ui-col-3">
                                    29
                                </div>
                                <div class="ui-col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="Anna May|25|Designer">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    <span class="ui-check ui-m-3-r ui-round ui-border-dual ui-ease-form">
                                        <input class="ui-datatable-check" type="checkbox">
                                        <i class="ui-form-state"></i>
                                    </span>
                                    Anna May
                                </div>
                                <div class="ui-col-3">
                                    25
                                </div>
                                <div class="ui-col-4">
                                    Designer
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="John Doe|25|Developer">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    <span class="ui-check ui-m-3-r ui-round ui-border-dual ui-ease-form">
                                        <input class="ui-datatable-check" type="checkbox">
                                        <i class="ui-form-state"></i>
                                    </span>
                                    John Doe
                                </div>
                                <div class="ui-col-3">
                                    25
                                </div>
                                <div class="ui-col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="Mary Doe|24|Developer">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    <span class="ui-check ui-m-3-r ui-round ui-border-dual ui-ease-form">
                                        <input class="ui-datatable-check" type="checkbox">
                                        <i class="ui-form-state"></i>
                                    </span>
                                    Mary Doe
                                </div>
                                <div class="ui-col-3">
                                    24
                                </div>
                                <div class="ui-col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="Mike Taylor|29|Developer">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    <span class="ui-check ui-m-3-r ui-round ui-border-dual ui-ease-form">
                                        <input class="ui-datatable-check" type="checkbox">
                                        <i class="ui-form-state"></i>
                                    </span>
                                    Mike Taylor
                                </div>
                                <div class="ui-col-3">
                                    29
                                </div>
                                <div class="ui-col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="Anna May|25|Researcher">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    <span class="ui-check ui-m-3-r ui-round ui-border-dual ui-ease-form">
                                        <input class="ui-datatable-check" type="checkbox">
                                        <i class="ui-form-state"></i>
                                    </span>
                                    Anna May
                                </div>
                                <div class="ui-col-3">
                                    25
                                </div>
                                <div class="ui-col-4">
                                    Researcher
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="John Doe|25|Researcher">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    <span class="ui-check ui-m-3-r ui-round ui-border-dual ui-ease-form">
                                        <input class="ui-datatable-check" type="checkbox">
                                        <i class="ui-form-state"></i>
                                    </span>
                                    John Doe
                                </div>
                                <div class="ui-col-3">
                                    25
                                </div>
                                <div class="ui-col-4">
                                    Researcher
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="Mary Doe|24|Developer">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    <span class="ui-check ui-m-3-r ui-round ui-border-dual ui-ease-form">
                                        <input class="ui-datatable-check" type="checkbox">
                                        <i class="ui-form-state"></i>
                                    </span>
                                    Mary Doe
                                </div>
                                <div class="ui-col-3">
                                    24
                                </div>
                                <div class="ui-col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="Mike Taylor|29|Developer">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    <span class="ui-check ui-m-3-r ui-round ui-border-dual ui-ease-form">
                                        <input class="ui-datatable-check" type="checkbox">
                                        <i class="ui-form-state"></i>
                                    </span>
                                    Mike Taylor
                                </div>
                                <div class="ui-col-3">
                                    29
                                </div>
                                <div class="ui-col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="Anna May|25|Researcher">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    <span class="ui-check ui-m-3-r ui-round ui-border-dual ui-ease-form">
                                        <input class="ui-datatable-check" type="checkbox">
                                        <i class="ui-form-state"></i>
                                    </span>
                                    Anna May
                                </div>
                                <div class="ui-col-3">
                                    25
                                </div>
                                <div class="ui-col-4">
                                    Researcher
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="John Doe|24|Designer">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    <span class="ui-check ui-m-3-r ui-round ui-border-dual ui-ease-form">
                                        <input class="ui-datatable-check" type="checkbox">
                                        <i class="ui-form-state"></i>
                                    </span>
                                    John Doe
                                </div>
                                <div class="ui-col-3">
                                    24
                                </div>
                                <div class="ui-col-4">
                                    Designer
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="Mary Doe|24|Researcher">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    <span class="ui-check ui-m-3-r ui-round ui-border-dual ui-ease-form">
                                        <input class="ui-datatable-check" type="checkbox">
                                        <i class="ui-form-state"></i>
                                    </span>
                                    Mary Doe
                                </div>
                                <div class="ui-col-3">
                                    24
                                </div>
                                <div class="ui-col-4">
                                    Researcher
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="Mike Taylor|29|Developer">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    <span class="ui-check ui-m-3-r ui-round ui-border-dual ui-ease-form">
                                        <input class="ui-datatable-check" type="checkbox">
                                        <i class="ui-form-state"></i>
                                    </span>
                                    Mike Taylor
                                </div>
                                <div class="ui-col-3">
                                    29
                                </div>
                                <div class="ui-col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="Anna May|25|Developer">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    <span class="ui-check ui-m-3-r ui-round ui-border-dual ui-ease-form">
                                        <input class="ui-datatable-check" type="checkbox">
                                        <i class="ui-form-state"></i>
                                    </span>
                                    Anna May
                                </div>
                                <div class="ui-col-3">
                                    25
                                </div>
                                <div class="ui-col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="John Doe|25|Researcher">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    <span class="ui-check ui-m-3-r ui-round ui-border-dual ui-ease-form">
                                        <input class="ui-datatable-check" type="checkbox">
                                        <i class="ui-form-state"></i>
                                    </span>
                                    John Doe
                                </div>
                                <div class="ui-col-3">
                                    25
                                </div>
                                <div class="ui-col-4">
                                    Researcher
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="Mary Doe|24|Developer">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    <span class="ui-check ui-m-3-r ui-round ui-border-dual ui-ease-form">
                                        <input class="ui-datatable-check" type="checkbox">
                                        <i class="ui-form-state"></i>
                                    </span>
                                    Mary Doe
                                </div>
                                <div class="ui-col-3">
                                    24
                                </div>
                                <div class="ui-col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="Mike Taylor|29|Developer">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    <span class="ui-check ui-m-3-r ui-round ui-border-dual ui-ease-form">
                                        <input class="ui-datatable-check" type="checkbox">
                                        <i class="ui-form-state"></i>
                                    </span>
                                    Mike Taylor
                                </div>
                                <div class="ui-col-3">
                                    29
                                </div>
                                <div class="ui-col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="Anna May|25|Designer">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    <span class="ui-check ui-m-3-r ui-round ui-border-dual ui-ease-form">
                                        <input class="ui-datatable-check" type="checkbox">
                                        <i class="ui-form-state"></i>
                                    </span>
                                    Anna May
                                </div>
                                <div class="ui-col-3">
                                    25
                                </div>
                                <div class="ui-col-4">
                                    Designer
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="John Doe|24|Developer">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    <span class="ui-check ui-m-3-r ui-round ui-border-dual ui-ease-form">
                                        <input class="ui-datatable-check" type="checkbox">
                                        <i class="ui-form-state"></i>
                                    </span>
                                    John Doe
                                </div>
                                <div class="ui-col-3">
                                    24
                                </div>
                                <div class="ui-col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="Mary Doe|24|Developer">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    <span class="ui-check ui-m-3-r ui-round ui-border-dual ui-ease-form">
                                        <input class="ui-datatable-check" type="checkbox">
                                        <i class="ui-form-state"></i>
                                    </span>
                                    Mary Doe
                                </div>
                                <div class="ui-col-3">
                                    24
                                </div>
                                <div class="ui-col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="Mike Taylor|29|Designer">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    <span class="ui-check ui-m-3-r ui-round ui-border-dual ui-ease-form">
                                        <input class="ui-datatable-check" type="checkbox">
                                        <i class="ui-form-state"></i>
                                    </span>
                                    Mike Taylor
                                </div>
                                <div class="ui-col-3">
                                    29
                                </div>
                                <div class="ui-col-4">
                                    Designer
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="Anna May|25|Researcher">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    <span class="ui-check ui-m-3-r ui-round ui-border-dual ui-ease-form">
                                        <input class="ui-datatable-check" type="checkbox">
                                        <i class="ui-form-state"></i>
                                    </span>
                                    Anna May
                                </div>
                                <div class="ui-col-3">
                                    25
                                </div>
                                <div class="ui-col-4">
                                    Researcher
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="John Doe|25|Designer">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    <span class="ui-check ui-m-3-r ui-round ui-border-dual ui-ease-form">
                                        <input class="ui-datatable-check" type="checkbox">
                                        <i class="ui-form-state"></i>
                                    </span>
                                    John Doe
                                </div>
                                <div class="ui-col-3">
                                    25
                                </div>
                                <div class="ui-col-4">
                                    Designer
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="Mary Doe|24|Developer">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    <span class="ui-check ui-m-3-r ui-round ui-border-dual ui-ease-form">
                                        <input class="ui-datatable-check" type="checkbox">
                                        <i class="ui-form-state"></i>
                                    </span>
                                    Mary Doe
                                </div>
                                <div class="ui-col-3">
                                    24
                                </div>
                                <div class="ui-col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="Mike Taylor|29|Researcher">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    <span class="ui-check ui-m-3-r ui-round ui-border-dual ui-ease-form">
                                        <input class="ui-datatable-check" type="checkbox">
                                        <i class="ui-form-state"></i>
                                    </span>
                                    Mike Taylor
                                </div>
                                <div class="ui-col-3">
                                    29
                                </div>
                                <div class="ui-col-4">
                                    Researcher
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="Anna May|25|Researcher">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    <span class="ui-check ui-m-3-r ui-round ui-border-dual ui-ease-form">
                                        <input class="ui-datatable-check" type="checkbox">
                                        <i class="ui-form-state"></i>
                                    </span>
                                    Anna May
                                </div>
                                <div class="ui-col-3">
                                    25
                                </div>
                                <div class="ui-col-4">
                                    Researcher
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="John Doe|25|Designer">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    <span class="ui-check ui-m-3-r ui-round ui-border-dual ui-ease-form">
                                        <input class="ui-datatable-check" type="checkbox">
                                        <i class="ui-form-state"></i>
                                    </span>
                                    John Doe
                                </div>
                                <div class="ui-col-3">
                                    25
                                </div>
                                <div class="ui-col-4">
                                    Designer
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="Mary Doe|24|Developer">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    <span class="ui-check ui-m-3-r ui-round ui-border-dual ui-ease-form">
                                        <input class="ui-datatable-check" type="checkbox">
                                        <i class="ui-form-state"></i>
                                    </span>
                                    Mary Doe
                                </div>
                                <div class="ui-col-3">
                                    24
                                </div>
                                <div class="ui-col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="Mike Taylor|29|Developer">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    <span class="ui-check ui-m-3-r ui-round ui-border-dual ui-ease-form">
                                        <input class="ui-datatable-check" type="checkbox">
                                        <i class="ui-form-state"></i>
                                    </span>
                                    Mike Taylor
                                </div>
                                <div class="ui-col-3">
                                    29
                                </div>
                                <div class="ui-col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="Anna May|25|Researcher">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    <span class="ui-check ui-m-3-r ui-round ui-border-dual ui-ease-form">
                                        <input class="ui-datatable-check" type="checkbox">
                                        <i class="ui-form-state"></i>
                                    </span>
                                    Anna May
                                </div>
                                <div class="ui-col-3">
                                    25
                                </div>
                                <div class="ui-col-4">
                                    Researcher
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="John Doe|24|Researcher">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    <span class="ui-check ui-m-3-r ui-round ui-border-dual ui-ease-form">
                                        <input class="ui-datatable-check" type="checkbox">
                                        <i class="ui-form-state"></i>
                                    </span>
                                    John Doe
                                </div>
                                <div class="ui-col-3">
                                    24
                                </div>
                                <div class="ui-col-4">
                                    Researcher
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="Mary Doe|24|Developer">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    <span class="ui-check ui-m-3-r ui-round ui-border-dual ui-ease-form">
                                        <input class="ui-datatable-check" type="checkbox">
                                        <i class="ui-form-state"></i>
                                    </span>
                                    Mary Doe
                                </div>
                                <div class="ui-col-3">
                                    24
                                </div>
                                <div class="ui-col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="Mike Taylor|29|Developer">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    <span class="ui-check ui-m-3-r ui-round ui-border-dual ui-ease-form">
                                        <input class="ui-datatable-check" type="checkbox">
                                        <i class="ui-form-state"></i>
                                    </span>
                                    Mike Taylor
                                </div>
                                <div class="ui-col-3">
                                    29
                                </div>
                                <div class="ui-col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="Anna May|25|Researcher">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    <span class="ui-check ui-m-3-r ui-round ui-border-dual ui-ease-form">
                                        <input class="ui-datatable-check" type="checkbox">
                                        <i class="ui-form-state"></i>
                                    </span>
                                    Anna May
                                </div>
                                <div class="ui-col-3">
                                    25
                                </div>
                                <div class="ui-col-4">
                                    Researcher
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="ui-row ui-no-fluid">
                        <div class="ui-col-6">
                            <div class="ui-p-10-v">
                                Total <b class="ui-datatable-total"></b>
                            </div>
                        </div>
                        <div class="ui-col-6 ui-align-r">
                            <div class="ui-datatable-paging ui-paging ui-ease-1st-btn" data-ui-default="ui-btn ui-round" data-ui-active="ui-theme-sub ui-fill-dark-100"></div>
                        </div>
                    </div>

                </div>

                <span class="ui-sp-30"></span>

                <div class="ui-datatable ui-datatable-striped ui-datatable-hover ui-border ui-ease-datatable ui-round">

                    <div class="ui-row ui-sm-fluid">
                        <div class="ui-col-5 ui-sm-no-p-b">
                            <div class="ui-input ui-form-icon-all ui-round ui-border-dual ui-form-has-clear ui-ease-form">
                                <svg class="ui-icon ui-form-icon-l"><use href="../dist/icons.svg#search"></svg>
                                <button class="ui-form-clear">
                                    <svg class="ui-icon"><use href="../dist/icons.svg#remove"/></svg>
                                </button>
                                <input class="ui-datatable-filter" type="text" placeholder="Search">
                            </div>
                        </div>
                        <div class="ui-col-7 ui-align-r ui-sm-align-l">
                            <label class="ui-label ui-m-5-t ui-m-10-r">
                                <span class="ui-check ui-round ui-border-dual ui-sm-no-m-t ui-ease-form">
                                    <input class="ui-datatable-filter" data-ui-index="2" type="checkbox" value="25">
                                    <i class="ui-form-state"></i>
                                </span>
                                Show only 25 ages.
                            </label>

                            <div class="ui-select ui-form-inline ui-round ui-border-dual ui-ease-form ui-float-r">
                                <svg class="ui-icon" data-ui-tooltip title="Waiting"><use href="../dist/icons.svg#angle-down"></svg>
                                <select class="ui-datatable-show">
                                    <option>10</option>
                                    <option>20</option>
                                    <option>50</option>
                                    <option selected>All</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="ui-row ui-row-gap-xs ui-align-l ui-border-v ui-block-2nd ui-ease-2nd-btn ui-no-fluid">
                        <div class="ui-col-5">
                            <button class="ui-btn ui-btn-ghost" data-ui-sort="1"><svg class="ui-icon"><use href="../dist/icons.svg#sort"></svg> Name</button>
                        </div>
                        <div class="ui-col-3">
                            <button class="ui-btn ui-btn-ghost" data-ui-sort="2" data-ui-type="number"><svg class="ui-icon"><use href="../dist/icons.svg#sort"></svg> Age</button>
                        </div>
                        <div class="ui-col-4">
                            <button class="ui-btn ui-btn-ghost" data-ui-sort="3"><svg class="ui-icon"><use href="../dist/icons.svg#sort"></svg> Job</button>
                        </div>
                    </div>

                    <div class="ui-datatable-container">

                        <div class="ui-datatable-content" data-ui-val="John Doe|25|Designer">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    John Doe
                                </div>
                                <div class="ui-col-3">
                                    25
                                </div>
                                <div class="ui-col-4">
                                    Designer
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="Mary Doe|24|Designer">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    Mary Doe
                                </div>
                                <div class="ui-col-3">
                                    24
                                </div>
                                <div class="ui-col-3">
                                    Designer
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="Mike Taylor|29|Developer">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    Mike Taylor
                                </div>
                                <div class="ui-col-3">
                                    29
                                </div>
                                <div class="ui-col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="Anna May|25|Designer">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    Anna May
                                </div>
                                <div class="ui-col-3">
                                    25
                                </div>
                                <div class="ui-col-4">
                                    Designer
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="John Doe|24|Designer">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    John Doe
                                </div>
                                <div class="ui-col-3">
                                    24
                                </div>
                                <div class="ui-col-4">
                                    Designer
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="Mary Doe|24|Researcher">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    Mary Doe
                                </div>
                                <div class="ui-col-3">
                                    24
                                </div>
                                <div class="ui-col-4">
                                    Researcher
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="Mike Taylor|29|Developer">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    Mike Taylor
                                </div>
                                <div class="ui-col-3">
                                    29
                                </div>
                                <div class="ui-col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="Anna May|25|Designer">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    Anna May
                                </div>
                                <div class="ui-col-3">
                                    25
                                </div>
                                <div class="ui-col-4">
                                    Designer
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="John Doe|25|Developer">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    John Doe
                                </div>
                                <div class="ui-col-3">
                                    25
                                </div>
                                <div class="ui-col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="Mary Doe|24|Developer">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    Mary Doe
                                </div>
                                <div class="ui-col-3">
                                    24
                                </div>
                                <div class="ui-col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="Mike Taylor|29|Developer">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    Mike Taylor
                                </div>
                                <div class="ui-col-3">
                                    29
                                </div>
                                <div class="ui-col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="Anna May|25|Researcher">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    Anna May
                                </div>
                                <div class="ui-col-3">
                                    25
                                </div>
                                <div class="ui-col-4">
                                    Researcher
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="John Doe|25|Researcher">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    John Doe
                                </div>
                                <div class="ui-col-3">
                                    25
                                </div>
                                <div class="ui-col-4">
                                    Researcher
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="Mary Doe|24|Developer">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    Mary Doe
                                </div>
                                <div class="ui-col-3">
                                    24
                                </div>
                                <div class="ui-col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="Mike Taylor|29|Developer">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    Mike Taylor
                                </div>
                                <div class="ui-col-3">
                                    29
                                </div>
                                <div class="ui-col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="Anna May|25|Researcher">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    Anna May
                                </div>
                                <div class="ui-col-3">
                                    25
                                </div>
                                <div class="ui-col-4">
                                    Researcher
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="John Doe|24|Designer">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    John Doe
                                </div>
                                <div class="ui-col-3">
                                    24
                                </div>
                                <div class="ui-col-4">
                                    Designer
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="Mary Doe|24|Researcher">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    Mary Doe
                                </div>
                                <div class="ui-col-3">
                                    24
                                </div>
                                <div class="ui-col-4">
                                    Researcher
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="Mike Taylor|29|Developer">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    Mike Taylor
                                </div>
                                <div class="ui-col-3">
                                    29
                                </div>
                                <div class="ui-col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="Anna May|25|Developer">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    Anna May
                                </div>
                                <div class="ui-col-3">
                                    25
                                </div>
                                <div class="ui-col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="John Doe|25|Researcher">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    John Doe
                                </div>
                                <div class="ui-col-3">
                                    25
                                </div>
                                <div class="ui-col-4">
                                    Researcher
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="Mary Doe|24|Developer">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    Mary Doe
                                </div>
                                <div class="ui-col-3">
                                    24
                                </div>
                                <div class="ui-col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="Mike Taylor|29|Developer">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    Mike Taylor
                                </div>
                                <div class="ui-col-3">
                                    29
                                </div>
                                <div class="ui-col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="Anna May|25|Designer">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    Anna May
                                </div>
                                <div class="ui-col-3">
                                    25
                                </div>
                                <div class="ui-col-4">
                                    Designer
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="John Doe|24|Developer">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    John Doe
                                </div>
                                <div class="ui-col-3">
                                    24
                                </div>
                                <div class="ui-col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="Mary Doe|24|Developer">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    Mary Doe
                                </div>
                                <div class="ui-col-3">
                                    24
                                </div>
                                <div class="ui-col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="Mike Taylor|29|Designer">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    Mike Taylor
                                </div>
                                <div class="ui-col-3">
                                    29
                                </div>
                                <div class="ui-col-4">
                                    Designer
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="Anna May|25|Researcher">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    Anna May
                                </div>
                                <div class="ui-col-3">
                                    25
                                </div>
                                <div class="ui-col-4">
                                    Researcher
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="John Doe|25|Designer">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    John Doe
                                </div>
                                <div class="ui-col-3">
                                    25
                                </div>
                                <div class="ui-col-4">
                                    Designer
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="Mary Doe|24|Developer">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    Mary Doe
                                </div>
                                <div class="ui-col-3">
                                    24
                                </div>
                                <div class="ui-col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="Mike Taylor|29|Researcher">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    Mike Taylor
                                </div>
                                <div class="ui-col-3">
                                    29
                                </div>
                                <div class="ui-col-4">
                                    Researcher
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="Anna May|25|Researcher">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    Anna May
                                </div>
                                <div class="ui-col-3">
                                    25
                                </div>
                                <div class="ui-col-4">
                                    Researcher
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="John Doe|25|Designer">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    John Doe
                                </div>
                                <div class="ui-col-3">
                                    25
                                </div>
                                <div class="ui-col-4">
                                    Designer
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="Mary Doe|24|Developer">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    Mary Doe
                                </div>
                                <div class="ui-col-3">
                                    24
                                </div>
                                <div class="ui-col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="Mike Taylor|29|Developer">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    Mike Taylor
                                </div>
                                <div class="ui-col-3">
                                    29
                                </div>
                                <div class="ui-col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="Anna May|25|Researcher">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    Anna May
                                </div>
                                <div class="ui-col-3">
                                    25
                                </div>
                                <div class="ui-col-4">
                                    Researcher
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="John Doe|24|Researcher">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    John Doe
                                </div>
                                <div class="ui-col-3">
                                    24
                                </div>
                                <div class="ui-col-4">
                                    Researcher
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="Mary Doe|24|Developer">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    Mary Doe
                                </div>
                                <div class="ui-col-3">
                                    24
                                </div>
                                <div class="ui-col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="Mike Taylor|29|Developer">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    Mike Taylor
                                </div>
                                <div class="ui-col-3">
                                    29
                                </div>
                                <div class="ui-col-4">
                                    Developer
                                </div>
                            </div>
                        </div>
                        <div class="ui-datatable-content" data-ui-val="Anna May|25|Researcher">
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-5">
                                    Anna May
                                </div>
                                <div class="ui-col-3">
                                    25
                                </div>
                                <div class="ui-col-4">
                                    Researcher
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="ui-row ui-no-fluid">
                        <div class="ui-col-6">
                            <div class="ui-p-10-v">
                                Total <b class="ui-datatable-total"></b>
                            </div>
                        </div>
                        <div class="ui-col-6 ui-align-r">
                            <div class="ui-datatable-paging ui-paging ui-ease-1st-btn" data-ui-default="ui-btn ui-round" data-ui-active="ui-theme-sub ui-fill-dark-100"></div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
</main>
