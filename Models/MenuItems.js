const mongoose =require('mongoose')
const Schema = mongoose.Schema({
    
   
    menu_id: {
        type : Number,
        required : true
    },
    menu_name:{
        type : String,
        required : true
    },
    description:{
        type : String,
        required : true
    },
    restaurant_id :{
        type : Number,
        required : true
    },
    menu_image:{
        type : String,
        required : true
    },
    menu_type:{
        type : String,
        required : true
    },
    menu_price:{
        type : Number,
        required : true
    }

   

})


/**
 * 
 * {"_id":{"$oid":"63f358d40769542e040b6292"},
 * "menu_id":{"$numberInt":"2"},
 * "menu_name":"Farmhouse",
 * "description":"Delightful combination of onion, capsicum, tomato & grilled mushroom",
 * "restaurant_id":{"$numberInt":"1"},
 * "menu_image":"https://b.zmtcdn.com/data/dish_photos/a3d/7ca006ec8907c2ae13fd006cf0853a3d.png",
 * "menu_type":"vegetarian",
 * "menu_price":"229"}
 */


module.exports = mongoose.model('MenuItems',Schema,'MenuItems')


//mongoose.model(collection-name-in-db,schema,)