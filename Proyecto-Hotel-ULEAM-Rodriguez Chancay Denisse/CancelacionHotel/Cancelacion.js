const formCancelar = document.getElementById('form-cancelar');

formCancelar.addEventListener('submit', (event) => {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const numReserva = document.getElementById('num-reserva').value;

    // Realizar petición AJAX para procesar la cancelación de reserva
    // ...

    alert(`La reserva número ${numReserva} de ${nombre} ha sido cancelada.`);
});