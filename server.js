const express = require('express')
const swaggerUi = require('swagger-ui-express');

const swaggerDocument = require('./doc/swagger.json');
const route = require('./routes')

require('dotenv').config()
const app = express()
const port = process.env.PORT || 3000

options = {
    mysqlDB: "hello"
}

route.New(app, options)

app.get("/", (req, res) => {
    res.json({
        "success": true
    })
})

app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})