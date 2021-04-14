import {
	AddToHead,
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
			<AddToHead
				elements={[
					TitleMetaTag({
						title: handleTitle({
							addFirst: 'Services - ',
						}),
					}),
					KeywordsMetaTag({
						keywords: handleKeywords({
							addFirst: ['Services Page'],
						}),
					}),
					DescriptionMetaTag({
						description: handleDescription({
							addFirst: 'Services Page, ',
						}),
					}),
				]}
			/>
			<section className='container'>
				<h1>Hello Services!</h1>
			</section>
		</>
	);
};

export default Services;
