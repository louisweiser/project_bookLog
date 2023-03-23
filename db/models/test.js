const Schema = mongoose.Schema;
import mongoose from "mongoose";

const TestSchema = new mongoose.Schema({
  book: {
    title: String,
    subtitle: String,
    author: String,
  },
});

const Books =
  mongoose.models.Books || new mongoose.model("Books", TestSchema, "books");
export default Books;
