import React, { Component, useEffect, useState } from 'react';

import { getMovies } from '../actions/index';

import Carousel from '../components/Home/Carousel';
import { TitleMetaTag } from '../components/Meta/MetaTagsActions';
import MoviesList from '../components/Home/MoviesList/MoviesList';
import SideMenu from '../components/Home/SideMenu';

const Home = ({ movies, errorMessage }) => {
	return (
		<>
			{TitleMetaTag('', true, {
				titleToAddFirst: 'Home - ',
				descriptionToAddFirst: 'Home Page "Noooooooooooooooooice!", ',
				keywordsToAddFirst: ['Home'],
			})}
			<section className='container'>
				<div className='row'>
					<div className='col-lg-3'>
						<SideMenu />
					</div>

					<div className='col-lg-9'>
						<Carousel />
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

	return {
		movies,
	};
};

export default Home;
