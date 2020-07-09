function handleError(res, err)
{
    console.log('Error in the controller: ', err);
    return res.status(400).send({err});
}

// exports a single function that creates an OBJECT
// the only argument the function expects is a mongoose model
module.exports = function(Model)
{
    return{
        create: (req, res, next) =>
        {
            console.log('body: ', req.body);
            Model.create(req.body, function(err, data)
            {
                if(err) { 
                    handleError(res, err); 
                    return 
                }
                res.json({
                    message: `${Model.modelName} created successfully.`,
                    data,
                });
            })
        },
        update: (req, res, next) =>
        {
            const query = { _id: req.params.id };
            Model.update(query, req.body, function(err, data)
            {
                if(err) {
                    handleError(res, err);
                    return;
                }
                res.json({
                    message: `${Model.modelName} updated successfully.`,
                    data,
                });
            })
        },
        delete: (req, res, next) =>
        {
            const query = { _id: req.params.id };
            Model.delete(query, function(err, data)
            {
                if(err) {
                    handleError(res, err);
                }
                res.json({
                    message: `${Model.modelName} deleted successfully.`,
                    data
                });
            })
        },
        getAll: (req, res, next) =>
        {
            const query = {};
            Model.get(query, (err, data) => 
            {
                if(err) {
                    handleError(res, err);
                    return;
                }
                res.json(data);
            })
        },
        getById: (req, res, next) =>
        {
            const query = { _id: req.params.id };
            Model.get(query, (err, data) =>
            {
                if(err) {
                    handleError(res, err);
                    return;
                }
                res.json(data);
            })
        },
        getByEmail: (req, res, next) =>
        {
            const query = { email: req.params.email };
            Model.get(query, (err, data) =>
            {
                console.log('trying to grab by email: ', query);
                if(err) {
                    handleError(res, err);
                    return;
                }
                res.json(data);
                console.log(data);
            })
        },
    }
}