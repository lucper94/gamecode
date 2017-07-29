<?php

if($_GET['id'] == 2){

$games = array(1,2,3,4,5,6,7,8,9,10);
}
else{
    $games = array('uno','dos','tres');
}



$reports_data = array('Response' => 'Everything OK');
Header("Content-Type: application/json;charset=UTF-8");
$data = json_encode($games);
$len  = strlen($data);
Header("Content-Length: {$len}");
die($data);


?>