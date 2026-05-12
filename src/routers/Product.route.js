const express = require("express");
const ProductRouter = express.Router();
console.log("product request recived......");

//Import Model
const Product=require("../Models/Product.Model")

//Imports
const ProductController=require("../Controllers/Product.controller")


// //Route Paths
// /* 
// @route -/user/create-product
// @accesss- public
// @controller -creatproduct
//  */
ProductRouter.post("/create-product",ProductController.createProduct);


// /*
// @Route - /user/get-All-Products , 
// @Access - Private
// @Controller - getAllProduct 
// */
//http:localhost:8000/api/product/get-All-Products
ProductRouter.get("/get-All-Products",ProductController.getAllProducts);

// /*
// @route -/user/get-Product/:Id
// @access -private
// @controller -getProductById
//  */

//http:localhost:8000/api/product/get-Product/:UserId
// ProductRouter.get("/get-Product/:UserId",ProductController.getAllProducts);//Id is a property name value is given by us on runtime

// /*
// @Route-/user/update-ProductById,
// @Access-Private
// @Controller-updateProductById


ProductRouter.put("/update-ProductById",ProductController.updateProductById);


// /*
// @Route-/user/deleteProduct-By-Id,
// @Access-Private
// @Controller-deleteProductById
// */
ProductRouter.delete("/deleteProduct-By-Id",ProductController.deleteProductById);


module.exports = ProductRouter;