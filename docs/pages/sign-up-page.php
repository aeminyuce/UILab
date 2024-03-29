<link href="../dist/css/sign-up-page.css?v=<?php echo filemtime('../dist/css/sign-up-page.css'); ?>" rel="stylesheet">

<main class="ui-container ui-no-gutter">

    <div class="ui-row ui-no-row-gap">
        <div class="ui-col-12">

            <div class="signup-holder ui-no-scroll ui-set-relative ui-fill-dark-100">

                <div class="signup-icons">
                    <svg class="ui-icon"><use href="../dist/icons.svg#star"/></svg>
                    <svg class="ui-icon"><use href="../dist/icons.svg#square"/></svg>
                    <svg class="ui-icon"><use href="../dist/icons.svg#circle"/></svg>
                    <svg class="ui-icon"><use href="../dist/icons.svg#plus-badge"/></svg>
                    <svg class="ui-icon"><use href="../dist/icons.svg#user-plus"/></svg>
                </div>

                <div class="ui-fixed ui-theme-green">
                    <div class="ui-row">
                        <div class="ui-col-12 ui-p-15-v ui-align-c">
                            <span class="ui-sp-30"></span>
                            <a href="?l=pages/login-page" class="ui-btn ui-btn-lg ui-btn-ghost ui-btn-xs-fluid ui-circle ui-border-dual ui-stroke ui-ease-btn">
                                <span class="ui-color-white">Have you already an account?</span>
                                <span class="ui-text ui-hidden-sm">Click here to login.</span>
                            </a>
                            <span class="ui-sp-30 ui-m-20-v"></span>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>

    <form action="#">
        <div class="ui-fixed signup-container">
            <div class="ui-row">
                <div class="ui-col-12">

                    <div class="ui-card ui-m-30-b ui-shadow-lg">

                        <div class="ui-col-static ui-sm-fluid">
                            <div class="ui-row ui-p-20 ui-form-lg">
                                <div class="ui-col-12">
                                    <h3 class="ui-h3 ui-m-30-b">Create your account</h3>
                                    <p class="ui-color-black-25 ui-font-16">Sign up to create, discover and connect with the global community.</p>
                                </div>
                                <div class="ui-col-6">

                                    <label class="ui-form-label ui-color-black-50">First Name</label>
                                    <div class="ui-input ui-round ui-border-dual ui-ease-form">
                                        <input class="ui-required" type="text" placeholder="Enter first name" minlength="3">
                                    </div>
                                    <p class="ui-required-msg">Enter your first name.</p>

                                    <span class="ui-sp-20"></span>

                                    <label class="ui-form-label ui-color-black-50">Last Name</label>
                                    <div class="ui-input ui-round ui-border-dual ui-ease-form">
                                        <input class="ui-required" type="text" placeholder="Enter last name" minlength="3">
                                    </div>
                                    <p class="ui-required-msg">Enter your last name.</p>

                                    <span class="ui-sp-20"></span>

                                    <label class="ui-form-label ui-color-black-50">Phone</label>
                                    <div class="ui-input ui-round ui-border-dual ui-ease-form">
                                        <input class="ui-required ui-number" type="text" placeholder="123-123-1234" minlength="12" maxlength="12">
                                    </div>
                                    <p class="ui-required-msg">Enter your phone.</p>

                                </div>
                                <div class="ui-col-6">

                                    <label class="ui-form-label ui-color-black-50">Email</label>
                                    <div class="ui-input ui-round ui-border-dual ui-ease-form">
                                        <input class="ui-required" type="email" placeholder="Enter your email">
                                    </div>
                                    <p class="ui-required-msg">Enter your email.</p>

                                    <span class="ui-sp-20"></span>

                                    <label class="ui-form-label ui-color-black-50">Password</label>
                                    <div class="ui-input ui-form-icon ui-round ui-border-dual ui-ease-form">
                                        <button type="button" title="Toggle Password" class="ui-pass-toggle">
                                            <svg class="ui-icon"><use href="../dist/icons.svg#eye"/></svg>
                                        </button>
                                        <input class="ui-required" type="password" placeholder="Enter password" minlength="8">
                                    </div>
                                    <p class="ui-required-msg">Minimum length is 8 characters.</p>

                                    <span class="ui-sp-20"></span>

                                    <label class="ui-form-label ui-color-black-50">Confirm Password</label>
                                    <div class="ui-input ui-form-icon ui-round ui-border-dual ui-ease-form">
                                        <button type="button" title="Toggle Password" class="ui-pass-toggle">
                                            <svg class="ui-icon"><use href="../dist/icons.svg#eye"/></svg>
                                        </button>
                                        <input class="ui-required" type="password" placeholder="Enter password again" minlength="8">
                                    </div>
                                    <p class="ui-required-msg">Please confirm your password.</p>

                                </div>
                                <div class="ui-col-12 ui-theme-sub">

                                    <span class="ui-sp-15"></span>
                                    <label class="ui-label">
                                        <span class="ui-check ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" checked>
                                            <i class="ui-form-state"></i>
                                        </span>
                                        <span class="ui-color-black-25">Yes, I want to receive emails from this platform.</span>
                                    </label>

                                    <span class="ui-clearfix"></span>

                                    <label class="ui-label">
                                        <span class="ui-check ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" checked>
                                            <i class="ui-form-state"></i>
                                        </span>
                                        <span class="ui-color-black-25">I agree to the</span>
                                        <span class="ui-font-hoverline-1st">
                                            <a class="ui-font-bold ui-text" href="#">Terms</a>,
                                            <a class="ui-font-bold ui-text" href="#">Privacy Policy</a>
                                        </span>
                                        <span class="ui-color-black-25">and</span>
                                        <a class="ui-font-bold ui-text" href="#">Fees.</a>
                                    </label>

                                    <span class="ui-sp-30 ui-m-15-v"></span>

                                    <button type="submit" class="signup-btn ui-btn ui-btn-md-fluid ui-color-white ui-circle ui-hover-scale ui-hover-shadow ui-ease-btn">
                                        <b>SIGN UP NOW</b>
                                    </button>
                                    <span class="ui-sp-30"></span>
                                    <span class="ui-color-black-25">Have you any questions?<br>Please,</span> <a class="ui-font-bold ui-font-hoverline ui-text" href="#">click here</a> <span class="ui-color-black-25">to access Help Center.</span>

                                </div>
                            </div>
                            <div class="signup-why-join ui-col-lg-500 ui-col-400 ui-col-md-350 ui-order-sm-first ui-sm-align-c ui-p-30">

                                <img class="ui-m-auto" src="../public/img/sign-up.png" alt="Join Us" width="280">
                                <span class="ui-sp-30"></span>

                                <h1 class="ui-h1">
                                    Join our<br class="ui-hidden-sm">huge platform<br class="ui-hidden-sm">
                                    <span class="ui-font-bold ui-font-38">today!</span>
                                </h1>
                                <ul class="ui-list-unstyled ui-list-sp-10 ui-color-black-25 ui-font-18 ui-icons-sm ui-icons-m-5-r ui-theme-sub">
                                    <li>
                                        <svg class="ui-icon ui-text ui-hidden-sm"><use href="../dist/icons.svg#check-circle"/></svg>
                                        Work and build around your team.
                                    </li>
                                    <li>
                                        <svg class="ui-icon ui-text ui-hidden-sm"><use href="../dist/icons.svg#check-circle"/></svg>
                                        Whatever work you do, wherever you do it.
                                    </li>
                                    <li>
                                        <svg class="ui-icon ui-text ui-hidden-sm"><use href="../dist/icons.svg#check-circle"/></svg>
                                        Where humans connect.
                                    </li>
                                    <li>
                                        <svg class="ui-icon ui-text ui-hidden-sm"><use href="../dist/icons.svg#check-circle"/></svg>
                                        Expanding your environment.
                                    </li>
                                </ul>

                            </div>
                        </div>

                    </div>

                    <span class="ui-sp-30"></span>

                </div>
            </div>
        </div>
    </form>

</main>