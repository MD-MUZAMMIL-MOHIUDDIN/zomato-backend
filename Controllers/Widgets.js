const { response } = require('express');
const express = require('express');
const WidgetsSchema= require('../Models/Widgets') 


exports.getAllWidgets = (req,res)=>{

    WidgetsSchema.find()
    .then(response=>{
        res.status(200).json({
            message : 'Widgets feched Successfully',
            widgets : response
        })  
    })
    .catch(err=>{
        res.status(450).json({error :err})
        console.log("unable executed query")
    })

}



