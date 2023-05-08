const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const cardNumber = document.querySelector('#cardNumber').value;
    const cardName = document.querySelector('#cardName').value;
    const expDate = document.querySelector('#expDate').value;
    const cvv = document.querySelector('#cvv').value;

    if (cardNumber && cardName && expDate && cvv) {
        alert('Pago exitoso');
        form.reset();
    } else {
        alert('Por favor, llene todos los campos');
    }
});