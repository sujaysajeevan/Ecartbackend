//logic- resoving api
//get all products logic
//import product collection
const products = require('../model/productschema')


exports.getallproducts = async (req, res) => {
    try {
        // get all products from products colleection from mongodb
        const allproducts = await products.find()
        res.status(200).json(allproducts)
    }
    catch (error) {
        res.status(401).json(error)

    }
}

//view a particular product
exports.viewproduct = async (req, res) => {
    //get id from request
    const id = req.params.id
    //logic
    try {
        //check id in mongodb
        const product = await products.findOne({id})
        if (product) {
            res.status(200).json(product)

        }
        else {
            res.status(404).json("item not found")

        }

    }
    catch (error) {
        res.status(401).json(error)

    }
}
