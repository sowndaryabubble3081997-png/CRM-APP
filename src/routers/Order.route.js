const express = require("express");
const OrderRouter= express.Router();
console.log("order  request recived......");

//Import Model
const Order=require("../Models/Order.Model")

//Imports
const OrderController=require("../Controllers/Order.controller")


OrderRouter.post("/create-order",OrderController.createOrder);

// /*
// @Route - /user/get-All-Profiles , 
// @Access - Private
// @Controller - getAllProfiles
// */
//http:localhost:8000/api/UserAccounts/get-All-Profiles
OrderRouter.get("/get-Order-Date",OrderController. getOrderById);






module.exports = OrderRouter;