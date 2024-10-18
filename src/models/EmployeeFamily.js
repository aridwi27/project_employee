const { Sequelize } = require('sequelize');
const sequelize = require('../config/db.config');

const EmployeeFamily = sequelize.define('EmployeeFamily', {
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
    identifier: {
        type: Sequelize.STRING
    },
    job: {
        type: Sequelize.STRING
    },
    place_of_birth: {
        type: Sequelize.DATE
    },
    date_of_birth: {
        type: Sequelize.DATE
    },
    religion: {
        type: Sequelize.ENUM('Islam', 'Katolik', 'Buda', 'Protestan', 'Konghucu')
    },
    is_life: {
        type: Sequelize.BOOLEAN
    },
    is_divorced: {
        type: Sequelize.BOOLEAN
    },
    relation_status: {
        type: Sequelize.ENUM('Suami', 'Istri', 'Anak', 'Anak Sambung')
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
},{
    tableName: 'employee_family'
});

module.exports = {
    EmployeeFamily
}