const index = require('./routes/index');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express'); //7.6k (gzipped: 3k)


function routes(app){
    const specs = swaggerJsDoc({
        definition: {
            openapi: "3.1.0",
            info:{
                title:"Mon API perso",
                version:"0.1.0",
            },
        },
        apis:["./routes/*.js"],
    });
    app.use('/', index);
    app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));
}


module.exports = routes;