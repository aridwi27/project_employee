const {EmployeeEducation } = require('../models/EmployeeEducation');

module.exports = {
    getAllEmployeeEducation: async (req, res) => {
        try {
            const employeeEducation = await EmployeeEducation.findAll();
           
            res.status(200).json(employeeEducation);
        } catch (error) {
            console.error('Error fetching EmployeeEducation:', error);
            res.status(500).json({
                error:
                    'Failed to fetch EmployeeEducation'
            });
        }
    },
    addEmployeeEducation: async (req, res) => {
        console.log(req.body)
        try {
            const employeeEducation = await EmployeeEducation.create(req.body);
            res.status(201).json(employeeEducation);
        } catch (error) {
            console.error('Error fetching EmployeeEducation:', error);
            res.status(500).json({
                error:
                    'Failed to fetch EmployeeEducation'
            });
        }
    },
    deleteEmployeeEducation: async (req, res) => {
        console.log(req.params.id)
        console.log(req.body)
        try {
            const employeeEducation = await EmployeeEducation.destroy({
                where: { id: req.params.id }
            });
            res.status(204).send();
        } catch (error) {
            console.error('Error fetching EmployeeEducation:', error);
            res.status(500).json({
                error:
                    'Failed to fetch EmployeeEducation'
            });
        }
    },
    updateEmployeeEducation: async (req, res) => {
        try {
            const employeeEducation = await EmployeeEducation.update(req.body,{
                where: { id: req.params.id }
            });
            res.json(employeeEducation);
        } catch (error) {
            console.error('Error fetching EmployeeEducation:', error);
            res.status(500).json({
                error:
                    'Failed to fetch EmployeeEducation'
            });
        }
    },
}


