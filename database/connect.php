<?php
try {
    $database=new PDO("mysql:host=localhost;dbname=portfolio;charset=utf8","root","");
} catch(PDOException $error) {
    echo $error;
    die;
}

?>