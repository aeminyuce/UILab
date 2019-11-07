<?php

    $result = [];

    if (isset($_POST)) {

        // You must return success: false; and message: string
        $result = ['success' => true, 'message' => 'Your files saved, successfully!'];

    }

    die(json_encode($result));

?>
