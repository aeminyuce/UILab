<?php

    $result = [];

    if (isset($_POST)) {
        $result = ['success' => true, 'message' => 'Your files not saved! Please, check your connection and try again.']; // You must return success: false; and message: string
    }

    die(json_encode($result));

?>
