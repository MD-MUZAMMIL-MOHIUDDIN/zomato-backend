const { response } = require('express');
const express = require('express');
const RestaurantSchema  =  require('../Models/Restaurants')


exports.filterRestaurants = (req,res)=>{
 //cuisines.cuisine_id
 //mealTypes.mealtype_id
 //loaction == state_id
let {mealtype_id,cuisine,state_id,lcost,hcost,page,sort}=req.body

   // let {mealtype,cuisine,location,lcost,host,page,sort} =req.body;
    page = page ?page: 1;
    sort = sort ? sort :1;// 1 is ascending and -1 descending

    let Payload ={}
    const itemsPerPage = 2

    let startIndex = itemsPerPage * page -itemsPerPage // 2 * 3 - 2 =4 array starts with 0,1,2,3
    let endIndex = itemsPerPage * page // 2 * 3 =6 [start =3 and end = 5]

    if(mealtype_id){ //mealtype taken from the home page (breakfast,lunch,...) so mealtype is mandatory
        Payload['mealTypes.mealtype_id'] = mealtype_id;
    }
    if(mealtype_id && cuisine){
        Payload['mealTypes.mealtype_id'] = mealtype_id;
        Payload['cuisines.cuisine_id']= {$in :cuisine}//mongoose in operator

    }
    if(mealtype_id && lcost && hcost) //use split() to extract lcost and hcost dlimeter - or to
    {
        Payload['mealTypes.mealtype_id'] = mealtype_id;
        Payload['cost'] = {$lte : hcost , $gte : lcost}
    }
if(mealtype_id && state_id && lcost && hcost){
    Payload['mealTypes.mealtype_id'] = mealtype_id;
    Payload['cuisines.cuisine_id']= {$in :cuisine}//mongoose in operator
    Payload['cost'] = {$lte : hcost , $gte : lcost}

}
    if(mealtype_id && state_id){
        Payload['mealTypes.mealtype_id'] = mealtype_id;
        Payload['state_id']=state_id
    }

    if(mealtype_id && state_id && cuisine)
    {
        Payload['mealTypes.mealtype_id'] = mealtype_id;
        Payload['state_id']=state_id
        Payload['cuisines.cuisine_id']= {$in :cuisine}//mongoose in operator
    }
    if(mealtype_id && state_id && lcost && hcost){
        Payload['mealTypes.mealtype_id'] = mealtype_id;
        Payload['state_id']=state_id
        Payload['cost'] = {$lte : hcost , $gte : lcost}
        
    }
    
    if(mealtype_id && state_id && lcost && hcost && cuisine){
        Payload['mealTypes.mealtype_id'] = mealtype_id;
        Payload['state_id']=state_id
        Payload['cuisines.cuisine_id']= {$in :cuisine}//mongoose in operator
        Payload['cost'] = {$lte : hcost , $gte : lcost}
       
    
    }



    RestaurantSchema.find(Payload).sort({cost :sort})
    .then(response=>{
        
        const filteredResponse = response.slice(startIndex,endIndex);
        res.status(200).json({
            message : 'Restaurants feched Successfully',
            restaurants : filteredResponse,
            TotalPages : response.length,
            page:page
        })
        
    })

    .catch(err=>{
        res.status(450).json({error :err})
      
    })

}


exports.getRestaurantByState = (req,res)=>{
    const state_id = req.params.state_id
    RestaurantSchema.find({state_id:state_id})
    .then(response=>{
        res.send({
            message : "Restaurants in city",
            data : response
        })
    })
      .catch(err=>{
        res.status(450).json({error :err})
      
    })
}

exports.getProductDetails=(req,res)=>{
    const restId = req.params.restId
    RestaurantSchema.find({restaurant_id:restId})
    .then(response=>{
        res.send({
            message:"Restaurant Details",
            data : response
        })
    })
    .catch(err=>{
        res.status(450).json({error :err})
      
    })
}



