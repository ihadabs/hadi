import Image from 'next/image';

const accountsLogoSize = 24;

export interface IAccount {
	platform: string;
	link: string;
	logo: string;
}

export default function Account({ account }: { account: IAccount }) {
	return (
		<a href={account.link} target="_blank" rel="noopener noreferrer" className="hoverable">
			<Image src={account.logo} alt={`${account.platform} Logo`} width={accountsLogoSize} height={accountsLogoSize}/>
		</a>
	);
}
