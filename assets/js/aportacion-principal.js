const urlObtenerAportacionPrincipal = 'http://localhost:8080/conta-aportaciones/assets/api/api-aportaciones-principal/obtenerAportacionesPrincipal.php'


// let listaClientes = []

const objAportacionPrincipal = {
    idCAport : '',
    idUsr: '',
    Fecha: '',
    idEmpresas: '',
    idAdm: '',
    idAport: '',
    idClientes: '',
    idSin: '',
    Nomina: '',
    Periodo: '',
    Ref: '',
    RefeBancaria: '',
    Aport: '',
    Fondo: '',
    Nom001: '',
    Nom002: '',
    Nom003: '',
    Nom004: '',
    Nom005: '',
    Nom006: '',
    Nom007: '',
    Nom008: '',
    Nom009: '',
    Nom010: '',
    totalPer: '',
    Descu: '',
    Vale: '',
    TotalTrasFac: '',
    Ruta: '',
    Pago001: '',
    Pago002: '',
    Pago003: '',
    Pago004: '',
    Pago005	: '',
    Pago006: '',
    ComVal: '',
    Iva: ''

}

//Enlistar en el datatable los Aportacion

let dataTable;

let dataTableIsInitialized=false;




const initDataTable=async() => {
    if (dataTableIsInitialized) {
        dataTable.destroy();
    }  

    await listAportacionPrincipal();

    dataTable=$("#datatableAportacionesPrincipal").DataTable({
        scrollX: "2000px",
        lengthMenu: [ 10, 25, 50, 75, 100, 300, 500 ],
        dom: 'Blfrtip',
        buttons: [
            { extend: 'copy',
            exportOptions: { modifier: {search: 'none'}}},
            { extend: 'csv',
            exportOptions: { modifier: {search: 'none'}}},
            { extend: 'excel',
            exportOptions: { modifier: {search: 'none'}}},
            { extend: 'pdf',
            exportOptions: { modifier: {search: 'none'}}},
            { extend: 'print',
            exportOptions: { modifier: {search: 'none'}}},
        ],
        columnDefs: [
            { className : "dt-center", targets: [0, 3, 4, 5]},
            { orderable: false, targets:[4, 5]},
            { searchable: false, "targets": [1] },
            { width: "50%", targets: [1] }
        ],
        pageLength: 10,
        destroy: true,

        language:{
            lengthMenu: "Mostrar _MENU_ registros por página",
            zeroRecords: "Ningún usuario encontrado",
            info: "Mostrando de _START_ a _END_ de un total de _TOTAL_ registros",
            infoEmpty: "Ningún usuario encontrado",
            infoFiltered: "( filtrados desde _MAX_ registros totales)",
            search: "Buscar:",
            loadingRecords: "Cargando...",
            paginate: {
                first: "Primero",
                last: "Último",
                next: "Siguiente",
                previous: "Anterior"
        }
    }

    });

    dataTableIsInitialized = true;

};

const listAportacionPrincipal = async () => {
    try {
        const response = await fetch("http://localhost:8080/conta-aportaciones/assets/api/api-aportaciones-principal/obtenerAportacionesPrincipal.php");
        const aportaciones_principal = await response.json();

        let content = "";
        aportaciones_principal.forEach((aportacion_principal, index) => {
            content += `
            <tr>
                <td>${index + 1}</td>
                <td>${aportacion_principal.idCAport}</td>
                <td>${aportacion_principal.idUsr}</td>
                <td>${aportacion_principal.Fecha}</td>
                <td>${aportacion_principal.idEmpresas}</td>
                <td>${aportacion_principal.idAdm}</td>
                <td>${aportacion_principal.idAport}</td>
                <td>${aportacion_principal.idClientes}</td>
                <td>${aportacion_principal.idSin}</td>
                <td>${aportacion_principal.Nomina}</td>
                <td>${aportacion_principal.Periodo}</td>
                <td>${aportacion_principal.Ref}</td>
                <td>${aportacion_principal.RefeBancaria}</td>
                <td>${aportacion_principal.Aport}</td>
                <td>${aportacion_principal.Nom001}</td>
                <td>${aportacion_principal.Nom002}</td>
                <td>${aportacion_principal.Nom003}</td>
                <td>${aportacion_principal.Nom004}</td>
                <td>${aportacion_principal.Nom005}</td>
                <td>${aportacion_principal.Nom006}</td>
                <td>${aportacion_principal.Nom007}</td>
                <td>${aportacion_principal.Nom008}</td>
                <td>${aportacion_principal.Nom009}</td>
                <td>${aportacion_principal.Nom010}</td>
                <td>${aportacion_principal.totalPer}</td>
                <td>${aportacion_principal.Descu}</td>
                <td>${aportacion_principal.Vale}</td>
                <td>${aportacion_principal.TotalTrasFac}</td>
                <td>${aportacion_principal.Ruta}</td>
                <td>${aportacion_principal.Pago001}</td>
                <td>${aportacion_principal.Pago002}</td>
                <td>${aportacion_principal.Pago003}</td>
                <td>${aportacion_principal.Pago004}</td>
                <td>${aportacion_principal.Pago005}</td>
                <td>${aportacion_principal.Pago006}</td>
                <td>${aportacion_principal.ComVal}</td>
                <td>${aportacion_principal.Iva}</td>

            </tr>`;
        });

        

        const tbodyAportacionesPrincipal = document.getElementById("tbodyAportacionesPrincipal");
        tbodyAportacionesPrincipal.innerHTML = content;
    } catch (error) {
        alert(error);
    }

    
};

window.addEventListener("load", async () => {
    await initDataTable();
});



function limpiarObjeto() {
    objAportacionPrincipal.idCAport = ''
    objAportacionPrincipal.idUsr = ''
    objAportacionPrincipal.Fecha = ''
    objAportacionPrincipal.idEmpresas = ''
    objAportacionPrincipal.idAdm = ''
    objAportacionPrincipal.idAport = ''
    objAportacionPrincipal.idClientes = ''
    objAportacionPrincipal.idSin = ''
    objAportacionPrincipal.Nomina = ''
    objAportacionPrincipal.Periodo = ''
    objAportacionPrincipal.Ref = ''
    objAportacionPrincipal.RefeBancaria = ''
    objAportacionPrincipal.Aport = ''
    objAportacionPrincipal.Fondo = ''
    objAportacionPrincipal.Nom001 = ''
    objAportacionPrincipal.Nom002 = ''
    objAportacionPrincipal.Nom003 = ''
    objAportacionPrincipal.Nom004 = ''
    objAportacionPrincipal.Nom005 = ''
    objAportacionPrincipal.Nom006 = ''
    objAportacionPrincipal.Nom007 = ''
    objAportacionPrincipal.Nom008 = ''
    objAportacionPrincipal.Nom009 = ''
    objAportacionPrincipal.Nom010 = ''
    objAportacionPrincipal.totalPer = ''
    objAportacionPrincipal.Descu = ''
    objAportacionPrincipal.Vale = ''
    objAportacionPrincipal.TotalTrasFac = ''
    objAportacionPrincipal.Ruta = ''
    objAportacionPrincipal.Pago001 = ''
    objAportacionPrincipal.Pago002 = ''
    objAportacionPrincipal.Pago003 = ''
    objAportacionPrincipal.Pago004 = ''
    objAportacionPrincipal.Pago005 = ''
    objAportacionPrincipal.Pago006 = ''
    objAportacionPrincipal.ComVal = ''
    objAportacionPrincipal.Iva = ''

}