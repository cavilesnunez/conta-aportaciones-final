<?php

    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Allow: GET, POST, OPTIONS, PUT, DELETE");

    require "conexion.php";
    
    $idCAport = $_POST['idCAport '];
    $idUsr = $_POST['idUsr'];
    $Fecha = $_POST['Fecha'];
    $idEmpresas = $_POST['idEmpresas'];
    $idAdm = $_POST['idAdm'];
    $idAport = $_POST['idAport'];
    $idClientes = $_POST['idClientes'];
    $idSin = $_POST['idSin'];
    $Nomina = $_POST['Nomina'];
    $Periodo = $_POST['Periodo'];
    $Ref = $_POST['Ref'];
    $RefeBancaria = $_POST['RefeBancaria'];
    $Aport = $_POST['Aport'];
    $Fondo = $_POST['Fondo'];
    $Nom001 = $_POST['Nom001'];
    $Nom002 = $_POST['Nom002'];
    $Nom003 = $_POST['Nom003'];
    $Nom004 = $_POST['Nom004'];
    $Nom005 = $_POST['Nom005'];
    $Nom006 = $_POST['Nom006'];
    $Nom007 = $_POST['Nom007'];
    $Nom008 = $_POST['Nom008'];
    $Nom009 = $_POST['Nom009'];
    $Nom010 = $_POST['Nom010'];
    $totalPer = $_POST['totalPer'];
    $Descu = $_POST['Descu'];
    $Vale = $_POST['Vale'];
    $TotalTrasFac = $_POST['TotalTrasFac'];
    $Ruta = $_POST['Ruta'];
    $Pago001 = $_POST['Pago001'];
    $Pago002 = $_POST['Pago002'];
    $Pago003 = $_POST['Pago003'];
    $Pago004 = $_POST['Pago004'];
    $Pago005 = $_POST['Pago005'];
    $Pago006 = $_POST['Pago006'];
    $ComVal = $_POST['ComVal'];
    $Iva = $_POST['Iva'];
    

    $sql = "INSERT INTO aportacion ( idCAport, idUsr, Fecha, idEmpresas, idAdm, idAport, idClientes, idSin, Nomina, Periodo, Ref, RefeBancaria, Aport, Fondo, Nom001, Nom002, Nom003, Nom004, Nom005, Nom006, Nom007, Nom008, Nom009, Nom010, totalPer, Descu, Vale, TotalTrasFac, Ruta, Pago001, Pago002, Pago003, Pago004, Pago005, Pago006, ComVal, Iva) 
            VALUES ('$idCAport', '$idUsr', '$Fecha', '$idEmpresas', '$idAdm', '$idAport', '$idClientes', '$idSin', '$Nomina', '$Periodo', '$Ref', '$RefeBancaria', '$Aport', '$Fondo', '$Nom001', '$Nom002', '$Nom003', '$Nom004', '$Nom005', '$Nom006', '$Nom007', '$Nom008', '$Nom009', '$Nom010', '$totalPer', '$Descu', '$Vale', '$TotalTrasFac', '$Ruta', '$Pago001', '$Pago002', '$Pago003', '$Pago004', '$Pago005', '$Pago006', '$ComVal', '$Iva')";

    mysqli_query($mysqli,$sql);