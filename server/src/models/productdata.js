const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/ProductDb');
// mongoose.connect('mongodb+srv:user_rajani:pwdrajani@mycluster.98jdk.azure.mongodb.net/eventsdb?retryWrites=true&w=majority');
const Schema= mongoose.Schema;
var NewProductSchema = new Schema({
    productId : Number,
    productName : String,
    productCode : String,
    releaseDate : String,
    description : String,
    price : Number,
    starRating : Number,
    imageUrl : String

});

 var Productdata = mongoose.model('product',NewProductSchema,'products');
 module.exports = Productdata;

// module.exports = mongoose.model('product',NewProductSchema,'products');