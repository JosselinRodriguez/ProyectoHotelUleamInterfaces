// Obtener los elementos HTML que se necesitan
const habitaciones = document.querySelectorAll('.habitacion');
const tablaPrecios = document.querySelector('table');
const eventos = document.querySelectorAll('.evento');

// Agregar un evento click a cada habitación para mostrar su precio
habitaciones.forEach(habitacion => {
    habitacion.addEventListener('click', () => {
        const precio = habitacion.querySelector('p:last-child').textContent;
        alert(precio);
    });
});

// Agregar un evento click a cada evento para mostrar su información
eventos.forEach(evento => {
    evento.addEventListener('click', () => {
        const fecha = evento.querySelector('p:nth-child(1)').textContent;
        const hora = evento.querySelector('p:nth-child(2)').textContent;
        const precio = evento.querySelector('p:last-child').textContent;
        alert(`Fecha: ${fecha}\nHora: ${hora}\nPrecio: ${precio}`);
    });
});

// Agregar un evento hover a la tabla de precios para resaltar las filas
tablaPrecios.addEventListener('mouseover', event => {
    if (event.target.tagName === 'TD') {
        const fila = event.target.parentElement;
        fila.style.backgroundColor = '#f2f2f2';
    }
});

tablaPrecios.addEventListener('mouseout', event => {
    if (event.target.tagName === 'TD') {
        const fila = event.target.parentElement;
        fila.style.backgroundColor = '';
    }
});