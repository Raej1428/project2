require('dotenv').config();
require('mysql2');

module.exports = {
    development: {
        database: process.env.DATABASE,
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
        host: process.env.HOST,
        dialect: 'mysql'
    },
    test: {
        database: process.env.DATABASE,
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
        host: process.env.HOST,
        dialect: 'mysql'
    },
    production: {
        use_env_variable: process.env.JAWSDB_URL,
        insecureAuth: true,
        dialect: 'mysql'
    }
    
}