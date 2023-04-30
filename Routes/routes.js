const express =require('express')
const restaurantsController =require('../Controllers/Restaurants')
const WidgetsController = require('../Controllers/Widgets')
const locationController = require('../Controllers/Locations')
const OrderController = require('../Controllers/Orders')
const MenuController = require('../Controllers/MenuItems')
const addToCartController = require('../Controllers/addToCart')
const router=  express.Router()

router.post('/filterRestaurants',restaurantsController.filterRestaurants)
router.get('/restaurant/:state_id',restaurantsController.getRestaurantByState)
router.get("/getDetails/:restId",restaurantsController.getProductDetails)
router.get('/getAllWidgets',WidgetsController.getAllWidgets)

router.post("/order",OrderController.placeOrder)
router.get("/getOrders",OrderController.getAllOrders)
router.patch('/order/:id',OrderController.updateOrder)


router.post("/addToCart",addToCartController.addToCart)
router.get("/getCart/:id",addToCartController.getCarById)

router.get("/menuItems/:restId",MenuController.getMenuItems)

router.get('/getAllLocations',locationController.getAllLocations)
router.get('/',(req,res)=>{
res.send("Hello your are connected")
})

module.exports = router;