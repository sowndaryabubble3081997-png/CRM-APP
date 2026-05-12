const mongoose = require("mongoose");

// Product schema creation // structure of document
const UserAccountSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);
// create ACCOUNT Collection Modal: Collection
const Account = mongoose.model("UserAccounts", UserAccountSchema);

module.exports = Account;
