import Meta from '../components/Meta';

const About = () => {
	return (
		<>
			<Meta
				titleToAddFirst='About - '
				descriptionToAddFirst='About Page ,'
				keywordsToAddFirst={['About']}
			/>
			<section className='container'>
				<h1>Hello About!</h1>
			</section>
		</>
	);
};

export default About;
