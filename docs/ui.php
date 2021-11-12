<script src="../js/custom/useragents.js?v=<?php echo filemtime('../js/custom/useragents.js'); ?>"></script>

<main class="ui-container ui-no-gutter">
    <div class="ui-fixed">
        <div class="ui-row">
            <div class="ui-col-12 ui-padding-30">

                <div class="ui-card-warning ui-padding-30 ui-round ui-theme-sub ui-fill-light-100 ui-stroke">
                    UI JS is a simple javascript for creating, removing and triggering javascript event listeners and finding HTML elements.
                </div>

                <div class="ui-padding-30-v ui-block-1st ui-theme-base">

                    <b class="ui-margin-5-b">Page load event listener:</b>
                    <pre class="ui-pre ui-round ui-margin-5-b">ui.onload(function)</pre>

                    <span class="ui-sp-30"></span>

                    <b class="ui-margin-5-b">Add event listeners:</b>
                    <pre class="ui-pre ui-round ui-margin-5-b">ui.on(element, event, function);<br>ui.on(element, event event ..., function);</pre>

                    <span class="ui-sp-30"></span>

                    <b class="ui-margin-5-b">Remove event listeners:</b>
                    <pre class="ui-pre ui-round ui-margin-5-b">ui.off(element, event);<br>ui.off(element, event event ...);</pre>

                    <span class="ui-sp-30"></span>

                    <b class="ui-margin-5-b">Add delegate event listeners:</b>
                    <pre class="ui-pre ui-round ui-margin-5-b">ui.on(parentElement, event, element, function);</pre>

                    <span class="ui-sp-30"></span>

                    <b class="ui-margin-5-b">Remove delegated event listeners:</b>
                    <pre class="ui-pre ui-round ui-margin-5-b">ui.off(parentElement, event);</pre>

                    <span class="ui-sp-30"></span>

                    <b class="ui-margin-5-b">Event naming:</b>
                    <pre class="ui-pre ui-round ui-margin-5-b">ui.on(element, event.eventname, function);<br>ui.on(element, event.eventname event.eventname ..., function);<br>ui.on(document, event.eventname, function);</pre>

                    <span class="ui-sp-30"></span>

                    <b class="ui-margin-5-b">Trigger event listeners:</b>
                    <pre class="ui-pre ui-round ui-margin-5-b">ui.trigger(element, event);<br>ui.trigger(element, event event ...);</pre>

                    <span class="ui-sp-30"></span>

                    <b class="ui-margin-5-b">Check classname:</b>
                    <pre class="ui-pre ui-round ui-margin-5-b">ui.hasClass(element, '.class');<br>ui.hasClass(element, '.class .class ...');</pre>

                    <span class="ui-sp-30"></span>

                    <b class="ui-margin-5-b">Add classname:</b>
                    <pre class="ui-pre ui-round ui-margin-5-b">ui.addClass(element, '.class');<br>ui.addClass(element, '.class .class ...');</pre>

                    <span class="ui-sp-30"></span>

                    <b class="ui-margin-5-b">Remove classname:</b>
                    <pre class="ui-pre ui-round ui-margin-5-b">ui.removeClass(element, '.class');<br>ui.removeClass(element, '.class .class ...');</pre>

                    <span class="ui-sp-30"></span>

                    <b class="ui-margin-5-b">Toggle classname:</b>
                    <pre class="ui-pre ui-round ui-margin-5-b">ui.toggleClass(element, '.class');<br>ui.toggleClass(element, '.class .class ...');</pre>

                    <span class="ui-sp-30"></span>

                    <b class="ui-margin-5-b">Show element:</b>
                    <pre class="ui-pre ui-round ui-margin-5-b">ui.show(element);</pre>

                    <span class="ui-sp-30"></span>

                    <b class="ui-margin-5-b">Hide element:</b>
                    <pre class="ui-pre ui-round ui-margin-5-b">ui.hide(element);</pre>

                    <span class="ui-sp-30"></span>

                    <b class="ui-margin-5-b">.each() Run for each matched element:</b>
                    <pre class="ui-pre ui-round ui-margin-5-b">ui.each(element, function);</pre>

                    <span class="ui-sp-30"></span>

                    <b class="ui-margin-5-b">.closest() Returns the first ancestor:</b>
                    <pre class="ui-pre ui-round ui-margin-5-b">ui.closest(element, parentElement);</pre>

                    <span class="ui-sp-30"></span>

                    <b class="ui-margin-5-b ui-block">ui.find() is a simple javascript finder to find HTML elements:</b>
                    <pre class="ui-pre ui-round ui-margin-5-b">ui.find('element');</pre>

                    <span class="ui-sp-30"></span>

                    <b class="ui-margin-5-b ui-block">Find multiple elements:</b>
                    <pre class="ui-pre ui-round ui-margin-5-b">ui.find('element, element');</pre>

                    <span class="ui-sp-30"></span>

                    <b class="ui-margin-5-b ui-block">Find first of elements:</b>
                    <pre class="ui-pre ui-round ui-margin-5-b">ui.find('element')[0];</pre>

                    <span class="ui-sp-30"></span>

                    <b class="ui-margin-5-b ui-block">Find CSS3 last-child of elements:</b>
                    <pre class="ui-pre ui-round ui-margin-5-b">ui.find(':last-child');</pre>

                    <span class="ui-sp-30"></span>

                    <b class="ui-margin-5-b ui-block">Find classname:</b>
                    <pre class="ui-pre ui-round ui-margin-5-b">ui.find('.class');</pre>

                    <span class="ui-sp-30"></span>
                    <b class="ui-margin-5-b ui-block">Find ID:</b>
                    <pre class="ui-pre ui-round ui-margin-5-b">ui.find('#id');</pre>

                    <span class="ui-sp-30"></span>

                    <b class="ui-margin-5-b ui-block">Find with attribute:</b>
                    <pre class="ui-pre ui-round ui-margin-5-b">ui.find('[attribute]');</pre>

                    <span class="ui-sp-30"></span>

                    <b class="ui-margin-5-b ui-block">Find document:</b>
                    <pre class="ui-pre ui-round ui-margin-5-b">ui.find(document);</pre>

                    <span class="ui-sp-30"></span>

                    <b class="ui-margin-5-b ui-block">Find window:</b>
                    <pre class="ui-pre ui-round ui-margin-5-b">ui.find(window);</pre>

                    <span class="ui-sp-30"></span>

                    <b class="ui-margin-5-b ui-block">Find this element:</b>
                    <pre class="ui-pre ui-round ui-margin-5-b">ui.find(this);</pre>

                    <span class="ui-sp-30"></span>

                    <b class="ui-margin-5-b ui-block">Find an element in this element:</b>
                    <pre class="ui-pre ui-round ui-margin-5-b">ui.find('element', this);</pre>

                    <span class="ui-sp-30"></span>

                    <b class="ui-margin-5-b ui-block">Find classname in parent classname:</b>
                    <pre class="ui-pre ui-round ui-margin-5-b">ui.find('.class', '.parentClass');</pre>

                    <span class="ui-sp-30"></span>

                    <b class="ui-margin-5-b ui-block">Find ID in selected classname:</b>
                    <pre class="ui-pre ui-round ui-margin-5-b">ui.find('#id', '.class');</pre>

                    <span class="ui-sp-30"></span>

                    <b class="ui-margin-5-b ui-block">ui.ajax() is a simple javascript to making XHR requests:</b>
                    <pre class="ui-pre ui-round ui-scroll-v">ui.ajax({

    type : 'GET',
    url : 'yourfile.php',
    data: 'name=value&name=value',

    callback: function (status, response) {

        var target = ui.find('.ajaxTarget');
        if (target.length > 0) {

            if (status === 'success') {
                target[0].innerHTML = response;
            }

        }

    }

});

