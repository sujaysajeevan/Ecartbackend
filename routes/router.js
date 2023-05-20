// to define routes for client request,create routes folder and router.js files
//     -import express
const express=require('express')
//import productcontroller
const productController=require('../controllers/productController')

const wishlistController=require('../controllers/wishlistController')
//import cart controller
const cartcontroller=require('../controllers/cartcontroller')
//    -using express create an object for router in order to setup path

const router=new express.Router()
//    -resolving client requests
//api request getallproducts
router.get('/products/all-products',productController.getallproducts)

//api call for get particular products
router.get('/products/view-product/:id',productController.viewproduct)

//api call for wishlist product
router.post('/wishlist/add-to-wishlist',wishlistController.addtowishlist)

//api -get wishlist prosucts
router.get('/wishlist/get-wishlist',wishlistController.getwishlistitems)

//api call remove wishlist
router.delete('/wishlist/remove-wishlist-item/:id',wishlistController.removewishlistitem)

//api call for add to cart
router.post('/cart/add-to-cart',cartcontroller.addtocart)

//api call to get otem
router.get('/cart/get-item',cartcontroller.getcart)

//api remove item from cart
router.delete('/cart/remove-item/:id',cartcontroller.removecartitems)

//api call for increment items
router.get('/cart/increment-count/:id',cartcontroller.incrementcount)

//apicall decrement
router.get('/cart/decrement-count/:id',cartcontroller.decrementcount)



//export router
module.exports=router