<?php

$person = file_get_contents('https://randomuser.me/api/');
#$output_path = __DIR__ . '/../output/output.txt';
$file_name = "person.xls";

// header("Content-Disposition: attachment; filename=\"$file_name\"");
// header("Content-Type: application/vnd.ms-excel");

// function filterCustomerData(&$str) {
// 	// $str = preg_replace("/\t/", "\\t", $str);
// 	$str = preg_replace("/\r?\n/", "\\n", $str);
// 	if(strstr($str, '"')) $str = '"' . str_replace('"', '""', $str) . '"';
// 	}

// if ($person != false) {
// 	$person_arr = json_decode($person, true);
// 	$column_names = false;
// 	// run loop through each row in $customers_data
// 	foreach($person_arr as $row) {
// 	if(!$column_names) {
// 	echo implode("\t", array_keys($row)) . "\n";
// 	$column_names = true;
// 	}
// 	// The array_walk() function runs each array element in a user-defined function.
// 	array_walk($row, 'filterCustomerData');
// 	echo implode("\t", array_values($row)) . "\n";
// 	}

// 	#file_put_contents($output_path, print_r($person_arr, true));
	
// 	exit;

// }
