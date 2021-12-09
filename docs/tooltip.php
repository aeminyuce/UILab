<main class="ui-container ui-no-gutter">
    <div class="ui-fixed">
        <div class="ui-row ui-p-30-v">

            <div class="ui-col-12">

                <h3 class="ui-h3">Positioning</h3>
                <div class="ui-ease-1st-btn ui-theme-base ui-p-30-b">
                    <button class="ui-btn ui-m-5-b ui-round ui-fill-dark-100" data-ui-tooltip="t" title="Tooltip <b>Top</b>">Tooltip <b>Top</b></button>
                    <button class="ui-btn ui-m-5-b ui-round ui-fill-dark-100" data-ui-tooltip="b" title="Tooltip <u>Bottom</u>">Tooltip <b>Bottom</b></button>
                    <button class="ui-btn ui-m-5-b ui-round ui-fill-dark-100" data-ui-tooltip="r" title="Tooltip <i>Right</i>">Tooltip <b>Right</b></button>
                    <button class="ui-btn ui-m-5-b ui-round ui-fill-dark-100" data-ui-tooltip="l" title="Tooltip <em>Left</em>">Tooltip <b>Left</b></button>
                    <span class="ui-sp-30"></span>
                    <button class="ui-btn ui-m-5-b ui-round ui-fill-dark-100" data-ui-tooltip="tr" title="Tooltip <b>Top Right</b>">Tooltip <b>Top Right</b></button>
                    <button class="ui-btn ui-m-5-b ui-round ui-fill-dark-100" data-ui-tooltip="tl" title="Tooltip <u>Top Left</u>">Tooltip <b>Top Left</b></button>
                    <button class="ui-btn ui-m-5-b ui-round ui-fill-dark-100" data-ui-tooltip="br" title="Tooltip <i>Bottom Right</i>">Tooltip <b>Bottom Right</b></button>
                    <button class="ui-btn ui-m-5-b ui-round ui-fill-dark-100" data-ui-tooltip="bl" title="Tooltip <em>Bottom Left</em>">Tooltip <b>Bottom Left</b></button>
                </div>

                <h3 class="ui-h3">Preventing Actions on Touch</h3>
                <div class="ui-theme-sub ui-ease-1st-btn ui-p-30-b">
                    <a href="http://www.google.com/" target="_blank" class="ui-btn ui-m-5-b ui-round ui-fill-dark-100" data-ui-tooltip="t" title="Open link now!">Link</a>
                    <button onclick="alert('Test');" class="ui-btn ui-m-5-b ui-round ui-fill-dark-100" data-ui-tooltip="t" title="Run javascript aler now!">Javascript</button>
                </div>

                <h3 class="ui-h3">Only Desktop &amp; Mobile</h3>
                <div class="ui-theme-base ui-ease-1st-btn ui-p-30-b">
                    <a href="http://www.google.com/" target="_blank" class="ui-btn ui-m-5-b ui-round ui-fill-dark-100" data-ui-tooltip="t" data-ui-only="mobile" title="Open link now!">Link (mobile)</a>
                    <a href="http://www.google.com/" target="_blank" class="ui-btn ui-m-5-b ui-round ui-fill-dark-100" data-ui-tooltip="t" data-ui-only="desktop" title="Open link now!">Link (desktop)</a>
                    <span class="ui-sp-10"></span>
                    <button onclick="alert('Test');" class="ui-btn ui-m-5-b ui-round ui-fill-dark-100" data-ui-tooltip="t" data-ui-only="mobile" title="Run javascript aler now!">Javascript (mobile)</button>
                    <button onclick="alert('Test');" class="ui-btn ui-m-5-b ui-round ui-fill-dark-100" data-ui-tooltip="t" data-ui-only="desktop" title="Run javascript aler now!">Javascript (desktop)</button>
                </div>

                <h3 class="ui-h3">Using with Icons</h3>
                <div class="ui-theme-sub ui-icons-xl ui-text ui-p-30-b ui-hover-t-more-1st ui-ease-1st-layout">
                    <svg class="ui-icon" data-ui-tooltip title="Like!"><use href="img/icons.svg#heart"/></svg>
                    <svg class="ui-icon" data-ui-tooltip title="Somewhere on Earth!"><use href="img/icons.svg#marker"/></svg>
                    <svg class="ui-icon" data-ui-tooltip title="Call us now 555 55 55"><use href="img/icons.svg#phone"/></svg>
                    <svg class="ui-icon" data-ui-tooltip title="Add favorites!"><use href="img/icons.svg#star"/></svg>
                </div>

                <h3 class="ui-h3">Using with Forms</h3>
                <div class="ui-ease-1st-form ui-p-30-b ui-form-lg ui-ease-1st-form">
                    <div class="ui-input ui-form-icon ui-round ui-border-dual ui-ease-form">
                        <svg class="ui-icon" data-ui-tooltip="tl" title="Your message here!"><use href="img/icons.svg#question-circle-fill"/></svg>
                        <input type="text" placeholder="Placeholder Example">
                    </div>
                    <span class="ui-sp-15"></span>
                    <div class="ui-input ui-form-icon-l ui-round ui-border-dual ui-ease-form">
                        <svg class="ui-icon" data-ui-tooltip="tr" title="Your message here!"><use href="img/icons.svg#question-circle-fill"/></svg>
                        <input type="text" placeholder="Placeholder Example">
                    </div>
                </div>

                <h3 class="ui-h3">Using with Paragraphs</h3>
                <div class="ui-font-readable ui-ease-1st-form">
                    Lorem ipsum dolor sit amet, <b class="ui-theme-red ui-fill-light-100 ui-text" data-ui-tooltip title="<b>Nulla facilisi.</b><br>Sed purus ligula, commodo vel nisi et, lobortis ultrices erat.<br>Maecenas ac venenatis enim.">consectetur adipiscing elit.</b> Integer vitae enim quis ante lacinia tincidunt nec sed metus. Donec vitae diam non mi pharetra venenatis quis id nisl. Nunc auctor efficitur nunc nec porta. Nullam ut interdum nulla. Duis dapibus, lacus sed lacinia aliquam, orci ex congue magna, eget euismod lectus lacus ac turpis. Vestibulum facilisis tempus nunc, nec auctor risus cursus vitae. Nam cursus tristique orci non vehicula.
                    <br><br>
                    Proin ultrices metus non ligula ultrices venenatis. <a href="#" class="ui-theme-orange ui-fill-light-100 ui-text" data-ui-tooltip title="Please, click following link for details."><b>Etiam id dapibus sapien.</b></a> Sed ac enim tristique, cursus quam id, vehicula dui. Duis vestibulum, velit sit amet auctor tristique, massa elit commodo dui, eu ultricies felis arcu non enim. Cras id semper risus, eu ultrices enim. Aenean ullamcorper eleifend pharetra. Vestibulum varius, libero a congue aliquet, tortor erat suscipit lectus, id consequat nisl tellus vitae risus. Phasellus vestibulum porttitor leo. Maecenas scelerisque tempor lorem a facilisis. Fusce eu dictum eros. Aenean consequat quam est, sit amet cursus enim ultricies et.
                </div>

        </div>
    </div>
</main>