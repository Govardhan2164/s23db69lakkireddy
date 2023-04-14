const mongoose = require("mongoose")
const treesSchema = mongoose.Schema({
trees_Name: String,
trees_height: String,
trees_cost: Number
})

module.exports = mongoose.model("trees",treesSchema)