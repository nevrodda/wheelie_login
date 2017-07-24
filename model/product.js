var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var product = new Schema({
    make: String,
    model: String,
    sellertype : String,
    seller_dealer: String,
    year: Number,
    transmission: String,
    odometer: Number,
    startingprice: Number,
    reserve: Number,
    endsin: Number,
    primarycolour: String,
    interiorcolour: String,
    writtenoff: Boolean,
    registered: Boolean,
    plateno: String,
    regoexpirymonth: Number,
    regoexpiryyear: Number,
    soldwithroadworthy: Boolean,
    vinno: String,
    contactno: Number,
    productdesc: String,
    producttitle: String
});

module.exports = mongoose.model('Product', product);