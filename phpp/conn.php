<?php
$servername = "localhost";
$database = "DATABASE";
$username = "USER";
$password = "PASS";

$conn = mysqli_connect($servername, $username, $password, $database);

if (!$conn) {
      die("Falha na Conexão: " . mysqli_connect_error());
}

?>