appointmentForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        date: document.getElementById('date').value,
    };

    // Save data in LocalStorage
    let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    appointments.push(formData);
    localStorage.setItem('appointments', JSON.stringify(appointments));

    // Clear form and show confirmation
    appointmentForm.style.display = 'none';
    confirmationMessage.style.display = 'block';
});
