import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		return await Document.getInitialProps(ctx);
	}

	render() {
		const { locale } = this.props.__NEXT_DATA__;
		const dir = locale === 'ar' ? 'rtl' : 'ltr';

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
					<script async src="https://www.googletagmanager.com/gtag/js?id=G-CWJ8CMX6VF"/>
					<script dangerouslySetInnerHTML={{
						__html: `
						window.dataLayer = window.dataLayer || [];

						function gtag(){dataLayer.push(arguments)}
						gtag('js', new Date());

						gtag('config', 'G-CWJ8CMX6VF');
					`
					}}>
					</script>
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
