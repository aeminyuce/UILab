<?php

    $result = [];

    if (isset($_POST)) {

        // You must return success: false; and message: string
        $result = ['success' => false, 'message' => 'Failed! Your files not saved.'];
        
    }

    die(json_encode($result));

?>
