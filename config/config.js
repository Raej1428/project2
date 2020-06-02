require('dotenv').config();
require('mysql');

module.exports = {
    development: {
        username: process.env.user,
        password: process.env.password,
        database: process.env.database,
        host: process.env.host,
        dialect: 'mysql'
    },
    test: {
        username: process.env.user,
        password: process.env.password,
        database: process.env.database,
        host: process.env.host,
        dialect: 'mysql'
    },
    production: {
        use_env_variable: process.env.JAWSDB_URL,
        dialect: 'mysql'
    }
    
}