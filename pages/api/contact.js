import React from "react";

export default async function handler(req, res) {
	if (req.method !== "POST") {
		return res.status(404).send({ error: "Not a POST method." });
	}
	try {
		require("dotenv").config();

		let nodemailer = require("nodemailer");
		const transporter = nodemailer.createTransport({
			port: 465,
			host: "smtp.gmail.com",
			secure: true,
			auth: {
				user: process.env.EMAIL,
				pass: process.env.PASSWORD,
			},
		});

		const mailData = {
			from: process.env.EMAIL,
			to: process.env.INBOX,
			subject: `PlantBassd.com: Message From ${req.body.name}`,
			text: req.body.message + " | Sent from: " + req.body.email,
			html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`,
		};

		transporter.sendMail(mailData);
		res.status(200).json({ message: "message sent" });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}
