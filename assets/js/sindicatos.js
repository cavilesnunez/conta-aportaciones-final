const urlObtenerCliente = 'http://localhost:8080/conta-aportaciones/assets/api/api-sindicato/obtenerSindicato.php'

// let listaClientes = []

const objSindicato = {
    idSin: '',
    NomSin: '',
    Siglas: '',
    Codigo: ''
}

//Enlistar en el datatable los clientes

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

    await listClientes();

    dataTable=$("#datatableSindicatos").DataTable({
        
        
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

const listClientes = async () => {
    try {
        const response = await fetch("http://localhost:8080/conta-aportaciones/assets/api/api-sindicato/obtenerSindicato.php");
        const sindicatos = await response.json();

        let content = "";
        sindicatos.forEach((sindicato, index) => {
            content += `
            <tr>
                <td>${index + 1}</td>
                <td>${sindicato.NomSin}</td>
                <td>${sindicato.Siglas}</td>
                <td>${sindicato.Codigo}</td>
            </tr>`;
        });

        

        const tbodySindicatos = document.getElementById("tbodySindicatos");
        tbodySindicatos.innerHTML = content;
        
    } catch (error) {
        alert(error);
    }
    
};

window.addEventListener("load", async () => {
    await initDataTable();
});


// let editando = false

// const formularioCliente = document.querySelector('#formularioCliente')

// const clienteInput = document.querySelector('#nameCliente')
// const abreviacionInput = document.querySelector('#abrevCliente')
// const contadorInput = document.querySelector('#contaCliente')

// formularioCliente.addEventListener('submit', validarFormulario)

// function validarFormulario(e) {
//     e.preventDefault()

//     if([clienteInput.value, abreviacionInput.value, contadorInput.value].includes('')) {
//         alert('Todos los campos son obligatorios')
//         return
//     }

//     if(editando) {
//         editarCliente()
//         editando = false
//     } else {
//         objCliente.idClientes = Date.now()
//         objCliente.NomClientes = clienteInput.value
//         objCliente.Abreviacion = abreviacionInput.value
//         objCliente.Contador = contadorInput.value

//         agregarCliente()
//     }
// }




// async function obtenerClientes() {

//     arregloClientes = await fetch(urlObtenerCliente)
//     .then(respuesta => respuesta.json())
//     .then(datos => datos)
//     .catch(error => console.log(error))

//     mostrarClientes()

// }

// obtenerClientes()

// function mostrarClientes() {

//     const tClientes = document.getElementById('tablaClientes')
//     const tbody = tClientes.querySelector('tbody');
//     tbody.innerHTML = ''; // Limpiar el contenido de la tabla


//     arregloClientes.forEach(cliente => {
//         resultados += `<tr>
//         <td>${cliente.idClientes}</td>
//         <td>${cliente.NomClientes}</td>
//         <td>${cliente.Abreviacion}</td>
//         <td>${cliente.Contador}</td>

//         <td class="text-center">
//         <a class="btnEditar btn btn-primary">Editar</a>
//         <a class="btnBorrar btn btn-primary">Borrar</a>
//         </td>

//         </tr>`

//     })
//     tbody.innerHTML = resultados
// }


// function mostrarClientes(){

//     const resultsTable = document.getElementById('tablaClientes');
//     const tbody = resultsTable.querySelector('tbody');
//     tbody.innerHTML = ''; // Limpiar el contenido de la tabla

//     arregloClientes.forEach(union => {

// console.log(arregloClientes)

//         const { idClientes, NomClientes, Abreviacion, Contador } = union;

//         const row = document.createElement('tr');
//         const idCli = document.createElement('td');
//         const NomCli = document.createElement('td');
//         const Abrev = document.createElement('td');
//         const Cont = document.createElement('td');

//         idCli.textContent = idClientes;
//         NomCli.textContent = NomClientes;
//         Abrev.textContent = Abreviacion;
//         Cont.textContent = Contador;

//         row.appendChild(idCli);
//         row.appendChild(NomCli);
//         row.appendChild(Abrev);
//         row.appendChild(Cont);
//         tbody.appendChild(row);
//     });

// };













// async function agregarCliente() {

//     const res = await fetch(urlAgregarCliente,
//         {
//             method: 'POST',
//             body: JSON.stringify(objCliente)
//         })
//         .then(respuesta => respuesta.json())
//         .then(data => data)
//         .catch(error => alert(error))

//     if(res.msg === 'OK') {
//         alert('Se registro exitosamente')
//         limpiarHTML()
//         obtenerClientes()

//         formularioCliente.reset()
//         limpiarObjeto()
//     }
// }

// async function editarCliente() {
    
//     objCliente.NomClientes = clienteInput.value
//     objCliente.Abreviacion = abreviacionInput.value
//     objCliente.Contador = contadorInput.value

//     const res = await fetch(urlEditarCliente,
//         {
//             method: 'POST',
//             body: JSON.stringify(objCliente)
//         })
//         .then(respuesta => respuesta.json())
//         .then(data => data)
//         .catch(error => alert(error))

//     if(res.msg === 'OK')  {
//         alert('Se actualizó correctamente')

//         limpiarHTML()
//         obtenerClientes()
//         formularioCliente.reset()

//         limpiarObjeto()
//     }

//     formularioCliente.querySelector('button[type="submit"]').textContent = 'Agregar';

//     editando = false

// }

// async function eliminarCliente(id) {

//     const res = await fetch(urlBorrarCliente,
//         {
//             method: 'POST',
//             body: JSON.stringify({'idClientes': id})
//         })
//         .then(respuesta => respuesta.json())
//         .then(data => data)
//         .catch(error => alert(error))

//         if(res.msg === 'OK') {
//             alert('Se borró exitosamente')

//             limpiarHTML()
//             obtenerClientes()
//             limpiarObjeto()
//         }

// }

// function cargarCliente(cliente) {
//     const {idClientes, NomClientes, Abreviacion, Contador} = cliente

//     clienteInput.value = NomClientes
//     abreviacionInput.value = Abreviacion
//     contadorInput.value = Contador

//     objCliente.idClientes = idClientes

//     formularioCliente.querySelector('button[type="submit"').textContent = 'Actualizar'
//     editando = true
// }

// function limpiarHTML() {
//     const divEmpleados = document.querySelector('tablaClientes');
//     while(divEmpleados.firstChild) {
//         divEmpleados.removeChild(divEmpleados.firstChild)
//     }
// }


function limpiarObjeto() {
    objCliente.idClientes = ''
    objCliente.usuario = ''
    objCliente.contrasena = ''
    objCliente.email = ''
}