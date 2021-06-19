import styles from '../../styles/core/Footer.module.scss';
import useTranslation from 'next-translate/useTranslation';
import Accounts from '../shared/Accounts';

export default function Footer() {
	const { t, lang } = useTranslation('common');

	return <footer className={styles.footer}>
		{/*<a className={styles.brand}>*/}
		{/*	<h1>&copy; 2021 {t`brand`}</h1>*/}
		{/*</a>*/}

		{/*<div style={{ flex: 1 }}/>*/}


		<Accounts/>
	</footer>;
}
