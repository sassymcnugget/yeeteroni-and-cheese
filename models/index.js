const mongoose = require("mongoose");

const connectionString = "mongodb://localhost:27017/yeeteroni-and-cheese";
const configOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
};

mongoose
  .connect(connectionString, configOptions)
  .then(() => console.log("MongoDB connected successfully"))
  .catch(err => console.log(`MongoDB connections error: ${err}`));

module.exports = {
  User: require("./user")
};
