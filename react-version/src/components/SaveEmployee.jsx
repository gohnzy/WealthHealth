import { styled } from '@mui/material';
import { Button } from '@mui/material';
import React, { useState } from 'react';
const SaveEmployee = () => {
	const [state, setState] = useState('toSave');
	return (
		<div id="save-employee">
			{state === 'toSave' ? (
				<StyledButton
					id="save-button"
					variant="contained"
					onClick={() => setState('saved')}
				>
					Save
				</StyledButton>
			) : (
				<div id="confirmation" className="modal">
					Employee Created!
				</div>
			)}
		</div>
	);
};

const StyledButton = styled(Button)({
	'& ': { backgroundColor: '#70a838' },
});

export default SaveEmployee;
