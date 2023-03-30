import mongoose from "mongoose";
import Books from "@/db/models/books.js";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const bookData = req.body;
    const newBook = new Books({
      ...bookData,
      _id: new mongoose.Types.ObjectId(),
      bookID: new mongoose.Types.ObjectId(),
    });

    try {
      await newBook.save();
      res
        .status(201)
        .json({ message: "Buch erfolgreich hinzugefügt", newBook });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Fehler beim Hinzufügen des Buches", error });
    }
  } else {
    res.status(405).json({ message: "Methode nicht erlaubt" });
  }
}
