require('dotenv').config()

let schemes = ['http']
if (typeof process.env.SCHEMES !== "undefined") {
    schemes = process.env.SCHEMES.split(",")
}

module.exports = {
    doc: {
        info: {
            title: 'To Do API',
            description: 'Description',
        },
        host: process.env.HOST || 'localhost:3000',
        schemes: schemes,
    },
    outputFile: '../../doc/swagger.json',
    endpointFiles: ['../../handler/activity.js']
}