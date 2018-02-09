const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;
const app = express();

let notes = [
	{
		id: 0,
		title: 'Tips for growing healthy hair',
		body: 'Keep a clean scalp, Maintain protein and moisture balance in hair, Avoid direct heat.'
	},
	{
		id: 1,
		title: 'Places I\'d like to visit', 
		body: 'Monaco, Phucket, Lagos, Johannesburg, London, Paris.'
	},
	{
		id: 2,
		title: 'Grocery List',
		body: 'Avocado, Tuna, Bread, Onion, Pineapples, Peaches, Brioche buns, Salmon, Bananas.'
	}
];

let id = notes.length;

app.use(bodyParser.json());

app.use(cors());

app.get('/api/notes/get', (req, res) => {
	res.send(notes);
});

app.post('/api/notes/create', (req, res) => {
	const { title, body } = req.body;
	const myNote = { id, title, body };
	notes.push(myNote);
	res.send(notes);
	id++;
});

app.put('/api/notes/update', (req, res) => {
	const { title, body } = req.body;
	const updatedNote = { title, body };
	const newNotes = notes.map(note => {
		return (note = updatedNote);
	});
	notes = newNotes;
	res.send(notes);
});

app.delete('/api/notes/delete', (req, res) => {
	const key = req.body.id;
	const newNotes = notes.filter(note => {
		return key !== note.id;
	});
	notes = newNotes;
	res.send(notes);
});

app.listen(port, () => {
	console.log(`server listening on port ${port}`);
});