const express = require('express')
const EmployeeFamily = express.Router()

const { getAllEmployeeFamily, addEmployeeFamily, deleteEmployeeFamily, updateEmployeeFamily } = require('../controller/EmployeeFamily')

EmployeeFamily.get('/employeefamily', getAllEmployeeFamily)
EmployeeFamily.post('/employeefamily', addEmployeeFamily)
EmployeeFamily.delete('/employeefamily/:id', deleteEmployeeFamily)
EmployeeFamily.put('/employeefamily/:id', updateEmployeeFamily)





module.exports = EmployeeFamily