import dbConnect from "@/db/connect";
import BookSchema from "@/db/models/test.js";

export default async function handler(request, response) {
  await dbConnect();
  const schema = await BookSchema.find();
  return response.status(200).json(schema);
}
