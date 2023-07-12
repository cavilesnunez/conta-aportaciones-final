<?php

    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Allow: GET, POST, OPTIONS, PUT, DELETE");

    require "conexion.php";

    $nombreCliente = $_POST['nameCliente'];
    $abrevCliente = $_POST['abrevCliente'];
    $contCliente = $_POST['contaCliente'];

    $sql = "INSERT INTO clientes (NomClientes, Abreviacion, Contador) 
            VALUES ('$nombreCliente', '$abrevCliente', '$contCliente')";

    mysqli_query($mysqli,$sql);