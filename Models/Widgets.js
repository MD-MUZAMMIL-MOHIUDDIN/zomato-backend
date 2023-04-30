const mongoose =require('mongoose')
const Schema = mongoose.Schema({
    
   
    mealtype_id: {
        type : Number,
        required : true
    },
    mealtype : {
        type : String,
        required : true
    },
    content: {
        type : String,
        required : true
    },
    meal_image :  {
        type : String, 
        required : true
    }

})


module.exports = mongoose.model('Widgets',Schema,'Widgets')


//mongoose.model(collection-name-in-db,schema,)