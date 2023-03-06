import type { NextApiRequest, NextApiResponse } from "next";
import { GoogleSpreadsheet } from "google-spreadsheet";

const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
const CLIENT_EMAIL = process.env.CLIENT_EMAIL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

const initSheet = async () => {
  await doc.useServiceAccountAuth({
    client_email: CLIENT_EMAIL,
    private_key: PRIVATE_KEY.replace(/\\n/g, "\n"),
  });

  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[0];
  return sheet;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const sheet = await initSheet();
      const rows = await sheet.getRows();
      if (rows.some((row) => row.email === req.body.email)) {
        res.status(204).json({ message: "Email already exists" });
      } else {
        await sheet.addRow(req.body);
        res.status(201).json({ message: "Email added successfully" });
      }
    } catch (error) {
      res.status(400).json({ message: error });
    }
  } else if (req.method == "DELETE") {
    try {
      const sheet = await initSheet();
      const rows = await sheet.getRows();
      for (let idx = 0; idx < rows.length; idx++) {
        if (rows[idx].email === req.body.email) {
          rows[idx].delete();
        }
      }
      res.status(200).json({ message: "Email removed successfully" });
    } catch (error) {
      res.status(400).json({ message: error });
    }
  } else if (req.method == "GET") {
    res.status(200).json({ message: "How'd you get here?" });
  }
}
