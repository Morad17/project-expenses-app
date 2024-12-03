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
app.put("/add-expenses", (req,res) => {
    const q = "UPDATE budget SET `venue` = ?,`equipment`= ?, `performers`= ?, `staff`= ?, `managerial`= ?, `marketing`= ?, `utility`= ?,`total`= ? WHERE id = ?"
    const val = [
        req.body.venue,
        req.body.equipment,
        req.body.performers,
        req.body.staff,
        req.body.managerial,
        req.body.marketing,
        req.body.utility,
        10
    ]
    mdb.query(q, [...val, 1], (err, data) => {
        if(err) return res.json(err)
        else{
            return res.json("success")
        }
        
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