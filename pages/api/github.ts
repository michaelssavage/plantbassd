import type { NextApiRequest, NextApiResponse } from "next";

const OWNER = process.env.GITHUB_OWNER;
const REPO = process.env.GITHUB_REPO;
const TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_CONTENT = `https://api.github.com/repos/${OWNER}/${REPO}/contents/public`;

const defaultConfig = {
  headers: {
    Authorization: `Bearer ${TOKEN}`,
    Accept: "application/vnd.github+json",
  },
  method: "PUT",
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const formValues = await req.body;

    const path =
      formValues.name === "tickets"
        ? "gigs"
        : formValues.name === "fresh juice"
        ? "fresh-juice"
        : formValues.name;

    const body = JSON.stringify({
      message: `image upload: ${formValues.title}`,
      content: formValues.file,
    });

    const response = await fetch(`${GITHUB_CONTENT}/${path}`, { ...defaultConfig, body });
    res.json(response);
  } catch (error) {
    res.status(400).json(error);
  }
}

// res.status(201).json({
//   url: `${GITHUB_CONTENT}/${path}`,
//   config: { ...defaultConfig },
// });
