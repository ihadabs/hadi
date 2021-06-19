import Account, { IAccount } from './Account';

const accounts: IAccount[] = [
	{ platform: 'linkedIn', logo: '/accounts/linkedin.svg', link: 'https://linkedin.com/in/hadi-albinsaad' },
	{ platform: 'gitHub', logo: '/accounts/github.svg', link: 'https://github.com/ihadabs' },
	{ platform: 'twitter', logo: '/accounts/twitter.svg', link: 'https://twitter.com/i/user/735299448' },
	{ platform: 'email', logo: '/accounts/email.svg', link: 'mailto:hadi.albinsaad@gmail.com' },
];

const style = {
	display: 'flex',
	alignItems: 'center',
	gridGap: '1rem',
};

export default function Accounts() {
	return (
		<div style={style}>
			{accounts.map(account => <Account key={account.platform} account={account}/>)}
		</div>
	);
}
