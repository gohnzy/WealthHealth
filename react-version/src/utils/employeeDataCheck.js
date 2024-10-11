import { dateChecker } from './formatData';

const dataCheck = data => {
	const errors = {};

	if (!data.firstName || data.firstName.trim() === '') {
		errors.firstName = true;
	}

	if (!data.lastName || data.lastName.trim() === '') {
		errors.lastName = true;
	}

	if (!data.birthDate || !dateChecker(data.birthDate)) {
		errors.birthDate = true;
	}

	if (!data.startDate || !dateChecker(data.startDate)) {
		errors.startDate = true;
	}

	if (!data.state || data.state.trim() === '') {
		errors.state = true;
	}

	if (!data.department || data.department.trim() === '') {
		errors.department = true;
	}

	if (!data.street || data.street.trim() === '') {
		errors.street = true;
	}

	if (!data.city || data.city.trim() === '') {
		errors.city = true;
	}

	if (!data.zipCode || data.zipCode.trim() === '') {
		errors.zipCode = true;
	}

	// Si l'objet errors est vide, c'est que tous les champs sont remplis correctement
	if (Object.keys(errors).length === 0) {
		return { isValid: true, errors: null };
	} else {
		// Sinon, on renvoie les erreurs trouvées
		return { isValid: false, errors: errors };
	}
};

export default dataCheck;
