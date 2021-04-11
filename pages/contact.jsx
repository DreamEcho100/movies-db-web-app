import Meta from '../components/Meta';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
	return (
		<>
			<Navbar />
			<main className='container contact-page'>
				<Meta
					titleToAddFirst='Contact - '
					descriptionToAddFirst='Contact Page ,'
					keywordsToAddFirst={['Contact']}
				/>
				<h1>Hello Contact!</h1>
			</main>
			<Footer />
			<style jsx>{`
				.contact-page {
					margin-top: 2.5em;
				}
			`}</style>
		</>
	);
};

export default Contact;
