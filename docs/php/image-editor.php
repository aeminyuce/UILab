<?php

    if (isset($_POST["send"])) { // IE9: not supporting HTML5 fileReader API

        $images = $_FILES["images"]; // get image files
        foreach ($images['tmp_name'] as $key => $value) {

            $source = $images['tmp_name'][$key];
            copy($source, '_'.$images['name'][$key]);

            ?>
                <img src="_<?php echo $images['name'][$key];?>"><br>
            <?php

        }

    } else { // supporting HTML5 fileReader API

        if (isset($_POST)) { //

            $i = -1;
            $files = $_POST["files"]; // get base64 images array

            $sizes = $_POST["sizes"]; // get image sizes
            $tags = $_POST["tags"]; // get image tags

            ?>
                <ul>
            <?php

            foreach ($files as $src) {

                $i += 1;
                ?>
                    <li style="display: inline-block;">
                        <img src="<?php echo $src; ?>" width="220"><br>
                        <?php echo $sizes[$i]; ?>,
                        <?php echo $tags[$i]; ?>
                    </li>
                <?php

            }

            ?>
                </ul>
            <?php

        }

    }

?>
