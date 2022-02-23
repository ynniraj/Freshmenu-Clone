const transporter = require("./confiq/mail");

const sendMail = async ({
	from,
	to,
	subject,
	text,
	html,

}) => {
	await transporter.sendMail({
		from,
		to,
		subject,
		text,
		html,

	});
};


const welcomeMail = async ({ from, to, user }) => {
	await sendMail({
		from,
		to,
		subject: `Welcome to ABC system ${user.name} ${user.name}`,
		text: `Hi ${user.name}, Please confirm your email address`,
	});
};

module.exports = { sendMail, welcomeMail };
