import { Link } from 'react-router-dom';
import '../styles/App.css';

import React from 'react';
import { useState } from 'react';
import states from '../utils/states';
import departments from '../utils/departments';

// New NPM Plugin for select dropdown menus
import Dropdown from 'select-menu-react-plugin';

import Buttons from '../components/Buttons';
import DatePicker from '../components/DatePicker';
import TextInput from '../components/TextInput';
import Header from '../components/Header';

function App() {
	const stateList = states.map(state => state.name);
	const [formState, setFormState] = useState(false);
	const [employee, setEmployee] = useState({
		firstName: '',
		lastName: '',
		birthDate: null,
		startDate: null,
		department: '',
		street: '',
		city: '',
		state: '',
		zipCode: '',
	});

	const handleInputChange = e => {
		const { id, value } = e.target;
		setEmployee({
			...employee,
			[id]: value,
		});
	};

	const handleDateChange = (prop, date) => {
		setEmployee({
			...employee,
			[prop]: date,
		});
	};

	const handleSubmit = event => {
		event.preventDefault();

		let employees = JSON.parse(localStorage.getItem('employees'));

		if (!Array.isArray(employees)) {
			employees = [];
		}

		employees.push(employee);

		localStorage.setItem('employees', JSON.stringify(employees));

		setFormState(true);
	};
	return (
		<div className="App">
			<Header />
			<div className="container">
				<Link to="/employeesList">
					<Buttons label={'View Current Employees'} />
				</Link>
				<h2>Create Employee</h2>
				<form action="#" id="create-employee" onSubmit={handleSubmit}>
					<div id="employee-infos">
						<TextInput
							label={'First Name'}
							id={'firstName'}
							onChange={handleInputChange}
						/>
						<TextInput
							label={'Last Name'}
							id={'lastName'}
							onChange={handleInputChange}
						/>
						<DatePicker
							label={'Birth Date'}
							onChange={date => handleDateChange('birthDate', date)}
							id={'birthDate'}
						/>
						<DatePicker
							label={'Start Date'}
							onChange={date => handleDateChange('startDate', date)}
							id={'startDate'}
						/>
					</div>

					<fieldset className="address">
						<legend>Address</legend>

						<TextInput
							label={'Street'}
							id={'street'}
							onChange={handleInputChange}
						/>

						<TextInput
							label={'City'}
							id={'city'}
							onChange={handleInputChange}
						/>

						<Dropdown
							label={'State'}
							id={'state'}
							data={stateList}
							onChange={handleInputChange}
						/>

						<TextInput
							label={'Zip Code'}
							id={'zipCode'}
							onChange={handleInputChange}
						/>
					</fieldset>
					<div id="employee-department">
						<label htmlFor="department">Department</label>
						<Dropdown
							label={'Department'}
							data={departments}
							id={'department'}
							onChange={handleInputChange}
						/>
					</div>
					{!formState ? (
						<Buttons label={'Save'} submit={true} />
					) : (
						<div id="confirmation">
							<h1>Employee Created!</h1>
						</div>
					)}
				</form>
			</div>
		</div>
	);
}

export default App;
