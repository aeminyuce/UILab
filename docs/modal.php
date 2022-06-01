<main class="ui-container ui-no-gutter">
    <div class="ui-fixed ui-p-30-v ui-theme-base">
        <div class="ui-row">

            <div class="ui-col-12">

                <h3 class="ui-h3">Open Modal</h3>
                <pre class="ui-pre ui-ease-pre ui-round">ui.modal.open({ source, size, type, closable, callback });</pre>

                <div class="ui-p-15 ui-round ui-border">
                    <dl class="ui-row ui-xs-fluid">
                        <dt class="ui-col-4">source</dt>
                        <dd class="ui-col-8">
                            Required. Set the source of modal.<br>
                            Available values: <code class="ui-code">id or classname</code>
                        </dd>

                        <dt class="ui-col-4">size</dt>
                        <dd class="ui-col-8">
                            Optional. Set the size of modal.<br>
                            Default value: <code class="ui-code">'md'</code><br>
                            Available values: <code class="ui-code">'lg', 'md', 'sm', 'fullscreen', inline, {'width', 'height'}</code>
                        </dd>

                        <dt class="ui-col-4">type</dt>
                        <dd class="ui-col-8">
                            Optional. Set the different source type of modal.<br>
                            Available values: <code class="ui-code">'ajax', 'iframe'</code>
                        </dd>

                        <dt class="ui-col-4">bg</dt>
                        <dd class="ui-col-8">
                            Optional. Set the background visibility of modal.<br>
                            Default value: <code class="ui-code">true</code><br>
                            Available values: <code class="ui-code">true, false</code>
                        </dd>

                        <dt class="ui-col-4">closable</dt>
                        <dd class="ui-col-8">
                            Optional. Set the visibility of close controls of modal.<br>
                            Default value: <code class="ui-code">true</code><br>
                            Available values: <code class="ui-code">true, false</code>
                        </dd>

                        <dt class="ui-col-4">callback</dt>
                        <dd class="ui-col-8">
                            Optional. Set a callback function after modal opens.<br>
                            Example usage: <code class="ui-code">function () {}</code>
                        </dd>
                    </dl>
                </div>

            </div>
            <div class="ui-col-12">

                <h3 class="ui-h3">Close Modal</h3>
                <pre class="ui-pre ui-ease-pre ui-round">ui.modal.close(callback);</pre>

            </div>

            <div class="ui-col-12 ui-no-p-b">
                <b class="ui-m-5-b ui-block">Examples:</b>
            </div>
            <div class="ui-col-6 ui-no-p-v">

                <i class="ui-color-black-50 ui-m-5-b ui-block">Open modal window with id.</i>
                <pre class="ui-pre ui-ease-pre ui-round ui-m-5-b">ui.modal.open({<br>    source: '#modal-example'<br>});</pre>
                <button class="ui-btn ui-btn-sm ui-round ui-fill-dark-100 ui-ease-btn" onclick="ui.modal.open({source: '#modal-example'});">Run Code</button>

            </div>
            <div class="ui-col-6 ui-no-p-t">

                <i class="ui-color-black-50 ui-m-5-b ui-block">Open modal window with class name.</i>
                <pre class="ui-pre ui-ease-pre ui-round ui-m-5-b">ui.modal.open({<br>    source: '.modal-example'<br>});</pre>
                <button class="ui-btn ui-btn-sm ui-round ui-fill-dark-100 ui-ease-btn" onclick="ui.modal.open({source: '.modal-example'});">Run Code</button>

            </div>

            <div class="ui-col-12 ui-no-p-b">
                <b class="ui-m-5-b ui-block">Size:</b>
            </div>
            <div class="ui-col-6 ui-no-p-v">

                <i class="ui-color-black-50 ui-m-5-b ui-block">Open large size modal window.</i>
                <pre class="ui-pre ui-ease-pre ui-round ui-m-5-b">ui.modal.open({<br>    source: '.modal-example',<br>    size: 'lg'<br>});</pre>
                <button class="ui-btn ui-btn-sm ui-round ui-fill-dark-100 ui-ease-btn" onclick="ui.modal.open({source: '.modal-example', size: 'lg'});">Run Code</button>

            </div>
            <div class="ui-col-6 ui-no-p-t">

                <i class="ui-color-black-50 ui-m-5-b ui-block">Open default (medium) size modal window.</i>
                <pre class="ui-pre ui-ease-pre ui-round ui-m-5-b">ui.modal.open({<br>    source: '.modal-example',<br>    size: 'md'<br>});</pre>
                <button class="ui-btn ui-btn-sm ui-round ui-fill-dark-100 ui-ease-btn" onclick="ui.modal.open({source: '.modal-example', size: 'md'});">Run Code</button>

            </div>
            <div class="ui-col-6 ui-no-p-t">

                <i class="ui-color-black-50 ui-m-5-b ui-block">Open small size modal window.</i>
                <pre class="ui-pre ui-ease-pre ui-round ui-m-5-b">ui.modal.open({<br>    source: '.modal-example',<br>    size: 'sm'<br>});</pre>
                <button class="ui-btn ui-btn-sm ui-round ui-fill-dark-100 ui-ease-btn" onclick="ui.modal.open({source: '.modal-example', size: 'sm'});">Run Code</button>

            </div>
            <div class="ui-col-6 ui-no-p-t">

                <i class="ui-color-black-50 ui-m-5-b ui-block">Open fullscreen modal window.</i>
                <pre class="ui-pre ui-ease-pre ui-round ui-m-5-b">ui.modal.open({<br>    source: '.modal-example',<br>    size: 'fullscreen'<br>});</pre>
                <button class="ui-btn ui-btn-sm ui-round ui-fill-dark-100 ui-ease-btn" onclick="ui.modal.open({source: '.modal-example', size: 'fullscreen'});">Run Code</button>

            </div>
            <div class="ui-col-6 ui-no-p-t">

                <i class="ui-color-black-50 ui-m-5-b ui-block">Open inline modal window.</i>
                <pre class="ui-pre ui-ease-pre ui-round ui-m-5-b">ui.modal.open({<br>    source: '.modal-example',<br>    size: 'inline'<br>});</pre>
                <button class="ui-btn ui-btn-sm ui-round ui-fill-dark-100 ui-ease-btn" onclick="ui.modal.open({source: '.modal-example', size: 'inline'});">Run Code</button>

            </div>
            <div class="ui-col-6 ui-no-p-t">

                <i class="ui-color-black-50 ui-m-5-b ui-block">Open fixed size modal window.</i>
                <pre class="ui-pre ui-ease-pre ui-round ui-m-5-b">ui.modal.open({<br>    source: '.modal-example',<br>    size: '560x315'<br>});</pre>
                <button class="ui-btn ui-btn-sm ui-round ui-fill-dark-100 ui-ease-btn" onclick="ui.modal.open({source: '.modal-example', size: '560x315'});">Run Code</button>

            </div>

            <div class="ui-col-12">

                <b>Type:</b>
                <i class="ui-color-black-50 ui-m-5-b ui-block">Open links with ajax modal.</i>
                <pre class="ui-pre ui-ease-pre ui-round ui-m-5-b">ui.modal.open({<br>    source: 'xhr/ajax-modal.php'<br>    size: 'lg',<br>    type: 'ajax'<br>});</pre>
                <button class="ui-btn ui-btn-sm ui-round ui-fill-dark-100 ui-ease-btn" onclick="ui.modal.open({source: 'xhr/ajax-modal.php', size: 'lg', type: 'ajax'});">Run Code</button>

                <span class="ui-sp-15"></span>

                <i class="ui-color-black-50 ui-m-5-b ui-block">
                    Open links with iframe modal.<br>
                    Youtube embed link example:
                </i>
                <pre class="ui-pre ui-ease-pre ui-round ui-m-5-b">ui.modal.open({<br>    source: 'https://www.youtube.com/embed/Ct6BUPvE2sM',<br>    size: '640x360',<br>    type: 'iframe'<br>});</pre>
                <button class="ui-btn ui-btn-sm ui-round ui-fill-dark-100 ui-ease-btn" onclick="ui.modal.open({source: 'https://www.youtube.com/embed/Ct6BUPvE2sM', size: '640x360', type: 'iframe'});">Run Code</button>

                <span class="ui-sp-15"></span>

                <i class="ui-color-black-50 ui-m-5-b ui-block">Google map embed link example:</i>
                <pre class="ui-pre ui-ease-pre ui-round ui-m-5-b">ui.modal.open({<br>    source: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d770809.0860158126!2d28.45174621544522!3d41.003964328513874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1549286679927',<br>    size: 'fullscreen',<br>    type: 'iframe'<br>});</pre>
                <button class="ui-btn ui-btn-sm ui-round ui-fill-dark-100 ui-ease-btn" onclick="ui.modal.open({source: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d770809.0860158126!2d28.45174621544522!3d41.003964328513874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1549286679927', size: 'fullscreen', type: 'iframe'});">Run Code</button>

                <span class="ui-sp-15"></span>

                <i class="ui-color-black-50 ui-m-5-b ui-block">Google map embed link with header and footer:</i>
                <pre class="ui-pre ui-ease-pre ui-round ui-m-5-b">ui.modal.open({<br>    source: '#modal-example'<br>    size: 'fullscreen'<br>});</pre>
                <button class="ui-btn ui-btn-sm ui-round ui-fill-dark-100 ui-ease-btn" onclick="ui.modal.open({source: '#modal-example', size: 'fullscreen'});">Run Code</button>

            </div>

            <div class="ui-col-12">

                <b>Bg:</b>
                <i class="ui-color-black-50 ui-m-5-b ui-block">Enable/Disable modal window background color.</i>
                <pre class="ui-pre ui-ease-pre ui-round ui-m-5-b">ui.modal.open({<br>    source: '.modal-search',<br>    bg: 'false'<br>});</pre>
                <button class="ui-btn ui-btn-sm ui-round ui-fill-dark-100 ui-ease-btn" onclick="ui.modal.open({source: '.modal-search', bg: 'false'});">Run Code</button>

            </div>

            <div class="ui-col-12">

                <b>Closable:</b>
                <i class="ui-color-black-50 ui-m-5-b ui-block">Close modal window with footer buttons.</i>
                <pre class="ui-pre ui-ease-pre ui-round ui-m-5-b">ui.modal.open({<br>    source: '.modal-example',<br>    closable: false<br>});</pre>
                <button class="ui-btn ui-btn-sm ui-round ui-fill-dark-100 ui-ease-btn" onclick="ui.modal.open({source: '.modal-example', closable: false});">Run Code</button>

            </div>

            <div class="ui-col-12">

                <b>Callback:</b>
                <i class="ui-color-black-50 ui-m-5-b ui-block">Callback call after open modal.</i>
                <pre class="ui-pre ui-ease-pre ui-round ui-m-5-b">ui.modal.open({<br>    source: '.modal-example',<br>    callback: function () {<br>        alert('Modal opened!');<br>    }<br>});</pre>
                <button class="ui-btn ui-btn-sm ui-round ui-fill-dark-100 ui-ease-btn" onclick="ui.modal.open({source: '.modal-example', callback: function () { alert('Modal opened!'); }});">Run Code</button>

            </div>

        </div>
    </div>
</main>

<!-- modal sources -->
<div id="modal-example" class="ui-modal modal-example ui-theme-base">
    <div class="ui-modal-header ui-fill-dark-100">
        <h4 class="ui-h4">Modal Header</h4>
        <div class="ui-modal-buttons ui-ease-1st-btn">
            <button class="ui-btn ui-circle ui-fill-dark-300">Header Button</button>
        </div>
    </div>
    <div class="ui-modal-container ui-font-16 ui-font-readable ui-p-30">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec tincidunt eros. Vivamus a est id dui ultricies congue vel et tellus. Nam ac velit mi. Donec vitae suscipit enim, nec consectetur nisl. Quisque ac posuere lectus. Morbi quam diam, cursus et metus at, lobortis iaculis tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus lectus nibh, non elementum justo facilisis a. Aliquam erat volutpat. Vestibulum auctor et diam eget eleifend. Donec blandit ligula aliquam mi lacinia lacinia. Cras ac bibendum urna. Suspendisse posuere ullamcorper enim, non varius diam mattis vehicula. Donec nec lacinia diam.
        <img class="ui-img-fluid ui-m-30-v ui-round ui-m-auto ui-block ui-shadow-lg" src="../public/img/image_05.jpg" style="max-width: 700px" alt="">
        Pellentesque congue eget elit vitae rutrum. Morbi bibendum dignissim convallis. Etiam lacinia quam et ipsum convallis, a congue metus sagittis. Nunc posuere iaculis nulla, nec rutrum neque condimentum at. Donec nec elementum sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor libero sem, sed bibendum elit viverra vitae.
        <br><br>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec tincidunt eros. Vivamus a est id dui ultricies congue vel et tellus. Nam ac velit mi. Donec vitae suscipit enim, nec consectetur nisl. Quisque ac posuere lectus. Morbi quam diam, cursus et metus at, lobortis iaculis tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus lectus nibh, non elementum justo facilisis a. Aliquam erat volutpat. Vestibulum auctor et diam eget eleifend. Donec blandit ligula aliquam mi lacinia lacinia. Cras ac bibendum urna. Suspendisse posuere ullamcorper enim, non varius diam mattis vehicula. Donec nec lacinia diam.
    </div>
    <div class="ui-modal-footer">
        <div class="ui-modal-buttons ui-ease-1st-btn">
            <button type="button" class="ui-btn ui-btn-ghost ui-border-dual ui-circle" onclick="ui.modal.close(function () { alert('Modal closed!'); });">Callback</button>
            <button type="button" class="ui-btn ui-btn-ghost ui-border-dual ui-circle" onclick="ui.modal.close();">Cancel</button>
            <button type="submit" class="ui-btn ui-circle ui-theme-green ui-fill-dark-100" onclick="ui.modal.close();">Accept</button>
        </div>
    </div>
</div>

<!-- modal search -->
<div class="modal-search ui-modal ui-form-lg">
    <div class="ui-modal-container ui-xs-no-p">

        <form action="#successful">
            <h2 class="ui-h2">Search</h2>
            <p class="ui-highlight ui-font-16 ui-color-white-50 ui-xs-align-c ui-font-readable">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada purus eget enim tempus, sed faucibus ante blandit. Morbi a pharetra sapien.</p>

            <div class="ui-col-static ui-no-fluid">
                <div class="ui-row ui-no-row-gap-h">
                    <div class="ui-col-12 ui-ease-1st-form">
                        <div class="ui-input ui-form-has-clear ui-form-icon ui-round-l ui-no-border ui-shadow-in-sm ui-theme-gray ui-fill-light-300 ui-ease-form">
                            <button type="button" class="ui-form-clear">
                                <svg class="ui-icon"><use href="../dist/icons.svg#remove"/></svg>
                            </button>
                            <input class="ui-required" type="text" placeholder="Search">
                        </div>
                        <p class="ui-required-msg ui-font-16">Please, enter a keyword.</p>
                    </div>
                </div>
                <div class="ui-col-100 ui-col-xs-50 ui-p-10-v">
                    <button class="ui-btn ui-block ui-round-r ui-theme-sub ui-fill-dark-100 ui-ease-btn" type="submit">
                        <svg class="ui-icon"><use href="../dist/icons.svg#search"/></svg>
                    </button>
                </div>
            </div>

            <div class="ui-row ui-xs-fluid ui-icons-xxl ui-block-2nd ui-icons-no-opacity ui-hover-t-more-2nd ui-icons-m-5-v ui-theme-base ui-form-lg ui-ease-2nd-btn">
                <div class="ui-col-4 ui-p-10-b">
                    <a class="ui-btn ui-btn-multi ui-font-condensed ui-round ui-fill-dark-100" href="#">
                        <svg class="ui-icon"><use href="../dist/icons.svg#news"/></svg>
                        <span class="ui-font-18 ui-block ui-m-5-t">News</span>
                        <span class="ui-color-white-50">589</span>
                    </a>
                </div>
                <div class="ui-col-4 ui-p-10-b">
                    <a class="ui-btn ui-btn-multi ui-font-condensed ui-round ui-fill-dark-100" href="#">
                        <svg class="ui-icon"><use href="../dist/icons.svg#calendar-check"/></svg>
                        <span class="ui-font-18 ui-block ui-m-5-t">Events</span>
                        <span class="ui-color-white-50">219</span>
                    </a>
                </div>
                <div class="ui-col-4 ui-p-10-b">
                    <a class="ui-btn ui-btn-multi ui-font-condensed ui-round ui-fill-dark-100" href="#">
                        <svg class="ui-icon"><use href="../dist/icons.svg#files"/></svg>
                        <span class="ui-font-18 ui-block ui-m-5-t">Documents</span>
                        <span class="ui-color-white-50">701</span>
                    </a>
                </div>
            </div>
        </form>

    </div>
</div>