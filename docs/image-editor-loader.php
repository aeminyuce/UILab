<?php

    if(isset($_POST["send"])) {

        $images = $_FILES["images"];
        foreach ($images['tmp_name'] as $key => $value) {

        $source = $images['tmp_name'][$key];
           copy($source, 'images/_'.$images['name'][$key]);
           ?>
            <img src="images/_<?php echo $images['name'][$key];?>"><br>
           <?php
        }

    }

?>
