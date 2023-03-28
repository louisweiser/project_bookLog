import mongoose from "mongoose";

const BookQuoteSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  bookID: { type: mongoose.Schema.Types.ObjectId, ref: "Books" },
  quotes: {
    type: mongoose.Schema.Types.Mixed, //Mixed-Typ ermöglicht es, ein beliebiges Objekt in diesem Feld zu speichern, unabhängig von seiner Struktur. Das ermöglicht es, unterschiedlich viele Geschichten in jedem Eintrag der bookstory-Kollektion zu speichern.
    default: {},
  },
});

const BookQuote =
  mongoose.models.BookQuote ||
  new mongoose.model("BookQuote", BookQuoteSchema, "bookquote");

export default BookQuote;
