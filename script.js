// Obtener el modal y los elementos de cierre
var modal = document.getElementById("loginModal");
var openModalBtn = document.getElementById("openModal");
var closeModalBtn = document.getElementsByClassName("close")[0];

// Abrir el modal al hacer clic en el botón "Iniciar Sesión"
openModalBtn.onclick = function() {
    modal.style.display = "block";
}

// Cerrar el modal al hacer clic en el botón de cerrar (X)
closeModalBtn.onclick = function() {
    modal.style.display = "none";
}

// Cerrar el modal al hacer clic fuera de la ventana del modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
