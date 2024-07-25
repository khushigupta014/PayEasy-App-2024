document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Basic validation
        if (!name || !email || !message) {
            alert('All fields are required!');
            return;
        }

        // Additional validation can be added here (e.g., email format)

        // Simulate form submission
        alert('Thank you for contacting us, ' + name + '! We will get back to you soon.');
        
        // Clear the form
        contactForm.reset();
    });
});
