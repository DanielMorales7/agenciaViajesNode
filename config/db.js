import Sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

console.log(process.env.DB_HOST)

const db = new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASS,{
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    define:{
        timestamps:false
    },
    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 1000
    },
    opertatorAliases:false
});

export default db;