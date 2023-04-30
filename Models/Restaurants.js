const mongoose =require('mongoose')
const Schema = mongoose.Schema({
    _id : {
        type : String,
        required : true
    },
    restaurant_id :{
        type :Number,
        required : true
    },
    restaurant_name : {
        type : String,
        required : true
    },
    location_id: {
        type : Number,
        required : true
    },
    state_id: {
        type : Number,
        required : true
    },
    restaurant_thumb : {
        type : String,
        required : true
    },
    average_rating: {
        type : Number,
        required : true
    },
    rating_text: {
        type : String,
        required : true
    },
    cost: {
        type : Number,
        required : true
    },
    contact_number: {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    mealTypes :[{
        mealtype_id : Number,
        mealtype_name : String
    }],
    cuisines: [{
        cuisine_id : Number,
        cuisine_name :String
    }],
    image_gallery :[String]
    
   

})


module.exports = mongoose.model('Restaurants',Schema,'Restaurants')


//mongoose.model(collection-name-in-db,schema,)