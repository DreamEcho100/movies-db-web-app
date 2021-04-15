const BASE_URL = 'http://localhost:3000';

const MOVIE_DATA = [];

export const getMovies = () => {
	// const myPromise = new Promise((resolve, reject) => {
	// 	setTimeout(() => {
	// 		resolve(JSON.stringify(MOVIE_DATA));
	// 		reject('Cannot fetch data!');
	// 	}, 300);
	// });

	// const data = myPromise.then((response) => JSON.parse(response));

	// return data;
	return fetch(`${BASE_URL}/api/v1/movies`, {
		method: 'GET',
		headers: {
			'Content-type': 'application/json',
		},
	})
		.then((response) => response.json())
		.then((response) => {
			if (response.status === 'fail') {
				console.error(response.message);
			}
			return response.data;
		});
};

export const getMoviesById = (id) => {
	// const myPromise = new Promise((resolve, reject) => {
	// const movieIndex = MOVIE_DATA.findIndex(movie => movie.id === id);
	// const movie = MOVIE_DATA[movieIndex]
	// const movie = MOVIE_DATA.filter((movie) => movie.id === id);
	// setTimeout(() => {
	// 	resolve(JSON.stringify(movie));
	// 	reject('Cannot fetch data!');
	// }, 50);
	// });

	// const data = myPromise.then((response) => JSON.parse(response)[0]);

	// return data;
	return fetch(`${BASE_URL}/api/v1/movies/${id}`, {
		method: 'GET',
		headers: {
			'Content-type': 'application/json',
		},
	})
		.then((response) => response.json())
		.then((response) => {
			if (response.status === 'fail') {
				console.error(response.message);
			}
			return response.data;
		});
};

export const createMovie = (movie) => {
	// const myPromise = new Promise((resolve, reject) => {
	// Create ID for movie
	// movie.id = Math.random().toString(36).substr(2, 7).toLowerCase();
	// MOVIE_DATA.push(movie);
	// setTimeout(() => {
	// 	resolve(JSON.stringify(MOVIE_DATA));
	// 	reject('Cannot fetch data!');
	// }, 50);
	// });

	// const data = myPromise.then((response) => JSON.parse(response));

	// return data;
	movie.id = Math.random().toString(36).substr(2, 7).toLowerCase();
	return fetch(`${BASE_URL}/api/v1/movies`, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
		},
		body: JSON.stringify(movie),
	})
		.then((response) => response.json())
		.then((response) => {
			if (response.status === 'fail') {
				console.error(response.message);
			}
			return response.data;
		});
};

export const deleteMovie = (id) => {
	return fetch(`${BASE_URL}/api/v1/movies/${id}`, {
		method: 'DELETE',
		headers: {
			'Content-type': 'application/json',
		},
	})
		.then((response) => response.json())
		.then((response) => {
			if (response.status === 'fail') {
				console.error(response.message);
			}
			return response.data;
		});
};

export const updateMovie = (movie) => {
	return fetch(`${BASE_URL}/api/v1/movies/${movie.id}`, {
		method: 'PATCH',
		headers: {
			'Content-type': 'application/json',
		},
		body: JSON.stringify(movie),
	})
		.then((response) => response.json())
		.then((response) => {
			if (response.status === 'fail') {
				console.error(response.message);
			}
			return response.data;
		});
};

const CATEGORY_DATA = [
	{ id: 'c-1', name: 'drama' },
	{ id: 'c-2', name: 'action' },
	{ id: 'c-3', name: 'adventeru' },
	{ id: 'c-4', name: 'historical' },
];

export const getCatagories = () => {
	const myPromise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(JSON.stringify(CATEGORY_DATA));
			reject('Cannot fetch data!');
		}, 50);
	});

	const data = myPromise.then((response) => JSON.parse(response));

	return data;
};
