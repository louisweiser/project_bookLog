const Schema = mongoose.Schema;
import mongoose from "mongoose";

const MetaSchema = new mongoose.Schema({
  meta: {
    name: String,
    slug: String,
    slugname: String,
    bookId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Books",
    },
  },
});

export default mongoose.models.Booksmeta ||
  mongoose.model("Booksmeta", MetaSchema, "booksmeta");
