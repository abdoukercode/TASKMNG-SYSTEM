var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('../models/user');

var schema = new Schema({
    content: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
});
schema.post('remove', function(doc){
    var deletedTask =doc;
    User.findById(doc.user, function(err, doc){
        doc.tasks.pull(deletedTask);
        doc.save();

    });
});
module.exports = mongoose.model('Task', schema);
