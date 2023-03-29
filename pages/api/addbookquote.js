import BookQuote from "@/db/models/bookquote.js";

export default async function handler(req, res) {
  const { method, body } = req;

  switch (method) {
    case "POST":
      try {
        const { bookID, newQuote } = body;
        const bookQuote = await BookQuote.findOneAndUpdate(
          { bookID },
          { $push: { quotes: newQuote } },
          { new: true }
        );

        res.status(200).json({ success: true, data: bookQuote });
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
