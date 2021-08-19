<main class="container no-gutter">
    <div class="fixed">
        <div class="row">
            <div class="col-12 padding-30">

                <div class="card-warning padding-30 round theme-default2 ui-bg-light-100 ui-border">
                    Events JS requires Selector JS.<br>
                    Events JS is a simple javascript for creating, removing and triggering javascript event listeners.
                </div>

                <div class="padding-30-v block-1st theme-default">

                    <b class="margin-5-b">Page load event:</b>
                    <pre class="round margin-5-b">events.onload(function)</pre>

                    <span class="sp-30"></span>

                    <b class="margin-5-b">Add events:</b>
                    <pre class="round margin-5-b">events.on(element, event, function);<br>events.on(element, event event ..., function);</pre>

                    <span class="sp-30"></span>

                    <b class="margin-5-b">Remove events:</b>
                    <pre class="round margin-5-b">events.off(element, event);<br>events.off(element, event event ...);</pre>

                    <span class="sp-30"></span>

                    <b class="margin-5-b">Add delegate events:</b>
                    <pre class="round margin-5-b">events.on(parentElement, event, element, function);</pre>

                    <span class="sp-30"></span>

                    <b class="margin-5-b">Remove delegated events:</b>
                    <pre class="round margin-5-b">events.off(parentElement, event);</pre>

                    <span class="sp-30"></span>

                    <b class="margin-5-b">Event naming:</b>
                    <pre class="round margin-5-b">events.on(element, event.eventname, function);<br>events.on(element, event.eventname event.eventname ..., function);<br>events.on(document, event.eventname, function);</pre>

                    <span class="sp-30"></span>

                    <b class="margin-5-b">Trigger events:</b>
                    <pre class="round margin-5-b">events.trigger(element, event);<br>events.trigger(element, event event ...);</pre>

                    <span class="sp-30"></span>

                    <b class="margin-5-b">Check classname:</b>
                    <pre class="round margin-5-b">events.hasClass(element, '.class');<br>events.hasClass(element, '.class .class ...');</pre>

                    <span class="sp-30"></span>

                    <b class="margin-5-b">Add classname:</b>
                    <pre class="round margin-5-b">events.addClass(element, '.class');<br>events.addClass(element, '.class .class ...');</pre>

                    <span class="sp-30"></span>

                    <b class="margin-5-b">Remove classname:</b>
                    <pre class="round margin-5-b">events.removeClass(element, '.class');<br>events.removeClass(element, '.class .class ...');</pre>

                    <span class="sp-30"></span>

                    <b class="margin-5-b">Toggle classname:</b>
                    <pre class="round margin-5-b">events.toggleClass(element, '.class');<br>events.toggleClass(element, '.class .class ...');</pre>

                    <span class="sp-30"></span>

                    <b class="margin-5-b">Show element:</b>
                    <pre class="round margin-5-b">events.show(element);</pre>

                    <span class="sp-30"></span>

                    <b class="margin-5-b">Hide element:</b>
                    <pre class="round margin-5-b">events.hide(element);</pre>

                    <span class="sp-30"></span>

                    <b class="margin-5-b">.each() Run for each matched element:</b>
                    <pre class="round margin-5-b">events.each(element, function);</pre>

                    <span class="sp-30"></span>

                    <b class="margin-5-b">.closest() Returns the first ancestor:</b>
                    <pre class="round margin-5-b">events.closest(element, parentElement);</pre>

                </div>

            </div>
        </div>
    </div>
</main>