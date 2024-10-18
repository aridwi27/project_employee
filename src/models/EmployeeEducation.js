const Sequelize = require('sequelize');
const sequelize = require('../config/db.config');

const EmployeeEducation = sequelize.define('employee_education', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    employee_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING
    },
    level: {
        type: Sequelize.ENUM('Tk', 'Sd', 'Smp', 'Sma', 'Strata 1', 'Strata 2', 'Doktor', 'Profesor')
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    created_by: {
        type: Sequelize.STRING
    },
    updated_by: {
        type: Sequelize.STRING
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    },
    updatedAt: {
        type: Sequelize.DATE,
        allowNull:
            false,
        defaultValue: Sequelize.NOW
    }
},
{
    tableName: 'employee_education'
});

module.exports = {
    EmployeeEducation
}