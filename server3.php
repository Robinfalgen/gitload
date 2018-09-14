<?php
header("Access-Control-Allow-Origin:*");
require('dbcon.php');

 

switch($_SERVER['REQUEST_METHOD']) {
    
    case 'DELETE':
  	
  	$id = $_GET['id'];
   
   	$sql = "DELETE FROM `data` WHERE id =:paramId";
	$stmt = $conn->prepare($sql);
	$stmt->bindParam(':paramId', $id);
	$stmt->execute();
	
	
  
    
   

    break;}
    switch($_SERVER['REQUEST_METHOD']) {
    case 'PUT':
    
    parse_str(file_get_contents("php://input"), $putData);
    var_dump($putData);
    $UP = json_decode($putData['UPdata']);
    
    $head = $UP->title;
    $text = $UP->text;

    
    $UPid = $_GET['id'];	

	$sql = "UPDATE `data`  SET `rubrik`=:paramHead,`text`= :paramText WHERE id =:paramId";
	$stmt = $conn->prepare($sql);
	$stmt->bindParam(':paramId', $UPid);
	$stmt->bindParam(':paramHead', $head);
	$stmt->bindParam(':paramText', $text);
	$stmt->execute();
	
	
  
    
   

    break;}
?>