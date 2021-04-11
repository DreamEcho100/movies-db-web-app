import { useRouter } from 'next/router';

const Movie = () => {
	const router = useRouter();
	const { id } = router.query;
	return (
		<section className='container'>
			<h1>Movies with id: {id}</h1>
		</section>
	);
};

export default Movie;
