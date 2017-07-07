'use strict'

module.exports = function (sequelize, DataTypes) {
    const t_user = sequelize.define('t_user', {
        user_id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            required: true
        },
        role_mask: {
            type: DataTypes.INTEGER,
            required: true
        }
    }, {tableName: 't_user', underscored: true});
    return t_user;
};