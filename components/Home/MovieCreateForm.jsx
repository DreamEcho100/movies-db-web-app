import { useState } from 'react';

const MovieCreateForm = (props) => {
	const [formProps, setFormProps] = useState({
		name: '',
		description: '',
		rating: 0,
		image: '',
		cover: '',
		longDesc: '',
		genre: [],
	});

	const handleChange = (event) => {
		const target = event.target;
		const name = target.name;

		setFormProps({
			...formProps,
			[name]: target.value,
		});
	};

	const handleRemoveGenre = (itemGenre) => {
		setFormProps({
			...formProps,
			genre: formProps.genre.filter((item) => item !== itemGenre),
		});
	};

	// const handleGenreChange = (event) => {
	// 	const { options, name } = event.target;
	// 	const optionsLength = options.length;
	// 	let value = [];

	// 	for (let i = 0; i < optionsLength; i++) {
	// 		if (options[i].selected) {
	// 			value.push(options[i].value);
	// 		}
	// 	}

	// 	setFormProps({
	// 		...formProps,
	// 		[name]: value.toString(),
	// 	});
	// };

	const handleGenreChange = (event) => {
		const { options, name } = event.target;
		const optionsLength = options.length;

		for (let i = 0; i < optionsLength; i++) {
			if (options[i].selected) {
				if (!formProps.genre.some((item) => item === options[i].value)) {
					setFormProps({
						...formProps,
						[name]: [...formProps[name], options[i].value],
					});
				}
			}
		}
	};

	const submitForm = () => {
		props.handleFormSubmit({ ...formProps });
	};

	return (
		<form>
			<div className='form-group'>
				<p
					style={{
						wordBreak: 'break-all',
					}}
				>
					{JSON.stringify(formProps)}
				</p>
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
				<select
					name='genre'
					onChange={handleGenreChange}
					className='form-control'
					id='genre'
					defaultValue='--choose-genre'
				>
					<option disabled>--choose-genre</option>
					<option value='drama'>drama</option>
					<option value='music'>music</option>
					<option value='adventure'>adventure</option>
					<option value='historical'>historical</option>
					<option value='action'>action</option>
				</select>
				<div className='genre-selection-group'>
					{formProps.genre.map((item, index) => (
						<div key={index} className='genre-selection-item'>
							{item}{' '}
							<div
								onClick={() => handleRemoveGenre(item)}
								className='remove-genre-btn'
							>
								<div className='remove-genre-btn-container'></div>
							</div>
						</div>
					))}
				</div>
			</div>
			<button
				onClick={submitForm}
				type='button'
				className='btn btn-primary main-font-size'
			>
				Create
			</button>
			<style jsx>{`
				.form-control {
					font-size: var(--normal-size-text-1);
				}
				.genre-selection-group {
					width: 100%;
					margin: 0.5em auto 0 auto;
					display: flex;
					align-items: center;
					justify-content: flex-start;
					flex-wrap: wrap;
					user-select: none;
				}
				.genre-selection-item {
					min-width: fit-content;
					border: 0.2rem solid gray;
					padding: 0.125em 0.25em;
					border-radius: 0.5rem;
					position: relative;
					overflow: hidden;
					margin: 0 0.25em 0.25em 0.25em;
				}
				.remove-genre-btn {
					position: absolute;
					top: -0.08rem;
					right: -0.01rem;
					height: 1rem;
					width: 1rem;
					cursor: pointer;
					overflow: hidden;
				}
				.remove-genre-btn-container {
					position: relative;
					width: 100%;
					height: 100%;
					--font-color: black;
				}
				.remove-genre-btn-container::before,
				.remove-genre-btn-container::after {
					content: '';
					position: absolute;
					top: 50%;
					width: 125%;
					height: 20%;
					background-color: var(--font-color);
					transform-origin: center;
				}
				.remove-genre-btn-container:hover {
					--font-color: gray;
				}
				.remove-genre-btn-container::before {
					transform: translate(0, -50%) rotate(45deg);
				}
				.remove-genre-btn-container::after {
					transform: translate(0, -50%) rotate(-45deg);
				}
			`}</style>
		</form>
	);
};

export default MovieCreateForm;
