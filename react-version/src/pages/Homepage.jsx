///// Main component /////
// Form made to add an employee //

// Style and useful imports
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

// Select menus react package to replace older jquery version
import Dropdown from 'select-menu-react-plugin';

// Import of utils - datas and format data
import initialState from '../utils/dataInitialState';
import states from '../utils/states';
import departments from '../utils/departments';
import formatDate from '../utils/formatData';

// Components
import Buttons from '../components/Buttons';
import DatePicker from '../components/DatePicker';
import TextInput from '../components/TextInput';
import Header from '../components/Header';
import ConfirmationModale from '../components/ConfirmationModale';

// Global state with React Context API
import { useEmployeeContext } from '../utils/context.js/EmployeeContext';
import { useValidation } from '../utils/context.js/FormContext';

function App() {
	const stateList = states.map(state => state.name);
	const [employee, setEmployee] = useState(initialState);
	const [errors, setErrors] = useState({});

	const { addEmployee } = useEmployeeContext();
	const { validateData, formState, updateFormState } = useValidation();

	// Update employee object on input changes
	const handleInputChange = e => {
		const { id, value } = e.target;
		setEmployee({
			...employee,
			[id]: value,
		});
	};

	// Update dates values in employee object on input changes
	const handleDateChange = (prop, date) => {
		setEmployee({
			...employee,
			[prop]: formatDate(date),
		});
	};

	/// Submit form ///
	const handleSubmit = async event => {
		event.preventDefault();

		// React context async function try
		try {
			await validateData(employee);
			console.log('Formulaire soumis', employee);

			// Employee add to global state
			addEmployee(employee);

			// Reset employee object
			setEmployee(initialState);

			// Reset errors
			setErrors({});

			// Reset form state, clear all inputs
			updateFormState(false);
		} catch (validationErrors) {
			// Set errors in case of missing informations when form submit
			setErrors(validationErrors);
		}
	};

	return (
		<div className="App">
			<Header />
			<div className="container">
				<Link to="/employeesList">
					<Buttons label={'View Current Employees'} />
				</Link>
				<h2>Create Employee</h2>
				<form
					action="#"
					id="create-employee"
					onSubmit={handleSubmit}
					key={formState}
				>
					<div id="employee-infos">
						<TextInput
							label={'First Name *'}
							id={'firstName'}
							onChange={handleInputChange}
							error={errors.firstName ? true : false}
						/>
						<TextInput
							label={'Last Name *'}
							id={'lastName'}
							onChange={handleInputChange}
							error={errors.lastName ? true : false}
						/>
						<DatePicker
							label={'Birth Date *'}
							id={'birthDate'}
							onChange={date => handleDateChange('birthDate', date)}
							name={'birthDate'}
							error={errors.birthDate ? true : false}
						/>
						<DatePicker
							label={'Start Date *'}
							onChange={date => handleDateChange('startDate', date)}
							name={'startDate'}
							error={errors.startDate ? true : false}
						/>
					</div>

					<fieldset className="address">
						<legend id="address-title">Address</legend>

						<TextInput
							label={'Street *'}
							id={'street'}
							onChange={handleInputChange}
							error={errors.street ? true : false}
						/>

						<TextInput
							label={'City *'}
							id={'city'}
							onChange={handleInputChange}
							error={errors.city ? true : false}
						/>

						<Dropdown
							label={'State *'}
							id={'state'}
							data={stateList}
							onChange={handleInputChange}
							error={errors.state ? true : false}
						/>

						<TextInput
							label={'Zip Code *'}
							id={'zipCode'}
							onChange={handleInputChange}
							error={errors.zipCode ? true : false}
						/>
					</fieldset>
					<div id="employee-department">
						<label htmlFor="department">Department</label>
						<Dropdown
							label={'Department *'}
							data={departments}
							id={'department'}
							onChange={handleInputChange}
							error={errors.department ? true : false}
						/>
					</div>
					{formState ? (
						<Buttons label={'Save'} submit={true} />
					) : (
						<ConfirmationModale />
					)}
				</form>
			</div>
		</div>
	);
}

export default App;
