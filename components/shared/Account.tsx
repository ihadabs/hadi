import Image from 'next/image';

const accountsLogoSize = 24;

export type AccountName = 'linkedIn' | 'gitHub' | 'twitter' | 'email';
export interface IAccount {
	platform: AccountName;
	link: string;
	logo: string;
}

export default function Account({ account }: { account: IAccount }) {
	return (
		<a
			href={account.link}
			target="_blank"
			rel="noopener noreferrer"
			className="hoverable"
		>
			<Image
				src={account.logo}
				alt={`${account.platform} Logo`}
				width={accountsLogoSize}
				height={accountsLogoSize}
			/>
		</a>
	);
}
