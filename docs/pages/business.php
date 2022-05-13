<?php
    // hide default dark mode button
    $defaultDarkModeBtn = false;

    // cookie: menu
    $menuToggle = '';
    $menuIcon = 'left';
    $menuActiveBtn = ' ui-btn-visible ui-active';

    if (isset($_COOKIE["leftPanelToggle"]))
    {
        if ($_COOKIE["leftPanelToggle"] == 'hide')
        {
            $menuToggle = ' toggle-menu';
            $menuIcon = 'right';
            $menuActiveBtn = '';
        }

    }
?>

<link href="../dist/css/business.css?v=<?php echo filemtime('../dist/css/business.css'); ?>" rel="stylesheet">
<script src="../dist/js/business.js?v=<?php echo filemtime('../dist/js/business.js'); ?>"></script>

<main class="ui-container ui-no-gutter">
    <div class="ui-col-static ui-no-fluid ui-full-h">

        <!-- left panel -->
        <div class="ui-col-panel-l<?php echo $menuToggle; ?>"> <!-- cookie: menu -->
            <div class="panel-l ui-sidebar-add-l ui-ease-width">

                <div class="ui-col-static ui-no-fluid ui-tab-holder ui-ease-tab ui-ease-1st-btn" data-ui-classes="ui-btn-visible">

                    <div class="ui-col-panel-min">

                        <!-- mini left panel -->
                        <div class="panel-l-min">

                            <!-- toggle sidebar -->
                            <button title="Menü Daralt/Genişlet" class="panel-l-toggle ui-btn ui-btn-ghost ui-btn-square ui-m-10-b ui-ease-btn ui-visible-xl">
                                <svg class="ui-icon ui-no-opacity">
                                    <use href="../dist/icons.svg#angle-<?php echo $menuIcon ?>"></use> <!-- cookie: menu -->
                                </svg>
                            </button>

                            <!-- buttons -->
                            <div class="ui-ease-1st-btn">
                                <button title="İş Sayıları" data-ui-tooltip="r" data-ui-only="desktop" class="ui-tab ui-btn ui-btn-ghost ui-btn-square<?php echo $menuActiveBtn; ?>"> <!-- cookie: menu -->
                                    <svg class="ui-icon ui-no-opacity"><use href="../dist/icons.svg#tachometer"></use></svg>
                                </button>

                                <button title="Başvurular" data-ui-tooltip="r" data-ui-only="desktop" class="ui-tab ui-btn ui-btn-ghost ui-btn-square">
                                    <svg class="ui-icon ui-no-opacity"><use href="../dist/icons.svg#briefcase"></use></svg>
                                </button>

                                <button title="Muhasebe" data-ui-tooltip="r" data-ui-only="desktop" class="ui-tab ui-btn ui-btn-ghost ui-btn-square">
                                    <svg class="ui-icon ui-no-opacity"><use href="../dist/icons.svg#wallet"></use></svg>
                                </button>
                                <button title="Listeler" data-ui-tooltip="r" data-ui-only="desktop" class="ui-tab ui-btn ui-btn-ghost ui-btn-square">
                                    <svg class="ui-icon ui-no-opacity"><use href="../dist/icons.svg#list-square"></use></svg>
                                </button>
                                <button title="Araçlar" data-ui-tooltip="r" data-ui-only="desktop" class="ui-tab ui-btn ui-btn-ghost ui-btn-square">
                                    <svg class="ui-icon ui-no-opacity"><use href="../dist/icons.svg#wrench"></use></svg>
                                </button>
                                <button title="İnsan Kaynakları" data-ui-tooltip="r" data-ui-only="desktop" class="ui-tab ui-btn ui-btn-ghost ui-btn-square">
                                    <svg class="ui-icon ui-no-opacity"><use href="../dist/icons.svg#user-search"></use></svg>
                                </button>

                                <a title="Teklif &amp; Sözleşme" href="#" data-ui-tooltip="r" data-ui-only="desktop" class="ui-btn ui-btn-ghost ui-btn-square"> <!-- link -->
                                    <svg class="ui-icon ui-no-opacity"><use href="../dist/icons.svg#award"></use></svg>
                                </a>
                                <a title="Müşteri Yönetimi" href="#" data-ui-tooltip="r" data-ui-only="desktop" class="ui-btn ui-btn-ghost ui-btn-square"> <!-- link -->
                                    <svg class="ui-icon ui-no-opacity"><use href="../dist/icons.svg#user-circle"></use></svg>
                                </a>
                                <a title="Evrak" href="#" data-ui-tooltip="r" data-ui-only="desktop" class="ui-btn ui-btn-ghost ui-btn-square"> <!-- link -->
                                    <svg class="ui-icon ui-no-opacity"><use href="../dist/icons.svg#doc"></use></svg>
                                </a>

                                <button title="Yönetim" data-ui-tooltip="r" data-ui-only="desktop" class="ui-tab ui-btn ui-btn-ghost ui-btn-square">
                                    <svg class="ui-icon ui-no-opacity"><use href="../dist/icons.svg#shield"></use></svg>
                                </button>
                            </div>

                        </div>

                    </div>

                    <div class="panel-l-contents-holder ui-row">
                        <div class="panel-l-contents ui-col-12">

                            <!-- logo -->
                            <a title="Logo" class="panel-l-logo" href="#">
                                <img src="img/logo-udashboard.png" alt="">
                            </a>

                            <!-- menus -->
                            <div class="ui-tab-content ui-open ui-open-ease">

                                <form action="#">
                                    <div class="ui-input ui-form-icon ui-round ui-m-10 ui-border-dual ui-ease-form">
                                        <button type="submit">
                                            <svg class="ui-icon"><use href="../dist/icons.svg#search"/></svg>
                                        </button>
                                        <input type="text" placeholder="Search">
                                    </div>
                                </form>

                                <div class="ui-p-10-h">My Stats</div>
                                <div class="ui-row ui-row-gap-sm ui-no-fluid ui-align-c ui-m-10 ui-theme-base ui-ease-2nd-btn">
                                    <div class="ui-col-4">
                                        <button class="ui-btn ui-btn-multi ui-fill-dark-100">
                                            <span>32</span>
                                            <i>Bekleyen</i>
                                        </button>
                                    </div>
                                    <div class="ui-col-4">
                                        <button class="ui-btn ui-btn-multi ui-fill-dark-100">
                                            <span>
                                                87
                                                <i>16</i>
                                            </span>
                                            <i>Uzmanda</i>
                                        </button>
                                    </div>
                                    <div class="ui-col-4">
                                        <button class="ui-btn ui-btn-multi ui-fill-dark-100">
                                            <span>
                                                10
                                                <i>7</i>
                                            </span>
                                            <i>Denetimde</i>
                                        </button>
                                    </div>
                                    <div class="ui-col-4">
                                        <button class="ui-btn ui-btn-multi ui-fill-dark-100">
                                            <span>
                                                4
                                                <i>16</i>
                                            </span>
                                            <i>2. Denetimde</i>
                                        </button>
                                    </div>
                                    <div class="ui-col-4">
                                        <button class="ui-btn ui-btn-multi ui-fill-dark-100">
                                            <span>0</span>
                                            <i>Kotrol Edildi</i>
                                        </button>
                                    </div>
                                    <div class="ui-col-4">
                                        <button class="ui-btn ui-btn-multi ui-fill-dark-100">
                                            <span>0</span>
                                            <i>Bugün</i>
                                        </button>
                                    </div>
                                    <div class="ui-col-4">
                                        <button class="ui-btn ui-btn-multi ui-fill-dark-100">
                                            <span>0</span>
                                            <i>Donmuş</i>
                                        </button>
                                    </div>
                                    <div class="ui-col-4">
                                        <button class="ui-btn ui-btn-multi ui-fill-dark-100">
                                            <span>85</span>
                                            <i>Gecikmiş</i>
                                        </button>
                                    </div>
                                    <div class="ui-col-4">
                                        <button class="ui-btn ui-btn-multi ui-fill-dark-100">
                                            <svg class="ui-icon"><use href="../dist/icons.svg#hourglass-start"></use></svg>
                                            <i>Gönderilecek</i>
                                        </button>
                                    </div>
                                    <div class="ui-col-4">
                                        <button class="ui-btn ui-btn-multi ui-fill-dark-100">
                                            <svg class="ui-icon"><use href="../dist/icons.svg#flag"></use></svg>
                                            <i>Raporlaşmış</i>
                                        </button>
                                    </div>
                                </div>

                                <div class="ui-p-10-h">Company Stats</div>
                                <div class="ui-row ui-row-gap-sm ui-no-fluid ui-align-c ui-m-10 ui-theme-sub ui-ease-2nd-btn">
                                    <div class="ui-col-4">
                                        <button class="ui-btn ui-btn-multi ui-fill-dark-100">
                                            <span>416</span>
                                            <i>Bekleyen</i>
                                        </button>
                                    </div>
                                    <div class="ui-col-4">
                                        <button class="ui-btn ui-btn-multi ui-fill-dark-100">
                                            <span>
                                                665
                                                <i>17</i>
                                            </span>
                                            <i>Uzmanda</i>
                                        </button>
                                    </div>
                                    <div class="ui-col-4">
                                        <button class="ui-btn ui-btn-multi ui-fill-dark-100">
                                            <span>
                                                168
                                                <i>27</i>
                                            </span>
                                            <i>Denetimde</i>
                                        </button>
                                    </div>
                                    <div class="ui-col-4">
                                        <button class="ui-btn ui-btn-multi ui-fill-dark-100">
                                            <span>
                                                19
                                                <i>4</i>
                                            </span>
                                            <i>2. Denetimde</i>
                                        </button>
                                    </div>
                                    <div class="ui-col-4">
                                        <button class="ui-btn ui-btn-multi ui-fill-dark-100">
                                            <span>1</span>
                                            <i>Kotrol Edildi</i>
                                        </button>
                                    </div>
                                    <div class="ui-col-4">
                                        <button class="ui-btn ui-btn-multi ui-fill-dark-100">
                                            <span>0</span>
                                            <i>Bugün</i>
                                        </button>
                                    </div>
                                    <div class="ui-col-4">
                                        <button class="ui-btn ui-btn-multi ui-fill-dark-100">
                                            <span>74</span>
                                            <i>Donmuş</i>
                                        </button>
                                    </div>
                                    <div class="ui-col-4">
                                        <button class="ui-btn ui-btn-multi ui-fill-dark-100">
                                            <span>797</span>
                                            <i>Gecikmiş</i>
                                        </button>
                                    </div>
                                    <div class="ui-col-4">
                                        <button class="ui-btn ui-btn-multi ui-fill-dark-100">
                                            <svg class="ui-icon"><use href="../dist/icons.svg#hourglass-start"></use></svg>
                                            <i>Gönderilecek</i>
                                        </button>
                                    </div>
                                    <div class="ui-col-4">
                                        <button class="ui-btn ui-btn-multi ui-fill-dark-100">
                                            <svg class="ui-icon"><use href="../dist/icons.svg#flag"></use></svg>
                                            <i>Raporlaşmış</i>
                                        </button>
                                    </div>
                                </div>

                            </div>
                            <div class="ui-tab-content">

                                <b class="business-title">Başvurular</b>
                                <div class="ui-btn-list ui-ease-1st-btn"> <!-- link buttons -->
                                    <a href="#" class="ui-btn ui-btn-ghost">Yeni</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Bul</a>
                                </div>

                                <div class="ui-tab-holder ui-tab-accordion ui-ease-tab" data-ui-classes="ui-btn-visible">
                                    <button class="ui-tab ui-tab-toggle ui-btn ui-btn-ghost ui-ease-btn">
                                        <svg class="ui-toggle-icon ui-icon"><use href="../dist/icons.svg#angle-down"></use></svg>
                                        <span>Toplu İşlemler</span>
                                    </button>
                                    <div class="ui-tab-content ui-btn-list ui-ease-1st-btn">
                                        <a href="#" class="ui-btn ui-btn-ghost">Rapor/Takbis</a>
                                        <a href="#" class="ui-btn ui-btn-ghost">Kargo/Arşiv</a>
                                    </div>
                                </div>

                                <div class="ui-btn-list ui-ease-1st-btn"> <!-- link buttons -->
                                    <a href="#" class="ui-btn ui-btn-ghost">Notlar</a>
                                </div>

                            </div>
                            <div class="ui-tab-content">

                                <b class="business-title">Muhasebe</b>
                                <div class="ui-btn-list ui-ease-1st-btn"> <!-- link buttons -->
                                    <a href="#" class="ui-btn ui-btn-ghost">Banka Mutabakat</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Çözüm Ortağı Mutabakat</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Tahsilat Listeleme</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Personel Masraf</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Kadrolu Uzman Prim Listesi</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Denetmen Prim Listesi</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Listeler/Raporlar</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Mutabakat Başvuru Log</a>
                                </div>

                            </div>
                            <div class="ui-tab-content">

                                <b class="business-title">Listeler</b>
                                <div class="ui-btn-list ui-ease-1st-btn"> <!-- link buttons -->
                                    <a href="#" class="ui-btn ui-btn-ghost">Genel Liste</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">İş Takip</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Uzman Durumları</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Uzman İş Durumları</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Uzman İş Takvimi</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Uzman İş Sayıları</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Sekreterya İş Sayıları</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Denetmen İş Takvimi</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Matris</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">TGFST & KFE</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">İş Adım Süreleri</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">İş Adım Süreleri Ortalamaları</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Başvuru Tamamlandığında Kalan Süre</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">SPL Lisans Süresi Dolan Kullanıcılar</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Uzman Aylık İş Sayıları ve Ortalama Süreleri</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Uzman Performans</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Uzman Dönemsel Performans</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Başvuru Performans</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Günlük Rapor</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Aylık Müşteri Değerlendirme Raporu</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Denetmen Ciroları</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Denetmen Durumları</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Denetmen Puanlama</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">2. Denetmen Puanlama</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Değerlendirme Tablosu</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Birim Fiyat Analizi</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">G. D. Asgari Ücret Tarifesi Kıyaslama</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Harita Yoğunluk</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Revizyon Raporları</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Genel (Sorgular)</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Müşteri Rapor Sayı ve Hasıla</a>
                                </div>

                            </div>
                            <div class="ui-tab-content">

                                <b class="business-title">Araçlar</b>
                                <div class="ui-btn-list ui-ease-1st-btn"> <!-- link buttons -->
                                    <a href="#" class="ui-btn ui-btn-ghost">Proje Arşivi</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Rapor Arşivi</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Gayrimenkul Emsal</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Makine Emsal</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Sorunlu Taşınmazlar</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Harita</a>
                                </div>

                            </div>
                            <div class="ui-tab-content">

                                <b class="business-title">İnsan Kaynakları</b>
                                <div class="ui-btn-list ui-ease-1st-btn"> <!-- link buttons -->
                                    <a href="#" class="ui-btn ui-btn-ghost">Kullanıcılar</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Çözüm Ortakları</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Uzman Yardımcıları</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Kullanıcı Bildirimleri</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Kullanıcı İzinleri</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Kullanıcı Listeleri</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Bordro Yönetimi</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Performans Yönetimi</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Kullanıcı Belge Tipleri</a>
                                </div>

                            </div>
                            <div class="ui-tab-content">

                                <b class="business-title">Yönetim</b>
                                <div class="ui-btn-list ui-ease-1st-btn"> <!-- link buttons -->
                                    <a href="#" class="ui-btn ui-btn-ghost">Dashboard İzleme İzinleri</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Kullanıcı Yetkileri</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Kullanıcı Log</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Sistem Yedekleri</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Bölge & Şube</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">İl/İlçe/Mahalle-Köy</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Duyuru & Haber</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Sıkça Sorulan Sorular</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Seçme Kutuları</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Not Hazır Metinler</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Belge Arşivi</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Kontrol Listesi</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Etiket</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Sistem Logları</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Disk Durumları</a>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>

        <!-- center -->
        <div class="ui-row ui-no-row-gap">
            <div class="ui-col-12">

                <!-- header -->
                <header class="ui-header-sticky ui-ease-layout" data-ui-classes="header-highlight">
                    <div class="ui-row ui-no-row-gap-v ui-no-fluid">
                        <div class="ui-col-12 ui-align-c">

                            <!-- left buttons -->
                            <div class="ui-float-l ui-ease-1st-btn">

                                <!-- toggle sidebar -->
                                <button title="Menü" class="ui-sidebar-show-l ui-btn ui-btn-ghost ui-btn-square ui-circle ui-visible-md">
                                    <svg class="ui-icon ui-no-opacity"><use href="../dist/icons.svg#bars-left"></use></svg>
                                </button>

                                <!-- göstergeler -->
                                <a title="Göstergeler" class="ui-btn ui-btn-ghost ui-btn-square ui-circle" href="#">
                                    <svg class="ui-icon ui-no-opacity"><use href="../dist/icons.svg#grid-masonry"></use></svg>
                                </a>

                                <!-- harita -->
                                <a title="Harita" class="ui-btn ui-btn-ghost ui-btn-square ui-circle" href="#">
                                    <svg class="ui-icon ui-no-opacity"><use href="../dist/icons.svg#marker"></use></svg>
                                </a>

                            </div>

                            <!-- header time -->
                            <div class="header-time ui-hidden-sm"></div>

                            <!-- profile -->
                            <div class="profile-menu ui-dropdown ui-menu-l ui-ease-dropdown">
                                <button title="Profilim" class="ui-btn ui-btn-multi ui-no-p ui-circle">
                                    <svg class="ui-icon ui-icon-sm ui-no-opacity"><use href="../dist/icons.svg#grid-column"></use></svg>
                                    <img class="ui-avatar ui-avatar-xs ui-border-dual ui-circle border-sd" src="img/profile-image2.jpg" alt="">
                                </button>
                                <ul class="ui-dropdown-menu ui-dropdown-has-icon ui-round ui-shadow-lg">
                                    <li class="ui-border-b ui-border-lg">
                                        <a href="#">
                                            <span class="ui-color-black-50">Supervisor User</span><br>
                                            <span class="info bg-sd">Denetmen</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <svg class="ui-menu-icon ui-icon"><use href="../dist/icons.svg#archive"></use></svg>
                                            Dokümanlarım
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <svg class="ui-menu-icon ui-icon"><use href="../dist/icons.svg#key"></use></svg>
                                            Şifre Değiştir
                                        </a>
                                    </li>
                                    <li class="ui-sep">
                                        <a href="#">
                                            <svg class="ui-menu-icon ui-icon"><use href="../dist/icons.svg#desktop"></use></svg>
                                            Ekranı Kilitle
                                        </a>
                                    </li>
                                    <li class="ui-sep">
                                        <a href="#">
                                            <svg class="ui-menu-icon ui-icon"><use href="../dist/icons.svg#sign-out"></use></svg>
                                            Oturumu Kapat
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <!-- right buttons -->
                            <div class="ui-float-r ui-ease-1st-btn">

                            </div>

                        </div>
                    </div>
                </header>

                <!-- pages -->
                <div class="page-middle ui-fixed ui-fixed-xl">
                    <div class="ui-row">

                        <div class="ui-col-static">

                            <div class="ui-row">
                                <div class="ui-col-12 ui-no-p-v">

                                    <!-- contents -->
                                    <div class="ui-row">
                                        <div class="ui-col-12 ui-no-p">
                                            <div class="ui-carousel" data-ui-col-xl="3" data-ui-col-lg="2" data-ui-col="2" data-ui-col-md="2" data-ui-col-sm="1" data-ui-col-xs="1">
                                                <div class="ui-carousel-slider ui-icons-m-5-r ui-ease-layout ui-ease-slow ui-ease-in-out">

                                                    <div class="ui-carousel-content ui-p-10 ui-theme-base">
                                                        <div class="ui-card ui-full-h ui-p-15 ui-round ui-shadow-lg">
                                                            <div class="ui-col-static ui-no-fluid">
                                                                <div class="ui-row ui-no-row-gap-h ui-row-gap-md-v">
                                                                    <div class="ui-col-12">
                                                                        <div class="ui-font-18">Pending</div>
                                                                        <span class="ui-color-black-25 ui-font-16">Total: 45%</span>
                                                                    </div>
                                                                </div>
                                                                <div class="ui-col-100 ui-align-r">
                                                                    <span class="ui-font-38 ui-text">157</span>
                                                                </div>
                                                            </div>
                                                            <div class="ui-progress-bar ui-m-15-t ui-round">
                                                                <span class="ui-fill-dark-100 ui-stripe-light" style="width: 45%;"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="ui-carousel-content ui-p-10 ui-theme-base">
                                                        <div class="ui-card ui-full-h ui-p-15 ui-round ui-shadow-lg">
                                                            <div class="ui-col-static ui-no-fluid">
                                                                <div class="ui-row ui-no-row-gap-h ui-row-gap-md-v">
                                                                    <div class="ui-col-12">
                                                                        <div class="ui-font-18">Paused</div>
                                                                        <span class="ui-color-black-25 ui-font-16">Total: 35%</span>
                                                                    </div>
                                                                </div>
                                                                <div class="ui-col-100 ui-align-r">
                                                                    <span class="ui-font-38 ui-text">23</span>
                                                                </div>
                                                            </div>
                                                            <div class="ui-progress-bar ui-m-15-t ui-round">
                                                                <span class="ui-fill-dark-100 ui-stripe-light" style="width: 35%;"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="ui-carousel-content ui-p-10 ui-theme-sub">
                                                        <div class="ui-card ui-full-h ui-p-15 ui-round ui-shadow-lg">
                                                            <div class="ui-col-static ui-no-fluid">
                                                                <div class="ui-row ui-no-row-gap-h ui-row-gap-md-v">
                                                                    <div class="ui-col-12">
                                                                        <div class="ui-font-18">Completed</div>
                                                                        <span class="ui-color-black-25 ui-font-16">Total: 80%</span>
                                                                    </div>
                                                                </div>
                                                                <div class="ui-col-100 ui-align-r">
                                                                    <span class="ui-font-38 ui-text">256</span>
                                                                </div>
                                                            </div>
                                                            <div class="ui-progress-bar ui-m-15-t ui-round">
                                                                <span class="ui-fill-dark-100 ui-stripe-light" style="width: 80%;"></span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div class="ui-carousel-nav ui-no-m-t ui-m-10-b ui-ease-1st-btn">
                                                    <button class="ui-carousel-prev ui-btn ui-btn-ghost ui-btn-square ui-circle">
                                                        <svg class="ui-icon ui-m-3-r"><use href="../dist/icons.svg#angle-left"/></svg>
                                                    </button>
                                                    <span class="ui-carousel-dots ui-color-black-25"></span>
                                                    <button class="ui-carousel-next ui-btn ui-btn-ghost ui-btn-square ui-circle">
                                                        <svg class="ui-icon ui-m-3-l"><use href="../dist/icons.svg#angle-right"/></svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="ui-col-8">
                                            <div class="ui-card ui-full-h ui-round ui-shadow-lg">
                                                <div class="ui-card-side ui-p-15 ui-border-b">
                                                    <h4 class="ui-h4">İş Yoğunluk Grafiği</h4>
                                                </div>
                                                <div class="ui-card-side ui-p-15">
                                                    <div class="ui-line-chart-holder ui-ease-line-chart" data-ui-size="10,30" data-ui-step="6"
                                                        data-ui-x="01.12.2019,02.12.2019,03.12.2019,04.12.2019,05.12.2019,06.12.2019,07.12.2019,08.12.2019,09.12.2019,10.12.2019,11.12.2019,12.12.2019,13.12.2019,14.12.2019,15.12.2019,16.12.2019,17.12.2019,18.12.2019">
                                                        <ul class="ui-line-chart" data-ui-type="filled">
                                                            <li data-ui-y="64"></li>
                                                            <li data-ui-y="56"></li>
                                                            <li data-ui-y="112"></li>
                                                            <li data-ui-y="140"></li>
                                                            <li data-ui-y="28"></li>
                                                            <li data-ui-y="0"></li>
                                                            <li data-ui-y="17"></li>
                                                            <li data-ui-y="11"></li>
                                                            <li data-ui-y="47"></li>
                                                            <li data-ui-y="106"></li>
                                                            <li data-ui-y="99"></li>
                                                            <li data-ui-y="46"></li>
                                                            <li data-ui-y="23"></li>
                                                            <li data-ui-y="59"></li>
                                                            <li data-ui-y="112"></li>
                                                            <li data-ui-y="60"></li>
                                                            <li data-ui-y="72"></li>
                                                            <li data-ui-y="10"></li>
                                                        </ul>
                                                        <ul class="ui-line-chart" data-ui-type="filled dotted">
                                                            <li data-ui-y="53"></li>
                                                            <li data-ui-y="22"></li>
                                                            <li data-ui-y="52"></li>
                                                            <li data-ui-y="93"></li>
                                                            <li data-ui-y="86"></li>
                                                            <li data-ui-y="21"></li>
                                                            <li data-ui-y="56"></li>
                                                            <li data-ui-y="48"></li>
                                                            <li data-ui-y="86"></li>
                                                            <li data-ui-y="88"></li>
                                                            <li data-ui-y="52"></li>
                                                            <li data-ui-y="77"></li>
                                                            <li data-ui-y="66"></li>
                                                            <li data-ui-y="26"></li>
                                                            <li data-ui-y="62"></li>
                                                            <li data-ui-y="43"></li>
                                                            <li data-ui-y="55"></li>
                                                            <li data-ui-y="26"></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="ui-col-4">
                                            <div class="ui-card ui-round ui-full-h ui-shadow-lg">
                                                <div class="ui-calendar ui-ease-calendar ui-round" data-ui-src="json/calendar.json" data-ui-date="2019,6"></div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <!-- masthead -->
                            <div class="ui-col-business-masthead ui-p-10 ui-visible-lg">
                                <div class="ui-card ui-round ui-shadow-lg">

                                    <div class="business-masthead ui-sidebar-add-r">

                                        <div
                                            class="business-masthead-cover"
                                            style="background-image: url(img/business/profile-cover.png)">
                                        </div>
                                        <img class="ui-avatar ui-avatar-lg" src="img/profile-image2.jpg" alt="">

                                        <div class="ui-align-c">
                                            Supervisor User
                                            <div class="ui-color-black-50 ui-font-11 ui-m-15-b">
                                                su@businessdomain.com
                                            </div>

                                            <div class="ui-m-20-b">
                                                <span class="info ui-theme-green ui-fill-dark-100">Licence</span>
                                                <span class="info">Signature</span>
                                            </div>
                                        </div>

                                        <b class="business-title">
                                            Recent Reports
                                            <span class="info">6</span>
                                        </b>
                                        <!--no content -->
                                        <span class="business-no-content-sm">
                                            <svg class="ui-icon"><use href="../dist/icons.svg#briefcase"></use></svg>
                                            Son eklenen iş kaydı yok
                                        </span>

                                        <div class="ui-listgroup">
                                            <ul class="ui-listgroup-has-avatar-xs ui-listgroup-has-icon-xs ui-scroll-v ui-ease-listgroup">
                                                <li>
                                                    <a href="#">
                                                        <svg class="ui-listgroup-icon ui-icon"><use href="../dist/icons.svg#angle-right"></use></svg>
                                                        <span class="ui-avatar-xs">
                                                            <span>25 saat</span>
                                                        </span>
                                                        <b>DOC-312557</b>
                                                        Specialist User
                                                        <em>TAKBİS Alınacak, 1 Tapu | 3/3</em>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <svg class="ui-listgroup-icon ui-icon"><use href="../dist/icons.svg#angle-right"></use></svg>
                                                        <span class="ui-avatar-xs">
                                                            <span>11 saat</span>
                                                        </span>
                                                        <b>DOC-312557</b>
                                                        Specialist User
                                                        <em>TAKBİS Alınacak, 1 Tapu | 54234/22 AVM</em>
                                                    </a>
                                                <li>
                                                    <a href="#">
                                                        <svg class="ui-listgroup-icon ui-icon"><use href="../dist/icons.svg#angle-right"></use></svg>
                                                        <span class="ui-avatar-xs">
                                                            <span>25 saat</span>
                                                        </span>
                                                        <b>DOC-312557</b>
                                                        Specialist User
                                                        <em>TAKBİS Alınacak, 1 Tapu | 3/3</em>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <svg class="ui-listgroup-icon ui-icon"><use href="../dist/icons.svg#angle-right"></use></svg>
                                                        <span class="ui-avatar-xs">
                                                            <span>11 saat</span>
                                                        </span>
                                                        <b>DOC-312557</b>
                                                        Specialist User
                                                        <em>TAKBİS Alınacak, 1 Tapu | 54234/22 AVM</em>
                                                    </a>
                                                <li>
                                                    <a href="#">
                                                        <svg class="ui-listgroup-icon ui-icon"><use href="../dist/icons.svg#angle-right"></use></svg>
                                                        <span class="ui-avatar-xs">
                                                            <span>25 saat</span>
                                                        </span>
                                                        <b>DOC-312557</b>
                                                        Specialist User
                                                        <em>TAKBİS Alınacak, 1 Tapu | 3/3</em>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <svg class="ui-listgroup-icon ui-icon"><use href="../dist/icons.svg#angle-right"></use></svg>
                                                        <span class="ui-avatar-xs">
                                                            <span>11 saat</span>
                                                        </span>
                                                        <b>DOC-312557</b>
                                                        Specialist User
                                                        <em>TAKBİS Alınacak, 1 Tapu | 54234/22 AVM</em>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                        <b class="business-title">Online Users</b>
                                        <div class="ui-align-c ui-p-10">
                                            <div class="ui-avatar-holder">
                                                <img class="ui-avatar-sm ui-border-dual ui-circle" src="img/profile-image.jpg" alt="">
                                                <img class="ui-avatar-sm ui-border-dual ui-circle" src="img/profile-image2.jpg" alt="">
                                                <img class="ui-avatar-sm ui-border-dual ui-circle" src="img/profile-image3.jpg" alt="">
                                                <a class="ui-btn ui-btn-square ui-circle ui-ease-btn" href="#">+3</a>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>

                            <!-- toggle masthead -->
                            <button title="Toggle Masthead" class="ui-sidebar-show-r ui-btn ui-btn-lg ui-btn-square ui-circle ui-theme-base ui-fill-dark-100 ui-ease-btn ui-hidden-lg">
                                <svg class="ui-icon"><use href="../dist/icons.svg#bars-right"></use></svg>
                            </button>

                        </div>

                    </div>
                </div>

            </div>
        </div>

        <!-- right panel -->
        <div class="ui-col-panel-r">
            <div class="panel-r ui-p-5">

                <!-- koyu mod -->
                <button title="Koyu Mod Aç/Kapat" data-ui-only="desktop" class="ui-darkmode-toggle ui-btn ui-btn-ghost ui-btn-square ui-icons-no-opacity ui-m-10-b ui-ease-btn">
                    <svg class="ui-icon ui-visible-dark">
                        <defs>
                            <linearGradient id="dark-bg" x1="0%" y1="0%" x2="100%" y2="0%" gradientTransform="rotate(120)">
                                <stop offset="0%" style="stop-color: #4f81ff;" />
                                <stop offset="100%" style="stop-color: #b56dff;" />
                            </linearGradient>
                        </defs>
                        <use href="../dist/icons.svg#moon" fill="url(#dark-bg)"/>
                    </svg>
                    <svg class="ui-icon ui-visible-light">
                        <defs>
                            <linearGradient id="light-bg" x1="0%" y1="0%" x2="100%" y2="0%" gradientTransform="rotate(120)">
                                <stop offset="0%" style="stop-color: #eea800;" />
                                <stop offset="100%" style="stop-color: #ff6c00;" />
                            </linearGradient>
                        </defs>
                        <use href="../dist/icons.svg#sun" fill="url(#light-bg)"/>
                    </svg>
                </button>

                <!-- menus -->
                <div class="ui-tab-holder ui-ease-tab ui-ease-1st-btn" data-ui-classes="ui-btn-visible">

                    <button title="Bildirimler" data-ui-tooltip="l" data-ui-only="desktop" class="ui-tab ui-tab-toggle ui-btn ui-btn-ghost ui-btn-square">
                        <span class="ui-notifier">
                            <svg class="ui-icon ui-no-opacity"><use href="../dist/icons.svg#bell-on"></use></svg>
                        </span>
                    </button>
                    <div class="ui-tab-content">
                        <h4>
                            <span class="info bg-featured">2 Yeni</span>
                            Bildirimler
                        </h4>

                        <!-- list loader -->
                        <div class="business-list-loader ui-animate-progress"></div>

                        <div class="ui-scroll-v">

                            <!--no content -->
                            <div class="business-no-content">
                                <svg class="ui-icon"><use href="../dist/icons.svg#bell-on"></use></svg>
                                Yeni bildirim yok
                            </div>

                            <div class="ui-listgroup">
                                <ul class="ui-listgroup-has-avatar-xs ui-ease-listgroup">
                                    <li class="new">
                                        <a href="#">
                                            <span class="ui-avatar-xs bg-ss">
                                                <span>SS</span>
                                            </span>
                                            <b>DOC-312557</b>
                                            <em>14.03.2022 09:50</em>
                                            <p>Başvuru oluşturuldu.</p>
                                        </a>
                                    </li>
                                    <li class="new">
                                        <a href="#">
                                            <span class="ui-avatar-xs bg-su">
                                                <span>SU</span>
                                            </span>
                                            <b>DOC-312557</b>
                                            <em>14.03.2022 09:50</em>
                                            <p>Uzmana gönderildi.</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span class="ui-avatar-xs bg-sd">
                                                <span>SD</span>
                                            </span>
                                            <b>DOC-312557</b>
                                            <em>14.03.2022 09:50</em>
                                            <p>Denetmene gönderildi.</p>
                                            <span class="info">Geçen süre: 4 sa 59 dk</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span class="ui-avatar-xs bg-bd">
                                                <span>BD</span>
                                            </span>
                                            <b>DOC-312557</b>
                                            <em>14.03.2022 09:50</em>
                                            <p>Birim değiştirildi.</p>
                                            <span class="info">Geçen süre: 4 sa 59 dk</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span class="ui-avatar-xs bg-bd">
                                                <span>BG</span>
                                            </span>
                                            <b>DOC-312557</b>
                                            <em>14.03.2022 09:50</em>
                                            <p>Rapor Genel Müd. gönderildi.</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span class="ui-avatar-xs bg-ss">
                                                <span>SS</span>
                                            </span>
                                            <b>DOC-312557</b>
                                            <em>14.03.2022 09:50</em>
                                            <p>Başvuru oluşturuldu.</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span class="ui-avatar-xs bg-su">
                                                <span>SU</span>
                                            </span>
                                            <b>DOC-312557</b>
                                            <em>14.03.2022 09:50</em>
                                            <p>Uzmana gönderildi.</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span class="ui-avatar-xs bg-sd">
                                                <span>SD</span>
                                            </span>
                                            <b>DOC-312557</b>
                                            <em>14.03.2022 09:50</em>
                                            <p>Denetmene gönderildi.</p>
                                            <span class="info">Geçen süre: 4 sa 59 dk</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span class="ui-avatar-xs bg-bd">
                                                <span>BD</span>
                                            </span>
                                            <b>DOC-312557</b>
                                            <em>14.03.2022 09:50</em>
                                            <p>Birim değiştirildi.</p>
                                            <span class="info">Geçen süre: 4 sa 59 dk</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span class="ui-avatar-xs bg-bd">
                                                <span>BG</span>
                                            </span>
                                            <b>DOC-312557</b>
                                            <em>14.03.2022 09:50</em>
                                            <p>Rapor Genel Müd. gönderildi.</p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <button title="Notlar" data-ui-tooltip="l" data-ui-only="desktop" class="ui-tab ui-tab-toggle ui-btn ui-btn-ghost ui-btn-square">
                        <span class="ui-notifier">
                            <svg class="ui-icon ui-no-opacity"><use href="../dist/icons.svg#pencil-write"></use></svg>
                        </span>
                    </button>
                    <div class="ui-tab-content">
                        <h4>
                            <span class="info bg-featured">2 Yeni</span>
                            <span class="mark ui-ease-bg" onclick="ui.alerts.message({ msg: 'Tüm notlar okundu olarak işaretlendi!' });">Tümünü Okundu İşaretle</span>
                            Notlar
                        </h4>

                        <!-- list loader -->
                        <div class="business-list-loader ui-animate-progress"></div>

                        <div class="ui-scroll-v">

                            <!--no content -->
                            <div class="business-no-content">
                                <svg class="ui-icon"><use href="../dist/icons.svg#pencil-write"></use></svg>
                                Yeni not yok
                            </div>

                            <div class="ui-listgroup">
                                <ul class="ui-listgroup-has-avatar-xs ui-ease-listgroup">
                                    <li class="new">
                                        <a href="#">
                                            <img class="ui-avatar-xs border-su" src="img/profile-image2.jpg" alt="">
                                            <b>Specialist User</b>
                                            DOC-312557
                                            <em>3 sa 56 dk önce</em>
                                        </a>
                                        <p>UZMAN İŞİ ALDI<br>Specialist User İşi Aldı</p>
                                        <span class="mark ui-ease-bg" onclick="ui.alerts.message({ msg: 'Not okundu olarak işaretlendi!' });">Okundu İşaretle</span>
                                    </li>
                                    <li class="new">
                                        <a href="#">
                                            <span class="ui-avatar-xs bg-su">
                                                <span>KU</span>
                                            </span>
                                            <b>Specialist User</b>
                                            DOC-312557
                                            <em>3 sa 56 dk önce</em>
                                        </a>
                                        <p>UZMAN İŞİ ALDI<br>Specialist User İşi Aldı</p>
                                        <span class="mark ui-ease-bg" onclick="ui.alerts.message({ msg: 'Not okundu olarak işaretlendi!' });">Okundu İşaretle</span>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img class="ui-avatar-xs border-sd" src="img/profile-image3.jpg" alt="">
                                            <b>Supervisor User</b>
                                            DOC-312557
                                            <em>3 sa 56 dk önce</em>
                                        </a>
                                        <p>DENETMENE GÖNDERİLDİ<br>Supervisor User İşi Aldı</p>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span class="ui-avatar-xs bg-sd">
                                                <span>KD</span>
                                            </span>
                                            <b>Supervisor User</b>
                                            DOC-312557
                                            <em>3 sa 56 dk önce</em>
                                        </a>
                                        <p>DENETMENE GÖNDERİLDİ<br>Supervisor User İşi Aldı</p>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img class="ui-avatar-xs border-ss" src="img/profile-image.jpg" alt="">
                                            <b>Secretarial User</b>
                                            DOC-312557
                                            <em>3 sa 56 dk önce</em>
                                        </a>
                                        <p>GENEL NOTLAR<br>Başvuru için gerekli belgeler temin edilmiştir.</p>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span class="ui-avatar-xs bg-ss">
                                                <span>KS</span>
                                            </span>
                                            <b>Secretarial User</b>
                                            DOC-312557
                                            <em>3 sa 56 dk önce</em>
                                        </a>
                                        <p>GENEL NOTLAR<br>Başvuru için gerekli belgeler temin edilmiştir.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <button title="Bekleyen İşler" data-ui-tooltip="l" data-ui-only="desktop" class="ui-tab ui-tab-toggle ui-btn ui-btn-ghost ui-btn-square">
                        <span class="ui-notifier">
                            <svg class="ui-icon ui-no-opacity"><use href="../dist/icons.svg#hourglass-start"></use></svg>
                        </span>
                    </button>
                    <div class="ui-tab-content">
                        <h4>
                            <span class="info bg-featured">8 Yeni</span>
                            Bekleyen İşler
                        </h4>

                        <!-- list loader -->
                        <div class="business-list-loader ui-animate-progress"></div>

                        <div class="ui-scroll-v">

                            <!--no content -->
                            <div class="business-no-content">
                                <svg class="ui-icon"><use href="../dist/icons.svg#hourglass-start"></use></svg>
                                Bekleyen işler yok
                            </div>

                            <div class="ui-listgroup">
                                <ul class="ui-listgroup-has-avatar-xs ui-ease-listgroup">
                                    <li class="new">
                                        <a href="#">
                                            <span class="ui-avatar-xs bg-8">
                                                <span><b>18</b> Gün</span>
                                            </span>
                                            <b>DOC-312557</b>
                                            <em>Teslim Tarihi: 25.03.2022 09:43</em>
                                            <span class="info bg-acil">Acil</span>
                                        </a>
                                        <dl class="ui-row ui-row-gap-sm">
                                            <dt>İl/İlçe</dt>
                                            <dd>İZMİR / BORNOVA</dd>
                                            <dt>Tapu Sayısı</dt>
                                            <dd>1</dd>
                                            <dt>Ada/Parsel</dt>
                                            <dd>8896/10 KÜÇÜK SANAYİ TESİSİ</dd>
                                        </dl>
                                    </li>
                                    <li class="new">
                                        <a href="#">
                                            <span class="ui-avatar-xs bg-7">
                                                <span><b>16</b> Gün</span>
                                            </span>
                                            <b>DOC-312557</b>
                                            <em>Teslim Tarihi: 25.03.2022 09:43</em>
                                            <span class="info bg-acil">Acil</span>
                                            <span class="info bg-vip">VIP</span>
                                        </a>
                                        <dl class="ui-row ui-row-gap-sm">
                                            <dt>İl/İlçe</dt>
                                            <dd>İZMİR / BORNOVA</dd>
                                            <dt>Tapu Sayısı</dt>
                                            <dd>1</dd>
                                            <dt>Ada/Parsel</dt>
                                            <dd>8896/10 KÜÇÜK SANAYİ TESİSİ</dd>
                                        </dl>
                                    </li>
                                    <li class="new">
                                        <a href="#">
                                            <span class="ui-avatar-xs bg-6">
                                                <span><b>13</b> Gün</span>
                                            </span>
                                            <b>DOC-312557</b>
                                            <em>Teslim Tarihi: 25.03.2022 09:43</em>
                                            <span class="info bg-revize">Revize</span>
                                        </a>
                                        <dl class="ui-row ui-row-gap-sm">
                                            <dt>İl/İlçe</dt>
                                            <dd>İZMİR / BORNOVA</dd>
                                            <dt>Tapu Sayısı</dt>
                                            <dd>1</dd>
                                            <dt>Ada/Parsel</dt>
                                            <dd>8896/10 KÜÇÜK SANAYİ TESİSİ</dd>
                                        </dl>
                                    </li>
                                    <li class="new">
                                        <a href="#">
                                            <span class="ui-avatar-xs bg-5">
                                                <span><b>10</b> Gün</span>
                                            </span>
                                            <b>DOC-312557</b>
                                            <em>Teslim Tarihi: 25.03.2022 09:43</em>
                                        </a>
                                        <dl class="ui-row ui-row-gap-sm">
                                            <dt>İl/İlçe</dt>
                                            <dd>İZMİR / BORNOVA</dd>
                                            <dt>Tapu Sayısı</dt>
                                            <dd>1</dd>
                                            <dt>Ada/Parsel</dt>
                                            <dd>8896/10 KÜÇÜK SANAYİ TESİSİ</dd>
                                        </dl>
                                    </li>
                                    <li class="new">
                                        <a href="#">
                                            <span class="ui-avatar-xs bg-4">
                                                <span><b>8</b> Gün</span>
                                            </span>
                                            <b>DOC-312557</b>
                                            <em>Teslim Tarihi: 25.03.2022 09:43</em>
                                        </a>
                                        <dl class="ui-row ui-row-gap-sm">
                                            <dt>İl/İlçe</dt>
                                            <dd>İZMİR / BORNOVA</dd>
                                            <dt>Tapu Sayısı</dt>
                                            <dd>1</dd>
                                            <dt>Ada/Parsel</dt>
                                            <dd>8896/10 KÜÇÜK SANAYİ TESİSİ</dd>
                                        </dl>
                                    </li>
                                    <li class="new">
                                        <a href="#">
                                            <span class="ui-avatar-xs bg-3">
                                                <span><b>6</b> Gün</span>
                                            </span>
                                            <b>DOC-312557</b>
                                            <em>Teslim Tarihi: 25.03.2022 09:43</em>
                                        </a>
                                        <dl class="ui-row ui-row-gap-sm">
                                            <dt>İl/İlçe</dt>
                                            <dd>İZMİR / BORNOVA</dd>
                                            <dt>Tapu Sayısı</dt>
                                            <dd>1</dd>
                                            <dt>Ada/Parsel</dt>
                                            <dd>8896/10 KÜÇÜK SANAYİ TESİSİ</dd>
                                        </dl>
                                    </li>
                                    <li class="new">
                                        <a href="#">
                                            <span class="ui-avatar-xs bg-2">
                                                <span><b>4</b> Gün</span>
                                            </span>
                                            <b>DOC-312557</b>
                                            <em>Teslim Tarihi: 25.03.2022 09:43</em>
                                        </a>
                                        <dl class="ui-row ui-row-gap-sm">
                                            <dt>İl/İlçe</dt>
                                            <dd>İZMİR / BORNOVA</dd>
                                            <dt>Tapu Sayısı</dt>
                                            <dd>1</dd>
                                            <dt>Ada/Parsel</dt>
                                            <dd>8896/10 KÜÇÜK SANAYİ TESİSİ</dd>
                                        </dl>
                                    </li>
                                    <li class="new">
                                        <a href="#">
                                            <span class="ui-avatar-xs bg-1">
                                                <span><b>1</b> Gün</span>
                                            </span>
                                            <b>DOC-312557</b>
                                            <em>Teslim Tarihi: 25.03.2022 09:43</em>
                                        </a>
                                        <dl class="ui-row ui-row-gap-sm">
                                            <dt>İl/İlçe</dt>
                                            <dd>İZMİR / BORNOVA</dd>
                                            <dt>Tapu Sayısı</dt>
                                            <dd>1</dd>
                                            <dt>Ada/Parsel</dt>
                                            <dd>8896/10 KÜÇÜK SANAYİ TESİSİ</dd>
                                        </dl>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <button title="Gönderilecek İşler" data-ui-tooltip="l" data-ui-only="desktop" class="ui-tab ui-tab-toggle ui-btn ui-btn-ghost ui-btn-square">
                        <span class="ui-notifier">
                            <svg class="ui-icon ui-no-opacity"><use href="../dist/icons.svg#hourglass-end"></use></svg>
                        </span>
                    </button>
                    <div class="ui-tab-content">
                        <h4>
                            <span class="info bg-featured">4 Yeni</span>
                            Gönderilcek İşler
                        </h4>

                        <!-- list loader -->
                        <div class="business-list-loader ui-animate-progress"></div>

                        <div class="ui-scroll-v">

                            <!--no content -->
                            <div class="business-no-content">
                                <svg class="ui-icon"><use href="../dist/icons.svg#hourglass-start"></use></svg>
                                Gönderilcek işler yok
                            </div>

                            <div class="ui-listgroup">
                                <ul class="ui-listgroup-has-avatar-xs ui-ease-listgroup">
                                    <li class="new">
                                        <a href="#">
                                            <span class="ui-avatar-xs bg-1">
                                                <span><b>1</b> Gün</span>
                                            </span>
                                            <b>DOC-312557</b>
                                            <em>14.03.2022 09:50</em>
                                            <span class="info bg-acil">Acil</span>
                                        </a>
                                    </li>
                                    <li class="new">
                                        <a href="#">
                                            <span class="ui-avatar-xs bg-1">
                                                <span><b>0</b> Gün</span>
                                            </span>
                                            <b>DOC-312557</b>
                                            <em>14.03.2022 09:50</em>
                                            <span class="info bg-acil">Acil</span>
                                            <span class="info bg-vip">VIP</span>
                                        </a>
                                    </li>
                                    <li class="new">
                                        <a href="#">
                                            <span class="ui-avatar-xs bg-1">
                                                <span><b>-1</b> Gün</span>
                                            </span>
                                            <b>DOC-312557</b>
                                            <em>14.03.2022 09:50</em>
                                            <span class="info bg-revize">Revize</span>
                                        </a>
                                    </li>
                                    <li class="new">
                                        <a href="#">
                                            <span class="ui-avatar-xs bg-1">
                                                <span><b>-2</b> Gün</span>
                                            </span>
                                            <b>DOC-312557</b>
                                            <em>14.03.2022 09:50</em>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <button title="Favorilerim" data-ui-tooltip="l" data-ui-only="desktop" class="ui-tab ui-tab-toggle ui-btn ui-btn-ghost ui-btn-square">
                        <svg class="ui-icon ui-no-opacity"><use href="../dist/icons.svg#star"></use></svg>
                    </button>
                    <div class="ui-tab-content">
                        <h4>Favorilerim</h4>

                        <!-- list loader -->
                        <div class="business-list-loader ui-animate-progress"></div>

                        <div class="ui-scroll-v">

                            <div class="ui-listgroup">
                                <b class="business-title">
                                    <a title="Yeni Ekle" class="edit ui-ease-bg" href="#">
                                        <svg class="ui-icon"><use href="../dist/icons.svg#plus"></use></svg>
                                    </a>
                                    Başvuru Bul
                                </b>
                                <ul class="ui-ease-listgroup">
                                    <li>
                                        ŞİRKET TÜM İŞLER
                                        <span class="ui-ease-1st-bg">
                                            <a class="edit ui-listgroup-url" href="#">Düzenle</a>
                                            <span class="remove" onclick="ui.alerts.dialog({ msg: 'ŞİRKET TÜM İŞLER adlı hızlı arama favori listesinden kaldırılacaktır.', success: 'Kaldır', error: 'Vazgeç', callback: function (v) { if (v === 'success') ui.alerts.message({ msg: 'Hızlı arama kaldırıldı!' }); } });">Kaldır</span>
                                            <a class="mark ui-listgroup-url" href="#">Hızlı Arama Yap</a>
                                        </span>
                                    </li>
                                </ul>
                                <b class="business-title">
                                    <a title="Yeni Ekle" class="edit ui-ease-bg" href="#">
                                        <svg class="ui-icon"><use href="../dist/icons.svg#plus"></use></svg>
                                    </a>
                                    Kullanıcılar
                                </b>
                                <ul class="ui-ease-listgroup">
                                    <li>
                                        GARANTİ BBVA İŞLERİ
                                        <span class="ui-ease-1st-bg">
                                            <a class="edit ui-listgroup-url" href="#">Düzenle</a>
                                            <span class="remove" onclick="ui.alerts.dialog({ msg: 'GARANTİ BBVA İŞLERİ adlı hızlı arama favori listesinden kaldırılacaktır.', success: 'Kaldır', error: 'Vazgeç', callback: function (v) { if (v === 'success') ui.alerts.message({ msg: 'Hızlı arama kaldırıldı!' }); } });">Kaldır</span>
                                            <a class="mark ui-listgroup-url" href="#">Hızlı Arama Yap</a>
                                        </span>
                                    </li>
                                    <li>
                                        AKBANK UZMAN İŞLERİ
                                        <span class="ui-ease-1st-bg">
                                            <a class="edit ui-listgroup-url" href="#">Düzenle</a>
                                            <span class="remove" onclick="ui.alerts.dialog({ msg: 'AKBANK UZMAN İŞLERİ adlı hızlı arama favori listesinden kaldırılacaktır.', success: 'Kaldır', error: 'Vazgeç', callback: function (v) { if (v === 'success') ui.alerts.message({ msg: 'Hızlı arama kaldırıldı!' }); } });">Kaldır</span>
                                            <a class="mark ui-listgroup-url" href="#">Hızlı Arama Yap</a>
                                        </span>
                                    </li>
                                </ul>
                                <b class="business-title">
                                    <a title="Yeni Ekle" class="edit ui-ease-bg" href="#">
                                        <svg class="ui-icon"><use href="../dist/icons.svg#plus"></use></svg>
                                    </a>
                                    Banka / Şirket
                                </b>
                                <span class="business-no-content-sm"> <!--no content -->
                                    <svg class="ui-icon"><use href="../dist/icons.svg#star"></use></svg>
                                    Hızlı arama kaydı yok
                                </span>
                                <b class="business-title">
                                    <a title="Yeni Ekle" class="edit ui-ease-bg" href="#">
                                        <svg class="ui-icon"><use href="../dist/icons.svg#plus"></use></svg>
                                    </a>
                                    Çözüm Ortağı Mutabakat Listesi
                                </b>
                                <span class="business-no-content-sm"> <!--no content -->
                                    <svg class="ui-icon"><use href="../dist/icons.svg#star"></use></svg>
                                    Hızlı arama kaydı yok
                                </span>
                                <b class="business-title">
                                    <a title="Yeni Ekle" class="edit ui-ease-bg" href="#">
                                        <svg class="ui-icon"><use href="../dist/icons.svg#plus"></use></svg>
                                    </a>
                                    Harita Yoğunluk
                                </b>
                                <span class="business-no-content-sm"> <!--no content -->
                                    <svg class="ui-icon"><use href="../dist/icons.svg#star"></use></svg>
                                    Hızlı arama kaydı yok
                                </span>
                                <b class="business-title">
                                    <a title="Yeni Ekle" class="edit ui-ease-bg" href="#">
                                        <svg class="ui-icon"><use href="../dist/icons.svg#plus"></use></svg>
                                    </a>
                                    Yıllık Ciro Karşılaştırması
                                </b>
                                <span class="business-no-content-sm"> <!--no content -->
                                    <svg class="ui-icon"><use href="../dist/icons.svg#star"></use></svg>
                                    Hızlı arama kaydı yok
                                </span>
                            </div>
                        </div>

                    </div>

                    <button title="Son İncelediğim İşler" data-ui-tooltip="l" data-ui-only="desktop" class="ui-tab ui-tab-toggle ui-btn ui-btn-ghost ui-btn-square">
                        <svg class="ui-icon ui-no-opacity"><use href="../dist/icons.svg#history"></use></svg>
                    </button>
                    <div class="ui-tab-content">
                        <h4>Son İncelediğim İşler</h4>

                        <!-- list loader -->
                        <div class="business-list-loader ui-animate-progress"></div>

                        <div class="ui-scroll-v">

                            <!--no content -->
                            <div class="business-no-content">
                                <svg class="ui-icon"><use href="../dist/icons.svg#history"></use></svg>
                                Henüz incelediğiniz bir iş yok
                            </div>

                            <div class="ui-listgroup">
                                <ul class="ui-listgroup-has-avatar-xs ui-listgroup-has-icon-xs ui-ease-listgroup">
                                    <li>
                                        <a href="#">
                                            <svg class="ui-listgroup-icon ui-icon"><use href="../dist/icons.svg#angle-right"></use></svg>
                                            <span class="ui-avatar-xs"><svg class="ui-icon">
                                                <use href="../dist/icons.svg#history"></use></svg>
                                            </span>
                                            <b>DOC-312557</b>
                                            <span>3170187</span>
                                            <em>1 sa 25 dk</em>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <svg class="ui-listgroup-icon ui-icon"><use href="../dist/icons.svg#angle-right"></use></svg>
                                            <span class="ui-avatar-xs"><svg class="ui-icon">
                                                <use href="../dist/icons.svg#history"></use></svg>
                                            </span>
                                            <b>DOC-312557</b>
                                            <span>3170187</span>
                                            <em>1 sa 25 dk</em>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <svg class="ui-listgroup-icon ui-icon"><use href="../dist/icons.svg#angle-right"></use></svg>
                                            <span class="ui-avatar-xs"><svg class="ui-icon">
                                                <use href="../dist/icons.svg#history"></use></svg>
                                            </span>
                                            <b>DOC-312557</b>
                                            <span>3170187</span>
                                            <em>1 sa 25 dk</em>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <svg class="ui-listgroup-icon ui-icon"><use href="../dist/icons.svg#angle-right"></use></svg>
                                            <span class="ui-avatar-xs"><svg class="ui-icon">
                                                <use href="../dist/icons.svg#history"></use></svg>
                                            </span>
                                            <b>DOC-312557</b>
                                            <span>3170187</span>
                                            <em>1 sa 25 dk</em>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>

                <!-- panel bottom -->
                <div class="ui-set-absolute ui-set-b ui-set-cx ui-align-c ui-m-5-b">

                    <!-- help icon -->
                    <a class="ui-btn ui-btn-ghost ui-btn-square ui-icons-no-opacity ui-ease-btn" title="Help Center" href="#">
                        <svg class="ui-icon"><use href="../dist/icons.svg#help"/> </svg>
                    </a>

                </div>

            </div>
        </div>

    </div>
</main>

<!-- left sidebar -->
<div class="ui-sidebar ui-sidebar-l ui-round ui-theme-base ui-ease-layout ui-ease-in-out">
    <button class="ui-sidebar-close ui-btn ui-btn-square ui-btn-ghost ui-circle ui-ease-btn">
        <svg class="ui-icon ui-no-opacity"><use href="../dist/icons.svg#arrow-left"/></svg>
    </button>
    <div class="ui-sidebar-content ui-no-p ui-scroll-v"></div>
</div>

<!-- right sidebar -->
<div class="ui-sidebar ui-sidebar-r ui-round ui-theme-base ui-ease-layout ui-ease-in-out">
    <button class="ui-sidebar-close ui-btn ui-btn-square ui-btn-ghost ui-circle ui-ease-btn">
        <svg class="ui-icon ui-no-opacity"><use href="../dist/icons.svg#arrow-right"/></svg>
    </button>
    <div class="ui-sidebar-content ui-no-p ui-scroll-v"></div>
</div>