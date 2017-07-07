const Sequelize = require('sequelize');
const env = require('./env');
const sequelize = new Sequelize(env.DATABASE_NAME, env.DATABASE_USERNAME, env.DATABASE_PASSWORD, {
    host: env.DATABASE_HOST,
    port: env.DATABASE_PORT,
    dialect: env.DATABASE_DIALECT,
    define: {
        underscored: true
    }
});
const db={};
db.Sequelize =  Sequelize;
db.sequelize =  sequelize;

db.users = require("../models/t_user.js")(sequelize,Sequelize);
db.gamelogs = require("../models/t_game_logs.js")(sequelize,Sequelize);
db.walletTransactions=require("../models/t_game_transaction_logs")(sequelize,Sequelize);

db.gamelogs.belongsTo(db.users,{ foreignKey: 'user_id_fk' });
db.users.hasMany(db.gamelogs,{ foreignKey: 'user_id_fk' });

db.walletTransactions.belongsTo(db.users,{foreignKey:'user_id_fk'});
db.users.hasMany(db.walletTransactions,{ foreignKey: 'user_id_fk' });

module.exports=db;