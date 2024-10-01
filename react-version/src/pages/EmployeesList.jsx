import React from 'react';
import { Link } from 'react-router-dom';
import App from 'react-version-datatables-by-gna';
import Buttons from '../components/Buttons';
const EmployeesList = () => {
	return (
		<div id="employee-div" className="container">
			<h1>Current Employees</h1>
			<table id="employee-table" className="display"></table>
			<Link to="/">
				<Buttons label={'Home'} />
			</Link>
			<App />
		</div>
	);
};

export default EmployeesList;
