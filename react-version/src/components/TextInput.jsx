import React from 'react';
import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

const TextInput = ({ label }) => {
	const [value, setValue] = React.useState('');

	const handleChange = event => {
		setValue(event.target.value);
	};

	return (
		<CustomTextField
			label={label}
			value={value}
			onChange={handleChange}
			variant="outlined"
			className="textInputCreateEmployee"
			required
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
