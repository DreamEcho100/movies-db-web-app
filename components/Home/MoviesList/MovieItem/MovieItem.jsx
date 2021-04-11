import { Fragment } from 'react';
import Link from 'next/link';

const MovieItem = ({
	id,
	name,
	releaseYear,
	description,
	rating,
	genre,
	image,
}) => {
	const handleRating = (() => {
		let stars = [];
		for (let i = 0; i < 5; i++) {
			if (i < rating) {
				stars.push({
					entityCode: <>&#9733;</>,
					empty: false,
				});
			} else {
				stars.push({
					entityCode: <>&#9734;</>,
					empty: true,
				});
			}
		}

		return (
			// <small className='text-muted'>
			<small>
				{stars.map(({ entityCode, empty }, index) => {
					if (!empty) {
						return (
							<span style={{ color: 'gold' }} key={index}>
								{entityCode}
							</span>
						);
					} else {
						return (
							<span className='text-muted' key={index}>
								{entityCode}
							</span>
						);
					}
				})}{' '}
				({rating})
			</small>
		);
	})();

	const shortenedText = (text, maxLength) => {
		if (text && text.length > maxLength) {
			return `${text.substr(0, maxLength)}...`;
		}
		return text;
	};

	return (
		<div className='col-lg-4 col-md-6 mb-4'>
			<div className='current-theme card h-100'>
				<Link href={`/movies/${id}`} as={`/movies/${id}`}>
					<a href='#'>
						<img className='card-img-top' src={image} alt='' />
					</a>
				</Link>
				<div className='card-body'>
					<h4 className='card-title'>
						<Link href={`/movies/${id}`} as={`/movies/${id}`}>
							<a href='#'>{name}</a>
						</Link>
					</h4>
					<h5>{releaseYear}</h5>
					<div className='movie-genre'>{genre}</div>
					<p className='card-text'>{shortenedText(description, 200)}</p>
				</div>
				<div className='card-footer'>
					<small className='text-muted'>{handleRating}</small>
				</div>
			</div>
		</div>
	);
};

MovieItem.defaultProps = {
	id: undefined,
	name: '??',
	releaseYear: '??',
	description: '??',
	rating: 0,
	genre: '??',
	image: 'http://placehold.it/700x400',
};

export default MovieItem;
