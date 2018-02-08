const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;
const app = express();

const notes = [
	{
		title: 'Tips for growing healthy hair',
		body: 'Keep a clean scalp, Maintain protein and moisture balance in hair, Avoid direct heat.'
	},
	{
		title: 'Places I\'d like to visit', 
		body: 'Monaco, Phucket, Lagos, Johannesburg, London, Paris.'
	},
	{
		title: 'Grocery List',
		body: 'Avocado, Tuna, Bread, Onion, Pineapples, Peaches, Brioche buns, Salmon, Bananas.'
	}
];

app.use(bodyParser.json());

app.use(cors());

app.get('/api/notes/get', (req, res) => {
	res.send(notes);
});

app.post('/api/notes/create', (req, res) => {
	notes.push(req.body);
	res.send(notes);
});

app.put('/api/notes/update', (req, res) => {
	const index = req.body.index;
	notes[index] = req.body.update;
	res.send(notes);
});

app.delete('/api/notes/delete', (req, res) => {
	const indes = req.body.index;
	notes.splice(index, 1);
	res.send(notes);
});

app.listen(port, () => {
	console.log(`server listening on port ${port}`);
});