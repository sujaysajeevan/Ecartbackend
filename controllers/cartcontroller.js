const carts=require('../model/cartschema')

//add to cart
exports.addtocart=async(req,res)=>{
    //get product deatails from request
    const{ id,title,price,image,quantity }=req.body
    //logic 
    try{
        //check product is already in the cart
        const product=await carts.findOne({id})
        if(product){
            //product is alredy in the cart then increment product quantity
            product.quantity+=1
            //update grand total in mongodb
            product.grandTotal=product.price*product.quantity
            //to save changes mongodb
            product.save()
            //send response to the client
            res.status(200).json("product added to the cart")
        } 
        else{
            //product is not available in the cart
            //add product into the cart
            const newproduct=new carts({id,title,price,image,quantity,grandTotal:price})
            //save new product
            await newproduct.save()
            //send responce to the client
            res.status(200).json("product added to the cart")

        }
    }
    catch(error){
        res.status(401).json(error)
    }
}

//get cart products
exports.getcart=async (req,res)=>{
 //get all products from cart collection
 try{
    const allitem=await carts.find()
    res.status(200).json(allitem)

 }
 catch(error){
    res.status(401).json(error)
}
}


//remove from cart
exports.removecartitems=async(req,res)=>{
    //grt product id from
    const{id} =req.params
    try{
//remove an item from the cart
const removeproduct=await carts.deleteOne({id})
if(removeproduct.deletedCount!=0){
    //get remaining products
    const remainingproducts=await carts.find()
    res.status(200).json(remainingproducts)
}
else{
    res.status(404).json("item not present")
}
    }
    catch(error){
        res.status(404).json(error)

    }
}

exports.incrementcount=async (req,res)=>{
    //get product id from request params
    const{id}=req.params
    try{
        //check if the product already in the cart
        const product=await carts.findOne({id})

        if(product){
            //increment product count and grad total
            product.quantity+=1
            product.grandTotal=product.price*product.quantity
            //save changes in mogodb
            await product.save()
            //increment get all the products from the cart after updating in particular cart item
            const allitem=await carts.find()
            res.status(200).json(allitem)
            

        }
        else{
            res.status(404).json("item not present")
        }
    }
    catch(error){
        res.status(404).json(error)

    }
}

exports.decrementcount=async (req,res)=>{
    //get product id from request params
    const{id}=req.params
    try{
        //check if the product already in the cart
        const product=await carts.findOne({id})

        if(product){
            //decrement product count and grad total
            product.quantity-=1
            if(product.quantity==0){
                //remove product from the cart
                await carts.deleteOne({id})
                const allitem=await carts.find()
                res.status(200).json(allitem)
                
            }
            else{
                product.grandTotal=product.price*product.quantity
                //save changes in mogodb
                await product.save()
                //increment get all the products from the cart after updating in particular cart item
                const allitem=await carts.find()
                res.status(200).json(allitem)
            }
          
        }
        else{
            res.status(404).json("item not present")
        }
    }
    catch(error){
        res.status(404).json(error)

    }
}



