const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
  showDowns: { type: Number, default: 0 },
  totalQuestions: { type: Number, default: 0 },
  questionsRight: { type: Number, default: 0 },
  questionsWrong: { type: Number, defaults: 0 },
});

const User = mongoose.model('User', userSchema);


module.exports = User;
