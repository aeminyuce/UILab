<main class="ui-container ui-no-gutter">
    <div class="ui-fixed ui-p-30-v">

        <div class="ui-image-uploader ui-round ui-shadow-lg ui-ease-image-uploader">
            <form action="xhr/image-uploader.php" method="post" enctype="multipart/form-data"> <!-- error testing: image-uploader-error.php-->

                <div class="ui-p-10-h ui-border-b ui-border-light">
                    <div class="ui-row ui-sm-align-c ui-sm-fluid">
                        <div class="ui-col-6">
                            <h3 class="ui-h3 ui-m-10-v ui-sm-no-m">Image Uploader</h3>
                        </div>
                        <div class="ui-col-6 ui-align-r ui-sm-no-p-t ui-form-lg">

                            <div class="ui-file ui-no-border ui-inline-block ui-round ui-ease-form">
                                <input class="ui-bg-white ui-cursor-pointer" type="file" name="images[]" multiple>
                                <span class="ui-btn ui-btn-square ui-theme-green ui-fill-dark-100 ui-ease-btn">
                                    <svg class="ui-icon ui-no-opacity"><use href="#plus"/></svg>
                                </span>
                            </div>

                            <button title="Send Images" type="submit" name="send" class="ui-btn ui-btn-square ui-round ui-theme-base ui-fill-dark-100 ui-ease-btn">
                                <svg class="ui-icon"><use href="#send"/></svg>
                            </button>

                        </div>
                    </div>
                </div>

                <div class="ui-uploader-list">
                    <svg class="ui-icon ui-icon-xxl"><use href="#images-plus"/></svg>
                    <ul>

                        <!-- image ratio: 16:9-->
                        <li data-ui-photo="img/house_01.jpg" data-ui-id="1" data-ui-tag="Exterior"></li>
                        <li data-ui-photo="img/house_02.jpg" data-ui-id="2" data-ui-tag=""></li>
                        <li data-ui-photo="img/house_03.jpg" data-ui-id="3" data-ui-tag="Garden"></li>
                        <li data-ui-photo="img/house_04.jpg" data-ui-id="4" data-ui-tag="Exterior"></li>
                        <li data-ui-photo="img/house_05.jpg" data-ui-id="5" data-ui-tag="Exterior"></li>

                        <!-- image ratio: 4:3-->
                        <li data-ui-photo="img/image_01.jpg" data-ui-id="1" data-ui-tag="Coffee"></li>
                        <li data-ui-photo="img/image_02.jpg" data-ui-id="2" data-ui-tag="Museum"></li>
                        <li data-ui-photo="img/image_03.jpg" data-ui-id="3" data-ui-tag="Clouds"></li>
                        <li data-ui-photo="img/image_04.jpg" data-ui-id="4" data-ui-tag="Forest"></li>
                        <li data-ui-photo="img/image_05.jpg" data-ui-id="5" data-ui-tag="Classic Cars"></li>
                        <li data-ui-photo="img/image_06.jpg" data-ui-id="6" data-ui-tag="Sport"></li>
                        <li data-ui-photo="img/image_07.jpg" data-ui-id="7" data-ui-tag="Interior"></li>
                        <li data-ui-photo="img/image_08.jpg" data-ui-id="8" data-ui-tag="Historical"></li>
                        <li data-ui-photo="img/image_09.jpg" data-ui-id="9" data-ui-tag="California"></li>
                        <li data-ui-photo="img/image_10.jpg" data-ui-id="10" data-ui-tag="Alaska"></li>

                    </ul>
                </div>

            </form>
        </div>

    </div>
</main>