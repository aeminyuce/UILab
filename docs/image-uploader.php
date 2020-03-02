<main class="container no-gutter">
    <div class="fixed padding-30-v">

        <div class="image-uploader icons-no-opacity round shadow-lg ease-image-uploader">
            <form action="ajax/image-uploader.php" method="post" enctype="multipart/form-data"> <!-- error testing: image-uploader-error.php-->

                <div class="uploader-panel form-lg theme-default2">
                    <h4>Image Uploader</h4>
                    <div class="file no-border round ui-dark hover ease-form">
                        <input type="file" name="images[]" multiple>
                        <span class="btn btn-square ease-btn">
                            <i class="icon icon-plus"></i>
                        </span>
                    </div>
                </div>

                <div class="uploader-tools theme-default2">
                    <div class="right ease-1st-btn">
                        <div class="dropdown menu-l ease-dropdown">
                            <button type="button" title="Tags" class="btn btn-square round">
                                <i class="icon icon-sm icon-tag"></i>
                            </button>
                            <ul class="content round shadow-lg">
                                <li>Interior</li>
                                <li>Exterior</li>
                                <li>Garden</li>
                                <li>Project</li>
                                <li>Not Defined</li>
                            </ul>
                        </div>
                        <button type="button" title="Check" class="uploader-check btn btn-square round">
                            <i class="icon icon-sm icon-check-square"></i>
                        </button>
                        <button type="button" title="Remove" class="uploader-remove btn btn-square round">
                            <i class="icon icon-sm icon-trash"></i>
                        </button>
                        <button type="button" title="Sort" class="uploader-sort btn btn-square round">
                            <i class="icon icon-sm icon-move"></i>
                        </button>
                        <button type="submit" name="send" class="uploader-upload btn margin-5-l round theme-green ui-dark">
                            <span class="hidden-xs margin-2-r">Upload</span>
                            <i class="icon icon-cloud-upload"></i>
                        </button>
                    </div>
                </div>

                <div class="uploader-list">
                    <i class="icon icon-xxl icon-images-plus"></i>
                    <ul>
                        <li data-img="img/house_01.jpg" data-id="1" data-tag="Exterior"></li>
                        <li data-img="img/house_02.jpg" data-id="2" data-tag=""></li>
                        <li data-img="img/house_03.jpg" data-id="3" data-tag="Garden"></li>
                        <li data-img="img/house_04.jpg" data-id="4" data-tag="Exterior"></li>
                    </ul>
                </div>

            </form>
        </div>

    </div>
</main>