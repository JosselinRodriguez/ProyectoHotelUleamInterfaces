const usuario = document.getElementById("user");
const contraseña = document.getElementById("password");
const form = document.getElementById("form");
const listInputs = document.querySelectorAll(".form-input");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let condicion = validacionForm();
    if (condicion) {
        enviarFormulario();
    }
});

function validacionForm() {
    form.lastElementChild.innerHTML = "";
    let condicion = true;
    listInputs.forEach((element) => {
        element.lastElementChild.innerHTML = "";
    });


    if (usuario.value.length < 1 || usuario.value.trim() == "") {
        mostrarMensajeError("user", "Introduce un usuario valido*");
        condicion = false;
    }
    if (contraseña.value.length < 1 || contraseña.value.trim() == "") {
        mostrarMensajeError("password", "Introduce una Contraseña valida*");
        condicion = false;
    }
    return condicion;
}

function mostrarMensajeError(claseInput, mensaje) {
    let elemento = document.querySelector(`.${claseInput}`);
    elemento.lastElementChild.innerHTML = mensaje;
}

function enviarFormulario() {
    form.reset();
    form.lastElementChild.innerHTML = "Muy Bien su inicio de sesión fue exitoso.";
}