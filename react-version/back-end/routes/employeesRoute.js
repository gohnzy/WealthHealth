const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/employees', async (req, res) => {
	try {
		const { rows } = await db.query('SELECT * FROM "Employees"');
		res.status(200).json({
			message: 'Employees data fetched successfully!',
			data: rows,
		});
	} catch (error) {
		console.error(error);
		res.status(500).send('Error on data fetch');
	}
});

router.post('/employees', async (req, res) => {
	const body = req.body;
	console.log(body);

	const data = {
		firstName: body.data.firstName,
		lastName: body.data.lastName,
		birthDate: body.data.birthDate,
		startDate: body.data.startDate,
		department: body.data.department,
		street: body.data.street,
		city: body.data.city,
		state: body.data.state,
		zipCode: body.data.zipCode,
	};

	const validateData = data => {
		const requiredFields = Object.keys(data);
		console.log(requiredFields);

		for (const field of requiredFields) {
			if (!data[field]) {
				return `${field} is required.`;
			}
		}

		if (data.birthDate && isNaN(Date.parse(data.birthDate))) {
			return 'birthDate is not valid.';
		}

		if (data.startDate && isNaN(Date.parse(data.startDate))) {
			return 'startDate is not valid.';
		}

		const zipCodeRegex = /^\d{5}$/;
		if (data.zipCode && !zipCodeRegex.test(data.zipCode)) {
			return 'zipCode must be a 5 digits value.';
		}

		return null;
	};

	const validationError = validateData(data);
	if (validationError) {
		return res.status(400).json({ message: validationError });
	}

	try {
		const query = `
            INSERT INTO "Employees" ("firstName", "lastName", "birthDate", "startDate", "department", "street", "city", "state", "zipCode")
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
            RETURNING *;
        `;
		const values = [
			data.firstName,
			data.lastName,
			data.birthDate,
			data.startDate,
			data.department,
			data.street,
			data.city,
			data.state,
			data.zipCode,
		];
		const { rows } = await db.query(query, values);

		res.status(201).json({
			message: 'Employee added successfully!',
			data: rows[0],
		});
	} catch (error) {
		console.error(error);
		res.status(500).send('Error adding new employee');
	}
});

module.exports = router;
