<!-- custom CSS -->
<style>

    .error-size { font-size: 20vw; font-weight: bold; line-height: 20vw; margin: -2.35vh 0; position: relative; }
    .error-size:after { content: ""; width: 32vh; height: 32vh; display: block; background-color: rgba(134, 76, 76, 0.065); border-radius: 50%; position: absolute; top: 44%; left: 44%; transform: translate(-50%, -50%); z-index: 0; }
    .error-size .icon { width: 16vw; height: 16vw; margin: 0 -4.65vw; }

    @media (prefers-color-scheme: dark) {
        .error-size:after { background-color: rgba(255,255,255,.045); }
    }

</style>

<main class="container no-gutter">
    <div class="fixed">
        <div class="row">
            <div class="col-12 padding-30-v">

                <span class="sp30 margin-30-v"></span>

                <div class="align-c form-lg theme-default2">
                    <p class="x-large">Error: 404 Page Not Found</p>
                    <p class="error-size no-user-select">
                        <span class="inline-block">4</span>
                        <i class="icon ui-text icon-undo"></i>
                        <span class="inline-block">4</span>
                    </p>
                    <p class="large">Sorry, the page you're looking for cannot be reached.<br>Here are few links that may be helpful.</p>
                    <ul class="list-unstyled ease-2nd-btn">
                        <li><a class="btn btn-ghost circle ui-dark ui-text" href="#">Home</a class="ui-text"></li>
                        <li><a class="btn btn-ghost circle ui-dark ui-text" href="#">Help Center</a></li>
                        <li><a class="btn btn-ghost circle ui-dark ui-text" href="#">Sign In</a></li>
                    </ul>
                </div>

                <span class="sp30 margin-30-v padding-30-v"></span>

                <div class="align-c form-lg theme-default2">
                    <p class="x-large">Error: 403 Forbidden</p>
                    <p class="error-size no-user-select">
                        <span class="inline-block">4</span>
                        <i class="icon ui-text icon-no"></i>
                        <span class="inline-block">3</span>
                    </p>
                    <p class="large">You don't have access to this page.<br>Please contact support if this wasn't supposed to happen.</p>
                    <a class="btn padding-30-h circle ease-btn ui-dark" href="#">
                        <i class="icon icon-long-arrow-left margin-5-r"></i>
                        Go Back
                    </a>
                </div>

                <span class="sp30 margin-30-v padding-30-v"></span>

                <div class="align-c form-lg theme-default2">
                    <p class="x-large">Error: 500 Unexpected Error</p>
                    <p class="error-size no-user-select">
                        <span class="inline-block">5</span>
                        <i class="icon ui-text icon-face-sad"></i>
                        <span class="inline-block">0</span>
                    </p>
                    <p class="large">We are having some issues at the moment.<br>We will have it fixed in no time!</p class="large">
                    <a class="btn padding-30-h circle ease-btn ui-dark" href="#">
                        <i class="icon icon-long-arrow-left margin-5-r"></i>
                        Go Back
                    </a>
                </div>

                <span class="sp30 margin-30-v"></span>

            </div>
        </div>
    </div>
</main>