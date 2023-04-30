const { response } = require('express');
const express = require('express');
const MenuItemSchema = require('../Models/MenuItems') 


exports.getMenuItems = (req,res)=>{
const restId = req.params.restId
    MenuItemSchema.find({restaurant_id : restId})
    .then(response=>{
        res.status(200).json({
            message : `Menu Items in Restaurant ${restId}`,
            menudata : response
        })  
    })
    .catch(err=>{
        res.status(450).json({error :err})
        console.log("unable executed query")
    })

}