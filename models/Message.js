var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new MessageSchema object
// This is similar to a Sequelize model
var MessageSchema = new Schema({
  // `title` is required and of type String
  message: {
    type: String,
    required: true
   
  },
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    require: true
  }
});


// This creates our model from the above schema, using mongoose's model method
var Message = mongoose.model("Message", MessageSchema);

// Export the Message model
module.exports = Message;
