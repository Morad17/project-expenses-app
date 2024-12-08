import express from "express";
import mysql from "mysql"
import dotenv from "dotenv"
import cors from 'cors'

dotenv.config()

// setup node server with express //
const app = express()
app.use(express.json())
app.use(cors())

const port = process.env.RENDER_MYSQL_PORT

// Connect to Mysql Database //
const mdb = mysql.createConnection({
    host: process.env.RENDER_MYSQL_HOST,
    user: process.env.RENDER_MYSQL_USERNAME,
    password: process.env.RENDER_MYSQL_PASSWORD,
    database: process.env.RENDER_MYSQL_DATABASE, 
})

// Get Budget //

app.get("/get-budget", (req,res) => {
    const q = "SELECT * FROM budget WHERE id = 1"
    mdb.query(q, (err,data) => {
        if (err) return res.json(err)
        else {
            return res.json(data)
        }
    })
})

// Get Expenses //

app.get("/get-expenses", (req,res) => {
    const q = "SELECT * FROM newexpenses WHERE id = 1"
    mdb.query(q, (err,data) => {
        if (err) return res.json(err)
        else {
            return res.json(data)
        }
    })
})

// Send Expected Budget //
app.put("/add-budget", (req,res) => {
    const q = "UPDATE budget SET `venue` = ?,`equipment`= ?, `performers`= ?, `staff`= ?, `managerial`= ?, `marketing`= ?, `utility`= ?,`total`= ? WHERE id = 1"
    const val = [
        req.body.venue,
        req.body.equipment,
        req.body.performers,
        req.body.staff,
        req.body.managerial,
        req.body.marketing,
        req.body.utility,
        0
    ]
    mdb.query(q, [...val], (err, data) => {
        if(err) return res.json(err)
        else{
            return res.json("success")
        }
        
    })
})

// Update Expenses //
app.put("/new-expenses", (req,res) => {
    const q = "UPDATE newexpenses SET `venue` = ?,`equipment`= ?, `performers`= ?, `staff`= ?, `managerial`= ?, `marketing`= ?, `utility`= ?,`total`= ? WHERE id = 1"
    const val = [
        req.body.venue,
        req.body.equipment,
        req.body.performers,
        req.body.staff,
        req.body.managerial,
        req.body.marketing,
        req.body.utility,
        0
    ]
    mdb.query(q, [...val], (err, data) => {
        if(err) return res.json(err)
        else{
            return res.json("success")
        }
        
    })
})

// Reset Budget //

app.put("/reset-budget", (req,res) => {
    const q = "UPDATE budget SET `venue` = 0,`equipment`= 0, `performers`= 0, `staff`= 0, `managerial`= 0, `marketing`= 0, `utility`= 0,`total`= 0 WHERE id = 1"
    mdb.query(q, (err, data) => {
        if(err) return res.json(err)
        else{
            return res.json("success")
        }
        
    })
})



// Port for Mysql //
app.listen(port, () => {
    console.log(`Connected to port ${port}`);
})

// Test Connection to Mysql //
// mdb.query(`SELECT * from expenses`, (err, res) => {
//     if (err) {
//         return console.log(err)
//     } else {
//         return console.log(res + "success")
//     }
// })