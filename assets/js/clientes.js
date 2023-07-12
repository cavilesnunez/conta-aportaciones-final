const urlObtenerCliente = 'http://localhost:8080/conta-aportaciones/api/api-clientes/obtenerCliente.php'
const urlAgregarCliente = 'http://localhost:8080/conta-aportaciones/api/api-clientes/agregarCliente.php'
const urlEditarCliente = 'http://localhost:8080/conta-aportaciones/api/api-clientes/editarCliente.php'
const urlBorrarCliente = 'http://localhost:8080/conta-aportaciones/api/api-clientes/borrarCliente.php'

// let listaClientes = []

const objCliente = {
    idClientes: '',
    NomClientes: '',
    Abreviacion: '',
    Contador: ''
}

//Enlistar en el datatable los clientes

let dataTable;

let dataTableIsInitialized=false;


const initDataTable=() => {
    if (dataTableIsInitialized) {
        dataTable.destroy();
    }  

    leerClientes();

    dataTable=$("#datatableClientes").DataTable({
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



const btnAgregar = document.getElementById("btnAgregarCliente");
const table = document.getElementById("datatableClientes");

//LEER CLIENTES

function leerClientes () {
    
    const url = "http://localhost:8080/conta-aportaciones/api/api-clientes/obtenerCliente.php"
    fetch(url)
    .then(r => r.json())
    .then(data => {
        let template = "";
        data.forEach(element => {
            const idCliente = element.idClientes;
            const nameCliente = element.NomClientes;
            const abrevCliente = element.Abreviacion;
            const contaCliente = element.Contador;


            template += `
                <tr>
                <th scope="row">${idCliente}</th>
                <td>${nameCliente}</td>
                <td>${abrevCliente}</td>
                <td>${contaCliente}</td>
                <td><i class="fa-solid fa-check" style="color: green;"></i></td>
                <td>
                    <button class="btn btn-sm btn-warning" id="editar" value="${idCliente}" data-bs-toggle="modal" data-bs-target="#modalClientes" type="button">Editar</button>
                    <button class="btn btn-sm btn-danger" id="eliminar" value="${idCliente}" type="button">Eliminar</button>
                </td>
                </tr>`

        });
        document.getElementById("tbodyClientes").innerHTML = template;


    });


};


window.addEventListener("load",  () => {
    initDataTable();
});





//CREAR CLIENTE

btnAgregar.addEventListener("click", function(e) {
    e.preventDefault();
    //alert("HOla mundo");
    const url = "http://localhost:8080/conta-aportaciones/api/api-clientes/agregarCliente.php";
    const data = new FormData();
    
    const nameCliente = document.getElementById("nameCliente").value;
    const abrevCliente = document.getElementById("abrevCliente").value;
    const contaCliente = document.getElementById("contaCliente").value;

    data.append('nameCliente',nameCliente);
    data.append('abrevCliente',abrevCliente);
    data.append('contaCliente',contaCliente);

    fetch(url,{method:'POST',body: data});
    leerClientes();
    formularioCliente.reset;

});


//ELIMINAR CLIENTE
table.addEventListener("click", function(e){
    // console.log(e.target.id);


    // console.log(e.target.value);
    if(e.target.id=="eliminar"){
        const id = e.target.value;
        const url = "http://localhost:8080/conta-aportaciones/api/api-clientes/borrarCliente.php";
        const data = new FormData();
        data.append('id',id);
        fetch(url,{method:'POST',body: data});
        
        leerClientes();

    }
},true);



//ACTUALIZAR CLIENTE

const table1 = document.getElementById('datatableClientes');
const modal = document.getElementById('modalClientes');
const inputs = document.querySelectorAll('inputs');
let count = 0;


window.addEventListener('click', (e)=>{
    if (e.target.matches(".btn-warning")) {
        let data = e.target.parentElement.parentElement.children;

        fillData(data)
        modal.classList.toggle('translate')  
    }

    if (e.target.matches(".btn-danger")) {
        modal.classList.toggle('translate')  
        count=0
    }
})

const fillData = (data)=>{
    for(let index of inputs){
        index.value = data[count].textContent
        console.log(index)
        count+=1
    }
}



