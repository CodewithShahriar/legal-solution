# Legal Solution Website

This is a legal services website that allows users to book appointments with lawyers. The site includes various sections like Legal Consultation, Our Lawyers, and Legal Resources. It also includes a modal form for booking an appointment.

## Features

- **Responsive Design**: The website is built using Bootstrap for a mobile-friendly and responsive layout.
- **Appointment Form**: A modal form for users to input their details and book an appointment.
- **Backend**: Node.js and Express.js handle form submissions, storing appointment data in a JSON file.

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

legal-solution/
│
├── images/                # Images folder
│   └── logo2.png
│
├── index.html             # Main HTML file
├── style.css              # CSS Stylesheet
├── appointment.js         # JavaScript for handling the appointment form
├── data.json              # JSON file storing appointment data
├── server.js              # Node.js backend server file
└── package.json           # Project dependencies and configurations
