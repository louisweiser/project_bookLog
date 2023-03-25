import dbConnect from "@/db/connect";
import MetaSchema from "@/db/models/testb.js";
import BookSchema from "@/db/models/test.js";
/* 
export default async function handler(request, response) {
  await dbConnect();

  const book = await BookSchema.findOne();
  console.log("book", book._id);
  const meta = await MetaSchema.findOne({ bookId: book._id }).exec();
  console.log("meta", meta);
  return response.status(200).json(meta);
} */

export default async function handler(request, response) {
  await dbConnect();

  const book = await BookSchema.findOne();
  console.log("book", book._id);
  const meta = await MetaSchema.findOne({ "meta.bookId": book._id }).exec(); // Beachten Sie die Änderung hier
  console.log("meta", meta);
  return response.status(200).json(meta);
}
