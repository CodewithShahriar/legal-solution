# Legal Solution Website

This is a legal services website that allows users to book appointments with lawyers. The site includes various sections like Legal Consultation, Our Lawyers, and Legal Resources. It also includes a modal form for booking an appointment.

## Key Features

- **Appointment Booking**: Users can fill out a form with their name, email, phone number, message, and appointment date to book an appointment with a lawyer.
- **Confirmation Message**: After submitting the appointment form, users will receive a confirmation message indicating that their appointment was successfully booked.
- **Responsive Design**: The website is built using Bootstrap for a mobile-friendly and responsive layout.
- **Backend Functionality**: Node.js and Express.js handle form submissions, storing appointment data in a JSON file.

## Tech Stack

- **Frontend**:
  - HTML5
  - CSS3
  - Bootstrap 5
  - jQuery (for AJAX form submission)

- **Backend**:
  - Node.js
  - Express.js
  - Body-Parser (for handling form data)
  - File System (for storing form data in a `data.json` file)

## Appointment Data

Appointment data is stored in the `data.json` file on the server. You can view the submitted appointments there.

### Backend API

The backend API endpoint for the appointment form is `/appointment`. When the form is submitted, the data is sent to this endpoint using a POST request. The server will process the form data and return a success message.

## License

This project is open source and available under the [MIT License](LICENSE).
