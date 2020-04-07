<!-- custom CSS -->
<style>
    .signup-container { margin-top: -50px; }
    .signup-holder { background-image: linear-gradient(110deg, #624494, #080550, #6f113e); }

    .signup-icons .icon { position: absolute; }
    .signup-icons .icon:nth-child(1) { width: 52px; height: 52px; bottom: 70px; left: 202px; opacity: .15; transform: rotate(12deg); }
    .signup-icons .icon:nth-child(2) { width: 28px; height: 28px; bottom: 2px; left: 4px; opacity: .1; transform: rotate(-12deg); }
    .signup-icons .icon:nth-child(3) { width: 64px; height: 64px; top: 22px; left: 22px; opacity: .5; transform: rotate(-12deg); }
    .signup-icons .icon:nth-child(4) { width: 64px; height: 64px; bottom: 42px; right: -8px; opacity: .3; transform: rotate(-12deg); }
    .signup-icons .icon:nth-child(5) { width: 206px; height: 206px; top: -42px; right: 29%; opacity: .15; transform: rotate(12deg); }

    .signup-btn { min-width: 42%; background-image: linear-gradient(130deg, #4ee273,#2dbd51); }
    .why-join { background-image: linear-gradient(130deg, #fff, #e8e0ff, #fff); }

    @media (prefers-color-scheme: dark) {
        .signup-holder { background-image: linear-gradient(110deg, #a671ff, #2d2a73, #9e2861); }

        .signup-btn { background-image: linear-gradient(130deg, #2dbd51,#128a30); }
        .why-join { background-image: linear-gradient(130deg, #2f343e, #2e293c, #2f343e); }
    }
</style>

<main class="container no-gutter">

    <div class="row row-no-gap">
        <div class="col-12">

            <div class="signup-holder no-scroll set-relative ui-dark">

                <div class="signup-icons icons-black">
                    <svg class="icon"><use href="#plus"></use></svg>
                    <svg class="icon"><use href="#plus"></use></svg>
                    <svg class="icon"><use href="#plus"></use></svg>
                    <svg class="icon"><use href="#plus"></use></svg>
                    <svg class="icon"><use href="#plus"></use></svg>
                </div>

                <div class="fixed theme-green">
                    <div class="row">
                        <div class="col-12 padding-15-v align-c">
                            <span class="sp-30"></span>
                            <a href="?l=login-page" class="btn xx-light btn-lg btn-ghost btn-ghost-border btn-sm-fluid padding-30-h circle border-dual ui-border ease-btn">
                                <span class="xx-light">Have you already an account?</span>
                                <span class="ui-text hidden-sm">Click here to login.</span>
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
                                    <p class="dark large">Sign up to create, discover and connect with the global community.</p>
                                </div>
                                <div class="col-6">

                                    <label class="form-label x-dark">First Name</label>
                                    <div class="text round border-dual ease-form">
                                        <input class="required" type="text" placeholder="Enter first name" minlength="3">
                                    </div>
                                    <p class="required-msg">Enter your first name.</p>

                                    <span class="sp-20"></span>

                                    <label class="form-label x-dark">Last Name</label>
                                    <div class="text round border-dual ease-form">
                                        <input class="required" type="text" placeholder="Enter last name" minlength="3">
                                    </div>
                                    <p class="required-msg">Enter your last name.</p>

                                    <span class="sp-20"></span>

                                    <label class="form-label x-dark">Phone</label>
                                    <div class="text round border-dual ease-form">
                                        <input class="required number" type="text" placeholder="123-123-1234" minlength="12" maxlength="12">
                                    </div>
                                    <p class="required-msg">Enter your phone.</p>

                                </div>
                                <div class="col-6">

                                    <label class="form-label x-dark">Email</label>
                                    <div class="text round border-dual ease-form">
                                        <input class="required" type="email" placeholder="Enter your email">
                                    </div>
                                    <p class="required-msg">Enter your email.</p>

                                    <span class="sp-20"></span>

                                    <label class="form-label x-dark">Password</label>
                                    <div class="text text-icon round border-dual ease-form">
                                        <button type="button" title="Toggle Password" class="show-pass">
                                            <svg class="icon"><use href="#eye-fill"></use></svg>
                                        </button>
                                        <input class="required" type="password" placeholder="Enter password" minlength="8">
                                    </div>
                                    <p class="required-msg">Minimum length is 8 characters.</p>

                                    <span class="sp-20"></span>

                                    <label class="form-label x-dark">Confirm Password</label>
                                    <div class="text text-icon round border-dual ease-form">
                                        <button type="button" title="Toggle Password" class="show-pass">
                                            <svg class="icon"><use href="#eye-fill"></use></svg>
                                        </button>
                                        <input class="required" type="password" placeholder="Enter password again" minlength="8">
                                    </div>
                                    <p class="required-msg">Please confirm your password.</p>

                                </div>
                                <div class="col-12 theme-default2">

                                    <span class="sp-15"></span>
                                    <label class="custom">
                                        <span class="check-custom round border-dual ease-form">
                                            <input type="checkbox" checked>
                                            <i class="state"></i>
                                        </span>
                                        <span class="dark">Yes, I want to receive emails from this platform.</span>
                                    </label>

                                    <span class="clearfix"></span>

                                    <label class="custom">
                                        <span class="check-custom round border-dual ease-form">
                                            <input type="checkbox" checked>
                                            <i class="state"></i>
                                        </span>
                                        <span class="dark">I agree to the</span>
                                        <a class="font-bold hoverline ui-text" href="#">Terms</a>,
                                        <a class="font-bold hoverline ui-text" href="#">Privacy Policy</a>
                                        <span class="dark">and</span>
                                        <a class="font-bold ui-text" href="#">Fees.</a>
                                    </label>

                                    <span class="sp-30 margin-15-v"></span>

                                    <button type="submit" class="signup-btn btn btn-md-fluid xx-light circle hover-scale hover-shadow ease-btn">
                                        <b>SIGN UP NOW</b>
                                    </button>
                                    <span class="sp-30"></span>
                                    <span class="dark">Have you any questions?<br>Please,</span> <a class="font-bold hoverline ui-text" href="#">click here</a> <span class="dark">to access Help Center.</span>

                                </div>
                            </div>
                            <div class="why-join col-lg-500 col-400 col-md-350 order-sm-first sm-align-c padding-30">

                                <img class="automargin" src="img/sign-up.png" alt="Join Us" width="280">
                                <span class="sp-30"></span>

                                <h3 class="largest">
                                    Join our<br class="hidden-sm">huge platform<br class="hidden-sm">
                                    <span class="font-bold x-largest">today!</span>
                                </h3>
                                <ul class="list-unstyled list-spacer-10 light x-large icons-sm icons-margin-5-r theme-default2">
                                    <li>
                                        <svg class="icon ui-text hidden-sm"><use href="#check-circle-fill"></use></svg>
                                        Work and build around your team.
                                    </li>
                                    <li>
                                        <svg class="icon ui-text hidden-sm"><use href="#check-circle-fill"></use></svg>
                                        Whatever work you do, wherever you do it.
                                    </li>
                                    <li>
                                        <svg class="icon ui-text hidden-sm"><use href="#check-circle-fill"></use></svg>
                                        Where humans connect.
                                    </li>
                                    <li>
                                        <svg class="icon ui-text hidden-sm"><use href="#check-circle-fill"></use></svg>
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