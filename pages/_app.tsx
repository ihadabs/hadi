import Layout from 'components/core/layout/Layout';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import 'styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			{/* Google Analytics */}
			<Script
				strategy="lazyOnload"
				src="https://www.googletagmanager.com/gtag/js?id=G-H09VYEZ3MD"
			/>
			<Script
				strategy="afterInteractive"
				id="GTM"
				dangerouslySetInnerHTML={{
					__html: `
						 window.dataLayer = window.dataLayer || [];
						 function gtag(){dataLayer.push(arguments);}
						 gtag('js', new Date());
						 gtag('config', 'G-H09VYEZ3MD');
					`,
				}}
			/>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
