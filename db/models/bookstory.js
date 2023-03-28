import mongoose from "mongoose";

const BookStorySchema = new mongoose.Schema({
  bookID: mongoose.Schema.Types.ObjectId,
  stories: {
    type: mongoose.Schema.Types.Mixed,
    default: {},
  },
});

const getBookStory =
  mongoose.models.getBookStory ||
  new mongoose.model("getBookStory", BookStorySchema, "bookstory");

export default getBookStory;
