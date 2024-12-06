// Handle form submission with AJAX
$(document).ready(function () {
    $('#appointmentForm').submit(function (e) {
      e.preventDefault(); // Prevent the form from submitting the traditional way
      
      const formData = $(this).serialize(); // Serialize the form data for sending
  
      $.ajax({
        type: 'POST',
        url: '/appointment', // The backend endpoint
        data: formData,
        success: function (response) {
          // Hide the form and show a success message
          $('#appointmentForm').hide();
          $('#confirmationMessage').show();
        },
        error: function () {
          alert('Error submitting the form. Please try again.');
        }
      });
    });
  });
  