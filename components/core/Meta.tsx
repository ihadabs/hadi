import Head from 'next/head';

interface IMeta {
	title: string;
	description: string;
	keywords: string[];
}

export default function Meta({ title, keywords, description }: IMeta) {
	return <Head>
		<title>{title}</title>
		<meta name="description" content={description}/>
		<meta name="keywords" content={keywords.join(' ')}/>

		{/*Twitter */}
		<meta name="twitter:card" content={description} key="twcard"/>
		<meta name="twitter:creator" content="@HadiAlbinsaad" key="twhandle"/>

		{/* Open Graph */}
		<meta property="og:title" content={title} key="ogtitle"/>
		<meta property="og:description" content={description} key="ogdesc"/>
		<meta property="og:url" content="https://hadialbinsaad.com" key="ogurl"/>
		<meta property="og:site_name" content="Hadi Albinsaad" key="ogsitename"/>
		{/*<meta property="og:image" content={previewImage} key="ogimage"/>*/}

		<link rel="icon" href="/favicon.ico"/>

		<meta charSet="utf-8"/>
		<meta name="viewport" content="initial-scale=1.0, width=device-width"/>
	</Head>;
}


