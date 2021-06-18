import { Head } from 'next/document';

const Meta = ({ title, keywords, description }: { title: string, description: string, keywords: string[] }) => (
	<Head>
		<meta name="viewport" content="initial-scale=1.0, width=device-width"/>
		<meta name="keywords" content={keywords.join(' ')}/>
		<meta name="description" content={description}/>
		<link rel="icon" href="/favicon.ico"/>
		<title>{title}</title>
		<meta/>
	</Head>
);

export default Meta;
