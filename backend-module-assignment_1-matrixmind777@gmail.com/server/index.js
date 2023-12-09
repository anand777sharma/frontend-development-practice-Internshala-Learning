const bodyParser = require("body-parser");
const express = require("express")
const storage = require("node-persist");

const app = express();
var jsonParser = bodyParser.json();
storage.init()
// retriving student data from the storage based on id
app.get('/student/:id', async (req, res) => {
    const studentId = req.params.id;
    const student = await storage.getItem(studentId);
    if (student) {
        res.send(`
            <h1>Student Detail</h1>
            <hr/>
            <h3>Student Id: ${studentId}</h3>
            <h3>Name: ${student.name}</h3>
            <h3>GPA: ${student.gpa}</h3>
        `);
    } else {
        res.status(404).send('Student not found');
    }
})
// retriving Topper among all Students
app.get('/topper', async (req, res) => {
    try {
        var items = await storage.values();
        var data = '';//initalization of the variable to store the response
        var topper = 0;
        items.forEach(s => {
            if (s.gpa > topper) {
                topper = s.gpa;
                data = `<div>
                <h2>Student Id: ${s.student_id}</h2>
                <h3>Name: ${s.student_name}</h3>
                <h3>GPA: ${s.gpa}</h3>
            </div> <br/>`;
            }
        })
        res.status(200).send('<h1>Topper of the Class!</h1> <hr/>' + data)



    } catch (error) {
        res.status(500).send(error);
    }
})

// getting output of all student
app.get('/allstudents', async (req, res) => {
    try {
        var items = await storage.values();
        //initalization of the variable to store the response
        var data = '<h1>All Students Data!</h1> <hr/>';//this part will become as the heading of the page on the output screen
        for (let s of items) {
            data += `<div>
                    <h2>Student Id: ${s.student_id}</h2>
                    <h3>Name: ${s.student_name}</h3>
                    <h3>GPA: ${s.gpa}</h3>
                </div> <br/>`;
        }
        res.status(200).send(data);

    }
    catch (error) {
        res.status(400).send(error);
    }
})

// putting data into the storage using POST method
app.post("/student", jsonParser, async (req, res) => {
    try {
        const { student_id, student_name, gpa } = req.body;
        await storage.setItem(student_id, req.body);

        res.send("Student added succesfully")
    } catch (error) {
        console.log(error);
    }

})


app.listen(5000, () => {
    console.log("server is started");
});