import mongoose from "mongoose";

const BookSummarySchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  text: String,
  bookID: { type: mongoose.Schema.Types.ObjectId, ref: "Books" },
});

const BookSummary =
  mongoose.models.BookSummary ||
  new mongoose.model("BookSummary", BookSummarySchema, "booksummary");

export default BookSummary;
