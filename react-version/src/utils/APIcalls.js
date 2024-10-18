import axios from 'axios';
import formatDate from './formatData';

const employeesAPI = 'http://localhost:1000/api/employees';
const headers = {
	'Content-Type': 'application/json',
};
export const employeesListCall = async () => {
	try {
		const response = await axios.get(employeesAPI, {}, { headers });

		response.data.data.forEach(d => {
			d.birthDate = formatDate(d.birthDate);
			d.startDate = formatDate(d.startDate);
		});

		return response.data.data;
	} catch (error) {
		console.log(error);
		throw error;
	}
};

export const createEmployeeCall = async data => {
	console.log(data);

	try {
		const response = await axios.post(employeesAPI, { data }, { headers });

		return response;
	} catch (error) {
		console.log(error);
		return false;
	}
};
