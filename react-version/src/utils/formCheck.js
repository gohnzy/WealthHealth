// import React, { useState } from 'react';

export default function formCheck() {
	const firstNameInput = document.getElementById('First Name');
	const lastNameInput = document.getElementById('Last Name');
	const dateOfBirthInput = document.querySelector('.Birth input');
	const startDateInput = document.querySelector('.Start input');
	const departmentInput = document.getElementById('Department');
	const streetInput = document.getElementById('Street');
	const cityInput = document.getElementById('City');
	const stateInput = document.getElementById('State');
	const zipCodeInput = document.getElementById('Zip Code');

	let employee = {};

	if (
		firstNameInput.value === '' ||
		lastNameInput.value === '' ||
		dateOfBirthInput.value === '' ||
		startDateInput.value === '' ||
		departmentInput.value === '' ||
		streetInput.value === '' ||
		cityInput.value === '' ||
		stateInput.value === '' ||
		zipCodeInput.value === ''
	) {
		return false;
	} else {
		employee = {
			firstName: firstNameInput.value ?? '',
			lastName: lastNameInput.value ?? '',
			dateOfBirth: dateOfBirthInput.value ?? '',
			startDate: startDateInput.value ?? '',
			department: departmentInput.checked ?? '',
			street: streetInput.value ?? '',
			city: cityInput.value ?? '',
			state: stateInput.checked ?? '',
			zipCode: zipCodeInput.value ?? '',
		};
	}
	return employee;
}
