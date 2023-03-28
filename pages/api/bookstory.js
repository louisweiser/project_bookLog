import dbConnect from "@/db/connect";
import BookStory from "@/db/models/bookstory.js";

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
    const stories = await BookStory.find();
    return response.status(200).json(stories);
  } catch (error) {
    return response
      .status(500)
      .json({ error: "Error fetching stories from the database." });
  }
}
