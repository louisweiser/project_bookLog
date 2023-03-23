import dbConnect from "@/db/connect";
import TestSchema from "@/db/models/test.js";

export default async function handler(request, response) {
  await dbConnect();
  const schema = await TestSchema.find();
  return response.status(200).json(schema);
}
