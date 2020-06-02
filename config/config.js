require('dotenv').config();
require('mysql2');

module.exports = {
    development: {
        username: process.env.user,
        password: process.env.password,
        database: process.env.database,
        host: process.env.host,
        dialect: 'mysql2'
    },
    test: {
        username: process.env.user,
        password: process.env.password,
        database: process.env.database,
        host: process.env.host,
        dialect: 'mysql2'
    },
    production: {
        use_env_variable: process.env.JAWSDB_URL,
        dialect: 'mysql2'
    }
    
}