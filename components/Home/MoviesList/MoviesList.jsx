import React, { Component } from 'react';
import MovieItem from './MovieItem/MovieItem';

class MoviesList extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { movies } = this.props;

		return (
			<>
				{movies.map(
					({ id, name, releaseYear, description, rating, genre, image }) => {
						return (
							<MovieItem
								key={id}
								id={id}
								name={name}
								releaseYear={releaseYear}
								description={description}
								rating={rating}
								genre={genre}
								image={image}
							/>
						);
					}
				)}

				<MovieItem />
			</>
		);
	}
}

export default MoviesList;
