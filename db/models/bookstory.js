import mongoose from "mongoose";

const BookStorySchema = new mongoose.Schema({
  bookID: { type: mongoose.Schema.Types.ObjectId, ref: "Books" },
  stories: {
    type: mongoose.Schema.Types.Mixed, //Mixed-Typ ermöglicht es, ein beliebiges Objekt in diesem Feld zu speichern, unabhängig von seiner Struktur. Das ermöglicht es, unterschiedlich viele Geschichten in jedem Eintrag der bookstory-Kollektion zu speichern.
    default: {},
  },
});

const BookStory =
  mongoose.models.BookStory ||
  new mongoose.model("BookStory", BookStorySchema, "bookstory");

export default BookStory;
