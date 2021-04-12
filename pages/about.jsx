import {
	addToHead,
	DescriptionMetaTag,
	handleDescription,
	KeywordsMetaTag,
	handleKeywords,
	TitleMetaTag,
	handleTitle,
} from '../components/Meta/MetaTagsActions';

const About = () => {
	return (
		<>
			{addToHead([
				TitleMetaTag(
					handleTitle({
						addFirst: 'About - ',
					})
				),
				KeywordsMetaTag(
					handleKeywords({
						addFirst: ['About Page'],
					})
				),
				DescriptionMetaTag(
					handleDescription({
						addFirst: 'About Page, ',
					})
				),
			])}
			<section className='container'>
				<h1>Hello About!</h1>
			</section>
		</>
	);
};

export default About;
