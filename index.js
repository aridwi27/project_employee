const express = require('express');
const bodyParser = require("body-parser");
const employeeProfile = require('../employee_project/src/routes/EmployeeProfile');
const Employee = require('./src/routes/Employee');
const EmployeeEducation = require('./src/routes/EmployeeEducation');
const EmployeeFamily = require('./src/routes/EmployeeFamily');
const getAllDataEmployee = require('./src/routes/getAllEmployee');

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', employeeProfile);
app.use('/api', Employee)
app.use('/api', EmployeeEducation)
app.use('/api', EmployeeFamily)
app.use('/api', getAllDataEmployee)


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});