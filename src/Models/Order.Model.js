const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true,
    unique: true
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true
  },
  orderDate: {
    type: Date,
    required: true,
    default: Date.now,
     
  },
},
  
  { timestamps: true },

);
const Order= mongoose.model("OrderDetails", orderSchema);

module.exports = Order;
