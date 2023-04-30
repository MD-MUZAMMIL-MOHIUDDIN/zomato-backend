const mongoose =require('mongoose')
const Schema = mongoose.Schema({
    
   
    location_id: {
        type : Number,
        required : true
    },
    location_name : {
        type : String,
        required : true
    },
    state_id: {
        type : Number,
        required : true
    },
    state :  {
        type : String,
        required : true
    },
    country_name:{
        type : String,
        required : true
    }

})


module.exports = mongoose.model('Locations',Schema,'Locations')


//mongoose.model(collection-name-in-db,schema,)