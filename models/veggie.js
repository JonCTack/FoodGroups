const mongoose = require('mongoose');

const veggieSchema = new mongoose.Schema({
    name:  String,
    color:  String,
    age: Number,
    readyToEat: Boolean
});



const MyVeggies = mongoose.model('myVeggies', veggieSchema);

module.exports = MyVeggies;