<main class="ui-container ui-no-gutter">
    <div class="ui-fixed">
        <div class="ui-row">
            <div class="ui-col-12 ui-p-30">

                <h3 class="ui-h3">Forms in Grid System</h3>
                <div class="ui-row ui-p-30-b">
                    <div class="ui-col-3">
                        <label class="ui-form-info">Label</label>
                    </div>
                    <div class="ui-col-9">
                        <div class="ui-input ui-round ui-border-dual ui-ease-form">
                            <input type="text" value="123456">
                        </div>
                        <p class="ui-form-hint ui-color-black-25">Form hint</p>
                    </div>

                    <div class="ui-col-3">
                        <label class="ui-form-info">Label</label>
                    </div>
                    <div class="ui-col-9">
                        <div class="ui-input ui-form-disabled ui-round ui-border-dual ui-ease-form">
                            <input type="text" disabled value="Disabled Input">
                        </div>
                    </div>

                    <div class="ui-col-3">
                        <label class="ui-form-info">Label</label>
                    </div>
                    <div class="ui-col-9">
                        <div class="ui-textarea ui-form-disabled ui-round ui-border-dual ui-ease-form">
                            <textarea disabled>Disabled Textarea</textarea>
                        </div>
                    </div>

                    <div class="ui-col-3">
                        <label class="ui-form-info">Label</label>
                    </div>
                    <div class="ui-col-9">
                        <div class="ui-input ui-form-readonly ui-round ui-border-dual ui-ease-form">
                            <input type="text" readonly value="Readonly Input">
                        </div>
                    </div>

                    <div class="ui-col-3">
                        <label class="ui-form-info">Label</label>
                    </div>
                    <div class="ui-col-9">
                        <div class="ui-textarea ui-form-readonly ui-round ui-border-dual ui-ease-form">
                            <textarea readonly>Readonly Textarea</textarea>
                        </div>
                    </div>

                    <div class="ui-col-3">
                        <label class="ui-form-info">Error Form</label>
                    </div>
                    <div class="ui-col-9">
                        <div class="ui-input ui-round ui-border-dual ui-ease-form ui-form-error">
                            <input type="text" value="123456">
                        </div>
                        <p class="ui-form-hint ui-form-error">Your message is here.</p>
                    </div>

                    <div class="ui-col-3">
                        <label class="ui-form-info">Warning Form</label>
                    </div>
                    <div class="ui-col-9">
                        <div class="ui-input ui-round ui-border-dual ui-ease-form ui-form-warning">
                            <input type="text" value="123456">
                        </div>
                        <p class="ui-form-hint ui-form-warning">Your message is here.</p>
                    </div>
                    <div class="ui-col-3">
                        <label class="ui-form-info">Captcha</label>
                    </div>
                    <div class="ui-col-9">
                        <div class="ui-form-holder ui-col-static ui-no-fluid">

                            <div class="ui-col-100">
                                <img class="ui-border-dual ui-round ui-ease-border"
                                    src="img/captcha.jpg"
                                    width="100"
                                    height="42"
                                    alt=""
                                >
                            </div>
                            <div class="ui-col-42">
                                <button class="ui-btn ui-btn-square ui-btn-ghost ui-border-dual ui-ease-btn">
                                    <!-- for loading toggle "ui-animate-spin" -->
                                    <svg class="ui-icon ui-no-opacity ui-animate-spin"><use href="#sync"/></svg>
                                </button>
                            </div>
                            <div class="ui-row ui-no-row-gap">
                                <div class="ui-col-12">
                                    <div class="ui-input ui-border-dual ui-round ui-ease-form">
                                        <input type="text" maxlength="4" placeholder="Please enter code">
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="ui-col-6">
                        <label class="ui-form-label">Full Name</label>
                        <div class="ui-input ui-border-dual ui-round ui-ease-form">
                            <input type="text" placeholder="Enter name">
                        </div>
                    </div>
                    <div class="ui-col-6">
                        <label class="ui-form-label">Your Age</label>
                        <div class="ui-select ui-round ui-border-dual ui-ease-form">
                            <svg class="ui-icon"><use href="#angle-down"/></svg>
                            <select>
                                <option value="">Select your age</option>
                                <option>Under 20</option>
                                <option>21- 30</option>
                                <option>31 - 40</option>
                            </select>
                        </div>
                    </div>
                </div>

                <h3 class="ui-h3">Large Forms</h3>
                <div class="ui-form-lg ui-p-30-b">
                    <div class="ui-row">
                        <div class="ui-col-3">
                            <label class="ui-form-info">Full Name</label>
                        </div>
                        <div class="ui-col-9">
                            <div class="ui-input ui-border-dual ui-round ui-ease-form">
                                <input type="text" placeholder="Enter name">
                            </div>
                            <p class="ui-form-hint ui-color-black-25">Form hint</p>
                        </div>
                        <div class="ui-col-3">
                            <label class="ui-form-info">Your Age</label>
                        </div>
                        <div class="ui-col-9">
                            <div class="ui-select ui-round ui-border-dual ui-ease-form">
                                <svg class="ui-icon"><use href="#angle-down"/></svg>
                                <select>
                                    <option value="">Select your age</option>
                                    <option>Under 20</option>
                                    <option>21- 30</option>
                                    <option>31 - 40</option>
                                </select>
                            </div>
                            <p class="ui-form-hint ui-color-black-25">Form hint</p>
                        </div>
                        <div class="ui-col-3">
                            <label class="ui-form-info">Captcha</label>
                        </div>
                        <div class="ui-col-9">
                            <div class="ui-form-holder ui-col-static ui-no-fluid">

                                <div class="ui-col-100">
                                    <img class="ui-border-dual ui-round ui-ease-border"
                                        src="img/captcha.jpg"
                                        width="100"
                                        height="48"
                                        alt=""
                                    >
                                </div>
                                <div class="ui-col-48">
                                    <button class="ui-btn ui-btn-square ui-btn-ghost ui-border-dual ui-ease-btn">
                                        <!-- for loading toggle "ui-animate-spin" -->
                                        <svg class="ui-icon ui-no-opacity ui-animate-spin"><use href="#sync" /></svg>
                                    </button>
                                </div>
                                <div class="ui-row ui-no-row-gap">
                                    <div class="ui-col-12">
                                        <div class="ui-input ui-border-dual ui-round ui-ease-form">
                                            <input type="text" maxlength="4" placeholder="Please enter code">
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="ui-col-9 ui-offset-3">
                            <button type="reset" class="ui-btn ui-btn-xs-fluid ui-round ui-ease-btn">Reset Form</button>
                        </div>
                        <div class="ui-col-6">
                            <label class="ui-form-label">Full Name</label>
                            <div class="ui-input ui-border-dual ui-round ui-ease-form">
                                <input type="text" placeholder="Enter name">
                            </div>
                        </div>
                        <div class="ui-col-6">
                            <label class="ui-form-label">Your Age</label>
                            <div class="ui-select ui-round ui-border-dual ui-ease-form">
                                <svg class="ui-icon"><use href="#angle-down"/></svg>
                                <select>
                                    <option value="">Select your age</option>
                                    <option>Under 20</option>
                                    <option>21- 30</option>
                                    <option>31 - 40</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <h3 class="ui-h3">Autocomplete Forms</h3>
                <form action="#succesful">
                    <div class="ui-row ui-p-30-b">

                        <div class="ui-col-12">
                            <div data-ui-src="json/countries.json" data-ui-val="code" class="ui-autocomplete ui-input ui-form-icon ui-round ui-border-dual ui-ease-form ui-form-inline-xs">
                                <svg class="ui-icon"><use href="#keyboard-fill"/></svg>
                                <input type="text" placeholder="Country Code" autocomplete="off">
                            </div>
                            <div data-ui-src="json/countries.json" data-ui-val="name" class="ui-autocomplete ui-input ui-form-icon ui-round ui-border-dual ui-ease-form ui-form-inline-xs">
                                <svg class="ui-icon"><use href="#keyboard-fill"/></svg>
                                <input type="text" placeholder="Country" autocomplete="off">
                            </div>
                        </div>

                        <div class="ui-col-12 ui-ease-1st-btn">
                            <button type="reset" class="ui-btn ui-btn-xs-fluid ui-round">Reset Form</button>
                            <button type="submit" class="ui-btn ui-btn-xs-fluid ui-round ui-theme-sub ui-fill-dark-100">Submit Form</button>
                        </div>

                    </div>
                </form>


                <h3 class="ui-h3">Select Forms</h3>
                <div class="ui-p-30-b">
                    <div class="ui-row">
                        <div class="ui-col-6">
                            <div class="ui-select ui-round ui-border-dual ui-ease-form">
                                <svg class="ui-icon"><use href="#angle-down"/></svg>
                                <select>
                                    <option value="">Select</option>
                                    <option>Value 1</option>
                                    <option>Value 2</option>
                                </select>
                            </div>
                        </div>
                        <div class="ui-col-6">
                            <div class="ui-select ui-round ui-border-dual ui-ease-form">
                                <svg class="ui-icon"><use href="#angle-down"/></svg>
                                <select>
                                    <optgroup label="Title">
                                        <option value="">Select with groups</option>
                                        <option>Value 1</option>
                                        <option>Value 2</option>
                                    </optgroup>
                                    <optgroup label="Title">
                                        <option>Value 3</option>
                                        <option>Value 4</option>
                                        <option>Value 5</option>
                                    </optgroup>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="ui-select-multi ui-m-10-b ui-round ui-border-dual ui-ease-form">
                        <select multiple size="6">
                            <option value="">Value 1</option>
                            <option>Value 2</option>
                            <option>Value 3</option>
                            <option>Value 4</option>
                            <option>Value 5</option>
                            <option>Value 6</option>
                            <option>Value 7</option>
                            <option>Value 8</option>
                            <option>Value 9</option>
                            <option>Value 10</option>
                        </select>
                    </div>
                    <div class="ui-select-multi ui-m-10-b ui-round ui-border-dual ui-ease-form">
                        <select multiple size="6">
                            <optgroup label="Title">
                                <option value="">Select</option>
                                <option>Value 1</option>
                                <option>Value 2</option>
                            </optgroup>
                            <optgroup label="Title">
                                <option>Value 3</option>
                                <option>Value 4</option>
                                <option>Value 5</option>
                            </optgroup>
                        </select>
                    </div>
                </div>

                <h3 class="ui-h3">Dual Multi Selects</h3>
                <div class="ui-p-30-b">

                    <form action="#succesful">

                        <div class="ui-row">

                            <div class="ui-dual-multi-select ui-col-static">
                                <div class="ui-row">
                                    <div class="ui-col-12">
                                        <div class="ui-select-multi ui-round ui-border-dual ui-ease-form">
                                            <select style="height: 156px;" multiple size="6" name="a">
                                                <option value="1" data-ui-index="3">Value 1</option>
                                                <option value="2">Value 2</option>
                                                <option value="3">Value 3</option>
                                                <option value="4" data-ui-index="1">Value 4</option>
                                                <option value="5">Value 5</option>
                                                <option value="6">Value 6</option>
                                                <option value="7">Value 7</option>
                                                <option value="8">Value 8</option>
                                                <option value="9" data-ui-index="2">Value 9</option>
                                                <option value="10">Value 10</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="ui-col-50 ui-color-black-25 ui-align-c ui-icons-lg ui-set-relative">
                                    <div class="ui-set-absolute ui-set-all ui-hidden-md">
                                        <div class="ui-set-absolute ui-set-c ui-p-20-h">
                                            <svg class="ui-icon"><use href="#exchange-h"/></svg>
                                        </div>
                                    </div>
                                    <svg class="ui-icon ui-visible-md"><use href="#exchange-v"/></svg>
                                </div>
                                <div class="ui-row">
                                    <div class="ui-col-12">
                                        <div class="ui-select-multi ui-round ui-border-dual ui-ease-form">
                                            <select style="height: 156px;" multiple size="6"></select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <span class="ui-sp-30"></span>

                            <div class="ui-dual-multi-select ui-col-static">
                                <div class="ui-row">
                                    <div class="ui-col-12">
                                        <div class="ui-select-multi ui-round ui-border-dual ui-ease-form">
                                            <select style="height: 156px;" multiple size="6" name="b">
                                                <option value="1" data-ui-index="3" selected>Value 1</option>
                                                <option value="2">Value 2</option>
                                                <option value="3">Value 3</option>
                                                <option value="4" data-ui-index="1" selected>Value 4</option>
                                                <option value="5">Value 5</option>
                                                <option value="6">Value 6</option>
                                                <option value="7">Value 7</option>
                                                <option value="8">Value 8</option>
                                                <option value="9" data-ui-index="2" selected>Value 9</option>
                                                <option value="10">Value 10</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="ui-col-50 ui-color-black-25 ui-align-c ui-icons-lg ui-set-relative">
                                    <div class="ui-set-absolute ui-set-all ui-hidden-md">
                                        <div class="ui-set-absolute ui-set-c ui-p-20-h">
                                            <svg class="ui-icon"><use href="#exchange-h"/></svg>
                                        </div>
                                    </div>
                                    <svg class="ui-icon ui-visible-md"><use href="#exchange-v"/></svg>
                                </div>
                                <div class="ui-row">
                                    <div class="ui-col-12">
                                        <div class="ui-select-multi ui-round ui-border-dual ui-ease-form">
                                            <select style="height: 156px;" multiple size="6"></select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <span class="ui-sp-30"></span>

                            <div class="ui-dual-multi-select ui-col-static">
                                <div class="ui-row">
                                    <div class="ui-col-12">
                                        <div class="ui-select-multi ui-round ui-border-dual ui-ease-form">
                                            <select style="height: 156px;" multiple size="6" name="c">
                                                <option value="1" selected>Value 1</option>
                                                <option value="2">Value 2</option>
                                                <option value="3">Value 3</option>
                                                <option value="4" selected>Value 4</option>
                                                <option value="5">Value 5</option>
                                                <option value="6">Value 6</option>
                                                <option value="7">Value 7</option>
                                                <option value="8">Value 8</option>
                                                <option value="9" selected>Value 9</option>
                                                <option value="10">Value 10</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="ui-col-50 ui-color-black-25 ui-align-c ui-icons-lg ui-set-relative">
                                    <div class="ui-set-absolute ui-set-all ui-hidden-md">
                                        <div class="ui-set-absolute ui-set-c ui-p-20-h">
                                            <svg class="ui-icon"><use href="#exchange-h"/></svg>
                                        </div>
                                    </div>
                                    <svg class="ui-icon ui-visible-md"><use href="#exchange-v"/></svg>
                                </div>
                                <div class="ui-row">
                                    <div class="ui-col-12">
                                        <div class="ui-select-multi ui-round ui-border-dual ui-ease-form">
                                            <select style="height: 156px;" multiple size="6"></select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="ui-col-12 ui-ease-1st-btn">
                                <button type="reset" class="ui-btn ui-btn-xs-fluid ui-round">Reset Form</button>
                                <button type="submit" class="ui-btn ui-btn-xs-fluid ui-round ui-theme-sub ui-fill-dark-100">Submit Form</button>
                            </div>
                        </div>

                    </form>

                </div>

                <h3 class="ui-h3">Textarea Forms</h3>
                <div class="ui-p-30-b">
                    <div class="ui-textarea ui-m-10-b ui-round ui-border-dual ui-ease-form">
                        <textarea placeholder="Placeholder Example"></textarea>
                    </div>
                    <div class="ui-textarea ui-toggle-textarea ui-m-10-b ui-round ui-border-dual ui-ease-form">
                        <textarea placeholder="Toggle textarea example"></textarea>
                    </div>
                    <div class="ui-textarea ui-round ui-border-dual ui-ease-form" data-ui-counter="255">
                        <textarea rows="4">Textarea with counter.</textarea>
                    </div>
                </div>

                <h3 class="ui-h3">File Input</h3>
                <div class="ui-p-30-b ui-theme-gray">
                    <div class="ui-file ui-round ui-no-border ui-fill-light-100 ui-ease-form">
                        <input type="file">
                        <span class="ui-btn ui-ease-btn">Browse</span>
                        <i>Choose file.</i>
                    </div>

                    <span class="ui-sp-10"></span>

                    <div class="ui-file ui-round ui-ease-form">
                        <input type="file">
                        <span class="ui-btn ui-ease-btn">Browse</span>
                        <i>Choose file.</i>
                    </div>

                    <span class="ui-sp-10"></span>

                    <div class="ui-file ui-round ui-border-dual ui-ease-form">
                        <input type="file">
                        <span class="ui-btn ui-ease-btn">Browse</span>
                        <i>Choose file.</i>
                    </div>

                    <span class="ui-sp-10"></span>

                    <label class="ui-form-label ui-p-10-b">File Input with Large Forms</label>
                    <div class="ui-form-lg ui-ease-1st-form">
                        <div class="ui-file ui-round ui-no-border ui-fill-light-100">
                            <input type="file">
                            <span class="ui-btn ui-ease-btn">Browse</span>
                            <i>Choose file.</i>
                        </div>

                        <span class="ui-sp-10"></span>

                        <div class="ui-file ui-round">
                            <input type="file">
                            <span class="ui-btn ui-ease-btn">Browse</span>
                            <i>Choose file.</i>
                        </div>

                        <span class="ui-sp-10"></span>

                        <div class="ui-file ui-round ui-border-dual">
                            <input type="file">
                            <span class="ui-btn ui-ease-btn">Browse</span>
                            <i>Choose file.</i>
                        </div>
                    </div>

                    <span class="ui-sp-10"></span>

                    <label class="ui-form-label ui-p-10-b">File Input Like Buttons</label>
                    <div>
                        <div class="ui-file ui-no-border ui-inline-block ui-round ui-ease-form">
                            <input class="ui-cursor-pointer" type="file">
                            <span class="ui-btn ui-btn-square ui-ease-btn">
                                <svg class="ui-icon"><use href="#plus"/></svg>
                            </span>
                        </div>
                        <div class="ui-file ui-inline-block ui-round ui-ease-form">
                            <input class="ui-cursor-pointer" type="file">
                            <span class="ui-btn ui-btn-square ui-ease-btn">
                                <svg class="ui-icon"><use href="#plus"/></svg>
                            </span>
                        </div>
                        <div class="ui-file ui-border-dual ui-inline-block ui-round ui-ease-form">
                            <input class="ui-cursor-pointer" type="file">
                            <span class="ui-btn ui-btn-square ui-ease-btn">
                                <svg class="ui-icon"><use href="#plus"/></svg>
                            </span>
                        </div>
                        <div class="ui-file ui-no-border ui-inline-block ui-round ui-ease-form">
                            <input class="ui-bg-white ui-cursor-pointer" type="file">
                            <span class="ui-btn ui-btn-square ui-theme-base ui-fill-dark-100 ui-ease-btn">
                                <svg class="ui-icon"><use href="#plus"/></svg>
                            </span>
                        </div>
                        <div class="ui-file ui-no-border ui-inline-block ui-round ui-ease-form">
                            <input class="ui-bg-white ui-cursor-pointer" type="file">
                            <span class="ui-btn ui-btn-square ui-theme-green ui-fill-dark-100 ui-ease-btn">
                                <svg class="ui-icon"><use href="#plus"/></svg>
                            </span>
                        </div>
                    </div>

                    <span class="ui-sp-10"></span>

                    <div class="ui-form-lg">
                        <div class="ui-file ui-no-border ui-inline-block ui-round ui-ease-form">
                            <input class="ui-cursor-pointer" type="file">
                            <span class="ui-btn ui-btn-square ui-ease-btn">
                                <svg class="ui-icon"><use href="#plus"/></svg>
                            </span>
                        </div>
                        <div class="ui-file ui-inline-block ui-round ui-ease-form">
                            <input class="ui-cursor-pointer" type="file">
                            <span class="ui-btn ui-btn-square ui-ease-btn">
                                <svg class="ui-icon"><use href="#plus"/></svg>
                            </span>
                        </div>
                        <div class="ui-file ui-border-dual ui-inline-block ui-round ui-ease-form">
                            <input class="ui-cursor-pointer" type="file">
                            <span class="ui-btn ui-btn-square ui-ease-btn">
                                <svg class="ui-icon"><use href="#plus"/></svg>
                            </span>
                        </div>
                        <div class="ui-file ui-no-border ui-inline-block ui-round ui-ease-form">
                            <input class="ui-bg-white ui-cursor-pointer" type="file">
                            <span class="ui-btn ui-btn-square ui-theme-base ui-fill-dark-100 ui-ease-btn">
                                <svg class="ui-icon"><use href="#plus"/></svg>
                            </span>
                        </div>
                        <div class="ui-file ui-no-border ui-inline-block ui-round ui-ease-form">
                            <input class="ui-bg-white ui-cursor-pointer" type="file">
                            <span class="ui-btn ui-btn-square ui-theme-green ui-fill-dark-100 ui-ease-btn">
                                <svg class="ui-icon"><use href="#plus"/></svg>
                            </span>
                        </div>
                    </div>
                </div>

                <h3 class="ui-h3">Checkboxes and Radios</h3>
                <div class="ui-p-30-b">
                    <ul class="ui-list-inline ui-list-gap">
                        <li>
                            <label class="ui-label">
                                <span class="ui-check ui-round ui-border-dual ui-ease-form">
                                    <input type="checkbox" checked>
                                    <i class="ui-form-state"></i>
                                </span>
                                Checkbox
                            </label>
                        </li>
                        <li>
                            <label class="ui-label">
                                <div class="ui-check ui-round ui-border-dual ui-ease-form">
                                    <input type="checkbox" class="ui-indeterminate">
                                    <i class="ui-form-state"></i>
                                </div>
                                Indeterminate
                            </label>
                        </li>
                    </ul>

                    <ul class="ui-list-inline ui-list-gap">
                        <li>
                            <label class="ui-label">
                                <span class="ui-radio ui-border-dual ui-ease-form">
                                    <input type="radio" name="radiotest2" checked>
                                    <i class="ui-form-state"></i>
                                </span>
                                Radio1
                            </label>
                        </li>
                        <li>
                            <label class="ui-label">
                                <span class="ui-radio ui-border-dual ui-ease-form">
                                    <input type="radio" name="radiotest2">
                                    <i class="ui-form-state"></i>
                                </span>
                                Radio2
                            </label>
                        </li>
                        <li>
                            <label class="ui-label">
                                <span class="ui-radio ui-border-dual ui-ease-form">
                                    <input type="radio" name="radiotest2">
                                    <i class="ui-form-state"></i>
                                </span>
                                Radio3
                            </label>
                        </li>
                    </ul>

                    <span class="ui-sp-15"></span>

                    <ul class="ui-list-inline ui-list-gap">
                        <li>
                            <label class="ui-label">
                                <span class="ui-switch ui-round ui-border-dual ui-ease-form">
                                    <input type="checkbox" checked>
                                    <i class="ui-form-state"></i>
                                </span>
                                Switch
                            </label>
                        </li>
                        <li>
                            <label class="ui-label">
                                <span class="ui-switch ui-round ui-border-dual ui-ease-form">
                                        <input type="checkbox" checked>
                                        <i class="ui-form-state ui-theme-sub ui-fill-dark-100"></i>
                                </span>
                                Switch with Themes
                            </label>
                        </li>
                        <li>
                            <label class="ui-label">
                                <span class="ui-switch ui-round ui-border-dual ui-ease-form">
                                        <input type="checkbox" checked>
                                        <i class="ui-form-state ui-theme-base ui-fill-dark-100"></i>
                                </span>
                                Switch with Themes
                            </label>
                        </li>
                        <li>
                            <label class="ui-label">
                                <span class="ui-switch ui-round ui-border-dual ui-ease-form">
                                        <input type="checkbox" class="ui-indeterminate">
                                        <i class="ui-form-state"></i>
                                </span>
                                Indeterminate Switch
                            </label>
                        </li>
                    </ul>
                </div>

                <h3 class="ui-h3">Range Forms</h3>
                <div class="ui-p-30-b">
                    <input class="ui-range ui-ease-range" type="range" min="0" max="10" value="0">
                    <span class="ui-sp-10"></span>
                    <input class="ui-range ui-theme-base ui-text ui-ease-range" type="range" min="0" max="10" value="2">
                    <span class="ui-sp-10"></span>
                    <input class="ui-range ui-theme-sub ui-text ui-ease-range" type="range" min="0" max="10" value="4">
                    <span class="ui-sp-10"></span>
                    <input class="ui-range ui-theme-yellow ui-text ui-ease-range" type="range" min="0" max="10" value="6">
                    <span class="ui-sp-10"></span>
                    <input class="ui-range ui-theme-orange ui-text ui-ease-range" type="range" min="0" max="10" value="8">
                    <span class="ui-sp-10"></span>
                    <input class="ui-range ui-theme-red ui-text ui-ease-range" type="range" min="0" max="10" value="10">
                    <span class="ui-sp-10"></span>
                    <input class="ui-range ui-ease-range" disabled type="range" min="0" max="10" value="5">
                </div>

                <h3 class="ui-h3">Inline Forms</h3>
                <div class="ui-p-30-b">
                    <div class="ui-input ui-m-10-b ui-round ui-border-dual ui-form-inline ui-ease-form">
                        <input type="text">
                    </div>
                    <div class="ui-select ui-m-10-b ui-round ui-border-dual ui-form-inline ui-ease-form">
                        <svg class="ui-icon"><use href="#angle-down"/></svg>
                        <select>
                            <option value="">Select</option>
                            <option>First</option>
                            <option>Second</option>
                        </select>
                    </div>
                    <div class="ui-textarea ui-toggle-textarea ui-m-10-b ui-round ui-border-dual ui-form-inline ui-ease-form">
                        <textarea placeholder="ui-textarea"></textarea>
                    </div>

                    <span class="ui-sp-15"></span>

                    <h5 class="ui-h5 ui-color-black-25">Responsive Inline Forms</h5>
                    <div class="ui-input ui-m-10-b ui-round ui-border-dual ui-form-inline-xs ui-ease-form">
                        <input type="text">
                    </div>
                    <div class="ui-select ui-m-10-b ui-round ui-border-dual ui-form-inline-xs ui-ease-form">
                        <svg class="ui-icon"><use href="#angle-down"/></svg>
                        <select>
                            <option value="">Select</option>
                            <option>First</option>
                            <option>Second</option>
                        </select>
                    </div>
                    <div class="ui-textarea ui-toggle-textarea ui-m-10-b ui-round ui-border-dual ui-form-inline-xs ui-ease-form">
                        <textarea placeholder="ui-textarea"></textarea>
                    </div>
                </div>

                <h3 class="ui-h3">Form Icons</h3>
                <div class="ui-p-30-b">
                    <div class="ui-input ui-form-icon-l ui-m-10-b ui-round ui-border-dual ui-ease-form">
                        <svg class="ui-icon"><use href="#search"/></svg>
                        <input type="text" placeholder="Left icon">
                    </div>
                    <div class="ui-input ui-form-icon ui-m-10-b ui-round ui-border-dual ui-ease-form">
                        <svg class="ui-icon"><use href="#keyboard-fill"/></svg>
                        <input type="text" placeholder="Right icon">
                    </div>
                    <div class="ui-input ui-form-icon-all ui-round ui-border-dual ui-ease-form">
                        <svg class="ui-icon ui-form-icon-l"><use href="#search"/></svg>
                        <svg class="ui-icon"><use href="#keyboard-fill"/></svg>
                        <input type="text" placeholder="Left and right icons">
                    </div>

                    <span class="ui-sp-30"></span>

                    <label class="ui-form-label ui-p-10-b">Form Icons with Large Forms</label>
                    <div class="ui-form-lg">
                        <div class="ui-input ui-form-icon-l ui-m-10-b ui-round ui-border-dual ui-ease-form">
                            <svg class="ui-icon"><use href="#search"/></svg>
                            <input type="text" placeholder="Left icon">
                        </div>
                        <div class="ui-input ui-form-icon ui-m-10-b ui-round ui-border-dual ui-ease-form">
                            <svg class="ui-icon"><use href="#keyboard-fill"/></svg>
                            <input type="text" placeholder="Right icon">
                        </div>
                        <div class="ui-input ui-form-icon-all ui-round ui-border-dual ui-ease-form">
                            <svg class="ui-icon ui-form-icon-l"><use href="#search"/></svg>
                            <svg class="ui-icon"><use href="#keyboard-fill"/></svg>
                            <input type="text" placeholder="Left and right icons">
                        </div>
                    </div>
                </div>

                <h3 class="ui-h3">Clear with Form Icons</h3>
                <div class="ui-p-30-b">
                    <form action="#succesful">
                        <div class="ui-input ui-form-icon ui-m-10-b ui-round ui-border-dual ui-form-has-clear ui-ease-form">
                            <button type="button" class="ui-form-clear">
                                <svg class="ui-icon"><use href="#remove"/></svg>
                            </button>
                            <input type="text" value="Defined value example">
                        </div>
                        <div class="ui-input ui-form-icon ui-m-10-b ui-round ui-border-dual ui-form-has-clear ui-ease-form">
                            <button type="button" class="ui-form-clear">
                                <svg class="ui-icon"><use href="#remove"/></svg>
                            </button>
                            <input type="text">
                        </div>
                        <label class="ui-form-label ui-p-10-b">Clear with Large Forms</label>
                        <div class="ui-form-lg ui-m-10-b ui-ease-1st-form">
                            <div class="ui-input ui-form-icon ui-round ui-border-dual ui-form-has-clear">
                                <button type="button" class="ui-form-clear">
                                    <svg class="ui-icon"><use href="#remove"/></svg>
                                </button>
                                <input type="text">
                            </div>
                        </div>
                        <button type="reset" class="ui-btn ui-btn-xs-fluid ui-round ui-ease-btn">Reset Form</button>
                    </form>
                </div>

                <h3 class="ui-h3">Submit with Form Icons</h3>
                <div class="ui-p-30-b">
                    <form action="#succesful">
                        <div class="ui-input ui-form-icon ui-round ui-border-dual ui-ease-form">
                            <button type="submit">
                                <svg class="ui-icon"><use href="#search"/></svg>
                            </button>
                            <input type="text" placeholder="Submit with ui-icon or press enter key">
                        </div>
                    </form>
                </div>

                <h3 class="ui-h3">Forms with Actions</h3>
                <div class="ui-p-30-b">
                    <div class="ui-row ui-row-gap-sm-v ui-no-fluid">
                        <div class="ui-col-6">
                            <label class="ui-form-label">Label</label>
                        </div>
                        <div class="ui-col-6 ui-align-r">
                            <a class="ui-font-12 ui-color-black-25 ui-font-underline" href="#">Top Right Link</a>
                        </div>
                    </div>
                    <div class="ui-input ui-m-10-b ui-round ui-border-dual ui-ease-form">
                        <input type="text">
                    </div>

                    <div class="ui-row ui-row-gap-sm-v ui-no-fluid">
                        <div class="ui-col-6">
                            <label class="ui-form-label">Label</label>
                        </div>
                        <div class="ui-col-6 ui-align-r">
                            <a class="ui-btn ui-btn-xs ui-color-black-25 ui-round ui-ease-btn">Button</a>
                        </div>
                    </div>
                    <div class="ui-input ui-m-10-b ui-round ui-border-dual ui-ease-form">
                        <input type="text">
                    </div>

                    <div class="ui-row ui-row-gap-sm-v ui-no-fluid">
                        <div class="ui-col-6">
                            <label class="ui-form-label">Label</label>
                        </div>
                        <div class="ui-col-6 ui-align-r">
                            <div class="ui-dropdown ui-menu-l ui-ease-dropdown">
                                <button class="ui-btn ui-btn-xs ui-btn-ghost ui-color-black-25 ui-round">
                                    Dropdown Button
                                    <svg class="ui-toggle-icon ui-icon ui-m-3-l"><use href="#angle-down"/></svg>
                                </button>
                                <ul class="ui-dropdown-menu ui-round ui-shadow-lg">
                                    <li><a href="#">Dropdown Link</a></li>
                                    <li><a href="#">Dropdown Link</a></li>
                                    <li><a href="#">Dropdown Link</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="ui-input ui-round ui-border-dual ui-ease-form">
                        <input type="text">
                    </div>
                </div>

                <h3 class="ui-h3">Form Holders</h3>
                <div class="ui-row ui-p-30-b">
                    <div class="ui-col-12">
                        <label class="ui-form-label">Form Holder with Grid System</label>
                        <span class="ui-sp-10"></span>
                        <div class="ui-form-holder ui-row ui-no-row-gap ui-m-10-b">

                            <div class="ui-col-5 ui-col-xs-4">
                                <div class="ui-input ui-round ui-ease-form">
                                    <input type="text">
                                </div>
                            </div>
                            <div class="ui-col-2 ui-col-xs-4">
                                <div class="ui-select ui-round ui-ease-form">
                                    <svg class="ui-icon"><use href="#angle-down"/></svg>
                                    <select>
                                        <option value="">Select</option>
                                        <option>First</option>
                                        <option>Second</option>
                                    </select>
                                </div>
                            </div>
                            <div class="ui-col-5 ui-col-xs-4">
                                <div class="ui-input ui-round ui-ease-form">
                                    <input type="text">
                                </div>
                            </div>

                        </div>
                        <div class="ui-form-holder ui-row ui-no-row-gap ui-m-10-b">

                            <div class="ui-col-5 ui-col-xs-4">
                                <div class="ui-input ui-round ui-border-dual ui-ease-form">
                                    <input type="text">
                                </div>
                            </div>
                            <div class="ui-col-2 ui-col-xs-4">
                                <div class="ui-select ui-round ui-border-dual ui-ease-form">
                                    <svg class="ui-icon"><use href="#angle-down"/></svg>
                                    <select>
                                        <option value="">Select</option>
                                        <option>First</option>
                                        <option>Second</option>
                                    </select>
                                </div>
                            </div>
                            <div class="ui-col-5 ui-col-xs-4">
                                <div class="ui-input ui-round ui-border-dual ui-ease-form">
                                    <input type="text">
                                </div>
                            </div>

                        </div>
                        <div class="ui-form-holder ui-row ui-no-row-gap ui-m-10-b">

                            <div class="ui-col-5 ui-col-xs-4">
                                <div class="ui-input ui-circle ui-ease-form">
                                    <input type="text">
                                </div>
                            </div>
                            <div class="ui-col-2 ui-col-xs-4">
                                <div class="ui-select ui-circle ui-ease-form">
                                    <svg class="ui-icon"><use href="#angle-down"/></svg>
                                    <select>
                                        <option value="">Select</option>
                                        <option>First</option>
                                        <option>Second</option>
                                    </select>
                                </div>
                            </div>
                            <div class="ui-col-5 ui-col-xs-4">
                                <div class="ui-input ui-circle ui-ease-form">
                                    <input type="text">
                                </div>
                            </div>

                        </div>
                        <div class="ui-form-holder ui-row ui-no-row-gap ui-m-10-b">

                            <div class="ui-col-5 ui-col-xs-4">
                                <div class="ui-input ui-circle ui-border-dual ui-ease-form">
                                    <input type="text">
                                </div>
                            </div>
                            <div class="ui-col-2 ui-col-xs-4">
                                <div class="ui-select ui-circle ui-border-dual ui-ease-form">
                                    <svg class="ui-icon"><use href="#angle-down"/></svg>
                                    <select>
                                        <option value="">Select</option>
                                        <option>First</option>
                                        <option>Second</option>
                                    </select>
                                </div>
                            </div>
                            <div class="ui-col-5 ui-col-xs-4">
                                <div class="ui-input ui-circle ui-border-dual ui-ease-form">
                                    <input type="text">
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="ui-col-12">
                        <label class="ui-form-label ui-p-10-b">Form Holder with Large Forms</label>
                        <div class="ui-form-holder ui-form-lg ui-row ui-no-row-gap ui-m-10-b">

                            <div class="ui-col-5 ui-col-xs-4">
                                <div class="ui-input ui-round ui-ease-form">
                                    <input type="text">
                                </div>
                            </div>
                            <div class="ui-col-2 ui-col-xs-4">
                                <div class="ui-select ui-round ui-ease-form">
                                    <svg class="ui-icon"><use href="#angle-down"/></svg>
                                    <select>
                                        <option value="">Select</option>
                                        <option>First</option>
                                        <option>Second</option>
                                    </select>
                                </div>
                            </div>
                            <div class="ui-col-5 ui-col-xs-4">
                                <div class="ui-input ui-round ui-ease-form">
                                    <input type="text">
                                </div>
                            </div>

                        </div>
                        <div class="ui-form-holder ui-form-lg ui-row ui-no-row-gap ui-m-10-b">

                            <div class="ui-col-5 ui-col-xs-4">
                                <div class="ui-input ui-round ui-border-dual ui-ease-form">
                                    <input type="text">
                                </div>
                            </div>
                            <div class="ui-col-2 ui-col-xs-4">
                                <div class="ui-select ui-round ui-border-dual ui-ease-form">
                                    <svg class="ui-icon"><use href="#angle-down"/></svg>
                                    <select>
                                        <option value="">Select</option>
                                        <option>First</option>
                                        <option>Second</option>
                                    </select>
                                </div>
                            </div>
                            <div class="ui-col-5 ui-col-xs-4">
                                <div class="ui-input ui-round ui-border-dual ui-ease-form">
                                    <input type="text">
                                </div>
                            </div>

                        </div>
                        <div class="ui-form-holder ui-form-lg ui-row ui-no-row-gap ui-m-10-b">

                            <div class="ui-col-5 ui-col-xs-4">
                                <div class="ui-input ui-circle ui-ease-form">
                                    <input type="text">
                                </div>
                            </div>
                            <div class="ui-col-2 ui-col-xs-4">
                                <div class="ui-select ui-circle ui-ease-form">
                                    <svg class="ui-icon"><use href="#angle-down"/></svg>
                                    <select>
                                        <option value="">Select</option>
                                        <option>First</option>
                                        <option>Second</option>
                                    </select>
                                </div>
                            </div>
                            <div class="ui-col-5 ui-col-xs-4">
                                <div class="ui-input ui-circle ui-ease-form">
                                    <input type="text">
                                </div>
                            </div>

                        </div>
                        <div class="ui-form-holder ui-form-lg ui-row ui-no-row-gap ui-m-10-b">

                            <div class="ui-col-5 ui-col-xs-4">
                                <div class="ui-input ui-circle ui-border-dual ui-ease-form">
                                    <input type="text">
                                </div>
                            </div>
                            <div class="ui-col-2 ui-col-xs-4">
                                <div class="ui-select ui-circle ui-border-dual ui-ease-form">
                                    <svg class="ui-icon"><use href="#angle-down"/></svg>
                                    <select>
                                        <option value="">Select</option>
                                        <option>First</option>
                                        <option>Second</option>
                                    </select>
                                </div>
                            </div>
                            <div class="ui-col-5 ui-col-xs-4">
                                <div class="ui-input ui-circle ui-border-dual ui-ease-form">
                                    <input type="text">
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="ui-col-12 ui-no-p-v">
                        <label class="ui-form-label">Form Holders with Static Grid</label>
                    </div>
                    <div class="ui-col-6">
                        <div class="ui-form-holder ui-col-static ui-no-fluid">

                            <div class="ui-col-100">
                                <div class="ui-select ui-round ui-ease-form">
                                    <svg class="ui-icon"><use href="#angle-down"/></svg>
                                    <select>
                                        <option value="">Select</option>
                                        <option>First</option>
                                        <option>Second</option>
                                    </select>
                                </div>
                            </div>
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-6">
                                    <div class="ui-input ui-round ui-ease-form">
                                        <input type="text">
                                    </div>
                                </div>
                                <div class="ui-col-6">
                                    <div class="ui-input ui-round ui-ease-form">
                                        <input type="text">
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="ui-col-6">
                        <div class="ui-form-holder ui-col-static ui-no-fluid">

                            <div class="ui-row ui-no-row-gap">
                                <div class="ui-col-12">
                                    <div class="ui-input ui-round ui-ease-form">
                                        <input type="text">
                                    </div>
                                </div>
                            </div>
                            <div class="ui-col-100">
                                <div class="ui-select ui-round ui-ease-form">
                                    <svg class="ui-icon"><use href="#angle-down"/></svg>
                                    <select>
                                        <option value="">Select</option>
                                        <option>First</option>
                                        <option>Second</option>
                                    </select>
                                </div>
                            </div>
                            <div class="ui-row ui-no-row-gap">
                                <div class="ui-col-12">
                                    <div class="ui-input ui-round ui-ease-form">
                                        <input type="text">
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="ui-col-6">
                        <div class="ui-form-holder ui-col-static ui-no-fluid">

                            <div class="ui-col-100">
                                <div class="ui-select ui-round ui-ease-form">
                                    <svg class="ui-icon"><use href="#angle-down"/></svg>
                                    <select>
                                        <option value="">Select</option>
                                        <option>First</option>
                                        <option>Second</option>
                                    </select>
                                </div>
                            </div>
                            <div class="ui-row ui-no-row-gap">
                                <div class="ui-col-12">
                                    <div class="ui-input ui-round ui-ease-form">
                                        <input type="text">
                                    </div>
                                </div>
                            </div>
                            <div class="ui-col-100">
                                <div class="ui-select ui-round ui-ease-form">
                                    <svg class="ui-icon"><use href="#angle-down"/></svg>
                                    <select>
                                        <option value="">Select</option>
                                        <option>First</option>
                                        <option>Second</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="ui-col-6">
                        <div class="ui-form-holder ui-col-static ui-no-fluid">

                            <div class="ui-col-100">
                                <div class="ui-select ui-round ui-border-dual ui-ease-form">
                                    <svg class="ui-icon"><use href="#angle-down"/></svg>
                                    <select>
                                        <option value="">Select</option>
                                        <option>First</option>
                                        <option>Second</option>
                                    </select>
                                </div>
                            </div>
                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-6">
                                    <div class="ui-input ui-round ui-border-dual ui-ease-form">
                                        <input type="text">
                                    </div>
                                </div>
                                <div class="ui-col-6">
                                    <div class="ui-input ui-round ui-border-dual ui-ease-form">
                                        <input type="text">
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="ui-col-6">
                        <div class="ui-form-holder ui-col-static ui-no-fluid">

                            <div class="ui-row ui-no-row-gap">
                                <div class="ui-col-12">
                                    <div class="ui-input ui-round ui-border-dual ui-ease-form">
                                        <input type="text">
                                    </div>
                                </div>
                            </div>
                            <div class="ui-col-100">
                                <div class="ui-select ui-round ui-border-dual ui-ease-form">
                                    <svg class="ui-icon"><use href="#angle-down"/></svg>
                                    <select>
                                        <option value="">Select</option>
                                        <option>First</option>
                                        <option>Second</option>
                                    </select>
                                </div>
                            </div>
                            <div class="ui-row ui-no-row-gap">
                                <div class="ui-col-12">
                                    <div class="ui-input ui-round ui-border-dual ui-ease-form">
                                        <input type="text">
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="ui-col-6">
                        <div class="ui-form-holder ui-col-static ui-no-fluid">

                            <div class="ui-row ui-no-row-gap ui-no-fluid">
                                <div class="ui-col-6">
                                    <div class="ui-input ui-circle ui-border-dual ui-ease-form">
                                        <input type="text">
                                    </div>
                                </div>
                                <div class="ui-col-6">
                                    <div class="ui-input ui-circle ui-border-dual ui-ease-form">
                                        <input type="text">
                                    </div>
                                </div>
                            </div>
                            <div class="ui-col-100">
                                <div class="ui-select ui-circle ui-border-dual ui-ease-form">
                                    <svg class="ui-icon"><use href="#angle-down"/></svg>
                                    <select>
                                        <option value="">Select</option>
                                        <option>First</option>
                                        <option>Second</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="ui-col-6">
                        <div class="ui-form-holder ui-col-static ui-no-fluid">

                            <div class="ui-row ui-no-row-gap">
                                <div class="ui-col-12">
                                    <div class="ui-input ui-circle ui-border-dual ui-ease-form">
                                        <input type="text">
                                    </div>
                                </div>
                            </div>
                            <div class="ui-col-100">
                                <div class="ui-select ui-circle ui-border-dual ui-ease-form">
                                    <svg class="ui-icon"><use href="#angle-down"/></svg>
                                    <select>
                                        <option value="">Select</option>
                                        <option>First</option>
                                        <option>Second</option>
                                    </select>
                                </div>
                            </div>
                            <div class="ui-col-100">
                                <div class="ui-select ui-circle ui-border-dual ui-ease-form">
                                    <svg class="ui-icon"><use href="#angle-down"/></svg>
                                    <select>
                                        <option value="">Select</option>
                                        <option>First</option>
                                        <option>Second</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="ui-col-6">
                        <div class="ui-form-holder ui-col-static ui-no-fluid">

                            <div class="ui-col-100">
                                <div class="ui-select ui-circle ui-border-dual ui-ease-form">
                                    <svg class="ui-icon"><use href="#angle-down"/></svg>
                                    <select>
                                        <option value="">Select</option>
                                        <option>First</option>
                                        <option>Second</option>
                                    </select>
                                </div>
                            </div>
                            <div class="ui-row ui-no-row-gap">
                                <div class="ui-col-12">
                                    <div class="ui-input ui-circle ui-border-dual ui-ease-form">
                                        <input type="text">
                                    </div>
                                </div>
                            </div>
                            <div class="ui-col-100">
                                <div class="ui-select ui-circle ui-border-dual ui-ease-form">
                                    <svg class="ui-icon"><use href="#angle-down"/></svg>
                                    <select>
                                        <option value="">Select</option>
                                        <option>First</option>
                                        <option>Second</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <h3 class="ui-h3">Special Forms</h3>
                <div class="ui-row ui-p-30-b">
                    <div class="ui-col-3">
                        <label class="ui-form-info" >Number Form</label>
                    </div>
                    <div class="ui-col-9">
                        <div class="ui-input ui-round ui-border-dual ui-ease-form">
                            <input class="ui-number" type="text" placeholder="Number">
                        </div>
                    </div>

                    <div class="ui-col-3">
                        <label class="ui-form-info">Spinner Form</label>
                    </div>
                    <div class="ui-col-9">
                        <div class="ui-form-spinner ui-form-holder ui-col-static ui-no-fluid">

                            <div class="ui-row ui-no-row-gap">
                                <div class="ui-col-12">
                                    <div class="ui-input ui-round ui-border-dual ui-ease-form">
                                        <input type="text" value="3" min="2" max="5" class="ui-number ui-align-r">
                                    </div>
                                </div>
                            </div>
                            <div class="ui-col-42">
                                <button class="ui-spinner-down ui-btn ui-btn-square ui-btn-ghost ui-border-dual ui-round ui-ease-btn">
                                    <svg class="ui-icon"><use href="#minus"/></svg>
                                </button>
                            </div>
                            <div class="ui-col-42">
                                <button class="ui-spinner-up ui-btn ui-btn-square ui-btn-ghost ui-border-dual ui-round ui-ease-btn">
                                    <svg class="ui-icon"><use href="#plus"/></svg>
                                </button>
                            </div>

                        </div>
                    </div>

                    <div class="ui-col-3">
                        <label class="ui-form-info">Currency Spinner</label>
                    </div>
                    <div class="ui-col-9">
                        <div class="ui-currency-spinner ui-form-holder ui-col-static ui-no-fluid">

                            <div class="ui-col-42">
                                <button class="ui-currency-down ui-btn ui-btn-square ui-btn-ghost ui-border-dual ui-round ui-ease-btn">
                                    <svg class="ui-icon"><use href="#minus"/></svg>
                                </button>
                            </div>
                            <div class="ui-row ui-no-row-gap">
                                <div class="ui-col-12">
                                    <div class="ui-input ui-round ui-border-dual ui-ease-form">
                                        <input type="text" value="645.000" min="645.000" step="5.000" maxlength="12" autocomplete="off">
                                    </div>
                                </div>
                            </div>
                            <div class="ui-col-42">
                                <button class="ui-currency-up ui-btn ui-btn-square ui-btn-ghost ui-border-dual ui-round ui-ease-btn">
                                    <svg class="ui-icon"><use href="#plus"/></svg>
                                </button>
                            </div>

                        </div>
                    </div>

                    <div class="ui-col-3">
                        <label class="ui-form-info">Toggle Password</label>
                    </div>
                    <div class="ui-col-9">
                        <div class="ui-input ui-form-icon ui-round ui-border-dual ui-ease-form">
                            <button type="button" title="Toggle Password" class="ui-pass-toggle">
                                <svg class="ui-icon"><use href="#eye-fill"/></svg>
                            </button>
                            <input type="password" placeholder="Toggle Password Example">
                        </div>
                    </div>
                </div>

                <h3 class="ui-h3">Required Forms</h3>
                <div class="ui-p-30-b">
                    <form action="#succesful" onsubmit="return ui.alerts.dialog({msg: 'Submit this form?', success: 'Yes', error: 'No', callback: function (value) { if (value === 'success') { document.getElementById('submitForm').submit(); } }});">
                        <div class="ui-row">
                            <div class="ui-col-3">
                                <label class="ui-form-info">Required with disabled forms</label>
                            </div>
                            <div class="ui-col-9">
                                <div class="ui-input ui-round ui-border-dual ui-form-disabled ui-ease-form">
                                    <input class="ui-required" type="text" placeholder="Disabled required forms are inherited!" disabled>
                                </div>
                            </div>

                            <div class="ui-col-3">
                                <label class="ui-form-info">Required with message</label>
                            </div>
                            <div class="ui-col-9">
                                <div class="ui-input ui-round ui-border-dual ui-ease-form">
                                    <input class="ui-required" type="text" placeholder="Type your name">
                                </div>
                                <p class="ui-required-msg">Please, type your name.</p>
                                <i class="ui-form-hint ui-color-black-25">* Required</i>
                            </div>

                            <div class="ui-col-3">
                                <label class="ui-form-info">Required with no message</label>
                            </div>
                            <div class="ui-col-9">
                                <div class="ui-input ui-round ui-border-dual ui-ease-form">
                                    <input class="ui-required" type="text">
                                </div>
                                <i class="ui-form-hint ui-color-black-25">* Required</i>
                            </div>

                            <div class="ui-col-3">
                                <label class="ui-form-info">Required with min and max length</label>
                            </div>
                            <div class="ui-col-9">
                                <div class="ui-input ui-round ui-border-dual ui-ease-form">
                                    <input class="ui-required" type="text" minlength="3" maxlength="10">
                                </div>
                                <p class="ui-required-msg">Minimum length is 3 characters.</p>
                                <i class="ui-form-hint ui-color-black-25">* Required</i>
                            </div>

                            <div class="ui-col-3">
                                <label class="ui-form-info">Required with min and max number</label>
                            </div>
                            <div class="ui-col-9">
                                <div class="ui-input ui-round ui-border-dual ui-ease-form">
                                    <input class="ui-required" type="text" minnumber="-5" maxnumber="10">
                                </div>
                                <p class="ui-required-msg">Minimum number is -5 and maximum number is 10.</p>
                                <i class="ui-form-hint ui-color-black-25">* Required</i>
                            </div>

                            <div class="ui-col-3">
                                <label class="ui-form-info">Required with password and min length</label>
                            </div>
                            <div class="ui-col-9">
                                <div class="ui-input ui-round ui-border-dual ui-ease-form">
                                    <input class="ui-required" type="password" minlength="8">
                                </div>
                                <p class="ui-required-msg">Minimum length is 8 characters.</p>
                                <i class="ui-form-hint ui-color-black-25">* Required</i>
                            </div>

                            <div class="ui-col-3">
                                <label class="ui-form-info">Required with email</label>
                            </div>
                            <div class="ui-col-9">
                                <div class="ui-input ui-round ui-border-dual ui-ease-form">
                                    <input class="ui-required" type="email">
                                </div>
                                <p class="ui-required-msg">Enter a valid email.</p>
                                <i class="ui-form-hint ui-color-black-25">* Required</i>
                            </div>

                            <div class="ui-col-3">
                                <label class="ui-form-info">Required with select forms.</label>
                            </div>
                            <div class="ui-col-9">
                                <div class="ui-select ui-round ui-border-dual ui-ease-form">
                                    <svg class="ui-icon"><use href="#angle-down"/></svg>
                                    <select class="ui-required">
                                        <option value="">Select</option>
                                        <option>First</option>
                                        <option>Second</option>
                                    </select>
                                </div>
                                <p class="ui-required-msg">Please, select any option.</p>
                                <i class="ui-form-hint ui-color-black-25">* Required</i>
                            </div>

                            <div class="ui-col-3">
                                <label class="ui-form-info">Required with form holders</label>
                            </div>
                            <div class="ui-col-9">
                                <div class="ui-form-holder ui-col-static ui-no-fluid">

                                    <div class="ui-row ui-no-row-gap">
                                        <div class="ui-col-12">
                                            <div class="ui-input ui-round ui-border-dual ui-ease-form">
                                                <input class="ui-required" type="text" placeholder="Keyword">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="ui-col-200">
                                        <div class="ui-select ui-round ui-border-dual ui-ease-form">
                                            <svg class="ui-icon"><use href="#angle-down"/></svg>
                                            <select class="ui-required">
                                                <option value="">Category</option>
                                                <option>First</option>
                                                <option>Second</option>
                                            </select>
                                        </div>
                                    </div>

                                </div>
                                <div class="ui-required-msg">
                                    <b>Please, complete these actions:</b>
                                    <ul>
                                        <li>Type a keyword.</li>
                                        <li>Select a category.</li>
                                    </ul>
                                </div>
                                <i class="ui-form-hint ui-color-black-25">* Required</i>
                            </div>

                            <div class="ui-col-3">
                                <label class="ui-form-info">Required with textarea forms and min length.</label>
                            </div>
                            <div class="ui-col-9">
                                <div class="ui-textarea ui-m-10-b ui-round ui-border-dual ui-ease-form">
                                    <textarea class="ui-required" placeholder="Write your comments." minlength="10"></textarea>
                                </div>
                                <p class="ui-required-msg">Please, write your comments more than 10 characters.</p>
                                <i class="ui-form-hint ui-color-black-25">* Required</i>
                            </div>

                            <div class="ui-col-3">
                                <label class="ui-form-info">Required with textarea forms and min length.</label>
                            </div>
                            <div class="ui-col-9">
                                <div class="ui-file ui-round ui-border-dual ui-ease-form">
                                    <input class="ui-required" type="file">
                                    <span class="ui-btn ui-ease-btn">Browse</span>
                                    <i>Choose file.</i>
                                </div>
                                <p class="ui-required-msg">Please, select a file.</p>
                                <i class="ui-form-hint ui-color-black-25">* Required</i>
                            </div>

                            <div class="ui-col-3">
                                <label class="ui-form-info">Required with native checkboxes.</label>
                            </div>
                            <div class="ui-col-9">
                                <div class="ui-required-holder">
                                    <label>
                                        <input class="ui-required" type="checkbox">
                                        Checkbox
                                    </label>
                                </div>
                                <p class="ui-required-msg">Please, read and accept Terms and Conditions.</p>
                                <i class="ui-form-hint ui-color-black-25">
                                    * Required for accepting
                                    <a href="#" class="ui-font-underline">Terms and Conditions.</a>
                                </i>
                            </div>

                            <div class="ui-col-3">
                                <label class="ui-form-info">Required with native radios.</label>
                            </div>
                            <div class="ui-col-9">
                                <div class="ui-required-holder">
                                    <label>
                                        <input class="ui-required" type="radio" name="radiotest3">
                                        Radio1
                                    </label>
                                    <label">
                                        <input class="ui-required" type="radio" name="radiotest3">
                                        Radio2
                                    </label>
                                    <label>
                                        <input class="ui-required" type="radio" name="radiotest3">
                                        Radio3
                                    </label>
                                </div>
                                <p class="ui-required-msg">Please, select any option.</p>
                                <i class="ui-form-hint ui-color-black-25">* Required</i>
                            </div>

                            <div class="ui-col-3">
                                <label class="ui-form-info">Required with native indeterminate checkboxes.</label>
                            </div>
                            <div class="ui-col-9">
                                <div class="ui-required-holder">
                                    <label>
                                        <input class="ui-required ui-indeterminate" type="checkbox">
                                        Indeterminate
                                    </label>
                                </div>
                                <p class="ui-required-msg">Please, read and accept Terms and Conditions.</p>
                                <i class="ui-form-hint ui-color-black-25">
                                    * Required for accepting
                                    <a href="#" class="ui-font-underline">Terms and Conditions.</a>
                                </i>
                            </div>

                            <div class="ui-col-3">
                                <label class="ui-form-info">Required with checkboxes.</label>
                            </div>
                            <div class="ui-col-9">
                                <div class="ui-required-holder">
                                    <label class="ui-label">
                                        <span class="ui-check ui-round ui-border-dual">
                                            <input class="ui-required" type="checkbox">
                                            <i class="ui-form-state"></i>
                                        </span>
                                        <b>Checkbox</b>
                                    </label>
                                </div>
                                <p class="ui-required-msg">Please, check this checkbox.</p>
                                <i class="ui-form-hint ui-color-black-25">* Required</i>
                            </div>

                            <div class="ui-col-3">
                                <label class="ui-form-info">Required with radios.</label>
                            </div>
                            <div class="ui-col-9">
                                <div class="ui-required-holder">
                                    <label class="ui-label">
                                        <span class="ui-radio ui-border-dual ui-ease-form">
                                            <input class="ui-required" type="radio" name="radiotest4">
                                            <i class="ui-form-state"></i>
                                        </span>
                                        <b>Radio1</b>
                                    </label>
                                    <label class="ui-label">
                                        <span class="ui-radio ui-border-dual ui-ease-form">
                                            <input class="ui-required" type="radio" name="radiotest4">
                                            <i class="ui-form-state"></i>
                                        </span>
                                        <b>Radio2</b>
                                    </label>
                                    <label class="ui-label">
                                        <span class="ui-radio ui-border-dual ui-ease-form">
                                            <input class="ui-required" type="radio" name="radiotest4">
                                            <i class="ui-form-state"></i>
                                        </span>
                                        <b>Radio2</b>
                                    </label>
                                </div>
                                <p class="ui-required-msg">Please, select any option.</p>
                                <i class="ui-form-hint ui-color-black-25">* Required</i>
                            </div>

                            <div class="ui-col-3">
                                <label class="ui-form-info">Required with switches.</label>
                            </div>
                            <div class="ui-col-9">
                                <div class="ui-required-holder">
                                    <label class="ui-label">
                                        <span class="ui-switch ui-round ui-border-dual ui-ease-form">
                                            <input class="ui-required" type="checkbox">
                                            <i class="ui-form-state"></i>
                                        </span>
                                        <b>Switch</b>
                                    </label>
                                </div>
                                <p class="ui-required-msg">Please, read and accept Terms and Conditions.</p>
                                <i class="ui-form-hint ui-color-black-25">
                                    * Required for accepting
                                    <a href="#" class="ui-font-underline">Terms and Conditions.</a>
                                </i>
                            </div>

                            <div class="ui-col-9 ui-push-3 ui-ease-1st-btn">
                                <button type="reset" class="ui-btn ui-btn-xs-fluid ui-round">Reset Form</button>
                                <button type="submit" class="ui-btn ui-btn-xs-fluid ui-round ui-theme-sub ui-fill-dark-100">Submit Form</button>
                            </div>
                        </div>
                    </form>
                </div>

                <h3 class="ui-h3">Forms in Dark Themes</h3>
                <div class="ui-p-15 ui-m-30-b ui-round ui-theme-base ui-fill-dark-100">

                    <div class="ui-input ui-form-light ui-m-10-b ui-round ui-border-dual ui-ease-form">
                        <input type="text" placeholder="Placeholder">
                    </div>
                    <div class="ui-input ui-form-icon ui-form-light ui-m-10-b ui-round ui-border-dual ui-ease-form">
                        <svg class="ui-icon"><use href="#search"/></svg>
                        <input type="text" placeholder="With text icon">
                    </div>
                    <div class="ui-input ui-form-error ui-form-light ui-m-10-b ui-round ui-border-dual ui-ease-form">
                        <input type="text" placeholder="Error Form">
                    </div>
                    <div class="ui-input ui-form-error ui-form-light ui-m-10-b ui-round ui-no-border ui-ease-form">
                        <input type="text" placeholder="Error Form">
                    </div>
                    <div class="ui-input ui-form-warning ui-form-light ui-m-10-b ui-round ui-border-dual ui-ease-form">
                        <input type="text" placeholder="Warning Form">
                    </div>
                    <div class="ui-input ui-form-warning ui-form-light ui-round ui-no-border ui-ease-form">
                        <input type="text" placeholder="Warning Form">
                    </div>

                    <span class="ui-sp-30"></span>

                    <div class="ui-input ui-form-disabled ui-form-light ui-m-10-b ui-round ui-border-dual ui-ease-form">
                        <input type="text" disabled value="Disabled Input">
                    </div>
                    <div class="ui-textarea ui-form-disabled ui-form-light ui-m-10-b ui-round ui-border-dual ui-ease-form">
                        <textarea disabled>Disabled Textarea</textarea>
                    </div>

                    <div class="ui-input ui-form-readonly ui-form-light ui-m-10-b ui-round ui-border-dual ui-ease-form">
                        <input type="text" readonly value="Readonly Input">
                    </div>
                    <div class="ui-textarea ui-form-readonly ui-form-light ui-round ui-border-dual ui-ease-form">
                        <textarea readonly>Readonly Textarea</textarea>
                    </div>

                    <span class="ui-sp-30"></span>

                    <label class="ui-form-label">Multi Select Example</label>
                    <div class="ui-select-multi ui-form-light ui-round ui-border-dual ui-ease-form">
                        <select class="ui-scrollbar-faded" multiple size="6">
                            <option value="">Value 1</option>
                            <option>Value 2</option>
                            <option>Value 3</option>
                            <option>Value 4</option>
                            <option>Value 5</option>
                            <option>Value 6</option>
                            <option>Value 7</option>
                            <option>Value 8</option>
                            <option>Value 9</option>
                            <option>Value 10</option>
                        </select>
                    </div>
                    <span class="ui-sp-30"></span>

                    <label class="ui-form-label">Form Holder Example</label>
                    <div class="ui-form-holder ui-row ui-no-row-gap ui-no-fluid ui-m-10-b">

                        <div class="ui-col-5">
                            <div class="ui-input ui-round ui-border-dual ui-form-light ui-ease-form">
                                <input type="text">
                            </div>
                        </div>
                        <div class="ui-col-2">
                            <div class="ui-select ui-round ui-border-dual ui-form-light ui-ease-form">
                                <svg class="ui-icon"><use href="#angle-down"/></svg>
                                <select>
                                    <option value="">Select</option>
                                    <option>First</option>
                                    <option>Second</option>
                                </select>
                            </div>
                        </div>
                        <div class="ui-col-5">
                            <div class="ui-input ui-round ui-border-dual ui-form-light ui-ease-form">
                                <input type="text">
                            </div>
                        </div>

                    </div>
                    <div class="ui-form-holder ui-row ui-no-row-gap ui-no-fluid ui-m-10-b ui-form-error">

                        <div class="ui-col-5">
                            <div class="ui-input ui-round ui-border-dual ui-form-light ui-ease-form">
                                <input type="text">
                            </div>
                        </div>
                        <div class="ui-col-2">
                            <div class="ui-select ui-round ui-border-dual ui-form-light ui-ease-form">
                                <svg class="ui-icon"><use href="#angle-down"/></svg>
                                <select>
                                    <option value="">Select</option>
                                    <option>First</option>
                                    <option>Second</option>
                                </select>
                            </div>
                        </div>
                        <div class="ui-col-5">
                            <div class="ui-input ui-round ui-border-dual ui-form-light ui-ease-form">
                                <input type="text">
                            </div>
                        </div>

                    </div>
                    <div class="ui-form-holder ui-row ui-no-row-gap ui-no-fluid ui-m-10-b ui-form-warning">

                        <div class="ui-col-5">
                            <div class="ui-input ui-round ui-border-dual ui-form-light ui-ease-form">
                                <input type="text">
                            </div>
                        </div>
                        <div class="ui-col-2">
                            <div class="ui-select ui-round ui-border-dual ui-form-light ui-ease-form">
                                <svg class="ui-icon"><use href="#angle-down"/></svg>
                                <select>
                                    <option value="">Select</option>
                                    <option>First</option>
                                    <option>Second</option>
                                </select>
                            </div>
                        </div>
                        <div class="ui-col-5">
                            <div class="ui-input ui-round ui-border-dual ui-form-light ui-ease-form">
                                <input type="text">
                            </div>
                        </div>

                    </div>

                    <span class="ui-sp-20"></span>

                    <label class="ui-form-label">Captcha</label>
                    <div class="ui-form-holder ui-col-static ui-no-fluid">

                        <div class="ui-col-100">
                            <img class="ui-border-dual ui-border-light ui-round ui-ease-border"
                                src="img/captcha.jpg"
                                width="100"
                                height="42"
                                alt=""
                            >
                        </div>
                        <div class="ui-col-42">
                            <button class="ui-btn ui-btn-square ui-btn-ghost ui-border-dual ui-border-light ui-ease-btn">
                                <!-- for loading toggle "ui-animate-spin" -->
                                <svg class="ui-icon ui-no-opacity ui-animate-spin"><use href="#sync"/></svg>
                            </button>
                        </div>
                        <div class="ui-row ui-no-row-gap">
                            <div class="ui-col-12">
                                <div class="ui-input ui-border-dual ui-round ui-ease-form ui-form-light">
                                    <input type="text" maxlength="4" placeholder="Please enter code">
                                </div>
                            </div>
                        </div>

                    </div>

                    <span class="ui-sp-30"></span>

                    <form action="#successful">

                        <div class="ui-input ui-form-icon ui-form-light ui-m-10-b ui-round ui-border-dual ui-ease-form">
                            <button type="submit">
                                <svg class="ui-icon"><use href="#search"/></svg>
                            </button>
                            <input class="ui-required" type="text" placeholder="Required example with text icon post">
                        </div>
                        <p class="ui-required-msg">Please, enter any keywords.</p>
                        <i class="ui-form-hint ui-color-white-25">* Required</i>

                    </form>

                    <span class="ui-sp-10"></span>

                    <div class="ui-textarea ui-round ui-border-dual ui-form-light ui-ease-form" data-ui-counter="255">
                        <textarea class="ui-required ui-scrollbar-faded" rows="4" placeholder="Required example with counter textarea" minlength="10"></textarea>
                    </div>
                    <p class="ui-required-msg">Please, write your comments more than 10 characters.</p>
                    <i class="ui-form-hint ui-color-white-25">* Required</i>

                </div>

                <h3 class="ui-h3">Different Form Styles</h3>
                <div class="ui-row">
                    <div class="ui-col-3">
                        <label class="ui-form-info">light ui-border with no radius style:</label>
                    </div>
                    <div class="ui-col-9 ui-ease-1st-form">

                        <div class="ui-input ui-m-10-b">
                            <input type="text">
                        </div>
                        <div class="ui-input ui-form-error ui-m-10-b">
                            <input type="text" placeholder="Error Form">
                        </div>
                        <div class="ui-input ui-form-warning ui-m-10-b">
                            <input type="text" placeholder="Warning Form">
                        </div>
                        <div class="ui-select ui-m-10-b">
                            <svg class="ui-icon"><use href="#angle-down"/></svg>
                            <select>
                                <option value="">Select</option>
                                <option>First</option>
                                <option>Second</option>
                            </select>
                        </div>

                        <div class="ui-textarea ui-m-10-b">
                            <textarea placeholder="ui-textarea"></textarea>
                        </div>
                        <div class="ui-textarea ui-toggle-textarea ui-m-10-b">
                            <textarea placeholder="Toggle Textarea"></textarea>
                        </div>

                        <label class="ui-label">
                            <span class="ui-check">
                                <input type="checkbox" checked>
                                <i class="ui-form-state"></i>
                            </span>
                            <b>Checkbox</b>
                        </label>
                        <label class="ui-label">
                            <span class="ui-radio">
                                <input type="radio" checked>
                                <i class="ui-form-state"></i>
                            </span>
                            <b>Radio</b>
                        </label>
                        <label class="ui-label">
                            <span class="ui-switch">
                                <input type="checkbox" checked>
                                <i class="ui-form-state"></i>
                            </span>
                            <b>Switch</b>
                        </label>

                    </div>

                    <div class="ui-col-3">
                        <label class="ui-form-info">Inner ui-shadow with no radius and no ui-border style:</label>
                    </div>
                    <div class="ui-col-9 ui-ease-1st-form">

                        <div class="ui-input ui-m-10-b ui-shadow-in ui-no-border">
                            <input type="text">
                        </div>
                        <div class="ui-input ui-form-error ui-m-10-b ui-shadow-in ui-no-border">
                            <input type="text" placeholder="Error Form">
                        </div>
                        <div class="ui-input ui-form-warning ui-m-10-b ui-shadow-in ui-no-border">
                            <input type="text" placeholder="Warning Form">
                        </div>
                        <div class="ui-select ui-m-10-b ui-shadow-in ui-no-border">
                            <svg class="ui-icon"><use href="#angle-down"/></svg>
                            <select>
                                <option value="">Select</option>
                                <option>First</option>
                                <option>Second</option>
                            </select>
                        </div>

                        <div class="ui-textarea ui-m-10-b ui-shadow-in ui-no-border">
                            <textarea placeholder="ui-textarea"></textarea>
                        </div>
                        <div class="ui-textarea ui-toggle-textarea ui-m-10-b ui-shadow-in ui-no-border">
                            <textarea placeholder="Toggle Textarea"></textarea>
                        </div>

                        <label class="ui-label">
                            <span class="ui-check ui-shadow-in ui-no-border">
                                <input type="checkbox" checked>
                                <i class="ui-form-state"></i>
                            </span>
                            <b>Checkbox</b>
                        </label>
                        <label class="ui-label">
                            <span class="ui-radio ui-shadow-in ui-no-border">
                                <input type="radio" checked>
                                <i class="ui-form-state"></i>
                            </span>
                            <b>Radio</b>
                        </label>
                        <label class="ui-label">
                            <span class="ui-switch ui-shadow-in ui-no-border">
                                <input type="checkbox" checked>
                                <i class="ui-form-state"></i>
                            </span>
                            <b>Switch</b>
                        </label>

                    </div>

                    <div class="ui-col-3">
                        <label class="ui-form-info">Using themes with no radius and no ui-border style:</label>
                    </div>
                    <div class="ui-col-9 ui-ease-1st-form ui-theme-gray">

                        <div class="ui-input ui-m-10-b ui-round ui-no-border ui-fill-light-100">
                            <input type="text">
                        </div>
                        <div class="ui-input ui-form-error ui-m-10-b ui-round ui-no-border ui-fill-light-100">
                            <input type="text" placeholder="Error Form">
                        </div>
                        <div class="ui-input ui-form-warning ui-m-10-b ui-round ui-no-border ui-fill-light-100">
                            <input type="text" placeholder="Warning Form">
                        </div>
                        <div class="ui-select ui-m-10-b ui-round ui-no-border ui-fill-light-100">
                            <svg class="ui-icon"><use href="#angle-down"/></svg>
                            <select>
                                <option value="">Select</option>
                                <option>First</option>
                                <option>Second</option>
                            </select>
                        </div>

                        <div class="ui-textarea ui-m-10-b ui-round ui-no-border ui-fill-light-100">
                            <textarea placeholder="ui-textarea"></textarea>
                        </div>
                        <div class="ui-textarea ui-toggle-textarea ui-m-10-b ui-round ui-no-border ui-fill-light-100">
                            <textarea placeholder="Toggle Textarea"></textarea>
                        </div>

                        <label class="ui-label">
                            <span class="ui-check ui-fill-light-100">
                                <input type="checkbox" checked>
                                <i class="ui-form-state ui-fill-dark-100"></i>
                            </span>
                            <b>Checkbox</b>
                        </label>
                        <label class="ui-label">
                            <span class="ui-radio ui-fill-light-100">
                                <input type="radio" checked>
                                <i class="ui-form-state ui-fill-dark-100"></i>
                            </span>
                            <b>Radio</b>
                        </label>
                        <label class="ui-label">
                            <span class="ui-switch ui-fill-light-100">
                                <input type="checkbox" checked>
                                <i class="ui-form-state ui-fill-dark-100"></i>
                            </span>
                            <b>Switch</b>
                        </label>

                    </div>
                </div>

            </div>
        </div>
    </div>
</main>