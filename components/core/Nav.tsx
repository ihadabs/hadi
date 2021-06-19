import Link from 'next/link';
import styles from '../../styles/core/Nav.module.scss';
import useTranslation from 'next-translate/useTranslation';
import NavItem, { INavItem } from './NavItem';

export default function Nav() {
	const { t } = useTranslation('common');

	const navItems: INavItem[] = [
		{ title: 'home', emoji: '🏠', href: '/' },
		{ title: 'about', emoji: '😁', href: '/about' },
		{ title: 'background', emoji: '🧭', href: '/background' },
		{ title: 'consulting', emoji: '📡', href: '/consulting' },
	];

	return <div>
		<nav className={styles.nav}>
			<Link href="/">
				<a className="hoverable"><h1>{t`brand`}</h1></a>
			</Link>

			<div style={{ flex: 1 }}/>

			{navItems.map((item, index) => <NavItem key={index} item={item}/>)}
		</nav>
	</div>;
}
