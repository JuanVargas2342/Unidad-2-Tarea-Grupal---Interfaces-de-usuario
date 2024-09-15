// Selecciona el botón por su id
const cambiarEstiloBtn = document.getElementById('cambiar-estilo');

// Variable para almacenar el estado del estilo (original o cambiado)
let estiloCambiado = false;

// Guardar el estilo original de la página
const estiloOriginal = {
    backgroundColor: document.body.style.backgroundColor,
    color: document.body.style.color
};

// Función para alternar el estilo
cambiarEstiloBtn.addEventListener('click', function() {
    if (!estiloCambiado) {
        // Cambiar el estilo a uno nuevo
        document.body.style.backgroundColor = '#FF9800'; // Fondo naranja
        document.body.style.color = '#F5F5F5';           // Texto gris claro
        estiloCambiado = true; // Cambiar el estado
    } else {
        // Restaurar el estilo original
        document.body.style.backgroundColor = estiloOriginal.backgroundColor;
        document.body.style.color = estiloOriginal.color;
        estiloCambiado = false; // Cambiar el estado
    }
});