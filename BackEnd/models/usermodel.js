const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {
      type: String,
      maxLength: [60, "Your name must be in between 2 to 60 characters"],
      minLength: [2, "Your name must be at least 2 characters"],
      required: [true, "Enter your first name"],
    },
    password: {
      type: String,
      maxLength: [32, "Your password must be in between 8 to 32 characters"],
      minLength: [8, "Your name must be at least 8 characters"],
      required: [true, "Enter your password"],
    },
  })
  
  const users = mongoose.model("users", userSchema);
  
  module.exports = users;