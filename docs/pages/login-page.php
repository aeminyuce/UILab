<link href="../dist/css/login-page.css?v=<?php echo filemtime('../dist/css/login-page.css'); ?>" rel="stylesheet">

<main class="ui-container ui-full-h ui-no-gutter ui-set-fixed ui-set-all ui-scroll-v">

    <div class="ui-row ui-no-row-gap ui-sm-fluid ui-full-h">
        <div class="login-forms-container ui-col-lg-5 ui-col-6">

            <div class="login-forms-holder ui-card ui-form-lg ui-tab-holder ui-shadow-lg ui-ease-tab">
                <form id="loginExample" class="ui-tab-content ui-open ui-open-ease" action="#">

                    <h3 class="ui-h3 ui-m-30-b">Login to continue</h3>
                    <p class="ui-highlight ui-color-black-25 ui-font-16">Sign in to create, discover and connect with the global community.</p>

                    <label class="ui-form-label ui-color-black-50">User Name</label>
                    <div class="ui-input ui-form-icon ui-round ui-border-dual ui-ease-form">
                        <svg class="ui-icon"><use href="../dist/icons.svg#user"/></svg>
                        <input class="ui-required" type="text" placeholder="Enter user name" minlength="3" autofocus>
                    </div>
                    <p class="ui-required-msg">Enter user name.</p>

                    <span class="ui-sp-15"></span>

                    <label class="ui-form-label ui-color-black-50">Password</label>
                    <div class="ui-input ui-form-icon ui-round ui-border-dual ui-ease-form">
                        <button type="button" title="Toggle Password" class="ui-pass-toggle">
                            <svg class="ui-icon"><use href="../dist/icons.svg#eye"/></svg>
                        </button>
                        <input class="ui-required" type="password" placeholder="Enter password" minlength="8">
                    </div>
                    <p class="ui-required-msg">Minimum length is 8 characters.</p>

                    <span class="ui-sp-15"></span>

                    <label class="ui-label">
                        <span class="ui-check ui-round ui-border-dual ui-ease-form">
                            <input type="checkbox" checked>
                            <i class="ui-form-state"></i>
                        </span>
                        Remember me
                    </label>

                    <span class="ui-sp-30"></span>

                    <button type="submit" class="login-signup-btn ui-btn ui-color-white ui-block ui-round ui-hover-scale ui-hover-shadow ui-ease-btn">
                        <b>LOGIN</b>
                    </button>
                    <span class="ui-sp-15"></span>
                    <button class="ui-tab ui-btn ui-btn-ghost ui-color-black-50 ui-round ui-block ui-ease-btn" data-ui-id="lostPasswordExample">
                        <svg class="ui-icon ui-m-5-r ui-no-opacity"><use href="../dist/icons.svg#lock"/></svg> Forgot password?
                    </button>

                </form>

                <form id="lostPasswordExample" class="ui-tab-content" action="#">

                    <h3 class="ui-h3 ui-m-30-b">Forgot password?</h3>
                    <p class="ui-highlight ui-color-black-25 ui-font-16">Please enter your email address. You will receive a link to create a new password via email.</p>

                    <label class="ui-form-label ui-color-black-50">Your email</label>
                    <div class="ui-input ui-form-icon ui-round ui-border-dual ui-ease-form">
                        <svg class="ui-icon"><use href="../dist/icons.svg#at"/></svg>
                        <input class="ui-required" type="email" placeholder="Enter email">
                    </div>
                    <p class="ui-required-msg">Enter email.</p>

                    <span class="ui-sp-30"></span>

                    <button type="submit" class="ui-btn ui-color-white ui-block ui-round ui-hover-scale ui-hover-shadow ui-ease-btn">
                        <b>Reset Password</b>
                    </button>
                    <span class="ui-sp-15"></span>
                    <button class="ui-tab ui-btn ui-btn-ghost ui-color-black-50 ui-round ui-block ui-ease-btn" data-ui-id="loginExample">
                        <svg class="ui-icon ui-m-5-r ui-no-opacity"><use href="../dist/icons.svg#long-arrow-left"/></svg> Back to login
                    </button>

                </form>
            </div>

        </div>
        <div class="login-container ui-col-lg-7 ui-col-6 ui-set-relative">
            <div class="login-holder ui-align-c ui-no-scroll ui-set-relative ui-fill-dark-100 ui-shadow-lg">

                <div class="ui-full-w ui-set-absolute ui-set-c">
                    <h1 class="ui-h1 ui-hidden-md">Create your account</h1>
                    <p class="ui-font-18 ui-color-white-25">Sign up to create, discover and connect with the global community.</p>

                    <span class="ui-sp-30 ui-m-10-v"></span>

                    <a href="?l=pages/sign-up-page" class="login-btn ui-btn ui-btn-lg ui-circle ui-hover-scale ui-hover-shadow ui-ease-btn">
                        <b>SIGN UP NOW</b>
                    </a>
                </div>

                <div class="login-icons">
                    <svg class="ui-icon ui-hidden-sm"><use href="../dist/icons.svg#plus-badge"/></svg>
                    <svg class="ui-icon"><use href="../dist/icons.svg#square"/></svg>
                    <svg class="ui-icon"><use href="../dist/icons.svg#circle"/></svg>
                    <svg class="ui-icon"><use href="../dist/icons.svg#star"/></svg>
                </div>

            </div>
        </div>
    </div>

</main>