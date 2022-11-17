const mongoose = require("mongoose");

const URI = "mongodb+srv://group:group3@cluster0.apzoh1j.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then((db) => console.log("db is connected"))
  .catch((err) => console.error(err));

module.exports = mongoose;
