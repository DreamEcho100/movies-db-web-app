// const { createServer } = require('http');
// const { parse } = require('url');
// const next = require('next');
// const express = require('express');

// const dev = process.env.NODE_ENV !== 'production';
// const app = next({ dev });
// const handle = app.getRequestHandler();

// app.prepare().then(() => {
// 	const server = express();
// 	server.get('*', (request, response) => {
// 		return handle(request, response);
// 	});

// 	const PORT = process.env.PORT || 3000;

// 	server.use(handle).listen(PORT, (error) => {
// 		if (error) throw error;
// 		console.log(`> Ready on port ${PORT}`);
// 	});
// });
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const express = require('express');
const cors = require('cors');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const moviesData = require('./data.json');

app.prepare().then(() => {
	const server = express();
	const PORT = process.env.PORT || 3000;

	server.use(express.json());
	server.use(cors());

	server.get('/api/v1/movies', (request, response) => {
		// return response.json({ message: 'Hello World!' });
		return response.json(moviesData);
	});

	server.post('/api/v1/movies', (request, response) => {
		const movie = request.body;
		return response.json({
			message: `Saving Post`,
			data: JSON.stringify(movie),
		});
	});

	server.patch('/api/v1/movies/:id', (request, response) => {
		const { id } = request.params;
		return response.json({ message: `Updating post of id: ${id}` });
	});

	server.delete('/api/v1/movies/:id', (request, response) => {
		const { id } = request.params;
		return response.json({ message: `Deleting post of id: ${id}` });
	});

	// server.get('/faq', (request, response) => {
	// 	return response.send(`
	// 	<!DOCTYPE html>
	// 	<html lang="en">
	// 	<head>
	// 		<meta charset="UTF-8">
	// 		<meta http-equiv="X-UA-Compatible" content="IE=edge">
	// 		<meta name="viewport" content="width=device-width, initial-scale=1.0">
	// 		<title>Document</title>
	// 	</head>
	// 	<body>
	// 		<h1>Hello World!</h1>
	// 		<h2>Faq</h2>
	// 	</body>
	// 	</html>
	// 	`);
	// });

	server.get('*', (request, response) => {
		return handle(request, response);
	});

	server.listen(PORT, (error) => {
		if (error) throw error;
		console.log(`> Ready on port ${PORT}`);
	});
});
