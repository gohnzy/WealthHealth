import { Link } from 'react-router-dom';
import '../styles/App.css';

import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material';
import DatePicker from '../components/DatePicker';
import TextInput from '../components/TextInput';
import Dropdown from '../components/Dropdown';

import states from '../utils/states';
import departments from '../utils/departments';
import SaveEmployee from '../components/SaveEmployee';

function App() {
	const stateList = states.map(state => state.name);
	return (
		<div className="App">
			<div className="title">
				<h1>HRnet</h1>
			</div>
			<div className="container">
				<Link to="/employeesList">
					<StyledButton variant="contained">
						View Current Employees
					</StyledButton>
				</Link>
				<h2>Create Employee</h2>
				<form action="#" id="create-employee">
					<div id="employee-infos">
						<TextInput label={'First Name'} />
						<TextInput label={'Last Name'} />
						<DatePicker label={'Birth Date'} />
						<DatePicker label={'Start Date'} />
					</div>

					<fieldset className="address">
						<legend>Address</legend>

						<TextInput label={'Street'} />

						<TextInput label={'City'} />

						<Dropdown label={'State'} data={stateList} />

						<TextInput label={'Zip Code'} />
					</fieldset>
					<div id="employee-department">
						<label htmlFor="department">Department</label>
						<Dropdown label={'Department'} data={departments} />
					</div>
					<SaveEmployee />
				</form>
			</div>
		</div>
	);
}

const StyledButton = styled(Button)({
	'& ': { backgroundColor: '#70a838' },
});

export default App;
