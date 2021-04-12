import {
	addToHead,
	DescriptionMetaTag,
	handleDescription,
	KeywordsMetaTag,
	handleKeywords,
	TitleMetaTag,
	handleTitle,
} from '../components/Meta/MetaTagsActions';

const Contact = () => {
	return (
		<>
			{addToHead([
				TitleMetaTag(
					handleTitle({
						addFirst: 'Contact - ',
					})
				),
				KeywordsMetaTag(
					handleKeywords({
						addFirst: ['Contact Page'],
					})
				),
				DescriptionMetaTag(
					handleDescription({
						addFirst: 'Contact Page, ',
					})
				),
			])}
			<section className='container'>
				<h1>Hello Contact!</h1>
			</section>
		</>
	);
};

export default Contact;
