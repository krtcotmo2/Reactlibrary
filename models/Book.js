const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now },
  link: {type: String},
  pageCount: {type: Number},
  isbm: {type: String,  unique : true, required : true},
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
