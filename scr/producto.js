document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
 
    contactForm.addEventListener('submit', function (event) {
       event.preventDefault(); // Evita el envío del formulario para realizar la validación
 
       // Obtiene los valores del formulario
       const name = document.getElementById('name').value.trim();
       const email = document.getElementById('email').value.trim();
       const message = document.getElementById('message').value.trim();
 
       // Validación simple
       if (name === '' || email === '' || message === '') {
          formMessage.text
 