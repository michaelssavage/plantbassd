const nodemailer = require("nodemailer"),
	message = {
		ERROR: 404,
		SUCCESS: 200,
	};

export default async function handler(req, res) {
	if (req.method !== "POST") {
		return res.status(message.ERROR).send({ error: "Not a POST method." });
	}
	const mailData = {
			from: process.env.EMAIL,
			html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`,
			subject: `PlantBassd.com: Message From ${req.body.name}`,
			text: `${req.body.message} | Sent from: ${req.body.email}`,
			to: process.env.INBOX,
		},
		transporter = nodemailer.createTransport({
			auth: {
				pass: process.env.PASSWORD,
				user: process.env.EMAIL,
			},
			host: "smtp.gmail.com",
			port: 465,
			secure: true,
		});

	transporter.sendMail(mailData, (err, data) => {
		if (err) {
			res.send(`error${JSON.stringify(err)}`);
		} else {
			res.status(message.SUCCESS).json({
				message: "Successfully sent",
				receiver: process.env.INBOX,
			});
		}
	});
}
