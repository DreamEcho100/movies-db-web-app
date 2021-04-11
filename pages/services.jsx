import { TitleMetaTag } from '../components/Meta/MetaTagsActions';

const Services = () => {
	return (
		<>
			<TitleMetaTag
				notHandled={true}
				props={{
					titleToAddFirst: 'Services - ',
					descriptionToAddFirst: 'Services Page ,',
					keywordsToAddFirst: ['Services'],
				}}
			/>
			<section className='container'>
				<h1>Hello Services!</h1>
			</section>
		</>
	);
};

export default Services;
