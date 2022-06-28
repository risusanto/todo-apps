const express = require('express')
const route = require('./routes')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3000

route.New(app)

app.get("/", (req, res) => {
    res.json({
        "success": true
    })
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})