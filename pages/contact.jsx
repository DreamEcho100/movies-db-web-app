import { TitleMetaTag } from '../components/Meta/MetaTagsActions';

const Contact = () => {
	return (
		<>
			<TitleMetaTag
				notHandled={true}
				props={{
					titleToAddFirst: 'Contact - ',
					descriptionToAddFirst: 'Contact Page ,',
					keywordsToAddFirst: ['Contact'],
				}}
			/>
			<section className='container'>
				<h1>Hello Contact!</h1>
			</section>
		</>
	);
};

export default Contact;
