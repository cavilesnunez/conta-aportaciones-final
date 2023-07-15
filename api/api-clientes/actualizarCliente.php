<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Allow: GET, POST, OPTIONS, PUT, DELETE");

    require "conexion.php";

if (isset($_POST['idCliente'])) {
    $id = $mysqli->real_escape_string($_POST['idCliente']);
    $nombreCliente = $mysqli->real_escape_string($_POST['nameCliente']);
    $abrevCliente = $mysqli->real_escape_string($_POST['abrevCliente']);
    $contCliente = $mysqli->real_escape_string($_POST['contaCliente']);

    $sql = "UPDATE clientes 
    SET NomClientes='$nombreCliente', Abreviacion='$abrevCliente', Contador='$contCliente'
    WHERE idClientes = '$id'";

// echo ($_POST['nameCliente']);
// var_dump($_POST);

    if ($mysqli->query($sql) === true) {
        $datos = array(
            'idCliente' => $id,
            'nameCliente' => $nombreCliente,
            'abrevCliente' => $abrevCliente,
            'contaCliente' => $contCliente
        );

        echo json_encode($datos);

    } else {
        echo "Error al actualizar el registro: " . $mysqli->error;
    }
} else {
    echo "Error: No se ha proporcionado el campo 'idCliente'.";
}
?>
