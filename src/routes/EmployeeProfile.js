const express = require('express')
const EmployeeProfile = express.Router()

const { getAllEmployeeProfile, addEmployeeProfile, deleteEmployeeProfile, updateEmployeeProfile } = require('../controller/EmployeeProfile')

EmployeeProfile.get('/employeeprofile', getAllEmployeeProfile)
EmployeeProfile.post('/employeeProfile', addEmployeeProfile)
EmployeeProfile.delete('/employeeProfile/:id', deleteEmployeeProfile)
EmployeeProfile.put('/employeeProfile/:id', updateEmployeeProfile)





module.exports = EmployeeProfile