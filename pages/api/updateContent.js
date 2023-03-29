import dbConnect from "@/db/connect";
import BookContent from "@/db/models/bookcontent.js";

export default async function handler(req, res) {
  const {
    method,
    body: { bookID, contentType, contentKey, contentData },
  } = req;

  await dbConnect();

  switch (method) {
    case "PUT":
      try {
        // Find book content by bookID
        const bookContent = await BookContent.findOne({ bookID });

        if (!bookContent) {
          res
            .status(400)
            .json({ success: false, message: "Book content not found" });
          return;
        }

        // Update the specified content in the specified contentType (stories, quotes, or summary)
        const updatedContent = await BookContent.findByIdAndUpdate(
          bookContent._id,
          { $set: { [`${contentType}.${contentKey}`]: contentData } },
          { new: true }
        );

        // Return the updated book content
        res.status(200).json({ success: true, data: updatedContent });
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;

    default:
      res.setHeader("Allow", ["PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
