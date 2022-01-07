let nodemailer = require("nodemailer");

export default async function handler(req, res) {
	if (req.method !== "POST") {
		return res.status(404).send({ error: "Not a POST method." });
	}
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

	transporter.sendMail(mailData, (err, data) => {
		if (err) {
			console.log(err);
			res.send("error" + JSON.stringify(err));
		} else {
			console.log("mail send");
			res.status(200).json({
				message: "Successfully sent",
				receiver: process.env.INBOX,
			});
		}
	});
}
