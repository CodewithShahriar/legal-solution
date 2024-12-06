const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;

// Endpoint to handle the form submission
app.post('/submit-appointment', (req, res) => {
    const appointmentData = req.body;
    const filePath = path.join(__dirname, 'data.json');

    // Log the incoming form data for debugging
    console.log('Received appointment data:', appointmentData);

    // Check if the data.json file exists
    fs.readFile(filePath, (err, data) => {
        if (err && err.code === 'ENOENT') {
            console.log('File not found, creating new data.json');

            // File doesn't exist, create it and write the first appointment data
            fs.writeFile(filePath, JSON.stringify([appointmentData], null, 2), (err) => {
                if (err) {
                    console.log('Error writing to the data file:', err);
                    return res.status(500).send('Error writing to the data file');
                }
                console.log('First appointment saved successfully!');
                res.send('Appointment booked successfully!');
            });
        } else if (err) {
            console.log('Error reading the data file:', err);
            return res.status(500).send('Error reading the data file');
        }

        // Parse the current data or start with an empty array
        let appointments = JSON.parse(data || '[]');

        // Add the new appointment to the array
        appointments.push(appointmentData);

        // Write the updated data back to the file
        fs.writeFile(filePath, JSON.stringify(appointments, null, 2), (err) => {
            if (err) {
                console.log('Error writing to the data file:', err);
                return res.status(500).send('Error writing to the data file');
            }
            console.log('Appointment saved successfully!');
            res.send('Appointment booked successfully!');
        });
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
