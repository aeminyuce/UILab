<main class="container no-gutter loadingPage">
    <div class="fixed padding-30-t">
        <div class="row">
            <div class="col-12">

                <h4>Showing/Hiding Loading Masks</h4>
                <div class="padding-30-b theme-default">

                    <pre class="round">loadingMask.toggle(id);</pre>
                    <pre class="round">loadingMask.toggle(classname);<br><br>- or -<br><br>var variable = selector(element);<br>loadingMask.toggle(variable);</pre>

                </div>

                <h4>Loading Mask with Buttons</h4>
                <div class="padding-30-b theme-default">

                    <div class="form-lg ease-1st-btn">
                        <button id="loadingBtn" class="btn btn-xs-fluid padding-25-h round theme-default2 ui-dark ease-btn">Button</button>
                    </div>

                    <pre class="round margin-10-t margin-5-b">loadingMask.toggle('#loadingBtn');</pre>
                    <button class="btn btn-sm round ui-dark ease-btn" onclick="loadingMask.toggle('#loadingBtn');">Run Code</button>

                    <span class="sp-30"></span>

                    <div class="form-lg ease-1st-btn">
                        <a href="#" class="loadingBtn btn btn-xs-fluid padding-25-h round theme-default2 ui-dark">Link</a>
                        <button class="loadingBtn btn btn-xs-fluid padding-25-h round theme-default2 ui-dark" onclick="alert('Javascript Alert');">Javascript Alert</button>
                    </div>

                    <pre class="round margin-10-t margin-5-b">loadingMask.toggle('.loadingBtn');</pre>
                    <button class="btn btn-sm round ui-dark ease-btn" onclick="loadingMask.toggle('.loadingBtn');">Run Code</button>

                </div>

                <h4>Loading Mask with Forms</h4>
                <div class="padding-30-b theme-default">

                    <div class="form-lg">
                        <div class="loadingText1 text border-dual round form-inline ease-form">
                            <input type="text" placeholder="Enter name">
                        </div>
                    </div>
                    <pre class="round margin-10-t margin-5-b">loadingMask.toggle('.loadingText1');</pre>
                    <button class="btn btn-sm round ui-dark ease-btn" onclick="loadingMask.toggle('.loadingText1');">Run Code</button>

                    <span class="sp-30"></span>

                    <div class="form-lg">
                        <div class="loadingText2 text text-icon-l margin-10-b round border-dual form-inline ease-form">
                            <svg class="icon"><use href="#search"/></svg>
                            <input type="text" placeholder="Left icon">
                        </div>
                    </div>
                    <pre class="round margin-10-t margin-5-b">loadingMask.toggle('.loadingText2');</pre>
                    <button class="btn btn-sm round ui-dark ease-btn" onclick="loadingMask.toggle('.loadingText2');">Run Code</button>

                    <span class="sp-30"></span>

                    <div class="form-lg">
                        <div class="loadingSelect select round border-dual form-inline ease-form">
                            <svg class="icon"><use href="#angle-down"/></svg>
                            <select>
                                <option value="">Select your age</option>
                                <option>Under 20</option>
                                <option>21- 30</option>
                                <option>31 - 40</option>
                            </select>
                        </div>
                    </div>
                    <pre class="round margin-10-t margin-5-b">loadingMask.toggle('.loadingSelect');</pre>
                    <button class="btn btn-sm round ui-dark ease-btn" onclick="loadingMask.toggle('.loadingSelect');">Run Code</button>

                    <span class="sp-30"></span>

                    <div class="loadingTextarea textarea round border-dual ease-form">
                        <textarea rows="4" placeholder="Placeholder Text"></textarea>
                    </div>
                    <pre class="round margin-10-t margin-5-b">loadingMask.toggle('.loadingTextarea');</pre>
                    <button class="btn btn-sm round ui-dark ease-btn" onclick="loadingMask.toggle('.loadingTextarea');">Run Code</button>

                </div>

                <h4>Loading Mask with Whole Page</h4>
                <div class="padding-30-b theme-default">

                    <pre class="round margin-10-t margin-5-b">loadingMask.toggle('.loadingPage');</pre>
                    <button class="btn btn-sm round ui-dark ease-btn" onclick="loadingMask.toggle('.loadingPage');">Run Code</button>

                </div>

            </div>
        </div>
    </div>
</main>
