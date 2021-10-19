<!-- custom CSS -->
<link rel="stylesheet" href="../css/custom/sign-up-page.css?v=<?php echo filemtime('../css/custom/sign-up-page.css'); ?>"/>

<main class="container no-gutter">

    <div class="row no-row-gap">
        <div class="col-12">

            <div class="signup-holder no-scroll set-relative ui-fill-dark-100">

                <div class="signup-icons icons-black">
                    <svg class="icon"><use href="#plus"/></svg>
                    <svg class="icon"><use href="#plus"/></svg>
                    <svg class="icon"><use href="#plus"/></svg>
                    <svg class="icon"><use href="#plus"/></svg>
                    <svg class="icon"><use href="#plus"/></svg>
                </div>

                <div class="fixed ui-theme-green">
                    <div class="row">
                        <div class="col-12 padding-15-v align-c">
                            <span class="sp-30"></span>
                            <a href="?l=login-page" class="btn font-color-white btn-lg btn-ghost btn-ghost-border btn-sm-fluid padding-30-h circle border-dual ui-stroke ui-ease-btn">
                                <span class="font-color-white">Have you already an account?</span>
                                <span class="ui-color hidden-sm">Click here to login.</span>
                            </a>
                            <span class="sp-30 margin-20-v"></span>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>

    <form action="#">
        <div class="signup-container fixed">
            <div class="row">
                <div class="col-12">

                    <div class="card margin-30-b shadow-lg">

                        <div class="col-static sm-fluid">
                            <div class="row padding-20 form-lg">
                                <div class="col-12">
                                    <h3 class="margin-30-b">Create your account</h3>
                                    <p class="font-color-black-muted large">Sign up to create, discover and connect with the global community.</p>
                                </div>
                                <div class="col-6">

                                    <label class="form-label font-color-black-50">First Name</label>
                                    <div class="text round border-dual ui-ease-form">
                                        <input class="required" type="text" placeholder="Enter first name" minlength="3">
                                    </div>
                                    <p class="required-msg">Enter your first name.</p>

                                    <span class="sp-20"></span>

                                    <label class="form-label font-color-black-50">Last Name</label>
                                    <div class="text round border-dual ui-ease-form">
                                        <input class="required" type="text" placeholder="Enter last name" minlength="3">
                                    </div>
                                    <p class="required-msg">Enter your last name.</p>

                                    <span class="sp-20"></span>

                                    <label class="form-label font-color-black-50">Phone</label>
                                    <div class="text round border-dual ui-ease-form">
                                        <input class="required number" type="text" placeholder="123-123-1234" minlength="12" maxlength="12">
                                    </div>
                                    <p class="required-msg">Enter your phone.</p>

                                </div>
                                <div class="col-6">

                                    <label class="form-label font-color-black-50">Email</label>
                                    <div class="text round border-dual ui-ease-form">
                                        <input class="required" type="email" placeholder="Enter your email">
                                    </div>
                                    <p class="required-msg">Enter your email.</p>

                                    <span class="sp-20"></span>

                                    <label class="form-label font-color-black-50">Password</label>
                                    <div class="text text-icon round border-dual ui-ease-form">
                                        <button type="button" title="Toggle Password" class="show-pass">
                                            <svg class="icon"><use href="#eye-fill"/></svg>
                                        </button>
                                        <input class="required" type="password" placeholder="Enter password" minlength="8">
                                    </div>
                                    <p class="required-msg">Minimum length is 8 characters.</p>

                                    <span class="sp-20"></span>

                                    <label class="form-label font-color-black-50">Confirm Password</label>
                                    <div class="text text-icon round border-dual ui-ease-form">
                                        <button type="button" title="Toggle Password" class="show-pass">
                                            <svg class="icon"><use href="#eye-fill"/></svg>
                                        </button>
                                        <input class="required" type="password" placeholder="Enter password again" minlength="8">
                                    </div>
                                    <p class="required-msg">Please confirm your password.</p>

                                </div>
                                <div class="col-12 ui-theme-sub">

                                    <span class="sp-15"></span>
                                    <label class="custom">
                                        <span class="check-custom round border-dual ui-ease-form">
                                            <input type="checkbox" checked>
                                            <i class="state"></i>
                                        </span>
                                        <span class="font-color-black-muted">Yes, I want to receive emails from this platform.</span>
                                    </label>

                                    <span class="clearfix"></span>

                                    <label class="custom">
                                        <span class="check-custom round border-dual ui-ease-form">
                                            <input type="checkbox" checked>
                                            <i class="state"></i>
                                        </span>
                                        <span class="font-color-black-muted">I agree to the</span>
                                        <a class="font-bold hoverline ui-color" href="#">Terms</a>,
                                        <a class="font-bold hoverline ui-color" href="#">Privacy Policy</a>
                                        <span class="font-color-black-muted">and</span>
                                        <a class="font-bold ui-color" href="#">Fees.</a>
                                    </label>

                                    <span class="sp-30 margin-15-v"></span>

                                    <button type="submit" class="signup-btn btn btn-md-fluid font-color-white circle hover-scale hover-shadow ui-ease-btn">
                                        <b>SIGN UP NOW</b>
                                    </button>
                                    <span class="sp-30"></span>
                                    <span class="font-color-black-muted">Have you any questions?<br>Please,</span> <a class="font-bold hoverline ui-color" href="#">click here</a> <span class="font-color-black-muted">to access Help Center.</span>

                                </div>
                            </div>
                            <div class="why-join col-lg-500 col-400 col-md-350 order-sm-first sm-align-c padding-30">

                                <img class="automargin" src="img/sign-up.png" alt="Join Us" width="280">
                                <span class="sp-30"></span>

                                <h3 class="largest">
                                    Join our<br class="hidden-sm">huge platform<br class="hidden-sm">
                                    <span class="font-bold x-largest">today!</span>
                                </h3>
                                <ul class="list-unstyled list-spacer-10 font-color-black-muted x-large icons-sm icons-margin-5-r ui-theme-sub">
                                    <li>
                                        <svg class="icon ui-color hidden-sm"><use href="#check-circle-fill"/></svg>
                                        Work and build around your team.
                                    </li>
                                    <li>
                                        <svg class="icon ui-color hidden-sm"><use href="#check-circle-fill"/></svg>
                                        Whatever work you do, wherever you do it.
                                    </li>
                                    <li>
                                        <svg class="icon ui-color hidden-sm"><use href="#check-circle-fill"/></svg>
                                        Where humans connect.
                                    </li>
                                    <li>
                                        <svg class="icon ui-color hidden-sm"><use href="#check-circle-fill"/></svg>
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