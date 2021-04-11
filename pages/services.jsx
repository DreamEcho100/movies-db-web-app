import Meta from '../components/Meta';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Services = () => {
	return (
		<>
			<Navbar />
			<main className='container services-page'>
				<Meta
					titleToAddFirst='Services - '
					descriptionToAddFirst='Services Page ,'
					keywordsToAddFirst={['Services']}
				/>
				<h1>Hello Services!</h1>
			</main>
			<Footer />
			<style jsx>{`
				.services-page {
					margin-top: 2.5em;
				}
			`}</style>
		</>
	);
};

export default Services;
