<main class="ui-container ui-no-gutter loadingPage">
    <div class="ui-fixed ui-padding-30-t">
        <div class="ui-row">
            <div class="ui-col-12">

                <h3 class="ui-h3">Showing/Hiding Loading Masks</h3>
                <div class="ui-padding-30-b ui-theme-base">

                    <pre class="ui-pre ui-round">ui.loadingMask.toggle(id);</pre>
                    <pre class="ui-pre ui-round">ui.loadingMask.toggle(classname);<br><br>- or -<br><br>var variable = ui.find(element);<br>ui.loadingMask.toggle(variable);</pre>

                </div>

                <h3 class="ui-h3">Loading Mask with Buttons</h3>
                <div class="ui-padding-30-b ui-theme-base">

                    <div class="form-lg ui-ease-1st-btn">
                        <button id="loadingBtn" class="ui-btn ui-btn-xs-fluid ui-padding-25-h ui-round ui-theme-sub ui-fill-dark-100 ui-ease-btn">Button</button>
                    </div>

                    <pre class="ui-pre ui-round ui-margin-10-t ui-margin-5-b">ui.loadingMask.toggle('#loadingBtn');</pre>
                    <button class="ui-btn ui-btn-sm ui-round ui-fill-dark-100 ui-ease-btn" onclick="ui.loadingMask.toggle('#loadingBtn');">Run Code</button>

                    <span class="ui-sp-30"></span>

                    <div class="form-lg ui-ease-1st-btn">
                        <a href="#" class="loadingBtn ui-btn ui-btn-xs-fluid ui-padding-25-h ui-round ui-theme-sub ui-fill-dark-100">Link</a>
                        <button class="loadingBtn ui-btn ui-btn-xs-fluid ui-padding-25-h ui-round ui-theme-sub ui-fill-dark-100" onclick="alert('Javascript Alert');">Javascript Alert</button>
                    </div>

                    <pre class="ui-pre ui-round ui-margin-10-t ui-margin-5-b">ui.loadingMask.toggle('.loadingBtn');</pre>
                    <button class="ui-btn ui-btn-sm ui-round ui-fill-dark-100 ui-ease-btn" onclick="ui.loadingMask.toggle('.loadingBtn');">Run Code</button>

                </div>

                <h3 class="ui-h3">Loading Mask with Forms</h3>
                <div class="ui-padding-30-b ui-theme-base">

                    <div class="form-lg">
                        <div class="loadingText1 ui-input ui-border-dual ui-round form-inline ui-ease-form">
                            <input type="text" placeholder="Enter name">
                        </div>
                    </div>
                    <pre class="ui-pre ui-round ui-margin-10-t ui-margin-5-b">ui.loadingMask.toggle('.loadingText1');</pre>
                    <button class="ui-btn ui-btn-sm ui-round ui-fill-dark-100 ui-ease-btn" onclick="ui.loadingMask.toggle('.loadingText1');">Run Code</button>

                    <span class="ui-sp-30"></span>

                    <div class="form-lg">
                        <div class="loadingText2 ui-input text-icon-l ui-margin-10-b ui-round ui-border-dual form-inline ui-ease-form">
                            <svg class="ui-icon"><use href="#search"/></svg>
                            <input type="text" placeholder="Left icon">
                        </div>
                    </div>
                    <pre class="ui-pre ui-round ui-margin-10-t ui-margin-5-b">ui.loadingMask.toggle('.loadingText2');</pre>
                    <button class="ui-btn ui-btn-sm ui-round ui-fill-dark-100 ui-ease-btn" onclick="ui.loadingMask.toggle('.loadingText2');">Run Code</button>

                    <span class="ui-sp-30"></span>

                    <div class="form-lg">
                        <div class="loadingSelect ui-select ui-round ui-border-dual form-inline ui-ease-form">
                            <svg class="ui-icon"><use href="#angle-down"/></svg>
                            <select>
                                <option value="">Select your age</option>
                                <option>Under 20</option>
                                <option>21- 30</option>
                                <option>31 - 40</option>
                            </select>
                        </div>
                    </div>
                    <pre class="ui-pre ui-round ui-margin-10-t ui-margin-5-b">ui.loadingMask.toggle('.loadingSelect');</pre>
                    <button class="ui-btn ui-btn-sm ui-round ui-fill-dark-100 ui-ease-btn" onclick="ui.loadingMask.toggle('.loadingSelect');">Run Code</button>

                    <span class="ui-sp-30"></span>

                    <div class="loadingTextarea ui-textarea ui-round ui-border-dual ui-ease-form">
                        <textarea rows="4" placeholder="Placeholder Example"></textarea>
                    </div>
                    <pre class="ui-pre ui-round ui-margin-10-t ui-margin-5-b">ui.loadingMask.toggle('.loadingTextarea');</pre>
                    <button class="ui-btn ui-btn-sm ui-round ui-fill-dark-100 ui-ease-btn" onclick="ui.loadingMask.toggle('.loadingTextarea');">Run Code</button>

                </div>

                <h3 class="ui-h3">Loading Mask with Whole Page</h4>
                <div class="ui-padding-30-b ui-theme-base">

                    <pre class="ui-pre ui-round ui-margin-10-t ui-margin-5-b">ui.loadingMask.toggle('.loadingPage');</pre>
                    <button class="ui-btn ui-btn-sm ui-round ui-fill-dark-100 ui-ease-btn" onclick="ui.loadingMask.toggle('.loadingPage');">Run Code</button>

                </div>

            </div>
        </div>
    </div>
</main>
