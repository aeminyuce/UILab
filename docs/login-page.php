<!-- custom CSS -->
<link rel="stylesheet" href="../css/custom/login-page.css?v=<?php echo filemtime('../css/custom/login-page.css'); ?>"/>

<main class="ui-container ui-full-h ui-no-gutter ui-set-fixed ui-set-all ui-scroll-v">

    <div class="ui-row ui-no-row-gap ui-sm-fluid ui-full-h">
        <div class="login-forms-container ui-col-lg-5 ui-col-6">

            <div class="forms-holder ui-card ui-form-lg ui-tabs ui-shadow-lg ui-ease-tabs">
                <form id="login" class="ui-tab-content ui-open ui-open-ease" action="#">

                    <h3 class="ui-h3 ui-margin-30-b">Login to continue</h3>
                    <p class="ui-highlight ui-color-black-25 large">Sign in to create, discover and connect with the global community.</p>

                    <label class="ui-form-label ui-color-black-50">User Name</label>
                    <div class="ui-input text-icon ui-round ui-border-dual ui-ease-form">
                        <svg class="ui-icon"><use href="#user"/></svg>
                        <input class="required" type="text" placeholder="Enter user name" minlength="3" autofocus>
                    </div>
                    <p class="ui-required-msg">Enter user name.</p>

                    <span class="ui-sp-15"></span>

                    <label class="ui-form-label ui-color-black-50">Password</label>
                    <div class="ui-input text-icon ui-round ui-border-dual ui-ease-form">
                        <button type="button" title="Toggle Password" class="show-pass">
                            <svg class="ui-icon"><use href="#eye-fill"/></svg>
                        </button>
                        <input class="required" type="password" placeholder="Enter password" minlength="8">
                    </div>
                    <p class="ui-required-msg">Minimum length is 8 characters.</p>

                    <span class="ui-sp-15"></span>

                    <label class="custom">
                        <span class="check-custom ui-round ui-border-dual ui-ease-form">
                            <input type="checkbox" checked>
                            <i class="ui-state"></i>
                        </span>
                        Remember me
                    </label>

                    <span class="ui-sp-30"></span>

                    <button type="submit" class="go-signup-btn ui-btn ui-color-white ui-block ui-round ui-hover-scale ui-hover-shadow ui-ease-btn">
                        <b>LOGIN</b>
                    </button>
                    <span class="ui-sp-15"></span>
                    <button class="ui-tab ui-btn ui-btn-ghost ui-color-black-50 ui-round ui-block ui-ease-btn" data-ui-id="lost-password">
                        <svg class="ui-icon ui-margin-5-r ui-no-opacity"><use href="#lock"/></svg> Forgot password?
                    </button>

                </form>

                <form id="lost-password" class="ui-tab-content" action="#">

                    <h3 class="ui-h3 ui-margin-30-b">Forgot password?</h3>
                    <p class="ui-highlight ui-color-black-25 large">Please enter your email address. You will receive a link to create a new password via email.</p>

                    <label class="ui-form-label ui-color-black-50">Your email</label>
                    <div class="ui-input text-icon ui-round ui-border-dual ui-ease-form">
                        <svg class="ui-icon"><use href="#at"/></svg>
                        <input class="required" type="email" placeholder="Enter email" minlength="3">
                    </div>
                    <p class="ui-required-msg">Enter email.</p>

                    <span class="ui-sp-30"></span>

                    <button type="submit" class="go-signup-btn ui-btn ui-color-white ui-block ui-round ui-hover-scale ui-hover-shadow ui-ease-btn">
                        <b>Reset Password</b>
                    </button>
                    <span class="ui-sp-15"></span>
                    <button class="ui-tab ui-btn ui-btn-ghost ui-color-black-50 ui-round ui-block ui-ease-btn" data-ui-id="login">
                        <svg class="ui-icon ui-margin-5-r ui-no-opacity"><use href="#long-arrow-left"/></svg> Back to login
                    </button>

                </form>
            </div>

        </div>
        <div class="login-container ui-col-lg-7 ui-col-6 ui-set-relative">

            <div class="login-holder ui-align-c ui-no-scroll ui-set-relative ui-fill-dark-100 ui-shadow-lg">

                <div class="ui-full-w ui-set-absolute ui-set-c">
                    <h1 class="ui-h1 ui-hidden-md">Create your account</h1>
                    <p class="ui-font-18 ui-color-white-25">Sign up to create, discover and connect with the global community.</p>
                    <span class="ui-sp-30 ui-margin-10-v"></span>
                    <a href="?l=sign-up-page" class="login-btn ui-btn ui-btn-lg ui-btn-sm-fluid ui-padding-30-h ui-circle ui-hover-scale ui-hover-shadow ui-ease-btn"><b>SIGN UP NOW</b></a>
                </div>

                <div class="login-icons ui-icons-black">
                    <svg class="ui-icon ui-hidden-sm"><use href="#plus"/></svg>
                    <svg class="ui-icon"><use href="#plus"/></svg>
                    <svg class="ui-icon"><use href="#plus"/></svg>
                    <svg class="ui-icon"><use href="#plus"/></svg>
                    <svg class="ui-icon"><use href="#plus"/></svg>
                </div>

            </div>

            <svg class="ui-icon ui-color-white ui-visible-lg"><use href="#users"/></svg>

        </div>
    </div>

</main>