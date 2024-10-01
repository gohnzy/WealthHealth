import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Homepage from './pages/Homepage';
import EmployeesList from './pages/EmployeesList';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/employeesList" element={<EmployeesList />} />
			</Routes>
		</Router>
	</React.StrictMode>,
);
reportWebVitals();
