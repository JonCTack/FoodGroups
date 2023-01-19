const mongoose = require('mongoose');

const fruitSchema = new mongoose.Schema({
    name:  String,
    color:  String,
    age: Number,
    readyToEat: Boolean
});



const MyFruits = mongoose.model('myFruits', fruitSchema);

module.exports = MyFruits;