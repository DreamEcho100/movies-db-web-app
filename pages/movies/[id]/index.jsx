import { useRouter } from 'next/router';
import Link from 'next/link';

import { getMoviesById, deleteMovie } from '../../../actions';
import {
	AddToHead,
	DescriptionMetaTag,
	handleDescription,
	KeywordsMetaTag,
	handleKeywords,
	TitleMetaTag,
	handleTitle,
} from '../../../components/Meta/MetaTagsActions';

const Movie = (props) => {
	const router = useRouter();
	const { id } = router.query;
	const { movie } = props;

	const handleDeleteMovie = async (id) => {
		await deleteMovie(id).then(() => {
			router.push('/');
		});
	};

	return (
		<section className='container'>
			<AddToHead
				elements={[
					TitleMetaTag({
						title: handleTitle({
							addFirst: `${movie.name} - `,
						}),
					}),
					KeywordsMetaTag({
						keywords: handleKeywords({
							addFirst: [movie.name],
						}),
					}),
					DescriptionMetaTag({
						description: handleDescription({
							addFirst: `${movie.name} description: ${movie.description}`,
						}),
					}),
				]}
			/>
			{/* <h1>Movies with id: {movie.id}</h1> */}
			<div className='jumbotron text-dark border border-secondary'>
				<h1 className='display-4'>{movie.name}</h1>
				<p className='lead'>{movie.description}</p>
				<hr className='my-4' />
				<p className='lead'>
					{movie.genre
						.map(
							(item) => `${item[0].toUpperCase()}${item.substr(1, item.length)}`
						)
						.join(', ')}
				</p>
				<button
					className='movie__jumbotron__btn btn btn-danger btn-lg main-font-size'
					onClick={() => handleDeleteMovie(id)}
					href='#'
					role='button'
				>
					Delete
				</button>
				<Link href='/movies/[id]/edit' as={`/movies/${id}/edit`}>
					<button
						className='movie__jumbotron__btn btn btn-warning btn-lg main-font-size'
						// onClick={() => router.push(`${id}/edit`)}
						href='#'
						role='button'
					>
						Edit
					</button>
				</Link>
			</div>
			<p className='desc-text'>{movie.longDesc}</p>
			<style jsx>{`
				.movie__jumbotron__btn {
					margin: 0 0.5em 0 0;
				}
			`}</style>
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
