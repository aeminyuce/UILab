<!-- custom CSS -->
<link rel="stylesheet" href="../css/custom/movie-app.css?v=<?php echo filemtime('../css/custom/movie-app.css'); ?>"/>

<main class="ui-container ui-no-gutter">
    <div class="ui-col-static ui-no-fluid">
        <div class="ui-col-200 ui-set-relative ui-hidden-md">

            <div class="movie-library ui-full-h ui-set-fixed ui-set-l ui-p-5 ui-fill-dark-100 ui-hidden-md ui-scroll-v ui-scrollbar-faded">

                <div class="ui-align-l ui-p-10 ui-icons-no-opacity ui-icons-m-10-r ui-form-lg ui-sidebar-add-l">
                    <h5 class="ui-h5 ui-color-white-50 ui-p-15 ui-m-5-b">LIBRARY</h5>
                    <ul class="ui-list-unstyled ui-list-sp-15 ui-font-16 ui-font-bold ui-block-2nd ui-ease-2nd-btn">
                        <li>
                            <a class="ui-btn ui-btn-ghost ui-p-15-h ui-circle" href="#">
                                <svg class="ui-icon"><use href="#tv"/></svg>
                                TV Shows
                            </a>
                        </li>
                        <li>
                            <a class="ui-btn ui-p-15-h ui-circle movie-library-selected" href="#">
                                <svg class="ui-icon"><use href="#film"/></svg>
                                Films
                            </a>
                        </li>
                        <li>
                            <a class="ui-btn ui-btn-ghost ui-p-15-h ui-circle" href="#">
                                <svg class="ui-icon"><use href="#trophy-star"/></svg>
                                Sports
                            </a>
                        </li>
                        <li>
                            <a class="ui-btn ui-btn-ghost ui-p-15-h ui-circle" href="#">
                                <svg class="ui-icon"><use href="#music"/></svg>
                                Concerts
                            </a>
                        </li>
                        <li>
                            <a class="ui-btn ui-btn-ghost ui-p-15-h ui-circle" href="#">
                                <svg class="ui-icon"><use href="#face-smile"/></svg>
                                Comedy
                            </a>
                        </li>
                        <li>
                            <a class="ui-btn ui-btn-ghost ui-p-15-h ui-circle" href="#">
                                <svg class="ui-icon"><use href="#video"/></svg>
                                Others
                            </a>
                        </li>
                    </ul>

                    <span class="ui-sp-30"></span>

                    <h5 class="ui-h5 ui-color-white-50 ui-p-15 ui-m-5-b">NEWS &amp; EVENTS</h5>
                    <ul class="ui-list-unstyled ui-list-sp-15 ui-color-white-50 ui-font-16 ui-block-2nd ui-ease-2nd-btn">
                        <li>
                            <a class="ui-btn ui-btn-ghost ui-p-15-h ui-circle" href="#">
                                <svg class="ui-icon"><use href="#news"/></svg>
                                News
                            </a>
                        </li>
                        <li>
                            <a class="ui-btn ui-btn-ghost ui-p-15-h ui-circle" href="#">
                                <svg class="ui-icon"><use href="#network"/></svg>
                                Community
                            </a>
                        </li>
                        <li>
                            <a class="ui-btn ui-btn-ghost ui-p-15-h ui-circle" href="#">
                                <svg class="ui-icon"><use href="#calendar-days"/></svg>
                                Events
                            </a>
                        </li>
                    </ul>
                </div>

            </div>

        </div>
        <div class="ui-row ui-no-row-gap">
            <div class="ui-col-12">

                <div class="ui-p-30 ui-no-p-b ui-md-no-p">

                    <header class="ui-row ui-no-row-gap-t ui-sticky-md ui-icons-no-opacity ui-form-lg" data-ui-classes="ui-shadow-lg">
                        <div class="ui-col-6 ui-hidden-md ui-ease-1st-form">
                            <div class="ui-input ui-form-icon-all ui-m-15-b ui-circle ui-no-border ui-theme-gray ui-fill-light-300 ui-form-has-clear">
                                <svg class="ui-icon ui-form-icon-l"><use href="#search"/></svg>
                                <button type="button" class="ui-form-clear">
                                    <svg class="ui-icon"><use href="#remove"/></svg>
                                </button>
                                <input type="text" placeholder="Search for movies, TV shows...">
                            </div>
                        </div>
                        <div class="ui-col-6 ui-align-r">
                            <span class="ui-align-c ui-color-black-50 ui-m-20-r ui-sm-no-m ui-ease-1st-btn">
                                <button class="ui-btn ui-btn-square ui-btn-ghost ui-m-10-l ui-circle ui-float-l ui-sidebar-show-l ui-visible-md">
                                    <svg class="ui-icon"><use href="#bars-left"/></svg>
                                </button>
                                <button class="ui-btn ui-btn-square ui-btn-ghost ui-circle ui-ease-btn ui-visible-md" onclick="ui.modal.open({source: '.modal-search', bg: 'false'});" data-ui-tooltip data-ui-only="desktop" title="Search">
                                    <svg class="ui-icon"><use href="#search"/></svg>
                                </button>
                                <button class="ui-btn ui-btn-square ui-btn-ghost ui-circle">
                                    <svg class="ui-icon"><use href="#user"/></svg>
                                </button>
                                <button class="ui-btn ui-btn-square ui-btn-ghost ui-circle" data-ui-notifier>
                                    <svg class="ui-icon"><use href="#bell"/></svg>
                                </button>
                                <button class="ui-btn ui-btn-square ui-btn-ghost ui-circle">
                                    <svg class="ui-icon"><use href="#setting"/></svg>
                                </button>
                                <button class="ui-btn ui-btn-square ui-btn-ghost ui-circle">
                                    <svg class="ui-icon"><use href="#help"/></svg>
                                </button>
                            </span>
                            <span class="ui-inline-block ui-float-r ui-no-float-sm">
                                <img class="ui-avatar ui-avatar-sm ui-circle ui-m-10-l ui-sm-no-m ui-float-r" src="img/profile-image.jpg" alt="">
                                <span class="ui-m-3-t ui-inline-block ui-hidden-sm">aeminyuce</span>
                                <span class="ui-font-12 ui-color-black-50 ui-block ui-hidden-sm">Premium</span>
                            </span>
                        </div>
                    </header>

                </div>
                <div class="ui-p-15">
                    <div class="ui-p-10 ui-md-no-p-h">
                        <div class="ui-p-10 ui-md-no-p-h">

                            <div class="ui-col-static">
                                <div class="ui-col-350">
                                    <div class="ui-round ui-set-relative">
                                        <button class="ui-btn ui-full-w ui-full-h ui-set-absolute ui-opacity-more ui-ease-layout" onclick="ui.modal.open({source: 'https://www.imdb.com/videoembed/vi4235180569', size: '722x300', type: 'iframe'});">
                                            <svg class="ui-icon ui-icon-xxl ui-icon-default ui-color-white ui-set-absolute ui-set-c"><use href="#video"/></svg>
                                        </button>
                                        <img class="ui-img-fluid ui-round ui-shadow-lg" src="img/video-poster.jpg" alt="">
                                    </div>
                                </div>
                                <div class="ui-row">
                                    <div class="ui-col-12 ui-col-lg-8 ui-p-30-l ui-no-p-v ui-md-no-p">
                                        <span class="ui-sp-15 ui-visible-md"></span>

                                        <h2 class="ui-h2 ui-font-bold">Related Video</h2>
                                        <b class="ui-font-16">Captain Marvel (2019)</b>

                                        <p class="ui-m-10-v ui-font-readable">After crashing an experimental aircraft, Air Force pilot Carol Danvers is discovered by the Kree and trained as a member of the elite Starforce Military under the command of her mentor Yon-Rogg. Six years later, after escaping to Earth while under attack by the Skrulls.</p>

                                        <div class="ui-avatar-holder ui-hover-scale-more-2nd ui-ease-2nd-layout">
                                            <a href="#"><img class="ui-avatar ui-border-dual ui-circle" src="img/profile-image.jpg" alt=""></a>
                                            <a href="#"><img class="ui-avatar ui-border-dual ui-circle" src="img/profile-image2.jpg" alt=""></a>
                                            <a href="#"><img class="ui-avatar ui-border-dual ui-circle" src="img/profile-image3.jpg" alt=""></a>
                                            <a class="ui-btn ui-btn-lg ui-btn-square ui-btn-ghost ui-circle ui-ease-btn" href="#">+38</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="ui-p-15">
                    <h2 class="ui-h2 ui-font-bold ui-p-15-h ui-md-no-p">Now Showing</h2>
                </div>

                <div class="ui-carousel ui-half-sized ui-m-15-h ui-md-no-m" data-ui-col-xl="8" data-ui-col-lg="6" data-ui-col="3" data-ui-col-md="4" data-ui-col-sm="4" data-ui-col-xs="2">
                    <div class="ui-carousel-slider ui-block-2nd ui-hover-scale-2nd ui-ease-layout ui-ease-2nd-layout ui-ease-slow ui-ease-in-out">
                        <div class="ui-slide-content ui-p-15">
                            <a class="ui-link ui-ease-default" href="#">
                                <img class="ui-img-fluid ui-round ui-block ui-m-15-b ui-shadow" src="img/movie_01.jpg" alt="">
                                <b class="ui-font-16">Captain Marvel</b>
                                <span class="ui-color-black-50 ui-m-5-b ui-block">2019 &nbsp; Action, Sci-Fi</span>
                                <svg class="ui-icon ui-icon-xs ui-color-yellow"><use href="#star-fill"/></svg>
                                <span class="ui-inline-block ui-m-2-l ui-m-10-r">
                                    7,0 <span class="ui-color-black-25">/10</span> &nbsp; 7+
                                </span>
                            </a>
                        </div>
                        <div class="ui-slide-content ui-p-15">
                            <a class="ui-link ui-ease-default" href="#">
                                <img class="ui-img-fluid ui-round ui-block ui-m-15-b ui-shadow" src="img/movie_02.jpg" alt="">
                                <b class="ui-font-16">Avengers: Endgame</b>
                                <span class="ui-color-black-50 ui-m-5-b ui-block">2019 &nbsp; Action, Sci-Fi</span>
                                <svg class="ui-icon ui-icon-xs ui-color-yellow"><use href="#star-fill"/></svg>
                                <span class="ui-inline-block ui-m-2-l ui-m-10-r">
                                    8,7 <span class="ui-color-black-25">/10</span> &nbsp; 8+
                                </span>
                            </a>
                        </div>
                        <div class="ui-slide-content ui-p-15">
                            <a class="ui-link ui-ease-default" href="#">
                                <img class="ui-img-fluid ui-round ui-block ui-m-15-b ui-shadow" src="img/movie_03.jpg" alt="">
                                <b class="ui-font-16">Captain America</b>
                                <span class="ui-color-black-50 ui-m-5-b ui-block">2014 &nbsp; Action, Sci-Fi</span>
                                <svg class="ui-icon ui-icon-xs ui-color-yellow"><use href="#star-fill"/></svg>
                                <span class="ui-inline-block ui-m-2-l ui-m-10-r">
                                    7,8 <span class="ui-color-black-25">/10</span> &nbsp; 13+
                                </span>
                            </a>
                        </div>
                        <div class="ui-slide-content ui-p-15">
                            <a class="ui-link ui-ease-default" href="#">
                                <img class="ui-img-fluid ui-round ui-block ui-m-15-b ui-shadow" src="img/movie_04.jpg" alt="">
                                <b class="ui-font-16">Ant-Man</b>
                                <span class="ui-color-black-50 ui-m-5-b ui-block">2015 &nbsp; Action, Comedy</span>
                                <svg class="ui-icon ui-icon-xs ui-color-yellow"><use href="#star-fill"/></svg>
                                <span class="ui-inline-block ui-m-2-l ui-m-10-r">
                                    7,3 <span class="ui-color-black-25">/10</span> &nbsp; 13+
                                </span>
                            </a>
                        </div>
                        <div class="ui-slide-content ui-p-15">
                            <a class="ui-link ui-ease-default" href="#">
                                <img class="ui-img-fluid ui-round ui-block ui-m-15-b ui-shadow" src="img/movie_05.jpg" alt="">
                                <b class="ui-font-16">Venom</b>
                                <span class="ui-color-black-50 ui-m-5-b ui-block">2018 &nbsp; Action, Thriller</span>
                                <svg class="ui-icon ui-icon-xs ui-color-yellow"><use href="#star-fill"/></svg>
                                <span class="ui-inline-block ui-m-2-l ui-m-10-r">
                                    6,7 <span class="ui-color-black-25">/10</span> &nbsp; 15+
                                </span>
                            </a>
                        </div>
                        <div class="ui-slide-content ui-p-15">
                            <a class="ui-link ui-ease-default" href="#">
                                <img class="ui-img-fluid ui-round ui-block ui-m-15-b ui-shadow" src="img/movie_06.jpg" alt="">
                                <b class="ui-font-16">Justice League</b>
                                <span class="ui-color-black-50 ui-m-5-b ui-block">2017 &nbsp; Action, Fantasy</span>
                                <svg class="ui-icon ui-icon-xs ui-color-yellow"><use href="#star-fill"/></svg>
                                <span class="ui-inline-block ui-m-2-l ui-m-10-r">
                                    6,4 <span class="ui-color-black-25">/10</span> &nbsp; 13+
                                </span>
                            </a>
                        </div>
                        <div class="ui-slide-content ui-p-15">
                            <a class="ui-link ui-ease-default" href="#">
                                <img class="ui-img-fluid ui-round ui-block ui-m-15-b ui-shadow" src="img/movie_01.jpg" alt="">
                                <b class="ui-font-16">Captain Marvel</b>
                                <span class="ui-color-black-50 ui-m-5-b ui-block">2019 &nbsp; Action, Sci-Fi</span>
                                <svg class="ui-icon ui-icon-xs ui-color-yellow"><use href="#star-fill"/></svg>
                                <span class="ui-inline-block ui-m-2-l ui-m-10-r">
                                    7,0 <span class="ui-color-black-25">/10</span> &nbsp; 7+
                                </span>
                            </a>
                        </div>
                        <div class="ui-slide-content ui-p-15">
                            <a class="ui-link ui-ease-default" href="#">
                                <img class="ui-img-fluid ui-round ui-block ui-m-15-b ui-shadow" src="img/movie_02.jpg" alt="">
                                <b class="ui-font-16">Avengers: Endgame</b>
                                <span class="ui-color-black-50 ui-m-5-b ui-block">2019 &nbsp; Action, Sci-Fi</span>
                                <svg class="ui-icon ui-icon-xs ui-color-yellow"><use href="#star-fill"/></svg>
                                <span class="ui-inline-block ui-m-2-l ui-m-10-r">
                                    8,7 <span class="ui-color-black-25">/10</span> &nbsp; 8+
                                </span>
                            </a>
                        </div>
                        <div class="ui-slide-content ui-p-15">
                            <a class="ui-link ui-ease-default" href="#">
                                <img class="ui-img-fluid ui-round ui-block ui-m-15-b ui-shadow" src="img/movie_03.jpg" alt="">
                                <b class="ui-font-16">Captain America</b>
                                <span class="ui-color-black-50 ui-m-5-b ui-block">2014 &nbsp; Action, Sci-Fi</span>
                                <svg class="ui-icon ui-icon-xs ui-color-yellow"><use href="#star-fill"/></svg>
                                <span class="ui-inline-block ui-m-2-l ui-m-10-r">
                                    7,8 <span class="ui-color-black-25">/10</span> &nbsp; 13+
                                </span>
                            </a>
                        </div>
                        <div class="ui-slide-content ui-p-15">
                            <a class="ui-link ui-ease-default" href="#">
                                <img class="ui-img-fluid ui-round ui-block ui-m-15-b ui-shadow" src="img/movie_04.jpg" alt="">
                                <b class="ui-font-16">Ant-Man</b>
                                <span class="ui-color-black-50 ui-m-5-b ui-block">2015 &nbsp; Action, Comedy</span>
                                <svg class="ui-icon ui-icon-xs ui-color-yellow"><use href="#star-fill"/></svg>
                                <span class="ui-inline-block ui-m-2-l ui-m-10-r">
                                    7,3 <span class="ui-color-black-25">/10</span> &nbsp; 13+
                                </span>
                            </a>
                        </div>
                        <div class="ui-slide-content ui-p-15">
                            <a class="ui-link ui-ease-default" href="#">
                                <img class="ui-img-fluid ui-round ui-block ui-m-15-b ui-shadow" src="img/movie_05.jpg" alt="">
                                <b class="ui-font-16">Venom</b>
                                <span class="ui-color-black-50 ui-m-5-b ui-block">2018 &nbsp; Action, Thriller</span>
                                <svg class="ui-icon ui-icon-xs ui-color-yellow"><use href="#star-fill"/></svg>
                                <span class="ui-inline-block ui-m-2-l ui-m-10-r">
                                    6,7 <span class="ui-color-black-25">/10</span> &nbsp; 15+
                                </span>
                            </a>
                        </div>
                        <div class="ui-slide-content ui-p-15">
                            <a class="ui-link ui-ease-default" href="#">
                                <img class="ui-img-fluid ui-round ui-block ui-m-15-b ui-shadow" src="img/movie_06.jpg" alt="">
                                <b class="ui-font-16">Justice League</b>
                                <span class="ui-color-black-50 ui-m-5-b ui-block">2017 &nbsp; Action, Fantasy</span>
                                <svg class="ui-icon ui-icon-xs ui-color-yellow"><use href="#star-fill"/></svg>
                                <span class="ui-inline-block ui-m-2-l ui-m-10-r">
                                    6,4 <span class="ui-color-black-25">/10</span> &nbsp; 13+
                                </span>
                            </a>
                        </div>
                    </div>
                    <div class="ui-carousel-nav ui-ease-1st-btn">
                        <button class="ui-carousel-prev ui-btn ui-btn-ghost ui-btn-square ui-circle">
                            <svg class="ui-icon ui-m-3-r"><use href="#angle-left"/></svg>
                        </button>
                        <span class="ui-dots ui-color-black-25"></span>
                        <button class="ui-carousel-next ui-btn ui-btn-ghost ui-btn-square ui-circle">
                            <svg class="ui-icon ui-m-3-l"><use href="#angle-right"/></svg>
                        </button>
                    </div>
                </div>

                <span class="ui-sp-15"></span>

                <div class="ui-p-15">
                    <h2 class="ui-h2 ui-font-bold ui-p-15-h ui-md-no-p">Categories</h2>
                </div>

                <div class="ui-carousel ui-half-sized ui-m-15-h ui-md-no-m" data-ui-col-xl="6" data-ui-col-lg="6" data-ui-col="3" data-ui-col-md="4" data-ui-col-sm="4" data-ui-col-xs="2">
                    <div class="ui-carousel-slider ui-block-2nd ui-hover-scale-2nd ui-ease-layout ui-ease-2nd-layout ui-ease-slow ui-ease-in-out">
                        <div class="ui-slide-content ui-p-15">
                            <a class="ui-link ui-ease-default" href="#">
                                <img class="ui-img-fluid ui-round ui-block ui-m-15-b ui-shadow" src="img/movie_category_01.jpg" alt="">
                                <b class="ui-font-16">Action</b>
                            </a>
                        </div>
                        <div class="ui-slide-content ui-p-15">
                            <a class="ui-link ui-ease-default" href="#">
                                <img class="ui-img-fluid ui-round ui-block ui-m-15-b ui-shadow" src="img/movie_category_02.jpg" alt="">
                                <b class="ui-font-16">Adventure</b>
                            </a>
                        </div>
                        <div class="ui-slide-content ui-p-15">
                            <a class="ui-link ui-ease-default" href="#">
                                <img class="ui-img-fluid ui-round ui-block ui-m-15-b ui-shadow" src="img/movie_category_03.jpg" alt="">
                                <b class="ui-font-16">Comedy</b>
                            </a>
                        </div>
                        <div class="ui-slide-content ui-p-15">
                            <a class="ui-link ui-ease-default" href="#">
                                <img class="ui-img-fluid ui-round ui-block ui-m-15-b ui-shadow" src="img/movie_category_04.jpg" alt="">
                                <b class="ui-font-16">Sci-Fi</b>
                            </a>
                        </div>
                        <div class="ui-slide-content ui-p-15">
                            <a class="ui-link ui-ease-default" href="#">
                                <img class="ui-img-fluid ui-round ui-block ui-m-15-b ui-shadow" src="img/movie_category_05.jpg" alt="">
                                <b class="ui-font-16">Animation</b>
                            </a>
                        </div>
                        <div class="ui-slide-content ui-p-15">
                            <a class="ui-link ui-ease-default" href="#">
                                <img class="ui-img-fluid ui-round ui-block ui-m-15-b ui-shadow" src="img/movie_category_06.jpg" alt="">
                                <b class="ui-font-16">Horror</b>
                            </a>
                        </div>
                        <div class="ui-slide-content ui-p-15">
                            <a class="ui-link ui-ease-default" href="#">
                                <img class="ui-img-fluid ui-round ui-block ui-m-15-b ui-shadow" src="img/movie_category_01.jpg" alt="">
                                <b class="ui-font-16">Action</b>
                            </a>
                        </div>
                        <div class="ui-slide-content ui-p-15">
                            <a class="ui-link ui-ease-default" href="#">
                                <img class="ui-img-fluid ui-round ui-block ui-m-15-b ui-shadow" src="img/movie_category_02.jpg" alt="">
                                <b class="ui-font-16">Adventure</b>
                            </a>
                        </div>
                        <div class="ui-slide-content ui-p-15">
                            <a class="ui-link ui-ease-default" href="#">
                                <img class="ui-img-fluid ui-round ui-block ui-m-15-b ui-shadow" src="img/movie_category_03.jpg" alt="">
                                <b class="ui-font-16">Comedy</b>
                            </a>
                        </div>
                        <div class="ui-slide-content ui-p-15">
                            <a class="ui-link ui-ease-default" href="#">
                                <img class="ui-img-fluid ui-round ui-block ui-m-15-b ui-shadow" src="img/movie_category_04.jpg" alt="">
                                <b class="ui-font-16">Sci-Fi</b>
                            </a>
                        </div>
                        <div class="ui-slide-content ui-p-15">
                            <a class="ui-link ui-ease-default" href="#">
                                <img class="ui-img-fluid ui-round ui-block ui-m-15-b ui-shadow" src="img/movie_category_05.jpg" alt="">
                                <b class="ui-font-16">Animation</b>
                            </a>
                        </div>
                        <div class="ui-slide-content ui-p-15">
                            <a class="ui-link ui-ease-default" href="#">
                                <img class="ui-img-fluid ui-round ui-block ui-m-15-b ui-shadow" src="img/movie_category_06.jpg" alt="">
                                <b class="ui-font-16">Horror</b>
                            </a>
                        </div>
                    </div>
                    <div class="ui-carousel-nav ui-ease-1st-btn">
                        <button class="ui-carousel-prev ui-btn ui-btn-ghost ui-btn-square ui-circle">
                            <svg class="ui-icon ui-m-3-r"><use href="#angle-left"/></svg>
                        </button>
                        <span class="ui-dots ui-color-black-25"></span>
                        <button class="ui-carousel-next ui-btn ui-btn-ghost ui-btn-square ui-circle">
                            <svg class="ui-icon ui-m-3-l"><use href="#angle-right"/></svg>
                        </button>
                    </div>
                </div>

                <span class="ui-sp-30"></span>

            </div>
        </div>
    </div>
