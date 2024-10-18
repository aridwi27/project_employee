const express = require('express')
const getAllDataEmployee = express.Router()

const { getAllEmployee, addAllEmployee, deleteAllEmployee, getAllEmployeeDetails } = require('../controller/getAllEmployee')

getAllDataEmployee.get('/employeedata', getAllEmployee)
getAllDataEmployee.post('/employeedata', addAllEmployee)
getAllDataEmployee.get('/employeedata/:id', getAllEmployeeDetails)
getAllDataEmployee.delete('/employeedata/:id', deleteAllEmployee)
// Employee.put('/employee/:id', updateEmployee)





module.exports = getAllDataEmployee