// Obtener el formulario y agregar un evento al botón de envío
var reservationForm = document.getElementById("reservation-form");
reservationForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente

    // Obtener el correo electrónico del huésped y verificar si ya ha reservado antes
    var email = document.getElementById("email").value;
    if (localStorage.getItem(email) !== null) {
        alert("Ya ha reservado en nuestro hotel antes.");
        return;
    }

    // Si no ha reservado antes, guardar la información en el almacenamiento local
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var habitacion = document.getElementById("habitacion").value;
    var checkin = document.getElementById("checkin").value;
    var checkout = document.getElementById("checkout").value;
    var personas = document.getElementById("personas").value;
    var reserva = {
        nombre: nombre,
        apellido: apellido,
        habitacion: habitacion,
        checkin: checkin,
        checkout: checkout,
        personas: personas
    };
    localStorage.setItem(email, JSON.stringify(reserva));

    // Mostrar un mensaje de confirmación
    alert("¡Gracias por su reserva! Le hemos enviado un correo electrónico de confirmación.");
});