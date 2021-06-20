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
					<link rel="dns-prefetch" href="//fonts.googleapis.com" crossOrigin="true"/>
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
					<link
						href="https://fonts.googleapis.com/css2?family=Aref+Ruqaa:wght@400;700&family=Comfortaa:wght@300;400;500;600;700&family=Tajawal:wght@200;300;400;500;700;800;900&display=swap"
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
