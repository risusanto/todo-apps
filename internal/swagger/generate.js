const swaggerAutogen = require('swagger-autogen')();

const {doc, outputFile, endpointFiles} = require('./config')

swaggerAutogen(outputFile, endpointFiles, doc)