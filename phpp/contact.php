<?php
require_once "conn.php";

$nome = $_POST["nome"];
$email = $_POST["email"];
$assunto = $_POST["assunto"];
$mensagem = $_POST["mensagem"];

$sql = "INSERT INTO contacts (nome, email, assunto, mensagem) VALUES ('$nome', '$email', '$assunto', '$mensagem')";

if (mysqli_query($conn, $sql)) {
     header("Location: https://pauloviana.000webhostapp.com/");
} else {
      echo "Erro: " . $sql . "<br>" . mysqli_error($conn);
}
mysqli_close($conn);

?>