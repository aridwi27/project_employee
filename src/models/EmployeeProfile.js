// models/User.js
const Sequelize = require('sequelize');
const sequelize = require('../config/db.config');
const EmployeeProfile = sequelize.define('employee_profile', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    employee_id: Sequelize.INTEGER,
    place_of_birth: Sequelize.STRING,
    date_of_birth: Sequelize.DATE,
    gender: {
        type: Sequelize.ENUM,
        values: ['Laki-Laki', 'Perempuan']
    },
    is_married: Sequelize.BOOLEAN,
    prof_pict: Sequelize.STRING,
    created_by: Sequelize.STRING,
    updated_by: Sequelize.STRING,
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
}, {
    tableName: 'employee_profile'
});

module.exports = {
    EmployeeProfile
}