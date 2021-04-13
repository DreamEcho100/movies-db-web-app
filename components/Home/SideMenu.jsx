import { useState } from 'react';

import { createMovie } from '../../actions';

import Modal from '../Modal';
import MovieCreateForm from './MovieCreateForm';

const SideMenu = ({ catagories }) => {
	const handleCreateMovie = (movie) => {
		createMovie(movie).then((movies) => {
			console.log(JSON.stringify(movies));
		});
	};

	return (
		<>
			<div style={{ marginTop: '1em' }}>
				<Modal hasSubmit={false}>
					<MovieCreateForm handleFormSubmit={handleCreateMovie} />
				</Modal>
			</div>
			<h1 style={{ fontSize: 'calc(var(--header1) - 1rem)' }} className='my-4'>
				Shop Name
			</h1>
			<div className='current-theme list-group'>
				{catagories.map(({ id, name }) => (
					<a
						key={id}
						href='#'
						className='current-theme list-group-item main-font-size'
					>
						{name}
					</a>
				))}
			</div>
		</>
	);
};

export default SideMenu;
