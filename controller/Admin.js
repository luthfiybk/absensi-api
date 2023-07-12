const pool = require('./../connection')
const express = require('express')
const app = express()

//Dashboard
app.get('/admin/dashboard', (req, res) => {
    pool.query('SELECT *')
})