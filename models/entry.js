const mongoose = require("mongoose");


const EntrySchema = mongoose.Schema({
   timestamp : {
    type: String,
    required: true,
  }
  
});

module.exports = mongoose.model("Entry", EntrySchema);
