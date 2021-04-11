import Head from 'next/head';
import { Fragment } from 'react';

const defaultUrl = 'http://localhost:3000';
const defaultTitle = 'Movies DB Web App';
const defaultKeywords = ['Movies', 'DB', 'Web', 'App', 'keywords'];
const defaultDescription = 'Movies DB Web App keywords.';
const defaultLang = 'en';
const defaultAuthor = 'DreamEcho100';
const defaultIcon = '/favicon.ico';
const defaultSvgIcon = '/vercel.svg';
const defaultAppleIcon = '/favicon.ico';
const defaultCopyrightOwner = 'DreamEcho100';

const firstLetterToLowerCase = (string) => {
	let tempArray = string.split('');

	tempArray[0] = tempArray[0].toLowerCase();

	return tempArray.join('');
};

export const handleTitle = ({ title, addFirst, addLast }) => {
	let tempString = title ? title : defaultTitle;

	tempString = addFirst
		? `${addFirst}${firstLetterToLowerCase(tempString)}`
		: tempString;

	tempString = addLast ? `${tempString}${addLast}` : tempString;

	return tempString;
};

export const handleKeywords = ({ keywords, addFirst, addLast }) => {
	let tempArray = keywords ? keywords : defaultKeywords;

	tempArray = addFirst ? [...addFirst, ...tempArray] : tempArray;

	tempArray = addLast ? [...tempArray, ...addLast] : tempArray;

	return tempArray.join(', ');
};

export const handleDescription = ({ description, addFirst, addLast }) => {
	let tempString = description ? description : defaultDescription;

	tempString = addFirst ? `${addFirst}${tempString}` : tempString;

	tempString = addLast ? `${tempString}${addLast}` : tempString;

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
};

export const RobotsMetaTag = (index, follow, addToHead) => {
	if (addToHead) {
		return (
			<Head>
				<meta
					name='robots'
					content={`${index ? 'index' : 'noindex'} ${
						follow ? 'follow' : 'nofollow'
					}`}
				/>
			</Head>
		);
	} else {
		return (
			<meta
				name='robots'
				content={`${index ? 'index' : 'noindex'} ${
					follow ? 'follow' : 'nofollow'
				}`}
			/>
		);
	}
};

