const mongoose = require("mongoose");
require("dotenv").config({ path: ".env" });

const initialisation = async () => {
  try {
    const connectDB = await mongoose.connect(process.env.MONGO_URI);

    if (connectDB) console.log("Connected to mongoDB");
  } catch (error) {
    console.log("Error happpend during connecting to db", error);
  }
};

module.exports = { initialisation };
