const {EmployeeProfile } = require('../models/EmployeeProfile');

module.exports = {
    getAllEmployeeProfile: async (req, res) => {
        try {
            const employeeProfile = await EmployeeProfile.findAll();
           
            res.status(200).json(employeeProfile);
        } catch (error) {
            console.error('Error fetching EmployeeProfile:', error);
            res.status(500).json({
                error:
                    'Failed to fetch EmployeeProfile'
            });
        }
    },
    addEmployeeProfile: async (req, res) => {
        try {
            const employeeProfile = await EmployeeProfile.create(req.body);
            res.status(201).json(employeeProfile);
        } catch (error) {
            console.error('Error fetching EmployeeProfile:', error);
            res.status(500).json({
                error:
                    'Failed to fetch EmployeeProfile'
            });
        }
    },
    deleteEmployeeProfile: async (req, res) => {
        try {
            const employeeProfile = await EmployeeProfile.destroy({
                where: { id: req.params.id }
            });
            res.status(204).send();
        } catch (error) {
            console.error('Error fetching EmployeeProfile:', error);
            res.status(500).json({
                error:
                    'Failed to fetch EmployeeProfile'
            });
        }
    },
    updateEmployeeProfile: async (req, res) => {
        try {
            const employeeProfile = await EmployeeProfile.update(req.body,{
                where: { id: req.params.id }
            });
            res.json(updatedEmployeeProfile);
        } catch (error) {
            console.error('Error fetching EmployeeProfile:', error);
            res.status(500).json({
                error:
                    'Failed to fetch EmployeeProfile'
            });
        }
    },
}


