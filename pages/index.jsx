import React, { Component, useEffect, useState } from 'react';

import { getMovies, getCatagories } from '../actions/index';

import Carousel from '../components/Home/Carousel';
import {
	AddToHead,
	DescriptionMetaTag,
	handleDescription,
	KeywordsMetaTag,
	handleKeywords,
	TitleMetaTag,
	handleTitle,
} from '../components/Meta/MetaTagsActions';
import MoviesList from '../components/Home/MoviesList/MoviesList';
import SideMenu from '../components/Home/SideMenu';

const Home = ({ movies, images, catagories, errorMessage }) => {
	const [genresArray, setGenresArray] = useState(['all']);

	const changeCategory = (category) => {
		if (category === 'all') {
			if (!genresArray.includes(category)) {
				setGenresArray(['all']);
			}
		} else if (genresArray.includes(category)) {
			setGenresArray([
				...(genresArray.length === 1
					? ['all']
					: genresArray.filter((item) => item !== category)),
			]);
		} else {
			setGenresArray([
				...genresArray.filter((item) => item !== 'all'),
				...[category],
			]);
		}
	};

	const filterMovies = (movies) => {
		if (genresArray.includes('all')) {
			return movies;
		}

		return movies.filter((movie) => {
			// return filter.includes(movie.genre);
			for (let i = 0; i < movie.genre.length; i++) {
				if (genresArray.includes(movie.genre[i])) {
					return true;
				}
			}
		});
		// console.log(movies);
		// const temp = filter.forEach((genre) => {
		// 	return movies.filter((movie) => movie.genre.includes(genre));
		// });
		// console.log(temp);
		// return temp;
	};

	return (
		<>
			<AddToHead
				elements={[
					TitleMetaTag({
						title: handleTitle({
							addFirst: 'Home - ',
						}),
					}),
					KeywordsMetaTag({
						keywords: handleKeywords({
							addFirst: ['Home Page'],
						}),
					}),
					DescriptionMetaTag({
						description: handleDescription({
							addFirst: 'Home Page, "Noooooooooooooooooice!", ',
						}),
					}),
				]}
			/>
			<section className='container'>
				<div className='row'>
					<div className='col-lg-3'>
						<SideMenu
							changeCategory={changeCategory}
							activeCategory={genresArray}
							catagories={catagories}
							appName={'Movie DB'}
						/>
					</div>

					<div className='col-lg-9'>
						<h1>
							Displaying (
							{genresArray
								.map(
									(item) =>
										`${item[0].toUpperCase()}${item.substr(1, item.length)}`
								)
								.join(', ')}
							) movies
						</h1>
						<Carousel images={images} />
						<div className='row'>
							{errorMessage && (
								<div
									className='alert alert-danger margin-auto mt-1 mb-4'
									role='alert'
								>
									{errorMessage}
								</div>
							)}
							<MoviesList movies={filterMovies(movies)} />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

Home.getInitialProps = async () => {
	const movies = await getMovies();
	const catagories = await getCatagories();
	const images = movies.map((movie) => ({
		id: `image-${movie.id}`,
		url: movie.cover,
		name: movie.name,
	}));

	return {
		movies,
		images,
		catagories,
	};
};

export default Home;
