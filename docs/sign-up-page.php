<!-- custom CSS -->
<link rel="stylesheet" href="../css/custom/sign-up-page.css?v=<?php echo filemtime('../css/custom/sign-up-page.css'); ?>"/>

<main class="ui-container ui-no-gutter">

    <div class="ui-row ui-no-row-gap">
        <div class="ui-col-12">

            <div class="signup-holder ui-no-scroll ui-set-relative ui-fill-dark-100">

                <div class="signup-icons ui-icons-black">
                    <svg class="ui-icon"><use href="#plus"/></svg>
                    <svg class="ui-icon"><use href="#plus"/></svg>
                    <svg class="ui-icon"><use href="#plus"/></svg>
                    <svg class="ui-icon"><use href="#plus"/></svg>
                    <svg class="ui-icon"><use href="#plus"/></svg>
                </div>

                <div class="ui-fixed ui-theme-green">
                    <div class="ui-row">
                        <div class="ui-col-12 ui-padding-15-v align-c">
                            <span class="sp-30"></span>
                            <a href="?l=login-page" class="ui-btn ui-color-white ui-btn-lg ui-btn-ghost ui-btn-ghost-border ui-btn-sm-fluid ui-padding-30-h ui-circle ui-border-dual ui-stroke ui-ease-btn">
                                <span class="ui-color-white">Have you already an account?</span>
                                <span class="ui-current ui-hidden-sm">Click here to login.</span>
                            </a>
                            <span class="sp-30 ui-margin-20-v"></span>
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

                    <div class="ui-card ui-margin-30-b ui-shadow-lg">

                        <div class="ui-col-static ui-sm-fluid">
                            <div class="ui-row ui-padding-20 form-lg">
                                <div class="ui-col-12">
                                    <h3 class="ui-margin-30-b">Create your account</h3>
                                    <p class="ui-color-black-25 large">Sign up to create, discover and connect with the global community.</p>
                                </div>
                                <div class="ui-col-6">

                                    <label class="form-label ui-color-black-50">First Name</label>
                                    <div class="text ui-round ui-border-dual ui-ease-form">
                                        <input class="required" type="text" placeholder="Enter first name" minlength="3">
                                    </div>
                                    <p class="required-msg">Enter your first name.</p>

                                    <span class="sp-20"></span>

                                    <label class="form-label ui-color-black-50">Last Name</label>
                                    <div class="text ui-round ui-border-dual ui-ease-form">
                                        <input class="required" type="text" placeholder="Enter last name" minlength="3">
                                    </div>
                                    <p class="required-msg">Enter your last name.</p>

                                    <span class="sp-20"></span>

                                    <label class="form-label ui-color-black-50">Phone</label>
                                    <div class="text ui-round ui-border-dual ui-ease-form">
                                        <input class="required number" type="text" placeholder="123-123-1234" minlength="12" maxlength="12">
                                    </div>
                                    <p class="required-msg">Enter your phone.</p>

                                </div>
                                <div class="ui-col-6">

                                    <label class="form-label ui-color-black-50">Email</label>
                                    <div class="text ui-round ui-border-dual ui-ease-form">
                                        <input class="required" type="email" placeholder="Enter your email">
                                    </div>
                                    <p class="required-msg">Enter your email.</p>

                                    <span class="sp-20"></span>

                                    <label class="form-label ui-color-black-50">Password</label>
                                    <div class="text text-icon ui-round ui-border-dual ui-ease-form">
                                        <button type="button" title="Toggle Password" class="show-pass">
                                            <svg class="ui-icon"><use href="#eye-fill"/></svg>
                                        </button>
                                        <input class="required" type="password" placeholder="Enter password" minlength="8">
                                    </div>
                                    <p class="required-msg">Minimum length is 8 characters.</p>

                                    <span class="sp-20"></span>

                                    <label class="form-label ui-color-black-50">Confirm Password</label>
                                    <div class="text text-icon ui-round ui-border-dual ui-ease-form">
                                        <button type="button" title="Toggle Password" class="show-pass">
                                            <svg class="ui-icon"><use href="#eye-fill"/></svg>
                                        </button>
                                        <input class="required" type="password" placeholder="Enter password again" minlength="8">
                                    </div>
                                    <p class="required-msg">Please confirm your password.</p>

                                </div>
                                <div class="ui-col-12 ui-theme-sub">

                                    <span class="sp-15"></span>
                                    <label class="custom">
                                        <span class="check-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" checked>
                                            <i class="state"></i>
                                        </span>
                                        <span class="ui-color-black-25">Yes, I want to receive emails from this platform.</span>
                                    </label>

                                    <span class="ui-clear"></span>

                                    <label class="custom">
                                        <span class="check-custom ui-round ui-border-dual ui-ease-form">
                                            <input type="checkbox" checked>
                                            <i class="state"></i>
                                        </span>
                                        <span class="ui-color-black-25">I agree to the</span>
                                        <a class="font-bold hoverline ui-current" href="#">Terms</a>,
                                        <a class="font-bold hoverline ui-current" href="#">Privacy Policy</a>
                                        <span class="ui-color-black-25">and</span>
                                        <a class="font-bold ui-current" href="#">Fees.</a>
                                    </label>

                                    <span class="sp-30 ui-margin-15-v"></span>

                                    <button type="submit" class="signup-btn ui-btn ui-btn-md-fluid ui-color-white ui-circle ui-hover-scale ui-hover-shadow ui-ease-btn">
                                        <b>SIGN UP NOW</b>
                                    </button>
                                    <span class="sp-30"></span>
                                    <span class="ui-color-black-25">Have you any questions?<br>Please,</span> <a class="font-bold hoverline ui-current" href="#">click here</a> <span class="ui-color-black-25">to access Help Center.</span>

                                </div>
                            </div>
                            <div class="why-join ui-col-lg-500 ui-col-400 ui-col-md-350 ui-order-sm-first sm-align-c ui-padding-30">

                                <img class="ui-auto-margin" src="img/sign-up.png" alt="Join Us" width="280">
                                <span class="sp-30"></span>

                                <h3 class="largest">
                                    Join our<br class="ui-hidden-sm">huge platform<br class="ui-hidden-sm">
                                    <span class="font-bold x-largest">today!</span>
                                </h3>
                                <ul class="ui-list-unstyled ui-list-spacer-10 ui-color-black-25 x-large ui-icons-sm ui-icons-margin-5-r ui-theme-sub">
                                    <li>
                                        <svg class="ui-icon ui-current ui-hidden-sm"><use href="#check-circle-fill"/></svg>
                                        Work and build around your team.
                                    </li>
                                    <li>
                                        <svg class="ui-icon ui-current ui-hidden-sm"><use href="#check-circle-fill"/></svg>
                                        Whatever work you do, wherever you do it.
                                    </li>
                                    <li>
                                        <svg class="ui-icon ui-current ui-hidden-sm"><use href="#check-circle-fill"/></svg>
                                        Where humans connect.
                                    </li>
                                    <li>
                                        <svg class="ui-icon ui-current ui-hidden-sm"><use href="#check-circle-fill"/></svg>
                                        Expanding your environment.
                                    </li>
                                </ul>

                            </div>
                        </div>

                    </div>

                    <span class="sp-30"></span>

                </div>
            </div>
        </div>
    </form>

</main>