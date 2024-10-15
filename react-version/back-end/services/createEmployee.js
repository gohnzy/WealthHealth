module.exports.createEmployee = body => {
	const data = Object.keys(body);

	for (const field of data) {
		if (!data[field]) {
			return `Le champ ${field} est requis`;
		}
	}
};
