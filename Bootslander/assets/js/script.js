//Ejecutando funciones
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPage);


//Declarando variables
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");

    //FUNCIONES

function anchoPage(){

    if (window.innerWidth > 850){
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "block";
    }else{
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";   
    }
}

anchoPage();


    function iniciarSesion(){
        if (window.innerWidth > 850){
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "10px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.opacity = "1";
            caja_trasera_login.style.opacity = "0";
        }else{
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.display = "block";
            caja_trasera_login.style.display = "none";
        }
    }

    function register(){
        if (window.innerWidth > 850){
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "410px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.opacity = "0";
            caja_trasera_login.style.opacity = "1";
        }else{
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.display = "none";
            caja_trasera_login.style.display = "block";
            caja_trasera_login.style.opacity = "1";
        }

          
}
let usuarios = [];

var loginUsuario = document.getElementById("loginUsuario");
var loginPassword = document.getElementById("loginPassword");
var nombre = document.getElementById("nombre");
var telefono = document.getElementById("telefono");
var usuario = document.getElementById("usuario");
var password = document.getElementById("password");
var mensaje = document.getElementById("mensaje");

function registro() {
    // Crear un objeto para el nuevo usuario
    let nuevoUsuario = {
        nombre: nombre.value,
        telefono: telefono.value,
        usuario: usuario.value,
        password: password.value
    };
    
    // Agregar el nuevo usuario al array
    usuarios.push(nuevoUsuario);

    // Limpiar los campos del formulario
    nombre.value = '';
    telefono.value = '';
    usuario.value = '';
    password.value = '';

    // Mostrar un mensaje de éxito
    mensaje.innerHTML = "Registro exitoso!";
    mensaje.style.color = "green";
}

function login() {
    let usuarioEncontrado = usuarios.find(function(usuario) {
        return usuario.usuario === loginUsuario.value && usuario.password === loginPassword.value;
    });
    if (usuarioEncontrado) {
        // Si el login es exitoso
        mensaje.innerHTML = "Login exitoso, bienvenido " + usuarioEncontrado.nombre + "!";
        mensaje.style.color = "green";

        // Redirigir a index.html
        setTimeout(function() {
            window.location.href = "C:/Users/usuario/Downloads/Bootslander/Bootslander/index.html";  // Redirige a index.html
        }, 1000);  // Retardo de 1 segundo para mostrar el mensaje de bienvenida
    } else {
        // Si el usuario no existe o la contraseña es incorrecta
        mensaje.innerHTML = "Usuario o contraseña incorrectos.";
        mensaje.style.color = "red";
    }

    // Limpiar los campos del formulario de login
    loginUsuario.value = '';
    loginPassword.value = '';
}