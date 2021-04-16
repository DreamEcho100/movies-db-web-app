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
	const [filter, setFilter] = useState(['all']);

	const changeCategory = (category) => {
		if (category === 'all') {
			if (!filter.includes(category)) {
				setFilter(['all']);
			}
		} else if (filter.includes(category)) {
			setFilter([
				...(filter.length === 1
					? ['all']
					: filter.filter((item) => item !== category)),
			]);
		} else {
			setFilter([...filter.filter((item) => item !== 'all'), ...[category]]);
		}
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
							activeCategory={filter}
							catagories={catagories}
							appName={'Movie DB'}
						/>
					</div>

					<div className='col-lg-9'>
						<h1>
							Displaying (
							{filter
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
							<MoviesList movies={movies} />
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
