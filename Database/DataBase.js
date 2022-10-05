const mongoose = require("mongoose");

const connectDB = async () => {
  // console.log(process.env.MONGO_URI);
  try {
    const con = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`mongoose connected: ${con.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit();
  }
};
module.exports = connectDB;
