<?php

$filePath = './json/urllist.json';

if (isset($_GET['code'])) {

    $codeToDecode = $_GET['code'];
    $data = file_get_contents($filePath);
    $data = json_decode($data, true);
    foreach ($data as $row) {
        if ($row['id'] == $codeToDecode){
            $result = $row['url'];
            break;
        }
    }
    if(isset($result)){
        header('Location: https://'. $result);
    } else {
        echo 'Theres no link with this -> ' . $codeToDecode . 'code';
    }
} else {
    header('Location: localhost');
}