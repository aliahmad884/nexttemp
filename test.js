require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.SQL_DB_NAME, process.env.SQL_USER, process.env.SQL_PASSWORD, {
    host: process.env.SQL_HOST,
    dialect: "mysql",
    port: process.env.SQL_PORT || 3306, // Ensure port is provided or defaults to 3306
    dialectOptions: {
        connectTimeout: 60000 // 60 seconds
    }
});

sequelize.authenticate()
    .then(() => {
        console.log("Connection has been established successfully!");
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
