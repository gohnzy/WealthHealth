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
	console.log(req);

	const data = {
		firstName: body.firstName,
		lastName: body.lastName,
		birthDate: body.birthDate,
		startDate: body.startDate,
		department: body.department,
		street: body.street,
		city: body.city,
		state: body.state,
		zipCode: body.zipCode,
	};

	const validateData = data => {
		const requiredFields = Object.keys(data);

		for (const field of requiredFields) {
			if (!data[field]) {
				return `Le champ ${field} est requis.`;
			}
		}

		if (data.birthDate && isNaN(Date.parse(data.birthDate))) {
			return "La date de naissance n'est pas valide.";
		}

		const zipCodeRegex = /^\d{5}$/;
		if (data.zipCode && !zipCodeRegex.test(data.zipCode)) {
			return 'Le code postal doit être un nombre à 5 chiffres.';
		}

		return null;
	};

	const validationError = validateData(data);
	if (validationError) {
		return res.status(400).json({ message: validationError });
	}

	try {
		const query = `
            INSERT INTO "Employees" ("""firstName""", """lastName""", """birthDate""", """startDate""", """department""", """street""", """city""", """state""", """zipCode""")
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
