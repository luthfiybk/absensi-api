const express = require('express')
const app = express()
const port = 3000
const pool = require('./connection')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.listen(port, () => {
    console.log(`Server berjalan pada port ${port}`)
})