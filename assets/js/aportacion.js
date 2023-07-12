const urlObtenerAportacion = 'http://localhost:8080/conta-aportaciones/assets/api/api-aportaciones/obtenerAportacion.php'


// let listaClientes = []

const objAportacion = {
    idAport: '',
    NomAport: '',
    Siglas: '',
    Codigo: ''
}

//Enlistar en el datatable los Aportacion

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

    await listAportacion();

    dataTable=$("#datatableAportaciones").DataTable({

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

const listAportacion = async () => {
    try {
        const response = await fetch("http://localhost:8080/conta-aportaciones/assets/api/api-aportacion/obtenerAportacion.php");
        const aportaciones = await response.json();

        let content = "";
        aportaciones.forEach((aportacion, index) => {
            content += `
            <tr>
                <td>${index + 1}</td>
                <td>${aportacion.NomAport}</td>
                <td>${aportacion.Siglas}</td>
                <td>${aportacion.Codigo}</td>
            </tr>`;
        });

        

        const tbodyAportaciones = document.getElementById("tbodyAportaciones");
        tbodyAportaciones.innerHTML = content;
    } catch (error) {
        alert(error);
    }

    
};

window.addEventListener("load", async () => {
    await initDataTable();
});



function limpiarObjeto() {
    objAportacion.idAport = ''
    objAportacion.NomAport = ''
    objAportacion.Siglas = ''
    objAportacion.Codigo = ''
}