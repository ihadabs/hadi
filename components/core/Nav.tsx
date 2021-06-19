import Link from 'next/link';
import styles from '../../styles/core/Nav.module.scss';
import useTranslation from 'next-translate/useTranslation';
import NavItem, { INavItem } from './NavItem';

export const navItems: INavItem[] = [
	// { title: 'home', emoji: '🏠', href: '/' },
	{ title: 'about', emoji: '😁', href: '/about' },
	// { title: 'background', emoji: '🧭', href: '/background' },
	{ title: 'consulting', emoji: '📡', href: '/consulting' },
];

export default function Nav() {
	const { t } = useTranslation('common');

	return <div>
		<nav className={styles.nav}>
			<Link href="/">
				<a className="hoverable"><h1>{t`brand`}</h1></a>
			</Link>

			<div style={{ flex: 1 }}/>

			<div className={styles.navItems}>
				{navItems.map((item, index) => <NavItem key={index} item={item}/>)}
			</div>
		</nav>
	</div>;
}
