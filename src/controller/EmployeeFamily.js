const {EmployeeFamily } = require('../models/EmployeeFamily');

module.exports = {
    getAllEmployeeFamily: async (req, res) => {
        try {
            const employeeFamily = await EmployeeFamily.findAll();
           
            res.status(200).json(employeeFamily);
        } catch (error) {
            console.error('Error fetching employeeFamily:', error);
            res.status(500).json({
                error:
                    'Failed to fetch employeeFamily'
            });
        }
    },
    addEmployeeFamily: async (req, res) => {
        console.log(req.body)
        try {
            const employeeFamily = await EmployeeFamily.create(req.body);
            res.status(201).json(employeeFamily);
        } catch (error) {
            console.error('Error fetching EmployeeFamily:', error);
            res.status(500).json({
                error:
                    'Failed to fetch EmployeeFamily'
            });
        }
    },
    deleteEmployeeFamily: async (req, res) => {
        console.log(req.params.id)
        console.log(req.body)
        try {
            const employeeFamily = await EmployeeFamily.destroy({
                where: { id: req.params.id }
            });
            res.status(204).send();
        } catch (error) {
            console.error('Error fetching EmployeeFamily:', error);
            res.status(500).json({
                error:
                    'Failed to fetch EmployeeFamily'
            });
        }
    },
    updateEmployeeFamily: async (req, res) => {
        try {
            const employeeFamily = await EmployeeFamily.update(req.body,{
                where: { id: req.params.id }
            });
            res.json(employeeFamily);
        } catch (error) {
            console.error('Error fetching EmployeeFamily:', error);
            res.status(500).json({
                error:
                    'Failed to fetch EmployeeFamily'
            });
        }
    },
}


