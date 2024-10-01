import React from 'react';
import { styled } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers';

const DatePicker = ({ label }) => {
	const [selectedDate, setSelectedDate] = React.useState(null);
	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<StyledDatePicker
				label={label}
				value={selectedDate}
				onChange={newValue => setSelectedDate(newValue)}
				className="datesPickerCreateEmployee"
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
