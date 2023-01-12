const mongoose = require("mongoose");
const userschema = new mongoose.Schema(
  {
    email: String,
    displayName: String,
    uid: String,
  },
  { collection: "users" }
);
const User = mongoose.model("User", userschema)
module.exports={User}
