<!-- custom CSS -->
<link rel="stylesheet" href="../css/custom/forms.css"/>

<main class="container no-gutter">
    <div class="fixed">
        <div class="row">
            <div class="col-12 padding-30">

                <h4>Forms in Grid System</h4>
                <div class="row padding-30-b">
                    <div class="col-3">
                        <label class="form-grid">Label</label>
                    </div>
                    <div class="col-9">
                        <div class="text round border-dual ease-form">
                            <input type="text" value="123456">
                        </div>
                        <p class="hint font-color-black-muted">Form hint</p>
                    </div>

                    <div class="col-3">
                        <label class="form-grid">Label</label>
                    </div>
                    <div class="col-9">
                        <div class="text form-disabled round border-dual ease-form">
                            <input type="text" disabled value="Disabled Input">
                        </div>
                    </div>

                    <div class="col-3">
                        <label class="form-grid">Label</label>
                    </div>
                    <div class="col-9">
                        <div class="textarea form-disabled round border-dual ease-form">
                            <textarea disabled>Disabled Textarea</textarea>
                        </div>
                    </div>

                    <div class="col-3">
                        <label class="form-grid">Label</label>
                    </div>
                    <div class="col-9">
                        <div class="text form-readonly round border-dual ease-form">
                            <input type="text" readonly value="Readonly Input">
                        </div>
                    </div>

                    <div class="col-3">
                        <label class="form-grid">Label</label>
                    </div>
                    <div class="col-9">
                        <div class="textarea form-readonly round border-dual ease-form">
                            <textarea readonly>Readonly Textarea</textarea>
                        </div>
                    </div>

                    <div class="col-3">
                        <label class="form-grid">Error Form</label>
                    </div>
                    <div class="col-9">
                        <div class="text round border-dual ease-form error">
                            <input type="text" value="123456">
                        </div>
                        <p class="hint error">Your message is here.</p>
                    </div>

                    <div class="col-3">
                        <label class="form-grid">Warning Form</label>
                    </div>
                    <div class="col-9">
                        <div class="text round border-dual ease-form warning">
                            <input type="text" value="123456">
                        </div>
                        <p class="hint warning">Your message is here.</p>
                    </div>
                    <div class="col-3">
                        <label class="form-grid">Captcha</label>
                    </div>
                    <div class="col-9">
                        <div class="form-holder col-static no-fluid">

                            <div class="col-75">
                                <img class="img-fluid border-dual round ease-border" src="img/captcha.jpg" alt="">
                            </div>
                            <div class="col-32">
                                <button class="btn btn-square btn-ghost border-dual ease-btn">
                                    <!-- for loading toggle "animate-spin" -->
                                    <svg class="icon no-opacity animate-spin"><use href="#sync"/></svg>
                                </button>
                            </div>
                            <div class="row no-row-gap">
                                <div class="col-12">
                                    <div class="text border-dual round ease-form">
                                        <input type="text" maxlength="4" placeholder="Please enter code">
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="col-6">
                        <label class="form-label">Full Name</label>
                        <div class="text border-dual round ease-form">
                            <input type="text" placeholder="Enter name">
                        </div>
                    </div>
                    <div class="col-6">
                        <label class="form-label">Your Age</label>
                        <div class="select round border-dual ease-form">
                            <svg class="icon"><use href="#angle-down"/></svg>
                            <select>
                                <option value="">Select your age</option>
                                <option>Under 20</option>
                                <option>21- 30</option>
                                <option>31 - 40</option>
                            </select>
                        </div>
                    </div>
                </div>

                <h4>Large Forms</h4>
                <div class="form-lg padding-30-b">
                    <div class="row">
                        <div class="col-3">
                            <label class="form-grid">Full Name</label>
                        </div>
                        <div class="col-9">
                            <div class="text border-dual round ease-form">
                                <input type="text" placeholder="Enter name">
                            </div>
                            <p class="hint font-color-black-muted">Form hint</p>
                        </div>
                        <div class="col-3">
                            <label class="form-grid">Your Age</label>
                        </div>
                        <div class="col-9">
                            <div class="select round border-dual ease-form">
                                <svg class="icon"><use href="#angle-down"/></svg>
                                <select>
                                    <option value="">Select your age</option>
                                    <option>Under 20</option>
                                    <option>21- 30</option>
                                    <option>31 - 40</option>
                                </select>
                            </div>
                            <p class="hint font-color-black-muted">Form hint</p>
                        </div>
                        <div class="col-3">
                            <label class="form-grid">Captcha</label>
                        </div>
                        <div class="col-9">
                            <div class="form-holder col-static no-fluid">

                                <div class="col-100">
                                    <img class="border-dual round ease-border" src="img/captcha.jpg" alt="">
                                </div>
                                <div class="col-42">
                                    <button class="btn btn-square btn-ghost border-dual ease-btn">
                                        <!-- for loading toggle "animate-spin" -->
                                        <svg class="icon no-opacity animate-spin"><use href="#sync" /></svg>
                                    </button>
                                </div>
                                <div class="row no-row-gap">
                                    <div class="col-12">
                                        <div class="text border-dual round ease-form">
                                            <input type="text" maxlength="4" placeholder="Please enter code">
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="col-9 offset-3">
                            <button type="reset" class="btn btn-xs-fluid round ease-btn">Reset Form</button>
                        </div>
                        <div class="col-6">
                            <label class="form-label">Full Name</label>
                            <div class="text border-dual round ease-form">
                                <input type="text" placeholder="Enter name">
                            </div>
                        </div>
                        <div class="col-6">
                            <label class="form-label">Your Age</label>
                            <div class="select round border-dual ease-form">
                                <svg class="icon"><use href="#angle-down"/></svg>
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

                <h4>Autocomplete Forms</h4>
                <div class="padding-30-b">
                    <div data-ui-src="json/countries.json" data-ui-val="code" class="autocomplete text text-icon round border-dual ease-form form-inline-xs">
                        <svg class="icon"><use href="#keyboard-fill"/></svg>
                        <input type="text" placeholder="Country Code" autocomplete="off">
                    </div>
                    <div data-ui-src="json/countries.json" data-ui-val="name" class="autocomplete text text-icon round border-dual ease-form form-inline-xs">
                        <svg class="icon"><use href="#keyboard-fill"/></svg>
                        <input type="text" placeholder="Country" autocomplete="off">
                    </div>
                </div>

                <h4>Select Forms</h4>
                <div class="padding-30-b">
                    <div class="row">
                        <div class="col-6">
                            <div class="select round border-dual ease-form">
                                <svg class="icon"><use href="#angle-down"/></svg>
                                <select>
                                    <option value="">Select</option>
                                    <option>Value 1</option>
                                    <option>Value 2</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="select round border-dual ease-form">
                                <svg class="icon"><use href="#angle-down"/></svg>
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

                    <div class="select-multi margin-10-b round border-dual ease-form">
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
                    <div class="select-multi margin-10-b round border-dual ease-form">
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

                <h4>Dual Multi Selects</h4>
                <div class="padding-30-b">

                    <form action="#succesful">

                        <div class="row">

                            <div class="dual-multi-select col-static full-height">
                                <div class="row">
                                    <div class="col-12 full-height">
                                        <div class="select-multi full-height round border-dual ease-form">
                                            <select multiple size="6" name="a">
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
                                <div class="col-50 font-color-black-muted align-c icons-lg set-relative">
                                    <div class="set-absolute set-all hidden-md">
                                        <div class="set-absolute set-c padding-20-h">
                                            <svg class="icon"><use href="#exchange-h"/></svg>
                                        </div>
                                    </div>
                                    <svg class="icon visible-md"><use href="#exchange-v"/></svg>
                                </div>
                                <div class="row">
                                    <div class="col-12 full-height">
                                        <div class="select-multi full-height round border-dual ease-form">
                                            <select multiple size="6"></select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <span class="sp-30"></span>

                            <div class="dual-multi-select col-static full-height">
                                <div class="row">
                                    <div class="col-12 full-height">
                                        <div class="select-multi full-height round border-dual ease-form">
                                            <select multiple size="6" name="b">
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
                                <div class="col-50 font-color-black-muted align-c icons-lg set-relative">
                                    <div class="set-absolute set-all hidden-md">
                                        <div class="set-absolute set-c padding-20-h">
                                            <svg class="icon"><use href="#exchange-h"/></svg>
                                        </div>
                                    </div>
                                    <svg class="icon visible-md"><use href="#exchange-v"/></svg>
                                </div>
                                <div class="row">
                                    <div class="col-12 full-height">
                                        <div class="select-multi full-height round border-dual ease-form">
                                            <select multiple size="6"></select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <span class="sp-30"></span>

                            <div class="dual-multi-select col-static full-height">
                                <div class="row">
                                    <div class="col-12 full-height">
                                        <div class="select-multi full-height round border-dual ease-form">
                                            <select multiple size="6" name="c">
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
                                <div class="col-50 font-color-black-muted align-c set-relative">
                                    <div class="set-absolute set-all hidden-md">
                                        <div class="set-absolute set-c icons-lg padding-20-h">
                                            <svg class="icon"><use href="#exchange-h"/></svg>
                                        </div>
                                    </div>
                                    <svg class="icon visible-md"><use href="#exchange-v"/></svg>
                                </div>
                                <div class="row">
                                    <div class="col-12 full-height">
                                        <div class="select-multi full-height round border-dual ease-form">
                                            <select multiple size="6"></select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-12 ease-1st-btn">
                                <button type="reset" class="btn btn-xs-fluid round">Reset Form</button>
                                <button type="submit" class="btn btn-xs-fluid round theme-sub ui-fill-dark-100">Submit Form</button>
                            </div>
                        </div>

                    </form>

                </div>

                <h4>Textarea Forms</h4>
                <div class="padding-30-b">
                    <div class="textarea margin-10-b round border-dual ease-form">
                        <textarea placeholder="Placeholder Text"></textarea>
                    </div>
                    <div class="textarea toggle-textarea margin-10-b round border-dual ease-form">
                        <textarea placeholder="Toggle textarea example"></textarea>
                    </div>
                    <div class="textarea round border-dual ease-form" data-ui-counter="255">
                        <textarea rows="4">Textarea with counter.</textarea>
                    </div>
                </div>

                <h4>File Input</h4>
                <div class="padding-30-b theme-gray">
                    <div class="file round no-border ui-fill-light-100 ease-form">
                        <input type="file">
                        <span class="btn ease-btn">Browse</span>
                        <i>Choose file.</i>
                    </div>

                    <span class="sp-10"></span>

                    <div class="file round ease-form">
                        <input type="file">
                        <span class="btn ease-btn">Browse</span>
                        <i>Choose file.</i>
                    </div>

                    <span class="sp-10"></span>

                    <div class="file round border-dual ease-form">
                        <input type="file">
                        <span class="btn ease-btn">Browse</span>
                        <i>Choose file.</i>
                    </div>

                    <span class="sp-10"></span>

                    <label class="form-label padding-10-b">File Input with Large Forms</label>
                    <div class="form-lg ease-1st-form">
                        <div class="file round no-border ui-fill-light-100">
                            <input type="file">
                            <span class="btn ease-btn">Browse</span>
                            <i>Choose file.</i>
                        </div>

                        <span class="sp-10"></span>

                        <div class="file round">
                            <input type="file">
                            <span class="btn ease-btn">Browse</span>
                            <i>Choose file.</i>
                        </div>

                        <span class="sp-10"></span>

                        <div class="file round border-dual">
                            <input type="file">
                            <span class="btn ease-btn">Browse</span>
                            <i>Choose file.</i>
                        </div>
                    </div>

                    <span class="sp-10"></span>

                    <label class="form-label padding-10-b">File Input Like Buttons</label>
                    <div>
                        <div class="file no-border inline-block round ease-form">
                            <input class="cursor-pointer" type="file">
                            <span class="btn btn-square ease-btn">
                                <svg class="icon"><use href="#plus"/></svg>
                            </span>
                        </div>
                        <div class="file inline-block round ease-form">
                            <input class="cursor-pointer" type="file">
                            <span class="btn btn-square ease-btn">
                                <svg class="icon"><use href="#plus"/></svg>
                            </span>
                        </div>
                        <div class="file border-dual inline-block round ease-form">
                            <input class="cursor-pointer" type="file">
                            <span class="btn btn-square ease-btn">
                                <svg class="icon"><use href="#plus"/></svg>
                            </span>
                        </div>
                        <div class="file no-border inline-block round ease-form">
                            <input class="bg-white cursor-pointer" type="file">
                            <span class="btn btn-square theme-base ui-fill-dark-100 ease-btn">
                                <svg class="icon"><use href="#plus"/></svg>
                            </span>
                        </div>
                        <div class="file no-border inline-block round ease-form">
                            <input class="bg-white cursor-pointer" type="file">
                            <span class="btn btn-square theme-green ui-fill-dark-100 ease-btn">
                                <svg class="icon"><use href="#plus"/></svg>
                            </span>
                        </div>
                    </div>

                    <span class="sp-10"></span>

                    <div class="form-lg">
                        <div class="file no-border inline-block round ease-form">
                            <input class="cursor-pointer" type="file">
                            <span class="btn btn-square ease-btn">
                                <svg class="icon"><use href="#plus"/></svg>
                            </span>
                        </div>
                        <div class="file inline-block round ease-form">
                            <input class="cursor-pointer" type="file">
                            <span class="btn btn-square ease-btn">
                                <svg class="icon"><use href="#plus"/></svg>
                            </span>
                        </div>
                        <div class="file border-dual inline-block round ease-form">
                            <input class="cursor-pointer" type="file">
                            <span class="btn btn-square ease-btn">
                                <svg class="icon"><use href="#plus"/></svg>
                            </span>
                        </div>
                        <div class="file no-border inline-block round ease-form">
                            <input class="bg-white cursor-pointer" type="file">
                            <span class="btn btn-square theme-base ui-fill-dark-100 ease-btn">
                                <svg class="icon"><use href="#plus"/></svg>
                            </span>
                        </div>
                        <div class="file no-border inline-block round ease-form">
                            <input class="bg-white cursor-pointer" type="file">
                            <span class="btn btn-square theme-green ui-fill-dark-100 ease-btn">
                                <svg class="icon"><use href="#plus"/></svg>
                            </span>
                        </div>
                    </div>
                </div>

                <h4>Checkboxes and Radios</h4>
                <div class="padding-30-b">
                    <ul class="list-inline list-gap">
                        <li>
                            <label class="check">
                                <input type="checkbox" checked> Checkbox
                            </label>
                        </li>
                        <li>
                            <label class="check">
                                <input class="indeterminate" type="checkbox"> Indeterminate
                            </label>
                        </li>
                    </ul>

                    <span class="sp-5"></span>
                    <ul class="list-inline list-gap">
                        <li>
                            <label class="radio">
                                <input type="radio" name="radiotest1"> Radio1
                            </label>
                        </li>
                        <li>
                            <label class="radio">
                                <input type="radio" name="radiotest1"> Radio2
                            </label>
                        </li>
                        <li>
                            <label class="radio">
                                <input type="radio" name="radiotest1"> Radio3
                            </label>
                        </li>
                    </ul>

                    <span class="sp-10"></span>

                    <ul class="list-inline list-gap">
                        <li>
                            <label class="custom">
                                <span class="check-custom round border-dual ease-form">
                                    <input type="checkbox" checked>
                                    <i class="state"></i>
                                </span>
                                Custom Checkbox
                            </label>
                        </li>
                        <li>
                            <label class="custom">
                                <div class="check-custom round border-dual ease-form">
                                    <input type="checkbox" class="indeterminate">
                                    <i class="state"></i>
                                </div>
                                Custom Indeterminate
                            </label>
                        </li>
                    </ul>

                    <ul class="list-inline list-gap">
                        <li>
                            <label class="custom">
                                <span class="radio-custom border-dual ease-form">
                                    <input type="radio" name="radiotest2" checked>
                                    <i class="state"></i>
                                </span>
                                Custom Radio1
                            </label>
                        </li>
                        <li>
                            <label class="custom">
                                <span class="radio-custom border-dual ease-form">
                                    <input type="radio" name="radiotest2">
                                    <i class="state"></i>
                                </span>
                                Custom Radio2
                            </label>
                        </li>
                        <li>
                            <label class="custom">
                                <span class="radio-custom border-dual ease-form">
                                    <input type="radio" name="radiotest2">
                                    <i class="state"></i>
                                </span>
                                Custom Radio3
                            </label>
                        </li>
                    </ul>

                    <span class="sp-10"></span>

                    <ul class="list-inline list-gap">
                        <li>
                            <label class="custom">
                                <span class="switch-custom round border-dual ease-form">
                                    <input type="checkbox" checked>
                                    <i class="state"></i>
                                </span>
                                Custom Switch
                            </label>
                        </li>
                        <li>
                            <label class="custom">
                                <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" checked>
                                        <i class="state theme-sub ui-fill-dark-100"></i>
                                </span>
                                Custom Switch with Themes
                            </label>
                        </li>
                        <li>
                            <label class="custom">
                                <span class="switch-custom round border-dual ease-form">
                                        <input type="checkbox" class="indeterminate">
                                        <i class="state"></i>
                                </span>
                                Indeterminate Switch
                            </label>
                        </li>
                    </ul>

                </div>

                <h4>Range Forms</h4>
                <div class="padding-30-b">
                    <input class="range ease-range" type="range" min="0" max="10" value="0">
                    <span class="sp-10"></span>
                    <input class="range theme-base ui-color ease-range" type="range" min="0" max="10" value="2">
                    <span class="sp-10"></span>
                    <input class="range theme-sub ui-color ease-range" type="range" min="0" max="10" value="4">
                    <span class="sp-10"></span>
                    <input class="range theme-yellow ui-color ease-range" type="range" min="0" max="10" value="6">
                    <span class="sp-10"></span>
                    <input class="range theme-orange ui-color ease-range" type="range" min="0" max="10" value="8">
                    <span class="sp-10"></span>
                    <input class="range theme-red ui-color ease-range" type="range" min="0" max="10" value="10">
                    <span class="sp-10"></span>
                    <input class="range ease-range" disabled type="range" min="0" max="10" value="5">
                </div>

                <h4>Inline Forms</h4>
                <div class="padding-30-b">
                    <div class="text margin-10-b round border-dual form-inline ease-form">
                        <input type="text">
                    </div>
                    <div class="select margin-10-b round border-dual form-inline ease-form">
                        <svg class="icon"><use href="#angle-down"/></svg>
                        <select>
                            <option value="">Select</option>
                            <option>First</option>
                            <option>Second</option>
                        </select>
                    </div>
                    <div class="textarea toggle-textarea margin-10-b round border-dual form-inline ease-form">
                        <textarea placeholder="Textarea"></textarea>
                    </div>

                    <span class="sp-15"></span>

                    <h5 class="font-color-black-muted">Responsive Inline Forms</h5>
                    <div class="text margin-10-b round border-dual form-inline-xs ease-form">
                        <input type="text">
                    </div>
                    <div class="select margin-10-b round border-dual form-inline-xs ease-form">
                        <svg class="icon"><use href="#angle-down"/></svg>
                        <select>
                            <option value="">Select</option>
                            <option>First</option>
                            <option>Second</option>
                        </select>
                    </div>
                    <div class="textarea toggle-textarea margin-10-b round border-dual form-inline-xs ease-form">
                        <textarea placeholder="Textarea"></textarea>
                    </div>
                </div>

                <h4>Form Icons</h4>
                <div class="padding-30-b">
                    <div class="text text-icon-l margin-10-b round border-dual ease-form">
                        <svg class="icon"><use href="#search"/></svg>
                        <input type="text" placeholder="Left icon">
                    </div>
                    <div class="text text-icon margin-10-b round border-dual ease-form">
                        <svg class="icon"><use href="#keyboard-fill"/></svg>
                        <input type="text" placeholder="Right icon">
                    </div>
                    <div class="text text-icon-both round border-dual ease-form">
                        <svg class="icon text-icon-l"><use href="#search"/></svg>
                        <svg class="icon"><use href="#keyboard-fill"/></svg>
                        <input type="text" placeholder="Both icon">
                    </div>

                    <span class="sp-30"></span>

                    <label class="form-label padding-10-b">Form Icons with Large Forms</label>
                    <div class="form-lg">
                        <div class="text text-icon-l margin-10-b round border-dual ease-form">
                            <svg class="icon"><use href="#search"/></svg>
                            <input type="text" placeholder="Left icon">
                        </div>
                        <div class="text text-icon margin-10-b round border-dual ease-form">
                            <svg class="icon"><use href="#keyboard-fill"/></svg>
                            <input type="text" placeholder="Right icon">
                        </div>
                        <div class="text text-icon-both round border-dual ease-form">
                            <svg class="icon text-icon-l"><use href="#search"/></svg>
                            <svg class="icon"><use href="#keyboard-fill"/></svg>
                            <input type="text" placeholder="Both icon">
                        </div>
                    </div>
                </div>

                <h4>Clear with Form Icons</h4>
                <div class="padding-30-b">
                    <form action="#succesful">
                        <div class="text text-icon margin-10-b round border-dual has-clear ease-form">
                            <button type="button" class="clear-form">
                                <svg class="icon"><use href="#remove"/></svg>
                            </button>
                            <input type="text" value="Defined value example">
                        </div>
                        <div class="text text-icon margin-10-b round border-dual has-clear ease-form">
                            <button type="button" class="clear-form">
                                <svg class="icon"><use href="#remove"/></svg>
                            </button>
                            <input type="text">
                        </div>
                        <label class="form-label padding-10-b">Clear with Large Forms</label>
                        <div class="form-lg margin-10-b ease-1st-form">
                            <div class="text text-icon round border-dual has-clear">
                                <button type="button" class="clear-form">
                                    <svg class="icon"><use href="#remove"/></svg>
                                </button>
                                <input type="text">
                            </div>
                        </div>
                        <button type="reset" class="btn btn-xs-fluid round ease-btn">Reset Form</button>
                    </form>
                </div>

                <h4>Submit with Form Icons</h4>
                <div class="padding-30-b">
                    <form action="#succesful">
                        <div class="text text-icon round border-dual ease-form">
                            <button type="submit">
                                <svg class="icon"><use href="#search"/></svg>
                            </button>
                            <input type="text" placeholder="Submit with icon or press enter key">
                        </div>
                    </form>
                </div>

                <h4>Forms with Actions</h4>
                <div class="padding-30-b">
                    <div class="row row-gap-sm-v no-fluid">
                        <div class="col-6">
                            <label class="form-label">Label</label>
                        </div>
                        <div class="col-6 align-r">
                            <a class="small font-color-black-muted underline" href="#">Top Right Link</a>
                        </div>
                    </div>
                    <div class="text margin-10-b round border-dual ease-form">
                        <input type="text">
                    </div>

                    <div class="row row-gap-sm-v no-fluid">
                        <div class="col-6">
                            <label class="form-label">Label</label>
                        </div>
                        <div class="col-6 align-r">
                            <a class="btn btn-xs font-color-black-muted round ease-btn">Button</a>
                        </div>
                    </div>
                    <div class="text margin-10-b round border-dual ease-form">
                        <input type="text">
                    </div>

                    <div class="row row-gap-sm-v no-fluid">
                        <div class="col-6">
                            <label class="form-label">Label</label>
                        </div>
                        <div class="col-6 align-r">
                            <div class="dropdown menu-l ease-dropdown">
                                <button class="btn btn-xs btn-ghost font-color-black-muted round">
                                    Dropdown Button
                                    <svg class="toggle-icon icon margin-3-l"><use href="#angle-down"/></svg>
                                </button>
                                <ul class="dropdown-menu round shadow-lg">
                                    <li><a href="#">Dropdown Link</a></li>
                                    <li><a href="#">Dropdown Link</a></li>
                                    <li><a href="#">Dropdown Link</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="text round border-dual ease-form">
                        <input type="text">
                    </div>
                </div>

                <h4>Form Holders</h4>
                <div class="row padding-30-b">
                    <div class="col-12">
                        <label class="form-label">Form Holder with Grid System</label>
                        <span class="sp-10"></span>
                        <div class="form-holder row no-row-gap margin-10-b">

                            <div class="col-5 col-xs-4">
                                <div class="text round ease-form">
                                    <input type="text">
                                </div>
                            </div>
                            <div class="col-2 col-xs-4">
                                <div class="select round ease-form">
                                    <svg class="icon"><use href="#angle-down"/></svg>
                                    <select>
                                        <option value="">Select</option>
                                        <option>First</option>
                                        <option>Second</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-5 col-xs-4">
                                <div class="text round ease-form">
                                    <input type="text">
                                </div>
                            </div>

                        </div>
                        <div class="form-holder row no-row-gap margin-10-b">

                            <div class="col-5 col-xs-4">
                                <div class="text round border-dual ease-form">
                                    <input type="text">
                                </div>
                            </div>
                            <div class="col-2 col-xs-4">
                                <div class="select round border-dual ease-form">
                                    <svg class="icon"><use href="#angle-down"/></svg>
                                    <select>
                                        <option value="">Select</option>
                                        <option>First</option>
                                        <option>Second</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-5 col-xs-4">
                                <div class="text round border-dual ease-form">
                                    <input type="text">
                                </div>
                            </div>

                        </div>
                        <div class="form-holder row no-row-gap margin-10-b">

                            <div class="col-5 col-xs-4">
                                <div class="text circle ease-form">
                                    <input type="text">
                                </div>
                            </div>
                            <div class="col-2 col-xs-4">
                                <div class="select circle ease-form">
                                    <svg class="icon"><use href="#angle-down"/></svg>
                                    <select>
                                        <option value="">Select</option>
                                        <option>First</option>
                                        <option>Second</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-5 col-xs-4">
                                <div class="text circle ease-form">
                                    <input type="text">
                                </div>
                            </div>

                        </div>
                        <div class="form-holder row no-row-gap margin-10-b">

                            <div class="col-5 col-xs-4">
                                <div class="text circle border-dual ease-form">
                                    <input type="text">
                                </div>
                            </div>
                            <div class="col-2 col-xs-4">
                                <div class="select circle border-dual ease-form">
                                    <svg class="icon"><use href="#angle-down"/></svg>
                                    <select>
                                        <option value="">Select</option>
                                        <option>First</option>
                                        <option>Second</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-5 col-xs-4">
                                <div class="text circle border-dual ease-form">
                                    <input type="text">
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="col-12">
                        <label class="form-label padding-10-b">Form Holder with Large Forms</label>
                        <div class="form-holder form-lg row no-row-gap margin-10-b">

                            <div class="col-5 col-xs-4">
                                <div class="text round ease-form">
                                    <input type="text">
                                </div>
                            </div>
                            <div class="col-2 col-xs-4">
                                <div class="select round ease-form">
                                    <svg class="icon"><use href="#angle-down"/></svg>
                                    <select>
                                        <option value="">Select</option>
                                        <option>First</option>
                                        <option>Second</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-5 col-xs-4">
                                <div class="text round ease-form">
                                    <input type="text">
                                </div>
                            </div>

                        </div>
                        <div class="form-holder form-lg row no-row-gap margin-10-b">

                            <div class="col-5 col-xs-4">
                                <div class="text round border-dual ease-form">
                                    <input type="text">
                                </div>
                            </div>
                            <div class="col-2 col-xs-4">
                                <div class="select round border-dual ease-form">
                                    <svg class="icon"><use href="#angle-down"/></svg>
                                    <select>
                                        <option value="">Select</option>
                                        <option>First</option>
                                        <option>Second</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-5 col-xs-4">
                                <div class="text round border-dual ease-form">
                                    <input type="text">
                                </div>
                            </div>

                        </div>
                        <div class="form-holder form-lg row no-row-gap margin-10-b">

                            <div class="col-5 col-xs-4">
                                <div class="text circle ease-form">
                                    <input type="text">
                                </div>
                            </div>
                            <div class="col-2 col-xs-4">
                                <div class="select circle ease-form">
                                    <svg class="icon"><use href="#angle-down"/></svg>
                                    <select>
                                        <option value="">Select</option>
                                        <option>First</option>
                                        <option>Second</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-5 col-xs-4">
                                <div class="text circle ease-form">
                                    <input type="text">
                                </div>
                            </div>

                        </div>
                        <div class="form-holder form-lg row no-row-gap margin-10-b">

                            <div class="col-5 col-xs-4">
                                <div class="text circle border-dual ease-form">
                                    <input type="text">
                                </div>
                            </div>
                            <div class="col-2 col-xs-4">
                                <div class="select circle border-dual ease-form">
                                    <svg class="icon"><use href="#angle-down"/></svg>
                                    <select>
                                        <option value="">Select</option>
                                        <option>First</option>
                                        <option>Second</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-5 col-xs-4">
                                <div class="text circle border-dual ease-form">
                                    <input type="text">
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="col-12 no-padding-v">
                        <label class="form-label">Form Holders with Static Grid</label>
                    </div>
                    <div class="col-6">
                        <div class="form-holder col-static no-fluid">

                            <div class="col-100">
                                <div class="select round ease-form">
                                    <svg class="icon"><use href="#angle-down"/></svg>
                                    <select>
                                        <option value="">Select</option>
                                        <option>First</option>
                                        <option>Second</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row no-row-gap no-fluid">
                                <div class="col-6">
                                    <div class="text round ease-form">
                                        <input type="text">
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="text round ease-form">
                                        <input type="text">
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="col-6">
                        <div class="form-holder col-static no-fluid">

                            <div class="row no-row-gap">
                                <div class="col-12">
                                    <div class="text round ease-form">
                                        <input type="text">
                                    </div>
                                </div>
                            </div>
                            <div class="col-100">
                                <div class="select round ease-form">
                                    <svg class="icon"><use href="#angle-down"/></svg>
                                    <select>
                                        <option value="">Select</option>
                                        <option>First</option>
                                        <option>Second</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row no-row-gap">
                                <div class="col-12">
                                    <div class="text round ease-form">
                                        <input type="text">
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="col-6">
                        <div class="form-holder col-static no-fluid">

                            <div class="col-100">
                                <div class="select round ease-form">
                                    <svg class="icon"><use href="#angle-down"/></svg>
                                    <select>
                                        <option value="">Select</option>
                                        <option>First</option>
                                        <option>Second</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row no-row-gap">
                                <div class="col-12">
                                    <div class="text round ease-form">
                                        <input type="text">
                                    </div>
                                </div>
                            </div>
                            <div class="col-100">
                                <div class="select round ease-form">
                                    <svg class="icon"><use href="#angle-down"/></svg>
                                    <select>
                                        <option value="">Select</option>
                                        <option>First</option>
                                        <option>Second</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="col-6">
                        <div class="form-holder col-static no-fluid">

                            <div class="col-100">
                                <div class="select round border-dual ease-form">
                                    <svg class="icon"><use href="#angle-down"/></svg>
                                    <select>
                                        <option value="">Select</option>
                                        <option>First</option>
                                        <option>Second</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row no-row-gap no-fluid">
                                <div class="col-6">
                                    <div class="text round border-dual ease-form">
                                        <input type="text">
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="text round border-dual ease-form">
                                        <input type="text">
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="col-6">
                        <div class="form-holder col-static no-fluid">

                            <div class="row no-row-gap">
                                <div class="col-12">
                                    <div class="text round border-dual ease-form">
                                        <input type="text">
                                    </div>
                                </div>
                            </div>
                            <div class="col-100">
                                <div class="select round border-dual ease-form">
                                    <svg class="icon"><use href="#angle-down"/></svg>
                                    <select>
                                        <option value="">Select</option>
                                        <option>First</option>
                                        <option>Second</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row no-row-gap">
                                <div class="col-12">
                                    <div class="text round border-dual ease-form">
                                        <input type="text">
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="col-6">
                        <div class="form-holder col-static no-fluid">

                            <div class="row no-row-gap no-fluid">
                                <div class="col-6">
                                    <div class="text circle border-dual ease-form">
                                        <input type="text">
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="text circle border-dual ease-form">
                                        <input type="text">
                                    </div>
                                </div>
                            </div>
                            <div class="col-100">
                                <div class="select circle border-dual ease-form">
                                    <svg class="icon"><use href="#angle-down"/></svg>
                                    <select>
                                        <option value="">Select</option>
                                        <option>First</option>
                                        <option>Second</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="col-6">
                        <div class="form-holder col-static no-fluid">

                            <div class="row no-row-gap">
                                <div class="col-12">
                                    <div class="text circle border-dual ease-form">
                                        <input type="text">
                                    </div>
                                </div>
                            </div>
                            <div class="col-100">
                                <div class="select circle border-dual ease-form">
                                    <svg class="icon"><use href="#angle-down"/></svg>
                                    <select>
                                        <option value="">Select</option>
                                        <option>First</option>
                                        <option>Second</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-100">
                                <div class="select circle border-dual ease-form">
                                    <svg class="icon"><use href="#angle-down"/></svg>
                                    <select>
                                        <option value="">Select</option>
                                        <option>First</option>
                                        <option>Second</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="col-6">
                        <div class="form-holder col-static no-fluid">

                            <div class="col-100">
                                <div class="select circle border-dual ease-form">
                                    <svg class="icon"><use href="#angle-down"/></svg>
                                    <select>
                                        <option value="">Select</option>
                                        <option>First</option>
                                        <option>Second</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row no-row-gap">
                                <div class="col-12">
                                    <div class="text circle border-dual ease-form">
                                        <input type="text">
                                    </div>
                                </div>
                            </div>
                            <div class="col-100">
                                <div class="select circle border-dual ease-form">
                                    <svg class="icon"><use href="#angle-down"/></svg>
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

                <h4>Special Forms</h4>
                <div class="row padding-30-b">
                    <div class="col-3">
                        <label class="form-grid" >Number Form</label>
                    </div>
                    <div class="col-9">
                        <div class="text round border-dual ease-form">
                            <input class="number" type="text" placeholder="Number">
                        </div>
                    </div>

                    <div class="col-3">
                        <label class="form-grid">Spinner Form</label>
                    </div>
                    <div class="col-9">
                        <div class="form-spinner form-holder col-static no-fluid">

                            <div class="row no-row-gap">
                                <div class="col-12">
                                    <div class="text round border-dual ease-form">
                                        <input type="text" value="3" min="2" max="5" class="number align-r">
                                    </div>
                                </div>
                            </div>
                            <div class="col-32">
                                <button class="spinner-down btn btn-square btn-ghost border-dual round ease-btn">
                                    <svg class="icon"><use href="#minus"/></svg>
                                </button>
                            </div>
                            <div class="col-32">
                                <button class="spinner-up btn btn-square btn-ghost border-dual round ease-btn">
                                    <svg class="icon"><use href="#plus"/></svg>
                                </button>
                            </div>

                        </div>
                    </div>

                    <div class="col-3">
                        <label class="form-grid">Currency Spinner</label>
                    </div>
                    <div class="col-9">
                        <div class="currency-spinner form-holder col-static no-fluid">

                            <div class="col-32">
                                <button class="currency-down btn btn-square btn-ghost border-dual round ease-btn">
                                    <svg class="icon"><use href="#minus"/></svg>
                                </button>
                            </div>
                            <div class="row no-row-gap">
                                <div class="col-12">
                                    <div class="text round border-dual ease-form">
                                        <input type="text" value="645.000" min="645.000" step="5.000" maxlength="12" autocomplete="off">
                                    </div>
                                </div>
                            </div>
                            <div class="col-32">
                                <button class="currency-up btn btn-square btn-ghost border-dual round ease-btn">
                                    <svg class="icon"><use href="#plus"/></svg>
                                </button>
                            </div>

                        </div>
                    </div>

                    <div class="col-3">
                        <label class="form-grid">Toggle Password</label>
                    </div>
                    <div class="col-9">
                        <div class="text text-icon round border-dual ease-form">
                            <button type="button" title="Toggle Password" class="show-pass">
                                <svg class="icon"><use href="#eye-fill"/></svg>
                            </button>
                            <input type="password" placeholder="Toggle Password Example" autocomplete="current-password">
                        </div>
                    </div>
                </div>

                <h4>Required Forms</h4>
                <div class="padding-30-b">
                    <form action="#succesful" onsubmit="return ui.alerts.dialog({msg: 'Submit this form?', success: 'Yes', error: 'No', callback: function (value) { if (value === 'success') { document.getElementById('submitForm').submit(); } }});">
                        <div class="row">
                            <div class="col-3">
                                <label class="form-grid">Required with disabled forms</label>
                            </div>
                            <div class="col-9">
                                <div class="text round border-dual form-disabled ease-form">
                                    <input class="required" type="text" placeholder="Disabled required forms are inherited!" disabled>
                                </div>
                            </div>

                            <div class="col-3">
                                <label class="form-grid">Required with message</label>
                            </div>
                            <div class="col-9">
                                <div class="text round border-dual ease-form">
                                    <input class="required" type="text" placeholder="Type your name">
                                </div>
                                <p class="required-msg">Please, type your name.</p>
                                <i class="hint font-color-black-muted">* Required</i>
                            </div>

                            <div class="col-3">
                                <label class="form-grid">Required with no message</label>
                            </div>
                            <div class="col-9">
                                <div class="text round border-dual ease-form">
                                    <input class="required" type="text">
                                </div>
                                <i class="hint font-color-black-muted">* Required</i>
                            </div>

                            <div class="col-3">
                                <label class="form-grid">Required with min and max length</label>
                            </div>
                            <div class="col-9">
                                <div class="text round border-dual ease-form">
                                    <input class="required" type="text" minlength="3" maxlength="10">
                                </div>
                                <p class="required-msg">Minimum length is 3 characters.</p>
                                <i class="hint font-color-black-muted">* Required</i>
                            </div>

                            <div class="col-3">
                                <label class="form-grid">Required with min and max number</label>
                            </div>
                            <div class="col-9">
                                <div class="text round border-dual ease-form">
                                    <input class="required" type="text" minnumber="-5" maxnumber="10">
                                </div>
                                <p class="required-msg">Minimum number is -5 and maximum number is 10.</p>
                                <i class="hint font-color-black-muted">* Required</i>
                            </div>

                            <div class="col-3">
                                <label class="form-grid">Required with password and min length</label>
                            </div>
                            <div class="col-9">
                                <div class="text round border-dual ease-form">
                                    <input class="required" type="password" minlength="8" autocomplete="current-password">
                                </div>
                                <p class="required-msg">Minimum length is 8 characters.</p>
                                <i class="hint font-color-black-muted">* Required</i>
                            </div>

                            <div class="col-3">
                                <label class="form-grid">Required with email</label>
                            </div>
                            <div class="col-9">
                                <div class="text round border-dual ease-form">
                                    <input class="required" type="email">
                                </div>
                                <p class="required-msg">Enter a valid email.</p>
                                <i class="hint font-color-black-muted">* Required</i>
                            </div>

                            <div class="col-3">
                                <label class="form-grid">Required with select forms.</label>
                            </div>
                            <div class="col-9">
                                <div class="select round border-dual ease-form">
                                    <svg class="icon"><use href="#angle-down"/></svg>
                                    <select class="required">
                                        <option value="">Select</option>
                                        <option>First</option>
                                        <option>Second</option>
                                    </select>
                                </div>
                                <p class="required-msg">Please, select any option.</p>
                                <i class="hint font-color-black-muted">* Required</i>
                            </div>

                            <div class="col-3">
                                <label class="form-grid">Required with form holders</label>
                            </div>
                            <div class="col-9">
                                <div class="form-holder col-static no-fluid">

                                    <div class="row no-row-gap">
                                        <div class="col-12">
                                            <div class="text round border-dual ease-form">
                                                <input class="required" type="text" placeholder="Keyword">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-200">
                                        <div class="select round border-dual ease-form">
                                            <svg class="icon"><use href="#angle-down"/></svg>
                                            <select class="required">
                                                <option value="">Category</option>
                                                <option>First</option>
                                                <option>Second</option>
                                            </select>
                                        </div>
                                    </div>

                                </div>
                                <div class="required-msg">
                                    <b>Please, complete these actions:</b>
                                    <ul>
                                        <li>Type a keyword.</li>
                                        <li>Select a category.</li>
                                    </ul>
                                </div>
                                <i class="hint font-color-black-muted">* Required</i>
                            </div>

                            <div class="col-3">
                                <label class="form-grid">Required with textarea forms and min length.</label>
                            </div>
                            <div class="col-9">
                                <div class="textarea margin-10-b round border-dual ease-form">
                                    <textarea class="required" placeholder="Write your comments." minlength="10"></textarea>
                                </div>
                                <p class="required-msg">Please, write your comments more than 10 characters.</p>
                                <i class="hint font-color-black-muted">* Required</i>
                            </div>

                            <div class="col-3">
                                <label class="form-grid">Required with textarea forms and min length.</label>
                            </div>
                            <div class="col-9">
                                <div class="file round border-dual ease-form">
                                    <input class="required" type="file">
                                    <span class="btn ease-btn">Browse</span>
                                    <i>Choose file.</i>
                                </div>
                                <p class="required-msg">Please, select a file.</p>
                                <i class="hint font-color-black-muted">* Required</i>
                            </div>

                            <div class="col-3">
                                <label class="form-grid">Required with checkboxes.</label>
                            </div>
                            <div class="col-9">
                                <div class="required-accept">
                                    <label class="check">
                                        <input class="required" type="checkbox"> Checkbox
                                    </label>
                                </div>
                                <p class="required-msg">Please, read and accept Terms and Conditions.</p>
                                <i class="hint font-color-black-muted">* Required for accepting <a href="#" class="underline">Terms and Conditions.</a></i>
                            </div>

                            <div class="col-3">
                                <label class="form-grid">Required with indeterminate checkboxes.</label>
                            </div>
                            <div class="col-9">
                                <div class="required-accept">
                                    <label class="check">
                                        <input class="required indeterminate" type="checkbox"> Indeterminate
                                    </label>
                                </div>
                                <p class="required-msg">Please, read and accept Terms and Conditions.</p>
                                <i class="hint font-color-black-muted">* Required for accepting <a href="#" class="underline">Terms and Conditions.</a></i>
                            </div>

                            <div class="col-3">
                                <label class="form-grid">Required with custom checks.</label>
                            </div>
                            <div class="col-9">
                                <div class="required-accept">
                                    <label class="custom">
                                        <span class="check-custom round border-dual">
                                            <input class="required" type="checkbox">
                                            <i class="state"></i>
                                        </span>
                                        <b>Custom Checkbox</b>
                                    </label>
                                </div>
                                <p class="required-msg">Please, check this checkbox.</p>
                                <i class="hint font-color-black-muted">* Required</i>
                            </div>

                            <div class="col-3">
                                <label class="form-grid">Required with radios.</label>
                            </div>
                            <div class="col-9">
                                <div class="required-accept">
                                    <label class="radio">
                                        <input class="required" type="radio" name="radiotest3"> Radio1
                                    </label>
                                    <label class="radio">
                                        <input class="required" type="radio" name="radiotest3"> Radio2
                                    </label>
                                    <label class="radio">
                                        <input class="required" type="radio" name="radiotest3"> Radio3
                                    </label>
                                </div>
                                <p class="required-msg">Please, select any option.</p>
                                <i class="hint font-color-black-muted">* Required</i>
                            </div>

                            <div class="col-3">
                                <label class="form-grid">Required with custom radios.</label>
                            </div>
                            <div class="col-9">
                                <div class="required-accept">
                                    <label class="custom">
                                        <span class="radio-custom border-dual ease-form">
                                            <input class="required" type="radio" name="radiotest4">
                                            <i class="state"></i>
                                        </span>
                                        <b>Custom Radio1</b>
                                    </label>
                                    <label class="custom">
                                        <span class="radio-custom border-dual ease-form">
                                            <input class="required" type="radio" name="radiotest4">
                                            <i class="state"></i>
                                        </span>
                                        <b>Custom Radio2</b>
                                    </label>
                                    <label class="custom">
                                        <span class="radio-custom border-dual ease-form">
                                            <input class="required" type="radio" name="radiotest4">
                                            <i class="state"></i>
                                        </span>
                                        <b>Custom Radio2</b>
                                    </label>
                                </div>
                                <p class="required-msg">Please, select any option.</p>
                                <i class="hint font-color-black-muted">* Required</i>
                            </div>

                            <div class="col-3">
                                <label class="form-grid">Required with custom checks.</label>
                            </div>
                            <div class="col-9">
                                <div class="required-accept">
                                    <label class="custom">
                                        <span class="switch-custom round border-dual ease-form">
                                            <input class="required" type="checkbox">
                                            <i class="state"></i>
                                        </span>
                                        <b>Custom Switch</b>
                                    </label>
                                </div>
                                <p class="required-msg">Please, read and accept Terms and Conditions.</p>
                                <i class="hint font-color-black-muted">* Required for accepting <a href="#" class="underline">Terms and Conditions.</a></i>
                            </div>

                            <div class="col-9 push-3 ease-1st-btn">
                                <button type="reset" class="btn btn-xs-fluid round">Reset Form</button>
                                <button type="submit" class="btn btn-xs-fluid round theme-sub ui-fill-dark-100">Submit Form</button>
                            </div>
                        </div>
                    </form>
                </div>

                <h4>Forms in Dark Themes</h4>
                <div class="padding-15 margin-30-b round theme-base ui-fill-dark-100">

                    <div class="text form-light margin-10-b round border-dual ease-form">
                        <input type="text" placeholder="Placeholder">
                    </div>
                    <div class="text text-icon form-light margin-10-b round border-dual ease-form">
                        <svg class="icon"><use href="#search"/></svg>
                        <input type="text" placeholder="With text icon">
                    </div>
                    <div class="text error form-light margin-10-b round border-dual ease-form">
                        <input type="text" placeholder="Error Form">
                    </div>
                    <div class="text error form-light margin-10-b round no-border ease-form">
                        <input type="text" placeholder="Error Form">
                    </div>
                    <div class="text warning form-light margin-10-b round border-dual ease-form">
                        <input type="text" placeholder="Warning Form">
                    </div>
                    <div class="text warning form-light round no-border ease-form">
                        <input type="text" placeholder="Warning Form">
                    </div>

                    <span class="sp-30"></span>

                    <div class="text form-disabled form-light margin-10-b round border-dual ease-form">
                        <input type="text" disabled value="Disabled Input">
                    </div>
                    <div class="textarea form-disabled form-light margin-10-b round border-dual ease-form">
                        <textarea disabled>Disabled Textarea</textarea>
                    </div>

                    <div class="text form-readonly form-light margin-10-b round border-dual ease-form">
                        <input type="text" readonly value="Readonly Input">
                    </div>
                    <div class="textarea form-readonly form-light round border-dual ease-form">
                        <textarea readonly>Readonly Textarea</textarea>
                    </div>

                    <span class="sp-30"></span>

                    <label class="form-label">Multi Select Example</label>
                    <div class="select-multi form-light round border-dual ease-form">
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
                    <span class="sp-30"></span>

                    <label class="form-label">Form Holder Example</label>
                    <div class="form-holder row no-row-gap no-fluid margin-10-b">

                        <div class="col-5">
                            <div class="text round border-dual form-light ease-form">
                                <input type="text">
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="select round border-dual form-light ease-form">
                                <svg class="icon"><use href="#angle-down"/></svg>
                                <select>
                                    <option value="">Select</option>
                                    <option>First</option>
                                    <option>Second</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-5">
                            <div class="text round border-dual form-light ease-form">
                                <input type="text">
                            </div>
                        </div>

                    </div>
                    <div class="form-holder row no-row-gap no-fluid margin-10-b error">

                        <div class="col-5">
                            <div class="text round border-dual form-light ease-form">
                                <input type="text">
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="select round border-dual form-light ease-form">
                                <svg class="icon"><use href="#angle-down"/></svg>
                                <select>
                                    <option value="">Select</option>
                                    <option>First</option>
                                    <option>Second</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-5">
                            <div class="text round border-dual form-light ease-form">
                                <input type="text">
                            </div>
                        </div>

                    </div>
                    <div class="form-holder row no-row-gap no-fluid margin-10-b warning">

                        <div class="col-5">
                            <div class="text round border-dual form-light ease-form">
                                <input type="text">
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="select round border-dual form-light ease-form">
                                <svg class="icon"><use href="#angle-down"/></svg>
                                <select>
                                    <option value="">Select</option>
                                    <option>First</option>
                                    <option>Second</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-5">
                            <div class="text round border-dual form-light ease-form">
                                <input type="text">
                            </div>
                        </div>

                    </div>

                    <span class="sp-20"></span>

                    <label class="form-label">Captcha</label>
                    <div class="form-holder col-static no-fluid">

                        <div class="col-75">
                            <img class="img-fluid border-dual border-light round ease-border" src="img/captcha.jpg" alt="">
                        </div>
                        <div class="col-32">
                            <button class="btn btn-square btn-ghost border-dual border-light ease-btn">
                                <!-- for loading toggle "animate-spin" -->
                                <svg class="icon no-opacity animate-spin"><use href="#sync"/></svg>
                            </button>
                        </div>
                        <div class="row no-row-gap">
                            <div class="col-12">
                                <div class="text border-dual round form-light ease-form">
                                    <input type="text" maxlength="4" placeholder="Please enter code">
                                </div>
                            </div>
                        </div>

                    </div>

                    <span class="sp-30"></span>

                    <form action="#successful">

                        <div class="text text-icon form-light margin-10-b round border-dual ease-form">
                            <button type="submit">
                                <svg class="icon"><use href="#search"/></svg>
                            </button>
                            <input class="required" type="text" placeholder="Required example with text icon post">
                        </div>
                        <p class="required-msg">Please, enter any keywords.</p>
                        <i class="hint font-color-white-muted">* Required</i>

                    </form>

                    <span class="sp-10"></span>

                    <div class="textarea round border-dual form-light ease-form" data-ui-counter="255">
                        <textarea class="required" rows="4" placeholder="Required example with counter textarea" minlength="10"></textarea>
                    </div>
                    <p class="required-msg">Please, write your comments more than 10 characters.</p>
                    <i class="hint font-color-white-muted">* Required</i>

                </div>

                <h4>Different Form Styles</h4>
                <div class="row">
                    <div class="col-3">
                        <label class="form-grid">light border with no radius style:</label>
                    </div>
                    <div class="col-9 ease-1st-form">

                        <div class="text margin-10-b">
                            <input type="text">
                        </div>
                        <div class="text error margin-10-b">
                            <input type="text" placeholder="Error Form">
                        </div>
                        <div class="text warning margin-10-b">
                            <input type="text" placeholder="Warning Form">
                        </div>
                        <div class="select margin-10-b">
                            <svg class="icon"><use href="#angle-down"/></svg>
                            <select>
                                <option value="">Select</option>
                                <option>First</option>
                                <option>Second</option>
                            </select>
                        </div>

                        <div class="textarea margin-10-b">
                            <textarea placeholder="Textarea"></textarea>
                        </div>
                        <div class="textarea toggle-textarea margin-10-b">
                            <textarea placeholder="Toggle Textarea"></textarea>
                        </div>

                        <label class="custom">
                            <span class="check-custom">
                                <input type="checkbox" checked>
                                <i class="state"></i>
                            </span>
                            <b>Custom Checkbox</b>
                        </label>
                        <label class="custom">
                            <span class="radio-custom">
                                <input type="radio" checked>
                                <i class="state"></i>
                            </span>
                            <b>Custom Radio</b>
                        </label>
                        <label class="custom">
                            <span class="switch-custom">
                                <input type="checkbox" checked>
                                <i class="state"></i>
                            </span>
                            <b>Custom Switch</b>
                        </label>

                    </div>

                    <div class="col-3">
                        <label class="form-grid">Inner shadow with no radius and no border style:</label>
                    </div>
                    <div class="col-9 ease-1st-form">

                        <div class="text margin-10-b shadow-in no-border">
                            <input type="text">
                        </div>
                        <div class="text error margin-10-b shadow-in no-border">
                            <input type="text" placeholder="Error Form">
                        </div>
                        <div class="text warning margin-10-b shadow-in no-border">
                            <input type="text" placeholder="Warning Form">
                        </div>
                        <div class="select margin-10-b shadow-in no-border">
                            <svg class="icon"><use href="#angle-down"/></svg>
                            <select>
                                <option value="">Select</option>
                                <option>First</option>
                                <option>Second</option>
                            </select>
                        </div>

                        <div class="textarea margin-10-b shadow-in no-border">
                            <textarea placeholder="Textarea"></textarea>
                        </div>
                        <div class="textarea toggle-textarea margin-10-b shadow-in no-border">
                            <textarea placeholder="Toggle Textarea"></textarea>
                        </div>

                        <label class="custom">
                            <span class="check-custom shadow-in no-border">
                                <input type="checkbox" checked>
                                <i class="state"></i>
                            </span>
                            <b>Custom Checkbox</b>
                        </label>
                        <label class="custom">
                            <span class="radio-custom shadow-in no-border">
                                <input type="radio" checked>
                                <i class="state"></i>
                            </span>
                            <b>Custom Radio</b>
                        </label>
                        <label class="custom">
                            <span class="switch-custom shadow-in no-border">
                                <input type="checkbox" checked>
                                <i class="state"></i>
                            </span>
                            <b>Custom Switch</b>
                        </label>

                    </div>

                    <div class="col-3">
                        <label class="form-grid">Using themes with no radius and no border style:</label>
                    </div>
                    <div class="col-9 ease-1st-form theme-gray">

                        <div class="text margin-10-b round no-border ui-fill-light-100">
                            <input type="text">
                        </div>
                        <div class="text error margin-10-b round no-border ui-fill-light-100">
                            <input type="text" placeholder="Error Form">
                        </div>
                        <div class="text warning margin-10-b round no-border ui-fill-light-100">
                            <input type="text" placeholder="Warning Form">
                        </div>
                        <div class="select margin-10-b round no-border ui-fill-light-100">
                            <svg class="icon"><use href="#angle-down"/></svg>
                            <select>
                                <option value="">Select</option>
                                <option>First</option>
                                <option>Second</option>
                            </select>
                        </div>

                        <div class="textarea margin-10-b round no-border ui-fill-light-100">
                            <textarea placeholder="Textarea"></textarea>
                        </div>
                        <div class="textarea toggle-textarea margin-10-b round no-border ui-fill-light-100">
                            <textarea placeholder="Toggle Textarea"></textarea>
                        </div>

                        <label class="custom">
                            <span class="check-custom ui-fill-light-100">
                                <input type="checkbox" checked>
                                <i class="state ui-fill-dark-100"></i>
                            </span>
                            <b>Custom Checkbox</b>
                        </label>
                        <label class="custom">
                            <span class="radio-custom ui-fill-light-100">
                                <input type="radio" checked>
                                <i class="state ui-fill-dark-100"></i>
                            </span>
                            <b>Custom Radio</b>
                        </label>
                        <label class="custom">
                            <span class="switch-custom ui-fill-light-100">
                                <input type="checkbox" checked>
                                <i class="state ui-fill-dark-100"></i>
                            </span>
                            <b>Custom Switch</b>
                        </label>

                    </div>
                </div>

            </div>
        </div>
    </div>
</main>