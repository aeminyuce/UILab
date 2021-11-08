<main class="ui-container ui-no-gutter">
    <div class="ui-fixed ui-padding-30-v">

        <h3>Calendar Styles</h3>
        <div class="ui-row ui-padding-30-b">
            <div class="ui-col-4 ui-col-md-6">
                <div class="ui-calendar ui-ease-calendar"></div>
            </div>
            <div class="ui-col-4 ui-col-md-6">
                <div class="ui-calendar ui-ease-calendar ui-round"></div>
            </div>
            <div class="ui-col-4 ui-col-md-6">
                <div class="ui-calendar ui-ease-calendar ui-round shadow"></div>
            </div>
            <div class="ui-col-4 ui-col-md-6">
                <div class="ui-calendar ui-ease-calendar ui-no-padding ui-margin-5 shadow-lg ui-theme-sub ui-fill-dark-200"></div>
            </div>
            <div class="ui-col-4 ui-col-md-6">
                <div class="ui-calendar ui-ease-calendar ui-round ui-theme-sub ui-fill-dark-100"></div>
            </div>
            <div class="ui-col-4 ui-col-md-6">
                <div class="ui-calendar ui-ease-calendar ui-round shadow-lg ui-theme-base ui-fill-dark-100"></div>
            </div>
        </div>

        <h3>Calendars with Defined Dates</h3>
        <div class="ui-row ui-sm-fluid ui-padding-30-b ui-block-2nd">
            <div class="ui-col-6">
                <b class="ui-margin-5-b">Previous Month: data-ui-date="prev"</b>
                <div class="ui-calendar ui-ease-calendar ui-round shadow" data-ui-date="prev"></div>
            </div>
            <div class="ui-col-6">
                <b class="ui-margin-5-b">Next Month: data-ui-date="next"</b>
                <div class="ui-calendar ui-ease-calendar ui-round shadow" data-ui-date="next"></div>
            </div>
            <div class="ui-col-6">
                <b class="ui-margin-5-b">Show Defined Month: data-ui-date="10"</b>
                <div class="ui-calendar ui-ease-calendar ui-round shadow" data-ui-date="10"></div>
            </div>
            <div class="ui-col-6">
                <b class="ui-margin-5-b">Show Defined Year and Month: data-ui-date="2012,1"</b>
                <div class="ui-calendar ui-ease-calendar ui-round shadow" data-ui-date="2012,1"></div>
            </div>
        </div>

        <form action="#succesful">

            <h3>Calendar Pickers</h3>
            <div class="ui-row ui-sm-fluid ui-padding-30-b ui-ease-2nd-form">
                <div class="ui-col-12">
                    <div class="ui-calendar-picker text text-icon-l ui-round ui-border-dual form-inline-xs">
                        <svg class="ui-icon"><use href="#calendar"/></svg>
                        <input type="text">
                    </div>
                </div>
                <div class="ui-col-6">
                    <div class="ui-calendar-picker text text-icon-l ui-round ui-border-dual">
                        <svg class="ui-icon"><use href="#calendar"/></svg>
                        <input type="text">
                    </div>
                </div>
                <div class="ui-col-6">
                    <div class="ui-calendar-picker text text-icon-l ui-round ui-border-dual">
                        <svg class="ui-icon"><use href="#calendar"/></svg>
                        <input type="text">
                    </div>
                </div>
            </div>

            <h3>Calendar Pickers with Filled Forms</h3>
            <div class="ui-row ui-sm-fluid ui-padding-30-b form-lg ui-ease-2nd-form">
                <div class="ui-col-6">
                    <div class="ui-calendar-picker text text-icon-l ui-round ui-border-dual">
                        <svg class="ui-icon"><use href="#calendar"/></svg>
                        <input type="text" value="2/5/2016">
                    </div>
                </div>
                <div class="ui-col-6">
                    <div class="ui-calendar-picker text text-icon-l ui-round ui-border-dual">
                        <svg class="ui-icon"><use href="#calendar"/></svg>
                        <input type="text" value="02/05/2016">
                    </div>
                </div>
            </div>

        </form>

        <h3>Calendar Details</h4>
        <div class="ui-row ui-sm-fluid ui-padding-30-b">
            <div class="ui-col-6">
                <div class="ui-calendar ui-ease-calendar ui-round" data-ui-src="json/calendar.json" data-ui-date="2019,6"></div>
            </div>
            <div class="ui-col-6">
                <div class="ui-calendar ui-ease-calendar ui-round ui-theme-sub ui-fill-dark-200" data-ui-src="json/calendar.json" data-ui-date="2019,6"></div>
            </div>
        </div>

    </div>
</main>
