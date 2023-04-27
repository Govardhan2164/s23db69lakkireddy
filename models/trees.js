const mongoose = require("mongoose")
const treesSchema = mongoose.Schema({
// trees_Name: String,
// trees_height: String,
// trees_cost: Number
trees_Name: {
    type: String,
    required: true

},
trees_height: {
    type: String,
    required: true

},
trees_cost: {
    type: Number,
    required: true,
    min : 0,
    max : 100000

}
})


module.exports = mongoose.model("trees",treesSchema)