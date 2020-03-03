<main class="container no-gutter">
    <div class="fixed padding-30-v theme-default">
        <div class="row">

            <div class="col-12">

                <h4>Open Modal</h4>
                <pre class="round">modal.open({ source, size, type, closable, callback });</pre>

                <dl class="dl-horizontal padding-15 round border">
                    <dt>source</dt>
                    <dd class="margin-15-b">
                        Required. Set the source of modal.<br>
                        Available values: <code>id or classname</code>
                    </dd>

                    <dt>size</dt>
                    <dd class="margin-15-b">
                        Optional. Set the size of modal.<br>
                        Default value: <code>'md'</code><br>
                        Available values: <code>'lg', 'md', 'sm', 'fullscreen', inline-modal, {'width', 'height'}</code>
                    </dd>

                    <dt>type</dt>
                    <dd class="margin-15-b">
                        Optional. Set the different source type of modal.<br>
                        Available values: <code>'ajax', 'iframe'</code>
                    </dd>

                    <dt>bg</dt>
                    <dd class="margin-15-b">
                        Optional. Set the background visibility of modal.<br>
                        Default value: <code>true</code><br>
                        Available values: <code>true, false</code>
                    </dd>

                    <dt>closable</dt>
                    <dd class="margin-15-b">
                        Optional. Set the visibility of close controls of modal.<br>
                        Default value: <code>true</code><br>
                        Available values: <code>true, false</code>
                    </dd>

                    <dt>callback</dt>
                    <dd>
                        Optional. Set a callback function after modal opens.<br>
                        Example usage: <code>function () {}</code>
                    </dd>
                </dl>

            </div>

            <div class="col-12 no-padding-b">
                <b class="margin-5-b block">Examples:</b>
            </div>
            <div class="col-6 no-padding-v">

                <i class="x-dark margin-5-b block">Open modal window with id.</i>
                <pre class="round margin-5-b">modal.open({<br>    source: '#myModalId01'<br>});</pre>
                <button class="btn btn-sm round ui-dark ease-btn" onclick="modal.open({source: '#myModalId01'});">Run Code</button>

            </div>
            <div class="col-6 no-padding-t">

                <i class="x-dark margin-5-b block">Open modal window with class name.</i>
                <pre class="round margin-5-b">modal.open({<br>    source: '.myModal'<br>});</pre>
                <button class="btn btn-sm round ui-dark ease-btn" onclick="modal.open({source: '.myModal'});">Run Code</button>

            </div>

            <div class="col-12 no-padding-b">
                <b class="margin-5-b block">Size:</b>
            </div>
            <div class="col-6 no-padding-v">

                <i class="x-dark margin-5-b block">Open large size modal window.</i>
                <pre class="round margin-5-b">modal.open({<br>    source: '.myModal',<br>    size: 'lg'<br>});</pre>
                <button class="btn btn-sm round ui-dark ease-btn" onclick="modal.open({source: '.myModal', size: 'lg'});">Run Code</button>

            </div>
            <div class="col-6 no-padding-t">

                <i class="x-dark margin-5-b block">Open default (medium) size modal window.</i>
                <pre class="round margin-5-b">modal.open({<br>    source: '.myModal',<br>    size: 'md'<br>});</pre>
                <button class="btn btn-sm round ui-dark ease-btn" onclick="modal.open({source: '.myModal', size: 'md'});">Run Code</button>

            </div>
            <div class="col-6 no-padding-t">

                <i class="x-dark margin-5-b block">Open small size modal window.</i>
                <pre class="round margin-5-b">modal.open({<br>    source: '.myModal',<br>    size: 'sm'<br>});</pre>
                <button class="btn btn-sm round ui-dark ease-btn" onclick="modal.open({source: '.myModal', size: 'sm'});">Run Code</button>

            </div>
            <div class="col-6 no-padding-t">

                <i class="x-dark margin-5-b block">Open fullscreen modal window.</i>
                <pre class="round margin-5-b">modal.open({<br>    source: '.myModal',<br>    size: 'fullscreen'<br>});</pre>
                <button class="btn btn-sm round ui-dark ease-btn" onclick="modal.open({source: '.myModal', size: 'fullscreen'});">Run Code</button>

            </div>
            <div class="col-6 no-padding-t">

                <i class="x-dark margin-5-b block">Open inline modal window.</i>
                <pre class="round margin-5-b">modal.open({<br>    source: '.myModal',<br>    size: 'inline-modal'<br>});</pre>
                <button class="btn btn-sm round ui-dark ease-btn" onclick="modal.open({source: '.myModal', size: 'inline-modal'});">Run Code</button>

            </div>
            <div class="col-6 no-padding-t">

                <i class="x-dark margin-5-b block">Open fixed size modal window.</i>
                <pre class="round margin-5-b">modal.open({<br>    source: '.myModal',<br>    size: '560x315'<br>});</pre>
                <button class="btn btn-sm round ui-dark ease-btn" onclick="modal.open({source: '.myModal', size: '560x315'});">Run Code</button>

            </div>

            <div class="col-12">

                <b>Type:</b>
                <i class="x-dark margin-5-b block">Open links with ajax modal.</i>
                <pre class="round margin-5-b">modal.open({<br>    source: 'ajax/ajax-modal.php'<br>    size: 'lg',<br>    type: 'ajax'<br>});</pre>
                <button class="btn btn-sm round ui-dark ease-btn" onclick="modal.open({source: 'ajax/ajax-modal.php', size: 'lg', type: 'ajax'});">Run Code</button>

                <span class="sp15"></span>

                <i class="x-dark margin-5-b block">
                    Open links with iframe modal.<br>
                    Youtube embed link example:
                </i>
                <pre class="round margin-5-b">modal.open({<br>    source: 'https://www.youtube.com/embed/Ct6BUPvE2sM',<br>    size: '640x360',<br>    type: 'iframe'<br>});</pre>
                <button class="btn btn-sm round ui-dark ease-btn" onclick="modal.open({source: 'https://www.youtube.com/embed/Ct6BUPvE2sM', size: '640x360', type: 'iframe'});">Run Code</button>

                <span class="sp15"></span>

                <i class="x-dark margin-5-b block">Google map embed link example:</i>
                <pre class="round margin-5-b">modal.open({<br>    source: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d770809.0860158126!2d28.45174621544522!3d41.003964328513874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1549286679927',<br>    size: 'fullscreen',<br>    type: 'iframe'<br>});</pre>
                <button class="btn btn-sm round ui-dark ease-btn" onclick="modal.open({source: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d770809.0860158126!2d28.45174621544522!3d41.003964328513874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1549286679927', size: 'fullscreen', type: 'iframe'});">Run Code</button>

                <span class="sp15"></span>

                <i class="x-dark margin-5-b block">Google map embed link with header and footer:</i>
                <pre class="round margin-5-b">modal.open({<br>    source: '#myModal02'<br>    size: 'fullscreen'<br>});</pre>
                <button class="btn btn-sm round ui-dark ease-btn" onclick="modal.open({source: '#myModalId02', size: 'fullscreen'});">Run Code</button>

            </div>

            <div class="col-12">

                <b>Bg:</b>
                <i class="x-dark margin-5-b block">Enable/Disable modal window background color.</i>
                <pre class="round margin-5-b">modal.open({<br>    source: '.search',<br>    bg: 'false'<br>});</pre>
                <button class="btn btn-sm round ui-dark ease-btn" onclick="modal.open({source: '.search', bg: 'false'});">Run Code</button>

            </div>

            <div class="col-12">

                <b>Closable:</b>
                <i class="x-dark margin-5-b block">Close modal window with footer buttons.</i>
                <pre class="round margin-5-b">modal.open({<br>    source: '.myModal',<br>    closable: false<br>});</pre>
                <button class="btn btn-sm round ui-dark ease-btn" onclick="modal.open({source: '.myModal', closable: false});">Run Code</button>

            </div>

            <div class="col-12">

                <b>Callback:</b>
                <i class="x-dark margin-5-b block">Callback call after open modal.</i>
                <pre class="round margin-5-b">modal.open({<br>    source: '.myModal',<br>    callback: function () {<br>        alert('Modal opened!');<br>    }<br>});</pre>
                <button class="btn btn-sm round ui-dark ease-btn" onclick="modal.open({source: '.myModal', callback: function () { alert('Modal opened!'); }});">Run Code</button>

            </div>

            <div class="col-12">

                <h4>Close Modal</h4>
                <pre class="round">modal.close(callback);</pre>

                <dl class="dl-horizontal padding-15 round border">
                    <dt>callback</dt>
                    <dd>
                        Optional. Set a callback function after modal closes.<br>
                        Example usage: <code>function () {}</code>
                    </dd>
                </dl>

            </div>

            <div class="col-12 no-padding-b">
                <pre class="round margin-5-b">modal.close();</pre>

                <span class="sp15"></span>

                <pre class="round margin-5-b">modal.close({<br>    function () {<br>        alert('Modal closed!');<br>    }<br>});</pre>

            </div>

        </div>
    </div>
</main>

<!-- modal sources -->
<div id="myModalId01" class="modal myModal theme-default">
    <div class="modal-header ui-dark">
        <h4>Modal Header</h4>
        <div class="modal-buttons">
            <button class="btn circle ui-x-dark ease-btn">Header Button</button>
        </div>
    </div>
    <div class="modal-container large padding-30">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec tincidunt eros. Vivamus a est id dui ultricies congue vel et tellus. Nam ac velit mi. Donec vitae suscipit enim, nec consectetur nisl. Quisque ac posuere lectus. Morbi quam diam, cursus et metus at, lobortis iaculis tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus lectus nibh, non elementum justo facilisis a. Aliquam erat volutpat. Vestibulum auctor et diam eget eleifend. Donec blandit ligula aliquam mi lacinia lacinia. Cras ac bibendum urna. Suspendisse posuere ullamcorper enim, non varius diam mattis vehicula. Donec nec lacinia diam.
        <img class="img-fluid margin-30-v round automargin block shadow-lg" src="img/image_05.jpg" style="max-width: 700px" alt="">
        Pellentesque congue eget elit vitae rutrum. Morbi bibendum dignissim convallis. Etiam lacinia quam et ipsum convallis, a congue metus sagittis. Nunc posuere iaculis nulla, nec rutrum neque condimentum at. Donec nec elementum sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor libero sem, sed bibendum elit viverra vitae.
        <br><br>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec tincidunt eros. Vivamus a est id dui ultricies congue vel et tellus. Nam ac velit mi. Donec vitae suscipit enim, nec consectetur nisl. Quisque ac posuere lectus. Morbi quam diam, cursus et metus at, lobortis iaculis tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus lectus nibh, non elementum justo facilisis a. Aliquam erat volutpat. Vestibulum auctor et diam eget eleifend. Donec blandit ligula aliquam mi lacinia lacinia. Cras ac bibendum urna. Suspendisse posuere ullamcorper enim, non varius diam mattis vehicula. Donec nec lacinia diam.
    </div>
    <div class="modal-footer ease-1st-btn">
        <div class="modal-buttons">
            <button type="button" class="btn btn-ghost border-dual circle" onclick="modal.close(function () { alert('Modal closed!'); });">Callback</button>
            <button type="button" class="btn btn-ghost border-dual circle" onclick="modal.close();">Cancel</button>
            <button type="submit" class="btn circle theme-green ui-dark" onclick="modal.close();">Accept</button>
        </div>
    </div>
</div>

<div id="myModalId02" class="modal">
    <div class="modal-header">
        <h4>Modal Header</h4>
    </div>
    <div class="modal-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d770809.0860158126!2d28.45174621544522!3d41.003964328513874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1549286679927" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="modal-footer ease-1st-btn">
        <div class="modal-buttons">
            <button type="submit" class="btn padding-30-h circle theme-green ui-dark" onclick="modal.close();">Save</button>
        </div>
    </div>
</div>

<!-- modal search -->
<div class="search modal form-lg">
    <div class="modal-container xs-no-padding">

        <form action="#successful">
            <h2>Search</h2>
            <p class="large x-light-ui xs-align-c">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada purus eget enim tempus, sed faucibus ante blandit. Morbi a pharetra sapien.</p>

            <div class="col-static no-fluid">
                <div class="row row-no-gap-h">
                    <div class="col-12 ease-1st-form">
                        <div class="text text-icon has-clear round-l no-border shadow-in-sm theme-gray ui-x-light ease-form">
                            <button type="button" class="clear-form icon icon-remove"></button>
                            <input class="required" type="text" placeholder="Search">
                        </div>
                        <p class="required-msg large">Please, enter a keyword.</p>
                    </div>
                </div>
                <div class="col-100 col-xs-50 padding-10-v">
                    <button class="btn block round-r theme-default2 ui-dark ease-btn" type="submit">
                        <i class="icon icon-lg icon-search"></i>
                    </button>
                </div>
            </div>

            <div class="row xs-fluid block-2nd icons-no-opacity hover-t-more-2nd icons-margin-5-v theme-gray form-lg ease-2nd-btn">
                <div class="col-4 padding-10-b">
                    <a class="btn btn-multi no-line-height round ui-x-light" href="#">
                        <i class="icon icon-xl icon-news theme-default2 ui-text"></i>
                        <span class="block margin-5-v">News</span>
                        <span class="dark">589</span>
                    </a>
                </div>
                <div class="col-4 padding-10-b">
                    <a class="btn btn-multi no-line-height round ui-x-light" href="#">
                        <i class="icon icon-xl icon-calendar-check theme-default2 ui-text"></i>
                        <span class="block margin-5-v">Events</span>
                        <span class="dark">219</span>
                    </a>
                </div>
                <div class="col-4 padding-10-b">
                    <a class="btn btn-multi no-line-height round ui-x-light" href="#">
                        <i class="icon icon-xl icon-files theme-default2 ui-text"></i>
                        <span class="block margin-5-v">Documents</span>
                        <span class="dark">701</span>
                    </a>
                </div>
            </div>
        </form>

    </div>
</div>