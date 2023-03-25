const Schema = mongoose.Schema;
import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
  book: {
    title: String,
    subtitle: String,
    author: String,
  },
});

const Books =
  mongoose.models.Books || new mongoose.model("Books", BookSchema, "books");
export default Books;
