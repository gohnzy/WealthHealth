import React from 'react';
import { Link } from 'react-router-dom';
import Buttons from '../components/Buttons';
import DataTable from 'datatables.net-react';
import DT from 'datatables.net-bs5';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';
import 'datatables.net-bs5';

import Header from '../components/Header';

import { useEmployeeContext } from '../utils/context.js/EmployeeContext';

DataTable.use(DT);

const EmployeesList = () => {
	const { employees } = useEmployeeContext();

	const columns = [
		{ title: 'First Name', data: 'firstName' },
		{ title: 'Last Name', data: 'lastName' },
		{ title: 'Birth Date', data: 'birthDate' },
		{ title: 'Start Date', data: 'startDate' },
		{ title: 'Department', data: 'department' },
		{ title: 'Street', data: 'street' },
		{ title: 'City', data: 'city' },
		{ title: 'State', data: 'state' },
		{ title: 'Zip Code', data: 'zipCode' },
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
			{employees.length > 0 ? (
				<DataTable
					data={employees}
					columns={columns}
					className="table table-striped table-hover table-bordered table-custom"
					options={{
						order: [1, 'asc'],
						columnDefs: [
							{
								targets: '_all',
								orderSequence: ['asc', 'desc'],
							},
						],
					}}
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
							<th>State</th>
							<th>Zip Code</th>
						</tr>
					</thead>
				</DataTable>
			) : (
				<div id="noEmployeesFound">
					No employees found, try adding a new one!
				</div>
			)}
		</div>
	);
};

export default EmployeesList;
