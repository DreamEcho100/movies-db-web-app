import React, { Component, useEffect, useState } from 'react';

import { getMovies } from '../actions/index';

import Carousel from '../components/Home/Carousel';
import Meta from '../components/Meta';
import MoviesList from '../components/Home/MoviesList/MoviesList';
import Navbar from '../components/Navbar';
import SideMenu from '../components/Home/SideMenu';
import Footer from '../components/Footer';

const Home = ({ movies, errorMessage }) => {
	return (
		<>
			<Meta
				// graphMetaTags={{
				// 	socialWebSites: [
				// 		{
				// 			target: 'twitter',
				// 			card: '',
				// 			site: '',
				// 			creator: '',
				// 		},
				// 	],
				// 	defaultUrl: false,
				// 	defaultTitle: false,
				// 	defaultDescription: false,
				// 	defaultImage: false,
				// }}
				titleToAddFirst='Home - '
				descriptionToAddFirst='Home Page "Noooooooooooooooooice!", '
				keywordsToAddFirst={['Home']}
			/>

			<Navbar />

			<main className='container home-page'>
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
			</main>
			<Footer />
			<style jsx>{`
				.home-page {
					margin-top: 2.5em;
				}
			`}</style>
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
