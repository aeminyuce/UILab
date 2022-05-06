<?php
    // cookie: dark mode
    $mode = 'light';

    if (isset($_COOKIE["ui-darkMode"]))
    {
        $mode = $_COOKIE["ui-darkMode"];
    }

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
        <div class="ui-col-panel-l <?php echo $menuToggle; ?>"> <!-- cookie: menü kontrolü -->
            <div class="panel-l ui-sidebar-add-l ui-ease-width">

                <div class="ui-col-static ui-no-fluid ui-tab-holder ui-ease-tab ui-ease-1st-btn" data-ui-classes="ui-btn-visible">

                    <div class="ui-col-panel-min">

                        <!-- mini left panel -->
                        <div class="panel-l-min">

                            <!-- toggle sidebar -->
                            <button title="Menü Daralt/Genişlet" class="panel-l-toggle ui-btn ui-btn-ghost ui-btn-square ui-m-10-b ui-ease-btn ui-visible-xl">
                                <svg class="ui-icon ui-no-opacity">
                                    <use href="../dist/icons.svg#angle-<?php echo $menuIcon ?>"></use> <!-- cookie: menü kontrolü -->
                                </svg>
                            </button>

                            <!-- buttons -->
                            <div class="ease-1st-btn">
                                <button title="İş Sayıları" data-ui-tooltip="r" data-ui-only="desktop" class="ui-tab ui-btn ui-btn-ghost ui-btn-square<?php echo $menuActiveBtn; ?>"> <!-- cookie: menü kontrolü -->
                                    <svg class="ui-icon ui-no-opacity"><use href="../dist/icons.svg#tachometer"></use></svg>
                                </button>

                                <button title="Başvurular" data-ui-tooltip="r" data-ui-only="desktop" class="ui-tab ui-btn ui-btn-ghost ui-btn-square">
                                    <svg class="ui-icon ui-no-opacity"><use href="../dist/icons.svg#briefcase"></use></svg>
                                </button>

                                <a title="Mobil İmza" href="#" data-ui-tooltip="r" data-ui-only="desktop" class="ui-btn ui-btn-ghost ui-btn-square"> <!-- link -->
                                    <svg class="ui-icon ui-no-opacity"><use href="../dist/icons.svg#mobile-write"></use></svg>
                                </a>
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
                            <a title="Demo Gayrimenkul Değerleme A.Ş." class="panel-l-logo" href="#">
                                <img class="ui-m-10-t" src="img/logo-udashboard.png" height="62" alt="">
                            </a>

                            <!-- menuler -->
                            <div class="ui-tab-content ui-open ui-open-ease">

                                <form action="#"> <!-- başvuru arama formu -->
                                    <div class="ui-input ui-form-icon ui-round ui-m-10 ui-border-dual ui-ease-form">
                                        <button type="submit">
                                            <svg class="ui-icon"><use href="../dist/icons.svg#search"/></svg>
                                        </button>
                                        <input type="text" placeholder="Başvuru ara">
                                    </div>
                                </form>

                                <div class="ui-p-10-h">İş Sayılarım</div>
                                <div class="ui-row ui-row-gap-xs ui-no-fluid ui-align-c ui-m-10 ui-theme-base ui-ease-2nd-btn">
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
                                                <i>16</i> <!-- geri dönen / iade -->
                                            </span>
                                            <i>Uzmanda</i>
                                        </button>
                                    </div>
                                    <div class="ui-col-4">
                                        <button class="ui-btn ui-btn-multi ui-fill-dark-100">
                                            <span>
                                                10
                                                <i>7</i> <!-- geri dönen / iade -->
                                            </span>
                                            <i>Denetimde</i>
                                        </button>
                                    </div>
                                    <div class="ui-col-4">
                                        <button class="ui-btn ui-btn-multi ui-fill-dark-100">
                                            <span>
                                                4
                                                <i>16</i> <!-- geri dönen / iade -->
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
                                </div>

                                <div class="ui-p-10-h">Şirket İş Sayıları</div>
                                <div class="ui-row ui-row-gap-xs ui-no-fluid ui-align-c ui-m-10 ui-ease-2nd-btn">
                                    <div class="ui-col-4">
                                        <button class="ui-btn ui-btn-multi">
                                            <span>416</span>
                                            <i>Bekleyen</i>
                                        </button>
                                    </div>
                                    <div class="ui-col-4">
                                        <button class="ui-btn ui-btn-multi">
                                            <span>
                                                665
                                                <i>17</i> <!-- geri dönen / iade -->
                                            </span>
                                            <i>Uzmanda</i>
                                        </button>
                                    </div>
                                    <div class="ui-col-4">
                                        <button class="ui-btn ui-btn-multi">
                                            <span>
                                                168
                                                <i>27</i> <!-- geri dönen / iade -->
                                            </span>
                                            <i>Denetimde</i>
                                        </button>
                                    </div>
                                    <div class="ui-col-4">
                                        <button class="ui-btn ui-btn-multi">
                                            <span>
                                                19
                                                <i>4</i> <!-- geri dönen / iade -->
                                            </span>
                                            <i>2. Denetimde</i>
                                        </button>
                                    </div>
                                    <div class="ui-col-4">
                                        <button class="ui-btn ui-btn-multi">
                                            <span>1</span>
                                            <i>Kotrol Edildi</i>
                                        </button>
                                    </div>
                                    <div class="ui-col-4">
                                        <button class="ui-btn ui-btn-multi">
                                            <span>0</span>
                                            <i>Bugün</i>
                                        </button>
                                    </div>
                                    <div class="ui-col-4">
                                        <button class="ui-btn ui-btn-multi">
                                            <span>74</span>
                                            <i>Donmuş</i>
                                        </button>
                                    </div>
                                    <div class="ui-col-4">
                                        <button class="ui-btn ui-btn-multi">
                                            <span>797</span>
                                            <i>Gecikmiş</i>
                                        </button>
                                    </div>
                                    <div class="ui-col-4">
                                        <button class="ui-btn ui-btn-multi">
                                            <svg class="ui-icon"><use href="../dist/icons.svg#hourglass-start"></use></svg>
                                            <i>Gönderilecek</i>
                                        </button>
                                    </div>
                                    <div class="ui-col-4">
                                        <button class="ui-btn ui-btn-multi">
                                            <svg class="ui-icon"><use href="../dist/icons.svg#flag"></use></svg>
                                            <i>Raporlaşmış</i>
                                        </button>
                                    </div>
                                </div>

                            </div>
                            <div class="ui-tab-content">

                                <b class="title">Başvurular</b>
                                <div class="ui-btn-list ui-ease-1st-btn"> <!-- link butonlar -->
                                    <a href="#" class="ui-btn ui-btn-ghost">Yeni</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Bul</a>
                                </div>

                                <div class="ui-tab-holder ui-tab-accordion ui-ease-tab" data-ui-classes="ui-btn-visible"> <!-- akordiyon menu -->
                                    <button class="ui-tab ui-tab-toggle ui-btn ui-btn-ghost ui-ease-btn">
                                        <svg class="ui-toggle-icon ui-icon"><use href="../dist/icons.svg#angle-down"></use></svg>
                                        <span>Toplu İşlemler</span>
                                    </button>
                                    <div class="ui-tab-content ui-btn-list ui-ease-1st-btn">
                                        <a href="#" class="ui-btn ui-btn-ghost">Rapor/Takbis</a>
                                        <a href="#" class="ui-btn ui-btn-ghost">Kargo/Arşiv</a>
                                    </div>
                                </div>

                                <div class="ui-btn-list ui-ease-1st-btn"> <!-- link butonlar -->
                                    <a href="#" class="ui-btn ui-btn-ghost">Notlar</a>
                                </div>

                            </div>
                            <div class="ui-tab-content">

                                <b class="title">Muhasebe</b>
                                <div class="ui-btn-list ui-ease-1st-btn"> <!-- link butonlar -->
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

                                <b class="title">Listeler</b>
                                <div class="ui-btn-list ui-ease-1st-btn"> <!-- link butonlar -->
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

                                <b class="title">Araçlar</b>
                                <div class="ui-btn-list ui-ease-1st-btn"> <!-- link butonlar -->
                                    <a href="#" class="ui-btn ui-btn-ghost">Proje Arşivi</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Rapor Arşivi</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Gayrimenkul Emsal</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Makine Emsal</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Sorunlu Taşınmazlar</a>
                                    <a href="#" class="ui-btn ui-btn-ghost">Harita</a>
                                </div>

                            </div>
                            <div class="ui-tab-content">

                                <b class="title">İnsan Kaynakları</b>
                                <div class="ui-btn-list ui-ease-1st-btn"> <!-- link butonlar -->
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

                                <b class="title">Yönetim</b>
                                <div class="ui-btn-list ui-ease-1st-btn"> <!-- link butonlar -->
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

                            <!-- sol butonlar -->
                            <div class="ui-float-l ui-ease-1st-btn">

                                <!-- toggle sidebar -->
                                <button title="Menü" class="ui-sidebar-show-l ui-btn ui-btn-ghost ui-btn-square ui-circle ui-visible-md">
                                    <svg class="ui-icon ui-no-opacity"><use href="../dist/icons.svg#bars-left"></use></svg>
                                </button>

                                <!-- göstergeler -->
                                <a title="Göstergeler" class="ui-btn ui-btn-ghost ui-btn-square ui-circle" href="#">
                                    <svg class="ui-icon ui-no-opacity"><use href="../dist/icons.svg#grid-masonry"></use></svg>
                                </a>

                                <!-- başvuru ara -->
                                <a title="Başvuru Ara" class="ui-btn ui-btn-ghost ui-btn-square ui-circle" href="#">
                                    <svg class="ui-icon ui-no-opacity"><use href="../dist/icons.svg#search"></use></svg>
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
                                    <!--
                                        Resim var:
                                        Uzman: border-su, Denetmen: border-sd, Sekreter: border-ss
                                    -->
                                    <img class="ui-avatar ui-avatar-xs ui-border-dual ui-circle border-sd" src="img/profile-image.jpg" alt="">
                                    <!--
                                        Resim yok:
                                        Uzman: bg-su, Denetmen: bg-sd, Sekreter: bg-ss

                                    <span class="ui-avatar-xs ui-circle bg-sd">
                                        <span>KYD</span>
                                    </span>
                                    -->
                                </button>
                                <ul class="ui-dropdown-menu ui-dropdown-has-icon ui-round ui-shadow-lg">
                                    <li class="ui-border-b ui-border-lg">
                                        <a href="#">
                                            <span class="ui-color-black-50">Key Yazılım Denetmen</span><br>
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

                            <!-- sağ butonlar -->
                            <div class="ui-float-r ui-ease-1st-btn">

                            </div>

                        </div>
                    </div>
                </header>

                <!-- pages -->
                <div class="page-middle ui-fixed ui-fixed-xl ui-theme-base">
                    <div class="ui-row">

                        <div class="ui-col-static">

                            <div class="ui-row">
                                <div class="ui-col-12 ui-no-p-v">

                                    <!-- contents -->

                                    <div class="ui-row">
                                        <div class="ui-col-8">
                                            <div class="ui-card ui-full-h ui-round ui-shadow-lg">
                                                <div class="ui-card-side ui-p-15 ui-border-b">
                                                    <h4 class="ui-h4">Harita</h4>
                                                </div>
                                                <div class="ui-card-side ui-map ui-p-15">
                                                    <svg viewBox="0 0 76.5 39" class="ui-text ui-ease-2nd-svg">
                                                        <style>
                                                            path { stroke-width: 0.5 !important; }
                                                        </style>
                                                        <g id="istanbul" transform="translate(-99.7 -31)">
                                                            <path
                                                                data-ui-href="#" data-ui-size="0" data-ui-tooltip title="Adalar: 0"
                                                                d="m141.3 65.5.3.5-.2.2h-.4V66l-.2-.2v-.2l.5-.1Zm.4 1.6.3.1.2.3-.4.4-.5-.3.2-.3-.1-.2Zm.7 0 .1.1-.1.2v-.3Zm.8.1.3.7-.6.3h-.1V68l-.1.1v.2h-.4V68l.5-.3.1-.1-.1-.1.4-.3Zm1.4.5.3.1.1.2-.3.5-.2.2v.6l-.1.5h-.4l-.2-.2.2-.2-.2-.4.1-.3-.2-.1.3-.1V68l.6-.3Zm.6 1.1.2.5h-.2l-.2-.2Z"/>
                                                            <path
                                                                data-ui-href="#" data-ui-size="3" data-ui-tooltip title="Arnavutköy: 3"
                                                                d="M132.2 53.7h-.4l-.2-.1-.3-.4h-.4l-.8.7-.5.3h-.7l-.3.2-.3.5h-.4l-.8-.6h-.3l-.3.3-.2.9-1.2.3-.6.4-.2-.3-.2-.6-.3-.4-.3.1-.5-.5-1.1.9-.1.6-.4.1-.3-.4-.1-.3.3-.5v-.7l-.1-.3v-1l.1-.4-.3-.5v-.7l.6-.9.4-.1.2.1.7-.5h.1l.1-.2.1-.5-.1-.4-.2-.3-.7-.1-.2-.3v-.6l.3-.3.1-1 .3-.6V45l.2-.1.2-.5V44l-.1-.4-.3-.3h-.8l-.3-.1-.3-.4-1.1-.4-.1-.7.1-1.8.7.2.8.6.7.3.6.5.7.4.3.1.5-.1.9.4h.2l.1-.2h.2l.2.2v.1l-.1-.1-.1.1.2.2 1.5.7v.1l.2-.2h.2l.7.4h.4l.4.3.4.1.3.3-.2.2v.1h.2l.1-.1.4.1.5-.2.4.3v.2l.2.2.1-.2-.3 2-.7.8v.4l.2.1.3.6v.4l.3.7.6.9.1 1.2-.4 1.1.2.6Z"/>
                                                            <path
                                                                data-ui-href="#" data-ui-size="12" data-ui-tooltip title="Ataşehir: 12"
                                                                d="m143.3 62.1-.7-1.3-.7-.5v-.4l.2-.2.4-.1.8.1.6.4.6.1.6.2 1.3.1.5.3.3.5-.4-.2-.7.1-.3-.2-.6-.1-.1.4H144l-.5.7-.2.1Z"/>
                                                            <path
                                                                data-ui-href="#" data-ui-size="8" data-ui-tooltip title="Avcılar: 8"
                                                                d="m129.5 61.3-.4.5v.2h-.2l-.4.2-.2.3h-.3l-.7.1-.1-.2-.5-.1.1-.7-.5-.7.1-.3.2-.2.4-.1.2-.8v-.3l-.4-.3-.1-.2.2-.5-.1-.5.5-.1.1-.1V57l-.2-.7.1-.4.2-.2h.1l.4.9 1 1.1.1.8-.2.9.1.3.1 1.2.2.3h.4l-.2.1Z" transform="translate(-.2)"/>
                                                            <path
                                                                data-ui-href="#" data-ui-size="1" data-ui-tooltip title="Bağcılar: 1"
                                                                d="m133.8 58.8-.2.2h-.5l.2.5-.1.2-.5-.3-1.6-.1.2-.5v-1.2l.3-.4.6-.1.3.3h.1l.4-.5h.2l-.2.5v.5l.8.9Z"/>
                                                            <path
                                                                data-ui-href="#" data-ui-size="6" data-ui-tooltip title="Bahçelievler: 6"
                                                                d="m133.3 59.8.3.3.3-.1v.5l-.5.4h-.6l-.2.1h-1l-.6-.6.1-.2.1-.8 1.6.1.5.3Z"/>
                                                            <path
                                                                data-ui-href="#" data-ui-size="4" data-ui-tooltip title="Bakırköy: 4"
                                                                d="m129.5 61.3 1.1-.3.2-.5.2-.2.6.6h1l.2-.1h.6l.5-.4h.5l-.3 1 .3.8-.2.1-.2.4-.4-.3h-.7l-.4.9h-.2l-.1.2-.3-.1h-.1l.1.2h-.1l-.5-.1-.2-.3-.3-.1-.4-.4-.9-.6-.3.1V62l.3-.7Z"/>
                                                            <path
                                                                data-ui-href="#" data-ui-size="3" data-ui-tooltip title="Başakşehir: 3"
                                                                d="M131.4 57.6h-1.5l-1.1.1-1-1.1-.4-.9h-.1l-.2.2-.1.4.2.7v.7l-.1.1-.5.1-.9-1-.2-.5-.3-.4 1.2-.3.2-.9.3-.3h.3l.8.5h.4l.3-.5.3-.2h.7l.5-.3.8-.7h.4l.3.4.2.1h.4l.3.2.5.7.1.3-.1.3-.1.2-.2 1.1-.5.6-.6.1-.3.3Z"/>
                                                            <path
                                                                data-ui-href="#" data-ui-size="3" data-ui-tooltip title="Bayrampaşa: 3"
                                                                d="m134.8 58.9-.5-.6-.1-.2.2-.4-.2-.6v-.5l.8.7.4.6v.9l-.6.1Z"/>
                                                            <path
                                                                data-ui-href="#" data-ui-size="8" data-ui-tooltip title="Beşiktaş: 8"
                                                                d="m138.5 58.5.3-1.5.2-.2h.4l.1-.1v-.4l-.1-.3-.3-.2.1-.5.3-.3 1.4 1.1.2-.5.2.1.1.2v.5l-.5.3.1.6-.2.1-.4.8-1 .5-.5.1-.2.3-.2-.6Z"/>
                                                            <path
                                                                data-ui-href="#" data-ui-size="1" data-ui-tooltip title="Beykoz: 1"
                                                                d="m142.5 56.9-.6-.7-.1-.6.1-.3.2-.2h.4l.2-.3.5-.2.1-.4-.3-.5-.5-.1-.1-.1v-.1l-.2-.1.3-.7-.2-.3v-.2l.6-.4v-.4l.6-.2.2.1v-.1h.2l.2-.2.1-.5-.1-.2.5-.2v-.2l-.2.1.2-.2h.2l.2-.2h.3l.2-.1v-.2l.1-.1.3.1.2-.4 1 .3h.4v-.2l.1.1.4.1.2-.2-.1-.4.2.1.2-.1.1.1.4-.1.2.1.2-.2.4-.2.1.3.3-.1.1.1h.4l.6.3h.8l.3.2 1 .1-.1.7-.4 1v.4l.2.4 1.3 1.8v.4l-1.3.1-.7-.2H151l-.5.3-.8.4-.3.4-.4.2h-.7l-.6.7-.2.5-.1.9-.2.2-1.3.1-.7.2-.5.6-.2-.1-.1-.5-.3-.4h-.1l-.6-.4h-.5l-.4.1Z"/>
                                                            <path
                                                                data-ui-href="#" data-ui-size="2" data-ui-tooltip title="Beylikdüzü: 2"
                                                                d="m126.6 62.3-.5.2-.1.3h-.2v-.2l-.2.3-.1-.1-.1.1v-.1h-.1l-.1.3v-.3h-.2v.2l-1.6.1-.3-.1-.7-.4-.2-.3.1-.4-.1-.4.1-.9.8.6h.2l.6-.6.4-.9.7.3.3.3 1.2.3-.2.2-.1.3.5.7-.1.5Z"/>
                                                            <path
                                                                data-ui-href="#" data-ui-size="12" data-ui-tooltip title="Beyoğlu: 12"
                                                                d="m138.9 59.1-.7.6h-.4l-.1-.4-.3-.2h-.3l-.2-.5-.3-.3V58l.3-.1.1-.1h.3l1 .6.2.3.4.4Z"/>
                                                            <path
                                                                data-ui-href="#" data-ui-size="1" data-ui-tooltip title="Büyükçekmece: 1"
                                                                d="m124.5 56.3-.4.9.2.9-.2.9.3.7-.4.9-.6.6h-.2l-.8-.6.1-.3-.3-.4-1-.1-.2.2.1.1h-.2l-.4.3-.2.4-.1.8-.1.1-.5-.4-.8-.4v-.2l-.3-.3-.9-.4-.6-.6-1.8-.9.2-1.6.5-.1.3.2h.5l.5.2h.3l.5.3.4-.1.3-.1v-.7l.1-.4-.1-.8.1-.1h.3l.1-.3h.2l.4.8.2.1.2-.2.8-.1.3.4.4-.1.1-.6 1.1-.9.5.5.3-.1.3.4.2.6.3.5Z"/>
                                                            <path
                                                                data-ui-href="#" data-ui-size="0" data-ui-tooltip title="Çatalca: 0"
                                                                d="m121.1 55.8-.8.1-.2.2-.2-.1-.4-.8h-.2l-.1.3h-.3l-.1.1.1.8-.1.4v.7l-.3.1-.4.1-.5-.3h-.3l-.5-.2h-.5l-.3-.2-.5.1.1-2.1v-1.1l-.1-.5-.3-.2-.1-.4.1-.5.2-.3.1-.9-.5-.6-.2-.3V50l-.2-.2h-.8l-.5-1-.1-.5.8-1.4v-.3l-1.6-.1-.1-.2v-.7l.7-.5v-.2l-.3-.4h-.5l-.2.4-.4.2h-1.8l-1.2-.4h-1.1l-.2.3-.2.7v.6l.2.3-.9 1.1-.3.1h-1.9l.2-.6.5-1.5.3-1.6 1-2.8.1-3.1.5-1.5.2-1.9.1-.4.4-.5-1-.9-1-.5-.3-.4v-.3l.2-.3.7-.3v.2l.3.3.7.5-.2.1.1.2h.2l.1-.1h.3l.1.3h.1l.2.2.3.1v.2h.2l.4.2.1.3.3.1.2.2h.2l.3.3 1.8.9h.1l.7.5 2.5 1.4 2.2 1 2.2 1.2 1.3.5-.1 1.8.1.7 1.1.4.3.4.3.1h.8l.3.3-.6.5v.4l-.2.5-.2.1v.7l-.3.6-.1 1-.3.3v.6l.2.3.7.1.2.3.1.4-.1.5v.2h-.1l-.7.5-.2-.1-.4.1-.6.9v.7l.3.5-.1.4v1l.1.3v.7l-.3.5.1.3Z" transform="translate(-.3)"/>
                                                            <path
                                                                data-ui-href="#" data-ui-size="0" data-ui-tooltip title="Çekmeköy: 0"
                                                                d="m146.7 59.4-.8-.9-.8-.3h-.3l.5-.6.7-.2 1.3-.1.2-.2.1-.9.2-.5.6-.7h.7l.4-.2.3-.4.8-.4.5-.3h1.4l.7.2 1.3-.1.7.7.2.9-.1.6-1.1 2.2.4.2-.2.3-.5.1-.3-.3-.2-.6h-.1l-.9-.4-1.8-.1-.4.2-.4.8-.3.2h-.4l-.2.3-.9.3-1.3.2Z"/>
                                                            <path
                                                                data-ui-href="#" data-ui-size="4" data-ui-tooltip title="Esenler: 4"
                                                                d="M134.8 58.9v.8l-.4-.2-.1-.1.1-.4-.1-.3h-.4l-.6-.8v-.5l.2-.5h-.2l-.4.5h-.1l-.3-.3.5-.6.2-1.1.1-.2.6.9.3.2.2.3v.5l.2.6-.2.4.1.2.3.6Z" transform="translate(-.2)"/>
                                                            <path
                                                                data-ui-href="#" data-ui-size="2" data-ui-tooltip title="Esenyurt: 2"
                                                                d="m124.4 59.7-.3-.7.2-.9-.2-.9.4-.9.6-.4.3.4.2.5.9 1 .1.5-.2.5.1.2.4.3v.3l-.2.8-.4.1-1.2-.3-.1-.2-.6-.3Z"/>
                                                            <path
                                                                data-ui-href="#" data-ui-size="7" data-ui-tooltip title="Eyupsultan: 7"
                                                                d="m136.5 58.3.1.2-.4.5-.3.1h-.3l-.2-.3v-.9l.1-.1h.5l.2-.3-.1-.5-.2.1h-.3l-.2-.3v-.3l.2-.5.2-.8v-.4l-.1-.2-1.2-1.3h-.4l-.1-.4-.3-.3-.4.1-.2.2-.3.5-.1.5-.3.1-.3-.2v-1l.4-1.1-.1-1.2-.6-.9-.3-.7v-.4l-.3-.6-.2-.1v-.4l.7-.8.3-2 .4.6.9.2.2.1.4-.2v.4l.5.1.4.3 1.1-.1.8.5h.5l.3.2.1.4h.2l-.8 1.6v.3l.5.7-.4.9v.2l.3.5v.8l.1.2.5.3v.2l-.6 1-.2 1v.5l.1 1-.6.8-.7.6.5.6Z"/>
                                                            <path
                                                                data-ui-href="#" data-ui-size="8" data-ui-tooltip title="Fatih: 8"
                                                                d="m136.6 58.5.3.2.3.5.3.2.2.3.3.2.7.1v.6l-.4.3-.3-.1-1 .1-.4-.1-.5.7h-.4l-.2-.3-.1-1.1.2-.5.3-.4.3-.1.4-.6Z"/>
                                                            <path
                                                                data-ui-href="#" data-ui-size="4" data-ui-tooltip title="Gaziosmanpaşa: 4"
                                                                d="m135.4 57.9-.4-.6-.8-.7-.2-.3.4-.2 1.2-.1-.2.5v.3l.2.3h.3l.2-.1.1.5-.2.3h-.5Z"/>
                                                            <path
                                                                data-ui-href="#" data-ui-size="7" data-ui-tooltip title="Güngören: 7"
                                                                d="m134.7 59.7-.3.7h-.5v-.5l-.3.1-.3-.3.1-.2-.2-.5h.5l.2-.2h.4l.1.3-.1.4.1.1.3.1Z"/>
                                                            <path
                                                                data-ui-href="#" data-ui-size="23" data-ui-tooltip title="Kadıköy: 23"
                                                                d="m143.3 62.1-.5.1-1.3.6-.3-.2-.2.2-.2-.2-.3.1.1-.3h.2v-.5l-.2-.1-.5.2-.2-.7h.2v-.1h-.2l-.1-.3h-.2l.1-.2-.2-.1.1-.2-.1-.1v-.2l.1.1V60l.9-.8h.2l.7.7.4.3h.1l.7.5.7 1.4Z"/>
                                                            <path
                                                                data-ui-href="#" data-ui-size="2" data-ui-tooltip title="Kağıthane: 2"
                                                                d="m137 57.7-.2-.4.1.4-.3.1-.1.2v.3l-.3-.5.7-.6.6-.8-.1-1v-.5l.8.1.4.3h.6l-.1.5-.1.7-.6.1-.4.2-.8.6v.3h-.2Z" transform="translate(-.1)"/>
                                                            <path
                                                                data-ui-href="#" data-ui-size="9" data-ui-tooltip title="Kartal: 9"
                                                                d="m148.8 63.6-.2.3-.3.2-.2 1.1-1 .2-.3 1.1-.5.4-.7-.5-.3-.1-.1.1-.3-.2-.6-1.1-.5-.7.2-.1.5.1 1.3-.4h1v-.3l.3-.8.2-.2.5-.3.3.2h.7v1Z"/>
                                                            <path
                                                                data-ui-href="#" data-ui-size="5" data-ui-tooltip title="Küçükçekmece: 5"
                                                                d="M129.5 61.3v-.1h-.4l-.2-.3-.1-1.2-.1-.3.2-.9-.1-.8 1.1-.1h1.5v1.2l-.2.5-.1.8-.1.2-.2.2-.2.5-1.1.3Z"/>
                                                            <path
                                                                data-ui-href="#" data-ui-size="6" data-ui-tooltip title="Maltepe: 6"
                                                                d="m143.9 64.4-.1-.3-.2-.1-.3-.4h-.3l-.1-.2-.2.1-.3-.3h-.2l-.1-.3h-.3l-.3-.2 1.3-.6.5-.1h.3l.5-.7h1.1l.1-.4.6.1.3.2.7-.1.4.2h.1v.3l.1 1-.2.2-.3.8v.3h-1l-1.3.4-.5-.1-.3.2Z"/>
                                                            <path
                                                                data-ui-href="#" data-ui-size="2" data-ui-tooltip title="Pendik: 2"
                                                                d="m148.8 63.6.4-.1h1l.5-.4.6-.1.2-.8-.5-.1-.2-.3-.2-.6v-.9l.1-.3.6-.8h1.2l.6-.6.1-.7h.1l.2.6.3.3.5-.1.2-.3 1.9.9.6 1.3 1.8-1.8.4-.1.7.2-.2 1.2-.4.7-1.1 1.1-.4.2-.5.1-.1-.7h-1.4l-1.1.8-1.2.8-.7.4h-.4l-.3.6-.4 1.4-.8.9-.1.5h-.4l-.3.2-.1.3-.4.5-.5-.2h-.2v.3h.1v.1l-.2-.1h-.2l-.3-.3-1.3-.5-.4.1-.4-.4.5-.4.3-1.1 1-.2.2-1.1.3-.2.3-.3Z"/>
                                                            <path
                                                                data-ui-href="#" data-ui-size="0" data-ui-tooltip title="Sancaktepe: 0"
                                                                d="M150.7 59.9h-1.1l-.7 1.5v1h-.7l-.3-.2-.5.3-.1-1v-.3h-.1l-.3-.5v-.3l-.4-.6v-.3l.2-.2 1.2-.1.9-.3.2-.3h.4l.3-.2.4-.8.4-.2 1.8.1.9.4-.1.7-.6.6h-1.2l-.6.7Z"/>
                                                            <path
                                                                data-ui-href="#" data-ui-size="4" data-ui-tooltip title="Sarıyer: 4"
                                                                d="m139.6 55 .5-.3v-1.5l-.1-.2h-.2l-.2.3h-.6l-.2-.3-.6-.1v-.2l-.5-.3-.1-.2v-.8l-.3-.5v-.2l.4-.9-.5-.7v-.3l.8-1.6 1.2.3.1.1 1.3-.1v-.2l.2-.2v-.3l.3.2.2-.2.5.1.1.2.1-.2h.2v.3l.3-.4.1.3h.2v.2l.2-.1.1.2.1-.1.1.2v.1l.2-.1.2.2v.1h.2l-.1.2h.3v.3l-.2.2-.2.3.2.4-.2.4h-.2l-.1.2-.4.2-.4.7-.2.1-.2.6-.4.2-.1.3-.4.1-.1.2-.4.2.3.3.4.2.2.4v.1l.6.7-.1.4-.4.3.1.1-.2.5v.3l-.2-.1-.2.5-1.7-1.1Z" transform="translate(-.1)"/>
                                                            <path
                                                                data-ui-href="#" data-ui-size="0" data-ui-tooltip title="Şile: 0"
                                                                d="M154.4 53.9v-.4l-1.3-1.8-.2-.4v-.4l.4-1 .1-.7h.2v.1h.2l.1.1h.3l.5-.1.2.1.5-.2.1.2.5.2h.2l.2.2.8.3.6.2h.4l.5.3.8.2.7.3h.5l1.1.4 1.8.4.6-.1.1-.2h-.1v-.2h.2l.1-.2-.1-.1v.1h-.2l.4-.2.4.2.2-.1.1.3h.3l.1.2 1.1.3.3-.1.3.3.5-.2.1.1.5-.1h.1v.2h.1l.1.2.1-.1.3.1h.3l.3.2.4-.3h.3l.1.1v-.2h.1v.2h.1l.1-.1.3-.1.3.1v.1h.1l.1-.2.4.2v.2l.3-.1.5.2v.1l.3.1.2.2 1.1.3h.2l.1-.1-.1-.1.1-.1h.3l.1.1.7 1.6.1 1.1-.1.4-.2.2-1.1.6-2 .2-1.2.5-1 .2-1.4.7-.9.8-1.7.8-1.5.1-.8-.2-1.5-1-2.8-.3-.7-.2-.4.1-1.8 1.8-.6-1.3-1.9-.9-.4-.2 1.1-2.2.1-.6-.2-.9-.6-.5Z"/>
                                                            <path
                                                                data-ui-href="#" data-ui-size="0" data-ui-tooltip title="Silivri: 0"
                                                                d="m102.6 57.7-1-1.8-.9-1.9-.8-1.2.8-1.9.2-1 .2-.4.4-.4 1.9-.9.4-.5h1.9l.3-.1.9-1.1-.2-.3v-.6l.2-.7.2-.3h1.1l1.2.4h1.8l.4-.2.2-.4h.5l.3.4v.2l-.7.5v.7l.1.2 1.6.1v.3l-.8 1.4.1.5.5 1h.8l.2.2v.3l.2.3.5.6-.1.9-.2.3-.1.5.1.4.3.2.1.5V55l-.1 2.1-.2 1.6-1.9-.7-.4-.1-.1.1-.5-.1-.2-.2-.4-.1-.2.1h-1l-.1-.1-1.2-.2-.9.1-.4-.3-.4-.1v-.3l-.3-.1h-.6l-.4.4-1.3-.2-.7.1-.3.2-1 .1Z"/>
                                                            <path
                                                                data-ui-href="#" data-ui-size="4" data-ui-tooltip title="Şişli: 4"
                                                                d="M139.3 55.3h-.6l-.4-.3-.8-.1.2-1 .6-1 .6.1.2.3h.6l.2-.3h.2l.1.2v1.5l-.5.3-.4.3Zm-2 2.4v-.3l.8-.6.4-.2.6-.1.1-.7.3.2.1.3v.4l-.1.1h-.4l-.2.2-.3 1.5-.2-.3-1.1-.5Z" transform="translate(-.2)"/>
                                                            <path
                                                                data-ui-href="#" data-ui-size="0" data-ui-tooltip title="Sultanbeyli: 0"
                                                                d="M148.8 62.4v-1l.7-1.5h1.1l-.1.3v.9l.2.6.2.3.5.1-.2.8-.6.1-.5.4h-1l-.4.1.1-1.1Z"/>
                                                            <path
                                                                data-ui-href="#" data-ui-size="6" data-ui-tooltip title="Sultangazi: 6"
                                                                d="m134 56.3-.3-.2-.6-.9.1-.3-.1-.3-.5-.7.3-.1.1-.5.3-.5.2-.2.4-.1.3.3.1.4h.4l1.2 1.3.1.2v.4l-.2.8-1.2.1Z"/>
                                                            <path
                                                                data-ui-href="#" data-ui-size="4" data-ui-tooltip title="Tuzla: 4"
                                                                d="m151.2 69.1-.1-.3-.2.1-.3-.2-.3.1-.2-.1.1-.3-.5-.5.4-.5.1-.3.3-.2h.4l.1-.5.8-.9.4-1.4.3-.6h.4l.7-.4 1.2-.8 1.1-.8h1.4l.1.7h-.1l-.5 1.5.2 1.1-.2.4-2.1 1-.9.6-.2.3-.2.8-.4.5Z"/>
                                                            <path
                                                                data-ui-href="#" data-ui-size="1" data-ui-tooltip title="Ümraniye: 1"
                                                                d="m146.9 60.8-.5-.3-1.3-.1-.6-.2-.6-.1-.6-.4-.8-.1-.2-.3v-.6l.1-.4.4-.4v-.4l-.2-.7.3-.1h.5l.6.4h.3l.3.4.1.5.2.1h.3l.8.3.8.9-.2.2v.3l.4.6v.4Z"/>
                                                            <path
                                                                data-ui-href="#" data-ui-size="6" data-ui-tooltip title="Üsküdar: 6"
                                                                d="M141.9 60.3h-.1l-.4-.3-.7-.7h-.2l-.9.8V60l-.1-.3.1-.3 1.8-1.2v-.7l.2-.4-.1-.2.4-.2.1-.5.6.7.2.7v.4l-.4.4-.1.4v.6l.2.3-.4.1-.2.2v.3Z"/>
                                                            <path
                                                                data-ui-href="#" data-ui-size="7" data-ui-tooltip title="Zeytinburnu: 7"
                                                                d="m135.7 61.6-.6.4h-.5l-.2.1-.3-.8.3-1 .3-.7v-.8l.7-.1.2.3h.3l-.3.4-.2.5.1 1.1Z"/>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="ui-col-4">
                                            <div class="ui-card ui-round ui-full-h ui-shadow-lg">
                                                <div class="ui-calendar ui-ease-calendar ui-round" data-ui-src="json/calendar.json" data-ui-date="2019,6"></div>
                                            </div>
                                        </div>
                                        <div class="ui-col-6">
                                            <div class="ui-card ui-full-h ui-round ui-shadow-lg">
                                                <div class="ui-card-side ui-p-15 ui-border-b">
                                                    <h4 class="ui-h4">İş Yoğunluk Grafiği</h4>
                                                </div>
                                                <div class="ui-card-side ui-p-15">
                                                    <div class="ui-line-chart-holder ui-ease-line-chart" data-ui-size="10,25" data-ui-x="Mon,Tue,Wed,Thu,Fri,Sat,Sun">
                                                        <ul class="ui-line-chart" data-ui-name="1st">
                                                            <li data-ui-y="-34" data-ui-url="#1"></li>
                                                            <li data-ui-y="-56" data-ui-url="#2"></li>
                                                            <li data-ui-y="-112" data-ui-url="#3"></li>
                                                            <li data-ui-y="-140" data-ui-url="#4"></li>
                                                            <li data-ui-y="-28" data-ui-url="#5"></li>
                                                            <li data-ui-y="-20" data-ui-url="#6"></li>
                                                            <li data-ui-y="-28" data-ui-url="#7"></li>
                                                        </ul>
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
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <!-- kunye -->
                            <div class="ui-col-kunye ui-p-5 ui-visible-lg">
                                <div class="ui-card ui-round ui-shadow-lg">

                                    <div class="kunye ui-sidebar-add-r">

                                        <div class="cover bg-sd"></div> <!-- Uzman: bg-su, Denetmen: bg-sd, Sekreter: bg-ss -->

                                        <!--
                                            Resim var:
                                        -->
                                        <img class="ui-avatar ui-avatar-lg" src="img/profile-image2.jpg" alt="">
                                        <!--
                                            Resim yok:
                                            Uzman: bg-su, Denetmen: bg-sd, Sekreter: bg-ss

                                        <span class="ui-avatar-lg bg-sd">
                                            <span>KYD</span>
                                        </span>
                                        -->

                                        <div class="ui-align-c">
                                            <div class="ui-m-5-b">Key Yazılım Denetmen</div>
                                            <div class="ui-color-black-50 ui-font-11 ui-m-15-b">
                                                destek@keyyazilim.com<br>
                                                İSTANBUL, BEYOĞLU
                                            </div>

                                            <div class="ui-m-20-b">

                                                <span class="info">Ankara Bölge</span> <!-- bölge -->
                                                <span class="info">Şirket</span> <!-- tipi -->
                                                <span class="info bg-sd">Denetmen</span> <!-- birimi -->

                                                <span class="ui-sp-2"></span>

                                                <!-- SPK lisansı yok
                                                <span class="info">SPK: Lisansı Yok</span>
                                                -->
                                                <!-- SPK lisansı var -->
                                                <span class="info bg-featured">SPK: Aktif Lisans</span>

                                                <!-- mobil imza yok -->
                                                <span class="info ">Mobil İmza: Yok</span>
                                                <!-- mobil imza var
                                                <span class="info bg-featured">Mobil İmza: Turkcell</b></span>
                                                -->

                                            </div>
                                        </div>

                                        <b class="title">
                                            Son Eklenen İşlerim
                                            <span class="info">6</span>
                                        </b>
                                        <!--no content
                                        <span class="no-content-sm">
                                            <svg class="ui-icon"><use href="../dist/icons.svg#briefcase"></use></svg>
                                            Son eklenen iş kaydı yok
                                        </span>
                                        -->
                                        <div class="ui-listgroup">
                                            <ul class="ui-listgroup-has-avatar-xs ui-listgroup-has-icon-xs ui-scroll-v ui-ease-listgroup">
                                                <li>
                                                    <a href="#">
                                                        <svg class="ui-listgroup-icon ui-icon"><use href="../dist/icons.svg#angle-right"></use></svg>
                                                        <span class="ui-avatar-xs">
                                                            <span>25 saat</span> <!-- kalan süre -->
                                                        </span>
                                                        <b>KEY-312557</b>
                                                        Key Uzman Kullanıcısı
                                                        <em>TAKBİS Alınacak, 1 Tapu | 3/3</em>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <svg class="ui-listgroup-icon ui-icon"><use href="../dist/icons.svg#angle-right"></use></svg>
                                                        <span class="ui-avatar-xs">
                                                            <span>11 saat</span> <!-- kalan süre -->
                                                        </span>
                                                        <b>KEY-312557</b>
                                                        Key Uzman Kullanıcısı
                                                        <em>TAKBİS Alınacak, 1 Tapu | 54234/22 AVM</em>
                                                    </a>
                                                <li>
                                                    <a href="#">
                                                        <svg class="ui-listgroup-icon ui-icon"><use href="../dist/icons.svg#angle-right"></use></svg>
                                                        <span class="ui-avatar-xs">
                                                            <span>25 saat</span> <!-- kalan süre -->
                                                        </span>
                                                        <b>KEY-312557</b>
                                                        Key Uzman Kullanıcısı
                                                        <em>TAKBİS Alınacak, 1 Tapu | 3/3</em>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <svg class="ui-listgroup-icon ui-icon"><use href="../dist/icons.svg#angle-right"></use></svg>
                                                        <span class="ui-avatar-xs">
                                                            <span>11 saat</span> <!-- kalan süre -->
                                                        </span>
                                                        <b>KEY-312557</b>
                                                        Key Uzman Kullanıcısı
                                                        <em>TAKBİS Alınacak, 1 Tapu | 54234/22 AVM</em>
                                                    </a>
                                                <li>
                                                    <a href="#">
                                                        <svg class="ui-listgroup-icon ui-icon"><use href="../dist/icons.svg#angle-right"></use></svg>
                                                        <span class="ui-avatar-xs">
                                                            <span>25 saat</span> <!-- kalan süre -->
                                                        </span>
                                                        <b>KEY-312557</b>
                                                        Key Uzman Kullanıcısı
                                                        <em>TAKBİS Alınacak, 1 Tapu | 3/3</em>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <svg class="ui-listgroup-icon ui-icon"><use href="../dist/icons.svg#angle-right"></use></svg>
                                                        <span class="ui-avatar-xs">
                                                            <span>11 saat</span> <!-- kalan süre -->
                                                        </span>
                                                        <b>KEY-312557</b>
                                                        Key Uzman Kullanıcısı
                                                        <em>TAKBİS Alınacak, 1 Tapu | 54234/22 AVM</em>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                        <b class="title">Çevrimiçi Kullanıcılar</b>
                                        <div class="ui-align-c ui-p-10">
                                            <div class="ui-avatar-holder">
                                                <img class="ui-avatar-sm ui-border-dual ui-circle" src="img/profile-image3.jpg" alt="">
                                                <span class="ui-avatar-sm ui-border-dual ui-circle bg-sd">
                                                    <span>KYD</span>
                                                </span>
                                                <img class="ui-avatar-sm ui-border-dual ui-circle" src="img/profile-image.jpg" alt="">
                                                <a class="ui-btn ui-btn-square ui-circle ui-ease-btn" href="#">+3</a>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>

                            <!-- toggle kunye -->
                            <button title="Künye" class="ui-sidebar-show-r ui-btn ui-btn-square ui-circle ui-theme-base ui-fill-dark-100 ui-ease-btn ui-hidden-lg">
                                <svg class="ui-icon"><use href="../dist/icons.svg#bars-right"></use></svg>
                            </button>

                        </div>

                        </div>
                </div>

                <!-- page bottom -->
                <div class="page-bottom">
                    <div class="ui-row ui-no-fluid ui-row-gap-lg">
                        <div class="ui-col-12 ui-sm-align-c">
                            <span class="ui-float-l ui-no-float-sm ui-m-5-r">0.3487sn</span>
                            <span class="ui-float-r ui-no-float-sm ui-m-5-l">v4.2.1</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <!-- right panel -->
        <div class="ui-col-panel-r">
            <div class="panel-r ui-p-5 ui-theme-sub">

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

                <!-- menuler -->
                <div class="ui-tab-holder ui-ease-tab ui-ease-1st-btn" data-ui-classes="ui-btn-visible">

                    <button title="Bildirimler" data-ui-tooltip="l" data-ui-only="desktop" class="ui-tab ui-tab-toggle ui-btn ui-btn-ghost ui-btn-square">
                        <span class="ui-notifier"> <!-- bildirim varsa: ui-notifier -->
                            <svg class="ui-icon ui-no-opacity"><use href="../dist/icons.svg#bell-on"></use></svg>
                        </span>
                    </button>
                    <div class="ui-tab-content">
                        <h4>
                            <span class="info bg-featured">2 Yeni</span>
                            Bildirimler
                        </h4>

                        <!-- list loader -->
                        <div class="list-loader ui-animate-progress"></div>

                        <div class="ui-scroll-v">

                            <!--no content -->
                            <div class="no-content">
                                <svg class="ui-icon"><use href="../dist/icons.svg#bell-on"></use></svg>
                                Yeni bildirim yok
                            </div>

                            <div class="ui-listgroup">
                                <ul class="ui-listgroup-has-avatar-xs ui-ease-listgroup">
                                    <li class="new"> <!-- yeni: new -->
                                        <a href="#">
                                            <span class="ui-avatar-xs bg-ss"> <!-- bg-su, bg-sd, bg-ss, bg-bd -->
                                                <span>SS</span> <!-- Kullnıcı Tipi: SS, SU, SD, BD, BG -->
                                            </span>
                                            <b>KEY-312557</b>
                                            <em>14.03.2022 09:50</em>
                                            <p>Başvuru oluşturuldu.</p>
                                        </a>
                                    </li>
                                    <li class="new"> <!-- yeni: new -->
                                        <a href="#">
                                            <span class="ui-avatar-xs bg-su"> <!-- bg-su, bg-sd, bg-ss, bg-bd -->
                                                <span>SU</span> <!-- Kullnıcı Tipi: SS, SU, SD, BD, BG -->
                                            </span>
                                            <b>KEY-312557</b>
                                            <em>14.03.2022 09:50</em>
                                            <p>Uzmana gönderildi.</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span class="ui-avatar-xs bg-sd"> <!-- bg-su, bg-sd, bg-ss, bg-bd -->
                                                <span>SD</span> <!-- Kullnıcı Tipi: SS, SU, SD, BD, BG -->
                                            </span>
                                            <b>KEY-312557</b>
                                            <em>14.03.2022 09:50</em>
                                            <p>Denetmene gönderildi.</p>
                                            <span class="info">Geçen süre: 4 sa 59 dk</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span class="ui-avatar-xs bg-bd"> <!-- bg-su, bg-sd, bg-ss, bg-bd -->
                                                <span>BD</span> <!-- Kullnıcı Tipi: SS, SU, SD, BD, BG -->
                                            </span>
                                            <b>KEY-312557</b>
                                            <em>14.03.2022 09:50</em>
                                            <p>Birim değiştirildi.</p>
                                            <span class="info">Geçen süre: 4 sa 59 dk</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span class="ui-avatar-xs bg-bd"> <!-- bg-su, bg-sd, bg-ss, bg-bd -->
                                                <span>BG</span> <!-- Kullnıcı Tipi: SS, SU, SD, BD, BG -->
                                            </span>
                                            <b>KEY-312557</b>
                                            <em>14.03.2022 09:50</em>
                                            <p>Rapor Genel Müd. gönderildi.</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span class="ui-avatar-xs bg-ss"> <!-- bg-su, bg-sd, bg-ss, bg-bd -->
                                                <span>SS</span> <!-- Kullnıcı Tipi: SS, SU, SD, BD, BG -->
                                            </span>
                                            <b>KEY-312557</b>
                                            <em>14.03.2022 09:50</em>
                                            <p>Başvuru oluşturuldu.</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span class="ui-avatar-xs bg-su"> <!-- bg-su, bg-sd, bg-ss, bg-bd -->
                                                <span>SU</span> <!-- Kullnıcı Tipi: SS, SU, SD, BD, BG -->
                                            </span>
                                            <b>KEY-312557</b>
                                            <em>14.03.2022 09:50</em>
                                            <p>Uzmana gönderildi.</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span class="ui-avatar-xs bg-sd"> <!-- bg-su, bg-sd, bg-ss, bg-bd -->
                                                <span>SD</span> <!-- Kullnıcı Tipi: SS, SU, SD, BD, BG -->
                                            </span>
                                            <b>KEY-312557</b>
                                            <em>14.03.2022 09:50</em>
                                            <p>Denetmene gönderildi.</p>
                                            <span class="info">Geçen süre: 4 sa 59 dk</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span class="ui-avatar-xs bg-bd"> <!-- bg-su, bg-sd, bg-ss, bg-bd -->
                                                <span>BD</span> <!-- Kullnıcı Tipi: SS, SU, SD, BD, BG -->
                                            </span>
                                            <b>KEY-312557</b>
                                            <em>14.03.2022 09:50</em>
                                            <p>Birim değiştirildi.</p>
                                            <span class="info">Geçen süre: 4 sa 59 dk</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span class="ui-avatar-xs bg-bd"> <!-- bg-su, bg-sd, bg-ss, bg-bd -->
                                                <span>BG</span> <!-- Kullnıcı Tipi: SS, SU, SD, BD, BG -->
                                            </span>
                                            <b>KEY-312557</b>
                                            <em>14.03.2022 09:50</em>
                                            <p>Rapor Genel Müd. gönderildi.</p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <button title="Notlar" data-ui-tooltip="l" data-ui-only="desktop" class="ui-tab ui-tab-toggle ui-btn ui-btn-ghost ui-btn-square">
                        <span class="ui-notifier"> <!-- bildirim varsa: ui-notifier -->
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
                        <div class="list-loader ui-animate-progress"></div>

                        <div class="ui-scroll-v">

                            <!--no content -->
                            <div class="no-content">
                                <svg class="ui-icon"><use href="../dist/icons.svg#pencil-write"></use></svg>
                                Yeni not yok
                            </div>

                            <div class="ui-listgroup">
                                <ul class="ui-listgroup-has-avatar-xs ui-ease-listgroup">
                                    <li class="new"> <!-- yeni: new -->
                                        <a href="#">
                                            <img class="ui-avatar-xs border-su" src="img/profile-image2.jpg" alt=""> <!-- border-su, border-sd, border-ss, border-bd -->
                                            <b>Key Uzman Kullanıcısı</b>
                                            KEY-312557
                                            <em>3 sa 56 dk önce</em>
                                        </a>
                                        <p>UZMAN İŞİ ALDI<br>Key Yazılım Uzman Kullanıcısı İşi Aldı</p>
                                        <span class="mark ui-ease-bg" onclick="ui.alerts.message({ msg: 'Not okundu olarak işaretlendi!' });">Okundu İşaretle</span>
                                    </li>
                                    <li class="new"> <!-- yeni: new -->
                                        <a href="#">
                                            <span class="ui-avatar-xs bg-su"> <!-- bg-su, bg-sd, bg-ss, bg-bd -->
                                                <span>KU</span> <!-- Adın baş harfleri -->
                                            </span>
                                            <b>Key Uzman Kullanıcısı</b>
                                            KEY-312557
                                            <em>3 sa 56 dk önce</em>
                                        </a>
                                        <p>UZMAN İŞİ ALDI<br>Key Uzman Kullanıcısı İşi Aldı</p>
                                        <span class="mark ui-ease-bg" onclick="ui.alerts.message({ msg: 'Not okundu olarak işaretlendi!' });">Okundu İşaretle</span>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img class="ui-avatar-xs border-sd" src="img/profile-image3.jpg" alt=""> <!-- border-su, border-sd, border-ss, border-bd -->
                                            <b>Key Denetmen Kullanıcısı</b>
                                            KEY-312557
                                            <em>3 sa 56 dk önce</em>
                                        </a>
                                        <p>DENETMENE GÖNDERİLDİ<br>Key Denetmen Kullanıcısı İşi Aldı</p>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span class="ui-avatar-xs bg-sd"> <!-- bg-su, bg-sd, bg-ss, bg-bd -->
                                                <span>KD</span> <!-- Adın baş harfleri -->
                                            </span>
                                            <b>Key Denetmen Kullanıcısı</b>
                                            KEY-312557
                                            <em>3 sa 56 dk önce</em>
                                        </a>
                                        <p>DENETMENE GÖNDERİLDİ<br>Key Denetmen Kullanıcısı İşi Aldı</p>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img class="ui-avatar-xs border-ss" src="img/profile-image.jpg" alt=""> <!-- border-su, border-sd, border-ss, border-bd -->
                                            <b>Key Sekreterya Kullanıcısı</b>
                                            KEY-312557
                                            <em>3 sa 56 dk önce</em>
                                        </a>
                                        <p>GENEL NOTLAR<br>Başvuru için gerekli belgeler temin edilmiştir.</p>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span class="ui-avatar-xs bg-ss"> <!-- bg-su, bg-sd, bg-ss, bg-bd -->
                                                <span>KS</span> <!-- Adın baş harfleri -->
                                            </span>
                                            <b>Key Sekreterya Kullanıcısı</b>
                                            KEY-312557
                                            <em>3 sa 56 dk önce</em>
                                        </a>
                                        <p>GENEL NOTLAR<br>Başvuru için gerekli belgeler temin edilmiştir.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <button title="Bekleyen İşler" data-ui-tooltip="l" data-ui-only="desktop" class="ui-tab ui-tab-toggle ui-btn ui-btn-ghost ui-btn-square">
                        <span class="ui-notifier"> <!-- bildirim varsa: ui-notifier -->
                            <svg class="ui-icon ui-no-opacity"><use href="../dist/icons.svg#hourglass-start"></use></svg>
                        </span>
                    </button>
                    <div class="ui-tab-content">
                        <h4>
                            <span class="info bg-featured">8 Yeni</span>
                            Bekleyen İşler
                        </h4>

                        <!-- list loader -->
                        <div class="list-loader ui-animate-progress"></div>

                        <div class="ui-scroll-v">

                            <!--no content -->
                            <div class="no-content">
                                <svg class="ui-icon"><use href="../dist/icons.svg#hourglass-start"></use></svg>
                                Bekleyen işler yok
                            </div>

                            <div class="ui-listgroup">
                                <ul class="ui-listgroup-has-avatar-xs ui-ease-listgroup">
                                    <li class="new"> <!-- yeni: new -->
                                        <a href="#">
                                            <span class="ui-avatar-xs bg-8"> <!-- bg-8 - bg-1 -->
                                                <span><b>18</b> Gün</span> <!-- Kalan gün sayısı -->
                                            </span>
                                            <b>KEY-312557</b>
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
                                    <li class="new"> <!-- yeni: new -->
                                        <a href="#">
                                            <span class="ui-avatar-xs bg-7"> <!-- bg-8 - bg-1 -->
                                                <span><b>16</b> Gün</span> <!-- Kalan gün sayısı -->
                                            </span>
                                            <b>KEY-312557</b>
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
                                    <li class="new"> <!-- yeni: new -->
                                        <a href="#">
                                            <span class="ui-avatar-xs bg-6"> <!-- bg-8 - bg-1 -->
                                                <span><b>13</b> Gün</span> <!-- Kalan gün sayısı -->
                                            </span>
                                            <b>KEY-312557</b>
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
                                    <li class="new"> <!-- yeni: new -->
                                        <a href="#">
                                            <span class="ui-avatar-xs bg-5"> <!-- bg-8 - bg-1 -->
                                                <span><b>10</b> Gün</span> <!-- Kalan gün sayısı -->
                                            </span>
                                            <b>KEY-312557</b>
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
                                    <li class="new"> <!-- yeni: new -->
                                        <a href="#">
                                            <span class="ui-avatar-xs bg-4"> <!-- bg-8 - bg-1 -->
                                                <span><b>8</b> Gün</span> <!-- Kalan gün sayısı -->
                                            </span>
                                            <b>KEY-312557</b>
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
                                    <li class="new"> <!-- yeni: new -->
                                        <a href="#">
                                            <span class="ui-avatar-xs bg-3"> <!-- bg-8 - bg-1 -->
                                                <span><b>6</b> Gün</span> <!-- Kalan gün sayısı -->
                                            </span>
                                            <b>KEY-312557</b>
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
                                    <li class="new"> <!-- yeni: new -->
                                        <a href="#">
                                            <span class="ui-avatar-xs bg-2"> <!-- bg-8 - bg-1 -->
                                                <span><b>4</b> Gün</span> <!-- Kalan gün sayısı -->
                                            </span>
                                            <b>KEY-312557</b>
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
                                    <li class="new"> <!-- yeni: new -->
                                        <a href="#">
                                            <span class="ui-avatar-xs bg-1"> <!-- bg-8 - bg-1 -->
                                                <span><b>1</b> Gün</span> <!-- Kalan gün sayısı -->
                                            </span>
                                            <b>KEY-312557</b>
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
                        <span class="ui-notifier"> <!-- bildirim varsa: ui-notifier -->
                            <svg class="ui-icon ui-no-opacity"><use href="../dist/icons.svg#hourglass-end"></use></svg>
                        </span>
                    </button>
                    <div class="ui-tab-content">
                        <h4>
                            <span class="info bg-featured">4 Yeni</span>
                            Gönderilcek İşler
                        </h4>

                        <!-- list loader -->
                        <div class="list-loader ui-animate-progress"></div>

                        <div class="ui-scroll-v">

                            <!--no content -->
                            <div class="no-content">
                                <svg class="ui-icon"><use href="../dist/icons.svg#hourglass-start"></use></svg>
                                Gönderilcek işler yok
                            </div>

                            <div class="ui-listgroup">
                                <ul class="ui-listgroup-has-avatar-xs ui-ease-listgroup">
                                    <li class="new"> <!-- yeni: new -->
                                        <a href="#">
                                            <span class="ui-avatar-xs bg-1">
                                                <span><b>1</b> Gün</span> <!-- Kalan/Geçen gün sayısı -->
                                            </span>
                                            <b>KEY-312557</b>
                                            <em>14.03.2022 09:50</em>
                                            <span class="info bg-acil">Acil</span>
                                        </a>
                                    </li>
                                    <li class="new"> <!-- yeni: new -->
                                        <a href="#">
                                            <span class="ui-avatar-xs bg-1">
                                                <span><b>0</b> Gün</span> <!-- Kalan/Geçen gün sayısı -->
                                            </span>
                                            <b>KEY-312557</b>
                                            <em>14.03.2022 09:50</em>
                                            <span class="info bg-acil">Acil</span>
                                            <span class="info bg-vip">VIP</span>
                                        </a>
                                    </li>
                                    <li class="new"> <!-- yeni: new -->
                                        <a href="#">
                                            <span class="ui-avatar-xs bg-1">
                                                <span><b>-1</b> Gün</span> <!-- Kalan/Geçen gün sayısı -->
                                            </span>
                                            <b>KEY-312557</b>
                                            <em>14.03.2022 09:50</em>
                                            <span class="info bg-revize">Revize</span>
                                        </a>
                                    </li>
                                    <li class="new"> <!-- yeni: new -->
                                        <a href="#">
                                            <span class="ui-avatar-xs bg-1">
                                                <span><b>-2</b> Gün</span> <!-- Kalan/Geçen gün sayısı -->
                                            </span>
                                            <b>KEY-312557</b>
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
                        <div class="list-loader ui-animate-progress"></div>

                        <div class="ui-scroll-v">

                            <div class="ui-listgroup">
                                <b class="title">
                                    <a title="Yeni Ekle" class="edit ui-ease-bg" href="#">
                                        <svg class="ui-icon"><use href="../dist/icons.svg#plus"></use></svg>
                                    </a>
                                    Başvuru Bul
                                </b>
                                <ul class="ui-ease-listgroup">
                                    <li>
                                        KEY TÜM İŞLER
                                        <span class="ui-ease-1st-bg">
                                            <a class="edit ui-listgroup-url" href="#">Düzenle</a>
                                            <span class="remove" onclick="ui.alerts.dialog({ msg: 'KEY TÜM İŞLER adlı hızlı arama favori listesinden kaldırılacaktır.', success: 'Kaldır', error: 'Vazgeç', callback: function (v) { if (v === 'success') ui.alerts.message({ msg: 'Hızlı arama kaldırıldı!' }); } });">Kaldır</span>
                                            <a class="mark ui-listgroup-url" href="#">Hızlı Arama Yap</a>
                                        </span>
                                    </li>
                                </ul>
                                <b class="title">
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
                                <b class="title">
                                    <a title="Yeni Ekle" class="edit ui-ease-bg" href="#">
                                        <svg class="ui-icon"><use href="../dist/icons.svg#plus"></use></svg>
                                    </a>
                                    Banka / Şirket
                                </b>
                                <span class="no-content-sm"> <!--no content -->
                                    <svg class="ui-icon"><use href="../dist/icons.svg#star"></use></svg>
                                    Hızlı arama kaydı yok
                                </span>
                                <b class="title">
                                    <a title="Yeni Ekle" class="edit ui-ease-bg" href="#">
                                        <svg class="ui-icon"><use href="../dist/icons.svg#plus"></use></svg>
                                    </a>
                                    Çözüm Ortağı Mutabakat Listesi
                                </b>
                                <span class="no-content-sm"> <!--no content -->
                                    <svg class="ui-icon"><use href="../dist/icons.svg#star"></use></svg>
                                    Hızlı arama kaydı yok
                                </span>
                                <b class="title">
                                    <a title="Yeni Ekle" class="edit ui-ease-bg" href="#">
                                        <svg class="ui-icon"><use href="../dist/icons.svg#plus"></use></svg>
                                    </a>
                                    Harita Yoğunluk
                                </b>
                                <span class="no-content-sm"> <!--no content -->
                                    <svg class="ui-icon"><use href="../dist/icons.svg#star"></use></svg>
                                    Hızlı arama kaydı yok
                                </span>
                                <b class="title">
                                    <a title="Yeni Ekle" class="edit ui-ease-bg" href="#">
                                        <svg class="ui-icon"><use href="../dist/icons.svg#plus"></use></svg>
                                    </a>
                                    Yıllık Ciro Karşılaştırması
                                </b>
                                <span class="no-content-sm"> <!--no content -->
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
                        <div class="list-loader ui-animate-progress"></div>

                        <div class="ui-scroll-v">

                            <!--no content -->
                            <div class="no-content">
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
                                            <b>KEY-312557</b>
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
                                            <b>KEY-312557</b>
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
                                            <b>KEY-312557</b>
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
                                            <b>KEY-312557</b>
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

                    <!-- project logo -->
                    <a class="ui-btn ui-btn-ghost ui-btn-square ui-icons-no-opacity ui-ease-btn" title="INVEX" href="https://www.invex.com.tr" target="_blank">
                        <svg class="ui-icon">
                            <defs>
                                <linearGradient id="marka-bg" x1="0%" y1="0%" x2="100%" y2="0%" gradientTransform="rotate(120)">
                                    <stop offset="0%" style="stop-color: #00d2ee;" />
                                    <stop offset="35%" style="stop-color: #0b81ff;" />
                                    <stop offset="65%" style="stop-color: #00d2ee;" />
                                    <stop offset="100%" style="stop-color: #0b81ff;" />
                                </linearGradient>
                            </defs>
                            <use href="../dist/icons.svg#apple" fill="url(#marka-bg)"/>
                        </svg>
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