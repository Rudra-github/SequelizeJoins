/**
 * Created by Rudra on 7/7/2017.
 */
'use strict';

const env = {
    PORT: process.env.PORT || 8181,
    DATABASE_URL: process.env.DATABASE_URL || 'jdbc:mysql://localhost:3306/seqtest',
    DATABASE_NAME: process.env.DATABASE_NAME || 'seqtest',
    DATABASE_HOST: process.env.DATABASE_HOST || 'localhost',
    DATABASE_USERNAME: process.env.DATABASE_USERNAME || 'root',
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || 'root',
    DATABASE_PORT: process.env.DATABASE_PORT || 3306,
    DATABASE_DIALECT: process.env.DATABASE_DIALECT || 'mysql',

    NODE_ENV: process.env.NODE_ENV || 'development',
};

module.exports = env;