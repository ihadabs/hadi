import styles from '../../styles/core/Footer.module.scss';
import useTranslation from 'next-translate/useTranslation';
import Account, { IAccount } from '../shared/Account';

const accounts: IAccount[] = [
	{ platform: 'linkedIn', logo: '/accounts/linkedin.svg', link: 'https://linkedin.com/in/hadi-albinsaad' },
	{ platform: 'gitHub', logo: '/accounts/github.svg', link: 'https://github.com/ihadabs' },
	{ platform: 'twitter', logo: '/accounts/twitter.svg', link: 'https://twitter.com/i/user/735299448' },
	{ platform: 'email', logo: '/accounts/email.svg', link: 'mailto:hadi.albinsaad@gmail.com' },
];

export default function Footer() {
	const { t, lang } = useTranslation('common');

	return <footer className={styles.footer}>
		<a className={styles.brand}>
			<h1>&copy; 2021 {t`brand`}</h1>
		</a>

		<div style={{ flex: 1 }}/>


		<div className={styles.accounts}>
			{accounts.map(account => <Account key={account.platform} account={account}/>)}
		</div>
	</footer>;
}
