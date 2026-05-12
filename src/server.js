require("dotenv").config();
const mongoose = require("mongoose")

const server = require("../app");
const connectWithDB = require("../src/Config/db.Config");

const PORT = process.env.PORT || 8000;

server.listen(PORT, async () => {
  await connectWithDB();
  console.log(`Server started on port ${PORT}`);
});