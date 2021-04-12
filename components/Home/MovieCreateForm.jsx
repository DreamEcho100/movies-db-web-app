import { useState } from 'react';

const MovieCreateForm = () => {
	const [formProps, setFormProps] = useState({
		name: '',
		description: '',
		rating: 0,
		image: '',
		cover: '',
		longDesc: '',
	});

	const handleChange = (event) => {
		const target = event.target;
		const name = target.name;

		setFormProps({
			...formProps,
			[name]: target.value,
		});
	};

	return (
		<form>
			<div className='form-group'>
				{JSON.stringify(formProps)}
				<label htmlFor='name'>Name</label>
				<input
					type='text'
					onChange={handleChange}
					value={formProps.name}
					name='name'
					className='form-control'
					id='name'
					aria-describedby='emailHelp'
					placeholder='Lord of the Rings'
				/>
			</div>
			<div className='form-group'>
				<label htmlFor='description'>Description</label>
				<input
					onChange={handleChange}
					value={formProps.description}
					name='description'
					type='text'
					className='form-control'
					id='description'
					placeholder='Somewhere in Middle-earth...'
				/>
			</div>
			<div className='form-group'>
				<label htmlFor='description'>Rating</label>
				<input
					onChange={handleChange}
					value={formProps.rating}
					name='rating'
					type='number'
					max='5'
					min='0'
					className='form-control'
					id='rating'
					placeholder='3'
				/>
				<small id='emailHelp' className='form-text text-muted'>
					Max: 5, Min: 0{' '}
				</small>
			</div>
			<div className='form-group'>
				<label htmlFor='image'>Image</label>
				<input
					onChange={handleChange}
					value={formProps.image}
					name='image'
					type='text'
					className='form-control'
					id='image'
					placeholder='http://.....'
				/>
			</div>
			<div className='form-group'>
				<label htmlFor='cover'>Cover</label>
				<input
					onChange={handleChange}
					value={formProps.cover}
					name='cover'
					type='text'
					className='form-control'
					id='cover'
					placeholder='http://......'
				/>
			</div>
			<div className='form-group'>
				<label htmlFor='longDesc'>Long Description</label>
				<textarea
					onChange={handleChange}
					value={formProps.longDesc}
					name='longDesc'
					className='form-control'
					id='longDesc'
					rows='3'
				></textarea>
			</div>
			<div className='form-group'>
				<label htmlFor='genre'>Genre</label>
				<select multiple className='form-control' id='genre'>
					<option>drama</option>
					<option>music</option>
					<option>adventure</option>
					<option>historical</option>
					<option>action</option>
				</select>
			</div>
		</form>
	);
};

export default MovieCreateForm;
