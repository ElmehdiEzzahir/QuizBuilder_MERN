const mongoose = require("mongoose");

const QuizScehma = new mongoose.Schema(
  {
    NomQuiz: String,
    qst_arr: { type: [String] },
    quiz_members: { type: [String] },
    dem_date: Date,
    arr_date:Date,
    tentatives_pu:Number,
    tentatives_pus:{type:[Number]},
  },
  {
    collection: "Quiz",
  }
);

const Quiz =mongoose.model("Quiz", QuizScehma);
module.exports = Quiz;