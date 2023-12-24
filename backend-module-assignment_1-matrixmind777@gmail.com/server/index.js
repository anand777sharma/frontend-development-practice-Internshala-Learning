const bodyParser = require("body-parser");
const express = require("express");
const storage = require("node-persist");

const app = express();
var jsonParser = bodyParser.json();

// Initializing storage
storage.init();

// Endpoint for adding a student using POST method
app.post("/student", jsonParser, async (req, res) => {
    try {
        // Extracting student data from the request body
        const { student_id, student_name, gpa } = req.body;

        // Storing student data in the storage
        await storage.setItem(student_id, req.body);

        res.send("Student added successfully");
    } catch (error) {
        console.log(error);
    }
});

// Endpoint for retrieving data of all students
app.get('/allstudents', async (req, res) => {
    try {
        // Retrieving all student data from storage
        var items = await storage.values();

        // Initialization of the variable to store the HTML response
        var data = '<h1>All Students Data!</h1> <hr/>';

        // Generating HTML for each student
        for (let s of items) {
            data += `<div>
                    <h2>Student Id: ${s.student_id}</h2>
                    <h3>Name: ${s.student_name}</h3>
                    <h3>GPA: ${s.gpa}</h3>
                </div> <br/>`;
        }
        res.status(200).send(data);

    } catch (error) {
        res.status(400).send(error);
    }
});

// Endpoint for retrieving student data from storage based on id
app.get('/student/:id', async (req, res) => {
    const studentId = req.params.id;

    // Retrieving student data from storage based on id
    const student = await storage.getItem(studentId);

    if (student) {
        res.send(`
            <h1>Student Detail</h1>
            <hr/>
            <h3>Student Id: ${studentId}</h3>
            <h3>Name: ${student.student_name}</h3>
            <h3>GPA: ${student.gpa}</h3>
        `);
    } else {
        res.status(404).send('Student not found');
    }
});

// Endpoint for retrieving the topper among all students
app.get('/topper', async (req, res) => {
    try {
        var items = await storage.values();
        var data = ''; // Initialization of the variable to store the HTML response
        var topper = 0; // Initialization of topper to "0" to get the highest GPA

        // Finding the student with the highest GPA
        items.forEach(s => {
            if (s.gpa > topper) {
                topper = s.gpa;
                data = `<div>
                <h2>Student Id: ${s.student_id}</h2>
                <h3>Name: ${s.student_name}</h3>
                <h3>GPA: ${s.gpa}</h3>
            </div> <br/>`;
            }
        });

        res.status(200).send('<h1>Topper of the Class!</h1> <hr/>' + data);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Starting the server on port 5000
app.listen(5000, () => {
    console.log("server is started");
});
