import { TitleMetaTag } from '../components/Meta/MetaTagsActions';

const About = () => {
	return (
		<>
			<TitleMetaTag
				notHandled={true}
				props={{
					titleToAddFirst: 'About - ',
					descriptionToAddFirst: 'About Page ,',
					keywordsToAddFirst: ['About'],
				}}
			/>
			<section className='container'>
				<h1>Hello About!</h1>
			</section>
		</>
	);
};

export default About;
