let DB;
const formulario = document.querySelector('#formulario')

function conectarDB() {
    const abrirConexion = window.indexedDB.open('crm', 1);

    abrirConexion.onerror = () => {
        console.log('Hubo un error');
    }
    abrirConexion.onsuccess = () => {
        DB = abrirConexion.result;
    }
}

function imprimirAlerta(mensaje, tipo) {
    const alerta = document.querySelector('.alerta')

    if (!alerta) {
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center', 'font-semibold', 'border', 'alerta');


        if (tipo === 'error') {
            divMensaje.classList.add('bg-red-100', 'border-red-400', 'text-red-700');

        } else {
            divMensaje.classList.add('bg-green-100', 'border-green-400', 'text-green-700');
        }
        divMensaje.innerHTML = mensaje;

        formulario.appendChild(divMensaje)

        setTimeout(() => {
            divMensaje.remove();
        }, 3000)
    }
}