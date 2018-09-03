var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new MessageSchema object
// This is similar to a Sequelize model
var MessageSchema = new Schema({
  // `title` is required and of type String
  subject: {
    type: String,
    required: true,
    unique: true
  },
  body: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    require: true
  },
  lastName: {
    type: String,
    require: true
  }

});

// Custom method `isSaved`
MessageSchema.methods.isSaved = function(val) {
    // changes saved value
    this.saved = val;
    // Return the new saved
    return this.saved;
  };

// This creates our model from the above schema, using mongoose's model method
var Message = mongoose.model("Message", MessageSchema);

// Export the Message model
module.exports = Message;
