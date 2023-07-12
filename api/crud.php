<?php

    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Allow: GET, POST, OPTIONS, PUT, DELETE");

    require "conexion.php";
    
//LEER CLIENTE
    
    $sql = "SELECT * FROM clientes";
    $query = $mysqli->query($sql);
    
    $datos = array();
    
    while($resultado = $query->fetch_assoc()) {
        $datos[] = $resultado;
    }
    
    echo json_encode($datos);
    //echo json_encode(array("usuarios" => $datos));


//AGREGAR CLIENTE

    $json = $_POST['objCliente'];
    
    $objCliente = json_decode($json);

    $sql = "INSERT INTO clientes(NomClientes, Abreviacion, Contador) VALUES('$objCliente->NomClientes', '$objCliente->Abreviacion', '$objCliente->Contador')";
    
    $query = $mysqli->query($sql);

    $jsonRespuesta = array('msg' => 'OK');
    echo json_encode($jsonRespuesta);


//EDITAR CLIENTE
    $json = file_get_contents("php://input");

    $objCliente = json_decode($json);

    $sql = "UPDATE clientes SET NomClientes='$objCliente->NomClientes', Abreviacion='$objCliente->Abreviacion', Contador='$objCliente->Contador' WHERE idClientes ='$objCliente->idClientes'";

    $query = $mysqli->query($sql);

    $jsonRespuesta = array('msg' => 'OK');
    echo json_encode($jsonRespuesta);


//BORRAR CLIENTE
    $json = file_get_contents("php://input");
        
    $objId = json_decode($json);

    $sql = "DELETE FROM clientes WHERE idClientes ='$objId->idClientes '";
    $query = $mysqli->query($sql);

    $jsonRespuesta = array('msg' => 'OK');
    echo json_encode($jsonRespuesta);