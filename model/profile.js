var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var profile = new Schema({
    username: String,
    headline: String,
    email: String,
    newsletter: Boolean
});

module.exports = mongoose.model('Product', product);