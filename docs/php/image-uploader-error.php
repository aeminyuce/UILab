<?php

    $result = [];

    if (isset($_POST)) {
        $result = ['success' => false, 'message' => 'Failed! Files can not saved to storage.']; // You must return success: false; and message: string
    }

    die(json_encode($result));

?>
