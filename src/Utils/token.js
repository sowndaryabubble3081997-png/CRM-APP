const jwt = require("jsonwebtoken");

// variable
const key = "system@2026";

// Generate secure token
function genAccessToken(payload = {}) {
  try {
    const accessToken = jwt.sign(payload, "system@2026");
    if (!accessToken) {
      throw new Error({
        message: "failed to generate token!",
        isError: true,
        token: null,
      });
    }

    return { message: "Token Generated", isError: false, token: accessToken };
  } catch (error) {
    if (error) {
      return error;
    }
  }
}

// Verify token
function verifyAccessToken(accessToken) {
  try {
    // verify token
    const isVerified = jwt.verify(accessToken, key);
    if (!isVerified) {
      throw new Error({ message: "failed to verify token!", error: true });
    }
    const payload = isVerified;
    return payload;
  } catch (error) {
    if (error) {
      return error;
    }
  }
}

module.exports = { genAccessToken, verifyAccessToken };