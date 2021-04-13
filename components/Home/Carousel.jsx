const Carousel = ({ images }) => {
	return (
		<div
			id='carouselExampleIndicators'
			className='carousel slide my-4'
			data-ride='carousel'
		>
			<ol className='carousel-indicators'>
				{images.map((image, index) => (
					<li
						key={image.id}
						data-target='#carouselExampleIndicators'
						data-slide-to={index}
						className={index === 0 ? 'active' : ''}
					></li>
				))}
			</ol>
			<div className='carousel-inner' role='listbox'>
				{images.map((image, index) => (
					<div
						key={image.id}
						className={`carousel-item ${index === 0 ? 'active' : ''}`}
					>
						<img
							className='d-block img-fluid'
							src={image.url}
							alt={image.name}
							style={{
								width: '100%',
								height: '100%',
								backgroundSize: 'cover',
							}}
						/>
					</div>
				))}
			</div>
			<a
				className='carousel-control-prev main-font-size'
				href='#carouselExampleIndicators'
				role='button'
				data-slide='prev'
			>
				<span className='carousel-control-prev-icon' aria-hidden='true'></span>
				<span className='sr-only'>Previous</span>
			</a>
			<a
				className='carousel-control-next main-font-size'
				href='#carouselExampleIndicators'
				role='button'
				data-slide='next'
			>
				<span className='carousel-control-next-icon' aria-hidden='true'></span>
				<span className='sr-only'>Next</span>
			</a>
			<style jsx>{`
				.carousel-item {
					height: 50vh;
					max-height: 100rem;
					min-height: 25rem;
				}
			`}</style>
		</div>
	);
};

export default Carousel;
