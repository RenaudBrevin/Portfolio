<?php

require "../database/connect.php";
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$email = $_POST['email'];
$about = $_POST['about'];

$data = [
    "firstname" => htmlspecialchars($firstname),
    "lastname" => htmlspecialchars($lastname),
    "email" => htmlspecialchars($email),
    "about" => htmlspecialchars($about),
];

if(empty($firstname) || empty($lastname) || empty($email) || empty($about)){
    header("Location: ../contact.php");
    exit;
};

$send = $database->prepare("INSERT INTO `message` (message_firstname, message_lastname, message_email, message_about) 
VALUES (:firstname, :lastname, :email, :about)");


if ($send->execute($data)){
    mail("renaudbrevin@gmail.com", $firstname, $email);
    header("Location: ../index.php"); 
    exit;
} else{
    echo "Une erreur est survenue à l'envoi";
}

?>
