const express = require('express');
const mongoose = require('mongoose')
require('dotenv').config();
const app = express();
let port = 5000;
const MyFruits = require('./models/fruit');
const MyVeggies = require('./models/veggie');

let connectionString = `mongodb+srv://${process.env.MONGOUSERNAME}:${process.env.MONGOPASSWORD}@mongosetupcluster.easzlik.mongodb.net/FoodGroups?retryWrites=true&w=majority`

mongoose.set('strictQuery', false);

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});


app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.post('/create_fruit', async (req, res) => {
    let returnedVal = await MyFruits.create({
        name:req.body.nameString,
        color:req.body.colorString,
        age: req.body.ageNum,
        readyToEat: req.body.eatBool
    })
    console.log(returnedVal)
    res.send(returnedVal)
})

app.post('/create_veggie', async (req, res) => {
    let returnedVal = await MyVeggies.create({
        name:req.body.nameString,
        color:req.body.colorString,
        age: req.body.ageNum,
        readyToEat: req.body.eatBool
    })
    console.log(returnedVal)
    res.send(returnedVal)
})


app.delete('/delete_nameless_data', async (req,res) => {
    let deletedItemsArray = await MyFruits.deleteMany({name: ""});
    console.log(deletedItemsArray);
    res.send(`deleted ${deletedItemsArray.length} items.`)
})

app.get('/fruits', async (req, res)=>{
    let response = await MyFruits.find({});
    res.json(response)
})

app.get('/veggies/:veggieName', async (req, res)=>{
    let response = await MyVeggies.find({name: req.params.veggieName});
    res.json(response)
})


app.get('/veggies', async (req, res)=>{
    let response = await MyVeggies.find({});
    res.json(response)
})


app.get('/display_veg/:veggieName', (req, res) => {
    res.sendFile('public/display_veg/index.html', {root: __dirname})})

app.get('/display_veg/', (req, res) => {
    res.sendFile('public/display_veg/index.html', {root: __dirname})})


app.listen(port, () => {
    console.log(`Server is Listening on `+ port);
})
