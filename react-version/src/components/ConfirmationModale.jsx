import React from 'react';
import { useValidation } from '../utils/context.js/FormContext';
const ConfirmationModale = () => {
	const { updateFormState } = useValidation();
	return (
		<div className="confirmation">
			<h1>
				Employee Created!{' '}
				<i
					className="fa-solid fa-xmark"
					onClick={() => updateFormState(true)}
				></i>
			</h1>
			<div id="close-target" onClick={() => updateFormState(true)}></div>
		</div>
	);
};

export default ConfirmationModale;
