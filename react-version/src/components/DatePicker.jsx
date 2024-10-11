import React from 'react';
import { styled } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers';

const DatePicker = ({ label, onChange, name, id, error }) => {
	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<StyledDatePicker
				label={label}
				onChange={onChange}
				name={name}
				className={
					error
						? `datesPickerCreateEmployee ${id} error`
						: `datesPickerCreateEmployee ${id}`
				}
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
