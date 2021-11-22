import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';

const enStructuredData = {
	'@context': 'https://schema.org/',
	'@type': 'Person',
	'givenName': 'Hadi',
	'familyName': 'Albinsaad',
	'name': 'Hadi Albinsaad',
	'additionalName': 'Hadi Albinsaad',
	'affiliation': {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		'url': 'https://axenda.io',
		'name': 'Axenda',
		'legalName': 'Axenda',
		'email': 'info@axenda.io',
		'logo': 'https://axenda.io/assets/logos/axenda-logo.svg',
		'foundingDate': '2020-3-17',
		'founder': 'Hadi Albinsaad'
	},
	'jobTitle': 'Software Engineer',
	'image': 'https://hadialbinsaad.com/avatar.png',
	'email': 'hadi.albinsaad@gmail.com',
};
const arStructuredData = {
	'@context': 'https://schema.org/',
	'@type': 'Person',
	'givenName': 'هادي',
	'familyName': 'البن سعد',
	'name': 'هادي البن سعد',
	'additionalName': 'هادي البن سعد',
	'affiliation': {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		'url': 'https://axenda.io',
		'name': 'اكسندا',
		'legalName': 'اكسندا',
		'email': 'info@axenda.io',
		'logo': 'https://axenda.io/assets/logos/axenda-logo.svg',
		'foundingDate': '2020-3-17',
		'founder': 'هادي البن سعد'
	},
	'jobTitle': 'مهندس برمجيات',
	'image': 'https://hadialbinsaad.com/avatar.png',
	'email': 'hadi.albinsaad@gmail.com',
};

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		return await Document.getInitialProps(ctx);
	}

	render() {
		const { locale } = this.props.__NEXT_DATA__;
		const dir = locale === 'ar' ? 'rtl' : 'ltr';
		const structuredData = locale === 'ar' ? arStructuredData : enStructuredData;

		return (
			<Html lang={locale} dir={dir}>
				<Head>
					{/* Google Fonts */}
					<link rel="dns-prefetch" href="//fonts.googleapis.com" crossOrigin="true"/>
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
					<link
						href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;500;700&family=Tajawal:wght@400;500;700&display=swap"
						rel="stylesheet"/>

					{/* Structured Data */}
					<script
						type="application/ld+json"
						dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
					/>
				</Head>
				<body>
				<Main/>
				<NextScript/>
				</body>
			</Html>
		);
	}
}

export default MyDocument;
