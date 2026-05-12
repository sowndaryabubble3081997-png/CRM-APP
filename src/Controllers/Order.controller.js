const express = require("express");
const mongoose = require("mongoose");

//import model
const Order = require("../Models/Order.Model");

const OrderDetails = require("../Models/Order.Model");

const { data, object } = require("framer-motion/client");

// Create Account
const createOrder = async (req, res) => {
  //1.collect data
  // const productData=req.body;

  2; //store data in database
  const newOrder = await OrderDetails.insertMany(req.body);
  console.log("data storing", newOrder);

  res.json({ message: "product data stored", newOrder: req.body });
};

// get all profiles
const getOrderById = async (req, res) => {
  const getOrdered = await OrderDetails.findById("69f1ce4e1e4e48ebdda6b054");
  console.log("data found", getOrdered);
  res.json({ message: "order data found" });
};

module.exports = { createOrder,  getOrderById };
