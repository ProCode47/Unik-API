const mongoose = require("mongoose");


const EntrySchema = mongoose.Schema({
   uuid : {
    type: String,
    required: true,
  },
  pseudonyms : {
    type: String,
    required: true,
  }
  
});

module.exports = mongoose.model("Entry", EntrySchema);
