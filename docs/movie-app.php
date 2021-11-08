<!-- custom CSS -->
<link rel="stylesheet" href="../css/custom/movie-app.css?v=<?php echo filemtime('../css/custom/movie-app.css'); ?>"/>

<main class="ui-container ui-no-gutter">
    <div class="ui-col-static ui-no-fluid">
        <div class="ui-col-200 set-relative ui-hidden-md">
            <div class="sidebar ui-col-200 ui-full-h set-fixed set-l ui-padding-5 ui-fill-dark-100 ui-hidden-md scroll-v ui-scrollbar-faded">

                <div class="align-l ui-padding-10 ui-icons-no-opacity ui-icons-margin-10-r form-lg ui-add-mobile-menu-l">
                    <h5 class="ui-color-white-50 ui-padding-15 ui-margin-5-b">LIBRARY</h5>
                    <ul class="list-unstyled ui-list-spacer-15 large font-bold block-2nd ui-ease-2nd-btn">
                        <li>
                            <a class="ui-btn ui-btn-ghost circle" href="#">
                                <svg class="ui-icon"><use href="#tv"/></svg>
                                TV Shows
                            </a>
                        </li>
                        <li>
                            <a class="ui-btn circle selected" href="#">
                                <svg class="ui-icon"><use href="#film"/></svg>
                                Films
                            </a>
                        </li>
                        <li>
                            <a class="ui-btn ui-btn-ghost circle" href="#">
                                <svg class="ui-icon"><use href="#trophy-star"/></svg>
                                Sports
                            </a>
                        </li>
                        <li>
                            <a class="ui-btn ui-btn-ghost circle" href="#">
                                <svg class="ui-icon"><use href="#music"/></svg>
                                Concerts
                            </a>
                        </li>
                        <li>
                            <a class="ui-btn ui-btn-ghost circle" href="#">
                                <svg class="ui-icon"><use href="#face-smile"/></svg>
                                Comedy
                            </a>
                        </li>
                        <li>
                            <a class="ui-btn ui-btn-ghost circle" href="#">
                                <svg class="ui-icon"><use href="#video"/></svg>
                                Others
                            </a>
                        </li>
                    </ul>

                    <span class="sp-30"></span>

                    <h5 class="ui-color-white-50 ui-padding-15 ui-margin-5-b">NEWS &amp; EVENTS</h5>
                    <ul class="list-unstyled ui-list-spacer-15 ui-color-white-50 large block-2nd ui-ease-2nd-btn">
                        <li>
                            <a class="ui-btn ui-btn-ghost circle" href="#">
                                <svg class="ui-icon"><use href="#news"/></svg>
                                News
                            </a>
                        </li>
                        <li>
                            <a class="ui-btn ui-btn-ghost circle" href="#">
                                <svg class="ui-icon"><use href="#network"/></svg>
                                Community
                            </a>
                        </li>
                        <li>
                            <a class="ui-btn ui-btn-ghost circle" href="#">
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

                <div class="ui-padding-30 ui-no-padding-b ui-md-no-padding">

                    <header class="ui-row ui-no-ui-row-gap-t ui-sticky-md ui-icons-no-opacity form-lg" data-ui-classes="shadow-lg">
                        <div class="ui-col-6 ui-hidden-md ui-ease-1st-form">
                            <div class="text text-icon-both ui-margin-15-b circle ui-no-border ui-theme-gray ui-fill-light-300 has-clear">
                                <svg class="ui-icon text-icon-l"><use href="#search"/></svg>
                                <button type="button" class="clear-form">
                                    <svg class="ui-icon"><use href="#remove"/></svg>
                                </button>
                                <input type="text" placeholder="Search for movies, TV shows...">
                            </div>
                        </div>
                        <div class="ui-col-6 align-r">
                            <span class="align-c ui-color-black-50 ui-margin-20-r ui-sm-no-margin ui-ease-1st-btn">
                                <button class="ui-btn ui-btn-square ui-btn-ghost ui-margin-10-l circle left ui-show-mobile-menu-l ui-visible-md">
                                    <svg class="ui-icon"><use href="#bars-left"/></svg>
                                </button>
                                <button class="ui-btn ui-btn-square ui-btn-ghost circle ui-ease-btn ui-visible-md" onclick="ui.modal.open({source: '.search', bg: 'false'});" data-ui-tooltip data-ui-only="desktop" title="Search">
                                    <svg class="ui-icon"><use href="#search"/></svg>
                                </button>
                                <button class="ui-btn ui-btn-square ui-btn-ghost circle">
                                    <svg class="ui-icon"><use href="#user"/></svg>
                                </button>
                                <button class="ui-btn ui-btn-square ui-btn-ghost circle" data-ui-notifier>
                                    <svg class="ui-icon"><use href="#bell"/></svg>
                                </button>
                                <button class="ui-btn ui-btn-square ui-btn-ghost circle">
                                    <svg class="ui-icon"><use href="#setting"/></svg>
                                </button>
                                <button class="ui-btn ui-btn-square ui-btn-ghost circle">
                                    <svg class="ui-icon"><use href="#help"/></svg>
                                </button>
                            </span>
                            <span class="inline-block right no-float-sm">
                                <img class="ui-img-photo ui-img-photo-sm circle ui-margin-10-l ui-sm-no-margin right" src="img/profile-image.jpg" alt="">
                                <span class="ui-margin-3-t inline-block ui-hidden-sm">aeminyuce</span>
                                <span class="small ui-color-black-50 block ui-hidden-sm">Premium</span>
                            </span>
                        </div>
                    </header>

                </div>
                <div class="ui-padding-15">
                    <div class="ui-padding-10 ui-md-no-padding-h">
                        <div class="ui-padding-10 ui-md-no-padding-h">

                            <div class="ui-col-static">
                                <div class="ui-col-350">
                                    <div class="round set-relative">
                                        <button class="ui-btn ui-full-w ui-full-h set-absolute opacity-more ui-ease-layout" onclick="ui.modal.open({source: 'https://www.imdb.com/videoembed/vi4235180569', size: '722x300', type: 'iframe'});">
                                            <svg class="ui-icon ui-icon-xxl ui-icon-default ui-color-white set-absolute set-c"><use href="#video"/></svg>
                                        </button>
                                        <img class="img-fluid round shadow-lg" src="img/video-poster.jpg" alt="">
                                    </div>
                                </div>
                                <div class="ui-row">
                                    <div class="ui-col-12 ui-col-lg-8 ui-padding-30-l ui-no-padding-v ui-md-no-padding">
                                        <span class="sp-15 ui-visible-md"></span>
                                        <h2 class="font-bold">Related Video</h2>
                                        <b class="large">Captain Marvel (2019)</b>
                                        <p class="ui-margin-10-v font-readable">After crashing an experimental aircraft, Air Force pilot Carol Danvers is discovered by the Kree and trained as a member of the elite Starforce Military under the command of her mentor Yon-Rogg. Six years later, after escaping to Earth while under attack by the Skrulls.</p>
                                        <div class="ui-photos-holder ui-padding-15-h hover-scale-more-2nd ui-ease-2nd-layout">
                                            <a href="#"><img class="ui-img-photo ui-border-lg circle" src="img/profile-image.jpg" alt=""></a>
                                            <a href="#"><img class="ui-img-photo ui-border-lg circle" src="img/profile-image2.jpg" alt=""></a>
                                            <a href="#"><img class="ui-img-photo ui-border-lg circle" src="img/profile-image3.jpg" alt=""></a>
                                            <a class="ui-btn circle ui-ease-btn" href="#">+38</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="ui-padding-15">
                    <h2 class="font-bold ui-padding-15-h ui-md-no-padding">Now Showing</h2>
                </div>

                <div class="ui-carousel ui-half-sized ui-margin-15-h ui-md-no-margin" data-ui-col-xl="8" data-ui-col-lg="6" data-ui-col="3" data-ui-col-md="4" data-ui-col-sm="4" data-ui-col-xs="2">
                    <div class="ui-carousel-slider block-2nd hover-scale-2nd ui-ease-layout ui-ease-2nd-layout ui-ease-slow ui-ease-in-out">
                        <div class="ui-slide-content ui-padding-15">
                            <a class="ui-ease-default" href="#">
                                <img class="img-fluid round block ui-margin-15-b shadow" src="img/movie_01.jpg" alt="">
                                <b class="large">Captain Marvel</b>
                                <span class="ui-color-black-50 ui-margin-5-b block">2019 &nbsp; Action, Sci-Fi</span>
                                <svg class="ui-icon ui-icon-xs ui-color-yellow"><use href="#star-fill"/></svg>
                                <span class="inline-block ui-margin-2-l ui-margin-10-r">
                                    7,0 <span class="ui-color-black-25">/10</span> &nbsp; 7+
                                </span>
                            </a>
                        </div>
                        <div class="ui-slide-content ui-padding-15">
                            <a class="ui-ease-default" href="#">
                                <img class="img-fluid round block ui-margin-15-b shadow" src="img/movie_02.jpg" alt="">
                                <b class="large">Avengers: Endgame</b>
                                <span class="ui-color-black-50 ui-margin-5-b block">2019 &nbsp; Action, Sci-Fi</span>
                                <svg class="ui-icon ui-icon-xs ui-color-yellow"><use href="#star-fill"/></svg>
                                <span class="inline-block ui-margin-2-l ui-margin-10-r">
                                    8,7 <span class="ui-color-black-25">/10</span> &nbsp; 8+
                                </span>
                            </a>
                        </div>
                        <div class="ui-slide-content ui-padding-15">
                            <a class="ui-ease-default" href="#">
                                <img class="img-fluid round block ui-margin-15-b shadow" src="img/movie_03.jpg" alt="">
                                <b class="large">Captain America</b>
                                <span class="ui-color-black-50 ui-margin-5-b block">2014 &nbsp; Action, Sci-Fi</span>
                                <svg class="ui-icon ui-icon-xs ui-color-yellow"><use href="#star-fill"/></svg>
                                <span class="inline-block ui-margin-2-l ui-margin-10-r">
                                    7,8 <span class="ui-color-black-25">/10</span> &nbsp; 13+
                                </span>
                            </a>
                        </div>
                        <div class="ui-slide-content ui-padding-15">
                            <a class="ui-ease-default" href="#">
                                <img class="img-fluid round block ui-margin-15-b shadow" src="img/movie_04.jpg" alt="">
                                <b class="large">Ant-Man</b>
                                <span class="ui-color-black-50 ui-margin-5-b block">2015 &nbsp; Action, Comedy</span>
                                <svg class="ui-icon ui-icon-xs ui-color-yellow"><use href="#star-fill"/></svg>
                                <span class="inline-block ui-margin-2-l ui-margin-10-r">
                                    7,3 <span class="ui-color-black-25">/10</span> &nbsp; 13+
                                </span>
                            </a>
                        </div>
                        <div class="ui-slide-content ui-padding-15">
                            <a class="ui-ease-default" href="#">
                                <img class="img-fluid round block ui-margin-15-b shadow" src="img/movie_05.jpg" alt="">
                                <b class="large">Venom</b>
                                <span class="ui-color-black-50 ui-margin-5-b block">2018 &nbsp; Action, Thriller</span>
                                <svg class="ui-icon ui-icon-xs ui-color-yellow"><use href="#star-fill"/></svg>
                                <span class="inline-block ui-margin-2-l ui-margin-10-r">
                                    6,7 <span class="ui-color-black-25">/10</span> &nbsp; 15+
                                </span>
                            </a>
                        </div>
                        <div class="ui-slide-content ui-padding-15">
                            <a class="ui-ease-default" href="#">
                                <img class="img-fluid round block ui-margin-15-b shadow" src="img/movie_06.jpg" alt="">
                                <b class="large">Justice League</b>
                                <span class="ui-color-black-50 ui-margin-5-b block">2017 &nbsp; Action, Fantasy</span>
                                <svg class="ui-icon ui-icon-xs ui-color-yellow"><use href="#star-fill"/></svg>
                                <span class="inline-block ui-margin-2-l ui-margin-10-r">
                                    6,4 <span class="ui-color-black-25">/10</span> &nbsp; 13+
                                </span>
                            </a>
                        </div>
                        <div class="ui-slide-content ui-padding-15">
                            <a class="ui-ease-default" href="#">
                                <img class="img-fluid round block ui-margin-15-b shadow" src="img/movie_01.jpg" alt="">
                                <b class="large">Captain Marvel</b>
                                <span class="ui-color-black-50 ui-margin-5-b block">2019 &nbsp; Action, Sci-Fi</span>
                                <svg class="ui-icon ui-icon-xs ui-color-yellow"><use href="#star-fill"/></svg>
                                <span class="inline-block ui-margin-2-l ui-margin-10-r">
                                    7,0 <span class="ui-color-black-25">/10</span> &nbsp; 7+
                                </span>
                            </a>
                        </div>
                        <div class="ui-slide-content ui-padding-15">
                            <a class="ui-ease-default" href="#">
                                <img class="img-fluid round block ui-margin-15-b shadow" src="img/movie_02.jpg" alt="">
                                <b class="large">Avengers: Endgame</b>
                                <span class="ui-color-black-50 ui-margin-5-b block">2019 &nbsp; Action, Sci-Fi</span>
                                <svg class="ui-icon ui-icon-xs ui-color-yellow"><use href="#star-fill"/></svg>
                                <span class="inline-block ui-margin-2-l ui-margin-10-r">
                                    8,7 <span class="ui-color-black-25">/10</span> &nbsp; 8+
                                </span>
                            </a>
                        </div>
                        <div class="ui-slide-content ui-padding-15">
                            <a class="ui-ease-default" href="#">
                                <img class="img-fluid round block ui-margin-15-b shadow" src="img/movie_03.jpg" alt="">
                                <b class="large">Captain America</b>
                                <span class="ui-color-black-50 ui-margin-5-b block">2014 &nbsp; Action, Sci-Fi</span>
                                <svg class="ui-icon ui-icon-xs ui-color-yellow"><use href="#star-fill"/></svg>
                                <span class="inline-block ui-margin-2-l ui-margin-10-r">
                                    7,8 <span class="ui-color-black-25">/10</span> &nbsp; 13+
                                </span>
                            </a>
                        </div>
                        <div class="ui-slide-content ui-padding-15">
                            <a class="ui-ease-default" href="#">
                                <img class="img-fluid round block ui-margin-15-b shadow" src="img/movie_04.jpg" alt="">
                                <b class="large">Ant-Man</b>
                                <span class="ui-color-black-50 ui-margin-5-b block">2015 &nbsp; Action, Comedy</span>
                                <svg class="ui-icon ui-icon-xs ui-color-yellow"><use href="#star-fill"/></svg>
                                <span class="inline-block ui-margin-2-l ui-margin-10-r">
                                    7,3 <span class="ui-color-black-25">/10</span> &nbsp; 13+
                                </span>
                            </a>
                        </div>
                        <div class="ui-slide-content ui-padding-15">
                            <a class="ui-ease-default" href="#">
                                <img class="img-fluid round block ui-margin-15-b shadow" src="img/movie_05.jpg" alt="">
                                <b class="large">Venom</b>
                                <span class="ui-color-black-50 ui-margin-5-b block">2018 &nbsp; Action, Thriller</span>
                                <svg class="ui-icon ui-icon-xs ui-color-yellow"><use href="#star-fill"/></svg>
                                <span class="inline-block ui-margin-2-l ui-margin-10-r">
                                    6,7 <span class="ui-color-black-25">/10</span> &nbsp; 15+
                                </span>
                            </a>
                        </div>
                        <div class="ui-slide-content ui-padding-15">
                            <a class="ui-ease-default" href="#">
                                <img class="img-fluid round block ui-margin-15-b shadow" src="img/movie_06.jpg" alt="">
                                <b class="large">Justice League</b>
                                <span class="ui-color-black-50 ui-margin-5-b block">2017 &nbsp; Action, Fantasy</span>
                                <svg class="ui-icon ui-icon-xs ui-color-yellow"><use href="#star-fill"/></svg>
                                <span class="inline-block ui-margin-2-l ui-margin-10-r">
                                    6,4 <span class="ui-color-black-25">/10</span> &nbsp; 13+
                                </span>
                            </a>
                        </div>
                    </div>
                    <div class="ui-carousel-nav ui-ease-1st-btn">
                        <button class="ui-carousel-prev ui-btn ui-btn-ghost ui-btn-square circle">
                            <svg class="ui-icon ui-margin-3-r"><use href="#angle-left"/></svg>
                        </button>
                        <span class="ui-dots ui-color-black-25"></span>
                        <button class="ui-carousel-next ui-btn ui-btn-ghost ui-btn-square circle">
                            <svg class="ui-icon ui-margin-3-l"><use href="#angle-right"/></svg>
                        </button>
                    </div>
                </div>

                <span class="sp-15"></span>

                <div class="ui-padding-15">
                    <h2 class="font-bold ui-padding-15-h ui-md-no-padding">Categories</h2>
                </div>

                <div class="ui-carousel ui-half-sized ui-margin-15-h ui-md-no-margin" data-ui-col-xl="6" data-ui-col-lg="6" data-ui-col="3" data-ui-col-md="4" data-ui-col-sm="4" data-ui-col-xs="2">
                    <div class="ui-carousel-slider block-2nd hover-scale-2nd ui-ease-layout ui-ease-2nd-layout ui-ease-slow ui-ease-in-out">
                        <div class="ui-slide-content ui-padding-15">
                            <a class="ui-ease-default" href="#">
                                <img class="img-fluid round block ui-margin-15-b shadow" src="img/movie_category_01.jpg" alt="">
                                <b class="large">Action</b>
                            </a>
                        </div>
                        <div class="ui-slide-content ui-padding-15">
                            <a class="ui-ease-default" href="#">
                                <img class="img-fluid round block ui-margin-15-b shadow" src="img/movie_category_02.jpg" alt="">
                                <b class="large">Adventure</b>
                            </a>
                        </div>
                        <div class="ui-slide-content ui-padding-15">
                            <a class="ui-ease-default" href="#">
                                <img class="img-fluid round block ui-margin-15-b shadow" src="img/movie_category_03.jpg" alt="">
                                <b class="large">Comedy</b>
                            </a>
                        </div>
                        <div class="ui-slide-content ui-padding-15">
                            <a class="ui-ease-default" href="#">
                                <img class="img-fluid round block ui-margin-15-b shadow" src="img/movie_category_04.jpg" alt="">
                                <b class="large">Sci-Fi</b>
                            </a>
                        </div>
                        <div class="ui-slide-content ui-padding-15">
                            <a class="ui-ease-default" href="#">
                                <img class="img-fluid round block ui-margin-15-b shadow" src="img/movie_category_05.jpg" alt="">
                                <b class="large">Animation</b>
                            </a>
                        </div>
                        <div class="ui-slide-content ui-padding-15">
                            <a class="ui-ease-default" href="#">
                                <img class="img-fluid round block ui-margin-15-b shadow" src="img/movie_category_06.jpg" alt="">
                                <b class="large">Horror</b>
                            </a>
                        </div>
                        <div class="ui-slide-content ui-padding-15">
                            <a class="ui-ease-default" href="#">
                                <img class="img-fluid round block ui-margin-15-b shadow" src="img/movie_category_01.jpg" alt="">
                                <b class="large">Action</b>
                            </a>
                        </div>
                        <div class="ui-slide-content ui-padding-15">
                            <a class="ui-ease-default" href="#">
                                <img class="img-fluid round block ui-margin-15-b shadow" src="img/movie_category_02.jpg" alt="">
                                <b class="large">Adventure</b>
                            </a>
                        </div>
                        <div class="ui-slide-content ui-padding-15">
                            <a class="ui-ease-default" href="#">
                                <img class="img-fluid round block ui-margin-15-b shadow" src="img/movie_category_03.jpg" alt="">
                                <b class="large">Comedy</b>
                            </a>
                        </div>
                        <div class="ui-slide-content ui-padding-15">
                            <a class="ui-ease-default" href="#">
                                <img class="img-fluid round block ui-margin-15-b shadow" src="img/movie_category_04.jpg" alt="">
                                <b class="large">Sci-Fi</b>
                            </a>
                        </div>
                        <div class="ui-slide-content ui-padding-15">
                            <a class="ui-ease-default" href="#">
                                <img class="img-fluid round block ui-margin-15-b shadow" src="img/movie_category_05.jpg" alt="">
                                <b class="large">Animation</b>
                            </a>
                        </div>
                        <div class="ui-slide-content ui-padding-15">
                            <a class="ui-ease-default" href="#">
                                <img class="img-fluid round block ui-margin-15-b shadow" src="img/movie_category_06.jpg" alt="">
                                <b class="large">Horror</b>
                            </a>
                        </div>
                    </div>
                    <div class="ui-carousel-nav ui-ease-1st-btn">
                        <button class="ui-carousel-prev ui-btn ui-btn-ghost ui-btn-square circle">
                            <svg class="ui-icon ui-margin-3-r"><use href="#angle-left"/></svg>
                        </button>
                        <span class="ui-dots ui-color-black-25"></span>
                        <button class="ui-carousel-next ui-btn ui-btn-ghost ui-btn-square circle">
                            <svg class="ui-icon ui-margin-3-l"><use href="#angle-right"/></svg>
                        </button>
                    </div>
                </div>

                <span class="sp-30"></span>

            </div>
        </div>
    </div>
