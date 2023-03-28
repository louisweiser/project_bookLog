import mongoose from "mongoose";

const QuoteSchema = new mongoose.Schema({
  text: String,
  page: String,
});

const BookQuoteSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  bookID: { type: mongoose.Schema.Types.ObjectId, ref: "Books" },
  quotes: [QuoteSchema],
});

const BookQuote =
  mongoose.models.BookQuote ||
  new mongoose.model("BookQuote", BookQuoteSchema, "bookquote");

export default BookQuote;
