const { response } = require('express');
const express = require('express');
const LocationsSchema= require('../Models/Locations') 


exports.getAllLocations = (req,res)=>{

    LocationsSchema.find()
    .then(response=>{
        res.status(200).json({
            message : 'Locations feched Successfully',
            locations : response
        })  
    })
    .catch(err=>{
        res.status(450).json({error :err})
        console.log("unable executed query")
    })

}