</main>

<!-- mobile menu -->
<div class="ui-sidebar ui-sidebar-l ui-fill-dark-100 ui-ease-layout ui-ease-in-out">
    <div class="ui-sidebar-title ui-p-20-v ui-font-18 ui-border-b">
        <button class="ui-btn ui-btn-square ui-btn-lg ui-btn-ghost ui-circle ui-ease-btn ui-sidebar-close">
            <svg class="ui-icon ui-no-opacity"><use href="#remove"/></svg>
        </button>
        Categories
    </div>
    <div class="ui-sidebar-content ui-no-p ui-scroll-v"></div>
</div>

<!-- modal search -->
<div class="modal-search ui-modal ui-form-lg">
    <div class="ui-modal-container ui-xs-no-p">

        <form action="#successful">
            <h2 class="ui-h2">Search</h2>
            <p class="ui-highlight ui-font-16 ui-color-white-50 ui-xs-align-c ui-font-readable">Search for movies, TV shows...</p>

            <div class="ui-col-static ui-no-fluid">
                <div class="ui-row ui-no-row-gap-h">
                    <div class="ui-col-12 ui-ease-1st-form">
                        <div class="ui-input ui-form-icon ui-form-has-clear ui-round-l ui-no-border ui-shadow-in-sm ui-theme-gray ui-fill-light-300 ui-ease-form">
                            <button type="button" class="ui-form-clear">
                                <svg class="ui-icon"><use href="#remove"/></svg>
                            </button>
                            <input class="ui-required" type="text" placeholder="Search">
                        </div>
                        <p class="ui-required-msg ui-font-16">Please, enter a keyword.</p>
                    </div>
                </div>
                <div class="ui-col-100 ui-col-xs-50 ui-p-10-v">
                    <button class="ui-btn ui-block ui-round-r ui-theme-sub ui-fill-dark-100 ui-ease-btn" type="submit">
                        <svg class="ui-icon"><use href="#search"/></svg>
                    </button>
                </div>
            </div>

            <div class="ui-row ui-no-fluid ui-icons-xxl ui-block-2nd ui-icons-no-opacity ui-icons-m-5-v ui-hover-t-more-2nd ui-theme-base ui-ease-2nd-btn">
                <div class="ui-col-4 ui-p-10-b">
                    <a class="ui-btn ui-btn-multi ui-font-condensed ui-round ui-fill-dark-100" href="#">
                        <svg class="ui-icon"><use href="#tv"/></svg>
                        <span class="ui-font-18 ui-block ui-m-5-t">TV Shows</span>
                        <span class="ui-color-black-25">1024</span>
                    </a>
                </div>
                <div class="ui-col-4 ui-p-10-b">
                    <a class="ui-btn ui-btn-multi ui-font-condensed ui-round ui-fill-dark-100" href="#">
                        <svg class="ui-icon"><use href="#film"/></svg>
                        <span class="ui-font-18 ui-block ui-m-5-t">Films</span>
                        <span class="ui-color-black-25">775</span>
                    </a>
                </div>
                <div class="ui-col-4 ui-p-10-b">
                    <a class="ui-btn ui-btn-multi ui-font-condensed ui-round ui-fill-dark-100" href="#">
                        <svg class="ui-icon"><use href="#trophy-star"/></svg>
                        <span class="ui-font-18 ui-block ui-m-5-t">Sports</span>
                        <span class="ui-color-black-25">316</span>
                    </a>
                </div>
                <div class="ui-col-4 ui-p-10-b">
                    <a class="ui-btn ui-btn-multi ui-font-condensed ui-round ui-fill-dark-100" href="#">
                        <svg class="ui-icon"><use href="#music"/></svg>
                        <span class="ui-font-18 ui-block ui-m-5-t">Concerts</span>
                        <span class="ui-color-black-25">589</span>
                    </a>
                </div>
                <div class="ui-col-4 ui-p-10-b">
                    <a class="ui-btn ui-btn-multi ui-font-condensed ui-round ui-fill-dark-100" href="#">
                        <svg class="ui-icon"><use href="#face-smile"/></svg>
                        <span class="ui-font-18 ui-block ui-m-5-t">Comedy</span>
                        <span class="ui-color-black-25">219</span>
                    </a>
                </div>
                <div class="ui-col-4 ui-p-10-b">
                    <a class="ui-btn ui-btn-multi ui-font-condensed ui-round ui-fill-dark-100" href="#">
                        <svg class="ui-icon"><use href="#video"/></svg>
                        <span class="ui-font-18 ui-block ui-m-5-t">Others</span>
                        <span class="ui-color-black-25">701</span>
                    </a>
                </div>
            </div>
        </form>

    </div>
</div>