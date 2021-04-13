const next = require('next');
const express = require('express');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ next });
const handle = app.getRequestHandler();

app.prepare().then(() => {
	const server = express();

	server.get('*', (request, response) => {
		return handle(request, response);
	});

	const PORT = process.env.PORT || 3000;

	server.listen(PORT, (error) => {
		if (error) {
			throw error;
		}
		console.log(`> Ready on port ${PORT}`);
	});
});
