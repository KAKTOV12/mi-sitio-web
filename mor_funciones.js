// Obtener el popup, el botón y la música
let popup = document.getElementById('popup');
let botonAceptar = document.getElementById('aceptar-musica');
let musica = new Audio('Ed Sheeran - Perfect.mp3');  // Asegúrate de que la ruta sea correcta

// Mostrar el popup al cargar la página
window.onload = function() {
    popup.style.display = 'flex'; // Mostrar el popup con la sorpresa
};

// Reproducir música y hacer algo más divertido al hacer clic en el botón
botonAceptar.addEventListener('click', function() {
    musica.play(); // Reproducir la música
    popup.style.display = 'none'; // Cerrar el popup

    // Mostrar un mensaje de sorpresa
    alert('¡Tu sorpresa ha comenzado! ❤️'); // Mensaje de sorpresa
});
