<main class="container no-gutter">
    <div class="fixed padding-30-v">

        <h4>Calendar Styles</h4>
        <div class="row padding-30-b">
            <div class="col-4 col-md-6">
                <div class="calendar ease-calendar"></div>
            </div>
            <div class="col-4 col-md-6">
                <div class="calendar ease-calendar round"></div>
            </div>
            <div class="col-4 col-md-6">
                <div class="calendar ease-calendar round shadow"></div>
            </div>
            <div class="col-4 col-md-6">
                <div class="calendar ease-calendar no-padding margin-5 shadow-lg ui-theme-sub ui-fill-dark-100"></div>
            </div>
            <div class="col-4 col-md-6">
                <div class="calendar ease-calendar round ui-theme-sub ui-fill-dark-300"></div>
            </div>
            <div class="col-4 col-md-6">
                <div class="calendar ease-calendar round shadow-lg ui-theme-base ui-fill-dark-100"></div>
            </div>
            <div class="col-4 col-md-6">
                <div class="calendar ease-calendar no-padding margin-5 shadow-lg ui-theme-yellow ui-fill-dark-100"></div>
            </div>
            <div class="col-4 col-md-6">
                <div class="calendar ease-calendar round ui-theme-orange ui-fill-dark-100"></div>
            </div>
            <div class="col-4 col-md-6">
                <div class="calendar ease-calendar round shadow-lg ui-theme-green ui-fill-dark-100"></div>
            </div>
        </div>

        <h4>Calendars with Defined Dates</h4>
        <div class="row sm-fluid padding-30-b block-2nd">
            <div class="col-6">
                <b class="margin-5-b">Previous Month: data-ui-date="prev"</b>
                <div class="calendar ease-calendar round shadow" data-ui-date="prev"></div>
            </div>
            <div class="col-6">
                <b class="margin-5-b">Next Month: data-ui-date="next"</b>
                <div class="calendar ease-calendar round shadow" data-ui-date="next"></div>
            </div>
            <div class="col-6">
                <b class="margin-5-b">Show Defined Month: data-ui-date="10"</b>
                <div class="calendar ease-calendar round shadow" data-ui-date="10"></div>
            </div>
            <div class="col-6">
                <b class="margin-5-b">Show Defined Year and Month: data-ui-date="2012,1"</b>
                <div class="calendar ease-calendar round shadow" data-ui-date="2012,1"></div>
            </div>
        </div>

        <form action="#succesful">

            <h4>Calendar Pickers</h4>
            <div class="row sm-fluid padding-30-b ease-2nd-form">
                <div class="col-12">
                    <div class="calendar-picker text text-icon-l round border-dual form-inline-xs">
                        <svg class="icon"><use href="#calendar"/></svg>
                        <input type="text">
                    </div>
                </div>
                <div class="col-6">
                    <div class="calendar-picker text text-icon-l round border-dual">
                        <svg class="icon"><use href="#calendar"/></svg>
                        <input type="text">
                    </div>
                </div>
                <div class="col-6">
                    <div class="calendar-picker text text-icon-l round border-dual">
                        <svg class="icon"><use href="#calendar"/></svg>
                        <input type="text">
                    </div>
                </div>
            </div>

            <h4>Calendar Pickers with Filled Forms</h4>
            <div class="row sm-fluid padding-30-b form-lg ease-2nd-form">
                <div class="col-6">
                    <div class="calendar-picker text text-icon-l round border-dual">
                        <svg class="icon"><use href="#calendar"/></svg>
                        <input type="text" value="2/5/2016">
                    </div>
                </div>
                <div class="col-6">
                    <div class="calendar-picker text text-icon-l round border-dual">
                        <svg class="icon"><use href="#calendar"/></svg>
                        <input type="text" value="02/05/2016">
                    </div>
                </div>
            </div>

        </form>

        <h4>Calendar Details</h4>
        <div class="row sm-fluid padding-30-b">
            <div class="col-6">
                <div class="calendar ease-calendar round" data-ui-src="json/calendar.json" data-ui-date="2019,6"></div>
            </div>
            <div class="col-6">
                <div class="calendar ease-calendar round ui-theme-sub ui-fill-dark-100" data-ui-src="json/calendar.json" data-ui-date="2019,6"></div>
            </div>
        </div>

    </div>
</main>
