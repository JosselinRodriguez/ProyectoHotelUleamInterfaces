document.getElementById("form-ingreso").addEventListener("submit", function(event) {
    event.preventDefault(); // previene que el formulario sea enviado
    var nombre = document.getElementById("nombre").value;
    alert("¡Bienvenido al Hotel XYZ, " + nombre + "! Su ingreso ha sido registrado.");
});