// JSON Example:
var myJSONRequests = [];

ui.ajax({

    type : 'GET',
    url : 'yourfile.php',
    cache: false,
    data: 'name=value&name=value',

    beforesend: function (xhr) {

        // abort still processing previous json requests (optional)
        for (n = 0; n &lt; myJSONRequests.length; n += 1) {

            myJSONRequests[n].abort();
            myJSONRequests.splice(n, 1);

        }

        myJSONRequests.push(xhr);

    },
    callback: function (status, response, xhr) {

        var i, n, target;

        target = ui.find('.ajaxTarget');
        if (target.length > 0) {

            if (status === 'success') {

                response = JSON.parse(response);
                if (response.length !== 'undefined') {

                    for (i = 0; i &lt; response.length; i += 1) {
                        if (response[i] !== null) {
                            console.log(response[i].yourJSONvalue);
                        }
                    }

                }

            }

        }

    }

});</pre>

                    <span class="ui-sp-15"></span>

                    <b class="ui-margin-5-b ui-block">ui.userAgents() is a simple javascript for detecting browsers, devices and operating systems.</b>
                    <span class="ui-margin-5-b ui-block">Adding classnames to the html element, dynamically:</span>
                    <pre class="ui-pre ui-round results"></pre>

                    <span class="ui-sp-15"></span>

                    <span class="ui-margin-5-b ui-block">Global variables:</span>
                    <pre class="ui-pre ui-round variables"></pre>

                </div>

            </div>
        </div>
    </div>
</main>