const nodemailer = require("nodemailer");

module.exports = nodemailer.createTransport({
	host: "smtp.mailtrap.io",
	port: 587,
	secure: false, // true for 465, false for other ports
	auth: {
		user: "477cccd7634220", // generated ethereal user
		pass: "2b25224bee8cec", // generated ethereal password
	}
});
