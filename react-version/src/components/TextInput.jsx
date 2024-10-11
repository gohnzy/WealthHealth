import React from 'react';
import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

const TextInput = ({ label, onChange, id, error }) => {
	return (
		<CustomTextField
			id={id}
			label={label}
			onChange={onChange}
			variant="outlined"
			className={
				error ? 'textInputCreateEmployee error' : 'textInputCreateEmployee'
			}
			fullWidth
		/>
	);
};

export default TextInput;

const CustomTextField = styled(TextField)({
	'& ': { marginTop: '30px', width: '250px', display: 'flex' },
	'& .MuiOutlinedInput-root': {
		'& fieldset': { border: '1px solid black' },
	},
	'& .MuiFormLabel-root': {
		margin: '0px',
	},
});
