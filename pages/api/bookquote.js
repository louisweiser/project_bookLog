import dbConnect from "@/db/connect";
import BookQuote from "@/db/models/bookquote.js";

export default async function handler(request, response) {
  if (request.method !== "GET") {
    return response.status(405).json({ error: "Method not allowed. Use GET." });
  }

  try {
    await dbConnect();
  } catch (error) {
    return response
      .status(500)
      .json({ error: "Error connecting to the database." });
  }

  try {
    const quote = await BookQuote.find();
    return response.status(200).json(quote);
  } catch (error) {
    return response
      .status(500)
      .json({ error: "Error fetching books from the database." });
  }
}
