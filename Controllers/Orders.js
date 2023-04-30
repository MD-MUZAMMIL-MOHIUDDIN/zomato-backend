const { response } = require('express');
const express = require('express');
const OrderSchema = require('../Models/Orders')


exports.placeOrder =async (req,res)=>{

   const orderData =  OrderSchema(req.body)
  
 orderData.save()
 .then(response=>{
    res.send({
        message : "Order Data",
        data : response
    })
 })

 .catch(err=>{
    res.status(450).json({error :err})
    console.log("unable executed query")
})
}
 
exports.getAllOrders= (req,res)=>{
    OrderSchema.find()
    .then(response=>{
        res.send({
            message : "Order Data",
            data : response
        })
    })
    .catch(err=>{
        res.status(450).json({error :err})
        console.log("unable executed query")
    })
}




exports.updateOrder = (req,res)=>{
    OrderSchema.findOneAndUpdate({id:req.params.id},req.body)
    .then(response=>{
        res.send({
            message : "Order Data",
            data : response
        })
    })
    .catch(err=>{
        res.status(450).json({error :err})
        console.log("unable executed query")
    })
}