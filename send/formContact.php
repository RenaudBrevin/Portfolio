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

$message=
    "Message de $firstname $lastname\n
Contact: $email\n\n
$about";

if ($send->execute($data)){
    // $avant = microtime(true);
    header("Location: ../index.php"); 
    mail('renaudbrevin@gmail.com', 'Nouveaux message portfolio', $message);
    mail($email, "Brevin RENAUD - Receiving your message", "Thank you for your message, I will respond as soon as possible. \n \n RENAUD Brevin");
    // $après = microtime(true);
    // var_dump($après - $avant);
    exit;
} else{
    echo "Une erreur est survenue à l'envoi";
}



?>
