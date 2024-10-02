import React from 'react';
import { Link } from 'react-router-dom';
import Buttons from '../components/Buttons';
import DataTable from 'datatables.net-react';
import DT from 'datatables.net-bs5';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../components/Header';

import formatData from '../utils/formatData';

DataTable.use(DT);

const EmployeesList = () => {
	const employees = formatData(localStorage.getItem('employees'));
	const columns = [
		{ title: 'First Name', data: 'firstName' },
		{ title: 'Last Name', data: 'lastName' },
		{ title: 'Birth Date', data: 'birthDate' },
		{ title: 'Start Date', data: 'startDate' },
		{ title: 'Department', data: 'department' },
		{ title: 'Street', data: 'street' },
		{ title: 'City', data: 'city' },
		{ title: 'Zip Code', data: 'zipCode' },
	];
	const row = [
		employees.map((employee, index) => {
			return { index: index };
		}),
	];

	return (
		<div id="employee-div" className="App">
			<Header />
			<div id="banner">
				<h1>Current Employees</h1>
				<Link to="/">
					<Buttons label={'Home'} />
				</Link>
			</div>

			<DataTable
				data={employees}
				columns={columns}
				row={row}
				className="table table-striped table-hover table-bordered table-custom"
			>
				<thead>
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Birth Date</th>
						<th>Start Date</th>
						<th>Department</th>
						<th>Street</th>
						<th>City</th>
						<th>Zip Code</th>
					</tr>
				</thead>
			</DataTable>
		</div>
	);
};

export default EmployeesList;
