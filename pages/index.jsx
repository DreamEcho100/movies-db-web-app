import React, { Component, useEffect, useState } from 'react';

import { getMovies, getCatagories } from '../actions/index';

import Carousel from '../components/Home/Carousel';
import {
	addToHead,
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
	return (
		<>
			{addToHead([
				TitleMetaTag(
					handleTitle({
						addFirst: 'Home - ',
					})
				),
				KeywordsMetaTag(
					handleKeywords({
						addFirst: ['Home Page'],
					})
				),
				DescriptionMetaTag(
					handleDescription({
						addFirst: 'Home Page "Noooooooooooooooooice!", ',
					})
				),
			])}
			<section className='container'>
				<div className='row'>
					<div className='col-lg-3'>
						<SideMenu catagories={catagories} />
					</div>

					<div className='col-lg-9'>
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
