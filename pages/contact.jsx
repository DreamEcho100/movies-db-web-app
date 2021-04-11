import Meta from '../components/Meta';

const Contact = () => {
	return (
		<>
			<Meta
				titleToAddFirst='Contact - '
				descriptionToAddFirst='Contact Page ,'
				keywordsToAddFirst={['Contact']}
			/>
			<section className='container'>
				<h1>Hello Contact!</h1>
			</section>
		</>
	);
};

export default Contact;
