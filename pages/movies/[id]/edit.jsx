import React, { Component } from 'react';
import Router from 'next/router';

import MovieCreateForm from '../../../components/Home/MovieCreateForm';
import { getMoviesById, updateMovie } from '../../../actions';

class EditMovie extends Component {
	// static getInitialProps({ query }) {
	// 	return {
	// 		query,
	// 	};
	// }

	// state = {
	// 	movie: {},
	// };

	static async getInitialProps({ query }) {
		const movie = await getMoviesById(query.id);

		return { movie };
	}

	// componentDidMount() {
	// 	const { id } = this.props.query;
	// 	getMoviesById(id).then((movie) => {
	// 		this.setState({ movie });
	// 	});
	// }

	handleUpdateMovie = (movie) => {
		updateMovie(movie).then((updatedMovie) => {
			Router.push('/movies/[id]', `/movies/${movie.id}`);
		});
	};

	render() {
		const { movie } = this.props;
		return (
			<div className='container'>
				<h1>Edit the Movie</h1>
				{JSON.stringify(this.state)}
				<MovieCreateForm
					handleFormSubmit={this.handleUpdateMovie}
					initialData={movie}
				/>
			</div>
		);
	}
}

export default EditMovie;
