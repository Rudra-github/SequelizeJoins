/**
 * Created by Rudra on 7/7/2017.
 */
'use strict'
module.exports = function (sequelize, DataTypes) {
    const t_game_logs = sequelize.define('t_game_logs', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        user_id_fk: {
            type: DataTypes.STRING,
            required: true,
            references: {
                model: 't_user',
                key: 'user_id'
            }
        },
        gamename: {
            type: DataTypes.STRING,
            required: true
        }
        ,startBalnce: {//balance before play
            type: DataTypes.DOUBLE,
            required: true
        },
        playpoints: {//bet amount
            type: DataTypes.DOUBLE,
            required: true
        },
        winpoints: {//win amount
            type: DataTypes.DOUBLE,
            required: true
        },
        endBalnce: {//balance after play
            type: DataTypes.DOUBLE,
            required: true
        },
        playtime:{//bet amount
            type:DataTypes.DATE,
            required:false,
            defaultValue: DataTypes.NOW
        }
    }, {underscored: true});
    return t_game_logs;
};