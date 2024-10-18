export const formatDate = entry => {
	if (entry) {
		const date = new Date(entry);
		const month = String(date.getMonth() + 1).padStart(2, '0');
		const day = String(date.getDate()).padStart(2, '0');
		const year = date.getFullYear();
		return `${month}/${day}/${year}`;
	} else {
		return false;
	}
};

export const dateChecker = entry => {
	const currentYear = new Date().getFullYear();
	const nextYear = currentYear + 1;

	const dateRegex = new RegExp(
		`^(0[1-9]|1[0-2])\\/(0[1-9]|[12][0-9]|3[01])\\/(19[0-9]{2}|20[0-9]{2}|${currentYear}|${nextYear})$`,
	);

	return dateRegex.test(entry);
};

export default formatDate;
