import mongoose from "mongoose";

const StorySchema = new mongoose.Schema({
  title: String,
  text: String,
  page: Number,
});

const QuoteSchema = new mongoose.Schema({
  text: String,
  page: Number,
});

const SummarySchema = new mongoose.Schema({
  text: String,
});

const BookContentSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  bookID: { type: mongoose.Schema.Types.ObjectId, ref: "Books" },
  stories: [
    {
      title: String,
      text: String,
      page: Number,
    },
  ],
  quotes: [
    {
      text: String,
      page: Number,
    },
  ],
  summary: [String],
});

const BookContent =
  mongoose.models.BookContent ||
  new mongoose.model("BookContent", BookContentSchema, "bookcontent");

export default BookContent;
