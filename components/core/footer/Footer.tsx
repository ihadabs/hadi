import styles from './Footer.module.scss';
import useTranslation from 'next-translate/useTranslation';
import Accounts from '../../shared/Accounts';

export default function Footer() {
	const { t, lang } = useTranslation('common');

	return <footer className={styles.footer}>
		<Accounts/>

		<div className={styles.madeWith}>{t`made-with`}</div>
	</footer>;
}
