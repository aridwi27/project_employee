const {Employee } = require('../models/Employee');

module.exports = {
    getAllEmployee: async (req, res) => {
        try {
            const employee = await Employee.findAll();
           
            res.status(200).json(employee);
        } catch (error) {
            console.error('Error fetching Employee:', error);
            res.status(500).json({
                error:
                    'Failed to fetch Employee'
            });
        }
    },
    addEmployee: async (req, res) => {
        console.log(req.body)
        try {
            const employee = await Employee.create(req.body);
            res.status(201).json(employee);
        } catch (error) {
            console.error('Error fetching Employee:', error);
            res.status(500).json({
                error:
                    'Failed to fetch Employee'
            });
        }
    },
    deleteEmployee: async (req, res) => {
        console.log(req.params.id)
        console.log(req.body)
        try {
            const employee = await Employee.destroy({
                where: { id: req.params.id }
            });
            res.status(204).send();
        } catch (error) {
            console.error('Error fetching Employee:', error);
            res.status(500).json({
                error:
                    'Failed to fetch Employee'
            });
        }
    },
    updateEmployee: async (req, res) => {
        try {
            const employee = await Employee.update(req.body,{
                where: { id: req.params.id }
            });
            res.json(employee);
        } catch (error) {
            console.error('Error fetching Employee:', error);
            res.status(500).json({
                error:
                    'Failed to fetch Employee'
            });
        }
    },
    getAllDataEmployee: async (req, res) => {
        try {
            const employee = await Employee.update(req.body,{
                where: { id: req.params.id }
            });
            res.json(employee);
        } catch (error) {
            console.error('Error fetching Employee:', error);
            res.status(500).json({
                error:
                    'Failed to fetch Employee'
            });
        }
    },
}


