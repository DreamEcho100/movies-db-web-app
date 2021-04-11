import Head from 'next/head';
import { Fragment } from 'react';

const Meta = ({
	robotsNoIndex,
	robotsNoFollow,
	graphMetaTags,
	keywords,
	keywordsToAddFirst,
	keywordsToAddLast,
	description,
	descriptionToAddFirst,
	descriptionToAddLast,
	icon,
	extraTags,
	title,
	titleToAddFirst,
	titleToAddLast,
}) => {
	const firstLetterToLowerCase = (string) => {
		let tempArray = string.split('');

		tempArray[0] = tempArray[0].toLowerCase();

		return tempArray.join('');
	};

	const mainTitle = (() => {
		let tempString = title;

		tempString = titleToAddFirst
			? `${titleToAddFirst}${firstLetterToLowerCase(tempString)}`
			: tempString;

		tempString = titleToAddLast ? `${tempString}${titleToAddLast}` : tempString;

		return tempString;
	})();

	const mainKeywords = (() => {
		let tempArray = keywords;

		tempArray = keywordsToAddFirst
			? [...keywordsToAddFirst, ...tempArray]
			: tempArray;

		tempArray = keywordsToAddLast
			? [...tempArray, ...keywordsToAddLast]
			: tempArray;

		return tempArray.join(', ');
	})();

	const mainDescription = (() => {
		let tempString = description;

		tempString = descriptionToAddFirst
			? `${descriptionToAddFirst}${tempString}`
			: tempString;

		tempString = descriptionToAddLast
			? `${tempString}${descriptionToAddLast}`
			: tempString;

		const marksAndEntitiesNames = [
			{
				mark: '\\"',
				entityName: '&quot;',
			},
			{
				mark: "\\'",
				entityName: '&apos;',
			},
			// {
			// 	mark: '<',
			// 	entityName: '&lt;',
			// },
			// {
			// 	mark: '>',
			// 	entityName: '&gt;',
			// },
			//   {
			//     mark: '&',
			//     entityName: '&amp;'
			//   },
			// {
			// 	mark: '©',
			// 	entityName: '&copy;',
			// },
			// {
			// 	mark: '®',
			// 	entityName: '&reg;',
			// },
			// {
			// 	mark: '\\\\',
			// 	entityName: '&bsol;',
			// },
		];

		const marks = marksAndEntitiesNames.map((markAndEntityName) => {
			return markAndEntityName.mark;
		});
		const entitiesNames = marksAndEntitiesNames.map((markAndEntityName) => {
			return markAndEntityName.entityName;
		});

		marks.forEach((mark, index) => {
			const entityName = entitiesNames[index];
			const regex = new RegExp(`[${mark}]`, 'ig');
			tempString = tempString.replace(regex, entityName);
		});

		return tempString;
	})();

	const handleGraphMetaTags = (() => {
		if (!graphMetaTags) {
			return <></>;
		}
		graphMetaTags.defaultUrl = graphMetaTags.defaultUrl
			? graphMetaTags.defaultUrl
			: '';
		graphMetaTags.defaultTitle = graphMetaTags.defaultTitle
			? graphMetaTags.defaultTitle
			: mainDescription;
		graphMetaTags.defaultDescription = graphMetaTags.defaultDescription
			? graphMetaTags.defaultDescription
			: mainDescription;
		graphMetaTags.defaultImage = graphMetaTags.defaultImage
			? graphMetaTags.defaultImage
			: icon;

		/*
			<html prefix="og: http://ogp.me/ns#">
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:site" content="@nytimesbits" />
			<meta name="twitter:creator" content="@nickbilton" />
			<meta property="og:url" content="http://bits.blogs.nytimes.com/2011/12/08/a-twitter-for-my-sister/" />
			<meta property="og:title" content="A Twitter for My Sister" />
			<meta property="og:description" content="In the early days, Twitter grew so quickly that it was almost impossible to add new features because engineers spent their time trying to keep the rocket ship from stalling." />
			<meta property="og:image" content="http://graphics8.nytimes.com/images/2011/12/08/technology/bits-newtwitter/bits-newtwitter-tmagArticle.jpg" />
		*/
		return (
			<>
				{graphMetaTags.socialWebSites.map((socialWebSite) => (
					<Fragment>
						<meta
							name={`${socialWebSite.target}:card`}
							content={socialWebSite.card}
						/>
						<meta
							name={`${socialWebSite.site}:site`}
							content={socialWebSite.site}
						/>
						<meta
							name={`${socialWebSite.site}:creator`}
							content={socialWebSite.creator}
						/>
					</Fragment>
				))}
				<meta property='og:url' content={graphMetaTags.defaultUrl} />
				<meta property='og:title' content={graphMetaTags.defaultTitle} />
				<meta
					property='og:description'
					content={graphMetaTags.defaultDescription}
				/>
				<meta property='og:image' content={graphMetaTags.defaultImage} />
			</>
		);
	})();

	return (
		<Head>
			<meta http-equiv='Content-Type' content='text/html;' charset='utf-8' />
			<meta charset='UTF-8' />
			<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
			<meta name='viewport' content='width=device-width, initial-scale=1.0' />
			<meta
				name='robots'
				content={`${robotsNoIndex ? 'noindex' : 'index'} ${
					robotsNoFollow ? 'nofollow' : 'follow'
				}`}
			/>
			{handleGraphMetaTags}
			{/* <meta http-equiv='cache-control' content='no-cache'/> */}
			<meta name='author' content='DreamEcho100' />
			<meta name='language' content='English' />
			<meta name='copyright' content='Copyright owner: DreamEcho100' />
			<meta name='keywords' content={mainKeywords} />
			<meta name='description' content={mainDescription} />
			<link rel='icon' href={icon} />
			{extraTags}
			<>
				<link
					rel='stylesheet'
					href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
					integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T'
					crossorigin='anonymous'
				/>
				<script
					src='https://code.jquery.com/jquery-3.3.1.slim.min.js'
					integrity='sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo'
					crossorigin='anonymous'
				></script>
				<script
					src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js'
					integrity='sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1'
					crossorigin='anonymous'
				></script>
				<script
					src='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js'
					integrity='sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM'
					crossorigin='anonymous'
				></script>
			</>
			<title>{mainTitle}</title>
		</Head>
	);
};

Meta.defaultProps = {
	title: 'Movies DB Web App',
	keywords: ['Movies', 'DB', 'Web', 'App', 'keywords'],
	description: 'Movies DB Web App keywords.',
	icon: '/favicon.ico',
};

export default Meta;
