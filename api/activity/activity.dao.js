const mongoose = require('mongoose');
const activitySchema = require('./activity.model');

activitySchema.statics = {
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
    },
}

// name of the collection
const activityModel = mongoose.model('activity', activitySchema);
module.exports = activityModel;