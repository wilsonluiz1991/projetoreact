<?php

require_once('./Models/Mensagem.php');

$name = $_POST['nome'];
$msg = $_POST['msg'];
$message = new Comentario($name, $msg);

$validate = $message->enviarComentario(); 

header('Access-Control-Allow-Origin: *');
header('Content-type: application/json');

if ($validate ){
    echo json_encode(true);
} else {
    echo json_encode(false);
}
