import React from 'react';
import { styled } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers';

const DatePicker = ({ label, onChange, id }) => {
	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<StyledDatePicker
				id={id}
				label={label}
				onChange={onChange}
				className={`datesPickerCreateEmployee ${label}`}
			/>
		</LocalizationProvider>
	);
};

const StyledDatePicker = styled(DesktopDatePicker)(({ theme }) => ({
	'& ': { marginTop: '30px', display: 'flex' },
	'& .MuiOutlinedInput-root': {
		'& fieldset': { border: '1px solid black' },
	},
	'& .MuiFormLabel-root': {
		margin: '0px',
	},
}));

export default DatePicker;
