
'use strict';

const restify = require('restify'),
        port  = process.env.PORT || 8080,
        userRoutes = require('./routes/User_routes'),
        userController = require('./controller/User_controller');

const server = restify.createServer({
    name: "node API"
});

server.use(restify.CORS());
userRoutes(server,userController);

server.listen(port, ()=>{
    console.info("Server listening on port: " + port);
})