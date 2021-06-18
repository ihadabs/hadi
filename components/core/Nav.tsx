import Link from 'next/link';
import styles from '../../styles/core/Nav.module.scss';
import useTranslation from 'next-translate/useTranslation';

export default function Nav() {
	const { t } = useTranslation('common');

	return <nav className={styles.nav}>
		<Link href="/">
			<a className={styles.brand}>
				Hadi Albinsasd
			</a>
		</Link>

		<div style={{ flex: 1 }}/>

		<Link href="/about">
			<a>Home</a>
		</Link>

		<Link href="/about">
			<a>About</a>
		</Link>

		<Link href="/background">
			<a>Background</a>
		</Link>
	</nav>;
}
