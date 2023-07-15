const urlObtenerEmpresa = 'http://localhost:8080/conta-aportaciones/assets/api/api-empresa/obtenerEmpresa.php'
const urlAgregarEmpresa = 'http://localhost:8080/conta-aportaciones/assets/api/api-clientes/agregarCliente.php'
const urlEditarEmpresa = 'http://localhost:8080/conta-aportaciones/assets/api/api-clientes/editarCliente.php'
const urlBorrarEmpresa = 'http://localhost:8080/conta-aportaciones/assets/api/api-clientes/borrarCliente.php'


const objAdministradora = {
    idAdm: '',
    NomAdm: '',
    Siglas: ''
}


//Enlistar en el datatable los empresas

let dataTable;

let dataTableIsInitialized=false;

// const dataTableOptions = {
//     pageLength: 10,
//     destroy: true,
//     language:{
//         lengthMenu: 'Mostrar _MENU_ registros por página',
//         zeroRecords: "Ningún usuario encontrado",
//         info: "Mostrando de _START_ a _END_ de un total de _TOTAL_ registros",
//         infoEmpty: "Ningún usuario encontrado",
//         infoFiltered: "( filtrados desde _MAX_ registros totales)",
//         search: "Buscar:",
//         loadingRecords: "Cargando...",
//         paginate: {
//             first: "Primero",
//             last: "Último",
//             next: "Siguiente",
//             previous: "Anterior"
//         }
//     }
// };


const initDataTable=async() => {
    if (dataTableIsInitialized) {
        dataTable.destroy();
    }  

    await listEmpresas();

    dataTable=$("#datatableAdministradoras").DataTable({
        // scrollX: "2000px",
        lengthMenu: [
            [ 10, 25, 50, 100, 300,  -1 ],
            [ '10', '25', '50', '100', '300', 'Mostrar todo' ]
        ],
        buttons: [
            'pageLength'
        ],
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

const listEmpresas = async () => {
    try {
        const response = await fetch("http://localhost:8080/conta-aportaciones/assets/api/api-administradora/obtenerAdministradora.php");
        const administradoras = await response.json();

        let content = "";
        administradoras.forEach((administradora, index) => {
            content += `
            <tr>
                <td>${index + 1}</td>
                <td>${administradora.NomAdm}</td>
                <td>${administradora.Siglas}</td>
            </tr>`;
        });

        const tbodyAdministradoras = document.getElementById("tbodyAdministradoras");
        tbodyAdministradoras.innerHTML = content;
    } catch (error) {
        alert(error);
    }
};

window.addEventListener("load", async () => {
    await initDataTable();
});




function limpiarObjeto() {
    objAdministradora.idAdm = ''
    objAdministradora.NomAdm = ''
    objAdministradora.Siglas = ''
}