document.addEventListener('DOMContentLoaded', () => {
    const appointmentForm = document.getElementById('appointmentForm');
    const confirmationMessage = document.getElementById('confirmationMessage');
  
    appointmentForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent default form submission
  
      // Get input values (for further processing if needed)
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const date = document.getElementById('date').value;
  
      // Clear the form and display confirmation message
      appointmentForm.style.display = 'none';
      confirmationMessage.style.display = 'block';
    });
  });
  