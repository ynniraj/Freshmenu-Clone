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
		subject: `Welcome to FreshMenu ${user.name}`,
		text: `Hi ${user.name}, Welcome to FresMenu`,
	});
};

module.exports = { sendMail, welcomeMail };
