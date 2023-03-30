import { v4 as uuidv4 } from "uuid";
import dbConnect from "@/db/connect";
import BookContent from "@/db/models/bookcontentUUID.js";

export default async function handler(req, res) {
  const {
    method,
    body: { bookID, contentType, contentData },
  } = req;

  await dbConnect();

  switch (method) {
    case "POST":
      try {
        // Find book content by bookID
        const bookContent = await BookContent.findOne({ bookID });

        if (!bookContent) {
          res
            .status(400)
            .json({ success: false, message: "Book content not found" });
          return;
        }

        // Generate a new UUID for the new content object
        const newContentKey = uuidv4();

        // Add new content to the specified contentType (stories, quotes, or summary)
        const updatedContent = await BookContent.findByIdAndUpdate(
          bookContent._id,
          { $set: { [`${contentType}.${newContentKey}`]: contentData } },
          { new: true }
        );

        // Return the updated book content
        res.status(200).json({ success: true, data: updatedContent });
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;

    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
