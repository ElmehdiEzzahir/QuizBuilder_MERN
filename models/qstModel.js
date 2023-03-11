const mongoose = require("mongoose");

const QstScehma = new mongoose.Schema(
  {
    Qsten: String,
    Bonrps: String,
    err_rps: { type: [String] },
    id_quiz: Number,
    diffeculter:String,
  },
  {
    collection: "Qst",
  }
);

const Qst =mongoose.model("Qst", QstScehma);
module.exports = Qst;