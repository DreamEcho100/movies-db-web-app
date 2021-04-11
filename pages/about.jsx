import Meta from '../components/Meta';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
	return (
		<>
			<Navbar />
			<main className='container about-page'>
				<Meta
					titleToAddFirst='About - '
					descriptionToAddFirst='About Page ,'
					keywordsToAddFirst={['About']}
				/>
				<h1>Hello About!</h1>
			</main>
			<Footer />
			<style jsx>{`
				.about-page {
					margin-top: 2.5em;
				}
			`}</style>
		</>
	);
};

export default About;
