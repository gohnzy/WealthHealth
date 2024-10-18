import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Buttons from '../components/Buttons';
import DataTable from 'datatables.net-react';
import DT from 'datatables.net-bs5';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';
import 'datatables.net-bs5';

import Header from '../components/Header';

import { employeesListCall } from '../utils/APIcalls';

DataTable.use(DT);

const EmployeesList = () => {
	const [employees, setEmployees] = useState([]);
	const [loading, setLoading] = useState(false);
	const [errors, setErrors] = useState(null);
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

	useEffect(() => {
		const fetchEmployees = async () => {
			try {
				const response = await employeesListCall();

				setEmployees(response);
			} catch (error) {
				console.error('Erreur lors de la récupération des employés:', error);
			} finally {
				setLoading(false);
			}
		};
		fetchEmployees();
	}, []);

	return (
		<div id="employee-div" className="App">
			<Header />
			<div id="banner">
				<h1>Current Employees</h1>
				<Link to="/">
					<Buttons label={'Home'} />
				</Link>
			</div>
			{loading ? (
				<div>Loading...</div>
			) : errors ? (
				<div id="dataError">Error in data fetch : {errors}</div>
			) : employees.length > 0 ? (
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
