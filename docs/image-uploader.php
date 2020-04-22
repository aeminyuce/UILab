<main class="container no-gutter">
    <div class="fixed padding-30-v">

        <div class="image-uploader icons-no-opacity round shadow-lg ease-image-uploader">
            <form action="ajax/image-uploader.php" method="post" enctype="multipart/form-data"> <!-- error testing: image-uploader-error.php-->

                <div class="uploader-panel form-lg theme-default2">
                    <h4>Image Uploader</h4>
                    <div class="file no-border round ui-dark hover ease-form">
                        <input type="file" name="images[]" multiple>
                        <span class="btn btn-square ease-btn">
                            <svg class="icon"><use href="#plus"></use></svg>
                        </span>
                    </div>
                </div>

                <div class="uploader-tools align-r ease-1st-btn theme-default2">
                    <div class="dropdown menu-l ease-dropdown">
                        <button type="button" title="Tags" class="btn btn-square round">
                            <svg class="icon"><use href="#tag"></use></svg>
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
                        <svg class="icon"><use href="#check-square"></use></svg>
                    </button>
                    <button type="button" title="Remove" class="uploader-remove btn btn-square round">
                        <svg class="icon"><use href="#trash"></use></svg>
                    </button>
                    <button type="button" title="Sort" class="uploader-sort btn btn-square round">
                        <svg class="icon"><use href="#move"></use></svg>
                    </button>
                    <button type="submit" name="send" class="uploader-upload btn margin-5-l round theme-green ui-dark">
                        <span class="hidden-xs margin-2-r">Save</span>
                        <svg class="icon"><use href="#save"></use></svg>
                    </button>
                </div>

                <div class="uploader-list">
                    <svg class="icon icon-xxl"><use href="#images-plus"></use></svg>
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