<main class="ui-container ui-no-gutter">
    <div class="ui-fixed ui-p-30-v ui-theme-base">
        <div class="ui-row">

            <div class="ui-col-12">

                <h3 class="ui-h3">Showing Dialogues</h3>
                <pre class="ui-pre ui-round">ui.alerts.dialog({ msg: '', success: '', error: '', custom: { value: 'button text', value: 'button text' }, callback });</pre>

                <div class="ui-p-15 ui-round ui-border">
                    <dl class="ui-row ui-xs-fluid">
                        <dt class="ui-col-4">msg</dt>
                        <dd class="ui-col-8">
                            Required. Your dialog example..<br>
                            success<br>
                            Optional. Set success button text.<br>
                            Success button returns a value: <code class="ui-code">'success'</code>
                        </dd>

                        <dt class="ui-col-4">error</dt>
                        <dd class="ui-col-8">
                            Optional. Set error button text.<br>
                            Error button returns a value: <code class="ui-code">'error'</code>
                        </dd>

                        <dt class="ui-col-4">custom</dt>
                        <dd class="ui-col-8">
                            Optional. Set custom buttons.<br>
                            Custom buttons returns defined own value.<br>
                            Example usage: <code class="ui-code">{value: 'button text', value: 'button text'}</code>
                        </dd>

                        <dt class="ui-col-4">callback</dt>
                        <dd class="ui-col-8">
                            Optional. Set a callback function when dialog returns a value.<br>
                            Example usage: <code class="ui-code">function (value) {}</code>
                        </dd>
                    </dl>
                </div>

            </div>
            <div class="ui-col-12 ui-p-30-b">

                <b class="ui-m-5-b ui-block">Examples:</b>
                <pre class="ui-pre ui-round ui-m-5-b">ui.alerts.dialog({<br>    msg: 'Your dialog example.'<br>});</pre>
                <button class="ui-btn ui-btn-sm ui-round ui-fill-dark-100 ui-ease-btn" onclick="ui.alerts.dialog({msg: 'Your dialog example.'});">Run Code</button>

                <span class="ui-sp-15"></span>

                <pre class="ui-pre ui-round ui-m-5-b">ui.alerts.dialog({<br>    msg: 'Your dialog example.',<br>    success: 'Got it!'<br>});</pre>
                <button class="ui-btn ui-btn-sm ui-round ui-fill-dark-100 ui-ease-btn" onclick="ui.alerts.dialog({msg: 'Your dialog example.', success: 'Got it!'});">Run Code</button>

                <span class="ui-sp-15"></span>

                <pre class="ui-pre ui-round ui-m-5-b">ui.alerts.dialog({<br>    msg: 'Your dialog example.',<br>    success: 'Got it!',<br>    error: 'No, thanks!'<br>});</pre>
                <button class="ui-btn ui-btn-sm ui-round ui-fill-dark-100 ui-ease-btn" onclick="ui.alerts.dialog({msg: 'Your dialog example.', success: 'Got it!', error: 'No, thanks!'});">Run Code</button>

                <span class="ui-sp-15"></span>

                <pre class="ui-pre ui-round ui-m-5-b">ui.alerts.dialog({<br>    msg: 'Your dialog example.',<br>    success: 'Got it!',<br>    error: 'No, thanks!',<br>    custom: {<br>        maybe: 'Maybe', later: 'Later'<br>    }<br>});</pre>
                <button class="ui-btn ui-btn-sm ui-round ui-fill-dark-100 ui-ease-btn" onclick="ui.alerts.dialog({msg: 'Your dialog example.', success: 'Got it!', error: 'No, thanks!', custom: {maybe: 'Maybe', later: 'Later'}});">Run Code</button>
                <span class="ui-sp-15"></span>

                <pre class="ui-pre ui-round ui-m-5-b">ui.alerts.dialog({<br>    msg: 'Your dialog example.',<br>    success: 'Got it!',<br>    error: 'No, thanks!',<br>    custom: {<br>        maybe: 'Maybe', later: 'Later'<br>    },<br>    callback: function (value) {<br>        alert(value);<br>    }<br>});</pre>
                <button class="ui-btn ui-btn-sm ui-round ui-fill-dark-100 ui-ease-btn" onclick="ui.alerts.dialog({msg: 'Your dialog example.', success: 'Got it!', error: 'No, thanks!', custom: {maybe: 'Maybe', later: 'Later'}, callback: function (value) { alert(value); }});">Run Code</button>

                <span class="ui-sp-30"></span>

                <b class="ui-m-5-b ui-block">Submit form example:</b>
                <pre class="ui-pre ui-round ui-m-5-b">return ui.alerts.dialog({<br>    msg: 'Submit this form?',<br>    success: 'Yes',<br>    error: 'No',<br>    callback: function (value) {<br>        if (value === 'success') {<br>            document.getElementById('exampleForm').submit();<br>        }<br>    }<br>});</pre>
                <form id="exampleForm" action="#succesful" onsubmit="return ui.alerts.dialog({msg: 'Submit this form?', success: 'Yes', error: 'No', callback: function (value) { if (value === 'success') { document.getElementById('exampleForm').submit(); } }});">
                    <button type="submit" class="ui-btn ui-round ui-theme-sub ui-fill-dark-100 ui-ease-btn">Submit Form</button>
                </form>

            </div>
            <div class="ui-col-12">

                <h3 class="ui-h3">Showing Messages</h3>
                <pre class="ui-pre ui-round">ui.alerts.message({ msg: '', pos: '', theme: '' });</pre>

                <div class="ui-p-15 ui-round ui-border">
                    <dl class="ui-row ui-xs-fluid">
                        <dt class="ui-col-4">msg</dt>
                        <dd class="ui-col-8">Required. Your alert message.</dd>

                        <dt class="ui-col-4">pos</dt>
                        <dd class="ui-col-8">
                            Optional. Set message position.<br>
                            Default value: <code class="ui-code">'tr'</code><br>
                            Available values: <code class="ui-code">'tr', 'tl', 'br', 'bl'</code>
                        </dd>

                        <dt class="ui-col-4">theme</dt>
                        <dd class="ui-col-8">
                            Optional. Set message theme.<br>
                            Available values: <code class="ui-code">'success', 'warning', 'danger'</code>
                        </dd>
                    </dl>
                </div>

            </div>
            <div class="ui-col-12 ui-no-p-b">
                <b>Show Positions:</b>
            </div>
            <div class="ui-col-6">

                <pre class="ui-pre ui-round ui-m-5-b">ui.alerts.message({<br>    msg: 'Top left message',<br>    pos: 'tl'<br>});</pre>
                <button class="ui-btn ui-btn-sm ui-round ui-fill-dark-100 ui-ease-btn" onclick="ui.alerts.message({msg: 'Top left message', pos: 'tl'});">Run Code</button>

                <span class="ui-sp-15"></span>

                <pre class="ui-pre ui-round ui-m-5-b">ui.alerts.message({<br>    msg: 'Bottom left message',<br>    pos: 'bl'<br>});</pre>
                <button class="ui-btn ui-btn-sm ui-round ui-fill-dark-100 ui-ease-btn" onclick="ui.alerts.message({msg: 'Bottom left message', pos: 'bl'});">Run Code</button>

            </div>
            <div class="ui-col-6">

                <pre class="ui-pre ui-round ui-m-5-b">ui.alerts.message({<br>    msg: 'Top right message',<br>    pos: 'tr'<br>});</pre>
                <button class="ui-btn ui-btn-sm ui-round ui-fill-dark-100 ui-ease-btn" onclick="ui.alerts.message({msg: 'Top right message', pos: 'tr'});">Run Code</button>

                <span class="ui-sp-15"></span>

                <pre class="ui-pre ui-round ui-m-5-b">ui.alerts.message({<br>    msg: 'Bottom right message',<br>    pos: 'br'<br>});</pre>
                <button class="ui-btn ui-btn-sm ui-round ui-fill-dark-100 ui-ease-btn" onclick="ui.alerts.message({msg: 'Bottom right message', pos: 'br'});">Run Code</button>

            </div>
            <div class="ui-col-12">

                <b class="ui-m-5-b ui-block">Show Default:</b>
                <div class="ui-color-white ui-align-c ui-col-250 ui-p-10 ui-round ui-shadow-lg" style="background: hsl(220, 12%, 4%);">
                    Default message
                </div>
                <span class="ui-sp-15"></span>

                <pre class="ui-pre ui-round ui-m-5-b">ui.alerts.message({<br>    msg: 'Default message'<br>});</pre>
                <button class="ui-btn ui-btn-sm ui-round ui-fill-dark-100 ui-ease-btn" onclick="ui.alerts.message({msg: 'Default message'});">Run Code</button>

                <span class="ui-sp-30"></span>

                <b class="ui-m-5-b ui-block">Show Success:</b>
                <div class="ui-align-c ui-col-250 ui-p-10 ui-round ui-shadow-lg ui-theme-green ui-fill-dark-100">
                    Success message
                </div>
                <span class="ui-sp-15"></span>

                <pre class="ui-pre ui-round ui-m-5-b">ui.alerts.message({<br>    msg: 'Success message',<br>    theme: 'success'<br>});</pre>
                <button class="ui-btn ui-btn-sm ui-round ui-fill-dark-100 ui-ease-btn" onclick="ui.alerts.message({msg: 'Success message', theme: 'success'});">Run Code</button>

                <span class="ui-sp-30"></span>

                <b class="ui-m-5-b ui-block">Show Warning:</b>
                <div class="ui-align-c ui-col-250 ui-p-10 ui-round ui-shadow-lg ui-theme-yellow ui-fill-dark-100">
                    Warning message
                </div>
                <span class="ui-sp-15"></span>

                <pre class="ui-pre ui-round ui-m-5-b">ui.alerts.message({<br>    msg:'Warning message',<br>    theme: 'warning'<br>});</pre>
                <button class="ui-btn ui-btn-sm ui-round ui-fill-dark-100 ui-ease-btn" onclick="ui.alerts.message({msg: 'Warning message', theme: 'warning'});">Run Code</button>

                <span class="ui-sp-30"></span>

                <b class="ui-m-5-b ui-block">Show Danger:</b>
                <div class="ui-align-c ui-col-250 ui-p-10 ui-round ui-shadow-lg ui-theme-red ui-fill-dark-100">
                    Danger message
                </div>
                <span class="ui-sp-15"></span>

                <pre class="ui-pre ui-round ui-m-5-b">ui.alerts.message({<br>    msg: 'Danger message',<br>    theme: 'danger'<br>});</pre>
                <button class="ui-btn ui-btn-sm ui-round ui-fill-dark-100 ui-ease-btn" onclick="ui.alerts.message({msg: 'Danger message', theme: 'danger'});">Run Code</button>

            </div>

        </div>
    </div>
</main>