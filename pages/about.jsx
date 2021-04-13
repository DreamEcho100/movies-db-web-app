import {
	AddToHead,
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
			<AddToHead
				elements={[
					// <TitleMetaTag
					// 	title={handleTitle({
					// 		addFirst: 'About - ',
					// 	})}
					// />,
					TitleMetaTag({
						title: handleTitle({
							addFirst: 'About - ',
						}),
					}),
					KeywordsMetaTag({
						keywords: handleKeywords({
							addFirst: ['About Page'],
						}),
					}),
					DescriptionMetaTag({
						description: handleDescription({
							addFirst: 'About Page, ',
						}),
					}),
				]}
			/>
			<section className='container'>
				<h1>Hello About!</h1>
			</section>
		</>
	);
};

export default About;
