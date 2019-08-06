const moongose = require('mongoose');
const Schema = moongose.Schema;

let ProductSchema = new Schema({
    name: {type: String, require: true, max: 100},
    price: {type: Number, require: true},
});

// Export the model
module.exports = moongose.model('Product', ProductSchema);