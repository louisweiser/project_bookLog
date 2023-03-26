import dbConnect from "@/db/connect";
import getBooks from "@/db/models/books.js";

export default async function handler(request, response) {
  try {
    await dbConnect();
  } catch (error) {
    return response
      .status(500)
      .json({ error: "Error connecting to the database." });
  }

  const searchTerm = request.query.search || "";

  try {
    if (searchTerm) {
      const regex = new RegExp(searchTerm, "i");
      const books = await getBooks.find({
        $or: [
          { title: regex },
          { subtitle: regex },
          { author: regex },
          { genre: regex },
          { tag: regex },
        ],
      });
      return response.status(200).json(books);
    } else {
      const books = await getBooks.find();
      return response.status(200).json(books);
    }
  } catch (error) {
    return response
      .status(500)
      .json({ error: "Error fetching books from the database." });
  }
}
