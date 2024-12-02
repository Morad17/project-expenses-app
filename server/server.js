import express from "express";
import mysql from "mysql"
import dotenv from "dotenv"
import cors from 'cors'

dotenv.config()

// setup node server with express //
const app = express()
app.use(express.json())
app.use(cors())

// Connect to Mysql Database //
const mdb = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE, 
})

// Send Expected Budget //
app.post("/add-expenses", (req,res) => {
    const q = "INSERT INTO budget (`venue_cost`,`equipment_cost, `performer_cost`, `staff_cost`, `managerial_cost`, `marketing_cost`, `utility_cost` ) VALUES (?)"
    const val = [
        req.body.venue_cost,
        req.body.equipment_cost,
        req.body.performer_cost,
        req.body.staff_cost,
        req.body.managerial_cost,
        req.body.marketing_cost,
        req.body.utility_cost,
    ]
    mdb.query(q, [val], (err, data) => {
        if(err) return res.json(err)
        return res.json("success")
    })
})



// Port for Mysql //
app.listen(process.env.MYSQL_PORT, () => {
    console.log(`Connected to port ${process.env.MYSQL_PORT}`);
})

// Test Connection to Mysql //
// mdb.query(`SELECT * from expenses`, (err, res) => {
//     if (err) {
//         return console.log(err)
//     } else {
//         return console.log(res + "success")
//     }
// })