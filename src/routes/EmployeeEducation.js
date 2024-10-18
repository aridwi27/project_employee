const express = require('express')
const EmployeeEducation = express.Router()

const { getAllEmployeeEducation, addEmployeeEducation, deleteEmployeeEducation, updateEmployeeEducation } = require('../controller/EmployeeEducation')

EmployeeEducation.get('/employeeeducation', getAllEmployeeEducation)
EmployeeEducation.post('/employeeeducation', addEmployeeEducation)
EmployeeEducation.delete('/employeeeducation/:id', deleteEmployeeEducation)
EmployeeEducation.put('/employeeeducation/:id', updateEmployeeEducation)





module.exports = EmployeeEducation