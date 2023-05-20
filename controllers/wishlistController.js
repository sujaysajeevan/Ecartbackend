const wishlists=require('../model/wishlistSchema')

//wish list logic
exports.addtowishlist=async(req,res)=>{
    //get product detail from request
    
    //using destructuring
    
    const {id,title,price,image}=req.body
    //logic
    try{
    //check if the prooduct in the mongodb
    const item=await wishlists.findOne({id})
    if(item){
    res.status(403).json("item already exist in the wishlist")
    }
    else{
        //add the item to the wishlist
        const newproduct=new wishlists({id,title,price,image})
        //to store into the mongodb
          await newproduct.save()
          res.status(200).json("product added to the wishlist")
        
    }
    }
    catch(error){
        res.status(401).json(error)
    
    }
    
    }
    
    //get wishlist data-logic
    exports.getwishlistitems=async(req,res)=>{
        //logic
        try{
//get all wishlst item from the mongodb
const allWishlistItem=await wishlists.find()
res.status(200).json(allWishlistItem)

    

        }
        catch(error){
            res.status(401).json(error)
        }
    }
    //remove wishlist item
    exports.removewishlistitem=async(req,res)=>{
        //get id from the request
        const {id}=req.params
       
        try{
            const removewishlistitem=await wishlists.deleteOne({id})
            if(removewishlistitem){
                //get all wishlist item after removing particular wishlist item
                const allWishlists=await wishlists.find()//REMAINING WISHLIST ITEMS
                res.status(200).json(allWishlists)
            }
            else{
                res.status(404).json("item not present")
            }
                }
                
        
        catch(error){
            res.status(401).json(error)
 
        }
    }
