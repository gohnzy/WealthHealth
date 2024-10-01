import { Link } from 'react-router-dom';
import '../styles/App.css';

import React from 'react';
import { useState } from 'react';
import format from 'date-fns/format';
import DatePicker from '../components/DatePicker';
import TextInput from '../components/TextInput';
import Dropdown from '../components/Dropdown';

import states from '../utils/states';
import departments from '../utils/departments';
import SaveEmployee from '../components/SaveEmployee';
import Buttons from '../components/Buttons';

function App() {
	const stateList = states.map(state => state.name);
	const [formData, setFormData] = useState({
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
		setFormData({
			...formData,
			[id]: value,
		});
	};

	const handleDateChange = (prop, date) => {
		setFormData({
			...formData,
			[prop]: date,
		});
	};

	const handleSubmit = event => {
		event.preventDefault();
		localStorage.setItem('employees', JSON.stringify(formData));
	};
	return (
		<div className="App">
			<div className="title">
				<h1>HRnet</h1>
			</div>
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
					<SaveEmployee data={formData} />
				</form>
			</div>
		</div>
	);
}

export default App;
