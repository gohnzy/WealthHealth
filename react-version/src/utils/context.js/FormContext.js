import React, { createContext, useState, useContext } from 'react';
import { dateChecker } from '../formatData';
// Créer le contexte de validation
const ValidationContext = createContext();

export const ValidationProvider = ({ children }) => {
	const [formState, setFormState] = useState(true);
	const [errors, setErrors] = useState({});

	const validateData = async data => {
		return new Promise((resolve, reject) => {
			let newErrors = {};

			if (!data.firstName || data.firstName.trim() === '') {
				newErrors.firstName = 'Le prénom est requis';
			}
			if (!data.lastName || data.lastName.trim() === '') {
				newErrors.lastName = 'Le nom est requis';
			}
			if (!data.birthDate || !dateChecker(data.birthDate)) {
				newErrors.birthDate = 'La date de naissance est invalide';
			}
			if (!data.startDate || !dateChecker(data.startDate)) {
				newErrors.startDate = 'La date de début est invalide';
			}
			if (!data.department || data.department.trim() === '') {
				newErrors.department = 'Le département est requis';
			}
			if (!data.street || data.street.trim() === '') {
				newErrors.street = 'La rue est requise';
			}
			if (!data.city || data.city.trim() === '') {
				newErrors.city = 'La ville est requise';
			}
			if (!data.state || data.state.trim() === '') {
				newErrors.state = 'Le département est requis';
			}
			if (!data.zipCode || data.zipCode.trim() === '') {
				newErrors.zipCode = 'Le code postal est requis';
			}

			setErrors(newErrors);

			if (Object.keys(newErrors).length === 0) {
				resolve(true);
			} else {
				reject(newErrors);
			}
		});
	};

	const updateFormState = state => {
		setFormState(state);
	};

	return (
		<ValidationContext.Provider
			value={{ validateData, errors, updateFormState, formState }}
		>
			{children}
		</ValidationContext.Provider>
	);
};

// Hook personnalisé pour utiliser le contexte
export const useValidation = () => useContext(ValidationContext);
