<!-- custom CSS -->
<style>
    html,.login-page { height: 100%; }

    .login-holder { background-image: linear-gradient(110deg, #624494, #080550, #6f113e); }
    .login-holder > .set-absolute { z-index: 1; }
    .login-holder .highlight-icon { font-size: 96px; width: 96px; height: 96px; }

    .go-signup-btn { background-image: linear-gradient(130deg, #8366b9,#6f113e); }
    .login-btn { min-width: 26%; background-image: linear-gradient(130deg, #4ee273,#2dbd51); z-index: 1; }

    .login-forms-container { background-color: #f6f4fc; }
    .login-container { background-color: #e2d2ff; }
    .login-container > .icon { font-size: 160px; position: absolute; top: 14%; right: 34%; transform: rotate(-12deg); }

    .login-icons .icon { position: absolute; }
    .login-icons .icon:nth-child(1) { width: 52px; height: 52px; bottom: 112px; left: 82px; opacity: .65; transform: rotate(12deg); }
    .login-icons .icon:nth-child(2) { width: 28px; height: 28px; bottom: 32px; left: 24px; opacity: .15; transform: rotate(-12deg); }
    .login-icons .icon:nth-child(3) { width: 84px; height: 84px; top: 20%; left: 10%; opacity: .15; transform: rotate(-12deg); }
    .login-icons .icon:nth-child(4) { width: 106px; height: 106px; bottom: 18px; right: 92px; opacity: .3; transform: rotate(-12deg); }
    .login-icons .icon:nth-child(5) { width: 38px; height: 38px; top: 72px; right: 20%; opacity: .15; transform: rotate(12deg); }

    @media (min-width: 1200px) {
        .login-forms-container { padding: 8% 0 8% 14% !important; }
        .login-container { padding: 8% 14% 8% 0 !important; }
    }
    @media (max-width: 1199px) and (min-width: 768px) {
        .login-forms-container { padding: 50px 0 10px 10px !important; }
        .login-container { padding: 50px 10px 10px 0 !important; }
    }
    @media (min-width: 768px) {
        .forms-holder,.login-holder { min-height: 560px; height: 100%; }
        .forms-holder,.login-holder > .set-absolute { padding: 10%; }
    }
    @media (max-width: 767px) {
        .login-holder { min-height: 320px; }
        .forms-holder,.login-holder > .set-absolute { padding: 30px; }

        .login-forms-container { padding: 10px 10px 0 10px !important; }
        .login-container { padding: 0 10px 10px 10px !important; }
    }

    @media (prefers-color-scheme: dark) {
        .login-holder { background-image: linear-gradient(110deg, #a671ff, #2d2a73, #9e2861); }
        .login-btn { background-image: linear-gradient(130deg, #2dbd51,#128a30); }

        .login-forms-container { background-color: transparent; }
        .login-container { background-color: #2d1f46; }

        .go-signup-btn { background-image: linear-gradient(130deg, #a671ff,#9e2861); }
    }
</style>

<main class="login-page container full-h no-gutter">

    <div class="row row-no-gap sm-fluid full-h">
        <div class="login-forms-container col-lg-5 col-6">

            <div class="forms-holder card form-lg tabs shadow-lg ease-tabs">
                <form id="login" class="tab-content open open-ease" action="#">

                    <h3 class="margin-30-b">Login to continue</h3>
                    <p class="dark large">Sign in to create, discover and connect with the global community.</p>

                    <label class="form-label x-dark">User Name</label>
                    <div class="text text-icon round border-dual ease-form">
                        <i class="icon icon-user"></i>
                        <input class="required" type="text" placeholder="Enter user name" minlength="3" autocomplete="username">
                    </div>
                    <p class="required-msg">Enter user name.</p>

                    <span class="sp15"></span>

                    <label class="form-label x-dark">Password</label>
                    <div class="text text-icon round border-dual ease-form">
                        <button type="button" title="Toggle Password" class="show-pass icon icon-eye"></button>
                        <input class="required" type="password" placeholder="Enter password" minlength="8" autocomplete="current-password">
                    </div>
                    <p class="required-msg">Minimum length is 8 characters.</p>

                    <span class="sp15"></span>

                    <label class="custom">
                        <span class="check-custom round border-dual ease-form">
                            <input type="checkbox" checked>
                            <i class="state"></i>
                        </span>
                        Remember me
                    </label>

                    <span class="sp30"></span>

                    <button type="submit" class="go-signup-btn btn xx-light block round hover-scale hover-shadow ease-btn">
                        <b>LOGIN</b>
                    </button>
                    <span class="sp15"></span>
                    <button class="tab btn btn-ghost x-dark round block ease-btn" data-id="lost-password">
                        <i class="icon icon-sm icon-lock-open margin-5-r no-opacity"></i> Forgot password?
                    </button>

                </form>
                <form id="lost-password" class="tab-content" action="#">

                    <h3 class="margin-30-b">Forgot password?</h3>
                    <p class="dark large">Please enter your email address. You will receive a link to create a new password via email.</p>

                    <label class="form-label x-dark">Your email</label>
                    <div class="text text-icon round border-dual ease-form">
                        <i class="icon icon-at"></i>
                        <input class="required" type="email" placeholder="Enter email" minlength="3">
                    </div>
                    <p class="required-msg">Enter email.</p>

                    <span class="sp30"></span>

                    <button type="submit" class="go-signup-btn btn xx-light block round hover-scale hover-shadow ease-btn">
                        <b>Reset Password</b>
                    </button>
                    <span class="sp15"></span>
                    <button class="tab btn btn-ghost x-dark round block ease-btn" data-id="login">
                        <i class="icon icon-sm icon-long-arrow-left margin-5-r no-opacity"></i> Back to login
                    </button>

                </form>
            </div>

        </div>
        <div class="login-container col-lg-7 col-6 set-relative">

            <div class="login-holder align-c no-scroll set-relative ui-dark shadow-lg">

                <div class="full-w set-absolute set-c">
                    <h1 class="light hidden-md">Create your account</h1>
                    <p class="x-large light">Sign up to create, discover and connect with the global community.</p>
                    <span class="sp30"></span>
                    <a href="?l=sign-up-page" class="login-btn btn btn-lg btn-sm-fluid padding-30-h circle hover-scale hover-shadow ease-btn"><b>SIGN UP NOW</b></a>
                </div>

                <div class="login-icons">
                    <i class="icon icon-plus hidden-sm"></i>
                    <i class="icon icon-plus"></i>
                    <i class="icon icon-plus"></i>
                    <i class="icon icon-plus"></i>
                    <i class="icon icon-plus"></i>
                </div>

            </div>

            <i class="icon xx-light icon-user-plus visible-lg"></i>

        </div>
    </div>

</main>