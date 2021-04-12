import { useState } from 'react';

import Modal from './Modal';

const SideMenu = ({ catagories }) => {
	return (
		<>
			<Modal />
			<h1 style={{ fontSize: 'calc(var(--header1) - 1rem)' }} className='my-4'>
				Shop Name
			</h1>
			<div className='current-theme list-group'>
				{catagories.map(({ id, name }) => (
					<a key={id} href='#' className='current-theme list-group-item'>
						{name}
					</a>
				))}
			</div>
		</>
	);
};

export default SideMenu;
