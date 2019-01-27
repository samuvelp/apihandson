const Pool = require('pg').Pool
const pool = new Pool({
    user : 'samuvel',
    host : 'localhost',
    database : 'warmupapi',
    password : 'samuvel',
    port : 5432,
})
//get all users
const getUsers = (req,res)=>{
    pool.query('SELECT * FROM users ORDER BY id ASC',(error,results)=>{
        if(error){
            throw error
        }
        res.status(200).json(results.rows)
    })
}
//getting a single user
const getSingleUser = (req,res)=>{
    const id = parseInt(req.params.id)
    pool.query(`SELECT * FROM users WHERE id = $1`,[id],(error,results)=>{
        if(error){
            throw error
        }
        res.status(200).json(results.rows)
    })
}
//insert data into database
const createUser = (req,res)=>{
    const {name,email} = req.body
    pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email],(error,results)=>{
        if(error){
            throw error
        }
        res.status(201).send(`User added with ID : ${results.insertId}`)
    })
}
//export functionns
module.exports ={
    getUsers,
    getSingleUser,
    createUser
}