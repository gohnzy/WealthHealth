import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material';

const Buttons = ({ label, submit }) => {
	return submit ? (
		<StyledButton variant="contained" type="submit">
			{label}
		</StyledButton>
	) : (
		<StyledButton variant="contained">{label}</StyledButton>
	);
};

const StyledButton = styled(Button)({
	'& ': { backgroundColor: '#70a838' },
});

export default Buttons;
