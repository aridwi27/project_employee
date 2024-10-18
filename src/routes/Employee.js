const express = require('express')
const Employee = express.Router()

const { getAllEmployee, addEmployee, deleteEmployee, updateEmployee } = require('../controller/Employee')

Employee.get('/employee', getAllEmployee)
Employee.post('/employee', addEmployee)
Employee.delete('/employee/:id', deleteEmployee)
Employee.put('/employee/:id', updateEmployee)





module.exports = Employee