import mongoose from "mongoose";

const MetaSchema = new mongoose.Schema({
  name: String,
  slug: String,
  slugname: String,
  relativefactor: Number,
  bookID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "books", // Verweis auf die zugehörige Buch-Kollektion
  },
});

const getBooksMeta =
  mongoose.models.getBooksMeta ||
  new mongoose.model("getBooksMeta", MetaSchema, "booksmeta");

export default getBooksMeta;
