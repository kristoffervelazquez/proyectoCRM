// Crear nuevo cliente

(function () {
    
    const formulario = document.querySelector('#formulario');

    document.addEventListener('DOMContentLoaded', () => {
        conectarDB();
        formulario.addEventListener('submit', validarCliente);
    })



    function validarCliente(e) {
        e.preventDefault();
        console.log('validando...');

        //Leer los inputs
        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;

        if (nombre === '' || email === '' || telefono === '' || empresa === '') {
            imprimirAlerta('Todos los campos son obligatorios', 'error');

            return;
        }
        // Crear un objeto con la informacion
        const cliente = {
            nombre, email, telefono, empresa,
            id: Date.now()
        }
        crearNuevoCliente(cliente);

    }

    function crearNuevoCliente(cliente){
        const transaction = DB.transaction(['crm'], 'readwrite');
        const objectStore = transaction.objectStore('crm');
        objectStore.add(cliente);

        transaction.onerror = () => {
            imprimirAlerta('Hubo un error ', 'error');
        }
        
        transaction.oncomplete = () => {
            imprimirAlerta('Cliente añadido correctamente');

            setTimeout(() => {
                window.location.href = 'index.html';
            }, 3000);
        }
    }

   
})();