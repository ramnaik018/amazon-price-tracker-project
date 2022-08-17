const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    // required: true
  }
},{timestamps:true});

// export model user with UserSchema
module.exports = mongoose.model("product", ProductSchema);
