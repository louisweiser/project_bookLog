import dbConnect from "@/db/connect";
import getBooks from "@/db/models/books.js";
import getBooksMeta from "@/db/models/booksmeta.js";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const books = await getBooks();

      // Bücher mit Metadaten anreichern
      const booksWithMetadata = await Promise.all(
        books.map(async (book) => {
          const metadata = await getBooksMeta(book._id);
          return {
            ...book,
            metadata, // Fügen Sie die Metadaten hinzu
          };
        })
      );

      res.status(200).json(booksWithMetadata);
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
