import styles from './Footer.module.scss';
import useTranslation from 'next-translate/useTranslation';
import Accounts from '../../shared/Accounts';

export default function Footer() {
	const { t, lang } = useTranslation('common');

	return <footer className={styles.footer}>
		<Accounts/>

		<div>
			<div className={styles.madeWith}>{t`made-with`}</div>
			<div className={styles.madeWith}>
				بواسطة

				<a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer"
				   className={`hoverable ${styles.margined}`}>Next.js</a>
				الكود على
				<a href="https://github.com/ihadabs/hadi" target="_blank" rel="noopener noreferrer"
				   className={`hoverable ${styles.margined}`}>GitHub</a>
			</div>
		</div>
	</footer>;
}
