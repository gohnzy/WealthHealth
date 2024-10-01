import React, { useState } from 'react';

const Dropdown = ({ label, data }) => {
	const [selectedValue, setSelectedValue] = useState('');

	const handleChange = event => {
		setSelectedValue(event.target.value);
	};

	return (
		<select
			name={label}
			id={label}
			className="dropdownMenus"
			required
			value={selectedValue}
			onChange={handleChange}
		>
			<option value="" disabled hidden>
				{label}
			</option>
			{data && data.length > 0 ? (
				data.map((d, index) => (
					<option key={index} value={d}>
						{d}
					</option>
				))
			) : (
				<option value="">Data error</option>
			)}
		</select>
	);
};

export default Dropdown;
