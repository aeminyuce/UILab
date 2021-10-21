<!-- custom CSS -->
<link rel="stylesheet" href="../css/custom/weather-app.css?v=<?php echo filemtime('../css/custom/weather-app.css'); ?>"/>

<main class="container no-gutter">
    <div class="fixed padding-30-v">

        <div class="row row-gap-lg padding-30-b">
            <div class="col-4 offset-2 col-md-6 offset-md-0">

                <div class="ui-weather round ui-ease-weather">
                    <div class="ui-details">
                        <div class="ui-now">
                            <b class="ui-w-degree">33</b>
                            <span>
                                Clear <b class="ui-w-date"></b>
                                <a class="x-large margin-5-t block opacity ui-ease-layout" href="#">Istanbul</a>
                            </span>
                        </div>
                        <ul class="ui-days icons-lg scrollbar-faded round">
                            <li><b>Now</b><svg class="icon"><use href="#temperature"/></svg><span>36</span></li>
                            <li>14<svg class="icon"><use href="#sun"/></svg><span>32</span></li>
                            <li>15<svg class="icon"><use href="#sun"/></svg><span>31</span></li>
                            <li>16<svg class="icon"><use href="#cloud-sun"/></svg><span>29</span></li>
                            <li>17<svg class="icon"><use href="#wind"/></svg><span>28</span></li>
                            <li>18<svg class="icon"><use href="#sun"/></svg><span>32</span></li>
                            <li>19<svg class="icon"><use href="#sun"/></svg><span>31</span></li>
                            <li><b>20:00</b><svg class="icon"><use href="#sunset"/></svg><b>Sunset</b></li>
                            <li>21<svg class="icon"><use href="#moon"/></svg><span>32</span></li>
                            <li>22<svg class="icon"><use href="#moon"/></svg><span>32</span></li>
                            <li>23<svg class="icon"><use href="#moon"/></svg><span>31</span></li>
                            <li>24<svg class="icon"><use href="#cloud-moon"/></svg><span>29</span></li>
                        </ul>
                        <div class="carousel card round shadow-lg" data-ui-col="1">
                            <div class="carousel-slider icons-lg ui-ease-layout ui-ease-slow ui-ease-in-out">

                                <div class="slide-content padding-30 no-padding-b">
                                    <h3 class="font-bold margin-15-v">Next Week</h3>
                                    <table class="table table-striped no-separated">
                                        <tr>
                                            <td class="font-color-black-50 large">Tuesday</th>
                                            <td><svg class="icon"><use href="#sun"/></svg></td>
                                            <td class="align-r large">
                                                <span class="deg margin-20-r">36</span>
                                                <span class="deg font-color-black-50">28</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="font-color-black-50 large">Wednesday</th>
                                            <td><svg class="icon"><use href="#sun"/></svg></td>
                                            <td class="align-r large">
                                                <span class="deg margin-20-r">32</span>
                                                <span class="deg font-color-black-50">26</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="font-color-black-50 large">Thursday</th>
                                            <td><svg class="icon"><use href="#cloud-sun"/></svg></td>
                                            <td class="align-r large">
                                                <span class="deg margin-20-r">26</span>
                                                <span class="deg font-color-black-50">18</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="font-color-black-50 large">Friday</th>
                                            <td><svg class="icon"><use href="#rain"/></svg></td>
                                            <td class="align-r large">
                                                <span class="deg margin-20-r">21</span>
                                                <span class="deg font-color-black-50">16</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="font-color-black-50 large">Saturday</th>
                                            <td><svg class="icon"><use href="#clouds"/></svg></td>
                                            <td class="align-r large">
                                                <span class="deg margin-20-r">23</span>
                                                <span class="deg font-color-black-50">18</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="font-color-black-50 large">Sunday</th>
                                            <td><svg class="icon"><use href="#cloud"/></svg></td>
                                            <td class="align-r large">
                                                <span class="deg margin-20-r">24</span>
                                                <span class="deg font-color-black-50">17</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="font-color-black-50 large">Monday</th>
                                            <td><svg class="icon"><use href="#cloud-sun"/></svg></td>
                                            <td class="align-r large">
                                                <span class="deg margin-20-r">27</span>
                                                <span class="deg font-color-black-50">19</span>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                                <div class="slide-content padding-30 no-padding-b">
                                    <div class="padding-15 no-padding-t">
                                        <h3 class="font-bold margin-15-v">Details</h3>
                                        <span class="sp-3"></span>
                                        <p class="large margin-5-b">
                                            Today: Sunny currently. The high will be 32<sup>o</sup>.
                                            Partly cloudy tonight with a low of 28<sup>o</sup>.
                                        </p>
                                    </div>
                                    <div class="ui-all-day largest font-color-white align-c inline-block-1st padding-10 circle">
                                        <svg class="icon"><use href="#sunrise"/></svg>
                                        <span class="margin-30-r">05:53</span>
                                        <span>19:59</span>
                                        <svg class="icon"><use href="#sunset"/></svg>
                                    </div>
                                    <div class="padding-15 align-c">
                                        <ul class="list-unstyled list-column-2">
                                            <li><span class="xx-large">0%</span><br><span class="font-color-black-50">Chance of Rain</span></li>
                                            <li><span class="xx-large">74%</span><br><span class="font-color-black-50">Humidity</span></li>
                                            <li><span class="xx-large">30<sup>o</sup></span><br><span class="font-color-black-50">Feels Like</span></li>
                                            <li><span class="xx-large">7 km</span><br><span class="font-color-black-50">Wind</span></li>
                                            <li><span class="xx-large">7</span><br><span class="font-color-black-50">UV Index</span></li>
                                            <li><span class="xx-large">10.0 mi</span><br><span class="font-color-black-50">Visibility</span></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                            <div class="carousel-nav padding-10-b no-margin-t ui-ease-1st-btn">
                                <button class="carousel-prev ui-btn ui-btn-ghost ui-btn-square round">
                                    <svg class="icon"><use href="#angle-left"/></svg>
                                </button>
                                <span class="dots font-color-black-50"></span>
                                <button class="carousel-next ui-btn ui-btn-ghost ui-btn-square round">
                                    <svg class="icon"><use href="#angle-right"/></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="ui-graphs" data-ui-graphs="clear" data-ui-day="05:53,19:59"></div>
                </div>

            </div>
            <div class="col-4 col-md-6">

                <div class="ui-weather round ui-ease-weather">
                    <div class="ui-details">
                        <div class="ui-now">
                            <b class="ui-w-degree">33</b>
                            <span>
                                Partly Cloudy <b class="ui-w-date"></b>
                                <a class="x-large margin-5-t block opacity ui-ease-layout" href="#">Istanbul</a>
                            </span>
                        </div>
                        <ul class="ui-days icons-lg scrollbar-faded round">
                            <li><b>Now</b><svg class="icon"><use href="#moon"/></svg><span>32</span></li>
                            <li>22<svg class="icon"><use href="#moon"/></svg><span>32</span></li>
                            <li>23<svg class="icon"><use href="#moon"/></svg><span>31</span></li>
                            <li>24<svg class="icon"><use href="#cloud-moon"/></svg><span>29</span></li>
                            <li>01<svg class="icon"><use href="#wind"/></svg><span>28</span></li>
                            <li>02<svg class="icon"><use href="#moon"/></svg><span>32</span></li>
                            <li>03<svg class="icon"><use href="#moon"/></svg><span>31</span></li>
                            <li>04<svg class="icon"><use href="#moon"/></svg><span>32</span></li>
                            <li><b>05:00</b><svg class="icon"><use href="#sunrise"/></svg><b>Sunrise</b></li>
                            <li>06<svg class="icon"><use href="#sun"/></svg><span>32</span></li>
                            <li>07<svg class="icon"><use href="#sun"/></svg><span>31</span></li>
                            <li>08<svg class="icon"><use href="#cloud-sun"/></svg><span>29</span></li>
                        </ul>
                        <div class="carousel card round shadow-lg" data-ui-col="1">
                            <div class="carousel-slider icons-lg ui-ease-layout ui-ease-slow ui-ease-in-out">

                                <div class="slide-content padding-30 no-padding-b">
                                    <div class="padding-15 no-padding-t">
                                        <h3 class="font-bold margin-15-v">Details</h3>
                                        <span class="sp-3"></span>
                                        <p class="large margin-5-b">
                                            Today: Sunny currently. The high will be 32<sup>o</sup>.
                                            Partly cloudy tonight with a low of 28<sup>o</sup>.
                                        </p>
                                    </div>
                                    <div class="ui-all-day largest font-color-white align-c inline-block-1st padding-10 circle">
                                        <svg class="icon"><use href="#sunrise"/></svg>
                                        <span class="margin-30-r">05:53</span>
                                        <span>19:59</span>
                                        <svg class="icon"><use href="#sunset"/></svg>
                                    </div>
                                    <div class="padding-15 align-c">
                                        <ul class="list-unstyled list-column-2">
                                            <li><span class="xx-large">0%</span><br><span class="font-color-black-50">Chance of Rain</span></li>
                                            <li><span class="xx-large">74%</span><br><span class="font-color-black-50">Humidity</span></li>
                                            <li><span class="xx-large">30<sup>o</sup></span><br><span class="font-color-black-50">Feels Like</span></li>
                                            <li><span class="xx-large">7 km</span><br><span class="font-color-black-50">Wind</span></li>
                                            <li><span class="xx-large">7</span><br><span class="font-color-black-50">UV Index</span></li>
                                            <li><span class="xx-large">10.0 mi</span><br><span class="font-color-black-50">Visibility</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="slide-content padding-30 no-padding-b">
                                    <h3 class="font-bold margin-15-v">Next Week</h3>
                                    <table class="table table-striped no-separated">
                                        <tr>
                                            <td class="font-color-black-50 large">Tuesday</th>
                                            <td><svg class="icon"><use href="#sun"/></svg></td>
                                            <td class="align-r large">
                                                <span class="deg margin-20-r">36</span>
                                                <span class="deg font-color-black-50">28</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="font-color-black-50 large">Wednesday</th>
                                            <td><svg class="icon"><use href="#sun"/></svg></td>
                                            <td class="align-r large">
                                                <span class="deg margin-20-r">32</span>
                                                <span class="deg font-color-black-50">26</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="font-color-black-50 large">Thursday</th>
                                            <td><svg class="icon"><use href="#cloud-sun"/></svg></td>
                                            <td class="align-r large">
                                                <span class="deg margin-20-r">26</span>
                                                <span class="deg font-color-black-50">18</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="font-color-black-50 large">Friday</th>
                                            <td><svg class="icon"><use href="#rain"/></svg></td>
                                            <td class="align-r large">
                                                <span class="deg margin-20-r">21</span>
                                                <span class="deg font-color-black-50">16</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="font-color-black-50 large">Saturday</th>
                                            <td><svg class="icon"><use href="#clouds"/></svg></td>
                                            <td class="align-r large">
                                                <span class="deg margin-20-r">23</span>
                                                <span class="deg font-color-black-50">18</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="font-color-black-50 large">Sunday</th>
                                            <td><svg class="icon"><use href="#cloud"/></svg></td>
                                            <td class="align-r large">
                                                <span class="deg margin-20-r">24</span>
                                                <span class="deg font-color-black-50">17</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="font-color-black-50 large">Monday</th>
                                            <td><svg class="icon"><use href="#cloud-sun"/></svg></td>
                                            <td class="align-r large">
                                                <span class="deg margin-20-r">27</span>
                                                <span class="deg font-color-black-50">19</span>
                                            </td>
                                        </tr>
                                    </table>
                                </div>

                            </div>
                            <div class="carousel-nav padding-10-b no-margin-t ui-ease-1st-btn">
                                <button class="carousel-prev ui-btn ui-btn-ghost ui-btn-square round">
                                    <svg class="icon"><use href="#angle-left"/></svg>
                                </button>
                                <span class="dots font-color-black-50"></span>
                                <button class="carousel-next ui-btn ui-btn-ghost ui-btn-square round">
                                    <svg class="icon"><use href="#angle-right"/></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="ui-graphs" data-ui-graphs="cloud" data-ui-day="19:59,05:53"></div>
                </div>

            </div>
        </div>

    </div>
</main>