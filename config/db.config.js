require("dotenv").config()

module.exports = {
    // HOST: process.env.HOST || "localhost",
    // USER: process.env.DATABASE_USER || "newuser",
    // PASSWORD: process.env.DATABASE_PASSWORD || "password",
    // DB: process.env.DATABASE || "mysql",
    // dialect: "mysql",

    HOST: "localhost",
    DB_PORT: 5432,
    USER: "postgres",
    DB: "hr",
    PASSWORD: "YeRjCHvgxw22",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
}
