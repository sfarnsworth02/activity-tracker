const mongoose = require('mongoose');
const userSchema = require('./user.model');

userSchema.statics = {
    create: function(data, callback)
    {
        const document = new this(data);
        document.save(callback)
    },
    get: function(query, callback)
    {
        this.find(query, callback);
    },
    update: function(query, data, callback)
    {
        this.findOneAndUpdate(query, {$set: data}, {new: true}, callback);
    },
    delete: function(query, callback)
    {
        this.findOneAndDelete(query, callback);
    }
}

// name of the collection
// 'user' is located at the end of the http request because it is retreiving the model
const userModel = mongoose.model('user', userSchema);
module.exports = userModel;