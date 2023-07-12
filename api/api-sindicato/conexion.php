<?php
    
    // Variables de la conexion a la DB (servidor, usuario, contraseña y base de datos)
    $mysqli = new mysqli("localhost","root","","cyfap");
    
    // Comprobamos la conexion
    if($mysqli->connect_errno) {
        die("Fallo la conexion");
    } else {
        // echo "Conexion exitosa";
    }