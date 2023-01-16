<?php

function generateRandomString($length = 10) {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';

    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }

    return $randomString;
}

function uploadPhoto($file) {
    if ($file['error'] == UPLOAD_ERR_OK) {
        // https://www.php.net/manual/en/function.pathinfo.php
        $ext = pathinfo($file['name'], PATHINFO_EXTENSION);
        $ext = strtolower($ext);
        
        if (!in_array($ext, ALLOWED_EXTENTIONS)) {
            throw new Exception('File extention not allowed', 1);
        }
        $path = UPLOAD_DIR . '/' . date('Y/m/d');

        // https://www.php.net/manual/en/function.is-dir.php
        if (!is_dir($path)) {
            // https://www.php.net/manual/en/function.mkdir.php

            mkdir($path, 0777, true);
        }

        do {
            $name = generateRandomString(16);
            $path = sprintf('%s/%s.%s', $path, $name, $ext);

        } while (file_exists($path));

        // $movedPhoto = move_uploaded_file($file['tmp_name'], $path);
        move_uploaded_file($file['tmp_name'], $path);
        return $path;

        // if($movedPhoto) {
        //     $photos = scandir($path, SCANDIR_SORT_DESCENDING);
        //     if(!empty($photos)) {
        //         return $photos[0];
        //     }
        // }
    }
}