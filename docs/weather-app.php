<!-- custom CSS -->
<style>
    .weather.round .graphs { border-radius: 36px; }
    .round.card { border-radius: 32px; }
    .all-day { background-image: linear-gradient(135deg, #97aaee, #ac89ec); }
</style>

<main class="container no-gutter">
    <div class="fixed padding-30-v">

        <div class="row row-lg-gap padding-30-b">
            <div class="col-4 offset-2 col-md-6 offset-md-0">

                <div class="weather round ease-weather">
                    <div class="details">
                        <div class="now">
                            <b class="w-degree">33</b>
                            <span>
                                Clear <b class="w-date"></b>
                                <a class="x-large margin-5-t block opacity ease-layout" href="#">Istanbul</a>
                            </span>
                        </div>
                        <ul class="days icons-lg">
                            <li><b>Now</b><svg class="icon"><use href="#temperature"></use></svg><span>36</span></li>
                            <li>14<svg class="icon"><use href="#sun"></use></svg><span>32</span></li>
                            <li>15<svg class="icon"><use href="#sun"></use></svg><span>31</span></li>
                            <li>16<svg class="icon"><use href="#cloud-sun"></use></svg><span>29</span></li>
                            <li>17<svg class="icon"><use href="#wind"></use></svg><span>28</span></li>
                            <li>18<svg class="icon"><use href="#sun"></use></svg><span>32</span></li>
                            <li>19<svg class="icon"><use href="#sun"></use></svg><span>31</span></li>
                            <li><b>20:00</b><svg class="icon"><use href="#sunset"></use></svg><b>Sunset</b></li>
                            <li>21<svg class="icon"><use href="#moon"></use></svg><span>32</span></li>
                            <li>22<svg class="icon"><use href="#moon"></use></svg><span>32</span></li>
                            <li>23<svg class="icon"><use href="#moon"></use></svg><span>31</span></li>
                            <li>24<svg class="icon"><use href="#cloud-moon"></use></svg><span>29</span></li>
                        </ul>
                        <div class="carousel card round shadow-lg" data-col="1">
                            <div class="carousel-slider icons-lg ease-layout ease-slow ease-in-out">

                                <div class="slide-content padding-30 no-padding-b">
                                    <h3 class="font-bold margin-15-v">Next Week</h3>
                                    <table class="table table-striped no-separated">
                                        <tr>
                                            <td class="dark large">Tuesday</th>
                                            <td><svg class="icon"><use href="#sun"></use></svg></td>
                                            <td class="align-r large">
                                                <span class="deg margin-20-r">36</span>
                                                <span class="deg dark">28</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="dark large">Wednesday</th>
                                            <td><svg class="icon"><use href="#sun"></use></svg></td>
                                            <td class="align-r large">
                                                <span class="deg margin-20-r">32</span>
                                                <span class="deg dark">26</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="dark large">Thursday</th>
                                            <td><svg class="icon"><use href="#cloud-sun"></use></svg></td>
                                            <td class="align-r large">
                                                <span class="deg margin-20-r">26</span>
                                                <span class="deg dark">18</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="dark large">Friday</th>
                                            <td><svg class="icon"><use href="#rain"></use></svg></td>
                                            <td class="align-r large">
                                                <span class="deg margin-20-r">21</span>
                                                <span class="deg dark">16</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="dark large">Saturday</th>
                                            <td><svg class="icon"><use href="#clouds"></use></svg></td>
                                            <td class="align-r large">
                                                <span class="deg margin-20-r">23</span>
                                                <span class="deg dark">18</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="dark large">Sunday</th>
                                            <td><svg class="icon"><use href="#cloud"></use></svg></td>
                                            <td class="align-r large">
                                                <span class="deg margin-20-r">24</span>
                                                <span class="deg dark">17</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="dark large">Monday</th>
                                            <td><svg class="icon"><use href="#cloud-sun"></use></svg></td>
                                            <td class="align-r large">
                                                <span class="deg margin-20-r">27</span>
                                                <span class="deg dark">19</span>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                                <div class="slide-content padding-30 no-padding-b">
                                    <div class="padding-15 no-padding-t">
                                        <h3 class="font-bold margin-15-v">Details</h3>
                                        <span class="sp3"></span>
                                        <p class="large margin-5-b">
                                            Today: Sunny currently. The high will be 32<sup>o</sup>.
                                            Partly cloudy tonight with a low of 28<sup>o</sup>.
                                        </p>
                                    </div>
                                    <div class="all-day largest xx-light align-c inline-block-1st padding-10 circle">
                                        <svg class="icon"><use href="#sunrise"></use></svg>
                                        <span class="light margin-30-r">05:53</span>
                                        <span class="light">19:59</span>
                                        <svg class="icon"><use href="#sunset"></use></svg>
                                    </div>
                                    <div class="padding-15 align-c">
                                        <ul class="list-unstyled list-column-2">
                                            <li><span class="xx-large">0%</span><br><span class="dark">Chance of Rain</span></li>
                                            <li><span class="xx-large">74%</span><br><span class="dark">Humidity</span></li>
                                            <li><span class="xx-large">30<sup>o</sup></span><br><span class="dark">Feels Like</span></li>
                                            <li><span class="xx-large">7 km</span><br><span class="dark">Wind</span></li>
                                            <li><span class="xx-large">7</span><br><span class="dark">UV Index</span></li>
                                            <li><span class="xx-large">10.0 mi</span><br><span class="dark">Visibility</span></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                            <div class="carousel-nav padding-10-b no-margin-t ease-1st-btn">
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
                    <div class="graphs" data-graphs="clear" data-day="05:53,19:59"></div>
                </div>

            </div>
            <div class="col-4 col-md-6">

                <div class="weather round ease-weather">
                    <div class="details">
                        <div class="now">
                            <b class="w-degree">33</b>
                            <span>
                                Partly Cloudy <b class="w-date"></b>
                                <a class="x-large margin-5-t block opacity ease-layout" href="#">Istanbul</a>
                            </span>
                        </div>
                        <ul class="days icons-lg">
                            <li><b>Now</b><svg class="icon"><use href="#moon"></use></svg><span>32</span></li>
                            <li>22<svg class="icon"><use href="#moon"></use></svg><span>32</span></li>
                            <li>23<svg class="icon"><use href="#moon"></use></svg><span>31</span></li>
                            <li>24<svg class="icon"><use href="#cloud-moon"></use></svg><span>29</span></li>
                            <li>01<svg class="icon"><use href="#wind"></use></svg><span>28</span></li>
                            <li>02<svg class="icon"><use href="#moon"></use></svg><span>32</span></li>
                            <li>03<svg class="icon"><use href="#moon"></use></svg><span>31</span></li>
                            <li>04<svg class="icon"><use href="#moon"></use></svg><span>32</span></li>
                            <li><b>05:00</b><svg class="icon"><use href="#sunrise"></use></svg><b>Sunrise</b></li>
                            <li>06<svg class="icon"><use href="#sun"></use></svg><span>32</span></li>
                            <li>07<svg class="icon"><use href="#sun"></use></svg><span>31</span></li>
                            <li>08<svg class="icon"><use href="#cloud-sun"></use></svg><span>29</span></li>
                        </ul>
                        <div class="carousel card round shadow-lg" data-col="1">
                            <div class="carousel-slider icons-lg ease-layout ease-slow ease-in-out">

                                <div class="slide-content padding-30 no-padding-b">
                                    <div class="padding-15 no-padding-t">
                                        <h3 class="font-bold margin-15-v">Details</h3>
                                        <span class="sp3"></span>
                                        <p class="large margin-5-b">
                                            Today: Sunny currently. The high will be 32<sup>o</sup>.
                                            Partly cloudy tonight with a low of 28<sup>o</sup>.
                                        </p>
                                    </div>
                                    <div class="all-day largest xx-light align-c inline-block-1st padding-10 circle">
                                        <svg class="icon"><use href="#sunrise"></use></svg>
                                        <span class="light margin-30-r">05:53</span>
                                        <span class="light">19:59</span>
                                        <svg class="icon"><use href="#sunset"></use></svg>
                                    </div>
                                    <div class="padding-15 align-c">
                                        <ul class="list-unstyled list-column-2">
                                            <li><span class="xx-large">0%</span><br><span class="dark">Chance of Rain</span></li>
                                            <li><span class="xx-large">74%</span><br><span class="dark">Humidity</span></li>
                                            <li><span class="xx-large">30<sup>o</sup></span><br><span class="dark">Feels Like</span></li>
                                            <li><span class="xx-large">7 km</span><br><span class="dark">Wind</span></li>
                                            <li><span class="xx-large">7</span><br><span class="dark">UV Index</span></li>
                                            <li><span class="xx-large">10.0 mi</span><br><span class="dark">Visibility</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="slide-content padding-30 no-padding-b">
                                    <h3 class="font-bold margin-15-v">Next Week</h3>
                                    <table class="table table-striped no-separated">
                                        <tr>
                                            <td class="dark large">Tuesday</th>
                                            <td><svg class="icon"><use href="#sun"></use></svg></td>
                                            <td class="align-r large">
                                                <span class="deg margin-20-r">36</span>
                                                <span class="deg dark">28</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="dark large">Wednesday</th>
                                            <td><svg class="icon"><use href="#sun"></use></svg></td>
                                            <td class="align-r large">
                                                <span class="deg margin-20-r">32</span>
                                                <span class="deg dark">26</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="dark large">Thursday</th>
                                            <td><svg class="icon"><use href="#cloud-sun"></use></svg></td>
                                            <td class="align-r large">
                                                <span class="deg margin-20-r">26</span>
                                                <span class="deg dark">18</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="dark large">Friday</th>
                                            <td><svg class="icon"><use href="#rain"></use></svg></td>
                                            <td class="align-r large">
                                                <span class="deg margin-20-r">21</span>
                                                <span class="deg dark">16</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="dark large">Saturday</th>
                                            <td><svg class="icon"><use href="#clouds"></use></svg></td>
                                            <td class="align-r large">
                                                <span class="deg margin-20-r">23</span>
                                                <span class="deg dark">18</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="dark large">Sunday</th>
                                            <td><svg class="icon"><use href="#cloud"></use></svg></td>
                                            <td class="align-r large">
                                                <span class="deg margin-20-r">24</span>
                                                <span class="deg dark">17</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="dark large">Monday</th>
                                            <td><svg class="icon"><use href="#cloud-sun"></use></svg></td>
                                            <td class="align-r large">
                                                <span class="deg margin-20-r">27</span>
                                                <span class="deg dark">19</span>
                                            </td>
                                        </tr>
                                    </table>
                                </div>

                            </div>
                            <div class="carousel-nav padding-10-b no-margin-t ease-1st-btn">
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
                    <div class="graphs" data-graphs="cloud" data-day="19:59,05:53"></div>
                </div>

            </div>
        </div>

    </div>
</main>