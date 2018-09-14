<?php
	header("Access-Control-Allow-Origin:*");
	require('dbcon.php');

	switch($_SERVER['REQUEST_METHOD']) {
    
    case 'POST':

	    if (isset($_POST)) {
	       
	        
	        
	            $data1 = json_decode($_POST['data1']);
	        	$dataToDB = $data1->message;

	        	$data2 = json_decode($_POST['data2']);
	        	$headToDB = $data2->head;

		   		

		    

		    $sql = "INSERT INTO `data`(`rubrik`,`text`) VALUES ( :paramHead, :paramText)";

		 	$stmt = $conn->prepare($sql);
		    
		    $stmt->bindParam(':paramText', $dataToDB);
		   	$stmt->bindParam(':paramHead', $headToDB);
		    $stmt->execute();
		    $conn->exec($sql);




	    }	
	    break;

 	case 'GET':
		$sql = "SELECT * FROM `data`";
		$stmt = $conn->prepare($sql);
		$stmt->execute();
		
		
	  	echo json_encode( $stmt->fetchAll() ) ;
	    
	    

	    break;

    default:
    	echo "Inte post";
    	
}

	



