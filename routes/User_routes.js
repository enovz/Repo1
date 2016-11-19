
'use strict';

const Router = require('restify-router').Router;

let registerRoutes = (server, controller)=>{
    
    let router = new Router();

    router.get('', (req, res, next) => {
        let users = controller.getAll();
        res.send(200, users);
    })
    router.get('/:id', (req, res, next) => {
        let id = +req.params.id;
        let user = controller.getById(id);
        user ? res.send(200, user) : res.send(404, "No such user");
    })

    router.applyRoutes(server, 'api/users');
}

module.exports = registerRoutes;