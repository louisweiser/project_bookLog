import dbConnect from "@/db/connect";
import BookContent from "@/db/models/bookcontent.js";
import mongoose from "mongoose";

export default async function handler(req, res) {
  const { bookID } = req.body;

  await dbConnect();

  const newBookContent = new BookContent({
    _id: new mongoose.Types.ObjectId(),
    bookID,
    stories: [],
    quotes: [],
    summary: [],
  });

  try {
    const savedBookContent = await newBookContent.save();
    res.status(201).json(savedBookContent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
