<?php

require_once 'functions.php';

define('UPLOAD_DIR', __DIR__ . '/uploads');
define('ALLOWED_EXTENTIONS', ['png', 'jpg', 'jpeg']);

if (isset($_FILES['photos'])) {
	for ($i=0; $i < count($_FILES['photos']['name']); $i++) { 
		$file = [
            'name'     => $_FILES['photos']['name'][$i],
            'type'     => $_FILES['photos']['type'][$i],
            'tmp_name' => $_FILES['photos']['tmp_name'][$i],
            'error'    => $_FILES['photos']['error'][$i],
        ];

        try {
            $photo_path = uploadPhoto($file);
            echo "<img src='$photoPath' style='width: 600px'>";
        } catch (Exception $e) {
            echo $e->getMessage() . "<br>\n";
        }
	}
}

echo '<h1>Sveikiname</h1>';
echo '<h3>' . $_POST['user']['name'] . ' ' . $_POST['user']['surname'] . '</h3>';
echo '<h3>' . $_POST['user']['city'] . '</h3>';
echo '<ul>';

