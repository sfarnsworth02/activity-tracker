const express = require('express')
// exporting an express.Router()
// is called/used in server.js
// expects a Mongoose model to be passed in as the only argument

module.exports = function(Model)
{
    const router = express.Router();
    const modelKey = Model.modelName.toLowerCase();
    const controller = require('./controller');
    const ctrl = controller(Model);

    router.get(`/${modelKey}/`, ctrl.getAll);
    router.get(`/${modelKey}/:id`, ctrl.getById);
    router.get(`/${modelKey}-email/:email`, ctrl.getByEmail);
    router.post(`/${modelKey}/`, ctrl.create);
    router.delete(`/${modelKey}/:id`, ctrl.delete);
    router.put(`/${modelKey}/:id`, ctrl.update);
    return router;
}