import fs from "fs";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  if (req.method === "POST") {
    const { cover, fileName } = req.body;

    if (cover && fileName) {
      const base64Data = cover.replace(/^data:image\/\w+;base64,/, "");
      const buffer = Buffer.from(base64Data, "base64");
      const filePath = path.join(
        process.cwd(),
        "public",
        "images",
        "cover",
        fileName
      );

      fs.writeFileSync(filePath, buffer);

      res.status(200).json({ message: "Bilddatei erfolgreich gespeichert." });
    } else {
      res.status(400).json({
        message:
          "Ungültige Anfrage. Bitte überprüfen Sie die übermittelten Daten.",
      });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method} not allowed.` });
  }
};
