import mongoose from "mongoose";

const BookStorySchema = new mongoose.Schema({
  bookID: mongoose.Schema.Types.ObjectId,
  stories: {
    type: mongoose.Schema.Types.Mixed, //Mixed-Typ ermöglicht es, ein beliebiges Objekt in diesem Feld zu speichern, unabhängig von seiner Struktur. Das ermöglicht es, unterschiedlich viele Geschichten in jedem Eintrag der bookstory-Kollektion zu speichern.
    default: {},
  },
});

const getBookStory =
  mongoose.models.getBookStory ||
  new mongoose.model("getBookStory", BookStorySchema, "bookstory");

export default getBookStory;
