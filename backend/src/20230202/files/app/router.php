<?php

$module = $_GET['page'] ?? 'index';

$modulePath = sprintf('%s/app/modules/%s.php', ROOT_PATH, $module);

if (is_file($modulePath)) {
	require_once $modulePath;
} else {
	http_response_code(404);
	
	echo 'Page not found';

	exit;
}