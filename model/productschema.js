const mongoose=require('mongoose')

//define schma for product collection
const productSchema=new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true

    },
    description:{
        type:String,
        required:true
    },
    catogory:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    rating:{
        rate:{
            type:Number,
            required:true
        },
        count:{
            type:Number,
            required:true
        }
    }

})
//create a model to store data
const products=new mongoose.model("products",productSchema)
//export model
module.exports=products