const urlObtenerEmpresa = 'http://localhost:8080/conta-aportaciones/assets/api/api-empresa/obtenerEmpresa.php'
const urlAgregarEmpresa = 'http://localhost:8080/conta-aportaciones/assets/api/api-clientes/agregarCliente.php'
const urlEditarEmpresa = 'http://localhost:8080/conta-aportaciones/assets/api/api-clientes/editarCliente.php'
const urlBorrarEmpresa = 'http://localhost:8080/conta-aportaciones/assets/api/api-clientes/borrarCliente.php'


const objEmpresa = {
    idEmpresas: '',
    NomEmp: '',
    Siglas: '',
    Codigo: ''
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

    dataTable=$("#datatableEmpresas").DataTable({

        
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
        const response = await fetch("http://localhost:8080/conta-aportaciones/assets/api/api-empresa/obtenerEmpresa.php");
        const empresas = await response.json();

        let content = "";
        empresas.forEach((empresa, index) => {
            content += `
            <tr>
                <td>${index + 1}</td>
                <td>${empresa.NomEmp}</td>
                <td>${empresa.Siglas}</td>
                <td>${empresa.Codigo}</td>
            </tr>`;
        });

        const tbodyEmpresas = document.getElementById("tbodyEmpresas");
        tbodyEmpresas.innerHTML = content;
    } catch (error) {
        alert(error);
    }
};

window.addEventListener("load", async () => {
    await initDataTable();
});




function limpiarObjeto() {
    objEmpresa.idEmpresas = ''
    objEmpresa.NomEmp = ''
    objEmpresa.Siglas = ''
    objEmpresa.Codigo = ''
}