const formatData = entry => {
	let data = JSON.parse(entry);
	const formatDate = dateString => {
		const date = new Date(dateString);
		const month = String(date.getMonth() + 1).padStart(2, '0');
		const day = String(date.getDate()).padStart(2, '0');
		const year = date.getFullYear();
		return `${month}/${day}/${year}`;
	};
	let employeesFormatted = data.map(employee => {
		return {
			...employee,
			lastName: employee.firstName.toUpperCase(),
			birthDate: formatDate(employee.birthDate),
			startDate: formatDate(employee.startDate),
		};
	});
	return employeesFormatted;
};

export default formatData;
