export default function handler(req, res) {
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
		to: "plantbassddjs@gmail.com",
		subject: `PlantBassd.com: Message From ${req.body.name}`,
		text: `From ${req.body.email},\n\n${req.body.message}\n\n${req.body.name}`,
	};

	transporter.sendMail(mailData, function (err, info) {
		if (err) console.log(err);
		else console.log(info);
	});

	res.status(200);
}
