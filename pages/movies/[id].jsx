import { useRouter } from 'next/router';
import { getMoviesById } from '../../actions';

const Movie = (props) => {
	const router = useRouter();
	const { id } = router.query;
	const { movie } = props;
	console.log(movie);
	return (
		<section className='container'>
			<h1>Movies with id: {movie.id}</h1>
			<div className='jumbotron text-dark border border-secondary'>
				<h1 className='display-4'>{movie.name}</h1>
				<p className='lead'>{movie.description}</p>
				<hr className='my-4' />
				<p className='lead'>{movie.genre}</p>
				<a className='btn btn-primary btn-lg' href='#' role='button'>
					Learn more
				</a>
			</div>
			<p className='desc-text'>{movie.longDesc}</p>
		</section>
	);
};

Movie.getInitialProps = async ({ query }) => {
	const movie = await getMoviesById(query.id);

	return {
		movie,
	};
};

export default Movie;
