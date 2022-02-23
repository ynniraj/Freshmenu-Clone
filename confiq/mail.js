const nodemailer = require("nodemailer");

module.exports = nodemailer.createTransport({
	host   : "smtp.mailtrap.io",
	port   : 587,
	secure : false, // true for 465, false for other ports
	auth   : {
		user : "09758e7c60da18", // generated ethereal user
		pass : "383aa05a51d9e5" // generated ethereal password
	}
});
