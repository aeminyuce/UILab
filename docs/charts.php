<script src="../dist/js/charts.js?v=<?php echo filemtime('../dist/js/charts.js'); ?>"></script>

<main class="ui-container ui-no-gutter">
    <div class="ui-fixed">
        <div class="ui-row">
            <div class="ui-col-12 ui-p-30-v">

                <h3 class="ui-h3">Line Chart Examples</h3>
                <div class="ui-row ui-row-gap-lg-v">
                    <div class="ui-col-6">
                        <h5 class="ui-h5 ui-font-bold ui-align-c">Line Chart</h5>
                        <div class="ui-line-chart-holder ui-ease-line-chart" data-ui-x="Mon,Tue,Wed,Thu,Fri,Sat,Sun">
                            <ul class="ui-line-chart">
                                <li data-ui-y="84"></li>
                                <li data-ui-y="56"></li>
                                <li data-ui-y="112"></li>
                                <li data-ui-y="140"></li>
                                <li data-ui-y="28"></li>
                                <li data-ui-y="0"></li>
                                <li data-ui-y="28"></li>
                            </ul>
                        </div>
                    </div>
                    <div class="ui-col-6">
                        <h5 class="ui-h5 ui-font-bold ui-align-c">Line Chart with Prefix &amp; Suffix</h5>
                        <div class="ui-line-chart-holder ui-ease-line-chart" data-ui-x="Mon,Tue,Wed,Thu,Fri,Sat,Sun" data-ui-prefix="$" data-ui-suffix="m">
                            <ul class="ui-line-chart">
                                <li data-ui-y="84"></li>
                                <li data-ui-y="56"></li>
                                <li data-ui-y="112"></li>
                                <li data-ui-y="140"></li>
                                <li data-ui-y="28"></li>
                                <li data-ui-y="0"></li>
                                <li data-ui-y="28"></li>
                            </ul>
                        </div>
                    </div>
                    <div class="ui-col-6">
                        <h5 class="ui-h5 ui-font-bold ui-align-c">Line Chart with Seperator</h5>
                        <div class="ui-line-chart-holder ui-ease-line-chart" data-ui-x="Mon,Tue,Wed,Thu,Fri,Sat,Sun" data-ui-sep="." data-ui-prefix="$">
                            <ul class="ui-line-chart">
                                <li data-ui-y="1200"></li>
                                <li data-ui-y="1800"></li>
                                <li data-ui-y="11200"></li>
                                <li data-ui-y="7500"></li>
                                <li data-ui-y="6300"></li>
                                <li data-ui-y="800"></li>
                                <li data-ui-y="1100"></li>
                            </ul>
                        </div>
                    </div>
                    <div class="ui-col-6">
                        <h5 class="ui-h5 ui-font-bold ui-align-c">Line Chart with Repeated Zero Datas</h5>
                        <div class="ui-line-chart-holder ui-ease-line-chart" data-ui-x="Mon,Tue,Wed,Thu,Fri,Sat,Sun">
                            <ul class="ui-line-chart">
                                <li data-ui-y="0"></li>
                                <li data-ui-y="0"></li>
                                <li data-ui-y="0"></li>
                                <li data-ui-y="0"></li>
                                <li data-ui-y="28"></li>
                                <li data-ui-y="0"></li>
                                <li data-ui-y="0"></li>
                            </ul>
                        </div>
                    </div>
                    <div class="ui-col-6">
                        <h5 class="ui-h5 ui-font-bold ui-align-c">Line Chart with All Zero Datas</h5>
                        <div class="ui-line-chart-holder ui-ease-line-chart" data-ui-x="Mon,Tue,Wed,Thu,Fri,Sat,Sun">
                            <ul class="ui-line-chart">
                                <li data-ui-y="0"></li>
                                <li data-ui-y="0"></li>
                                <li data-ui-y="0"></li>
                                <li data-ui-y="0"></li>
                                <li data-ui-y="0"></li>
                                <li data-ui-y="0"></li>
                                <li data-ui-y="0"></li>
                            </ul>
                        </div>
                    </div>
                    <div class="ui-col-6">
                        <h5 class="ui-h5 ui-font-bold ui-align-c">Line Chart with No Y Datas</h5>
                        <div class="ui-line-chart-holder ui-ease-line-chart" data-ui-x="Mon,Tue,Wed,Thu,Fri,Sat,Sun">
                            <ul class="ui-line-chart"></ul>
                        </div>
                    </div>
                    <div class="ui-col-6">
                        <h5 class="ui-h5 ui-font-bold ui-align-c">Curved Line Chart</h5>
                        <div class="ui-line-chart-holder ui-ease-line-chart" data-ui-x="Mon,Tue,Wed,Thu,Fri,Sat,Sun">
                            <ul class="ui-line-chart" data-ui-type="curved">
                                <li data-ui-y="0"></li>
                                <li data-ui-y="-56"></li>
                                <li data-ui-y="-112"></li>
                                <li data-ui-y="-140"></li>
                                <li data-ui-y="-28"></li>
                                <li data-ui-y="-20"></li>
                                <li data-ui-y="-28"></li>
                            </ul>
                        </div>
                    </div>
                    <div class="ui-col-6">
                        <h5 class="ui-h5 ui-font-bold ui-align-c">Dotted Line Chart</h5>
                        <div class="ui-line-chart-holder ui-ease-line-chart" data-ui-x="Mon,Tue,Wed,Thu,Fri,Sat,Sun">
                            <ul class="ui-line-chart" data-ui-type="dotted">
                                <li data-ui-y="0"></li>
                                <li data-ui-y="-56"></li>
                                <li data-ui-y="-112"></li>
                                <li data-ui-y="-140"></li>
                                <li data-ui-y="-28"></li>
                                <li data-ui-y="-20"></li>
                                <li data-ui-y="-28"></li>
                            </ul>
                        </div>
                    </div>
                    <div class="ui-col-6">
                        <h5 class="ui-h5 ui-font-bold ui-align-c">Dashed Line Chart</h5>
                        <div class="ui-line-chart-holder ui-ease-line-chart" data-ui-x="Mon,Tue,Wed,Thu,Fri,Sat,Sun">
                            <ul class="ui-line-chart" data-ui-type="dashed">
                                <li data-ui-y="0"></li>
                                <li data-ui-y="-56"></li>
                                <li data-ui-y="-112"></li>
                                <li data-ui-y="-140"></li>
                                <li data-ui-y="-28"></li>
                                <li data-ui-y="-20"></li>
                                <li data-ui-y="-28"></li>
                            </ul>
                        </div>
                    </div>
                    <div class="ui-col-6">
                        <h5 class="ui-h5 ui-font-bold ui-align-c">Line Charts</h5>
                        <div class="ui-line-chart-holder ui-ease-line-chart" data-ui-size="10,25" data-ui-x="Mon,Tue,Wed,Thu,Fri,Sat,Sun">
                            <ul class="ui-line-chart" data-ui-name="2nd">
                                <li data-ui-y="120" data-ui-url="#1"></li>
                                <li data-ui-y="20" data-ui-url="#2"></li>
                                <li data-ui-y="159" data-ui-url="#3"></li>
                                <li data-ui-y="120" data-ui-url="#4"></li>
                                <li data-ui-y="80" data-ui-url="#5"></li>
                                <li data-ui-y="0" data-ui-url="#6"></li>
                                <li data-ui-y="20" data-ui-url="#7"></li>
                            </ul>
                        </div>
                    </div>
                    <div class="ui-col-6">
                        <h5 class="ui-h5 ui-font-bold ui-align-c">Curved Line Charts</h5>
                        <div class="ui-line-chart-holder ui-ease-line-chart" data-ui-size="10,25" data-ui-x="Mon,Tue,Wed,Thu,Fri,Sat,Sun">
                            <ul class="ui-line-chart" data-ui-name="1st" data-ui-type="curved dotted">
                                <li data-ui-y="55" data-ui-url="#1"></li>
                                <li data-ui-y="70" data-ui-url="#2"></li>
                                <li data-ui-y="92" data-ui-url="#3"></li>
                                <li data-ui-y="55" data-ui-url="#4"></li>
                                <li data-ui-y="89" data-ui-url="#5"></li>
                                <li data-ui-y="98" data-ui-url="#6"></li>
                                <li data-ui-y="116" data-ui-url="#7"></li>
                            </ul>
                            <ul class="ui-line-chart" data-ui-name="2nd" data-ui-type="curved">
                                <li data-ui-y="120" data-ui-url="#1"></li>
                                <li data-ui-y="20" data-ui-url="#2"></li>
                                <li data-ui-y="159" data-ui-url="#3"></li>
                                <li data-ui-y="120" data-ui-url="#4"></li>
                                <li data-ui-y="60" data-ui-url="#5"></li>
                                <li data-ui-y="0" data-ui-url="#6"></li>
                                <li data-ui-y="20" data-ui-url="#7"></li>
                            </ul>
                            <ul class="ui-line-chart" data-ui-name="3rd" data-ui-type="curved">
                                <li data-ui-y="32" data-ui-url="#1"></li>
                                <li data-ui-y="52" data-ui-url="#2"></li>
                                <li data-ui-y="117" data-ui-url="#3"></li>
                                <li data-ui-y="85" data-ui-url="#4"></li>
                                <li data-ui-y="137" data-ui-url="#5"></li>
                                <li data-ui-y="144" data-ui-url="#6"></li>
                                <li data-ui-y="59" data-ui-url="#7"></li>
                            </ul>
                        </div>
                    </div>
                    <div class="ui-col-6">
                        <h5 class="ui-h5 ui-font-bold ui-align-c">Filled Line Charts with No Selected</h5>
                        <div class="ui-line-chart-holder ui-ease-line-chart" data-ui-size="10,25" data-ui-x="Mon,Tue,Wed,Thu,Fri,Sat,Sun">
                            <ul class="ui-line-chart" data-ui-name="1st" data-ui-no-selected="true" data-ui-type="filled">
                                <li data-ui-y="-34" data-ui-url="#1"></li>
                                <li data-ui-y="-56" data-ui-url="#2"></li>
                                <li data-ui-y="-112" data-ui-url="#3"></li>
                                <li data-ui-y="-140" data-ui-url="#4"></li>
                                <li data-ui-y="-28" data-ui-url="#5"></li>
                                <li data-ui-y="-20" data-ui-url="#6"></li>
                                <li data-ui-y="-28" data-ui-url="#7"></li>
                            </ul>
                            <ul class="ui-line-chart" data-ui-name="2nd" data-ui-no-selected="true" data-ui-type="filled">
                                <li data-ui-y="120" data-ui-url="#1"></li>
                                <li data-ui-y="20" data-ui-url="#2"></li>
                                <li data-ui-y="159" data-ui-url="#3"></li>
                                <li data-ui-y="120" data-ui-url="#4"></li>
                                <li data-ui-y="80" data-ui-url="#5"></li>
                                <li data-ui-y="0" data-ui-url="#6"></li>
                                <li data-ui-y="20" data-ui-url="#7"></li>
                            </ul>
                        </div>
                    </div>
                    <div class="ui-col-6">
                        <h5 class="ui-h5 ui-font-bold ui-align-c">Filled &amp; Curved Line Charts</h5>
                        <div class="ui-line-chart-holder ui-ease-line-chart" data-ui-size="10,25" data-ui-x="Mon,Tue,Wed,Thu,Fri,Sat,Sun">
                            <ul class="ui-line-chart" data-ui-name="1st" data-ui-type="curved dotted">
                                <li data-ui-y="-34" data-ui-url="#1"></li>
                                <li data-ui-y="-56" data-ui-url="#2"></li>
                                <li data-ui-y="-112" data-ui-url="#3"></li>
                                <li data-ui-y="-140" data-ui-url="#4"></li>
                                <li data-ui-y="-28" data-ui-url="#5"></li>
                                <li data-ui-y="-20" data-ui-url="#6"></li>
                                <li data-ui-y="-28" data-ui-url="#7"></li>
                            </ul>
                            <ul class="ui-line-chart" data-ui-name="2nd" data-ui-type="curved filled">
                                <li data-ui-y="120" data-ui-url="#1"></li>
                                <li data-ui-y="20" data-ui-url="#2"></li>
                                <li data-ui-y="159" data-ui-url="#3"></li>
                                <li data-ui-y="120" data-ui-url="#4"></li>
                                <li data-ui-y="80" data-ui-url="#5"></li>
                                <li data-ui-y="0" data-ui-url="#6"></li>
                                <li data-ui-y="20" data-ui-url="#7"></li>
                            </ul>
                            <ul class="ui-line-chart" data-ui-name="3rd" data-ui-type="curved filled">
                                <li data-ui-y="32" data-ui-url="#1"></li>
                                <li data-ui-y="52" data-ui-url="#2"></li>
                                <li data-ui-y="117" data-ui-url="#3"></li>
                                <li data-ui-y="85" data-ui-url="#4"></li>
                                <li data-ui-y="137" data-ui-url="#5"></li>
                                <li data-ui-y="144" data-ui-url="#6"></li>
                                <li data-ui-y="59" data-ui-url="#7"></li>
                            </ul>
                        </div>
                    </div>
                    <div class="ui-col-6">
                        <h5 class="ui-h5 ui-font-bold ui-align-c">No Circles Line Charts</h5>
                        <div class="ui-line-chart-holder ui-ease-line-chart" data-ui-x="Mon,Tue,Wed,Thu,Fri,Sat,Sun">
                            <ul class="ui-line-chart" data-ui-name="1st" data-ui-type="curved dotted" data-ui-no-circles="true">
                                <li data-ui-y="-34" data-ui-url="#1"></li>
                                <li data-ui-y="-56" data-ui-url="#2"></li>
                                <li data-ui-y="-112" data-ui-url="#3"></li>
                                <li data-ui-y="-140" data-ui-url="#4"></li>
                                <li data-ui-y="-28" data-ui-url="#5"></li>
                                <li data-ui-y="-20" data-ui-url="#6"></li>
                                <li data-ui-y="-28" data-ui-url="#7"></li>
                            </ul>
                            <ul class="ui-line-chart" data-ui-name="2nd" data-ui-type="curved filled" data-ui-no-circles="true">
                                <li data-ui-y="120" data-ui-url="#1"></li>
                                <li data-ui-y="20" data-ui-url="#2"></li>
                                <li data-ui-y="159" data-ui-url="#3"></li>
                                <li data-ui-y="120" data-ui-url="#4"></li>
                                <li data-ui-y="80" data-ui-url="#5"></li>
                                <li data-ui-y="0" data-ui-url="#6"></li>
                                <li data-ui-y="20" data-ui-url="#7"></li>
                            </ul>
                            <ul class="ui-line-chart" data-ui-name="3rd" data-ui-type="curved filled" data-ui-no-circles="true">
                                <li data-ui-y="32" data-ui-url="#1"></li>
                                <li data-ui-y="52" data-ui-url="#2"></li>
                                <li data-ui-y="117" data-ui-url="#3"></li>
                                <li data-ui-y="85" data-ui-url="#4"></li>
                                <li data-ui-y="137" data-ui-url="#5"></li>
                                <li data-ui-y="144" data-ui-url="#6"></li>
                                <li data-ui-y="59" data-ui-url="#7"></li>
                            </ul>
                        </div>
                    </div>
                    <div class="ui-col-6">
                        <h5 class="ui-h5 ui-font-bold ui-align-c">No Repeated Circles Line Charts</h5>
                        <div class="ui-line-chart-holder ui-ease-line-chart" data-ui-x="Mon,Tue,Wed,Thu,Fri,Sat,Sun">
                            <ul class="ui-line-chart" data-ui-name="Start" data-ui-no-repeated-circles="true">
                                <li data-ui-y="84"></li>
                                <li data-ui-y="84"></li>
                                <li data-ui-y="84"></li>
                                <li data-ui-y="64"></li>
                                <li data-ui-y="37"></li>
                                <li data-ui-y="10"></li>
                                <li data-ui-y="27"></li>
                            </ul>
                            <ul class="ui-line-chart" data-ui-name="Mid" data-ui-no-repeated-circles="true">
                                <li data-ui-y="55"></li>
                                <li data-ui-y="33"></li>
                                <li data-ui-y="112"></li>
                                <li data-ui-y="112"></li>
                                <li data-ui-y="112"></li>
                                <li data-ui-y="112"></li>
                                <li data-ui-y="73"></li>
                            </ul>
                            <ul class="ui-line-chart" data-ui-name="End" data-ui-no-repeated-circles="true">
                                <li data-ui-y="12"></li>
                                <li data-ui-y="12"></li>
                                <li data-ui-y="12"></li>
                                <li data-ui-y="5"></li>
                                <li data-ui-y="55"></li>
                                <li data-ui-y="55"></li>
                                <li data-ui-y="55"></li>
                            </ul>
                            <ul class="ui-line-chart" data-ui-name="All" data-ui-no-repeated-circles="true">
                                <li data-ui-y="42"></li>
                                <li data-ui-y="42"></li>
                                <li data-ui-y="42"></li>
                                <li data-ui-y="42"></li>
                                <li data-ui-y="42"></li>
                                <li data-ui-y="42"></li>
                                <li data-ui-y="42"></li>
                            </ul>
                        </div>
                    </div>
                    <div class="ui-col-6">
                        <h5 class="ui-h5 ui-font-bold ui-align-c">Only Repeated Line Charts</h5>
                        <div class="ui-line-chart-holder ui-ease-line-chart" data-ui-x="Mon,Tue,Wed,Thu,Fri,Sat,Sun">
                            <ul class="ui-line-chart"data-ui-name="Multi" data-ui-only-repeated="true">
                                <li data-ui-y="25"></li>
                                <li data-ui-y="130"></li>
                                <li data-ui-y="130"></li>
                                <li data-ui-y="30"></li>
                                <li data-ui-y="120"></li>
                                <li data-ui-y="120"></li>
                                <li data-ui-y="35"></li>
                            </ul>
                            <ul class="ui-line-chart" data-ui-name="Multi&Multi" data-ui-only-repeated="true">
                                <li data-ui-y="25"></li>
                                <li data-ui-y="110"></li>
                                <li data-ui-y="110"></li>
                                <li data-ui-y="100"></li>
                                <li data-ui-y="100"></li>
                                <li data-ui-y="65"></li>
                                <li data-ui-y="15"></li>
                            </ul>
                            <ul class="ui-line-chart" data-ui-name="Mid" data-ui-only-repeated="true">
                                <li data-ui-y="25"></li>
                                <li data-ui-y="70"></li>
                                <li data-ui-y="70"></li>
                                <li data-ui-y="70"></li>
                                <li data-ui-y="70"></li>
                                <li data-ui-y="65"></li>
                                <li data-ui-y="45"></li>
                            </ul>
                            <ul class="ui-line-chart"data-ui-name="Start" data-ui-only-repeated="true">
                                <li data-ui-y="50"></li>
                                <li data-ui-y="50"></li>
                                <li data-ui-y="50"></li>
                                <li data-ui-y="50"></li>
                                <li data-ui-y="50"></li>
                                <li data-ui-y="95"></li>
                                <li data-ui-y="75"></li>
                            </ul>
                            <ul class="ui-line-chart"data-ui-name="End" data-ui-only-repeated="true">
                                <li data-ui-y="35"></li>
                                <li data-ui-y="75"></li>
                                <li data-ui-y="35"></li>
                                <li data-ui-y="35"></li>
                                <li data-ui-y="35"></li>
                                <li data-ui-y="35"></li>
                                <li data-ui-y="35"></li>
                            </ul>
                            <ul class="ui-line-chart"data-ui-name="All" data-ui-only-repeated="true">
                                <li data-ui-y="15"></li>
                                <li data-ui-y="15"></li>
                                <li data-ui-y="15"></li>
                                <li data-ui-y="15"></li>
                                <li data-ui-y="15"></li>
                                <li data-ui-y="15"></li>
                                <li data-ui-y="15"></li>
                            </ul>
                        </div>
                    </div>
                    <div class="ui-col-6">
                        <h5 class="ui-h5 ui-font-bold ui-align-c">Only Repeated Curved and Filled Line Charts</h5>
                        <div class="ui-line-chart-holder ui-ease-line-chart" data-ui-x="Mon,Tue,Wed,Thu,Fri,Sat,Sun">
                            <ul class="ui-line-chart" data-ui-name="Multi" data-ui-type="curved filled" data-ui-only-repeated="true">
                                <li data-ui-y="25"></li>
                                <li data-ui-y="130"></li>
                                <li data-ui-y="130"></li>
                                <li data-ui-y="30"></li>
                                <li data-ui-y="120"></li>
                                <li data-ui-y="120"></li>
                                <li data-ui-y="35"></li>
                            </ul>
                            <ul class="ui-line-chart" data-ui-name="Multi&Multi" data-ui-type="curved filled" data-ui-only-repeated="true">
                                <li data-ui-y="25"></li>
                                <li data-ui-y="110"></li>
                                <li data-ui-y="110"></li>
                                <li data-ui-y="100"></li>
                                <li data-ui-y="100"></li>
                                <li data-ui-y="65"></li>
                                <li data-ui-y="15"></li>
                            </ul>
                            <ul class="ui-line-chart" data-ui-name="Mid" data-ui-type="curved filled" data-ui-only-repeated="true">
                                <li data-ui-y="25"></li>
                                <li data-ui-y="70"></li>
                                <li data-ui-y="70"></li>
                                <li data-ui-y="70"></li>
                                <li data-ui-y="70"></li>
                                <li data-ui-y="65"></li>
                                <li data-ui-y="45"></li>
                            </ul>
                            <ul class="ui-line-chart"data-ui-name="Start" data-ui-type="curved filled" data-ui-only-repeated="true">
                                <li data-ui-y="50"></li>
                                <li data-ui-y="50"></li>
                                <li data-ui-y="50"></li>
                                <li data-ui-y="50"></li>
                                <li data-ui-y="50"></li>
                                <li data-ui-y="95"></li>
                                <li data-ui-y="75"></li>
                            </ul>
                            <ul class="ui-line-chart"data-ui-name="End" data-ui-type="curved filled" data-ui-only-repeated="true">
                                <li data-ui-y="35"></li>
                                <li data-ui-y="75"></li>
                                <li data-ui-y="35"></li>
                                <li data-ui-y="35"></li>
                                <li data-ui-y="35"></li>
                                <li data-ui-y="35"></li>
                                <li data-ui-y="35"></li>
                            </ul>
                            <ul class="ui-line-chart"data-ui-name="All" data-ui-type="curved filled" data-ui-only-repeated="true">
                                <li data-ui-y="15"></li>
                                <li data-ui-y="15"></li>
                                <li data-ui-y="15"></li>
                                <li data-ui-y="15"></li>
                                <li data-ui-y="15"></li>
                                <li data-ui-y="15"></li>
                                <li data-ui-y="15"></li>
                            </ul>
                        </div>
                    </div>
                    <div class="ui-col-12 ui-m-20-b ui-theme-base ui-fill-dark-100 ui-round">
                        <div class="ui-row">
                            <div class="ui-col-6">
                                <h5 class="ui-h5 ui-font-bold ui-align-c">Filled Line Charts</h5>
                                <div class="ui-line-chart-holder ui-ease-line-chart" data-ui-size="10,25" data-ui-x="Mon,Tue,Wed,Thu,Fri,Sat,Sun">
                                    <ul class="ui-line-chart" data-ui-name="1st" data-ui-type="filled">
                                        <li data-ui-y="-34" data-ui-url="#1"></li>
                                        <li data-ui-y="-56" data-ui-url="#2"></li>
                                        <li data-ui-y="-112" data-ui-url="#3"></li>
                                        <li data-ui-y="-140" data-ui-url="#4"></li>
                                        <li data-ui-y="-28" data-ui-url="#5"></li>
                                        <li data-ui-y="-20" data-ui-url="#6"></li>
                                        <li data-ui-y="-28" data-ui-url="#7"></li>
                                    </ul>
                                    <ul class="ui-line-chart" data-ui-name="2nd" data-ui-type="filled">
                                        <li data-ui-y="120" data-ui-url="#1"></li>
                                        <li data-ui-y="20" data-ui-url="#2"></li>
                                        <li data-ui-y="159" data-ui-url="#3"></li>
                                        <li data-ui-y="120" data-ui-url="#4"></li>
                                        <li data-ui-y="80" data-ui-url="#5"></li>
                                        <li data-ui-y="0" data-ui-url="#6"></li>
                                        <li data-ui-y="20" data-ui-url="#7"></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="ui-col-6">
                                <h5 class="ui-h5 ui-font-bold ui-align-c">Filled &amp; Curved Line Charts</h5>
                                <div class="ui-line-chart-holder ui-ease-line-chart" data-ui-size="10,25" data-ui-x="Mon,Tue,Wed,Thu,Fri,Sat,Sun">
                                    <ul class="ui-line-chart" data-ui-name="1st" data-ui-type="curved dotted">
                                        <li data-ui-y="-34" data-ui-url="#1"></li>
                                        <li data-ui-y="-56" data-ui-url="#2"></li>
                                        <li data-ui-y="-112" data-ui-url="#3"></li>
                                        <li data-ui-y="-140" data-ui-url="#4"></li>
                                        <li data-ui-y="-28" data-ui-url="#5"></li>
                                        <li data-ui-y="-20" data-ui-url="#6"></li>
                                        <li data-ui-y="-28" data-ui-url="#7"></li>
                                    </ul>
                                    <ul class="ui-line-chart" data-ui-name="2nd" data-ui-type="curved filled">
                                        <li data-ui-y="120" data-ui-url="#1"></li>
                                        <li data-ui-y="20" data-ui-url="#2"></li>
                                        <li data-ui-y="159" data-ui-url="#3"></li>
                                        <li data-ui-y="120" data-ui-url="#4"></li>
                                        <li data-ui-y="80" data-ui-url="#5"></li>
                                        <li data-ui-y="0" data-ui-url="#6"></li>
                                        <li data-ui-y="20" data-ui-url="#7"></li>
                                    </ul>
                                    <ul class="ui-line-chart" data-ui-name="3rd" data-ui-type="curved filled">
                                        <li data-ui-y="32" data-ui-url="#1"></li>
                                        <li data-ui-y="52" data-ui-url="#2"></li>
                                        <li data-ui-y="117" data-ui-url="#3"></li>
                                        <li data-ui-y="85" data-ui-url="#4"></li>
                                        <li data-ui-y="137" data-ui-url="#5"></li>
                                        <li data-ui-y="144" data-ui-url="#6"></li>
                                        <li data-ui-y="59" data-ui-url="#7"></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ui-col-12">
                        <div class="ui-card ui-round ui-shadow-lg ui-tab-holder ui-ease-tab" data-ui-classes="ui-font-bold">
                            <div class="ui-card-side ui-p-10 ui-border-b">

                                <div class="ui-dropdown ui-menu-l ui-float-r ui-ease-dropdown">
                                    <button class="ui-btn ui-btn-ghost ui-round">
                                        <span>First Chart</span>
                                        <svg class="ui-toggle-icon ui-icon ui-m-5-l"><use href="../dist/icons.svg#angle-down"/></svg>
                                    </button>
                                    <ul class="ui-dropdown-menu ui-round ui-shadow-lg">
                                        <li class="ui-selected">
                                            <label class="ui-tab ui-font-bold ui-active">First chart</label>
                                        </li>
                                        <li>
                                            <label class="ui-tab">Second chart</label>
                                        </li>
                                    </ul>
                                </div>
                                <h4 class="ui-h4 ui-align-l ui-m-10-t">Multiple Line Charts</h4>

                            </div>
                            <div class="ui-card-side ui-p-15">

                                <div class="ui-tab-content ui-open ui-open-ease">
                                    <h5 class="ui-h5 ui-font-bold ui-align-c">First Chart</h5>
                                    <div class="ui-line-chart-holder ui-ease-line-chart" data-ui-size="5,48" data-ui-x="Sep,Oct,Nov,Dec,Jan,Fab">
                                        <ul class="ui-line-chart" data-ui-name="Sales" data-ui-type="curved filled">
                                            <li data-ui-y="10" data-ui-url="#"></li>
                                            <li data-ui-y="30" data-ui-url="#"></li>
                                            <li data-ui-y="70" data-ui-url="#"></li>
                                            <li data-ui-y="120" data-ui-url="#"></li>
                                            <li data-ui-y="100" data-ui-url="#"></li>
                                            <li data-ui-y="150" data-ui-url="#"></li>
                                        </ul>
                                        <ul class="ui-line-chart" data-ui-name="Orders" data-ui-type="dashed">
                                            <li data-ui-y="50" data-ui-url="#"></li>
                                            <li data-ui-y="10" data-ui-url="#"></li>
                                            <li data-ui-y="50" data-ui-url="#"></li>
                                            <li data-ui-y="40" data-ui-url="#"></li>
                                            <li data-ui-y="80" data-ui-url="#"></li>
                                            <li data-ui-y="50" data-ui-url="#"></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="ui-tab-content">
                                    <h5 class="ui-h5 ui-font-bold ui-align-c">Second Chart</h5>
                                    <div class="ui-line-chart-holder ui-ease-line-chart" data-ui-size="5,48" data-ui-x="Sep,Oct,Nov,Dec,Jan,Fab">
                                        <ul class="ui-line-chart" data-ui-name="Sales" data-ui-type="curved filled">
                                            <li data-ui-y="10" data-ui-url="#"></li>
                                            <li data-ui-y="60" data-ui-url="#"></li>
                                            <li data-ui-y="20" data-ui-url="#"></li>
                                            <li data-ui-y="120" data-ui-url="#"></li>
                                            <li data-ui-y="10" data-ui-url="#"></li>
                                            <li data-ui-y="100" data-ui-url="#"></li>
                                        </ul>
                                        <ul class="ui-line-chart" data-ui-name="Orders" data-ui-type="dashed">
                                            <li data-ui-y="0" data-ui-url="#"></li>
                                            <li data-ui-y="20" data-ui-url="#"></li>
                                            <li data-ui-y="50" data-ui-url="#"></li>
                                            <li data-ui-y="40" data-ui-url="#"></li>
                                            <li data-ui-y="70" data-ui-url="#"></li>
                                            <li data-ui-y="50" data-ui-url="#"></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ui-col-12">
                        <h5 class="ui-h5 ui-font-bold ui-align-c">Column Stepping Chart</h5>
                        <div class="ui-line-chart-holder ui-ease-line-chart" data-ui-size="10,25" data-ui-step="6"
                            data-ui-x="01.12.2019,02.12.2019,03.12.2019,04.12.2019,05.12.2019,06.12.2019,07.12.2019,08.12.2019,09.12.2019,10.12.2019,11.12.2019,12.12.2019,13.12.2019,14.12.2019,15.12.2019,16.12.2019,17.12.2019,18.12.2019,19.12.2019,20.12.2019,21.12.2019">
                            <ul class="ui-line-chart" data-ui-type="filled dotted">
                                <li data-ui-y="84"></li>
                                <li data-ui-y="56"></li>
                                <li data-ui-y="112"></li>
                                <li data-ui-y="140"></li>
                                <li data-ui-y="28"></li>
                                <li data-ui-y="0"></li>
                                <li data-ui-y="28"></li>
                                <li data-ui-y="32"></li>
                                <li data-ui-y="52"></li>
                                <li data-ui-y="117"></li>
                                <li data-ui-y="85"></li>
                                <li data-ui-y="137"></li>
                                <li data-ui-y="144"></li>
                                <li data-ui-y="59"></li>
                                <li data-ui-y="112"></li>
                                <li data-ui-y="140"></li>
                                <li data-ui-y="28"></li>
                                <li data-ui-y="0"></li>
                                <li data-ui-y="28"></li>
                                <li data-ui-y="32"></li>
                                <li data-ui-y="52"></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            <div class="ui-col-lg-8 ui-push-lg-2 ui-col-12 ui-p-30-v">

                <h3 class="ui-h3">Donut Chart Examples</h3>

                <div class="ui-row ui-row-gap-lg-v">
                    <div class="ui-col-3 ui-col-xs-6">
                        <div class="ui-donut-chart ui-ease-donut-chart">
                            <strong>HTML</strong>
                            <svg viewBox="0 0 160 160">
                                <circle r="69.85699" cy="80" cx="80" class="ui-donut-chart-bg" />
                                <circle r="69.85699" cy="80" cx="80" stroke="hsl(210, 86%, 68%)" data-ui-percent="25" />
                            </svg>
                        </div>
                    </div>
                    <div class="ui-col-3 ui-col-xs-6">
                        <div class="ui-donut-chart ui-ease-donut-chart">
                            <strong>CSS</strong>
                            <svg viewBox="0 0 160 160">
                                <circle r="69.85699" cy="80" cx="80" class="ui-donut-chart-bg" />
                                <circle r="69.85699" cy="80" cx="80" stroke="hsl(97, 70%, 70%)" data-ui-percent="50" />
                            </svg>
                        </div>
                    </div>
                    <div class="ui-col-3 ui-col-xs-6">
                        <div class="ui-donut-chart ui-ease-donut-chart">
                            <strong>JS</strong>
                            <svg viewBox="0 0 160 160">
                                <circle r="69.85699" cy="80" cx="80" class="ui-donut-chart-bg" />
                                <circle r="69.85699" cy="80" cx="80" stroke="hsl(285, 70%, 70%)" data-ui-percent="75" />
                            </svg>
                        </div>
                    </div>
                    <div class="ui-col-3 ui-col-xs-6">
                        <div class="ui-donut-chart ui-ease-donut-chart">
                            <strong>PHP</strong>
                            <svg viewBox="0 0 160 160">
                                <circle r="69.85699" cy="80" cx="80" class="ui-donut-chart-bg" />
                                <circle r="69.85699" cy="80" cx="80" stroke="hsl(27, 77%, 59%)" data-ui-percent="90" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div class="ui-row ui-row-gap-lg-v">
                    <div class="ui-col-3 ui-col-xs-6">
                        <div class="ui-donut-chart ui-ease-donut-chart">
                            <strong>Multiple<br>Donuts</strong>
                            <svg viewBox="0 0 160 160">
                                <circle r="69.85699" cy="80" cx="80" class="ui-donut-chart-bg" />
                                <circle r="69.85699" cy="80" cx="80" stroke="hsl(210, 86%, 68%)" data-ui-percent="15" />
                                <circle r="69.85699" cy="80" cx="80" stroke="hsl(27, 77%, 59%)" data-ui-percent="85" />
                            </svg>
                        </div>
                    </div>
                    <div class="ui-col-3 ui-col-xs-6">
                        <div class="ui-donut-chart ui-ease-donut-chart">
                            <strong>Multiple<br>Donuts</strong>
                            <svg viewBox="0 0 160 160">
                                <circle r="69.85699" cy="80" cx="80" class="ui-donut-chart-bg" />
                                <circle r="69.85699" cy="80" cx="80" stroke="hsl(210, 86%, 68%)" data-ui-percent="10" />
                                <circle r="69.85699" cy="80" cx="80" stroke="hsl(27, 77%, 59%)" data-ui-percent="60" />
                                <circle r="69.85699" cy="80" cx="80" stroke="hsl(285, 70%, 70%)" data-ui-percent="30" />
                            </svg>
                        </div>
                    </div>
                    <div class="ui-col-3 ui-col-xs-6">
                        <div class="ui-donut-chart ui-ease-donut-chart">
                            <strong>Multiple<br>Donuts</strong>
                            <svg viewBox="0 0 160 160">
                                <circle r="69.85699" cy="80" cx="80" class="ui-donut-chart-bg" />
                                <circle r="69.85699" cy="80" cx="80" stroke="hsl(210, 86%, 68%)" data-ui-percent="10" />
                                <circle r="69.85699" cy="80" cx="80" stroke="hsl(27, 77%, 59%)" data-ui-percent="20" />
                                <circle r="69.85699" cy="80" cx="80" stroke="hsl(285, 70%, 70%)" data-ui-percent="30" />
                                <circle r="69.85699" cy="80" cx="80" stroke="hsl(97, 70%, 70%)" data-ui-percent="40" />
                            </svg>
                        </div>
                    </div>
                    <div class="ui-col-3 ui-col-xs-6">
                        <div class="ui-donut-chart ui-ease-donut-chart">
                            <strong>Multiple<br>Donuts</strong>
                            <svg viewBox="0 0 160 160">
                                <circle r="69.85699" cy="80" cx="80" class="ui-donut-chart-bg" />
                                <circle r="69.85699" cy="80" cx="80" stroke="hsl(210, 86%, 68%)" data-ui-percent="20" />
                                <circle r="69.85699" cy="80" cx="80" stroke="hsl(27, 77%, 59%)" data-ui-percent="20" />
                                <circle r="69.85699" cy="80" cx="80" stroke="hsl(285, 70%, 70%)" data-ui-percent="20" />
                                <circle r="69.85699" cy="80" cx="80" stroke="hsl(97, 70%, 70%)" data-ui-percent="20" />
                                <circle r="69.85699" cy="80" cx="80" stroke="hsl(186, 70%, 68%)" data-ui-percent="20" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div class="ui-p-10-v ui-align-c">
                    <b>Show Title Examples:</b>
                </div>

                <div class="ui-row ui-row-gap-lg-v">
                    <div class="ui-col-3 ui-col-xs-6">
                        <div class="ui-donut-chart ui-ease-donut-chart">
                            <strong>HTML</strong>
                            <svg viewBox="0 0 160 160">
                                <circle r="69.85699" cy="80" cx="80" class="ui-donut-chart-bg" />
                                <circle r="69.85699" cy="80" cx="80" stroke="hsl(210, 86%, 68%)" data-ui-percent="25" data-ui-title="25% HTML" />
                            </svg>
                        </div>
                    </div>
                    <div class="ui-col-3 ui-col-xs-6">
                        <div class="ui-donut-chart ui-ease-donut-chart">
                            <strong>CSS</strong>
                            <svg viewBox="0 0 160 160">
                                <circle r="69.85699" cy="80" cx="80" class="ui-donut-chart-bg" />
                                <circle r="69.85699" cy="80" cx="80" stroke="hsl(97, 70%, 70%)" data-ui-percent="50" data-ui-title="50% CSS" />
                            </svg>
                        </div>
                    </div>
                    <div class="ui-col-3 ui-col-xs-6">
                        <div class="ui-donut-chart ui-ease-donut-chart">
                            <strong>Multiple<br>Donuts</strong>
                            <svg viewBox="0 0 160 160">
                                <circle r="69.85699" cy="80" cx="80" class="ui-donut-chart-bg" />
                                <circle r="69.85699" cy="80" cx="80" stroke="hsl(210, 86%, 68%)" data-ui-percent="15" data-ui-title="15% HTML" />
                                <circle r="69.85699" cy="80" cx="80" stroke="hsl(27, 77%, 59%)" data-ui-percent="85" data-ui-title="85% PHP" />
                            </svg>
                        </div>
                    </div>
                    <div class="ui-col-3 ui-col-xs-6">
                        <div class="ui-donut-chart ui-ease-donut-chart">
                            <strong>Multiple<br>Donuts</strong>
                            <svg viewBox="0 0 160 160">
                                <circle r="69.85699" cy="80" cx="80" class="ui-donut-chart-bg" />
                                <circle r="69.85699" cy="80" cx="80" stroke="hsl(210, 86%, 68%)" data-ui-percent="10" data-ui-title="10% HTML" />
                                <circle r="69.85699" cy="80" cx="80" stroke="hsl(27, 77%, 59%)" data-ui-percent="60" data-ui-title="60% PHP" />
                                <circle r="69.85699" cy="80" cx="80" stroke="hsl(285, 70%, 70%)" data-ui-percent="30" data-ui-title="30% JS" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div class="ui-row ui-row-gap-lg-v ui-theme-base ui-fill-dark-100 ui-round">
                    <div class="ui-col-3 ui-col-xs-6">
                        <div class="ui-donut-chart ui-ease-donut-chart">
                            <strong>HTML</strong>
                            <svg viewBox="0 0 160 160">
                                <circle r="69.85699" cy="80" cx="80" class="ui-donut-chart-bg" />
                                <circle r="69.85699" cy="80" cx="80" stroke="hsl(210, 86%, 68%)" data-ui-percent="25" data-ui-title="25% HTML" />
                            </svg>
                        </div>
                    </div>
                    <div class="ui-col-3 ui-col-xs-6">
                        <div class="ui-donut-chart ui-ease-donut-chart">
                            <strong>CSS</strong>
                            <svg viewBox="0 0 160 160">
                                <circle r="69.85699" cy="80" cx="80" class="ui-donut-chart-bg" />
                                <circle r="69.85699" cy="80" cx="80" stroke="hsl(97, 70%, 70%)" data-ui-percent="50" data-ui-title="50% CSS" />
                            </svg>
                        </div>
                    </div>
                    <div class="ui-col-3 ui-col-xs-6">
                        <div class="ui-donut-chart ui-ease-donut-chart">
                            <strong>Multiple<br>Donuts</strong>
                            <svg viewBox="0 0 160 160">
                                <circle r="69.85699" cy="80" cx="80" class="ui-donut-chart-bg" />
                                <circle r="69.85699" cy="80" cx="80" stroke="hsl(210, 86%, 68%)" data-ui-percent="15" data-ui-title="15% HTML" />
                                <circle r="69.85699" cy="80" cx="80" stroke="hsl(27, 77%, 59%)" data-ui-percent="85" data-ui-title="85% PHP" />
                            </svg>
                        </div>
                    </div>
                    <div class="ui-col-3 ui-col-xs-6">
                        <div class="ui-donut-chart ui-ease-donut-chart">
                            <strong>Multiple<br>Donuts</strong>
                            <svg viewBox="0 0 160 160">
                                <circle r="69.85699" cy="80" cx="80" class="ui-donut-chart-bg" />
                                <circle r="69.85699" cy="80" cx="80" stroke="hsl(210, 86%, 68%)" data-ui-percent="10" data-ui-title="10% HTML" />
                                <circle r="69.85699" cy="80" cx="80" stroke="hsl(27, 77%, 59%)" data-ui-percent="60" data-ui-title="60% PHP" />
                                <circle r="69.85699" cy="80" cx="80" stroke="hsl(285, 70%, 70%)" data-ui-percent="30" data-ui-title="30% JS" />
                            </svg>
                        </div>
                    </div>
                </div>

            </div>
            <div class="ui-col-lg-8 ui-push-lg-2 ui-col-12 ui-p-30-v">

                <h3 class="ui-h3">Pie Chart Examples</h3>

                <div class="ui-row ui-row-gap-lg-v">
                    <div class="ui-col-3 ui-col-xs-6">
                        <div class="ui-pie-chart ui-ease-pie-chart">
                            <ul>
                                <li data-ui-percent="37" data-ui-fill="hsl(210, 86%, 68%)"></li>
                            </ul>
                        </div>
                    </div>
                    <div class="ui-col-3 ui-col-xs-6">
                        <div class="ui-pie-chart ui-ease-pie-chart">
                            <ul>
                                <li data-ui-percent="66" data-ui-fill="hsl(27, 77%, 59%)"></li>
                            </ul>
                        </div>
                    </div>
                    <div class="ui-col-3 ui-col-xs-6">
                        <div class="ui-pie-chart ui-ease-pie-chart">
                            <ul>
                                <li data-ui-percent="14" data-ui-fill="hsl(285, 70%, 70%)"></li>
                                <li data-ui-percent="39" data-ui-fill="hsl(97, 70%, 70%)"></li>
                            </ul>
                        </div>
                    </div>
                    <div class="ui-col-3 ui-col-xs-6">
                        <div class="ui-pie-chart ui-ease-pie-chart" data-ui-info="Example">
                            <ul>
                                <li data-ui-percent="57" data-ui-fill="hsl(186, 70%, 68%)"></li>
                                <li data-ui-percent="22" data-ui-fill="hsl(210, 86%, 68%)"></li>
                            </ul>
                        </div>
                    </div>
                    <div class="ui-col-3 ui-col-xs-6">
                        <div class="ui-pie-chart ui-ease-pie-chart">
                            <ul>
                                <li data-ui-percent="20" data-ui-fill="hsl(210, 86%, 68%)"></li>
                                <li data-ui-percent="20" data-ui-fill="hsl(27, 77%, 59%)"></li>
                                <li data-ui-percent="60" data-ui-fill="hsl(285, 70%, 70%)"></li>
                            </ul>
                        </div>
                    </div>
                    <div class="ui-col-3 ui-col-xs-6">
                        <div class="ui-pie-chart ui-ease-pie-chart">
                            <ul>
                                <li data-ui-percent="15" data-ui-fill="hsl(97, 70%, 70%)"></li>
                                <li data-ui-percent="16" data-ui-fill="hsl(186, 70%, 68%)"></li>
                                <li data-ui-percent="39" data-ui-fill="hsl(210, 86%, 68%)"></li>
                                <li data-ui-percent="30" data-ui-fill="hsl(27, 77%, 59%)"></li>
                            </ul>
                        </div>
                    </div>
                    <div class="ui-col-3 ui-col-xs-6">
                        <div class="ui-pie-chart ui-ease-pie-chart">
                            <ul>
                                <li data-ui-percent="49" data-ui-fill="hsl(285, 70%, 70%)"></li>
                                <li data-ui-percent="14" data-ui-fill="hsl(97, 70%, 70%)"></li>
                                <li data-ui-percent="11" data-ui-fill="hsl(186, 70%, 68%)"></li>
                                <li data-ui-percent="14" data-ui-fill="hsl(210, 86%, 68%)"></li>
                                <li data-ui-percent="12" data-ui-fill="hsl(27, 77%, 59%)"></li>
                            </ul>
                        </div>
                    </div>
                    <div class="ui-col-3 ui-col-xs-6">
                        <div class="ui-pie-chart ui-ease-pie-chart" data-ui-info="Example">
                            <ul>
                                <li data-ui-percent="20" data-ui-fill="hsl(210, 86%, 68%)"></li>
                                <li data-ui-percent="15" data-ui-fill="hsl(27, 77%, 59%)"></li>
                                <li data-ui-percent="25" data-ui-fill="hsl(285, 70%, 70%)"></li>
                                <li data-ui-percent="25" data-ui-fill="hsl(97, 70%, 70%)"></li>
                                <li data-ui-percent="15" data-ui-fill="hsl(186, 70%, 68%)"></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="ui-p-10-v ui-align-c">
                    <b>Custom Title Examples:</b>
                </div>

                <div class="ui-row ui-row-gap-lg-v">
                    <div class="ui-col-3 ui-col-xs-6">
                        <div class="ui-pie-chart ui-ease-pie-chart">
                            <ul>
                                <li data-ui-percent="37" data-ui-custom="1/3" data-ui-fill="hsl(210, 86%, 68%)"></li>
                            </ul>
                        </div>
                    </div>
                    <div class="ui-col-3 ui-col-xs-6">
                        <div class="ui-pie-chart ui-ease-pie-chart">
                            <ul>
                                <li data-ui-percent="66" data-ui-custom="66/100" data-ui-fill="hsl(27, 77%, 59%)"></li>
                            </ul>
                        </div>
                    </div>
                    <div class="ui-col-3 ui-col-xs-6">
                        <div class="ui-pie-chart ui-ease-pie-chart">
                            <ul>
                                <li data-ui-percent="14" data-ui-custom="1/3" data-ui-fill="hsl(285, 70%, 70%)"></li>
                                <li data-ui-percent="39" data-ui-custom="2/3" data-ui-fill="hsl(97, 70%, 70%)"></li>
                            </ul>
                        </div>
                    </div>
                    <div class="ui-col-3 ui-col-xs-6">
                        <div class="ui-pie-chart ui-ease-pie-chart" data-ui-info="Example">
                            <ul>
                                <li data-ui-percent="57" data-ui-custom="3/5" data-ui-fill="hsl(186, 70%, 68%)"></li>
                                <li data-ui-percent="22" data-ui-custom="2/5" data-ui-fill="hsl(210, 86%, 68%)"></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="ui-p-10-v ui-align-c">
                    <b>Show Title Examples:</b>
                </div>

                <div class="ui-row ui-row-gap-lg-v">
                    <div class="ui-col-3 ui-col-xs-6">
                        <div class="ui-pie-chart ui-ease-pie-chart">
                            <ul>
                                <li data-ui-percent="37" data-ui-fill="hsl(210, 86%, 68%)" data-ui-title="37% HTML"></li>
                            </ul>
                        </div>
                    </div>
                    <div class="ui-col-3 ui-col-xs-6">
                        <div class="ui-pie-chart ui-ease-pie-chart">
                            <ul>
                                <li data-ui-percent="66" data-ui-fill="hsl(27, 77%, 59%)" data-ui-title="66% PHP"></li>
                            </ul>
                        </div>
                    </div>
                    <div class="ui-col-3 ui-col-xs-6">
                        <div class="ui-pie-chart ui-ease-pie-chart">
                            <ul>
                                <li data-ui-percent="14" data-ui-fill="hsl(285, 70%, 70%)" data-ui-title="14% JS"></li>
                                <li data-ui-percent="39" data-ui-fill="hsl(97, 70%, 70%)" data-ui-title="39% CSS"></li>
                            </ul>
                        </div>
                    </div>
                    <div class="ui-col-3 ui-col-xs-6">
                        <div class="ui-pie-chart ui-ease-pie-chart" data-ui-info="Example">
                            <ul>
                                <li data-ui-percent="57" data-ui-fill="hsl(186, 70%, 68%)" data-ui-title="57% HTML"></li>
                                <li data-ui-percent="22" data-ui-fill="hsl(210, 86%, 68%)" data-ui-title="22% ASP"></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="ui-row ui-row-gap-lg-v ui-theme-base ui-fill-dark-100 ui-round">
                    <div class="ui-col-3 ui-col-xs-6">
                        <div class="ui-pie-chart ui-ease-pie-chart">
                            <ul>
                                <li data-ui-percent="37" data-ui-fill="hsl(210, 86%, 68%)" data-ui-title="37% HTML"></li>
                            </ul>
                        </div>
                    </div>
                    <div class="ui-col-3 ui-col-xs-6">
                        <div class="ui-pie-chart ui-ease-pie-chart">
                            <ul>
                                <li data-ui-percent="66" data-ui-fill="hsl(27, 77%, 59%)" data-ui-title="66% PHP"></li>
                            </ul>
                        </div>
                    </div>
                    <div class="ui-col-3 ui-col-xs-6">
                        <div class="ui-pie-chart ui-ease-pie-chart">
                            <ul>
                                <li data-ui-percent="14" data-ui-fill="hsl(285, 70%, 70%)" data-ui-title="14% JS"></li>
                                <li data-ui-percent="39" data-ui-fill="hsl(97, 70%, 70%)" data-ui-title="39% CSS"></li>
                            </ul>
                        </div>
                    </div>
                    <div class="ui-col-3 ui-col-xs-6">
                        <div class="ui-pie-chart ui-ease-pie-chart" data-ui-info="Example">
                            <ul>
                                <li data-ui-percent="57" data-ui-fill="hsl(186, 70%, 68%)" data-ui-title="57% HTML"></li>
                                <li data-ui-percent="22" data-ui-fill="hsl(210, 86%, 68%)" data-ui-title="22% ASP"></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
</main>
