<?php
try {
    $database=new PDO("mysql:host=localhost;dbname=portfolio","root","");
} catch(PDOException $error) {
    echo $error;
    die;
}

?>