export const GraphMetaTags = (graphMetaProps, extraProps, addToHead) => {
	const socialWebSites =
		graphMetaProps && graphMetaProps.socialWebSites
			? graphMetaProps.socialWebSites
			: [];
	const og = graphMetaProps && graphMetaProps.og ? graphMetaProps.og : {};

	let {
		mainAuthor,
		mainLang,
		mainUrl,
		mainDescription,
		mainTitle,
		mainImage,
	} = extraProps;

	mainAuthor = mainAuthor ? mainAuthor : defaultAuthor;
	mainLang = mainLang ? mainLang : defaultLang;
	mainUrl = mainUrl ? mainUrl : defaultUrl;
	mainDescription = mainDescription ? mainDescription : defaultDescription;
	mainTitle = mainTitle ? mainTitle : defaultTitle;
	mainImage = mainImage ? mainImage : defaultIcon;

	const articleMeta = [
		{
			propertyType: 'article:publisher',
			content: mainUrl, // 'https://www.facebook.com/'
		},
		{
			propertyType: 'article:published_time',
			content: '', // '2016-05-25T15:27:16+00:00'
		},
		{
			propertyType: 'article:modified_time',
			content: '', // '2020-01-29T23:21:55+00:00'
		},
	];

	/*
    <meta property="article:publisher" content="https://www.facebook.com/CSSTricks">
    <meta property="article:published_time" content="2016-05-25T15:27:16+00:00">
    <meta property="article:modified_time" content="2020-01-29T23:21:55+00:00">
  */

	const twitterMeta = [
		{
			nameType: 'card',
			content: 'summary_large_image',
		},
		{
			nameType: 'creator',
			content: mainAuthor,
		},
		{
			nameType: 'site',
			content: mainUrl, // ''
		},
		{
			nameType: 'label1',
			content: '', // Written by
		},
		{
			nameType: 'data1',
			content: '', // Chris Coyier
		},
		{
			nameType: 'label2',
			content: '', // Est. reading time
		},
		{
			nameType: 'data2',
			content: '', // 4 minutes
		},
	];
	/*
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:creator" content="@chriscoyier">
    <meta name="twitter:site" content="@CSS">
    <meta name="twitter:label1" content="Written by">
    <meta name="twitter:data1" content="Chris Coyier">
    <meta name="twitter:label2" content="Est. reading time">
    <meta name="twitter:data2" content="4 minutes">
  */

	/*
    <meta name="monetization" content="$ilp.uphold.com/biyqg2MkQKbe">
  */
	const ogLocale = og && og.locale ? og.locale : mainLang; // "en";
	const ogType = og && og.type ? og.type : 'article';
	const ogTitle = og && og.title ? og.title : mainTitle;
	const ogDescription = og && og.description ? og.description : mainDescription;
	const ogUrl = og && og.url ? og.url : mainUrl;
	const ogSiteName = og && og.siteName ? og.siteName : mainTitle;
	const ogImage = og && og.image ? og.image : mainImage;

	if (addToHead) {
		return (
			<Head>
				{socialWebSites.map((socialWebSite, index) => (
					<Fragment key={index}>
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
				<meta property='og:locale' content={ogLocale} />
				<meta property='og:type' content={ogType} />
				<meta property='og:title' content={ogTitle} />
				<meta property='og:description' content={ogDescription} />
				<meta property='og:url' content={ogUrl} />
				<meta property='og:siteName' content={ogSiteName} />
				<meta property='og:image' content={ogImage} />
			</Head>
		);
	} else {
		return (
			<>
				{socialWebSites.map((socialWebSite, index) => (
					<Fragment key={index}>
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
				<meta property='og:locale' content={ogLocale} />
				<meta property='og:type' content={ogType} />
				<meta property='og:title' content={ogTitle} />
				<meta property='og:description' content={ogDescription} />
				<meta property='og:url' content={ogUrl} />
				<meta property='og:siteName' content={ogSiteName} />
				<meta property='og:image' content={ogImage} />
			</>
		);
	}
};

export const CopyrightOwnerMetaTag = (owner, addToHead) => {
	const mainCopyrightOwner = owner ? owner : defaultCopyrightOwner;
	if (addToHead) {
		return (
			<Head>
				<meta
					name='copyright'
					content={`Copyright owner: ${mainCopyrightOwner}`}
				/>
			</Head>
		);
	} else {
		return (
			<meta
				name='copyright'
				content={`Copyright owner: ${mainCopyrightOwner}`}
			/>
		);
	}
};

export const AuthorMetaTag = (author, addToHead) => {
	const mainAuthor = author ? author : defaultAuthor;
	if (addToHead) {
		return (
			<Head>
				<meta name='author' content={mainAuthor} />
			</Head>
		);
	} else {
		return <meta name='author' content={mainAuthor} />;
	}
};

export const CacheControlMetaTag = (NoCache, addToHead) => {
	if (!NoCache) {
		return null;
	}
	if (addToHead) {
		return (
			<Head>
				<meta httpEquiv='cache-control' content='no-cache' />
			</Head>
		);
	} else {
		return <meta httpEquiv='cache-control' content='no-cache' />;
	}
};

export const KeywordsMetaTag = (keywords, addToHead, props) => {
	let mainKeywords;
	if (addToHead) {
		mainKeywords = handleKeywords(props);
		return (
			<Head>
				<meta name='keywords' content={mainKeywords} />
			</Head>
		);
	} else {
		mainKeywords = keywords ? keywords : defaultKeywords.join(', ');
		return <meta name='keywords' content={mainKeywords} />;
	}
};

export const DescriptionMetaTag = (description, addToHead, props) => {
	let mainDescription;
	if (addToHead) {
		mainDescription = handleDescription(props);
		return (
			<Head>
				<meta name='description' content={mainDescription} />
			</Head>
		);
	} else {
		mainDescription = description ? description : defaultDescription;
		return <meta name='description' content={mainDescription} />;
	}
};

export const IconsMetaTags = ({ icon, svgIcon, appleIcon }, addToHead) => {
	const mainIcon = icon ? icon : defaultIcon;
	const mainSvgIcon = svgIcon ? svgIcon : defaultSvgIcon;
	const mainAppleIcon = appleIcon ? appleIcon : defaultAppleIcon;
	if (addToHead) {
		return (
			<Head>
				<link rel='icon' href={icon} />
				<link rel='icon' href={svgIcon} type='image/svg+xml' />
				<link rel='apple-touch-icon' href={appleIcon} />
			</Head>
		);
	} else {
		return (
			<>
				<link rel='icon' href={mainIcon} />
				<link rel='icon' href={mainSvgIcon} type='image/svg+xml' />
				<link rel='apple-touch-icon' href={mainAppleIcon} />
			</>
		);
	}
};

export const TitleMetaTag = (title, addToHead, props) => {
	let mainTitle;
	if (addToHead) {
		mainTitle = handleTitle(props);
		return (
			<Head>
				<title>{mainTitle}</title>
			</Head>
		);
	} else {
		mainTitle = title ? title : defaultTitle;
		return <title>{mainTitle}</title>;
	}
};

export const DefaultMetaTags = ({
	robotsNoIndex,
	robotsNoFollow,
	graphMetaProps,
	cacheControlNoCache,
	keywords,
	keywordsToAddFirst,
	keywordsToAddLast,
	description,
	descriptionToAddFirst,
	descriptionToAddLast,
	icon,
	svgIcon,
	appleIcon,
	lang,
	author,
	url,
	copyrightOwner,
	extraTags,
	title,
	titleToAddFirst,
	titleToAddLast,
}) => {
	const mainLang = lang;
	const mainAuthor = author;
	const mainUrl = url;
	const mainCopyrightOwner = copyrightOwner;
	const mainIcon = icon;
	const mainSvgIcon = svgIcon;
	const mainAppleIcon = appleIcon;
	const mainTitle = handleTitle({
		title,
		addFirst: titleToAddFirst,
		addLast: titleToAddLast,
	});
	const mainKeywords = handleKeywords({
		keywords,
		addFirst: keywordsToAddFirst,
		addLast: keywordsToAddLast,
	});
	const mainDescription = handleDescription({
		description,
		addFirst: descriptionToAddFirst,
		addLast: descriptionToAddLast,
	});

	return (
		<Head>
			<meta httpEquiv='Content-Type' content='text/html;' charset='utf-8' />
			<meta name='language' content='English' />
			<meta charset='UTF-8' />
			<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
			<meta name='viewport' content='width=device-width, initial-scale=1.0' />
			{RobotsMetaTag(robotsNoIndex, robotsNoFollow)}
			{GraphMetaTags(graphMetaProps, {
				mainAuthor: author,
				mainLang,
				mainUrl,
				mainDescription,
				mainTitle,
				mainImage: icon,
			})}
			{CacheControlMetaTag(cacheControlNoCache)}
			{AuthorMetaTag(mainAuthor)}
			{CopyrightOwnerMetaTag(mainCopyrightOwner)}
			{KeywordsMetaTag(mainKeywords)}
			{DescriptionMetaTag(mainDescription)}
			{/* <link rel="icon" href="/favicon.ico" />
			<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
			<link rel="apple-touch-icon" href="/apple-touch-icon.png" /> */}
			{IconsMetaTags({
				mainIcon,
				mainSvgIcon,
				mainAppleIcon,
			})}
			{extraTags}
			{TitleMetaTag(title)}
		</Head>
	);
};
