import React, { useState } from 'react';
import Buttons from './Buttons';
// import formCheck from '../utils/formCheck';
const SaveEmployee = ({ data }) => {
	const [state, setState] = useState('toSave');

	return (
		<div id="save-employee">
			{state === 'toSave' ? (
				<Buttons label={'Save'} submit={true} />
			) : (
				<div id="confirmation" className="modal">
					Employee Created!
				</div>
			)}
		</div>
	);
};
export default SaveEmployee;
