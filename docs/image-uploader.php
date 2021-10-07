<main class="container no-gutter">
    <div class="fixed padding-30-v">

        <div class="image-uploader round shadow-lg ease-image-uploader">
            <form action="xhr/image-uploader.php" method="post" enctype="multipart/form-data"> <!-- error testing: image-uploader-error.php-->

                <div class="padding-10-h border-b border-light">
                    <div class="row sm-align-c sm-fluid">
                        <div class="col-6">
                            <h4 class="margin-10-v sm-no-margin">Image Uploader</h4>
                        </div>
                        <div class="col-6 align-r sm-no-padding-t form-lg">

                            <div class="file no-border inline-block round ease-form">
                                <input class="bg-white cursor-pointer" type="file" name="images[]" multiple>
                                <span class="btn btn-square theme-green ui-fill-dark-100 ease-btn">
                                    <svg class="icon no-opacity"><use href="#plus"/></svg>
                                </span>
                            </div>

                            <button type="submit" name="send" class="btn btn-square round theme-base ui-fill-dark-100 ease-btn">
                                <svg class="icon"><use href="#save"/></svg>
                            </button>

                        </div>
                    </div>
                </div>

                <div class="uploader-list">
                    <svg class="icon icon-xxl"><use href="#images-plus"/></svg>
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