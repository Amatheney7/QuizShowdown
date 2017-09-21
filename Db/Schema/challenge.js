const mongoose = require('mongoose');


const questionSchema = mongoose.Schema({
  category: String,
  type: String,
  difficulty: String,
  question: String,
  correct_answer: String,
  incorrect_answer: [String],

});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