</main>

<!-- mobile menu -->
<div class="ui-mobile-menu ui-show-l ui-fill-dark-100 ui-ease-layout ui-ease-in-out">
    <div class="ui-mobile-menu-title ui-padding-20-v x-large ui-border-b">
        <button class="ui-btn ui-btn-square ui-btn-lg ui-btn-ghost circle ui-ease-btn ui-close-mobile-menu">
            <svg class="ui-icon no-opacity"><use href="#remove"/></svg>
        </button>
        Categories
    </div>
    <div class="ui-mobile-menu-content ui-no-padding scroll-v"></div>
</div>

<!-- modal search -->
<div class="search ui-modal form-lg">
    <div class="ui-modal-container ui-xs-no-padding">

        <form action="#successful">
            <h2>Search</h2>
            <p class="highlight large ui-color-white-50 xs-align-c font-readable">Search for movies, TV shows...</p>

            <div class="ui-col-static ui-no-fluid">
                <div class="ui-row ui-no-ui-row-gap-h">
                    <div class="ui-col-12 ui-ease-1st-form">
                        <div class="text text-icon has-clear round-l ui-no-border shadow-in-sm ui-theme-gray ui-fill-light-300 ui-ease-form">
                            <button type="button" class="clear-form">
                                <svg class="ui-icon"><use href="#remove"/></svg>
                            </button>
                            <input class="required" type="text" placeholder="Search">
                        </div>
                        <p class="required-msg large">Please, enter a keyword.</p>
                    </div>
                </div>
                <div class="ui-col-100 ui-col-xs-50 ui-padding-10-v">
                    <button class="ui-btn block round-r ui-theme-sub ui-fill-dark-100 ui-ease-btn" type="submit">
                        <svg class="ui-icon"><use href="#search"/></svg>
                    </button>
                </div>
            </div>

            <div class="ui-row ui-no-fluid ui-icons-xxl block-2nd ui-icons-no-opacity ui-icons-margin-5-v hover-t-more-2nd ui-theme-base ui-ease-2nd-btn">
                <div class="ui-col-4 ui-padding-10-b">
                    <a class="ui-btn ui-btn-multi font-condensed round ui-fill-dark-100" href="#">
                        <svg class="ui-icon"><use href="#tv"/></svg>
                        <span class="x-large block ui-margin-5-t">TV Shows</span>
                        <span class="ui-color-black-25">1024</span>
                    </a>
                </div>
                <div class="ui-col-4 ui-padding-10-b">
                    <a class="ui-btn ui-btn-multi font-condensed round ui-fill-dark-100" href="#">
                        <svg class="ui-icon"><use href="#film"/></svg>
                        <span class="x-large block ui-margin-5-t">Films</span>
                        <span class="ui-color-black-25">775</span>
                    </a>
                </div>
                <div class="ui-col-4 ui-padding-10-b">
                    <a class="ui-btn ui-btn-multi font-condensed round ui-fill-dark-100" href="#">
                        <svg class="ui-icon"><use href="#trophy-star"/></svg>
                        <span class="x-large block ui-margin-5-t">Sports</span>
                        <span class="ui-color-black-25">316</span>
                    </a>
                </div>
                <div class="ui-col-4 ui-padding-10-b">
                    <a class="ui-btn ui-btn-multi font-condensed round ui-fill-dark-100" href="#">
                        <svg class="ui-icon"><use href="#music"/></svg>
                        <span class="x-large block ui-margin-5-t">Concerts</span>
                        <span class="ui-color-black-25">589</span>
                    </a>
                </div>
                <div class="ui-col-4 ui-padding-10-b">
                    <a class="ui-btn ui-btn-multi font-condensed round ui-fill-dark-100" href="#">
                        <svg class="ui-icon"><use href="#face-smile"/></svg>
                        <span class="x-large block ui-margin-5-t">Comedy</span>
                        <span class="ui-color-black-25">219</span>
                    </a>
                </div>
                <div class="ui-col-4 ui-padding-10-b">
                    <a class="ui-btn ui-btn-multi font-condensed round ui-fill-dark-100" href="#">
                        <svg class="ui-icon"><use href="#video"/></svg>
                        <span class="x-large block ui-margin-5-t">Others</span>
                        <span class="ui-color-black-25">701</span>
                    </a>
                </div>
            </div>
        </form>

    </div>
</div>