import {
	addToHead,
	DescriptionMetaTag,
	handleDescription,
	KeywordsMetaTag,
	handleKeywords,
	TitleMetaTag,
	handleTitle,
} from '../components/Meta/MetaTagsActions';

const Services = () => {
	return (
		<>
			{addToHead([
				TitleMetaTag(
					handleTitle({
						addFirst: 'Services - ',
					})
				),
				KeywordsMetaTag(
					handleKeywords({
						addFirst: ['Services Page'],
					})
				),
				DescriptionMetaTag(
					handleDescription({
						addFirst: 'Services Page, ',
					})
				),
			])}
			<section className='container'>
				<h1>Hello Services!</h1>
			</section>
		</>
	);
};

export default Services;
