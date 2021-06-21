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
					<link
						href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;500;700&family=Tajawal:wght@400;500;700&display=swap"
						rel="stylesheet"/>
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
