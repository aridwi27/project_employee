const { Sequelize } = require('sequelize');
const sequelize = require('../config/db.config');

const Employee = sequelize.define('Employee', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nik: {
        type: Sequelize.STRING
    },
    name: {
        type: Sequelize.STRING
    },
    is_active: {
        type: Sequelize.BOOLEAN
    },
    start_date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    end_date: {
        type: Sequelize.DATE,
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
},{
    tableName: 'employee'
});

module.exports = {
    Employee
}