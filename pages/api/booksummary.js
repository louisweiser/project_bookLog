import dbConnect from "@/db/connect";
import BookSummary from "@/db/models/booksummary.js";

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
    const summary = await BookSummary.find();
    return response.status(200).json(summary);
  } catch (error) {
    return response
      .status(500)
      .json({ error: "Error fetching summaries from the database." });
  }
}
