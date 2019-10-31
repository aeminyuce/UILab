<?php

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

?>
