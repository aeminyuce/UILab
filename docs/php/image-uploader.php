<?php

    $result = [];
    if (isset($_POST)) {

        /* testing getting image files and other datas

            $img = $_FILES['img'];

            print_r($_POST['id']); // get ids
            print_r($_POST['tag']); // get tags

            print_r($img['tmp_name']); // get images
            print_r($img['type']); // get types
            print_r($img['size']); // get sizes

        */

        // You must return success: false; and message: string
        $result = ['success' => true, 'message' => 'Your files saved, successfully!'];

    }

    die(json_encode($result));

?>
