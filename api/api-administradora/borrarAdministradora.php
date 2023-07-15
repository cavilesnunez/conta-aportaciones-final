<?php

    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Allow: GET, POST, OPTIONS, PUT, DELETE");

    require "conexion.php";

    $id = $_POST['id'];

    $sql = "DELETE FROM administradoras WHERE idAdm  = $id";
    
    // mysqli_query($conn,$sql);
    mysqli_query($mysqli,$sql);

    ?>
