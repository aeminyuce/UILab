<main class="container no-gutter">
    <div class="fixed padding-30-v theme-default">
        <div class="row">

            <div class="col-12">

                <h4>Showing Dialogues</h4>
                <pre class="round">ui.alerts.dialog({ msg: '', success: '', error: '', custom: { value: 'button text', value: 'button text' }, callback });</pre>
                <dl class="dl-horizontal padding-15 round border">
                    <dt>msg</dt>
                    <dd class="margin-15-b">
                        Required. Your dialog text.<br>
                        success<br>
                        Optional. Set success button text.<br>
                        Success button returns a value: <code>'success'</code>
                    </dd>

                    <dt>error</dt>
                    <dd class="margin-15-b">
                        Optional. Set error button text.<br>
                        Error button returns a value: <code>'error'</code>
                    </dd>

                    <dt>custom</dt>
                    <dd class="margin-15-b">
                        Optional. Set custom buttons.<br>
                        Custom buttons returns defined own value.<br>
                        Example usage: <code>{value: 'button text', value: 'button text'}</code>
                    </dd>

                    <dt>callback</dt>
                    <dd>
                        Optional. Set a callback function when dialog returns a value.<br>
                        Example usage: <code>function (value) {}</code>
                    </dd>
                </dl>

            </div>
            <div class="col-12">

                <b class="margin-5-b block">Examples:</b>
                <pre class="round margin-5-b">ui.alerts.dialog({<br>    msg: 'Your dialog text'<br>});</pre>
                <button class="btn btn-sm round ui-bg-dark-100 ease-btn" onclick="ui.alerts.dialog({msg: 'Your dialog text'});">Run Code</button>

                <span class="sp-15"></span>

                <pre class="round margin-5-b">ui.alerts.dialog({<br>    msg: 'Your dialog text',<br>    success: 'Got it!'<br>});</pre>
                <button class="btn btn-sm round ui-bg-dark-100 ease-btn" onclick="ui.alerts.dialog({msg: 'Your dialog text', success: 'Got it!'});">Run Code</button>

                <span class="sp-15"></span>

                <pre class="round margin-5-b">ui.alerts.dialog({<br>    msg: 'Your dialog text',<br>    success: 'Got it!',<br>    error: 'No, thanks!'<br>});</pre>
                <button class="btn btn-sm round ui-bg-dark-100 ease-btn" onclick="ui.alerts.dialog({msg: 'Your dialog text', success: 'Got it!', error: 'No, thanks!'});">Run Code</button>

                <span class="sp-15"></span>

                <pre class="round margin-5-b">ui.alerts.dialog({<br>    msg: 'Your dialog text',<br>    success: 'Got it!',<br>    error: 'No, thanks!',<br>    custom: {<br>        maybe: 'Maybe', later: 'Later'<br>    }<br>});</pre>
                <button class="btn btn-sm round ui-bg-dark-100 ease-btn" onclick="ui.alerts.dialog({msg: 'Your dialog text', success: 'Got it!', error: 'No, thanks!', custom: {maybe: 'Maybe', later: 'Later'}});">Run Code</button>
                <span class="sp-15"></span>

                <pre class="round margin-5-b">ui.alerts.dialog({<br>    msg: 'Your dialog text',<br>    success: 'Got it!',<br>    error: 'No, thanks!',<br>    custom: {<br>        maybe: 'Maybe', later: 'Later'<br>    },<br>    callback: function (value) {<br>        alert(value);<br>    }<br>});</pre>
                <button class="btn btn-sm round ui-bg-dark-100 ease-btn" onclick="ui.alerts.dialog({msg: 'Your dialog text', success: 'Got it!', error: 'No, thanks!', custom: {maybe: 'Maybe', later: 'Later'}, callback: function (value) { alert(value); }});">Run Code</button>

                <span class="sp-30"></span>

                <b class="margin-5-b block">Submit form example:</b>
                <pre class="round margin-5-b">return ui.alerts.dialog({<br>    msg: 'Submit this form?',<br>    success: 'Yes',<br>    error: 'No',<br>    callback: function (value) {<br>        if (value === 'success') {<br>            document.getElementById('submitForm').submit();<br>        }<br>    }<br>});</pre>
                <form id="submitForm" action="#succesful" onsubmit="return ui.alerts.dialog({msg: 'Submit this form?', success: 'Yes', error: 'No', callback: function (value) { if (value === 'success') { document.getElementById('submitForm').submit(); } }});">
                    <button type="submit" class="btn round theme-default2 ui-bg-dark-100 ease-btn">Submit Form</button>
                </form>

            </div>

            <div class="col-12">

                <h4>Showing Messages</h4>
                <pre class="round">ui.alerts.message({ msg: '', pos: '', theme: '' });</pre>
                <dl class="dl-horizontal padding-15 round border">
                    <dt>msg</dt>
                    <dd class="margin-15-b">Required. Your alert message.</dd>

                    <dt>pos</dt>
                    <dd class="margin-15-b">
                        Optional. Set message position.<br>
                        Default value: <code>'tr'</code><br>
                        Available values: <code>'tr', 'tl', 'br', 'bl'</code>
                    </dd>

                    <dt>theme</dt>
                    <dd>
                        Optional. Set message theme.<br>
                        Available values: <code>'success', 'warning', 'danger'</code>
                    </dd>
                </dl>

            </div>
            <div class="col-12">
                <b class="no-margin block">Show Positions:</b>
            </div>
            <div class="col-6">

                <pre class="round margin-5-b">ui.alerts.message({<br>    msg: 'Top left message',<br>    pos: 'tl'<br>});</pre>
                <button class="btn btn-sm round ui-bg-dark-100 ease-btn" onclick="ui.alerts.message({msg: 'Top left message', pos: 'tl'});">Run Code</button>

                <span class="sp-15"></span>

                <pre class="round margin-5-b">ui.alerts.message({<br>    msg: 'Bottom left message',<br>    pos: 'bl'<br>});</pre>
                <button class="btn btn-sm round ui-bg-dark-100 ease-btn" onclick="ui.alerts.message({msg: 'Bottom left message', pos: 'bl'});">Run Code</button>

            </div>
            <div class="col-6">

                <pre class="round margin-5-b">ui.alerts.message({<br>    msg: 'Top right message',<br>    pos: 'tr'<br>});</pre>
                <button class="btn btn-sm round ui-bg-dark-100 ease-btn" onclick="ui.alerts.message({msg: 'Top right message', pos: 'tr'});">Run Code</button>

                <span class="sp-15"></span>

                <pre class="round margin-5-b">ui.alerts.message({<br>    msg: 'Bottom right message',<br>    pos: 'br'<br>});</pre>
                <button class="btn btn-sm round ui-bg-dark-100 ease-btn" onclick="ui.alerts.message({msg: 'Bottom right message', pos: 'br'});">Run Code</button>

            </div>
            <div class="col-12">

                <b class="margin-5-b block">Show Default:</b>
                <div class="align-c col-250 padding-10 round shadow-lg bg-black font-color-white hidden-dark">
                    Default message
                </div>
                <div class="align-c col-250 padding-10 round shadow-lg hidden-light" style="background: hsl(220, 14%, 21%);">
                    Default message
                </div>
                <span class="sp-15"></span>

                <pre class="round margin-5-b">ui.alerts.message({<br>    msg: 'Default message'<br>});</pre>
                <button class="btn btn-sm round ui-bg-dark-100 ease-btn" onclick="ui.alerts.message({msg: 'Default message'});">Run Code</button>

                <span class="sp-30"></span>

                <b class="margin-5-b block">Show Success:</b>
                <div class="align-c col-250 padding-10 round shadow-lg theme-green ui-bg-dark-100">
                    Success message
                </div>
                <span class="sp-15"></span>

                <pre class="round margin-5-b">ui.alerts.message({<br>    msg: 'Success message',<br>    theme: 'success'<br>});</pre>
                <button class="btn btn-sm round ui-bg-dark-100 ease-btn" onclick="ui.alerts.message({msg: 'Success message', theme: 'success'});">Run Code</button>

                <span class="sp-30"></span>

                <b class="margin-5-b block">Show Warning:</b>
                <div class="align-c col-250 padding-10 round shadow-lg theme-yellow ui-bg-dark-100">
                    Warning message
                </div>
                <span class="sp-15"></span>

                <pre class="round margin-5-b">ui.alerts.message({<br>    msg:'Warning message',<br>    theme: 'warning'<br>});</pre>
                <button class="btn btn-sm round ui-bg-dark-100 ease-btn" onclick="ui.alerts.message({msg: 'Warning message', theme: 'warning'});">Run Code</button>

                <span class="sp-30"></span>

                <b class="margin-5-b block">Show Danger:</b>
                <div class="align-c col-250 padding-10 round shadow-lg theme-red ui-bg-dark-100">
                    Danger message
                </div>
                <span class="sp-15"></span>

                <pre class="round margin-5-b">ui.alerts.message({<br>    msg: 'Danger message',<br>    theme: 'danger'<br>});</pre>
                <button class="btn btn-sm round ui-bg-dark-100 ease-btn" onclick="ui.alerts.message({msg: 'Danger message', theme: 'danger'});">Run Code</button>

            </div>

        </div>
    </div>
</main>