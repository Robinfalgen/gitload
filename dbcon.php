<?php

$dsn = 'mysql:dbname=api;host=localhost:3306';
$user = 'root';
$password = 'root';

try {
    $conn = new PDO($dsn, $user, $password);

} catch (PDOException $e) {
    echo 'Connection failed: ' . $e->getMessage();
}



?>