<!-- custom CSS -->
<link rel="stylesheet" href="../css/custom/login-page.css?v=<?php echo filemtime('../css/custom/login-page.css'); ?>"/>

<main class="container full-h no-gutter set-fixed set-all scroll-v">

    <div class="row no-row-gap sm-fluid full-h">
        <div class="login-forms-container col-lg-5 col-6">

            <div class="forms-holder ui-card form-lg tabs shadow-lg ui-ease-tabs">
                <form id="login" class="tab-content open open-ease" action="#">

                    <h3 class="margin-30-b">Login to continue</h3>
                    <p class="highlight font-color-black-muted large">Sign in to create, discover and connect with the global community.</p>

                    <label class="form-label font-color-black-50">User Name</label>
                    <div class="text text-icon round ui-border-dual ui-ease-form">
                        <svg class="ui-icon"><use href="#user"/></svg>
                        <input class="required" type="text" placeholder="Enter user name" minlength="3" autofocus>
                    </div>
                    <p class="required-msg">Enter user name.</p>

                    <span class="sp-15"></span>

                    <label class="form-label font-color-black-50">Password</label>
                    <div class="text text-icon round ui-border-dual ui-ease-form">
                        <button type="button" title="Toggle Password" class="show-pass">
                            <svg class="ui-icon"><use href="#eye-fill"/></svg>
                        </button>
                        <input class="required" type="password" placeholder="Enter password" minlength="8">
                    </div>
                    <p class="required-msg">Minimum length is 8 characters.</p>

                    <span class="sp-15"></span>

                    <label class="custom">
                        <span class="check-custom round ui-border-dual ui-ease-form">
                            <input type="checkbox" checked>
                            <i class="state"></i>
                        </span>
                        Remember me
                    </label>

                    <span class="sp-30"></span>

                    <button type="submit" class="go-signup-btn ui-btn font-color-white block round hover-scale hover-shadow ui-ease-btn">
                        <b>LOGIN</b>
                    </button>
                    <span class="sp-15"></span>
                    <button class="tab ui-btn ui-btn-ghost font-color-black-50 round block ui-ease-btn" data-ui-id="lost-password">
                        <svg class="ui-icon margin-5-r no-opacity"><use href="#lock"/></svg> Forgot password?
                    </button>

                </form>

                <form id="lost-password" class="tab-content" action="#">

                    <h3 class="margin-30-b">Forgot password?</h3>
                    <p class="highlight font-color-black-muted large">Please enter your email address. You will receive a link to create a new password via email.</p>

                    <label class="form-label font-color-black-50">Your email</label>
                    <div class="text text-icon round ui-border-dual ui-ease-form">
                        <svg class="ui-icon"><use href="#at"/></svg>
                        <input class="required" type="email" placeholder="Enter email" minlength="3">
                    </div>
                    <p class="required-msg">Enter email.</p>

                    <span class="sp-30"></span>

                    <button type="submit" class="go-signup-btn ui-btn font-color-white block round hover-scale hover-shadow ui-ease-btn">
                        <b>Reset Password</b>
                    </button>
                    <span class="sp-15"></span>
                    <button class="tab ui-btn ui-btn-ghost font-color-black-50 round block ui-ease-btn" data-ui-id="login">
                        <svg class="ui-icon margin-5-r no-opacity"><use href="#long-arrow-left"/></svg> Back to login
                    </button>

                </form>
            </div>

        </div>
        <div class="login-container col-lg-7 col-6 set-relative">

            <div class="login-holder align-c no-scroll set-relative ui-fill-dark-100 shadow-lg">

                <div class="full-w set-absolute set-c">
                    <h1 class="hidden-md">Create your account</h1>
                    <p class="x-large font-color-white-muted">Sign up to create, discover and connect with the global community.</p>
                    <span class="sp-30 margin-10-v"></span>
                    <a href="?l=sign-up-page" class="login-btn ui-btn ui-btn-lg ui-btn-sm-fluid padding-30-h circle hover-scale hover-shadow ui-ease-btn"><b>SIGN UP NOW</b></a>
                </div>

                <div class="login-icons ui-icons-black">
                    <svg class="ui-icon hidden-sm"><use href="#plus"/></svg>
                    <svg class="ui-icon"><use href="#plus"/></svg>
                    <svg class="ui-icon"><use href="#plus"/></svg>
                    <svg class="ui-icon"><use href="#plus"/></svg>
                    <svg class="ui-icon"><use href="#plus"/></svg>
                </div>

            </div>

            <svg class="ui-icon font-color-white visible-lg"><use href="#users"/></svg>

        </div>
    </div>

</main>