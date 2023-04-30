const mongoose =require('mongoose')
const Schema = mongoose.Schema({
    
 
id:{
    type:Number,
    required:true
},

    hotel_name:{
        type : String,
        required : true
    },
    inputs:{},
    cost :{
        type:Number,
        required:true
    },
    bank:String,
    date:Date,
    status:String


})
/*
    {
        "id": 61706,
        "hotel_name": "Burger King",
        "inputs": {
        "name": "Ankita",
        "email": "ankita@gmail.com",
        "phone": "9876543211",
        "address": "Hno 211 Nagpur"
        },
        "cost": 712
    }

*/
module.exports = mongoose.model('Orders',Schema,'Orders')


//mongoose.model(collection-name-in-db,schema,)             