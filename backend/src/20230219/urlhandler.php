<?php

$filePlace = './files/urllist.json';

require_once 'classes/SessionHandler.php';
$session = new SessionHandler(10, 60);

if ($session->isLimitReached()) {
    serveData('Too Many Requests', 429, 'error');
}

require_once 'utils/RandomId.php';
if (!isset($_POST['urlForRedirection'])) {
    throw new Exception('URL wasnt provided');
}

if (!file_exists($filePlace)) {
    file_put_contents($filePlace, '');
}


$data = file_get_contents($filePlace);
$data = json_decode($data, true);
$generatedCode = RandomId::generateRandomString(6);
$urlForRedirection = $_POST['urlForRedirection'];
foreach ($data as $row) {

    if ($row['url'] == $urlForRedirection) {
        serveData($row['id'], 200, 'duplication');
    }
}

if (!array_key_exists($generatedCode, $data) && !in_array($urlForRedirection, $data)) {
    $newRow = ['url' => $urlForRedirection, 'code' => $generatedCode];
    array_push($data, $newRow);
    file_put_contents($filePlace, json_encode($data));
    serveData($newRow, 200, 'success');
}

function serveData($redirectionUrl, $code = 400, $status = 'error')
{
    $result = [
        'status' => $status,
        $status == 'error' ? 'message' : 'results' => $redirectionUrl
    ];
    http_response_code($code);
    header('Content-Type: application/json');
    echo json_encode($result);
    die();
}