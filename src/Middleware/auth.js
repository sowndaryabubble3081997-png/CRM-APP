const jwt = require("jsonwebtoken");
const Account = require("../Models/User.Model");

async function requireAuth(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1] || null;
  try {
    // check token
    if (!token) {
      // throw new Error("Login first!");
      res.status(400).json({ message: "No token provided!" });
    }
    // get token from req
    const isValidToken = jwt.verify(token, "system@2026");
    if (!isValidToken) {
      throw new Error("Unauthorized. Please login first!");
    }

    // check user exits
    const isUserExits = await Account.findOne({ email: isValidToken.email });//{}
    if (!isUserExits) {
      throw new Error("No User Found. Please register first!");
    }

    // payload attached to req
    req.payload = { email: isUserExits.email, role: isUserExits.role };
    // req move
    next();
  } catch (err) {
    if (err) {
      res.status(500).json({
        error: true,
        message: err,
      });
    }
  }
}

module.exports = requireAuth;