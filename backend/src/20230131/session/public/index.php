<?php

define('ROOT_PATH', dirname(__DIR__));

ini_set('display_errors', 1);

require_once ROOT_PATH . '/app/helpers.php';

$envFilePath = ROOT_PATH . '/.env';

if (file_exists($envFilePath)) {
	define('ENV_FROM_FILE', parse_ini_file($envFilePath));
} else {
	throw new Exception('Env file not found');
}

if (env('APP_DEBUG', false)) {
	ini_set('display_errors', 1);
} else {
	ini_set('display_errors', 0);
}

require_once ROOT_PATH . '/app/router.php';