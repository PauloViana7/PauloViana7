<?php
$servername = "localhost";
$database = "id17015367_contacts";
$username = "id17015367_rootpaulo";
$password = "*b2Qg1-vcsR@<Lz&";

$conn = mysqli_connect($servername, $username, $password, $database);

if (!$conn) {
      die("Falha na Conexão: " . mysqli_connect_error());
}

?>