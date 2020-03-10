<!-- custom js -->
<script>

    lineCharts.top = 18; // set top space (px)
    lineCharts.left = 6; // set left space (px)

    lineCharts.showBgGrid = false; // set showing bg grid
    lineCharts.showGridText = false; // set showing grid numbers
    lineCharts.showInfo = false; // set showing info

    lineCharts.gridStroke = 0; // set grid stroke width

</script>

<main class="container no-gutter">
    <div class="fixed padding-30-v">

        <div class="col-static">

            <div class="row">
                <div class="col-12">

                    <div class="carousel-gallery">
                        <div class="detail shadow-lg">
                            <img src="img/house_01.jpg" class="round photo-gallery-call cursor-pointer img-fluid ease-layout" data-target="#detail-carousel" data-count="0" alt="">
                            <svg class="zoom-icon icon"><use href="#expand-wide"></use></svg>
                            <svg class="loader-icon icon"><use href="#loader-line"></use></svg>
                        </div>
                        <div id="detail-carousel" class="carousel thumbs half-sized" data-col="6" data-col-md="5" data-col-sm="4" data-col-xs="3">
                            <div class="carousel-slider ease-2nd-layout ease-layout ease-slow photo-gallery-passive">
                                <div class="slide-content">
                                    <img class="img round ease-default selected" src="img/house_01.jpg" data-href="img/house_01.jpg" alt="">
                                </div>
                                <div class="slide-content">
                                    <img class="img round ease-default" src="img/house_02.jpg" data-href="img/house_02.jpg" alt="">
                                </div>
                                <div class="slide-content">
                                    <img class="img round ease-default" src="img/house_03.jpg" data-href="img/house_03.jpg" alt="">
                                </div>
                                <div class="slide-content">
                                    <img class="img round ease-default" src="img/house_04.jpg" data-href="img/house_04.jpg" alt="">
                                </div>
                                <div class="slide-content">
                                    <img class="img round ease-default" src="img/house_05.jpg" data-href="img/house_05.jpg" alt="">
                                </div>
                                <div class="slide-content">
                                    <img class="img round ease-default" src="img/house_01.jpg" data-href="img/house_01.jpg" alt="">
                                </div>
                                <div class="slide-content">
                                    <img class="img round ease-default" src="img/house_02.jpg" data-href="img/house_02.jpg" alt="">
                                </div>
                                <div class="slide-content">
                                    <img class="img round ease-default" src="img/house_03.jpg" data-href="img/house_03.jpg" alt="">
                                </div>
                                <div class="slide-content">
                                    <img class="img round ease-default" src="img/house_04.jpg" data-href="img/house_04.jpg" alt="">
                                </div>
                                <div class="slide-content">
                                    <img class="img round ease-default" src="img/house_05.jpg" data-href="img/house_05.jpg" alt="">
                                </div>
                            </div>
                            <div class="carousel-nav ease-1st-btn">
                                <button class="carousel-prev btn btn-ghost btn-square round">
                                    <svg class="icon"><use href="#angle-left"></use></svg>
                                </button>
                                <span class="dots dark"></span>
                                <button class="carousel-next btn btn-ghost btn-square round">
                                    <svg class="icon"><use href="#angle-right"></use></svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="card round shadow-lg">
                        <div class="padding-30 large align-justify">
                            <h4>Details</h4>
                            Each villa has been meticulously designed to meet all the demands that a luxury villa has to provide as well as offer a contemporary image of great beauty.
                            <span class="sp20"></span>
                            Villas, although of different size, have 4 bedrooms and 5 bathrooms located on ground floor and first. A large basement will locate another bedroom service, bathroom and common areas that can be allocated to gym, cinema, game room.
                            <span class="sp20"></span>
                            In addition, all three have a large solarium where you can enjoy both the views and the surrounding environment.
                            <span class="sp20"></span>
                            A unique opportunity in a highly sought after location that begins to be considered as the New Golden Mile.
                            <span class="sp20"></span>
                            The development of 3 luxury villas is planned in the residential neighborhood.
                        </div>
                        <div class="padding-30 border-t">
                            <h4 class="margin-15-b">Power Saving Statistics</h4>
                            <svg class="icon icon-xl left margin-5-t margin-10-r"><use href="#bolt"></use></svg>
                            <ul class="list-unstyled padding-2-t">
                                <li><b>Power per Month:</b> 4,86 kWp</li>
                                <li><b>Yearly Output:</b> 4900 kWp</li>
                            </ul>
                        </div>
                        <div class="padding-15-b padding-30-h">
                            <div class="row row-lg-gap">
                                <div class="col-5x col-sm-4 col-xs-6">
                                    <div class="pie-chart ease-pie-chart" data-text="Total">
                                        <ul>
                                            <li data-percent="78" data-fill="#a4e87b"></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-5x col-sm-4 col-xs-6">
                                    <div class="donut-chart ease-donut-chart">
                                        <strong>
                                            <span class="large light">Interior</span>
                                            <span class="sp2"></span>4,9/5
                                        </strong>
                                        <svg viewBox="0 0 160 160">
                                            <circle r="69.85699" cy="80" cx="80" class="bg" data-percent="100" />
                                            <circle r="69.85699" cy="80" cx="80" stroke="#75dbe7" data-percent="96" />
                                        </svg>
                                    </div>
                                </div>
                                <div class="col-5x col-sm-4 col-xs-6">
                                    <div class="donut-chart ease-donut-chart">
                                        <strong>
                                            <span class="large light">Exterior</span>
                                            <span class="sp2"></span>4/5
                                        </strong>
                                        <svg viewBox="0 0 160 160">
                                            <circle r="69.85699" cy="80" cx="80" class="bg" data-percent="100" />
                                            <circle r="69.85699" cy="80" cx="80" stroke="#69aff4" data-percent="88" />
                                        </svg>
                                    </div>
                                </div>
                                <div class="col-5x col-sm-4 col-xs-6">
                                    <div class="donut-chart ease-donut-chart">
                                        <strong>
                                            <span class="large light">Quality</span>
                                            <span class="sp2"></span>4/5
                                        </strong>
                                        <svg viewBox="0 0 160 160">
                                            <circle r="69.85699" cy="80" cx="80" class="bg" data-percent="100" />
                                            <circle r="69.85699" cy="80" cx="80" stroke="#e78d44" data-percent="86" />
                                        </svg>
                                    </div>
                                </div>
                                <div class="col-5x col-sm-4 col-xs-6">
                                    <div class="donut-chart ease-donut-chart">
                                        <strong>
                                            <span class="large light">Savings</span>
                                            <span class="sp2"></span>3.9/5
                                        </strong>
                                        <svg viewBox="0 0 160 160">
                                            <circle r="69.85699" cy="80" cx="80" class="bg" data-percent="100" />
                                            <circle r="69.85699" cy="80" cx="80" stroke="#cd7be8" data-percent="80" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="dark small align-c padding-10">
                                <b>Yearly Savings Costs: $18.970</b>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="col-400 padding-10">

                <div class="card align-c round shadow-lg theme-default2">
                    <div class="card-side padding-10-v ui-x-dark">
                        <ul class="list-inline countdown no-user-select">
                            <li class="padding-10-v padding-15-h hidden-xs">
                                <svg class="icon icon-xxl"><use href="#history"></use></svg>
                            </li>
                            <li class="padding-5"><b class="d xx-large block">12</b>Days</li>
                            <li class="padding-5"><b class="h xx-large block">22</b>Hours</li>
                            <li class="padding-5"><b class="m xx-large block">01</b>Minutes</li>
                            <li class="padding-5"><b class="s xx-large block">17</b>Seconds</li>
                        </ul>
                    </div>
                    <div class="padding-3 ui-dark stripe-light border-v border-light animate-progress">
                    </div>
                    <div class="card-side padding-5 ui-dark">
                        <b class="small xx-light">Closing: 10 August, 2018, Friday</b>
                    </div>
                </div>

                <div class="card align-c round shadow-lg theme-default2">
                    <ul class="list-inline list-gap padding-30 padding-15-b icons-lg icons-margin-5-r theme-gray inline-block-1st">
                        <li>
                            <svg class="icon"><use href="#floor-plan"></use></svg>
                            <span class="large">7+1</span>
                        </li>
                        <li>
                            <svg class="icon"><use href="#house-surface"></use></svg>
                            <span class="large">628m<sup>2</sup></span>
                        </li>
                        <li>
                            <svg class="icon"><use href="#house-floor"></use></svg>
                            Ground Floor
                        </li>
                    </ul>
                    <div class="padding-15-b">
                        <svg class="icon dark"><use href="#marker"></use></svg>
                        <span class="dark">Location: <b>New York</b></span>
                    </div>
                    <div class="padding-10 border-t">
                        Real Estate ID: <b>RE-616</b>
                    </div>
                </div>

                <div class="card margin-20-b round shadow-lg">
                    <div class="padding-30-h padding-10-v">
                        <b>Previous Offers / <span style="color: #ff9f40;">Averages</span></b>
                        <div class="line-charts ease-line-charts" data-size="5,20" data-x="1,2,3,4,5">
                            <ul class="line" data-type="curved dotted">
                                <li data-y="820000"></li>
                                <li data-y="380000"></li>
                                <li data-y="140000"></li>
                                <li data-y="490000"></li>
                                <li data-y="560000"></li>
                            </ul>
                            <ul class="line" data-type="curved filled">
                                <li data-y="510000"></li>
                                <li data-y="860000"></li>
                                <li data-y="360000"></li>
                                <li data-y="1260000"></li>
                                <li data-y="820000"></li>
                            </ul>
                        </div>
                    </div>
                    <div class="padding-20-t padding-30-h border-t">
                        <div class="largest bold">$640.000</div>
                        <span class="dark">LATEST OFFER</span>
                    </div>
                    <div class="padding-30 padding-15-t">
                        <div class="margin-15-b"><b>Min. Offer Amount: $5000</b><br>
                            <span class="x-dark">Automatic 5% deposit required.</span>
                        </div>
                        <form action="#">
                            <div class="col-static no-fluid currency-spinner form-lg">
                                <div class="col-50">
                                    <button class="currency-down btn no-padding-h block round-l ease-btn" type="button">
                                        <svg class="icon"><use href="#minus"></use></svg>
                                    </button>
                                </div>
                                <div class="row">
                                    <div class="col-12 no-padding">
                                        <div class="text no-border theme-gray ui-x-light ease-form">
                                            <input class="bold align-c x-large" type="text" value="645.000" min="645.000" step="5.000" maxlength="12" autocomplete="off">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-50">
                                    <button class="currency-up btn no-padding-h block round-r ease-btn" type="button">
                                        <svg class="icon"><use href="#plus"></use></svg>
                                    </button>
                                </div>
                            </div>
                            <span class="sp15"></span>
                            <button class="btn btn-lg block round theme-default2 ui-dark ease-btn" type="submit">
                                <b>MAKE OFFER</b>
                            </button>
                            <span class="sp5"></span>
                        </form>
                    </div>
                </div>

                <div class="card padding-30 round shadow-lg">
                    <h4>Other Details</h4>
                    <ul class="list-unstyled list-spacer-15 icons-lg icons-margin-5-r">
                        <li>
                            <span class="dark block margin-5-b">House Type</span>
                            <svg class="icon ui-text"><use href="#house"></use></svg>
                            <b>Single Family</b>
                        </li>
                        <li>
                            <span class="dark block margin-5-b">Build Surface</span>
                            <svg class="icon ui-text"><use href="#house-surface"></use></svg>
                            <b>628m<sup>2</sup></b>
                        </li>
                        <li>
                            <span class="dark block margin-5-b">Heating/Cooling System</span>
                            <svg class="icon ui-text"><use href="#house-heat"></use></svg>
                            <b>Air Cooling</b>
                        </li>
                        <li>
                            <span class="dark block margin-5-b">Bedrooms</span>
                            <svg class="icon ui-text"><use href="#bed"></use></svg>
                            <b>4</b>
                        </li>
                        <li>
                            <span class="dark block margin-5-b">Bathrooms/Guest toilets</span>
                            <svg class="icon ui-text"><use href="#wc"></use></svg>
                            <b>3</b>
                        </li>
                        <li>
                            <span class="dark block margin-5-b">Parking</span>
                            <svg class="icon ui-text"><use href="#garage"></use></svg>
                            <b>2 Spaces</b>
                        </li>
                        <li>
                            <span class="dark block margin-5-b">Year of Build</span>
                            <svg class="icon ui-text"><use href="#calendar-day"></use></svg>
                            <b>2019</b>
                        </li>
                    </ul>
                    <span class="sp5"></span>
                    <div class="align-l icons-no-opacity form-lg ease-1st-btn">
                        <a class="btn block btn-multi round-t" href="#">
                            <svg class="icon right"><use href="#images"></use></svg>
                            Show All HD Images
                        </a>
                        <span class="sp1"></span>
                        <a class="btn block btn-multi round-b" href="#">
                            <svg class="icon right"><use href="#file-pdf"></use></svg>
                            Download PDF Brochure
                        </a>
                    </div>
                </div>

            </div>

        </div>

    </div>
</main>