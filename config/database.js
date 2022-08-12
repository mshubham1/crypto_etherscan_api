const mongoose = require("mongoose");


exports.connect = () => {
  // Connecting to the database
  mongoose
    .connect("mongodb+srv://mafia123:Mahi987@cluster0.j7nj9.mongodb.net/?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log("database connection failed. exiting now...");
      console.error(error);
      process.exit(1);
    });
};