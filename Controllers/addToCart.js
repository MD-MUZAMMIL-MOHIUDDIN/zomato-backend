const { response } = require('express');
const express = require('express');
const addToCartSchema = require('../Models/addToCart')

exports.addToCart = (req,res)=>{
   const orderData= addToCartSchema(req.body)
   orderData.save()
   .then(response=>{
    res.send({
        message : "Added to Cart",
        data : response
    })
   })
   .catch(err=>{
    res.status(450).json({error:err})
   })
}


exports.getCarById = (req,res)=>{
    addToCartSchema.findById(req.params.id)
    .then(response=>{
        res.send({message : "Cart Data",
    
    data :response})
    })
    .catch(err=>{
        res.status(450).json({error :err})
        console.log("unable executed query")
    })
}
 
