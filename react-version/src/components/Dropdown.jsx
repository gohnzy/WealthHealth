import React, { useState } from 'react';

const Dropdown = ({ label, data, onChange }) => {
	const [selectedValue, setSelectedValue] = useState('');

	const handleChange = event => {
		setSelectedValue(event.target.value);
		onChange && onChange(event);
	};

	return (
		<select
			name={label}
			id={label.toLowerCase()}
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
				<option value="">No data found</option>
			)}
		</select>
	);
};

export default Dropdown;
