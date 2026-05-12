const express = require("express");
const mongoose = require("mongoose");
//import model
const Products = require("../Models/Product.Model");
const Product = require("../Models/Product.Model");
const { data } = require("framer-motion/client");

// Create Product
const createProduct = async (req, res) => {
  //1.collect data
  // const productData=req.body;

  2; //store data in database
  const newProduct = await Products.insertMany(req.body);
  console.log("data storing", newProduct);

  res.json({ message: "product data stored", newProduct:req.body});
};

2.// to get data from database by using find
const getAllProducts = async (req, res) => {
  const newProduct=await Products.find(req.body);
  console.log("data coming");
  res.json({message:"data found",newProduct:newProduct});
};


3.// update data by id
const updateProductById= async(req,res)=>{
  const updateProduct=await Products.updateOne(
   { name:"Smart Watch"},{brand:"Wearables"}
  )
  console.log(updateProduct);
  res.json({message:"data matched will updated",updateProduct:updateProduct})

}


const deleteProductById = async (req, res) => {
  const deleteProduct=await Products.deleteOne({brand:"Noise"});
  console.log(deleteProduct);
  res.json({message:"product deleted",deleteProduct});
};

module.exports = {
  createProduct,
  getAllProducts,
  // getProductById,
  updateProductById,
  deleteProductById,
};
