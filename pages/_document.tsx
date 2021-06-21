import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		return await Document.getInitialProps(ctx);
	}

	render() {
		const { locale } = this.props.__NEXT_DATA__;
		const dir = locale === 'ar' ? 'rtl' : 'ltr';

		// @ts-ignore
		// @ts-ignore
		return (
			<Html lang={locale} dir={dir}>
				<Head>
					{/* Google Fonts */}
					<link rel="dns-prefetch" href="//fonts.googleapis.com" crossOrigin="true"/>
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
					<link
						href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;500;700&family=Tajawal:wght@400;500;700&display=swap"
						rel="stylesheet"/>

					{/* Google Analytics */}
					<script async src="https://www.googletagmanager.com/gtag/js?id=G-H09VYEZ3MD"/>
					<script dangerouslySetInnerHTML={{
						__html: `
						 window.dataLayer = window.dataLayer || [];
						 function gtag(){dataLayer.push(arguments);}
						 gtag('js', new Date());
						 gtag('config', 'G-H09VYEZ3MD');
					`
					}}/>

					{/* Structured Data */}
					<script
						type="application/ld+json"
						dangerouslySetInnerHTML={{
							__html: JSON.stringify({
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
								'image': 'https://hadialbinsaad.com/avatar',
								'email': 'hadi.albinsaad@gmail.com',
							})
						}}
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
