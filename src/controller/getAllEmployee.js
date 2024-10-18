const { EmployeeEducation } = require('../models/EmployeeEducation');
const { Employee } = require('../models/Employee');
const { EmployeeProfile } = require('../models/EmployeeProfile');
const { EmployeeFamily } = require('../models/EmployeeFamily');

const defineEmployeeRelationships = () => {

};

module.exports = {
    getAllEmployee: async (req, res) => {
        try {
            Employee.hasOne(EmployeeProfile, { foreignKey: 'id' });
            EmployeeProfile.belongsTo(Employee, { foreignKey: 'id' });
            Employee.hasMany(EmployeeEducation, { foreignKey: 'employee_id' });
            EmployeeEducation.belongsTo(Employee, { foreignKey: 'employee_id' });
            Employee.hasMany(EmployeeFamily, { foreignKey: 'employee_id' });
            EmployeeFamily.belongsTo(Employee, { foreignKey: 'employee_id' });
        
            const employee = await Employee.findAll({
                include: [
                    {
                        model: EmployeeProfile,
                        attributes: ['place_of_birth', 'date_of_birth', 'gender', 'is_married', 'prof_pict']
                    },
                    {
                        model: EmployeeFamily,
                        attributes: ['name', 'identifier', 'job', 'place_of_birth', 'date_of_birth', 'religion', 'is_divorced', 'relation_status'], // Customize attributes as needed
                    },
                    {
                        model: EmployeeEducation,
                        attributes: ['name', 'level', 'description'], // Customize attributes as needed
                    },
                ]
            });

            res.status(200).json(employee);
        } catch (error) {
            console.error('Error fetching Employee:', error);
            res.status(500).json({
                error:
                    'Failed to fetch Employee'
            });
        }
    },
    getAllEmployeeDetails: async (req, res) => {
        try {
            console.log(req.params.id, 'data req')
            const employee = await Employee.findOne({
                where: {id: req.params.id},
                include: [
                    {
                        model: EmployeeProfile,
                        attributes: ['place_of_birth', 'date_of_birth', 'gender', 'is_married', 'prof_pict']
                    },
                    {
                        model: EmployeeFamily,
                        attributes: ['name', 'identifier', 'job', 'place_of_birth', 'date_of_birth', 'religion', 'is_divorced', 'relation_status'], // Customize attributes as needed
                    },
                    {
                        model: EmployeeEducation,
                        attributes: ['name', 'level', 'description'], // Customize attributes as needed
                    },
                ]
            });

            res.status(200).json(employee);
        } catch (error) {
            console.error('Error fetching Employee:', error);
            res.status(500).json({
                error:
                    'Failed to fetch Employee'
            });
        }
    },
    addAllEmployee: async (req, res) => {
        try {
            Employee.hasOne(EmployeeProfile, { foreignKey: 'id' });
            EmployeeProfile.belongsTo(Employee, { foreignKey: 'id' });
            Employee.hasMany(EmployeeEducation, { foreignKey: 'employee_id' });
            EmployeeEducation.belongsTo(Employee, { foreignKey: 'employee_id' });
            Employee.hasMany(EmployeeFamily, { foreignKey: 'employee_id' });
            EmployeeFamily.belongsTo(Employee, { foreignKey: 'employee_id' });
            
            const employee = await Employee.create(req.body).then(employee => {
                console.log(req.body, 'data request')
                return Promise.all([
                    EmployeeEducation.bulkCreate(req.body.employee_educations.map(data => ({
                        employee_id: employee.id,
                        ...data
                    }))),
                    EmployeeFamily.bulkCreate(req.body.EmployeeFamilies.map(data => ({
                        employee_id: employee.id,
                        ...data
                    }))),
                    EmployeeProfile.create({
                        employee_id: employee.id,
                        ...req.body.employee_profile
                    })
                ])
            })

            res.status(201).json(employee);
        } catch (error) {
            console.error('Error add data Employee:', error);
            res.status(500).json({
                error:
                    'Failed to add data Employee'
            });
        }
    },
    deleteAllEmployee: async (req , res) => {
        try {
            const employee = await Employee.findOne({where: {id: req.params.id}})
            await EmployeeEducation.destroy({ where: { employee_id: req.params.id } });
            await EmployeeFamily.destroy({ where: { employee_id: req.params.id } });
            await EmployeeProfile.destroy({ where: { employee_id: req.params.id } });
            await employee.destroy();
            res.status(204).send();
            console.log('Employee and related data deleted successfully!');
        } catch (error) {
            console.error('Error delete Employee:', error);
            res.status(500).json({
                error:
                    'Failed to delete Employee'
            });
        }

    },
    updateAllEmployee: async (req , res) => {
        try {
            const employee = await Employee.findOne({where: {id: req.params.id}})
            // await EmployeeEducation.update(req.body, { where: { employee_id: employee.id, req.body } });
            // await EmployeeFamily.update(req.body { where: { employee_id: req.params.id } });
            await employee.destroy();
            res.status(204).send();
            console.log('Employee and related data deleted successfully!');
        } catch (error) {
            console.error('Error fetching Employee:', error);
            res.status(500).json({
                error:
                    'Failed to fetch Employee'
            });
        }

    }
}
