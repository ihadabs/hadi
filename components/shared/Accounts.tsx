import { useEffect, useState } from 'react';
import Account, { AccountName, IAccount } from './Account';

const accounts: IAccount[] = [
	{
		platform: 'linkedIn',
		logo: '/accounts/linkedin.svg',
		link: 'https://www.linkedin.com/in/hadi-albinsaad/',
	},
	{
		platform: 'gitHub',
		logo: '/accounts/github.svg',
		link: 'https://github.com/ihadabs',
	},
	{
		platform: 'twitter',
		logo: '/accounts/twitter.svg',
		link: 'https://twitter.com/i/user/735299448',
	},
	{
		platform: 'email',
		logo: '/accounts/email.svg',
		link: 'mailto:hey@hadi.gg',
	},
];

const style = {
	display: 'flex',
	alignItems: 'center',
	gridGap: '1rem',
};

export default function Accounts({ showOnly }: { showOnly?: AccountName[] }) {
	const [showedAccount, setShowedAccounts] = useState(accounts);

	useEffect(() => {
		if (!showOnly) return;

		const newShowedAccounts = accounts.filter((account) =>
			showOnly.includes(account.platform)
		);

		setShowedAccounts(newShowedAccounts);
	}, [showOnly]);

	return (
		<div style={style}>
			{showedAccount.map((account) => (
				<Account key={account.platform} account={account} />
			))}
		</div>
	);
}
