const express = require("express");
const UserRouter = express.Router();
console.log("user  request recived......");

//Import Model
const User = require("../Models/User.Model");
const Account=require("../Models/User.Model")

//Imports
const UserController = require("../Controllers/User.controller");

// middleware
const requireAuth = require("../Middleware/auth");

// //Route Paths
// /*
// @route -/user/create-Account
// @accesss- public
// @controller -createAccount
//  */

// Public Router
UserRouter.post("/create-Account", UserController.createAccount);

UserRouter.post("/Log-in", UserController.LoginUser);

//private Router

UserRouter.get(
  "/get-profile",
  requireAuth,
  // requireRole("admin"),
  UserController.getUserProfile,
);

// /*
// @Route - /user/get-All-Profiles ,
// @Access - Private
// @Controller - getAllProfiles
// */
//http:localhost:8000/api/UserAccounts/get-All-Profiles
UserRouter.get("/get-All-Profiles", UserController.getAllProfiles);

// /*
// @Route-/user/update-PasswordById,
// @Access-Private
// @Controller-updatePasswordById

UserRouter.put("/update-PasswordById", UserController.updatePasswordById);

module.exports = UserRouter;
