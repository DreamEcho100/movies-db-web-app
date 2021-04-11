import { useRouter } from 'next/router';
import { getMoviesById } from '../../actions';

const Movie = (props) => {
	const router = useRouter();
	const { id } = router.query;
	const { movie } = props;
	console.log(movie);
	return (
		<section className='container'>
			<h1>Movies with id: {id}</h1>
			<div className='jumbotron text-dark border border-secondary'>
				<h1 className='display-4'>{movie.name}</h1>
				<p className='lead'>
					This is a simple hero unit, a simple jumbotron-style component for
					calling extra attention to featured content or information.
				</p>
				<hr className='my-4' />
				<p>
					It uses utility classes for typography and spacing to space content
					out within the larger container.
				</p>
				<a className='btn btn-primary btn-lg' href='#' role='button'>
					Learn more
				</a>
			</div>
			<p>Some description about the movie</p>
		</section>
	);
};

Movie.getInitialProps = async () => {
	const movie = await getMoviesById('2');

	return {
		movie,
	};
};

export default Movie;
