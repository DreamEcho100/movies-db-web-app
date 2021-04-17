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
const fs = require('fs');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const moviesDataPath = './data.json';
const moviesData = require(moviesDataPath);

app.prepare().then(() => {
	const server = express();
	const PORT = process.env.PORT || 3000;

	server.use(express.json());
	server.use(cors());

	server.get('/api/v1/movies', (request, response) => {
		try {
			return response.json({
				status: 'success',
				message: '',
				data: moviesData,
			});
		} catch (error) {
			console.error(error);
			return response.status(404).json({
				status: 'fail',
				message: error.message,
				data: [],
			});
		}
	});

	server.get('/api/v1/movies/:id', (request, response) => {
		try {
			const { id } = request.params;
			const movie = moviesData.find((item) => item.id === id);
			return response.json({
				status: 'success',
				message: '',
				data: movie,
			});
		} catch (error) {
			console.error(error);
			return response.status(404).json({
				status: 'fail',
				message: error.message,
				data: [],
			});
		}
	});

	server.post('/api/v1/movies', (request, response) => {
		try {
			const movie = request.body;

			moviesData.push(movie);

			const pathToFile = path.join(__dirname, moviesDataPath);
			const stringfiedData = JSON.stringify(moviesData, null, 2);

			fs.writeFile(pathToFile, stringfiedData, (error) => {
				if (error) {
					return response.status(422).json({
						status: 'fail',
						message: error.message,
						data: [],
					});
				}

				return response.json({
					status: 'success',
					message: 'Movie has been added!',
					data: [],
				});
			});
		} catch (error) {
			console.error(error);
			return response.status(404).json({
				status: 'fail',
				message: error.message,
				data: [],
			});
		}
	});

	server.patch('/api/v1/movies/:id', (request, response) => {
		try {
			const { id } = request.params;
			const movie = request.body;
			const movieIndex = moviesData.findIndex((item) => item.id === id);

			moviesData[movieIndex] = movie;

			const pathToFile = path.join(__dirname, moviesDataPath);
			const stringfiedData = JSON.stringify(moviesData, null, 2);

			fs.writeFile(pathToFile, stringfiedData, (error) => {
				if (error) {
					return response.status(422).json({
						status: 'fail',
						message: error.message,
						data: [],
					});
				}

				return response.json({
					status: 'success',
					message: 'Movie has been added!',
					data: [],
				});
			});
		} catch (error) {
			console.error(error);
			return response.status(404).json({
				status: 'fail',
				message: error.message,
				data: [],
			});
		}
	});

	server.delete('/api/v1/movies/:id', (request, response) => {
		try {
			const { id } = request.params;
			// return response.json({ message: `Deleting post of id: ${id}` });
			const movieIndex = moviesData.findIndex((item) => item.id === id);
			moviesData.splice(movieIndex, 1);

			const pathToFile = path.join(__dirname, moviesDataPath);
			const stringfiedData = JSON.stringify(moviesData, null, 2);

			fs.writeFile(pathToFile, stringfiedData, (error) => {
				if (error) {
					return response.status(422).json({
						status: 'fail',
						message: error.message,
						data: [],
					});
				}

				return response.json({
					status: 'success',
					message: 'Movie has been deleted!',
					data: [],
				});
			});
		} catch (error) {
			console.error(error);
			return response.status(404).json({
				status: 'fail',
				message: error.message,
				data: [],
			});
		}
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

	server.use(handle).listen(PORT, (error) => {
		if (error) throw error;
		console.log(`> Ready on port ${PORT}`);
	});
});
