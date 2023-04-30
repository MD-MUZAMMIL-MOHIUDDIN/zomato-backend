const mongoose = require('mongoose')
const Schema = mongoose.Schema({


    hotel_name: {
        type: String,
        required: true
    },
    items: [],
    Amount: {
        type: Number,
        required: true
    }

})


module.exports = mongoose.model('addToCarts', Schema, 'addToCarts')


//mongoose.model(collection-name-in-db,schema,)