/**
 * Created by Rudra on 7/7/2017.
 */
'use strict';
module.exports = function (sequelize, DataTypes) {
    const t_game_transaction_logs = sequelize.define('t_game_transaction_logs',
        {
            user_id_fk: {
                type: DataTypes.STRING,
                required: true,
                references: {
                    model: 't_user',
                    key: 'user_id'
                }
            },
            transaction_id: {
                type: DataTypes.STRING,
                required: true
            },
            transaction_time: {
                type: DataTypes.DATE,
                required: false,
                defaultValue: DataTypes.NOW
            },
            amount: {
                type: DataTypes.DOUBLE,
                required: true
            },
            status: {
                type: DataTypes.ENUM,
                values: ['success', 'failure', 'pending']
            }
        }, {tableName: 't_game_transaction_logs', underscored: true});
    return t_game_transaction_logs;
};
