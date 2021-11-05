<main class="ui-container ui-no-gutter">
    <div class="ui-fixed ui-padding-30-v">

        <div class="ui-image-uploader round shadow-lg ui-ease-image-uploader">
            <form action="xhr/image-uploader.php" method="post" enctype="multipart/form-data"> <!-- error testing: image-uploader-error.php-->

                <div class="ui-padding-10-h ui-border-b ui-border-light">
                    <div class="ui-row sm-align-c ui-sm-fluid">
                        <div class="ui-col-6">
                            <h3 class="ui-margin-10-v ui-sm-no-margin">Image Uploader</h3>
                        </div>
                        <div class="ui-col-6 align-r ui-sm-no-padding-t form-lg">

                            <div class="file ui-no-border inline-block round ui-ease-form">
                                <input class="bg-white cursor-pointer" type="file" name="images[]" multiple>
                                <span class="ui-btn ui-btn-square ui-theme-green ui-fill-dark-100 ui-ease-btn">
                                    <svg class="ui-icon no-opacity"><use href="#plus"/></svg>
                                </span>
                            </div>

                            <button title="Send Images" type="submit" name="send" class="ui-btn ui-btn-square round ui-theme-base ui-fill-dark-100 ui-ease-btn">
                                <svg class="ui-icon"><use href="#send"/></svg>
                            </button>

                        </div>
                    </div>
                </div>

                <div class="ui-uploader-list">
                    <svg class="ui-icon ui-icon-xxl"><use href="#images-plus"/></svg>
                    <ul>
                        <li data-ui-img="img/house_01.jpg" data-ui-id="1" data-ui-tag="Exterior"></li>
                        <li data-ui-img="img/house_02.jpg" data-ui-id="2" data-ui-tag=""></li>
                        <li data-ui-img="img/house_03.jpg" data-ui-id="3" data-ui-tag="Garden"></li>
                        <li data-ui-img="img/house_04.jpg" data-ui-id="4" data-ui-tag="Exterior"></li>
                    </ul>
                </div>

            </form>
        </div>

    </div>
</main>