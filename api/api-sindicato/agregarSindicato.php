<?php

    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Allow: GET, POST, OPTIONS, PUT, DELETE");

    require "conexion.php";

    $NomSin = $_POST['NomSin'];
    $Siglas = $_POST['Siglas'];
    $Codigo = $_POST['Codigo'];

    $sql = "INSERT INTO sindicato (NomSin, Siglas, Codigo) 
            VALUES ('$NomSin', '$Siglas', '$Codigo')";

    mysqli_query($mysqli,$sql);