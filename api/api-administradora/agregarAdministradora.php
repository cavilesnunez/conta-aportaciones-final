<?php

    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Allow: GET, POST, OPTIONS, PUT, DELETE");

    require "conexion.php";

    $NomAdm = $_POST['NomAdm'];
    $Siglas = $_POST['Siglas'];


    $sql = "INSERT INTO administradoras (NomAdm, Siglas) 
            VALUES ('$NomAdm', '$Siglas')";

    mysqli_query($mysqli,$sql);